import React, { Component } from "react";
import axios from "axios";
import Calendar from "./Calendar.jsx";
import Guest from "./Guest.jsx";
import CalendarForm from "./CalendarForm.jsx";
import Calculator from "./Calculator.jsx";
import { BaseWrapper } from "../styled_components/Base_style.jsx";
import {
  TopInfo,
  Wrapper,
  Button,
  Form,
  ReserveButton,
  LargeText,
  MediumText,
  MediumBoldText,
  SmallText,
  CenterText,
  Label,
} from "../styled_components/App_style.jsx";
import { GuestButton, GuestInput } from "../styled_components/Guest_style.jsx";
class App extends Component {
  constructor() {
    super();
    this.state = {
      bookedDates: [],
      cleaningFee: 399,
      maxGuestCount: 8,
      pricePerNight: 550,
      rating: 0,
      reviewCount: 0,
      serviceFee: 0,
      taxes: 0,
      numberOfNights: 3,
      calendar: false,
      guest: false,
      reserve: false,
      guestCount: 1,
      guestPopUp: false,
      calendarPopUp: false,
      reservePopUp: false,
      adult: 0,
      children: 0,
      infant: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.getPlaceInfo = this.getPlaceInfo.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.removePerson = this.removePerson.bind(this);
  }

  addPerson(e) {
    console.log("add person clicked");
    e.preventDefault();
    let key = e.target.name;
    let value = this.state[key];
    let newValue = value + 1;
    if (newValue > this.state.maxGuestCount) {
      newValue = this.state.maxGuestCount;
    }
    this.setState({
      [key]: newValue,
    });
  }
  removePerson(e) {
    e.preventDefault();
    let key = e.target.name;
    let value = this.state[key];
    let newValue = value - 1;
    if (newValue < 0) {
      newValue = 0;
    }
    this.setState({
      [key]: newValue,
    });
  }

  handleClick(e) {
    console.log("CLICKED");
    e.preventDefault();
    let key = e.target.name;
    this.setState({ [key]: !this.state[key] });
  }

  setPlaceData(data) {
    let place = data[0];
    this.setState({
      pricePerNight: place.pricePerNight,
      bookedDates: place.bookedDates,
      cleaningFee: place.cleaningFee,
      maxGuestCount: place.maxGuestCount,
      rating: place.rating,
      reviewCount: place.reviewCount,
      serviceFee: place.serviceFee,
      taxes: place.taxes,
    });
  }
  getPlaceInfo() {
    axios
      .get("/calendar/place")
      .then((response) => {
        // console.log("RESPONSE", response.data);
        this.setPlaceData(response.data);
      })
      .catch((error) => {
        // handle error
        // console.log(error);
      });
  }

  componentDidMount() {
    this.getPlaceInfo();
  }

  render() {
    return (
      <BaseWrapper>
        <Wrapper>
          <TopInfo>
            <div>
              <LargeText>${this.state.pricePerNight}/night</LargeText>
            </div>
            <div>
              <MediumText>
                {this.state.rating}({this.state.reviewCount})
              </MediumText>
            </div>
          </TopInfo>

          <CalendarForm
            name="calendar"
            onClick={this.handleClick}
            openCalendar={this.state.calendar}
          />

          <form className="guest" onClick={this.handleClick}>
            <GuestButton>
              <Label>GUESTS</Label>
              <GuestInput
                type="text"
                placeholder={this.state.guestCount}
                name="guest"
              />
            </GuestButton>
          </form>
          {this.state.guest ? (
            <Guest
              guestCount={this.state.guestCount}
              adult={this.state.adult}
              children={this.state.children}
              infant={this.state.infant}
              handleClick={this.handleClick}
              addPerson={this.addPerson}
              removePerson={this.removePerson}
            />
          ) : null}
          <ReserveButton className="reserve" onClick={this.handleClick}>
            Reserve
          </ReserveButton>
          <CenterText>You won't be charged yet</CenterText>
          <Calculator
            pricePerNight={this.state.pricePerNight}
            numberOfNights={this.state.numberOfNights}
            cleaningFee={this.state.cleaningFee}
            serviceFee={this.state.serviceFee}
            taxes={this.state.taxes}
            guestCount={this.state.guestCount}
          />
        </Wrapper>
      </BaseWrapper>
    );
  }
}

export default App;
