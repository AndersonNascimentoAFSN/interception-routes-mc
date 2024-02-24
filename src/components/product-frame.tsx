import React from 'react'

import { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'

export function ProductFrame({ name, imageURL }: Product) {
  return (
    <>
      <Image
        src={imageURL}
        alt={name}
        width={600}
        height={600}
        quality={100}
        priority
        className='w-full object-cover aspect-square rounded-md'
      />
      <div className='bg-white p-4 px-6 text-center'>
        <h3>{name}</h3>
        <h4><Link href="/" className='bg-sky-800 text-white p-2 rounded-md'>Voltar</Link></h4>
      </div>
    </>
  )
}
