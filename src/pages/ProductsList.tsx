import styled from 'styled-components'
import ProductItem from '../components/ProductItem'
import { IProductItem } from '../types/types'
import SmallSpinner from '../components/Spinner'

interface ProductsListProps {
  products: IProductItem[]
  isLoading: boolean
  isError: boolean
}

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const NotFound = styled.p`
  padding: 1rem;
`

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  isLoading,
  isError
}) => {
  return isLoading ? (
    <SmallSpinner />
  ) : isError ? (
    <NotFound>Error fetching data</NotFound>
  ) : products?.length < 1 ? (
    <NotFound>Products not found</NotFound>
  ) : (
    <Products>
      {products?.map((item: IProductItem) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Products>
  )
}
export default ProductsList
