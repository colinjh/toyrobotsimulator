require(['./src/toySimulator-input.js']);

var robot = {



    move: function(currentCompassPos) {
        switch(currentCompassPos) {

            case "NORTH" :
                new_y = current_y + 1;
                current_y = input.tableBoundry(new_y);
                break;
            case "SOUTH":
                new_y = current_y - 1;
                current_y = input.tableBoundry(new_y);
                break;
            case "EAST":
                new_x = current_x + 1;
                current_x = input.tableBoundry(new_x);
                break;
            case "WEST":
                new_x = current_x - 1;
                current_x = input.tableBoundry(new_x);
                break;
            default:
                break;
        }


    },

    report: function() {
        input.report(current_x + ',' + current_y + ',' + currentCompassPos);
        placement = false;
    }

}

var process = {

    movement: function(value) {
        switch(value){
            case "MOVE":
                robot.move(currentCompassPos);
                break;
            case "LEFT":
                compass.move(false);
                break;
            case "RIGHT":
                compass.move(true);
                break;
            case "REPORT":
                robot.report();
                break;
            default:
                break;

        }
        input.clear();
    }
}
