// ============================================
// ARZAW'S MUSIC LIBRARY
// Add your songs here! Each song is an object with these properties:
// - title: Song name
// - artist: Artist/Band name
// - language: Language of the song
// - category: Genre/Category
// - topPick: true/false (marks as favorite)
// - image: (optional) filename in the 'tiles' folder
// ============================================

const songs = [
    {
        title: "Mere Gaon Aaoge",
        artist: "Rahgir",
        language: "Hindi",
        category: "Romantic Healing",
        topPick: true,
        image: "Mere-Gaon-Aaoge.png"  // Optional: add image filename
    },
    {
        title: "MaaeriEuphoria",
        artist: "Palash Sen",
        language: "Hindi",
        category: "Romantic Indie",
        topPick: false,
        image: "MaaeriEuphoria.png"
    },
    {
        title: "When We Feel Young",
        artist: "When Chai Met Toast",
        language: "English",
        category: "Romantic Indie",
        topPick: false,
        image: "When-We-Feel-Young.png"
    },
    {
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
        language: "Hindi",
        category: "Romantic",
        topPick: true,
        image: "tum-hi-ho.png"  // Optional: add image filename
    },
    {
        title: "Kahaani",
        artist: "When Chai Met Toast",
        language: "Hindi, English, Malyali",
        category: "Romantic Indie",
        topPick: false,
        image: "kahani-wcmt.png"
    },
    {
        title: "Aaftaab",
        artist: "The Local Train",
        language: "Hindi",
        category: "Warmth",
        topPick: false,
        image: "Aaftaab.png"
    },
    {
        title: "Aakhri Salam",
        artist: "The Local Train",
        language: "Hindi",
        category: "Warmth",
        topPick: false,
        image: "Aaftaab.png"
    },
    {
        title: "Dil Nawaz",
        artist: "The Local Train",
        language: "Hindi",
        category: "Warmth",
        topPick: false,
        image: "Aaftaab.png"
    },
    {
        title: "Mere Yaar",
        artist: "The Local Train",
        language: "Hindi",
        category: "Warmth",
        topPick: false,
        image: "Aaftaab.png"
    },
    {
        title: "Pahadon Mein",
        artist: "Salman Elahi",
        language: "Hindi",
        category: "Warmth",
        topPick: false,
        image: "pahadon_me.png"
    },
    {
        title: "Tere Pyar Mein",
        artist: "Kavish",
        language: "Hindi",
        category: "Romantic Sad",
        topPick: false,
        image: "tere_pyar_mein.png"
    },
    {
        title: "Bandeh",
        artist: "The Local Train",
        language: "Hindi",
        category: "Warmth",
        topPick: false,
        image: "Aaftaab.png"
    },
    {
        title: "Faasle",
        artist: "Kaavish & Quratulain Balouch",
        language: "Hindi",
        category: "Romantic Sad",
        topPick: false,
        image: "Faasle.png"
    },
    {
        title: "Khudi",
        artist: "The Local Train",
        language: "Hindi",
        category: "Warmth",
        topPick: false,
        image: "Aaftaab.png"
    },
    {
        title: "Tujh Mein Rab Dikhta Hai",
        artist: "Rahat Fateh Ali Khan",
        language: "Hindi",
        category: "Romantic",
        topPick: false,
        image: "tujhme-rab-dikhta-hai.png"
    },
    {
        title: "Main Phir Bhi Tumko Chahunga",
        artist: "Arijit Singh, Shashaa Tirupati",
        language: "Hindi",
        category: "Romantic",
        topPick: false,
        image: "phir-bhi-tumko-chahunga.png"
    },
    {
        title: "Tum Jo Aaye",
        artist: "Rahat Fateh Ali Khan, Alka Yagnik",
        language: "Hindi",
        category: "Romantic",
        topPick: false,
        image: "tum-jo-aaye-zindagi-me.png"
    },
    {
        title: "Channa Mereya",
        artist: "Arijit Singh",
        language: "Hindi",
        category: "Romantic Sad",
        topPick: false,
        image: "Channa-Mereya.png"
    },
    {
        title: "Raabta",
        artist: "Arijit Singh, Shreya Ghosal",
        language: "Hindi",
        category: "Romantic Indie",
        topPick: false,
        image: "Raabta.png"
    },
    {
        title: "Agar Tum Saath Ho",
        artist: "Alka Yagnik, Arijit Singh",
        language: "Hindi",
        category: "Romantic Sad",
        topPick: false,
        image: "Agar-Tum-Saath-Ho.png"
    },
    {
        title: "Suno Na Sangemarmar",
        artist: "Arijit Singh",
        language: "Hindi",
        category: "Romantic",
        topPick: false,
        image: "Suno-Na-Sangemarmar.png"
    },
    {
        title: "Janam Janam",
        artist: "Arijit Singh",
        language: "Hindi",
        category: "Romantic",
        topPick: false,
        image: "Janam-Janam.png"
    },
    {
        title: "Aaj Jaane Ki Zid Na Karo",
        artist: "Farida Khanum",
        language: "Urdu",
        category: "Romantic Sad",
        topPick: false,
        image: "Aaj-Jaane-Ki-Zidd.png"
    },
    {
        title: "Zaalima",
        artist: "Arijit Singh, Harshdeep Kaur",
        language: "Hindi",
        category: "Romantic",
        topPick: false,
        image: "Zaalima.png"
    },
    {
        title: "Tera Ban Jaunga",
        artist: "Akhil Sachdeva, Tulsi Kumar",
        language: "Hindi",
        category: "Romantic",
        topPick: false,
        image: "Tera-Ban-Jaunga.png"
    },
    {
        title: "Tu Hi Hai",
        artist: "Rahat Fateh Ali Khan",
        language: "Hindi",
        category: "Romantic Indie",
        topPick: false,
        image: "Tu-Hi-Hai.png"
    },
    {
        title: "Hasi",
        artist: "Amit Mishra, Shreya Ghosal",
        language: "Hindi",
        category: "Romantic Sad",
        topPick: false,
        image: "Hasi.png"
    },
    {
        title: "Mera Mann",
        artist: "Amit Trivedi",
        language: "Hindi",
        category: "Indie",
        topPick: false,
        image: "Mera-Mann.png"
    },
    {
        title: "Khaab",
        artist: "Aatif Aslam",
        language: "Hindi",
        category: "Romantic Indie",
        topPick: false,
        image: "Khaab.png"
    },
    {
        title: "Chupke Chupke",
        artist: "Shankar Ehsaan Loy",
        language: "Hindi",
        category: "Indie",
        topPick: false,
        image: "Chupke-Chupke.png"
    },
    {
        title: "Dil Dhadakne Do",
        artist: "Shankar Ehsaan Loy",
        language: "Hindi",
        category: "Indie",
        topPick: false,
        image: "Dil-Dhadakne-Do.png"
    },
    {
        title: "Dil Mere",
        artist: "The Local Train",
        language: "Hindi",
        category: "Warmth",
        topPick: false,
        image: "Aaftaab.png"
    },
    {
        title: "Choo Lo",
        artist: "The Local Train",
        language: "Hindi",
        category: "Warmth",
        topPick: false,
        image: "Aaftaab.png"
    },
    {
        title: "Dhaga (Aspirants)",
        artist: "Nilotpal Boh",
        language: "Hindi",
        category: "Romantic Sad",
        topPick: true,
        image: "Dhaga_Aspirants.png"  // Optional: add image filename
    },
    {
        title: "Zihaal e Miskin",
        artist: " Vishal Mishra & Shreya Ghosha",
        language: "Urdu",
        category: "Romantic",
        topPick: true,
        image: "zihaal-e-miskin.png"  // Optional: add image filename
    },
    {
        title: "Aaoge Tum Kabhi",
        artist: "The Local Train",
        language: "Hindi",
        category: "Warmth",
        topPick: false,
        image: "Aaftaab.png"
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        language: "English",
        category: "Pop",
        topPick: false
        // No image specified - will use emoji fallback
    },
    {
        title: "Mizaaj",
        artist: "The Local Train",
        language: "Hindi",
        category: "Warmth",
        topPick: false,
        image: "Aaftaab.png"
    },
    {
        title: "Kun Faya Kun",
        artist: "A.R. Rahman",
        language: "Hindi",
        category: "Sufi",
        topPick: true
    },
    {
        title: "Imagine",
        artist: "John Lennon",
        language: "English",
        category: "Classic",
        topPick: true
    },
    {
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        language: "English",
        category: "Rock",
        topPick: true
    },
    {
        title: "Mast Magan",
        artist: "Arijit Singh",
        language: "Hindi",
        category: "Romantic",
        topPick: false
    },
    {
        title: "Believer",
        artist: "Imagine Dragons",
        language: "English",
        category: "Pop Rock",
        topPick: false
    },
    {
        title: "Pehla Nasha",
        artist: "Udit Narayan, Sadhana Sargam",
        language: "Hindi",
        category: "Classic",
        topPick: true
    },
    {
        title: "Hotel California",
        artist: "Eagles",
        language: "English",
        category: "Rock",
        topPick: true
    },
    {
        title: "Ae Dil Hai Mushkil",
        artist: "Arijit Singh",
        language: "Hindi",
        category: "Romantic",
        topPick: false
    }
];

