const User = require("../models/Users");
const Thought = require("../models/Thoughts");

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {

        }
    },

    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId}).populate("friends");
    
            if (!user) {
                return res.status(404).json({ message: "No user with this ID" });
            }
    
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async postNewUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    

    async updateUser(req, res) {
        try {
           const user= await User.findOneAndUpdate(req.body)
                res.json(user);
            
    } catch (error) {
        res.status(500).json(error);

    }
},

    async deleteUser(req, res) {
       try {
        const user = await User.findOneAndDelete(req.body)
        res.json(user);
       } catch (error) {
        res.status(500).json(error)
       }
    },

    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$addToSet: { friends: req.params.friendId}},
                {runValidators: true, new: true}
            )
            // ).populate("username");

        if (!user) {
            return res.status(404).json({message: "User not found"});
        }
        const username = user.username;

        res.json({user, username});
        } catch (error) {
            res.status(500).json(error);
        }
       
    },

   async deleteFriend(req, res) {
    try {
        const user = await User.findByIdAndUpdate(
            {_id: req.params.userId},
            {$pull: {friend: {friendId: req.params.friendId}}},
            {runValidators: true, new: true}
        );
        if (!user) {
            return res.status(404).json({message: "No user with that ID"});
        }
        res.json(user);
    } catch (error) {
        res.status(500).json(error);

    }
   },
   
    
}

