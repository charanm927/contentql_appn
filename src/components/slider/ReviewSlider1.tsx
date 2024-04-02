import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewAuthor1 from "/public/images/review-author-1.jpg";
import reviewAuthor2 from "/public/images/review-author-2.jpg";
import reviewAuthor3 from "/public/images/review-author-3.jpg";
import reviewAuthor4 from "/public/images/review-author-4.jpg";
import reviewAuthor5 from "/public/images/review-author-5.jpg";
import reviewAuthor6 from "/public/images/review-author-6.jpg";
import reviewAuthor7 from "/public/images/review-author-7.jpg";
import reviewAuthor8 from "/public/images/review-author-8.jpg";

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 3,
  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
};

export default function ReviewSlider1() {
  return (
    <>
      {/* <Swiper {...swiperOptions}>
                <SwiperSlide>

                </SwiperSlide>
            </Swiper> */}
      <Swiper {...swiperOptions} className="reviews-1-wrapper">
        {/* TESTIMONIAL #1 */}
        <SwiperSlide className="review-1 bg--white-100 block-shadow r-08">
          {/* Quote Icon */}
          <div className="review-ico ico-65">
            <span className="flaticon-quote" />
          </div>
          {/* Text */}
          <div className="review-txt">
            {/* Text */}
            <p>
              Etiam sapien sagittis congue augue a massa varius egestas ultrice
              varius magna a tempus aliquet undo cursus suscipit
            </p>
            {/* Author */}
            <div className="author-data clearfix">
              {/* Avatar */}
              <div className="review-avatar">
                <Image src={reviewAuthor1} alt="review-avatar" />
              </div>
              {/* Data */}
              <div className="review-author">
                <h6 className="s-18 w-700">Scott Boxer</h6>
                <p className="p-sm">@scott_boxer</p>
              </div>
            </div>{" "}
            {/* End Author */}
          </div>{" "}
          {/* End Text */}
        </SwiperSlide>{" "}
        {/* END TESTIMONIAL #1 */}
        {/* TESTIMONIAL #2 */}
        <SwiperSlide className="review-1 bg--white-100 block-shadow r-08">
          {/* Quote Icon */}
          <div className="review-ico ico-65">
            <span className="flaticon-quote" />
          </div>
          {/* Text */}
          <div className="review-txt">
            {/* Text */}
            <p>
              At sagittis congue augue diam egestas magna an ipsum vitae purus
              ipsum primis and cubilia laoreet augue egestas a luctus donec
              ltrice ligula porta augue magna suscipit lectus gestas
            </p>
            {/* Author */}
            <div className="author-data clearfix">
              {/* Avatar */}
              <div className="review-avatar">
                <Image src={reviewAuthor2} alt="review-avatar" />
              </div>
              {/* Data */}
              <div className="review-author">
                <h6 className="s-18 w-700">Joel Peterson</h6>
                <p className="p-sm">Internet Surfer</p>
              </div>
            </div>{" "}
            {/* End Author */}
          </div>{" "}
          {/* End Text */}
        </SwiperSlide>{" "}
        {/* END TESTIMONIAL #2 */}
        {/* TESTIMONIAL #3 */}
        <SwiperSlide className="review-1 bg--white-100 block-shadow r-08">
          {/* Quote Icon */}
          <div className="review-ico ico-65">
            <span className="flaticon-quote" />
          </div>
          {/* Text */}
          <div className="review-txt">
            {/* Text */}
            <p>
              Mauris gestas magnis a sapien etiam sapien congue an augue egestas
              and ultrice vitae purus diam an integer congue magna ligula
              egestas magna suscipit
            </p>
            {/* Author */}
            <div className="author-data clearfix">
              {/* Avatar */}
              <div className="review-avatar">
                <Image src={reviewAuthor3} alt="review-avatar" />
              </div>
              {/* Data */}
              <div className="review-author">
                <h6 className="s-18 w-700">Marisol19</h6>
                <p className="p-sm">@marisol19</p>
              </div>
            </div>{" "}
            {/* End Author */}
          </div>{" "}
          {/* End Text */}
        </SwiperSlide>{" "}
        {/* END TESTIMONIAL #3 */}
        {/* TESTIMONIAL #4 */}
        <SwiperSlide className="review-1 bg--white-100 block-shadow r-08">
          {/* Quote Icon */}
          <div className="review-ico ico-65">
            <span className="flaticon-quote" />
          </div>
          {/* Text */}
          <div className="review-txt">
            {/* Text */}
            <p>
              Mauris donec a magnis sapien etiam pretium a congue augue volutpat
              lectus aenean magna and undo mauris lectus laoreet tempor egestas
              rutrum
            </p>
            {/* Author */}
            <div className="author-data clearfix">
              {/* Avatar */}
              <div className="review-avatar">
                <Image src={reviewAuthor4} alt="review-avatar" />
              </div>
              {/* Data */}
              <div className="review-author">
                <h6 className="s-18 w-700">Leslie D.</h6>
                <p className="p-sm">Web Developer</p>
              </div>
            </div>{" "}
            {/* End Author */}
          </div>{" "}
          {/* End Text */}
        </SwiperSlide>{" "}
        {/* END TESTIMONIAL #4 */}
        {/* TESTIMONIAL #5 */}
        <SwiperSlide className="review-1 bg--white-100 block-shadow r-08">
          {/* Quote Icon */}
          <div className="review-ico ico-65">
            <span className="flaticon-quote" />
          </div>
          {/* Text */}
          <div className="review-txt">
            {/* Text */}
            <p>
              An augue cubilia undo laoreet magna suscipit egestas ipsum lectus
              purus ipsum and primis augue an ultrice ligula egestas suscipit a
              lectus gestas auctor tempus feugiat impedit
            </p>
            {/* Author */}
            <div className="author-data clearfix">
              {/* Avatar */}
              <div className="review-avatar">
                <Image src={reviewAuthor5} alt="review-avatar" />
              </div>
              {/* Data */}
              <div className="review-author">
                <h6 className="s-18 w-700">Jennifer Harper</h6>
                <p className="p-sm">App Developer</p>
              </div>
            </div>{" "}
            {/* End Author */}
          </div>{" "}
          {/* End Text */}
        </SwiperSlide>{" "}
        {/* END TESTIMONIAL #5 */}
        {/* TESTIMONIAL #6 */}
        <SwiperSlide className="review-1 bg--white-100 block-shadow r-08">
          {/* Quote Icon */}
          <div className="review-ico ico-65">
            <span className="flaticon-quote" />
          </div>
          {/* Text */}
          <div className="review-txt">
            {/* Text */}
            <p>
              An augue cubilia laoreet undo magna ipsum semper suscipit egestas
              magna ipsum ligula a vitae purus and ipsum primis cubilia magna
              suscipit
            </p>
            {/* Author */}
            <div className="author-data clearfix">
              {/* Avatar */}
              <div className="review-avatar">
                <Image src={reviewAuthor6} alt="review-avatar" />
              </div>
              {/* Data */}
              <div className="review-author">
                <h6 className="s-18 w-700">Jonathan Barnes</h6>
                <p className="p-sm">jQuery Programmer</p>
              </div>
            </div>{" "}
            {/* End Author */}
          </div>{" "}
          {/* End Text */}
        </SwiperSlide>{" "}
        {/* END TESTIMONIAL #6 */}
        {/* TESTIMONIAL #7 */}
        <SwiperSlide className="review-1 bg--white-100 block-shadow r-08">
          {/* Quote Icon */}
          <div className="review-ico ico-65">
            <span className="flaticon-quote" />
          </div>
          {/* Text */}
          <div className="review-txt">
            {/* Text */}
            <p>
              Augue egestas porta tempus volutpat egestas augue cubilia laoreet
              a magna suscipit luctus dolor blandit vitae purus neque tempus an
              aliquet porta gestas rutrum blandit vitae
            </p>
            {/* Author */}
            <div className="author-data clearfix">
              {/* Avatar */}
              <div className="review-avatar">
                <Image src={reviewAuthor7} alt="review-avatar" />
              </div>
              {/* Data */}
              <div className="review-author">
                <h6 className="s-18 w-700">Mike Harris</h6>
                <p className="p-sm">Graphic Designer</p>
              </div>
            </div>{" "}
            {/* End Author */}
          </div>{" "}
          {/* End Text */}
        </SwiperSlide>{" "}
        {/* END TESTIMONIAL #7 */}
        {/* TESTIMONIAL #8 */}
        <SwiperSlide className="review-1 bg--white-100 block-shadow r-08">
          {/* Quote Icon */}
          <div className="review-ico ico-65">
            <span className="flaticon-quote" />
          </div>
          {/* Text */}
          <div className="review-txt">
            {/* Text */}
            <p>
              Augue at vitae purus tempus egestas volutpat augue undo cubilia
              laoreet magna suscipit luctus dolor blandit at purus tempus
              feugiat impedit
            </p>
            {/* Author */}
            <div className="author-data clearfix">
              {/* Avatar */}
              <div className="review-avatar">
                <Image src={reviewAuthor8} alt="review-avatar" />
              </div>
              {/* Data */}
              <div className="review-author">
                <h6 className="s-18 w-700">Evelyn Martinez</h6>
                <p className="p-sm">WordPress Consultant</p>
              </div>
            </div>{" "}
            {/* End Author */}
          </div>{" "}
          {/* End Text */}
        </SwiperSlide>{" "}
        {/* END TESTIMONIAL #8 */}
      </Swiper>
    </>
  );
}
