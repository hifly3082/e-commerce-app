import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import ProductItem from './ProductItem'
import { IProductItem } from '../types/types'
import styled from 'styled-components'

interface CarouselProps {
  items: IProductItem[]
}

const CarouselContainer = styled.div`
  width: 1200px;
  overflow: hidden;
  position: relative;
`

const CarouselContent = styled.div<{ $currentIndex: number }>`
  display: flex;
  transition: transform 0.4s ease-in-out;
  transform: translateX(-${(props) => props.$currentIndex * 100}%);
`

const CarouselButton = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  background: #ccc;
  border: none;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  opacity: 60%;
  z-index: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  ${(props) => (props.direction === 'prev' ? 'left: 0.5rem' : 'right: 0.5rem')};
  &:hover {
    background: #eee;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    opacity: 100%;
  }
`

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const limitedItems = items?.slice(0, 36)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [items])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % limitedItems.length)
  }

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(8)
    } else {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + limitedItems.length) % limitedItems.length
      )
    }
  }

  return (
    <CarouselContainer>
      <CarouselContent $currentIndex={currentIndex}>
        {limitedItems.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </CarouselContent>
      <CarouselButton direction='prev' onClick={handlePrev}>
        <BiLeftArrowAlt />
      </CarouselButton>
      <CarouselButton direction='next' onClick={handleNext}>
        <BiRightArrowAlt />
      </CarouselButton>
    </CarouselContainer>
  )
}

export default Carousel
