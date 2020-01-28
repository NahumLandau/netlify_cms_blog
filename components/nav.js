import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home" },
  { href: "/radar", label: "Radar" },
  { href: "/videos", label: "Videos" },
  { href: "/speakers", label: "Speakers" },
  { href: "/schedule", label: "Schedule" },
  { href: "/updates", label: "Updates" },
  { href: "/sponsor", label: "Sponsors" },
  { href: "/venue", label: "Venue" }
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`
}));

const Nav = () => {
  let [isScrolling, setScroll] = useState(false);
  let [showNavGetTicket, setNavGetTicket] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.document.documentElement.scrollTop > 30);
      setNavGetTicket(window.document.documentElement.scrollTop > 500);
    };
  }, []);

  const router = useRouter();
  return (
    <nav className={isScrolling ? "scrolling" : ""}>
      <a className="logo" href="https://www.tikalk.com" target="_blank">
        <img src="../img/tikal_logo.png" />
      </a>

      <ul>
        {links.map(({ key, href, label }) => {
          const isActive = router.pathname === href;
          return (
            <li key={key}>
              <Link href={href}>
                <a className={isActive ? "active" : ""}>{label}</a>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className={`buy-ticket-btn ${showNavGetTicket ? "active" : ""}`}>
        <a
          href="https://www.eventbrite.com/e/fullstack-tech-radar-day-tickets-55203831145#tickets"
          target="_blank"
        >
          BUY TICKET
        </a>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: Montserrat;
        }
        nav {
          text-align: center;
          background-color: #2c2929;
          position: fixed;
          width: 100%;
          height: 87px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          z-index: 999999;
        }
        nav.scrolling {
          box-shadow: 1px 2px 8px -2px rgba(0, 0, 0, 0.8);
        }
        .logo {
          position: absolute;
          left: 2%;
          top: 20px;
        }
        ul {
          display: flex;
          justify-content: left;
          margin: 0;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        li a {
          font-size: 18px;
          font-weight: 300;
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
          text-transform: uppercase;
          color: #fff;
          text-decoration: none;
        }
        li a:hover,
        .active {
          text-decoration: none;
          color: #ff6f00;
          font-weight: 700;
        }
        nav .buy-ticket-btn {
          position: absolute;
          right: 20px;
          top: -50px;
          border-radius: 5px;
          filter: brightness(100%);
          cursor: pointer;
          width: fit-content;
          height: fit-content;
          font-size: 16px;
          padding: 10px 45px 10px 35px;
          margin-top: 8px;
          margin-bottom: 17px;
          background-color: #ff6f00;
          transition: 1s;
          opacity: 0;
        }
        nav .buy-ticket-btn.active {
          top: 13px;
          opacity: 1;
        }
        nav .buy-ticket-btn a {
          user-select: none;
          font-weight: 700;
          text-decoration: none;
          font-size: 16px;
          color: #ffffff;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
