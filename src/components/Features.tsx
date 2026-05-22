const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
    title: 'Trazabilidad total',
    description:
      'Sigue cada muestra desde su recepción hasta la entrega del reporte. Ningún paso del proceso se pierde; cada evento queda registrado con fecha, hora y responsable.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Editor de informes',
    description:
      'Redacta informes diagnósticos con editor de texto enriquecido, plantillas reutilizables por tipo de estudio y exportación automática en PDF profesional.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Firma digital',
    description:
      'Flujo completo de revisión, aprobación y firma digital. Cada decisión queda trazada con sello de tiempo, garantizando validez y transparencia en el proceso clínico.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Multi-sucursal',
    description:
      'Gestiona múltiples sucursales y equipos desde una sola plataforma. Controla acceso, permisos y visibilidad por ubicación para cada usuario.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Portales externos',
    description:
      'Médicos solicitantes y pacientes acceden a sus resultados de forma segura y directa, sin necesidad de cuenta interna ni instalación adicional.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Facturación integrada',
    description:
      'Genera facturas, registra pagos y controla el balance financiero de cada caso. Todo integrado con el flujo del laboratorio, sin herramientas externas.',
  },
]

export default function Features() {
  return (
    <section id="funcionalidades" style={{ background: '#fff', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
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
            Funcionalidades
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
            Todo lo que tu laboratorio necesita
          </h2>
          <p style={{ fontSize: 17, color: '#6b7280', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Una plataforma integrada que cubre el ciclo completo de la gestión patológica, desde la recepción de la muestra hasta la entrega del diagnóstico.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 28,
          }}
          className="features-grid"
        >
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div
      style={{
        background: '#fbf6ec',
        borderRadius: 16,
        padding: 28,
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: '#e6f7f7',
          color: '#0f8b8d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "'Baloo 2', system-ui, sans-serif",
          fontSize: 18,
          fontWeight: 700,
          color: '#0d1b2a',
          margin: '0 0 10px 0',
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{description}</p>
    </div>
  )
}
