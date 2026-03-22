import { useState, useEffect } from 'react'
import type { Word } from '../types'

const API_URL = 'https://nodejs-fiap-bff-projectname.onrender.com/ask'

export function useWords() {
  const [words, setWords] = useState<Word[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchWords = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const data: Word[] = await response.json()
      setWords(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch words')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWords()
  }, [])

  return { words, loading, error, refetch: fetchWords }
}
