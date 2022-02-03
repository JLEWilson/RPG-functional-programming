import * as states from './states.js';

//generic
export const addGenericAttack = states.addAction("Attack", (actor, enemy) => {
  const dmg = (1 * actor().ATT) - enemy().DEF;
  enemy(states.modifyPropByValue("HP")(-dmg));
  return `<p>${actor().name} attacks! ${enemy().name} is hit for ${dmg} damage!</p>`;
});

//wizard
export const addMagicMissile = states.addAction("Magic Missile", (actor, enemy) => {
  const dmg = (1 * actor().ATT) - (enemy().DEF / 2);
  enemy(states.modifyPropByValue("HP")(-dmg));
  return `<p>${actor().name} casts magic missile! ${enemy().name} is hit for ${dmg} damage!</p>`;
});

export const addFireball = states.addAction("Fireball", (actor, enemy) => {
  const dmg = (1.5 * actor().ATT) - (enemy().DEF / 2);
  enemy(states.modifyPropByValue("HP")(-dmg));
  return `<p>Boom!! ${enemy().name} takes ${dmg} damage from ${actor().name}'s fireball!</p>`;
});

//barbarian
export const addPowerStrike = states.addAction("Power Strike", (actor, enemy) => {
  const dmg = (2 * actor().ATT) - enemy().DEF;
  enemy(states.modifyPropByValue("HP")(-dmg));
  return `<p>Wapow! ${actor().name} crushes ${enemy().name} for ${dmg} damage!</p>`;
});

//paladin
export const addHeal = states.addAction("Heal", (actor, target) => {
  const dmg = (1.5 * actor().ATT);
  actor(states.modifyPropByValue("HP")(dmg));
  return `<p>Hooray! ${actor().name} heals ${target().name} for ${dmg} HP!</p>`;
});

//ranger
export const addDualShot = states.addAction("Dual Shot", (actor, enemy) => {
  const dmg = actor().ATT - enemy().DEF;
  enemy(states.modifyPropByValue("HP")(-2 * dmg));
  return `<p>${actor().name} fires two shots! ${enemy().name} takes ${dmg} damage twice!</p>`;
});