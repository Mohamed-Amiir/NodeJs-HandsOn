// HTTP
//nodemon;
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   console.log(req.method);
//   console.log("Request Received...");

//   switch (req.url) {
//     case "/":
//       {
//         res.write("<h1>This is Home Page</h1>");
//         res.end();
//       }
//       break;
//     case "/football":
//       {
//         const filePath = path.join(__dirname, "football.html");
//         fs.readFile(filePath, (err, data) => {
//           if (err) {
//             // File not found
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.end("File not found");
//           } else {
//             // File found, set the appropriate content type and send the data
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(data);
//           }
//         });
//       }
//       break;
//     default: {
//       res.statusCode = 404; // Not Found
//       res.end();
//     }
//   }
// });

// server.listen(4014, () => {
//   console.log("Listening on port 4014...");
// });

const http = require("http");
const fs = require("fs");
const path = require("path");
const students = [
  { name: "Mohamed", dep: "SC", id: 1 },
  { name: "Ahmed", dep: "SC", id: 2 },
  { name: "Mazen", dep: "SC", id: 3 },
  { name: "Fawzy", dep: "SC", id: 4 },
  { name: "Fathy", dep: "SC", id: 5 },
  { name: "Yasser", dep: "SC", id: 6 },
];
const server = http.createServer((req, res) => {
  // Extract the requested URL and file extension
  const url = req.url === "/football" ? "/football.html" : req.url;

  const ext = path.extname(url).substring(1);

  // Set the content type based on the file extension
  let contentType = "";
  switch (ext) {
    case "html":
      contentType = "text/html";
      break;
    case "css":
      contentType = "text/css";
      break;
    case "jpg":
    case "jpeg":
      contentType = "image/jpeg";
      break;
    case "png":
      contentType = "image/png";
      break;
    case "json":
      contentType = "application/json";
      break;
  }

  // Read the file and send the response
  fs.readFile(path.join(__dirname, url), (err, data) => {
    if (err) {
      // File not found
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
    } else {
      // File found, set the appropriate content type and send the data
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
