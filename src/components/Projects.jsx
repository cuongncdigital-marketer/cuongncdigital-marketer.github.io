import { useRef } from 'react';
import styles from './Projects.module.css';
import { videoCards, resourceCards } from '../data/portfolioData';
import VideoCarousel from './VideoCarousel';

function ScrollSection({ title, children, gridRef }) {
    const scroll = (dir) => {
        gridRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' });
    };

    return (
        <div className={styles.sectionBlock}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.navArrows}>
                    <button className={styles.arrowBtn} onClick={() => scroll(-1)} aria-label="Scroll left">&larr;</button>
                    <button className={styles.arrowBtn} onClick={() => scroll(1)} aria-label="Scroll right">&rarr;</button>
                </div>
            </div>
            {children}
        </div>
    );
}

export default function Projects() {
    const resourceRef = useRef(null);

    return (
        <section className="container section-padding" id="portfolio">
            <VideoCarousel title="Video Nổi Bật Của Mình" videoCards={videoCards} />

            <div className={styles.mtLarge}>
                <ScrollSection title="Tài Nguyên Miễn Phí Của Mình" gridRef={resourceRef}>
                    <div className={styles.resourceGrid} ref={resourceRef}>
                        {resourceCards.map((res) => (
                            <div key={res.title} className={`${styles.resourceCard} ${styles[res.colorClass]}`}>
                                <div className={styles.iconTag}>{res.icon}</div>
                                <h4 className={styles.resTitle}>{res.title}</h4>
                                <p className={styles.resDesc}>{res.desc}</p>
                                {res.cta && <button className={styles.resBtn}>{res.cta}</button>}
                            </div>
                        ))}
                    </div>
                </ScrollSection>
            </div>
        </section>
    );
}
