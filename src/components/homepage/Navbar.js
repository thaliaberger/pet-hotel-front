import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const [state, setState] = useState("hidden");

	function handleScroll() {
		if (document.documentElement.scrollTop > 450) {
			setState("show");
		} else {
			setState("hidden");
		}
	}

	var scrollTop = function () {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.onscroll = () => handleScroll();
	}, []);

	return (
		<div className={state}>
			<div className="nav">
				<div className="nav-content">
					<Link className="nav-content" to="/" onClick={scrollTop}>
						<p>Entrar</p>
					</Link>
					<Link className="nav-content" to="/register">
						<p>Cadastre-se</p>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
