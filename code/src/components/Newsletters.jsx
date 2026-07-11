import React from 'react'

const Newsletters = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-7 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Newsletter Signup
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Stay connected to our latest impact.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Receive project updates, volunteer invitations, and stories of
                hope delivered to your inbox.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <label
                className="mb-2 block text-sm font-medium text-slate-700"
                htmlFor="email"
              >
                Email address
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-blue-500"
                />
                <button className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Newsletters