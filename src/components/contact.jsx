import React, { Component } from 'react'

export default class Contact extends Component {

	render() {
		return (
			<div  style={{ padding: "0 1em" }}>
				<section id="contact" className="colorlib-work" data-section="contact" style={{ paddingBottom: 0 }}>

					<div className="colorlib-narrow-content">

						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3" >
								{/* <span className="heading-meta">Projelerim</span> */}
								<h2 className="colorlib-heading">İletişim</h2>
							</div>
						</div>

						<div className="row" style={{ paddingRight: 15, paddingLeft: 15,marginBottom:"50px"}}>
							<p style={{marginBottom:"20px"}}>								
								Sorularınız ve hizmetler hakkında detaylı bilgi için alttaki email adresinden iletişime geçebilirsiniz.
							</p>

							<h3 className="project-heading" style={{float:"left", textDecoration: "underline", marginTop:"2px"}}>								
								Email: 
							</h3>

							<pre style={{float:"left"}}> </pre>
							
							<p className="project-heading">								
								h.erkanekici@gmail.com								
							</p>

						</div>					
					</div>
				</section>
			</div>
		)
	}
}
