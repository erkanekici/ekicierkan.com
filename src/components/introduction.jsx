import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

export default class Introduction extends Component {
  
  componentDidMount() {

    setTimeout(function () {
      // window.VANTA.GLOBE({
      //   el: "#vantajs",
      //   mouseControls: true,
      //   touchControls: true,
      //   minHeight: 200.00,
      //   minWidth: 200.00,
      //   scale: 1.00,
      //   scaleMobile: 1.00,
      //   color: "#27c007",
      //   color2: "#f2f3f7",
      //   size: 0.70,
      //   backgroundColor: 0x0
      // });
      window.VANTA.BIRDS({
        el: "#vantajs",
        backgroundColor: 0x0,
        backgroundAlpha: 1,
        color1: "#00f1ff",
        color2: "#ffffff",
        colorMode: "lerpGradient",
        quantity: 4,
        birdSize: 1.5,
        wingSpan: 30.00, //30
        speedLimit: 7.00, //5
        separation: 30.00, //20
        alignment: 20.00, //20
        cohesion: 20.00 //20
      });
    }, 100);
  }

  handleAudioButtonClick = event => {
    window.scrollTo(0, document.body.scrollHeight / 2)
  }

  scrollWebPageToCapabilities = event => {
    //window.scrollTo(0,document.getElementById("capabilities").offsetHeight)    
    document.getElementById('capabilities').scrollIntoView()
  }

  scrollWebPageToProjects = event => {
    //window.scrollTo(0,document.getElementById("capabilities").offsetHeight+window.innerHeight/2)
    document.getElementById('projects').scrollIntoView()
  }

