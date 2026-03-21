'use client'

import Image from 'next/image'

interface BrandProps {
  brand: {
    id: string
    image: string
    name: string
  }
}

const SingleBrand = ({ brand }: BrandProps) => {
  return (
    <div className="mx-4 flex items-center justify-center">
      <div className="relative h-12 w-auto">
        <Image
          src={brand.image}
          alt={brand.name}
          width={120}
          height={48}
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  )
}

export default SingleBrand