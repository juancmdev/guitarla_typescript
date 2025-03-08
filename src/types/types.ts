export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type CarItem = Guitar & {
  quantity: number;
};

//Utility Types // Pick selecciona algunos atributos y Omit los omite
// export type CarItem = Pick<Guitar, "id" | "name" | "price"> & {
//   quantity: number;
// };

// export type CarItem = Omit<Guitar, "name" | "price"> & {
//   quantity: number;
// };
