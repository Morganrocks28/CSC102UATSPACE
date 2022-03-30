// these functions and class will allow the data to be displayed and updated every 5 seconds 

class InputData {
    constructor (
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ) {
        this.time_seconds = time_seconds;
        this.latitude =  latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp =  bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp =  cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV =  UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY =  magneticY;
        this.magneticZ =  magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

// function to obtain data from the dataLoader.js file
function getData() {
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function updateDisplay() {
    theTime = new Date();
    console.log("The time is: " + theTime.getHours() + ":" + theTime.getMinutes() + ":" + theTime.getSeconds());
    document.getElementById("timeStamp").innerHTML =
        theTime.getHours() + ":" + theTime.getMinutes() + ":" + theTime.getSeconds();
}