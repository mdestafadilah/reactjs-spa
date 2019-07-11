import React, { Component } from 'react';
import firebase from './Firebase';
import { GoTrashcan } from 'react-icons/go';
import { FaLink } from 'react-icons/fa';
import { navigate } from '@reach/router';
class MeetingsList extends Component {

    constructor(props){
        super(props);
        this.deleteMeeting = this.deleteMeeting.bind(this);
    }

    deleteMeeting = (e, whichMeeting) => {
        e.preventDefault();
        const ref = firebase
            .database()
            .ref(`meetings/${this.props.userID}/${whichMeeting}`);
        
        // delete elemetn in db firebase
        ref.remove();
    }


    render(){
        const { meetings} = this.props;

        // loop the object
        const myMeetings = meetings.map(item => {
            return(
            <div>
                <div className="list-group-item d-flex" key={item.meetingID}>

                    <section className="btn-group align-self-center" role="group" arial-label="Delete">
                        <button className="btn btn-sm btn-outline-secondary" 
                                title="Delete meeting"
                                onClick={e => this.deleteMeeting(e, item.meetingID)}
                        >
                            <GoTrashcan />

                        </button>

                        <button className="btn btn-sm btn-outline-secondary" 
                                title="Check In"
                                onClick={ () => navigate(`/checkin/${this.props.userID}/${item.meetingID}`)}
                        >
                            <FaLink />

                        </button>
                    </section>

                    <section className="pl-3 text-left align-self-center">
                        {item.meetingName}
                    </section>
                </div>
            </div>
            );
        });

        return(
            <div>
              {myMeetings}
            </div>
        );
    }
}

export default MeetingsList;