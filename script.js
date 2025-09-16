const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bubbles = [];

class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 20 + 10;
        this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.radius > 0.2) {
            this.radius -= 0.1;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleMouseMove(event) {
    for (let i = 0; i < 5; i++) {
        bubbles.push(new Bubble(event.x, event.y));
    }
}

function handleClick(event) {
    for (let i = bubbles.length - 1; i >= 0; i--) {
        const bubble = bubbles[i];
        const distance = Math.sqrt((event.x - bubble.x) ** 2 + (event.y - bubble.y) ** 2);
        if (distance < bubble.radius) {
            bubbles.splice(i, 1);
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = bubbles.length - 1; i >= 0; i--) {
        const bubble = bubbles[i];
        bubble.update();
        bubble.draw();

        if (bubble.radius <= 0.2) {
            bubbles.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('click', handleClick);
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate();
