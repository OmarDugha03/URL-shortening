import mongoose, {  models, Schema } from "mongoose"

interface IUser {
  name: string;
  email: string;
}

const userSchema = new Schema<IUser>(
    {
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
, {timestamps:true})

const User =  models.User  ||  mongoose.model<IUser>("User" , userSchema);

export default User