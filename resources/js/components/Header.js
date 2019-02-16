import React from 'react';

const Header = () => {
        
    return ( 
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<a className="navbar-brand tamrena-title" href="#">TAMRENA</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarsExampleDefault">
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
	)

}

export default Header;