const roles = [
  {
    emoji: '🔬',
    role: 'Patólogo',
    color: '#0f8b8d',
    lightColor: '#e6f7f7',
    description:
      'Redacta informes diagnósticos con el editor integrado, gestiona el flujo de revisión y firma publicaciones con validez y trazabilidad completa.',
    capabilities: ['Editor de informes enriquecido', 'Flujo de revisión y aprobación', 'Firma digital verificada', 'Worklist personalizada'],
  },
  {
    emoji: '⚗️',
    role: 'Técnico histotecnólogo',
    color: '#7c3aed',
    lightColor: '#f3f0ff',
    description:
      'Registra y procesa muestras, sube imágenes microscópicas y actualiza el estado del caso a lo largo de todo el flujo de laboratorio.',
    capabilities: ['Registro y recepción de muestras', 'Carga de imágenes microscópicas', 'Actualización de estados', 'Worklist de muestras'],
  },
  {
    emoji: '🏢',
    role: 'Administrador',
    color: '#b45309',
    lightColor: '#fef3c7',
    description:
      'Gestiona usuarios, sucursales, catálogo de estudios, precios y configuración del laboratorio. Control total de la operación sin privilegios clínicos.',
    capabilities: ['Gestión de usuarios e invitaciones', 'Configuración de sucursales', 'Catálogo y precios', 'Facturación y pagos'],
  },
  {
    emoji: '👨‍⚕️',
    role: 'Médico solicitante',
    color: '#0369a1',
    lightColor: '#e0f2fe',
    description:
      'Consulta los resultados publicados de sus pacientes a través de un portal seguro y accesible, sin necesidad de cuenta interna en el laboratorio.',
    capabilities: ['Portal de acceso dedicado', 'Historial de resultados', 'Descarga de reportes en PDF', 'Acceso seguro y auditado'],
  },
]

export default function ForWho() {
  return (
    <section id="para-quien" style={{ background: '#fff', padding: '100px 0' }}>
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
            Para quién
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
            Diseñado para cada rol en tu laboratorio
          </h2>
          <p style={{ fontSize: 17, color: '#6b7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Céluma se adapta a las necesidades de cada actor, con permisos precisos y flujos específicos para cada función.
          </p>
        </div>

        {/* Role cards */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }}
          className="roles-grid"
        >
          {roles.map((r) => (
            <RoleCard key={r.role} {...r} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .roles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function RoleCard({
  emoji,
  role,
  color,
  lightColor,
  description,
  capabilities,
}: (typeof roles)[number]) {
  return (
    <div
      style={{
        background: '#fbf6ec',
        borderRadius: 20,
        padding: 32,
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
      {/* Role header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: lightColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 26,
          }}
        >
          {emoji}
        </div>
        <h3
          style={{
            fontFamily: "'Baloo 2', system-ui, sans-serif",
            fontSize: 20,
            fontWeight: 700,
            color: '#0d1b2a',
            margin: 0,
          }}
        >
          {role}
        </h3>
      </div>

      <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7, margin: '0 0 20px 0' }}>{description}</p>

      {/* Capability pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {capabilities.map((cap) => (
          <span
            key={cap}
            style={{
              padding: '5px 12px',
              borderRadius: 100,
              background: lightColor,
              color: color,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {cap}
          </span>
        ))}
      </div>
    </div>
  )
}
