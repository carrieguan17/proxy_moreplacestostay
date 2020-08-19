import React, { Component } from "react";
import moment from "moment";
// import Calendar_style from '../styled_components/Calendar_style.jsx'
import { Button, MonthYear, TD } from "../styled_components/Calendar_style.jsx";

class Calendar1 extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <MonthYear className="calendar-header">
              <Button>{"<"}</Button>
              {this.props.month} {this.props.year}
            </MonthYear>
          </thead>
          <tbody>
            <tr>
              {this.props.weekdays.map((day) => (
                <TD>{day.slice(0, 2)}</TD>
              ))}
            </tr>
            {this.props.days}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar1;
