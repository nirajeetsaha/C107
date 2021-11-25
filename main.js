function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/g5Woowep6/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
