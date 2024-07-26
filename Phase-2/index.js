function iphone2(ASIN, color, display, camera, bluetooth){
    let obj  = {};

    obj.ASIN = ASIN;
    obj.color = color;
    obj.display = display;
    obj.camera = camera;
    obj.bluetooth = bluetooth;

    obj.dial  = function(){
        console.log("tring..tring..")
    }

    obj.sendMessage = function(){
        console.log("Sending message")
    }

    obj.cameraClick = function(){
        console.log("Camera clicked")
    }

    obj.bluetooth = function(){
        console.log("Bluetooth connected successfully...")

    }
    return obj;

}

let i2 = iphone2("B09X67JBQV", "Gray", 7.8, "2.0 MP","Bluetooth 5.1")
console.log(i2.bluetooth());