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
  /* Routing different URLs */
  if (window.location.hash && window.location.hash.split('#!')) {
    const route = window.location.hash.split('#!')[1];
    renderRoutes(route);
  } else {
    renderDefault();
  }
}

function renderDefault() {
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

function renderRoutes(route) {
  // Set alarms with mins and hours
  const route_parts = route.split('/');
  if (route_parts.length === 4 && route_parts[1] === 'in' && 
    (route_parts[3] === 'mins' || route_parts[3] === 'mins')
  ) {
    console.log('Yay!!! Min Route');
    renderMin(route_parts[2]);
  }
}

function renderMin(minutes) {
  let alarmingText = '';
  if (minutes < 30) {
    alarmingText = 'You really think you can wake up in ' + minutes + ' min? LOL!';
  } else if (minutes >= 30) {
    alarmingText = 'Hmm, you want a nap eh? Will see';
  }
  document.getElementById('alarming-text').innerHTML = alarmingText;
}

document.addEventListener("DOMContentLoaded", function(event) {
  main();
});
