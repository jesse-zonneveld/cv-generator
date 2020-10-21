import React, { Component } from "react";
import "../scss/03-components/_workForm.scss";

class WorkForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: "",
            position: "",
            start: "",
            end: "",
        };
    }

    handleOnChange(e) {
        if (e.currentTarget.name === "company") {
            this.setState({
                company: e.currentTarget.value,
            });
        } else if (e.currentTarget.name === "position") {
            this.setState({
                position: e.currentTarget.value,
            });
        } else if (e.currentTarget.name === "start") {
            this.setState({
                start: e.currentTarget.value,
            });
        } else if (e.currentTarget.name === "end") {
            this.setState({
                end: e.currentTarget.value,
            });
        }
    }

    sendWorkDetails(e) {
        e.preventDefault();
        const details = {};
        details.company = this.state.company;
        details.position = this.state.position;
        details.start = this.state.start;
        details.end = this.state.end;
        this.props.setWorkDetails(details);
        e.currentTarget.reset();
    }

    render() {
        return (
            <div className="work-form-container">
                <form
                    className="work-form"
                    onSubmit={this.sendWorkDetails.bind(this)}
                >
                    <h2 className="work-form-header">Work History</h2>
                    <label>
                        Company:
                        <input
                            type="text"
                            name="company"
                            onChange={this.handleOnChange.bind(this)}
                            required
                        />
                    </label>
                    <label>
                        Position:
                        <input
                            type="text"
                            name="position"
                            onChange={this.handleOnChange.bind(this)}
                            required
                        />
                    </label>
                    <div className="dates-holder">
                        <label>
                            Start Date:
                            <input
                                type="date"
                                name="start"
                                onChange={this.handleOnChange.bind(this)}
                                required
                            />
                        </label>
                        <label>
                            End Date:
                            <input
                                type="date"
                                name="end"
                                onChange={this.handleOnChange.bind(this)}
                                required
                            />
                        </label>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default WorkForm;
