const messages = [
    {
        title: "👑 Feliz Día de Regalar Corona 👑",
        text: "💕AMOR💕, hoy 14 de noviembre celebro que eres mi reina. Esta corona es para ti, porque con o sin ella, siempre has sido y serás la dueña de mi corazón. Eres mi princesa, mi todo. ✨💖"
    },
    {
        title: "💝 Eres Especial",
        text: "AMOR, tu nombre suena a música en mis oídos. Cada día contigo es un regalo, y hoy quiero regalarte esta corona digital para recordarte que mereces ser tratada como la realeza que eres. 👑💕"
    },
    {
        title: "🌟 Mi Luz",
        text: "Iluminas mi vida como las estrellas iluminan la noche. Tu sonrisa es mi mayor tesoro, y tu amor mi mayor bendición. Gracias por existir, mi reina hermosa. 💫💖"
    },
    {
        title: "💕 Para Siempre",
        text: "No necesitas corona para ser mi reina, porque ya reinas en mi corazón cada segundo de cada día. Eres única, especial, y completamente mía. Te amo, AMOR. 👑❤️"
    },
    {
        title: "✨ Mi Reina Eterna",
        text: "Que esta corona sea un símbolo de lo que siempre has sido para mí: mi reina, mi amor, mi todo. AMOR, eres la razón por la que creo en los cuentos de hadas. 💖👑✨"
    },
    {
        title: "🦄 Eres Mágica",
        text: "Mi amor por ti no tiene límites. Eres pura magia, Xiomara. Cada momento contigo es un cuento de hadas hecho realidad. 💕✨�"
    },
    {
        title: "💌 Carta de Amor",
        text: "Esta cartita lleva todo mi amor hacia ti. AMOR, eres el sueño que nunca quiero despertar, la melodía que siempre quiero escuchar. Te amo infinitamente. 💖🎵"
    },
    {
        title: "⭐ Estrella Fugaz",
        text: "Pedí un deseo a cada estrella fugaz, y todos mis deseos se cumplieron cuando te conocí. Eres mi deseo hecho realidad, mi reina hermosa. 🌠💖"
    },
    {
        title: "💗 Mi Corazón",
        text: "Mi corazón late solo por ti, AMOR. Cada latido lleva tu nombre, cada suspiro es por ti. Eres mi todo, mi amor eterno. 💓👑✨"
    }
];

function showMessage(index) {
    const messageBox = document.getElementById('messageBox');
    const messageTitle = document.getElementById('messageTitle');
    const messageText = document.getElementById('messageText');

    messageTitle.textContent = messages[index].title;
    messageText.textContent = messages[index].text;
    messageBox.classList.add('show');

    createHearts();
}

function closeMessage() {
    document.getElementById('messageBox').classList.remove('show');
}

// Crear muchas más estrellas
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (2 + Math.random() * 2) + 's';
    starsContainer.appendChild(star);
}

// Crear estrellas grandes decorativas
for (let i = 0; i < 15; i++) {
    const bigStar = document.createElement('div');
    bigStar.className = 'big-star';
    bigStar.textContent = '⭐';
    bigStar.style.left = Math.random() * 100 + '%';
    bigStar.style.top = Math.random() * 100 + '%';
    bigStar.style.animationDelay = Math.random() * 4 + 's';
    starsContainer.appendChild(bigStar);
}

// Crear corazones cayendo
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '💖';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heartsContainer.appendChild(heart);

            setTimeout(() => heart.remove(), 5000);
        }, i * 100);
    }
}

