// Filters.tsx

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useGetCategoriesQuery } from '../../features/api/storeApi'
import { ICategory } from '../../types/types'
import { useThrottle } from '../../hooks/useThrottle'
import { useSearchParams } from '../../hooks/useSearchParams'

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 800px;
  padding: 1rem;
  border: 1px solid var(--color-grey-500);
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-500);
`

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-500);
`

const Option = styled.option`
  background-color: var(--color-grey-50);
`

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

    switch (e.target.id) {
      case 'category':
        setCategoryId(value)
        break
      case 'priceMin':
        if (value === '' || parseFloat(value) >= 0) setPriceMin(value)
        break
      case 'priceMax':
        if (value === '' || parseFloat(value) >= 0) setPriceMax(value)
        break
      default:
        break
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
