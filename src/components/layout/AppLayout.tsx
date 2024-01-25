import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-grey-50);
`

const Main = styled.main`
  flex: 1 0 auto;
`

const AppLayout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  )
}

export default AppLayout
