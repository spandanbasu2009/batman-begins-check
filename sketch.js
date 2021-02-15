const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var drop;
var maxDrops = 100;

function preload(){
    
}

function setup(){
   var canvas = createCanvas(1500,400);
    engine = Engine.create();
    world = engine.world;

    drop = new Drops(100,100,5);
    
}

function draw(){
    background("white");

    for(var i=0; i<drop; i++){
        maxDrops.push(new createGroup(random(0,400),random(0,400)));
    }

    drop.display();

    drawSprites();
}   

