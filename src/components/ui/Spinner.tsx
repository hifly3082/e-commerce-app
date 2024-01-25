import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
`

const Spinner = styled.div`
  background: conic-gradient(#0000 20%, #3498db 80%);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 0.5rem), #000 0);
  -webkit-mask: radial-gradient(
    farthest-side,
    #0000 calc(100% - 0.5rem),
    #000 0
  );
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
`

const SmallSpinner: React.FC = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  )
}

export default SmallSpinner
