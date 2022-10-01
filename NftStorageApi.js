const { NFTStorage, File } = require('nft.storage') ;
require('dotenv').config();


const client = new NFTStorage({ token: process.env.API_KEY });

async function main(data) {
  const metadata = await client.store(data)
  console.log(metadata.url)
  // ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json
}

module.exports = main

