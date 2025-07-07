# 🚀 Next.js Template - dalessandro07

Un template moderno y completo para aplicaciones Next.js con autenticación, base de datos y UI components preconfigurados.

## ✨ Características

- **⚡ Next.js 15** con App Router y Turbopack
- **🔐 Autenticación** con Better Auth
- **🗄️ Base de datos** SQLite con Turso y Drizzle ORM
- **🎨 UI Components** con shadcn/ui
- **🌙 Tema oscuro/claro** con next-themes
- **📱 Responsive** y accesible
- **🔧 TypeScript** configurado
- **📦 Gestión de paquetes** con Bun
- **🎯 ESLint** y configuración de código limpio
- **🔒 Git hooks** con Husky para pre-commit

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15.3.5
- **Lenguaje**: TypeScript
- **Base de datos**: SQLite (Turso)
- **ORM**: Drizzle ORM
- **Autenticación**: Better Auth
- **UI**: shadcn/ui
- **Gestión de estado**: React 19
- **Notificaciones**: Sonner
- **Iconos**: Lucide React

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ o Bun
- Cuenta en [Turso](https://turso.tech) (para la base de datos)

### Instalación

1. **Clona el template**
```bash
git clone https://github.com/tu-usuario/dalessandro07-nextjs-template.git
cd dalessandro07-nextjs-template
```

2. **Instala las dependencias**
```bash
bun install
# o
npm install
```

3. **Configura las variables de entorno**
```bash
cp env.example .env.local
```

Edita `.env.local` con tus credenciales:
```env
# Turso Database
TURSO_CONNECTION_URL=your_turso_connection_url
TURSO_AUTH_TOKEN=your_turso_auth_token

# Better Auth
BETTER_AUTH_SECRET=your_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000

# OAuth Providers (opcional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. **Configura la base de datos**
```bash
# Genera las migraciones
bun run db:generate

# Ejecuta las migraciones
bun run db:migrate
```

5. **Inicia el servidor de desarrollo**
```bash
bun run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   │   └── auth/          # Rutas de autenticación
│   │   └── page.tsx       # Página principal
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── core/                  # Lógica de negocio
│   ├── components/        # Componentes UI
│   │   └── ui/           # Componentes base
│   ├── db/               # Base de datos
│   │   ├── index.ts      # Conexión DB
│   │   └── schema.ts     # Esquemas Drizzle
│   └── lib/              # Utilidades
│       ├── auth.ts       # Configuración auth
│       ├── auth-client.ts # Cliente auth
│       ├── constants/    # Constantes
│       └── utils.ts      # Utilidades generales
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
bun run dev              # Servidor de desarrollo con Turbopack
bun run build            # Construcción para producción
bun run start            # Servidor de producción
bun run lint             # Linting con ESLint
bun run lint:fix         # Linting con auto-fix
bun run type-check       # Verificación de tipos TypeScript

# Base de datos
bun run db:generate      # Generar migraciones
bun run db:migrate       # Ejecutar migraciones
bun run db:studio        # Abrir Drizzle Studio

# Git Hooks
bun run prepare          # Configurar Husky hooks
```

## 🎨 Personalización

### Configurar la aplicación

Edita `src/core/lib/constants/index.ts`:
```typescript
export const APP_NAME = 'Mi Aplicación'
export const APP_DESCRIPTION = 'Descripción de mi aplicación'
export const APP_SLOGAN = 'Mi slogan'
```

### Agregar nuevos componentes UI

Los componentes base están en `src/core/components/ui/`. Puedes agregar nuevos componentes siguiendo el patrón de shadcn/ui. "bunx --bun shadcn@latest add ..."

### Modificar el esquema de base de datos

Edita `src/core/db/schema.ts` y ejecuta:
```bash
bun run db:generate
bun run db:migrate
```

## 🔒 Git Hooks

El template incluye Husky configurado para mantener la calidad del código:

### Pre-commit Hook
- **Linting automático** con ESLint (`bun run lint`)
- **Verificación de tipos** TypeScript (`bun run type-check`)
- **Prevención de commits** con errores de código

### Configuración
```bash
# Instalar hooks (se ejecuta automáticamente con bun install)
bun run prepare

# Verificar configuración
ls .husky/
```

### Personalizar hooks
Edita `.husky/pre-commit` para agregar más verificaciones:
```bash
#!/usr/bin/env sh
bun run lint && bun run type-check && bun run test
```

## 🔐 Autenticación

El template incluye autenticación completa con Better Auth:

- **Autenticación por email/contraseña**
- **OAuth providers** (Google, GitHub, etc.)
- **Sesiones seguras**
- **Verificación de email**
- **Roles de usuario** (Admin/User)

### Configurar OAuth

1. Crea una aplicación en el proveedor OAuth
2. Agrega las credenciales en `.env` o `.env.local`
3. Configura las URLs de redirección

## 🗄️ Base de Datos

### Turso (SQLite en la nube)

- **Gratuito** con un plan generoso
- **Rápido** y escalable
- **SQLite** compatible
- **Migraciones** automáticas

### Esquemas incluidos

- `user` - Usuarios del sistema
- `session` - Sesiones activas
- `account` - Cuentas de OAuth
- `verification` - Verificaciones de email

## 🎯 Características Avanzadas

- **TypeScript** estrictamente configurado
- **ESLint** con reglas de Next.js
- **Tailwind CSS v4** con configuración optimizada
- **Componentes accesibles** con shadcn/ui
- **Notificaciones** con Sonner y configuración de shadcn/ui
- **Tema oscuro/claro** automático
- **Optimización de fuentes** con next/font
- **Git hooks** automáticos con Husky (lint + type-check en pre-commit)

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org) - Framework React
- [Better Auth](https://better-auth.com) - Autenticación
- [Drizzle ORM](https://orm.drizzle.team) - ORM TypeScript
- [Turso](https://turso.tech) - Base de datos SQLite
- [Shadcn/ui](https://ui.shadcn.com) - Componentes accesibles
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS

---

**¿Necesitas ayuda?** Abre un issue en el repositorio o contáctame.
