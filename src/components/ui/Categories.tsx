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

const Error = styled.p`
  padding: 1rem;
`

const Categories = () => {
  const {
    data: categories,
    isLoading,
    isFetching,
    isError
  } = useGetCategoriesQuery({})

  if (isLoading || isFetching) return <SmallSpinner />
  if (isError) return <Error>Something went wrong</Error>

  return (
    <Container>
      <CategoryList>
        {categories.map((item: ICategory) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </CategoryList>
    </Container>
  )
}

export default Categories
