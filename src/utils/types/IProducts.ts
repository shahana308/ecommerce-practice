interface IProducts {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

interface IProductsResponse {
  limit: number;
  products: IProducts[];
  skip: number;
  total: number;
}

export type { IProducts, IProductsResponse };
