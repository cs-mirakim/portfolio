export default function Home() {
  return (
    <main
      id="main-content"
      className="relative min-h-[100dvh] flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-10 sm:py-14 md:py-20 max-w-6xl mx-auto z-10 selection:bg-blue-600/15 selection:text-blue-950"
    >
      {/* 1. Masthead Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-slate-200/80 pb-6 scene-enter">
        <div className="flex items-center gap-2.5">
          <span
            className="inline-block w-2 h-2 rounded-full bg-blue-600 cold-pulse shadow-[0_0_10px_rgba(37,99,235,0.4)]"
            aria-hidden="true"
          />
          <span className="text-[11px] tracking-[0.22em] uppercase text-slate-700 font-medium font-mono">
            Prologue
          </span>
        </div>
        <div className="text-[11px] tracking-[0.2em] uppercase text-slate-600 font-mono">
          2026
        </div>
      </header>

      {/* 2. Hero Section: Monumental Title-Case Name & Direct Monologue */}
      <section
        aria-label="Opening Monologue"
        className="relative z-10 my-auto py-12 sm:py-16 md:py-24 scene-enter"
      >
        {/* Monumental Name in Title Case */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] font-light tracking-[-0.035em] text-slate-950 font-[family-name:var(--font-newsreader)] leading-[0.98] sm:leading-[0.92]">
            Amir Hakim
          </h1>
          <div className="h-[2px] w-16 sm:w-24 bg-blue-600" />
        </div>

        {/* The Monologue: Exact quote placed directly beneath the name */}
        <div className="mt-10 sm:mt-14 md:mt-16 max-w-2xl lg:max-w-3xl space-y-7 sm:space-y-9">
          <article className="space-y-7 sm:space-y-8 font-[family-name:var(--font-newsreader)] text-lg sm:text-xl md:text-[1.32rem] leading-relaxed font-normal text-slate-700">
            <p className="text-2xl sm:text-3xl md:text-[2.1rem] text-slate-950 font-normal leading-snug italic">
              &ldquo;A clueless guy, trapped somewhere between the person he used to be and the person he has yet to become.
            </p>

            <p className="text-slate-600 leading-relaxed">
              While I was busy being haunted by the past, the world kept moving. Faster, louder and completely out of my control.
            </p>

            <p className="text-slate-600 leading-relaxed">
              For a long time, I thought I was falling behind. I thought I had to catch up with everyone else.
            </p>

            {/* Turning Point */}
            <div className="py-3 pl-5 sm:pl-7 border-l-2 border-blue-600 bg-blue-50/40 rounded-r-md space-y-2 my-5">
              <p className="text-blue-900/80 text-sm sm:text-base font-mono uppercase tracking-wider font-medium">
                Then I realized...
              </p>
              <p className="text-slate-950 text-xl sm:text-2xl font-normal leading-snug">
                The world was never revolving around me. It was moving with or without me.
              </p>
            </div>

            <p className="text-slate-700 pt-1 text-base sm:text-lg md:text-xl leading-relaxed">
              So now, instead of trying to catch up with the world, I’m learning to let go, take my chances and not be so afraid of making mistakes. I’m learning to become someone who can keep moving forward, one day, one mistake and one small improvement at a time.&rdquo;
            </p>
          </article>
        </div>

        {/* 3. Dramatic & Cinematic Blurry Reveal Section */}
        <div className="relative mt-16 sm:mt-24 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/60 shadow-[0_4px_30px_rgba(15,23,42,0.03)] backdrop-blur-xl p-8 sm:p-12 md:p-14">
          {/* Subtle cold blue ambient light radiating from behind */}
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Veiled upcoming chapters obscured in the deep background fog */}
          <div
            className="absolute inset-0 select-none pointer-events-none p-8 sm:p-12 md:p-14 opacity-20 filter blur-[5px] space-y-4 font-mono text-xs text-slate-700"
            aria-hidden="true"
          >
            <div className="flex justify-between border-b border-slate-300 pb-2">
              <span className="font-semibold text-slate-900">ACT II // SELECTED ARTIFACTS & EXPERIMENTS</span>
              <span className="text-blue-700">IN COMPILE</span>
            </div>
            <div className="flex justify-between border-b border-slate-300 pb-2">
              <span className="font-semibold text-slate-900">ACT III // ESSAYS ON REDEMPTION & TIME</span>
              <span>WRITING</span>
            </div>
          </div>

          {/* Frosted cold matte atmospheric gradient veil */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-50/95 via-slate-50/80 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Dramatic Reveal Statement */}
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <span className="text-[11px] font-mono tracking-[0.25em] text-blue-700 uppercase font-semibold">
                Act II // Veiled In The Fog
              </span>
            </div>

            <div className="max-w-2xl space-y-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-950 font-[family-name:var(--font-newsreader)] tracking-tight leading-snug">
                &ldquo;The rest of the story is already breathing beneath the frost.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-mono leading-relaxed pt-1">
                What lies ahead is not just a showcase of work. It is the record of someone learning to move with the world again.
              </p>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200/80 text-[11px] font-mono text-slate-600">
              <span className="tracking-widest uppercase text-blue-700 font-medium">
                [ The unwritten chapters are being forged ]
              </span>
              <span className="text-slate-600">
                To be continued
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Minimalist Colophon */}
      <footer className="relative z-10 pt-8 pb-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono text-slate-600">
        <span>Kuala Lumpur</span>
        <span>Amir Hakim &copy; 2026</span>
      </footer>
    </main>
  );
}
