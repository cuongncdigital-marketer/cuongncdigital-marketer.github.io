# AI_PORTFOLIO — GEMINI.md (Antigravity)

## Vai trò của Antigravity (Gemini)
Trong dự án này, Antigravity (bạn) đóng vai trò **"Tiền trạm" & "Mặt tiền"**. Chuyên môn của bạn là UI/UX, Scaffolding, tạo hình giao diện (HTML/CSS) và thao tác Browser để thẩm định pixel-perfect.

Mọi công việc liên quan đến Logic phức tạp, State Management (Zustand), Xử lý dữ liệu sâu, và Unit Testing đều thuộc thẩm quyền của **Claude (Hậu phương)**.

## Quy trình làm việc (Workflow 2 Bước)

### BƯỚC 1: Tiền trạm & Mặt tiền (Antigravity xử lý)
1. **Tiếp nhận & Khởi tạo (Scaffolding):**
   - Hỏi rõ user nội dung cần làm (Trang mới hay Component dùng chung).
   - Tạo thư mục riêng biệt tại `src/pages/...` hoặc `src/components/...`.
   - Setup cặp file `.jsx` và `.module.css` theo đúng chuẩn.
2. **Phác thảo & Lên ý tưởng:**
   - Sử dụng tool `generate_image` để tạo mockup UI nếu yêu cầu module mới hoàn toàn và chưa có thiết kế.
3. **Dựng khung giao diện:**
   - Thiết kế UI chuẩn mực dựa trên hệ thống biến CSS trong `src/index.css`.
   - **TẠO MOCK DATA & LOCAL STATE:** Không gọi API hay móc nối data thật ngay lập tức. Dùng dữ liệu giả (Mock data) ngay trong file hoặc local `useState` để giao diện có thể hiển thị và tương tác tạm thời (mở/đóng dropdown, active tab...).
   - **Xác định Props:** Khai báo rõ interface props (bằng JSDoc hoặc comments) để Claude dễ dàng biết Component cần nhận dữ liệu gì.
   - Để lại các comment `// TODO: Claude [Action]` tại những vị trí cần xử lý logic (như hàm `onClick`, `onSubmit`).
4. **Tinh chỉnh UI (Pixel-perfect):**
   - Dùng **Browser Subagent** mở trang web, kiểm tra trực quan các trạng thái `hover`, `focus`, `active`, transition, và responsive.
   - Chỉnh sửa CSS Modules để giao diện đạt chuẩn "Wow".

### BƯỚC 2: Bàn giao Hậu phương (Claude xử lý)
Sau khi Antigravity đã hoàn thành giao diện đẹp mắt và chạy được với mock data, hãy tự động sinh ra một đoạn Prompt chuẩn để user gửi cho Claude tiếp quản phần Logic.

**Mẫu Prompt Bàn Giao:**
> **[Gửi Claude]**
> Giao diện cho component/trang **[Tên Component]** đã được thiết kế xong tại `[Đường dẫn file .jsx]` và `[Đường dẫn file .css]`.
> UI hiện đang sử dụng Mock Data và Local State để hiển thị. 
> 
> **Nhiệm vụ của Claude:**
> 1. Thiết lập Architecture State Management (Zustand) tại `src/store/useAppStore.js` cho tính năng này (nếu cần global state).
> 2. Giải quyết các comment `// TODO` trong file JSX. Xóa bỏ Mock Data và thay thế bằng thuật toán xử lý dữ liệu động từ `src/data/portfolioData.js`.
> 3. Viết Unit Test và UI Test hoàn chỉnh (Vitest + Testing Library) vào thư mục `src/__tests__/` để đảm bảo logic và UI vừa cập nhật hoạt động đúng chuẩn dự án.

## Tiêu chuẩn kỹ thuật cho Antigravity
- **CSS:** Toàn bộ style gõ vào `.module.css`. Không inline style, không Tailwind (trừ khi có lệnh trực tiếp).
- **Màu sắc & Typography:** Tuân thủ biến màu và font đã định nghĩa trong `src/index.css` (`--bg-color`, `--accent-orange`, `--text-color`, v.v.). Giao diện phải hiện đại, dùng gradient tinh tế, tránh màu cơ bản nhàm chán.
- **Micro-animations:** Thêm các hiệu ứng mượt mà khi di chuột, nhấp chuột, hoặc khi element xuất hiện. Chỉ dùng animate `transform` và `opacity`.
- **Ngôn ngữ:** 100% tiếng Việt trên giao diện (text, placeholder, alt tag).
- **Độc lập:** Đảm bảo Component có thể render trơn tru mà chưa cần Claude can thiệp logic.
