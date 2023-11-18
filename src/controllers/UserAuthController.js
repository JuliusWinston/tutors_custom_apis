const db = require('../../config/database');

const handleCreateAuth = (req, res) => {
  // const {id, email, password, session, parent_id, tutor_id, admin_id, type} = req.body;
  // const authItem = req.body;

  const authItem = {id:"02ebb162-3e1e-4d7b-86f3-5dc2d502ad5d", email: "nodeservermail2@mail.com", password: "node_server_pass", session: "node session", parent_id: null, tutor_id: "node_api_id", admin_id: null, type: "tutor"};
  
  db.one('INSERT INTO authentication(id, email, password, session, parent_id, tutor_id, admin_id, type) VALUES($1, $2, $3, $4, $5, $6, $7, $8) returning id', [authItem.id, authItem.email, authItem.password, authItem.session, authItem.parent_id, authItem.tutor_id, authItem.admin_id, authItem.type])
    .then(data => {
      res.status(201).json({message: "successfully added authentication...", id: data.id});
    })
    .catch(err => {
      res.status(500).json({message: "an error occured ...", error: err});
    })
}

module.exports = {
  handleCreateAuth
};