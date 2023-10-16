const fs=require('fs');
const path =require('path');

// create folder

// fs.mkdir(path.join(__dirname,"/test"),{},function(err){
//     if(err)throw err;
//     console.log("folder created...");
// })

// create and write to file

// fs.writeFile(path.join(__dirname,"/test",'hello.txt'),'hello world',function(err){
//     if(err)throw err;
//     // file append
//     fs.appendFile(path.join(__dirname,"/test",'hello.txt'),' i love node js',function(err){
//         if(err)throw err;
//         console.log("file written to...");
//     })
    
// })

// fs.readFile(path.join(__dirname,"/test",'hello.txt'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// rename a file 

fs.rename(path.join(__dirname,"/test",'hello.txt'),path.join(__dirname,"/test",'newName.txt'),err=>{
    if(err) throw err;
    console.log('file name changed');
})
 
