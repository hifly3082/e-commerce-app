import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import SmallSpinner from '../../components/ui/Spinner'
import { useGetProductByIdQuery } from '../../features/api/storeApi'
import { addItemToCart } from '../../features/cart/cartSlice'
import { IProductItem } from '../../types/types'
import toast from 'react-hot-toast'
import Product from './Product'

const ProductPage: React.FC = () => {
  const [amount, setAmount] = useState(1)
  const [index, setIndex] = useState(0)
  const { productId } = useParams()
  const dispatch = useDispatch()

  const {
    data: product,
    isLoading,
    isError
  } = useGetProductByIdQuery(productId)

  const nextIndex = () => {
    setIndex(index === product.images.length - 1 ? 0 : index + 1)
  }

  const prevIndex = () => {
    setIndex(index === 0 ? product.images.length - 1 : index - 1)
  }

  const handleDecreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  const handleIncreaseAmount = () => {
    setAmount(amount + 1)
  }

  const handleAddItem = (item: IProductItem) => {
    dispatch(addItemToCart({ ...item, quantity: amount }))
    toast.success('Item successfully added to the cart')
  }

  if (isLoading) return <SmallSpinner />
  if (isError || !product) {
    return <div>Something went wrong</div>
  }

  return (
    <Product
      product={product}
      amount={amount}
      index={index}
      nextIndex={nextIndex}
      prevIndex={prevIndex}
      onAddItem={handleAddItem}
      onIncreaseAmount={handleIncreaseAmount}
      onDecreaseAmount={handleDecreaseAmount}
    />
  )
}

export default ProductPage
