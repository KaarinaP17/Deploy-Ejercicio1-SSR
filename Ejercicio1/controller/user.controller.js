const { saveUserService } = require('../service/user.service')

const getIndex = (req, res) => {
  try {
    res.render('index');
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }
}

const getForm = (req, res) => {
  try {
    res.render('form');
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }
}

const postSubmit = (req, res) => {
  try {
    const { name, age, email } = req.body;

    const newUser = saveUserService(name, email, age);
    if (name && age && email)
      res.redirect(`/confirm?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&age=${encodeURIComponent(age)}`);
    else {
      res.render('form', { error: 'Validate your data' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }
}

const getConfirm = (req, res) => {
  try {
    const { name, age, email } = req.query;
    res.render('greet', { name, age, email });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  getIndex,
  getForm,
  postSubmit,
  getConfirm
}