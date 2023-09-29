import { Inter } from "next/font/google";
import { twMerge as tm } from 'tailwind-merge'

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children, isFullScreen, className }) {

  const mainClassName = isFullScreen ? `flex flex-col h-doc-height w-doc-width` : '';

  return (
    <>
      <main
        className={tm(`${inter.className} ${mainClassName}`, className)}
      >{children}
      </main>
    </>
  )
}