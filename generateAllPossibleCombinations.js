//10 backgrounds: legendary(2), rare(2), uncommon(2), common(4)
const background = [
    {
        eid: 1,
        type: "background",
        rarity: "legendary",
        name: "Lightning Strikes",
        stamina: 6
    },
    {
        eid: 2,
        type: "background",
        rarity: "legendary",
        name: "Mystic Forefront",
        stamina: 6
    },
    {
        eid: 3,
        type: "background",
        rarity: "rare",
        name: "Overgrown Valley",
        stamina: 5
    },
    {
        eid: 4,
        type: "background",
        rarity: "rare",
        name: "Lost in Peril",
        stamina: 5
    },
    {
        eid: 5,
        type: "background",
        rarity: "uncommon",
        name: "Beaten Battered Battleground",
        stamina: 3
    },
    {
        eid: 6,
        type: "background",
        rarity: "uncommon",
        name: "Rolling Hills Volcano",
        stamina: 3
    },
    {
        eid: 7,
        type: "background",
        rarity: "common",
        name: "Basic Volcano Valley",
        stamina: 2
    },
    {
        eid: 8,
        type: "background",
        rarity: "common",
        name: "Basic Burning Forrest",
        stamina: 2
    },
    {
        eid: 9,
        type: "background",
        rarity: "common",
        name: "Basic Middle Earth",
        stamina: 2
    },
    {
        eid: 10,
        type: "background",
        rarity: "common",
        name: "Basic Mountain View",
        stamina: 2
    }
   
];
//20 weapons: legendary(1), rare(3), uncommon(6), common(10)
const weapons = [
    {
        eid: 1,
        type: "weapon",
        name: "Legendary Mallet",
        attack: 12
    },
    {
        eid: 2,
        type: "weapon",
        name: "Rare Mace",
        attack: 9
    },
    {
        eid: 3,
        type: "weapon",
        name: "Rare Axe",
        attack: 9
    },
    {
        eid: 4,
        type: "weapon",
        name: "Rare Mallet",
        attack: 9
    },
    {
        eid: 5,
        type: "weapon",
        name: "Uncommon Sword",
        attack: 6
    },
    {
        eid: 6,
        type: "weapon",
        name: "Uncommon Mace",
        attack: 6
    },
    {
        eid: 7,
        type: "weapon",
        name: "Uncommon Axe",
        attack: 6
    },
    {
        eid: 8,
        type: "weapon",
        name: "Uncommon Mallet",
        attack: 6
    },
    {
        eid: 9,
        type: "weapon",
        name: "Uncommon Sword",
        attack: 6
    },
    {
        eid: 10,
        type: "weapon",
        name: "Uncommon Pike",
        attack: 6
    },
    {
        eid: 11,
        type: "weapon",
        name: "Common Pike",
        attack: 3
    },
    {
        eid: 12,
        type: "weapon",
        name: "Common Club",
        attack: 3
    },
    {
        eid: 13,
        type: "weapon",
        name: "Common Pummel",
        attack: 3
    },
    {
        eid: 14,
        type: "weapon",
        name: "Common Nunchuck",
        attack: 3
    },
    {
        eid: 15,
        type: "weapon",
        name: "Common Mace",
        attack: 3
    },
    {
        eid: 16,
        type: "weapon",
        name: "Common Cleaver",
        attack: 3
    },
    {
        eid: 17,
        type: "weapon",
        name: "Common Dagger",
        attack: 3
    },
    {
        eid: 18,
        type: "weapon",
        name: "Common Sword",
        attack: 3
    },
    {
        eid: 19,
        type: "weapon",
        name: "Common Axe",
        attack: 3
    },
    {
        eid: 20,
        type: "weapon",
        name: "Common Mallet",
        attack: 3
    }
];
//20 chestplates: legendary(1), rare(3), uncommon(6), common(10)
const chestplates = [
    {
        eid: 1,
        type: "armour",
        slot: "chest",
        rarity: "legendary",
        name: "Onyx Crystal Chestplate",
        defence: 12
    },
    {
        eid: 2,
        type: "armour",
        slot: "chest",
        rarity: "rare",
        name: "Mithril Chestplate 1",
        defence: 9
    },
    {
        eid: 3,
        type: "armour",
        slot: "chest",
        rarity: "rare",
        name: "Mithril Chestplate 2",
        defence: 9
    },
    {
        eid: 4,
        type: "armour",
        slot: "chest",
        rarity: "rare",
        name: "Mithril Chestplate 3",
        defence: 9
    },
    {
        eid: 5,
        type: "armour",
        slot: "chest",
        rarity: "uncommon",
        name: "Steel Chestplate 1",
        defence: 6
    },
    {
        eid: 6,
        type: "armour",
        slot: "chest",
        rarity: "uncommon",
        name: "Steel Chestplate 2",
        defence: 6
    },
    {
        eid: 7,
        type: "armour",
        slot: "chest",
        rarity: "uncommon",
        name: "Steel Chestplate 3",
        defence: 6
    },
    {
        eid: 8,
        type: "armour",
        slot: "chest",
        rarity: "uncommon",
        name: "Steel Chestplate 4",
        defence: 6
    },
    {
        eid: 9,
        type: "armour",
        slot: "chest",
        rarity: "uncommon",
        name: "Steel Chestplate 5",
        defence: 6
    },
    {
        eid: 10,
        type: "armour",
        slot: "chest",
        rarity: "uncommon",
        name: "Steel Chestplate 6",
        defence: 6
    },
    {
        eid: 11,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 1",
        defence: 3
    },
    {
        eid: 12,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 2",
        defence: 3
    },
    {
        eid: 13,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 3",
        defence: 3
    },
    {
        eid: 14,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 4",
        defence: 3
    },
    {
        eid: 15,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 5",
        defence: 3
    },
    {
        eid: 16,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 6",
        defence: 3
    },
    {
        eid: 17,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 7",
        defence: 3
    },
    {
        eid: 18,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 8",
        defence: 3
    },
    {
        eid: 19,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 9",
        defence: 3
    },
    {
        eid: 20,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 10",
        defence: 3
    }
];
//20 legplates: legendary(1), rare(3), uncommon(6), common(10)
const legplates = [
    {
        eid: 1,
        type: "armour",
        rarity: "legendary",
        name: "Onyx Crystal Legplates",
        defence: 12
    },
    {
        eid: 2,
        type: "armour",
        rarity: "rare",
        name: "Mithril Legplates 1",
        defence: 9
    },
    {
        eid: 3,
        type: "armour",
        rarity: "rare",
        name: "Mithril Legplates 2",
        defence: 9
    },
    {
        eid: 4,
        type: "armour",
        rarity: "rare",
        name: "Mithril Legplates 3",
        defence: 9
    },
    {
        eid: 5,
        type: "armour",
        rarity: "uncommon",
        name: "Steel Legplates 1",
        defence: 6
    },
    {
        eid: 6,
        type: "armour",
        rarity: "uncommon",
        name: "Steel Legplates 2",
        defence: 6
    },
    {
        eid: 7,
        type: "armour",
        rarity: "uncommon",
        name: "Steel Legplates 3",
        defence: 6
    },
    {
        eid: 8,
        type: "armour",
        rarity: "uncommon",
        name: "Steel Legplates 4",
        defence: 6
    },
    {
        eid: 9,
        type: "armour",
        rarity: "uncommon",
        name: "Steel Legplates 5",
        defence: 6
    },
    {
        eid: 10,
        type: "armour",
        rarity: "uncommon",
        name: "Steel Legplates 6",
        defence: 6
    },
    {
        eid: 11,
        type: "armour",
        rarity: "common",
        name: "Leather Legplates 1",
        defence: 3
    },
    {
        eid: 12,
        type: "armour",
        rarity: "common",
        name: "Leather Legplates 2",
        defence: 3
    },
    {
        eid: 13,
        type: "armour",
        rarity: "common",
        name: "Leather Legplates 3",
        defence: 3
    },
    {
        eid: 14,
        type: "armour",
        rarity: "common",
        name: "Leather Legplates 4",
        defence: 3
    },
    {
        eid: 15,
        type: "armour",
        rarity: "common",
        name: "Leather Legplates 5",
        defence: 3
    },
    {
        eid: 16,
        type: "armour",
        rarity: "common",
        name: "Leather Legplates 6",
        defence: 3
    },
    {
        eid: 17,
        type: "armour",
        rarity: "common",
        name: "Leather Legplates 7",
        defence: 3
    },
    {
        eid: 18,
        type: "armour",
        rarity: "common",
        name: "Leather Legplates 8",
        defence: 3
    },
    {
        eid: 19,
        type: "armour",
        rarity: "common",
        name: "Leather Legplates 9",
        defence: 3
    },
    {
        eid: 20,
        type: "armour",
        rarity: "common",
        name: "Leather Legplates 10",
        defence: 3
    }
];

