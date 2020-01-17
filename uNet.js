let uNet;
let img;
let segmentationImage;
let status;
function preload(){
uNet = ml5.uNet('face', modelReady);
}
// load uNet model

function setup() {
  createCanvas(4032, 3024);
  segmentationImage = createImage(width, height);
  img = createImg("banana.JPG", imageReady);
  img.hide();
  img.size(4032,3024);
  
}
      
function modelReady(){
  console.log("model Ready!")
  //status = true;
}
function imageReady(){
  console.log("Detecting")
  uNet.segment(img, gotResult);
}
function gotResult(err, result) {
  if (err) {
    console.log(err);
  }
  segmentationImage = result.backgroundMask;
  objects = result;
  console.log(objects);
  imagedraw();
}

function imagedraw() {
    background(0);
    image(segmentationImage, 0, 0, width, height);
    console.log(segmentationImage);
}
