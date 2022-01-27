function Player(x,y)
{
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed =0;
    this.friction =0.6;
    this.maxspeed = 10;
    this.width= 100;
    this.height= 100;
    this.state = true
    //console.log(stage);


    this.step = function()
    {
        //console.log(x++);
       // draw(x, y)
       //this.x=x++
       //console.log(this.x);
       
    

       //movement 
       if(this.state== true)
       {
            //Braek
           if(!left && !right || left && right)
           {
               this.xspeed *= this.friction;

           }
           //move left
           else if(left)
           {
               //alert("left")
                this.xspeed--; 
            if(this.xspeed < -this.maxspeed)
            {
                this.xspeed = -this.maxspeed
            }  
            
           }//move right
           else if(right)
           {
               //alert("right")
                this.xspeed++;
            if(this.xspeed > this.maxspeed)
            {
                this.xspeed = this.maxspeed
            }   
           }
        
           if(!down && !up || down && up)
           {
               this.yspeed *= this.friction;
               
    

           }
           //move down
           else if(down)
           {
               
                this.yspeed++;  

             
           }
        
           else if(up)
           {
             this.yspeed -= 30;
             //alert(this.yspeed)
            
            }
            this.yspeed+=2
                //correct Speed
            if(this.yspeed < -this.maxspeed)
            {
                this.yspeed = -this.maxspeed;
            } 
            if(this.yspeed > this.maxspeed)
            {
                this.yspeed = this.maxspeed
            }  
            if(this.xspeed>0)
                this.xspeed=Math.floor(this.xspeed);
            else
                this.xspeed=Math.ceil(this.xspeed);
            if(this.yspeed>0)
                this.yspeed=Math.floor(this.yspeed);
            else
                this.yspeed=Math.ceil(this.yspeed);




        // horizantal Collision
        let horizantalReact ={
            x: this.x + this.xspeed,
            y: this.y,
            height: this.height,
            width : this.width
        }
        // vertical Collision
        let verticalReact ={
            x: this.x ,
            y: this.y + this.yspeed,
            height: this.height,
            width : this.width
        }

        // Intersection check

        for (let i = 0; i < border.length; i++) {
            let borderReact= {
                x: border[i].x ,
                y: border[i].y ,
                height: border[i].height,
                width : border[i].width
            }

            if(checkIntersection(horizantalReact,borderReact))
            {
                //alert(borderReact.width)
                while(checkIntersection(horizantalReact, borderReact))
                {
                    horizantalReact.x -= Math.sign(this.xspeed);
                }
                for (let i = 0; i < border.length; i++) {
                    if(border[i].t==1)
                    {
                       // alert("out")
                    }
                    
                }
                this.xspeed =0;
            }
            if(checkIntersection(verticalReact,borderReact))
            {
                //alert(borderReact.width)
                while(checkIntersection(verticalReact, borderReact))
                {
                    verticalReact.y -= Math.sign(this.yspeed);
                }
                
                this.yspeed =0;
            }
            
        }
        
            

        
        this.x+=this.xspeed;
        this.y+=this.yspeed;

    
       }
    //    if (this.y>=650)
    //    {
    //        canvas.style.display="none"
    //        //setInterval()
    //        document.write("You loss")
    //        location.reload();
    //    }
    
        
    }
    
    this.draw = function(x,y){
        
        var img = new Image(); //Creates an HTMLImageElement
        img.src = "/img/plane.png"
        ctx.drawImage(img, this.x, this.y,this.width,this.height);
    //    ctx.fillStyle = "green"
      //  ctx.fillRect( this.x,this.y,this.width,this.height)
    }

}
