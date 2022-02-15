import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL =`mongodb://akcs:<password>@inshortclone-shard-00-00.ceu5v.mongodb.net:27017,inshortclone-shard-00-01.ceu5v.mongodb.net:27017,inshortclone-shard-00-02.ceu5v.mongodb.net:27017/ANSHUL'S ORG - 2020-09-30?ssl=true&replicaSet=atlas-gtul52-shard-0&authSource=admin&retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;