import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import styled from 'styled-components'

import SmallSpinner from '../components/Spinner'
import { useGetProductQuery } from '../features/api/storeApi'
import { addItemToCart } from '../features/cart/cartSlice'
import { IProductItem } from '../types/types'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
`

const ImgContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  position: relative;
`

const Image = styled.img`
  height: 50vh;
  object-fit: cover;
`

const Arrow = styled(BsArrowLeftCircleFill)`
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 50%;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #444;
  }
`

const RightArrow = styled(Arrow)`
  left: 1rem;
`

const LeftArrow = styled(Arrow)`
  right: 1rem;
  transform: scaleX(-1);
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3rem;
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 2.4rem;
`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;

  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #ccc;
  }
`

const AddButton = styled(Button)`
  margin-top: 1rem;
`

const Product: React.FC = () => {
  const [amount, setAmount] = useState(1)
  const [index, setIndex] = useState(0)
  const { productId } = useParams()
  const dispatch = useDispatch()

  const { data: product, isLoading, isError } = useGetProductQuery(productId)

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
  const handleAddItem = (item: IProductItem) => () => {
    dispatch(addItemToCart({ ...item, quantity: amount }))
  }

  if (isLoading) return <SmallSpinner />

  if (isError || !product) {
    return <div>Something went wrong</div>
  }

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <RightArrow onClick={prevIndex} />
          <Image src={product.images[index]} />
          <LeftArrow onClick={nextIndex} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>$ {product.price}</Price>
          <AddContainer>
            <AmountContainer>
              <Button onClick={handleDecreaseAmount}>-</Button>
              <Amount>{amount}</Amount>
              <Button onClick={handleIncreaseAmount}>+</Button>
            </AmountContainer>
          </AddContainer>
          <AddButton onClick={handleAddItem(product)}>ADD TO CART</AddButton>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Product
