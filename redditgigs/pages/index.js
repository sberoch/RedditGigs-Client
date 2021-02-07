import styles from '../styles/Home.module.css'
import { useGetGigs } from "../api/useRequest"
import Gig from "../components/Gig"
import { Accordion, Progress } from "@chakra-ui/react"
import { NavBar } from '../components/navbar/NavBar'

export default function Home() {
  return (
    <div>
      <NavBar />
      <GigList />
    </div>
  )
}

function GigList () {
  const { gigs, error } = useGetGigs("/gigs")

  if (error) return <h1>Something went wrong!</h1>
  if (!gigs) return <Progress size="xs" isIndeterminate />

  return (
    <Accordion allowToggle allowMultiple>
      {gigs.map((gig) => (
        <Gig gig={gig} key={gig.url} />
      ))}
    </Accordion>
  )
}
