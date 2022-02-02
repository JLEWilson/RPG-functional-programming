import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import * as entities from './js/entities.js';

let player = {};
const enemy = entities.goblin;
let gameOver = false;

//this is document ready
$(() => { 
  $("#role-selection").html(populateCharacterSelect(entities.roleSelection));
  $(".role-button").on("click", function() {
    player = entities.roleSelection[$(this).prop("id")];
    $("#role-selection").hide();
    $("#button-area").show();
    doButtonStuffUponRoleSelect();
  });
});

function doButtonStuffUponRoleSelect() {
  $("#button-area").html(actionButtonBuilder(player().actions)); 
  $(".action-button").on("click", function() {
    if (gameOver) return;
    //player action
    const target = enemy; //need to update to get dynamically from checkbox or similar
    const playerActionMessage = player().actions[$(this).prop("id")](target);
    $("#text-display-area").prepend(playerActionMessage);
    $("#text-display-area").prepend(`<p>${target().name} HP is ${target().HP}<p>`);
    if(target().HP <= 0){
      $("#text-display-area").prepend(`<p>${target().name} has been slain! You win.<p>`);
      gameOver = true;
      return;
    }
    //enemy action
    // TODO: target for enemy action (since they may target self to heal etc.)
    // pick a random action from enemy's list
    const enemyActions = Object.keys(enemy().actions);
    const chosenAction = enemyActions[Math.floor(Math.random() * enemyActions.length)]; 
    const enemyActionMessage = enemy().actions[chosenAction](player);
    $("#text-display-area").prepend(enemyActionMessage);
    $("#text-display-area").prepend(`<p>${player().name} HP is ${player().HP}</p>`);
    if(player().HP <= 0){
      $("#text-display-area").prepend(`<p>You dead.<p>`);
      gameOver = true;
      return;
    }
  });
}

//button builder
function actionButtonBuilder(actions) {
  let output = "";
  for (const action in actions) {
    output += `
    <button class="action-button" id="${action}">
      ${action}
    </button>
    `;
  }
  return output;
}

function populateCharacterSelect(roles){
  let output = "";
  for (const role in roles) {
    output += `
    <button class="role-button" id="${role}">
      ${role}
    </button>
    `;
  }
  return output;
}
/*
  Things we need:
  Dynamically select target for abilities
  make things die at zero HP  
*/