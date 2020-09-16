var dog,happydog;
var database;
var foodS;
var foodStock;

function preload()
{
  dogImg=loadImage("images/dogImg.png");
  happydogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  dog = createSprite(250,250,20,20);
  dog.addImage("label",dogImg);
  dog.addImage("label1",happydogImg);
  dog.scale = 0.5;
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
 background(46, 139, 87);

 if(keyWentDown(UP_ARROW)){
   WriteStock(foods);
   dog.changeImage("label1",happydogImg);
 }

 

  drawSprites();
  text("Remaining food : "+foodS,170,200)
  //add styles here

}

function readStock(data){
 foods = data.val()
}

function WriteStock(x){
  if(x<=0){
     x=0;
     }

     else{ 
       x=x-1;
      }
   database.ref('/').update({ 
     food:x })
  
}



