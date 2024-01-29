import styled from 'styled-components'
import ProductItem from '../../components/ui/products/ProductItem'
import { IProductItem, IProductsListProps } from '../../types/types'
import SmallSpinner from '../../components/ui/Spinner'

const Products = styled.div`
  padding-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const Error = styled.p`
  padding: 1rem;
`

const ProductsList: React.FC<IProductsListProps> = ({
  products,
  isLoading,
  isError
}) => {
  if (isLoading) return <SmallSpinner />
  if (isError) return <Error>Error fetching data</Error>
  if (products?.length < 1) return <Error>Products not found</Error>

  return (
    <Products>
      {products?.map((item: IProductItem) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Products>
  )
}
export default ProductsList
