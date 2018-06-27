import React , {Component} from "react";
import * as styles from "./program.scss";

// import jQuery from "../../../resources/js/jquery.min.js";
import FirstPanel from "./sections/first-panel";
import FloatDiv from "./sections/float-div";
import Service from "./sections/service";
import HireTab from "./sections/hire-tab";
import OurProgram from "./sections/our-program";
import Team from "./sections/team";
import HiringPatner from "./sections/hiring-patner";
import Testimonal from "./sections/testimonial";
import Schedule from "./sections/schedule";
import ProgramTulition from "./sections/program-tulition";
import CompanyPatner from "./sections/company-patner";

export default class Program extends Component {
	
	render(){
		// console.log(jQuery())
		return(
			<div>

				<FirstPanel />
				<FloatDiv   />
				<Service    />
				
				<div className="container"></div>
				<HireTab />
				<OurProgram />
				<Team />
				<HiringPatner />
				
				<Testimonal />
				<Schedule />
				<ProgramTulition />
				<CompanyPatner />

			</div>
		);
	}
}