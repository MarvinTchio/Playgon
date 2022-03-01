import React, {Component} from 'react';

class Zoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            participants: 9
            teams: 3
            level: 5
            entry fee: 10
            risk: 40
            reward: [firstPlace:50, secondPlace:30: thirdPlace: 10]
        }
    }

    change(ev) {
        const newLevel = ev.target.value;

        this.setState({
            level: newLevel
        });

        if (this.props.onChange) {
            this.props.onChange({level: newLevel})
        }

    }

    render() {
        return (
            <span className="toolbar-item">
                Manage Risk:
                <label><input type="radio" name="Risk" value="%" onChange={ev => this.change(ev)} checked={this.state.level === "%"} /> 10</label>
                <label><input type="radio" name="Reward" value="$"  onChange={ev => this.change(ev)} checked={this.state.level === "$"} /> 230</label>
            </span>
        );
    }
}

export default Zoom;