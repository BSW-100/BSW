
export function renderModal(container) {
  container.innerHTML = `
    <div
      class="modal"
      id="modal"
      aria-hidden="true"
    >

      <div class="modal-overlay"></div>

      <div class="modal-content">

        <button
          class="modal-close"
          id="modalClose"
          aria-label="닫기"
        >
          ×
        </button>

        <h2>
          실행 약속 만들기
        </h2>

        <p>
          실제 MVP에서는 이 데이터를 저장하고
          실행 시간에 사용자를 다시 호출합니다.
        </p>

        <form id="taskForm">

          <label>
            무엇을 할까요?

            <input
              type="text"
              id="taskName"
              placeholder="예: 영어 공부"
              required
            />
          </label>

          <label>
            언제 할까요?

            <input
              type="datetime-local"
              id="taskTime"
              required
            />
          </label>

          <label>
            압박 수준

            <select id="pressure">

              <option value="low">
                Level 1 · 부드럽게
              </option>

              <option value="medium">
                Level 2 · 사회적 압박
              </option>

              <option value="high">
                Level 3 · 강하게
              </option>

            </select>
          </label>

          <button
            class="primary-button"
            type="submit"
          >
            실행 약속 저장
          </button>

        </form>

      </div>

    </div>
  `;

  setupModal();
}

function setupModal() {
  const modal = document.querySelector("#modal");
  const closeButton = document.querySelector("#modalClose");
  const overlay = document.querySelector(".modal-overlay");
  const form = document.querySelector("#taskForm");

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  closeButton.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = {
      name: document.querySelector("#taskName").value,
      time: document.querySelector("#taskTime").value,
      pressure: document.querySelector("#pressure").value
    };

    console.log("실행 약속:", task);

    alert("실행 약속이 저장되었습니다.");

    form.reset();
    closeModal();
  });
}
