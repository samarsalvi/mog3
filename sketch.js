var PLAY = 0;
var END = 1;
var gameState = PLAY;
var ground
var bg , wolf, bear, pball, rstone
var neptune, nepimg
var bgimg, fireimg
var ground, fire
var wolf, wolfimg
var bear, bearimg, snow
var lifebar, powerbar, life = 190, power = 190, lifei, poweri

//score = 0;

function preload(){

bgimg = loadAnimation("icebg.gif")
nepimg = loadAnimation("1.png", "2.png" , "3.png", "4.png", "5.png", "6.png", "7.png" , "8.png", "9.png", "10.png")
gemimg =loadImage("Gem-red.png")
fireimg = loadAnimation("firee.gif")
wolfimg = loadImage("wolf.png")
bearimg = loadAnimation("b1.png", "b2.png", "b3.png","b4.png", "b5.png" )
poweri = loadImage("power.gif")
lifei = loadImage("life.png")
snowimg = loadAnimation("snow.gif")

}

function setup(){
    createCanvas(800, 400)

    bg = createSprite(450, 150)
    bg.addAnimation("moving" , bgimg)
    bg.scale =1.4

    neptune = createSprite(160, 280, 20, 20)
    neptune.addAnimation("running", nepimg)
    neptune.scale = 0.6

    ground = createSprite(0, 370, 1600, 20)
    ground.visible = false;





    gemGroup = new Group();
    powgroup = new Group();
    firegrp = new Group();
    monstergrp = new Group();
    snowgrp = new Group();
    
}

function draw(){
    background("cyan");
    //console.log(neptune.y)

    if(keyDown("space")&& neptune.y>150){
        neptune.velocityY = -10

    }
    neptune.velocityY = neptune.velocityY+0.8
    neptune.collide(ground)

    
        if (keyDown("h")){
            power = createSprite(neptune.x, neptune.y, 30, 30)
            power.addAnimation("shooting",poweri)
            power.scale = 0.2
            power.velocityX = 7
            powgroup.add(power)
            
        }
    

    





   
    

    //power.visible = false;

   // if (keyDown("P")) {
       // temp_power= createPower();
       // temp_power.y = neptune.y;
        //power.visible = true;
      



    
        gemspawn()
      //  createPower();
        spawnmonsters()
        drawSprites();
    

    text("X"+mouseX+","+"Y"+mouseY, mouseX, mouseY)
    showLife();
    showPower();


    
}


/*function createPower() {
    power= createSprite(360, 100, 5, 10);
    power.velocityX = -6;
    power.addImage("shoot", poweri);
    power.scale = 0.3;
    power.lifetime = 400;
    powgroup.add(power);
   // return power;
}*/


function showLife() {
    push();
    image(lifei, 200, 20, 20, 20);
    fill("white");
    rect(15, 20 , 185, 20);
    fill("#ffc400");
    rect(15, 20, 185, 20);
    noStroke();
    pop();
}
    function showPower() {
    push();
    image(poweri, 500, 40, 70, 70);
    fill("white");
    rect(560, 20 , 185, 20);
    fill("#ffc400");
    rect(560, 20, 185, 20);
    noStroke();
    pop();
}


function gemspawn() {
   
    if (frameCount % 250 === 0) {
      var gem = createSprite(600,120,40,10);
      gem.y = Math.round(random(80,120));
      gem.x = Math.round(random(700, 750));
      gem.addImage(gemimg);
      gem.scale = 0.5;
      gem.velocityX = -3;
      
       
      gem.lifetime = 300;
     
      gemGroup.add(gem);
      gem.scale = 0.09

    }
    if (frameCount % 522 === 0){
        var fire = createSprite( 760, 360, 20, 20 )
         fire.velocityX = -3
        fire.addAnimation("burning", fireimg)
        firegrp.add(fire)
        fire.scale= 0.12
        fire.lifetime = 300;
    }

}

function spawnmonsters(){
   if(  frameCount% 300 === 0 ) {
    
    var monster = createSprite(800, 300, 50, 50)
    monster.velocityX = -3
    var R = Math.round(random(1, 2))
    if(R===1){
        monster.addAnimation("growling", bearimg)
        monster.scale = 0.4
    
    }
    else{
        monster.addImage(wolfimg)
        monster.scale = 0.5
        monster.y = 330

    }
    monstergrp.add(monster)
    monster.lifetime = 700;
    }

    if(frameCount% 50 ===0) {
        snow = createSprite(400, 12, 20, 20)
        snow.x = Math.round(random(220, 550))
        snow.addAnimation("falling", snowimg);
        snow.scale = 0.2
        console.log(snow.scale)
        snow.velocityX = -8
        snow.velocityY = 8
        snowgrp.add(snow)
        snow.lifetime = 300;
    }

}



















































