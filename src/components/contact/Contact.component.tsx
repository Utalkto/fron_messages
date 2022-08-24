import { useState } from "react";


function Contact (name:any, phoneNumber:any) {


    return (
        <a href="#" className="list-group-item list-group-item-action border-0">
            <div className="badge bg-success float-right">{phoneNumber}</div>
                <div className="d-flex align-items-start">
                <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40" />
                <div className="flex-grow-1 ml-3">
                    {name}
                    <div className="small"><span className="fas fa-circle chat-online"></span> Online</div>
                </div>
            </div>
        </a>
    )

}



export default Contact;