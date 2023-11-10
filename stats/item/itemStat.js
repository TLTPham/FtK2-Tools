import { characterStat } from "@/stats/character/characterStat";

class Stat {
  constructor({ name, type, value, displayText, damageType = '' }) {
    this.name = name;
    this.type = type;
    this.damageType = damageType;
    this.value = value;
    this.displayText = displayText;
  }

  applyStat = (character) => {
    if (this.type === 'combatStats') {
      if ((this.damageType === character.combatStats.damage.type) || this.damageType === 'generic') {
        character.combatStats.damage.value += this.value;
      }
    } else if (this.type === 'stats') {
      character.stats[this.name] += this.value;
    }
  }
}

export const itemStat = {
  accuracy: (value) => {
    return new Stat({
      name: 'accuracy',
      type: '',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value}% Accuracy`
    })
  },
  armor: (value) => {
    return new Stat({
      name: 'armor',
      type: 'combatStats',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value} Armor`
    })
  },
  attack: (value) => {
    return new Stat({
      name: 'damage',
      type: 'combatStats',
      damageType: 'generic',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value} Attack Damage`
    })
  },
  characterStat: (value, stat) => {
    return new Stat({
      name: stat.toLowerCase(),
      type: 'stats',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value} ${characterStat[stat].name}`
    })
  },
  criticalChance: (value) => {
    return new Stat({
      name: 'criticalChance',
      type: '',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value}% Crit Chance`
    })
  },
  evasion: (value) => {
    return new Stat({
      name: 'evasion',
      type: 'combatStats',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value} Evasion`
    })
  },
  focus: (value) => {
    return new Stat({
      name: 'focus',
      type: '',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value} Focus`
    })
  },
  findDistance: (value) => {
    return new Stat({
      name: 'findDistance',
      type: '',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value} Find Distance`
    })
  },
  gold: (value) => {
    return new Stat({
      name: 'gold',
      type: '',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value}% Gold Multiplier`
    })
  },
  magic: (value) => {
    return new Stat({
      name: 'damage',
      type: 'combatStats',
      damageType: 'magic',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value} Magic Damage`
    })
  },
  movement: (value) => {
    return new Stat({
      name: 'movement',
      type: '',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value} Movement Bonus`
    })
  },
  immunity: (value) => {
    return new Stat({
      name: 'immunity',
      type: '',
      value: value,
      displayText: `${value} Immunity`
    })
  },
  partyArmor: (value) => {
    return new Stat({
      name: 'partyArmor',
      type: 'combatStats',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value} Party Armor`
    })
  },
  reflect: (value) => {
    return new Stat({
      name: 'reflect',
      type: '',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value} Damage Reflection`
    })
  },
  regen: (value) => {
    return new Stat({
      name: 'regen',
      type: '',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value} HP Regen`
    })
  },
  resistance: (value) => {
    return new Stat({
      name: 'resistance',
      type: 'combatStats',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value} Resistance`
    })
  },
  xp: (value) => {
    return new Stat({
      name: 'xp',
      type: '',
      value: value,
      displayText: `${value > 0 ? '+' : ''}${value}% XP Multiplier`
    })
  },
}