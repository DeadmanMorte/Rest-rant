const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"/>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <div className='content'>
                <nav>
                    <ul>
                        <li>
                        <a href="/">Home</a>
                        </li>
                        <li>
                        <a href="/places">Places</a>
                        </li>
                        <li>
                        <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                    {html.children}
                </div>
                <footer className='footer'>STUFFS TO PUT LATER</footer>
            </body>
        </html>
    )
}

module.exports = Def
 