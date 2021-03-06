var umbrella,raindrops,man,thunder

var raindrops=createSprite(100,200,5,5);
raindrops.shapeColor="blue"

var umbrella=createSprite(200,100,30,30);
umbrella.shapeColor="yellow"

function preload(){
    
}

function setup(){
   
    
}

function draw(){
    DrawSprites();
    var maxDrops =100;
    for (var i=0;i<maxDrops; i++){
        maxDrops.push(new createdrop random(0,400), random(0,400)));
    }
    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370) random(10,30),10,10);
        switch(rand){
            case 1:thunder.addImage(thunder1);
            break;
            case 2:thunder.addImage(thunder2);
            break;
            default:break;
        }
        thunder.scale = random(0.3,0.6)
    }
}   

