import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import * as entities from './js/entities.js';

//when they pick a class
//const player = entity.(const for class they pick)

//when we need to make a new enemy
//const enemy = entity.goblin (or whatever)

const player = entities.wizard;
const enemy = entities.goblin;

//jquery ish
$(() => { //this is document ready
  $("#button-area").html(actionButtonBuilder(player().actions)); 
  $("button").on("click", function() {
    const target = enemy; //need to update to get dynamically from checkbox or similar
    const message = player().actions[$(this).prop("id")](target);
    $("#text-display-area").prepend(message);
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

/*
  Things we need:
  Dynamically select Character/Populate char select
  Dynamically select target for abilities
  
*/