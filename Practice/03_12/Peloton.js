// create class Peloton

// capitalize classes
class Peloton {
  constructor(
    // define paramethers
    name,
    seatHeight,
    seatDepth,
    handlebarHeight,
    powerOn
  ) {
    // define properties
    this.name = name;
    this.seat = {
      height: seatHeight,
      depth: seatDepth,
    };
    this.handlebarHeight - handlebarHeight;
    this.powerOn = powerOn;
  }
  // add methods
  togglePower(powerStatus) {
    this.powerON = powerStatus;
  }
  newSeatHeight(seat_h) {
    this.seat.height = seat_h;
  }
  newSeatDepth(seat_d) {
    this.seat.depth = seat_d;
  }
}

console.log("The peloton object: ", Peloton);
export default Peloton;
