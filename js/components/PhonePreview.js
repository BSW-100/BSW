
export function renderPhonePreview() {
  return `
    <div class="phone-wrapper">

      <div class="phone">

        <div class="phone-top">

          <small>오늘</small>

          <h3>
            실행력 코치
          </h3>

          <strong>
            실행률 67%
          </strong>

        </div>

        <div class="phone-body">

          <div class="phone-task">
            <strong>🔴 영어 공부</strong>
            <small>오후 8:00 · 40분</small>
          </div>

          <div class="phone-task">
            <strong>🟡 지출 정리</strong>
            <small>오후 9:00 · 10분</small>
          </div>

          <div class="phone-task completed">
            <strong>🟢 친구에게 연락</strong>
            <small>완료</small>
          </div>

          <button
            class="primary-button"
            id="demoButton"
          >
            + 실행 약속 만들기
          </button>

        </div>

      </div>

    </div>
  `;
}

