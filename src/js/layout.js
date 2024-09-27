import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CardsPersonajes  }  from "./component/cardsPersonajes"; 
import { DetallePersonajes } from "./views/detallePersonajes";
import { DetallePlanetas } from "./views/detallePlanetas";
import { DetalleVehiculo } from "./views/detalleVehiculo";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div style={{
			backgroundColor: '#121212', /* Fondo negro mate */
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			minHeight: '100vh'
		}}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />						
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/personaje/:uid" element={<DetallePersonajes />} />
						<Route path="/planeta/:uid" element={<DetallePlanetas />} />
						<Route path="/vehiculo/:uid" element={<DetalleVehiculo />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
