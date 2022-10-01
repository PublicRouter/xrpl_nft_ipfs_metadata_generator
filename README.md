# xrpl_nft_ipfs_metadata_generator

File: index.js-
- generate ipfs template and populate with metadata structures created from generateAllPossibleCombinations.js file. Then store ipfs template onto IPFS via our nft.Storage API and uses filecoin to guarantee data is persistent and never deleted or lost from IPFS.

File: NftStorageApi.js - 
- Initializes the nft.Storage API from npm package and exports as main() to be used in index.js

---

File: generateAllPossibleCombinations.js -
- Takes in any amount of metadata trait lists and generates all possible combinations of each list combined into a whole.
```js 
//INPUT: ([objects],[objects],[objects]) 
// --> All arrays of items we want to pull from
//OUTPUT: [ [{},{},{}], [{},{},{}] ]
// --> array of arrays containing one object from each input array, AND all arrays having unique object combinations
// --> AKA generating all possible combinations of the input arrays elements
```