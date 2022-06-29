video = "";
status1 = "";
function preload()
{
video = createVideo("video.mp4");
video.hide();
}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
}

function draw()
{
    image(video, 0, 0, 500, 500);
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("cocossd Model Loaded!");
    status1 = true;
    video.speed(1);
    video.loop();
    video.volume(0);
}
