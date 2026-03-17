import styles from './ExpertiseGrid.module.css';
import { expertiseCards } from '../data/portfolioData';

export default function ExpertiseGrid() {
    return (
        <section className="container section-padding" id="expertise">
            <h2 className={styles.sectionTitle}>Mình Có Thể Giúp Gì Cho Bạn</h2>
            <div className={styles.grid}>
                {expertiseCards.map((card) => (
                    <div key={card.title} className={`${styles.card} ${styles[card.colorClass]}`}>
                        <div className={styles.iconWrapper}>{card.icon}</div>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardDesc}>{card.desc}</p>
                        <a href="#" className={styles.cardLink}>{card.linkText} &rarr;</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
