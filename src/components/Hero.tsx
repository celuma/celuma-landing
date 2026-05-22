export default function Hero() {
  return (
    <section
      style={{
        background: '#fbf6ec',
        paddingTop: 68,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Decorative background blobs */}
      <div
        style={{
          position: 'absolute',
          top: -120,
          right: -120,
          width: 560,
          height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15,139,141,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15,139,141,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 24px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Text column */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(15,139,141,0.1)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 28,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0f8b8d', display: 'inline-block' }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: '#0f8b8d', letterSpacing: '0.04em' }}>
              Sistema SaaS para laboratorios de patología
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Baloo 2', system-ui, sans-serif",
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: 800,
              color: '#0d1b2a',
              lineHeight: 1.1,
              margin: '0 0 24px 0',
              letterSpacing: '-0.02em',
            }}
          >
            Ilumina y digitaliza tu{' '}
            <span style={{ color: '#0f8b8d' }}>laboratorio de patología</span>
          </h1>

          <p
            style={{
              fontSize: 18,
              color: '#6b7280',
              lineHeight: 1.7,
              margin: '0 0 40px 0',
              maxWidth: 520,
            }}
          >
            Céluma simplifica cada proceso: desde el registro del caso hasta la firma del informe.
            Trazabilidad total, reportes claros y diagnósticos más ágiles para tu equipo.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="#contacto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 32px',
                borderRadius: 12,
                background: '#0f8b8d',
                color: '#fff',
                fontWeight: 700,
                fontSize: 16,
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(15,139,141,0.35)',
                transition: 'background 0.2s, transform 0.1s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0a6e70'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0f8b8d'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Solicitar demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#funcionalidades"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                borderRadius: 12,
                background: 'transparent',
                color: '#0d1b2a',
                fontWeight: 600,
                fontSize: 16,
                textDecoration: 'none',
                border: '2px solid rgba(13,27,42,0.15)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0f8b8d'
                e.currentTarget.style.color = '#0f8b8d'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(13,27,42,0.15)'
                e.currentTarget.style.color = '#0d1b2a'
              }}
            >
              Ver funcionalidades
            </a>
          </div>

          {/* Social proof */}
          <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            {[
              { value: '100%', label: 'Trazabilidad' },
              { value: 'Multi-sucursal', label: 'Soporte completo' },
              { value: 'LATAM', label: 'Enfocado en' },
            ].map((stat) => (
              <div key={stat.value} style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: "'Baloo 2', system-ui, sans-serif", fontWeight: 800, fontSize: 20, color: '#0f8b8d' }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: 13, color: '#6b7280' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual column */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <HeroVisual />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}

function HeroVisual() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 480 }}>
      {/* Main card */}
      <div
        style={{
          background: '#fff',
          borderRadius: 20,
          boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.06)',
          padding: 28,
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Card header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <img src="/celuma-isotipo.png" alt="" style={{ height: 32, width: 'auto' }} />
          <div>
            <div style={{ fontFamily: "'Baloo 2', system-ui, sans-serif", fontWeight: 700, fontSize: 15, color: '#0d1b2a' }}>
              Informe diagnóstico
            </div>
            <div style={{ fontSize: 12, color: '#6b7280' }}>Citología urinaria · PAC-0001</div>
          </div>
          <div
            style={{
              marginLeft: 'auto',
              padding: '4px 12px',
              borderRadius: 100,
              background: '#e6f7f7',
              color: '#0f8b8d',
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            Firmado
          </div>
        </div>

        {/* Content lines */}
        {[80, 95, 70, 60, 85].map((w, i) => (
          <div
            key={i}
            style={{
              height: 10,
              borderRadius: 6,
              background: i === 0 ? '#0d1b2a' : '#f0f0f0',
              width: `${w}%`,
              marginBottom: 10,
              opacity: i === 0 ? 0.15 : 1,
            }}
          />
        ))}

        {/* Divider */}
        <div style={{ borderTop: '1px solid #f5f5f5', margin: '20px 0' }} />

        {/* Signature row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0f8b8d, #0a6e70)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            CR
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0d1b2a' }}>Dr. Carlos Ramírez</div>
            <div style={{ fontSize: 11, color: '#6b7280' }}>Patólogo · Firma verificada</div>
          </div>
          <svg
            style={{ marginLeft: 'auto', color: '#0f8b8d' }}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>

      {/* Floating badge — samples */}
      <div
        style={{
          position: 'absolute',
          top: -20,
          right: -28,
          background: '#fff',
          borderRadius: 14,
          boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          zIndex: 3,
        }}
      >
        <div style={{ fontSize: 22 }}>🔬</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18, color: '#0d1b2a', fontFamily: "'Baloo 2', system-ui, sans-serif" }}>
            12
          </div>
          <div style={{ fontSize: 12, color: '#6b7280' }}>Muestras hoy</div>
        </div>
      </div>

      {/* Floating badge — portal */}
      <div
        style={{
          position: 'absolute',
          bottom: -20,
          left: -28,
          background: '#fff',
          borderRadius: 14,
          boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          zIndex: 3,
        }}
      >
        <div style={{ fontSize: 22 }}>✅</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13, color: '#0d1b2a', fontFamily: "'Baloo 2', system-ui, sans-serif" }}>
            Reporte publicado
          </div>
          <div style={{ fontSize: 12, color: '#6b7280' }}>Portal del médico</div>
        </div>
      </div>
    </div>
  )
}
