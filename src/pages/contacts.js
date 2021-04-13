import * as React from "react";
import PageLayout from "../components/page/PageLayout";
import Head from "../components/head/Head";
import Pagetitle from "../components/pagetitle/Pagetitle";

const Contact = () => {
  return (
    <PageLayout>
      <Head title="Contacts" />
      <Pagetitle title="Contacts" />
      <div>
        <h2>Drop by and say Hey??</h2>
      </div>
    </PageLayout>
  );
};

export default Contact;
