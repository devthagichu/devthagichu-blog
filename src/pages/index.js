import * as React from "react";
import PageLayout from "../components/page/PageLayout";
import Head from "../components/head/Head";
import indexStyles from "./index.module.scss";
import Blog from "./blog";

const IndexPage = () => {
  return (
    <PageLayout>
      <Head title="Home" />
      <Blog />
    </PageLayout>
  );
};

export default IndexPage;
