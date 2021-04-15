import * as React from "react";
import PageLayout from "../components/page/PageLayout";
import Head from "../components/head/Head";
import Pagetitle from "../components/pagetitle/Pagetitle";

const Contact = () => {
  return (
    <PageLayout>
      <Head title="Contacts" />
      {/* <Pagetitle title="Contacts" /> */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="display display__1" style={{ marginTop: "6.2rem" }}>
          Say Hello
        </h1>
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
          }}
        >
          <p className="heading heading__4" style={{ marginRight: "1.2rem" }}>
            I'm a multi-talented human. Most of my time I design and build
            digital products with various frameworks. You can also call me a
            product designer, experience designer, interaction, UI, UX or by any
            other market defined function-title.
          </p>
          <p className="heading heading__4">
            I'm also a multi-disciplinary maker with over 5 years of experiences
            in wide range of design disciplines, computer languages, advisor,
            entrepreneur, front-end developer, music enthusiast, traveler,
            photographer and more.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