// Crear corazones cayendo constantemente
setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = ['💖', '💕', '💗', '💓', '💝', '💞'][Math.floor(Math.random() * 6)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (4 + Math.random() * 3) + 's';
    document.getElementById('hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}, 1000);

// Crear corazones grandes flotantes
for (let i = 0; i < 8; i++) {
    const bigHeart = document.createElement('div');
    bigHeart.className = 'big-heart';
    bigHeart.textContent = ['💖', '💕', '💗'][Math.floor(Math.random() * 3)];
    bigHeart.style.left = (10 + Math.random() * 80) + '%';
    bigHeart.style.top = (20 + Math.random() * 60) + '%';
    bigHeart.style.animationDelay = Math.random() * 12 + 's';
    document.body.appendChild(bigHeart);
}

// Mensajes adicionales para las cartitas flotantes
const floatingMessages = [
    { title: "💌 Mensaje Secreto 1", text: "AMOR, cada vez que veo tu sonrisa, el mundo se detiene. Eres la razón por la que creo en el amor verdadero. 💕✨" },
    { title: "💌 Mensaje Secreto 2", text: "Tu risa es mi canción favorita, tu voz es mi melodía. Contigo, cada día es una aventura mágica. 🎵💖" },
    { title: "💌 Mensaje Secreto 3", text: "Eres más hermosa que todas las estrellas del cielo juntas. Mi reina, mi amor, mi todo. 🌟👑" },
    { title: "💌 Mensaje Secreto 4", text: "Si pudiera regalarte algo, te daría la capacidad de verte a través de mis ojos, para que veas lo perfecta que eres. 💗✨" },
    { title: "💌 Mensaje Secreto 5", text: "Cada momento contigo es un tesoro que guardo en mi corazón. Gracias por existir, mi amor. 💎💕" },
    { title: "💌 Mensaje Secreto 6", text: "AMOR, eres el sueño del que nunca quiero despertar. Mi princesa, mi reina, mi vida entera. 👑💖" },
    { title: "💌 Mensaje Secreto 7", text: "Tu amor es mi refugio, tu abrazo mi hogar. Contigo encontré mi lugar en el mundo. 🏰💕" },
    { title: "💌 Mensaje Secreto 8", text: "Eres la respuesta a todas mis oraciones, el milagro que siempre esperé. Te amo infinitamente. 🙏💖" },
    { title: "💌 Mensaje Secreto 9", text: "Mi amor corre hacia ti sin límites, sin fin. Eres mi todo, mi razón de ser. 💕✨👑" },
    { title: "💌 Mensaje Secreto 10", text: "AMOR, tu nombre está escrito en cada latido de mi corazón. Eres mi eternidad. 💓👑" }
];

// Crear cartitas flotantes con mensajes
for (let i = 0; i < 10; i++) {
    const letter = document.createElement('div');
    letter.className = 'letter-with-star';
    letter.textContent = '💌';
    letter.style.left = (5 + Math.random() * 90) + '%';
    letter.style.top = (10 + Math.random() * 80) + '%';
    letter.style.animationDelay = Math.random() * 10 + 's';
    letter.style.animationDuration = (8 + Math.random() * 4) + 's';
    letter.style.cursor = 'pointer';

    // Agregar evento de clic para mostrar mensaje
    letter.addEventListener('click', () => {
        const messageBox = document.getElementById('messageBox');
        const messageTitle = document.getElementById('messageTitle');
        const messageText = document.getElementById('messageText');

        messageTitle.textContent = floatingMessages[i].title;
        messageText.textContent = floatingMessages[i].text;
        messageBox.classList.add('show');
        createHearts();
    });

    document.body.appendChild(letter);
}


// Control de música
let musicPlaying = false;
const music = document.getElementById('backgroundMusic');

function toggleMusic() {
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        document.getElementById('musicIcon').textContent = '🎵';
        document.getElementById('musicText').textContent = 'Reproducir';
    } else {
        music.play().then(() => {
            musicPlaying = true;
            document.getElementById('musicIcon').textContent = '🎶';
            document.getElementById('musicText').textContent = 'Pausar';
        }).catch(err => {
            console.log('Error al reproducir música:', err);
        });
    }
}

// Reproducir música automáticamente
window.addEventListener('DOMContentLoaded', () => {
    music.volume = 0.8;

    // Intentar reproducir inmediatamente
    setTimeout(() => {
        music.play().then(() => {
            musicPlaying = true;
            document.getElementById('musicIcon').textContent = '🎶';
            document.getElementById('musicText').textContent = 'Pausar';
            console.log('Música reproduciendo automáticamente');
        }).catch((error) => {
            console.log('Autoplay bloqueado, esperando interacción:', error);
            // Si falla, intentar con la primera interacción
            const autoStart = () => {
                music.play().then(() => {
                    musicPlaying = true;
                    document.getElementById('musicIcon').textContent = '🎶';
                    document.getElementById('musicText').textContent = 'Pausar';
                    console.log('Música iniciada con interacción');
                }).catch((err) => {
                    console.log('Error al reproducir:', err);
                });
            };

            // Iniciar con cualquier interacción
            document.addEventListener('mousemove', autoStart, { once: true });
            document.addEventListener('click', autoStart, { once: true });
            document.addEventListener('touchstart', autoStart, { once: true });
            document.addEventListener('keydown', autoStart, { once: true });
        });
    }, 500);
});


// Crear ositos de peluche dando besitos
function createTeddyBear() {
    const teddy = document.createElement('div');
    teddy.className = 'teddy-bear';
    teddy.textContent = '🧸';
    teddy.style.left = (10 + Math.random() * 70) + '%';
    teddy.style.top = (20 + Math.random() * 50) + '%';
    teddy.style.animationDuration = (12 + Math.random() * 6) + 's';
    teddy.style.animationDelay = Math.random() * 5 + 's';

    // Cuando haces clic en el osito, lanza besitos
    teddy.addEventListener('click', () => {
        throwKisses(teddy);
    });

    // El osito lanza besitos automáticamente cada cierto tiempo
    setInterval(() => {
        throwKisses(teddy);
    }, 5000 + Math.random() * 3000);

    document.body.appendChild(teddy);
}

// Función para lanzar besitos desde el osito
function throwKisses(teddyElement) {
    const rect = teddyElement.getBoundingClientRect();
    const kissEmojis = ['💋', '😘', '💕', '💖'];

    // Lanzar 5 besitos
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const kiss = document.createElement('div');
            kiss.className = 'kiss';
            kiss.textContent = kissEmojis[Math.floor(Math.random() * kissEmojis.length)];
            kiss.style.left = rect.left + rect.width / 2 + 'px';
            kiss.style.top = rect.top + rect.height / 2 + 'px';

            // Dirección aleatoria para cada besito
            const tx = (Math.random() - 0.5) * 200;
            const ty = -50 - Math.random() * 100;
            kiss.style.setProperty('--tx', tx + 'px');
            kiss.style.setProperty('--ty', ty + 'px');

            document.body.appendChild(kiss);

            // Remover el besito después de la animación
            setTimeout(() => kiss.remove(), 3000);
        }, i * 200);
    }
}

