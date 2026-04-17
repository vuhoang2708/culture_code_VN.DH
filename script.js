const topics = [
  {
    num: 1,
    name: "Tư duy Hệ thống",
    en: "System Thinking",
    desc: "Cốt lõi của văn hóa không nằm ở bề nổi mà nằm ở hệ thống các niềm tin và giả định ngầm định. Học cách nhìn nhận tổ chức như một thực thể sống có mối liên kết chặt chẽ."
  },
  {
    num: 2,
    name: "3 Cấp độ Văn hóa của Edgar Schein",
    en: "Schein's 3 Levels of Culture",
    desc: "Khám phá mô hình kinh điển: Đồ tạo tác -> Espoused Values (Giá trị tuyên bố) -> Underlying Assumptions (Giả định ngầm định)."
  },
  {
    num: 3,
    name: "5 Biểu hiện quan sát được",
    en: "5 Observable Expressions",
    desc: "Cách nhận diện văn hóa qua: Đồ tạo tác, Nghi lễ, Hành vi, Ngôn ngữ và Câu chuyện. Đây là 'bằng chứng' sống động của văn hóa thực tế."
  },
  {
    num: 4,
    name: "4 Đòn bẩy Thực thi",
    en: "4 Culture Levers",
    desc: "Tập trung vào 4 nguồn lực chính để thay đổi: Leadership (Lãnh đạo), Engagement (Gắn kết) và Talent (Nhân tài)."
  },
  {
    num: 5,
    name: "Khung Trưởng thành Văn hóa",
    en: "Maturity Framework",
    desc: "Đo lường sự thấu cảm và tích hợp thông qua 4 cấp độ: Awareness (Nhận thức) -> Knowledge (Tri thức) -> Action (Hành động) -> Integration (Tích hợp)."
  }
];

// Render topics
const list = document.getElementById('topicsList');
topics.forEach(t => {
  const item = document.createElement('div');
  item.className = 'topic-item';
  item.innerHTML = `
    <div class="topic-header">
      <div class="topic-num">${t.num}</div>
      <div style="flex:1">
        <div class="topic-name">${t.name}</div>
      </div>
      <div class="topic-chevron">▾</div>
    </div>
    <div class="topic-body">${t.desc}</div>
  `;
  item.querySelector('.topic-header').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    // close all
    document.querySelectorAll('.topic-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
  list.appendChild(item);
});
