// create class Peloton

// capitalize classes
class Peloton {
  constructor(
    // define paramethers
    name,
    seatHeight,
    seatDepth,
    handlebarHeight,
    powerOn,
    // for use with global object
    purchaseDate
  ) {
    // define properties
    this.name = name;
    this.seat = {
      height: seatHeight,
      depth: seatDepth,
    };
    this.handlebarHeight - handlebarHeight;
    this.powerOn = powerOn;
    // for use with global object
    this.purchaseDate = purchaseDate;
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
  pelotonAge() {
    let now = new Date();
    let acquired = new Date(this.purchaseDate);
    //   elapsed time in seconds
    let elapsed = now - acquired;
    let daysSincePurchase = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSincePurchase;
  }
}

console.log("The peloton object: ", Peloton);
export default Peloton;
