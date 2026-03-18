import styles from './ExpertiseGrid.module.css';
import { expertiseCards } from '../data/portfolioData';
import useAppStore from '../store/useAppStore';

export default function ExpertiseGrid() {
    const openServiceModal = useAppStore((s) => s.openServiceModal);
    return (
        <section className="container section-padding" id="expertise">
            <h2 className={styles.sectionTitle}>Mình Có Thể Giúp Gì Cho Bạn</h2>
            <div className={styles.grid}>
                {expertiseCards.map((card) => (
                    <div
                        key={card.title}
                        className={`${styles.card} ${styles[card.colorClass]}`}
                        onClick={() => openServiceModal(card.slug)}
                    >
                        <div className={styles.iconWrapper}>{card.icon}</div>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardDesc}>{card.desc}</p>
                        <span className={styles.cardLink}>{card.linkText} &rarr;</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
