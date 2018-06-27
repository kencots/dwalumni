import React , {Component } from "react";

export default class FirstPanel extends Component{
	render(){
		return(
			<section className="py-0">
				<div className="container-fluid banner">
				    <div className="section-body">
				      	<div className="container">
				      		<div className="row" >
				       			<div className="col-md-1"></div>
			       	 			<div className="col-md-9 tagline" >
			          				<section>
			          					<div className="container">
			            					<div className="section-header">
			              						<div className="section-title">
			                						<h1 className="banner-title">
			                							<span className="brand text-white" >
			                								Learn to Code, Get A Job,
			                								Start Here 
			                							</span>
			                						</h1>
			              						</div>
			            					</div>
			            					<div className="section-body">
			              						<p className="ss text-white">Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf.</p>
			              						<button className="btn btn-danger btn-lg" >Baca Selanjutnya</button>
			            					</div>
			          					</div>
			        				</section>
			        			</div>
			        			<div className="col-md-1"></div>
				      		</div>
				    	</div>
					</div>
				</div>
			</section>
		);
	}
}
