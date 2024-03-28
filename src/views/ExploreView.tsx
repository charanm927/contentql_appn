"use client";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaPlusCircleSolid } from "react-icons/lia";
import Layout from "../components/layout/Layout";
import Banner13_1 from "../components/sections/Banner13_1";
import Hero25 from "../components/sections/Hero25";
import TemplateSearch from "../components/sections/TemplateSearch";

function ExploreView() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <Hero25 />
        <TemplateSearch />

        <div id="page" className="page-wrapper">
          <section
            id="select"
            className="bg-fixed select-section template-select"
          >
            <div className="container">
              <div className="row">
                {/* LAYOUT-1 */}
                <div
                  id="l-0"
                  className="col-md-6 col-lg-4 select_link wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="hover-overlay card-view">
                    <span className="react-icon">
                      <LiaPlusCircleSolid size={40} />
                    </span>
                    <div className="text-container">
                      <div className="text-wow">
                        <Link
                          href="https://cloud.contentql.io/projects/create"
                          target="_blank"
                        >
                          Create Website <FaArrowRightLong />
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <h4> Create website from scratch</h4>
                </div>
                <div
                  id="l-0"
                  className="col-md-6 col-lg-4 select_link wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="hover-overlay card-view">
                    <span className="react-icon">
                      <LiaPlusCircleSolid size={40} />
                    </span>
                    <div className="text-container">
                      <div className="text-wow">
                        <Link
                          href="https://cloud.contentql.io/projects/20162550/editor/external_popup/4841408"
                          target="_blank"
                        >
                          Create Popup & alert <FaArrowRightLong />
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <h4> Create popup & alert from scratch</h4>
                </div>
                <div
                  id="l-0"
                  className="col-md-6 col-lg-4 select_link wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="hover-overlay card-view">
                    <span className="react-icon">
                      <LiaPlusCircleSolid size={40} />
                    </span>
                    <div className="text-container">
                      <div className="text-wow">
                        <Link
                          href="https://cloud.contentql.io/share/gwR37FyhRoaqoQN"
                          target="_blank"
                        >
                          Create Story <FaArrowRightLong />
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <h4> Create story from scratch</h4>
                </div>
              </div>{" "}
            </div>{" "}
          </section>{" "}
        </div>
        <Banner13_1 />
      </Layout>
    </>
  );
}

export default ExploreView;