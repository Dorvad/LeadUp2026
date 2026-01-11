const COURSE = {
  whatsappUrl: "https://chat.whatsapp.com/EXAMPLE_INVITE_LINK",
  nextMeeting: {
    id: "m4",
    title: "מפגש #4 – תקשורת אפקטיבית",
    start: "2026-02-14T09:30:00",
    end: "2026-02-14T11:00:00",
    dateText: "יום ד׳, 14.02.2026",
    timeText: "09:30–11:00",
    locationText: "חדר ישיבות / זום",
    zoomUrl: "https://example.com/zoom",
    roomText: "חדר ישיבות 3",
    desc: "תרגול קצר + כלים פרקטיים לשיחה עם צוותים עסוקים. הכנה: סקירת סיכום המפגש הקודם (5 דקות).",
    agenda: [
      "פתיחה ותיאום ציפיות (5 דק׳)",
      "מודל קצר לתקשורת בהירה (15 דק׳)",
      "תרגול בזוגות – תסריטי שיחה (25 דק׳)",
      "שיתוף תובנות + שאלות (10 דק׳)",
      "סיכום ומשימת ביניים (5 דק׳)"
    ],
    checklist: [
      { id: "c1", title: "צפייה בסיכום מפגש 3 (5–7 דק׳)", note: "וידאו קצר + נקודות מפתח" },
      { id: "c2", title: "להוריד את דף התרגול", note: "קובץ PDF – דמה" },
      { id: "c3", title: "להכין דוגמה אמיתית לשיחה מאתגרת", note: "משפט–שניים מספיק" },
      { id: "c4", title: "לוודא הרשאת כניסה לזום/חדר", note: "בדיקת טכנית מהירה" }
    ],
    prepMaterialsIds: ["l2", "l5", "l7"]
  }
};

const VIDEOS = [
  { id:"v1", title:"מפגש 1 – פתיחה והיכרות", duration:"58:12", meeting:"m1", topic:"היכרות", url:"#", thumb:"▶" },
  { id:"v2", title:"מפגש 2 – עבודה עם עומס", duration:"52:40", meeting:"m2", topic:"פרודוקטיביות", url:"#", thumb:"▶" },
  { id:"v3", title:"מפגש 3 – כלים לשיתוף פעולה", duration:"01:03:10", meeting:"m3", topic:"שיתוף פעולה", url:"#", thumb:"▶" },
  { id:"v4", title:"בונוס – Q&A קצר", duration:"22:05", meeting:"m3", topic:"שאלות", url:"#", thumb:"▶" },
  { id:"v5", title:"טיפ מהיר – מסרים ברורים", duration:"08:30", meeting:"m2", topic:"תקשורת", url:"#", thumb:"▶" }
];

const LIBRARY = [
  { id:"l1", title:"מצגת מפגש 1", type:"מצגת", meeting:"m1", topic:"היכרות", url:"#", action:"פתיחה" },
  { id:"l2", title:"דף תרגול – תקשורת", type:"PDF", meeting:"m4", topic:"תקשורת", url:"#", action:"הורדה" },
  { id:"l3", title:"סיכום מפגש 2 (עמוד אחד)", type:"PDF", meeting:"m2", topic:"פרודוקטיביות", url:"#", action:"פתיחה" },
  { id:"l4", title:"קישור – מאמר קצר", type:"קישור", meeting:"m3", topic:"שיתוף פעולה", url:"#", action:"פתיחה" },
  { id:"l5", title:"צ׳ק ליסט הכנה למפגש", type:"PDF", meeting:"m4", topic:"תקשורת", url:"#", action:"הורדה" },
  { id:"l6", title:"תרגיל ביניים – רפלקציה", type:"תרגיל", meeting:"m2", topic:"למידה", url:"#", action:"פתיחה" },
  { id:"l7", title:"סיכום מפגש 3 – נקודות מפתח", type:"PDF", meeting:"m3", topic:"שיתוף פעולה", url:"#", action:"פתיחה" },
  { id:"l8", title:"תבנית – מייל/מסר קצר", type:"קישור", meeting:"m4", topic:"תקשורת", url:"#", action:"פתיחה" }
];

