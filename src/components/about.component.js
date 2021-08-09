import { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <div id="about">
                <center><h4>About</h4></center>
                <p>
                    <nobr>H</nobr>i! I am a web developer.
                </p>
                <p>This site is built with React JS framework using an api.</p>
                <p>As this is a single page site it provides faster
                    loading and better efficiency.</p>
                <p>You can contact me if you want a site with React JS.
                </p>
            </div>
        );
    }
}