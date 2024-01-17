import styled from 'styled-components'
import Categories from '../components/Categories'
import Products from '../components/Products'

const Title = styled.h2`
  margin: 2rem auto 1rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`

const Home = () => {
  return (
    <>
      <Title>Categories</Title>
      <Categories />
      <Title>Products</Title>
      <Products />
    </>
  )
}
export default Home
