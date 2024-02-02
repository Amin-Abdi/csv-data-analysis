const fs = require('fs');
const csv = require('csv-parser');
const {getComparisonResults} = require('./utils.js');

// const file1Path = '../sample/a.csv';
// const file2Path = '../sample/b.csv';

const file1Path = '../data/A_f.csv';
const file2Path = '../data/B_f.csv';


function readCSV(filePath) {
    return new Promise((resolve, reject) =>{
        const records = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                //Adding all the keys to records
                const key = Object.values(row).filter(value => value !== undefined && value !== null && value !== '');
                records.push(...key);
            })
            .on('end', () => {
                resolve(records);
            })
            .on('error', (error) => {
                reject(error);
            })
    })
}

const compareDatasets = async (file1Path, file2Path) => {
    try {
        const [data1, data2] = await Promise.all([
            readCSV(file1Path),
            readCSV(file2Path)
          ]);

        const comparison = getComparisonResults(data1, data2);
        return comparison;
    } catch (error) {
        console.error('Error:', error.message);
    }
};

compareDatasets(file1Path, file2Path).then((result) => {
    console.log(result);
});


  