import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummyData'
import EventList from '../../components/events/eventList'
import ResultsTitle from '../../components/event-detail/results-title'
import Button from '../../components/ui/button/button'

export default function  FilteredEventDetail() {
  // Used for a single event that has more than one parameter in the url
  // EX: events/2020/04/soccerEvent
  // vs.
  // events/footballEvent - which will be handled by [eventID].js

  const router = useRouter()
  const filteredData = router.query.slug
  console.log('slug', filteredData)

  // router is first undefined because of serverside I think
  if(!filteredData){
    return <p className={'center'}>LOADING...</p>
  }

  const filteredYear = filteredData[0]
  const filteredMonth = filteredData[1]

  // transform item to number
  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if(isNaN(numYear) || isNaN(numMonth) || numYear >2030 || numYear <2021 || numMonth < 1 || numMonth > 12){
   return (
     <>
      <p>Invalid Filter please adjust values</p>
       <div className="center">
         <Button link={'/events'}>Show All Events</Button>
       </div>
     </>
   )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if(!filteredEvents || filteredEvents.length === 0){
    return (
      <>
        <p>No events found.</p>
        <div className="center">
          <Button link={'/events'}>Show All Events</Button>
        </div>
      </>
    )
  }

  // Month is ZeroBased Index
  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <h1>FilteredEventDetail Page</h1>
      <ResultsTitle  date={date}/>
      <EventList items={filteredEvents} />
    </div>
  )
}
