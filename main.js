song_1="";
song_2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song_1="music.mp3";
    song_2="music2.mp3";
}
function setup(){
    canvas=create.Canvas(600,500);
    canvas.center();

    video=createCapture();
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is intialized');
}
function gotPoses(results){
    if(results.lenght>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);

        righttWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("righttWristX = "+rightWristX+"rightWristY = "+rightWristY);
    }
}
function draw(){
    image(video,0,0,600,500);
}
