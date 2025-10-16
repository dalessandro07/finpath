import LoginForm from '@/core/components/auth/login-form'
import Logo from '@/core/components/ui/logo'

export default function LoginPage () {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Logo href='/' />
        </div>

        <LoginForm />
      </div>
    </div>
  )
}
