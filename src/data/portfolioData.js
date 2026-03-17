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
export const expertiseCards = [
  {
    icon: '🤖',
    title: 'Chiến Dịch AI',
    desc: 'Dùng AI để tối ưu target, tạo creative hàng loạt và giảm CPA trên Meta & Google Ads.',
    linkText: 'Khám phá chiến lược AI',
    colorClass: 'cardOrange',
  },
  {
    icon: '📈',
    title: 'Tối Ưu Tỷ Lệ Chuyển Đổi',
    desc: 'Biến click thành khách hàng. Phân tích hành trình người dùng và A/B test để tối đa ROI landing page.',
    linkText: 'Tăng tỷ lệ chuyển đổi',
    colorClass: 'cardPurple',
  },
  {
    icon: '📊',
    title: 'Analytics & Tracking',
    desc: 'Thiết lập tracking chắc chắn (GA4, GTM, Server-side) để ra quyết định dựa trên số liệu chính xác.',
    linkText: 'Tìm hiểu về Tracking',
    colorClass: 'cardBlue',
  },
];

// ─── Video Cards ──────────────────────────────────────────────────────────────
export const videoCards = [
  {
    title: 'Cách Mình Dùng AI Để Scale Ads',
    videoId: 'xbEsoHqeFMI',
    href: 'https://www.youtube.com/watch?v=xbEsoHqeFMI',
  },
  {
    title: 'Setup Tracking 2026 Của Mình',
    videoId: 'vwGLktEQgjA',
    href: 'https://www.youtube.com/watch?v=vwGLktEQgjA',
  },
  {
    title: 'Masterclass A/B Testing',
    videoId: 'WBPm-Qb7RDc',
    href: 'https://www.youtube.com/watch?v=WBPm-Qb7RDc',
  },
  {
    title: 'Quy Trình Tạo Content AI Của Mình',
    videoId: 'jsG1MREASXE',
    href: 'https://www.youtube.com/watch?v=jsG1MREASXE',
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
      { label: 'AI Marketing', href: '#' },
      { label: 'Tối ưu CRO', href: '#' },
      { label: 'Tracking & Analytics', href: '#' },
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
      { label: 'AI Marketing', href: '#' },
      { label: 'Tối ưu CRO', href: '#' },
      { label: 'Tracking & Analytics', href: '#' },
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
