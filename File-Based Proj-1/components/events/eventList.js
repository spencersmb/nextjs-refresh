import EventItem from './event-item'
import classes from './event-item.module.css'

function EventList (props) {
  const {items} = props
  return (
    <ul className={classes.list}>
      {items.map(event => (<EventItem key={event.id} {...event}/>))}
    </ul>
  )
}

export default EventList
