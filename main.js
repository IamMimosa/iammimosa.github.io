var canvas = document.getElementById('canvas');
canvas.width = 1200;		
canvas.height = 1200;	

var ctx = canvas.getContext('2d');

var monster = new Object();
monster.img = new Image();
monster.img.src = 'img/monster1.svg';
monster.x = 0;
monster.y = 0;
monster.move = 0;

var mapchip = new Image();
mapchip.src = 'img/map01.jpeg';

var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';

var map = [
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
]

function main() {
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(0, 0, 1200, 1200);
    
    for (var y=0; y<map.length; y++) {
        for (var x=0; x<map[y].length; x++) {
            if ( map[y][x] === 0 ) ctx.drawImage( mapchip, 0, 60, 60, 60, 60*x, 60*y, 60, 60 );
            if ( map[y][x] === 1 ) ctx.drawImage( mapchip, 60, 0, 60, 60, 60*x, 60*y, 60, 60 );
        }
    }
    
        ctx.drawImage(monster.img, monster.x, monster.y);
    
        addEventListener("keydown", keydownfunc, false);
        
        addEventListener("keyup", keyupfunc, false);

        if ( monster.move === 0 ) {
            if ( key.left === true ) {
                var x = monster.x/60;
                var y = monster.y/60;
                x--;
                if(map[y][x] === 0){
                monster.move = 60;
                push_key = 'left';
            }
        }
            if ( key.up === true ) {
                var x = monster.x/60;
                var y = monster.y/60;
                if(y > 0){
                    y--;
                    if(map[y][x] === 0){
                monster.move = 60;
                push_key = 'up';
            }
        }
    }
            if ( key.right === true ) {
                var x = monster.x/60;
                var y = monster.y/60;
                x++;
                if(map[y][x] === 0){
                monster.move = 60;
                push_key = 'right';
            }
        }
            if ( key.down === true ) {
                var x = monster.x/60;
                var y = monster.y/60;
                if(y < 19){
                    y++;
                    if(map[y][x] === 0){
                monster.move = 60;
                push_key = 'down';
                 }
            }
        }
    }

        if (monster.move > 0) {
            monster.move -= 4;
            if ( push_key === 'left' ) monster.x -= 4;
            if ( push_key === 'up' ) monster.y -= 4;
            if ( push_key === 'right' ) monster.x += 4;
            if ( push_key === 'down' ) monster.y += 4;
        }

        requestAnimationFrame(main);
}


addEventListener('load', main(), false);

function keydownfunc( event ) {
    var key_code = event.keyCode;
    if( key_code === 37 ) key.left = true;
    if( key_code === 38 ) key.up = true;
    if( key_code === 39 ) key.right = true;
    if( key_code === 40 ) key.down = true;
    event.preventDefault();
}

function keyupfunc( event ) {
    var key_code = event.keyCode;
    if( key_code === 37 ) key.left = false;
    if( key_code === 38 ) key.up = false;
    if( key_code === 39 ) key.right = false;
    if( key_code === 40 ) key.down = false;
}
