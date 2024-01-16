import styled from 'styled-components'
import { useGetCategoriesQuery } from '../features/api/storeApi'
import SmallSpinner from './Spinner'

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
  font-size: 2.4rem;
  font-weight: 600;
`

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CategoryImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  filter: grayscale(70%);
  transition: filter 0.3s ease-in-out;
`

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(20% - 1rem);
  margin-bottom: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:hover ${CategoryImage} {
    filter: grayscale(20%);
  }
`

const CategoryName = styled.h3`
  margin: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
`

const ShopNowButton = styled.button`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #444;
  }
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
          <CategoryCard key={item.id}>
            <CategoryImage src={item.image} alt={item.name} />
            <CategoryName>{item.name}</CategoryName>
            <ShopNowButton>Shop now</ShopNowButton>
          </CategoryCard>
        ))}
      </CategoryList>
    </Container>
  )
}

export default Categories
