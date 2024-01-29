import { useEffect, useState } from 'react'

const DEFAULT_DELAY = 500

export const useThrottle = (value: string, delay = DEFAULT_DELAY) => {
  const [throttledValue, setThrottledValue] = useState(value)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setThrottledValue(value)
    }, delay)

    return () => {
      clearTimeout(timerId)
    }
  }, [value, delay])

  return throttledValue
}
