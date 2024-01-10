import styled, { css } from 'styled-components'
// Define the Title as a styled component using the css helper function
const titleStyles = css`
  color: black;
  margin-bottom: 20px;
  z-index: 15;
  &::before {
    content: '';
    padding: 1rem;
    position: absolute;
    width: 30%;
    height: 1.4rem;

    background-color: rgba(255, 255, 255, 0.35);
    top: 44%;
    transform-origin: right;
    transform: scaleX(0) skew(5deg, 5deg);
    transition: transform 0.3s ease-in-out;
  }
`

const Title = styled.h1`
  ${titleStyles}
`

const Container = styled.div`
  flex: 1;
  margin: 2rem;
  height: 70vh;
  /* position: relative; */
  transition: all 0.3s ease-in-out;
  filter: grayscale(75%);

  &:hover {
    filter: grayscale(20%);
  }

  &:hover ${Title}::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`

const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateX(50%);
  }
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  border: 0.5px solid linear-gradient(0.25turn, #3f87a6, #f69d3c);
  padding: 0.6rem;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`

const CategoryItem = ({ item }: any) => {
  return (
    <Container>
      <Image src={item.img} alt={item.name} />
      <Info>
        <Title>{item.name}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
