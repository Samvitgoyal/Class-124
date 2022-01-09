function preload(){

}

function draw(){
background("#1708bd");

}

function setup(){
    canvas=createCanvas(380,420);
 canvas.position(845,110);
 video=createCapture(VIDEO);
video.size(376,456);

poseNet= ml5.poseNet(video, modelloaded);
poseNet.on("pose",gotposes);
}

function modelloaded(){
    console.log("poseNet is intialized");

}

function gotposes(results){
if(results.length>0){
    console.log(results);
    
}
}