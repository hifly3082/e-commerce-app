import { useEffect, useState } from 'react'

export const useThrottle = (value: string, delay = 300) => {
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
