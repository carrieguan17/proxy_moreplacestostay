import React, { Component } from "react";
import moment from "moment";
import {
  Button,
  MonthYear,
  TD,
  TR,
} from "../styled_components/Calendar_style.jsx";

class Calendar2 extends Component {
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
              {this.props.month} {this.props.year}{" "}
              <Button name="nextMonth" onClick={this.props.nextMonth}>
                {">"}
              </Button>
            </MonthYear>
          </thead>
          <tbody>
            <TR>
              {this.props.weekdays.map((day) => (
                <TD>{day.slice(0, 2)}</TD>
              ))}
              {/* {this.props.days} */}
            </TR>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar2;
