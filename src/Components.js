import React from 'react';
import './App.css'

export class InfoBox extends React.Component {
    state = { info: <h2>{this.props.defaultText}</h2>, selected: this.props.selected, animation: false }

    constructor(props) {
        super(props);
        this.attachInnerRef = (element) => this.innerRef = element;
    }

    setSelectedButton(button) {
        if (this.props.saveChanges)
            this.props.saveChanges({ ...this.props, selected: button.props.id });
        if (this.state.animationTimeout)
            clearTimeout(this.state.animationTimeout);
        this.setState({ 
            info: button.getInfo(), 
            selected: button.props.id, 
            animation: false, 
            animationTimeout: setTimeout(() => this.setState({animation: true, animationTimeout: null}), 10)
        });
    }

    onAnimationEnd() {
        this.setState({animation: false})
    }

    render() {
        let infoboxClassNames = "infobox";
        if (this.props.innerClassName)
            infoboxClassNames += " " + this.props.innerClassName;
        if (this.state.animation)
            infoboxClassNames += " infobox-animation";

        let outerClassName = "outerInfobox text-align-center";
        if (this.props.className)
            outerClassName += " " + this.props.className;
        if (this.state.animation) {
            outerClassName += " outerInfobox-animation";
        }

        return (
            <div className={outerClassName}>
                <div className="buttonMenu">
                    {this.props.buttons.map(item => React.cloneElement(item,
                        {
                            key: item.props.id,
                            id: item.props.id,
                            onSelect: (btn) => this.setSelectedButton(btn),
                            isSelected: item.props.id === this.state.selected
                        }
                    ))}
                </div>
                <div>
                    <div className={infoboxClassNames} onAnimationEnd={() => this.onAnimationEnd()} ref={this.attachInnerRef}>
                        {this.state.info}
                    </div>
                </div>
            </div>
        )
    }
}

export class InfoButton extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.children)
            if (Array.isArray(this.props.children))
                this.state = { info: this.props.children.map((item, index) => item.props) };
            else
                this.state = { info: this.props.children.props };
        if (props.isSelected)
            this.props.onSelect(this);
    }

    saveInfo(index, props) {
        if (index === -1)
            this.setState({ info: props })
        else {
            let copy = this.state.info.slice();
            copy[index] = props;
            this.setState({ info: copy });
        }
    }

    render() {
        let className = "infoButton";
        if (this.props.isSelected)
            className += " selected-infoButton";

        return (
            <button type="button" className={className} onClick={() => this.props.onSelect(this)} disabled={this.props.isSelected}>{this.props.title}</button>
        );
    }

    getInfo() {
        if (this.props.children)
            if (Array.isArray(this.props.children))
                return this.props.children.map((item, index) => React.cloneElement(item,
                    {
                        ...this.state.info[index],
                        saveChanges: (props) => this.saveInfo(index, props),
                        key: index
                    }));
            else
                return React.cloneElement(this.props.children,
                    {
                        ...this.state.info,
                        saveChanges: (props) => this.saveInfo(-1, props),
                        key: "child"
                    });
        return undefined;
    }
}