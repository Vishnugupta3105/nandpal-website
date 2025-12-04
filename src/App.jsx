const heroMedia = {
  logo: '/assets/logo-nandpal.png',
  hero: '/assets/hero-welcome.jpeg',
}

const screenshots = [
  {
    key: 'home',
    title: 'Welcome to Nandpal',
    subtitle: 'Soft, welcoming entry screen for kids and families.',
    src: '/assets/screen-home.jpeg',
  },
  {
    key: 'moral-walk',
    title: 'Daily Moral Walk',
    subtitle: 'Beautiful cards with simple missions like sharing food and helping parents.',
    src: '/assets/screen-moral-walk.jpeg',
  },
  {
    key: 'kanha-chat',
    title: 'My Friend Kanha',
    subtitle: 'Chat interface where Kanha replies with wisdom and warmth.',
    src: '/assets/screen-kanha-chat.jpeg',
  },
  {
    key: 'chanting',
    title: 'Chanting Counter',
    subtitle: 'Mantra counter with Radhe Radhe and other chants plus leaderboard.',
    src: '/assets/screen-chanting.jpeg',
  },
  {
    key: 'village',
    title: 'Village Nandgaon',
    subtitle: 'Colorful village view showing structures and blessing points.',
    src: '/assets/screen-village.jpeg',
  },
]

const demoVideos = [
  {
    key: 'moral-walk-preview',
    title: '8-second Moral Walk preview',
    subtitle: 'A quick glimpse of how daily missions feel inside the app.',
    src: '/assets/moral-walk-demo.mp4',
  },
]

const features = [
  {
    name: 'Daily Moral Walk',
    icon: '🚶🏻‍♀️',
    tagline: 'Small actions, big character.',
    description:
      'Kids receive simple daily tasks like touching parents\' feet, watering plants, and helping others to build virtue step by step.',
  },
  {
    name: 'Chat with Kanha',
    icon: '💬',
    tagline: 'A divine friend in your pocket.',
    description:
      'A warm Krishna companion that talks like a friend and shares wisdom from the Bhagavad Gita in simple language.',
  },
  {
    name: 'Chanting Counter',
    icon: '🔔',
    tagline: 'Tap, chant, and feel calm.',
    description:
      'Beautiful chanting experience with Radhe Radhe and other mantras, plus a leaderboard to keep kids joyfully engaged.',
  },
  {
    name: 'Village Nandgaon',
    icon: '🏡',
    tagline: 'Build your blessing village.',
    description:
      'Earn blessing points from good deeds and chanting, then build temples, cow shelters, trees, and more in your own village.',
  },
]

const journeys = [
  {
    title: 'Daily Missions for Kinder Hearts',
    description:
      'Short, practical tasks like sharing food, helping parents, or caring for animals turn values into fun daily habits.',
  },
  {
    title: 'Gentle Guidance from Kanha',
    description:
      'Kids can ask spiritual or life questions and receive supportive, age-appropriate guidance rooted in Bhakti and wisdom.',
  },
  {
    title: 'Gamified Bhakti, Zero Pressure',
    description:
      'Streaks, blessing points, and a cozy village keep kids motivated while still feeling peaceful, safe, and loved.',
  },
]

