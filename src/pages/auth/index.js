"use client";

import { useState } from "react";
import Layout from "@/components-core/layout";
import Logo from "@/components-page/auth/Logo";
import Welcome from "@/components-page/auth/welcome";

export default function Auth() {
  const [loading, setLoad] = useState(false);
  return (
    <>
      <Logo loading={loading} />
      {!loading ? <Welcome /> : null}
    </>
  );
}

Auth.getLayout = function getLayout(page) {
  return <Layout isFullScreen >{page}</Layout>;
};
