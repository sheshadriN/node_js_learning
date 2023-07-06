// const fs = require('fs');
//for write
fs.writeFileSync('./temp.txt', ' fuckinggggggg', { flag: "a" }, (error) => {
    if (error) {
        console.error('Error writing to file:', error);
    } else {
        console.log('Successfully written to file.');
    }
});
//for write

fs.readFileSync('./temp.txt', (err, data) => {
    if (err) {
        console.log("error occured");
    } else {
        console.log(data.toString());
    }
})


//to check exist or not

if (fs.existsSync("./file")) {
    console.log("file exist");
}

//to create and delte a folder

if (fs.existsSync('./folder')) {
    fs.rmdir('./folder', (err) => {
        console.log("Folder deleted");
    })
} else {
    fs.mkdir('./folder', (err) => {
        console.log("folder created")
    })
}

//path

const s = require('./index2.js')
console.log(s.arr)



const path = require('path')
    // console.log(path);
const join = path.join('/file/', 'folder')
const ab = path.resolve(__dirname, '/content', 'folder', 'text.txt')
console.log(path.basename(ab));