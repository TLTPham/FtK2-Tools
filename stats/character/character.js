import { specialAbilities } from "@/stats/misc/specialAbilities";
import { item } from "@/stats/item/item";

export const character = {
  hunter: {
    name: 'Hunter',
    specialAbilities: [
      specialAbilities.eliteSneak,
      specialAbilities.eliteAmbush,
      specialAbilities.calledShot,
      specialAbilities.energyBoost,
    ],
    defences: {
      armor: 0,
      resistance: 0,
      evasion: 4,
    },
    starterEquipment: [
      item.weapon.simpleBow,
      item.consumable.tinderPouch,
      item.consumable.godsBeard,
      item.consumable.safetyStone,
    ],
    stats: {
      strength: 71,
      vitality: 57,
      intelligence: 55,
      awareness: 83,
      talent: 71,
      speed: 79,
      luck: 55,
    }
  },
  blacksmith: {
    name: 'Blacksmith',
    specialAbilities: [
      specialAbilities.steadfast
    ],
    defences: {
      armor: 2,
      resistance: 0,
      evasion: 0,
    },
    starterEquipment: [
      item.weapon.smithHammer,
      item.shield.simpleShield,
      item.consumable.tinderPouch,
      item.consumable.godsBeard,
      item.consumable.safetyStone,
    ],
    stats: {
      strength: 79,
      vitality: 83,
      intelligence: 55,
      awareness: 65,
      talent: 71,
      speed: 63,
      luck: 55,
    }
  },
  scholar: {
    name: 'Scholar',
    specialAbilities: [
      specialAbilities.refocus,
      specialAbilities.findScroll,
    ],
    defences: {
      armor: 0,
      resistance: 2,
      evasion: 0,
    },
    starterEquipment: [
      item.weapon.dustyBook,
      item.consumable.tinderPouch,
      item.consumable.godsBeard,
      item.consumable.safetyStone,
    ],
    stats: {
      strength: 55,
      vitality: 55,
      intelligence: 83,
      awareness: 71,
      talent: 79,
      speed: 73,
      luck: 55,
    }
  },
  stablehand: {
    name: 'Stablehand',
    specialAbilities: [
      specialAbilities.hardwork
    ],
    defences: {
      armor: 0,
      resistance: 0,
      evasion: 4,
    },
    starterEquipment: [
      item.weapon.woodenSword,
      item.consumable.tinderPouch,
      item.consumable.godsBeard,
      item.consumable.safetyStone,
    ],
    stats: {
      strength: 79,
      vitality: 65,
      intelligence: 55,
      awareness: 73,
      talent: 61,
      speed: 83,
      luck: 55,
    }
  },
  herbalist: {
    name: 'Herbalist',
    specialAbilities: [
      specialAbilities.findHerb,
      specialAbilities.partyHeal,
    ],
    defences: {
      armor: 0,
      resistance: 2,
      evasion: 0,
    },
    starterEquipment: [
      item.weapon.walkingStick,
      item.consumable.tinderPouch,
      item.consumable.godsBeard,
      item.consumable.safetyStone,
    ],
    stats: {
      strength: 55,
      vitality: 63,
      intelligence: 81,
      awareness: 81,
      talent: 69,
      speed: 67,
      luck: 55,
    }
  },
  friar: {
    name: 'Friar',
    specialAbilities: [
      specialAbilities.cheers,
      specialAbilities.findAlcohol,
      specialAbilities.ironBelly,
    ],
    defences: {
      armor: 1,
      resistance: 1,
      evasion: 0,
    },
    starterEquipment: [
      item.consumable.tinderPouch,
      item.consumable.godsBeard,
      item.consumable.safetyStone,
    ],
    stats: {
      strength: 73,
      vitality: 81,
      intelligence: 81,
      awareness: 55,
      talent: 61,
      speed: 65,
      luck: 55,
    }
  },
  alchemist: {
    name: 'Alchemist',
    specialAbilities: [
      specialAbilities.smokeFlee,
      specialAbilities.makePotion,
    ],
    defences: {
      armor: 0,
      resistance: 1,
      evasion: 0,
    },
    starterEquipment: [
      item.consumable.tinderPouch,
      item.consumable.godsBeard,
      item.consumable.safetyStone,
    ],
    stats: {
      strength: 55,
      vitality: 59,
      intelligence: 81,
      awareness: 65,
      talent: 75,
      speed: 81,
      luck: 55,
    }
  },
  woodcutter: {
    name: 'Woodcutter',
    specialAbilities: [
      specialAbilities.justice,
    ],
    defences: {
      armor: 0,
      resistance: 0,
      evasion: 0,
    },
    starterEquipment: [
      item.consumable.tinderPouch,
      item.consumable.godsBeard,
      item.consumable.safetyStone,
    ],
    stats: {
      strength: 83,
      vitality: 69,
      intelligence: 55,
      awareness: 79,
      talent: 59,
      speed: 71,
      luck: 55,
    }
  },
  pathfinder: {
    name: 'Pathfinder',
    specialAbilities: [
      specialAbilities.survey,
      specialAbilities.scout,
    ],
    defences: {
      armor: 0,
      resistance: 0,
      evasion: 4,
    },
    starterEquipment: [
      item.consumable.tinderPouch,
      item.consumable.godsBeard,
      item.consumable.safetyStone,
    ],
    stats: {
      strength: 55,
      vitality: 63,
      intelligence: 61,
      awareness: 81,
      talent: 81,
      speed: 75,
      luck: 55,
    }
  },
  shepherd: {
    name: 'Shepherd',
    specialAbilities: [
      specialAbilities.herd,
    ],
    defences:{
      armor: 1,
      resistance:0,
      evasion: 2,
    },
    starterEquipment: [
      item.consumable.tinderPouch,
      item.consumable.godsBeard,
      item.consumable.safetyStone,
    ],
    stats: {
      strength: 55,
      vitality: 81,
      intelligence: 75,
      awareness: 81,
      talent: 55,
      speed: 69,
      luck: 55,
    }
  },
  farmer: {
    name: 'Farmer',
    specialAbilities: [
      specialAbilities.buildScarecrow,
    ],
    defences: {
      armor: 2,
      resistance: 0,
      evasion: 0,
    },
    starterEquipment: [
      item.consumable.tinderPouch,
      item.consumable.godsBeard,
      item.consumable.safetyStone,
    ],
    stats: {
      strength: 79,
      vitality: 79,
      intelligence: 77,
      awareness: 79,
      talent: 61,
      speed: 65,
      luck: 55,
    }
  },
  hobo: {
    name: 'Hobo',
    specialAbilities: [],
    defences: {
      armor: 0,
      resistance: 0,
      evasion: 0,
    },
    starterEquipment: [
      item.consumable.tinderPouch,
      item.consumable.godsBeard,
      item.consumable.safetyStone,
    ],
    stats: {
      strength: 75,
      vitality: 75,
      intelligence: 75,
      awareness: 75,
      talent: 75,
      speed: 75,
      luck: 55,
    }
  },
}