import { useEffect, useState } from "react"

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

// https://usehooks-ts.com/react-hook/use-media-query
// Hoook para next, pois tem Server component, aqui farei algumas alteracoes do original.

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => setMatches(getMatches(query))

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    handleChange()

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener("change", handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener("change", handleChange)
      }
    }
  }, [query])

  return matches
}
