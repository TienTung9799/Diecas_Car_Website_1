export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'diecast' | 'parts' | 'custom';
  subCategory?: string;
  image: string;
  colors?: string[];
  features?: string[];
}

export interface Build {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}
