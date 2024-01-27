import styled from 'styled-components'

import { ICategory } from '../../types/types'

const CategoryImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  filter: grayscale(70%);
  transition: filter 0.4s ease-in-out;
`

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(20% - 1rem);
  margin-bottom: 2rem;
  border-radius: 10px;

  background-color: var(--color-grey-100);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
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
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-grey-100);
  background-color: var(--color-grey-500);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--color-main-500);
  }
`

interface ICategoryItemProps {
  item: ICategory
  onClick: () => void
}

const CategoryItem: React.FC<ICategoryItemProps> = ({ item, onClick }) => {
  return (
    <CategoryCard key={item.id}>
      <CategoryImage src={item.image} alt={item.name} />
      <CategoryName>{item.name}</CategoryName>
      <ShopNowButton onClick={onClick}>Shop now</ShopNowButton>
    </CategoryCard>
  )
}

export default CategoryItem
