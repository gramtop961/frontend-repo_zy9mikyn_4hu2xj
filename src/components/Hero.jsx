import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-950" />
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="max-w-3xl">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-white mix-blend-difference">
            No problem is too big to solve.
            <br />
            The sky is not the limit.
          </h1>
          <p className="mt-6 text-lg text-neutral-800/80 max-w-xl">
            “Where ideas become reality.”
          </p>
          <p className="mt-6 text-neutral-800/70 max-w-2xl">
            “J.E Ideas helps companies move forward through fresh, unexpected, and high-value concepts. Whether you’re looking for a new product, a smart feature, or a creative solution to a challenge — we think further, deeper, and differently.”
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-sm tracking-wide hover:opacity-90 transition-opacity">
              Work With Us
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-neutral-300 text-sm tracking-wide hover:bg-neutral-50 transition-colors">
              See What We Do
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
