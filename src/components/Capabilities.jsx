import React, { Component } from 'react'

export default class Capabilities extends Component {
    render() {
        return (
            <div style={{ padding: "0 1em" }}>

                <section id="capabilities" className="colorlib-about" data-section="capabilities">

                    <div className="colorlib-narrow-content">
                        
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Mesleki Yeteneklerim</span>
                                <h2 className="colorlib-heading">Hangi Konularda Bilgi Sahibiyim?</h2>
                            </div>
                        </div>

                        <div className="row row-pt-md">

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-device-laptop" />
                                        <p style={{ marginTop: "15px", color: "white" }}>+</p>
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web ve Mobil Uygulama Geliştirme Teknolojileri</h3>
                                        <p>Java, Spring Boot, Spring MVC, Spring Security</p>
                                        <p>JSF, Primefaces, XHTML, AJAX</p>
                                        <p>ReactJS, Javascript, HTML, CSS, JSP, JQuery, Redux, Babel, ES6</p>
                                        <p>REST, SOAP, gRPC, JSON, XML</p>
                                        <p>Apache Kafka</p>
                                        <p>Apache Tomcat, Nginx</p>
                                        <p>GoogleAPIs, Countly</p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Mobil Uygulamalar</h3>
                                        <p>React Native</p>
                                    </div>
                                </div>
                            </div> */}

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Veritabanı Yönetim Sistemleri</h3>
                                        <p>SQL, PL/SQL</p>
                                        <p>Relational Databases, OracleDB, MySQL, MSSQL</p>
                                        <p>NoSQL Databases, MongoDB, Hbase</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                        <i className="icon-cog2" />
                                    </span>
                                    <div className="desc">
                                        <h3>DevOps Araçları</h3>
                                        <p>Docker, Harbor, Prometheus, ELK</p>
                                        <p>Maven, Gradle</p>
                                        <p>GIT, SVN</p>
                                        <p>Jenkins, Bamboo</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>SDLC Teknikleri</h3>
                                        <p>Microservices, Design Patterns, 12AppFactor, SOLID, OOP, TDD, AOP</p>
                                        <p>Agile Methodologies, SCRUM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-spanner-outline" />
                                    </span>
                                    <div className="desc">
                                        <h3>Diğer Teknik Araçlar</h3>
                                        <p>JIRA, TFS, Intellij, Eclipse, VSCode</p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc">
                                        <h3>Graphic Design</h3>
                                        <p>My friend knows .. P</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Digital Marketing</h3>
                                        <p>I use Instagram eight hours a day :) </p>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
