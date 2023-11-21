import Nav from '@/components/Nav'
import { ProfileForm } from '@/components/profile-form'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-24 pt-12">
      <Nav />
      <section className="py-12 pt-6 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">Shadcn is awesome</h1>
        <p className="text-2xl text-foreground"> Hand-picked themes that you can copy and paste</p>
        <div className="flex gap-6 py-6 items-center justify-center">
          <Button variant="secondary">learn Modre</Button>
          <Button>Enrole now</Button>
        </div>

        <div className="flex flex-col text-left">
          <ProfileForm />
        </div>

      </section>
    </main>
  )
}
