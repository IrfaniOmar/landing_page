// Fun floating emojis
function createFloatingEmoji() {
    const emojis = ['⭐', '🌈', '🎈', '🦄', '🎀', '🌟', '💝', '🎨', '🎵', '🏆'];
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + '%';
    emoji.style.top = Math.random() * 100 + '%';
    emoji.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(emoji);

    setTimeout(() => emoji.remove(), 6000);
}

// Create floating emojis every 3 seconds
setInterval(createFloatingEmoji, 3000);

// Create some initial emojis
for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingEmoji, i * 500);
}

function openApp(url) {
    window.open(url, '_blank');
}

function openTutorial(url) {
    window.open(url, '_blank');
}

function showAbout() {
    alert('🌟 This is SK SERUSUP Kids Hub! 🌟\n\nHere you can find:\n📚 Books to read\n🎮 Fun games\n🎓 Learning tools\n\nHave fun learning!');
}

// Language translations (simple for kids)
const languages = {
    english: {
        'funbrain-desc': 'Fun games for learning!',
        'abcya-desc': 'Cool games for kids!',
        'starfall-desc': 'Reading & math games!',
        'natgeo-desc': 'Animals & science fun!',
        'khan-desc': 'Learn math & reading!',
        'upustaka-desc': 'Free books online!',
        'esentral-desc': 'Borrow books on your phone!',
        'libby-desc': 'Books you can listen to!',
        'ilearn-desc': 'Learn anywhere!',
        'gale-desc': 'Old history books!',
        'worldcat-desc': 'Find books near you!',
        'delima-desc': 'Malaysia learning!'
    },
    malay: {
        'funbrain-desc': 'Permainan untuk belajar!',
        'abcya-desc': 'Permainan hebat untuk kanak-kanak!',
        'starfall-desc': 'Permainan membaca & matematik!',
        'natgeo-desc': 'Haiwan & sains yang menyeronokkan!',
        'khan-desc': 'Belajar matematik & membaca!',
        'upustaka-desc': 'Buku percuma dalam talian!',
        'esentral-desc': 'Pinjam buku di telefon!',
        'libby-desc': 'Buku yang boleh didengar!',
        'ilearn-desc': 'Belajar di mana-mana!',
        'gale-desc': 'Buku sejarah lama!',
        'worldcat-desc': 'Cari buku dekat awak!',
        'delima-desc': 'Pembelajaran Malaysia!'
    }
};

function switchLanguage(lang) {
    const translations = languages[lang];
    for (let id in translations) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[id];
        }
    }

    // Add fun animation
    document.querySelectorAll('.app-card').forEach((card, index) => {
        card.style.transform = 'scale(0.8) rotate(5deg)';
        setTimeout(() => {
            card.style.transform = 'scale(1) rotate(0deg)';
        }, index * 100);
    });
}

// Add entrance animation
window.addEventListener('load', function () {
    document.querySelectorAll('.app-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add fun hover sounds (visual feedback)
document.querySelectorAll('.app-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) rotate(2deg) scale(1.05)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) rotate(0deg) scale(1)';
    });
});