import { useRouter } from 'next/router'
import { getEventById } from '../../dummyData'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

export default function  EventDetail() {
  // Used for a single event
  // events/footballEvent

  // acess the route URL info
  const route = useRouter()
  const data = getEventById(route.query.eventId)

  if(!data){
    return (<p>NO EVENT FOUND</p>)
  }

  return (
    <>
      <EventSummary {...data} />
      <EventLogistics {...data} address={data.location} imageAlt={data.title}/>
      <EventContent>
        <p>{data.description}</p>
      </EventContent>
    </>
  )
}
