import React from 'react';
import './App.css'

export class InfoBox extends React.Component {
    state={info: <p>{this.props.defaultText}</p>}

    setInfo(html) {
        this.setState({info: html});
    }

    render() {
        return (
            <div>
                <span className = "buttonMenu">
                    {this.props.buttons.map(item => React.cloneElement(item, {onSelect: (html) => this.setInfo(html)}))}
                </span>
                <div className = "infobox">
                    {this.state.info}
                </div>
            </div>
        )
    }
}

export class InfoButton extends React.Component {
    constructor(props) {
        super(props);
        if (props.isDefaultButton)
            this.props.onSelect(this.getInfo());
    }

    render() {
        return (
            <button type="button" onClick={() => this.props.onSelect(this.getInfo())}>{this.props.title}</button>
        );
    }

    getInfo() {
        return this.props.children;
    }
}