import React from 'react'

const Blog = ({title,  src}) => {
    return (
        <div>
            <div class="card text-white bcard"  onclick="window.open('https://muacm-supreme.medium.com/introducing-medi-caps-university-acm-chapter-e41cff5ddedc?source=rss-dc15405cc00')">
                <div class="row">
                <div class="col">
                    <img src={src} class="card-img" alt="..."></img>
                </div>
                <div class="col text-white bcard">
                    <div class="card-body">
                    <h5 class="card-title text-white">{title}</h5>
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
