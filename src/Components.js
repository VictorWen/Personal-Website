import React from 'react';
import './App.css'

export class InfoBox extends React.Component {
    state={info: <p>{this.props.defaultText}</p>, selected: this.props.selected}

    setInfo(html) {
        this.setState({info: html});
    }

    setSelectedButton(button) {
        if (this.props.saveChanges)
            this.props.saveChanges({...this.props, selected: button.props.id});
        this.setState({info: button.getInfo(), selected: button.props.id});
    }

    render() {
        return (
            <div>
                <span className = "buttonMenu">
                    {this.props.buttons.map(item => React.cloneElement(item, {key: item.props.id, id: item.props.id, onSelect: (btn) => this.setSelectedButton(btn), isSelected: item.props.id === this.state.selected}))}
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
        if (this.props.children)
            this.state = {info: this.props.children.map((item, index) => item.props)};
        if (props.isSelected)
            this.props.onSelect(this);
        this.isReactElement=true;
    }

    saveInfo(index, props) {
        let copy = this.state.info.slice();
        copy[index] = props;
        this.setState({info: copy});
    }

    render() {
        return (
            <button type="button" onClick={() => this.props.onSelect(this)}>{this.props.title}</button>
        );
    }

    getInfo() {
        if (this.props.children)
            return this.props.children.map((item, index) => React.cloneElement(item, {...this.state.info[index], saveChanges: (props) => this.saveInfo(index, props), key: index}));
        return undefined;
    }
}