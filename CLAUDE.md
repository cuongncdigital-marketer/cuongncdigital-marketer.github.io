# AI_PORTFOLIO — CLAUDE.md

## Tổng quan dự án

Portfolio website tiếng Việt cho **Cường Nguyễn** — Performance AI Marketer.
Đây là một **React SPA** nhiều trang, hiện có trang Home và About, và sẽ tiếp tục mở rộng thêm các trang mới.

## Tech Stack

| Công nghệ | Phiên bản | Vai trò |
|-----------|-----------|---------|
| React | 19 | UI framework |
| Vite | 8 | Build tool + dev server |
| Zustand | 5 | State management |
| CSS Modules | — | Scoped styling (mỗi component có file `.module.css`) |
| React Icons | 5 | Icon library (Feather + Simple Icons) |
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
├── App.jsx          # Root component + routing
└── index.css        # CSS global variables
public/
├── favicon.svg
├── icons.svg
└── images/          # Ảnh tĩnh (hero.jpg, timeline_*.png)
```

## Quy ước code

### Trang mới
Mỗi trang mới tạo theo pattern `src/pages/<TênTrang>/<TênTrang>.jsx` + `<TênTrang>.module.css`.
Đăng ký route trong `src/App.jsx`.

### Component
- File: `src/components/<TênComponent>.jsx` + `<TênComponent>.module.css`
- Dùng CSS Modules, không dùng inline style hay global class
- Import icon từ `react-icons` (ưu tiên `react-icons/fi` — Feather Icons)

### State
- Global state dùng Zustand store tại `src/store/useAppStore.js`
- Local UI state dùng `useState` trong component

### Dữ liệu nội dung
- Nội dung tĩnh (danh sách tools, cards, videos, resources) đặt trong `src/data/portfolioData.js`
- Không hardcode dữ liệu dài trực tiếp trong JSX

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

## Lệnh thường dùng

```bash
npm run dev        # Khởi động dev server
npm run build      # Build production
npm run lint       # Chạy ESLint
npm run test       # Chạy unit tests
npm run test:ui    # Chạy tests với UI
npm run preview    # Preview bản build
```

## Ngôn ngữ & nội dung

- Toàn bộ nội dung hiển thị bằng **tiếng Việt**
- Meta tags, OG tags cũng bằng tiếng Việt
- Khi tạo trang mới, nội dung placeholder dùng tiếng Việt

## Lưu ý quan trọng

- Routing được xử lý trong `App.jsx` — thêm `<Route>` khi tạo trang mới
- Navigation dropdown (Services, Resources) được định nghĩa trong `src/data/portfolioData.js` → cập nhật ở đây khi thêm trang
- Header và Footer là shared components — khi thêm link trang mới, cập nhật cả hai
- ESLint config: unused vars bắt đầu bằng chữ hoa được bỏ qua (cho React component imports)
