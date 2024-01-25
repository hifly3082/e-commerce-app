import styled from 'styled-components'

import { ICategory } from '../../types/types'
import { useGetCategoriesQuery } from '../../features/api/storeApi'
import CategoryItem from './CategoryItem'
import SmallSpinner from './Spinner'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem;
  max-width: 1200px;
`

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

// pass onClick
const Categories = () => {
  const {
    data: categories,
    isLoading,
    isFetching,
    isError
  } = useGetCategoriesQuery({})

  return (
    <Container>
      {isLoading || isFetching ? (
        <SmallSpinner />
      ) : isError ? (
        <div>Something went wrong</div>
      ) : (
        <CategoryList>
          {categories.slice(0, 5).map((item: ICategory) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </CategoryList>
      )}
    </Container>
  )
}

export default Categories
