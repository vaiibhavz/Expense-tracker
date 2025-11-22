import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src, alt, className, style, onError, ...rest } = props
  const [didError, setDidError] = useState<boolean>(false)

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setDidError(true)
    if (typeof onError === 'function') {
      (onError as (ev: React.SyntheticEvent<HTMLImageElement, Event>) => void)(e)
    }
  }

  if (didError) {
    const wrapperClass = `inline-block bg-gray-100 text-center align-middle ${className ?? ''}`
    const imgProps: React.ImgHTMLAttributes<HTMLImageElement> & { [key: string]: any } = {
      src: ERROR_IMG_SRC,
      alt: 'Error loading image',
      ...rest,
      ['data-original-url']: src,
    }

    return React.createElement(
      'div',
      { className: wrapperClass, style },
      React.createElement('div', { className: 'flex items-center justify-center w-full h-full' }, React.createElement('img', imgProps))
    )
  }

  const normalImgProps: React.ImgHTMLAttributes<HTMLImageElement> = {
    src,
    alt,
    className,
    style,
    ...rest,
    onError: handleError,
  }

  return React.createElement('img', normalImgProps)
}
