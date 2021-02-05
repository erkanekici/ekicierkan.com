import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
// import Blog from './components/blog'
// import Timeline from './components/timeline'
import Capabilities from './components/Capabilities'
import MediaQuery from 'react-responsive'
import backgroundSound from './sounds/backgroundSound.mp3'
import audioIcon from './images/audioIcon40.png'
import audioIconMobile from './images/audioIcon30.png'
import audioIconBlack from './images/audioIconBlack40.png'
import audioIconBlackMobile from './images/audioIconBlack30.png'
import noAudioIcon from './images/noAudioIcon40.png'
import noAudioIconMobile from './images/noAudioIcon30.png'
import noAudioIconBlack from './images/noAudioIconBlack40.png'
import noAudioIconBlackMobile from './images/noAudioIconBlack30.png'
import { isMobile } from 'react-device-detect';
import { Howl } from 'howler'; // audio package
import Projects from './components/projects';
// import {Howler} from 'howler';

// const audio = new Audio(backgroundSound);
const audio = new Howl({
  src: backgroundSound,
  autoplay: true,
  loop: true,
  preload: true,
  onplayerror: function () {
    audio.once('unlock', function () {
      audio.play();
    });
  }
});

class App extends Component {

  state = {
    play: true,
    audioButtonOpacity: 1,
    audioButtonImage: `url(${audioIcon})`,
    audioButtonImageMobile: `url(${audioIconMobile})`
  }

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    // Howler.autoUnlock = false;

    //audio.play();
    // audio.load();
    // audio.play();
    // audio.addEventListener('ended', () => audio.play());    

    // const script = document.createElement("script");
    // script.src = "/path/to/resource.js";
    // script.async = true;
    // document.body.appendChild(script);

    // let allsuspects=document.getElementsByTagName("script");
    // for (let i=allsuspects.length; i>=0; i--){
    //   if (allsuspects[i] && allsuspects[i].getAttribute("src") !==null 
    //     // && allsuspects[i].getAttribute("src").indexOf(`${scriptToremove}`) !== -1 )
    //   ){
    //     console.log(allsuspects[i].getAttribute("src"));
    //     //allsuspects[i].parentNode.removeChild(allsuspects[i])
    //   }    
    // }    

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    // audio.remove();
  }

  addOpacity = event => {
    this.setState({ audioButtonOpacity: 0.5 })
  }

  removeOpacity = event => {
    this.setState({ audioButtonOpacity: 1 })
  }

  handleScroll(event) {
    // let scrollTop = event.srcElement.body.scrollTop

    //TODO Mobil
    if (window.screen.height - (185) < window.pageYOffset) {
      if (this.state.play) {
        this.setState({ audioButtonImage: `url(${audioIconBlack})` })
        //this.setState({ audioButtonImageMobile: `url(${audioIconBlackMobile})` })
      }
      else {
        this.setState({ audioButtonImage: `url(${noAudioIconBlack})` })
        //this.setState({ audioButtonImageMobile: `url(${noAudioIconBlackMobile})` })
      }
    }
    else {
      if (this.state.play) {
        this.setState({ audioButtonImage: `url(${audioIcon})` })
        this.setState({ audioButtonImageMobile: `url(${audioIconMobile})` })
      }
      else {
        this.setState({ audioButtonImage: `url(${noAudioIcon})` })
        this.setState({ audioButtonImageMobile: `url(${noAudioIconMobile})` })
      }
    }
  }

  handleAudioButtonClick = event => {
    if (this.state.play) {
      audio.mute(true);
      // audio.muted = true;
      if (isMobile) {
        if (window.screen.height - 45 < window.pageYOffset) {
          this.setState({ audioButtonImageMobile: `url(${noAudioIconBlackMobile})` })
        }
        else {
          this.setState({ audioButtonImageMobile: `url(${noAudioIconMobile})` })
        }
      }
      else {
        if (window.screen.height - 185 < window.pageYOffset) {
          this.setState({ audioButtonImage: `url(${noAudioIconBlack})` })
        }
        else {
          this.setState({ audioButtonImage: `url(${noAudioIcon})` })
        }
      }
    }
    else {
      // audio.muted = false;
      audio.mute(false);
      if (isMobile) {
        if (window.screen.height - 45 < window.pageYOffset) {
          this.setState({ audioButtonImageMobile: `url(${audioIconBlackMobile})` })
        }
        else {
          this.setState({ audioButtonImageMobile: `url(${audioIconMobile})` })
        }
      }
      else {
        if (window.screen.height - 185 < window.pageYOffset) {
          this.setState({ audioButtonImage: `url(${audioIconBlack})` })
        }
        else {
          this.setState({ audioButtonImage: `url(${audioIcon})` })
        }
      }
    }
    this.setState({ play: !this.state.play })
  }

  render() {
    const audioButtonStyle = {
      width: "40px",
      height: "40px",
      border: "none",
      outline: "none",
      opacity: this.state.audioButtonOpacity,
      marginRight: "310px",
      marginTop: "30px",
      background: this.state.audioButtonImage
    }
    const audioButtonStyleMobile = {
      width: "30px",
      height: "30px",
      border: "none",
      outline: "none",
      opacity: this.state.audioButtonOpacity,
      marginRight: "20px",
      marginTop: "9px",
      background: this.state.audioButtonImageMobile
    }
    return (
      <div id="colorlib-page">
        <div id="container-wrap">          
          <Sidebar></Sidebar>
          <div id="colorlib-main" style={{ padding: 0 }}>
            
              <MediaQuery query={`(min-width:769px)`}>
              <div style={{ position: "fixed", zIndex: "9998", width: "100%", textAlign: "right", display: "block" }}>
                <button
                  onClick={this.handleAudioButtonClick}
                  style={audioButtonStyle}
                  onMouseEnter={this.addOpacity}
                  onMouseLeave={this.removeOpacity}
                />
                 </div>
              </MediaQuery>
              <MediaQuery query={`(max-width:768px)`}>
              <div style={{ position: "fixed", zIndex: "9998", width: "100%", textAlign: "right", display: "block", backgroundColor: "black", minHeight: "46px" }}>
                <button
                  onClick={this.handleAudioButtonClick}
                  style={audioButtonStyleMobile}
                  onMouseEnter={this.addOpacity}
                  onMouseLeave={this.removeOpacity}
                />
                 </div>
              </MediaQuery>           

            <Introduction></Introduction>
            <About></About>
            {/* <Timeline></Timeline> */}
            <Capabilities></Capabilities>
            <Projects></Projects>
            {/* <Blog></Blog>      */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
