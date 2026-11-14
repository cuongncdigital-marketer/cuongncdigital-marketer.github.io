import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={`container ${styles.hero} section-padding`}>
            <div className={styles.content}>
                <h1 className={styles.greeting}>
                    Xin chào bạn <span className={styles.wave}>👋</span>
                </h1>
                <h2 className={styles.headline}>
                    Mình là Cường, <span className={styles.highlight}>Performance AI Marketer</span> giúp doanh nghiệp tăng trưởng với AI & data.
                </h2>
                <div className={styles.actions}>
                    <div>
                        <p className={styles.giftBadge}>🎁 Miễn phí: AI Marketing Toolkit</p>
                        <p className={styles.trustNote}>Đã có <strong>10,000+</strong> marketers nhận.</p>
                        <p className={styles.giftText}>Nhận ngay bộ <strong>prompt, checklist & template</strong> mình dùng để scale campaigns.</p>
                        <form className={styles.emailForm} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="email@cuaban.com"
                                aria-label="Nhập email của bạn"
                                className={styles.emailInput}
                                required
                            />
                            <button type="submit" className={styles.primaryBtn}>Nhận miễn phí →</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.imageDecor}></div>
                <img
                    src="/images/hero.webp"
                    alt="Cường Nguyễn - Performance AI Marketer"
                    className={styles.image}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="340"
                    height="340"
                />
            </div>
        </section>
    );
}
