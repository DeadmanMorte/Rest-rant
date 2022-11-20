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
                    {html.children}
                </div>
                <footer className='footer'>STUFFS TO PUT LATER</footer>
            </body>
        </html>
    )
}

module.exports = Def
 