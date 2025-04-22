import React from 'react'
import Button from '../button/Button'
import Headertext from '../headertext/Headertext'
import Text from '../text/Text'
import "./home.css"
import Alink from '../alink/Alink'

const Home = () => {
  return (
    <>
      <section id='MainSection'>
        <div className="firstParent">
          <Headertext>Stylish Portfolio</Headertext>
          <Text>A Free Bootstrap Theme by Start Bootstrap</Text>
          <Button>Find Out More</Button>
        </div>
      </section>

      <section id='ProjectSection'>
        <div className="servicesContainer">
          <Headertext>{"Stylish Portfolio is the perfect theme for your next project!"}</Headertext>
          <Text>{"This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at"} <Alink>{"Unplash"}</Alink></Text>
          <Button>{"What we offer "}</Button>
        </div>
      </section>

      <section id='EndSection'>
        <div className="endContainer">
          <Headertext>{"The buttons below are impossible to resist..."}</Headertext>
          <div className="twobutton">
          <div className="white">
          <Button >{"Click me!"}</Button>
          </div>
          <div className="black">
          <Button >{"Look at me"}</Button>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
