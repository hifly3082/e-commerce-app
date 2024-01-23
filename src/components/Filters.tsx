// Filters.tsx

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useGetCategoriesQuery } from '../features/api/storeApi'
import { ICategory } from '../types/types'
import { useThrottle } from '../hooks/useThrottle'
import { useSearchParams } from '../hooks/useSearchParams'

// interface FilterProps {
//   categoryId: string
// }

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 800px;
  padding: 1rem;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
`

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
`

const Option = styled.option``

const Filters: React.FC = () => {
  const { searchParams, updateSearchParams } = useSearchParams()
  const [categoryId, setCategoryId] = useState(
    searchParams.get('categoryId') || ''
  )
  const [priceMin, setPriceMin] = useState(searchParams.get('priceMin') || '')
  const [priceMax, setPriceMax] = useState(searchParams.get('priceMax') || '')
  const { data: categories } = useGetCategoriesQuery({})

  const throttledCategoryId = useThrottle(categoryId)
  const throttledPriceMin = useThrottle(priceMin)
  const throttledPriceMax = useThrottle(priceMax)

  useEffect(() => {
    updateSearchParams({
      categoryId: throttledCategoryId,
      priceMin: throttledPriceMin,
      priceMax: throttledPriceMax
    })
  }, [
    throttledCategoryId,
    throttledPriceMin,
    throttledPriceMax,
    updateSearchParams
  ])

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let value = e.target.value

    if (e.target.id === 'category') {
      setCategoryId(value)
    } else {
      if (e.target.id === 'priceMin') {
        setPriceMin(value)
      } else if (e.target.id === 'priceMax') {
        setPriceMax(value)
      }
    }
  }

  return (
    <FiltersContainer>
      <Label>
        Category:
        <Select id='category' value={categoryId} onChange={handleFilterChange}>
          <Option value=''>All Categories</Option>
          {categories?.map((item: ICategory) => (
            <Option key={item.id} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Label>

      <Label>
        Price Min:
        <Input
          id='priceMin'
          type='number'
          value={priceMin}
          onChange={handleFilterChange}
        />
      </Label>

      <Label>
        Price Max:
        <Input
          id='priceMax'
          type='number'
          value={priceMax}
          onChange={handleFilterChange}
        />
      </Label>
    </FiltersContainer>
  )
}

export default Filters
