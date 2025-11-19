function Contact() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-semibold tracking-tight mb-10">Contact</h1>
        <p className="text-neutral-700 max-w-3xl mb-10">“Tell us what challenge you’re facing or what direction you want to explore.
We’ll discuss possibilities and create a custom creative plan together.”</p>
        <form className="space-y-6 max-w-2xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-neutral-600 mb-2">Name</label>
              <input type="text" className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
            </div>
            <div>
              <label className="block text-sm text-neutral-600 mb-2">Email</label>
              <input type="email" className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-neutral-600 mb-2">Company</label>
            <input type="text" className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
          </div>
          <div>
            <label className="block text-sm text-neutral-600 mb-2">Message</label>
            <textarea rows="6" className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"></textarea>
          </div>
          <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-sm tracking-wide hover:opacity-90 transition-opacity">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
