import * as React from "react";
import PageLayout from "../components/page/PageLayout";
import Head from "../components/head/Head";
import Pagetitle from "../components/pagetitle/Pagetitle";
const mePic = require("../images/me.png");

const About = () => {
  return (
    <PageLayout>
      <Head title="Anthony Thagichu" />
      {/* <Pagetitle title="About Me" /> */}
      <div
      // style={{
      //   minHeight: "100vh",
      //   display: "flex",
      //   justifyContent: "center",
      //   flexDirection: "column",
      // }}
      >
        <div
          style={{
            display: "flex",
            padding: "8rem",
          }}
        >
          <p className="display display__2">
            I'm a multi-talented human. Most of my time I design and build
            digital products with various frameworks. You can also call me a
            product designer, experience designer, interaction, UI, UX or by any
            other market defined function-title.
          </p>
          {/* <p className="heading heading__4">
            I'm also a multi-disciplinary maker with over 5 years of experiences
            in wide range of design disciplines, computer languages, advisor,
            entrepreneur, front-end developer, music enthusiast, traveler,
            photographer and more.
          </p> */}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "500px",
          }}
        >
          <img src={mePic} style={{ width: "100%", marginTop: "-4rem" }} />
        </div>
      </div>
      <div style={{ padding: "8rem" }}>
        <p className="display display__2">
          I'm also a multi-disciplinary maker with over 5 years of experiences
          in wide range of design disciplines, computer languages, advisor,
          entrepreneur, front-end developer, music enthusiast, traveler,
          photographer and more.
        </p>
      </div>
    </PageLayout>
  );
};

export default About;
