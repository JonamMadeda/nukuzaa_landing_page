import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DatabaseZap,
  Download,
  Menu,
  X,
  Zap,
  ShieldCheck,
  Cpu,
  Cloud,
  Link2,
  FolderKanban,
  Captions,
  FileDown,
  ClipboardPaste,
  BookOpenText,
  Copy,
  Check,
  RefreshCw,
  HardDrive,
  Search,
  Play,
  FileText,
  AlignLeft,
  Timer,
  Star,
  Monitor,
  Package,
  Disc3,
  ChevronRight,
  Folder,
  CircleCheck,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

function GithubIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

const GITHUB_URL = 'https://github.com/JonamMadeda/nukuzaa';
const DOWNLOAD_URL = 'https://github.com/JonamMadeda/nukuzaa/releases';
const VERSION = 'v0.4.0';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const PARAGRAPH_TEXT = `Neural networks learn by adjusting weights across layers. In this video, we break down backpropagation step by step — how gradients flow backward, why learning rates matter, and how transformers scaled this idea to billions of parameters. By the end, you'll be able to read any architecture diagram and understand exactly what each block is doing, from embeddings to attention to the final softmax layer.`;

const TIMESTAMP_LINES = [
  { t: '00:00', text: 'Intro — why transcripts beat re-watching 2-hour videos' },
  { t: '00:14', text: 'How backpropagation actually works, in plain English' },
  { t: '02:31', text: 'Learning rates, gradients, and why models diverge' },
  { t: '06:45', text: 'From MLPs to transformers: what scaled and why' },
  { t: '11:20', text: 'Reading architecture diagrams like a researcher' },
  { t: '15:02', text: 'Q&A + cheat-sheet recap for offline review' },
];

