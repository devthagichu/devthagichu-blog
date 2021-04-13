import * as React from "react";
import Footer from "../footer/Footer";
import "../../styles/globalStyles.scss";
import PageStyles from "./pages.module.scss";
import Menu from "../menu";

const PageLayout = ({ children }) => {
  return (
    <>
      <Menu />
      <div className={PageStyles.container}>
        <div className={PageStyles.content__container}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
