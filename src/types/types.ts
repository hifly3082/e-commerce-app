export interface ICategory {
  id: number
  name: string
  image: string
}

export interface IProductItem {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  category: ICategory
}

export interface ICartItem extends IProductItem {
  quantity: number
}

export interface IRootState {
  cart: {
    items: ICartItem[]
  }
}

export interface SearchParams {
  title?: string
  priceMin?: string
  priceMax?: string
  categoryId?: string
}
