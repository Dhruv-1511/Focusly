import mongoose, { Schema, Document } from "mongoose";

export interface IProblem extends Document {
  id: string; // friendly id like 'focus'
  title: string;
  searchTerms: string[];
  why: string;
  fiveStepFix: string[];
  tools: string[];
  mistakes: string[];
  quickAction: string;
}

const ProblemSchema = new Schema<IProblem>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    searchTerms: [{ type: String }],
    why: { type: String, required: true },
    fiveStepFix: [{ type: String }],
    tools: [{ type: String }],
    mistakes: [{ type: String }],
    quickAction: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Problem || mongoose.model<IProblem>("Problem", ProblemSchema);
