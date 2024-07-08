const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'local');

// Function to get all file names in a folder
function getFileNames(directoryPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                reject('Unable to scan directory: ' + err);
            } else {
                resolve(files);
            }
        });
    });
}

// Usage
getFileNames(directoryPath)
    .then(files => {
        console.log(files); // Output the array of file names
    })
    .catch(error => {
        console.error(error);
    });