const WHATS_NEW = [
  { icon:"📝", title:"סיכום מפגש 3 עלה למאגר", meta:"PDF • מפגש 3 • לפני יומיים", href:"#library" },
  { icon:"▶", title:"הקלטת מפגש 3 זמינה", meta:"וידאו • מפגש 3 • לפני 3 ימים", href:"#recordings" },
  { icon:"📎", title:"דף תרגול חדש למפגש הבא", meta:"PDF • מפגש 4 • היום", href:"#next" }
];

const FEATURED = ["l2","l3","l8"];

const GALLERY = [
  {
    albumId:"a1",
    title:"מפגש 1 – היכרות",
    photos: [
      { src:"https://picsum.photos/seed/leadup-101/900/900", alt:"תמונה ממפגש 1 – 1" , caption:"מפגש 1 – רגעים מהכיתה" },
      { src:"https://picsum.photos/seed/leadup-102/900/900", alt:"תמונה ממפגש 1 – 2" , caption:"עבודה בקבוצות" },
      { src:"https://picsum.photos/seed/leadup-103/900/900", alt:"תמונה ממפגש 1 – 3" , caption:"לוח סיכום" },
      { src:"https://picsum.photos/seed/leadup-104/900/900", alt:"תמונה ממפגש 1 – 4" , caption:"שיחה קצרה בהפסקה" }
    ]
  },
  {
    albumId:"a2",
    title:"מפגש 3 – שיתוף פעולה",
    photos: [
      { src:"https://picsum.photos/seed/leadup-201/900/900", alt:"תמונה ממפגש 3 – 1" , caption:"תרגול משותף" },
      { src:"https://picsum.photos/seed/leadup-202/900/900", alt:"תמונה ממפגש 3 – 2" , caption:"סיכום נקודות מפתח" },
      { src:"https://picsum.photos/seed/leadup-203/900/900", alt:"תמונה ממפגש 3 – 3" , caption:"דיון קצר" },
      { src:"https://picsum.photos/seed/leadup-204/900/900", alt:"תמונה ממפגש 3 – 4" , caption:"תמונה קבוצתית" }
    ]
  }
];

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
const PAGES = ["home","next","recordings","library","gallery","whatsapp"];

function safeText(el, value){ if (el) el.textContent = value; }
function uniq(arr){ return Array.from(new Set(arr)); }

function formatRelativeDays(ms){
  const d = Math.ceil(ms / (1000*60*60*24));
  if (d <= 0) return "היום";
  if (d === 1) return "מחר";
  return `בעוד ${d} ימים`;
}

function downloadFile(filename, content, mime="text/plain"){
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 800);
}

