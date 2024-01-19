import styled from 'styled-components'
import ProductItem from '../components/ProductItem'
import { useGetProductsQuery } from '../features/api/storeApi'
import { IProductItem } from '../types/types'
import SmallSpinner from '../components/Spinner'

interface ProductsListProps {
  searchParams: any
  filterParams: any
}

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const NotFound = styled.p`
  padding: 1rem;
`

const ProductsList: React.FC<ProductsListProps> = ({
  searchParams,
  filterParams
}) => {
  const combinedParams = { ...searchParams, ...filterParams }
  const {
    data: products,
    isLoading,
    isError
  } = useGetProductsQuery(combinedParams)

  if (products?.length < 1) return <NotFound>Products not found</NotFound>

  return (
    <Products>
      {isLoading && <SmallSpinner />}
      {isError && <p>Error fetching data</p>}
      {products?.map((item: IProductItem) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Products>
  )
}
export default ProductsList
