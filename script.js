const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menuButton");

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const demoButton = document.getElementById("demoButton");

const taskForm = document.getElementById("taskForm");


/* =========================
   Mobile Navigation
========================= */

menuButton?.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});


document.querySelectorAll(".navigation a").forEach((link) => {

  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });

});


/* =========================
   Modal
========================= */

function openModal() {

  modal.classList.add("open");

  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

}


function closeModal() {

  modal.classList.remove("open");

  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

}


demoButton?.addEventListener("click", openModal);

modalClose?.addEventListener("click", closeModal);


/* 클릭해서 바깥 영역 닫기 */

modal?.addEventListener("click", (event) => {

  if (
    event.target.classList.contains("modal-overlay")
  ) {
    closeModal();
  }

});


/* ESC로 닫기 */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeModal();
  }

});


/* =========================
   Demo Task Creation
========================= */

taskForm?.addEventListener("submit", (event) => {

  event.preventDefault();

  const taskName =
    document.getElementById("taskName").value.trim();

  const taskTime =
    document.getElementById("taskTime").value;

  const pressure =
    document.getElementById("pressure").value;


  if (!taskName || !taskTime) {
    return;
  }


  const pressureText = {

    low: "부드러운 압박",

    medium: "사회적 압박",

    high: "강한 압박"

  };


  alert(
    `실행 약속이 저장되었습니다.\n\n` +
    `할 일: ${taskName}\n` +
    `시간: ${formatDate(taskTime)}\n` +
    `압박 수준: ${pressureText[pressure]}`
  );


  taskForm.reset();

  closeModal();

});


/* =========================
   Date Formatting
========================= */

function formatDate(value) {

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }


  return new Intl.DateTimeFormat(
    "ko-KR",
    {
      dateStyle: "medium",
      timeStyle: "short"
    }
  ).format(date);

}
