import DmIcon from "./DmIcon"
import ServerIcon from "./ServerIcon"
import FooterIcon from "./FooterIcon"
import { useEffect } from "react"

export default function Servers(){

    useEffect(() => {
        const servers = document.querySelector(".servers");
        servers.style.height = window.innerHeight + "px";
    },[])

    return(
        <div className="servers" >
            <DmIcon />
            <ServerIcon />
            <FooterIcon />
        </div>
    )
}