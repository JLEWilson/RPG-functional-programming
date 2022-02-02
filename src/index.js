import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import * as entity from './js/entity.js';


const wizard = entity.state({"name": "player", "HP": 3, "ATT": 5, "DEF": 1, "actions": {}});

const addMagicMissile = entity.addAction("magicMissile", (enemy) => {
  enemy(entity.modifyPropByValue("HP")(-2));
  $("#text-display-area").prepend("<p>I attack the darkness!</p>");
});

const addFireball = entity.addAction("fireball", (enemy) => {
  enemy(entity.modifyPropByValue("HP")(-5));
  $("#text-display-area").prepend("<p>Boom, fireball!</p>");
});
  
wizard(addMagicMissile);
wizard(addFireball);

const goblin = entity.state({"name": "goblin", "HP": 10, "ATT": 1, "DEF": 1, "actions": {}});

//jquery ish
$(() => { //this is document ready
  $("#button-area").html(actionButtonBuilder(wizard().actions)); 
  $("button").on("click", function() {
    const target = goblin; //get dynamically from checkbox or similar
    wizard().actions[$(this).prop("id")](target);
    $("#text-display-area").prepend(`<p>${target().name} HP is ${target().HP}`);
  });
});

//button builder
function actionButtonBuilder(actions) {
  let output = "";
  for (const action in actions) {
    output += `
    <button id="${action}">
      ${action}
    </button>
    `;
  }
  return output;
}

// function populateAttacks(attacker)
// {
//   const attacks = Object.keys(attacker.actions);
//   for(let i = 0; i < attacks.length; i++){
//     $("button-area").append("<button>" + attacks[i] + "</button>");
//   }
// }