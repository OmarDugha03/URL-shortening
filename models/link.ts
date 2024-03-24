import mongoose, { models, Schema } from 'mongoose'

const linkSchema = new Schema(
  {
    link: {
      type: String,
      require: true,
      author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    }
  },
  { timestamps: true }
)

const Short = models.Short || mongoose.model('Short', linkSchema)
export default Short
