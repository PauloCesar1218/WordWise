import { useState } from 'react'
import type { Word } from '../types'

const accentColors = [
  { border: 'border-violet-500/40', bg: 'bg-violet-500/10', text: 'text-violet-300', badge: 'bg-violet-500/20 text-violet-200' },
  { border: 'border-cyan-500/40', bg: 'bg-cyan-500/10', text: 'text-cyan-300', badge: 'bg-cyan-500/20 text-cyan-200' },
  { border: 'border-amber-500/40', bg: 'bg-amber-500/10', text: 'text-amber-300', badge: 'bg-amber-500/20 text-amber-200' },
  { border: 'border-rose-500/40', bg: 'bg-rose-500/10', text: 'text-rose-300', badge: 'bg-rose-500/20 text-rose-200' },
  { border: 'border-emerald-500/40', bg: 'bg-emerald-500/10', text: 'text-emerald-300', badge: 'bg-emerald-500/20 text-emerald-200' },
]

interface WordCardProps {
  word: Word
  index: number
}

export function WordCard({ word, index }: WordCardProps) {
  const [flipped, setFlipped] = useState(false)
  const color = accentColors[index % accentColors.length]

  return (
    <div
      className="group perspective-[1000px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative transition-transform duration-500 transform-3d ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front */}
        <div
          className={`backface-hidden rounded-2xl border ${color.border} ${color.bg} backdrop-blur-sm p-6 md:p-8 min-h-[280px] flex flex-col justify-between transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/10`}
        >
          <div>
            <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${color.badge} mb-4`}>
              Vocabulary
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold ${color.text} mb-3`}>
              {word.word}
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {word.description}
            </p>
          </div>
          <p className="text-slate-500 text-xs mt-4 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Click to see example
          </p>
        </div>

        {/* Back */}
        <div
          className={`backface-hidden [transform:rotateY(180deg)] absolute inset-0 rounded-2xl border ${color.border} bg-slate-900/80 backdrop-blur-sm p-6 md:p-8 min-h-[280px] flex flex-col justify-between`}
        >
          <div>
            <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${color.badge} mb-4`}>
              Example
            </span>
            <h3 className={`text-xl font-semibold ${color.text} mb-4`}>
              {word.word} — in context
            </h3>
            <blockquote className="text-slate-300 leading-relaxed text-sm md:text-base italic border-l-2 border-slate-600 pl-4">
              "{word.useCase}"
            </blockquote>
          </div>
          <p className="text-slate-500 text-xs mt-4 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Click to see definition
          </p>
        </div>
      </div>
    </div>
  )
}
