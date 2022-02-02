import * as states from './states.js';

export const addMagicMissile = states.addAction("magicMissile", (enemy) => {
  enemy(states.modifyPropByValue("HP")(-2));
  return "<p>I attack the darkness!</p>";
});

export const addFireball = states.addAction("fireball", (enemy) => {
  enemy(states.modifyPropByValue("HP")(-5));
  return "<p>Boom, fireball!</p>";
});