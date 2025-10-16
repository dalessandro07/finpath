import { Badge } from '@/core/components/ui/badge'
import { Button } from '@/core/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/core/components/ui/card'
import { BookOpen, CheckCircle, Clock, Play, Star, Users } from 'lucide-react'

export default function MisCursosPage () {
  // Datos placeholder para los cursos
  const cursos = [
    {
      id: 1,
      titulo: 'Fundamentos de Finanzas Personales',
      descripcion: 'Aprende los conceptos básicos para manejar tu dinero de manera inteligente.',
      duracion: '4 semanas',
      estudiantes: 1250,
      calificacion: 4.8,
      progreso: 75,
      estado: 'en-progreso',
      instructor: 'María González',
      categoria: 'Básico',
      imagen: '/cursos-personalizados.webp'
    },
    {
      id: 2,
      titulo: 'Inversiones para Principiantes',
      descripcion: 'Descubre cómo hacer crecer tu dinero a través de inversiones seguras.',
      duracion: '6 semanas',
      estudiantes: 890,
      calificacion: 4.9,
      progreso: 100,
      estado: 'completado',
      instructor: 'Carlos Mendoza',
      categoria: 'Intermedio',
      imagen: '/diagnostico.webp'
    },
    {
      id: 3,
      titulo: 'Planificación de Presupuesto Familiar',
      descripcion: 'Organiza las finanzas de tu hogar con estrategias probadas.',
      duracion: '3 semanas',
      estudiantes: 2100,
      calificacion: 4.7,
      progreso: 0,
      estado: 'disponible',
      instructor: 'Ana Rodríguez',
      categoria: 'Básico',
      imagen: '/seguimiento.webp'
    },
    {
      id: 4,
      titulo: 'Criptomonedas y Blockchain',
      descripcion: 'Entiende el mundo de las criptomonedas y sus oportunidades.',
      duracion: '5 semanas',
      estudiantes: 650,
      calificacion: 4.6,
      progreso: 30,
      estado: 'en-progreso',
      instructor: 'Diego Silva',
      categoria: 'Avanzado',
      imagen: '/historial-crediticio.webp'
    }
  ]

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case 'completado':
        return <Badge variant="default" className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Completado</Badge>
      case 'en-progreso':
        return <Badge variant="default" className="bg-blue-100 text-blue-800"><Play className="w-3 h-3 mr-1" />En Progreso</Badge>
      case 'disponible':
        return <Badge variant="outline">Disponible</Badge>
      default:
        return <Badge variant="outline">{estado}</Badge>
    }
  }

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case 'Básico':
        return 'bg-green-100 text-green-800'
      case 'Intermedio':
        return 'bg-yellow-100 text-yellow-800'
      case 'Avanzado':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header */}
      <header>
        <h1 className="text-2xl font-semibold">Mis Cursos</h1>
        <p className="text-sm text-muted-foreground">
          Gestiona tu aprendizaje y continúa tu educación financiera
        </p>
      </header>

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-sm font-medium">Cursos Totales</p>
                <p className="text-2xl font-bold">{cursos.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-sm font-medium">Completados</p>
                <p className="text-2xl font-bold">
                  {cursos.filter(c => c.estado === 'completado').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Play className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-sm font-medium">En Progreso</p>
                <p className="text-2xl font-bold">
                  {cursos.filter(c => c.estado === 'en-progreso').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-600" />
              <div>
                <p className="text-sm font-medium">Promedio</p>
                <p className="text-2xl font-bold">
                  {(cursos.reduce((acc, c) => acc + c.calificacion, 0) / cursos.length).toFixed(1)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de cursos */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Todos los Cursos</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cursos.map((curso) => (
            <Card key={curso.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg">{curso.titulo}</CardTitle>
                      <Badge className={getCategoriaColor(curso.categoria)}>
                        {curso.categoria}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">
                      {curso.descripcion}
                    </CardDescription>
                  </div>
                  {getEstadoBadge(curso.estado)}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Información del curso */}
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{curso.duracion}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{curso.estudiantes.toLocaleString()} estudiantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    <span>{curso.calificacion}/5.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Instructor:</span>
                    <span>{curso.instructor}</span>
                  </div>
                </div>

                {/* Barra de progreso */}
                {curso.estado === 'en-progreso' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progreso</span>
                      <span>{curso.progreso}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${curso.progreso}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Botones de acción */}
                <div className="flex gap-2">
                  {curso.estado === 'disponible' && (
                    <Button className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Comenzar Curso
                    </Button>
                  )}
                  {curso.estado === 'en-progreso' && (
                    <Button className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Continuar
                    </Button>
                  )}
                  {curso.estado === 'completado' && (
                    <Button variant="outline" className="flex-1">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Ver Certificado
                    </Button>
                  )}
                  <Button variant="outline">
                    Ver Detalles
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sección de próximos cursos */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Próximos Cursos Recomendados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-dashed">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-semibold mb-2">Gestión de Deudas</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Aprende estrategias para reducir y eliminar tus deudas
              </p>
              <Button variant="outline" size="sm">
                Próximamente
              </Button>
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-semibold mb-2">Retiro y Pensiones</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Planifica tu futuro financiero para el retiro
              </p>
              <Button variant="outline" size="sm">
                Próximamente
              </Button>
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-semibold mb-2">Emprendimiento Financiero</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Finanzas para emprendedores y pequeños negocios
              </p>
              <Button variant="outline" size="sm">
                Próximamente
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
