// --- CONFIGURATION ---
// Quiz sử dụng chung logToSheet và SHEET_WEBAPP_URL từ tracking.js lo liệu.

const quizData = [
    {
        q: "Theo Edgar Schein, thành tố nào sau đây KHÔNG thuộc vào nhóm 'Biểu hiện quan sát được' của văn hóa doanh nghiệp?",
        options: [
            { text: "Nghi lễ và lễ kỷ niệm.", isCorrect: false },
            { text: "Các giả định ngầm định (Underlying Assumptions).", isCorrect: true },
            { text: "Cách thức xưng hô và ngôn ngữ sử dụng.", isCorrect: false },
            { text: "Kiến trúc và không gian làm việc.", isCorrect: false }
        ],
        explanation: "Các giả định ngầm định (Assumptions) nằm ở tầng sâu nhất, không thể quan sát trực tiếp. Artifacts là tầng bề mặt (trang phục, nghi lễ, hành vi xưng hô...)."
    },
    {
        q: "Mục đích sâu nhất của việc triển khai 'Culture Dashboard' giúp ban lãnh đạo đạt được điều gì?",
        options: [
            { text: "Kiểm soát giờ giấc và tác phong của nhân viên.", isCorrect: false },
            { text: "Giám sát hiệu quả kinh doanh của từng phòng ban.", isCorrect: false },
            { text: "Bắt đầu bằng đích đến và đo lường độ trưởng thành VHDL qua 4 cấp độ.", isCorrect: true },
            { text: "Thay thế các khảo sát hài lòng nhân viên hằng năm.", isCorrect: false }
        ],
        explanation: "Culture Dashboard giúp tổ chức 'Bắt đầu bằng đích đến', đo lường độ trưởng thành từ Nhận thức đến Tích hợp."
    },
    {
        q: "Trong quá trình xây dựng văn hóa, 'Phương pháp luận' (Methodology) sinh ra để trả lời cho câu hỏi cốt lõi nào?",
        options: [
            { text: "Tại sao chúng ta phải xây dựng văn hóa ngay bây giờ?", isCorrect: false },
            { text: "Đích đến của Văn hóa Doanh nghiệp là gì?", isCorrect: false },
            { text: "Làm thế nào để chúng ta tới được đích đến đã đặt ra?", isCorrect: true },
            { text: "Ai là người chủ trì việc thực thi văn hóa?", isCorrect: false }
        ],
        explanation: "Các 'Mô hình' trả lời cho câu hỏi Đích đến là gì, còn 'Phương pháp luận' là lời giải cho việc Làm thế nào để tới đích."
    },
    {
        q: "Một 'Thỏa thuận văn hóa' (Culture Pact) được xem là thành công khi được đúc kết từ thành tố nào?",
        options: [
            { text: "Các quy định chế tài từ bộ phận Nhân sự.", isCorrect: false },
            { text: "công thức Belief -Value-Behavior ( BVB)", isCorrect: true },
            { text: "Bản tuyên từ mục tiêu của CEO.", isCorrect: false },
            { text: "Giá trị cốt lõi trên website của công ty.", isCorrect: false }
        ],
        explanation: "Culture Agreement hình thành từ việc thống nhất các trải nghiệm mong muốn và chuyển hóa chúng thành các Hành vi được chia sẻ/Hành vi cuối cùng."
    },
    {
        q: "Mối liên kết logic giữa Giá trị cốt lõi (GTCL) và Khung năng lực được thể hiện qua phương trình nào?",
        options: [
            { text: "Năng lực = GTCL + Kỹ năng chuyên môn.", isCorrect: false },
            { text: "Năng lực = BVB + Kỹ năng chuyên môn + Kỹ năng Lãnh Đạo", isCorrect: true },
            { text: "Giá trị = Năng lực lãnh đạo x Sự cam kết.", isCorrect: false },
            { text: "GTCL = Hành động cá nhân + Kết quả tổ chức.", isCorrect: false }
        ],
        explanation: "GTCL đóng vai trò là Năng lực cốt lõi (Core Competencies) trong Khung năng lực, được đo lường bằng hành vi thực hiện theo giá trị đó."
    },
    {
        q: "Theo lộ trình 4 Cấp độ trưởng thành Văn hóa (Culture maturity), giai đoạn nào đánh dấu việc văn hóa không còn chỉ là kiến thức mà bắt đầu trở thành những hành động/thói quen lặp đi lặp lại?",
        options: [
            { text: "Cấp độ 1: Nhận thức (Awareness).", isCorrect: false },
            { text: "Cấp độ 2: Tri thức (Knowledge).", isCorrect: false },
            { text: "Cấp độ 3: Hành động (Action).", isCorrect: false },
            { text: "Cấp độ 4: Tích hợp ( Embedded into system)", isCorrect: true }
        ],
        explanation: "Cấp độ 3 (Action) là khi nhân viên bắt đầu thực hành các hành vi văn hóa một cách chủ động trước khi nó trở thành bản năng (Tích hợp)."
    },
    {
        q: "Trong '4 Đòn bẩy Thực thi' văn hóa, tại sao Lãnh đạo (Leadership) được coi là đòn bẩy quan trọng nhất?",
        options: [
            { text: "Vì lãnh đạo là người nắm giữ ngân sách đào tạo.", isCorrect: false },
            { text: "Vì lãnh đạo thiết lập chuẩn mực qua hành động làm gương (Role modeling).", isCorrect: true },
            { text: "Vì lãnh đạo là người trực tiếp viết ra bộ giá định hướng.", isCorrect: false },
            { text: "Vì chỉ có lãnh đạo mới có quyền kỷ luật nhân viên vi phạm.", isCorrect: false }
        ],
        explanation: "Lãnh đạo tạo ra 'Cái bóng' (Leadership Shadow) - hành động của họ là thông điệp mạnh nhất về những gì được chấp nhận trong tổ chức."
    },
    {
        q: "Điểm khác biệt lớn nhất của khóa học CultureCode 101 so với các khóa học quản trị văn hóa truyền thống là gì?",
        options: [
            { text: "Cung cấp nhiều trò chơi gắn kết (Team building).", isCorrect: false },
            { text: "Tập trung vào việc viết lại Sứ mệnh và Tầm nhìn cho thật hay.", isCorrect: false },
            { text: "Xây dựng hệ thống giải mã dựa trên dữ liệu và dashboard để đo lường.", isCorrect: true },
            { text: "Chỉ tập trung vào việc đào tạo kỹ năng giao tiếp nội bộ.", isCorrect: false }
        ],
        explanation: "CC101 tập trung vào tính hệ thống, đo lường được và có thể 'giải mã' bằng dữ liệu thông qua Dashboard."
    },
    {
        q: "Khi một tổ chức nói rằng họ có giá trị 'Chính trực', biểu hiện nào sau đây thực sự chứng minh giá trị đó đã trở thành 'Năng lực cốt lõi'?",
        options: [
            { text: "Chữ 'Chính trực' được dán khắp các bức tường công ty.", isCorrect: false },
            { text: "Nhân viên thuộc lòng định nghĩa về sự chính trực.", isCorrect: false },
            { text: "Các hành vi chính trực được định nghĩa rõ ràng và được dùng để đánh giá hiệu suất.", isCorrect: true },
            { text: "Công ty tổ chức cuộc thi tìm hiểu về sự chính trực.", isCorrect: false }
        ],
        explanation: "Văn hóa thực thụ là khi các giá trị được chuyển hóa thành các tiêu chuẩn hành vi (Shared Behaviors) và là thước đo năng lực nhân sự."
    },
    {
        q: "Triết lý 'Hành động từ Đích đến' (Start with the End) trong xây dựng văn hóa có nghĩa là gì?",
        options: [
            { text: "Xác định các kết quả kinh doanh trước khi làm văn hóa.", isCorrect: false },
            { text: "Định rõ chân dung văn hóa mong muốn (Start with End in Mind) để thiết kế lộ trình chuyển đổi Culture by design.", isCorrect: true },
            { text: "Hoàn thành mọi công việc rồi mới quay lại làm văn hóa.", isCorrect: false },
            { text: "Chỉ tập trung vào những nhân viên sắp nghỉ việc.", isCorrect: false }
        ],
        explanation: "'Start with the End' giúp tổ chức có bức tranh rõ ràng về đích đến trước khi bắt tay vào thiết kế các đòn bẩy thực thi."
    }
];

