import { useState } from 'react'
import styled from 'styled-components'

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

const Indicator = styled.button`
  display: none;
`

const Carousel = ({ data, renderItem }: { data: any; renderItem: any }) => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }

  return (
    <CarouselContainer>
      <ArrowButton onClick={prevSlide}>{'<'}</ArrowButton>
      {data.map((item: any, idx: any) => {
        return <div key={idx}>{renderItem(item)}</div>
      })}
      <ArrowButton onClick={nextSlide}>{'>'}</ArrowButton>
      <span className='indicators'>
        {data.map((_: any, idx: any) => {
          return <Indicator key={idx} onClick={() => setSlide(idx)}></Indicator>
        })}
      </span>
    </CarouselContainer>
  )
}

export default Carousel
