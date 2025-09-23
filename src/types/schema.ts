// @/types/schema.ts

export interface Image {
  src: string;
  alt: string;
}

export interface GalleryImage {
  src: string;
  title: string;
  alt: string;
}

export interface Category {
  id: string;        // Used for both code reference AND URL slug
  name: string;      // Display name: "Interior Signage"
  shortDescription: string;    // Brief tagline for cards/previews
  longDescription: string;     // Detailed description for category page
  copy?: {
    overview?: string;         // Category-level marketing copy
    benefits?: string[];       // Why this category matters
  };
}

export interface Product {
  id: string;           // Used for both code reference AND URL slug
  name: string;         // Display name: "Window Graphics"
  categoryId: string;   // Links to parent category
  shortDescription: string;    // Brief tagline for cards/previews
  longDescription: string;     // Main product description
  highlightImage: Image;       // Hero image for product
  gallery?: GalleryImage[];    // Additional images with titles
  specifications?: string[];   // Technical specs: "Material: 3M vinyl"
  benefits?: string[];         // Value props: "UV resistant", "Easy removal"
}
