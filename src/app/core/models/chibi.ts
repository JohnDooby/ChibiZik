/**
 * Modèle représentant un Chibi
 */
export interface Chibi {
    id: string; // Identifiant unique
    slug: string; // Slug pour l'URL
    nom: string; // Nom du Chibi
    emoji: string; // Emoji représentant le Chibi
    code: string; // Son ADN Strudel
    couleur: string;// Couleur associée au Chibi
    category:string;// Catégorie du Chibi
    imageUrl:string;//image du chibi
}
