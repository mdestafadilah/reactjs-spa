import React, { Component } from 'react';

class Meetings extends Component {

     // avaliable anywhere
     constructor(props) {
        super(props);
        this.state = {
            meetingName: '',
        };

        // menyatukan value handlechange ke state (this -> original object)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // method untuk melakukan event handle variable
    handleChange(e) {
        // read value
        const itemName = e.target.name;
        const itemValue = e.target.value;

        // modified state
        this.setState({ [itemName]: itemValue }, ()=> {
            if(this.state.passOne !== this.state.passTwo) {
                this.setState({errorMessage: 'Password not match'})
            }else{
                this.setState({errorMessage: null})
            }
        });
    }

    handleSubmit(e){
        // stop behaviour form to load
        e.preventDefault();
        this.props.addMeeting(this.state.meetingName);
        this.setState({meetingName: ''});
    }

    render(){

        return(
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                    <h1 className="font-weight-light">Add a Meeting</h1>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                        <form
                            className="formgroup"
                            onSubmit={this.handleSubmit}
                        >
                            <div className="input-group input-group-lg">
                            <input
                                type="text"
                                className="form-control"
                                name="meetingName"
                                placeholder="Meeting name"
                                aria-describedby="buttonAdd"
                                value={this.state.meetingName}
                                onChange={this.handleChange}
                            />
                            <div className="input-group-append">
                                <button
                                type="submit"
                                className="btn btn-sm btn-info"
                                id="buttonAdd"
                                >
                                +
                                </button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default Meetings;