import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import './App.css';
import { AppBar } from '@material-ui/core';


class App extends React.Component {

  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  nextTab = () => {
    this.setState({ index: 1 });
  }

  render() {
    const { index } = this.state;

    return (
      <>
      <AppBar position="static" style={{ opacity: index === 1 ? 1 : 0, height: index === 1 ? 'auto' : 0 }} className="bar">
        <Tabs centered value={index} onChange={this.handleChange} className="tabs">
          <Tab label="Home" alt="img" style={{ height: "7vh" }} />
          <Tab label="My Work" alt="img" style={{ height: "7vh"}} />
        </Tabs>
      </AppBar>

        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} className="swipe">
          <div className="slide">
            <div className="desc">
              <h1>Simon Kluibenschädl</h1>
              <p>UI/UX-Designer und Frontend-Entwickler</p>
              <hr align="left" />
              <button onClick={this.nextTab}>
                <img src={require('./img/arrow.svg')} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="slide">
            <div className="work">
              
              <div>
                <h1 className="header">My <span className="headerSpec">work</span>.</h1>
              </div>

              <div className="row"> 
                <div className="column">
                  <div className="container">
                    <img src={require('./img/calc.png')} alt="img" />
                    <div className="after">
                      <h3>Daily UI - 004</h3>
                      <hr align="center" />
                      <p>Calculator</p>
                    </div>
                  </div>
                  
                  <div className="container">
                    <img src={require('./img/hadu website.png')} alt="img" />
                    <div className="after">
                      <h3>Hadu - Promotionwebsite</h3>
                      <hr align="center" />
                      <p>Diploma project HAK</p>
                      <a href="https://hadu-app.herokuapp.com/" target="blank">Visit website</a>
                    </div>
                  </div>
                  
                  <div className="container">
                    <img src={require('./img/checkout.png')} alt="img" />
                    <div className="after">
                      <h3>Daily UI - 002</h3>
                      <hr align="center" />
                      <p>Credit card checkout</p>
                    </div>
                  </div>

                  <div className="container">
                    <img src={require('./img/logo.png')} alt="img" />
                    <div className="after">
                      <h3>Daily UI - 005</h3>
                      <hr align="center" />
                      <p>App Icon</p>
                    </div>
                  </div>

                </div>

                <div className="column">

                  <div className="container">
                    <img src={require('./img/profile.png')} alt="img" />
                    <div className="after">
                      <h3>Daily UI - 006</h3>
                      <hr align="center" />
                      <p>User Profile</p>
                    </div>
                  </div>

                  <div className="container">
                    <img src={require('./img/ostern.gif')} alt="img" />
                    <div className="after">
                      <h3>New Year's Gif</h3>
                      <hr align="center" />
                      <p>Simple animation for an Instagram account</p>
                    </div>
                  </div>

                  <div className="container">
                    <img src={require('./img/rock.png')} alt="img" />
                    <div className="after">
                      <h3>Daily UI - 003</h3>
                      <hr align="center" />
                      <p>Landing page</p>
                    </div>
                  </div>

                </div>  

                <div className="column">

                  <div className="container">
                    <img src={require('./img/mail.png')} alt="img" />
                    <div className="after">
                      <h3>Mail Design</h3>
                      <hr align="center" />
                      <p>Confirmation mail for Gasthof Löwen</p>
                    </div>
                  </div>

                  <div className="container">
                    <img src={require('./img/horarium.png')} alt="img" />
                    <div className="after">
                      <h3>Horarium</h3>
                      <hr align="center" />
                      <p>Web app design</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </SwipeableViews>
      </>
    );
  }
}

export default App;
