import { moves } from "@/stats/item/moves";
import { specialAbilities } from "@/stats/misc/specialAbilities";
import { itemStat } from "@/stats/item/itemStat";
import { Item } from "@/stats/item/class";

export const item = {
  bodyArmor: {
    1: new Item({
      name: '',
      rarity: '',
      type: 'bodyArmor',
      itemStats: {
        baseStats: []
      },
      specialAbilities: [],
    }),

    cloakOfPurity: new Item({
      name: 'Cloak of Purity',
      rarity: 'rare',
      type: 'bodyArmor',
      itemStats: {
        baseStats: [
          itemStat.armor(1),
          itemStat.resistance(1),
          itemStat.evasion(6),
          itemStat.regen(2),
          itemStat.immunity('Poison'),
          itemStat.immunity('Curse'),
        ]
      },
    }),
    rippedShirt: new Item({
      name: 'Ripped Shirt',
      type: 'bodyArmor',
      itemStats: {
        baseStats: [
          itemStat.evasion(10),
        ]
      },
    }),
    paddedJacket: new Item({
      name: 'Padded Jacket',
      type: 'bodyArmor',
      itemStats: {
        baseStats: [
          itemStat.armor(1),
          itemStat.resistance(1),
        ]
      },
    }),
    queensThugArmor: new Item({
      name: 'Queen\'s Thug Armor',
      rarity: 'uncommon',
      type: 'bodyArmor',
      itemStats: {
        baseStats: [
          itemStat.armor(3),
          itemStat.resistance(1),
          itemStat.regen(1),
        ]
      },
    }),
    splintVest: new Item({
      name: 'Splint Vest',
      type: 'bodyArmor',
      itemStats: {
        baseStats: [
          itemStat.armor(3),
          itemStat.resistance(1),
          itemStat.characterStat(1, 'vitality'),
        ]
      },
    }),
    tatteredRobe: new Item({
      name: 'Tattered Robe',
      type: 'bodyArmor',
      itemStats: {
        baseStats: [
          itemStat.armor(1),
          itemStat.resistance(3),
          itemStat.characterStat(1, 'intelligence'),
          itemStat.immunity('Curse')
        ]
      },
      specialAbilities: [],
    }),
    tunic: new Item({
      name: 'Tunic',
      type: 'bodyArmor',
      itemStats: {
        baseStats: [
          itemStat.armor(1),
          itemStat.resistance(1),
          itemStat.evasion(15),
          itemStat.characterStat(1, 'awareness'),
        ]
      },
      specialAbilities: [
        specialAbilities.eliteSneak,
      ],
    }),
    vest: new Item({
      name: 'Vest',
      type: 'bodyArmor',
      itemStats: {
        baseStats: [
          itemStat.armor(2),
          itemStat.resistance(2),
          itemStat.characterStat(1, 'strength'),
          itemStat.immunity('Bleed')
        ]
      },
    }),
    undercoat: new Item({
      name: 'Undercoat',
      type: 'bodyArmor',
      itemStats: {
        baseStats: [
          itemStat.armor(1),
          itemStat.resistance(2),
          itemStat.evasion(8),
          itemStat.gold(5),
          itemStat.characterStat(1, 'talent'),
        ]
      },
    }),
  },
  boots: {
    1: new Item({
      name: '',
      rarity: '',
      type: 'boots',
      itemStats: {
        baseStats: []
      },
      specialAbilities: [],
    }),

    boots: new Item({
      name: 'Boots',
      type: 'boots',
      itemStats: {
        baseStats: [
          itemStat.armor(1),
          itemStat.evasion(6),
          itemStat.immunity('Entangle'),
        ]
      },
    }),
    lightBoots: new Item({
      name: 'Light Boots',
      type: 'boots',
      itemStats: {
        baseStats: [
          itemStat.evasion(5),
          itemStat.immunity('Entangle'),
        ]
      },
    }),
    queensBowmanBoots: new Item({
      name: 'Queen\'s Bowman Boots',
      rarity: 'uncommon',
      type: 'boots',
      itemStats: {
        baseStats: [
          itemStat.armor(2),
          itemStat.evasion(1),
          itemStat.regen(1),
          itemStat.immunity('Move'),
        ]
      },
    }),
    scholarWraps: new Item({
      name: 'Scholar Wraps',
      type: 'boots',
      itemStats: {
        baseStats: [
          itemStat.resistance(2)
        ]
      },
    }),
    wornBoots: new Item({
      name: 'Worn Boots',
      type: 'boots',
      itemStats: {
        baseStats: [
          itemStat.armor(1),
          itemStat.resistance(1),
        ]
      },
      specialAbilities: [],
    }),
  },
  consumable: {
    1: new Item({
      name: '',
      rarity: '',
      desc: '',
      type: 'consumable',
    }),

    aralia: new Item({
      name: 'Aralia',
      rarity: 'uncommon',
      desc: 'Using Aralia in combat purifies the user and provides immunity.',
      type: 'consumable'
    }),
    blackCandy: new Item({
      name: 'Black Candy',
      rarity: 'rare',
      desc: 'Permanent increase in Physical Damage. {1}',
      type: 'consumable'
    }),
    dancingNettle: new Item({
      name: 'Dancing Nettle',
      desc: 'Using Dancing Nettle will give 2 additional secondary actions.',
      type: 'consumable',
    }),
    deadLotus: new Item({
      name: 'Dead Lotus',
      rarity: 'rare',
      desc: 'This plant will curse those who use it but also stave off death for a short time.',
      type: 'consumable',
    }),
    fahrulMule: new Item({
      name: 'Fahrul Mule',
      rarity: 'uncommon',
      desc: 'Drinking this mysterious concoction will temporarily boost attack damage by +15 and inflicts Daze.',
      type: 'consumable',
    }),
    firesilk: new Item({
      name: 'Firesilk',
      rarity: 'rare',
      desc: 'Using firesilk restores the user to perfect health.',
      type: 'consumable',
    }),
    godsBeard: new Item({
      name: 'God\'s Beard',
      desc: 'Using godsbeard will replenish 15HP. {Scales with level}',
      type: 'consumable'
    }),
    goldenRoot: new Item({
      name: 'Golden Root',
      desc: 'Using golden root will replenish +3 focus.',
      type: 'consumable',
    }),
    hagsBane: new Item({
      name: 'Hag\'s Bane',
      rarity: 'uncommon',
      desc: 'Using hag\'s bane will relieve the user of all curses',
      type: 'consumable',
    }),
    hermitGrass: new Item({
      name: 'Hermit Grass',
      desc: 'Use it during combat to gain Evasion.',
      type: 'consumable'
    }),
    hildebrantsReserve: new Item({
      name: 'Hildebrant\'s Reserve',
      rarity: 'uncommon',
      desc: 'Drinking this fine wine will restore you to perfect health and cause confusion',
      type: 'consumable',
    }),
    hildebrantsWine: new Item({
      name: 'Hildebrant\'s Wine',
      rarity: 'uncommon',
      desc: 'Drinking this fine wine will restore you to perfect health and cause confusion',
      type: 'consumable',
    }),
    honeyedSponge: new Item({
      name: 'Honeyed Sponge',
      rarity: 'rare',
      desc: 'Permanently increase in Resistance. {1}',
      type: 'consumable'
    }),
    ironSpirit: new Item({
      name: 'Iron Spirit',
      rarity: 'uncommon',
      desc: 'Drinking this drink will temporarily increase your Armor and Resistance by 10 and reduce your Evasion by 100.',
      type: 'consumable',
      itemStats: {}
    }),
    lockpicks: new Item({
      name: 'Lockpicks',
      rarity: 'uncommon',
      desc: 'Necessary tools for opening most locks.',
      type: 'consumable',
    }),
    mead: new Item({
      name: 'Mead',
      rarity: 'uncommon',
      desc: 'Consuming this drink temporarily numbs pain and fully negates all damage from the next attack and inflicts Daze.',
      type: 'consumable',
    }),
    magicMushrooms: new Item({
      name: 'Magic Mushrooms',
      rarity: 'rare',
      desc: 'Some Fahrulian mushrooms have the ability to ward off magic when consumed. Others will kill you outright in a matter of seconds.',
      type: 'consumable',
    }),
    midnightNettle: new Item({
      name: 'Midnight Nettle',
      rarity: 'rare',
      desc: 'Using Midnight Nettle in combat grants 1 additional Primary Action.',
      type: 'consumable',
    }),
    moonshine: new Item({
      name: 'Moonshine',
      rarity: 'uncommon',
      desc: 'Consuming this drink reflects damage from the next attack and inflicts Stun.',
      type: 'consumable',
    }),
    panax: new Item({
      name: 'Panax',
      desc: 'Using this herb to cure poison, bleeding, disease, and all elemental effects.',
      type: 'consumable',
    }),
    purifyScroll: new Item({
      name: 'Purify Scroll',
      desc: 'Clears all corrupted in combat within the given radius. Provides temporary immunity within the given radius.',
      type: 'consumable',
      itemStats: {}
    }),
    repairKit: new Item({
      name: 'Repair Kit',
      rarity: 'uncommon',
      desc: 'Handy tools that allow you to repair your vehicles on the go!',
      type: 'consumable',
      itemStats: {}
    }),
    rootsworth: new Item({
      name: 'Rootsworth',
      rarity: 'uncommon',
      desc: 'Drinking this delicious tea grants 1 additional primary action and causes confusion.',
      type: 'consumable',
    }),
    safetyStone: new Item({
      name: 'Safety Stone',
      desc: 'Using the Safety Stone teleports you back to the last visited town... for a price.',
      type: 'consumable',
    }),
    saltyJawbreaker: new Item({
      name: 'Salty Jawbreaker',
      rarity: 'rare',
      desc: 'Permanently increase in Armor. {1}',
      type: 'consumable'
    }),
    scholarsWort: new Item({
      name: 'Scholar\'s Wort',
      desc: 'Use this herb to gain +5 XP. {Scales with level}',
      type: 'consumable',
    }),
    spicedRum: new Item({
      name: 'Spiced Rum',
      rarity: 'uncommon',
      desc: 'Drinking this tasty rum will temporarily boost Armor and Resistance by +50 and cause confusion.',
      type: 'consumable',
    }),
    spiritTaffy: new Item({
      name: 'Spirit Taffy',
      rarity: 'rare',
      desc: 'Permanent increase in Magic Damage. {1}',
      type: 'consumable'
    }),
    steelSpirit: new Item({
      name: 'Steel Spirit',
      rarity: 'uncommon',
      desc: 'Drinking this drink will temporarily boost Armor and Resistance by 15 and reduce your Evasion by 100.',
      type: 'consumable',
      itemStats: {}
    }),
    teleportScroll: new Item({
      name: 'Teleport Scroll',
      desc: 'Allows the user to instantly travel to an empty land hex withing a given distance. (determined by the user\'s intelligence).',
      type: 'consumable',
    }),
    tinderPouch: new Item({
      name: 'Tinder Pouch',
      rarity: 'uncommon',
      desc: 'Use to create a camp at which all party members may heal and regain focus.',
      type: 'consumable',
    }),
    treasureMap: new Item({
      name: 'Treasure Map',
      rarity: 'rare',
      desc: 'X marks the spot.',
      type: 'consumable'
    }),
    visionScroll: new Item({
      name: 'Vision Scroll',
      desc: 'Removes clouds and finds all hidden locations within the given radius on the overworld map.',
      type: 'consumable',
    }),
  },
  gloves: {
    1: new Item({
      name: '',
      rarity: '',
      type: 'gloves',
      itemStats: {
        baseStats: []
      },
      specialAbilities: [],
    }),

    lightGloves: new Item({
      name: 'Light Gloves',
      type: 'gloves',
      itemStats: {
        baseStats: [
          itemStat.criticalChance(5),
        ]
      }
    }),
    gloves: new Item({
      name: 'Gloves',
      type: 'gloves',
      itemStats: {
        baseStats: [
          itemStat.criticalChance(4),
          itemStat.immunity('Poison')
        ]
      },
      specialAbilities: [],
    }),
    oldGloves: new Item({
      name: 'Old Gloves',
      type: 'gloves',
      itemStats: {
        baseStats: [
          itemStat.armor(1),
          itemStat.attack(1),
        ]
      },
    }),
    queensBowmanGloves: new Item({
      name: 'Queen\'s Bowman Gloves',
      rarity: 'uncommon',
      type: 'gloves',
      itemStats: {
        baseStats: [
          itemStat.armor(2),
          itemStat.attack(1),
          itemStat.regen(1)
        ]
      },
      specialAbilities: [],
    }),
    scholarGloves: new Item({
      name: 'Scholar Gloves',
      type: 'gloves',
      itemStats: {
        baseStats: [
          itemStat.resistance(1),
          itemStat.magic(1),
        ]
      },
      specialAbilities: [],
    }),
    splintGlove: new Item({
      name: 'Splint Glove',
      type: 'gloves',
      itemStats: {
        baseStats: [
          itemStat.armor(2),
        ]
      },
    }),
  },
  helmet: {
    1: new Item({
      name: '',
      rarity: '',
      type: 'helmet',
      itemStats: {
        baseStats: []
      },
      specialAbilities: [],
    }),

    bycocket: new Item({
      name: 'Bycocket',
      type: 'helmet',
      itemStats: {
        baseStats: [
          itemStat.armor(1),
          itemStat.evasion(4),
          itemStat.immunity('Ambush')
        ]
      },
      specialAbilities: [],
      moves: [],
    }),
    dentedHelmet: new Item({
      name: 'Dented Helmet',
      type: 'helmet',
      itemStats: {
        baseStats: [
          itemStat.armor(1),
          itemStat.immunity('Stun'),
        ]
      }
    }),
    focusingHat: new Item({
      name: 'Focusing Hat',
      rarity: 'rarer',
      type: 'helmet',
      itemStats: {
        baseStats: [
          itemStat.regen(2),
          itemStat.magic(2),
          itemStat.focus(2),
        ]
      },
      specialAbilities: [
        specialAbilities.refocus,
      ],
    }),
    merchantHat: new Item({
      name: 'Merchant Hat',
      rarity: 'rare',
      type: 'helmet',
      itemStats: {
        baseStats: [
          itemStat.gold(10),
          itemStat.xp(10),
          itemStat.movement(1),
          itemStat.findDistance(1)
        ]
      },
    }),
    oldHelm: new Item({
      name: 'Old Helm',
      type: 'helmet',
      itemStats: {
        baseStats: [
          itemStat.armor(1),
          itemStat.resistance(1),
          itemStat.immunity('Daze')
        ]
      },
    }),
    roundHelm: new Item({
      name: 'Round Helm',
      type: 'helmet',
      itemStats: {
        baseStats: [
          itemStat.armor(2),
          itemStat.immunity('Stun'),
        ]
      },
      specialAbilities: [],
    }),
    queensBowmanCap: new Item({
      name: 'Queen\'s Bowman Cap',
      rarity: 'uncommon',
      type: 'helmet',
      itemStats: {
        baseStats: [
          itemStat.armor(2),
          itemStat.evasion(4),
          itemStat.regen(1)
        ]
      },
      specialAbilities: [],
    }),
    queensThugHelm: new Item({
      name: 'Queen\'s Thug Helm',
      rarity: 'uncommon',
      type: 'helmet',
      itemStats: {
        baseStats: [
          itemStat.armor(2),
          itemStat.regen(1),
        ]
      },
    }),
    scholarCap: new Item({
      name: 'Scholar Cap',
      type: 'helmet',
      itemStats: {
        baseStats: [
          itemStat.resistance(2),
          itemStat.focus(1),
          itemStat.immunity('Confuse')
        ]
      },
    }),
    simpleHat: new Item({
      name: 'Simple Hat',
      type: 'helmet',
      itemStats: {
        baseStats: [
          itemStat.resistance(1),
          itemStat.evasion(2),
          itemStat.focus(1),
        ]
      },
      specialAbilities: [],
    }),
  },
  pipe: {
    1: new Item({
      name: '',
      desc: '',
      type: 'pipe',
    }),
    calmingPipe: new Item({
      name: 'Calming Pipe',
      desc: 'This pipe increases Focus by 1 when used with any herb.',
      type: 'pipe',
    }),
  },
  shield: {
    1: new Item({
      name: '',
      rarity: '',
      type: 'shield',
      itemStats: {
        rollStat: 'vitality',
        traits: [],
        baseStats: []
      },
      specialAbilities: [],
      family: 'shield',
      moves: [],
    }),
    crudeShield: new Item({
      name: 'Crude Shield',
      type: 'shield',
      itemStats: {
        rollStat: 'vitality',
        traits: [],
        baseStats: [
          itemStat.armor(1),
        ]
      },
      specialAbilities: [
        specialAbilities.guard,
      ],
      family: 'shield',
      moves: [
        moves.tauntVitality2,
      ],
    }),
    simpleShield: new Item({
      name: 'Simple Shield',
      type: 'shield',
      itemStats: {
        rollStat: 'vitality',
        traits: [],
        baseStats: [
          itemStat.armor(1),
        ]
      },
      specialAbilities: [
        specialAbilities.guard,
      ],
      family: 'shield',
      moves: [
        moves.tauntVitality2,
      ],
    }),
    queensHeater: new Item({
      name: 'Queen\'s Heater',
      rarity: 'uncommon',
      type: 'shield',
      itemStats: {
        rollStat: 'vitality',
        traits: [],
        baseStats: [
          itemStat.resistance(3),
          itemStat.xp(15)
        ]
      },
      specialAbilities: [
        specialAbilities.guard,
      ],
      family: 'shield',
      moves: [
        moves.tauntVitality2,
        moves.armorUp1
      ],
    }),
    queensKiteShield: new Item({
      name: 'Queen\'s Kite Shield',
      rarity: 'uncommon',
      type: 'shield',
      itemStats: {
        rollStat: 'vitality',
        traits: [],
        baseStats: [
          itemStat.armor(2),
          itemStat.resistance(2),
          itemStat.xp(15),
          itemStat.characterStat(-5, 'speed'),
          itemStat.immunity('Move')
        ]
      },
      specialAbilities: [
        specialAbilities.guard,
      ],
      family: 'shield',
      moves: [
        moves.tauntVitality2,
        moves.protectSelf1,
      ],
    }),
    woodenBuckler: new Item({
      name: 'Wooden Buckler',
      type: 'shield',
      itemStats: {
        rollStat: 'speed',
        traits: [],
        baseStats: [
          itemStat.evasion(7),
        ]
      },
      specialAbilities: [
        specialAbilities.guard,
      ],
      family: 'shield',
      moves: [
        moves.tauntSpeed2,
        moves.evadeUp1
      ],
    }),
    woodenHeater: new Item({
      name: 'Wooden Heater',
      type: 'shield',
      itemStats: {
        rollStat: 'vitality',
        traits: [],
        baseStats: [
          itemStat.resistance(2),
        ]
      },
      specialAbilities: [
        specialAbilities.guard,
      ],
      family: 'shield',
      moves: [
        moves.tauntVitality2,
        moves.resistUp1
      ],
    }),
    woodenRoundShield: new Item({
      name: 'Wooden Round Shield',
      type: 'shield',
      itemStats: {
        rollStat: 'vitality',
        traits: [],
        baseStats: [
          itemStat.armor(2),
        ]
      },
      specialAbilities: [
        specialAbilities.guard,
      ],
      family: 'shield',
      moves: [
        moves.tauntVitality2,
        moves.armorUp1
      ],
    }),
    woodenTowerShield: new Item({
      name: 'Wooden Tower Shield',
      type: 'shield',
      itemStats: {
        rollStat: 'vitality',
        traits: [],
        baseStats: [
          itemStat.armor(1),
          itemStat.resistance(1),
          itemStat.partyArmor(1),
          itemStat.characterStat(-5, 'speed'),
          itemStat.immunity('Move')
        ]
      },
      specialAbilities: [
        specialAbilities.guard,
      ],
      family: 'shield',
      moves: [
        moves.tauntVitality2,
        moves.armorUpNeighbors1,
      ],
    }),
  },
  trinket: {
    1: new Item({
      name: '',
      rarity: '',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.findDistance(1),
        ]
      },
      specialAbilities: [],
    }),

    awarenessRing: new Item({
      name: 'Awareness Ring',
      rarity: 'uncommon',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.characterStat(2, 'awareness'),
        ]
      }
    }),
    blackCat: new Item({
      name: 'Black Cat',
      rarity: 'rare',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.characterStat(20, 'luck'),
        ]
      }
    }),
    blessedRing: new Item({
      name: 'Blessed Ring',
      rarity: 'uncommon',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.magic(1),
          itemStat.immunity('Curse')
        ]
      }
    }),
    bloodRing: new Item({
      name: 'Blood Ring',
      rarity: 'uncommon',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.attack(2),
        ]
      }
    }),
    cloudedMirror: new Item({
      name: 'Clouded Mirror',
      rarity: 'uncommon',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.reflect(2),
        ]
      }
    }),
    crackedSpyglass: new Item({
      name: 'Cracked Spyglass',
      rarity: 'common',
      desc: '',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.findDistance(1),
        ]
      },
      specialAbilities: [],
      moves: [],
    }),
    fireRing: new Item({
      name: 'Fire Ring',
      rarity: 'uncommon',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.evasion(3),
          itemStat.immunity('Fire')
        ]
      }
    }),
    focusingStone: new Item({
      name: 'Focusing Stone',
      rarity: 'uncommon',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.focus(1),
        ]
      }
    }),
    friendshipRing: new Item({
      name: 'Friendship Ring',
      rarity: 'uncommon',
      type: 'trinket',
      specialAbilities: [
        specialAbilities.supportRange,
      ],
    }),
    intelligenceRing: new Item({
      name: 'Intelligence Ring',
      rarity: 'uncommon',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.characterStat(2, 'intelligence'),
        ]
      }
    }),
    iceRing: new Item({
      name: 'Ice Ring',
      rarity: 'uncommon',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.armor(1),
          itemStat.immunity('Ice')
        ]
      }
    }),
    rustyCompass: new Item({
      name: 'Rusty Compass',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.movement(1),
        ]
      }
    }),
    rustyVitalityRing: new Item({
      name: 'Rusty Vitality Ring',
      rarity: 'uncommon',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.characterStat(2, 'vitality'),
        ]
      }
    }),
    silverPadlock: new Item({
      name: 'Silver Padlock',
      rarity: 'uncommon',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.immunity('Steal')
        ]
      }
    }),
    waterRing: new Item({
      name: 'Water Ring',
      rarity: 'uncommon',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.xp(10),
          itemStat.immunity('Wet')
        ]
      }
    }),
    windRing: new Item({
      name: 'Wind Ring',
      rarity: 'uncommon',
      type: 'trinket',
      itemStats: {
        baseStats: [
          itemStat.evasion(5),
        ]
      }
    }),
  },
  weapon: {
    1: new Item({
      name: '',
      rarity: '',
      type: 'weapon',
      itemStats: {
        baseDamage: 6,
        rollStat: '',
        damageType: '',
        traits: [],
        baseStats: []
      },
      specialAbilities: [],
      family: '',
      moves: [],
    }),
    club: new Item({
      name: 'Club',
      type: 'weapon',
      itemStats: {
        baseDamage: 10,
        rollStat: 'vitality',
        damageType: 'physical',
        traits: [],
        baseStats: []
      },
      family: 'mace',
      moves: [
        moves.bash3,
        moves.stun3
      ],
    }),
    crudeHammer: new Item({
      name: 'Crude Hammer',
      type: 'weapon',
      itemStats: {
        baseDamage: 12,
        rollStat: 'vitality',
        damageType: 'physical',
        traits: [],
        baseStats: []
      },
      family: 'mace',
      moves: [
        moves.bash4,
        moves.stun4,
      ],
    }),
    crudeTorch: new Item({
      name: 'Crude Torch',
      type: 'weapon',
      itemStats: {
        baseDamage: 9,
        rollStat: 'vitality',
        damageType: 'physical',
        traits: [],
        baseStats: [
          itemStat.findDistance(1),
        ]
      },
      specialAbilities: [],
      family: 'mace',
      moves: [
        moves.fireBash3,
        moves.ignite3,
      ],
    }),
    dustyBook: new Item({
      name: 'Dusty Book',
      type: 'weapon',
      itemStats: {
        baseDamage: 8,
        rollStat: 'intelligence',
        damageType: 'magic',
        traits: [ 'twoHanded', ],
        baseStats: []
      },
      specialAbilities: [
        specialAbilities.supportRange,
      ],
      family: 'tome',
      moves: [
        moves.blast3,
        moves.areaBlast3,
      ],
    }),
    crackedRang: new Item({
      name: 'Cracked Rang',
      type: 'weapon',
      itemStats: {
        baseDamage: 6,
        rollStat: 'talent',
        damageType: 'physical',
        traits: [],
        baseStats: []
      },
      specialAbilities: [
        specialAbilities.supportRange,
      ],
      family: 'boomerang',
      moves: [
        moves.throw2,
        moves.rowAttack2,
      ],
    }),
    darkTome: new Item({
      name: 'Dark Tome',
      type: 'weapon',
      itemStats: {
        baseDamage: 9,
        rollStat: 'intelligence',
        damageType: 'magic',
        traits: [ 'twoHanded' ],
        baseStats: []
      },
      specialAbilities: [
        specialAbilities.supportRange,
      ],
      family: 'tome',
      moves: [
        moves.darkBlast3,
        moves.darkStorm3
      ],
    }),
    glassSword: new Item({
      name: 'Glass Sword',
      rarity: 'rare',
      type: 'weapon',
      itemStats: {
        baseDamage: 22,
        rollStat: 'strength',
        damageType: 'physical',
        traits: [ 'breakable', 'unfocusable' ],
        baseStats: []
      },
      family: 'sword',
      moves: [
        moves.shatter1,
      ],
    }),
    heavyBow: new Item({
      name: 'Heavy Bow',
      rarity: 'common',
      type: 'weapon',
      itemStats: {
        baseDamage: 11,
        rollStat: 'awareness',
        damageType: 'physical',
        traits: [ 'twoHanded' ],
        baseStats: [
          itemStat.criticalChance(5),
          itemStat.evasion(2)
        ]
      },
      specialAbilities: [
        specialAbilities.supportRange,
      ],
      family: 'bow',
      moves: [
        moves.shot4,
        moves.heavyDraw4,
      ],
    }),
    rustyBlunderbuss: new Item({
      name: 'Rusty Blunderbuss',
      rarity: 'uncommon',
      type: 'weapon',
      itemStats: {
        baseDamage: 10,
        rollStat: 'talent',
        damageType: 'physical',
        traits: [],
        baseStats: []
      },
      specialAbilities: [
        specialAbilities.supportRange,
      ],
      family: 'handCannon',
      moves: [
        moves.blast1,
        moves.pistolWhip1,
      ],
    }),
    simpleBow: new Item({
      name: 'Simple Bow',
      type: 'weapon',
      itemStats: {
        baseDamage: 6,
        rollStat: 'awareness',
        damageType: 'physical',
        traits: [ 'twoHanded' ],
        baseStats: [
          itemStat.criticalChance(5),
        ]
      },
      specialAbilities: [
        specialAbilities.supportRange,
      ],
      family: 'bow',
      moves: [
        moves.shot2,
        moves.pierce2,
      ],
    }),
    simpleTorch: new Item({
      name: 'Simple Torch',
      type: 'weapon',
      itemStats: {
        baseDamage: 10,
        rollStat: 'vitality',
        damageType: 'physical',
        traits: [],
        baseStats: [ itemStat.findDistance(1) ]
      },
      family: 'mace',
      moves: [
        moves.fireBash3,
        moves.ignite3,
      ],
    }),
    sixFootPole: new Item({
      name: '6 Foot Pole',
      type: 'weapon',
      itemStats: {
        baseDamage: 10,
        rollStat: 'awareness',
        damageType: 'physical',
        traits: [ 'twoHanded', ],
        baseStats: []
      },
      family: 'polearm',
      moves: [
        moves.interrupt4,
        moves.push4
      ],
    }),
    shockedSword: new Item({
      name: 'Shocked Sword',
      type: 'weapon',
      itemStats: {
        baseDamage: 6,
        rollStat: 'speed',
        damageType: 'physical',
        traits: [],
        baseStats: [ itemStat.criticalChance(5) ]
      },
      family: 'sword',
      moves: [
        moves.shockStrike2,
        moves.stab2,
      ],
    }),
    smithHammer: new Item({
      name: 'Smith Hammer',
      type: 'weapon',
      itemStats: {
        baseDamage: 9,
        rollStat: 'vitality',
        damageType: 'physical',
        traits: [],
        baseStats: []
      },
      family: 'mace',
      moves: [
        moves.bash4,
        moves.stun4,
      ],
    }),
    walkingStick: new Item({
      name: 'Walking Stick',
      type: 'weapon',
      itemStats: {
        baseDamage: 7,
        rollStat: 'intelligence',
        damageType: 'magic',
        traits: [ 'twoHanded' ],
        baseStats: []
      },
      specialAbilities: [
        specialAbilities.supportRange,
      ],
      family: 'polearm',
      moves: [
        moves.ray4,
        moves.cure1
      ],
    }),
    woodenSword: new Item({
      name: 'Wooden Sword',
      type: 'weapon',
      itemStats: {
        baseDamage: 8,
        rollStat: 'speed',
        damageType: 'physical',
        traits: [],
        baseStats: [
          itemStat.criticalChance(5),
        ]
      },
      family: 'sword',
      moves: [
        moves.slash2,
        moves.stab2,
      ],
    }),


    armingSword: new Item({
      name: 'Arming Sword',
      type: 'weapon',
      itemStats: {
        baseDamage: 11,
        rollStat: 'strength',
        damageType: 'physical',
        traits: [],
        baseStats: []
      },
      family: 'sword',
      moves: [
        moves.slash3,
        moves.cuttingSlice3
      ],
    }),
    crudeGreathammer: new Item({
      name: 'Crude Greathammer',
      type: 'weapon',
      itemStats: {
        baseDamage: 15,
        rollStat: 'vitality',
        damageType: 'physical',
        traits: [],
        baseStats: []
      },
      family: 'mace',
      moves: [
        moves.bash5,
        moves.heavyBash5,
      ],
    }),
    glaive: new Item({
      name: 'Glaive',
      type: 'weapon',
      itemStats: {
        baseDamage: 13,
        rollStat: 'awareness',
        damageType: 'physical',
        traits: [ 'twoHanded', ],
        baseStats: [
          itemStat.armor(2),
        ]
      },
      family: 'polearm',
      moves: [
        moves.thrust5,
        moves.bashTH5
      ],
    }),
    handAxe: new Item({
      name: 'Hand Axe',
      type: 'weapon',
      itemStats: {
        baseDamage: 10,
        rollStat: 'strength',
        damageType: 'physical',
        traits: [],
        baseStats: []
      },
      family: 'axe',
      moves: [
        moves.chop3,
        moves.armorSmash3
      ],
    }),
    heavySword: new Item({
      name: 'Heavy Sword',
      type: 'weapon',
      itemStats: {
        baseDamage: 14,
        rollStat: 'strength',
        damageType: 'physical',
        traits: [ 'twoHanded' ],
        baseStats: []
      },
      family: 'sword',
      moves: [
        moves.slash4,
        moves.heavyStrike4
      ],
    }),
    lightningMace: new Item({
      name: 'Lightning Mace',
      rarity: 'rare',
      type: 'weapon',
      itemStats: {
        baseDamage: 11,
        rollStat: 'vitality',
        damageType: 'physical',
        traits: [],
        baseStats: [
          itemStat.criticalChance(5),
        ]
      },
      family: 'mace',
      moves: [
        moves.shockStrike3,
        moves.stun3
      ],
    }),
    lightningRod: new Item({
      name: 'Lightning Rod',
      rarity: 'uncommon',
      type: 'weapon',
      itemStats: {
        baseDamage: 10,
        rollStat: 'intelligence',
        damageType: 'magic',
        traits: [ 'twoHanded' ],
        baseStats: [
          itemStat.immunity('Shock'),
        ]
      },
      specialAbilities: [
        specialAbilities.supportRange,
      ],
      family: 'staff',
      moves: [
        moves.shockBolt4,
        moves.heavyShockBolt5
      ],
    }),
    queensMace: new Item({
      name: 'Queen\'s Mace',
      rarity: 'uncommon',
      type: 'weapon',
      itemStats: {
        baseDamage: 10,
        rollStat: 'vitality',
        damageType: 'physical',
        traits: [],
        baseStats: [
          itemStat.xp(15),
        ]
      },
      family: 'mace',
      moves: [
        moves.bash2,
        moves.stun2,
      ],
    }),
    ridingSword: new Item({
      name: 'Riding Sword',
      type: 'weapon',
      itemStats: {
        baseDamage: 9,
        rollStat: 'strength',
        damageType: 'physical',
        traits: [],
        baseStats: [
          itemStat.criticalChance(3),
        ]
      },
      family: 'sword',
      moves: [
        moves.slash2,
        moves.stab2
      ],
    }),
    rustyCannon: new Item({
      name: 'Rusty Cannon',
      rarity: 'uncommon',
      type: 'weapon',
      itemStats: {
        baseDamage: 16,
        rollStat: 'strength',
        damageType: 'physical',
        traits: [ 'twoHanded' ],
        baseStats: [
          itemStat.characterStat(-5, 'speed'),
        ]
      },
      specialAbilities: [
        specialAbilities.supportRange,
      ],
      family: 'cannon',
      moves: [
        moves.explosiveShot1,
      ],
    }),
    shepherdsAxe: new Item({
      name: 'Shepherd\'s Axe',
      type: 'weapon',
      itemStats: {
        baseDamage: 14,
        rollStat: 'strength',
        damageType: 'physical',
        traits: [ 'twoHanded' ],
        baseStats: []
      },
      family: 'axe',
      moves: [
        moves.chop5,
        moves.heavyCut5
      ],
    }),
    shockedHandbow: new Item({
      name: 'Shocked Handbow',
      rarity: 'rare',
      type: 'weapon',
      itemStats: {
        baseDamage: 8,
        rollStat: 'awareness',
        damageType: 'physical',
        baseStats: [
          itemStat.criticalChance(12),
        ]
      },
      family: 'handbow',
      moves: [
        moves.shockArrow1,
        moves.shockRecoil1,
      ],
    }),
    sprig: new Item({
      name: 'Sprig',
      rarity: 'uncommon',
      type: 'weapon',
      itemStats: {
        baseDamage: 8,
        rollStat: 'intelligence',
        damageType: 'magic',
        baseStats: [
          itemStat.focus(1),
        ]
      },
      specialAbilities: [
        specialAbilities.supportRange,
      ],
      family: 'wand',
      moves: [
        moves.zap2,
        moves.pull2,
      ],
    }),
    targetBow: new Item({
      name: 'Target Bow',
      type: 'weapon',
      itemStats: {
        baseDamage: 9,
        rollStat: 'awareness',
        damageType: 'physical',
        traits: [ 'twoHanded' ],
        baseStats: [
          itemStat.evasion(3),
          itemStat.criticalChance(6),
        ]
      },
      specialAbilities: [],
      family: '',
      moves: [
        moves.shot3,
        moves.volley3
      ],
    }),
    wetStaff: new Item({
      name: 'Wet Staff',
      type: 'weapon',
      itemStats: {
        rollStat: 'intelligence',
        damageType: 'magic',
        traits: [ 'twoHanded' ],
        baseStats: []
      },
      specialAbilities: [
        specialAbilities.supportRange
      ],
      family: 'staves',
      moves: [
        moves.waterBolt4,
        moves.cure1,
      ],
    }),
    wornKnife: new Item({
      name: 'Worn Knife',
      type: 'weapon',
      itemStats: {
        baseDamage: 7,
        rollStat: 'speed',
        damageType: 'physical',
        traits: [],
        baseStats: [
          itemStat.criticalChance(6),
          itemStat.characterStat(4, 'speed'),
        ]
      },
      family: 'dagger',
      moves: [
        moves.shank1,
        moves.cut1
      ],
    }),
  },
}