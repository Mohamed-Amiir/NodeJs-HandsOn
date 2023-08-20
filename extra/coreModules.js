// OS

// const os = require("os");
// console.log(`Host Name : ${os.hostname()}`);
// console.log(`Arch : ${os.arch()}`);
// console.log(`Platform : ${os.platform()}`);
// console.log(`Type : ${os.type()}`);
// console.log(`Total Memory : ${os.totalmem()}`);
// console.log(`Free Memory : ${os.freemem()}`);

// PATH

// const path = require("path");
// var pathInfo = path.parse(__filename);
// console.log(pathInfo);

//FileSystem module

// const fs = require("fs");

//Reading syncrounous
// var data = fs.readFileSync("./message.txt");
// console.log(data.toString());

//Reading Asyncrounouse
// fs.readFile("./message.txt","utf-8",function(err,info){
// if(err)
// console.log("Error Occured",err);
// else
// console.log(info);
// });

/*//Writing

// fs.writeFile("./newFile.txt","Hello from the new file",function(err){
//     if(err)
//     console.log("Error Occured");
// });
// var data = fs.readFile("./newFile.txt","utf-8",function(err,info){
//     if(err)
//     console.log("Error Occured,Reading");
//     else
//     console.log(info);
// })

// fs.appendFile("./newFile.txt","Hala Madrid !",function(err){
//   if(err)
//   console.log("Error Occured");
// });

// fs.unlink("./newFile.txt",function(err){
//     if(err)
//     console.log("Error Occured");
// })

// fs.unlink("./newFile", (err) => {
//   if (err) {
//     console.log("Error Occured");
//   }
// });
// fs.unlink("./newFile.txt", (err) => {
//   if (err) {
//     console.log("Error Occured");
//   }
// });*/

/*writing in files like syncrounous but without using syncrounous*/
/*fs.writeFile("./newFile.txt","Madriiid Madriiiid Madriiiiiid\n",(err)=>{
  if(err){
    console.log("Error Occured");
  }
  else{
    fs.appendFile("./newFile.txt","HALA MADRIIID...\n",(err)=>{
      if(err){
        console.log("Error Occured");
      }
    });
    fs.appendFile("./newFile.txt","Y Nada Maaas...\n",(err)=>{
      if(err){
        console.log("Error Occured");
      }
    });
    fs.appendFile("./newFile.txt","....Y Nada Maaas...\n",(err)=>{
      if(err){
        console.log("Error Occured");
      }
    });
    fs.appendFile("./newFile.txt","Hala Madriiiiid.\n ",(err)=>{
      if(err){
        console.log("Error Occured");
      }
    });
  }
});*/

/*// DIRCTYRES
//makedir
//readdir
//rmdir  (NOT STABLE)

// fs.mkdir("./NewDir", (err) => {
//   if (err) console.log("Error Occured");
//   else {
//     process.chdir("./NewDir");
//     fs.writeFile(
//       "./insideNewDir.txt",
//       "Helloo there from a file in the new dir",
//       (err) => {
//         if (err) console.log("Error Occured");
//       }
//     );
//   }
// });

// fs.readdir("./NewDir",(err,files)=>{
//   if(err)
//   console.log("Error Occured");
//   else
//   console.log(files);
// })*/

