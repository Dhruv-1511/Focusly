import mongoose, { Schema, Document } from "mongoose";

export interface IStudyTask {
  time: string;
  task: string;
  type: "Focus" | "Break" | "Revision" | "Mock";
}

export interface IStudyPlan extends Document {
  userId: mongoose.Types.ObjectId;
  date: string; // YYYY-MM-DD
  daily: IStudyTask[];
}

const StudyPlanSchema = new Schema<IStudyPlan>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: String, required: true },
    daily: [
      {
        time: { type: String, required: true },
        task: { type: String, required: true },
        type: {
          type: String,
          enum: ["Focus", "Break", "Revision", "Mock"],
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.StudyPlan ||
  mongoose.model<IStudyPlan>("StudyPlan", StudyPlanSchema);
