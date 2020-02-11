import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {Devices} from "../layouts/styled-components";
import {logEvent} from "../helpers/analytics";

const links = [
  {href: "/", label: "Home"},
  {href: "/radar", label: "Tech Radar", showInMobile: false},
  // {
  //   href:
  //     "https://www.youtube.com/channel/UCV7lV9Lq2sc7t0QEKS4xH7A/playlists?view=50&sort=dd&shelf_id=2",
  //   label: "Videos",
  //   target: "_blank"
  // },
  {href: "https://2019.techradarday.com/", label: "2019", target: "_blank"}
  // { href: "/speakers", label: "Speakers" },
  // { href: "/schedule", label: "Schedule" },
  // { href: "/#sponsors", label: "Sponsors" },
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`
}));

const Nav = () => {
  let [isScrolling, setScroll] = useState(false);
  let [mobileMenuIsOpen, toggleMobileMenu] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.document.documentElement.scrollTop > 30);
    };
  }, []);

  const onNavClicked = navLabel => {
    logEvent("Nav", "Clicked", navLabel);
  };

  const router = useRouter();

  return (
    <nav className={isScrolling ? "scrolling" : ""}>
      <a className="logo" href="https://www.tikalk.com" target="_blank">
        <img src="../img/logo_white.svg" />
      </a>

      <svg className="menu-trigger-mobile" viewBox="0 0 32 32" onClick={() => toggleMobileMenu(state => !state)}>
        <use xlinkHref="../img/sprites.svg#icon-menu"></use>
      </svg>

      <ul className={mobileMenuIsOpen ? "open" : ""}>
        {links.map(({key, href, label, target = null, showInMobile = true}) => {
          const isActive = router.pathname === href;
          return (
            <li key={key} className={!showInMobile ? "hide-in-mobile" : ""} onClick={() => onNavClicked(label)}>
              <Link href={href} prefetch={false}>
                <a className={isActive ? "active" : ""} target={target}>
                  {label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="buy-ticket-btn">
        <a
          href="https://www.eventbrite.com/e/tech-radar-day-2020-tickets-86701092301"
          target="_blank"
          onClick={() => {
            logEvent("Tickets", "Clicked", "Navigation");
          }}
        >
          GET TICKETS
        </a>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: Montserrat;
        }
        nav {
          text-align: center;
          background-color: #363434;
          position: fixed;
          width: 100%;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          z-index: 999999;
          top: 0;
        }
        nav.scrolling {
          box-shadow: 1px 2px 8px -2px rgba(0, 0, 0, 0.8);
        }
        .logo {
          position: absolute;
          left: 10%;
        }
        ul {
          display: flex;
          margin: 0;
          justify-content: flex-end;
          width: 50%;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        li a {
          font-size: 16px;
          font-weight: 300;
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
          text-transform: uppercase;
          color: #fff;
          text-decoration: none;
        }
        li a:hover,
        li a.active {
          text-decoration: none;
          color: #ff6f00;
          font-weight: 700;
        }
        nav .buy-ticket-btn {
          position: absolute;
          right: 7%;
          display: block;
          background: linear-gradient(90deg, #e87221 0%, #e9a35c 98%);
          border-radius: 34px;
          color: white;
          font-size: 15px;
          line-height: 15px;
          text-decoration: none;
          text-transform: uppercase;
          width: fit-content;
          height: fit-content;
          padding: 10px 17px;
          user-select: none;
          cursor: pointer;
          font-style: normal;
          font-weight: bold;
          transition: 1s all;
        }
        nav .buy-ticket-btn a {
          user-select: none;
          font-weight: 700;
          text-decoration: none;
          font-size: 15px;
          color: #ffffff;
        }
        .menu-trigger-mobile {
          display: none;
        }

        @media (${Devices.mobile}) {
          nav {
            height: 57px;
          }
          nav ul {
            transform: translateX(-100%);
            width: 256px;
            background: #363333;
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 57px;
            left: 0;
            align-items: flex-startl;
            padding-top: 80px;
            transition: all 0.5s ease;
            height: auto;
            padding: 0 10px;
            text-align: right;
          }
          nav ul.open {
            transform: translateX(0);
          }
          .hide-in-mobile {
            display: none;
          }
          nav li a {
            color: #ffffff;
            font-size: 16px;
            padding: 7px 0;
          }
          .logo {
            top: 13px;
            z-index: 999999;
            left: initial;
            right: 0%;
          }
          .logo img {
            transform: scale(0.6);
          }
          .menu-trigger-mobile {
            width: 20px;
            height: 20px;
            fill: #ffffff;
            display: block;
            position: absolute;
            top: 18px;
            left: 23px;
            cursor: pointer;
          }
          nav .buy-ticket-btn {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
