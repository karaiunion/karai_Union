'use server'
import mongoose from "mongoose";

const Connection = async () => {
    const mongoDB = process.env.MONGODB_URI
    const ConnectToDB = async () => {
        try {
            if (mongoDB) {
                await mongoose.connect(mongoDB);
                const connectionStatus = mongoose.connection.readyState
                console.log(connectionStatus + 'DB connected Sucessfully')
            }
            else {
                console.log('the mongoDB is not connecting check the connection')
            }
        } catch (error) {
            console.log('unable to connect DB check the URl' + error)
        }
    }
    ConnectToDB()
}

export default Connection;