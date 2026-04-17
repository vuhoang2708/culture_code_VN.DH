/**
 * [MASTER] CultureCode 101 CRM & Email Automation
 * Version: 2.0 (Split Registrations & Logs)
 * Setup: Deploy as Web App, Execute as: Me, Access: Anyone.
 */

const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Replace after creating Sheet or keep as active
const SHEET_NAME_REG = 'Registrations_Master_CC101';
const SHEET_NAME_LOGS = 'Activity_Logs';

const NOTIFICATION_EMAILS = [
  "vuhoang2708@gmail.com",
  "chauhm71@gmail.com",
  "culturecodeproject@gmail.com",
  "culturecodefeedforward@gmail.com"
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = getSpreadsheet();
    
    // 1. Phân loại luồng dữ liệu
    if (data.event === 'REGISTER_EVENT_SYNC') {
      // LUỒNG ĐĂNG KÝ CHÍNH THỨC
      const regSheet = getOrCreateSheet(ss, SHEET_NAME_REG, [
        'Timestamp', 'Full Name', 'Email', 'Phone', 'Organization', 
        'Job Title', 'Company Size', 'Purpose', 'Expectations', 
        'Questions', 'Lunch Note', 'Referral', 'Status', 'SessionId'
      ]);

      const rowData = [
        new Date(),
        data.fullName || '',
        data.email || '',
        "'" + (data.phone || ''), // Force string
        data.organization || '',
        data.jobTitle || '',
        data.companySize || '',
        data.purpose || '',
        data.expectations || '',
        data.questions || '',
        data.lunchNote || '',
        data.referralSource || '',
        'Pending',
        data.sessionId || ''
      ];
      
      regSheet.appendRow(rowData);

      // Gửi thông báo cho Admin & Xác nhận cho Học viên
      sendAdminNotification(data);
      sendUserConfirmation(data);

      return jsonResponse({ status: 'success', type: 'registration' });

    } else {
      // LUỒNG TRACKING HOẠT ĐỘNG (Logs)
      const logSheet = getOrCreateSheet(ss, SHEET_NAME_LOGS, [
        'Timestamp', 'SessionId', 'Event', 'Detail', 'URL'
      ]);

      logSheet.appendRow([
        new Date(),
        data.sessionId || '',
        data.event || '',
        typeof data.detail === 'object' ? JSON.stringify(data.detail) : (data.detail || ''),
        data.url || ''
      ]);

      return jsonResponse({ status: 'success', type: 'log' });
    }

  } catch (err) {
    return jsonResponse({ status: 'error', message: err.toString() });
  }
}

function doGet(e) {
  const ss = getSpreadsheet();
  const regSheet = ss.getSheetByName(SHEET_NAME_REG);
  const currentCount = regSheet ? regSheet.getLastRow() - 1 : 0;
  return jsonResponse({ isFull: currentCount >= 25, current: currentCount }); // Capacity: 25
}

// --- HELPERS ---

function getSpreadsheet() {
  return (SPREADSHEET_ID && SPREADSHEET_ID !== 'YOUR_SPREADSHEET_ID_HERE') 
    ? SpreadsheetApp.openById(SPREADSHEET_ID) 
    : SpreadsheetApp.getActiveSpreadsheet();
}

function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#f1f5f9');
  }
  return sheet;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// --- EMAIL NOTIFICATIONS ---

function sendAdminNotification(data) {
  const subject = `[NEW REG] [HCM-CC02] ${data.fullName} vừa đăng ký`;
  const body = `
    Chào CC101 Team,
    
    Có một học viên mới vừa đăng ký qua Web:
    
    - Họ tên: ${data.fullName}
    - Đơn vị: ${data.organization} (${data.jobTitle})
    - Email: ${data.email}
    - SĐT: ${data.phone}
    - Mục đích: ${data.purpose}
    
    Check Sheet để xem chi tiết kỳ vọng & suất ăn.
    
    Trân trọng,
    CC101 Bot.
  `;
  
  NOTIFICATION_EMAILS.forEach(email => {
    try {
      MailApp.sendEmail(email, subject, body);
    } catch(e) { Logger.log('Admin alert failed: ' + email); }
  });
}

function sendUserConfirmation(data) {
  if (!data.email) return;
  
  const subject = `[Xác nhận] Đăng ký Masterclass CultureCode 101 - ${data.fullName}`;
  const body = `
    Chào ${data.fullName},

    Cảm ơn bạn đã đăng ký tham dự Masterclass [HCM-CC02] CultureCode 101. Chúng tôi đã ghi nhận thông tin của bạn vào danh sách chờ xác nhận.

    THÔNG TIN ĐÃ ĐĂNG KÝ:
    - Họ tên: ${data.fullName}
    - Cơ quan: ${data.organization}
    - Email: ${data.email}
    - Số điện thoại: ${data.phone}

    ĐỂ GIỮ CHỖ CHÍNH THỨC, Bạn vui lòng hoàn tất chi phí hậu cần (300.000 VNĐ) - Bao gồm tài liệu, ăn trưa, teabreak & phí địa điểm:

    1. Ngân hàng BIDV: 12310000494056 - Hà Ngọc Hoàn
    2. Ngân hàng MB: 1910 - Công ty Cổ phần Tư vấn Quản trị HIPER
    
    NỘI DUNG CHUYỂN KHOẢN: CC02 - ${data.fullName} - ${data.phone}

    Sau khi nhận được phí, BTC sẽ gửi email xác nhận chính thức kèm hướng dẫn chi tiết về địa điểm và tài liệu chuẩn bị trước buổi học.

    Thông tin liên hệ BTC:
    - Group Zalo hỗ trợ: https://zalo.me/g/culturecode101 (Nếu chưa tham gia)
    - Email: culturecodefeedforward@gmail.com

    Hẹn gặp bạn tại buổi Masterclass!

    Trân trọng,
    CultureCode Project Team.
  `;
  
  try {
    MailApp.sendEmail(data.email, subject, body);
  } catch(e) {
    Logger.log('Registrant email failed: ' + data.email);
  }
}