//########################
//########################
//########################

//10 backgrounds: legendary(2), rare(2), uncommon(2), common(4)
const background2 = [
    {
        eid: 1,
        type: "background",
        rarity: "legendary",
        name: "Lightning Strikes",
        stamina: 6
    },
    {
        eid: 2,
        type: "background",
        rarity: "legendary",
        name: "Mystic Forefront",
        stamina: 6
    },
    {
        eid: 3,
        type: "background",
        rarity: "rare",
        name: "Overgrown Valley",
        stamina: 5
    },
    {
        eid: 4,
        type: "background",
        rarity: "rare",
        name: "Lost in Peril",
        stamina: 5
    },
    {
        eid: 5,
        type: "background",
        rarity: "uncommon",
        name: "Beaten Battered Battleground",
        stamina: 3
    },
    {
        eid: 6,
        type: "background",
        rarity: "uncommon",
        name: "Rolling Hills Volcano",
        stamina: 3
    },
    {
        eid: 7,
        type: "background",
        rarity: "common",
        name: "Basic Volcano Valley",
        stamina: 2
    },
    {
        eid: 8,
        type: "background",
        rarity: "common",
        name: "Basic Burning Forrest",
        stamina: 2
    },
    {
        eid: 9,
        type: "background",
        rarity: "common",
        name: "Basic Middle Earth",
        stamina: 2
    },
    {
        eid: 10,
        type: "background",
        rarity: "common",
        name: "Basic Mountain View",
        stamina: 2
    }
   
];
//10 weapons: legendary(1), rare(2), uncommon(3), common(4)
const weapons2 = [
    {
        eid: 1,
        type: "weapon",
        name: "Legendary Mallet",
        attack: 12
    },
    {
        eid: 2,
        type: "weapon",
        name: "Rare Mace",
        attack: 9
    },
    {
        eid: 3,
        type: "weapon",
        name: "Rare Axe",
        attack: 9
    },
    {
        eid: 4,
        type: "weapon",
        name: "Uncommon Mallet",
        attack: 6
    },
    {
        eid: 5,
        type: "weapon",
        name: "Uncommon Sword",
        attack: 6
    },
    {
        eid: 6,
        type: "weapon",
        name: "Uncommon Mace",
        attack: 6
    },
    {
        eid: 7,
        type: "weapon",
        name: "Common Axe",
        attack: 3
    },
    {
        eid: 8,
        type: "weapon",
        name: "Common Mallet",
        attack: 3
    },
    {
        eid: 9,
        type: "weapon",
        name: "Common Sword",
        attack: 3
    },
    {
        eid: 10,
        type: "weapon",
        name: "Common Pike",
        attack: 3
    }
];
//10 chestplates: legendary(1), rare(2), uncommon(3), common(4)
const chestplates2 = [
    {
        eid: 1,
        type: "armour",
        slot: "chest",
        rarity: "legendary",
        name: "Onyx Crystal Chestplate",
        defence: 12
    },
    {
        eid: 2,
        type: "armour",
        slot: "chest",
        rarity: "rare",
        name: "Mithril Chestplate 1",
        defence: 9
    },
    {
        eid: 3,
        type: "armour",
        slot: "chest",
        rarity: "rare",
        name: "Mithril Chestplate 2",
        defence: 9
    },
    {
        eid: 4,
        type: "armour",
        slot: "chest",
        rarity: "uncommon",
        name: "Steel Chestplate 1",
        defence: 6
    },
    {
        eid: 5,
        type: "armour",
        slot: "chest",
        rarity: "uncommon",
        name: "Steel Chestplate 2",
        defence: 6
    },
    {
        eid: 6,
        type: "armour",
        slot: "chest",
        rarity: "uncommon",
        name: "Steel Chestplate 3",
        defence: 6
    },
    {
        eid: 7,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 7",
        defence: 3
    },
    {
        eid: 8,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 8",
        defence: 3
    },
    {
        eid: 9,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 9",
        defence: 3
    },
    {
        eid: 10,
        type: "armour",
        slot: "chest",
        rarity: "common",
        name: "Leather Chestplate 10",
        defence: 3
    }
];
//10 legplates: legendary(1), rare(2), uncommon(3), common(4)
const legplates2 = [
    {
        eid: 1,
        type: "armour",
        rarity: "legendary",
        name: "Onyx Crystal Legplates",
        defence: 12
    },
    {
        eid: 2,
        type: "armour",
        rarity: "rare",
        name: "Mithril Legplates 1",
        defence: 9
    },
    {
        eid: 3,
        type: "armour",
        rarity: "rare",
        name: "Mithril Legplates 2",
        defence: 9
    },
    {
        eid: 4,
        type: "armour",
        rarity: "uncommon",
        name: "Steel Legplates 1",
        defence: 6
    },
    {
        eid: 5,
        type: "armour",
        rarity: "uncommon",
        name: "Steel Legplates 2",
        defence: 6
    },
    {
        eid: 6,
        type: "armour",
        rarity: "uncommon",
        name: "Steel Legplates 3",
        defence: 6
    },
    {
        eid: 7,
        type: "armour",
        rarity: "common",
        defence: 3
    },
    {
        eid: 8,
        type: "armour",
        rarity: "common",
        name: "Leather Legplates 2",
        defence: 3
    },
    {
        eid: 9,
        type: "armour",
        rarity: "common",
        name: "Leather Legplates 3",
        defence: 3
    },
    {
        eid: 10,
        type: "armour",
        rarity: "common",
        name: "Leather Legplates 4",
        defence: 3
    }
];

// INPUT:
// const backgrounds = [1,...10];
// const swords = [1,...20];
// const chestplates = [1,...20];
// const legplates = [1,...20];
// EXPECTED OUTPUT:
// {
//     sword: "",
//     chestplate: "",
//     legplate: "",
//     background: ""
// }

//##############################
//##############################
//##############################

//INPUT: ([objects],[objects],[objects]) 
// --> All arrays of items we want to pull from

//OUTPUT: [ [{},{},{}], [{},{},{}] ]
// --> array of arrays containing one object from each input array, AND all arrays having unique object combinations
// --> AKA generating all possible combinations of the input arrays elements

function cartesian(...args) {
    var r = [], max = args.length-1;
    function helper(arr, i) {
        for (var j=0, l=args[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(args[i][j]);
            if (i==max)
                r.push(a);
            else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
}

console.log(cartesian(background2, weapons2, chestplates2));