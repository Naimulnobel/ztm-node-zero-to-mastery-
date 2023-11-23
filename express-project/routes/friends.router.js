const router = require('express').Router();
const { getFriends, getFriend, postFriend, updateFriend, deleteFriend } = require('../controllers/friends.comtroller');
router.get('/', getFriends)
router.get('/:id', getFriend)
router.post('/', postFriend)
router.patch('/:id', updateFriend)
router.delete('/:id', deleteFriend)
module.exports = router;