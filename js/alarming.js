const alarmingReactions = [
    'No',
    'Nope',
    'Not gonna happen',
    'Who do you think I am?',
    'Don\'t you have an alarm clock for this?',
    'Just use your phone\'s alarm clock!!! OMG!',
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function main () {
  if (localStorage.getItem('alarmRequestsXvdgf')) {
    localStorage.alarmRequestsXvdgf = Number(localStorage.getItem('alarmRequestsXvdgf')) + 1;
  } else {
    localStorage.alarmRequestsXvdgf = 0;
  }

  let alarmingText = '';
  if (localStorage.getItem('alarmRequestsXvdgf') >= alarmingReactions.length) {
    alarmingText = alarmingReactions[getRandomInt(0, alarmingReactions.length - 1)];
  } else {
    alarmingText = alarmingReactions[Number(localStorage.getItem('alarmRequestsXvdgf'))];
  }

  document.getElementById('alarming-text').innerHTML = alarmingText;
}

document.addEventListener("DOMContentLoaded", function(event) {
  main();
});
