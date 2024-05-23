"use client"
import { KeyframeOptions, animate, useIsomorphicLayoutEffect } from 'framer-motion'
import React, { useRef } from 'react'

const AnimatedCounter = ({
    from,
    to,
    animationOptions,
}: {
    from: number,
    to: number,
    animationOptions?: KeyframeOptions
}) => {
    const countRef = useRef<HTMLSpanElement>(null)
    

    useIsomorphicLayoutEffect(() => {
        const counter = countRef.current
        if(!counter) return

        counter.textContent = String(from.toFixed(0))

        const controls = animate(from , to, {
            duration:  2,
            ease: "easeOut",
            ...animationOptions,
            onUpdate(value){
                counter.textContent = String(value.toFixed(0))
            }

        })
    }, [countRef])

  return (
    <span ref={countRef} />
  )
}

export default AnimatedCounter