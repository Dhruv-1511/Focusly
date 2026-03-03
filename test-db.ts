import { MongoClient } from 'mongodb';
import fs from "fs";
import path from "path";

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

const uri = process.env.MONGODB_URI;

async function test() {
  if (!uri) {
    console.error('MONGODB_URI is not defined');
    process.exit(1);
  }
  console.log('Testing connection to:', uri.replace(/:[^:@]+@/, ':****@'));
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('Successfully connected to MongoDB');
    await client.close();
  } catch (err) {
    console.error('Connection failed:', err);
    process.exit(1);
  }
}

test();
