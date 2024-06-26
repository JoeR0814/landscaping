import React from 'react';
import './MeetOurTeam.css';

function MeetOurTeam() {
    return (
        <section className="meet-our-team">
            <h2>Meet Our Team</h2>
            <div className="team-container">
                <div className="team-member">
                    <img src="/path/to/team-member-1.jpg" alt="John Doe" />
                    <h3>John Doe</h3>
                    <p>Landscape Architect</p>
                </div>
                <div className="team-member">
                    <img src="/path/to/team-member-2.jpg" alt="Jane Smith" />
                    <h3>Jane Smith</h3>
                    <p>Horticulturist</p>
                </div>
                <div className="team-member">
                    <img src="/path/to/team-member-3.jpg" alt="Mike Johnson" />
                    <h3>Mike Johnson</h3>
                    <p>Hardscape Specialist</p>
                </div>
            </div>
        </section>
    );
}

export default MeetOurTeam;