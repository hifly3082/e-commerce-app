import { useEffect, useState } from 'react'

const throttleDelay = 500

export const useThrottle = (value: string, delay = throttleDelay) => {
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
