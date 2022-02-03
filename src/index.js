import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import * as entities from './js/entities.js';
import * as states from './js/states.js';

let player;
let enemies;
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
    startCombat();
    doButtonStuffUponRoleSelect();
  });
});

function doButtonStuffUponRoleSelect() {
  //set up
  $("#action-button-area").html(actionButtonBuilder(player().actions));
  $("#player-stats").html(statAreaBuilder(player()));
  $("#enemy1-stats").html(statAreaBuilder(enemies[0]()));
  $("#enemy2-stats").html(statAreaBuilder(enemies[1]()));
  
  //buttons
  $(".action-button").on("click", function() {
    if (gameOver) return;
    const allTargets = [...enemies.filter(e => e().HP > 0), player];
    $("#target-button-area").html(targetButtonBuilder(allTargets));
    //player action
    const playerAction = player().actions[$(this).prop("id")];
    
    $(".target-button").on("click", function() {
      const target = allTargets[$(this).prop("id")];
      const playerActionMessage = playerAction(player, target);
      $("#text-display-area").html(playerActionMessage);
      $("#text-display-area").append(`<p>${target().name} HP is ${target().HP}<p>`);
      $("#enemy1-stats").html(statAreaBuilder(enemies[0]()));
      $("#enemy2-stats").html(statAreaBuilder(enemies[1]()));
      $("#player-stats").html(statAreaBuilder(player()));
      if(target().HP <= 0){
        $("#text-display-area").append(`<p>${target().name} has been slain!<p>`);
        if (enemies.filter(e => e().HP > 0).length === 0) {
          gameOver = true;
          $(".target-button").hide();
          $("#text-display-area").append(`<p>You have slain all of the monsters! You win!<p>`);
          return;
        }
      }
      
      //enemy actions
      for (const enemy of enemies.filter(e => e().HP > 0))
      {
        // pick a random action from enemy's list
        const enemyActions = Object.keys(enemy().actions);
        const chosenAction = enemyActions[Math.floor(Math.random() * enemyActions.length)]; 
        const enemyActionMessage = enemy().actions[chosenAction](enemy, player);
        $("#text-display-area").append(enemyActionMessage);
        $("#text-display-area").append(`<p>${player().name} HP is ${player().HP}</p>`);
        $("#enemy1-stats").html(statAreaBuilder(enemies[0]()));
        $("#enemy2-stats").html(statAreaBuilder(enemies[1]()));
        $("#player-stats").html(statAreaBuilder(player()));
        if(player().HP <= 0){
          $("#text-display-area").append(`<p>You dead.<p>`);
          gameOver = true;
          return;
        }
      }
      
      $(".action-button").show();
      $(".target-button").hide();
    });
    $(".action-button").hide();
    $(".target-button").show();
  });
} 

function startCombat(){
  enemies = entities.twoRandomEnemies();
  $("#text-display-area").append(`<p>${enemies[0]().name} the ${enemies[0]().class} and ${enemies[1]().name} the ${enemies[1]().class} have challenged you to combat!`);
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
function targetButtonBuilder(entities) {
  let output = "";
  for (const entity of entities) {
    output += `
    <button class="target-button" id="${entities.indexOf(entity)}">
      ${entity().name}
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