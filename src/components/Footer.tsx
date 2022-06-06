import {Link} from "gatsby";
import React from 'react';
import {globalData} from "../data/global";
import {Container} from "./Container";
import {Facebook} from "./icons/Facebook";
import {Instagram} from "./icons/Instagram";
import {Pintrest} from "./icons/Pintrest";
import {Logo} from "./Logo";
import {SocialBubble} from "./SocialBubble";

export const Footer: React.FC = () => {

    return (
        <footer className="py-16 md:py-24">
            <Container className="flex items-start w-full justify-between gap-4 flex-wrap md:flex-nowrap">
                <div className="flex justify-center w-full md:w-auto mb-8 md:mb-0">

                <Logo className="w-56 md:w-64 xl:w-96"/>
                </div>
                <div className="flex justify-between gap-8 text-xl leading-[1.5] sm:text-lg  flex-wrap md:flex-nowrap md:w-auto w-full md:text-left text-center justify-evenly">
                    <div className="md:space-y-4 space-x-3 md:space-x-0 justify-center  md:w-auto w-full md:block flex md:translate-y-0.5">
                        <SocialBubble href={globalData.instagram}>
                            <Instagram className="w-5 h-5"/>
                        </SocialBubble>
                        <SocialBubble href={globalData.facebook}>
                            <Facebook className="w-5 h-5"/>
                        </SocialBubble>
                        <SocialBubble href={globalData.pintrest}>
                            <Pintrest className="w-5 h-5"/>
                        </SocialBubble>
                    </div>
                    <div className="w-full sm:w-auto">
                        Shearer Creative Studio <br/>
                        <a className="transition hover:text-secondary" href={globalData.googleMapsLink}
                           target="_blank" rel="noopener noreferrer">Nordwall 60 <br/> 47798 Krefeld </a><br/><br/>
                        <a className="transition hover:text-secondary"
                           href={"mailto:"+globalData.email}>{globalData.email}</a> <br/>
                        <a className="transition hover:text-secondary" target="_blank" rel="noopener noreferrer"
                           href={globalData.phoneLinkWhatsAppHref}>WhatsApp</a><br/>
                        <a className="transition hover:text-secondary" href={"tel:"+globalData.phoneLink}>{globalData.phoneDisplay}</a> <br/>
                    </div>
                    <div className="w-full sm:w-auto">
                        <ul>
                            <li><Link to="/salon" className="transition hover:text-secondary">Salon</Link></li>
                            <li><Link to="/preise" className="transition hover:text-secondary">Preise</Link></li>
                            <li><Link to="/termin" className="transition hover:text-secondary">Termin</Link></li>
                            <li><Link to="/diary" className="transition hover:text-secondary">Diary</Link></li>
                            <li><Link to="/faq" className="transition hover:text-secondary">FAQ</Link></li>
                            <li><Link to="/impressum" className="transition hover:text-secondary">Impressum</Link></li>
                            <li><Link to="/datenschutz" className="transition hover:text-secondary">Datenschutz</Link></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
