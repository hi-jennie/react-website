
function Header() {
    return (
		<header>
			<h1>My Website</h1>
			<nav>
				<ul> {/*  this will generate an unordered list */}
					<li><a href="/">Home</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="/services">Services</a></li>
				</ul>
			</nav>
			<hr></hr>
		</header>
	);
}

export default Header;