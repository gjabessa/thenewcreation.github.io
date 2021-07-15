const express = require("express");
const app = express();
const path = require("path")
import * as FaceDetector from 'expo-face-detector';
<Camera
  // ... other props
  onFacesDetected={this.handleFacesDetected}
  faceDetectorSettings={{
    mode: FaceDetector.Constants.Mode.fast,
    detectLandmarks: FaceDetector.Constants.Landmarks.none,
    runClassifications: FaceDetector.Constants.Classifications.none,
    minDetectionInterval: 100,
    tracking: true,
  }}
/>;

detectFaces = async imageUri => {
    const options = { mode: FaceDetector.Constants.Mode.fast };
    return await FaceDetector.detectFacesAsync(imageUri, options);
  };
require("./data/db"); //always import before any routes
app.use(express.json({extended:false}))
app.set("port",5050);

app.use("/api", function(req,res,next){
    res.header("Access-Control-Allow-Origin", "http://localhost:4200")
    next();
})

const routes = require("./routes/routes")

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use("/api",routes)
app.use(express.static(path.join(__dirname, "public")));
const server = app.listen(app.get("port"),function(){
    console.log("Running on port ",server.address().port);
});
