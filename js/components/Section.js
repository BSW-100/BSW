
import { sections } from "../data/productData.js";
import { renderCardGrid } from "./Card.js";
import { renderFeatureList } from "./Feature.js";
import { renderScenario } from "./Scenario.js";
import { renderPhonePreview } from "./PhonePreview.js";

export function renderSections(container) {
  container.innerHTML = sections
    .map((section) => renderSection(section))
    .join("");

  setupSectionEvents();
}

function renderSection(section) {
  return `
    <section
      class="section"
      id="${section.id}"
    >
      <div class="section-label">
        ${section.number}
      </div>

      <h2>
        ${section.title}
      </h2>

      ${renderSectionContent(section)}
    </section>
  `;
}

function renderSectionContent(section) {
  switch (section.type) {
    case "overview":
      return renderOverview();

    case "problem":
      return renderCardGrid(section.cards);

    case "user":
      return renderUser();

    case "value":
      return renderValue();

    case "concept":
      return renderConcept();

    case "features":
      return renderFeatureList();

    case "scenario":
      return renderScenario();

    case "mvp":
      return renderMVP();

    case "ux":
      return renderUX();

    case "screens":
      return renderScreens();

    case "metrics":
      return renderMetrics();

    case "hypothesis":
      return renderHypothesis();

    case "vibe":
      return renderVibe();

    default:
      return "";
  }
}

function renderOverview() {
  return `
    <div class="card">
      <h3>한 줄 소개</h3>

      <p>
        사용자가 세운 계획을 실제 행동으로 연결하기 위해
        알림, 압박, 책임감, 보상 등의 장치를 제공하는 서비스.
      </p>
    </div>

    <div class="highlight-box">
      <strong>
        계획을 세우는 능력보다,
        계획한 것을 실제로 하는 능력을 돕는다.
      </strong>
    </div>
  `;
}

function renderUser() {
  return `
    <div class="card">

      <h3>1차 타깃</h3>

      <p class="large-text">
        계획은 잘 세우지만
        <span class="primary">
          실행력이 부족하다고 느끼는 사람
        </span>
      </p>

      <div class="tags">
        <span>학생</span>
        <span>직장인</span>
        <span>자기계발 사용자</span>
        <span>미루는 습관이 있는 사람</span>
      </div>

    </div>

    <div class="card">

      <h3>대표 사용자</h3>

      <p>
        공부 계획을 세우는 것은 잘하지만
        계획한 시간에 공부를 시작하지 못한다.
      </p>

      <p>
        계속 미루다가 하루가 끝나고
        "오늘도 못 했다"고 생각한다.
      </p>

    </div>

    <div class="quote">
      "계획만 세우는 사람이 아니라
      실제로 실행하는 사람이 되고 싶다."
    </div>
  `;
}

function renderValue() {
  const items = [
    ["기존 To-do 앱", "해야 할 일을 기록"],
    ["캘린더", "언제 해야 하는지 관리"],
    ["습관 앱", "반복 행동 기록"],
    ["실행력 코치", "실제로 행동하도록 개입"]
  ];

  return `
    <div class="comparison">
      ${items
        .map(
          ([title, description], index) => `
            <div class="comparison-item ${
              index === 3 ? "featured" : ""
            }">
              <span>${title}</span>
              <strong>${description}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderConcept() {
  const flow = [
    "계획",
    "실행 약속",
    "실행 확인",
    "미루기 감지",
    "압박",
    "완료",
    "보상"
  ];

  return `
    <div class="flow">
      ${flow
        .map(
          (item, index) => `
            <div>${item}</div>
            ${index < flow.length - 1 ? "<span>→</span>" : ""}
          `
        )
        .join("")}
    </div>

    <div class="card">
      <p>
        사용자가 단순히 할 일을 등록하는 것으로 끝나지 않는다.
      </p>

      <p>
        등록한 계획을 실제 행동으로 연결하는 것이
        제품의 핵심이다.
      </p>
    </div>
  `;
}

function renderMVP() {
  const groups = [
    {
      title: "필수 기능",
      items: [
        "사용자 프로필",
        "실행 약속 생성",
        "날짜/시간 설정",
        "할 일 목록",
        "실행 알림",
        "미루기",
        "실행 시작",
        "완료 처리",
        "성공/실패 기록",
        "오늘의 실행 현황",
        "기본 통계"
      ]
    },
    {
      title: "2차 기능",
      items: [
        "친구 초대",
        "약속 공유",
        "실행 인증",
        "실행 점수",
        "연속 달성 기록",
        "레벨 / 배지"
      ]
    },
    {
      title: "이후 실험",
      items: [
        "금전적 패널티",
        "실제 결제 / 보증금",
        "AI 기반 계획 조정",
        "미루는 패턴 분석",
        "개인별 최적 알림",
        "목표 난이도 자동 조절"
      ]
    }
  ];

  return `
    <div class="card-grid">
      ${groups
        .map(
          (group) => `
            <div class="card">
              <h3>${group.title}</h3>

              <ul>
                ${group.items
                  .map((item) => `<li>${item}</li>`)
                  .join("")}
              </ul>
            </div>
          `
        )
        .join("")}
    </div>

    <div class="highlight-box">
      첫 번째 MVP에서 가장 중요한 것은 기능의 숫자가 아니라

      <strong>
        "사용자가 실제로 행동하는가?"
      </strong>

      를 검증하는 것이다.
    </div>
  `;
}

