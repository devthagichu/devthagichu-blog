import * as React from "react";
import { Link } from "gatsby";
import PageLayout from "../components/page/PageLayout";

const NotFoundPage = () => {
  return (
    <PageLayout>
      <div
        style={{
          height: "60vh",
          display: "flex",
          flex: 1,
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ textAlign: "center", margin: "2.4rem 0" }}>
          Oops! That page can’t be found.
        </h1>
        <Link
          to="/"
          style={{
            borderRadius: "0.3rem",
            padding: "0.8rem 1.6rem",
            border: "none",
            backgroundColor: "#53bd95",
            color: "#fff",
            border: "1px solid",
            textTransform: "uppercase",
          }}
        >
          Go home
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
