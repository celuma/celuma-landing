import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links: { label: string; href: string; external?: boolean; soon?: boolean }[] = [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Para quién', href: '#para-quien' },
    { label: 'Documentación', href: 'https://docs.celuma.mx', external: true },
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled ? '#fff' : 'transparent',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/celuma-isotipo.png" alt="Céluma isotipo" style={{ height: 36, width: 'auto' }} />
          <span
            style={{
              fontFamily: "'Baloo 2', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 22,
              color: '#0d1b2a',
              letterSpacing: '-0.02em',
            }}
          >
            Céluma
          </span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            gap: 36,
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <li key={l.href} style={{ position: 'relative' }}>
              <a
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
                style={{
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 500,
                  color: l.soon ? '#6b7280' : '#0d1b2a',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0f8b8d')}
                onMouseLeave={(e) => (e.currentTarget.style.color = l.soon ? '#6b7280' : '#0d1b2a')}
              >
                {l.label}
                {l.soon && (
                  <span style={{
                    fontSize: 10,
                    fontWeight: 700,
                    background: '#e6f7f7',
                    color: '#0f8b8d',
                    padding: '1px 6px',
                    borderRadius: 4,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>
                    Pronto
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="https://app.celuma.mx"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 24px',
              borderRadius: 10,
              background: '#0f8b8d',
              color: '#fff',
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            className="hidden md:block"
            onMouseEnter={(e) => (e.currentTarget.style.background = '#0a6e70')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#0f8b8d')}
          >
            Iniciar sesión
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
            className="md:hidden"
            aria-label="Menú"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d1b2a" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: '#fff',
            borderTop: '1px solid #f0f0f0',
            padding: '16px 24px 24px',
          }}
          className="md:hidden"
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: 'none', fontSize: 16, fontWeight: 500, color: '#0d1b2a' }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://app.celuma.mx"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  borderRadius: 10,
                  background: '#0f8b8d',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: 'none',
                }}
              >
                Iniciar sesión
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
