song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;



function preload(){
song = loadSound("Butter.mp3");
}

function setup(){
canvas = createCanvas(500, 600);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('PoseNet is Initialized');
}

function draw(){
image(video, 0, 0, 500, 600);

fill("#f0000");
stroke("#f0000");

if(scoreRightWrist > 0 && scoreRightWrist<= 100)
{
 document.getElementById("speed1").innerHTML = "Speed = 0.5x"
 song.rate(0.5);
}

else if(scoreRightWrist > 100 && scoreRightWrist<= 200)
 {
    document.getElementById("speed1").innerHTML = "Speed = 1x"
    song.rate(1);
}

else if(scoreRightWrist > 200 && scoreRightWrist<= 300)
 {
    document.getElementById("speed1").innerHTML = "Speed = 1.5x"
    song.rate(1.5);
}

else if(scoreRightWrist > 300 && scoreRightWrist<= 400)
 {
    document.getElementById("speed1").innerHTML = "Speed = 2x"
    song.rate(2);
}

else if(scoreRightWrist > 400)
 {
    document.getElementById("speed1").innerHTML = "Speed = 2.5x"
    song.rate(2.5);
}
}


function play(){
song.play();
song.setVolume(1);
song.rate(1);
}

function stop(){
song.stop()
}

function gotPoses(results){
if(results.length > 0){
  console.log(results);
 scoreRightWrist = results[0].pose.keypoint[10].score;
 scoreLeftWrist = results[0].pose.keypint[9].score;
 console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

  leftWristX = results[0].pose.leftWrist.x;
  leftWristY = results[0].pose.leftWrist.y;
  console.log("leftWristX = " + leftWristX + "leftWristY = " +leftWristY );

  rightWristX = results[0].pose.rightWrist.x;
  rightWristY = results[0].pose.rightWrist.y;
  console.log("rightWristX = " + rightWristX + "rightWristY = " +rightWristY );
}
}
