import { DmIcon as Icon } from "./SvgIcons"

export default function DmIcon(){

    return(
        <div>
            <a href="#" className="dm-icon server-icon">
                {Icon}
            </a>
            <div className="indicator"></div>
        </div>
    )
}