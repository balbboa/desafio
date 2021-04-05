import styles from "../styles/Sidebar.module.css"
import { FaBars, FaPhoneAlt, FaWhatsapp, FaChevronDown } from 'react-icons/fa'
import Link from 'next/link'
import React from "react";

const { useState, useEffect, useRef } = React;

export function Sidebar() {

    const [showNav, setShowNav] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);


    const navbar = useRef(null);
    const dropdown = useRef(null);

    useEffect(() => {

        if (!showNav) return;
        function handleClick(event) {
            if (navbar.current && !navbar.current.contains(event.target)) {
                setShowNav(false);
            }
        }
        window.addEventListener("click", handleClick);

        return () => window.removeEventListener("click", handleClick);
    }, [showNav]);

    useEffect(() => {

        if (!showDropdown) return;
        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        window.addEventListener("click", handleClick);

        return () => window.removeEventListener("click", handleClick);
    }, [showDropdown]);

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.burgerNav}>
                    <button onClick={() => setShowNav(b => !b)}>
                        <FaBars size={28} />
                    </button>
                </div>
                <div>
                    <img src="/icons/LogoDealer.svg" alt="logo" />
                </div>
                <div className={styles.hLinks}>
                    <Link href="#">
                        <span className={styles.circleClassesPhone}>
                            <FaPhoneAlt size={14} />
                        </span>

                    </Link>
                    <Link href="#">
                        <span className={styles.circleClassesWpp}>
                            <FaWhatsapp size={18} />
                        </span>
                    </Link>
                    <img src="/icons/LogoFiat.svg" alt="logo" />
                </div>
            </header>

            {showNav && (
                <nav className={styles.nav}>
                    <ul>
                        <li className={styles.dropdown}>

                            <a onClick={() => setShowDropdown(b => !b)}>
                                Institucional <FaChevronDown size={18} />
                            </a>
                            {showDropdown && (
                                <ul className={styles.dropdownList}>
                                    <li><a href="#">Quem somos</a></li>
                                    <li><a href="#">Fale Conosco</a></li>
                                    <li><a href="#">Endereços</a></li>
                                </ul>)}
                        </li>
                        <li>
                            <a href="#">Novos</a>
                        </li>
                        <li>
                            <a href="#">Ofertas</a>
                        </li>
                        <li>
                            <a href="#">Seminovos</a>
                        </li>
                        <li>
                            <a href="#">Consórcio <span className={styles.pill}>Novo</span></a>
                        </li>
                        <li>
                            <a href="#">Vendas Direta</a>
                        </li>
                        <li>
                            <a href="#">Lifestyle</a>
                        </li>
                        <li>
                            <a href="#">Pós-vendas</a>
                        </li>
                    </ul>
                </nav>
            )}


            <section className={styles.content}>
                <div className={styles.progressBar}>
                    <div className={styles.bar}></div>
                </div>

                <div className={styles.bottomLink}>
                    <a href="#">
                        VER TODOS OS MODELOS
                    </a>
                </div>
            </section>

            <Link href="#">
                <span className={`${styles.circleClassesWpp} ${styles.whatsapp}`} >
                    <FaWhatsapp size={28} />
                </span>
            </Link>

        </div>
    );
}