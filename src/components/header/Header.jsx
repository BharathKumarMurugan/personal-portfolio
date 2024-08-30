import { useState } from "react";

import "./header.css";

const Header = () => {
    const [showToggle, setShowToggle] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="#" className="nav__log">BKM</a>

                <div className={showToggle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <span className="nav__icon">
                                    <box-icon name='home-alt'></box-icon>
                                </span>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <span className="nav__icon">
                                    <box-icon name='user'></box-icon>
                                </span>
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <span className="nav__icon">
                                    <box-icon name='code-alt'></box-icon>
                                </span>
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#experience" className="nav__link">
                                <span className="nav__icon">
                                    <box-icon name='briefcase'></box-icon>
                                </span>
                                Experience
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">
                                <span className="nav__icon">
                                    <box-icon name='mail-send'></box-icon>
                                </span>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className="nav__close" onClick={() => setShowToggle(!showToggle)}>
                        <box-icon name='plus'></box-icon>
                    </div>
                </div>

                <div className="nav__toggle" onClick={() => setShowToggle(!showToggle)}>
                    <box-icon name='menu'></box-icon>
                </div>
            </nav>
        </header>
    )
}

export default Header;