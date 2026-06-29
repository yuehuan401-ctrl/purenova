const toast = document.querySelector(".toast");
const buyPanel = document.querySelector(".buy-panel");
const galleryMain = document.querySelector("[data-gallery-main]");
const thumbs = [...document.querySelectorAll(".thumb")];
const choices = [...document.querySelectorAll(".choice")];
const price = document.querySelector(".price");
const qtyValue = document.querySelector("[data-qty-value]");
const qtyButtons = [...document.querySelectorAll("[data-qty]")];
const addToCart = document.querySelector("[data-add-to-cart]");
const video = document.querySelector(".demo-media video");
const videoToggle = document.querySelector("[data-video-toggle]");
const scrollButtons = [...document.querySelectorAll("[data-scroll-target]")];
const detailItems = [...document.querySelectorAll("details")];

let toastTimer;
let panelTimer;
let quantity = 1;

function showToast(message) {
  if (!toast || !message) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function highlightBuyPanel() {
  if (!buyPanel) return;
  buyPanel.classList.remove("is-highlighted");
  window.clearTimeout(panelTimer);
  requestAnimationFrame(() => {
    buyPanel.classList.add("is-highlighted");
  });
  panelTimer = window.setTimeout(() => {
    buyPanel.classList.remove("is-highlighted");
  }, 700);
}

function pressFeedback(element) {
  element.classList.add("is-clicked");
  window.setTimeout(() => element.classList.remove("is-clicked"), 160);
}

document.addEventListener("click", (event) => {
  const clickable = event.target.closest("button, a, summary");
  if (!clickable) return;

  pressFeedback(clickable);

  const feedback = clickable.dataset.feedback;
  if (feedback) showToast(feedback);
});

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scrollTarget);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    thumbs.forEach((item) => item.classList.remove("is-active"));
    thumb.classList.add("is-active");
    galleryMain.src = thumb.dataset.image;
    galleryMain.alt = thumb.querySelector("img")?.alt || "AIRVIA Pure 商品图";
  });
});

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    choices.forEach((item) => item.classList.remove("is-selected"));
    choice.classList.add("is-selected");
    price.textContent = choice.dataset.price;
    highlightBuyPanel();
  });
});

qtyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const delta = Number(button.dataset.qty);
    quantity = Math.min(9, Math.max(1, quantity + delta));
    qtyValue.textContent = quantity;
    const action = delta > 0 ? "增加" : "减少";
    showToast(`已${action}数量：${quantity} 件`);
  });
});

addToCart.addEventListener("click", () => {
  const selected = document.querySelector(".choice.is-selected")?.textContent.trim() || "标准套装";
  addToCart.classList.add("is-added");
  addToCart.textContent = "已加入购物车";
  showToast(`${selected} × ${quantity} 已加入购物车`);
  highlightBuyPanel();

  window.setTimeout(() => {
    addToCart.classList.remove("is-added");
    addToCart.textContent = "加入购物车";
  }, 1700);
});

videoToggle.addEventListener("click", async () => {
  if (video.paused) {
    try {
      await video.play();
      videoToggle.textContent = "暂停";
      videoToggle.setAttribute("aria-label", "暂停产品视频");
      showToast("产品视频已播放");
    } catch {
      showToast("视频暂时无法自动播放，请再点一次试试");
    }
  } else {
    video.pause();
    videoToggle.textContent = "播放";
    videoToggle.setAttribute("aria-label", "播放产品视频");
    showToast("产品视频已暂停");
  }
});

detailItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    const title = item.querySelector("summary")?.textContent.trim();
    showToast(`${item.open ? "已展开" : "已收起"}：${title}`);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target?.id === "shop") {
      window.setTimeout(highlightBuyPanel, 420);
    }
  });
});
