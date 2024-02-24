



// Essentials
let canvas = document.getElementById('brainrot');
let c = canvas.getContext("2d");
        
canvas_width = 1000;
canvas_height = 1000;
        
canvas.width = canvas_width;
canvas.height = canvas_height;
        
        
        
        
        
        
        
    // Universal Functions and Variables
let rand;
const gravity = 300;
const distance = 150;
let effects = [];

const center = {
    position: {
        x: canvas_width/2,
        y: 300
    },
    rgba: {
        r: 250,
        g: 0,
        b: 0,
        a: 1
    }
}



function getDistance(objA, objB) {
    let deltaX = Math.pow(objA.position.x - objB.position.x, 2);
    let deltaY = Math.pow(objA.position.y - objB.position.y, 2);
    
    return Math.sqrt(deltaX + deltaY);
}


function changeColor(obj) {
    let rgb = obj.rgba;
    
    if (rgb.r > 0 && rgb.b == 0) {
        rgb.r--;
        rgb.g++;
    }
    else if (rgb.g > 0 && rgb.r == 0) {
        rgb.g--;
        rgb.b++;
    }
    else if (rgb.b > 0 && rgb.g == 0) {
        rgb.b--;
        rgb.r++;
    }
}









        
        
        
    // Moving Circle
class Circle {
    constructor(position, acceleration, velocity, radius, rgba) {
        this.position = position;
        this.acceleration = acceleration;
        this.velocity = velocity;
        this.radius = radius;
        this.rgba = rgba;
    }
    
    draw() {
        c.beginPath();
        c.fillStyle = `rgba(${this.rgba.r}, ${this.rgba.g}, ${this.rgba.b}, ${this.rgba.a})`;
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
        c.fill();
        c.closePath();
    }
    
    vectors() {
        this.acceleration.y = gravity;
        
        this.velocity.x += this.acceleration.x/1000;
        this.velocity.y += this.acceleration.y/1000;
        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    
    bounce() {
        let force = Math.sqrt(Math.pow(this.velocity.x, 2) + Math.pow(this.velocity.y, 2));
        
        let centerX = this.position.x - center.position.x;
        let centerY = this.position.y - center.position.y;
        
        let sideX = 1;
        let sideY = 1;
        let rot = Math.atan(centerY/centerX)%360;
        if (centerY >= 0 && centerX <= 0) {
            sideX = -1;
            sideY = -1;
        }
        else if (centerY <= 0 && centerX <= 0) {
            sideX = -1;
            sideY = -1;
        }
        this.radius *= 1.02;
        
        rot += (Math.random()*60-30)*Math.PI/180;
        
        
        let forceX = force * Math.cos(rot) *sideX;
        let forceY = force * Math.sin(rot) *sideY;
        
        this.velocity.x = -forceX*1.015;
        this.velocity.y = -forceY*1.015;


            // Playing Audio
        notes[sheet[order] - 1].currentTime = 0;
        notes[sheet[order] - 1].play();
        if (order < maxOrder-1) order++;
        else order = 0;
    }
    
    
    trail() {
        let gay = new Effect({x: this.position.x, y: this.position.y}, this.radius);
    }
    
    
    corrections() {
        if (this.radius > distance) {
            this.bounce();
            return;
        }
        if (getDistance(julian, center) <= distance - julian.radius) return;
        else this.bounce();
    
        let centerX = this.position.x - center.position.x;
        let centerY = this.position.y - center.position.y;
        
        let side = 1;
        let rot = Math.atan(centerY/centerX)%360;
        if (centerY >= 0 && centerX <= 0) side = -1;
        else if (centerY <= 0 && centerX <= 0) side = -1
        this.radius += 0.02 * 10;
        
        this.position.x = center.position.x + (distance-this.radius) * Math.cos(rot)*side;
        this.position.y = center.position.y + (distance-this.radius) * Math.sin(rot)*side
    }
    
    
    
    update() {
        this.vectors();
        this.corrections();
        this.trail();
        this.draw();
    }
}

let rotation = Math.random()*Math.PI*2;
let speed = 5;
        
let julian = new Circle({x: canvas_width/2, y: 300}, {x:0, y:0}, {x:speed*Math.cos(rotation), y:speed*Math.sin(rotation)}, 10, {r: 250, g: 250, b: 250, a: 1});
        
        
        
        
        
        // Effects
class Effect {
    constructor(position, radius) {
        this.position = position;
        this.radius = radius;
        this.rgba = center.rgba;
        
        effects.push(this);
    }
    
    draw() {
        c.beginPath();
        c.fillStyle = `rgba(${this.rgba.r}, ${this.rgba.g}, ${this.rgba.b}, ${this.rgba.a})`;
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
        c.fill();
        c.closePath();
    }
    
    action() {
        this.rgba = {
            r: center.rgba.r,
            g: center.rgba.g,
            b: center.rgba.b,
            a: this.rgba.a
        }
        
        this.rgba.a -= 0.05;
    }
    
    update() {
        this.action()
        this.draw()
    }
}











