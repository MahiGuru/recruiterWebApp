import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { Autoplay } from 'swiper'
import Link from 'next/link'

const OurServices = () => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR SERVICES</span>
            <h2>Intelligent talent and HR operations services</h2>
            <p>
              Helping you optimize workforce performance and productivity, leveraging data-driven operations that fuel how Human Resources delivers value.​
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper services-slides-two"
          >
            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <img src="/images/icon/icon8.png" alt="image" />
                  <h3>
                    <Link href="/service-details">
                      <a>Sales Force</a>
                    </Link>
                  </h3>
                </div>
                <div> 
                  <ul>
                    <li>
                      Lead and contact management
                    </li>
                    <li>
                      Sales opportunity management
                    </li>
                    <li>
                      Customisable reports and dashboards
                    </li>
                  </ul>
                </div>  
                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <img src="/images/icon/icon9.png" alt="image" />
                  <h3>
                    <Link href="/service-details">
                      <a>Front end</a>
                    </Link>
                  </h3>
                </div>
                <div>
                  <ul>
                    <li>HTML & CSS Responsive Web Design</li>
                    <li> React JS Development</li>
                    <li> Node.js Development</li>
                  </ul>
                </div>
                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <img src="/images/icon/icon10.png" alt="image" />
                  <h3>
                    <Link href="/service-details">
                      <a>Database</a>
                    </Link>
                  </h3>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
                  eiusmod tempor ut labore et dolore magna aliqua.
                </div>
                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <img src="/images/icon/icon11.png" alt="image" />
                  <h3>
                    <Link href="/service-details">
                      <a>Servers</a>
                    </Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
                  eiusmod tempor ut labore et dolore magna aliqua.
                </p>
                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <img src="/images/icon/icon12.png" alt="image" />
                  <h3>
                    <Link href="/service-details">
                      <a>Marketing</a>
                    </Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
                  eiusmod tempor ut labore et dolore magna aliqua.
                </p>
                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <img src="/images/icon/icon13.png" alt="image" />
                  <h3>
                    <Link href="/service-details">
                      <a>Technology</a>
                    </Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
                  eiusmod tempor ut labore et dolore magna aliqua.
                </p>
                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default OurServices
