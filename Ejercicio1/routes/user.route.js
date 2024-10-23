const { getIndex, getForm, postSubmit, getConfirm } = require('../controller/user.controller');
const router = require('express').Router();

router.get('/', getIndex);
router.get('/form', getForm);
router.post('/submit', postSubmit);
router.get('/confirm', getConfirm);

module.exports = router;