import ListItem from "./ListItem";
import data from "./data"
import { friendsIcon, msgReqIcon, nitroIcon, addIcon } from "./Icons";

export default function List() {

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
        {data.map((item, idx) => (
            <ListItem
                icon={false}
                text={item.userName}
                appearance={item.appearance}
                key={idx}
            />
        ))}
    </>
);
