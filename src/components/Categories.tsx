import styled from 'styled-components'

import CategoryItem from './CategoryItem'
import { categories } from '../data'
import { mobile } from '../styles/responsive'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile} {
    flex-direction: column;
  }
`

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Categories
