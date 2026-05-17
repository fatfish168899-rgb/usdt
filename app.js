// IMPORTANT: Replace this with your actual API domain when deploying to Cloudflare
// e.g. const API_BASE_URL = 'https://api.yourdomain.com';
const API_BASE_URL = 'https://payusdt8.com'; // Leave empty if hosting on same origin for testing

let orderData = null;
let countdownTimer = null;
let statusTimer = null;
let qrcode = null;

function copyToClipboard(text, tipId, isMainAmount = false) {
    navigator.clipboard.writeText(text).then(() => {
        const tip = document.getElementById(tipId);
        if (!tip) return;

        tip.classList.add('show');
        if (isMainAmount) {
            const box = document.getElementById('amount_copy_box');
            const icon = document.getElementById('copy_icon_box');
            box.style.background = "#dcfce7";
            box.style.borderColor = "#86efac";
            icon.innerHTML = '<i class="fa-solid fa-circle-check text-success"></i>';
            setTimeout(() => {
                box.style.background = "#fffbeb";
                box.style.borderColor = "#fbbf24";
                icon.innerHTML = '<i class="fa-regular fa-copy"></i> <span data-i18n="copied">' + languages[currentLang]['copied'] + '</span>';
            }, 1500);
        }
        setTimeout(() => tip.classList.remove('show'), 1500);
    });
}

function renderStatusBox() {
    const container = document.getElementById('status-container');
    const L = languages[currentLang];

    if (orderData.is_paid) {
        container.innerHTML = `
            <div class="status-badge bg-success-subtle text-success border border-success-subtle">
                <i class="fa-solid fa-circle-check me-1"></i> ${L['status_paid']}
            </div>`;
    } else if (orderData.is_expired) {
        container.innerHTML = `
            <div class="status-badge bg-danger-subtle text-danger border border-danger-subtle">
                <i class="fa-solid fa-clock me-1"></i> ${L['status_expired']}
            </div>`;
    } else {
        container.innerHTML = `
            <div class="status-badge bg-primary-subtle text-primary border border-primary-subtle">
                <i class="fa-solid fa-shield-halved me-1"></i> ${L['status_pending']}
            </div>`;
    }
}

function handleAutoClose() {
    let seconds = 5;
    const overlayText = document.getElementById('close_countdown');
    overlayText.style.display = 'block';

    const closeTimer = setInterval(function () {
        const tpl = languages[currentLang]['close_timer'] || '%s seconds';
        overlayText.innerText = tpl.replace('%s', seconds);
        if (seconds <= 0) {
            clearInterval(closeTimer);
            if (orderData.return_url) {
                window.location.href = orderData.return_url;
            } else {
                window.close();
            }
        }
        seconds--;
    }, 1000);
}

function updateStateUI() {
    renderStatusBox();

    if (orderData.is_paid || orderData.is_expired) {
        document.getElementById('qr-overlay').style.display = 'flex';
        document.getElementById('warning-box').style.display = 'none';

        const icon = document.getElementById('overlay-icon');
        const text = document.getElementById('overlay-text');

        if (orderData.is_paid) {
            icon.className = 'fa-solid fa-circle-check text-success fs-2 mb-1';
            text.className = 'fw-bold text-success';
            text.innerText = languages[currentLang]['confirmed'];
            handleAutoClose();
        } else {
            icon.className = 'fa-solid fa-circle-xmark text-danger fs-2 mb-1';
            text.className = 'fw-bold text-danger';
            text.innerText = languages[currentLang]['reorder'];
        }

        // Stop timers
        if (countdownTimer) clearInterval(countdownTimer);
        if (statusTimer) clearInterval(statusTimer);
    }
}

function renderUI() {
    // Hide loading, show main
    document.getElementById('loading-overlay').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    // Set basic info
    document.getElementById('bottom_order_id').innerText = orderData.order_no;
    document.getElementById('real_amount_text').innerText = orderData.real_amount;
    document.getElementById('address_text').innerText = orderData.pay_address;

    // Set network badge
    const badge = document.getElementById('network-badge');
    badge.innerText = `[${orderData.network}-USDT]`;
    badge.className = `network-badge ${orderData.network === 'ERC20' ? 'network-erc' : 'network-trc'}`;

    // Generate QR
    if (!qrcode) {
        qrcode = new QRCode(document.getElementById("qrcode_box"), {
            text: orderData.pay_address,
            width: 120,
            height: 120,
            colorDark: "#1e293b",
            colorLight: "#ffffff",
            correctLevel: 0
        });
    }

    // Attach click events
    document.getElementById('address_box').onclick = () => copyToClipboard(orderData.pay_address, 'copy_tip');
    document.getElementById('amount_copy_box').onclick = () => copyToClipboard(orderData.real_amount, 'amount_copy_tip', true);

    updateStateUI();

    // Setup countdown if pending
    if (!orderData.is_paid && !orderData.is_expired) {
        let remains = orderData.remains;
        countdownTimer = setInterval(() => {
            if (remains <= 0) {
                clearInterval(countdownTimer);
                location.reload();
                return;
            }
            const m = Math.floor(remains / 60);
            const s = remains % 60;
            const timeStr = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
            document.getElementById('countdown').innerText = `${languages[currentLang]['timer']} ${timeStr}`;
            remains--;
        }, 1000);

        // Setup polling
        statusTimer = setInterval(fetchOrderData, 3000);
    }
}

async function fetchOrderData() {
    const urlParams = new URLSearchParams(window.location.search);
    const orderNo = urlParams.get('order_no');

    if (!orderNo) {
        document.getElementById('loading-text').innerText = 'Error: Invalid Order (Missing order_no)';
        return;
    }

    try {
        const res = await fetch(`${API_BASE_URL}/api_checkout.php?order_no=${orderNo}`);
        const result = await res.json();

        if (result.code === 200) {
            const wasPending = orderData && !orderData.is_paid && !orderData.is_expired;
            orderData = result.data;

            if (wasPending && (orderData.is_paid || orderData.is_expired)) {
                // Status changed, update UI immediately
                updateStateUI();
            } else if (!wasPending) {
                // First load
                renderUI();
            }
        } else {
            if (!orderData) {
                document.getElementById('loading-text').innerText = `Error: ${result.msg}`;
            }
        }
    } catch (err) {
        console.error("API Fetch Error:", err);
        if (!orderData) {
            document.getElementById('loading-text').innerText = `Network Error. Please try again.`;
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    detectLanguage();
    updateUITexts();
    fetchOrderData();
});
