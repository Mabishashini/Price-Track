import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props{
    product : Product
}

const ProductCard = (product : Props) => {
  return (
    <Link href={`/products/${product.product._id}`} className='product-card'>
        <div className='product-card_img-container'>
            <Image 
            src={product.product.image}
            alt={product.product.title}
            height={200}
            width={200}
            className='product-card_img'
            />
        </div>
        <div className="flex flex-col gap-3">
            <h3 className='product-title'>{product.product.title}</h3>
            <div className="flex justify-between">
                <p className='text-black opacity-50 text-lg capitalize'>{product.product.category}</p>
                <p className='text-black text-lg font-semibold'><span>{product.product?.currency}</span>
                <span>{product.product?.currentPrice}</span></p>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard