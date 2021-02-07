import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const useGetGigs = path => {
  if (!path) {
    throw new Error("Path is required")
  }
  const url = baseUrl + path
  const { data: gigs, error } = useSWR(url, fetcher)
  return { gigs, error }
}