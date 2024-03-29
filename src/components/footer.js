
import React from 'react'
import Layout from './layout'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className={'py-8 flex items-center justify-between'}>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center'>
           Build With <span className='text-primary text-2xl px-1'></span> by&nbsp; <Link href="/" className='underline underline-offset-2'>Asheer</Link>
            </div>
            <Link href="/">Say Hello</Link>
        </Layout>
    </footer>
  )
}
