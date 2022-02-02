import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import * as entity from './js/entity.js';

const wizard = entity.state({"name": "", "HP": 3, "ATT": 5, "DEF": 1, "actions": {}});

const addMagicMissile = entity.addAction("magicMissile", (enemy) => {
  $("#text-display-area").append("<p>I attack the darkness!</p>");
});
const addFireball = entity.addAction("fireball", (enemy) => {
  $("#text-display-area").append("<p>Boom, fireball!</p>");
});
  
wizard(addMagicMissile);
wizard(addFireball);


//jquery ish
$(() => { //this is document ready
  $("#button-area").html(actionButtonBuilder(wizard().actions)); // insert dynamic buttons?
  $("button").on("click", function() {
    wizard().actions[$(this).prop("id")]();
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