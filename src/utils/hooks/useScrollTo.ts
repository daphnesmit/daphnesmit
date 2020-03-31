import raf from 'raf'

interface UseScrollToOptions {
  element?: HTMLElement
  to: number
  duration: number
}

export function useScrollTo() {
  const scrollTo = (options: UseScrollToOptions) => {
    const { element, duration, to } = options
    const el = element || document.documentElement
    if (duration <= 0) {
      raf(() => {
        el.scrollTop = to
      })
      return
    }
    const difference = to - el.scrollTop
    const perTick = (difference / duration) * 10

    raf(() => {
      el.scrollTop += perTick
      if (el.scrollTop === to) return
      scrollTo({ element, to, duration: duration - 10 })
    })
  }

  return [scrollTo]
}
