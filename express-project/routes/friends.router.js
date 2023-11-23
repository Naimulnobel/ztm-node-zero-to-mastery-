const router = require('express').Router();
const friendsController = require('../controllers/friends.comtroller');
router.get('/', friendsController.getFriends)
router.get('/:id', friendsController.getFriend)
router.post('/', friendsController.postFriend)
module.exports = router;