import React from "react";
import EducationForm from "./components/educationForm";
import Header from "./components/header";
import MyCV from "./components/myCV";
import PersonalForm from "./components/personalForm";
import WorkForm from "./components/workForm";
import "./scss/app.scss";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalDetails: {},
            educationDetails: {},
            workDetails: {},
        };
    }

    setPersonalDetails(newDetails) {
        this.setState({
            personalDetails: newDetails,
        });
    }

    setEducationDetails(newDetails) {
        this.setState({
            educationDetails: newDetails,
        });
    }

    setWorkDetails(newDetails) {
        this.setState({
            workDetails: newDetails,
        });
    }

    render() {
        return (
            <div className="app l-container-full-screen">
                <div className="l-container-1080">
                    <Header title={"CV Generator"} />
                    <div className="forms-container">
                        <PersonalForm
                            personalDetails={this.state.personalDetails}
                            setPersonalDetails={this.setPersonalDetails.bind(
                                this
                            )}
                        />
                        <EducationForm
                            educationDetails={this.state.educationDetails}
                            setEducationDetails={this.setEducationDetails.bind(
                                this
                            )}
                        />
                        <WorkForm
                            workDetails={this.state.workDetails}
                            setWorkDetails={this.setWorkDetails.bind(this)}
                        />
                    </div>
                    <MyCV
                        personalDetails={this.state.personalDetails}
                        educationDetails={this.state.educationDetails}
                        workDetails={this.state.workDetails}
                    />
                </div>
            </div>
        );
    }
}

export default App;
