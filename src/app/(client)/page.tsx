"use client"
import Layout from "@/components/Layout";
import SocialList from "@/components/SocialList";
import BasicMeta from "@/components/meta/BasicMeta";
import OpenGraphMeta from "@/components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/components/meta/TwitterCardMeta";

import { useState, type FC, useEffect } from "react";
import models from "@/lib/models";
import types from "@/lib/types";
import Resume from "@/components/resume";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { ResumeHome } from "@/components/resume-home";
import Script from "next/script";



const Admin: FC = () => {
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.createLandscape) {

      // createLandscape({
      //   palleteImage: 'sahara-bg/img/pallete5.png'
      // })
    }

  }, [])
  return (
    <>
      <Layout>
        <BasicMeta url={"/"} />
        <OpenGraphMeta url={"/"} />
        <TwitterCardMeta url={"/"} />
        <ResumeHome />

        {/* <div className="flex flex-auto items-center justify-center py-0 px-6">
          <div>
            <h1 className="text-3xl">models</h1>
            {models.models.map(x => <div key={x.slug}>{x.name}</div>)}
            <h1 className="text-3xl">types</h1>
            {types.types.map(x => <div key={x.slug}>{x.name}</div>)}
            <SocialList />
          </div>
        </div> */}
        
      </Layout>
    </>
  );
};

export default Admin;
