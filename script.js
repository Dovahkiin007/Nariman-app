// ============================
// CONFIGURATION
// ============================

const herName = "Nariman";

// YYYY, M-1, D   (Dec = 11)
const sinceDate = new Date(2024, 11, 30);

// Reasons why you love her
const messages = [
  `I love you, ${herName}, because you make every place feel like home.`,
  `I love you, ${herName}, because you understand me even when I don’t say a word.`,
  "I love you because your smile genuinely makes my day better.",
  "I love you because you care about others in a way that inspires me.",
  "I love you because life with you feels lighter, warmer, and more meaningful.",
  "I love you because you make even boring days feel special.",
  `I love you, ${herName}, because you listen — really listen.`,
  "I love you because you never stop trying, even when things are hard.",
  "I love you because you see the best in people, including me.",
  "I love you because your presence calms me.",
  "I love you because you’re honest with me.",
  "I love you because being myself around you is easy.",
  "I love you because you make me want to be better, without ever forcing it.",
  "I love you because we can laugh about the dumbest things together.",
  `I love you, ${herName}, because you are my favorite person to talk to about anything.`
];

// Comfort messages for when she's sad
const sadMessages = [
  "Whatever happens today, you are enough. Exactly as you are.",
  "You can be tired, sad, or stressed and still be absolutely gorgeous.",
  "Take all the time you need to feel this. I’ve got you..",
  "Breathe. One small step at a time. I believe in you more than you know.",
  "You’ve survived every bad day so far. You’re stronger than you think.",
  "It’s okay to slow down. You don’t have to carry everything alone.",
  "Bad days don’t define you. They pass — and you remain.",
  "You are allowed to rest without feeling guilty.",
  "You matter more than whatever mistake you think you made.",
  "I’m proud of you for trying, even when no one sees it.",
  'You don’t have to be "okay" right now. Just be you.',
  "Take a breath. Then another. You’re doing better than you think.",
  "This feeling is temporary, even though it feels permanent right now. We’ll get to the other side of this together..",
  "You’re not a burden — you’re someone I choose.",
  "The world is better with you in it. Always."
];

// 40-day loop of "things I’m grateful for".
const gratitudeSets = [
  [
    "That you exist in my life at all.",
    "The way you make me feel seen.",
    "Your laugh when something really gets you."
  ],
  [
    "Your patience, even on days I don’t deserve it.",
    "How you still try, even when you’re tired.",
    "The way you care about the people you love."
  ],
  [
    "Your honesty with me.",
    "How you share your thoughts, even the small ones.",
    "That you trust me with your feelings."
  ],
  [
    "Your smile when you see something cute.",
    "The way you tell stories.",
    "How you can turn a normal moment into a memory."
  ],
  [
    "That we can be stupid and serious in the same day.",
    "Your sense of humor.",
    "The way you look at me when you think I’m not noticing."
  ],
  [
    "Your strength, even when you don’t feel strong.",
    "How you keep going through hard days.",
    "That you don’t give up easily."
  ],
  [
    "Your kindness to strangers.",
    "The way you care about small details.",
    "Your soft heart, even when life is rough."
  ],
  [
    "How you support my dreams.",
    "That you listen to my ideas, even the crazy ones.",
    "How you believe in me more than I do sometimes."
  ],
  [
    "Your voice when you’re excited.",
    "Your sleepy voice.",
    "The way you say my name."
  ],
  [
    "That you’re still here, choosing us.",
    "Every conversation we’ve ever had.",
    "The future we’re still building."
  ],
  // 10
  [
    "Your hugs.",
    "Your eyes when you’re happy.",
    "How safe I feel with you."
  ],
  [
    "Your little habits I’ve learned to recognize.",
    "How you remember details I forget.",
    "Your way of showing love in small actions."
  ],
  [
    "That you share your worries with me.",
    "That you let me see the real you.",
    "That you trust me with your vulnerable side."
  ],
  [
    "How you make even texts feel warm.",
    "Your random messages.",
    "Your good morning or good night when you send them."
  ],
  [
    "Your taste in music.",
    "Moments we spend listening together.",
    "The way you connect songs to feelings."
  ],
  [
    "Your stubbornness (even when it annoys me).",
    "Your standards.",
    "How you stand up for yourself and what you believe in."
  ],
  [
    "Your curiosity about the world.",
    "The questions you ask.",
    "How your mind works."
  ],
  [
    "Your softness with animals or cute things.",
    "Your compassion.",
    "The way your heart reacts to small kindness."
  ],
  [
    "That you are not perfect — and that’s perfect.",
    "That you sometimes overthink, because it means you care.",
    "That you’re human and real, not some distant idea."
  ],
  [
    "Your energy when you’re passionate about something.",
    "The way your eyes light up when you talk about what you love.",
    "How you inspire me without trying."
  ],
  // 20
  [
    "The memories we already have.",
    "The inside jokes only we get.",
    "The way I can look back and think, ‘I’m glad it was with you.’"
  ],
  [
    "Your courage to keep going.",
    "The way you handle things no one else even knows about.",
    "That you’re still here, fighting quietly."
  ],
  [
    "Your softness when you’re tired.",
    "The way you keep going anyway.",
    "That you let yourself be real with me."
  ],
  [
    "The way you care about your future.",
    "The way you care about your people.",
    "The way you care about us."
  ],
  [
    "Your silly side.",
    "Your serious side.",
    "How you balance both."
  ],
  [
    "How you make me feel chosen.",
    "That you could be anywhere, but you’re here with me.",
    "That you let me love you."
  ],
  [
    "Your little imperfections.",
    "Your unique way of thinking.",
    "Everything that makes you different from everyone else."
  ],
  [
    "Your quiet moments.",
    "The way you look when you’re lost in thought.",
    "That I get to see that side of you."
  ],
  [
    "Your support when I’m not okay.",
    "The way you stay when things are messy.",
    "That you don’t run away from hard days."
  ],
  [
    "That I can be myself with you.",
    "That you’ve seen my flaws and stayed.",
    "That you make me feel loved anyway."
  ],
  // 30
  [
    "The way your presence changes my day.",
    "The comfort I feel just knowing you exist.",
    "That you are you — and that’s enough."
  ],
  [
    "Your resilience.",
    "Your heart.",
    "Your mind."
  ],
  [
    "The way we can talk about anything.",
    "The way we can sit in silence and still be okay.",
    "The balance between both."
  ],
  [
    "Your small efforts that no one applauds.",
    "The things you do that go unnoticed.",
    "That I get to notice them."
  ],
  [
    "The way you react to good news.",
    "The way you handle bad news.",
    "The way you keep going regardless."
  ],
  [
    "Your dreams.",
    "Your fears.",
    "The fact that you share both with me."
  ],
  [
    "Your warmth.",
    "Your intelligence.",
    "Your sense of humor."
  ],
  [
    "The way you show up for the people you love.",
    "The way you care even when you’re tired.",
    "The way you don’t give up on them easily."
  ],
  [
    "The way you forgive.",
    "The way you learn.",
    "The way you grow."
  ],
  [
    "That you are Nariman.",
    "That there is only one you.",
    "That somehow, I get to love you."
  ]
  // 40 total
];

