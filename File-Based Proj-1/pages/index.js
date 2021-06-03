import Link from 'next/link'
import EventList from '../components/events/eventList'
import { getFeaturedEvents } from '../dummyData'

export default function Home() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <h1>Hello Next</h1>
      <EventList items={featuredEvents}/>
    </div>
  )
}
