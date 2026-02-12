import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  image?: string;
  password?: string;
  role: "student" | "admin";
  stats: {
    hoursStudied: number;
    focusStreak: number;
    xp: number;
    level: number;
    badges: string[];
  };
}

export interface IUserDocument extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUserDocument>(
  {
    name: { 
      type: String, 
      required: true, 
      trim: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      trim: true, 
      lowercase: true,
      index: true
    },
    image: { 
      type: String 
    },
    password: { 
      type: String 
    },
    role: { 
      type: String, 
      enum: ["student", "admin"], 
      default: "student" 
    },
    stats: {
      hoursStudied: { type: Number, default: 0 },
      focusStreak: { type: Number, default: 0 },
      xp: { type: Number, default: 0 },
      level: { type: Number, default: 1 },
      badges: [{ type: String }],
    },
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const User: Model<IUserDocument> = 
  mongoose.models.User || 
  mongoose.model<IUserDocument>("User", UserSchema);

export default User;

