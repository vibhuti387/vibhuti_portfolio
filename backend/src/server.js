
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dns from "node:dns";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import contactRoutes from "./routes/contactRoutes.js";
import resumeRoutes from "./routes/ResumeRoutes.js";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Resume folder path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resumePath = path.resolve(__dirname, "../resumes");

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);
app.use(express.json());

// Contact API
app.use("/api/contact", contactRoutes);
app.use("/api/resume", resumeRoutes);
// Home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Backend API is running!",
  });
});

// Test route
app.get("/test-resume", (req, res) => {
  res.send("Resume test route is working!");
});

// Resume routes are handled by ResumeRoutes.js (mounted at /api/resume)

// Start server
async function startServer() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`Backend running at http://localhost:${PORT}`);
      console.log(`Resume folder: ${resumePath}`);
      console.log("Registered test route: /test-resume");
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();