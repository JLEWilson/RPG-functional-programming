import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import * as entities from './js/entities.js';

const player = entities.wizard;
const enemy = entities.goblin;

//this is document ready
$(() => { 
  $("#button-area").html(actionButtonBuilder(player().actions)); 
  $("button").on("click", function() {
    
    //player action
    const target = enemy; //need to update to get dynamically from checkbox or similar
    const playerActionMessage = player().actions[$(this).prop("id")](target);
    $("#text-display-area").prepend(playerActionMessage);
    $("#text-display-area").prepend(`<p>${target().name} HP is ${target().HP}`);

    //enemy action
    // TODO: target for enemy action (since they may target self to heal etc.)
    // pick a random action from enemy's list
    const enemyActions = Object.keys(enemy().actions);
    const chosenAction = enemyActions[Math.floor(Math.random() * enemyActions.length)]; 
    const enemyActionMessage = enemy().actions[chosenAction](player);
    $("#text-display-area").prepend(enemyActionMessage);
    $("#text-display-area").prepend(`<p>${player().name} HP is ${player().HP}`);
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