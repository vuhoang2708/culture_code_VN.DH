// tracking.js - Hệ thống Analytics hợp nhất cho Dự án CultureCode 101
const SHEET_WEBAPP_URL = window.CUSTOM_WEBAPP_URL || "https://script.google.com/macros/s/AKfycbyfMA9r-cMpv5ftS4CFGOtHzb8bc-oyAck7dvneQ_EY5lu82gvN90E_9iekq0AnMel1/exec";
const sessionId = 'cc101-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);

window.sessionId = sessionId; // Export cho quiz.js dùng chung

async function logToSheet(event, detail, extra = {}) {
    const targetUrl = window.CUSTOM_WEBAPP_URL || SHEET_WEBAPP_URL;
    if (!targetUrl) return;
    try {
        await fetch(targetUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sessionId: sessionId,
                event: event,
                detail: detail,
                url: window.location.href,
                ...extra
            })
        });
    } catch (e) { console.error('Tracking error', e); }
}

window.logToSheet = logToSheet; // Export ra global

// 1. Theo dõi lượt xem trang
document.addEventListener('DOMContentLoaded', () => {
    const pageName = window.location.pathname.split('/').pop() || 'index.html';
    logToSheet('PAGE_VIEW', `Truy cập trang: ${pageName}`);

    // Theo dõi cuộn tới CTA đăng ký
    const registerCTA = document.getElementById('register');
    if (registerCTA) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    logToSheet('SCROLL_REACH', 'Người dùng đã cuộn tới khu vực Đăng ký');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(registerCTA);
    }
});
