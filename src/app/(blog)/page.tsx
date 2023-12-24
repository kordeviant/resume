import Layout from "@/components/Layout";
import SocialList from "@/components/SocialList";
import BasicMeta from "@/components/meta/BasicMeta";
import OpenGraphMeta from "@/components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/components/meta/TwitterCardMeta";

import { useState, type FC, useEffect } from "react";
import models from "@/lib/models";
import types from "@/lib/types";
import Home from "@/port-comps/Home/Home";



const Admin: FC = () => {
  return (
    <>
      <Layout>
        <BasicMeta url={"/"} />
        <OpenGraphMeta url={"/"} />
        <TwitterCardMeta url={"/"} />
        <Home />
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
