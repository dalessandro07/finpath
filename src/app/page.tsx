import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/core/lib/constants'

export default function Home () {
  return (
    <main className='flex flex-col gap-5 min-h-dvh container mx-auto'>
      <div className="grid grid-cols-1 grow md:grid-cols-2 gap-5 items-center w-full h-full justify-center">
        <div className="flex flex-col gap-5">
          <h1 className='text-8xl font-black'>{APP_NAME}</h1>
          <p className='text-2xl'>
            {APP_SLOGAN}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {APP_DESCRIPTION}
        </div>
      </div>

      <p className='text-center text-2xl py-5'>
        🚧 En construcción...
      </p>
    </main>
  )
}
