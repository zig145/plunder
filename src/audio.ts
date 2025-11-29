// Pirate-themed audio clips
// These audio files are sourced from royalty-free libraries

const PIRATE_SOUNDS = [
  '/audio/pirates-life.mp3',      // "Yo ho yo ho a pirate's life for me"
  '/audio/pirate-laugh.mp3',       // Pirate laugh
  '/audio/treasure-found.mp3',     // Treasure discovery sound
  '/audio/sword-clash.mp3',        // Sword sound effect
  '/audio/pirate-shout.mp3',       // "Arr!" or "Shiver me timbers!"
]

let backgroundMusic: HTMLAudioElement | null = null

export const initializeBackgroundMusic = () => {
  if (backgroundMusic) return // Already initialized
  
  backgroundMusic = new Audio('/audio/Drunken Sailor.mp3')
  backgroundMusic.loop = true
  backgroundMusic.volume = 0.3 // Set to 30% volume so it doesn't overpower sound effects
  backgroundMusic.play().catch(err => {
    console.warn('Could not play background music:', err)
  })
}

export const stopBackgroundMusic = () => {
  if (backgroundMusic) {
    backgroundMusic.pause()
    backgroundMusic = null
  }
}

export const playPirateSound = () => {
  try {
    const randomIndex = Math.floor(Math.random() * PIRATE_SOUNDS.length)
    const soundFile = PIRATE_SOUNDS[randomIndex]
    
    const audio = new Audio(soundFile)
    audio.volume = 0.7
    audio.play().catch(err => {
      console.warn('Could not play audio:', err)
      // Fallback to procedural sound if file fails
      playProceduralSound()
    })
  } catch (err) {
    console.error('Error playing sound:', err)
  }
}

// Fallback procedural sounds if audio files aren't available
const playProceduralSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  
  // Random selection of sounds
  const soundType = Math.floor(Math.random() * 4)
  
  switch (soundType) {
    case 0:
      playShout(audioContext)
      break
    case 1:
      playSwordClash(audioContext)
      break
    case 2:
      playTreasureChime(audioContext)
      break
    case 3:
      playPirateShout(audioContext)
      break
  }
}

function playShout(audioContext: AudioContext) {
  // "Arr!" - A raspy shout
  const now = audioContext.currentTime
  const osc = audioContext.createOscillator()
  const gain = audioContext.createGain()
  
  osc.connect(gain)
  gain.connect(audioContext.destination)
  
  osc.type = 'square'
  osc.frequency.setValueAtTime(150, now)
  osc.frequency.exponentialRampToValueAtTime(100, now + 0.3)
  
  gain.gain.setValueAtTime(0.3, now)
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3)
  
  osc.start(now)
  osc.stop(now + 0.3)
}

function playSwordClash(audioContext: AudioContext) {
  // Sword clash sound
  const now = audioContext.currentTime
  const osc = audioContext.createOscillator()
  const gain = audioContext.createGain()
  
  osc.connect(gain)
  gain.connect(audioContext.destination)
  
  osc.type = 'triangle'
  osc.frequency.setValueAtTime(400, now)
  osc.frequency.exponentialRampToValueAtTime(200, now + 0.15)
  
  gain.gain.setValueAtTime(0.2, now)
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15)
  
  osc.start(now)
  osc.stop(now + 0.15)
}

function playTreasureChime(audioContext: AudioContext) {
  // Treasure found chime
  const now = audioContext.currentTime
  
  // First note
  const osc1 = audioContext.createOscillator()
  const gain1 = audioContext.createGain()
  
  osc1.connect(gain1)
  gain1.connect(audioContext.destination)
  
  osc1.type = 'sine'
  osc1.frequency.setValueAtTime(523, now) // C5
  gain1.gain.setValueAtTime(0.2, now)
  gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.3)
  
  osc1.start(now)
  osc1.stop(now + 0.3)
  
  // Second note (higher)
  const osc2 = audioContext.createOscillator()
  const gain2 = audioContext.createGain()
  
  osc2.connect(gain2)
  gain2.connect(audioContext.destination)
  
  osc2.type = 'sine'
  osc2.frequency.setValueAtTime(659, now + 0.15) // E5
  gain2.gain.setValueAtTime(0, now + 0.15)
  gain2.gain.setValueAtTime(0.2, now + 0.15)
  gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.45)
  
  osc2.start(now + 0.15)
  osc2.stop(now + 0.45)
}

function playPirateShout(audioContext: AudioContext) {
  // "Shiver me timbers!" - Multiple tones
  const now = audioContext.currentTime
  
  for (let i = 0; i < 3; i++) {
    const osc = audioContext.createOscillator()
    const gain = audioContext.createGain()
    
    osc.connect(gain)
    gain.connect(audioContext.destination)
    
    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(200 + i * 50, now + i * 0.1)
    osc.frequency.exponentialRampToValueAtTime(120, now + i * 0.1 + 0.2)
    
    gain.gain.setValueAtTime(0.15, now + i * 0.1)
    gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.2)
    
    osc.start(now + i * 0.1)
    osc.stop(now + i * 0.1 + 0.2)
  }
}

