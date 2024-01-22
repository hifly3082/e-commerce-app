// Filters.tsx

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useGetCategoriesQuery } from '../features/api/storeApi'
import { ICategory } from '../types/types'
import { useThrottle } from '../hooks/useThrottle'

interface FilterProps {
  setSearchParams: (searchParams: Record<string, string>) => void
}

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

const Filters: React.FC<FilterProps> = ({ setSearchParams }) => {
  const [priceMin, setPriceMin] = useState('10')
  const [priceMax, setPriceMax] = useState('100')
  const [categoryId, setCategoryId] = useState('')
  const { data: categories } = useGetCategoriesQuery({})

  const throttledPriceMin = useThrottle(priceMin)
  const throttledPriceMax = useThrottle(priceMax)
  const throttledCategoryId = useThrottle(categoryId)

  // const handleFiltersChange = () => {
  //   setSearchParams({
  //     priceMin: throttledPriceMin,
  //     priceMax: throttledPriceMax,
  //     categoryId: throttledCategoryId
  //   })
  //   console.log(`Filters component`)
  // }

  useEffect(() => {
    setSearchParams({
      priceMin: throttledPriceMin,
      priceMax: throttledPriceMax,
      categoryId: throttledCategoryId
    })
    console.log(`Filters component`)
  }, [throttledPriceMin, throttledPriceMax, throttledCategoryId])

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
    // handleFiltersChange()
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
