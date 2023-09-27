"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import Layout from "@/components-core/layout";
import Logo from "@/components-page/auth/Logo";
import Welcome from "@/components-page/auth/welcome";
const inter = Inter({ subsets: ["latin"] });

export default function Auth() {
  const [loading, setLoad] = useState(false);
  return (
    <div
      className={`${inter.className} flex flex-col h-doc-height w-doc-width`}
    >
      <Logo loading={loading} />
      {!loading ? <Welcome /> : null}
    </div>
  );
}

Auth.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
