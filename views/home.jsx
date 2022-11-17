const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>home sweet home</h1>
                    <a href = "/places">
                        {/* IN JSX, USE "CLASS NAME" instead of "CLASS" */}
                        <button className = "btn-primary">Places Page</button>
                    </a>
            </main>
        </Def>
    )
}

module.exports = home