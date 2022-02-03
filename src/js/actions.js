import * as states from './states.js';

//generic
export const addGenericAttack = states.addAction("Attack", (enemy) => {
  enemy(states.modifyPropByValue("HP")(-3));
  return `<p>${enemy().name} is hit for 1 damage!</p>`;
});

//wizard
export const addMagicMissile = states.addAction("Magic Missile", (enemy) => {
  enemy(states.modifyPropByValue("HP")(-3));
  return `<p>${enemy().name} is hit by a magic missile for 2 damage!</p>`;
});

export const addFireball = states.addAction("Fireball", (enemy) => {
  enemy(states.modifyPropByValue("HP")(-5));
  return `<p>Boom, fireball! ${enemy().name} takes 5 damage!</p>`;
});

//barbarian
export const addPowerStrike = states.addAction("Power Strike", (enemy) => {
  enemy(states.modifyPropByValue("HP")(-8));
  return `<p>Wapow! ${enemy().name} takes 8 damage!</p>`;
});

//paladin
export const addHeal = states.addAction("Heal", (target) => {
  target(states.modifyPropByValue("HP")(5));
  return `<p>Hooray! ${target().name} heals 5 HP!</p>`;
});

//ranger
export const addDualShot = states.addAction("Dual Shot", (enemy) => {
  enemy(states.modifyPropByValue("HP")(-8));
  return `<p>The first attack hits! ${enemy().name} takes 4 damage!</p>
    <p>The second attack hits ${enemy().name} takes 4 damage!`;
});