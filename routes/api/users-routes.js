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

router.route('/').get(getAllUsers);
router.route("/").post(postNewUser)

router.route("/:userId").get(getSingleUser);
router.route("/:userId").put(updateUser)
router.route("/:userId/").delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend);
router.route("/:userId/friends/:friendId").delete(deleteFriend);


module.exports = router;



