import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import styles from './ServiceModal.module.css';

function VideoBlock({ url }) {
  const [playing, setPlaying] = useState(false);
  const videoId = url.split('/embed/')[1]?.split('?')[0];

  if (playing) {
    return (
      <div className={styles.videoBlock}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Video mô tả dịch vụ"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={styles.videoBlock}>
      <button
        className={styles.playBtn}
        onClick={() => setPlaying(true)}
        aria-label="Phát video"
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Thumbnail video"
          onError={(e) => { e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; }}
        />
        <span className={styles.playIcon}>
          <svg width="68" height="48" viewBox="0 0 68 48" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))' }}>
            <rect width="68" height="48" rx="10" fill="#FF0000" />
            <polygon points="26,14 52,24 26,34" fill="#fff" />
          </svg>
        </span>
      </button>
    </div>
  );
}

/**
 * ServiceModal Component (Tiền trạm UI)
 * 
 * Props Interface:
 * @param {boolean} isOpen - Trạng thái hiển thị modal
 * @param {function} onClose - Hàm gọi khi đóng modal
 * @param {object} service - Dữ liệu cơ bản của service được click (từ expertiseCards)
 */
export default function ServiceModal({ isOpen, onClose, service }) {
  // Lock body scroll + Escape key handler khi modal mở
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const { icon, title, subtitle, tags, blocks } = service;

  return (
    <div className={styles.overlay}>
      {/* Phân tách nền blur để không ảnh hưởng đến fixed position của nút X */}
      <div className={styles.backdrop} onClick={onClose}></div>

      {/* Nút đóng cố định sẽ không bị cuộn theo nội dung */}
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Đóng chi tiết dịch vụ"
      >
        <FiX />
      </button>

      {/* Vùng chứa cuộn độc lập */}
      <div className={styles.scrollArea} onClick={onClose}>
        <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <div className={styles.headerIcon}>{icon}</div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.tags}>
              {tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            {blocks.map((block, index) => {
              if (block.type === 'text') {
                return (
                  <div key={index} className={styles.textBlock}>
                    {block.content.split('\n\n').map((para, i) => {
                      const lines = para.split('\n');
                      const hasBullets = lines.some(l => l.startsWith('•'));
                      if (hasBullets) {
                        const intro = lines.filter(l => !l.startsWith('•'));
                        const bullets = lines.filter(l => l.startsWith('•'));
                        return (
                          <div key={i}>
                            {intro.map((l, j) => <p key={j}>{l}</p>)}
                            <ul className={styles.bulletList}>
                              {bullets.map((l, j) => <li key={j}>{l.replace(/^•\s*/, '')}</li>)}
                            </ul>
                          </div>
                        );
                      }
                      return <p key={i}>{para}</p>;
                    })}
                  </div>
                );
              }
              if (block.type === 'heading') {
                return <h3 key={index} className={styles.headingBlock}>{block.content}</h3>;
              }
              if (block.type === 'image') {
                return (
                  <div key={index} className={styles.imageBlock}>
                    <img src={block.url} alt={`Minh họa cho ${title}`} loading="lazy" decoding="async" />
                  </div>
                );
              }
              if (block.type === 'image-grid') {
                return (
                  <div key={index} className={styles.imageGrid}>
                    {block.images.map((img, i) => (
                      <img key={i} src={img} alt={`Minh họa grid ${i}`} loading="lazy" decoding="async" />
                    ))}
                  </div>
                );
              }
              if (block.type === 'video') {
                return <VideoBlock key={index} url={block.url} />;
              }
              return null;
            })}
          </div>

          {/* Call To Action ở dưới cùng modal */}
          <div className={styles.ctaContainer}>
            <h3 className={styles.ctaTitle}>Sẵn sàng bứt phá doanh thu?</h3>
            <p className={styles.ctaText}>Hãy để chúng tôi giúp bạn xây dựng hệ thống Performance Marketing tự động ngay hôm nay.</p>
            <a href="#contact" className={styles.ctaButton} onClick={onClose}>Bắt đầu hợp tác</a>
          </div>
        </div>
      </div>
    </div>
  );
}