function renderUX() {
  const items = [
    ["기록보다 실행", "사용자가 실제 행동하는 것이 가장 중요하다."],
    ["알림을 많이 보내지 않는다", "무분별한 알림은 오히려 알림을 끄게 만들 수 있다."],
    ["미루기도 데이터다", "미루기 횟수와 시간을 실행 패턴 분석에 활용한다."],
    ["강제력은 사용자가 선택", "사용자마다 적절한 압박 수준이 다르다."],
    ["실패를 비난하지 않는다", "목표는 사용자를 혼내는 것이 아니라 다시 행동하게 만드는 것이다."],
    ["CTA는 단순하게", "사용자가 앱에 들어왔을 때 생각할 것을 최소화한다."]
  ];

  return `
    <div class="card-grid">
      ${items
        .map(
          ([title, description]) => `
            <div class="card">
              <h3>${title}</h3>
              <p>${description}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderScreens() {
  return `
    <div class="card-grid">

      <div class="card">
        <h3>홈</h3>
        <p>오늘의 실행 약속과 실행률을 보여준다.</p>
      </div>

      <div class="card">
        <h3>실행 약속 생성</h3>
        <p>할 일, 시간, 반복, 압박 수준 등을 설정한다.</p>
      </div>

      <div class="card">
        <h3>실행 화면</h3>
        <p>"지금 시작"을 중심으로 행동을 유도한다.</p>
      </div>

      <div class="card">
        <h3>완료 화면</h3>
        <p>완료 여부와 주간 실행률을 보여준다.</p>
      </div>

    </div>

    ${renderPhonePreview()}
  `;
}

function renderMetrics() {
  const metrics = [
    ["실행률", "계획 대비 실제 행동"],
    ["시작률", "계획 후 실제 시작"],
    ["완료율", "시작 후 완료"],
    ["미루기", "평균 미루기 횟수"]
  ];

  return `
    <div class="metric-grid">
      ${metrics
        .map(
          ([title, description]) => `
            <div class="metric">
              <strong>${title}</strong>
              <span>${description}</span>
            </div>
          `
        )
        .join("")}
    </div>

    <div class="card">
      <h3>Primary Metric</h3>

      <p class="large-text">
        <span class="primary">
          계획 대비 실제 실행률
        </span>
      </p>

      <p>
        실행 약속 10개 생성 → 7개 완료 → 실행률 70%
      </p>
    </div>
  `;
}

function renderHypothesis() {
  const items = [
    "사용자는 계획보다 실행 단계에서 더 큰 어려움을 겪는다.",
    "일반적인 알림보다 적극적인 개입이 실행률을 높일 수 있다.",
    "친구와의 약속 같은 사회적 압박이 실행 동기를 높일 수 있다.",
    "금전적 패널티가 실행 동기를 높일 수 있다.",
    "사용자마다 적절한 강제 수준이 다르다."
  ];

  return `
    <div class="card">
      <ol>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ol>
    </div>
  `;
}

function renderVibe() {
  const flow = [
    "① 오늘 해야 할 일 확인",
    "② 실행 약속 만들기",
    "③ 실행 시간 도달",
    "④ 지금 시작 / 미루기 선택",
    "⑤ 완료 처리",
    "⑥ 실행률 확인"
  ];

  return `
    <div class="card">
      <h3>초기 형태</h3>

      <p>
        모바일 웹앱 또는 반응형 웹앱으로
        빠르게 제작한다.
      </p>
    </div>

    <div class="card">

      <h3>첫 번째 프로토타입의 핵심 플로우</h3>

      <div class="flow vertical">
        ${flow.map((item) => `<div>${item}</div>`).join("")}
      </div>

    </div>

    <div class="final-message">

      <small>PRODUCT PRINCIPLE</small>

      <h2>
        계획을 더 잘 세우게 만드는 것이 아니라,
        <br />
        <span>계획한 것을 실제로 하게 만든다.</span>
      </h2>

    </div>
  `;
}

function setupSectionEvents() {
  const demoButton = document.querySelector("#demoButton");

  if (demoButton) {
    demoButton.addEventListener("click", () => {
      document.querySelector("#modal")?.classList.add("open");
    });
  }
}
