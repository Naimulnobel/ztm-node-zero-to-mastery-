const router = require('express').Router();
const { getFriends, getFriend, postFriend } = require('../controllers/friends.comtroller');
router.get('/', getFriends)
router.get('/:id', getFriend)
router.post('/', postFriend)
module.exports = router;