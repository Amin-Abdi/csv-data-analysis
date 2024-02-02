The program should perform the following:

● Allow specification of the files to process
● Calculate and display the following:
- The count of the keys in each file
- The count of the distinct keys in each file
- The count of the overlap of all keys between the files (total overlap)
- The count of the overlap of distinct keys between the two files (distinct overlap)


Additional considerations
- The program should be able to handle different files in csv format
- Consider how the program would work with larger files both in terms of number of
rows/columns of data and number of unique key values
- If approximations are used, ensure the accuracy of the values is appropriately represented
- How you would validate the above requirements are met  //TODO unit tests
- Feel free to ask any questions about this task


- fs.readFile will load the entire file into memory, but fs.createReadStream will read the file in chunks of the size you specify.