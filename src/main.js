var currentCompassPos = '';

var start_x;
var start_y;

var current_x = '';
var current_y = '';

var max_x = 4;
var max_y = 4

var placement = false;

var process = {

    input: function(value) {
        var correctedValue = value.toUpperCase();

        if (!placement) {
            //splits the values into an array
            var splitValue = correctedValue.split(',');

            //take out starting y and direction
            current_y = splitValue[1];
            currentCompassPos = splitValue[2];

            var placementXvalue = splitValue[0].split(' ');

            var initPlacement = placementXvalue[0];
            current_x = placementXvalue[1];

            console.log(placementXvalue);
            if( initPlacement === "PLACE" ) {
                placement = true;
            }else {
                console.log('Start with a valid place,x,y,direction');
            }
            // console.log(currentCompassPos);
            return currentCompassPos;
            return current_x;
            return current_y;



        } else {
            process.movement(correctedValue);
        }

    },

    movement: function(value) {
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
            case "REPORT":
                robot.report();
            break;
        }
    }
}

var compass = {

    left: function() {
        if (currentCompassPos === 'NORTH') {
            currentCompassPos = 'WEST';
        }else if (currentCompassPos === 'EAST') {
            currentCompassPos = 'NORTH';
        }else if (currentCompassPos === 'SOUTH') {
            currentCompassPos = 'EAST';
        }else if (currentCompassPos === 'WEST') {
            currentCompassPos = 'SOUTH';
        }
        return currentCompassPos;
    },
    right: function() {
        if (currentCompassPos === 'NORTH') {
            currentCompassPos = 'EAST';
        }else if (currentCompassPos === 'EAST') {
            currentCompassPos = 'SOUTH';
        }else if (currentCompassPos === 'SOUTH') {
            currentCompassPos = 'WEST';
        }else if (currentCompassPos === 'WEST') {
            currentCompassPos = 'NORTH';
        }
        return currentCompassPos;

    }
}

var robot = {

    move: function() {

    },

    report: function() {
        console.log(current_x + ',' + current_y+ ',' + currentCompassPos);
    }

}
