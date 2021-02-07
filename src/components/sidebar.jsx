import React, { Component } from 'react'
import Navbari from './StyledComponents'
import MediaQuery from 'react-responsive'

export default class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
    navbarColor: "white"
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // let scrollTop = event.srcElement.body.scrollTop

    // if (window.screen.height - 50 < window.pageYOffset) {
    //   this.setState({ navbarColor: "black" })
    // } else {
    //   this.setState({ navbarColor: "white" })
    // }
  }

  render() {
    const listItemStyle = {
      fontSize: "16px",
      fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
    }
    return (
      <div>
        <div>
          <nav
            href="#navbar" id="navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            {/* <i             
              style={{
                background: this.state.navbarColor,
              }}
            /> */}
            <Navbari {...this.state}></Navbari>
          </nav>
          <aside style={{ overflow: "auto" }} id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/profil.jpg)', backgroundPositionY: '-37px' }} />
              {/* <h1 id="colorlib-logo"><a href="index.html">Hüseyin Erkan Ekici</a></h1> */}
              <h2 style={{ color: "black", textAlign: "center" }}>Hüseyin Erkan Ekici</h2>
              {/* <span className="position">Yazılım Mühendisi</span> */}
              <span className="email"><i className="icon-mail" style={{ fontSize: "22px", verticalAlign: "text-bottom" }}></i> h.erkanekici@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar" style={{ marginBottom: "-5px" }}>
              <div id="navbar" className="collapse">
                <ul style={{ margin: 0 }}>
                  <li className="active"><a href="#home" data-nav-section="home" style={listItemStyle} >Anasayfa</a></li>
                  <li><a href="#about" data-nav-section="about" style={listItemStyle} >Hakkımda</a></li>
                  <li><a href="#capabilities" data-nav-section="capabilities" style={listItemStyle} >Mesleki Yeteneklerim</a></li>
                  <li><a href="#projects" data-nav-section="projects" style={listItemStyle} >Projelerim</a></li>
                  {/* <li><a href="#blog" data-nav-section="blog" style={listItemStyle} >Blog</a></li> */}

                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                {/* <li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li> */}
                <li>
                  <MediaQuery query={`(min-width:769px)`}>
                  <a
                    style={{ textTransform: "none", fontFamily: "cursive", fontSize: "19px" }}
                    href="https://tr.linkedin.com/in/huseyinerkanekici"
                    target="_blank"
                    rel="noopener noreferrer">
                    linkedin <i className="icon-linkedin2" />
                  </a>
                  </MediaQuery>
                  <MediaQuery query={`(max-width:768px)`}>
                  <a
                    style={{ textTransform: "none", fontFamily: "cursive", fontSize: "16px" }}
                    href="https://tr.linkedin.com/in/huseyinerkanekici"
                    target="_blank"
                    rel="noopener noreferrer">
                    linkedin <i className="icon-linkedin2" />
                  </a>
                  </MediaQuery>                  
                </li>
                <li>
                  <MediaQuery query={`(min-width:769px)`}>
                  <a
                    style={{ textTransform: "none", fontFamily: "cursive", fontSize: "19px" }}
                    href="https://github.com/erkanekici?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer">
                    github <i className="icon-github" />
                  </a>
                  </MediaQuery>
                  <MediaQuery query={`(max-width:768px)`}>
                  <a
                    style={{ textTransform: "none", fontFamily: "cursive", fontSize: "16px" }}
                    href="https://github.com/erkanekici?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer">
                    github <i className="icon-github" />
                  </a>
                  </MediaQuery>
                </li>
                {/* <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li> */}
              </ul>
            </nav>

            <div className="colorlib-footer" style={{ position: "absolute", bottom: 0 }}>
              <p>
                <small
                  style={{ color: "#191919" }}>
                  {/* Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br> */}
                  © Copyright 2020 <a style={{ fontFamily: '"Verdana", "Geneva", "monospace"', color: "black" }} href="https://erkanekici.com">erkanekici.com</a>
                </small>
              </p>
            </div>

          </aside>
        </div>
      </div>
    )
  }
}
