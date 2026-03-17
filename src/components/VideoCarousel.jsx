import { useRef, useState } from 'react';
import styles from './Projects.module.css';

function VideoThumbnail({ video }) {
    const [playing, setPlaying] = useState(false);

    if (playing) {
        return (
            <iframe
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            />
        );
    }

    return (
        <button
            onClick={() => setPlaying(true)}
            aria-label={`Phát video: ${video.title}`}
            className={styles.playBtn}
        >
            <img
                src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                alt={video.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`; }}
            />
            <span style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <svg width="68" height="48" viewBox="0 0 68 48" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))' }}>
                    <rect width="68" height="48" rx="10" fill="#FF0000" />
                    <polygon points="26,14 52,24 26,34" fill="#fff" />
                </svg>
            </span>
        </button>
    );
}

export default function VideoCarousel({ title, videoCards }) {
    const gridRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scroll = (dir) => {
        gridRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const el = gridRef.current;
        if (!el) return;
        const cardWidth = el.scrollWidth / videoCards.length;
        setActiveIndex(Math.round(el.scrollLeft / cardWidth));
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
            <div className={styles.videoGrid} ref={gridRef} onScroll={handleScroll}>
                {videoCards.map((video) => (
                    <div key={video.videoId} className={styles.videoCard}>
                        <div className={styles.thumbnail}>
                            <VideoThumbnail video={video} />
                        </div>
                        <h4 className={styles.cardTitle}>{video.title}</h4>
                        <a href={video.href} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>Xem trên YouTube &rarr;</a>
                    </div>
                ))}
            </div>
            <div className={styles.dots} aria-hidden="true">
                {videoCards.map((_, i) => (
                    <span key={i} className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`} />
                ))}
            </div>
        </div>
    );
}
