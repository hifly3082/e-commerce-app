import styled from 'styled-components'
import Categories from '../../components/ui/Categories'
import ProductsCarousel from '../../components/ui/ProductsCarousel'

const Title = styled.h2`
  margin: 2rem auto 1rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`

const HomePage = () => {
  return (
    <>
      <Title>Categories</Title>
      <Categories />
      <Title>Products</Title>
      <ProductsCarousel />
    </>
  )
}
export default HomePage
