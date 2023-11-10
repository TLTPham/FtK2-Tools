import { itemType } from "@/stats/item/itemType";

export class Item {
  constructor(item) {
    this.name = item.name || 'unknown item';
    this.rarity = item.rarity || 'common';
    this.desc = item.desc || '';
    this.type = item.type || 'unknown';
    this.itemStats = item.itemStats || { baseStats: [] };
    this.specialAbilities = item.specialAbilities || [];
    this.family = item.family || 'unknown';
    this.moves = item.moves || [];
  }

  rollContent = () => {
    return {
      count: this.moves[0].rollCount,
      stat: this.moves[0].rollStat,
    }
  }
  checkType = (types) => {
    if (typeof types === 'string') {
      types = [ types ];
    }
    return types.includes(this.type);
  }
  rarityText = () => {
    return this.rarity.charAt(0).toUpperCase() + this.rarity.slice(1);
  }
  damageText = (index = 0, additionalDamage = 0) => {
    let base = this.itemStats.baseDamage + additionalDamage;
    let min = Math.floor(base * this.moves[index].damageAmpFloor / 100);
    let max = Math.floor(base * this.moves[index].damageAmpCeil / 100);
    return `${min} - ${max} ${this.itemStats.damageType} damage`;
  }
  typeText = () => {
    return itemType[this.type];
  }
}

export class Move {
  constructor(move) {
    this.name = move.name || 'unknown';
    this.type = move.type || 'unknown';
    this.rollCount = move.rollCount || 1;
    this.rollStat = move.rollStat || 'unknown';
    this.targetText = move.targetText || 'Single Target';
    this.damageAmpFloor = move.damageAmpFloor || 0;
    this.damageAmpCeil = move.damageAmpCeil || 0;
    this.splash = move.splash || { applicable: false, damageAmpFloor: 0, damageAmpCeil: 0 };
    this.effects = move.effects || [];
    this.tag = move.tag || [ 'single' ];
    this.accuracyModifier = move.accuracyModifier || 0;
  }
}