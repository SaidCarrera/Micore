export interface Sale {
  _id?: string;
  userId: string;
  productName: string;
  amount: number;
  quantity: number;
  date: Date;
}