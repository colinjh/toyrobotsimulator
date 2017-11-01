var currentCompassPos;

var current_x;
var current_y;

var max_x = 4;
var max_y = 4

var placement = false;

var input = {

    clear: function() {
        // console.log('clear');
        document.getElementById('input-field').value="";
    }
}

var process = {

    input: function(value) {
        var correctedValue = value.toUpperCase();

        if (!placement) {
            //splits the values into an array
            var splitValue = correctedValue.split(',');

            //take out starting y and direction
            current_y = parseInt(splitValue[1]);
            currentCompassPos = splitValue[2];

            var placementXvalue = splitValue[0].split(' ');

            var initPlacement = placementXvalue[0];
            current_x = parseInt(placementXvalue[1]);

            //make sure valid command is entered
            if(( initPlacement === "PLACE" )  && (typeof(currentCompassPos) !== "undefined")) {
                placement = true;
                input.clear();
            }else {
                console.log('Start with a valid place,x,y,direction');
                input.clear();
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
            default:
                console.log('enter a valid command, either move, left right or report');

        }
        input.clear();
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

        if ((currentCompassPos === 'NORTH') && (current_y < max_y)){
            current_y = current_y + 1;
        }else if ((currentCompassPos === 'SOUTH') && (current_y < max_y)){
            current_y = current_y - 1;
        }else if ((currentCompassPos === 'EAST') && (current_x < max_x)) {
            current_x = current_x + 1;
        }else if ((currentCompassPos === 'WEST') && (current_x < max_x)) {
            current_x = current_x - 1;
        }else {
            console.log('The robot has reached its boundry');
        }

    },

    report: function() {
        console.log(current_x + ',' + current_y+ ',' + currentCompassPos);
        placement = false;
    }

}
