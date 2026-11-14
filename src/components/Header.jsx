import { useEffect, useRef } from 'react';
import styles from './Header.module.css';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import useAppStore from '../store/useAppStore';
import useRoute from '../hooks/useRoute';
import { navDropdowns } from '../data/portfolioData';

export default function Header() {
    const mobileMenuOpen = useAppStore((s) => s.mobileMenuOpen);
    const activeDropdown = useAppStore((s) => s.activeDropdown);
    const toggleMobileMenu = useAppStore((s) => s.toggleMobileMenu);
    const closeMobileMenu = useAppStore((s) => s.closeMobileMenu);
    const setActiveDropdown = useAppStore((s) => s.setActiveDropdown);
    const openServiceModal = useAppStore((s) => s.openServiceModal);

    const isAboutPage = useRoute()?.key === 'about';

    const headerRef = useRef(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (activeDropdown && !e.target.closest(`.${styles.dropdown}`)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [activeDropdown, setActiveDropdown]);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY > lastScrollY.current && currentY > 80) {
                headerRef.current?.classList.add(styles.hidden);
            } else {
                headerRef.current?.classList.remove(styles.hidden);
            }
            lastScrollY.current = currentY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header ref={headerRef} className={`${styles.header} ${mobileMenuOpen ? styles.menuOpen : ''}`}>
            <div className="container">
                <div className={styles.headerInner}>
                    <a href="/" className={styles.logo}>Cường Nguyễn</a>

                    {/* Desktop + Mobile Nav */}
                    <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
                        <a
                            href="/#about"
                            className={`${styles.navLink} ${isAboutPage ? styles.navActive : ''}`}
                            onClick={closeMobileMenu}
                        >Về mình</a>

                        {navDropdowns.map((dropdown) => (
                            <div
                                key={dropdown.key}
                                className={styles.dropdown}
                                onMouseEnter={() => { if (window.innerWidth > 900) setActiveDropdown(dropdown.key); }}
                                onMouseLeave={() => { if (window.innerWidth > 900) setActiveDropdown(null); }}
                            >
                                <button
                                    className={styles.dropbtn}
                                    onClick={() => {
                                        if (window.innerWidth > 900) {
                                            if (activeDropdown !== dropdown.key) setActiveDropdown(dropdown.key);
                                            return;
                                        }
                                        setActiveDropdown(activeDropdown === dropdown.key ? null : dropdown.key);
                                    }}
                                    aria-expanded={activeDropdown === dropdown.key}
                                    aria-haspopup="true"
                                >
                                    {dropdown.label} <FiChevronDown />
                                </button>
                                <div
                                    className={`${styles.dropdownContent} ${activeDropdown === dropdown.key ? styles.dropdownOpen : ''}`}
                                    data-testid={`dropdown-${dropdown.key}`}
                                >
                                    {dropdown.items.map((item) => {
                                        const handleClick = (e) => {
                                            if (item.href === '#' && dropdown.key === 'services') {
                                                e.preventDefault();
                                                openServiceModal(item.slug);
                                            } else {
                                                closeMobileMenu();
                                            }
                                        };
                                        return (
                                            <a key={item.label} href={item.href} onClick={handleClick}>
                                                {item.label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}

                        <button className={`${styles.ctaButton} ${styles.mobileCta}`}>Hợp tác với mình</button>
                    </nav>

                    <div className={styles.actions}>
                        <button className={`${styles.ctaButton} ${styles.desktopCta}`}>Hợp tác với mình</button>

                        {/* Mobile Menu Icon */}
                        <button
                            className={styles.hamburger}
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                            data-testid="hamburger-btn"
                        >
                            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
