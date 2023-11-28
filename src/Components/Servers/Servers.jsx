import DmIcon from "./DmIcon"
import ServerIcon from "./ServerIcon"
import FooterIcon from "./FooterIcon"
import { useEffect } from "react"
import {servers} from "./data";

export default function Servers(){

    useEffect(() => {
        const servers = document.querySelector(".servers");
        servers.style.height = window.innerHeight + "px";
    },[])

    return(
        <div className="servers" >
            <DmIcon />

            {servers.map(server => (
                <ServerIcon 
                    icon={server.icon}
                    key={server.id}
                />
            ))}

            <FooterIcon />
        </div>
    )
}