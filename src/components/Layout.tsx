import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Children = styled.div`
  flex: 1 0 auto;
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Children>{children}</Children>
      <Footer />
    </Container>
  )
}

export default Layout
