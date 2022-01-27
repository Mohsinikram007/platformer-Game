function Border(x,y,width,height,t)
{
    this.x =x
    this.y=y
    this.width =width
    this.height=height
    this.t =t

    this.draw=function()
    {
        if(t===1)
        {

            var img = new Image(); //Creates an HTMLImageElement
            img.src = "/img/tree_2.png"
            ctx.drawImage(img, this.x,this.y,this.width,this.height);
            //ctx.fillStyle = "#8F2141"
            //ctx.fillRect( this.x,this.y,this.width,this.height)
        }
        if(t===2)
        {
            var img = new Image(); //Creates an HTMLImageElement
            img.src = "/img/Crate.png"
            ctx.drawImage(img, this.x,this.y,this.width,this.height);
            // ctx.fillStyle = "#161656"
            // ctx.fillRect( this.x,this.y,this.width,this.height)
        }
        if(t===3)
        {
            var img = new Image(); //Creates an HTMLImageElement
            img.src = "/img/SnowMan.png"
            ctx.drawImage(img, this.x,this.y,this.width,this.height);
            // ctx.fillStyle = "#FF5733"
            // ctx.fillRect( this.x,this.y,this.width,this.height)
        }
    }
    
}