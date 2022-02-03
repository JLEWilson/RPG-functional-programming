import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import * as entities from './js/entities.js';
import * as states from './js/states.js';

let player;
const enemy = entities.goblin;
let gameOver = false;

//this is document ready
$(() => { 
  $("#role-selection").append(populateCharacterSelect(entities.roleSelection));
  $(".role-button").on("click", function() {
    player = entities.roleSelection[$(this).prop("id")];
    player(states.setPropToValue("name")($("#player-name").val()));
    $("#role-selection").hide();
    $("#button-area").show();
    $("#text-display-area").show();
    doButtonStuffUponRoleSelect();
  });
});

function doButtonStuffUponRoleSelect() {
  $("#button-area").html(actionButtonBuilder(player().actions)); 
  $("#player-stats").html(statAreaBuilder(player()));
  $("#enemy-stats").html(statAreaBuilder(enemy()));
  $(".action-button").on("click", function() {
    if (gameOver) return;

    //player action
    const target = enemy; //need to update to get dynamically from checkbox or similar
    const playerActionMessage = player().actions[$(this).prop("id")](player, target);
    $("#text-display-area").html(playerActionMessage);
    $("#text-display-area").append(`<p>${target().name} HP is ${target().HP}<p>`);
    $("#enemy-stats").html(statAreaBuilder(enemy()));
    if(target().HP <= 0){
      $("#text-display-area").append(`<p>${target().name} has been slain! You win.<p>`);
      gameOver = true;
      return;
    }
    
    //enemy action
    // TODO: target for enemy action (since they may target self to heal etc.)
    // pick a random action from enemy's list
    const enemyActions = Object.keys(enemy().actions);
    const chosenAction = enemyActions[Math.floor(Math.random() * enemyActions.length)]; 
    const enemyActionMessage = enemy().actions[chosenAction](enemy, player);
    $("#text-display-area").append(enemyActionMessage);
    $("#text-display-area").append(`<p>${player().name} HP is ${player().HP}</p>`);
    $("#player-stats").html(statAreaBuilder(player()));
    if(player().HP <= 0){
      $("#text-display-area").append(`<p>You dead.<p>`);
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

// stat area builder
function statAreaBuilder(player) {
  return `<h2>${player.name} the ${player.class}</h2> <hr> <h3><strong>HP: ${player.HP}</strong></h3> <h4>ATK: ${player.ATT}</h4> <h4>DEF: ${player.DEF}</h4>`;
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
  make actions use stats correctly (multiple of att instead of hard-coded)
    -this will require passing self-state to each action
  make def mean something
*/