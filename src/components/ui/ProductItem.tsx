import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import {
  MdAddShoppingCart,
  MdFavorite,
  MdFavoriteBorder,
  MdOutlineManageSearch
} from 'react-icons/md'
import styled from 'styled-components'

import { IProductItem, IRootState } from '../../types/types'
import { addItemToCart } from '../../features/cart/cartSlice'
import {
  addToFavorites,
  removeFromFavorites
} from '../../features/favorites/favoritesSlice'

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 0;
  z-index: 3;
  justify-content: center;
  align-items: flex-end;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  position: relative;
  margin: 0.5rem;
  min-width: 18rem;
  height: 21rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  &:hover ${Info} {
    opacity: 1;
  }
`

const Image = styled.img`
  z-index: 2;
  max-width: 80%;
  max-height: 80%;
`

const Icon = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.6rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }

  & svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`

const ProductItem = ({ item }: { item: IProductItem }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const favoriteItems = useSelector((state: IRootState) => state.favorites)
  const isFavorite = favoriteItems.items.some(
    (favorite) => favorite.id === item.id
  )

  const handleOverview = (id: number) => () => {
    navigate(`/products/${id}`)
  }

  const handleAddItem = (item: IProductItem) => () => {
    dispatch(addItemToCart({ ...item, quantity: 1 }))
    toast.success('Item added to the cart')
  }

  const handleToggleFavorite = (item: IProductItem) => () => {
    if (favoriteItems.items.some((favorite) => favorite.id === item.id)) {
      dispatch(removeFromFavorites(item))
      toast.success('Item removed from favorites')
    } else {
      dispatch(addToFavorites(item))
      toast.success('Item added to favorites')
    }
  }

  return (
    <Container>
      <Image src={item.images[0]} />
      <Info>
        <Icon onClick={handleOverview(item.id)}>
          <MdOutlineManageSearch />
        </Icon>
        <Icon onClick={handleAddItem(item)}>
          <MdAddShoppingCart />
        </Icon>
        <Icon onClick={handleToggleFavorite(item)}>
          {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </Icon>
      </Info>
    </Container>
  )
}

export default ProductItem
