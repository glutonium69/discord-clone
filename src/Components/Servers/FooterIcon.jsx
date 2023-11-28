import { AddServer, Explore, DownloadApp } from "./SvgIcons";

let icons = [AddServer, Explore, DownloadApp]

export default function FooterIcon() {

    return (
        <div>
            {icons.map((icon, idx) => (
                <div className="footer-icon-wrapper" key={idx}>
                    <a href="#" className="footer-icon server-icon">{icon}</a>
                    {icon === AddServer || <div className="indicator"></div>}
                </div>
            ))}
        </div>
    );
}