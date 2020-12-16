export interface Product {
  in_potential_products: boolean;
  asin: string;
  price: number;
  weight: number;
  updated_at: number;
  name: string;
  shipping_weight: null | number;
  domain: string;
  votes_count: number;
  daily_cashflow: number;
  currency: string;
  img: string;
  daily_sales: number;
  stars: number;
  bsr_value: number;
  brand_class: null | number;
  size: Array<number | null>;
  link: string;
  bsr_category: string;
  brand: string;
}

export interface GetInfo {
  count_products: number;
  page_count: number;
  products: Array<Product>;
  page: number;
}
