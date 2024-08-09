import mongoose from 'mongoose'

const connectToDB = async(url) =>{
    try{
        console.log('connected to database');
        await mongoose.connect(url)

    }
    catch(err){
        console.log(err);
    }
}

export default connectToDB;