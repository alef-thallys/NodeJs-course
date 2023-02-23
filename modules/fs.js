const fs = require("fs");
const path = require("path");

// Create a folder
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) return console.log("Erro:", error);
  console.log("Folder successfully created!");
});

// Create a file
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node! ",
  (error) => {
    if (error) return console.log("Erro:", error);
    console.log("File successfully created!");
  }
);

// Add to a file
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello world! ",
  (error) => {
    if (error) return console.log("Erro:", error);
    console.log("Successfully modified file!");
  }
);

// Read files
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf-8",
  (error, data) => {
    if (error) return console.log("Erro:", error);
    console.log(data);
  }
);
