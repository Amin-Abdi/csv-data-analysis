const {getCountMap, getTotalOverlapCount, add} = require("../src/utils");

describe('Data Processing functions', () => {

    const dataset1 = ['A','B','C','D','D','E','F','F'];
    const dataset2 = ['A','C','C','D','F','F','F','X','Y'];


    describe('getCountMap', () => {
        it('should return the correct count map for each dataset', () => {
            const countMap1 = getCountMap(dataset1);
            const countMap2 = getCountMap(dataset2);
            const expectedMap1 = { A: 1, B: 1, C: 1, D: 2, E: 1, F: 2 };
            const expectedMap2 = { A: 1, C: 2, D: 1, F: 3, X: 1, Y: 1 };
            
            expect(countMap1).toEqual(expectedMap1);
            expect(countMap2).toEqual(expectedMap2);
        })
    });

    describe('calculateTotalOverlap', () => {
        it('Should return the correct total overlap count', () => {
            const countMap1 = { A: 1, B: 1, C: 1, D: 2, E: 1, F: 2 };
            const countMap2 = { A: 1, C: 2, D: 1, F: 3, X: 1, Y: 1 };
            const totalOverlapCount = getTotalOverlapCount(countMap1, countMap2);
            expect(totalOverlapCount).toBe(11);
        });
    });
})