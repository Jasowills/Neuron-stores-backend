import * as mongoose from 'mongoose';
import { User } from '../interfaces/user.interface';

export type UserDocument = User & mongoose.Document;

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model<UserDocument>('User', UserSchema);
export { User, UserSchema };
