import React, { Component } from "react";
import moment from "moment";
// import Calendar_style from '../styled_components/Calendar_style.jsx'
import Calendar1 from "./Calendar1.jsx";
import Calendar2 from "./Calendar2.jsx";
import {
  Wrapper,
  Content,
  Button,
  Weekdays,
  CloseButton,
  ClearDates,
  BottomButtons,
  Nights,
  Dates,
  TwoCalendars,
  MonthYear,
} from "../styled_components/Calendar_style.jsx";

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      now: moment(),
      thisMonth: "",
      nextMonth: "",
      thisYear: 0,
      nights: 10,
      fromDate: "Aug 10, 2021",
      toDate: "Aug 18, 2021",
      currMonthDates: [],
      currMonthDays: [],
      nextMonthDates: [],
      nextMonthDays: [],
      weekdays: [],
    };
    this.year = this.year.bind(this);
    this.month = this.month.bind(this);
    this.currentDate = this.currentDate.bind(this);
    this.currentDay = this.currentDay.bind(this);
    this.firstDayOfMonth = this.firstDayOfMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.getDates = this.getDates.bind(this);
    this.getNextMonth = this.getNextMonth.bind(this);
    this.getPrevMonth = this.getPrevMonth.bind(this);
  }

  year() {
    return this.state.now.format("Y");
  }
  month() {
    return this.state.now.format("MMMM");
  }
  nextMonth() {
    return this.state.now.add(1, "M").format("MMMM");
  }
  daysInMonth() {
    return this.state.now.daysInMonth();
  }
  currentDate() {
    return this.state.now.get("date");
  }
  currentDay() {
    return this.state.now.get("D");
  }

  getDates(month) {
    let months = moment.months();
    console.log("MONTH", months);

    //creating blank places
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={i * 80} className="emptySlot">
          {""}
        </td>
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = d === this.currentDay() ? "day current-day" : "day";
      daysInMonth.push(
        <td key={d} className={className}>
          <span>{d}</span>
        </td>
      );
    }

    let totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        let insertRow = ce8ii8iii8ii876y7u8iii887uy78i7u87lls.slice();
        console.log("ROWS", rows);
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });

    let days = rows.map((d, i) => {
      return <tr key={i * 100}>{d}</tr>;
    });
  }

  firstDayOfMonth() {
    let now = this.state.now;
    let firstDay = moment(now).startOf("month").format("d");
    return firstDay;
  }

  getNextMonth() {}

  getPrevMonth() {}

  componentDidMount() {
    let currMonth = this.month();
    let nextMonth = this.nextMonth();
    let year = this.year();
    let weekdayshort = moment.weekdaysShort();
    this.setState({
      thisMonth: currMonth,
      nextMonth: nextMonth,
      thisYear: year,
      weekdays: weekdayshort,
    });
    console.log("CURR MONTH", currMonth, year);
    console.log("NEXT MONTH", nextMonth, year);
  }

  render() {
    return (
      <Wrapper>
        <Content>
          <Nights>{this.state.nights} nights</Nights>
          <Dates>
            {this.state.fromDate} - {this.state.toDate}
          </Dates>
          <TwoCalendars>
            <Calendar1
              month={this.state.thisMonth}
              year={this.state.thisYear}
              weekdays={this.state.weekdays}
              days={this.currMonthDates}
              prevMonth={this.getPrevMonth}
            />

            <Calendar2
              month={this.state.nextMonth}
              year={this.state.thisYear}
              weekdays={this.state.weekdays}
              nextMonth={this.getNextMonth}
              // days={days}
            />
          </TwoCalendars>
          <BottomButtons>
            <ClearDates onClick={this.props.clearDates}>Clear dates</ClearDates>
            <CloseButton name="calendar" onClick={this.props.close}>
              Close
            </CloseButton>
          </BottomButtons>
        </Content>
      </Wrapper>
    );
  }
}

export default Calendar;

//
