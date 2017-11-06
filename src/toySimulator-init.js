


var currentCompassPos;
var allCompassPos =  ["NORTH", "EAST", "SOUTH", "WEST"];
var tableSize = [4,4];

var current_x;
var current_y;

var compassIndex;
var compassTotal;

var placement = false;



require(['./src/toySimulator-input.js']);
require(['./src/toySimulator-robot.js']);
require(['./src/toySimulator-compass.js']);
