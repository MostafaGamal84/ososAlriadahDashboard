const apiBase = "/api/auction";

const addForm = document.getElementById("addAuctionForm");
const editForm = document.getElementById("editAuctionForm");
const editSection = document.getElementById("editSection");
const cancelEditButton = document.getElementById("cancelEdit");
const refreshButton = document.getElementById("refreshButton");
const tableBody = document.getElementById("auctionsTableBody");
const notificationsHost = document.getElementById("notifications");

addForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(addForm);

  try {
    await submitFormData(`${apiBase}/add`, formData, "Auction created successfully");
    addForm.reset();
  } catch (error) {
    showToast("Unable to add auction", error.message, "error");
  }
});

editForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(editForm);

  try {
    await submitFormData(`${apiBase}/update`, formData, "Auction updated successfully");
    hideEditSection();
    editForm.reset();
  } catch (error) {
    showToast("Unable to update auction", error.message, "error");
  }
});

cancelEditButton?.addEventListener("click", () => {
  hideEditSection();
  editForm?.reset();
});

refreshButton?.addEventListener("click", loadAuctions);

document.addEventListener("DOMContentLoaded", loadAuctions);

async function loadAuctions() {
  if (!tableBody) {
    console.warn("Auctions table body element not found.");
    return;
  }
  tableBody.innerHTML = `<tr><td colspan="7" class="empty">Loading auctions…</td></tr>`;

  try {
    const response = await fetch(apiBase, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    const auctions = await response.json();

    if (!auctions.length) {
      tableBody.innerHTML = `<tr><td colspan="7" class="empty">No auctions found.</td></tr>`;
      return;
    }

    tableBody.innerHTML = auctions
      .map((auction) => buildAuctionRow(auction))
      .join("");
  } catch (error) {
    tableBody.innerHTML = `<tr><td colspan="7" class="empty">Failed to load auctions.</td></tr>`;
    showToast("Request failed", error.message, "error");
  }
}

function buildAuctionRow(auction) {
  const start = toLocalDateTime(auction.start);
  const end = toLocalDateTime(auction.end);
  const price = auction.openingPrice != null ? `${auction.openingPrice.toFixed(2)}` : "—";
  const agent = auction.agentName || "—";
  const city = auction.city || "—";

  return `
    <tr data-id="${auction.id}">
      <td>
        <div>${escapeHtml(auction.name)}</div>
        ${auction.url ? `<a href="${encodeURI(auction.url)}" target="_blank" rel="noopener">Open link</a>` : ""}
      </td>
      <td><span class="badge">${start}</span></td>
      <td><span class="badge">${end}</span></td>
      <td>${price}</td>
      <td>${escapeHtml(agent)}</td>
      <td>${escapeHtml(city)}</td>
      <td class="actions">
        <button type="button" class="secondary" data-action="edit">Edit</button>
        <button type="button" class="danger" data-action="delete">Delete</button>
      </td>
    </tr>
  `;
}

tableBody?.addEventListener("click", async (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const action = target.dataset.action;
  if (!action) return;

  const row = target.closest("tr[data-id]");
  if (!row) return;

  const id = row.dataset.id;
  if (!id) return;

  if (action === "edit") {
    await populateEditForm(Number(id));
  }

  if (action === "delete") {
    const confirmed = confirm("Are you sure you want to delete this auction?");
    if (!confirmed) return;

    try {
      const response = await fetch(`${apiBase}/delete/${id}`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      showToast("Auction deleted", "The auction was marked as deleted.", "success");
      await loadAuctions();
    } catch (error) {
      showToast("Unable to delete", error.message, "error");
    }
  }
});

async function populateEditForm(id) {
  try {
    const response = await fetch(`${apiBase}/GetById/${id}`, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    const auction = await response.json();
    if (!auction) {
      throw new Error("Auction not found");
    }

    editSection.hidden = false;
    editForm.scrollIntoView({ behavior: "smooth", block: "start" });

    document.getElementById("editAuctionId").value = auction.id;
    document.getElementById("editName").value = auction.name ?? "";
    document.getElementById("editStart").value = toInputDateTime(auction.start);
    document.getElementById("editEnd").value = toInputDateTime(auction.end);
    document.getElementById("editOpeningPrice").value = auction.openingPrice ?? "";
    document.getElementById("editAgentName").value = auction.agentName ?? "";
    document.getElementById("editDistrict").value = auction.district ?? "";
    document.getElementById("editCity").value = auction.city ?? "";
    document.getElementById("editUrl").value = auction.url ?? "";
    document.getElementById("editContent").value = auction.content ?? "";
  } catch (error) {
    showToast("Unable to load auction", error.message, "error");
  }
}

function hideEditSection() {
  editSection.hidden = true;
}

async function submitFormData(url, formData, successMessage) {
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Server responded with status ${response.status}`);
  }

  showToast(successMessage, "The request was completed successfully.", "success");
  await loadAuctions();
}

function toLocalDateTime(dateValue) {
  if (!dateValue) return "—";
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleString();
}

function toInputDateTime(dateValue) {
  if (!dateValue) return "";
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (number) => String(number).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function showToast(title, message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <strong>${escapeHtml(title)}</strong>
    <p>${escapeHtml(message)}</p>
  `;

  notificationsHost?.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

function escapeHtml(value) {
  return value == null
    ? ""
    : value
        .toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

