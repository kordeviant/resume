"use client"

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Parallax, Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


function Home() {


  return (
    <section style={{}}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>

      </div>

      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻🍳
                </span>
              </h1>

              <h1 className="heading-name">
                I&apos;M
                <strong className="main-name"> SOUMYAJIT BEHERA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "right" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Swiper
                autoplay
                loop
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                speed={600}
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
                <SwiperSlide>
                  <div className="title" data-swiper-parallax="-300">
                    Slide 1
                  </div>
                  <div className="subtitle" data-swiper-parallax="-200">
                    Subtitle
                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                      dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                      laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                      Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                      Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                      ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                      tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="title" data-swiper-parallax="-300">
                    Slide 2
                  </div>
                  <div className="subtitle" data-swiper-parallax="-200">
                    Subtitle
                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                      dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                      laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                      Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                      Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                      ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                      tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="title" data-swiper-parallax="-300">
                    Slide 3
                  </div>
                  <div className="subtitle" data-swiper-parallax="-200">
                    Subtitle
                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                      dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                      laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                      Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                      Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                      ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                      tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
