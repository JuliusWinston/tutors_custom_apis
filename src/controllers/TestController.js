const db = require('../../config/database');

const handleFetchTutors = (req, res) => {
  db.query('SELECT * FROM tutors')
    .then(data => {
      console.log('Data retrieved:', data);
      res.status(200).json({data});
    })
    .catch(error => {
      console.error('Error executing query:', error);
      res.status(200).json({error: err});
    });
}

const handleAddTutor = (req, res) => {
  const newTutor = {id: "node_api_id", name: "node server", phone: "6789543790", email: "nodeserver@mail.com", address: "node server address", place_of_work: "node work place", country: "Ghana", region: "Oti Region"};

  db.one('INSERT INTO tutors (id, name, phone, email, address, place_of_work, country, region) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning id', [newTutor.id, newTutor.name, newTutor.phone, newTutor.email, newTutor.address, newTutor.place_of_work, newTutor.country, newTutor.region])
    .then(data => {
      res.status(200).json({message: "added successfully...", data});
    })
    .catch(err => {
      res.status(500).json({error: err});
    });
};

module.exports = {
  handleAddTutor,
  handleFetchTutors
};