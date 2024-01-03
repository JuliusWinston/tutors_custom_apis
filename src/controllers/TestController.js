const { generateRandomPassword } = require('../utils');

const db = require('../../config/database');

const handleTestSignUp = async (req, res) => {
  try {
    res.status(200).send("updated testing sign up");
  } catch (err) {
    res.status(500).json(err);
  }
}

const handleTestModule = async (req, res) => {
  try {
    const pass = generateRandomPassword({ length: 12, includeUppercase: true, includeLowercase: true, includeDigits: true, includeSpecialChars: true });
    if(!pass || pass === null) return res.status(500).send('there was an error generating random password');
    res.status(200).json(pass);
  } catch (err) {
    res.status(500).json(err);
  }
}

const handleFetchTutors = (req, res) => {
  db.query('SELECT * FROM tutors')
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(200).send(err);
    });
}

const handleThrowawayTests = (req, res) => {
  try {
    const message = "testMessage";
    const random = Math.floor(Math.random() * message.length);
    res.status(200).send(message[random]);
  } catch (err) {
    res.status(500).send(err);
  }
}

const handleAddTutor = (req, res) => {
  const newTutor = {id: "node_api_id", name: "node server", phone: "6789543790", email: "nodeserver@mail.com", address: "node server address", place_of_work: "node work place", country: "Ghana", region: "Oti Region"};

  db.one('INSERT INTO tutors (id, name, phone, email, address, place_of_work, country, region) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning id', [newTutor.id, newTutor.name, newTutor.phone, newTutor.email, newTutor.address, newTutor.place_of_work, newTutor.country, newTutor.region])
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

module.exports = {
  handleThrowawayTests,
  handleTestSignUp,
  handleTestModule,
  handleAddTutor,
  handleFetchTutors
};