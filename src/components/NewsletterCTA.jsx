import styles from './NewsletterCTA.module.css';
import useAppStore from '../store/useAppStore';

export default function NewsletterCTA() {
    const newsletterEmail = useAppStore((s) => s.newsletterEmail);
    const newsletterStatus = useAppStore((s) => s.newsletterStatus);
    const newsletterError = useAppStore((s) => s.newsletterError);
    const setNewsletterEmail = useAppStore((s) => s.setNewsletterEmail);
    const submitNewsletter = useAppStore((s) => s.submitNewsletter);

    const handleSubmit = (e) => {
        e.preventDefault();
        submitNewsletter();
    };

    return (
        <section className="container section-padding" id="contact">
            <div className={styles.ctaBox}>
                <div className={styles.leftCol}>
                    <h2 className={styles.title}>
                        <span className={styles.titleTop}>Đăng ký nhận</span><br />
                        <span className={styles.titleBottom}>Newsletter</span>
                        <span className={styles.icon}>🚀</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Tham gia cộng đồng hơn<br />
                        <strong>10,000+ marketers thực chiến.</strong>
                    </p>
                </div>

                <div className={styles.rightCol}>
                    <p className={styles.description}>
                        Mỗi tuần, mình chia sẻ các case study campaign thật, mẹo tối ưu và prompt AI mới nhất, gửi trực tiếp vào inbox của bạn. Hoàn toàn miễn phí, và luôn như vậy.
                    </p>
                    <div className={styles.formWrapper}>
                        {newsletterStatus === 'success' ? (
                            <p className={styles.successMsg} role="status">
                                🎉 Đã đăng ký! Kiểm tra inbox của bạn nhé.
                            </p>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                                <input
                                    type="email"
                                    placeholder="email@cuaban.com"
                                    className={`${styles.input} ${newsletterError ? styles.inputError : ''}`}
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    aria-label="Địa chỉ email"
                                />
                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={newsletterStatus === 'loading'}
                                >
                                    {newsletterStatus === 'loading' ? 'Đang gửi…' : 'Đăng ký'}
                                </button>
                            </form>
                        )}
                        {newsletterError && (
                            <p className={styles.errorMsg} role="alert">{newsletterError}</p>
                        )}
                        {newsletterStatus !== 'success' && (
                            <p className={styles.disclaimer}>
                                Bằng cách đăng ký, bạn đồng ý nhận bản tin miễn phí. Bạn có thể huỷ đăng ký bất cứ lúc nào.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
