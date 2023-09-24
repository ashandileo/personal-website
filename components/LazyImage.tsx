'use client'

import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const LazyImage = ({ alt, src, className = '' }) => {
  return <LazyLoadImage alt={alt} effect="blur" src={src} className={className} />
}

export default LazyImage
