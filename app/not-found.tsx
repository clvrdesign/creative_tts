import React from 'react'
import { AlertTriangle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Button from './components/Button'

const NotFoundPage = () => {
  return (
    <div className='min-h-[70vh] flex items-center justify-center bg-white dark:bg-neutral-950 p-4'>
      <div className='max-w-md w-full text-center'>
        <div className='mx-auto w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6'>
          <AlertTriangle className='w-10 h-10 text-red-600 dark:text-red-400' />
        </div>
        
        <h1 className='text-5xl font-bold text-neutral-900 dark:text-white mb-4'>404</h1>
        <h2 className='text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4'>Page Not Found</h2>
        
        <p className='text-neutral-600 dark:text-neutral-400 mb-8'>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link href='/'>
            <Button>
                <div className='flex items-center gap-2'>
              <ArrowLeft className='w-4 h-4' />
              Return Home
              </div>
            </Button>
          </Link>
          <Link href='/contact'>
            <Button variant='secondary'>
              Contact Support
            </Button>
          </Link>
        </div>

        <div className='mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800'>
          <p className='text-sm text-neutral-500 dark:text-neutral-500'>
            Error code: 404 | Not Found
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage