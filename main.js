song="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";
scoreleftWristY=0;
scorerightWristY=0;

function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,600,500) ;

fill("#FF0000"); 
stroke("#FF0000");


if(scoreleftWristY>0.2){
circle(leftWristX,leftWristY,20);
InNumberscoreleftWristY=Number(leftWristY);
remove_decimal=floor(InNumberscoreleftWristY);
volume=remove_decimal/500;
document.getElementById("volume").innerHTML="Volume = "+volume;
song.setVolume(volume);

}

if(scorerightWristY>0.2){
    circle(rightWristX,rightWristY,20);
if(scorerightWristY>0 && scorerightWristY<=100){
document.getElementById("speed").innerHTML="Speed"+"0.5x";
song.rate(0.5);

}

if(scorerightWristY>100 && scorerightWristY<=200){
    document.getElementById("speed").innerHTML="Speed"+"1x";
    song.rate(1);
    
    }

    if(scorerightWristY>200 && scorerightWristY<=300){
        document.getElementById("speed").innerHTML="Speed"+"1.5x";
        song.rate(1.5);
        
        }

        if(scorerightWristY>300 && scorerightWristY<=400){
            document.getElementById("speed").innerHTML="Speed"+"2x";
            song.rate(2);
            
            }

            if(scorerightWristY>400 && scorerightWristY<=500){
                document.getElementById("speed").innerHTML="Speed"+"2.5x";
                song.rate(2.5);
                
                }
                
            
        
}
}
function modelloaded(){
console.log("posenet is initialized");


}

function preload(){

song=loadSound("song2.mp3");


}
function play(){
song.play();
song.setVolume(1);
song.rate(1);
}


function gotPoses(results){
if(results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
scorerightWristY=results[0].pose.keypoints[10].score;
scoreleftWristY=results[0].pose.keypoints[9].score;
console.log("scoreleftWristY = "+ scoreleftWristY);
console.log("leftWristX"+leftWristX+"leftWristY"+leftWristY);
console.log("scorerightWristY = "+ scorerightWristY);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristX"+rightWristX+"rightWristY"+rightWristY);
}



}
