import * as React from 'react';
import { useState } from 'react';
import './EventCard.css';
import { Button } from '@mui/material';
// import Stack from "@mui/material/Stack";

function EventCard() {
    const [admin, setAdmin] = useState(true);
    return (
        <div className="container">
            <div className="card">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sunset_2007-1.jpg/1200px-Sunset_2007-1.jpg"
                    alt="img"
                />
                <div className="event-info">
                    <h3>Event Heading</h3>
                    <p className="event-timing">99th December 2099</p>
                    <p className="event-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nobis nam quaerat
                        soluta ipsam repudiandae cumque. Impedit quisquam quidem laboriosam, quam sunt
                        architecto numquam placeat iusto, obcaecati, vel fugit blanditiis?
                    </p>
                    <div className="link_buttons">
                        <Button href="#">Know More</Button>
                        <Button href="#">C2A</Button>
                    </div>
                    <div className="edit_buttons">
                        {admin && (
                            <div className=" buttons-admin">
                                <Button href="#" style={{ color: 'green' }}>
                                    Edit
                                </Button>
                                <Button href="#" style={{ color: 'red' }} disableElevation>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;