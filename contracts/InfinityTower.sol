//SPDX-License-Identifier: GPL - 3.0

pragma solidity >=0.7.0 <0.9.0;

contract InfinityTower{

    //defined what a floor is
    struct Floor{
        string ownerName;
        string message;
        string link;
        uint color;
        uint windowsTint;
    }

    //because we don't want to go through each floor in the array to get all info, we create an event
    event NewFLoor(uint floor, string ownerName, string message, string link, uint color, uint windowsTint);

    //our tower needs these floors
    Floor[] public floors; 

    //the number of floors, don't need
    uint public nbFloors;
   
    //the _ means its not variables that exist in our contract
    function createFloor(string memory _ownerName, string memory _message, string memory _link, uint _color, uint _windowsTint ) public {
        //push this info onto floors
        floors.push(Floor (_ownerName, _message, _link, _color, _windowsTint));
        //emit will display to the frontend that a newfloor has been created
        emit NewFLoor(nbFloors, _ownerName, _message, _link, _color, _windowsTint);
        nbFloors++;
    }

}