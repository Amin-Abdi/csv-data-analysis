function getCountMap(data) {
    return data.reduce((countMap, key) => {
        countMap[key] = (countMap[key] || 0) + 1;
        return countMap;
    }, {});
}

function getTotalOverlapCount(countMap1, countMap2){
    const totalOverlapCount = Object.keys(countMap1).reduce((sum, key) => {
        if (countMap2.hasOwnProperty(key)) {
            const product = countMap1[key] * countMap2[key];
            return sum + product;
        }
        return sum;
    }, 0);   

    return totalOverlapCount;
}

function add(a, b) {
    return a + b;
}

function getComparisonResults(data1, data2) {
    const countFile1 = data1.length;
    const countFile2 = data2.length;
    const distinctCountFile1 = new Set(data1).size;
    const distinctCountFile2 = new Set(data2).size;

    //Creating a set out of the data so I can take advantage of the constant-time lookups
    const data2Set = new Set(data2);
    const distinctOverlapCount = new Set(data1.filter((key) => data2Set.has(key))).size;
      
    //Create a map to represent the number of occurrences for each unique key.
    const countMap1 = getCountMap(data1);
    const countMap2 = getCountMap(data2);
    
    //calculates the overlap using both maps.
    const totalOverlapCount = getTotalOverlapCount(countMap1, countMap2);

    return {
        countFile1,
        countFile2,
        distinctCountFile1,
        distinctCountFile2,
        distinctOverlapCount, 
        totalOverlapCount
    } 
}
  


module.exports = {getCountMap, getTotalOverlapCount, add, getComparisonResults};