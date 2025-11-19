import { ServicesGrid } from '../components/Sections'

function Services() {
  return (
    <div className="py-28">
      <div className="mx-auto max-w-4xl px-6 mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
        <p className="mt-6 text-neutral-700 max-w-3xl">“We help businesses of all sizes — from small entrepreneurs to international brands — by delivering ideas that create impact. No fixed packages, no preset limits. Just custom creativity built around what you need.”</p>
      </div>
      <ServicesGrid />
    </div>
  )
}

export default Services
