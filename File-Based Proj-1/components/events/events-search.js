import React, { useRef } from 'react'
import Button from '../ui/button/button'
import classes from './event-search.module.css'
const EventsSearch = ({onSearch}) => {

  const YearRef = useRef()
  const MonthRef = useRef()

  const handleSearch = () => {
    console.log('search')
  }
  function submitHandler(event){
    event.preventDefault()

    // value is available because its a <select>
    const selectedYear = YearRef.current.value
    const selectedYMonth = MonthRef.current.value

    onSearch(selectedYear, selectedYMonth)

  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="year" id="year" ref={YearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select name="month" id="month" ref={MonthRef}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">Sept</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
      </div>
      <Button onClick={handleSearch}>
        Find Events
      </Button>
    </form>
  )
}

export default EventsSearch
