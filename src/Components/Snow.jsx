// import React, { useEffect, useRef } from 'react';

// // --- CONFIGURATION ---
// import snowImgSource from '/images/snow.png';

// const Snow = () => {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');

//         // 1. Load the single white image
//         const whiteFlakeImg = new Image();
//         whiteFlakeImg.src = snowImgSource;

//         let redFlakeImg = null;

//         whiteFlakeImg.onload = () => {
//             // 2. Programmatically create the Red Flake
//             redFlakeImg = createTintedImage(whiteFlakeImg, '#D62828');
//             initAnimation();
//         };

//         const createTintedImage = (img, color) => {
//             const buffer = document.createElement('canvas');
//             buffer.width = img.width;
//             buffer.height = img.height;
//             const bx = buffer.getContext('2d');
//             bx.drawImage(img, 0, 0);
//             bx.globalCompositeOperation = 'source-in';
//             bx.fillStyle = color;
//             bx.fillRect(0, 0, buffer.width, buffer.height);
//             return buffer;
//         };

//         let animationFrameId;

//         const initAnimation = () => {
//             // --- CHANGED HERE: Reduced from 70 to 30 ---
//             const particleCount = 30;
//             const particles = [];

//             const resizeCanvas = () => {
//                 canvas.width = window.innerWidth;
//                 canvas.height = window.innerHeight;
//             };
//             window.addEventListener('resize', resizeCanvas);
//             resizeCanvas();

//             class Particle {
//                 constructor() {
//                     this.reset();
//                 }

//                 reset() {
//                     this.x = Math.random() * canvas.width;
//                     this.y = Math.random() * -canvas.height;
//                     // Slightly slower speed for a calmer effect
//                     this.speed = Math.random() * 1.5 + 0.5;
//                     this.wind = Math.random() * 0.5 - 0.25;
//                     this.opacity = Math.random() * 0.3 + 0.7;

//                     this.angle = Math.random() * 360;
//                     this.spinSpeed = Math.random() * 2 - 1;

//                     this.setType();
//                 }

//                 setType() {
//                     const rand = Math.random();
//                     // Mix: White Flakes, Red Flakes, Bells, White Balls, Red Balls
//                     if (rand < 0.20) {
//                         this.type = 'IMAGE';
//                         this.asset = whiteFlakeImg;
//                         this.size = Math.random() * 15 + 15;
//                     } else if (rand < 0.40) {
//                         this.type = 'IMAGE';
//                         this.asset = redFlakeImg;
//                         this.size = Math.random() * 15 + 15;
//                     } else if (rand < 0.60) {
//                         this.type = 'BELL';
//                         this.size = Math.random() * 20 + 15;
//                     } else if (rand < 0.80) {
//                         this.type = 'BALL';
//                         this.color = 'white';
//                         this.size = Math.random() * 4 + 3;
//                     } else {
//                         this.type = 'BALL';
//                         this.color = '#D62828';
//                         this.size = Math.random() * 4 + 3;
//                     }
//                 }

//                 update() {
//                     this.y += this.speed;
//                     this.x += this.wind;
//                     this.angle += this.spinSpeed;

//                     if (this.y > canvas.height + 50) {
//                         this.reset();
//                     }
//                 }

//                 draw() {
//                     ctx.save();
//                     ctx.translate(this.x, this.y);
//                     ctx.globalAlpha = this.opacity;

//                     if (this.type === 'IMAGE' && this.asset) {
//                         ctx.rotate((this.angle * Math.PI) / 180);
//                         ctx.drawImage(this.asset, -this.size / 2, -this.size / 2, this.size, this.size);
//                     }
//                     else if (this.type === 'BELL') {
//                         ctx.rotate((this.angle * Math.PI) / 180);
//                         ctx.font = `${this.size}px serif`;
//                         ctx.textAlign = 'center';
//                         ctx.textBaseline = 'middle';
//                         ctx.fillText('🔔', 0, 0);
//                     }
//                     else if (this.type === 'BALL') {
//                         ctx.beginPath();
//                         ctx.arc(0, 0, this.size, 0, Math.PI * 2);
//                         ctx.fillStyle = this.color;
//                         ctx.fill();
//                     }

//                     ctx.restore();
//                 }
//             }

//             for (let i = 0; i < particleCount; i++) {
//                 particles.push(new Particle());
//             }

//             const animate = () => {
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);
//                 particles.forEach((p) => {
//                     p.update();
//                     p.draw();
//                 });
//                 animationFrameId = requestAnimationFrame(animate);
//             };

//             animate();
//         };

//         return () => {
//             window.removeEventListener('resize', () => { });
//             cancelAnimationFrame(animationFrameId);
//         };
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 pointerEvents: 'none',
//                 zIndex: 50,
//             }}
//         />
//     );
// };

// export default Snow;


import React from 'react'

const Snow = () => {
    return (
        <div>Snow</div>
    )
}

export default Snow