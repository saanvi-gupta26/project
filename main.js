var SpeechRecognition = window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
 function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
  
} 

recognition.onresult = function  (event) 
{
 console.log(event); 
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML = Content;
if(Content=="take my selfie"){
console.log("take my selfie");
speak();
}

}

function speak(){
  synth=window.speechSynthesis;
  speak_data="Taking your selfie in 5 seconds";
  utterthis=new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterthis);
  Webcam.attach(camera);
  setTimeout(function(){
take_snapshot();
  },5000);

}
camera=document.getElementById("camera");
Webcam.set({
  width:360,
  height:250,
  image_format:'png',
  png_quality:90
});
function take_snapshot(){
  Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
save();
  });
}
function save(){
  link=document.getElementById("link");
  img=document.getElementById("selfie_image").src;
  link.href=img;
  link.click();
}