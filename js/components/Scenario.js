
const steps = [
  '내일 오후 8시에 영어 공부 40분',
  "오후 8시 — 공부를 시작할 시간이에요.",
  "아직 시작하지 않았다면 미루기 감지",
  "사용자가 선택한 압박 방식 적용",
  "✅ 실행 완료"
];

export function renderScenario() {
  return `
    <div class="scenario">

      ${steps
        .map(
          (step, index) => `
            ${
              index > 0
                ? `<div class="scenario-arrow">↓</div>`
                : ""
            }

            <div class="scenario-step ${
              index === steps.length - 1 ? "success" : ""
            }">

              <span>
                ${String(index + 1).padStart(2, "0")}
              </span>

              <p>${step}</p>

            </div>
          `
        )
        .join("")}

    </div>
  `;
}
