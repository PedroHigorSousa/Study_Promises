const fs = require('fs');

module.exports.researchFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, data) => {
            if (err) throw err;
            resolve(data);
        })

    })
}
