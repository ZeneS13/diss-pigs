class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity=255;
  }
display(){
  
  push();
  if(this.body.speed>5){
    World.remove(world, this.body);
    this.visiblity= this.visiblity-10;
    tint(255,this.visiblity);
    image(this.image,this.body.position.x,this.body.position.y);

  }
  else{
    super.display();
  }
  pop();
}
};