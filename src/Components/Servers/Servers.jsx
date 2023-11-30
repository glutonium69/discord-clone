import DmIcon from "./DmIcon"
import ServerIcon from "./ServerIcon"
import FooterIcon from "./FooterIcon"
import { useEffect } from "react"
import {servers} from "./data";

export default function Servers(){

    useEffect(() => {
        
        function setLength(){
            
            const servers = document.querySelector(".servers");
            servers.style.height = window.innerHeight + "px";
        }
        setLength()

        window.addEventListener("resize",setLength)
        return () => window.removeEventListener("resize", setLength)

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