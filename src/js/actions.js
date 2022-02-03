import * as states from './states.js';

//generic
export const addGenericAttack = states.addAction("Attack", (actor, enemy) => {
  enemy(states.modifyPropByValue("HP")(-1 * actor().ATT));
  return `<p>${enemy().name} is hit for ${actor().ATT} damage!</p>`;
});

//wizard
export const addMagicMissile = states.addAction("Magic Missile", (actor, enemy) => {
  enemy(states.modifyPropByValue("HP")(-1 * actor().ATT));
  return `<p>${enemy().name} is hit by a magic missile for ${actor().ATT} damage!</p>`;
});

export const addFireball = states.addAction("Fireball", (actor, enemy) => {
  enemy(states.modifyPropByValue("HP")(-1.5 * actor().ATT));
  return `<p>Boom, fireball! ${enemy().name} takes ${1.5 *actor().ATT} damage!</p>`;
});

//barbarian
export const addPowerStrike = states.addAction("Power Strike", (actor, enemy) => {
  enemy(states.modifyPropByValue("HP")(-2 * actor().ATT));
  return `<p>Wapow! ${enemy().name} takes ${-2 * actor().ATT} damage!</p>`;
});

//paladin
export const addHeal = states.addAction("Heal", (actor, target) => {
  target(states.modifyPropByValue("HP")(1.5 * actor().ATT));
  return `<p>Hooray! ${target().name} heals ${1.5 * actor().ATT} HP!</p>`;
});

//ranger
export const addDualShot = states.addAction("Dual Shot", (actor, enemy) => {
  enemy(states.modifyPropByValue("HP")(-2 * actor().ATT));
  return `<p>The first attack hits! ${enemy().name} takes ${actor().ATT} damage!</p>
    <p>The second attack hits ${enemy().name} takes ${actor().ATT} damage!`;
});