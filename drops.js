class Drops{
   constructor(x,y,r){
       var options={
           isStatic:false,
           restitution:0.3,
           friction:0.1,
           density:1.2
       }
       this.x = x;
       this.y = y;
       this.r = r;
       this.body = Bodies.circle(this.body.x,this.body.y,this.body.r,options);
       World.add(world,this.body);
   }
   display(){
       var droppos = this.body.position;

       push();
       translate(droppos.x,droppos.y);
       strokeWeight(3);
       fill("blue");
       ellipseMode(CENTER);
       //image(this.image, 0,0,this.r);
       pop();
   }
}