
const axios = require('axios');
const buildNewMember = require('../service/constructor-mailingList.js');

exports.mailingList = (req,res) => {
  res.render('mailingList/mailingList', {
    layout: 'main-mailingList'
  })
}

exports.sendNewMember = (req, res) => {

  const mailConstructor = buildNewMember(req.body);

  axios(mailConstructor)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  })
}