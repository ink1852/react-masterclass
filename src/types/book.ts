export interface Book {
  id: number;
  name: string;
  price: string;
  author: string;
  stars: string;
  sideWidth: number;
  height: number;
  src: {
    front: string;
    side: string;
    back: string;
  };
}
