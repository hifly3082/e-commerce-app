import { createContext, useContext, useEffect } from 'react'
import useLocalStorageState from '../hooks/useLocalStorage'

interface DarkModeContextProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
)

function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkMode')
  const darkMode = 'dark-mode'
  const lightMode = 'light-mode'

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add(darkMode)
      document.documentElement.classList.remove(lightMode)
    } else {
      document.documentElement.classList.add(lightMode)
      document.documentElement.classList.remove(darkMode)
    }
  }, [isDarkMode])

  function toggleDarkMode() {
    setIsDarkMode((isDark: boolean) => !isDark)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error('DarkModeContext was used outside of DarkModeProvider')
  }
  return context
}

export { DarkModeProvider, useDarkMode }
