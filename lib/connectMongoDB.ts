import mongoose from 'mongoose'

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string)
    console.log('Connected to MONGODB')
  } catch (error) {
    console.log('Error connecting to database: this is ', error)
  }
}
