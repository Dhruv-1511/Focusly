import mongoose, { Schema, Document, Model } from "mongoose";

export interface IStudyTask {
  time: string;
  task: string;
  type: "Focus" | "Break" | "Revision" | "Mock";
}

export interface IStudyPlan {
  userId: mongoose.Types.ObjectId;
  date: string; // YYYY-MM-DD
  daily: IStudyTask[];
}

export interface IStudyPlanDocument extends IStudyPlan, Document {
  createdAt: Date;
  updatedAt: Date;
}

const StudyPlanSchema = new Schema<IStudyPlanDocument>(
  {
    userId: { 
      type: Schema.Types.ObjectId, 
      ref: "User", 
      required: true,
      index: true
    },
    date: { 
      type: String, 
      required: true,
      index: true 
    },
    daily: [
      {
        time: { type: String, required: true, trim: true },
        task: { type: String, required: true, trim: true },
        type: {
          type: String,
          enum: ["Focus", "Break", "Revision", "Mock"],
          required: true,
        },
      },
    ],
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Compound index for faster lookups of a user's plan on a specific date
StudyPlanSchema.index({ userId: 1, date: 1 }, { unique: true });

const StudyPlan: Model<IStudyPlanDocument> = 
  mongoose.models.StudyPlan || 
  mongoose.model<IStudyPlanDocument>("StudyPlan", StudyPlanSchema);

export default StudyPlan;

