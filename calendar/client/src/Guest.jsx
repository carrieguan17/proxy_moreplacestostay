import React, { Component } from "react";
import moment from "moment";
import {
  Wrapper,
  Table,
  Button,
  TD,
  Info,
  CloseButton,
} from "../styled_components/Guest_style.jsx";

class Guest extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <div>
          <Table>
            <tr>
              Adults
              <TD>
                <Button
                  className="circle"
                  className="circle"
                  name="adult"
                  onClick={this.props.removePerson}
                >
                  -
                </Button>
                {this.props.adult}
                <Button
                  className="circle"
                  name="adult"
                  onClick={this.props.addPerson}
                >
                  +
                </Button>
              </TD>
            </tr>
            <tr>
              Children Ages 2-12
              <TD>
                <Button
                  className="circle"
                  name="children"
                  onClick={this.props.removePerson}
                >
                  -
                </Button>
                {this.props.children}
                <Button
                  className="circle"
                  name="children"
                  onClick={this.props.addPerson}
                >
                  +
                </Button>
              </TD>
            </tr>
            <tr>
              Infants Under 2
              <TD>
                <Button name="infant" onClick={this.props.removePerson}>
                  -
                </Button>
                {this.props.infant}
                <Button
                  className="circle"
                  name="infant"
                  onClick={this.props.addPerson}
                >
                  +
                </Button>
              </TD>
            </tr>
          </Table>
          <Info>
            16 guests maximum. Infants don’t count toward the number of guests.
          </Info>
          <CloseButton name="guest" onClick={this.props.handleClick}>
            Close
          </CloseButton>
        </div>
      </Wrapper>
    );
  }
}

export default Guest;
