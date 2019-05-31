/* Default Reactions */
const alarmingReactions = [
  'No',
  'Nope',
  'Not gonna happen',
  'Who do you think I am?',
  'Don\'t you have an alarm clock for this?',
  'Just use your phone\'s alarm clock!!! OMG!',
];

/* Routes */
const routes = [
  {route: 'in\\/(.*)\\/mi(n|ns|nute|nutes)$', view: renderMin},
];

/* Util Functions */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRoute(url) {
  return url.hash.split('#!')[1];
}

/* render based on route */
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
  for (var i = 0; i < routes.length; i++) {
    const re = new RegExp(routes[i].route);
    let match = route.match(re);
    if (match) {
      match.shift();
      routes[i].view(match);
      break;
    }
  }
}

function renderMin(minutes) {
  minutes = minutes[0];
  let alarmingText = '';
  if (minutes < 30) {
    alarmingText = 'You really think you can wake up in ' + minutes + ' min? LOL!';
  } else if (minutes >= 30) {
    alarmingText = 'Hmm, you want a nap eh? Will see';
  }
  document.getElementById('alarming-text').innerHTML = alarmingText;
  setAlarm(minutes * 60);
}


/* Alarm Code */
function setAlarm(seconds) {
  setInterval(
    function() {
      alert("wake up motherfucker");
    },
    (seconds * 1000)
  );
}

function main () {
  /* Routing different URLs */
  if (window.location.hash && window.location.hash.split('#!')) {
    const route = getRoute(window.location);
    renderRoutes(route);
  } else {
    renderDefault();
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  main();
});
window.onhashchange = main;
