const friends = require('../models/friends.model').friends;
function getFriends(req, res) {
    res.json(friends);
}

function getFriend(req, res) {
    const friendIndex = +req.params.id;
    const friend = friends[friendIndex];
    if (!friend) {
        return res.status(404).json({
            message: 'Friend not found'
        });

    }
    res.status(200).json(friend);
}
function postFriend(req, res) {
    let { name } = req.body;
    if (!name) {
        return res.status(400).json({
            message: 'required field missing'
        });
    }
    const friend = { id: friends.length, name: name };
    friends.push(friend);
    return res.status(201).json(friend);
}
function updateFriend(req, res) {
    const friendIndex = +req.params.id;
    const friend = friends[friendIndex];
    if (!friend) {
        return res.status(404).json({
            message: 'Friend not found'
        });
    }
    let { name } = req.body;
    if (!name) {
        return res.status(400).json({
            message: 'required field missing'
        });
    }
    friend.name = name;
    return res.status(200).json(friend);
}
function deleteFriend(req, res) {
    const friendIndex = +req.params.id;
    const friend = friends[friendIndex];
    if (!friend) {
        return res.status(404).json({
            message: 'Friend not found'
        });
    }
    friends.splice(friendIndex, 1);
    return res.status(200).json(friend);
}
module.exports = {
    getFriends,
    getFriend,
    postFriend,
    updateFriend,
    deleteFriend
}