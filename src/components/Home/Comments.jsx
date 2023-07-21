import "../../assets/styles/Home/Comments.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const Comments = () => {
  return (
    <div id="comments" className="section-p1">
      <div className="comment-title">
        <h2>
          You can be the next <span>success story</span>
        </h2>
        <p>Just like them you can also achieve your goals</p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          140: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          2600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div className="comment-unit">
            <img
              src="https://previews.123rf.com/images/milkos/milkos1909/milkos190903093/129940216-foto-del-pasaporte-retrato-de-hombre-de-mediana-edad-mirando-a-la-c%C3%A1mara-sobre-fondo-blanco-de.jpg"
              alt=""
            />
            <div>
              <h3>Sebastian Navarrete</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus officia fugit aspernatur saepe eius praesentium? Error
                aut ipsa expedita praesentium! Porro.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comment-unit">
            <img
              src="https://www.65ymas.com/uploads/s1/76/67/78/foto_1_621x621.jpeg"
              alt=""
            />
            <div>
              <h3>Fabiana Farfan</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus officia fugit aspernatur saepe eius praesentium? Error
                aut ipsa expedita praesentium! Porro.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comment-unit">
            <img
              src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"
              alt=""
            />
            <div>
              <h3>Sara Vega</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus officia fugit aspernatur saepe eius praesentium? Error
                aut ipsa expedita praesentium! Porro.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comment-unit">
            <img
              src="https://previews.123rf.com/images/milkos/milkos1909/milkos190903093/129940216-foto-del-pasaporte-retrato-de-hombre-de-mediana-edad-mirando-a-la-c%C3%A1mara-sobre-fondo-blanco-de.jpg"
              alt=""
            />
            <div>
              <h3>Pedro Soliz</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus officia fugit aspernatur saepe eius praesentium? Error
                aut ipsa expedita praesentium! Porro.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comment-unit">
            <img
              src="https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2022/07/20/2791494.jpeg"
              alt=""
            />
            <div>
              <h3>Federico Farfan</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus officia fugit aspernatur saepe eius praesentium? Error
                aut ipsa expedita praesentium! Porro.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comment-unit">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/reg-c3-a9-jean-page-attends-netflixs-the-gray-man-los-angeles-news-photo-1674819269.jpg?resize=480:*"
              alt=""
            />
            <div>
              <h3>Ramon Vega</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus officia fugit aspernatur saepe eius praesentium? Error
                aut ipsa expedita praesentium! Porro.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comment-unit">
            <img
              src="https://yt3.googleusercontent.com/ytc/AOPolaQG06LPqTIz3JRvDNF6yZZw13toKG84cQSIB-09=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div>
              <h3>Pedro Soliz</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus officia fugit aspernatur saepe eius praesentium? Error
                aut ipsa expedita praesentium! Porro.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Comments;
