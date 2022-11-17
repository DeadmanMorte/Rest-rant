const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404:PaGe nOt FoUNd ERROR</h1>
                <p>dat ish dont exist foo</p>
            </main>
        </Def>
    )
}

module.exports = error404