
export function renderCardGrid(cards = []) {
  return `
    <div class="card-grid">
      ${cards
        .map(
          (card) => `
            <article class="card">

              <span class="card-number">
                ${card.number}
              </span>

              <h3>
                ${card.title}
              </h3>

              <p>
                ${card.description}
              </p>

            </article>
          `
        )
        .join("")}
    </div>

    <div class="highlight-box">
      핵심 문제는

      <strong>
        "무엇을 해야 하는가?"
      </strong>

      가 아니라

      <strong>
        "왜 아직 하지 않았으며,
        어떻게 지금 하게 만들 것인가?"
      </strong>
    </div>
  `;
}

