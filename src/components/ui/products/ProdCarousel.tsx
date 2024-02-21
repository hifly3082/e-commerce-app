import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IProductItem } from './../../../types/types'
import ProductItem from './ProductItem'

import 'swiper/css/bundle'

const ProdCarousel = ({ items }: { items: IProductItem[] }) => {
  console.log(items)

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // loop={true}
      grabCursor={true}
      spaceBetween={24}
      slidesPerView={3}
      pagination={{
        clickable: true
      }}

      // breakpoints={{
      //   576: {
      //     slidesPerView: 2
      //   },
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 48
      //   }
      // }}
    >
      {items.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <img
              width='300px'
              height='300px'
              alt={item.title}
              src={item.images[0]}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
export default ProdCarousel
