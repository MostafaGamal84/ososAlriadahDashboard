const API_BASE = "/api/auction";

const form = document.getElementById("auction-form");
const idInput = document.getElementById("auction-id");
const nameInput = document.getElementById("auction-name");
const startInput = document.getElementById("auction-start");
const endInput = document.getElementById("auction-end");
const urlInput = document.getElementById("auction-url");
const priceInput = document.getElementById("auction-price");
const agentInput = document.getElementById("auction-agent");
const districtInput = document.getElementById("auction-district");
const cityInput = document.getElementById("auction-city");
const contentInput = document.getElementById("auction-content");
const imageInput = document.getElementById("auction-image");
const imagePathInput = document.getElementById("auction-image-path");
const pdfPathInput = document.getElementById("auction-pdf-path");
const submitButton = document.getElementById("submit-button");
const cancelButton = document.getElementById("cancel-edit");
const refreshButton = document.getElementById("refresh-button");
const message = document.getElementById("form-message");
const rowsContainer = document.getElementById("auction-rows");
const rowTemplate = document.getElementById("auction-row-template");

async function request(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || response.statusText);
  }
  if (response.status === 204) {
    return null;
  }
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
}

function toDisplayRange(start, end) {
  const startDate = start ? new Date(start) : null;
  const endDate = end ? new Date(end) : null;
  const formatter = new Intl.DateTimeFormat("ar-EG", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  if (!startDate || !endDate) {
    return "—";
  }
  return `${formatter.format(startDate)} - ${formatter.format(endDate)}`;
}

function toInputValue(date) {
  if (!date) return "";
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function formatCurrency(value) {
  if (value === null || value === undefined || value === "") {
    return "—";
  }
  const number = Number(value);
  if (Number.isNaN(number)) {
    return "—";
  }
  return new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: "SAR",
    maximumFractionDigits: 2,
  }).format(number);
}

function setMessage(text, type = "info") {
  message.textContent = text;
  if (!text) {
    message.classList.remove("error");
    return;
  }
  if (type === "error") {
    message.classList.add("error");
  } else {
    message.classList.remove("error");
  }
}

function resetForm(clearMessage = true) {
  form.reset();
  idInput.value = "";
  imagePathInput.value = "";
  pdfPathInput.value = "";
  cancelButton.hidden = true;
  submitButton.textContent = "حفظ المزاد";
  if (clearMessage) {
    setMessage("");
  }
}

function populateForm(auction) {
  idInput.value = auction.id || "";
  nameInput.value = auction.name || "";
  startInput.value = toInputValue(auction.start);
  endInput.value = toInputValue(auction.end);
  urlInput.value = auction.url || "";
  priceInput.value = auction.openingPrice ?? "";
  agentInput.value = auction.agentName || "";
  districtInput.value = auction.district || "";
  cityInput.value = auction.city || "";
  contentInput.value = auction.content || "";
  imagePathInput.value = auction.imagePath || "";
  pdfPathInput.value = auction.pdfPath || "";
  imageInput.value = "";
  cancelButton.hidden = false;
  submitButton.textContent = "تحديث المزاد";
  setMessage("يتم الآن تعديل المزاد المحدد. لا تنس حفظ التغييرات.");
}

function renderRows(auctions) {
  rowsContainer.innerHTML = "";
  if (!auctions || auctions.length === 0) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = '<td colspan="5" class="empty">لا توجد بيانات حتى الآن.</td>';
    rowsContainer.appendChild(emptyRow);
    return;
  }

  auctions.forEach((auction) => {
    const clone = rowTemplate.content.firstElementChild.cloneNode(true);
    clone.dataset.id = auction.id;
    clone.querySelector(".name").textContent = auction.name || "—";
    clone
      .querySelector(".period")
      .textContent = toDisplayRange(auction.start, auction.end);
    clone.querySelector(".price").textContent = formatCurrency(auction.openingPrice);
    const location = [auction.city, auction.district]
      .filter(Boolean)
      .join(" - ");
    clone.querySelector(".city").textContent = location || "—";

    const editButton = clone.querySelector(".edit");
    const deleteButton = clone.querySelector(".delete");
    deleteButton.dataset.id = auction.id;

    editButton.addEventListener("click", () => {
      populateForm(auction);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    deleteButton.addEventListener("click", async () => {
      if (!confirm("هل أنت متأكد من حذف هذا المزاد؟")) {
        return;
      }
      try {
        setMessage("جاري حذف المزاد...");
        await request(`${API_BASE}/Delete/${auction.id}`, {
          method: "POST",
        });
        setMessage("تم حذف المزاد بنجاح.");
        await loadAuctions();
        if (idInput.value === String(auction.id)) {
          resetForm(false);
        }
      } catch (error) {
        console.error(error);
        setMessage("تعذر حذف المزاد. الرجاء المحاولة لاحقًا.", "error");
      }
    });

    rowsContainer.appendChild(clone);
  });
}

async function loadAuctions() {
  try {
    const auctions = await request(API_BASE);
    renderRows(auctions);
  } catch (error) {
    console.error(error);
    renderRows([]);
    setMessage("تعذر تحميل المزادات. تأكد من تشغيل الخادم.", "error");
  }
}

function validateForm() {
  if (!form.reportValidity()) {
    setMessage("يرجى إكمال الحقول المطلوبة.", "error");
    return false;
  }
  const start = new Date(startInput.value);
  const end = new Date(endInput.value);
  if (startInput.value && endInput.value && end < start) {
    setMessage("تاريخ النهاية يجب أن يكون بعد تاريخ البداية.", "error");
    return false;
  }
  return true;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!validateForm()) {
    return;
  }

  const isEdit = Boolean(idInput.value);
  const endpoint = isEdit ? `${API_BASE}/update` : `${API_BASE}/add`;

  const formData = new FormData();
  formData.append("Id", idInput.value || "0");
  formData.append("Name", nameInput.value.trim());
  formData.append("Start", startInput.value);
  formData.append("End", endInput.value);
  formData.append("Content", contentInput.value.trim());
  formData.append("Url", urlInput.value.trim());

  if (priceInput.value) {
    formData.append("OpeningPrice", priceInput.value);
  }
  formData.append("AgentName", agentInput.value.trim());
  formData.append("District", districtInput.value.trim());
  formData.append("City", cityInput.value.trim());
  formData.append("ImagePath", imagePathInput.value);
  formData.append("PdfPath", pdfPathInput.value);

  if (imageInput.files && imageInput.files[0]) {
    formData.append("ImageFile", imageInput.files[0]);
  }

  try {
    submitButton.disabled = true;
    setMessage(isEdit ? "جاري تحديث المزاد..." : "جاري إضافة المزاد...");
    await request(endpoint, {
      method: "POST",
      body: formData,
    });
    setMessage(isEdit ? "تم تحديث المزاد بنجاح." : "تم إضافة المزاد بنجاح.");
    await loadAuctions();
    if (isEdit) {
      resetForm(false);
    } else {
      form.reset();
    }
  } catch (error) {
    console.error(error);
    setMessage("تعذر حفظ المزاد. الرجاء التحقق من البيانات والمحاولة مرة أخرى.", "error");
  } finally {
    submitButton.disabled = false;
  }
});

cancelButton.addEventListener("click", () => {
  resetForm();
});

refreshButton.addEventListener("click", () => {
  loadAuctions();
});

loadAuctions();
