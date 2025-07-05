
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './partners.module.css';
import 'swiper/css';
import 'swiper/css/autoplay';

import partnerImg1 from '../asets/partneors.png';
import partnerImg2 from '../asets/partneors1.png';
import partnerImg3 from '../asets/partneors2.png';
import partnerImg4 from '../asets/partneors3.png';
import partnerImg5 from '../asets/partneors4.png';
import partnerImg6 from '../asets/partneors5.png';
import partnerImg7 from '../asets/partneors6.png';

function PartnersPage() {


  
  
  return (
    <div className={styles.body}>
      
   

      <div id="partni" className={styles.container4}>
        <div className={styles.headerContainer4}>
          პარტნიორები
        </div>
  
        <div className={styles.fixTexterContainer4}>
          <div className={styles.texterContainer4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus perferendis doloremque nisi cupiditate ab molestiae voluptatem eligendi odio repellendus accusantium animi veritatis maiores id. Nisi voluptate corporis distinctio?
          </div>
        </div>
  
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView={5.5}
          speed={2000}
          loop={true}
          autoplay={{
            delay: 1, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          modules={[Autoplay]}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.swiperSlide}><img src={partnerImg1} alt="Partner 1" /></SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}><img src={partnerImg2} alt="Partner 2" /></SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}><img src={partnerImg3} alt="Partner 3" /></SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}><img src={partnerImg4} alt="Partner 4" /></SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}><img src={partnerImg5} alt="Partner 5" /></SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}><img src={partnerImg6} alt="Partner 6" /></SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}><img src={partnerImg7} alt="Partner 7" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default PartnersPage;