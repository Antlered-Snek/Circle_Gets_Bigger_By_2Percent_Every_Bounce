



// Essentials
let canvas = document.getElementById('brainrot');
let c = canvas.getContext("2d");
        
canvas_width = 1000;
canvas_height = 1000;
        
canvas.width = canvas_width;
canvas.height = canvas_height;
        
        
        
        
        
        
        
    // Universal Functions and Variables
const gravity = 200;
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
        
        this.velocity.x = -forceX*1.012;
        this.velocity.y = -forceY*1.012;
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
        
        
        
        
        
        
        
        
        
        
         
        
animate();
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

        
        
        
        