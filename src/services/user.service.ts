import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    const isValidObjectId = Types.ObjectId.isValid(id);
    if (!isValidObjectId) {
      return null; // Return null or handle the invalid ObjectId error
    }

    return await this.userModel.findById(id).exec();
  }

  async signUp(user: User): Promise<{ user: User; token: string }> {
    const newUser = new this.userModel(user);
    await newUser.save();

    const token = sign({ userId: newUser._id }, 'neuron-stores'); // Replace 'your-secret-key' with your actual secret key

    return { user: newUser, token };
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ user: User; token: string }> {
    const user = await this.userModel.findOne({ email, password }).exec();

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const token = sign({ userId: user._id }, 'neuron-stores'); // Replace 'your-secret-key' with your actual secret key

    return { user, token };
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id).exec();
  }

  async update(id: string, user: User): Promise<User> {
    return await this.userModel
      .findByIdAndUpdate(id, user, { new: true })
      .exec();
  }
}
