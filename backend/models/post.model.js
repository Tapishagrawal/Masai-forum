const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  user_name: {
    type: String,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    maxlength: 100,
    required: true
  },
  category: {
    type: String,
    enum: ['Development', 'Design', 'Innovation', 'Tutorial', 'Business'],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  media: {
    type: [String],
    default: []
  },
  likes: {
    type: [{
      user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    }],
    default: []
  },
  comments: {
    type: [{
      user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      content: {
        type: String,
        required: true
      },
      created_at: {
        type: Date,
        default: Date.now
      }
    }],
    default: []
  }
},{
  versionKey:false,
  timestamps:true
});

const PostModel = mongoose.model('Post', postSchema);

module.exports = PostModel;
