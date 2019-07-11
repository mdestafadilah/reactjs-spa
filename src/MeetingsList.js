import React, { Component } from 'react';
import { Link } from '@reach/router';

class MeetingsList extends Component {
    render(){

        const { meetings} = this.props;

        // loop the object
        const myMeetings = meetings.map(item => {
            return(
            <div>
                <div className="list-group-item d-flex" key={item.meetingID}>
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