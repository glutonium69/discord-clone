import { AddServer, Explore, DownloadApp } from "./SvgIcons";

export default function FooterIcon() {

    return (
        <>
            <a href="#" className="footer-icon server-icon">{AddServer}</a>
            <a href="#" className="footer-icon server-icon">{Explore}</a>
            <a href="#" className="footer-icon server-icon">{DownloadApp}</a>
        </>
    );
}