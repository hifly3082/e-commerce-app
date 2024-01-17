import { useState } from 'react'
import styled from 'styled-components'

const FiltersContainer = styled.div`
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 15px;
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

const PriceRange = styled.div`
  margin-top: 20px;
`

const RatingSelector = styled.div`
  margin-top: 20px;
`

const Filters: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })
  const [minRating, setMinRating] = useState(0)

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((c) => c !== category)
      )
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, category])
    }
  }

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: parseInt(value, 10)
    }))
  }

  const handleMinRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinRating(parseInt(e.target.value, 10))
  }

  return (
    <FiltersContainer>
      <CategoryList>
        <FilterTitle>Categories</FilterTitle>
        {['Electronics', 'Clothing', 'Books', 'Toys'].map((category) => (
          <CategoryItem key={category}>
            <input
              type='checkbox'
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <label htmlFor={category}>{category}</label>
          </CategoryItem>
        ))}
      </CategoryList>
      <PriceRange>
        <FilterTitle>Price</FilterTitle>
        <label htmlFor='minPrice'>Min:</label>
        <input
          type='number'
          id='minPrice'
          name='min'
          value={priceRange.min}
          onChange={handlePriceRangeChange}
        />
        <label htmlFor='maxPrice'>Max:</label>
        <input
          type='number'
          id='maxPrice'
          name='max'
          value={priceRange.max}
          onChange={handlePriceRangeChange}
        />
      </PriceRange>
      <RatingSelector>
        <FilterTitle>Rating</FilterTitle>
        <input
          type='number'
          id='minRating'
          value={minRating}
          onChange={handleMinRatingChange}
        />
      </RatingSelector>
    </FiltersContainer>
  )
}

export default Filters
