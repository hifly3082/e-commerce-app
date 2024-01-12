import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Spinner = styled.div`
  /* border: 0.5rem solid #f3f3f3;
  border-top: 0.5rem solid #3498db; */
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
