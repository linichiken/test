const courses = [
  { title: "重量訓練基礎班", category: "strength", desc: "適合初學者，學習正確姿勢與核心力量訓練。", icon: "🏋️", color: "#ff5a3c" },
  { title: "燃脂有氧課", category: "cardio", desc: "高強度間歇訓練，快速燃燒卡路里。", icon: "🔥", color: "#ff8b3c" },
  { title: "哈達瑜珈", category: "yoga", desc: "舒緩身心，提升柔軟度與專注力。", icon: "🧘", color: "#3cb88a" },
  { title: "街舞入門", category: "dance", desc: "跟著節奏動起來，燃脂又有趣。", icon: "💃", color: "#8a5cff" },
  { title: "重量進階班", category: "strength", desc: "針對有基礎的學員，強化肌力與爆發力。", icon: "💪", color: "#ff5a3c" },
  { title: "拳擊有氧", category: "cardio", desc: "結合拳擊動作與有氧訓練，紓壓又健身。", icon: "🥊", color: "#ff8b3c" },
];

const trainers = [
  { name: "陳教練", specialty: "重量訓練 / 體態雕塑", icon: "🏆" },
  { name: "林教練", specialty: "有氧 / 拳擊", icon: "⚡" },
  { name: "王教練", specialty: "瑜珈 / 伸展", icon: "🌿" },
  { name: "李教練", specialty: "街舞 / 有氧舞蹈", icon: "🎵" },
];

function renderCourses(filter = "all") {
  const grid = document.getElementById("courseGrid");
  grid.innerHTML = "";
  courses
    .filter((c) => filter === "all" || c.category === filter)
    .forEach((c) => {
      const card = document.createElement("div");
      card.className = "course-card";
      card.innerHTML = `
        <div class="card-media" style="background:${c.color}">${c.icon}</div>
        <div class="card-body">
          <span class="tag">${labelFor(c.category)}</span>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
          <a href="#contact" class="btn btn-outline">立即報名</a>
        </div>`;
      grid.appendChild(card);
    });
}

function labelFor(category) {
  const map = { strength: "重量訓練", cardio: "有氧", yoga: "瑜珈", dance: "舞蹈" };
  return map[category] || category;
}

function renderTrainers() {
  const grid = document.getElementById("trainerGrid");
  grid.innerHTML = trainers
    .map(
      (t) => `
      <div class="trainer-card">
        <div class="trainer-avatar">${t.icon}</div>
        <h3>${t.name}</h3>
        <p>${t.specialty}</p>
      </div>`
    )
    .join("");
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderCourses(btn.dataset.filter);
  });
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const message = document.getElementById("formMessage");
  if (!name) return;
  message.textContent = `謝謝 ${name}，我們已收到您的報名，將盡快與您聯繫！`;
  form.reset();
});

renderCourses();
renderTrainers();
