import React, { Component } from "react";
import moment from "moment";
import {
  Category,
  Amount,
  Line,
  TotalCategory,
  TotalAmount,
} from "../styled_components/Calculator_style.jsx";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>
                <Category>
                  ${this.props.pricePerNight} x {this.props.numberOfNights}
                  nights
                </Category>
              </th>

              <Amount>
                ${this.props.pricePerNight * this.props.numberOfNights}
              </Amount>
            </tr>
            <tr>
              <th>
                <Category>Cleaning fee </Category>
              </th>

              <Amount>${this.props.cleaningFee}</Amount>
            </tr>
            <tr>
              <th>
                <Category>Service fee </Category>
              </th>

              <Amount>${this.props.serviceFee}</Amount>
            </tr>
            <tr>
              <th>
                <Category>Occupancy taxes and fees</Category>
              </th>

              <Amount>${this.props.taxes}</Amount>
            </tr>

            <tr>
              <TotalCategory>Total</TotalCategory>
              <TotalAmount>
                $
                {this.props.pricePerNight * this.props.numberOfNights +
                  this.props.cleaningFee +
                  this.props.serviceFee +
                  this.props.taxes}
              </TotalAmount>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
