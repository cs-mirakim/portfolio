export default function Home() {
  return (
    <main
      id="main-content"
      className="relative min-h-[100dvh] flex flex-col justify-between px-6 sm:px-12 md:px-20 lg:px-28 py-10 sm:py-14 md:py-16 max-w-5xl mx-auto z-10 selection:bg-amber-500/20 selection:text-amber-200"
    >
      {/* 1. Masthead Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-zinc-800/50 pb-6 scene-enter">
        <div className="flex items-center gap-3">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500/90 subtle-pulse"
            aria-hidden="true"
          />
          <span className="text-[11px] tracking-[0.25em] uppercase text-zinc-400 font-medium">
            Amir Hakim
          </span>
        </div>
        <div className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-mono">
          Scene 01 / Prologue
        </div>
      </header>

      {/* 2. Hero Section: The Introspective Monologue */}
      <section
        aria-label="Opening Monologue"
        className="relative z-10 my-auto py-16 sm:py-24 md:py-28 scene-enter"
      >
        <div className="max-w-2xl space-y-10 sm:space-y-12">
          {/* Identity Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-zinc-100 font-[family-name:var(--font-newsreader)]">
              Amir Hakim
            </h1>
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-mono">
              Self-reflection in progress
            </p>
          </div>

          {/* The Monologue: Exact quote preserved verbatim */}
          <article className="space-y-8 font-[family-name:var(--font-newsreader)] text-lg sm:text-xl md:text-[1.35rem] leading-relaxed font-normal text-zinc-300">
            <p className="text-xl sm:text-2xl md:text-[1.65rem] text-zinc-100 font-normal leading-snug italic">
              &ldquo;A clueless guy, trapped somewhere between the person he used to be and the person he has yet to become.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              While I was busy being haunted by the past, the world kept moving. Faster, louder and completely out of my control.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              For a long time, I thought I was falling behind. I thought I had to catch up with everyone else.
            </p>

            <div className="py-2 pl-5 sm:pl-6 border-l border-amber-500/40 space-y-3 my-4">
              <p className="text-zinc-400 text-base sm:text-lg">
                Then I realized...
              </p>
              <p className="text-zinc-100 text-xl sm:text-2xl font-normal leading-snug">
                The world was never revolving around me. It was moving with or without me.
              </p>
            </div>

            <p className="text-zinc-300 pt-2 text-base sm:text-lg md:text-xl leading-relaxed">
              So now, instead of trying to catch up with the world, I’m learning to let go, take my chances and not be so afraid of making mistakes. I’m learning to become someone who can keep moving forward, one day, one mistake and one small improvement at a time.&rdquo;
            </p>
          </article>
        </div>
      </section>

      {/* 3. Mysterious Obscured Horizon Section */}
      <footer className="relative z-10 pt-10 pb-4 scene-enter">
        <div className="relative overflow-hidden rounded-md border border-zinc-800/40 bg-zinc-950/40 p-6 sm:p-8">
          {/* Veiled upcoming outline behind blur */}
          <div
            className="absolute inset-0 select-none pointer-events-none p-6 sm:p-8 opacity-20 filter blur-sm space-y-3 font-mono text-[11px] text-zinc-400"
            aria-hidden="true"
          >
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span>02 // SELECTED EXPLORATIONS</span>
              <span>IN ARCHIVE</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span>03 // NOTES ON DISCIPLINE & GROWTH</span>
              <span>WRITING</span>
            </div>
          </div>

          {/* Frosted atmospheric gradient veil */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/90 to-[#08080a]/60 backdrop-blur-[2px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Revealed horizon phrase */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span
                className="w-1.5 h-1.5 rounded-full bg-amber-500/60"
                aria-hidden="true"
              />
              <span className="text-zinc-300 font-mono tracking-widest text-[11px] lowercase">
                the rest is still being written.
              </span>
            </div>

            <div className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase">
              Act II pending
            </div>
          </div>
        </div>

        {/* Colophon */}
        <div className="mt-8 pt-4 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-zinc-500 font-mono gap-2">
          <span>Kuala Lumpur // 2026</span>
          <span>Crafted with restraint</span>
        </div>
      </footer>
    </main>
  );
}
