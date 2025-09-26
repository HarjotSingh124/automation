import React from 'react'

// AxeAutomation-clone.jsx
// Single-file React component (Tailwind CSS) that replicates the structure
// Replace placeholder images and links with your assets.

export default function AxeAutomationClone() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAV */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">AA</div>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#services" className="hover:underline">SERVICES</a>
              <a href="#results" className="hover:underline">RESULTS</a>
              <a href="#about" className="hover:underline">ABOUT</a>
              <a href="#resources" className="hover:underline">RESOURCES</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="#book" className="px-4 py-2 border rounded-md text-sm">Book A Call</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm uppercase text-indigo-600 font-semibold"># The #1 AI and Automation Agency</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">We combine artificial intelligence with automation to create incredibly efficient processes</h1>
            <p className="mt-6 text-gray-700 leading-relaxed">Fully custom and done-for-you. We replace manual work for massive gains in bandwidth, quality, speed and customer experience.</p>

            <div className="mt-8 flex gap-4">
              <a href="#book" className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium">Free Consultation</a>
              <a href="#examples" className="inline-block px-6 py-3 rounded-md border">See Examples</a>
            </div>

            <div className="mt-8 flex gap-6 items-center text-sm text-gray-500">
              <div>
                <div className="text-3xl font-bold">50,000+</div>
                <div>Hours of manual work replaced</div>
              </div>
              <div className="h-0.5 w-24 bg-gray-200" />
              <div className="pl-2">Trusted by teams across industries</div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* Placeholder hero image */}
            <div className="w-full h-64 md:h-80 bg-gradient-to-tr from-gray-200 to-white rounded-lg shadow flex items-center justify-center">Replace with hero image</div>
          </div>
        </div>
      </section>

      {/* PROCESS / HOW IT WORKS */}
      <section id="services" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">How our AI and Automation agency works</h2>
          <p className="mt-3 text-gray-600">We get under the hood of your business and find opportunities to replace the most manual, repetitive and expensive bottlenecks with AI-powered, automated processes.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 'STEP 1', title: 'We map out your processes', desc: 'We’ll create a visual map of all your systems, manual tasks and apps.' },
              { step: 'STEP 2', title: 'We find areas to add AI and automate', desc: 'We audit your workflows to pinpoint opportunities with the highest ROI.' },
              { step: 'STEP 3', title: 'We build and test', desc: 'We use custom code, AI tools, Zapier, Make.com and your tech stack.' },
              { step: 'STEP 4', title: 'We manage and iterate', desc: 'Every client we work with grows, so there’s always new things to automate.' }
            ].map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="text-xs font-semibold text-indigo-600">{s.step}</div>
                <h3 className="mt-2 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">The endless use cases of AI and Automation</h2>
          <p className="mt-3 text-gray-600">Our clients make their employees 10X more efficient by taking tedious, repetitive tasks off their plate. We are industry agnostic.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold">Sales and marketing automation</h4>
              <p className="mt-2 text-sm text-gray-600">Content creation, full-funnel automation, lead routing, CRM, outbound, payments, contracts and much more.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold">Image, voice, text recognition and analysis</h4>
              <p className="mt-2 text-sm text-gray-600">Analyze and parse documents, biometrics, emotion, facial, products, videos and more.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold">Predictive analytics</h4>
              <p className="mt-2 text-sm text-gray-600">Data-driven decision making through forecasting and planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS / TECH */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-lg font-semibold">AI and Automation technologies we are experts in</h3>
          <p className="mt-2 text-sm text-gray-600">We’ve built complete processes using every one of these tools.</p>

          <div className="mt-6 grid grid-cols-3 md:grid-cols-8 gap-4 items-center">
            {new Array(8).fill(0).map((_, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-md">Logo {i+1}</div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="examples" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Examples of workflows we’ve automated</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Onboarding','Content brief process','Project management','Proposal creation','Sales process','Ads ROI Analysis'].map((t, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold">{t}</h4>
                <p className="mt-2 text-sm text-gray-600">Short description goes here. Replace with Loom video embed or screenshots.</p>
                <a className="mt-4 inline-block text-sm text-indigo-600" href="#">Example</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-12 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold">It’s like hiring a Chief AI and Automation Officer</h3>
          <p className="mt-2 text-gray-700">For a fraction of the cost — stitch your tools together, cut out human error and automate repetitive work.</p>
          <div className="mt-6">
            <a href="#" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md">Free Consultation</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Our clients achieve operational excellence</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              quote: 'Our company was struggling to keep up with the demands of our growing business until we found this automation agency.',
              name: 'Sarah M.', role: 'Director, Finance'
            },{
              quote: 'I was skeptical at first about using an automation agency, but I am so glad I did.',
              name: 'John D.', role: 'CEO'
            },{
              quote: "If you're looking for a way to scale your business without sacrificing your personal life, then this automation agency is the way to go.",
              name: 'Amanda L.', role: 'VP, Operations'
            }].map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <div className="text-yellow-400">★★★★★</div>
                <p className="mt-3 text-gray-700">"{t.quote}"</p>
                <div className="mt-4 text-sm text-gray-600">{t.name} — {t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <div className="font-bold">Axe Automation — Clone</div>
            <p className="text-sm text-gray-600 mt-2">Copyright Axe Automation ©2025</p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-sm">Privacy Policy</a>
            <a href="#" className="text-sm">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

/*
Instructions:
- This component uses Tailwind CSS classes. To use in Next.js or CRA, install Tailwind and configure.
- Replace placeholder images with your assets. Use <img src="/path" alt="" /> where needed.
- For 'Example' loom videos, embed using iframe.
- Add analytics, SEO meta tags and a proper contact form (e.g., Netlify forms, Formspree, or custom backend).
- Deploy to Vercel or Netlify for easy hosting.

Suggested next steps to match the original site exactly:
1. Extract exact fonts and colors from the live site using browser devtools.
2. Download or re-create SVG icons and logos; place in /public/logos.
3. Implement responsive tweaks and animations (simple translate/opacity transitions).
4. Add structured data (JSON-LD) for LocalBusiness / Organization if needed.
5. Add A/B testing for CTA texts and hero imagery.

*/