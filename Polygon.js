class Polygon{
constructor(x,y,width,height){
var options={
isStatic:false
}
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height

this.image=loadImage("polygon.png")
World.add(world,this.body)


}
display(){
var pos=this.body.position
rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height)
image(this.image,0,0,this.width,this.height)

}





}