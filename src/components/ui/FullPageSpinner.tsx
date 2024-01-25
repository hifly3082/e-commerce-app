import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
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
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const FullPageSpinner: React.FC = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  )
}

export default FullPageSpinner