// ============================================
// APPLICATION STATE & INITIALIZATION
// ============================================

let filteredSongs = [...songs];

// Album cover emojis for visual variety
const albumEmojis = ['🎸', '🎤', '🎧', '🎵', '🎹', '🎺', '🥁', '🎻', '🎼', '🎷'];

// Get random emoji for album cover
function getRandomEmoji() {
    return albumEmojis[Math.floor(Math.random() * albumEmojis.length)];
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    populateFilters();
    updateStats();
    displaySongs(songs);
    setupEventListeners();
    addAnimationDelays();
}

// ============================================
// POPULATE FILTER DROPDOWNS
// ============================================

function populateFilters() {
    // Get unique languages and categories from songs array
    const languages = [...new Set(songs.map(s => s.language))].sort();
    const categories = [...new Set(songs.map(s => s.category))].sort();

    const langSelect = document.getElementById('languageFilter');
    const catSelect = document.getElementById('categoryFilter');

    // Populate language dropdown
    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang;
        langSelect.appendChild(option);
    });

    // Populate category dropdown
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        catSelect.appendChild(option);
    });
}

// ============================================
// UPDATE STATISTICS
// ============================================

function updateStats() {
    const totalSongs = songs.length;
    const topPicks = songs.filter(s => s.topPick).length;
    const uniqueLanguages = new Set(songs.map(s => s.language)).size;
    const uniqueCategories = new Set(songs.map(s => s.category)).size;

    // Animate numbers counting up
    animateNumber('totalSongs', totalSongs);
    animateNumber('topPicks', topPicks);
    animateNumber('languages', uniqueLanguages);
    animateNumber('categories', uniqueCategories);
}