function App() {
  const playStoreUrl =
    'https://play.google.com/store/apps/details?id=com.nandpal.app'

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-amber-50 to-rose-50 text-slate-900">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-12 pt-5 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-slate-900/5">
              <img
                src={heroMedia.logo}
                alt="Nandpal app icon"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-semibold tracking-tight text-slate-900">
                Nandpal
              </div>
              <div className="text-xs text-slate-500">Your Divine Friend App</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#screens" className="hover:text-slate-900">
              How it feels
            </a>
            <a href="#gallery" className="hover:text-slate-900">
              App preview
            </a>
            <a href="#download" className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-amber-50 shadow-sm hover:bg-slate-800">
              Get the app
            </a>
          </nav>
        </header>

        <main className="mt-8 flex-1 space-y-16">
          <section className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-amber-700 shadow-sm ring-1 ring-amber-100">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[10px] text-white">✨</span>
                <span>For kids, teens, and families on a moral journey</span>
              </div>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Welcome to
                <span className="block text-amber-600">your divine friend</span>
              </h1>
              <p className="max-w-xl text-sm text-slate-600 sm:text-base">
                Nandpal gently guides you or your child with loving daily tasks, Krishna wisdom, and joyful chanting so that
                spirituality feels playful, not heavy.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-[11px] text-emerald-600 ring-1 ring-emerald-200">✓</span>
                  <span>Daily moral missions that fit real life in Indian homes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-[11px] text-emerald-600 ring-1 ring-emerald-200">✓</span>
                  <span>Friendly Krishna chatbot inspired by the wisdom of the Bhagavad Gita</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-[11px] text-emerald-600 ring-1 ring-emerald-200">✓</span>
                  <span>Chanting, blessing points, and a colorful village to build</span>
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-50"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-lg">▶</span>
                  <span>Get Nandpal on Google Play</span>
                </a>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-slate-800 shadow-sm ring-1 ring-slate-100 hover:bg-white"
                >
                  <span className="h-6 w-6 rounded-full bg-amber-100 text-xs text-amber-700 flex items-center justify-center">❔</span>
                  <span>See how Nandpal works</span>
                </button>
              </div>
              <p className="text-[11px] text-slate-500">
                Currently in closed testing. Production launch soon on Google Play.
              </p>
            </div>

            <div className="relative justify-self-center md:justify-self-end">
              <div className="pointer-events-none absolute -inset-8 -z-10 bg-gradient-to-tr from-sky-300/40 via-amber-200/70 to-rose-300/50 opacity-80 blur-3xl" />
              <div className="mx-auto w-full max-w-xs rounded-[28px] bg-white/80 p-3 shadow-soft backdrop-blur sm:max-w-sm">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/70 bg-gradient-to-b from-amber-50 via-amber-50 to-rose-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.28)]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-sky-500 via-sky-600 to-indigo-600 text-xl text-white">
                        <img
                          src={heroMedia.logo}
                          alt="Nandpal app icon"
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="leading-tight">
                        <div className="text-xs font-semibold text-slate-900">Welcome to Nandpal</div>
                        <div className="text-[11px] text-slate-500">Preview from the real app</div>
                      </div>
                    </div>
                    <span className="rounded-full bg-white/60 px-2 py-1 text-[10px] font-medium text-amber-700">
                      Live preview
                    </span>
                  </div>

                  <div className="mx-auto w-full max-w-[230px] overflow-hidden rounded-2xl bg-slate-900/5 ring-1 ring-white/60 aspect-[9/16]">
                    <img
                      src={heroMedia.hero}
                      alt="Nandpal welcome screen"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="space-y-5">
            <div className="max-w-2xl space-y-2">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Four ways Nandpal walks with you every day
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Designed with Indian families in mind, each feature makes values, bhakti, and mindfulness feel natural in daily life.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex h-full flex-col rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-400 via-orange-400 to-rose-400 text-lg">
                    <span>{feature.icon}</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-900">{feature.name}</h3>
                    <p className="text-xs font-medium text-amber-700">{feature.tagline}</p>
                    <p className="pt-1 text-xs text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="screens"
            className="grid gap-8 rounded-3xl bg-gradient-to-r from-amber-50 via-rose-50 to-sky-50 px-6 py-8 shadow-soft ring-1 ring-white/60 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center"
          >
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Built for gentle discipline, not fear
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Every part of Nandpal is crafted so that children feel encouraged, seen, and loved. No harsh streak breaks, no guilt,
                only small steps forward.
              </p>
              <div className="space-y-3">
                {journeys.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-gradient-to-r from-amber-200/70 via-amber-100/80 to-rose-100/80 p-4 text-sm text-slate-800 shadow-sm ring-1 ring-white/50 transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-700">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-3 rounded-3xl bg-white/90 p-4 shadow-soft">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-[11px] text-amber-800">
                  <span className="h-5 w-5 rounded-full bg-amber-500/90 text-[11px] text-amber-50 flex items-center justify-center">✨</span>
                  <span>Chat with Kanha</span>
                </div>
                <p className="text-xs text-slate-700">
                  “Namaste, mere mitra. How can I help you today?”
                </p>
                <p className="rounded-2xl bg-slate-900 px-3 py-2 text-[11px] text-slate-50">
                  Bhagwan bhakti sirf badaon ke liye nahi hoti. Dil se ki gayi chhoti si seva bhi Kanha ko bahut priya lagti hai.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="space-y-2 rounded-3xl bg-gradient-to-b from-sky-900 to-indigo-900 p-4 text-sky-50 shadow-soft">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-medium">Today's Mission</span>
                    <span className="rounded-full bg-sky-800/70 px-2 py-0.5 text-[10px]">4 task streak</span>
                  </div>
                  <div className="rounded-2xl bg-sky-800/80 p-3 text-[11px]">
                    Share your lunch with a friend at school today.
                  </div>
                </div>

                <div className="space-y-2 rounded-3xl bg-gradient-to-b from-emerald-100 via-emerald-50 to-amber-100 p-4 text-[11px] text-slate-800 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Your Nandgaon Village</span>
                    <span className="rounded-full bg-white/70 px-2 py-0.5 text-[10px] text-emerald-700">
                      Level 4
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-emerald-700">31 blessing points</div>
                      <div className="text-[10px] text-slate-600">Temple, cow shelter, and tulsi grove unlocked.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="gallery"
            className="space-y-8 rounded-3xl bg-white/80 px-6 py-8 shadow-soft ring-1 ring-white/70"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl space-y-2">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  See Nandpal in action
                </h2>
                <p className="text-sm text-slate-600 sm:text-base">
                  Real screenshots from the Daily Moral Walk, Kanha chat, chanting, and Nandgaon village for you to make you fell how warm and playful the app is.
                </p>
              </div>
              <div className="text-[11px] text-slate-500">
                My Friend Kanha chatbot is trained on wisdom of Shree Bhagavad Gita which provide a friend with divine knowladge.
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
              <div className="mx-auto w-full max-w-[340px] space-y-3">
                <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-soft ring-1 ring-slate-900/40">
                  <video
                    className="aspect-[9/16] h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={screenshots[1].src}
                  >
                    <source src={demoVideos[0].src} type="video/mp4" />
                  </video>
                </div>
                <div className="space-y-1 text-[11px] text-slate-700">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[10px] font-medium text-amber-800">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[9px] text-amber-50">
                      ✨
                    </span>
                    <span>8-second Moral Walk preview</span>
                  </div>
                  <p>
                    Watch how a simple mission like <span className="font-medium">“Share your food with friends”</span> looks inside
                    the real Nandpal app.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {screenshots.slice(0, 4).map((shot) => (
                  <div
                    key={shot.key}
                    className="flex flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg sm:mx-auto sm:max-w-[210px] lg:max-w-none"
                  >
                    <div className="relative w-full overflow-hidden bg-slate-100 aspect-[9/16]">
                      <img
                        src={shot.src}
                        alt={shot.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent p-3 text-[10px] text-slate-50">
                        <div className="font-medium">{shot.title}</div>
                        <div className="mt-0.5 line-clamp-2 text-[9px] text-slate-100/80">
                          {shot.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="download" className="rounded-3xl bg-slate-900 px-6 py-10 text-center text-slate-50 shadow-soft">
            <div className="mx-auto max-w-2xl space-y-4">
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to walk with Nandpal?
              </h2>
              <p className="text-sm text-slate-300 sm:text-base">
                Install the app, set up your first daily moral walk, and meet your new divine friend. Perfect for kids, teens, and
                parents who want gentle, bhakti-filled guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-md transition hover:bg-amber-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/10 text-lg">▶</span>
                  <span>Open on Google Play</span>
                </a>
                <div className="flex flex-col items-start justify-center text-[11px] text-slate-300 sm:flex-row sm:items-center sm:gap-2">
                  <span>Do share the app to your friends & family</span>
                  <span className="text-slate-400">
                    Nandpal your divine Friend is allway with you.
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/70 pt-4 text-[11px] text-slate-500 sm:flex-row">
          <div>
            &copy; {new Date().getFullYear()} Nandpal. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="font-medium text-slate-700">Shree Radha Rani</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
