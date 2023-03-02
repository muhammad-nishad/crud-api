const mongoose=require('mongoose')

const connectDb=async()=>{
    try {
        const connect=mongoose.connect('mongodb://localhost:27017/crypton-tech')
        console.log('db connected');
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports=connectDb