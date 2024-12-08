export interface Image {
    id: number;
    src: string;
    alt: string;
  }
  
export interface Concern {
    id: number;
    title: string;
    description: string;
    images: Image[];
  }
  