let currentStep = 0;
let score = 0;
let answered = false;

// --- TRACKING (Dùng chung bộ sessionId từ tracking.js) ---
if (typeof logToSheet === 'undefined') {
    window.logToSheet = () => { console.log('Hệ thống tracking chưa được tải'); };
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initQuiz() {
    logToSheet('START_QUIZ', 'User entered assessment page');
    renderQuestion();
}

function renderQuestion() {
    const data = quizData[currentStep];
    const container = document.getElementById('quizContent');
    const progressBar = document.getElementById('quizProgressBar');

    progressBar.style.width = `${((currentStep) / quizData.length) * 100}%`;

    // Sort options to randomly place correct answer
    const currentOptions = [...data.options];
    shuffleArray(currentOptions);
    data.shuffledOptions = currentOptions;

    const labels = ['A', 'B', 'C', 'D'];

    container.innerHTML = `
        <div class="quiz-question-tag">Câu hỏi ${currentStep + 1}/${quizData.length}</div>
        <div class="quiz-question-text">${data.q}</div>
        <div class="quiz-options">
            ${currentOptions.map((opt, idx) => `
                <div class="quiz-option" onclick="handleAnswer(${idx}, ${opt.isCorrect})">
                    <span class="option-label">${labels[idx]}.</span>
                    ${opt.text}
                </div>
            `).join('')}
        </div>
        <div class="quiz-feedback" id="quizFeedback">
            <h4>Đáp án đúng:</h4>
            <p>${data.explanation}</p>
        </div>
        <button class="btn-quiz-next" id="quizNextBtn" onclick="nextQuestion()">Tiếp theo</button>
    `;
    answered = false;
}

function handleAnswer(index, isCorrect) {
    if (answered) return;
    answered = true;

    const options = document.querySelectorAll('.quiz-option');
    options[index].classList.add(isCorrect ? 'correct' : 'wrong');

    // Logging chi tiết từng câu
    logToSheet('ANSWER_QUESTION', quizData[currentStep].q, {
        questionNum: currentStep + 1,
        result: isCorrect ? 'Đúng' : 'Sai'
    });

    // Find and highlight correct option if user was wrong
    if (!isCorrect) {
        options.forEach((opt, idx) => {
            if (quizData[currentStep].shuffledOptions[idx].isCorrect) {
                opt.classList.add('correct');
            }
        });
    } else {
        score++;
    }

    document.getElementById('quizFeedback').style.display = 'block';
    document.getElementById('quizNextBtn').style.display = 'block';
}

function nextQuestion() {
    currentStep++;
    if (currentStep < quizData.length) {
        renderQuestion();
    } else {
        showSummary();
    }
}

function showSummary() {
    document.getElementById('quizProgressBar').style.width = '100%';
    const container = document.getElementById('quizContent');
    const summary = document.getElementById('quizSummary');

    if (container) container.style.display = 'none';
    if (summary) summary.style.display = 'block';

    const finalScoreEl = document.getElementById('finalScore');
    const scoreStr = `${score}/${quizData.length}`;
    if (finalScoreEl) finalScoreEl.innerText = scoreStr;

    // Logging tổng hợp khi xong bài
    logToSheet('FINISH_QUIZ', 'User reached summary screen', { score: scoreStr });

    // Track buttons at footer of summary
    document.querySelectorAll('.summary-actions a').forEach(btn => {
        btn.addEventListener('click', () => {
            logToSheet('CTA_CLICK', btn.innerText.trim());
        });
    });
}

function finishQuiz() {
    // Navigate back to home or just hide
    document.getElementById('quizOverlay').classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 800);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}
