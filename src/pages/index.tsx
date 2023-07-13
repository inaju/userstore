import { Inter } from 'next/font/google'
import UserCard from '@/components/usercard'
import { IData, Result } from '@/types'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }: IData) {
  console.log(data, 'data now')
  return (
    <main
      className={` flex flex-row flex-wrap mx-auto  max-w-[1324px] p-4 gap-y-8 gap-x-8  h-full justify-between ${inter.className}`}
    >
      {data.map((item: Result) => (
        <UserCard {...item} />)
      )}
    </main>
  )
}


// This gets called on every request

export async function getServerSideProps() {
  // Fetch data from external API

  const res = await fetch(`https://randomuser.me/api/?results=10`)
  let data = await res.json()
  data=data.results
  // Pass data to the page via props
  return { props: { data } }
}