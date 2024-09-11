const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname, 'crud')

const filePath=`${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'This is simple file')

// fs.readFile(filePath, 'utf8',(err,item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath,' .file name is apple',(err)=>{
//     if(!err) console.log("file name is update")
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is rename")
// })

fs.unlinkSync(`${dirPath}/fruit.txt`,(err)=>{
    if(!err) console.log("file is delete")
})