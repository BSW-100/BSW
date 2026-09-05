
const navigation = [
  ["overview", "프로젝트 개요"],
  ["problem", "해결하고자 하는 문제"],
  ["user", "사용자"],
  ["value", "핵심 가치"],
  ["concept", "제품 개념"],
  ["features", "핵심 기능"],
  ["scenario", "사용자 시나리오"],
  ["mvp", "MVP"],
  ["ux", "UX 원칙"],
  ["screens", "화면 설계"],
  ["metrics", "성공 지표"],
  ["hypothesis", "제품 가설"],
  ["vibe", "바이브코딩 방향"]
];

export function renderSidebar(container) {
  container.innerHTML = `
    <div class="brand">
      <div class="brand-logo">실행력 코치</div>
      <div class="brand-subtitle">PRODUCT DOCUMENT</div>
    </div>

    <nav class="navigation">
      ${navigation
        .map(
          ([id, label]) =>
            `<a href="#${id}">${label}</a>`
        )
        .join("")}
    </nav>
  `;
  setupSidebar();
}

function setupSidebar() {
  const sidebar = document.querySelector("#sidebar");
  const menuButton = document.querySelector("#menuButton");

  if (!menuButton) return;

  menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  });
}