// Crear 3 ositos de peluche
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        createTeddyBear();
    }, i * 2000);
}


// Fuegos artificiales / Explosiones de colores
function createFirework(x, y) {
    const colors = [
        '#FF1461', '#18FF92', '#5A87FF', '#FBF38C', '#FF6B9D',
        '#C364FF', '#FFD93D', '#6BCB77', '#FF8C42', '#FF006E',
        '#8338EC', '#3A86FF', '#FB5607', '#FFBE0B', '#FF006E'
    ];

    // Crear cohete que sube
    const rocket = document.createElement('div');
    rocket.className = 'rocket';
    rocket.style.left = x + 'px';
    rocket.style.bottom = '0px';
    document.body.appendChild(rocket);

    // Después de 1 segundo, explotar
    setTimeout(() => {
        rocket.remove();

        // Crear explosión con muchas partículas
        const particleCount = 50;
        const color = colors[Math.floor(Math.random() * colors.length)];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework';
            particle.style.left = x + 'px';
            particle.style.bottom = '400px';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];

            // Dirección aleatoria para cada partícula
            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = 100 + Math.random() * 100;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');

            document.body.appendChild(particle);

            // Remover después de la animación
            setTimeout(() => particle.remove(), 1500);
        }

        // Agregar confeti que cae
        createConfetti(x, 400);
    }, 1000);
}

// Crear confeti que cae
function createConfetti(x, y) {
    const confettiShapes = ['💖', '💕', '⭐', '✨', '💫', '🌟', '💝', '💗'];
    const confettiCount = 20;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.textContent = confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
            confetti.style.left = (x - 50 + Math.random() * 100) + 'px';
            confetti.style.top = y + 'px';
            confetti.style.fontSize = (15 + Math.random() * 15) + 'px';

            const tx = (Math.random() - 0.5) * 200;
            confetti.style.setProperty('--tx', tx + 'px');

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 50);
    }
}

// Lanzar fuegos artificiales automáticamente
function launchRandomFirework() {
    const x = 100 + Math.random() * (window.innerWidth - 200);
    createFirework(x, 0);
}

// Lanzar fuegos artificiales cada 3-5 segundos
setInterval(() => {
    launchRandomFirework();
}, 3000 + Math.random() * 2000);

// Lanzar algunos al inicio
setTimeout(() => launchRandomFirework(), 1000);
setTimeout(() => launchRandomFirework(), 2000);
setTimeout(() => launchRandomFirework(), 3500);

// Modificar showMessage para lanzar fuegos artificiales
function showMessageWithFireworks(index) {
    const messageBox = document.getElementById('messageBox');
    const messageTitle = document.getElementById('messageTitle');
    const messageText = document.getElementById('messageText');

    messageTitle.textContent = messages[index].title;
    messageText.textContent = messages[index].text;
    messageBox.classList.add('show');

    createHearts();

    // Lanzar 3 fuegos artificiales
    setTimeout(() => launchRandomFirework(), 200);
    setTimeout(() => launchRandomFirework(), 600);
    setTimeout(() => launchRandomFirework(), 1000);
}

// Reemplazar la función showMessage
showMessage = showMessageWithFireworks;


// Reproducir música automáticamente
window.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('backgroundMusic');
    if (music) {
        music.volume = 0.8;

        // Intentar reproducir inmediatamente
        setTimeout(() => {
            music.play().then(() => {
                musicPlaying = true;
                document.getElementById('musicIcon').textContent = '🎶';
                document.getElementById('musicText').textContent = 'Pausar';
                console.log('✅ Música reproduciendo automáticamente');
            }).catch((error) => {
                console.log('⚠️ Autoplay bloqueado, esperando interacción del usuario');
                // Si falla, intentar con la primera interacción
                const autoStart = () => {
                    music.play().then(() => {
                        musicPlaying = true;
                        document.getElementById('musicIcon').textContent = '🎶';
                        document.getElementById('musicText').textContent = 'Pausar';
                        console.log('✅ Música iniciada con interacción');
                    }).catch((err) => {
                        console.log('❌ Error al reproducir:', err);
                    });
                };

                // Iniciar con cualquier interacción
                document.addEventListener('mousemove', autoStart, { once: true });
                document.addEventListener('click', autoStart, { once: true });
                document.addEventListener('touchstart', autoStart, { once: true });
                document.addEventListener('keydown', autoStart, { once: true });
            });
        }, 500);
    }
});