function escapeICS(text){
  return String(text)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function toICSDate(dt){
  const pad = (n)=> String(n).padStart(2,"0");
  return `${dt.getUTCFullYear()}${pad(dt.getUTCMonth()+1)}${pad(dt.getUTCDate())}T${pad(dt.getUTCHours())}${pad(dt.getUTCMinutes())}${pad(dt.getUTCSeconds())}Z`;
}

/* Router */
function currentPageFromHash(){
  const h = (location.hash || "#home").slice(1).trim();
  return PAGES.includes(h) ? h : "home";
}

function route(){
  const page = currentPageFromHash();

  PAGES.forEach(p=>{
    const el = $(`#page-${p}`);
    if (el) el.hidden = (p !== page);
  });

  $$("a[data-route]").forEach(a=>{
    const target = (a.getAttribute("href") || "#home").slice(1);
    if (target === page) a.setAttribute("aria-current","page");
    else a.removeAttribute("aria-current");
  });

  $("#main")?.focus?.({ preventScroll: true });
}

/* Drawer */
const drawer = $("#navDrawer");
const menuBtn = $("#menuBtn");
const closeDrawerBtn = $("#closeDrawerBtn");
const drawerBackdrop = $("#drawerBackdrop");

function isDrawerOpen(){ return drawer?.getAttribute("aria-hidden") === "false"; }

function openDrawer(){
  if (!drawer) return;
  drawer.setAttribute("aria-hidden","false");
  menuBtn?.setAttribute("aria-expanded","true");
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

function closeDrawer(){
  if (!drawer) return;
  drawer.setAttribute("aria-hidden","true");
  menuBtn?.setAttribute("aria-expanded","false");
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

menuBtn?.addEventListener("click", ()=> (isDrawerOpen() ? closeDrawer() : openDrawer()));
closeDrawerBtn?.addEventListener("click", closeDrawer);
drawerBackdrop?.addEventListener("click", closeDrawer);

/* Lightbox state */
let lightboxState = { open:false, albumIndex:0, photoIndex:0 };

function closeLightbox(){
  const lb = $("#lightbox");
  if (!lb) return;
  lightboxState.open = false;
  lb.hidden = true;
  lb.setAttribute("aria-hidden","true");
}

document.addEventListener("keydown", (e)=>{
  if (e.key === "Escape"){
    if (isDrawerOpen()) closeDrawer();
    closeLightbox();
  }
});

/* Navigation clicks */
function initNavigation(){
  window.addEventListener("hashchange", route);

  document.addEventListener("click", (e)=>{
    const a = e.target.closest("a[data-route]");
    if (!a) return;

    if (isDrawerOpen()) closeDrawer();

    const targetHash = a.getAttribute("href") || "#home";
    if (location.hash === targetHash){
      e.preventDefault();
      route();
    }
  });
}

/* Meeting + countdown + ICS */
function initMeeting(){
  const m = COURSE.nextMeeting;

  safeText($("#meetingTitle"), m.title);
  safeText($("#meetingDateText"), m.dateText);
  safeText($("#meetingTimeText"), m.timeText);
  safeText($("#meetingLocationText"), m.locationText);
  safeText($("#meetingDesc"), m.desc);

  safeText($("#nextMeetingTitle"), m.title);
  safeText($("#nextMeetingDate"), m.dateText);
  safeText($("#nextMeetingTime"), m.timeText);
  safeText($("#nextMeetingRoom"), m.roomText);

  const link = $("#nextMeetingLink");
  if (link){ link.href = m.zoomUrl; link.textContent = "לינק זום (דמה)"; }

  $("#joinBtn")?.addEventListener("click", ()=> window.open(m.zoomUrl, "_blank", "noopener"));
  $("#addToCalendarBtn")?.addEventListener("click", ()=> addMeetingToCalendar(m));
  $("#addToCalendarBtn2")?.addEventListener("click", ()=> addMeetingToCalendar(m));

  const agendaList = $("#agendaList");
  if (agendaList) agendaList.innerHTML = m.agenda.map(x=>`<li>${x}</li>`).join("");

  const checklistRoot = $("#checklist");
  const storageKey = `leadup_checklist_${m.id}`;
  const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");

  if (checklistRoot){
    checklistRoot.innerHTML = "";
    m.checklist.forEach(ci=>{
      const row = document.createElement("label");
      row.className = "check";
      row.setAttribute("role","listitem");

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = !!saved[ci.id];
      input.addEventListener("change", ()=>{
        const curr = JSON.parse(localStorage.getItem(storageKey) || "{}");
        curr[ci.id] = input.checked;
        localStorage.setItem(storageKey, JSON.stringify(curr));
      });

      const text = document.createElement("div");
      text.className = "text";
      text.innerHTML = `<div><strong>${ci.title}</strong></div><span class="sub">${ci.note}</span>`;

      row.appendChild(input);
      row.appendChild(text);
      checklistRoot.appendChild(row);
    });
  }

  $("#resetChecklistBtn")?.addEventListener("click", ()=>{
    localStorage.removeItem(storageKey);
    initMeeting();
  });

  const prep = $("#prepMaterials");
  if (prep){
    prep.innerHTML = "";
    LIBRARY.filter(x => m.prepMaterialsIds.includes(x.id))
      .forEach(item => prep.appendChild(renderContentCard(item)));
  }

  updateCountdown();
  setInterval(updateCountdown, 30_000);
}

function updateCountdown(){
  const m = COURSE.nextMeeting;
  const start = new Date(m.start);
  const now = new Date();
  const diff = start - now;

  const pill1 = $("#countdownPill");
  const exact1 = $("#countdownExact");
  const pill2 = $("#nextCountdownPill");

  if (diff <= 0){
    pill1 && (pill1.textContent = "מתחילים עכשיו / כבר התחיל");
    exact1 && (exact1.textContent = "אם פספסתם – ההקלטה תעלה לאחר המפגש.");
    pill2 && (pill2.textContent = "מתחילים עכשיו / כבר התחיל");
    return;
  }

  const hours = Math.floor(diff / (1000*60*60));
  const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
  const days = Math.floor(hours / 24);

  const short = formatRelativeDays(diff);
  const exact = days > 0 ? `${days} ימים, ${hours - days*24} שעות` : `${hours} שעות, ${mins} דקות`;

  pill1 && (pill1.textContent = short);
  exact1 && (exact1.textContent = exact);
  pill2 && (pill2.textContent = short);
}

function addMeetingToCalendar(m){
  const start = new Date(m.start);
  const end = new Date(m.end);
  const uid = `leadup-${m.id}-${Date.now()}@leadup.local`;
  const now = new Date();

  const ics =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//leadUP2026//Course Hub//HE
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${toICSDate(now)}
DTSTART:${toICSDate(start)}
DTEND:${toICSDate(end)}
SUMMARY:${escapeICS(m.title)}
DESCRIPTION:${escapeICS(m.desc + "\\n" + "קישור: " + m.zoomUrl)}
LOCATION:${escapeICS(m.locationText)}
END:VEVENT
END:VCALENDAR`;

  downloadFile(`leadUP2026-${m.id}.ics`, ics, "text/calendar;charset=utf-8");
}

/* Home */
function initHome(){
  const root = $("#whatsNewList");
  if (root){
    root.innerHTML = "";
    WHATS_NEW.slice(0,3).forEach(item=>{
      const el = document.createElement("div");
      el.className = "list-item";
      el.innerHTML = `
        <div class="list-item__icon" aria-hidden="true">${item.icon}</div>
        <div class="list-item__body">
          <p class="list-item__title">${item.title}</p>
          <p class="list-item__meta">${item.meta}</p>
        </div>
        <div class="list-item__actions">
          <a class="btn btn--sm btn--primary" href="${item.href}" data-route>פתיחה</a>
        </div>
      `;
      root.appendChild(el);
    });
  }

  const featuredRoot = $("#featuredList");
  if (featuredRoot){
    featuredRoot.innerHTML = "";
    FEATURED.map(id => LIBRARY.find(x=>x.id===id)).filter(Boolean)
      .forEach(item => featuredRoot.appendChild(renderContentCard(item)));
  }
}

/* Recordings */
function initRecordings(){
  const meetingFilter = $("#videoMeetingFilter");
  const topicFilter = $("#videoTopicFilter");

  const meetings = uniq(VIDEOS.map(v=>v.meeting)).sort();
  const topics = uniq(VIDEOS.map(v=>v.topic)).sort((a,b)=>a.localeCompare(b,"he"));

  meetingFilter && (meetingFilter.innerHTML =
    `<option value="all">הכל</option>` + meetings.map(m=>`<option value="${m}">${m.toUpperCase()}</option>`).join("")
  );
  topicFilter && (topicFilter.innerHTML =
    `<option value="all">הכל</option>` + topics.map(t=>`<option value="${t}">${t}</option>`).join("")
  );

  const apply = ()=>{
    const q = ($("#videoSearch")?.value || "").trim().toLowerCase();
    const m = meetingFilter?.value || "all";
    const t = topicFilter?.value || "all";

    let list = [...VIDEOS];
    if (q) list = list.filter(v => v.title.toLowerCase().includes(q) || v.topic.toLowerCase().includes(q));
    if (m !== "all") list = list.filter(v=>v.meeting === m);
    if (t !== "all") list = list.filter(v=>v.topic === t);

    renderVideos(list);
  };

  $("#videoSearch")?.addEventListener("input", apply);
  meetingFilter?.addEventListener("change", apply);
  topicFilter?.addEventListener("change", apply);

  $("#videoResetBtn")?.addEventListener("click", ()=>{
    $("#videoSearch").value = "";
    meetingFilter.value = "all";
    topicFilter.value = "all";
    renderVideos(VIDEOS);
  });

  renderVideos(VIDEOS);
}

function renderVideos(list){
  const grid = $("#videoGrid");
  if (!grid) return;

  grid.innerHTML = "";
  list.forEach(v=>{
    const card = document.createElement("article");
    card.className = "media-card";
    card.innerHTML = `
      <div class="media-thumb" aria-hidden="true"><span>${v.thumb}</span></div>
      <div class="media-body">
        <h3 class="media-title">${v.title}</h3>
        <p class="media-meta">משך: ${v.duration} • מפגש: ${v.meeting.toUpperCase()} • נושא: ${v.topic}</p>
      </div>
      <div class="media-actions">
        <a class="btn btn--primary btn--sm" href="${v.url}" target="_blank" rel="noopener">צפייה</a>
      </div>
    `;
    grid.appendChild(card);
  });

  const count = $("#videoResultCount");
  count && (count.textContent = `${list.length} תוצאות`);
}
function getYouTubeId(url) {
  try {
    const u = new URL(url);

    // youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.replace("/", "");
    }

    // youtube.com/watch?v=<id>
    if (u.searchParams.get("v")) {
      return u.searchParams.get("v");
    }

    // youtube.com/embed/<id>
    const parts = u.pathname.split("/");
    const embedIndex = parts.indexOf("embed");
    if (embedIndex !== -1 && parts[embedIndex + 1]) {
      return parts[embedIndex + 1];
    }

    return null;
  } catch {
    return null;
  }
}

function buildYouTubeEmbedUrl(youtubeUrl, startAtSeconds = 0) {
  const id = getYouTubeId(youtubeUrl);
  if (!id) return null;

  const base = `https://www.youtube-nocookie.com/embed/${id}`;
  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1"
  });

  const s = Number(startAtSeconds);
  if (!Number.isNaN(s) && s > 0) params.set("start", String(s));

  return `${base}?${params.toString()}`;
}

// --- Modal helpers (requires HTML elements shown below) ---
function openVideoModal(embedUrl, title = "וידאו") {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");
  const heading = document.getElementById("videoModalTitle");

  heading.textContent = title;
  frame.src = embedUrl;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");

  frame.src = ""; // stop playback
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

// attach close listeners once
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-close-video-modal]") || e.target.id === "videoModalBackdrop") {
    closeVideoModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeVideoModal();
});

