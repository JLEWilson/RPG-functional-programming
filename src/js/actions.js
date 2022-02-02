import * as states from './states.js';

export const addMagicMissile = states.addAction("magicMissile", (enemy) => {
  enemy(states.modifyPropByValue("HP")(-2));
  return `<p>${enemy().name} is hit by a magic missile for 2 damage!</p>`;
});

export const addFireball = states.addAction("fireball", (enemy) => {
  enemy(states.modifyPropByValue("HP")(-5));
  return `<p>Boom, fireball! ${enemy().name} takes 5 damage!</p>`;
});