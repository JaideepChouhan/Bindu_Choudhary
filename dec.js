window.onload = function() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 5 + 3 + 's';
        confetti.style.background = ['#f06292', '#ab47bc', '#4fc3f7', '#ffab00', '#ff4081'][Math.floor(Math.random() * 5)];
        container.appendChild(confetti);
    }
};

const confettiStyle = document.createElement('style');
confettiStyle.innerHTML = `
    .confetti {
        position: fixed;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        opacity: 0.8;
        animation: fall 7s linear infinite;
        z-index: 1000;
    }
    @keyframes fall {
        0% { transform: translateY(-100vh) rotate(0deg); }
        100% { transform: translateY(100vh) rotate(720deg); }
    }
`;
document.head.appendChild(confettiStyle);
