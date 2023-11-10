import { itemStat } from "@/stats/item/itemStat";

export const material = {
  wood: {
    name: 'Wood',
    types: {
      cedar: {
        name: 'Cedar',
        bonus: [ itemStat.characterStat(1, 'speed') ]
      },
      oak: {
        name: 'Oak',
        bonus: [ itemStat.attack(1) ]
      },
      yew: {
        name: 'Yew',
        bonus: [ itemStat.characterStat(2, 'speed') ]
      },
      amber: {
        name: 'Amber',
        bonus: [ itemStat.criticalChance(10) ]
      },
      elm: {
        name: 'Elm',
        bonus: [ itemStat.criticalChance(5) ]
      },
      ash: {
        name: 'Ash',
        bonus: [ itemStat.accuracy(5) ]
      },
      midnight: {
        name: 'Midnight',
        bonus: [ itemStat.attack(2) ]
      },
    }
  },
  metal: {
    name: 'Metal',
    types: {
      silver: {
        name: 'Silver',
        bonus: [ itemStat.characterStat(1, 'speed') ]
      },
      steel: {
        name: 'Steel',
        bonus: [ itemStat.armor(1) ]
      },
      titanite: {
        name: 'Titanite',
        bonus: [ itemStat.characterStat(2, 'speed') ]
      },
      emerald: {
        name: 'Emerald',
        bonus: [ itemStat.resistance(2) ]
      },
      iron: {
        name: 'Iron',
        bonus: [ itemStat.resistance(1) ]
      },
      gold: {
        name: 'Gold',
        bonus: [ itemStat.focus(1) ]
      },
      obsidian: {
        name: 'Obsidian',
        bonus: [ itemStat.armor(2) ]
      },
    }
  },
  cloth: {
    name: 'Cloth',
    types: {
      cendal: {
        name: 'Cendal',
        bonus: [ itemStat.characterStat(1, 'speed') ]
      },
      cotton: {
        name: 'Cotton',
        bonus: [ itemStat.evasion(2) ]
      },
      wool: {
        name: 'Wool',
        bonus: [ itemStat.focus(1) ]
      },
      dreamthread: {
        name: 'Dreamthread',
        bonus: [ itemStat.resistance(2) ]
      },
      hemp: {
        name: 'Hemp',
        bonus: [ itemStat.resistance(1) ]
      },
      silk: {
        name: 'Silk',
        bonus: [ itemStat.characterStat(2, 'speed') ]
      },
      shadowthread: {
        name: 'Shadowthread',
        bonus: [ itemStat.evasion(4) ]
      },
    }
  },
  leather: {
    name: 'Leather',
    types: {
      hide: {
        name: 'Hide',
        bonus: [ itemStat.evasion(1) ]
      },
      lightLeather: {
        name: 'Light Leather',
        bonus: [ itemStat.characterStat(5, 'speed') ]
      },
      shadowhide: {
        name: 'Shadowhide',
        bonus: [ itemStat.evasion(2) ]
      },
      suede: {
        name: 'Suede',
        bonus: [ itemStat.resistance(1) ]
      },
      curedLeather: {
        name: 'Cured Leather',
        bonus: [ itemStat.focus(1) ]
      },
      dragonhide: {
        name: 'Dragonhide',
        bonus: [ itemStat.armor(1), itemStat.resistance(1) ]
      },
    }
  }
}