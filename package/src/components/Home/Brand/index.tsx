'use client'
import Slider from 'react-infinite-logo-slider'
import SingleBrand from './SingleBrand'
import { useEffect, useState } from 'react'

function Brand() {
  const [brandList, setBrandList] = useState<any>(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setBrandList(data?.brandList || [])
      } catch (error) {
        console.error('Error fetching brands:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <section>
      <div className='mx-20 2xl:py-20 py-11'>
        <div className='container'>
          <div className='gap-4'>
            <div className='flex justify-center text-center py-4 relative'>
              <p
                className='relative px-2 text-dark_black/60 dark:text-white/60 
                    md:before:absolute md:before:right-[-150px] md:before:top-1/2 md:before:h-0.5 md:before:w-36 md:before:bg-linear-to-r md:before:from-gray-800 dark:md:before:from-gray-300 dark:md:before:opacity-100 md:before:opacity-10 md:before:to-transparent md:after:absolute md:after:left-[-150px] md:after:top-1/2 md:after:h-0.5 md:after:w-36 md:after:bg-linear-to-l md:after:from-gray-800 dark:md:after:from-gray-300 md:after:opacity-10 dark:md:after:opacity-100 md:after:to-transparent'>
                Trusted by 35+ Organizations around the world
              </p>
            </div>

            {brandList && brandList.length > 0 && (
              <div className='py-3 Xsm:py-7 max-w-7xl mx-auto px-4'>
  <Slider
    width='200px'
    duration={80}
    pauseOnHover={false}
    blurBorders={false}>
    {brandList?.map((items: any, index: any) => (
      <SingleBrand key={index} brand={items} />
    ))}
  </Slider>
</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand