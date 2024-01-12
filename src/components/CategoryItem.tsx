import styled from 'styled-components'
import { xs } from '../styles/responsive'

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
`

const Container = styled.div`
  flex: 1;
  margin: 2rem;
  height: 70vh;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  filter: grayscale(70%);

  &:hover {
    filter: grayscale(20%);
  }

  &:hover ${Image} {
    width: 60%;
  }
  ${xs} {
    height: 20vh;
  }
`

const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  opacity: 0.5;
  transition: all 0.3s ease-in-out;

  ${Container}:hover & {
    opacity: 1;
  }
`

const Title = styled.h1`
  margin-bottom: 1rem;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Button = styled.button`
  padding: 0.6rem;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`

const CategoryItem = ({ item }: any) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={item.img} alt={item.name} />
      </ImageWrapper>
      <Info>
        <Title>{item.name}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
