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

export interface IProductsListProps {
  products: IProductItem[]
  isLoading: boolean
  isError: boolean
}

export interface IProductProps {
  product: IProductItem
  amount: number
  index: number
  nextIndex: () => void
  prevIndex: () => void
  onIncreaseAmount: () => void
  onDecreaseAmount: () => void
  onAddItem: (item: IProductItem) => void
}

export interface ICartItem extends IProductItem {
  quantity: number
}

export interface ICartState {
  items: ICartItem[]
}

export interface ICartProps {
  shippingFee: number
  cartItems: ICartItem[]
  cartLength: number
  totalSum: number
  onClearCart: () => void
  onRemoveItemById: (id: number) => void
  onOverviewById: (id: number) => void
  onIncreaseQty: (item: ICartItem) => void
  onDecreaseQty: (item: ICartItem) => void
}

export interface ISearchParams {
  title?: string
  priceMin?: string
  priceMax?: string
  categoryId?: string
}
