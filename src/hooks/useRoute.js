import { useState, useEffect } from 'react'
import { resolveRoute } from '../routes'

export default function useRoute() {
  const [route, setRoute] = useState(() => resolveRoute())

  useEffect(() => {
    const onRouteChange = () => {
      const next = resolveRoute()
      setRoute((prev) => {
        if (prev?.key !== next?.key) window.scrollTo({ top: 0 })
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

  return route
}
