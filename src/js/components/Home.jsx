import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Content />
			<Footer />
		</div>
	);
};

export default Home;