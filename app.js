const translations={
 de:{settings:'Einstellungen',reserveRoom:'Geräteraum reservieren',language:'Sprache / Language',overview:'Übersicht',trainingNav:'Training',progressNav:'Fortschritt',historyNav:'Verlauf',exercises:'Geräte & Übungen',newExercise:'Neue Übung / neues Gerät',addExercise:'Übung hinzufügen',saveTraining:'Training speichern',exercise:'Übung / Gerät',date:'Datum',weight:'Gewicht (kg)',sets:'Sätze',reps:'Wiederholungen',notes:'Notiz (optional)',progress:'Fortschritt',chooseExercise:'Übung auswählen',history:'Trainingsverlauf',export:'Backup exportieren',import:'Backup wiederherstellen (JSON)',exercisePlaceholder:'z. B. Beinstrecker',weightPlaceholder:'z. B. 40',never:'Noch nie trainiert',agoOne:'vor 1 Tag',agoDays:n=>`vor ${n} Tagen`,emptyExercises:'Deine Übungsliste ist noch leer. Füge unten deine erste Übung hinzu.',remove:'Entfernen',emptyHistory:'Noch keine Trainings eingetragen.',duplicate:'Diese Übung gibt es bereits.',removeConfirm:ex=>`„${ex}“ aus der aktiven Übungsliste entfernen? Frühere Trainingseinträge bleiben im Verlauf erhalten.`,required:'Bitte Übung, Sätze und Wiederholungen ausfüllen.',saved:'Training gespeichert.',noData:'Noch keine Daten vorhanden',backupConfirm:'Aktuelle Daten durch Backup ersetzen?',restored:'Backup wiederhergestellt.',invalid:'Backup-Datei ist ungültig.',openSettings:'Einstellungen öffnen',closeSettings:'Einstellungen schließen'},
 en:{settings:'Settings',reserveRoom:'Reserve the equipment room',language:'Language / Sprache',overview:'Overview',trainingNav:'Training',progressNav:'Progress',historyNav:'History',exercises:'Machines & Exercises',newExercise:'New exercise / machine',addExercise:'Add exercise',saveTraining:'Save workout',exercise:'Exercise / Machine',date:'Date',weight:'Weight (kg)',sets:'Sets',reps:'Repetitions',notes:'Notes (optional)',progress:'Progress',chooseExercise:'Select exercise',history:'Workout history',export:'Export backup',import:'Restore backup (JSON)',exercisePlaceholder:'e.g. Leg extension',weightPlaceholder:'e.g. 40',never:'Never trained',agoOne:'1 day ago',agoDays:n=>`${n} days ago`,emptyExercises:'Your exercise list is empty. Add your first exercise below.',remove:'Remove',emptyHistory:'No workouts logged yet.',duplicate:'This exercise already exists.',removeConfirm:ex=>`Remove “${ex}” from your exercise list? Previous workouts will remain in your history.`,required:'Please enter an exercise, sets and repetitions.',saved:'Workout saved.',noData:'No data available yet',backupConfirm:'Replace your current data with this backup?',restored:'Backup restored.',invalid:'Invalid backup file.',openSettings:'Open settings',closeSettings:'Close settings'}
};
Object.assign(translations.de, {
  save:'Speichern', close:'Schließen', cancel:'Abbrechen', editWorkout:'Training bearbeiten',
  deleteWorkout:'Training löschen', deleteConfirm:'Diesen Trainingseintrag löschen?',
  addNote:'Übungsnotiz hinzufügen', editNote:'Übungsnotiz bearbeiten', showNote:'Notiz anzeigen',
  calendar:'Kalender öffnen', previous:'Vorheriger Monat', next:'Nächster Monat',
  period:'Zeitraum', month:'Letzter Monat', months3:'Letzte 3 Monate', months6:'Letzte 6 Monate',
  all:'Insgesamt', noPeriodData:'Keine Daten für diesen Zeitraum'
});
Object.assign(translations.en, {
  save:'Save', close:'Close', cancel:'Cancel', editWorkout:'Edit workout',
  deleteWorkout:'Delete workout', deleteConfirm:'Delete this workout?',
  addNote:'Add exercise note', editNote:'Edit exercise note', showNote:'Show note',
  calendar:'Open calendar', previous:'Previous month', next:'Next month',
  period:'Date range', month:'Last month', months3:'Last 3 months', months6:'Last 6 months',
  all:'All time', noPeriodData:'No data for this period'
});

