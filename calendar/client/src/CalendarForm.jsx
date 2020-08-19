import React, { Component } from "react";
import moment from "moment";
import Calendar from "./Calendar.jsx";
import {
  Wrapper,
  LeftButton,
  RightButton,
  Input,
  Label,
  CheckInForm,
} from "../styled_components/CalendarForm_style.jsx";
// import Calendar_style from '../styled_components/Calendar_style.jsx'

class CalendarForm extends Component {
  constructor(props) {
    super(props);
    this.state = { checkindate: 0, checkoutdate: 0, calendar: false };
    this.clearDates = this.clearDates.bind(this);
  }
  clearDates() {
    this.setState({
      checkindate: 0,
      checkoutdate: 0,
    });
  }
  render() {
    return (
      <div>
        <CheckInForm>
          <LeftButton name="calendar" onClick={this.props.onClick}>
            <Label>CHECK-IN</Label>
            <Input type="text" placeholder={this.state.checkindate} />
          </LeftButton>

          <RightButton name="calendar" onClick={this.props.onClick}>
            <Label>CHECKOUT</Label>
            <Input type="text" placeholder={this.state.checkoutdate} />
          </RightButton>
        </CheckInForm>
        {this.props.openCalendar ? (
          <Calendar name="calendar" close={this.props.onClick} />
        ) : null}
      </div>
    );
  }
}

export default CalendarForm;
