import React, { Component } from "react";
import "../scss/03-components/_personalForm.scss";

class PersonalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
        };
    }

    handleOnChange(e) {
        if (e.currentTarget.name === "name") {
            this.setState({
                name: e.currentTarget.value,
            });
        } else if (e.currentTarget.name === "email") {
            this.setState({
                email: e.currentTarget.value,
            });
        } else if (e.currentTarget.name === "address") {
            this.setState({
                address: e.currentTarget.value,
            });
        }
    }

    sendPersonalDetails(e) {
        e.preventDefault();
        const details = {};
        details.name = this.state.name;
        details.email = this.state.email;
        details.address = this.state.address;
        this.props.setPersonalDetails(details);
        e.currentTarget.reset();
    }

    render() {
        return (
            <div className="personal-form-container">
                <form
                    className="personal-form"
                    onSubmit={this.sendPersonalDetails.bind(this)}
                >
                    <h2 className="personal-form-header">Personal Details</h2>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleOnChange.bind(this)}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            onChange={this.handleOnChange.bind(this)}
                            type="email"
                            required
                        />
                    </label>
                    <label>
                        Address:
                        <input
                            type="text"
                            name="address"
                            onChange={this.handleOnChange.bind(this)}
                            required
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default PersonalForm;
