import { useState, useEffect } from 'react'

const checkAboutPage = () =>
  window.location.pathname.includes('/about') || window.location.hash.includes('#about')

export default function useIsAboutPage() {
  const [isAboutPage, setIsAboutPage] = useState(checkAboutPage)

  useEffect(() => {
    const onRouteChange = () => {
      const next = checkAboutPage()
      setIsAboutPage((prev) => {
        if (prev !== next) window.scrollTo({ top: 0 })
        return next
      })
    }
    window.addEventListener('hashchange', onRouteChange)
    window.addEventListener('popstate', onRouteChange)
    return () => {
      window.removeEventListener('hashchange', onRouteChange)
      window.removeEventListener('popstate', onRouteChange)
    }
  }, [])

  return isAboutPage
}
