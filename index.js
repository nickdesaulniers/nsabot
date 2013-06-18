var irc = require('irc');
var config = require('config.json');
var client = new irc.Client(config.server, 'NSA_BOT', {
  debug: true,
  channels: config.channels,
  userName: 'National Security Agency',
  realName: 'James Clapper'
});

const REMARK_INTERVAL = 1 /*h*/* 60 /*m*/ * 60 /*s*/ * 1000 /*ms*/;

var remarks = [
  'Have no fear, citizens! The NSA is here to protect you',
  'You can\'t have 100% security AND 100% privacy',
  'Like us on facebook to get a free drone strike',
  'Who needs due process when you have drone strike?',
  'NSA_BOT walks into a bar.  Bartender says "hey, I got a new joke." Heard it.',
  'We only use collected data to provide targeted ads, just what you NEED',
  'Skype running slow?  Please wait while we respool our tape',
  'Jeez, it\'s really hard to get any meaningful data from Twitter',
  'Hey cut that out before you go blind!',
  'Drone strike dispatched.',
  'Collateral Damage? lulz',
  'Why use a service like Box or Dropbox when your tax dollars already pay to back up all of your data?  Switch today!',
  'Some of you have the most interesting phone calls...um I mean "metadata"',
  'Thanks for the concern; we are now monitoring the IRS investigation of ourselves',
  'Drone strike imminent',
  'If you don\'t submit, the terrorists will get you!',
  'I mean, you\'ve got nothing to hide, right?',
  'Anyone know who\'s watching the watchers???',
  'Nothing to see here.  Move along.',
  'Does anyone know where our private key went?',
];

setInterval(function () {
  // Math.random is exclusive of 1
  client.say('#nsa', remarks[Math.random() * remarks.length | 0]);
}, REMARK_INTERVAL);

