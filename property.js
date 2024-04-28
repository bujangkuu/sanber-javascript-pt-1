var car = {
    // properti
    type: "Fiat",
    model: "500",
    color: "white",

    // method
    start: function() {
        console.log("ini method start");
    },
    drive: function() {
        console.log("ini method drive");
    },
    brake: function() {
        console.log("ini method brake");
    },
    //function/method dengan param
    stop: function(namaMobil) {
        console.log("ini method stop" + namaMobil);
    }
};

exports.car = car