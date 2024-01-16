import styled from 'styled-components'
import { useGetCategoriesQuery } from '../features/api/storeApi'
import SmallSpinner from './Spinner'
import CategoryItem from './CategoryItem'

export interface ICategory {
  id: number
  name: string
  image: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
`

const Title = styled.h2`
  margin: 3rem 0;
  font-size: 2rem;
  font-weight: 600;
`

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Categories = () => {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery({})

  if (isLoading) return <SmallSpinner />

  if (isError || !categories) {
    return <div>Something went wrong</div>
  }

  return (
    <Container>
      <Title>Categories</Title>
      <CategoryList>
        {categories.slice(0, 5).map((item: ICategory) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </CategoryList>
    </Container>
  )
}

export default Categories
