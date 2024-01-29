import { useState } from 'react'
import { useEffect } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import ProductItem from './products/ProductItem'
import { IProductItem } from '../../types/types'
import styled from 'styled-components'
import { BsArrowLeftCircleFill } from 'react-icons/bs'

interface CarouselProps {
  items: IProductItem[]
  delay?: number
  slideLength?: number
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

const CarouselButton = styled(BsArrowLeftCircleFill)<{ direction: string }>`
  position: absolute;
  font-size: 2.4rem;
  top: 50%;
  color: var(--color-grey-800);
  border-radius: 50%;
  border: 1px solid transparent;
  cursor: pointer;
  opacity: 30%;
  transition: all 0.4s ease-in-out;

  ${(props) =>
    props.direction === 'prev'
      ? 'left: -5rem'
      : 'right: -5rem; transform: scaleX(-1)'};

  &:hover {
    opacity: 100%;
  }
`
const SLIDE_LENGTH = 4
const DELAY = 5000

const Carousel: React.FC<CarouselProps> = ({
  items,
  delay = DELAY,
  slideLength = SLIDE_LENGTH
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const limitedItems = items?.slice(0, 35)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + slideLength)
    }, delay)

    return () => clearInterval(interval)
  }, [items, delay, slideLength])

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + slideLength) % limitedItems.length
    )
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - SLIDE_LENGTH + limitedItems.length) % limitedItems.length
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
