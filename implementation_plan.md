# Implementation Plan - Project Backup (Phase 2 Preparation)

Kế hoạch này nhằm thực hiện sao lưu toàn bộ mã nguồn hiện tại của dự án DH4HN để đảm bảo an toàn dữ liệu trước khi tiến hành các thay đổi lớn trong giai đoạn tiếp theo.

## 📝 Proposed Changes (Thay đổi đề xuất)

### 1. Local Backup (Sao lưu cục bộ)
- **Hành động:** Tạo thư mục `backup_13042026` trong root của workspace.
- **Chi tiết:** Sao chép tất cả các file mã nguồn, cấu hình và assets hiện tại vào thư mục này. 
- **Loại trừ (Exclusion):** Không sao chép thư mục `.git`, `.vercel`, `.vscode` và các thư mục backup cũ để tránh lãng phí dung lượng.

### 2. Git Branch Backup (Sao lưu theo nhánh)
- **Hành động:** Tạo một nhánh mới từ nhánh hiện tại.
- **Tên nhánh:** `backup-13042026`.
- **Chi tiết:** Đẩy (Push) nhánh này lên GitHub để lưu trữ trạng thái hiện tại trên đám mây.

## 🛠️ Technical Steps (Các bước kỹ thuật)

1. **Kiểm tra trạng thái:** Chạy `git status` để đảm bảo working tree sạch sẽ.
2. **Tạo nhánh Git:** 
   ```powershell
   git checkout -b backup-13042026
   git push origin backup-13042026
   git checkout main
   ```
3. **Tạo folder backup:** Sử dụng PowerShell để copy file.
   ```powershell
   $exclude = @('.git', '.vercel', '.vscode', 'backup_030426', 'backup_13042026', 'antigravity_export')
   if (!(Test-Path "backup_13042026")) { New-Item -ItemType Directory -Path "backup_13042026" }
   Get-ChildItem -Exclude $exclude | Copy-Item -Destination "backup_13042026" -Recurse -Force
   ```

## ⚠️ Risk Assessment (Đánh giá rủi ro)

- **Xung đột tên folder:** Nếu folder `backup_13042026` đã tồn tại, lệnh sẽ ghi đè.
- **Dung lượng:** Copy đệ quy có thể làm tăng dung lượng repo nếu không được thêm vào `.gitignore`. 
- **Giải pháp:** Sau khi copy xong, tôi sẽ thêm `backup_13042026/` vào `.gitignore` để tránh commit folder backup này vào nhánh chính.

## 🧐 Auditor Review

- **Checklist:**
  - [ ] Đảm bảo không copy folder `.git` vào bản backup local.
  - [ ] Nhánh backup phải được đẩy lên đúng remote URL.
  - [ ] Cập nhật `.gitignore` để giữ repo sạch sẽ.

---
**Vui lòng phản hồi 'Approve' để tôi tiến hành thực hiện.**
