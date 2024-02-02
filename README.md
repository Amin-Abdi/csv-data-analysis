# Compare-Datasets

This project provides a utility for comparing two datasets obtained from CSV files. It includes functions to read CSV files, analyze the datasets, and generate comparison results. The comparison results include The count of the keys in each file, The count of the distinct keys in each file, The count of the overlap of all keys between the files (total overlap), and The count of the overlap of distinct keys between the two files (distinct overlap).

## Features
CSV Reader: Reads data from CSV files asynchronously.
Dataset Comparison: Compares two datasets and provides counts of data points, distinct values, and overlapping values.
Test Suite: Includes a test suite using Jest for ensuring the correctness of functions.


## Getting Started
1. Clone the repository:
```bash
   git clone https://github.com/Amin-Abdi/csv-data-analysis.git
```

2. Navigate to the project directory:
```bash
    cd csv-project
```

3. Install dependencies:
```bash
    npm install
```

4. Create a data folder to hold your csv file, just like the sample folder adn replace file1Path and file2Path with the paths to your two csv files.

5. Navigate to the src directory to run the program:
```bash
    cd src
    node app.js
```

6. To run the test, make sure you are in the root directory, then run 
```bash
    npm run test
```