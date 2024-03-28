"use client";
import Layout from "../components/layout/Layout";
import Banner13_9 from "../components/sections/Banner13_9";
import Brands1_17 from "../components/sections/Brands1_17";
import Ct02_38 from "../components/sections/Ct02_38";
import Ct02_39 from "../components/sections/Ct02_39";
import Ct02_40 from "../components/sections/Ct02_40";
import Ct04_15 from "../components/sections/Ct04_15";
import Faqs3_13 from "../components/sections/Faqs3_13";
import Features11_8 from "../components/sections/Features11_8";
import Features12_8 from "../components/sections/Features12_8";
import Features2_19 from "../components/sections/Features2_19";
import Hero21 from "../components/sections/Hero21";
import Lnk1_21 from "../components/sections/Lnk1_21";
import Reviews1_11 from "../components/sections/Reviews1_11";
import Statistic1_17 from "../components/sections/Statistic1_17";
import Wswrapper_10 from "../components/sections/Wswrapper_10";

export default function PublishersView() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark light-hero-header"
      >
        <Hero21 />
        <Lnk1_21 />
        <Ct02_38 />
        <Features2_19 />
        <Wswrapper_10 />
        <Brands1_17 />
        <hr className="divider" />
        <Features11_8 />
        <Ct02_39 />
        <Features12_8 />
        <Ct02_40 />

        <Statistic1_17 />
        <hr className="divider" />
        <Ct04_15 />
        <Reviews1_11 />
        <Faqs3_13 />
        <Banner13_9 />
      </Layout>
    </>
  );
}