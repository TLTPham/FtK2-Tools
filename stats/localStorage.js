let base = {
  level: 0,
  spiritTaffy: 0,
  blackCandy: 0,
  character: false,
  weapon: false,
  offhand: false,
  trinket: false,
  helmet: false,
  bodyArmor: false,
  gloves: false,
  boots: false,
}

export const loadState = {
  getBase: base,
  get: () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return base;
      } else {
        return JSON.parse(serializedState);
      }
    } catch (err) {
      return base;
    }
  },
  set: ({ level, spiritTaffy, blackCandy, character, weapon, offhand, trinket, helmet, bodyArmor, gloves, boots }) => {
    const state = {
      level,
      spiritTaffy,
      blackCandy,
      character: getReference(character),
      weapon: getReference(weapon),
      offhand: getReference(offhand),
      trinket: getReference(trinket),
      helmet: getReference(helmet),
      bodyArmor: getReference(bodyArmor),
      gloves: getReference(gloves),
      boots: getReference(boots)
    };
    localStorage.setItem('state', JSON.stringify(state));
  },
}

function getReference(item) {
  if (!item) return false;
  let reference = item.name;
  reference = reference.replace('6', 'six')
  reference = reference[0].toLowerCase() + reference.replace(/\s/g, '').slice(1);
  return reference;
}