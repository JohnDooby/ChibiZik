import { Chibi } from "../core/models/chibi";

export const CHIBI_CATALOG: Chibi[] = [
  // --- SECTION RYTHMIQUE (STACK) ---
  { 
    id: 's1', 
    slug: 'Akane', 
    nom: 'Akane', 
    emoji: '🦶', 
    couleur: '#FF0000', 
    code: 's("bd:0 ~ bd:0 [bd:0 bd:0]")', 
    category: 'kick',
    imageUrl:'assets/images/chibis/tambour.png' 
  },
  { 
    id: 's2', 
    slug: 'Chika', 
    nom: 'Chika', 
    emoji: '💥', 
    couleur: '#FFD700', 
    code: 's("[~ hh:0] [~ hh:0] [~ hh:0] ~")', 
    category: 'hat' ,
    imageUrl:'assets/images/chibis/highhat.png' 
  },
  { 
    id: 's3', 
    slug: 'Riku', 
    nom: 'Riku', 
    emoji: '🐍', 
    couleur: '#32CD32', 
    code: 's("~ sn:1 ~ [~ ~ ho:1 ~ ]")', 
    category: 'snare' ,
    imageUrl:'assets/images/chibis/snare.png' 
  },
  { 
    id: 's4', 
    slug: 'Kira', 
    nom: 'Kira', 
    emoji: '🧨', 
    couleur: '#FF4500', 
    code: 's("~ ~ ~ [~ cr:5]")', 
    category: 'perc' ,
    imageUrl:'assets/images/chibis/cymballe.png' 
  },

  // --- SECTION MÉLODIQUE (STACK) ---
  { 
    id: 's5', 
    slug: 'Sumire', 
    nom: 'Sumire', 
    emoji: '🌫️', 
    couleur: '#4B0082', 
    code: 'note("<[0 ~ ~ ~] [0 ~ [~ 4] [~ 7]] 8*4 5*4>").scale("D:minor").sound("arpy:0").lpf(200).release(0.1)', 
    category: 'bass' ,
    imageUrl:'assets/images/chibis/basse.png' 
  },
  { 
    id: 's6', 
    slug: 'Nana', 
    nom: 'Nana', 
    emoji: '🎸', 
    couleur: '#1E90FF', 
    code: 'note("<[e1 c1 ~ ~ e1 e1 ~ ~] [e1 c1 ~ ~ e1 g1 ~ ~] [a1 e1 ~ ~ a1 a1 ~ ~] [f1 a1 ~ ~ f1 a1 ~ ~]>").scale("D:minor").sound("arpy:0").sustain(2).decay(10).delay(".05").room(0.5)', 
    category: 'guitare' ,
    imageUrl:'assets/images/chibis/guitare.png' 
  },
  { 
    id: 's7', 
    slug: 'Rei', 
    nom: 'Rei', 
    emoji: '✨', 
    couleur: '#FF00FF', 
    code: 'note("[~ ~ g4 b4 ~ a4 g4 ~ ~ e4 g4 ~ b4 a4 g4 e4]/4").sound("arpy:0").clip(0.3).room(1).gain("0.7 0.9 0.6 0.8")', 
    category: 'lead' ,
    imageUrl:'assets/images/chibis/clavier.png' 
  }

];