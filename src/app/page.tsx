export default function Home() {
  return (
    <main
      id="main-content"
      className="relative min-h-[100dvh] flex flex-col justify-between px-6 sm:px-12 md:px-20 lg:px-28 py-10 sm:py-14 md:py-16 max-w-5xl mx-auto z-10 selection:bg-blue-600/15 selection:text-blue-950"
    >
      {/* 1. Masthead Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-slate-200/80 pb-6 scene-enter">
        <div className="flex items-center gap-3">
          <span
            className="inline-block w-2 h-2 rounded-full bg-blue-600 cold-pulse shadow-[0_0_12px_rgba(37,99,235,0.45)]"
            aria-hidden="true"
          />
          <span className="text-[11px] tracking-[0.28em] uppercase text-slate-700 font-semibold font-mono">
            Amir Hakim
          </span>
        </div>
        <div className="text-[10px] tracking-[0.25em] uppercase text-slate-600 font-mono">
          Scene 01 // The Prologue
        </div>
      </header>

      {/* 2. Hero Section: Expansive Distinct Name & The Introspective Monologue */}
      <section
        aria-label="Opening Monologue"
        className="relative z-10 my-auto py-14 sm:py-20 md:py-24 scene-enter"
      >
        <div className="max-w-3xl space-y-12 sm:space-y-14">
          {/* Distinct, Wide Name Presentation */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-[10px] font-mono uppercase tracking-[0.22em]">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Chapter I : Self-Reflection
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-light tracking-[0.22em] sm:tracking-[0.28em] uppercase text-slate-950 font-[family-name:var(--font-newsreader)] leading-none">
              Amir Hakim
            </h1>

            <div className="w-full h-[1px] bg-gradient-to-r from-blue-600/40 via-slate-200 to-transparent" />
          </div>

          {/* The Monologue: Exact quote preserved verbatim below the name */}
          <article className="space-y-8 font-[family-name:var(--font-newsreader)] text-lg sm:text-xl md:text-[1.32rem] leading-relaxed font-normal text-slate-700">
            <p className="text-xl sm:text-2xl md:text-[1.65rem] text-slate-950 font-normal leading-snug italic">
              &ldquo;A clueless guy, trapped somewhere between the person he used to be and the person he has yet to become.
            </p>

            <p className="text-slate-600 leading-relaxed">
              While I was busy being haunted by the past, the world kept moving. Faster, louder and completely out of my control.
            </p>

            <p className="text-slate-600 leading-relaxed">
              For a long time, I thought I was falling behind. I thought I had to catch up with everyone else.
            </p>

            {/* Turning Point */}
            <div className="py-3 pl-5 sm:pl-7 border-l-2 border-blue-600 bg-blue-50/50 rounded-r-md space-y-2 my-6">
              <p className="text-blue-900/80 text-sm sm:text-base font-mono tracking-wider uppercase font-medium">
                Then I realized...
              </p>
              <p className="text-slate-950 text-xl sm:text-2xl font-normal leading-snug">
                The world was never revolving around me. It was moving with or without me.
              </p>
            </div>

            <p className="text-slate-700 pt-2 text-base sm:text-lg md:text-xl leading-relaxed">
              So now, instead of trying to catch up with the world, I’m learning to let go, take my chances and not be so afraid of making mistakes. I’m learning to become someone who can keep moving forward, one day, one mistake and one small improvement at a time.&rdquo;
            </p>
          </article>
        </div>
      </section>

      {/* 3. Dramatic & Cinematic Blurry Reveal Section */}
      <footer className="relative z-10 pt-8 pb-4 scene-enter">
        <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white/70 shadow-[0_4px_24px_rgba(15,23,42,0.04)] backdrop-blur-md p-7 sm:p-10">
          {/* Veiled upcoming chapters obscured in the deep background fog */}
          <div
            className="absolute inset-0 select-none pointer-events-none p-7 sm:p-10 opacity-30 filter blur-[6px] space-y-4 font-mono text-xs text-slate-600"
            aria-hidden="true"
          >
            <div className="flex justify-between border-b border-slate-200 pb-2.5">
              <span className="font-semibold text-slate-900">02 // ARTIFACTS & EXPERIMENTS</span>
              <span className="text-blue-600">STAGED IN REPO</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2.5">
              <span className="font-semibold text-slate-900">03 // ESSAYS: TIME, MISTAKES, FORWARD MOMENTUM</span>
              <span className="text-slate-400">UNEDITED</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2.5">
              <span className="font-semibold text-slate-900">04 // SYSTEMS & ARCHITECTURE</span>
              <span className="text-slate-400">IN CUBATION</span>
            </div>
          </div>

          {/* Frosted cold matte atmospheric gradient veil */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-50/95 via-slate-50/80 to-transparent backdrop-blur-[3px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Dramatic, High-Impact Foreground Reveal Statement */}
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
              <p className="text-lg sm:text-xl md:text-2xl font-light text-slate-950 font-[family-name:var(--font-newsreader)] tracking-wide leading-snug">
                &ldquo;The unwritten is already breathing beneath the frost.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-mono leading-relaxed">
                What lies ahead is not just a showcase of work. It is the record of someone learning to move with the world again.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200/80 text-[11px] font-mono text-slate-600">
              <span className="tracking-widest uppercase text-blue-800">
                [ Transmission paused : chapters in formation ]
              </span>
              <span className="text-slate-600">
                The story continues below
              </span>
            </div>
          </div>
        </div>

        {/* Colophon */}
        <div className="mt-8 pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-slate-600 font-mono gap-2">
          <span>Kuala Lumpur // 2026</span>
          <span className="text-slate-600">Cold Matte & Cobalt Restraint</span>
        </div>
      </footer>
    </main>
  );
}
