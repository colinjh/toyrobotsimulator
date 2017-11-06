# Toy Robot simulator

A toy robot simulator written in javascript

## Installation

Open index.html in browser, place command in input field and press enter.

## Instructions

The simulator only accepts single commands via the input field. The commands are:

- **PLACE X, Y, DIRECTION (PLACE 0,1,NORTH):** Place the robot on the table.
- **MOVE:** Move the robot one unit in the direction it is facing
- **LEFT:** Turn the robot left
- **RIGHT:** Turn the robot right
- **REPORT:** Report the current position and direction of the robot

The robot is on a table in a 5x5 grid and can not move outside these bounds

## Dependencies

The robot will run dependency free but an internet connection will be required for tests as they are brought in via a cdn

## Tests

Click 'Run Tests' to run Mocha Chai tests
