// React
// need to tell React what element we want to creeate
// then pass in properties
// lastly tell react.createElement the children we want to include

// put in html
{/* <script crossorigin="" src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin="" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>  */}


const myReactComponent = React.createElement("h1", {}, "I am creating my first React component")

// nested react component
const myNestedReactComponent = React.createElement("div", {}, React.createElement("p", {}, "This element is nested"))

// to use JavaScript Syntax Extension (JSX), need to use a transpiler --Babel

// CLASS NOTES 03/09/2022

// First react component uppercase
// components folder in src -> components/TVShow.jsx

// to use react, import dependencies

import React, {Component} from 'react'

// initiate the class
class TVShow extends Component{
    render(){
        // destructure here
        const {title, episodes} = this.props
        return (
            // use javascript to create something like html, return used to translate into html
            <h1> TV show Component </h1> 
        )
    }
}
export default TVShow;

//  in app.js

// App.js is the entry point

// import TVShow from '.components/TVShow'
// function App(){
    // create object
    // const tvshow1 = {title:"Friends", episodes:236, hashtags = ["sit-com", "classic"]}
//     return {
//         <div className = "App">
//         <TVShow />
//         <TVShowObj tvshow = {tvshow1} />
//         </div>
//     }
// }

// export default App;

// parent relationship between App.js and tv show components (children components)
// tvshow  tvshowobj are siblings