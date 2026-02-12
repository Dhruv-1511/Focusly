import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Interface representing a Problem's data structure.
 */
export interface IProblem {
  id: string; // Friendly unique identifier (e.g., 'focus', 'memory')
  title: string;
  category: string;
  searchTerms: string[];
  why: string;
  fiveStepFix: string[];
  tools: string[];
  mistakes: string[];
  quickAction: string;
  isFeatured: boolean;
}

/**
 * Interface representing a Problem document in MongoDB.
 */
export interface IProblemDocument extends IProblem, Document {
  createdAt: Date;
  updatedAt: Date;
}

const ProblemSchema = new Schema<IProblemDocument>(
  {
    id: { 
      type: String, 
      required: true, 
      unique: true, 
      trim: true, 
      lowercase: true,
      index: true 
    },
    title: { 
      type: String, 
      required: true, 
      trim: true 
    },
    category: { 
      type: String, 
      default: "General", 
      trim: true,
      index: true
    },
    searchTerms: [{ 
      type: String, 
      trim: true 
    }],
    why: { 
      type: String, 
      required: true, 
      trim: true 
    },
    fiveStepFix: [{ 
      type: String, 
      trim: true 
    }],
    tools: [{ 
      type: String, 
      trim: true 
    }],
    mistakes: [{ 
      type: String, 
      trim: true 
    }],
    quickAction: { 
      type: String, 
      trim: true 
    },
    isFeatured: { 
      type: Boolean, 
      default: false 
    },
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Ensure that even if we use the friendly 'id' field, 
// Mongoose doesn't get confused with its internal virtual 'id'
ProblemSchema.set('id', true);

const Problem: Model<IProblemDocument> = mongoose.models.Problem || mongoose.model<IProblemDocument>("Problem", ProblemSchema);

export default Problem;

