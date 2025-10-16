import { Avatar, AvatarFallback, AvatarImage } from '@/core/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/core/components/ui/card'
import { verifySession } from '@/core/lib/dal'
import { formatDate } from '@/core/lib/dates'

export default async function ProfilePage () {
  const { user } = await verifySession()

  const userInitials = user.name?.split(' ').map(name => name[0]).join('')

  return (
    <div className="px-5 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Perfil de Usuario</h1>
        <p className="text-muted-foreground">
          Gestiona tu información personal y configuración de cuenta
        </p>
      </div>

      {/* Información del perfil */}
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.image ?? ''} alt={user.name ?? ''} />
              <AvatarFallback className="text-4xl">{userInitials}</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-xl">{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 text-center">
          <div className="text-sm text-muted-foreground">
            <p>Miembro desde: {formatDate(user.createdAt)}</p>
            <p>Última actualización: {formatDate(user.updatedAt)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
