const languages = {
    'zh': {
        'title': 'PayUSDT 安全支付收银台',
        'status_paid': '支付已完成',
        'status_expired': '订单已失效',
        'status_pending': '安全支付处理中',
        'confirmed': '已确认到账',
        'reorder': '请重新下单',
        'copy_text': '收款地址（点击复制）',
        'copied': '点击复制',
        'timer': '剩余支付时间',
        'order_id': '订单号',
        'amount_warn': '精准金额（必填）',
        'close_timer': '%s 秒后自动关闭页面',
        'guide_step1': '第1步：扫码或复制地址',
        'guide_step2': '第2步：点击复制精准金额',
        'faq_title': '支付遇到问题？',
        'faq_q1': '转账金额不一致怎么办？',
        'faq_a1': '请务必点击主界面或弹窗中的精准金额进行复制，少转或多扫都无法自动到账。',
        'faq_q2': '转错网络了怎么办？',
        'faq_a2': 'TRC20 与 ERC20 不互通，转错会导致资产丢失，请务必核对。',
        'tip_gas': '⚠️ 请确保**转账金额**不含手续费 (Gas Fee)',
        'tip_usdt_only': '⚠️ 仅支持 USDT 资产，误转其他币种将永久丢失',
        'tip_confirm_time': '⏳ 网络确认通常需要 1-3 分钟，请勿重复支付',
        'tip_title': '重要提示'
    },
    'en': {
        'title': 'PayUSDT Secure Checkout',
        'status_paid': 'Payment Completed',
        'status_expired': 'Order Expired',
        'status_pending': 'Processing Secure Payment',
        'confirmed': 'Payment Confirmed',
        'reorder': 'Please re-order',
        'copy_text': 'Receive Address (Click to Copy)',
        'copied': 'Click to Copy',
        'timer': 'Remaining Time',
        'order_id': 'Order No.',
        'amount_warn': 'Exact Amount (Required)',
        'close_timer': 'Closing in %ss...',
        'guide_step1': 'Step 1: Scan or Copy Address',
        'guide_step2': 'Step 2: Copy Exact Amount',
        'faq_title': 'Payment Issues?',
        'faq_q1': 'Amount mismatch?',
        'faq_a1': 'Please copy the exact amount. Any deviation will cause auto-credit failure.',
        'faq_q2': 'Wrong network?',
        'faq_a2': 'TRC20 and ERC20 are not compatible. Assets may be lost if sent to wrong chain.',
        'tip_gas': '⚠️ Ensure **Transfer Amount** excludes Gas Fee',
        'tip_usdt_only': '⚠️ USDT Only. Other tokens will be lost forever',
        'tip_confirm_time': '⏳ Confirmation takes 1-3 mins. Do not pay twice',
        'tip_title': 'Important Notice'
    },
    'th': {
        'title': 'PayUSDT เคาน์เตอร์ชำระเงินที่ปลอดภัย',
        'status_paid': 'การชำระเงินเสร็จสมบูรณ์',
        'status_expired': 'คำสั่งซื้อหมดอายุ',
        'status_pending': 'กำลังประมวลผลการชำระเงินที่ปลอดภัย',
        'confirmed': 'ยืนยันการรับเงินแล้ว',
        'reorder': 'กรุณาสั่งซื้อใหม่',
        'copy_text': 'ที่อยู่การรับเงิน (คลิกเพื่อคัดลอก)',
        'copied': 'คลิกเพื่อคัดลอก',
        'timer': 'เวลาชำระเงินที่เหลืออยู่',
        'order_id': 'หมายเลขคำสั่งซื้อ',
        'amount_warn': 'จำนวนเงินที่แน่นอน',
        'close_timer': 'ปิดอัตโนมัติใน %s วินาที',
        'guide_step1': 'ขั้นตอนที่ 1: สแกนที่อยู่',
        'guide_step2': 'ขั้นตอนที่ 2: คลิกเพื่อคัดลอกยอดเงิน',
        'faq_title': 'มีปัญหาในการชำระเงิน?',
        'faq_q1': 'ยอดเงินไม่ตรงกัน?',
        'faq_a1': 'กรุณาคัดลอกยอดเงินที่แน่นอนเพื่อให้ระบบตรวจสอบอัตโนมัติ',
        'faq_q2': 'เลือกเครือข่ายผิด?',
        'faq_a2': 'TRC20 และ ERC20 ไม่สามารถใช้ร่วมกันได้',
        'tip_gas': '⚠️ ตรวจสอบให้แน่ใจว่ายอดโอนไม่รวมค่าธรรมเนียม (Gas Fee)',
        'tip_usdt_only': '⚠️ รองรับ USDT เท่านั้น การโอนเหรียญอื่นจะทำให้ทรัพย์สินหายถาวร',
        'tip_confirm_time': '⏳ การยืนยันใช้เวลา 1-3 นาที โปรดอย่าชำระเงินซ้ำ',
        'tip_title': 'ข้อควรระวัง'
    },
    'km': {
        'title': 'PayUSDT បញ្ជរទូទាត់ប្រកបដោយសុវត្ថិភាព',
        'status_paid': 'ការទូទាត់ត្រូវបានបញ្ចប់',
        'status_expired': 'ការបញ្ជាទិញបានហួសកំណត់',
        'status_pending': 'កំពុងដំណើរការការទូទាត់ប្រកបដោយសុវត្ថិភាព',
        'confirmed': 'បានបញ្ជាក់ការទទួលប្រាក់',
        'reorder': 'សូមបញ្ជាទិញម្តងទៀត',
        'copy_text': 'អាសយដ្ឋានទទួលប្រាក់ (ចុចដើម្បីចម្លង)',
        'copied': 'ចុចដើម្បីចម្លង',
        'timer': 'ពេលវេលាទូទាត់ដែលនៅសល់',
        'order_id': 'លេខបញ្ជាទិញ',
        'amount_warn': 'ចំនួនទឹកប្រាក់ពិតប្រាកដ',
        'close_timer': 'បិទដោយស្វ័យប្រវត្តិក្នុងរយៈពេល %s វិនាទី',
        'guide_step1': 'ជំហានទី ១៖ ស្កេនអាសយដ្ឋាន',
        'guide_step2': 'ជំហានទី ២៖ ចុចដើម្បីចម្លងចំនួនទឹកប្រាក់',
        'faq_title': 'បញ្ហាការទូទាត់?',
        'faq_q1': 'ចំនួនទឹកប្រាក់មិនត្រូវគ្នា?',
        'faq_a1': 'សូមចម្លងចំនួនទឹកប្រាក់ឱ្យបានត្រឹមត្រូវដើម្បីទទួលបានការបញ្ជាក់ស្វ័យប្រវត្ត',
        'faq_q2': 'បណ្តាញខុស?',
        'faq_a2': 'TRC20 និង ERC20 មិនអាចប្រើជាមួយគ្នាបានទេ',
        'tip_gas': '⚠️ ត្រូវប្រាកដថាចំនួនទឹកប្រាក់ផ្ទេរមិនរួមបញ្ចូលថ្លៃសេវា (Gas Fee)',
        'tip_usdt_only': '⚠️ គាំទ្រតែ USDT ប៉ុណ្ណោះ ការផ្ទេរប្រភេទផ្សេងទៀតនឹងបាត់បង់រហូត',
        'tip_confirm_time': '⏳ ការបញ្ជាក់ចំណាយពេល ១-៣ នាទី សូមកុំបង់ប្រាក់ ២ ដង',
        'tip_title': 'ចំណាំសំខាន់'
    },
    'mm': {
        'title': 'PayUSDT ဘေးကင်းသော ငွေပေးချေမှု',
        'status_paid': 'ငွေပေးချေမှု ပြီးမြောက်ပါပြီ',
        'status_expired': 'အော်ဒါ သက်တမ်းကုန်သွားပါပြီ',
        'status_pending': 'ဘေးကင်းသော ငွေပေးချေမှုကို လုပ်ဆောင်နေပါသည်',
        'confirmed': 'ငွေလက်ခံရရှိမှုကို အတည်ပြုပြီးပါပြီ',
        'reorder': 'ကျေးဇူးပြု၍ ပြန်လည်မှာယူပါ',
        'copy_text': 'လိပ်စာ (ကူးယူရန် နှိပ်ပါ)',
        'copied': 'ကူးယူပြီးပါပြီ',
        'timer': 'ကျန်ရှိသော ငွေပေးချေမှု အချိန်',
        'order_id': 'အော်ဒါနံပါတ်',
        'amount_warn': 'တိကျသော ပမာဏ',
        'close_timer': '%s စက္ကန့်အတွင်း အလိုအလျောက် ပိတ်ပါမည်',
        'guide_step1': 'အဆင့် ၁ - လိပ်စာကို စကင်န်ဖတ်ပါ သို့မဟုတ် ကူးယူပါ',
        'guide_step2': 'အဆင့် ၂ - ပမာဏကို ကူးယူပါ',
        'faq_title': 'ငွေပေးချေမှု ပြဿနာရှိပါသလား?',
        'faq_q1': 'ပမာဏ မကိုက်ညီပါက ဘာလုပ်ရမလဲ?',
        'faq_a1': 'အလိုအလျောက် အတည်ပြုနိုင်ရန်အတွက် တိကျသော ပမာဏကို ကူးယူပေးပါ။',
        'faq_q2': 'ကွန်ရက် မှားယွင်းသွားပါက?',
        'faq_a2': 'TRC20 နှင့် ERC20 သည် အတူတူမဟုတ်ပါ၊ ကွန်ရက်မှားယွင်းပါက ပိုင်ဆိုင်မှု ဆုံးရှုံးနိုင်ပါသည်။',
        'tip_gas': '⚠️ ငွေလွှဲပမာဏတွင် Gas Fee (ဝန်ဆောင်ခ) မပါဝင်ရန် သေချာပါစေ',
        'tip_usdt_only': '⚠️ USDT သာ လက်ခံသည်၊ အခြားဒင်္ဂါးများ လွှဲမိပါက အမြဲတမ်း ဆုံးရှုံးပါမည်',
        'tip_confirm_time': '⏳ ကွန်ရက်အတည်ပြုချက်သည် ၁-၃ မိနစ် ကြာမြင့်နိုင်သည်၊ ထပ်ခါတလဲလဲ မပေးချေပါနှင့်',
        'tip_title': 'အရေးကြီးသော သတိပေးချက်'
    }
};

let currentLang = 'en';

function detectLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang');
    
    if (!lang) {
        // Detect from browser
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang) {
            const shortLang = browserLang.substring(0, 2).toLowerCase();
            const langMap = { 'zh': 'zh', 'en': 'en', 'th': 'th', 'km': 'km', 'my': 'mm' };
            lang = langMap[shortLang];
        }
    }
    
    if (!lang || !languages[lang]) {
        lang = 'en';
    }
    
    currentLang = lang;
    return lang;
}

function updateUITexts() {
    const dict = languages[currentLang];
    document.title = dict['title'];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerText = dict[key];
        }
    });
    
    // Update active class on language switcher
    document.querySelectorAll('.lang-switcher a').forEach(el => {
        el.classList.remove('active');
    });
    const activeBtn = document.getElementById('btn-lang-' + currentLang);
    if (activeBtn) activeBtn.classList.add('active');
}

function setLanguage(lang) {
    if (languages[lang]) {
        currentLang = lang;
        
        // Update URL without reloading
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('lang', lang);
        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
        
        updateUITexts();
    }
}
