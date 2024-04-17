const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: 'name is required',
        unique: true,
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        minLength: 5,
    },
    password: {
      type: String,
      required: 'A valid password is required',
      //match: [PASSWORD_PATTERN, 'the password is invalid']
    },
    bio: {
        type: String,
        maxlength: 200
    }, 
}, {
    timestamps: true, // por defecto created_at y updated_at
    toJSON: {
      transform: (doc, ret) => {
          ret.id = doc._id;
          delete ret._id;
          delete ret.__v;
          delete ret.password;
  
          return ret
      }
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;