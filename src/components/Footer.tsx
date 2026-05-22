export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0a1520', padding: '48px 0 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 40,
            flexWrap: 'wrap',
            gap: 32,
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 300 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 14 }}>
              <img src="/celuma-isotipo.png" alt="Céluma" style={{ height: 30, width: 'auto', opacity: 0.85 }} />
              <span
                style={{
                  fontFamily: "'Baloo 2', system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: 20,
                  color: '#fff',
                }}
              >
                Céluma
              </span>
            </a>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
              El sistema que ilumina y digitaliza los laboratorios de anatomía patológica en Latinoamérica.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }}>
            <FooterColumn
              title="Producto"
              links={[
                { label: 'Funcionalidades', href: '#funcionalidades' },
                { label: 'Cómo funciona', href: '#como-funciona' },
                { label: 'Para quién', href: '#para-quien' },
              ]}
            />
            <FooterColumn
              title="Empresa"
              links={[
                { label: 'Nuestra misión', href: '#nosotros' },
                { label: 'Solicitar demo', href: '#contacto' },
                { label: 'Contacto', href: 'mailto:hola@celuma.mx' },
              ]}
            />
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            © {year} Céluma. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacidad', 'Términos'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p
        style={{
          fontFamily: "'Baloo 2', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          color: 'rgba(255,255,255,0.7)',
          margin: '0 0 14px 0',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </p>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
