import { AddServer, Explore, DownloadApp } from "./SvgIcons";

export default function FooterIcon() {

    return (
        <>
            <div className="footer-icon server-icon">{AddServer}</div>
            <div className="footer-icon server-icon">{Explore}</div>
            <div className="footer-icon server-icon">{DownloadApp}</div>
        </>
    );
}