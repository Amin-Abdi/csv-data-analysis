## Overview

This program provides functionality to compare two datasets obtained from CSV files. It includes functions to read CSV files asynchronously, calculate various counts, and generate comparison results.

## Functions

### `getCountMap(data)`

Generates a count map for the input data, where keys are unique values in the data, and values represent the occurrences of each key.

#### Parameters
- `data` (Array): The dataset for which to generate the count map.

#### Returns
- `countMap` (Object): An object representing the count map of the input data.

### `getTotalOverlapCount(countMap1, countMap2)`

Calculates the total overlap count between two count maps, considering the occurrences of common keys.

#### Parameters
- `countMap1` (Object): The first count map.
- `countMap2` (Object): The second count map.

#### Returns
- `totalOverlapCount` (Number): The total overlap count of common keys between the two count maps.

### `getComparisonResults(data1, data2)`

Compares two datasets and generates various counts such as total file counts, distinct counts, and overlap counts. It utilizes the `getCountMap` and `getTotalOverlapCount` functions.

#### Parameters
- `data1` (Array): The first dataset.
- `data2` (Array): The second dataset.

#### Returns
- `comparisonResults` (Object): An object containing counts and comparison results.
