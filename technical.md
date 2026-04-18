# CultureCode 101 - Technical Documentation

Tài liệu này hướng dẫn quản lý và vận hành kỹ thuật cho dự án CultureCode 101.

## 1. Thông tin hạ tầng & Liên kết
- **Local Source:** `C:\Users\vu.hoang\.gemini\antigravity\scratch\CultureCode101`
- **GitHub Repository:** [vuhoang2708/culture_code_VN.DH](https://github.com/vuhoang2708/culture_code_VN.DH)
- **Vercel Project:** `culturecode101`
- **Live URL:** [https://culturecode101.vercel.app/](https://culturecode101.vercel.app/)

## 2. Quy chuẩn Branding
- **Tên thương hiệu:** Luôn viết liền mạch là **"CultureCode"** (Không có dấu cách).
- **Phạm vi áp dụng:** Title trang, Heading, Nội dung Marketing và Meta tags.

## 3. Logic Giao diện Quiz (Assessment)
Hệ thống phản hồi câu hỏi (Feedback) đã được chuẩn hóa để tăng trải nghiệm người dùng:

- **Câu trả lời ĐÚNG:**
  - Màu nền: Emerald Green (`#10b981`).
  - Biểu tượng: Dấu tích xanh **'✓'** (Injected qua CSS `::after`).
- **Câu trả lời SAI:**
  - Màu nền: Red (`#ef4444`).
  - Biểu tượng: Dấu X đỏ **'✕'** (Injected qua CSS `::after`).
- **File điều chỉnh:** `quiz.css` (phần `.correct` và `.wrong`) và `quiz.js` (phần gán class `.option-label`).

## 4. Quy trình Cập nhật & Deployment (Workflow)
Để đảm bảo trang Live luôn đồng bộ với bản local:

1. **Sửa code:** Thực hiện thay đổi tại folder `CultureCode101`.
2. **Đồng bộ GitHub:** Copy toàn bộ nội dung folder vào repo `culture_code_VN.DH` nhánh `main`.
3. **Deploy:** Lệnh `git push origin main` sẽ tự động kích hoạt Vercel Build và cập nhật trang Live.

## 5. Lưu ý quan trọng
- Nhánh `main` của repo này được dành riêng cho CultureCode 101 để phục vụ Vercel. 
- Không tự ý merge các nhánh khác (như bản DH cũ) vào `main` để tránh ghi đè giao diện.

---
*Cập nhật lần cuối: 17/04/2026 bởi Antigravity AI.*