// === MUSIC PLAYLIST SETUP ===
const tracks = [
  { file: "assets/music1.mp3", label: "Still With You" },
  { file: "assets/music2.mp3", label: "Always Us" },
  { file: "assets/music3.mp3", label: "Something About You" },
  { file: "assets/music4.mp3", label: "Safe Place" },
  { file: "assets/music5.mp3", label: "Little Moments" }
];

let audio = null;
let isPlaying = false;
let currentTrackIndex = 0;

// ============================
// HELPER FUNCTIONS
// ============================

function pickRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function addButtonPulse(button) {
  if (!button) return;
  button.classList.remove("btn-pulse");
  void button.offsetWidth;
  button.classList.add("btn-pulse");
}

// ============================
// GREETING & DAYS COUNTER
// ============================

function setupGreeting() {
  const headingEl = document.getElementById("greeting-heading");
  const subEl = document.getElementById("greeting-sub");

  const now = new Date();
  const hour = now.getHours();

  let greeting = "";
  let subtitle = "";

  if (hour >= 5 && hour < 12) {
    greeting = `Good morning, ${herName} ☀️`;
    subtitle = "I hope today treats you gently.";
  } else if (hour >= 12 && hour < 18) {
    greeting = `Good afternoon, ${herName} 🌤`;
    subtitle = "Take a small break here whenever you need one.";
  } else if (hour >= 18 && hour < 22) {
    greeting = `Good evening, ${herName} 🌙`;
    subtitle = "You’ve done enough for today. I’m proud of you.";
  } else {
    greeting = `Good night, ${herName} 🌌`;
    subtitle = "Rest your mind. You don’t have to carry everything tonight.";
  }

  if (headingEl) headingEl.textContent = greeting;
  if (subEl) subEl.textContent = subtitle;
}

function updateDaysCounter() {
  const now = new Date();
  const diffMs = now - sinceDate;
  const days = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
  const el = document.getElementById("days-counter");
  if (el) el.textContent = days.toString();
}

// ============================
// LOVE MESSAGES
// ============================

function setupLoveMessageButton() {
  const btn = document.getElementById("new-message-btn");
  const textEl = document.getElementById("love-message");
  if (!btn || !textEl) return;

  btn.addEventListener("click", () => {
    textEl.textContent = pickRandom(messages);
    addButtonPulse(btn);
  });
}

// ============================
// SAD MESSAGES
// ============================

function setupSadButton() {
  const btn = document.getElementById("sad-btn");
  const sadMessageEl = document.getElementById("sad-message");
  if (!btn || !sadMessageEl) return;

  btn.addEventListener("click", () => {
    sadMessageEl.textContent = pickRandom(sadMessages);
    sadMessageEl.classList.remove("hidden");
    addButtonPulse(btn);
  });
}

