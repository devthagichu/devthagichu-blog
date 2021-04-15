import * as React from "react";
import PageLayout from "../components/page/PageLayout";
import Head from "../components/head/Head";
// import indexStyles from "./index.module.scss";
import Blog from "./blog";

const IndexPage = () => {
  return (
    <PageLayout>
      <Head title="Home" />

      <div
        style={{
          display: "flex",
          padding: "8rem",
          borderBottom: "0.5px solid black",
          marginBottom: "4rem",
          marginTop: "4rem",
        }}
      >
        <p className="display display__2">
          Perfection is achieved, not when there is nothing more to add, but
          when there is nothing left to take away.
        </p>
      </div>

      <Blog />
    </PageLayout>
  );
};

export default IndexPage;
