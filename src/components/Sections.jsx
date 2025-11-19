import { motion } from 'framer-motion'

export function IntroStrip() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {['Visionary', 'Professional', 'Simple'].map((word, i) => (
            <motion.div key={word} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-8 border border-neutral-200 rounded-2xl">
              <p className="text-sm uppercase tracking-widest text-neutral-500">Tone</p>
              <p className="mt-4 text-2xl font-medium">{word}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionTitle({ title, sub }) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {sub && <p className="mt-4 text-neutral-600 max-w-2xl">{sub}</p>}
    </div>
  )
}

export function ServicesGrid() {
  const items = [
    'Product Innovation Concepts',
    'Feature & Improvement Ideas',
    'Creative Problem Solving',
    'Concept Development for Any Challenge',
  ]
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((text, i) => (
            <motion.div key={text} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-10 border border-neutral-200 rounded-2xl hover:-translate-y-0.5 transition-transform">
              <p className="text-xl">{text}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-neutral-600 max-w-3xl">
          “We help businesses of all sizes — from small entrepreneurs to international brands — by delivering ideas that create impact. No fixed packages, no preset limits. Just custom creativity built around what you need.”
        </p>
      </div>
    </section>
  )
}
