import React, { Component } from "react";
import "../scss/03-components/_myCV.scss";

class MyCV extends Component {
    render() {
        return (
            <div className="cv-container">
                <div className="cv">
                    <h2 className="cv-title">My CV</h2>
                    <div className="personal-details">
                        <h3 className="personal-details-title">
                            Personal Details
                        </h3>
                        <div className="personal-details-name">
                            Name: {this.props.personalDetails.name}
                        </div>
                        <div className="personal-details-email">
                            Email: {this.props.personalDetails.email}
                        </div>
                        <div className="personal-details-address">
                            Address: {this.props.personalDetails.address}
                        </div>
                    </div>
                    <div className="eductaion">
                        <h3 className="eduaction-title">Education</h3>
                        <div className="education-name">
                            University: {this.props.educationDetails.university}
                        </div>
                        <div className="education-degree">
                            Degree: {this.props.educationDetails.degree}
                        </div>
                        <div className="education-years">
                            Date: {this.props.educationDetails.start} to{" "}
                            {this.props.educationDetails.end}
                        </div>
                    </div>
                    <div className="work-history">
                        <h3 className="work-histoy-title">Work History</h3>
                        <div className="work-history-company">
                            Company: {this.props.workDetails.company}
                        </div>
                        <div className="work-history-job">
                            Position: {this.props.workDetails.position}
                        </div>
                        <div className="work-history-years">
                            Date: {this.props.workDetails.start} to{" "}
                            {this.props.workDetails.end}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyCV;