// Animate number counting up effect
function animateNumber(elementId, targetNumber) {
    const element = document.getElementById(elementId);
    const duration = 1500; // 1.5 seconds
    const steps = 30;
    const stepValue = targetNumber / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += stepValue;
        if (current >= targetNumber) {
            element.textContent = targetNumber;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepDuration);
}

// ============================================
// DISPLAY SONGS
// ============================================

function displaySongs(songsToDisplay) {
    const grid = document.getElementById('songGrid');
    
    // Show "no results" message if no songs match filters
    if (songsToDisplay.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <div style="font-size: 3em; margin-bottom: 20px;">🎵</div>
                <p>No tracks found matching your filters!</p>
                <p style="font-size: 0.9em; margin-top: 10px; opacity: 0.7;">
                    Try adjusting your search or filters
                </p>
            </div>
        `;
        return;
    }

    // Create song cards
    grid.innerHTML = songsToDisplay.map((song, index) => {
        const emoji = getRandomEmoji();
        const hasImage = song.image && song.image.trim() !== '';
        
        // Generate album cover content
        let albumCoverContent;
        if (hasImage) {
            albumCoverContent = `
                <img src="tiles/${escapeHtml(song.image)}" 
                     alt="${escapeHtml(song.title)}" 
                     class="album-image"
                     onerror="this.style.display='none'; this.parentElement.classList.add('show-emoji'); this.parentElement.setAttribute('data-emoji', '${emoji}');">
                <div class="album-emoji-fallback">${emoji}</div>
            `;
        } else {
            albumCoverContent = `<div class="album-emoji-fallback">${emoji}</div>`;
        }
        
        return `
            <div class="song-card" style="animation-delay: ${index * 0.1}s">
                <div class="album-cover ${hasImage ? 'has-image' : ''}">
                    ${albumCoverContent}
                </div>
                <div class="song-info">
                    <div class="song-title">${escapeHtml(song.title)}</div>
                    <div class="song-artist">by ${escapeHtml(song.artist)}</div>
                    <div class="song-tags">
                        ${song.topPick ? '<span class="tag top-pick">⭐ Top Pick</span>' : ''}
                        <span class="tag language">${escapeHtml(song.language)}</span>
                        <span class="tag category">${escapeHtml(song.category)}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// FILTER SONGS
// ============================================

function filterSongs() {
    const language = document.getElementById('languageFilter').value;
    const category = document.getElementById('categoryFilter').value;
    const search = document.getElementById('searchInput').value.toLowerCase().trim();

    filteredSongs = songs.filter(song => {
        // Check language filter
        const matchLanguage = language === 'all' || song.language === language;
        
        // Check category filter
        const matchCategory = category === 'all' || song.category === category;
        
        // Check search filter (searches in title and artist)
        const matchSearch = search === '' || 
            song.title.toLowerCase().includes(search) || 
            song.artist.toLowerCase().includes(search);

        return matchLanguage && matchCategory && matchSearch;
    });

    displaySongs(filteredSongs);
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Language filter change
    document.getElementById('languageFilter').addEventListener('change', filterSongs);
    
    // Category filter change
    document.getElementById('categoryFilter').addEventListener('change', filterSongs);
    
    // Search input with debouncing for better performance
    let searchTimeout;
    document.getElementById('searchInput').addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterSongs, 300);
    });

    // Add keyboard shortcut for search (Ctrl/Cmd + K)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('searchInput').focus();
        }
    });
}

