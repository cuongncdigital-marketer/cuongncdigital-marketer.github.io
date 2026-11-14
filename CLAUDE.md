# AI_PORTFOLIO — CLAUDE.md

## Tổng quan dự án

Portfolio website tiếng Việt cho **Cường Nguyễn** — Performance AI Marketer.
Toàn bộ nội dung hiển thị bằng tiếng Việt (kể cả meta tags, OG tags, placeholder).

## Tech Stack

| Công nghệ | Phiên bản | Vai trò |
|-----------|-----------|---------|
| React | 19 | UI framework |
| Vite | 8 | Build tool + dev server |
| Zustand | 5 | State management |
| CSS Modules | — | Scoped styling (mỗi component có file `.module.css`) |
| React Icons | 5 | Icon library (ưu tiên `react-icons/fi` — Feather Icons) |
| Vitest | 4 | Unit testing |

## Cấu trúc thư mục

```
src/
├── components/      # Reusable components (Header, Hero, Footer, v.v.)
├── pages/           # Mỗi trang con là 1 folder riêng (About/, Services/, v.v.)
│   └── About/
│       ├── About.jsx
│       └── About.module.css
├── store/           # Zustand store (useAppStore.js)
├── data/            # Dữ liệu nội dung (portfolioData.js)
├── __tests__/       # Test files (*.test.jsx / *.test.js)
├── test/            # Vitest setup (setup.js)
├── routes.js        # Bảng khai báo trang con
├── hooks/           # Custom hooks (useRoute.js)
├── App.jsx          # Root component
└── index.css        # CSS global variables
public/
├── favicon.svg
├── icons.svg
└── images/          # Ảnh tĩnh, dùng WebP (hero.webp, timeline_*.webp); hero.jpg chỉ cho og:image
```

## Quy ước code

### Trang mới
1. Tạo `src/pages/<TênTrang>/<TênTrang>.jsx` + `<TênTrang>.module.css`
2. Trong `src/routes.js`, thêm 1 dòng vào mảng `routes`:
   ```js
   { key: 'xxx', component: lazy(() => import('./pages/Xxx/Xxx')) },
   ```
3. Link tới trang dùng dạng hash: `href="/#xxx"` (GitHub Pages không có máy chủ nên không dùng `/xxx`)
4. Cập nhật navigation trong `src/data/portfolioData.js`

> Dự án **không dùng React Router** — `src/routes.js` là bảng khai báo trang, `src/hooks/useRoute.js` lắng nghe `hashchange`/`popstate`. `App.jsx` tự render component tương ứng, không khớp thì hiển thị trang chủ.
> `NewsletterCTA` và `ScrollToTop` render trên mọi trang (nằm ngoài khối if/else).
> Site deploy bằng GitHub Actions (`.github/workflows/deploy.yml`) mỗi lần push lên `main`.

### Component
- File: `src/components/<TênComponent>.jsx` + `<TênComponent>.module.css`
- Dùng CSS Modules, không dùng inline style hay global class

### State
- Global state: Zustand store tại `src/store/useAppStore.js`
- Local UI state: `useState` trong component

### Dữ liệu nội dung
- Nội dung tĩnh (danh sách tools, cards, videos, resources) đặt trong `src/data/portfolioData.js`
- Không hardcode dữ liệu dài trực tiếp trong JSX

### Output quality
- Không sinh comment placeholder (`// ...`, `// TODO`, `/* remaining */`)
- Không cắt xén code — output đầy đủ, chạy được ngay
- Không dùng Lorem Ipsum — dùng nội dung tiếng Việt phù hợp context

### Test
- Mỗi component/page quan trọng có file test tại `src/__tests__/`
- Framework: Vitest + @testing-library/react

## CSS Design System

Các biến CSS global định nghĩa trong `src/index.css`:

```css
--bg-color: #FAFAFA          /* Nền trang */
--text-color: #1B1624        /* Chữ chính */
--accent-orange: #FD976D
--accent-purple: #C9B1FB
--accent-yellow: #FDD46B
--accent-blue: #5DCDF1
--card-bg: #FFFFFF
```

Font: **Playfair Display** (heading) + **Inter** (body) — load từ Google Fonts.
Responsive breakpoint chính: `768px`.

## Quy tắc UI/CSS

### Animation & Transitions
- Chỉ animate `transform` và `opacity` (GPU-friendly)
- Transition mặc định: `200-300ms ease` — không dùng `linear` hay `ease-in-out`
- Mọi interactive element (button, link, card) phải có hover + active + focus state

### Typography
- Paragraph max-width: `65ch` để dễ đọc
- Heading dài: dùng `text-wrap: balance`

### HTML & Accessibility
- Ưu tiên semantic HTML (`<section>`, `<article>`, `<nav>`) — tránh div lồng div
- Button phải có visible focus ring
- Form input phải có label

## Lệnh thường dùng

```bash
npm run dev        # Khởi động dev server
npm run build      # Build production
npm run lint       # Chạy ESLint
npm run test       # Chạy unit tests
npm run preview    # Preview bản build
```

## Lưu ý quan trọng

- Navigation dropdown (Services, Resources) định nghĩa trong `src/data/portfolioData.js` — cập nhật khi thêm trang
- Header và Footer là shared components — cập nhật cả hai khi thêm link trang mới
- ESLint config: unused vars bắt đầu bằng chữ hoa được bỏ qua (cho React component imports)
