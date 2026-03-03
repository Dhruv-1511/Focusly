import fs from "fs";
import path from "path";

// Manual .env loader - Must run BEFORE any imports that use process.env
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
    // Dynamic imports to ensure process.env is ready
    const { default: dbConnect } = await import("./src/lib/db");
    const { default: Problem } = await import("./src/models/Problem");
    const { PROBLEMS } = await import("./src/data/mock");

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
