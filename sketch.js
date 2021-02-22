//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;
var foodLeft;

function preload()
{
	//load images here
  dogImage = loadImage("images/Dog.png")
  happyDog = loadImage("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dogImage)
  dog.scale = 0.3
  database = firebase.database();
  var foodLeft = database.ref('food')
  foodLeft.on("value",readFood,showerror)
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
fill("white");
textSize(25);
text("Food Remaining : "+foodS,200,100)
  drawSprites();
  //add styles here

}

function readFood(data){
  foodS = data.val()
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}

function showerror(){
  console.log("Error")
}