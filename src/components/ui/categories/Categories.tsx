import styled from 'styled-components'

import { ICategory } from '../../../types/types'
import { useGetCategoriesQuery } from '../../../features/api/storeApi'
import CategoryItem from './CategoryItem'
import SmallSpinner from '../Spinner'
import { useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate()
  const limitedCategories = categories?.slice(0, 5)

  const handleClick = (categoryId: number) => () => {
    navigate(`/products?categoryId=${categoryId}`)
  }

  if (isLoading || isFetching) return <SmallSpinner />
  if (isError) return <Error>Something went wrong</Error>

  return (
    <Container>
      <CategoryList>
        {limitedCategories?.map((item: ICategory) => (
          <CategoryItem
            item={item}
            key={item.id}
            onClick={handleClick(item.id)}
          />
        ))}
      </CategoryList>
    </Container>
  )
}

export default Categories
