import React from 'react';

const NavBar = () => {
    
        return (
            <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                <nav className="f6 fw6 ttu tracked">
                    <a className="link dim white dib mr3" href="#Home" title="Home">Home</a>
                    <a className="link dim white dib mr3" href="#About" title="About">About</a>
                    <a className="link dim white dib mr3" href="#Store" title="Store">Store</a>
                    <a className="link dim white dib" href="#Contact" title="Contact">Contact</a>
                </nav>
            </header>
        )
}


export default NavBar;