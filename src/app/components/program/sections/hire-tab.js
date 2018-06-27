import React , {Component} from "react" ;

export default class HireTab extends Component{
	render(){
		return(
			<section className="pb-0">
			  	<div className="container-fluid bg-primary red-container">
			    	<div className="section-header">
			      		<div className="section-title">
			         		<h2 className="text-white text-bold text-center">Ready To Hire?</h2>
			      		</div>
			    	</div>
			    	<div className="section-body">
			      		<div className="row">
			    			<div className="col-md-3"></div>
				    		<div className="col-md-6 text-center">
					      		<p className="text-white ">Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an
					      		</p>
					      		<button className="btn btn-danger btn-lg btn-outline-light " >Lorem Ipsum</button>
				    		</div>
				    		<div className="col-md-3"></div>
			  			</div>
			    	</div>
			  	</div>
			</section>
		)
	}
}