    // Audio
const key01 = new Audio('audio/key01.mp3');
const key02 = new Audio('audio/key02.mp3');
const key03 = new Audio('audio/key03.mp3');
const key04 = new Audio('audio/key04.mp3');
const key05 = new Audio('audio/key05.mp3');
const key06 = new Audio('audio/key06.mp3');
const key07 = new Audio('audio/key07.mp3');
const key08 = new Audio('audio/key08.mp3');
const key09 = new Audio('audio/key09.mp3');
const key10 = new Audio('audio/key10.mp3');
const key11 = new Audio('audio/key11.mp3');
const key12 = new Audio('audio/key12.mp3');
const key13 = new Audio('audio/key13.mp3');
const key14 = new Audio('audio/key14.mp3');
const key15 = new Audio('audio/key15.mp3');
const key16 = new Audio('audio/key16.mp3');
const key17 = new Audio('audio/key17.mp3');
const key18 = new Audio('audio/key18.mp3');
const key19 = new Audio('audio/key19.mp3');
const key20 = new Audio('audio/key20.mp3');
const key21 = new Audio('audio/key21.mp3');
const key22 = new Audio('audio/key22.mp3');
const key23 = new Audio('audio/key23.mp3');
const key24 = new Audio('audio/key24.mp3');







    // Songs
const notes = [ key01, key02, key03, key04, key05, key06, key07, key08, key09, key10, key11, key12, key13, key14, key15, key16, key17, key18, key19, key20, key21, key22, key23, key24 ];
let sheet = [];
let order = 0;
let maxOrder;

rand = Math.floor(Math.random()*5);
// rand = 4;

switch ( rand ) {
    case 0:
        sheet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        break;
    case 1:
        sheet = [21, 20, 23, 21, 20, 23, 21, 19, 21, 17, 13, 14,   16, 17, 16, 17, 16, 17, 16, 17,   19, 20, 19, 20, 19, 20, 19, 20,    21, 22, 21, 22, 21, 22, 21, 22,   21, 24, 23, 21, 19, 17];
        break;
    case 2:
        sheet = [10, 12, 8, 12, 14,  16, 14, 12, 10, 8, 10, 6];
        break;
    case 3:
        sheet = [6, 6, 16, 11, 9, 7, 6, 1, 2, 6,    4, 4, 16, 11, 9, 7, 6, 1, 2, 6,   2, 2, 16, 11, 9, 7, 6, 1, 2, 6,   1, 1, 16, 11, 9, 7, 6, 1, 2, 6];
        break;
    case 4:
        sheet = [18, 18, 20, 20, 21, 21, 22,     18, 18, 20, 20, 21, 21, 22,    22, 22, 20, 20, 19, 19, 18,    22, 22, 20, 20, 19, 19, 18];
}
maxOrder = sheet.length;







    // Caption
let caption;
rand = Math.floor(Math.random()*8);
// rand = 7;

switch ( rand ) {
    case 0:
        caption = 'Watch Till the End!<br>💀💀💀';
        break;
    case 1:
        caption = "Don't Click Off!<br>🤪🤪🤪";
        break;
    case 2:
        caption = "The Results Are Shocking!<br>😱😱😱";
        break;
    case 3:
        caption = "Better Than Eating Glue!<br>👅👅👅";
        break;
    case 4:
        caption = "Watch Bang Bravern!<br>🧑🧑🧑";
        break;
    case 5:
        caption = "Like The Speed of Sound<br>🛏️🛏️🛏️";
        break;
    case 6:
        caption = "From The River to The Sea<br>🍉🍉🍉";
        break;
    case 7:
        caption = "Top Satisfyingest Moments<br>🌠🌠🌠";
}










        
        
        
        
        
        







    // Start
document.addEventListener('click', () => {
    if ( document.getElementById('start').style.display != 'none' ) {
        document.getElementById('start').style.display = 'none';
        document.getElementById('caption').style.display = 'block';
        document.getElementById('caption').innerHTML = caption;
        animate();
    }
})
        
        
c.beginPath();
c.lineWidth = 10;
c.strokeStyle = `rgba(${center.rgba.r}, ${center.rgba.g}, ${center.rgba.b}, ${center.rgba.a})`;
c.arc(center.position.x, center.position.y, distance, 0, Math.PI*2);
c.stroke();
c.closePath();
julian.draw();

         
        

    // Animation
function animate() {
    window.requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas_width, canvas_height);
            
    
        // Effects
    if (effects[0] != null) {
        while (effects[0].rgba.a <= 0) {
            effects.shift();
        }
    }
    
    for (let i in effects) effects[i].update();
    
        
    
        // Main Circle
    c.beginPath();
    c.lineWidth = 10;
    c.strokeStyle = `rgba(${center.rgba.r}, ${center.rgba.g}, ${center.rgba.b}, ${center.rgba.a})`;
    c.arc(center.position.x, center.position.y, distance, 0, Math.PI*2);
    c.stroke();
    c.closePath();
    
    changeColor(center);
    
    
    
    
    // Julian
    julian.update();
}

        
        
        
        