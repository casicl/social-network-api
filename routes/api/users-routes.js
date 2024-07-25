//get all users
//get single user
//post new user
//put to update user by _id
//delete to remove user by _id
//bonus: remove user's associated thoughts when deleted, some kind of cascade??

const router = require("express").Router();

const {
    getAllUsers,
    getSingleUser,
    postNewUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require("../../controllers/users-controller");

router.route('/').get(getAllUsers).post(postNewUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);


module.exports = router;