import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import Initial from '@/components/no-auth/index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className} flex flex-col h-doc-height w-doc-width`}>
      <Initial />
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
