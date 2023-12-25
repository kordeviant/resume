"use client"

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Parallax, Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

// Import Swiper styles


function Home() {


  return (
    <section style={{}}>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻🍳
                </span>
                پوشش نانوگرانیت نسل جدید
              </h1>

              <h1 className="heading-name">
                ظروف آشپزخانه ایزی کوک
                <strong className="main-name"> EASY COOK</strong>
              </h1>
              <div style={{ textAlign: "right", height: 50 }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>

              <Swiper
                autoplay
                loop
                style={{
                  "--swiper-navigation-color": '#fff',
                  "--swiper-pagination-color": '#fff',
                  textAlign: 'center'
                } as any}
                speed={1000}
                pagination={{
                  clickable: true,
                }}
                mousewheel
                effect="coverflow"
                navigation={{
                  nextEl: null,
                  prevEl: null
                }}
                modules={[Pagination, EffectCoverflow, Navigation, Autoplay,]}
                className="mySwiper"
              >

                {[1, 2, 3, 4, 5, 6, 7, 8].map(x => {
                  return (
                    <SwiperSlide key={x}>
                      <div style={{ height: 400 }}>

                        <Image
                          objectFit="contain"
                          fill
                          src={`/images/${x}.jpg`}
                          alt="slide"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Col>
          </Row>
          <Row>
            <Col md={7} >
              <h1>در طرح ها و رنگ های متنوع</h1>
            </Col>
            <Col md={5} style={{ textAlign: 'center' }}>

              <video style={{ width: 300, margin: '0 auto' }} loop muted autoPlay>
                <source src="vid1.webm" type="video/webm" />

              </video>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
