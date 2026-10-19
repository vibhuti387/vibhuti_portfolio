
// import express from "express";
// import path from "path";
// import fs from "fs";
// import { fileURLToPath } from "url";

// const router = express.Router();

// const currentFile = fileURLToPath(import.meta.url);
// const currentDirectory = path.dirname(currentFile);

// const resumesDirectory = path.resolve(
//   currentDirectory,
//   "../../resumes"
// );

// router.get("/pdf", (req, res) => {
//   const filePath = path.join(resumesDirectory, "Vibhuti_CV.pdf");

//   if (!fs.existsSync(filePath)) {
//     return res.status(404).json({
//       success: false,
//       message: "PDF file not found",
//     });
//   }

//   res.download(filePath, "Vibhuti_CV.pdf");
// });

// router.get("/word", (req, res) => {
//   const filePath = path.join(resumesDirectory, "Vibhuti_CV.docx");

//   if (!fs.existsSync(filePath)) {
//     return res.status(404).json({
//       success: false,
//       message: "Word file not found",
//     });
//   }

//   res.download(filePath, "Vibhuti_CV.docx");
// });

// export default router;
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes folder se backend/resumes tak
const resumeDirectory = path.resolve(__dirname, "../../resumes");

router.get("/pdf", (req, res) => {
  const filePath = path.join(
    resumeDirectory,
    "Vibhuti_CV.pdf"
  );

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: "PDF resume not found.",
    });
  }

  return res.download(filePath, "Vibhuti_CV.pdf");
});

router.get("/word", (req, res) => {
  const filePath = path.join(
    resumeDirectory,
    "Vibhuti_CV.docx"
  );

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: "Word resume not found.",
    });
  }

  return res.download(filePath, "Vibhuti_CV.docx");
});
console.log("Resume directory:", resumeDirectory);
console.log("Files found:", fs.readdirSync(resumeDirectory));

export default router;