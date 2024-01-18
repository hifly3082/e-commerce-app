import styled from 'styled-components'
import { useGetCategoriesQuery } from '../features/api/storeApi'
import { ICategory } from '../types/types'
import Accordion from './Accordion'

const FiltersContainer = styled.div`
  background-color: #f4f4f4;
  padding: 1rem;
  height: max-content;
`

const FilterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`

const CategoryItem = styled.li`
  margin-bottom: 8px;
`

const Filters: React.FC = () => {
  const { data: categories } = useGetCategoriesQuery({})

  return (
    <FiltersContainer>
      <CategoryList>
        <FilterTitle>Categories</FilterTitle>
        <Accordion>
          {categories?.map((item: ICategory) => (
            <CategoryItem key={item.id}>
              <input type='checkbox' />
              <label htmlFor={item.name}>{item.name}</label>
            </CategoryItem>
          ))}
        </Accordion>
      </CategoryList>
    </FiltersContainer>
  )
}

export default Filters
