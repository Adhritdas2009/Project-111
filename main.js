Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90
})

webcamera=document.getElementById("webcamera")
Webcam.attach("#webcamera")

function capture(){
    Webcam.snap(function (data_uri){
        document.getElementById("snapcam").innerHTML="<img src="+data_uri+" id='snappie'>"
    })
}
console.log("ml5 version is", ml5.version)

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lCTX5JaUu/model.json", modelLoaded);

function modelLoaded(){
    console.log("The model has been initialized")
}