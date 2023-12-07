import DmIcon from "./DmIcon"
import ServerIcon from "./ServerIcon"
import FooterIcon from "./FooterIcon"
import { useEffect } from "react"
import {servers} from "./data";
import setHeight from "../setHeight"

export default function Servers(){

    setHeight("servers");

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