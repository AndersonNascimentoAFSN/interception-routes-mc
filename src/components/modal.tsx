'use client'

import { ComponentProps, KeyboardEvent, MouseEvent, useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface ModalProps extends ComponentProps<'div'> {
  id?: string
}

export function Modal({ children, id }: ModalProps) {
  const overlay = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

  const router = useRouter()

  // Voltar ou fechar a modal
  const onDismiss = useCallback(() => {
    // overlay.current?.remove()
    router.back()
  }, [router])

  // const onEnter = useCallback(() => {
  //   console.log('onEnter')
  //   router.push(`/products/${id}`)
  // }, [router, id])

  const onClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (overlay.current === null || wrapper.current === null) return
    if (e.target === overlay.current || e.target == wrapper.current) {
      if (onDismiss) onDismiss()
    }
  }, [onDismiss, overlay, wrapper])

  const onKeyDown = useCallback((e: any) => {
    if (e.key === 'Escape') onDismiss()
    // if (e.key === 'Enter') onEnter()
  }, [onDismiss])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)

  }, [onKeyDown])

  return (
    <div
      ref={overlay}
      className='fixed z-10 left-0 right-0 bottom-0 top-0 mx-auto bg-black/60'
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w1/2 p-6'
      >
        {children}
      </div>
    </div>
  )
}