  render() {
    return (
      <div>
        {/* TODO Mobil <div style={{ marginTop: "50px"}}>  */}

        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight" style={{ backgroundColor: "black", borderRadius: "0px", display: "flex", flexDirection: "column" }}>
            <div id="vantajs" style={{ display: "flex", flexDirection: "column", height: "100%" }}>

              <div className="animate-box" data-animate-effect="fadeInRight" style={{ margin: "auto", textAlign: "center" }}>
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 slider-text" style={{ opacity: "0.9", backgroundColor: "black", height: "auto", minHeight: "auto", margin: "auto" }}>

                  <MediaQuery query={`(min-width:769px)`}>
                    <div className="slider-text-inner" style={{ padding: 0, verticalAlign: "top", height: "auto", minHeight: "auto" }} >
                      <div className="desc" style={{ marginTop: "-2vh" }} >
                        <h1 style={{ color: "white", fontSize: "36px", }}>Merhaba<br />Ben Hüseyin Erkan</h1>
                        <p>
                          <a
                            style={{ color: "white", borderColor: "white", fontSize: "14px", fontFamily: "Verdana" }}
                            className="btn btn-primary btn-learn"
                            href="/CV_HÜSEYİN_ERKAN_EKİCİ.pdf"
                            target="_blank"
                            rel="noopener noreferrer">Özgeçmişim <i style={{ fontSize: "16px" }} className="icon-download4" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </MediaQuery>

                  <MediaQuery query={`(max-width:768px)`}>
                    <div className="slider-text-inner" style={{ paddingBottom: "0.5em", verticalAlign: "top", height: "auto", minHeight: "auto" }} >
                      <div className="desc" style={{ marginTop: "-2vh" }} >
                        <h1 style={{ color: "white", fontSize: "20px", marginBottom: "10px" }}>Merhaba<br />Ben Hüseyin Erkan</h1>
                        <p>
                          <a
                            style={{ color: "white", borderColor: "white", fontSize: "14px", fontFamily: "Verdana" }}
                            className="btn btn-primary btn-learn"
                            href="/CV_HÜSEYİN_ERKAN_EKİCİ.pdf"
                            target="_blank"
                            rel="noopener noreferrer">Özgeçmişim <i style={{ fontSize: "16px" }} className="icon-download4" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </MediaQuery>

                </div>
              </div>

              <div className="animate-box" data-animate-effect="fadeInLeft" style={{ margin: "auto", textAlign: "center" }}>
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 slider-text" style={{ opacity: "0.9", backgroundColor: "black", height: "auto", minHeight: "auto", margin: "auto" }}>

                  <MediaQuery query={`(min-width:769px)`}>
                    <div className="slider-text-inner" style={{ padding: 0, verticalAlign: "top", height: "auto", minHeight: "auto" }}>
                      <div className="desc" style={{ marginTop: "-2vh" }} >
                        <h1 style={{ color: "white", fontSize: "36px", }}>Yazılım Danışmanlığı<br />Yapmaktayım </h1>
                        <p>
                          <a
                            onClick={this.scrollWebPageToProjects}
                            style={{ color: "white", borderColor: "white", fontSize: "14px", fontFamily: "Verdana" }}
                            className="btn btn-primary btn-learn"
                            //href="https://github.com/erkanekici?tab=repositories"
                            //target="_blank"
                            //rel="noopener noreferrer"
                          >
                            Projelerim <i style={{ fontSize: "16px" }} className="icon-briefcase3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </MediaQuery>

                  <MediaQuery query={`(max-width:768px)`}>
                    <div className="slider-text-inner" style={{ padding: "0.5em", verticalAlign: "top", height: "auto", minHeight: "auto" }}>
                      <div className="desc" style={{ marginTop: "-2vh" }} >
                        <h1 style={{ color: "white", fontSize: "20px", marginBottom: "10px" }}>Yazılım Danışmanlığı<br />Yapmaktayım </h1>
                        <p>
                          <a                            
                            onClick={this.scrollWebPageToProjects}
                            style={{ color: "white", borderColor: "white", fontSize: "14px", fontFamily: "Verdana" }}
                            className="btn btn-primary btn-learn"
                            //href="https://github.com/erkanekici?tab=repositories"
                            //target="_blank"
                            //rel="noopener noreferrer"
                          >                            
                            Projelerim <i style={{ fontSize: "16px" }} className="icon-briefcase3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </MediaQuery>

                </div>
              </div>

              <div className="animate-box" data-animate-effect="fadeInRight" style={{ margin: "auto", textAlign: "center" }}>
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 slider-text" style={{ opacity: "0.9", backgroundColor: "black", height: "auto", minHeight: "auto", margin: "auto" }}>

                  <MediaQuery query={`(min-width:769px)`}>
                    <div className="slider-text-inner" style={{ padding: 0, verticalAlign: "top", height: "auto", minHeight: "auto" }}>
                      <div className="desc" style={{ marginTop: "-2vh" }} >
                        <h1 style={{ color: "white", fontSize: "36px", }}>Hizmetler</h1>
                        <p>
                          <a
                            //href="#capabilities" data-nav-section="capabilities"
                            onClick={this.scrollWebPageToCapabilities}
                            style={{ width: "auto", textAlign: "left", color: "white", borderColor: "white", fontSize: "14px", fontFamily: "Verdana" }}
                            className="btn btn-primary btn-learn"
                          >
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Özel Yazılım Geliştirme<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Web Sitesi Tasarımı<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />API Entegrasyonları<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Uygulama Analitiği<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />BT Altyapı Dönüşüm Desteği<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />UX/UI Tasarım ve Geliştirme<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Logo/Afiş/Reklam Tasarımları<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Video Düzenleme ve Montaj<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Youtube Danışmanlığı<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Yazılım Eğitimleri<br />
                          </a>
                        </p>
                      </div>
                    </div>
                  </MediaQuery>

                  <MediaQuery query={`(max-width:768px)`}>
                    <div className="slider-text-inner" style={{ padding: "0.5em 0", verticalAlign: "top", height: "auto", minHeight: "auto" }}>
                      <div className="desc" style={{ marginTop: "-2vh" }} >
                        <h1 style={{ color: "white", fontSize: "20px", marginBottom: "10px" }}>Hizmetler</h1>
                        <p>
                          <a
                            //href="#capabilities" data-nav-section="capabilities"
                            onClick={this.scrollWebPageToCapabilities}                            
                            style={{ width: "auto", textAlign: "left", color: "white", borderColor: "white", fontSize: "11px", fontFamily: "Verdana", marginRight: 0 }}
                            className="btn btn-primary btn-learn"
                          >
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Özel Yazılım Geliştirme<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Web Sitesi Tasarımı<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />API Entegrasyonları<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Uygulama Analitiği<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />BT Altyapı Dönüşüm Desteği<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />UX/UI Tasarım ve Geliştirme<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Logo/Afiş/Reklam Tasarımları<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Video Düzenleme ve Montaj<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Youtube Danışmanlığı<br />
                            <i style={{ fontSize: "16px" }} className="icon-arrow-right3" />Yazılım Eğitimleri<br />
                          </a>
                        </p>
                      </div>
                    </div>
                  </MediaQuery>

                </div>
              </div>

            </div>
          </div >
        </section >

      </div >
    )
  }
}
