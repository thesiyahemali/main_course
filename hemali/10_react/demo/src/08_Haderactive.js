import React from 'react'
import './09_Hederactive.css'

const Haderactive = () => {
  return (
    <>
       <header>
        <div class="header">
            <div class="left">
                <h1>Shapely Demo</h1>
            </div>

            <div class="right">
                <ul>
                    <li><a href="">HOME</a></li>

                    <li><a href="blog.html">BOLG</a></li>
                    <li><a href="">PORTFOLIO</a></li>

                    <li class="drop"><a href="">ABOUTTHETESTS </a>
                        <div class="dropdown">
                            <ul>
                                <li><a href="">page image aligmnet</a></li>
                                <li><a href="">page markup and formating</a></li>
                                <li><a href="">clearing folats</a></li>
                                <li><a href="">page with comments</a></li>
                                <li><a href="">page with comments disable</a></li>

                            </ul>


                        </div>
                    </li>
                    <li class="level"><a href="">LEVEL1</a>
                        <div class="leve">
                            <ul>
                                <li class="levele"><a href="">leve2 ></a>
                                    <div class="levele2">
                                        <ul>
                                            <li><a href="">level3</a></li>
                                            <li><a href="">level3a</a></li>

                                            <li><a href="">level3b</a></li>

                                        </ul>
                                    </div>
                                </li>
                                <li><a href="">leve2a</a></li>
                                <li><a href="">leve2b</a></li>

                            </ul>
                        </div>

                    </li>
                    <li><a href="">SHOP</a></li>
                    <li><i class="fa-solid fa-magnifying-glass"></i></li>


                </ul>
            </div>
        </div>
    </header>
    </>
  )
}

export default Haderactive
