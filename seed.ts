import fs from "fs";
import path from "path";
import dbConnect from "./src/lib/db";
import Problem from "./src/models/Problem";
import { PROBLEMS } from "./src/data/mock";

// Manual .env loader
const envPath = path.join(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, "utf8");
  envFile.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split("=");
    if (key && valueParts.length > 0) {
      process.env[key.trim()] = valueParts.join("=").trim();
    }
  });
}

async function seed() {
  try {
    console.log("Connecting to database...");
    await dbConnect();

    console.log("Clearing existing problems...");
    await Problem.deleteMany({});

    console.log("Seeding problems...");
    await Problem.insertMany(PROBLEMS);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seed();
