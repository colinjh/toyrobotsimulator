require(['./src/toySimulator-init.js']);

var compass = {

    move: function(clockwise) {
        var newCompassIndex;

        var compassIndex = allCompassPos.indexOf(currentCompassPos);

        var compassTotal = allCompassPos.length;

        if(clockwise) {
            if(compassIndex === (compassTotal - 1)) {
                newCompassIndex = 0;
            }else{
                newCompassIndex = compassIndex + 1;
            }
        }else {
            if(compassIndex === 0) {
                newCompassIndex = (compassTotal - 1);
            }else{
                newCompassIndex = compassIndex - 1;
            }
        }
        currentCompassPos = allCompassPos[newCompassIndex];
    }
}
