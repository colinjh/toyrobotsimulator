


var input = {

    init: function() {

        this.reportResult = document.getElementById('result');

        this.allowedInput = ["PLACE", "MOVE", "LEFT", "RIGHT", "REPORT"];

    },
    tableBoundry: function(value) {
        if(!(isNaN(value))) {
            if((value < 0) || value > tableSize[0] ) {
                input.error('The robot has reached its boundry');

                return false;
            }else {
                return value;
            }
        }else {
            placement = false;
            input.error('place a valid co-ordinate');
        }

    },
    command: function(value) {
        input.errorClear();
        var correctedValue = value.trim().toUpperCase();
        if (!placement) {
            //splits the values into an array
            var splitValue = correctedValue.split(' ');
            firstWord = splitValue.splice(0,1)[0];
            //take out starting y and direction
            if (typeof(splitValue[0]) !== "undefined") {
                initPlacement = splitValue[0].split(',');
            }else {
                input.error('Start with a valid place x,y,direction');
                input.clear();
            }

            new_x = parseInt(initPlacement[0]);
            new_y = parseInt(initPlacement[1]);

            current_x = input.tableBoundry(new_x);
            current_y = input.tableBoundry(new_y);


            if( firstWord === this.allowedInput[0] )  {
                placement = true;
                input.clear();
            }else {
                input.error('Start with a valid place x,y,direction')
                input.clear();
            }


            newCompassPos = initPlacement[2];
            if (allCompassPos.indexOf(newCompassPos) > -1) {
                currentCompassPos = newCompassPos;
            }else {
                input.error('place a valid direction, north, east, south or west');
                input.clear();
                return false;
            }

            //make sure valid command is entered

            return currentCompassPos;
            return current_x;
            return current_y;




        } else {
            if (this.allowedInput.indexOf(correctedValue) > 0) {
                process.movement(correctedValue);
            }else {
                input.error('enter a valid command, either move, left, right or report');
                input.clear();
            }

        }
    },

    clear: function() {
        document.getElementById('input-field').value="";
    },
    report: function(string) {
        this.reportResult.innerHTML = string;
    },
    error: function(string) {

        this.reportResult.innerHTML = '<span id="error">' + string + '</span>';
    },
    errorClear: function(string) {

        this.reportResult.innerHTML = '';
    }
}
input.init();
