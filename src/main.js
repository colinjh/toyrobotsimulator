var currentCompassPos = 'NORTH';

var max_x = 4;
var max_y = 4


var process = {

    input: function(value) {
        switch(value){
            case "MOVE":
                robot.move();
            break;
            case "LEFT":
                compass.left();
            break;
            case "RIGHT":
                compass.right();
            break;
        }
    }
}

var compass = {

    left: function() {
        if (currentCompassPos === 'NORTH') {
            currentCompassPos === 'WEST';
        }else if (currentCompassPos === 'EAST') {
            currentCompassPos === 'NORTH';
        }else if (currentCompassPos === 'SOUTH') {
            currentCompassPos === 'EAST';
        }else if (currentCompassPos === 'WEST') {
            currentCompassPos === 'SOUTH';
        }
        return currentCompassPos;
    },
    right: function() {
        if (currentCompassPos === 'NORTH') {
            currentCompassPos === 'EAST';
        }else if (currentCompassPos === 'EAST') {
            currentCompassPos === 'SOUTH';
        }else if (currentCompassPos === 'SOUTH') {
            currentCompassPos === 'WEST';
        }else if (currentCompassPos === 'WEST') {
            currentCompassPos === 'NORTH';
        }
        return currentCompassPos;

    }
}

var robot = {

    move: function() {

    }
}
