import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark text-secondary fixed-top"
            style={{background: 'transparent', height: '15vh' ,color: 'white'}} id="nav">
            <div class="container">

                <a class="navbar-brand" href="/"><img src='MuACMlogo.png' class="logo" alt='logo'></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                    <a class="nav-link" href="/">About </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/Teams">Team</a>
                    </li>
            
                    <li class="nav-item">
                    <a class="nav-link" href="pages/acmapp/event.html">Events</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="pages/acmapp/blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/Contact">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
