function iphone1(ASIN, color, display, camera){
    let obj  = {};

    obj.ASIN = ASIN;
    obj.color = color;
    obj.display = display;
    obj.camera = camera;

    obj.dial  = function(){
        console.log("tring..tring..")
    }

    obj.sendMessage = function(){
        console.log("Sending message")
    }

    obj.cameraClick = function(){
        console.log("Camera clicked")
    }
    return obj;

}

let i1 = iphone1("B09X67JBQV", "Gray", 7.8, "2.0 MP")
console.log(i1)
