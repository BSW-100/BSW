
const features = [
  {
    index: "01",
    title: "실행 약속 만들기",
    content: `
      <p>
        할 일과 실행 시간, 예상 소요 시간을 입력한다.
      </p>

      <ul>
        <li>할 일: 영어 공부</li>
        <li>날짜: 8월 30일</li>
        <li>시간: 오후 8시</li>
        <li>목표 시간: 40분</li>
      </ul>
    `
  },

  {
    index: "02",
    title: "실행 알림",
    content: `
      <p>
        단순히 "할 일입니다"라고 알려주는 것이 아니라
        행동을 유도한다.
      </p>

      <div class="mini-message">
        🔔 영어 공부를 시작할 시간이에요.
      </div>
    `
  },

  {
    index: "03",
    title: "미루기 감지",
    content: `
      <div class="action-box">

        <strong>
          아직 시작하지 않았어요.
        </strong>

        <button class="primary-button">
          지금 시작
        </button>

        <button class="secondary-button">
          10분 미루기
        </button>

        <button class="secondary-button">
          오늘 목표 조정
        </button>

      </div>
    `
  },

  {
    index: "04",
    title: "강제 실행 장치",
    content: `
      <div class="pressure-level level-1">
        <strong>Level 1 — 부드러운 압박</strong>
        <p>
          추가 알림, 미루기 횟수 표시,
          목표 재확인
        </p>
      </div>

      <div class="pressure-level level-2">
        <strong>Level 2 — 사회적 압박</strong>
        <p>
          친구에게 실행 약속과
          완료 여부 공유
        </p>
      </div>

      <div class="pressure-level level-3">
        <strong>Level 3 — 금전적 압박</strong>
        <p>
          사용자가 미리 설정한 금액을
          패널티로 활용
        </p>
      </div>
    `
  },

  {
    index: "05",
    title: "보상 시스템",
    content: `
      <p>
        게임화는 아직 검증되지 않은 가설이므로
        초기 MVP에서는 보조 기능으로 취급한다.
      </p>

      <div class="tags">
        <span>실행 포인트</span>
        <span>연속 실행</span>
        <span>레벨</span>
        <span>배지</span>
        <span>주간 달성률</span>
      </div>
    `
  }
];

export function renderFeatureList() {
  return features
    .map(
      (feature) => `
        <div class="feature">

          <div class="feature-index">
            ${feature.index}
          </div>

          <div>
            <h3>${feature.title}</h3>
            ${feature.content}
          </div>

        </div>
      `
    )
    .join("");
}

