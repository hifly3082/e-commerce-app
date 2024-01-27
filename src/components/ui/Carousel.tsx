import { useState } from 'react'
import { useEffect } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import ProductItem from './ProductItem'
import { IProductItem } from '../../types/types'
import styled from 'styled-components'

interface CarouselProps {
  items: IProductItem[]
}

const CarouselWrapper = styled.div`
  padding: 0 3rem;
  position: relative;
`

const CarouselContainer = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
`

const CarouselContent = styled.div<{ $currentIndex: number }>`
  display: flex;
  transition: all 1.2s ease;
  transform: translateX(-${(props) => props.$currentIndex}%);
`

const CarouselButton = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  background-color: var(--color-grey-300);
  color: var(--color-grey-900);
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  opacity: 50%;
  z-index: 1;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease-in-out;
  ${(props) => (props.direction === 'prev' ? 'left: -1rem' : 'right: -1rem')};
  &:hover {
    background: var(--color-grey-100);
    border: 1px solid var(--color-grey-300);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    opacity: 100%;
  }
`

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const limitedItems = items?.slice(0, 35)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 4)
    }, 5000)

    return () => clearInterval(interval)
  }, [items])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % limitedItems.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 4 + limitedItems.length) % limitedItems.length
    )
  }

  return (
    <CarouselWrapper>
      <CarouselButton direction='prev' onClick={handlePrev}>
        <BiLeftArrowAlt />
      </CarouselButton>
      <CarouselButton direction='next' onClick={handleNext}>
        <BiRightArrowAlt />
      </CarouselButton>
      <CarouselContainer>
        <CarouselContent $currentIndex={currentIndex}>
          {limitedItems.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </CarouselContent>
      </CarouselContainer>
    </CarouselWrapper>
  )
}

export default Carousel
