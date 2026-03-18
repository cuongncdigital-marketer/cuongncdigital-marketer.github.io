import styles from './Footer.module.css';
import { footerLinks } from '../data/portfolioData';
import { SiYoutube, SiFacebook, SiTiktok, SiSubstack } from 'react-icons/si';
import useAppStore from '../store/useAppStore';

const socials = [
    { label: 'YouTube', icon: SiYoutube, href: '#' },
    { label: 'Facebook', icon: SiFacebook, href: '#' },
    { label: 'TikTok', icon: SiTiktok, href: '#' },
    { label: 'Substack', icon: SiSubstack, href: '#' },
];

export default function Footer() {
    const openServiceModal = useAppStore((s) => s.openServiceModal);

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerInner}`}>

                {/* Left Column: Brand & Socials */}
                <div className={styles.brandCol}>
                    <h3 className={styles.logo}>Cường Nguyễn</h3>
                    <p className={styles.copyright}>&copy; Cường Nguyễn {new Date().getFullYear()}. Bảo lưu mọi quyền.</p>
                    <div className={styles.socials}>
                        {socials.map((s) => (
                            <a key={s.label} href={s.href} className={styles.socialBtn} aria-label={s.label}>
                                <s.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Columns: Links */}
                <div className={styles.linksWrapper}>
                    {footerLinks.map((group) => (
                        <div key={group.heading} className={styles.linkGroup}>
                            <h4>{group.heading}</h4>
                            {group.items.map((item) => {
                                const handleClick = (e) => {
                                    if (item.href === '#' && group.heading === 'Dịch vụ') {
                                        e.preventDefault();
                                        openServiceModal(item.slug);
                                    }
                                };
                                return (
                                    <a key={item.label} href={item.href} onClick={handleClick}>
                                        {item.label}
                                    </a>
                                );
                            })}
                        </div>
                    ))}
                </div>

            </div>
        </footer>
    );
}