// ============================
// GRATITUDE (40-DAY LOOP)
// ============================

function setupGratitude() {
  const container = document.getElementById("gratitude-list");
  if (!container || gratitudeSets.length === 0) return;

  const now = new Date();
  const diffMs = now - sinceDate;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const index = ((days % gratitudeSets.length) + gratitudeSets.length) % gratitudeSets.length;

  const todaySet = gratitudeSets[index];

  container.innerHTML = "";
  todaySet.slice(0, 3).forEach(line => {
    const p = document.createElement("p");
    p.textContent = `• ${line}`;
    container.appendChild(p);
  });
}

// ============================
// MUSIC
// ============================

function updateTrackLabel() {
  const labelEl = document.getElementById("current-track-label");
  if (!labelEl || tracks.length === 0) return;
  const state = isPlaying ? "Playing" : "Paused";
  labelEl.textContent = `${state}: ${tracks[currentTrackIndex].label}`;
}

function loadTrack(index) {
  if (tracks.length === 0) return;

  if (audio) {
    audio.pause();
  }

  const track = tracks[index];
  audio = new Audio(track.file);

  updateTrackLabel();

  if (isPlaying) {
    audio.play().catch(() => {
      // autoplay blocked; user can tap again
    });
  }
}

function setupMusicButtons() {
  const playBtn = document.getElementById("music-btn");
  const nextBtn = document.getElementById("next-track-btn");

  if (!playBtn || !nextBtn || tracks.length === 0) return;

  // Initialize first track
  loadTrack(currentTrackIndex);

  playBtn.addEventListener("click", () => {
    addButtonPulse(playBtn);

    if (!audio) {
      loadTrack(currentTrackIndex);
    }

    if (!isPlaying) {
      audio.play().then(() => {
        isPlaying = true;
        updateTrackLabel();
      }).catch(() => {
        // autoplay blocked; another tap will try again
      });
    } else {
      audio.pause();
      isPlaying = false;
      updateTrackLabel();
    }
  });

  nextBtn.addEventListener("click", () => {
    addButtonPulse(nextBtn);
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
  });
}

// ============================
// EMERGENCY OVERLAY
// ============================

function setupEmergencyOverlay() {
  const btn = document.getElementById("emergency-btn");
  const overlay = document.getElementById("emergency-overlay");
  const closeBtn = document.getElementById("close-emergency-btn");

  if (!btn || !overlay || !closeBtn) return;

  btn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    addButtonPulse(btn);
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    addButtonPulse(closeBtn);
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.add("hidden");
    }
  });
}

// ============================
// SECRET LETTER OVERLAY
// ============================

function setupSecretOverlay() {
  const secretCard = document.getElementById("secret-card");
  const overlay = document.getElementById("secret-overlay");
  const closeBtn = document.getElementById("close-secret-btn");

  if (!secretCard || !overlay || !closeBtn) return;

  let tapCount = 0;
  let lastTapTime = 0;
  const TAP_WINDOW_MS = 1500;

  secretCard.addEventListener("click", () => {
    const now = Date.now();
    if (now - lastTapTime <= TAP_WINDOW_MS) {
      tapCount += 1;
    } else {
      tapCount = 1;
    }
    lastTapTime = now;

    if (tapCount >= 3) {
      overlay.classList.remove("hidden");
      tapCount = 0;
    }
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    addButtonPulse(closeBtn);
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.add("hidden");
    }
  });
}

// ============================
// SPECIAL FLOATING HEART
// ============================

function setupSpecialHeart() {
  const heart = document.getElementById("special-heart");
  const msg = document.getElementById("special-heart-message");
  if (!heart || !msg) return;

  let clickCount = 0;
  let resetTimeout = null;
  let msgTimeout = null;

  heart.addEventListener("click", () => {
    clickCount += 1;

    // Slight size increase with each click (up to a limit)
    const scale = 1 + Math.min(clickCount * 0.06, 0.5);
    heart.style.transform = `scale(${scale})`;

    if (clickCount === 7) {
      // Explosion animation
      heart.classList.add("special-heart-explode");

      // Show message
      msg.classList.remove("hidden");

      // Reset click count and heart after animation
      clearTimeout(resetTimeout);
      resetTimeout = setTimeout(() => {
        clickCount = 0;
        heart.classList.remove("special-heart-explode");
        heart.style.transform = ""; // reset to CSS animation default
      }, 800);

      // Hide message after a bit
      clearTimeout(msgTimeout);
      msgTimeout = setTimeout(() => {
        msg.classList.add("hidden");
      }, 3000);
    }
  });
}

// ============================
// INIT
// ============================

document.addEventListener("DOMContentLoaded", () => {
  setupGreeting();
  updateDaysCounter();
  setupGratitude();
  setupLoveMessageButton();
  setupSadButton();
  setupMusicButtons();
  setupEmergencyOverlay();
  setupSecretOverlay();
  setupSpecialHeart();
});
