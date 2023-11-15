import mongoose from 'mongoose'

let isConnected=false; //variable to check connection status

export const connectToDB= async()=>{
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URL) return console.log("MONGO_DB not found");
    if(isConnected) return console.log('Already connected to MongoDB');
    
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected=true;
    } catch (error) {
        console.log(error);
        
    }
    
}
