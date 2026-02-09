import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
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
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    password: { type: String },
    role: { type: String, enum: ["student", "admin"], default: "student" },
    stats: {
      hoursStudied: { type: Number, default: 0 },
      focusStreak: { type: Number, default: 0 },
      xp: { type: Number, default: 0 },
      level: { type: Number, default: 1 },
      badges: [{ type: String }],
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
