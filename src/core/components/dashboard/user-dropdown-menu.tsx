import BtnLogout from '@/core/components/auth/btn-logout'
import { Avatar, AvatarFallback, AvatarImage } from '@/core/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/core/components/ui/dropdown-menu'
import { verifySession } from '@/core/lib/dal'

export default async function UserDropdownMenu () {
  const { user } = await verifySession()

  const userInitials = user.name?.split(' ').map(name => name[0]).join('')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-9 w-9">
          <AvatarImage src={user.image ?? ''} alt={user.name ?? ''} />
          <AvatarFallback>{userInitials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name ?? ''}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email ?? ''}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Perfil
          </DropdownMenuItem>
          <DropdownMenuItem>
            Facturación
          </DropdownMenuItem>
          <DropdownMenuItem>
            Configuración
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <BtnLogout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
