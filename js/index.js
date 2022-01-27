var canvas;
var ctx;
var gameLoop;
var player;
 


//movemnet of object


var left;
var right;
var up;
var down;
var jump;
let stage=1;
var border= [];
var border1=[];



window.addEventListener('load', function(){
    canvas = document.querySelector("#game-01");
    ctx = canvas.getContext("2d");
    player = new Player(10,10);
    // for (let i = 0; i < 6; i++) {
    //     border2.push(new Border(0+50*i,520,100,100,1))
        
    //  }
    border.push(new Border(0,430,100,100,1))
   border.push(new Border(110,330,100,100,2))
   border.push(new Border(220,430,100,100,1))
   border.push(new Border(330,230,100,100,2))
   border.push(new Border(440,430,100,100,1))
   border.push(new Border(550,330,100,100,2))
   border.push(new Border(660,430,100,100,1))
   border.push(new Border(770,130,100,100,2))
   border.push(new Border(880,430,100,100,1))
   border.push(new Border(990,230,100,100,2))
   border.push(new Border(1010,430,100,100,1))
   border.push(new Border(1120,430,100,100,2))
   border.push(new Border(1230,430,100,100,1))
   border1.push(new Border(0,430,100,100,1))
   border1.push(new Border(110,330,100,100,2))
  // border1.push(new Border(220,10,100,100,3))
   border1.push(new Border(330,230,100,100,2))
   border1.push(new Border(440,430,100,100,3))
   border1.push(new Border(550,330,100,100,3))
   border1.push(new Border(660,430,100,100,1))
   border1.push(new Border(770,130,100,100,3))
   border1.push(new Border(880,430,100,100,1))
   border1.push(new Border(990,230,100,100,2))
   border1.push(new Border(1010,430,100,100,2))
   border1.push(new Border(1120,430,100,100,2))
   border1.push(new Border(1230,430,100,100,1))
    setInputs(); 

    gameLoop = this.setInterval(step,1000/100);


    
    function step()
    {
        player.step();
        //player1.step();
        draw();
    }
    function draw()
    {

        var img = new Image();
        img.src = "/img/BG.png"
        ctx.drawImage(img, 0, 0,1300,1000);

        // ctx.fillStyle = "white"
        // ctx.fillRect( 0,0,1300,1000)
        player.draw()
        if(stage==1)
        {
            for (let i = 0; i < border.length; i++) {
                border[i].draw();
                
            }
        }
        if(player.y>650)
        {
            location.reload()
        }
        if(player.x>1320)
        {
            stage++
            if(stage>2)
            {
                document.write(`<h1 class"win">${"you win"}<h1>`)
            
            }
            player.x=10
            player.y=10
        }
        if(stage==2)
        {
            console.log(stage);
            for (let j = 0; j < border1.length; j++) {
                border1[j].draw();
                //border1[1].draw();  
                
            }
            border1[1].draw()
        }
        
        // border[0].draw()
        // border[1].draw()
        
    }


    function setInputs(){
        document.addEventListener('keydown', function(event)
        {
            if(event.key=='w'|| event.key=='ArrowUp')
            up=true;
            else if(event.key=='a'|| event.key=='ArrowLeft')
            left=true;
            else if(event.key=='s'|| event.key=='ArrowDown')
            down=true;
            else if(event.key=='d'|| event.key=='ArrowRight')
            right=true;
            //else if(event.key=='32'||event.key=='j')
            



        })
    document.addEventListener('keyup', function(event)
        {
            if(event.key=='w'|| event.key=='ArrowUp')
            up=false;
            else if(event.key=='a'|| event.key=='ArrowLeft')
            left=false;
            else if(event.key=='s'|| event.key=='ArrowDown')
            down=false;
            else if(event.key=='d'|| event.key=='ArrowRight')
            right=false;
            else if(event.key=='32'||event.key=='j')
            jump=false;



        })
    }
});

function checkIntersection(r1,r2)
{
    if(r1.x >= r2.x + r2.width)
    return false;
    else if(r1.x + r1.width  <= r2.x )
    return false;
    else if(r1.y >= r2.y +r2.height)
    return false;
    else if(r1.y + r1.height  <= r2.y)
    return false;
    else
    return true;
}