// Example: when rendering each recording card, call this on button click
function handleWatchClick(recording) {
  const embedUrl = buildYouTubeEmbedUrl(recording.youtubeUrl, recording.startAt || 0);
  if (!embedUrl) {
    alert("הלינק ליוטיוב לא תקין.");
    return;
  }
  openVideoModal(embedUrl, recording.title);
}

/* Library */
function initLibrary(){
  const meetingFilter = $("#libMeetingFilter");
  const topicFilter = $("#libTopicFilter");
  const typeFilter = $("#libTypeFilter");

  const meetings = uniq(LIBRARY.map(i=>i.meeting)).sort();
  const topics = uniq(LIBRARY.map(i=>i.topic)).sort((a,b)=>a.localeCompare(b,"he"));
  const types = uniq(LIBRARY.map(i=>i.type)).sort((a,b)=>a.localeCompare(b,"he"));

  meetingFilter && (meetingFilter.innerHTML =
    `<option value="all">הכל</option>` + meetings.map(m=>`<option value="${m}">${m.toUpperCase()}</option>`).join("")
  );
  topicFilter && (topicFilter.innerHTML =
    `<option value="all">הכל</option>` + topics.map(t=>`<option value="${t}">${t}</option>`).join("")
  );
  typeFilter && (typeFilter.innerHTML =
    `<option value="all">הכל</option>` + types.map(t=>`<option value="${t}">${t}</option>`).join("")
  );

  const apply = ()=>{
    const q = ($("#libSearch")?.value || "").trim().toLowerCase();
    const m = meetingFilter?.value || "all";
    const t = topicFilter?.value || "all";
    const ty = typeFilter?.value || "all";

    let list = [...LIBRARY];
    if (q){
      list = list.filter(i =>
        i.title.toLowerCase().includes(q) ||
        i.topic.toLowerCase().includes(q) ||
        i.type.toLowerCase().includes(q)
      );
    }
    if (m !== "all") list = list.filter(i=>i.meeting === m);
    if (t !== "all") list = list.filter(i=>i.topic === t);
    if (ty !== "all") list = list.filter(i=>i.type === ty);

    renderLibrary(list);
  };

  $("#libSearch")?.addEventListener("input", apply);
  meetingFilter?.addEventListener("change", apply);
  topicFilter?.addEventListener("change", apply);
  typeFilter?.addEventListener("change", apply);

  $("#libResetBtn")?.addEventListener("click", ()=>{
    $("#libSearch").value = "";
    meetingFilter.value = "all";
    topicFilter.value = "all";
    typeFilter.value = "all";
    renderLibrary(LIBRARY);
  });

  renderLibrary(LIBRARY);
}

