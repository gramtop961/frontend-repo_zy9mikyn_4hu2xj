import { Link, NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <Link to="/" className="text-xl tracking-tight font-semibold hover:opacity-80 transition-opacity">J.E Ideas</Link>
          <nav className="flex items-center gap-8 text-sm">
            <NavLink to="/" end className={({isActive})=>`uppercase tracking-wider hover:opacity-60 transition-opacity ${isActive? 'opacity-60' : ''}`}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=>`uppercase tracking-wider hover:opacity-60 transition-opacity ${isActive? 'opacity-60' : ''}`}>About</NavLink>
            <NavLink to="/services" className={({isActive})=>`uppercase tracking-wider hover:opacity-60 transition-opacity ${isActive? 'opacity-60' : ''}`}>Services</NavLink>
            <NavLink to="/contact" className={({isActive})=>`uppercase tracking-wider hover:opacity-60 transition-opacity ${isActive? 'opacity-60' : ''}`}>Contact</NavLink>
          </nav>
        </div>
      </header>
      <main className=""> 
        <Outlet />
      </main>
      <footer className="border-t border-neutral-200 mt-24">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} J.E Ideas</span>
          <span className="tracking-wider">Creative Consultancy</span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
