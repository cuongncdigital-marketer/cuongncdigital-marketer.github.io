import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ToolsMarquee from './components/ToolsMarquee'
import ExpertiseGrid from './components/ExpertiseGrid'
import Projects from './components/Projects'
import NewsletterCTA from './components/NewsletterCTA'
import Footer from './components/Footer'
import useAppStore from './store/useAppStore'
import useIsAboutPage from './hooks/useIsAboutPage'

const About = lazy(() => import('./pages/About/About'))
const ServiceModal = lazy(() => import('./components/ServiceModal'))

function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Lên đầu trang"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'var(--text-color)',
        color: '#fff',
        border: 'none',
        fontSize: '1.25rem',
        cursor: 'pointer',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        transition: 'background-color 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-orange)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--text-color)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      ↑
    </button>
  )
}

function App() {
  const mobileMenuOpen = useAppStore((s) => s.mobileMenuOpen)
  const closeMobileMenu = useAppStore((s) => s.closeMobileMenu)

  // Global Layout Service Modal
  const globalServiceModalOpen = useAppStore((s) => s.globalServiceModalOpen)
  const globalSelectedService = useAppStore((s) => s.globalSelectedService)
  const closeServiceModal = useAppStore((s) => s.closeServiceModal)

  const isAboutPage = useIsAboutPage()

  return (
    <>
      <Header />
      {mobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.45)',
            zIndex: 99,
          }}
        />
      )}
      <main>
        {isAboutPage ? (
          <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
            <About />
          </Suspense>
        ) : (
          <>
            <Hero />
            <ToolsMarquee />
            <ExpertiseGrid />
            <Projects />
          </>
        )}
        <NewsletterCTA />
      </main>
      <Footer />

      {globalServiceModalOpen && (
        <Suspense fallback={null}>
          <ServiceModal
            isOpen={globalServiceModalOpen}
            service={globalSelectedService}
            onClose={closeServiceModal}
          />
        </Suspense>
      )}

      <ScrollToTop />
    </>
  )
}

export default App
