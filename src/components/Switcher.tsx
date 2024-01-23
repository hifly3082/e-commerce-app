import { RiSunFill, RiMoonFill } from 'react-icons/ri'
import styled from 'styled-components'
import { useDarkMode } from '../context/DarkModeContext'

const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
`

const ToggleIcon = styled.div`
  font-size: 1.2rem;
  color: #333;
  background-color: #eee;
  border-radius: 50%;
  transition: all 0.4s ease-in-out;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Switcher: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <SwitcherWrapper>
      <ToggleIcon onClick={toggleDarkMode}>
        {isDarkMode ? <RiSunFill /> : <RiMoonFill />}
      </ToggleIcon>
    </SwitcherWrapper>
  )
}

export default Switcher
