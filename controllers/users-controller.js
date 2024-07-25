const User = require("../models/Users");

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
            const user = await User.findOne({_id: req.params.userId});

            if (!user) {
                return res.status(404).json({message: "No user with this ID"});
            }
            res.json(user);
         } catch (error) {
            res.status(500).json(error);
         }
         
    },

    async postNewUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    

    async updateUser(req, res) {
        try {
           const dbUserData = await User.findOneAndUpdate(req.body)
                res.json(dbUserData);
            
    } catch (error) {
        res.status(500).json(error);

    }
},

    async deleteUser(req, res) {
       try {
        const dbUserData = await User.findOneAndDelete(req.body)
        res.json(dbUserData);
       } catch (error) {
        res.status(500).json(error)
       }
    },
}

