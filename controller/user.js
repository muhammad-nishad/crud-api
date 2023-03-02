const { default: mongoose } = require('mongoose');
const { validateLength } = require('../helpers/validation');
const userModel = require('../model/user')


//getAllUsers
exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        if (users) return res.status(200).json(users)

    } catch (error) {
        console.log(error);
        res.status(500).json(error)

    }

}

//addingNewUser
exports.addNewUser = async (req, res) => {
    try {
        const { name, gender, dob, city, state, pincode } = req.body
        if (!name || !gender || !dob || !city || !state || !pincode) return res.status(400).json({ message: "plese provide all credentials" })
        if (!validateLength(name, 3, 15)) return res.status(400).json({ messaage: "name must be 3 characters" })
        if (!validateLength(state, 3, 15)) return res.status(400).json({ messaage: "state must be 3 characters" })
        if (!validateLength(city, 3, 15)) return res.status(400).json({ messaage: "city must be 3 characters" })
        if (!validateLength(gender, 3, 15)) return res.status(400).json({ messaage: "gender must be 3 characters" })
        if (!validateLength(pincode, 6, 25)) return res.status(400).json({ messaage: "pincode must be 6 characters" })
        const user = await userModel({ name, gender, dob, city, state, pincode }).save()
        if (user) return res.status(200).json({ message: "user is added successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

//updating a user
exports.updateUser = async (req, res) => {
    try {
        const id = (req.params.id)
        const update = req.body
        console.log(update);
        if (!id) return res.status(400).json({ message: "user id is required" })
        const userid = new mongoose.Types.ObjectId(id)
        const user = await userModel.findOne(userid)
        if (!user) return res.status(400).json({ message: "There is no User is asociated with this User ID" })
        Object.keys(update).forEach(key => {
            user.set(key, update[key]);
        });
        await user.save()
        res.status(200).json({ message: "user updated successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json(error)

    }
}

//deleting a user
exports.deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        if (!user) return res.status(400).json({ message: "There is no user is asociated with this ID" })
        if (user) return res.status(200).json({ messagea: "user is deleted" })

    } catch (error) {
        console.log(error);
        res.status(500).json(error)

    }
}