const {
    rejects
} = require('assert');
const fs = require('fs');
const Path = require('path');

function readDirectory(path) {
    return new Promise((resolve, reject) => {
        try {
            let files = fs.readdirSync(path);
            files = files.map(file => Path.join(path, file));
            resolve(files);
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    readDirectory
}