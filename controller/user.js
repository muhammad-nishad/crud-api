const { default: mongoose } = require('mongoose');
const userModel = require('../model/user')


exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        if (users) return res.status(200).json(users)

    } catch (error) {
        console.log(error);
        res.status(500).json(error)

    }

}

exports.addNewUser = async (req, res) => {
    try {
    const { name, gender, dob, city, state, pincode } = req.body
    
        if (!name || !gender || !dob || !city || !state || !pincode) return res.status(400).json({ message: "plese provide all credentials" })
        const user = await userModel({ name, gender, dob, city, state, pincode }).save()
        if (user) return res.status(200).json({ message: "user is added successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
exports.updateUser = async (req, res) => {
    try {
        const id = (req.params.id)
        console.log(req.body.name);
        if (!id) return res.status(400).json({ message: "user id is required" })
        const userid = new mongoose.Types.ObjectId(id)
        const user=await userModel.findOne(userid)
        if(!user)return res.status(400).json({message:"There is no User is asociated with this User ID"})
        const updatedData=await user.updateOne({
            $set:{
                name:req.body.name
            }
        })
        console.log(user);
        // return res.status(200).json(user)

    } catch (error) {
        console.log(error);
        res.status(500).json(error)

    }
}
exports.deleteUser=async(req,res)=>{
    try {
        const id = (req.params.id)
        const user = await userModel.findByIdAndDelete(req.params.id);
        if(!user) return res.status(400).json({message:"There is no user is asociated with this ID"})
        if(user) return res.status(200).json({messagea:"user is deleted"})
        console.log(user);

        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
        
    }
}