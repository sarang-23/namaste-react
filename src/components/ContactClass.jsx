import React from "react";

export default class ContactClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.childVal + " constructor");
  }

  componentDidMount() {
    console.log(this.props.childVal + " did mount");
  }
  render() {
    const { name, address, twitter } = this.props;
    console.log(this.props.childVal + " render");
    return (
      <div className="contact-class">
        <h2> Name : {name}</h2>
        <h3> Address : {address}</h3>
        <h3> Twitter : {twitter}</h3>
      </div>
    );
  }
}
