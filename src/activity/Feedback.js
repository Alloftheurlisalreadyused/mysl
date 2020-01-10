import React, { Component } from 'react';
import NavButton from '../NavButton';

class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userEmail: '',
            feedback: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleNameChange(event) {
        this.setState({ username: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ userEmail: event.target.value });
    }

    handleFeedbackChange(event){
        this.setState({ feedback: event.target.value });
    }

    handleReset(){
        this.setState( {
            username: '',
            userEmail: '',
            feedback: ''
        });
    }

    handleSubmit(event){
        event.preventDefault();
        let valid = true;
        if(this.state.feedback.length < 1){
            alert('Please input your feedback below');
            valid = false;
            return false;
        }
        if(this.state.username.length < 5 || this.state.username.length > 25){
            alert('Please input your name in the correct format (5-25 characters)');
            valid = false;
            return false;
        }
        if(this.state.userEmail === null){
            alert('Please input your email address');
            valid = false;
            return false;
        } 

        if(!this.isValidEmail(this.state.userEmail)) {
            alert('Please input valid email address');
            valid = false;
            return false;
        }
        if (valid){
            this.setState({name: ''});
            this.setState({email: ''});
            this.setState({feedback: ''});
            alert('Thank you for the feedback 😊');
            window.location.reload();
            return true;
        }
    }

    isValidEmail(email) {
        if (email.length <= 2) {
            return false;
        }
        if (email.indexOf("@") === -1) {
            return false;
        }
 
        var parts = email.split("@");
        var dot = parts[1].indexOf(".");
        var dotSplits = parts[1].split(".");
        var dotCount = dotSplits.length - 1;
 
 
        if (dot === -1 || dot < 2 || dotCount > 2) {
            return false;
        }
 
        for (var i = 0; i < dotSplits.length; i++) {
            if (dotSplits[i].length === 0) {
                return false;
            }
        }
 
        return true;
    };

    render() {
        return (
            <div >
                <div className="Menu">
                    <a href="Home.html"><img src="mysl.png" alt="my_sl.png" width="60px" height="80px" /><br /></a>
                    <NavButton className="tablinks" title="Home" route="/" />
                    <NavButton className="tablinks" title="My Package" route="/package" />
                    <NavButton className="tablinks" title="Promo" route="/promo" />
                    <NavButton className="tablinks" title="Feedback" route="/feedback" />
                    <NavButton className="login_button" title="Logout" route="/Login" />
                    <br />
                </div>
                <form name="feedback" method="POST" onsubmit="validate()" className="formfeedback" style={{ fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif' }}>
                    <p style={{ fontSize: '20pt' }}>Feedback Form</p>
                    <label>Name</label> <br />
                    <input style={{ marginTop: '5px', padding: '5px', borderRadius: '5px' }} type="text" id="name" name="name" placeholder="Your Name" />
                    <br /><br />
                    <label>Email:</label> <br />
                    <input style={{ marginTop: '5px', padding: '5px', borderRadius: '5px' }} type="text" id="email" name="email" placeholder="Your Email" />
                    <br /><br />
                    <label>Feedback:</label> <br />
                    <textarea style={{ marginTop: '5px', borderRadius: '5px' }} name="afeedback" id="feedback" placeholder="Your Feedback" rows={10} cols={60} defaultValue={""} />
                    <br /><br />
                    <input style={{ borderRadius: '5px', padding: '10px' }} type="submit" className="submit" defaultValue="Submit" onclick="validate()" />
                    <input type="reset" style={{ borderRadius: '5px', padding: '10px' }} className="reset" defaultValue="Reset" />
                </form>
            </div>
        );
    }
}

export default Feedback;