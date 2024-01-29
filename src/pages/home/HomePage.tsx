import styled from 'styled-components'
import Categories from '../../components/ui/categories/Categories'
import ProductsCarousel from '../../components/ui/products/ProductsCarousel'

const Title = styled.h2`
  margin: 2rem auto 1rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`

const HomePage = () => {
  return (
    <div>
      <Title>Categories</Title>
      <Categories />
      <Title>Products</Title>
      <ProductsCarousel />
    </div>
  )
}
export default HomePage
