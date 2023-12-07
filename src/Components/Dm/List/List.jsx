import ListItem from "./ListItem";
import data from "./data"
import { friendsIcon, msgReqIcon, nitroIcon, addIcon } from "./Icons";
import { useEffect } from "react";
import setHeight from "../../setHeight";

export default function List() {

    setHeight("list", "header", "personal");

    return (
        <div className="list" >
            <ul className="slider">
                {topSection}

                <li className="noHoverEffect">DIRECT MESSAGES {addIcon}</li>

                {list}
            </ul>
        </div>
    );
}



const topSection = (
        <>
            <ListItem icon={friendsIcon} text="Friends" appearance={""} />
            <ListItem icon={nitroIcon} text="Nitro" />
            <ListItem icon={msgReqIcon} text="Message Requests" />
        </>
    );

const list = (
    <>
        {data.map(({userName, appearance, pfp, id}) => (
            <ListItem
                icon={false}
                text={userName}
                appearance={appearance}
                pfp={pfp}
                key={id}
            />
        ))}
    </>
);
