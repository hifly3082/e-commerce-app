import styled from 'styled-components'
import ProductItem from '../components/ProductItem'
import { IProductItem } from '../types/types'
import SmallSpinner from '../components/Spinner'
import { useGetProductsQuery } from '../features/api/storeApi'

interface ProductsListProps {
  products: IProductItem[]
  isLoading: boolean
  isError: boolean
  // searchParams: any
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
  // searchParams
}) => {
  // const {
  //   data: products,
  //   isLoading,
  //   isError,
  //   refetch
  // } = useGetProductsQuery(searchParams)

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
