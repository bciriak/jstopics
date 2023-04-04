declare global {
  interface Window {
    umami: any
  }
}

export function trackEvent(event: string) {
  if (!window.umami) return

  window.umami(event)
}
