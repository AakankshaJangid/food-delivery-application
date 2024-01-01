import React from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
const HelpSidebar = () => {
    const data =[
        {
            heading: 'Partnership',
            route:'/help/partnership'
        },
        {
            heading: 'Legal',
            route:'/help/legal'
        },
        {
            heading: 'FAQs',
            route:'/help/faqs'
        },
    ]
    const router = useRouter()
  const path = router.pathname
  return (
    <div className='bg-orange-100 flex flex-col gap-6 py-6 pl-12 h-full '>
      {data.map((item)=>(
        <h1 className={cx('text-xl text-orange-500 font-mono font-bold px-10 py-5',{
            'text-orange-800 bg-white px-10 py-5' : path === item.route
        })}><Link href={item.route}>{item.heading}</Link></h1>
      ))}
    </div>
  )
}

export default HelpSidebar
