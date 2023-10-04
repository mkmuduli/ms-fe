import { Inter } from "next/font/google";
import Layout from "@/components-core/Layout";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return <div className={`${inter.className} flex flex-col`}>Home</div>;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
