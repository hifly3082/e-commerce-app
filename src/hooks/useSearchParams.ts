import { useCallback, useRef } from 'react'
import { useSearchParams as useSearchParamsOrig } from 'react-router-dom'
import { SearchParams } from '../types/types'

export function useSearchParams() {
  const [searchParams, setSearchParams] = useSearchParamsOrig()
  const setSearchParamsRef = useRef(setSearchParams)

  const updateSearchParams = useCallback(
    (newParams: SearchParams) => {
      const mergedParams = { ...Object.fromEntries(searchParams), ...newParams }
      setSearchParamsRef.current(mergedParams)
    },
    [searchParams]
  )

  return { searchParams, updateSearchParams }
}
