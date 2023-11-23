const router = require('express').Router();
const { getMessages, postMessage } = require('../controllers/messages.controller');
router.get('/', getMessages)
router.post('/', postMessage)
module.exports = router;