const FOLDERS = [
  { name: 'PhD Research', count: 24, pct: 82, color: 'bg-yellow-400' },
  { name: 'AI Tutorials', count: 18, pct: 64, color: 'bg-cyan-500' },
  { name: 'Podcasts', count: 12, pct: 42, color: 'bg-amber-400' },
  { name: 'Dev Talks', count: 9, pct: 30, color: 'bg-emerald-500' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav aria-label="Main navigation" className="fixed top-0 inset-x-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Nukuzaa home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#FACC15] to-[#EAB308] shadow-[0_0_20px_rgba(250,204,21,0.35)]">
            <DatabaseZap className="text-zinc-900" size={18} aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight text-zinc-900">Nukuzaa</span>
          <span className="hidden rounded-full border border-cyan-600/25 bg-cyan-50 px-2 py-0.5 text-[11px] font-semibold text-cyan-700 sm:inline-block">
            {VERSION}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {[
            ['Features', '#features'],
            ['AI', '#ai'],
            ['How It Works', '#how'],
            ['Reader', '#reader'],
            ['Download', '#download'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="View source on GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-black/[0.03] text-zinc-700 transition-all hover:bg-black/[0.06] hover:text-zinc-900"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="#download"
            className="flex items-center gap-2 rounded-lg bg-[#FACC15] px-4 py-2 text-sm font-semibold text-zinc-900 shadow-[0_0_25px_rgba(250,204,21,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#EAB308]"
          >
            <Download size={16} aria-hidden="true" />
            Download for Windows
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-black/[0.03] text-zinc-900 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-white/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {[
              ['Features', '#features'],
              ['AI', '#ai'],
              ['How It Works', '#how'],
              ['Reader', '#reader'],
              ['Download', '#download'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-black/5 hover:text-zinc-900"
              >
                {label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#FACC15] px-4 py-2.5 text-sm font-semibold text-zinc-900"
            >
              <Download size={16} /> Download for Windows
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroMock() {
  return (
    <div className="relative mx-auto mt-14 w-full max-w-5xl">
      {/* glow */}
      <div aria-hidden="true" className="absolute -inset-8 rounded-[32px] bg-gradient-to-r from-[#FACC15]/10 via-transparent to-cyan-500/10 blur-2xl" />
      <div className="glass relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_24px_70px_-20px_rgba(0,0,0,0.25)]">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-black/10 bg-gray-50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-xs font-medium text-zinc-500">Nukuzaa — Research Vault</span>
          <span className="ml-auto hidden items-center gap-1.5 rounded-full border border-emerald-600/20 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Neon synced
          </span>
        </div>

        <div className="grid md:grid-cols-[220px_1fr]">
          {/* sidebar */}
          <div className="hidden border-r border-black/10 bg-gray-50/80 p-4 md:block">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Folders</span>
              <Search size={14} className="text-zinc-400" aria-hidden="true" />
            </div>
            <div className="space-y-2.5">
              {FOLDERS.map((f) => (
                <div key={f.name} className="rounded-lg border border-black/10 bg-white p-2.5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Folder size={14} className="text-zinc-500" aria-hidden="true" />
                    <span className="truncate text-xs font-medium text-zinc-800">{f.name}</span>
                    <span className="ml-auto rounded bg-black/5 px-1.5 text-[10px] font-semibold text-zinc-600">{f.count}</span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-black/10">
                    <div className={`h-full rounded-full ${f.color}`} style={{ width: `${f.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-cyan-600/20 bg-cyan-50 p-2.5 text-[11px] text-cyan-800">
              63 transcripts • synced to cloud
            </div>
          </div>

          {/* main */}
          <div className="bg-white p-4 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex flex-1 items-center gap-2 rounded-lg border border-black/10 bg-gray-50 px-3 py-2.5">
                <Play size={14} className="shrink-0 text-yellow-600" aria-hidden="true" />
                <span className="truncate font-mono text-xs text-zinc-700">https://youtube.com/watch?v=dQw4w9WgXcQ</span>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-lg bg-[#FACC15] px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all hover:bg-[#EAB308]">
                <Zap size={15} aria-hidden="true" /> Extract
              </button>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-600/20 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
              <CircleCheck size={14} aria-hidden="true" />
              Extracting locally… 100% — No CORS errors, saved to AI Tutorials
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-black/10 bg-gray-50 p-3">
                <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-zinc-500">
                  <AlignLeft size={12} aria-hidden="true" /> Paragraph view
                </div>
                <p className="line-clamp-5 text-xs leading-relaxed text-zinc-600">
                  Neural networks learn by adjusting weights across layers. Backpropagation carries gradients backward…
                </p>
              </div>
              <div className="rounded-lg border border-cyan-600/20 bg-cyan-50/60 p-3">
                <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-cyan-700">
                  <Timer size={12} aria-hidden="true" /> Timestamp view
                </div>
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex gap-2"><span className="text-cyan-700">[00:00]</span><span className="truncate text-zinc-600">Intro — why transcripts win</span></div>
                  <div className="flex gap-2 rounded bg-white px-1 py-0.5 shadow-sm"><span className="text-cyan-700">[02:31]</span><span className="truncate text-zinc-800">Learning rates & divergence</span></div>
                  <div className="flex gap-2"><span className="text-cyan-700">[06:45]</span><span className="truncate text-zinc-600">MLPs to transformers</span></div>
                </div>
              </div>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-yellow-500/30 bg-yellow-50/70 p-3">
                <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-yellow-700">
                  <Sparkles size={12} aria-hidden="true" /> AI Summary — TL;DR
                </div>
                <p className="text-xs leading-relaxed text-zinc-700">
                  Backprop carries gradients backward through each layer; learning rates decide step size…
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {['Key points', 'Takeaways', 'Quotes'].map((c) => (
                    <span key={c} className="rounded-full border border-yellow-500/30 bg-white px-2 py-0.5 text-[10px] font-medium text-yellow-700">{c}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-cyan-600/20 bg-cyan-50/60 p-3">
                <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-cyan-700">
                  <MessageCircle size={12} aria-hidden="true" /> Ask this video
                </div>
                <div className="ml-auto w-fit max-w-[90%] rounded-lg rounded-br-sm bg-zinc-900 px-2 py-1.5 text-[11px] text-white">
                  Why do models diverge?
                </div>
                <div className="mt-1.5 rounded-lg rounded-bl-sm border border-black/10 bg-white px-2 py-1.5 text-[11px] leading-relaxed text-zinc-700">
                  Learning rates too high overshoot the minimum… <span className="rounded bg-cyan-100 px-1 py-0.5 font-mono text-[10px] font-semibold text-cyan-800">[02:31]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating cards */}
      <div className="absolute -left-3 top-16 hidden items-center gap-2 rounded-xl border border-cyan-600/20 bg-white/90 px-3 py-2 shadow-lg lg:flex">
        <ShieldCheck size={16} className="text-cyan-600" aria-hidden="true" />
        <span className="text-xs font-semibold text-zinc-900">Zero CORS Limits</span>
      </div>
      <div className="absolute -right-3 bottom-16 hidden items-center gap-2 rounded-xl border border-black/10 bg-white/90 px-3 py-2 shadow-lg lg:flex">
        <FileDown size={16} className="text-emerald-600" aria-hidden="true" />
        <span className="text-xs font-semibold text-zinc-900">PDF Exported</span>
      </div>
    </div>
  );
}

function ReaderShowcase() {
  const [tab, setTab] = useState<'para' | 'time'>('para');
  const [copied, setCopied] = useState(false);
  const [activeLine, setActiveLine] = useState(1);

  const handleCopy = async () => {
    const text = tab === 'para' ? PARAGRAPH_TEXT : TIMESTAMP_LINES.map((l) => `[${l.t}] ${l.text}`).join('\n');
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* clipboard unavailable in sandbox — still show feedback */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="reader" className="relative mx-auto max-w-7xl bg-white px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="reader-heading">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center">
        <span className="inline-block rounded-full border border-cyan-600/25 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">Dual-View Reader</span>
        <h2 id="reader-heading" className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          A reader built for research.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-zinc-600">Skim clean paragraphs. Cite exact moments. Copy everything or ship a print-ready PDF.</p>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-zinc-900">Reading controls</h3>
          <div className="mt-4 space-y-2.5" role="tablist" aria-label="Reader view switcher">
            <button
              role="tab"
              aria-selected={tab === 'para'}
              onClick={() => setTab('para')}
              className={`flex w-full items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm font-medium transition-all ${tab === 'para' ? 'border-yellow-500/50 bg-yellow-50 text-zinc-900' : 'border-black/10 bg-gray-50 text-zinc-500 hover:text-zinc-900'}`}
            >
              <AlignLeft size={16} aria-hidden="true" /> Paragraph View
            </button>
            <button
              role="tab"
              aria-selected={tab === 'time'}
              onClick={() => setTab('time')}
              className={`flex w-full items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm font-medium transition-all ${tab === 'time' ? 'border-cyan-600/40 bg-cyan-50 text-zinc-900' : 'border-black/10 bg-gray-50 text-zinc-500 hover:text-zinc-900'}`}
            >
              <Timer size={16} aria-hidden="true" /> Timestamp View
              <span className="ml-auto font-mono text-[10px] text-zinc-400">MM:SS</span>
            </button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              onClick={handleCopy}
              aria-label="Copy transcript to clipboard"
              className="flex items-center justify-center gap-1.5 rounded-lg border border-black/15 bg-white px-3 py-2 text-xs font-semibold text-zinc-900 transition-all hover:bg-gray-50"
            >
              {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy All'}
            </button>
            <button aria-label="Export transcript as PDF" className="flex items-center justify-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-2 text-xs font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-zinc-800">
              <FileDown size={14} /> PDF
            </button>
          </div>
          <ul className="mt-5 space-y-2 text-xs text-zinc-600">
            {['Offline-ready reference', 'Clean print layout', 'Searchable text'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check size={14} className="text-emerald-600" aria-hidden="true" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-black/10 bg-gray-50 px-5 py-3">
            <div className="flex items-center gap-2 text-sm">
              <FileText size={15} className="text-zinc-400" aria-hidden="true" />
              <span className="font-medium text-zinc-800">Transformers Explained — 15:42</span>
            </div>
            <span className="hidden font-mono text-[11px] text-zinc-500 sm:block">1,842 words</span>
          </div>
          <div className="thin-scroll max-h-[340px] overflow-y-auto bg-white p-5" role="tabpanel">
            {tab === 'para' ? (
              <p className="text-[15px] leading-relaxed text-zinc-700">{PARAGRAPH_TEXT}</p>
            ) : (
              <div className="space-y-1">
                {TIMESTAMP_LINES.map((l, i) => (
                  <button
                    key={l.t}
                    onClick={() => setActiveLine(i)}
                    className={`flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-all ${activeLine === i ? 'border border-cyan-600/30 bg-cyan-50' : 'border border-transparent hover:bg-gray-50'}`}
                  >
                    <span className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 font-mono text-[11px] font-semibold ${activeLine === i ? 'bg-cyan-100 text-cyan-800' : 'bg-black/5 text-zinc-500'}`}>{l.t}</span>
                    <span className={`text-sm ${activeLine === i ? 'text-zinc-900' : 'text-zinc-500'}`}>{l.text}</span>
                    <Play size={13} className={`ml-auto mt-1 shrink-0 ${activeLine === i ? 'text-cyan-600' : 'text-zinc-300'}`} aria-hidden="true" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white font-sans text-zinc-600">
      <Navbar />

      {/* HERO */}
      <header className="grid-bg relative overflow-hidden bg-white pt-28 sm:pt-32">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#FACC15]/10 blur-[120px]" />
        <div aria-hidden="true" className="pointer-events-none absolute right-[10%] top-40 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
            <a href="#download" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-600 shadow-sm transition-colors hover:border-black/20">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              {VERSION} Now Available for Windows x64
              <span className="text-zinc-300">•</span>
              <span className="text-cyan-700">Auto-Update Enabled</span>
            </a>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl">
              Every video, <span className="text-gradient-red">Summarized.</span> Every question, <span className="text-gradient-cyan">Answered.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              Nukuzaa extracts full transcripts from any YouTube link in seconds — then writes a comprehensive AI summary (TL;DR, key points, takeaways, quotes) and lets you chat with the video, every answer grounded in the transcript with clickable timestamps.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#download"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FACC15] px-6 py-3 text-sm font-semibold text-zinc-900 shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#EAB308] sm:w-auto"
              >
                <Download size={17} aria-hidden="true" /> Download Free for Windows
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gray-50 sm:w-auto"
              >
                <GithubIcon size={17} /> View Source on GitHub
              </a>
            </div>
            <p className="mt-5 text-xs text-zinc-500">Free for Windows • No sign-up • &lt;10MB Tauri build • Open Source</p>
          </motion.div>

          <HeroMock />
        </main>
      </header>

      {/* METRICS */}
      <section aria-label="Key highlights" className="relative border-y border-black/10 bg-gray-50">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#FACC15] via-black/10 to-cyan-500" />
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-black/10 px-4 sm:px-6 md:grid-cols-4 md:divide-x lg:px-8">
          {[
            { icon: Zap, title: '100% Client-Side Extraction', sub: 'Local Rust engine, no server', color: 'text-yellow-600' },
            { icon: ShieldCheck, title: 'Zero CORS Limits', sub: 'Bypasses browser blocks', color: 'text-emerald-600' },
            { icon: Cpu, title: 'Tauri v2 Powered', sub: 'Lightweight & ultra-fast', color: 'text-amber-500' },
            { icon: Cloud, title: 'Neon Cloud Sync', sub: 'Folders synced everywhere', color: 'text-cyan-600' },
          ].map((m) => (
            <div key={m.title} className="flex items-center gap-3 px-2 py-5 md:px-6">
              <m.icon size={22} className={m.color} aria-hidden="true" />
              <div>
                <div className="text-sm font-semibold text-zinc-900">{m.title}</div>
                <div className="text-xs text-zinc-500">{m.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl scroll-mt-20 bg-white px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="features-heading">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center">
          <h2 id="features-heading" className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Everything you need to keep YouTube knowledge.</h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-600">Built for speed, organization, and portability.</p>
        </motion.div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {[
            { icon: Sparkles, tint: 'bg-yellow-50 text-yellow-700 border-yellow-200', title: 'AI Video Summaries', body: 'TL;DR, every key point, topics in order, actionable takeaways & notable quotes — generated per video and cached for instant re-reads.' },
            { icon: MessageCircle, tint: 'bg-cyan-50 text-cyan-700 border-cyan-100', title: 'Ask This Video', body: 'Chat with any transcript. Answers stream live, cite exact [MM:SS] moments, and link straight back to the video.' },
            { icon: Link2, tint: 'bg-yellow-50 text-yellow-700 border-yellow-200', title: 'One-Paste Import', body: 'Handles watch links, Shorts, embeds & live streams. Local execution means no IP bans, ever.' },
            { icon: FolderKanban, tint: 'bg-amber-50 text-amber-600 border-amber-100', title: 'Smart Folders', body: 'Categorize transcripts into custom collections with counts, insights & instant search.' },
            { icon: Captions, tint: 'bg-cyan-50 text-cyan-700 border-cyan-100', title: 'Paragraph vs. Timestamp Reader', body: 'Switch between clean flowing paragraphs or precise MM:SS timestamp view in one click.' },
            { icon: FileDown, tint: 'bg-emerald-50 text-emerald-600 border-emerald-100', title: 'One-Click PDF Export', body: 'Copy all content instantly or export clean, print-ready PDFs for offline reference.' },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-yellow-300 hover:shadow-[0_20px_50px_-15px_rgba(250,204,21,0.25)]"
            >
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${f.tint}`}>
                <f.icon size={19} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-zinc-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI */}
      <section id="ai" className="mx-auto max-w-7xl scroll-mt-20 bg-white px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="ai-heading">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center">
          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">AI-first</span>
          <h2 id="ai-heading" className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Don&apos;t watch it. Ask it.</h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-600">Two AI views grounded in the transcript — never invented, always cited with timestamps.</p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* AI Summary panel */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-yellow-500/25 bg-gradient-to-b from-yellow-50/80 to-white shadow-sm"
          >
            <div className="flex items-center gap-2.5 border-b border-yellow-500/20 px-5 py-3.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-yellow-200 bg-yellow-50 text-yellow-700">
                <Sparkles size={16} aria-hidden="true" />
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-900">AI Summary</div>
                <div className="text-[11px] text-zinc-500">Generated from the full transcript • cached per video</div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold text-zinc-900">TL;DR</p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                Backpropagation carries gradients backward through each layer so every weight learns from its mistakes; learning rates decide how big each step is — too large and training diverges.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  ['Key Points', 'every idea, argument & step — nothing skipped'],
                  ['Main Topics', 'themes in the order they appear'],
                  ['Actionable Takeaways', 'things you can apply today'],
                  ['Notable Quotes', 'verbatim moments worth saving'],
                ].map(([t, b]) => (
                  <li key={t} className="flex items-start gap-2.5 rounded-lg border border-black/10 bg-white px-3 py-2">
                    <Check size={15} className="mt-0.5 shrink-0 text-emerald-600" aria-hidden="true" />
                    <span className="text-xs text-zinc-600"><span className="font-semibold text-zinc-900">{t}</span> — {b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Ask-this-video panel */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-cyan-600/25 bg-gradient-to-b from-cyan-50/70 to-white shadow-sm"
          >
            <div className="flex items-center gap-2.5 border-b border-cyan-600/20 px-5 py-3.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-100 bg-cyan-50 text-cyan-700">
                <MessageCircle size={16} aria-hidden="true" />
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-900">Ask This Video</div>
                <div className="text-[11px] text-zinc-500">Transcript-grounded Q&A • streams live</div>
              </div>
            </div>
            <div className="space-y-2.5 p-5">
              <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-zinc-900 px-3.5 py-2 text-sm text-white">
                What does the speaker say about learning rates?
              </div>
              <div className="mr-auto w-fit max-w-[92%] rounded-2xl rounded-bl-md border border-black/10 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-zinc-700 shadow-sm">
                Keep them small early — large steps overshoot the minimum and the loss explodes.{' '}
                <span className="whitespace-nowrap rounded bg-cyan-100 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-cyan-800">[02:31]</span>{' '}
                Annealing the rate later is what lets it settle.
              </div>
              <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-zinc-900 px-3.5 py-2 text-sm text-white">
                Any quote worth saving?
              </div>
              <div className="mr-auto w-fit max-w-[92%] rounded-2xl rounded-bl-md border border-black/10 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-zinc-700 shadow-sm">
                &ldquo;If you can read the diagram, you can debug the model.&rdquo;{' '}
                <span className="whitespace-nowrap rounded bg-cyan-100 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-cyan-800">[11:20]</span>
              </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1 text-xs text-zinc-600">
                {['Answers only from this transcript', 'Clickable timestamps jump to the moment', 'Stop & re-ask anytime'].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-600" aria-hidden="true" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="scroll-mt-20 border-y border-black/10 bg-gray-50" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 id="how-heading" className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">From link to library in 3 steps.</h2>
            <p className="mx-auto mt-3 max-w-xl text-zinc-600">No API keys. No browser extensions. No server queues.</p>
          </div>
          <div className="relative mt-10 grid gap-5 md:grid-cols-3">
            <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-black/15 md:block" />
            {[
              { n: '01', icon: ClipboardPaste, title: 'Paste URL', body: 'Drop any YouTube link into your workspace — watch, Shorts, embed, or live.' },
              { n: '02', icon: DatabaseZap, title: 'Extract & Save', body: 'Local Rust engine fetches the transcript directly into your Neon folder in seconds.' },
              { n: '03', icon: BookOpenText, title: 'Summarize, Ask & Export', body: 'Get the AI summary, chat with the video, read clean, copy text with one click, or export a print-ready PDF.' },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <span className="font-mono text-xs font-bold text-zinc-400">{s.n}</span>
                <span className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#FACC15]/10 to-cyan-500/10 text-zinc-900">
                  <s.icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 flex items-center gap-1.5 text-base font-semibold text-zinc-900">{s.title} <ChevronRight size={15} className="text-zinc-300" aria-hidden="true" /></h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-lg">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-2 font-mono text-[11px] text-zinc-400">terminal</span>
            </div>
            <p className="px-4 py-3.5 font-mono text-xs sm:text-[13px]">
              <span className="text-zinc-500">$</span> <span className="text-white">nukuzaa extract --local</span>{' '}
              <span className="text-zinc-400">https://youtu.be/…</span>
              <br />
              <span className="text-emerald-400">✓ success in 1.8s → saved to Neon / AI Tutorials</span>
            </p>
          </div>
        </div>
      </section>

      <ReaderShowcase />

      {/* DOWNLOAD */}
      <section id="download" className="mx-auto max-w-5xl scroll-mt-20 bg-white px-4 pb-20 sm:px-6 lg:px-8" aria-labelledby="download-heading">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-b from-gray-50 to-white p-8 text-center shadow-[0_24px_70px_-24px_rgba(0,0,0,0.2)] sm:p-12"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[480px] -translate-x-1/2 rounded-full bg-[#FACC15]/10 blur-[90px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-1/4 h-48 w-72 rounded-full bg-cyan-500/10 blur-[90px]" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/25 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {VERSION} Stable
            </span>
            <h2 id="download-heading" className="mx-auto mt-4 max-w-xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Get your transcript vault.</h2>
            <p className="mx-auto mt-3 max-w-md text-zinc-600">Free for Windows 10/11 x64. Auto-updating, lightweight, open source.</p>

            <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                { icon: Monitor, label: 'Setup .exe', tag: 'Recommended' },
                { icon: Package, label: 'Portable .exe', tag: 'No install' },
                { icon: Disc3, label: '.msi Installer', tag: 'Enterprise' },
              ].map((o) => (
                <a
                  key={o.label}
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-black/10 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md"
                >
                  <o.icon size={20} className="mx-auto text-zinc-500 group-hover:text-zinc-900" aria-hidden="true" />
                  <div className="mt-2 text-sm font-semibold text-zinc-900">{o.label}</div>
                  <div className="text-[11px] text-zinc-500">{o.tag}</div>
                </a>
              ))}
            </div>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-6 flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-[#FACC15] px-6 py-3.5 text-sm font-semibold text-zinc-900 shadow-[0_0_35px_rgba(250,204,21,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#EAB308]"
            >
              <Download size={17} aria-hidden="true" /> Download Free for Windows
            </a>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5"><RefreshCw size={13} className="text-cyan-600" aria-hidden="true" /> Auto-Update</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-emerald-600" aria-hidden="true" /> Virus-free</span>
              <span className="flex items-center gap-1.5"><HardDrive size={13} className="text-amber-500" aria-hidden="true" /> &lt;10MB Lightweight</span>
            </div>
            <p className="mt-4 text-[11px] text-zinc-500">macOS & Linux coming soon. <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-zinc-700 underline-offset-4 hover:text-zinc-900 hover:underline"><Star size={11} aria-hidden="true" /> Star on GitHub to get notified.</a></p>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-gray-50" aria-label="Footer">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#FACC15] to-[#EAB308]">
                  <DatabaseZap size={18} className="text-zinc-900" aria-hidden="true" />
                </span>
                <span className="text-lg font-bold text-zinc-900">Nukuzaa</span>
              </div>
              <p className="mt-3 max-w-xs text-sm text-zinc-500">The Desktop Transcript Vault for YouTube.</p>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-900 shadow-sm transition-all hover:bg-gray-100">
                <GithubIcon size={15} /> Star on GitHub
              </a>
            </div>
            <nav aria-label="Product links">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Product</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {[['Features', '#features'], ['AI', '#ai'], ['How It Works', '#how'], ['Reader', '#reader'], ['Download', '#download']].map(([l, h]) => (
                  <li key={h}><a href={h} className="text-zinc-600 hover:text-zinc-900">{l}</a></li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Resource links">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Resources</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-900">GitHub</a></li>
                <li><a href={DOWNLOAD_URL} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-900">Releases</a></li>
                <li><a href={`${GITHUB_URL}/issues`} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-900">Report Issue</a></li>
              </ul>
            </nav>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Built with</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Tauri v2', 'React', 'Tailwind', 'Rust', 'Neon DB'].map((t) => (
                  <span key={t} className="rounded-full border border-black/10 bg-white px-2.5 py-1 font-mono text-[11px] text-zinc-600">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-black/10 pt-6 text-xs text-zinc-500 sm:flex-row">
            <span>© 2026 Nukuzaa • {VERSION} • Built with Tauri v2 + Neon</span>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-zinc-700">MIT Open Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
