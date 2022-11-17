const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>home sweet home</h1>
                    <div>
                        <img src="/images/ramen.jpg" />
                        <div>
                        Photo by <a href="https://unsplash.com/@goodeats_yqr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">GoodEats YQR</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </div>
                    </div>
                    <a href = "/places">
                        {/* IN JSX, USE "CLASS NAME" instead of "CLASS" */}
                        <button className = "btn-primary">Places Page</button>
                    </a>
            </main>
        </Def>
    )
}

module.exports = home