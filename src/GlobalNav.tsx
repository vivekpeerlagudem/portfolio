import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, House, ChevronRight } from 'lucide-react'

/**
 * GlobalNav — unified navigation across all pages.
 */


function useLang() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  return { isHome, pageTitle: null }
}

function useTheme() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  useEffect(() => {
    if (localStorage.getItem('theme')) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      setIsDark(e.matches)
      document.documentElement.classList.toggle('dark', e.matches)
      document.documentElement.classList.toggle('light', !e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggleTheme = useCallback(() => {
    // Kill all transitions for instant theme switch
    document.documentElement.style.setProperty('--theme-transition', 'none')
    document.querySelectorAll('*').forEach(el => {
      (el as HTMLElement).style.transition = 'none'
    })

    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    document.documentElement.classList.toggle('light', !next)
    localStorage.setItem('theme', next ? 'dark' : 'light')

    // Re-enable transitions after repaint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.style.removeProperty('--theme-transition')
        document.querySelectorAll('*').forEach(el => {
          (el as HTMLElement).style.transition = ''
        })
      })
    })
  }, [isDark])

  return { isDark, toggleTheme }
}



export default function GlobalNav() {
  const { isHome, pageTitle } = useLang()
  const { isDark, toggleTheme } = useTheme()

  const hasBar = !isHome

  const [hydrated, setHydrated] = useState(false)
  const [hasAnimatedBar, setHasAnimatedBar] = useState(false)
  const [hasAnimatedBackLink, setHasAnimatedBackLink] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hasBar && !hasAnimatedBar) {
      setHasAnimatedBar(true)
    }
  }, [hasBar, hasAnimatedBar])

  useEffect(() => {
    if (!isHome && !hasAnimatedBackLink) {
      setHasAnimatedBackLink(true)
    }
  }, [isHome, hasAnimatedBackLink])

  // Animation tracking — bar and back link animate only on first appearance
  const animateBar = hasBar && !hasAnimatedBar
  const animateBackLink = !isHome && !hasAnimatedBackLink

  const fade = (duration: string) => ({ animation: `nav-fade-in ${duration} ease-out` })

  const themeToggle = (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg hover:border-primary/50 hover:shadow-primary/20 hover:shadow-xl transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
    </button>
  )

  // Bar visible: controls inside it
  if (hasBar) {
    return (
      <nav className="sticky top-0 z-50">
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border"
          style={animateBar ? fade('0.35s') : undefined}
        />
        <div className="relative pt-4 pb-3 px-6 pl-14 xl:pl-6 flex items-center justify-between">
          <div className="min-w-0 flex items-center">
            {!isHome && (
              <nav
                aria-label="Breadcrumb"
                className="inline-flex items-center gap-1.5 text-sm"
                style={animateBackLink ? fade('0.4s') : undefined}
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                  <House className="w-4 h-4" />
                  <span className="hidden sm:inline">vivekpeerlagudem</span>
                </Link>
                {pageTitle && (
                  <>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 shrink-0" />
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="hover:text-foreground transition-colors cursor-pointer truncate text-foreground font-medium"
                    >
                      {pageTitle}
                    </button>
                  </>
                )}
              </nav>
            )}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {themeToggle}
          </div>
        </div>
      </nav>
    )
  }

  if (!hydrated) return null

  return (
    <div className="fixed top-4 right-6 z-50 flex items-center gap-3">
      {themeToggle}
    </div>
  )
}

