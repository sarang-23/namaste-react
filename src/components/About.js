import React from "react";
import ContactClass from "./ContactClass";

const About = () => {
  return (
    <div className="body-component">
      <h1>About Us</h1>
      <h2>
        This is a mock food delivery app developed for the purpose of learning
        react.
      </h2>
      <AboutClass/>
    </div>
  );
};

class AboutClass extends React.Component {
  constructor(props){
    super(props)
    console.log("GParent Constructor")
  }
  componentDidMount(){
    console.log("GParent Did mount")

  }
  render() {
    console.log("GParent Render")
    return(
      <>
        <ContactClass
          name={"Sarang Gupta"}
          address={"Bengaluru"}
          twitter={"@SarangGupta007"}
          childVal="c1"
        />
        <ContactClass
          name={"Sarang Gupta"}
          address={"Bengaluru"}
          twitter={"@SarangGupta007"}
          childVal="c2"
        />
      </>
    )
  }
} 

export default About;
