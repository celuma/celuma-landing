export default function CTA() {
  return (
    <section
      id="contacto"
      style={{
        background: '#0d1b2a',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15,139,141,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15,139,141,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <img
          src="/celuma-isotipo.png"
          alt="Céluma"
          style={{ height: 52, width: 'auto', marginBottom: 28, opacity: 0.9 }}
        />

        <h2
          style={{
            fontFamily: "'Baloo 2', system-ui, sans-serif",
            fontSize: 'clamp(30px, 5vw, 52px)',
            fontWeight: 800,
            color: '#fff',
            margin: '0 0 20px 0',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          ¿Listo para iluminar tu laboratorio?
        </h2>

        <p
          style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            margin: '0 0 44px 0',
            maxWidth: 520,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Empieza hoy. Crea tu cuenta, configura tu laboratorio y digitaliza tu flujo de trabajo desde el primer día.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://app.celuma.mx"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '16px 36px',
              borderRadius: 12,
              background: '#0f8b8d',
              color: '#fff',
              fontWeight: 700,
              fontSize: 17,
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(15,139,141,0.45)',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0a6e70'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0f8b8d'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            Ir a la aplicación
          </a>

          <a
            href="https://docs.celuma.mx"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '16px 32px',
              borderRadius: 12,
              background: 'transparent',
              color: 'rgba(255,255,255,0.8)',
              fontWeight: 600,
              fontSize: 17,
              textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.2)',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
            }}
          >
            Documentación
            <span style={{
              fontSize: 10,
              fontWeight: 700,
              background: 'rgba(15,139,141,0.3)',
              color: '#7dd8d9',
              padding: '2px 7px',
              borderRadius: 4,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              Pronto
            </span>
          </a>
        </div>

        {/* Trust signals */}
        <div
          style={{
            marginTop: 56,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          {[
            'Sin contrato de largo plazo',
            'Soporte incluido',
            'Datos seguros y cifrados',
          ].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f8b8d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
