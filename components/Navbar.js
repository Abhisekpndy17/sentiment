import style from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header>
    <nav className={style.nav}>
      <Link href="/">Sentiment</Link>
      <div className={style.hamburger} onClick={showSidebar}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      <div className={sidebar ? 'nav-menu active' : 'nav-menu'} onClick={showSidebar}>
        <Link href='/'>home</Link>
        <Link href='/howitwork'>What is it, Sentiment Analysis</Link>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
