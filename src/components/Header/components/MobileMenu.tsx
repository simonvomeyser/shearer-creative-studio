import clsx from "clsx";
import {m as motion} from "framer-motion";
import {Link} from "gatsby";

import React from 'react';
import {globalData} from "../../../data/global";
import {ButtonStyles} from "../../ButtonStyles";
import {Container} from "../../Container";
import {Facebook} from "../../icons/Facebook";
import {Instagram} from "../../icons/Instagram";
import {Pinterest} from "../../icons/Pinterest";
import {Logo} from "../../Logo";
import {SocialBubble} from "../../SocialBubble";
import {MenuLink} from "./MenuLink";

export type MobileMenuProps = {
    className?: string;
    children?: React.ReactNode;
    isOpen?: Boolean;
};

const mobileMenuMotionVariant = {
    closed: {
        opacity: 0,
        y: '-100%',
        transition: {
            y: {
                'duration': .3
            }
        }
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.02,
            delayChildren: 0.15,
            y: {
                'duration': .2
            }
        }
    },
}

const navLinkMotionVariant = {
    closed: {
        opacity: 0,
        y: '-25%'
    },
    open: {
        opacity: 1,
        y: 0,
    },
}

const fadeMotionVariant = {
    closed: {
        opacity: 0,
    },
    open: {
        opacity: 1,
    },
}

export const MobileMenu: React.FC<MobileMenuProps> = ({className, isOpen}) => {
    return (
        <motion.div
            data-scroll-lock-scrollable
            variants={mobileMenuMotionVariant}
            animate={isOpen ? 'open' : 'closed'}
            className={clsx('opacity-0 h-screen-safari-fix overflow-y-auto  bg-s-black w-full inset-0 fixed', className)}>
            <Container className="flex flex-col h-full items-center py-8">
                <motion.div variants={fadeMotionVariant}>
                    <Link to="/" aria-label="Link zur Startseite">
                        <Logo className="w-36 flex-shrink-0 xs:w-56 mb-4 xs:mb-12 "/>
                    </Link>
                </motion.div>
                <ul className=" sm:flex-1 justify-center text-center text-2xl xs:text-3xl md:text-5xl flex flex-col mb-4">
                    <MenuLink linkClassName="py-2 md:py-4" href="/">
                        <motion.div variants={navLinkMotionVariant}>Startseite</motion.div>
                    </MenuLink>
                    <MenuLink linkClassName="py-2 md:py-4" href="/salon">
                        <motion.div variants={navLinkMotionVariant}>Salon</motion.div>
                    </MenuLink>
                    <MenuLink linkClassName="py-2 md:py-4" href="/preise">
                        <motion.div variants={navLinkMotionVariant}>Preise</motion.div>
                    </MenuLink>
                    <MenuLink linkClassName="py-2 md:py-4" href="/diary">
                        <motion.div variants={navLinkMotionVariant}>Diary</motion.div>
                    </MenuLink>
                    <li className="mt-10">
                        <Link to="/termin">
                            <ButtonStyles>
                                Termin buchen
                            </ButtonStyles>
                        </Link>
                    </li>
                </ul>
                <motion.div variants={fadeMotionVariant} className="mt-auto pb-4 pt-2">
                    <div className="w-full text-center mt-auto mb-8 text-lg space-y-1">
                        <a className="inline-block transition hover:text-secondary"
                           href={"mailto:" + globalData.email}>{globalData.email}</a> <br/>
                        <a className="inline-block transition hover:text-secondary" target="_blank" rel="noopener noreferrer"
                           href={globalData.phoneLinkWhatsAppHref}>WhatsApp</a><br/>
                        <a className="inline-block transition hover:text-secondary"
                           href={"tel:" + globalData.phoneLink}>{globalData.phoneDisplay}</a> <br/>
                        <a className="inline-block transition hover:text-secondary" href={globalData.googleMapsLink}
                           target="_blank" rel="noopener noreferrer">Nordwall 60 47798 Krefeld </a>
                    </div>
                    <div className="space-x-4 justify-center w-full mb-4 flex">
                        <motion.div animate={{
                            x: isOpen ? 0 : 20,
                            opacity: isOpen ? 1 : 0,
                            transition: {duration: .75, delay: .3}
                        }}>
                            <SocialBubble ariaLabel="Link zu Instagram öffnen"  href={globalData.instagram}>
                                <Instagram className="w-4 h-4"/>
                            </SocialBubble>
                        </motion.div>
                        <SocialBubble ariaLabel="Link zu Facebook öffnen"  href={globalData.facebook}>
                            <Facebook className="w-4 h-4"/>
                        </SocialBubble>
                        <motion.div animate={{
                            x: isOpen ? 0 : -20,
                            opacity: isOpen ? 1 : 0,
                            transition: {duration: .75, delay: .3}
                        }}>
                            <SocialBubble ariaLabel="Link zu Pinterest öffnen"  href={globalData.facebook}>
                                <Pinterest className="w-4 h-4"/>
                            </SocialBubble>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </motion.div>
    );
};
