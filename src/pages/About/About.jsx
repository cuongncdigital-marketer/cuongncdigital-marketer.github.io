import React from 'react';
import styles from './About.module.css';
import useAppStore from '../../store/useAppStore';
import VideoCarousel from '../../components/VideoCarousel';

const About = () => {
    const videoCards = useAppStore((s) => s.videoCards);
    return (
        <div className={styles.aboutPage}>
            <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Xin chào, mình là Cường.</h1>
                    <h2 className={styles.subtitle}>Marketer chuyển mình thành AI Automator.</h2>
                    <div className={styles.squareAvatarWrapper}>
                        <div className={styles.imageDecor}></div>
                        {/* Sử dụng ảnh đại diện thật của bạn tại đây */}
                        <img src="/images/hero.jpg" alt="Cường Nguyễn - Performance AI Marketer" className={styles.squareAvatar} loading="lazy" />
                    </div>
                    <p className={styles.bio}>
                        Với 7 năm kinh nghiệm trong lĩnh vực <strong>Health & Education</strong>, mình có niềm đam mê mãnh liệt với việc kể chuyện và kết nối qua từng chiến dịch. Từ những ngày đầu chạy quảng cáo thủ công, mình nhận ra sức mạnh của việc thấu hiểu người dùng. Giờ đây, mình kết hợp giữa tư duy Marketing cốt lõi và sức mạnh của <strong>AI/Automation</strong> để tạo ra những <strong>hệ thống tăng trưởng</strong> bền vững và tự động.
                    </p>
                    <div className={styles.heroCta}>
                        <a href="mailto:hello@cuongnguyen.com" className={styles.ctaBtn}>Hợp tác với mình →</a>
                        <a href="/#contact" className={styles.ctaBtnSecondary}>Đăng ký newsletter</a>
                    </div>
                </div>
            </div>

            <div className={styles.journeySection}>
                <h3 className={styles.sectionTitle}>Hành Trình Của Mình</h3>
                <div className={styles.journeyCard}>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={`${styles.timelineDot} ${styles.dotStart}`}></div>
                            <div className={styles.timelineContent}>
                                <h4 className={styles.timelineYear}>Khởi đầu</h4>
                                <h5 className={styles.timelineStep}>Health & Education Marketing</h5>
                                <p>
                                    Bắt đầu sự nghiệp với nền tảng là một Marketer truyền thống, mình dấn thân vào lĩnh vực <strong>Health & Education</strong> - hai mảng đòi hỏi sự thấu hiểu tâm lý khách hàng sâu sắc và tính nhân văn cao. Thời điểm này, mình dành hàng nghìn giờ để tối ưu quảng cáo (Ads) một cách thủ công, liên tục thử nghiệm thông điệp và theo dõi sát sao từng biến động nhỏ nhất của chiến dịch để đảm bảo tỷ lệ chuyển đổi tốt nhất.
                                </p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={`${styles.timelineDot} ${styles.dotTurning}`}></div>
                            <div className={styles.timelineContent}>
                                <h4 className={styles.timelineYear}>Bước ngoặt</h4>
                                <h5 className={styles.timelineStep}>Công nghệ & Tối ưu hoá</h5>
                                <p>
                                    Khi thị trường cạnh tranh ngày càng khốc liệt và chi phí quảng cáo tăng cao, mình nhận ra làm việc chăm chỉ bằng tay là chưa đủ. Mình bắt đầu tìm hiểu và đưa các công cụ <strong>AI, Automation</strong> vào quy trình làm việc. Từ việc phân tích dữ liệu lượng lớn đến tự động hóa quy trình <strong>A/B testing</strong>, công nghệ đã giúp mình giải phóng thời gian khỏi những tác vụ lặp đi lặp lại để tập trung vào chiến lược và kể chuyện (storytelling).
                                </p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={`${styles.timelineDot} ${styles.dotPresent}`}></div>
                            <div className={styles.timelineContent}>
                                <h4 className={styles.timelineYear}>Hiện tại</h4>
                                <h5 className={styles.timelineStep}>Performance AI Marketer</h5>
                                <p>
                                    Hiện tại, mình là một <strong>Performance AI Marketer</strong>. Mình không chỉ chạy ads, mà còn xây dựng các <strong>hệ thống tăng trưởng (growth systems) tự động hóa</strong> với quy mô lớn (scale up). Sự kết hợp giữa tư duy data-driven, thấu hiểu con người và giải pháp AI giúp mình mang lại hiệu suất tối đa cho các dự án mà vẫn giữ được giá trị cốt lõi của thương hiệu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects / Videos Section */}
            <div className={styles.projectsSection}>
                <VideoCarousel title="Video Nổi Bật Của Mình" videoCards={videoCards} />
            </div>
        </div>
    );
};

export default About;
