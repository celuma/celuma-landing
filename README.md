# Céluma Landing

Sitio público de Céluma, la plataforma de gestión para laboratorios de anatomía patológica.

## Development

Requirements: Node.js 22 and npm.

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

Production is published to [celuma.mx](https://celuma.mx) from protected version tags through GitHub Actions and AWS OIDC.
