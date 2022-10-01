//nft.storage API connection created in external file and imported
const main = require('./NftStorageApi');
//importing File prototype from nft.storage package in node modules
const { File } = require('nft.storage');

console.log("Hello From NFT Tester!");

//objects containing full list of all attributes for a specific type(weapon, armour, rank, etc)
const weaponTypes = {
    legendary: {
        percentage: 5,
        models: [
            {
                id: 1,
                type: "weapon",
                name: "Legendary Sword",
                attack: 12
                //image??
            },
            {
                type: "weapon",
                name: "Legendary Mace",
                attack: 12
            },
            {
                type: "weapon",
                name: "Legendary Axe",
                attack: 12
            },
            {
                type: "weapon",
                name: "Legendary Mallet",
                attack: 12
            }
        ]
    },
    exotic: {
        percentage: 15,
        models: [
            {
                type: "weapon",
                name: "Exotic Sword",
                attack: 9
            },
            {
                type: "weapon",
                name: "Exotic Mace",
                attack: 9
            },
            {
                type: "weapon",
                name: "Exotic Axe",
                attack: 9
            },
            {
                type: "weapon",
                name: "Exotic Mallet",
                attack: 9
            }
        ]
    },
    uncommon: {
        percentage: 30,
        models: [
            {
                type: "weapon",
                name: "Uncommon Sword",
                attack: 6
            },
            {
                type: "weapon",
                name: "Uncommon Mace",
                attack: 6
            },
            {
                type: "weapon",
                name: "Uncommon Axe",
                attack: 6
            },
            {
                type: "weapon",
                name: "Uncommon Mallet",
                attack: 6
            }
        ]
    },
    common: {
        percentage: 50,
        models: [
            {
                type: "weapon",
                name: "Common Sword",
                attack: 3
            },
            {
                type: "weapon",
                name: "Common Mace",
                attack: 3
            },
            {
                type: "weapon",
                name: "Common Axe",
                attack: 3
            },
            {
                type: "weapon",
                name: "Common Mallet",
                attack: 3
            }
        ]
    }

};

const armourTypes = {
    legendary: {
        percentage: 5,
        models: [
            {
                type: "armour",
                slot: "chest",
                name: "Legendary Chestplate",
                defence: 12
                //image??
            },
            {
                type: "armour",
                slot: "legs",
                name: "Legendary Legplate",
                defence: 12
            },
            {
                type: "armour",
                slot: "hands",
                name: "Legendary Gauntlets",
                defence: 12
            },
            {
                type: "armour",
                slot: "head",
                name: "Legendary Helmet",
                defence: 12
            }
        ]
    },
    exotic: {
        percentage: 15,
        models: [
            {
                type: "armour",
                slot: "chest",
                name: "Exotic Chestplate",
                defence: 9
            },
            {
                type: "armour",
                slot: "legs",
                name: "Exotic Legplate",
                defence: 9
            },
            {
                type: "armour",
                slot: "hands",
                name: "Exotic Gauntlets",
                defence: 9
            },
            {
                type: "armour",
                slot: "head",
                name: "Exotic Helmet",
                defence: 9
            }
        ]
    },
    uncommon: {
        percentage: 30,
        models: [
            {
                type: "armour",
                slot: "chest",
                name: "Uncommon Chestplate",
                defence: 6
            },
            {
                type: "armour",
                slot: "legs",
                name: "Uncommon Legplate",
                defence: 6
            },
            {
                type: "armour",
                slot: "hands",
                name: "Uncommon Gauntlets",
                defence: 6
            },
            {
                type: "armour",
                slot: "head",
                name: "Uncommon Helmet",
                defence: 6
            }
        ]
    },
    common: {
        percentage: 50,
        models: [
            {
                type: "armour",
                slot: "chest",
                name: "Common Chestplate",
                defence: 3
            },
            {
                type: "armour",
                slot: "legs",
                name: "Common Legplate",
                defence: 3
            },
            {
                type: "armour",
                slot: "hands",
                name: "Common Gauntlets",
                defence: 3
            },
            {
                type: "armour",
                slot: "head",
                name: "Common Helmet",
                defence: 3
            }
        ]
    }

};

