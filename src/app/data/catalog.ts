import { Chibi } from "../core/models/chibi";

export const CHIBI_CATALOG: Chibi[] = [
  // --- SECTION RYTHMIQUE (Kicks, Snares, Hats) ---
  { id: '1', slug: 'heavy-kick', nom: 'Heavy Kick', emoji: '🌑', couleur: '#000000', code: 's("808bd:0*4")' },
  { id: '2', slug: 'classic-808', nom: 'TR-808', emoji: '📟', couleur: '#FF4500', code: 's("808:1*4")' },
  { id: '3', slug: 'snare-808', nom: 'Snare 808', emoji: '💥', couleur: '#FF1493', code: 's("~ 808sd:0")' },
  { id: '4', slug: 'hat-closed', nom: 'Hi-Hat', emoji: '👟', couleur: '#FFFF00', code: 's("808hc:0*8")' },
  { id: '5', slug: 'hat-open', nom: 'Open Hat', emoji: '✨', couleur: '#FFD700', code: 's("~ 808oh:0")' },

  // --- SECTION VOIX & ALPHABET ---
  { id: '6', slug: 'alpha-a', nom: 'Voice A', emoji: '🅰️', couleur: '#E6194B', code: 's("alphabet:0*2")' },
  { id: '7', slug: 'alpha-z', nom: 'Voice Z', emoji: '💤', couleur: '#4363D8', code: 's("alphabet:25").slow(2)' },

  // --- SECTION MÉLODIQUE & BASSES ---
  { id: '8', slug: 'arpy-angel', nom: 'Arpy', emoji: '🧚', couleur: '#3CB44B', code: 's("arpy:0*4").note("0 2 4 7")' },
  { id: '9', slug: 'bass-sub', nom: 'Sub Bass', emoji: '🌊', couleur: '#000080', code: 's("bass:1*2")' },
  { id: '10', slug: 'moog-synth', nom: 'Mighty Moog', emoji: '🎹', couleur: '#911EB4', code: 's("moog:0").note("0 3")' },

  // --- SECTION EFFETS & GLITCH ---
  { id: '11', slug: 'glitch-one', nom: 'Glitch FX', emoji: '👾', couleur: '#F032E6', code: 's("glitch:2(3,8)")' },
  { id: '12', slug: 'can-hit', nom: 'Can Perc', emoji: '🥫', couleur: '#A9A9A9', code: 's("can:5*4")' },
  { id: '13', slug: 'bird-tweet', nom: 'Nature', emoji: '🐦', couleur: '#42D4F4', code: 's("birds:2").slow(2)' },
  { id: '14', slug: 'coin-sound', nom: 'Mario Coin', emoji: '💰', couleur: '#FFE119', code: 's("coins:0")' },
  { id: '15', slug: 'bubble-pop', nom: 'Bubbles', emoji: '🧼', couleur: '#FABEBE', code: 's("bubble:0*4")' },

  // --- SECTION EXPLORATION ---
  { id: '16', slug: 'armora-tank', nom: 'Armora', emoji: '🛡️', couleur: '#808000', code: 's("armora:6").slow(4)' },
  { id: '17', slug: 'bottle-blow', nom: 'Bottle', emoji: '🍾', couleur: '#BCF60C', code: 's("bottle:4*4")' },
  { id: '18', slug: 'insect-noise', nom: 'Katydid', emoji: '🦗', couleur: '#32CD32', code: 's("insect:2").slow(2)' },
  { id: '19', slug: 'invaders-fx', nom: 'Invaders', emoji: '🛸', couleur: '#00FFFF', code: 's("invaders:10*4")' },
  { id: '20', slug: 'mouth-perc', nom: 'Beatbox', emoji: '👄', couleur: '#AA6E28', code: 's("mouth:8*4")' }
];