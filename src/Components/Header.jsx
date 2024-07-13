// components/Header.js
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosClose } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";
import styles from "../Styles/navbar.module.css";
import { useRouter } from 'next/navigation';
import logo from "../Images/logo.png"

const Header = ({ highlight }) => {
    const router = useRouter();
    const [navActive, setNavActive] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const gotousersignup=()=>{
        router.push("/Usersignup");
    }

    const gotoownersignup=()=>{
        router.push("/Ownersignup");
    }
    const gotouserlogin=()=>{
        router.push("/Userlogin");
    }
    const gotoownerlogin=()=>{
        router.push("/Ownerlogin");
    }

    const handleNavToggle = () => setNavActive(!navActive);

    return (
        <>
            <header className={`${scrolling ? styles.scrolling : ""} ${styles.header}`}>
                <a href="#">
                    <Image className={styles.logo} src={logo} alt='Basic Brush Studio' />
                </a>
                <div>
                    <ul className={`${styles.navbar} ${navActive ? styles.active : ''}`}>
                        <li>Job</li>
                        <li>Company</li>
                        <li>Career Advice</li>
                        <li className={styles.dropdown}>
                            Login
                            <ul className={styles.dropdownMenu}>
                                <li onClick={gotouserlogin}>User Login</li>
                                <li onClick={gotoownerlogin}>Company Login</li>
                            </ul>
                        </li>
                        <li className={styles.dropdown}>
                            Register
                            <ul className={styles.dropdownMenu}>
                                <li onClick={gotousersignup}>User Registration</li>
                                <li onClick={gotoownersignup}>Company Registration</li>
                            </ul>
                        </li>
                        <a href="#" onClick={handleNavToggle} className={styles.close}>
                            <div className="bg-red-700 rounded-full p-1 w-7 h-7 flex items-center justify-center">
                                <IoIosClose className="text-white" />
                            </div>
                        </a>
                    </ul>
                </div>
                <div className={styles.mobile}>
                    <i><HiBars3 id={styles.bar} onClick={handleNavToggle} /></i>
                </div>
            </header>
        </>
    );
};

export default Header;