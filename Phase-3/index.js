
function iPhone3(ASIN, color, display, camera, bluetooth) {
    
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;
  }
  

  iPhone3.prototype.dial = function() {
    return "tring.. tring...";
  };
  
  iPhone3.prototype.sendMessage = function() {
    return "Sending message...";
  };
  
  iPhone3.prototype.cameraClick = function() {
    return "Camera clicked";
  };
  
  iPhone3.prototype.connectBluetooth = function() {
    return "Bluetooth connected successfully...";
  };
  
  // Usage example
  let i3 = {};
  iPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");
  
  // Properties
  console.log(i3.ASIN); // "B09X67JBQV"
  console.log(i3.color); // "Gray"
  console.log(i3.display); // 7.8
  console.log(i3.camera); // "2.0 MP"
  console.log(i3.bluetooth); // "Bluetooth 5.1"
  
  // Methods
  console.log(i3.dial()); // "tring.. tring..."
  console.log(i3.sendMessage()); // "Sending message..."
  console.log(i3.cameraClick()); // "Camera clicked"
  console.log(i3.connectBluetooth()); // "Bluetooth connected successfully..."

