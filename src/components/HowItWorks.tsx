const steps = [
  {
    number: '01',
    title: 'Registra el caso',
    description:
      'Captura al paciente, crea la orden de estudio y recepciona la muestra en minutos. Todo queda trazado desde el inicio con código único y auditoría completa.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Procesa y redacta',
    description:
      'El técnico histotecnólogo registra los resultados de la muestra y sube imágenes microscópicas. El patólogo redacta el informe diagnóstico usando plantillas del sistema.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Firma y entrega',
    description:
      'El informe pasa por el flujo de revisión y aprobación. Tras la firma digital del patólogo, el médico solicitante y el paciente reciben acceso inmediato en su portal.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" style={{ background: '#fbf6ec', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
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
            Flujo de trabajo
          </span>
          <h2
            style={{
              fontFamily: "'Baloo 2', system-ui, sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: '#0d1b2a',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            Así de sencillo
          </h2>
          <p style={{ fontSize: 17, color: '#6b7280', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Tres pasos claros que ordenan todo el proceso del laboratorio, sin complicaciones.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
            position: 'relative',
          }}
          className="steps-grid"
        >
          {/* Connecting line (desktop) */}
          <div
            style={{
              position: 'absolute',
              top: 52,
              left: '16.5%',
              right: '16.5%',
              height: 2,
              background: 'linear-gradient(90deg, #0f8b8d 0%, rgba(15,139,141,0.3) 100%)',
              zIndex: 0,
            }}
            className="connector-line"
          />

          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
          .connector-line {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number]
  index: number
}) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 20,
        padding: 32,
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.12)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'
      }}
    >
      {/* Number */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: index === 0 ? '#0f8b8d' : '#e6f7f7',
          color: index === 0 ? '#fff' : '#0f8b8d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          fontFamily: "'Baloo 2', system-ui, sans-serif",
          fontWeight: 800,
          fontSize: 18,
          transition: 'background 0.2s',
        }}
      >
        {step.number}
      </div>

      <div style={{ color: '#0f8b8d', marginBottom: 16, display: 'flex', justifyContent: 'center' }}>
        {step.icon}
      </div>

      <h3
        style={{
          fontFamily: "'Baloo 2', system-ui, sans-serif",
          fontSize: 20,
          fontWeight: 700,
          color: '#0d1b2a',
          margin: '0 0 12px 0',
        }}
      >
        {step.title}
      </h3>
      <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{step.description}</p>
    </div>
  )
}
