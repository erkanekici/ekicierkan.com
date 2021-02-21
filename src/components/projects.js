import React, { Component } from 'react'
import JotformEmbed from './jotformEmbed'
import MediaQuery from 'react-responsive'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import fb1 from '../images/fb1.jpg'
import fb2 from '../images/fb2.jpg'
import fb3 from '../images/fb3.png'
import fr1 from '../images/fr1.png'
import fr2 from '../images/fr2.png'
import ykb1 from '../images/ykb1.png'
import ykb2 from '../images/ykb2.png'
import ykb3 from '../images/ykb3.png'
import ykb4 from '../images/ykb4.png'
import ykb5 from '../images/ykb5.png'
export default class Projects extends Component {

	render() {

		return (
			<div style={{ padding: "0 1em" }}>
				<section id="projects" className="colorlib-work" data-section="projects" style={{ paddingBottom: 0 }}>

					<div className="colorlib-narrow-content">

						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Projelerim</span>
								<h2 className="colorlib-heading animate-box">Neler Yaptım</h2>
							</div>
						</div>

						<div className="row" style={{ paddingRight: 15, paddingLeft: 15, }}>
							<h3 className="project-heading">
								<a
									style={{ color: "black", textDecoration: "underline" }}
									href="https://www.yapikredi.com.tr/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Yapı Kredi İnternet Bankacılığı Ekranları
								</a>
							</h3>
							<p>
								Yapı Kredi İnternet Bankacılığı Ekranları'nın yenilenmesi projesinde yer aldım.
								Hem önyüz ekranlarının geliştirilmesinde hem de arka planda gerçekleşen iş süreçlerinin uygulamasında görev aldım.
							</p>
							<div style={{ maxWidth: "800px", height: "auto", margin: "0 auto" }}>
								<Carousel
									autoPlay infiniteLoop={true} interval={3000} transitionTime={500}
									showArrows={true} showIndicators={true} showStatus={false} showThumbs={false}
									//axis={"vertical"}
									//centerMode={true}	centerSlidePercentage={80}											
								>
									<div>
										<img src={ykb1} />
									</div>
									<div>
										<img src={ykb2} />
									</div>
									<div>
										<img src={ykb3} />
									</div>
									<div>
										<img src={ykb4} />
									</div>
									<div>
										<img src={ykb5} />
									</div>
								</Carousel>
							</div>
							<h3 className="project-heading">
								<a
									style={{ color: "black", textDecoration: "underline" }}
									href="https://odememw.fibabanka.com.tr/n11/discountCouponBanner"
									target="_blank"
									rel="noopener noreferrer"
								>
									Fibabanka Alışveriş Kredisi Uygulaması
								</a>
							</h3>
							<p>
								n11.com, hepsiburada, Vatan Bilgisayar ve diğer Fibabanka iş ortaklarına ait online alışveriş uygulamaları üzerinden
								alışveriş kredisi kullandırım imkanı sağlayan OnlineStore uygulamasını responsive olarak geliştirdim.
								Fibabanka kredi servisleri ile Finberg/Compay ürününün entegrasyonunu gerçekleştirdim.
							</p>
							<div style={{ maxWidth: "800px", height: "auto", margin: "0 auto" }}>
								<Carousel
									autoPlay infiniteLoop={true} interval={3000} transitionTime={500}
									showArrows={true} showIndicators={true} showStatus={false} showThumbs={false}
									//axis={"vertical"}
									//centerMode={true}	centerSlidePercentage={80}											
								>
									<div>
										<img src={fb1} />
									</div>
									<div>
										<img src={fb2} />
									</div>
									<div>
										<img src={fb3} />
									</div>									
								</Carousel>
							</div>
							<h3 className="project-heading">
								{/* <a href="work.html"> */}
									Yapı Kredi - FICO Dolandırıcılık Önleme Uygulaması Entegrasyonu
								{/* </a> */}
							</h3>
							<p>
								Para transferleri, hesap hareketleri ve kart işlemleri gibi birçok bankacılık işleminde
								dolandırıcılık faaliyetlerini önceden tespit ederek riskli işlemleri engelleme amacıyla
								hizmet veren FICO ürününün Yapı Kredi için entegrasyonunun sağlanmasında görev aldım.
							</p>
							<div style={{ maxWidth: "800px", height: "auto", margin: "0 auto" }}>
								<Carousel
									autoPlay infiniteLoop={true} interval={3000} transitionTime={500}
									showArrows={true} showIndicators={true} showStatus={false} showThumbs={false}
									//axis={"vertical"}
									//centerMode={true}	centerSlidePercentage={80}											
								>
									<div>
										<img src={fr1} />
									</div>
									<div>
										<img src={fr2} />
									</div>									
								</Carousel>
							</div>
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/y1.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3>
												<a href="work.html">
													Yapı Kredi İnternet Bankacılığı Ekranları
												</a>
											</h3>
											<span>Website</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}

						</div>

						{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}

					</div>
				</section>
			</div>
		)
	}
}