const $ = id => document.getElementById(id);
const KEY = 'myKrafttraining.entries.v1';
const EXKEY = 'myKrafttraining.customExercises.v1';
const NOTEKEY = 'myKrafttraining.exerciseNotes.v1';
const LANGKEY = 'myKrafttraining.language.v1';
const RANGEKEY = 'myKrafttraining.chartRange.v1';
const read = (key, fallback) => JSON.parse(localStorage.getItem(key) ?? fallback);
let entries = read(KEY, '[]');
let custom = read(EXKEY, '[]');
let exerciseNotes = new Map(Object.entries(read(NOTEKEY, '{}')));
let language = localStorage.getItem(LANGKEY) === 'en' ? 'en' : 'de';
const locale = () => language === 'de' ? 'de-DE' : 'en-US';
const tr = (key, ...args) => typeof translations[language][key] === 'function'
  ? translations[language][key](...args) : translations[language][key];
const escapeHTML = value => String(value).replace(/[&<>"']/g, char =>
  ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'})[char]);

const icons = {
  pencil:'<path d="m4 16-1 5 5-1L20 8l-4-4Z M14 6l4 4"/>',
  trash:'<path d="M3 6h18 M9 6V3h6v3 M5 6l1 15h12l1-15 M10 10v7 M14 10v7"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6 M12 7h.01"/>'
};
function iconButton(icon, label, attributes = '') {
  return `<button type="button" class="icon-button ${icon === 'trash' ? 'remove-icon' : ''}" aria-label="${label}" title="${label}" ${attributes}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[icon]}</svg></button>`;
}

const pad = number => String(number).padStart(2, '0');
function isoDate(date) {
  return `${String(date.getFullYear()).padStart(4, '0')}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
const today = () => isoDate(new Date());
const dayMs = 86400000;
function formatDate(iso) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const [, year, month, day] = match;
  return language === 'de' ? `${day}.${month}.${year}` : `${month}/${day}/${year}`;
}
const dateIds = ['logDate', 'editDate'];
function setDate(id, iso) {
  const field = $(id);
  field.value = iso;
  field.textContent = iso ? formatDate(iso) : '';
  field.setAttribute('aria-label', iso ? `${tr('date')}: ${field.textContent}. ${tr('calendar')}` : tr('calendar'));
}

let calendarTarget;
let calendarMonth;
function renderCalendar() {
  const year = calendarMonth.getFullYear(), month = calendarMonth.getMonth();
  const monthName = new Intl.DateTimeFormat(locale(), {month:'long', year:'numeric'});
  $('calendarMonth').textContent = monthName.format(calendarMonth);
  const weekday = new Intl.DateTimeFormat(locale(), {weekday:'short'});
  const fullWeekday = new Intl.DateTimeFormat(locale(), {weekday:'long'});
  const start = language === 'de' ? 1 : 0;
  const offset = (calendarMonth.getDay() - start + 7) % 7;
  const selected = $(calendarTarget).value;
  const headings = Array.from({length:7}, (_, i) => {
    const date = new Date(2024, 0, 7 + start + i);
    return `<abbr title="${fullWeekday.format(date)}">${weekday.format(date)}</abbr>`;
  });
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  $('calendarGrid').innerHTML = headings.join('') + '<span></span>'.repeat(offset) +
    Array.from({length:daysInMonth}, (_, i) => {
      const iso = `${String(year).padStart(4, '0')}-${pad(month + 1)}-${pad(i + 1)}`;
      return `<button type="button" data-date="${iso}" aria-label="${formatDate(iso)}" aria-pressed="${iso === selected}">${i + 1}</button>`;
    }).join('');
}
function openCalendar(id) {
  calendarTarget = id;
  const selected = $(id).value || today();
  calendarMonth = new Date(selected.slice(0, 7) + '-01T12:00:00');
  renderCalendar();
  $('calendar').showModal();
  $('calendarGrid').querySelector('[aria-pressed="true"]')?.focus();
}
for (const [id, direction] of [['previousMonth', -1], ['nextMonth', 1]]) {
  $(id).onclick = () => {
    calendarMonth.setMonth(calendarMonth.getMonth() + direction);
    renderCalendar();
  };
}
$('calendarGrid').onclick = event => {
  const iso = event.target.dataset.date;
  if (!iso) return;
  setDate(calendarTarget, iso);
  $('calendar').close();
};
for (const id of dateIds) {
  $(id).onclick = () => openCalendar(id);
}
function localizeDates() {
  for (const id of dateIds) setDate(id, $(id).value);
  $('previousMonth').setAttribute('aria-label', tr('previous'));
  $('nextMonth').setAttribute('aria-label', tr('next'));
}

function save() {
  localStorage.setItem(KEY, JSON.stringify(entries));
  localStorage.setItem(EXKEY, JSON.stringify(custom));
  localStorage.setItem(NOTEKEY, JSON.stringify(Object.fromEntries(exerciseNotes)));
  render();
}
function lastDates() {
  const dates = new Map();
  for (const entry of entries) {
    if (entry.date > (dates.get(entry.exercise) || '')) dates.set(entry.exercise, entry.date);
  }
  return dates;
}
function daysSince(date) {
  return date ? Math.max(0, (Date.parse(today()) - Date.parse(date)) / dayMs) : Infinity;
}
function status(days) {
  if (days === Infinity) return ['red', tr('never')];
  return [days <= 2 ? 'green' : days <= 4 ? 'orange' : 'red', days === 1 ? tr('agoOne') : tr('agoDays', days)];
}
function render() {
  const dates = lastDates();
  const sorted = custom.map(ex => ({ex, days:daysSince(dates.get(ex))})).sort((a, b) => {
    if (a.days === b.days) return 0;
    return b.days - a.days;
  });
  $('exerciseList').innerHTML = sorted.map(({ex, days}) => {
    const [color, description] = status(days);
    const hasNote = Boolean(exerciseNotes.get(ex)?.trim());
    const attr = `data-exercise="${escapeHTML(ex)}"`;
    return `<div class="item"><div><h3><span class="dot ${color}"></span>${escapeHTML(ex)}${hasNote ? iconButton('info', tr('showNote'), attr + ' data-action="show"') : ''}</h3><div class="status">${description}</div></div><div class="item-actions">${iconButton('pencil', tr(hasNote ? 'editNote' : 'addNote'), attr + ' data-action="note"')}${iconButton('trash', tr('remove'), attr + ' data-action="remove"')}</div></div>`;
  }).join('') || `<p class="sub">${tr('emptyExercises')}</p>`;
  for (const [id, options] of [['logExercise', custom], ['chartExercise', [...new Set([...custom, ...dates.keys()])]]]) {
    const select = $(id), old = select.value;
    select.innerHTML = options.map(ex => `<option value="${escapeHTML(ex)}">${escapeHTML(ex)}</option>`).join('');
    if (options.includes(old)) select.value = old;
  }
  $('historyList').innerHTML = entries.map((entry, index) => ({entry, index}))
    .sort((a, b) => b.entry.date.localeCompare(a.entry.date) || b.index - a.index)
    .map(({entry, index}) => {
      const metrics = [hasWeight(entry) ? `${number(entry.weight)} kg` : '', `${number(entry.sets)} ${tr('sets')}`, `${number(entry.reps)} ${tr('reps')}`].filter(Boolean);
      return `<div class="item"><div><h3>${escapeHTML(entry.exercise)}${entry.notes?.trim() ? iconButton('info', tr('showNote'), `data-note="${index}"`) : ''}</h3><div class="sub">${escapeHTML(formatDate(entry.date))}</div><div class="metrics">${metrics.join(' · ')}</div></div><div class="item-actions">${iconButton('pencil', tr('editWorkout'), `data-edit="${index}"`)}${iconButton('trash', tr('deleteWorkout'), `data-delete-workout="${index}"`)}</div></div>`;
    }).join('') || `<p class="sub">${tr('emptyHistory')}</p>`;
  drawCharts();
}

$('addExercise').onclick = () => {
  const exercise = $('newExercise').value.trim();
  if (!exercise) return;
  if (custom.some(ex => ex.toLowerCase() === exercise.toLowerCase())) return alert(tr('duplicate'));
  custom.push(exercise);
  $('newExercise').value = '';
  save();
  if (custom.length === 1) prefill();
};
let noteExercise;
function openNote(title, value, editing = false) {
  $('noteTitle').textContent = title;
  $('noteText').textContent = value;
  $('noteText').hidden = editing;
  $('exerciseNote').hidden = !editing;
  $('exerciseNote').style.display = editing ? '' : 'none';
  $('exerciseNote').setAttribute('aria-label', tr('notes'));
  $('exerciseNote').value = value;
  $('saveNote').hidden = !editing;
  $('noteDialog').showModal();
}
$('exerciseList').onclick = event => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const {exercise, action} = button.dataset;
  if (action === 'remove') {
    if (!confirm(tr('removeConfirm', exercise))) return;
    custom = custom.filter(ex => ex !== exercise);
    exerciseNotes.delete(exercise);
    save();
    prefill();
    return;
  }
  noteExercise = exercise;
  openNote(exercise, exerciseNotes.get(exercise) || '', action === 'note');
};
$('noteForm').onsubmit = event => {
  if (event.submitter !== $('saveNote') || $('saveNote').hidden) return;
  const note = $('exerciseNote').value.trim();
  if (note) exerciseNotes.set(noteExercise, note);
  else exerciseNotes.delete(noteExercise);
  save();
};

const hasWeight = entry => entry.weight != null && entry.weight !== '' && Number.isFinite(Number(entry.weight));
const number = value => new Intl.NumberFormat(locale(), {maximumFractionDigits:6}).format(value);
function prefill() {
  const exercise = $('logExercise').value;
  const previous = entries.reduce((latest, entry) => {
    if (entry.exercise !== exercise) return latest;
    return !latest || entry.date >= latest.date ? entry : latest;
  }, null);
  $('weight').value = previous?.weight ?? '';
  $('sets').value = previous?.sets ?? 3;
  $('reps').value = previous?.reps ?? 10;
}
$('logExercise').onchange = prefill;
function workoutValues(prefix = '') {
  const field = name => $(prefix ? prefix + name[0].toUpperCase() + name.slice(1) : name);
  const sets = field('sets'), reps = field('reps'), weight = field('weight');
  if (!(+sets.value >= 1 && +reps.value >= 1)) {
    alert(tr('required'));
    return null;
  }
  if (![weight, sets, reps].every(input => input.reportValidity())) return null;
  const date = $(prefix ? 'editDate' : 'logDate').value || today();
  return {date, weight:weight.value, sets:+sets.value, reps:+reps.value, notes:field('notes').value};
}
$('saveLog').onclick = () => {
  const exercise = $('logExercise').value;
  if (!exercise) return alert(tr('required'));
  const values = workoutValues();
  if (!values) return;
  entries.push({exercise, ...values});
  $('notes').value = '';
  save();
  alert(tr('saved'));
};

let editing;
$('historyList').onclick = event => {
  const button = event.target.closest('[data-edit],[data-note],[data-delete-workout]');
  if (!button) return;
  if ('deleteWorkout' in button.dataset) {
    if (!confirm(tr('deleteConfirm'))) return;
    entries.splice(Number(button.dataset.deleteWorkout), 1);
    save();
    prefill();
    return;
  }
  if ('note' in button.dataset) {
    const entry = entries[button.dataset.note];
    openNote(entry.exercise, entry.notes);
    return;
  }
  editing = Number(button.dataset.edit);
  const entry = entries[editing];
  $('editExercise').textContent = entry.exercise;
  setDate('editDate', entry.date);
  for (const key of ['weight', 'sets', 'reps', 'notes']) {
    $('edit' + key[0].toUpperCase() + key.slice(1)).value = entry[key] ?? '';
  }
  $('editDialog').showModal();
};
$('editForm').onsubmit = event => {
  event.preventDefault();
  const values = workoutValues('edit');
  if (!values) return;
  entries[editing] = {...entries[editing], ...values};
  $('editDialog').close();
  save();
  prefill();
};
$('cancelEdit').onclick = () => $('editDialog').close();
const chartRange = $('chartRange');
const savedRange = localStorage.getItem(RANGEKEY);
chartRange.value = ['1', '3', '6', 'all'].includes(savedRange) ? savedRange : '3';
function rangeStart(months) {
  const date = new Date();
  const day = date.getDate();
  date.setDate(1);
  date.setMonth(date.getMonth() - months);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  date.setDate(Math.min(day, lastDay));
  return isoDate(date);
}
function tickStep(span, integer) {
  const approximate = span / 4;
  const magnitude = 10 ** Math.floor(Math.log10(approximate));
  const step = [1, 2, 2.5, 5, 10].find(unit => unit * magnitude >= approximate) * magnitude;
  return integer ? Math.ceil(step) : step;
}
function drawChart(id, points, hasOlderData, label, integer) {
  const canvas = $(id), message = $(id + 'Empty');
  canvas.hidden = points.length === 0;
  message.hidden = points.length > 0;
  message.textContent = canvas.hidden ? tr(hasOlderData ? 'noPeriodData' : 'noData') : '';
  if (!points.length) return;
  const width = canvas.clientWidth, height = canvas.clientHeight;
  if (!width || !height) return;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  canvas.setAttribute('aria-label', [label, ...points.map(point =>
    `${formatDate(point.date)}: ${number(point.value)}`)].join(' · '));
  const ctx = canvas.getContext('2d');
  ctx.scale(canvas.width / width, canvas.height / height);
  ctx.font = '13px system-ui';
  const [low, high] = points.reduce(([min, max], point) =>
    [Math.min(min, point.value), Math.max(max, point.value)], [Infinity, -Infinity]);
  const padding = Math.max(integer ? 1 : 0.5, Math.abs(high) * 0.04);
  const step = tickStep(high - low || 2 * padding, integer);
  const min = Math.max(0, Math.floor((low - (low === high ? padding : 0)) / step) * step);
  const topTick = Math.max(min + step, Math.ceil((high + (low === high ? padding : 0)) / step) * step);
  const ticks = Array.from({length:Math.round((topTick - min) / step) + 1}, (_, i) => min + i * step);
  const first = Date.parse(points[0].date), last = Date.parse(points.at(-1).date);
  const dateLabelWidth = ctx.measureText('00/00/0000').width;
  const left = Math.max(dateLabelWidth / 2 + 2, ...ticks.map(tick => ctx.measureText(number(tick)).width + 10));
  const right = width - dateLabelWidth / 2 - 4;
  const top = 14, bottom = height - 34;
  const x = timestamp => first === last ? (left + right) / 2 : left + (timestamp - first) / (last - first) * (right - left);
  const y = value => bottom - (value - min) / (topTick - min) * (bottom - top);
  ctx.fillStyle = '#4b5862';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  for (const tick of ticks) {
    ctx.strokeStyle = '#d2eaf8';
    ctx.beginPath();
    ctx.moveTo(left, y(tick));
    ctx.lineTo(right, y(tick));
    ctx.stroke();
    ctx.fillText(number(tick), left - 7, y(tick));
  }
  ctx.strokeStyle = '#07549A';
  ctx.lineWidth = 2;
  ctx.beginPath();
  points.forEach((point, i) => ctx[i ? 'lineTo' : 'moveTo'](x(Date.parse(point.date)), y(point.value)));
  ctx.stroke();
  ctx.fillStyle = '#07549A';
  for (const point of points) {
    ctx.beginPath();
    ctx.arc(x(Date.parse(point.date)), y(point.value), 4, 0, 2 * Math.PI);
    ctx.fill();
  }
  ctx.fillStyle = '#4b5862';
  ctx.textAlign = 'center';
  const intervals = Math.min((last - first) / dayMs, Math.max(1, Math.floor((right - left) / (dateLabelWidth + 12))));
  for (let i = 0; i <= intervals; i++) {
    const time = intervals ? first + Math.round((last - first) / dayMs * i / intervals) * dayMs : first;
    ctx.fillText(formatDate(new Date(time).toISOString().slice(0, 10)), x(time), height - 13);
  }
}
function drawCharts() {
  if ($('charts').classList.contains('hidden')) return;
  const start = chartRange.value === 'all' ? '' : rangeStart(Number(chartRange.value));
  const workouts = entries.filter(entry => entry.exercise === $('chartExercise').value)
    .sort((a, b) => a.date.localeCompare(b.date));
  for (const [id, key, filter] of [
    ['weightChart', 'weight', hasWeight],
    ['repsChart', 'reps', entry => entry.reps != null && entry.reps !== '' && Number.isFinite(Number(entry.reps))]
  ]) {
    const data = workouts.filter(entry => filter(entry) && Number.isFinite(Date.parse(entry.date)));
    const points = data.filter(entry => !start || (entry.date >= start && entry.date <= today())).map(entry => ({date:entry.date, value:Number(entry[key])}));
    drawChart(id, points, data.length > 0, tr(key), key === 'reps');
  }
}
chartRange.onchange = () => {
  localStorage.setItem(RANGEKEY, chartRange.value);
  drawCharts();
};
$('chartExercise').onchange = drawCharts;
new ResizeObserver(drawCharts).observe($('charts').querySelector('.panel'));

$('export').onclick = () => {
  const backup = {entries, custom, exerciseNotes:Object.fromEntries(exerciseNotes)};
  const blob = new Blob([JSON.stringify(backup, null, 2)], {type:'application/json'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'krafttraining-backup.json';
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
};
$('restore').onclick = () => $('importFile').click();
$('importFile').onchange = async event => {
  const input = event.target;
  const file = input.files[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    const notes = data?.exerciseNotes ?? {};
    if (!Array.isArray(data?.entries) || !data.entries.every(entry =>
      typeof entry?.exercise === 'string' && typeof entry.date === 'string' &&
      (entry.notes == null || typeof entry.notes === 'string')) ||
      !Array.isArray(data.custom) || !data.custom.every(ex => typeof ex === 'string') ||
      typeof notes !== 'object' || Array.isArray(notes) ||
      !Object.values(notes).every(note => typeof note === 'string')) throw new Error('Invalid backup');
    if (!confirm(tr('backupConfirm'))) return;
    entries = data.entries;
    custom = data.custom;
    exerciseNotes = new Map(Object.entries(notes));
    save();
    prefill();
    alert(tr('restored'));
  } catch {
    alert(tr('invalid'));
  } finally {
    input.value = '';
  }
};

const menuToggle = $('menuToggle'), settingsMenu = $('settingsMenu');
function updateMenuLabel() {
  menuToggle.setAttribute('aria-label', tr(settingsMenu.hidden ? 'openSettings' : 'closeSettings'));
}
menuToggle.onclick = () => {
  settingsMenu.hidden = !settingsMenu.hidden;
  menuToggle.setAttribute('aria-expanded', String(!settingsMenu.hidden));
  updateMenuLabel();
};
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !settingsMenu.hidden && !document.querySelector('dialog[open]')) {
    menuToggle.click();
    menuToggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!settingsMenu.hidden && !settingsMenu.contains(event.target) && !menuToggle.contains(event.target)) menuToggle.click();
});
function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(el => {el.textContent = tr(el.dataset.i18n)});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {el.placeholder = tr(el.dataset.i18nPlaceholder)});
  document.querySelector('nav').setAttribute('aria-label', language === 'de' ? 'Hauptnavigation' : 'Main navigation');
  $('languageSelect').value = language;
  updateMenuLabel();
  localizeDates();
  render();
}
$('languageSelect').onchange = event => {
  language = event.target.value;
  localStorage.setItem(LANGKEY, language);
  applyLanguage();
};
const tabs = [...document.querySelectorAll('[data-tab]')];
for (const button of tabs) {
  button.onclick = () => {
    for (const tab of tabs) {
      $(tab.dataset.tab).classList.toggle('hidden', tab !== button);
      tab.classList.toggle('secondary', tab !== button);
    }
    $('appHeader').classList.toggle('hidden', button.dataset.tab !== 'status');
    drawCharts();
  };
}
applyLanguage();
setDate('logDate', today());
prefill();
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', {updateViaCache:'none'})
    .then(registration => registration.update()).catch(() => {});
}
