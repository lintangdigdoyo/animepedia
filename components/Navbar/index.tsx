import Link from "next/link";

import style from "styles/components/Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.nav__list}>
          <li>
            <Link className={style.nav__logo} href="/" data-testid="logo">
              AnimePedia
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
