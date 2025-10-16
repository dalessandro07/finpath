import RegisterForm from '@/core/components/auth/register-form'
import { APP_NAME } from '@/core/lib/constants'

export default function RegisterPage () {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold lowercase">
            {APP_NAME}
          </h1>
        </div>

        <RegisterForm />
      </div>
    </div>
  )
}
