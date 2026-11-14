import {
  SiMeta,
  SiGoogle,
  SiTiktok,
  SiGoogleanalytics,
  SiOpenai,
  SiNotion,
  SiFigma,
  SiZapier,
  SiShopify,
} from 'react-icons/si';

// ─── Tools Marquee ────────────────────────────────────────────────────────────
export const tools = [
  { name: 'Meta Ads', icon: SiMeta, color: '#0668E1' },
  { name: 'Google Ads', icon: SiGoogle, color: '#4285F4' },
  { name: 'TikTok', icon: SiTiktok, color: '#000000' },
  { name: 'Analytics', icon: SiGoogleanalytics, color: '#E37400' },
  { name: 'ChatGPT', icon: SiOpenai, color: '#74AA9C' },
  { name: 'Notion', icon: SiNotion, color: '#000000' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Zapier', icon: SiZapier, color: '#FF4A00' },
  { name: 'Shopify', icon: SiShopify, color: '#95BF47' },
];

// ─── Expertise Cards ──────────────────────────────────────────────────────────
// Slug mapping: 'ai-marketing' | 'cro' | 'analytics'
export const expertiseCards = [
  {
    slug: 'ai-marketing',
    icon: '🤖',
    title: 'Chiến Dịch AI',
    subtitle: 'Ứng dụng AI để tự động hóa chiến dịch, giảm CPA và scale ngân sách quảng cáo trên Meta & Google.',
    tags: ['Meta Ads', 'Google Ads', 'AI Automation'],
    desc: 'Dùng AI để tối ưu target, tạo creative hàng loạt và giảm CPA trên Meta & Google Ads.',
    linkText: 'Khám phá chiến lược AI',
    colorClass: 'cardOrange',
    blocks: [
      {
        type: 'text',
        content: 'Trong môi trường cạnh tranh quảng cáo 2026, chạy ads thủ công đã trở nên lỗi thời. Mình áp dụng hệ thống AI vào quản lý chiến dịch từ 2023 và liên tục tinh chỉnh qua hàng trăm tài khoản thực chiến: từ thương mại điện tử, giáo dục đến dịch vụ B2B.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      },
      {
        type: 'heading',
        content: 'Hệ thống 3 tầng AI mình đang dùng',
      },
      {
        type: 'text',
        content: 'Tầng 1: Phân tích tệp khách hàng - Dùng AI để phân cụm (clustering) tệp lookalike dựa trên hành vi mua hàng thay vì chỉ dùng demographic cơ bản.\n\nTầng 2: Dynamic Creative Optimization - Kết hợp GPT-4o để sinh hàng loạt biến thể headline, primary text và description. Chạy A/B tự động với budget nhỏ, giữ lại tổ hợp thắng cuộc.\n\nTầng 3: Budget Automation - Script tự động tăng/giảm ngân sách theo ngưỡng ROAS theo thời gian thực, tránh lãng phí ngân sách vào những giờ kém hiệu quả.',
      },
      {
        type: 'image-grid',
        images: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop',
        ],
      },
      {
        type: 'heading',
        content: 'Kết quả thực tế',
      },
      {
        type: 'text',
        content: 'Trung bình sau 4–6 tuần triển khai:\n• Giảm CPA từ 25–40% so với baseline\n• Tăng ROAS trung bình 1.8x\n• Tiết kiệm 3–5 giờ/ngày công việc thủ công\n\nCon số thay đổi theo ngành hàng, landing page và mức ngân sách ban đầu.',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/xbEsoHqeFMI?autoplay=0',
      },
    ],
  },
  {
    slug: 'cro',
    icon: '📈',
    title: 'Tối Ưu Tỷ Lệ Chuyển Đổi',
    subtitle: 'Biến traffic đã có thành doanh thu, không cần tăng ngân sách quảng cáo.',
    tags: ['A/B Testing', 'Landing Page', 'UX Research'],
    desc: 'Biến click thành khách hàng. Phân tích hành trình người dùng và A/B test để tối đa ROI landing page.',
    linkText: 'Tăng tỷ lệ chuyển đổi',
    colorClass: 'cardPurple',
    blocks: [
      {
        type: 'text',
        content: 'CRO là kỷ luật ít người làm đúng cách nhất trong performance marketing. Phần lớn marketer đổ ngân sách vào traffic mới, trong khi trang đích đang "thủng" ở nhiều điểm: khách vào rồi thoát mà không mua.',
      },
      {
        type: 'heading',
        content: 'Quy trình CRO mình áp dụng',
      },
      {
        type: 'text',
        content: 'Bước 1: Audit chẩn đoán - Dùng Hotjar + GA4 để lập bản đồ hành vi. Xác định "điểm rò" trong funnel.\n\nBước 2: Xây hypothesis - Đặt giả thuyết có căn cứ dựa trên data, không phải thẩm mỹ chủ quan.\n\nBước 3: A/B Test có kiểm soát - Chạy đủ thời gian để đạt statistical significance ≥ 95%.\n\nBước 4: Deploy và lặp lại - 2-3 experiment song song mỗi tháng.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      },
      {
        type: 'heading',
        content: 'Những yếu tố thường bị bỏ qua',
      },
      {
        type: 'text',
        content: 'Tốc độ tải trang: Mỗi giây delay làm giảm 7% conversion rate. Mình luôn audit Core Web Vitals trước khi bắt đầu bất kỳ test nào.\n\nMicrocopy: Chữ trên button, error message, tooltip ảnh hưởng lớn đến trust.\n\nMobile experience: 70%+ traffic đến từ mobile nhưng hầu hết landing page thiết kế từ desktop trước.',
      },
      {
        type: 'image-grid',
        images: [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop',
        ],
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/WBPm-Qb7RDc?autoplay=0',
      },
    ],
  },
  {
    slug: 'analytics',
    icon: '📊',
    title: 'Analytics & Tracking',
    subtitle: 'Xây hệ thống tracking chắc chắn để mọi quyết định đều dựa trên số liệu đáng tin cậy.',
    tags: ['GA4', 'GTM', 'Server-side Tracking'],
    desc: 'Thiết lập tracking chắc chắn (GA4, GTM, Server-side) để ra quyết định dựa trên số liệu chính xác.',
    linkText: 'Tìm hiểu về Tracking',
    colorClass: 'cardBlue',
    blocks: [
      {
        type: 'text',
        content: 'Tracking là nền móng của toàn bộ hoạt động performance marketing. Nếu data sai, mọi quyết định tối ưu đều xây trên nền cát. Mình đã setup tracking cho hơn 50 dự án: từ Shopify store đơn giản đến hệ thống funnel multi-step phức tạp.',
      },
      {
        type: 'heading',
        content: 'Stack tracking mình recommend 2026',
      },
      {
        type: 'text',
        content: 'GA4 + BigQuery: Export raw data để phân tích sâu, không bị giới hạn bởi sampling của GA4 UI.\n\nGoogle Tag Manager: Quản lý toàn bộ tags tập trung, giảm phụ thuộc vào dev team.\n\nServer-side Tracking: Dùng GTM Server-side hoặc Stape.io để bypass iOS privacy restrictions và adblocker, thường phục hồi 15-25% conversion data bị mất.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
      },
      {
        type: 'heading',
        content: 'Dấu hiệu tracking đang có vấn đề',
      },
      {
        type: 'text',
        content: '• Conversion trong GA4 thấp hơn 30%+ so với thực tế bán hàng\n• Purchase event bị duplicate hoặc missing trên Meta Events Manager\n• Không theo dõi được micro-conversion (scroll depth, form interaction, thời gian xem video)\n\nMình cung cấp dịch vụ tracking audit full trong 5 ngày: phát hiện và sửa toàn bộ lỗi, đồng thời setup thêm tracking points cần thiết.',
      },
      {
        type: 'image-grid',
        images: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
        ],
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/vwGLktEQgjA?autoplay=0',
      },
    ],
  },
];

// ─── Video Cards ──────────────────────────────────────────────────────────────
export const videoCards = [
  {
    title: 'Phân Tích Video bằng AI Skill cho Người Mới (Antigravity + Gemini)',
    videoId: 'J5U5luQg2sw',
    href: 'https://www.youtube.com/watch?v=J5U5luQg2sw',
  },
  {
    title: 'Kiến Thức Nhập Môn về AI cho Người Mới',
    videoId: 'vJHud2HT8kE',
    href: 'https://www.youtube.com/watch?v=vJHud2HT8kE',
  },
  {
    title: 'Hướng Dẫn Setup AI Marketing Team cho Người Mới (Claude Code)',
    videoId: 'hmq0WuD2eTE',
    href: 'https://www.youtube.com/watch?v=hmq0WuD2eTE',
  },
];

// ─── Resource Cards ───────────────────────────────────────────────────────────
export const resourceCards = [
  {
    icon: '🔥',
    title: 'Kho Prompt AI',
    desc: 'Bộ prompt mình dùng để tạo nội dung quảng cáo.',
    cta: 'Tải miễn phí →',
    colorClass: 'redCard',
  },
  {
    icon: '💎',
    title: 'Checklist CRO',
    desc: '100+ điểm kiểm tra landing page của bạn.',
    cta: 'Tải miễn phí →',
    colorClass: 'blueCard',
  },
  {
    icon: '📊',
    title: 'Template GA4',
    desc: 'Template Looker Studio dùng ngay, không cần cài đặt.',
    cta: 'Tải miễn phí →',
    colorClass: 'orangeCard',
  },
  {
    icon: '⚡',
    title: 'Công Cụ Tính ROAS',
    desc: 'Tính điểm hoà vốn ROAS của bạn ngay lập tức.',
    cta: 'Dùng ngay →',
    colorClass: 'greenCard',
  },
  {
    icon: '🤖',
    title: 'AI Ad Script Generator',
    desc: 'Tạo script quảng cáo video theo framework AIDA chỉ trong 30 giây.',
    cta: 'Dùng miễn phí →',
    colorClass: 'purpleCard',
  },
];

// ─── Header Navigation Dropdowns ─────────────────────────────────────────────
export const navDropdowns = [
  {
    key: 'services',
    label: 'Dịch vụ',
    items: [
      { label: 'AI Marketing', href: '#', slug: 'ai-marketing' },
      { label: 'Tối ưu CRO', href: '#', slug: 'cro' },
      { label: 'Tracking & Analytics', href: '#', slug: 'analytics' },
    ],
  },
  {
    key: 'resources',
    label: 'Tài liệu',
    items: [
      { label: 'Kho Prompt AI', href: '#' },
      { label: 'Checklist CRO', href: '#' },
      { label: 'Template GA4', href: '#' },
    ],
  },
];

// ─── Footer Links ─────────────────────────────────────────────────────────────
export const footerLinks = [
  {
    heading: 'Dịch vụ',
    items: [
      { label: 'AI Marketing', href: '#', slug: 'ai-marketing' },
      { label: 'Tối ưu CRO', href: '#', slug: 'cro' },
      { label: 'Tracking & Analytics', href: '#', slug: 'analytics' },
    ],
  },
  {
    heading: 'Tài liệu',
    items: [
      { label: 'Kho Prompt AI', href: '#' },
      { label: 'Checklist CRO', href: '#' },
      { label: 'Template GA4', href: '#' },
    ],
  },
];
