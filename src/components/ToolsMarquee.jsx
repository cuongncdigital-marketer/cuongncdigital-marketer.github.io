import styles from './ToolsMarquee.module.css';
import { tools } from '../data/portfolioData';

export default function ToolsMarquee() {
    return (
        <section className={styles.toolsWrapper} id="tools">
            <div className="container">
                <h3 className={styles.title}>Công Cụ & Nền Tảng Mình Sử Dụng</h3>
            </div>
            <div className={styles.marquee}>
                <div className={styles.marqueeContent}>
                    {tools.map((tool, idx) => (
                        <span key={idx} className={styles.toolPill}>
                            <tool.icon className={styles.toolLogo} style={{ color: tool.color }} />
                            {tool.name}
                        </span>
                    ))}
                    {/* Duplicate for infinite scroll — hidden from screen readers */}
                    {tools.map((tool, idx) => (
                        <span key={`dup-${idx}`} className={styles.toolPill} aria-hidden="true">
                            <tool.icon className={styles.toolLogo} style={{ color: tool.color }} />
                            {tool.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