function renderLibrary(list){
  const root = $("#libraryList");
  if(!root) return;

  root.innerHTML = "";
  list.forEach(item=>{
    const row = document.createElement("div");
    row.className = "list-item";
    row.innerHTML = `
      <div class="list-item__icon" aria-hidden="true">${typeIcon(item.type)}</div>
      <div class="list-item__body">
        <p class="list-item__title">${item.title}</p>
        <p class="list-item__meta">סוג: ${item.type} • מפגש: ${item.meeting.toUpperCase()} • נושא: ${item.topic}</p>
      </div>
      <div class="list-item__actions">
        <a class="btn btn--primary btn--sm" href="${item.url}" target="_blank" rel="noopener">${item.action}</a>
      </div>
    `;
    root.appendChild(row);
  });

  const count = $("#libResultCount");
  count && (count.textContent = `${list.length} פריטים`);
}

function typeIcon(type){
  const map = { "PDF":"📄", "מצגת":"📊", "קישור":"🔗", "תרגיל":"✅" };
  return map[type] || "📌";
}

function renderContentCard(item){
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <p class="kicker">${typeIcon(item.type)} ${item.type} • ${item.meeting.toUpperCase()}</p>
    <h3 class="h3">${item.title}</h3>
    <p class="muted">נושא: ${item.topic}</p>
    <div class="card__actions">
      <a class="btn btn--primary btn--sm" href="${item.url}" target="_blank" rel="noopener">${item.action}</a>
      <a class="btn btn--ghost btn--sm" href="#library" data-route>למאגר</a>
    </div>
  `;
  return card;
}

/* Gallery + Lightbox */
function initGallery(){
  const select = $("#albumSelect");
  if (!select) return;

  select.innerHTML = GALLERY.map(a => `<option value="${a.albumId}">${a.title}</option>`).join("");

  select.addEventListener("change", ()=>{
    const idx = GALLERY.findIndex(a => a.albumId === select.value);
    renderAlbum(Math.max(0, idx));
  });

  renderAlbum(0);

  $("#lightboxClose")?.addEventListener("click", closeLightbox);
  $("#lightboxBackdrop")?.addEventListener("click", closeLightbox);
  $("#lightboxPrev")?.addEventListener("click", ()=> stepLightbox(-1));
  $("#lightboxNext")?.addEventListener("click", ()=> stepLightbox(1));

  document.addEventListener("keydown", (e)=>{
    if (!lightboxState.open) return;
    if (e.key === "ArrowLeft") stepLightbox(1);
    if (e.key === "ArrowRight") stepLightbox(-1);
  });
}

function renderAlbum(albumIndex){
  const album = GALLERY[albumIndex];
  const grid = $("#photoGrid");
  const select = $("#albumSelect");
  if (!album || !grid) return;

  select && (select.value = album.albumId);

  grid.innerHTML = "";
  album.photos.forEach((p, i)=>{
    const btn = document.createElement("button");
    btn.className = "photo";
    btn.type = "button";
    btn.setAttribute("aria-label", `פתיחת תמונה: ${p.caption}`);
    btn.innerHTML = `<img src="${p.src}" alt="${p.alt}"><div class="badge">${i+1}/${album.photos.length}</div>`;
    btn.addEventListener("click", ()=> openLightbox(albumIndex, i));
    grid.appendChild(btn);
  });

  lightboxState.albumIndex = albumIndex;
}

function openLightbox(albumIndex, photoIndex){
  const lb = $("#lightbox");
  if (!lb) return;

  lightboxState.open = true;
  lightboxState.albumIndex = albumIndex;
  lightboxState.photoIndex = photoIndex;

  lb.hidden = false;
  lb.setAttribute("aria-hidden","false");
  renderLightbox();
}

function stepLightbox(dir){
  const album = GALLERY[lightboxState.albumIndex];
  if (!album) return;
  const n = album.photos.length;
  lightboxState.photoIndex = (lightboxState.photoIndex + dir + n) % n;
  renderLightbox();
}

function renderLightbox(){
  const album = GALLERY[lightboxState.albumIndex];
  const p = album?.photos?.[lightboxState.photoIndex];
  if (!p) return;

  const img = $("#lightboxImg");
  const cap = $("#lightboxCaption");
  if (img){ img.src = p.src; img.alt = p.alt; }
  cap && (cap.textContent = p.caption);
}

/* WhatsApp */
function initWhatsapp(){
  const join = $("#whatsappJoinBtn");
  const input = $("#whatsappLinkInput");
  join && (join.href = COURSE.whatsappUrl);
  input && (input.value = COURSE.whatsappUrl);

  $("#copyWhatsappBtn")?.addEventListener("click", async ()=>{
    try{
      await navigator.clipboard.writeText(COURSE.whatsappUrl);
      showToast();
    }catch{
      input?.select();
      document.execCommand("copy");
      showToast();
    }
  });

  function showToast(){
    const toast = $("#copyToast");
    if (!toast) return;
    toast.hidden = false;
    setTimeout(()=>{ toast.hidden = true; }, 1400);
  }
}

function init(){
  // ודאות: מצב התחלתי סגור כדי למנוע כל overlay
  closeDrawer();
  closeLightbox();

  initNavigation();
  initMeeting();
  initHome();
  initRecordings();
  initLibrary();
  initGallery();
  initWhatsapp();

  if (!location.hash) location.hash = "#home";
  route();
}

init();

fetch("content/meeting.json")
  .then(r => r.json())
  .then(data => {
    document.getElementById("meetingTitle").textContent = data.title;
    document.getElementById("meetingDesc").textContent = data.desc;
  });
