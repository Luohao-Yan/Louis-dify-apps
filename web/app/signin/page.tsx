import React from 'react'
import cn from 'classnames'
import Forms from './forms'
import Header from './_header'
import style from './page.module.css'

const SignIn = () => {
  return (
    <>
      <div className={cn(
        style.background,
        'flex w-full min-h-screen',
        'sm:p-4 lg:p-8',
        'gap-x-20',
        'justify-center lg:justify-start',
      )}>
        <div className={
          cn(
            'flex w-full flex-col bg-white shadow rounded-2xl shrink-0',
            'space-between',
          )
        }>
          <Header />
          <Forms />
          <div className='px-8 py-6 text-sm font-normal text-gray-500'>
            © {new Date().getFullYear()} 微软南区ATS团队技术论坛.
          </div>
        </div>

      </div>

    </>
  )
}

export default SignIn
