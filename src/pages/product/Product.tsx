import { BsArrowLeftCircleFill } from 'react-icons/bs'
import styled from 'styled-components'

import { IProductProps } from '../../types/types'

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
  user-select: none;
`

const Image = styled.img`
  height: 50vh;
  object-fit: cover;
`

const Arrow = styled(BsArrowLeftCircleFill)`
  position: absolute;
  font-size: 2.4rem;
  top: 50%;
  color: var(--color-grey-800);
  cursor: pointer;
  &:hover {
    color: var(--color-grey-700);
  }
`

const RightArrow = styled(Arrow)`
  left: 5rem;
`

const LeftArrow = styled(Arrow)`
  right: 5rem;
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
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 8px;
  color: var(--color-grey-800);
  border: 1px solid var(--color-main-500);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`

const Button = styled.button`
  color: var(--color-grey-800);
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-500);
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: var(--color-grey-200);
  }
`

const AddButton = styled(Button)`
  margin-top: 1rem;
  color: var(--color-grey-50);
  background-color: var(--color-main-300);

  &:hover {
    background-color: var(--color-main-500);
  }
`
const Product: React.FC<IProductProps> = ({
  product,
  amount,
  index,
  nextIndex,
  prevIndex,
  onIncreaseAmount,
  onDecreaseAmount,
  onAddItem
}) => {
  const handleAddItem = () => {
    onAddItem && onAddItem(product)
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
              <Button onClick={onDecreaseAmount}>-</Button>
              <Amount>{amount}</Amount>
              <Button onClick={onIncreaseAmount}>+</Button>
            </AmountContainer>
          </AddContainer>
          <AddButton onClick={handleAddItem}>ADD TO CART</AddButton>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Product
