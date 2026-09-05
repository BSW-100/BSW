
export function renderMobileHeader(container) {
  container.innerHTML = `
    <button
      class="menu-button"
      id="menuButton"
      aria-label="메뉴 열기"
    >
      ☰
    </button>

    <strong>실행력 코치</strong>
  `;
}

