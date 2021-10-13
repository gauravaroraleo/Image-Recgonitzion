Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90

})
c1 = document.getElementById("Camera");
Webcam.attach(c1)

function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("Result").innerHTML = '<img id="myimage" src="' + data_uri + '"/>';
    });
}
console.log("ml5 version: ", ml5.version);
mymodel = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bZj8HNYvC/model.json', modelLoaded);

function modelLoaded() {
    console.log("Your model has loaded");
}

function Identify() {
    mi = document.getElementById("myimage");
    mymodel.classify(mi, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("name").innerHTML = results[0].label
        document.getElementById("percent").innerHTML = results[0].confidence.toFixed(2)
    }
}
