import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import motto from '../images/motto.jpg'

export default class About extends Component {
  render() {
    return (
      <div style={{ padding: "0 1em" }}>
        <section className="colorlib-about" data-section="about" style={{ paddingBottom: 0 }}>
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      
                      <span className="heading-meta">Hakkımda</span>                      
                      <h2 className="colorlib-heading" style={{ marginBottom: "1em" }}>Ben Kimim?</h2>                      
                      <p>
                        1992 Uşak doğumluyum. Aslen ise Denizli'nin Çal ilçesinde bulunan Akkent köyündenim.<br />
                      </p>
                      <p>
                        İlk ve orta öğretimimi Denizli'de tamamladıktan sonra 2016'da %100 İngilizce ve %100 başarı burslu olarak
                        öğrenim gördüğüm Bahçeşehir Üniversitesi Yazılım Mühendisliği Bölümü'nden mezun oldum.<br />

                        Şu anda <b>Innovance Consultancy şirketinde Yazılım Danışmanı</b> olarak çalışmaktayım.<br />

                        Daha öncesinde OBSS Bilişim tarafından 2 yıl Yapı Kredi İnternet Bankacılığı ekibinde ve
                        6 ay Yapı Kredi Dolandırıcılık Önleme Uygulamaları Geliştirme ekibinde
                        görevlendirilmiş olarak Yazılım Danışmanlığı yaptım.<br />

                        Danışmanlık yaptığım projelerin çoğunda Agile model çalışma prensiplerini uygulayarak
                        <b> Full Stack Developer</b> ve <b>Software Architect</b> olarak görev aldım.
                      </p>
                      <p>
                        İşten arta kalan zamanlarımda çok sevdiğim ailemle vakit geçirmek, spor yapmak, kitap okumak ve seyahat etmek
                        dışında yazılım dünyasındaki yeni gelişmeleri takip edip öğrenmekten ve öğrendiğim güncel teknolojiler ile
                        yeni yazılım ürünleri geliştirmekten zevk alırım.
                      </p>
                    </div>

                    <MediaQuery query={`(min-width:769px)`}>
                      <img src={motto} style={{ width: "100%", marginTop: "25px", padding: "0 20%", backgroundColor: "#333b46" }} alt="motto" />
                    </MediaQuery>
                    <MediaQuery query={`(max-width:768px)`}>
                      <img src={motto} style={{ width: "100%", backgroundColor: "#333b46" }} alt="motto" />
                    </MediaQuery>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="colorlib-experience" data-section="timelinex"> */}
        <section className="colorlib-experience" style={{ paddingTop: 0 }}>
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                {/* <span className="heading-meta">İş Deneyimlerim</span> */}
                <h2 className="colorlib-heading animate-box">İş Deneyimlerim</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        
                        <h2>Yazılım Danışmanı - Innovance Consultancy <span>2019 - Halen</span></h2>
                        
                        <b>Fibabanka</b>
                        <p>
                          Innovance Consultancy tarafından Fibabanka Ar-Ge Merkezi'nde Yazılım Danışmanı olarak görevlendirilerek Fibabanka IT projelerinde yer aldım. <br />
                            n11.com, hepsiburada, Vatan Bilgisayar ve diğer Fibabanka iş ortaklarına ait online alışveriş uygulamaları üzerinden
                            alışveriş kredisi kullandırımı imkanı sağlayan FibaOnlineStore uygulamasını geliştirdim. <br />
                            Fibabanka kredi servisleri ile Finberg/Compay ürününün entegrasyonunu gerçekleştirdim. <br />
                            Video bankacılık ile müşteri edinimi uygulamasının middleware katmanını geliştirdim. <br />
                            Fibabanka'nın dijital dönüşüm projelerine destek olarak mikroservis mimari tasarımına uygun,
                            sürdürülebilir ve esnek bir CI/CD sürecinin uygulanması çalışmalarında yer aldım. <br />
                        </p>
                        
                        <b>Softtech</b>
                        <p>
                          Innovance Consultancy tarafından Softtech'de Yazılım Danışmanı olarak görevlendirilerek Softtech
                          firmasının Rally Mikroservis Mimarisi içinde çalışan İş Portföy uygulamasının Fon Uyum projesinde yer aldım. <br />
                        </p>

                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        
                        <h2>Yazılım Danışmanı - OBSS Bilişim <span>2016 - 2019</span></h2>
                        <p>
                          OBSS Bilişim tarafından Yapı Kredi Bankası’nın farklı bilişim projelerinde yer aldım.  <br />
                            İlk iş deneyimim olan bu süreçte kalabalık bir geliştirme ekibiyle ortak bir proje üzerinde geliştirme yapabilme tekniklerini deneyimledim. <br />
                            Birçok projede Scrum takımları içinde Agile çalışma metodolojilerini uygulama deneyimi elde ettim.
                        </p>

                      </div>
                    </div>
                  </article>
                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2003-2015</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 91 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                      </div>
                    </div>
                  </article> */}
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">İş Deneyimlerim</span>
                    <h2 className="colorlib-heading">Here are some of my expertise</h2>
                </div>
            </div>
            <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                        <span className="icon">
                            <i className="icon-bulb" />
                        </span>
                        <div className="desc">
                            <h3>Web Development </h3>
                            <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-3">
                        <span className="icon">
                            <i className="icon-phone3" />
                        </span>
                        <div className="desc">
                            <h3>Data Structures & Algorithms</h3>
                            <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                        <span className="icon">
                            <i className="icon-data" />
                        </span>
                        <div className="desc">
                            <h3>Dev Ops</h3>
                            <p>I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
                        </div>
                    </div>
                </div> */}

        {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
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
            </div>
            */ }

        {/* </div>
        </div>
        </section> */}

      </div>
    )
  }
}
