import { getAllEvents, getFeaturedEvents } from '../../dummyData'
import EventList from '../../components/events/eventList'
import EventsSearch from '../../components/events/events-search'
import { useRouter } from 'next/router'

export default function  EventsPage() {
  // Used an index.js here because we have other pages inside the events folder

  const events = getAllEvents()
  const router = useRouter() // MUST BE CALLED IN THE MAIN COMPONENT AREA, CAN"T BE NESTED
  function findEventsHandler(year, month){
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <>
      <h1>All Events Page</h1>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events}/>
    </>
  )
}
