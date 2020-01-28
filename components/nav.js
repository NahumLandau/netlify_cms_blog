import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'


const links = [
  { href: '/', label: 'Home' },
  { href: '/radar', label: 'Radar' },
  { href: '/videos', label: 'Videos' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/updates', label: 'Updates' },
  { href: '/sponsor', label: 'Sponsors' },
  { href: '/venue', label: 'Venue' },
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}));

const Nav = () => {

  let [isScrolling, setScroll] = useState(false);

  useEffect(()=> {
    window.onscroll = () => setScroll(window.document.documentElement.scrollTop > 30)
  },[])

  const router = useRouter();
  return (
    <nav className={isScrolling ? 'scrolling' : ''}>

      <a className="logo" href="https://www.tikalk.com" target="_blank">
        <img src="../img/tikal_logo.png" />
      </a>

      <ul>
        {links.map(({ key, href, label }) => {
          const isActive = router.pathname === href;
          return (
            <li key={key}>
              <Link href={href}>
                <a className={isActive ? 'active' : ''}>{label}</a>
              </Link>
            </li>
          )
        })}
      </ul>

      <style jsx>{`
        :global(body) {
            margin: 0;
            //font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
            font-family: Montserrat
        }
        nav {
            text-align: center;
            background-color: #2C2929;
            position:fixed;
            width:100%;
            height:87px;
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
        a {
            font-size: 18px;
            font-weight: 300;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            text-transform: uppercase;
            color: #fff;
            text-decoration: none;
        }
        a:hover, .active {
            text-decoration: none;
            color: #ff6f00;
            font-weight: 700;
        }
          `}</style>
    </nav>
  )
};

export default Nav;