const rankTypes = {
    //+4 stam per rank increase
    //+10 attk, +10 def per rank increase
    //base stats range attk(29-59), def(29-59), stam(12-24)
    legendary: {
        percentage: 5,
        model:
        {
            type: "rank",
            value: "warchief",
            attack: 59,
            defence: 59,
            stamina: 24
        }
    },
    exotic: {
        percentage: 15,
        model:
        {
            type: "rank",
            value: "general",
            attack: 49,
            defence: 49,
            stamina: 20
        }
    },
    uncommon: {
        percentage: 30,
        model:
        {
            type: "rank",
            value: "captain",
            attack: 39,
            defence: 39,
            stamina: 16
        }
    },
    common: {
        percentage: 50,
        model:
        {
            type: "rank",
            value: "grunt",
            attack: 29,
            defence: 29,
            stamina: 12
        }
    }

}

const randomRankGenerator = (rankTypes) => {
    const total = 100;
    const random = Math.floor((Math.random() * total));
    // const random = 50;
    //50-99  #50
    if (random > 49 && random < 100) {
        return rankTypes.common.model;
    }
    //20-49  #30
    if (random > 19 && random < 50) {
        return rankTypes.uncommon.model;
    }
    //5-19  #15
    if (random > 4 && random < 20) {
        return rankTypes.exotic.model;
    }
    //0-4  #5
    if (random >= 0 && random < 5) {
        return rankTypes.legendary.model;
    }

    return random
    
};

const randomAttributeGenerator = (attributeTypeObject) => {
    const total = 100;
    const random = Math.floor((Math.random() * total));
    // const random = 50;
    //50-99  #50
    if (random > 49 && random < 100) {
        return attributeTypeObject.common.models[Math.floor(Math.random() * 4)];
    }
    //20-49  #30
    if (random > 19 && random < 50) {
        return attributeTypeObject.uncommon.models[Math.floor(Math.random() * 4)];
    }
    //5-19  #15
    if (random > 4 && random < 20) {
        return attributeTypeObject.exotic.models[Math.floor(Math.random() * 4)];
    }
    //0-4  #5
    if (random >= 0 && random < 5) {
        return attributeTypeObject.legendary.models[Math.floor(Math.random() * 4)];
    }

    return random
    
};

//###########################
//###########################
//GENERATE IPFS OBJECTS AND STORE TO IPFS VIA nft.Storage NPM PACKAGE
//###########################
//########################### 

//set number of objects to be created and stored to ipfs
for(i = 0; i < 10; i++ ) {
    const rank = randomRankGenerator(rankTypes)
    const weaponPeice = randomAttributeGenerator(weaponTypes);
    const armourPeice = randomAttributeGenerator(armourTypes);
  
    const finalNftAttributes = {
        nftType: "orx.v0",
        name: "Orx Nft",
        description: "First collection of Orx Nft Mints",
        image: new File(
            [
              /* data */
            ],
            'orxCard.jpg',
            { type: 'image/jpg' }
        ),
        collection: {
            name: "Orx v.1",
            family: "Eldar Labs Limited",
            mintNumber: i
        },
        attributes: {
            rank: rank,
            weapon: weaponPeice,
            armour: armourPeice,        
        }          
    };
    const finalNft = JSON.stringify(finalNftAttributes);
    const jsonPretty = JSON.stringify(JSON.parse(finalNft),null,2); 
    console.log(jsonPretty);

    //uncomment below to enable actual minting to ipfs
    // main(finalNftAttributes);
    // ipfs://bafyreif547bm6uxifj24exvzimbagtrty7axgwt7bouoymvtmewvragdbe/metadata.json

};