// ============================================
// ANIMATION UTILITIES
// ============================================

function addAnimationDelays() {
    // Add staggered animation delays to initial song cards
    const cards = document.querySelectorAll('.song-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// ============================================
// EASTER EGGS & FUN FEATURES
// ============================================

// Konami Code Easter Egg (↑ ↑ ↓ ↓ ← → ← → B A)
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        activatePartyMode();
    }
});

function activatePartyMode() {
    document.body.style.animation = 'rainbow 2s linear infinite';
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Show notification
    const notification = document.createElement('div');
    notification.textContent = '🎉 PARTY MODE ACTIVATED! 🎉';
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
        color: white;
        padding: 30px 60px;
        border-radius: 15px;
        font-size: 2em;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        animation: partyPulse 1s ease-in-out;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log(`
🎵 Welcome to Arzaw's Sonic Diary! 🎵
═══════════════════════════════════════

Current Stats:
📀 Total Songs: ${songs.length}
⭐ Top Picks: ${songs.filter(s => s.topPick).length}
🌍 Languages: ${new Set(songs.map(s => s.language)).size}
🎸 Categories: ${new Set(songs.map(s => s.category)).size}

Tip: Press Ctrl/Cmd + K to quickly search!

Made with ❤️ by Arzaw
═══════════════════════════════════════
`);