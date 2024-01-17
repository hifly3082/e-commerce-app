import { useState } from 'react'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'
import styled from 'styled-components'

interface ToggleIconProps {
  isDarkMode: boolean
}

const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
`

const ToggleIcon = styled.div<ToggleIconProps>`
  font-size: 1.2rem;
  color: ${(props) => (props.isDarkMode ? '#eee' : '#333')};
  background-color: ${(props) => (props.isDarkMode ? '#333' : '#eee')};
  border-radius: 50%;
  transition: all 0.4s ease-in-out;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Switcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <SwitcherWrapper onClick={toggleMode}>
      <ToggleIcon isDarkMode={isDarkMode}>
        {isDarkMode ? <RiMoonFill /> : <RiSunFill />}
      </ToggleIcon>
    </SwitcherWrapper>
  )
}

export default Switcher
