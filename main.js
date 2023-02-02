var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recogniton = new SpeechRecognition();
var img_id="selfie1";
function start()
{
    recogniton.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});
recogniton.onresult = function(event) {
    
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    
    if(Content=="selfie")
    {
        console.log("taking selfie --- ");
        speak();
    }
    document.getElementById("textbox").innerHTML = Content;
    speak();
}


function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);



setTimeout(function()
    {
        img_id= "selfie1";
        take_snapshot();
        speak_data = "Taking your selfie in the next 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    }, 5000);
setTimeout2(function()
    {
        img_id= "selfie2";
        take_snapshot();
        speak_data = "Taking your selfie in the next 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    }, 10000);
setTimeout3(function()
    {
        img_id= "selfie3";
        take_snapshot();
        speak_data = "Taking your selfie in the next 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    }, 15000);
}
function take_snapshot(){
    console.log(img_id);

    if (img_id=="selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+ data_uri +'"</>';
        Webcam.snap(function(data_uri){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
        });
    }
    if (img_id=="selfie2"){
        document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+ data_uri +'"</>';
        Webcam.snap(function(data_uri){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'">';
        });
    }
    if (img_id=="selfie3"){
        document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+ data_uri +'"</>';
        Webcam.snap(function(data_uri){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'">';
        });
    }
}
function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}