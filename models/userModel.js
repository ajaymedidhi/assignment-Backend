const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const UserSchema = require('../schemas/userSchema');

const UserModel = mongoose.model('User', UserSchema);

class User {
  static async register(userData) {
    try {
      const existingUser = await UserModel.findOne({ email: userData.email });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const newUser = new UserModel({
        username: userData.username,
        email: userData.email,
        password: hashedPassword,
      });

      await newUser.save();

      return { message: 'User registered successfully' };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Define other static methods like login, getProfile, getUserEntries here 
  static async login(email, password) {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw new Error('Invalid email or password');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid email or password');
      }

      const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });

      return { token };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getProfile(userId) {
    try {
      const user = await UserSchema.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getUserEntries(userId) {
    try {
      const userEntries = await DiaryEntry.find({ user: ObjectId(userId) });
      return userEntries;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  
}

module.exports = User;
