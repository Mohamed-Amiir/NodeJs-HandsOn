// const fs = require("fs");
// const path = require("path");
// const studentPath = path.join(
//   path.dirname(process.mainModule.filename),
//   "data",
//   "students.json"
// );
// module.exports = class Student {
//   constructor(nm, dp) {
//     this.name = nm;
//     this.dep = dp;
//   }

//   saveStudent() {
//     // students.push(this);
//     // 1) read from file
//     fs.readFile(studentPath, (err, info) => {
//       let Students = [];
//       if (!err) {
//         Students = JSON.parse(info);
//         // 2) update data
//         this.id = Students.length + 1;
//         Students.push(this);
//         // 3) write into file
//         fs.writeFile(studentPath, JSON.stringify(Students), (err) => {
//           console.log("Error Occured");
//         });
//       }
//     });
//   }
//   static fetchAllStudents(callback) {
//     fs.readFile(studentPath, (err, info) => {
//       if (!err) {
//         callback(JSON.parse(info));
//       } else callback([]);
//     });
//   }
// };
