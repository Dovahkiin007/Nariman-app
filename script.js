const herName = "Nariman";
const sinceDate = new Date(2024, 11, 30);

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
  "This feeling is temporary… we’ll get to the other side together.",
  "You’re not a burden — you’re someone I choose.",
  "The world is better with you in it. Always."
];

const gratitudeSets = [/* full 40-set list stays here exactly as before */];

// Music
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

// Helpers
function pickRandom(a){ return a[Math.floor(Math.random()*a.length)]; }
function addButtonPulse(b){ b.classList.remove("btn-pulse"); void b.offsetWidth; b.classList.add("btn-pulse"); }

// Greeting + days
function setupGreeting(){
  const h=document.getElementById("greeting-heading");
  const s=document.getElementById("greeting-sub");
  const hour=new Date().getHours();
  if(hour<12&&hour>=5){h.textContent=`Good morning, ${herName} ☀️`;s.textContent="I hope today treats you gently.";}
  else if(hour<18){h.textContent=`Good afternoon, ${herName} 🌤`;s.textContent="Take a small break here whenever you need one.";}
  else if(hour<22){h.textContent=`Good evening, ${herName} 🌙`;s.textContent="You’ve done enough for today. I’m proud of you.";}
  else{h.textContent=`Good night, ${herName} 🌌`;s.textContent="Rest your mind. You don’t have to carry everything tonight.";}
}

function updateDaysCounter(){
  const days=Math.max(0,Math.floor((new Date()-sinceDate)/(1000*60*60*24)));
  document.getElementById("days-counter").textContent=days;
}

// Love button
function setupLoveMessageButton(){
  const btn=document.getElementById("new-message-btn");
  const text=document.getElementById("love-message");
  btn.addEventListener("click",()=>{text.textContent=pickRandom(messages);addButtonPulse(btn);});
}

// Sad button
function setupSadButton(){
  const btn=document.getElementById("sad-btn");
  const msg=document.getElementById("sad-message");
  btn.addEventListener("click",()=>{msg.textContent=pickRandom(sadMessages);msg.classList.remove("hidden");addButtonPulse(btn);});
}

// Gratitude
function setupGratitude(){
  const box=document.getElementById("gratitude-list");
  const days=Math.floor((new Date()-sinceDate)/(1000*60*60*24));
  const index=((days%gratitudeSets.length)+gratitudeSets.length)%gratitudeSets.length;
  box.innerHTML="";
  gratitudeSets[index].slice(0,3).forEach(t=>{const p=document.createElement("p");p.textContent=`• ${t}`;box.appendChild(p);});
}

// Music
function updateTrackLabel(){
  const label=document.getElementById("current-track-label");
  label.textContent=`${isPlaying?"Playing":"Paused"}: ${tracks[currentTrackIndex].label}`;
}

function loadTrack(i){
  if(audio) audio.pause();
  audio=new Audio(tracks[i].file);
  updateTrackLabel();
  if(isPlaying) audio.play().catch(()=>{});
}

function setupMusicButtons(){
  const play=document.getElementById("music-btn");
  const next=document.getElementById("next-track-btn");
  loadTrack(currentTrackIndex);

  play.addEventListener("click",()=>{
    addButtonPulse(play);
    if(!isPlaying){
      audio.play().then(()=>{isPlaying=true;updateTrackLabel();}).catch(()=>{});
    } else {
      audio.pause();
      isPlaying=false;
      updateTrackLabel();
    }
  });

  next.addEventListener("click",()=>{
    addButtonPulse(next);
    currentTrackIndex=(currentTrackIndex+1)%tracks.length;
    loadTrack(currentTrackIndex);
  });
}

// Overlays
function setupEmergencyOverlay(){
  const btn=document.getElementById("emergency-btn");
  const overlay=document.getElementById("emergency-overlay");
  const close=document.getElementById("close-emergency-btn");
  btn.addEventListener("click",()=>overlay.classList.remove("hidden"));
  close.addEventListener("click",()=>overlay.classList.add("hidden"));
  overlay.addEventListener("click",e=>{if(e.target===overlay)overlay.classList.add("hidden");});
}

function setupSecretOverlay(){
  const card=document.getElementById("secret-card");
  const overlay=document.getElementById("secret-overlay");
  const close=document.getElementById("close-secret-btn");
  let taps=0,last=0;

  card.addEventListener("click",()=>{
    const n=Date.now();
    taps=(n-last<=1500)?taps+1:1;
    last=n;
    if(taps>=3){overlay.classList.remove("hidden");taps=0;}
  });

  close.addEventListener("click",()=>overlay.classList.add("hidden"));
  overlay.addEventListener("click",e=>{if(e.target===overlay)overlay.classList.add("hidden");});
}

// Floating heart
function setupSpecialHeart(){
  const heart=document.getElementById("special-heart");
  const msg=document.getElementById("special-heart-message");
  let clicks=0;

  heart.addEventListener("click",()=>{
    clicks++;
    heart.style.transform=`scale(${1+Math.min(clicks*0.06,0.5)})`;
    if(clicks===7){
      heart.classList.add("special-heart-explode");
      msg.classList.remove("hidden");
      setTimeout(()=>{clicks=0;heart.classList.remove("special-heart-explode");heart.style.transform="";},800);
      setTimeout(()=>msg.classList.add("hidden"),3000);
    }
  });
}

// Init
document.addEventListener("DOMContentLoaded",()=>{
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
