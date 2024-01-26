import styled from 'styled-components'
import ProductItem from '../../components/ui/ProductItem'
import { IProductItem } from '../../types/types'
import SmallSpinner from '../../components/ui/Spinner'

interface ProductsListProps {
  products: IProductItem[]
  isLoading: boolean
  isError: boolean
}

const Products = styled.div`
  padding-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const Error = styled.p`
  padding: 1rem;
`

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  isLoading,
  isError
}) => {
  if (isLoading) return <SmallSpinner />
  if (isError) return <Error>Error fetching data</Error>

  return products?.length < 1 ? (
    <Error>Products not found</Error>
  ) : (
    <Products>
      {products?.map((item: IProductItem) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Products>
  )
}
export default ProductsList
