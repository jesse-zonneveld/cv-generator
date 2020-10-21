import React, { Component } from "react";
import "../scss/03-components/_educationForm.scss";

class EducationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            university: "",
            degree: "",
            start: "",
            end: "",
        };
    }

    handleOnChange(e) {
        if (e.currentTarget.name === "university") {
            this.setState({
                university: e.currentTarget.value,
            });
        } else if (e.currentTarget.name === "degree") {
            this.setState({
                degree: e.currentTarget.value,
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

    sendEducationDetails(e) {
        e.preventDefault();
        const details = {};
        details.university = this.state.university;
        details.degree = this.state.degree;
        details.start = this.state.start;
        details.end = this.state.end;
        this.props.setEducationDetails(details);
        e.currentTarget.reset();
    }

    render() {
        return (
            <div className="education-form-container">
                <form
                    className="education-form"
                    onSubmit={this.sendEducationDetails.bind(this)}
                >
                    <h2 className="education-form-header">Education</h2>
                    <label>
                        University:
                        <input
                            type="text"
                            name="university"
                            onChange={this.handleOnChange.bind(this)}
                            required
                        />
                    </label>
                    <label>
                        Degree:
                        <input
                            type="text"
                            name="degree"
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

export default EducationForm;
