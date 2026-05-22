const values = [
  {
    icon: '✦',
    name: 'Claridad',
    description: 'Información visible, ordenada y siempre accesible para quien la necesita.',
  },
  {
    icon: '◎',
    name: 'Precisión',
    description: 'Procesos médicos reflejados con rigor digital, sin margen para errores.',
  },
  {
    icon: '🔒',
    name: 'Seguridad',
    description: 'Datos clínicos protegidos bajo estándares de salud y buenas prácticas.',
  },
  {
    icon: '🤝',
    name: 'Confianza',
    description: 'Un sistema que respalda la práctica médica con transparencia y trazabilidad.',
  },
  {
    icon: '❤',
    name: 'Humanidad',
    description: 'Diseñado para apoyar a los profesionales, nunca para complicarles el trabajo.',
  },
]

export default function Values() {
  return (
    <section id="nosotros" style={{ background: '#fbf6ec', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
          className="values-grid"
        >
          {/* Left — mission text */}
          <div>
            <span
              style={{
                display: 'inline-block',
                fontSize: 13,
                fontWeight: 600,
                color: '#0f8b8d',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Nuestra misión
            </span>

            <h2
              style={{
                fontFamily: "'Baloo 2', system-ui, sans-serif",
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 800,
                color: '#0d1b2a',
                margin: '0 0 24px 0',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Iluminar y simplificar los procesos médicos
            </h2>

            <p style={{ fontSize: 17, color: '#6b7280', lineHeight: 1.8, margin: '0 0 24px 0' }}>
              Simplificamos y digitalizamos los procesos de los laboratorios de anatomía patológica, garantizando trazabilidad total de cada muestra y entregando reportes claros, seguros y confiables que fortalecen la práctica médica.
            </p>

            <p style={{ fontSize: 17, color: '#6b7280', lineHeight: 1.8, margin: 0 }}>
              Nuestra visión es convertirnos en el sistema de referencia en Latinoamérica para la gestión integral de laboratorios de patología — reconocido por su confiabilidad, precisión y experiencia de usuario intuitiva.
            </p>

            {/* Name origin */}
            <div
              style={{
                marginTop: 36,
                padding: '20px 24px',
                borderRadius: 14,
                background: '#e6f7f7',
                borderLeft: '4px solid #0f8b8d',
              }}
            >
              <p style={{ margin: 0, fontSize: 15, color: '#0d1b2a', lineHeight: 1.7 }}>
                <strong style={{ color: '#0f8b8d' }}>Céluma</strong> nace de la fusión de{' '}
                <em>célula</em> (la unidad fundamental de la vida) y <em>lumen</em> (luz). Una
                combinación que simboliza <strong>claridad, precisión y vida</strong>.
              </p>
            </div>
          </div>

          {/* Right — values */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {values.map((v) => (
              <ValueCard key={v.name} {...v} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .values-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

function ValueCard({
  icon,
  name,
  description,
}: (typeof values)[number]) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 16,
        background: '#fff',
        borderRadius: 14,
        padding: '18px 20px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(4px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: '#e6f7f7',
          color: '#0f8b8d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Baloo 2', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: '#0d1b2a',
            marginBottom: 4,
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{description}</div>
      </div>
    </div>
  )
}
