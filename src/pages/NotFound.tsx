import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem;
  max-width: 1200px;
`

const NotFound: React.FC = () => {
  return (
    <Container>
      <h1>Page Not Found</h1>
    </Container>
  )
}

export default NotFound
