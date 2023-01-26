export interface IProduct {
  id: string;
  name: string;
  type: string;
  storage: number;
}

export type ICartProduct  = {
  id: string;
  quantity: number;
}