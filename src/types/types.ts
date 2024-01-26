export interface IRootState {
  cart: {
    items: ICartItem[]
  }
  favorites: {
    items: IProductItem[]
  }
}

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

export interface ICartProps {
  onClearCart: () => void
  onRemoveItem: (item: ICartItem) => void
  onOverview: (id: number) => void
  onIncreaseQty: (item: ICartItem) => void
  onDecreaseQty: (item: ICartItem) => void
  cartState: IRootState['cart']
}

export interface ISearchParams {
  title?: string
  priceMin?: string
  priceMax?: string
  categoryId?: string
}
