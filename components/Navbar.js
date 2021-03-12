import style from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <Link href="/">Sentiment</Link>
      <Link href="/howitwork">How it Work</Link>
    </nav>
  );
};

export default Navbar;
