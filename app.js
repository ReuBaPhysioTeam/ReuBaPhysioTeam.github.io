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

Object.assign(translations.de, {
  yourWeek:'Deine Trainingswoche', goalsIntro:'Jede Trainingseinheit zählt!', weeklyGoal:'Mein Wochenziel (Tage/Woche)',
  weeksInRow:'Zielwochen in Folge', totalSessions:'Trainingstage insgesamt', achievements:'Deine Abzeichen',
  weeklyCount:(done,goal)=>`${done} von ${goal} Trainingstagen diese Woche`,
  goalDone:'Wochenziel erreicht – klasse!', goalOpen:'Weiter so! Jeder Trainingstag zählt.',
  badgeFirst:'Erstes Training', badge10:'10 Trainingstage', badge50:'50 Trainingstage',
  badge4:'4 Zielwochen in Folge', badge12:'12 Zielwochen in Folge',
  achieved:'Freigeschaltet', locked:'Noch nicht freigeschaltet',
  effortLabel:'Wie war die Belastung?', effortNone:'Keine Angabe', effortEasy:'Leicht', effortRight:'Passend', effortHard:'Zu schwer',
  effortShort:'Belastung', techniqueLabel:'Kontrolliert und ohne Schmerzen ausgeführt',
  techniqueExplain:'Nur bestätigte Einheiten können Steigerungsvorschläge auslösen.',
  editProgress:'Steigerung einstellen', progressConfigIntro:'Individuelle Steigerungsschritte für diese Übung festlegen. Die App empfiehlt zuerst zusätzliche Wiederholungen und erst danach mehr Gewicht.',
  increaseReps:'Mehr Wiederholungen pro Satz', increaseKg:'Gewichtsschritt (kg)',
  increaseRepsHelp:'Die App erfasst Wiederholungen pro Satz. Sie rundet das Ziel so auf, dass insgesamt mindestens dieser Zuwachs erreicht wird.',
  allowProgression:'Steigerungsvorschläge erlauben',
  therapyExplain:'Bei therapeutischen Belastungsgrenzen deaktivieren. Nicht steigern bei Schmerzen oder unsicherer Technik.',
  invalidProgressSettings:'Bitte gültige Schritte eingeben: 1–30 zusätzliche Wiederholungen pro Satz und 0,5–100 kg Gewichtsschritt.',
  suggestionTitle:'Dein nächster Schritt', suggestionDisabled:'Für diese Übung sind Steigerungsvorschläge deaktiviert.',
  suggestionNoWeight:'Du hast dein Wiederholungsziel wiederholt mit kontrollierter Ausführung erreicht. Eine schwerere Übungsvariante kann nach fachlicher Rücksprache sinnvoll sein.',
  suggestionWeight:(from,to,rep)=>`Du hast bei zwei Trainingseinheiten ${rep} Wiederholungen mit ${from} kg und kontrollierter Ausführung erreicht. Wenn du dich bereit fühlst und keine Belastungsgrenze besteht, kannst du beim nächsten Mal ${to} kg ausprobieren.`,
  suggestionWait:(min,max)=>`Ziel: ${min}–${max} Wiederholungen. Wenn du die obere Grenze bei zwei Trainingstagen mit gleichem Gewicht, positivem Belastungsempfinden und bestätigter Technik erreichst, erscheint ein freiwilliger Steigerungsvorschlag.`,
  suggestionSafety:'Kein Gewicht wird automatisch verändert. Im Zweifel therapeutische Vorgaben beachten.',
  goalAffectsBadges:'Das Wochenziel bestimmt auch die Abzeichen für regelmäßiges Training.',
  badgeDaysTitle:'Trainingstage', badgeWeeksTitle:'Zielwochen',
  badgeDays:n=>`${n} Trainingstage`, badgeWeeks:n=>`${n} Zielwochen in Folge`,
  badgeCurrent:'Erreicht', badgeUpcoming:'Nächstes Ziel'
});
Object.assign(translations.en, {
  yourWeek:'Your training week', goalsIntro:'Every workout day counts!', weeklyGoal:'My weekly goal (days/week)',
  weeksInRow:'Goal weeks in a row', totalSessions:'Total training days', achievements:'Your badges',
  weeklyCount:(done,goal)=>`${done} of ${goal} workout days this week`,
  goalDone:'Weekly goal achieved – great job!', goalOpen:'Keep going! Every training day counts.',
  badgeFirst:'First workout', badge10:'10 training days', badge50:'50 training days',
  badge4:'4 goal weeks in a row', badge12:'12 goal weeks in a row',
  achieved:'Unlocked', locked:'Not unlocked yet',
  effortLabel:'How did it feel?', effortNone:'Not specified', effortEasy:'Easy', effortRight:'About right', effortHard:'Too hard',
  effortShort:'Effort', techniqueLabel:'Controlled movement without pain',
  techniqueExplain:'Only confirmed sessions can trigger progression suggestions.',
  editProgress:'Configure progression', progressConfigIntro:'Choose individual progression steps for this exercise. The app first suggests more repetitions and only then more weight.',
  increaseReps:'Additional repetitions per set', increaseKg:'Weight increment (kg)',
  increaseRepsHelp:'The app records repetitions per set. It rounds the target up so that at least this many additional repetitions are completed across all sets.',
  allowProgression:'Allow progression suggestions',
  therapyExplain:'Disable for therapeutic load limits. Do not increase with pain or uncertain technique.',
  invalidProgressSettings:'Please enter valid steps: 1–30 additional repetitions per set and a weight increment of 0.5–100 kg.',
  suggestionTitle:'Your next step', suggestionDisabled:'Progression suggestions are disabled for this exercise.',
  suggestionNoWeight:'You repeatedly reached your rep goal with controlled movement. A harder variation may be suitable after consulting a professional.',
  suggestionWeight:(from,to,rep)=>`Across two workout days you reached ${rep} reps at ${from} kg with controlled movement. If you feel ready and have no load limit, you could try ${to} kg next time.`,
  suggestionWait:(min,max)=>`Goal: ${min}–${max} reps. Once you reach the upper limit on two workout days at the same weight, with positive effort ratings and confirmed technique, an optional suggestion will appear.`,
  suggestionSafety:'Weight is never changed automatically. Follow any therapeutic guidance.',
  goalAffectsBadges:'The weekly goal also determines consistency badges.',
  badgeDaysTitle:'Training days', badgeWeeksTitle:'Goal weeks',
  badgeDays:n=>`${n} training days`, badgeWeeks:n=>`${n} goal weeks in a row`,
  badgeCurrent:'Achieved', badgeUpcoming:'Next milestone'
});

Object.assign(translations.de, {
  effortRequired:'Bitte gib an, wie sich die Belastung angefühlt hat.',
  controlledLabel:'Kontrolliert ausgeführt',painFreeLabel:'Ohne Schmerzen ausgeführt',
  progressIncrease:'Steigerungsempfehlung anzeigen',progressReduce:'Erleichterungsempfehlung anzeigen',
  adviceEasyTitle:'Das hast du klasse gemacht! 💙',adviceRightTitle:'Das hast du klasse gemacht! 💙',
  adviceNextTitle:'Ein weiterer Schritt geschafft! 🏅',adviceHardTitle:'So wird es leichter 💙',
  adviceSafetyTitle:'Danke für dein Training! 💙',
  adviceEasyCaution:'Wir freuen uns, dass du die Übung geschafft hast! Bitte steigere die Belastung noch nicht, solange die Ausführung nicht kontrolliert und schmerzfrei war.',
  adviceEasyDisabled:'Wir freuen uns über dein Training! Für diese Übung sind Steigerungsempfehlungen deaktiviert. Bleibe bei deinen individuellen Trainingsvorgaben.',
  adviceSafety:'Du hast dein Training eingetragen. Eine Steigerung empfehlen wir nur, wenn die Ausführung kontrolliert und schmerzfrei war. Bei Schmerzen bitte die Übung nicht steigern und fachlichen Rat einholen.',
  adviceRepsEasy:(sets,reps,step,total)=>'Wir freuen uns über deinen Fortschritt! Du hast die Übung super gemeistert und bist bereit für den nächsten Schritt. Beim nächsten Training darfst du dich an eine Steigerung wagen! 💪',
  adviceRepsRight:(sets,reps,step,total)=>`Du hast an drei Trainingstagen dasselbe Gewicht sowie dieselbe Satz- und Wiederholungszahl als passend bewertet. Versuche als Nächstes ${step} zusätzliche Wiederholungen pro Satz: ${sets} Sätze mit jeweils ${reps} Wiederholungen. Erst danach kannst du gegebenenfalls eine kleine Gewichtssteigerung erwägen.`,
  adviceWeight:(from,to)=>`Du hast die zusätzlichen Wiederholungen geschafft! Wenn die Ausführung kontrolliert und schmerzfrei blieb und keine therapeutische Grenze gilt, kannst du beim nächsten Mal eine kleine Gewichtssteigerung von ${from} kg auf ${to} kg ausprobieren. Das Gewicht wird nicht automatisch verändert.`,
  adviceVariant:'Du hast die zusätzlichen Wiederholungen geschafft! Für diese Übung wurde kein Gewicht hinterlegt. Eine anspruchsvollere Variante kann eventuell sinnvoll sein – bitte individuelle therapeutische Vorgaben berücksichtigen.',
  adviceHard:(weight,step)=> weight ? `Danke für deine ehrliche Einschätzung! Versuche beim nächsten Training zunächst etwas weniger Gewicht (z. B. ungefähr ${step} kg weniger) bei sauberer Ausführung. Reicht das nicht aus, reduziere anschließend die Wiederholungen. Bei Schmerzen die Übung unterbrechen und therapeutisch abklären.` : 'Danke für deine ehrliche Einschätzung! Falls möglich, verringere zunächst den Widerstand bzw. erleichtere die Übung. Reicht das nicht aus, reduziere anschließend die Wiederholungen. Bei Schmerzen die Übung unterbrechen und therapeutisch abklären.',
  adviceFooter:'Dies ist ein freiwilliger Trainingshinweis, keine medizinische Freigabe. Technisch saubere, schmerzfreie Ausführung und therapeutische Vorgaben haben Vorrang.'
});
Object.assign(translations.en, {
  effortRequired:'Please select how the exercise felt.',
  controlledLabel:'Performed with control',painFreeLabel:'Performed without pain',
  progressIncrease:'Show progression suggestion',progressReduce:'Show easing suggestion',
  adviceEasyTitle:'You did a great job! 💙',adviceRightTitle:'You did a great job! 💙',
  adviceNextTitle:'Another milestone reached! 🏅',adviceHardTitle:'Ways to make it easier 💙',
  adviceSafetyTitle:'Thanks for your workout! 💙',
  adviceEasyCaution:'We are glad you completed this exercise! Please do not increase the difficulty unless the movement was controlled and pain-free.',
  adviceEasyDisabled:'We are happy you completed your workout! Progression suggestions are disabled for this exercise. Follow your individual training instructions.',
  adviceSafety:'Your workout is saved. We only suggest progressing when movement was controlled and pain-free. With pain, do not increase the load; seek professional advice.',
  adviceRepsEasy:(sets,reps,step,total)=>'We are delighted with your progress! You did a great job with this exercise and are ready for the next step. At your next workout, you can try increasing the challenge! 💪',
  adviceRepsRight:(sets,reps,step,total)=>`On three workout days, you reported the same weight, sets and repetitions as about right. Try ${step} additional repetitions per set: ${sets} sets of ${reps} repetitions. A small weight increase can be considered as a later step.`,
  adviceWeight:(from,to)=>`You achieved the additional repetitions! If your technique was controlled and pain-free and there are no therapeutic limits, you could try a small weight increase from ${from} kg to ${to} kg next time. Weight is never changed automatically.`,
  adviceVariant:'You achieved the extra repetitions! No weight is recorded for this exercise. A harder variation might be appropriate, taking any therapeutic limits into account.',
  adviceHard:(weight,step)=> weight ? `Thanks for your feedback. Next time, first try a little less weight (e.g. about ${step} kg less), with good technique. If it still feels too hard, reduce repetitions. If there is pain, stop and seek professional advice.` : 'Thanks for your feedback. First try reducing resistance or choosing an easier variation. If it is still too hard, reduce repetitions. If there is pain, stop and seek professional advice.',
  adviceFooter:'This is an optional training hint, not medical clearance. Controlled, pain-free movement and therapeutic instructions take priority.'
});

const $ = id => document.getElementById(id);
const KEY = 'myKrafttraining.entries.v1';
const EXKEY = 'myKrafttraining.customExercises.v1';
const NOTEKEY = 'myKrafttraining.exerciseNotes.v1';
const LANGKEY = 'myKrafttraining.language.v1';
const RANGEKEY = 'myKrafttraining.chartRange.v1';
const GOALKEY = 'myKrafttraining.weeklyGoal.v1';
const PROGRESSKEY = 'myKrafttraining.progressSettings.v1';
const read = (key, fallback) => JSON.parse(localStorage.getItem(key) ?? fallback);
let entries = read(KEY, '[]');
let custom = read(EXKEY, '[]');
let exerciseNotes = new Map(Object.entries(read(NOTEKEY, '{}')));
let language = localStorage.getItem(LANGKEY) === 'en' ? 'en' : 'de';
const normalizeWeeklyGoal = value => Number.isInteger(Number(value)) && +value >= 1 && +value <= 7 ? Number(value) : 2;
const defaultProgressSettings = () => ({increaseReps:3,increaseKg:2.5,enabled:true});
function normalizeProgressSettings(value) {
  const result = {};
  if (!value || typeof value !== 'object' || Array.isArray(value)) return result;
  for (const [exercise, settings] of Object.entries(value)) {
    if (typeof exercise !== 'string' || !settings || typeof settings !== 'object' || Array.isArray(settings)) continue;
    // Migrate v1.8.4's unused min/max repetition range to the new per-exercise
    // increment (default +3 reps per set). Preserve existing weight step and switch.
    if (settings.minReps != null || settings.maxReps != null) {
      const min = Number(settings.minReps), max = Number(settings.maxReps);
      if (!Number.isInteger(min) || min < 1 || min > 100 || !Number.isInteger(max) || max < min || max > 100) continue;
    }
    const increaseReps = settings.increaseReps == null ? 3 : Number(settings.increaseReps);
    const increaseKg = Number(settings.increaseKg);
    if (!Number.isInteger(increaseReps) || increaseReps < 1 || increaseReps > 30 ||
        !Number.isFinite(increaseKg) || increaseKg < 0.5 || increaseKg > 100 ||
        typeof settings.enabled !== 'boolean') continue;
    result[exercise] = {increaseReps,increaseKg,enabled:settings.enabled};
  }
  return result;
}
let weeklyGoal = normalizeWeeklyGoal(localStorage.getItem(GOALKEY));
let progressSettings = normalizeProgressSettings(read(PROGRESSKEY, '{}'));
const locale = () => language === 'de' ? 'de-DE' : 'en-US';
const tr = (key, ...args) => typeof translations[language][key] === 'function'
  ? translations[language][key](...args) : translations[language][key];
const escapeHTML = value => String(value).replace(/[&<>"']/g, char =>
  ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'})[char]);

const icons = {
  pencil:'<path d="m4 16-1 5 5-1L20 8l-4-4Z M14 6l4 4"/>',
  trash:'<path d="M3 6h18 M9 6V3h6v3 M5 6l1 15h12l1-15 M10 10v7 M14 10v7"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6 M12 7h.01"/>',
  arrowUp:'<path d="M12 20V4 M5 11l7-7 7 7"/>',
  arrowDown:'<path d="M12 4v16 M5 13l7 7 7-7"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.07.07-2.83 2.83-.07-.07A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1.4 1.68V22h-4v-.92A1.7 1.7 0 0 0 8.2 19.4a1.7 1.7 0 0 0-1.87.34l-.07.07-2.83-2.83.07-.07A1.7 1.7 0 0 0 3.8 15a1.7 1.7 0 0 0-1.68-1.4H1.2v-4h.92A1.7 1.7 0 0 0 3.8 8.2a1.7 1.7 0 0 0-.34-1.87l-.07-.07 2.83-2.83.07.07A1.7 1.7 0 0 0 8.2 3.8a1.7 1.7 0 0 0 1.4-1.68V1.2h4v.92A1.7 1.7 0 0 0 15 3.8a1.7 1.7 0 0 0 1.87-.34l.07-.07 2.83 2.83-.07.07A1.7 1.7 0 0 0 19.4 8.2a1.7 1.7 0 0 0 1.68 1.4H22v4h-.92A1.7 1.7 0 0 0 19.4 15z"/>',
  trendUp:'<path d="M4 16l5-5 4 4 7-7"/><path d="M16 8h4v4"/>'
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
  localStorage.setItem(GOALKEY, String(weeklyGoal));
  localStorage.setItem(PROGRESSKEY, JSON.stringify(progressSettings));
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
function isValidRecordedDay(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T12:00:00`);
  return Number.isFinite(date.getTime()) && isoDate(date) === value && value <= today();
}
function shiftDay(iso, delta) {
  const date = new Date(`${iso}T12:00:00`);
  date.setDate(date.getDate() + delta);
  return isoDate(date);
}
function weekStart(iso) {
  const date = new Date(`${iso}T12:00:00`);
  const offset = (date.getDay() + 6) % 7;
  date.setDate(date.getDate() - offset);
  return isoDate(date);
}
function motivationStats() {
  // Each local calendar day counts once, even when several exercises are logged.
  const days = [...new Set(entries.map(entry => entry.date).filter(isValidRecordedDay))];
  const byWeek = new Map();
  for (const day of days) {
    const week = weekStart(day);
    byWeek.set(week, (byWeek.get(week) || 0) + 1);
  }
  const currentWeek = weekStart(today());
  const thisWeek = byWeek.get(currentWeek) || 0;
  const completed = week => (byWeek.get(week) || 0) >= weeklyGoal;
  let streak = 0;
  // An unfinished current week does not interrupt last week's ongoing streak.
  for (let cursor = completed(currentWeek) ? currentWeek : shiftDay(currentWeek, -7);
       completed(cursor); cursor = shiftDay(cursor, -7)) streak++;
  let bestStreak = 0, run = 0;
  if (byWeek.size) {
    let cursor = [...byWeek.keys()].sort()[0];
    // Bound iteration to plausible dates, including gaps (for long-running users).
    while (cursor <= currentWeek) {
      run = completed(cursor) ? run + 1 : 0;
      bestStreak = Math.max(bestStreak, run);
      cursor = shiftDay(cursor, 7);
    }
  }
  return {days:days.length, thisWeek, streak, bestStreak};
}
function renderMotivation() {
  const stats = motivationStats();
  $('weeklyGoal').value = String(weeklyGoal);
  $('goalIntro').textContent = tr(stats.thisWeek >= weeklyGoal ? 'goalDone' : 'goalsIntro');
  $('goalSummary').textContent = tr('weeklyCount', stats.thisWeek, weeklyGoal);
  $('goalPercent').textContent = `${Math.round(Math.min(stats.thisWeek / weeklyGoal, 1) * 100)} %`;
  $('goalFill').style.width = `${Math.min(stats.thisWeek / weeklyGoal, 1) * 100}%`;
  const progress = $('goalProgress');
  progress.setAttribute('aria-valuemax', String(weeklyGoal));
  progress.setAttribute('aria-valuenow', String(Math.min(stats.thisWeek, weeklyGoal)));
  progress.setAttribute('aria-label', tr('weeklyCount', stats.thisWeek, weeklyGoal));
  $('weekStreak').textContent = stats.streak;
  $('trainingDays').textContent = stats.days;
  const trainingMilestones = [1, 10, 25, 50, 75, 100, 150, 200, 250, 365];
  const goalWeekMilestones = [2, 4, 8, 12, 18, 24, 32, 40, 52];
  function milestoneTrack(titleKey, labelKey, score, milestones) {
    // Only show the highest unlocked milestone and the immediately following one.
    // Use the best historical goal-week streak so awarded badges remain unlocked.
    const firstLocked = milestones.findIndex(amount => score < amount);
    const nextIndex = firstLocked === -1 ? milestones.length : firstLocked;
    const shown = [];
    if (nextIndex > 0) shown.push([milestones[nextIndex - 1], true]);
    if (nextIndex < milestones.length) shown.push([milestones[nextIndex], false]);
    const cards = shown.map(([amount, achieved]) => {
      const name = amount === 1 && labelKey === 'badgeDays' ? tr('badgeFirst') : tr(labelKey, amount);
      const status = tr(achieved ? 'badgeCurrent' : 'badgeUpcoming');
      return `<div class="achievement ${achieved ? '' : 'locked'}" aria-label="${escapeHTML(name + ': ' + status)}"><span class="achievement-icon" aria-hidden="true">${achieved ? '🏅' : '🔒'}</span><div><strong>${escapeHTML(name)}</strong><small>${escapeHTML(status)}</small></div></div>`;
    }).join('');
    return `<div class="badge-track"><h4 class="badge-track-title">${escapeHTML(tr(titleKey))}</h4>${cards}</div>`;
  }
  $('achievementList').innerHTML =
    milestoneTrack('badgeDaysTitle', 'badgeDays', stats.days, trainingMilestones) +
    milestoneTrack('badgeWeeksTitle', 'badgeWeeks', stats.bestStreak, goalWeekMilestones);
}
$('weeklyGoal').onchange = event => {
  weeklyGoal = normalizeWeeklyGoal(event.target.value);
  save();
};
function settingsFor(exercise) {
  return progressSettings[exercise] || defaultProgressSettings();
}
// Existing entries with a combined v1.8.2 checkbox are interpreted only when
// that explicit combined checkbox was checked; missing legacy values are never assumed safe.
const controlled = entry => entry.controlled === true || (entry.controlled == null && entry.techniqueOk === true);
const painFree = entry => entry.painFree === true || (entry.painFree == null && entry.techniqueOk === true);
const safeForIncrease = entry => controlled(entry) && painFree(entry);
const sameWeight = (a,b) => String(a ?? '') === String(b ?? '');
const suggestionSignature = advice => advice ? JSON.stringify(advice) : '';
function recommendationFor(exercise) {
  const cfg = settingsFor(exercise);
  const history = entries.map((entry,i)=>({entry,i})).filter(({entry}) =>
    entry.exercise === exercise && isValidRecordedDay(entry.date)).sort((a,b) =>
    a.entry.date.localeCompare(b.entry.date) || a.i-b.i);
  let advice = null;
  let rightRun = {signature:'',count:0,lastDay:''};
  for (const {entry} of history) {
    const effort = entry.effort;
    const reps = Number(entry.reps), sets = Number(entry.sets);
    const weight = hasWeight(entry) ? Number(entry.weight) : null;
    if (!Number.isFinite(reps) || reps < 1 || !Number.isInteger(sets) || sets < 1) continue;
    if (effort === 'hard') {
      advice = {kind:'reduce',weight,step:cfg.increaseKg};
      rightRun = {signature:'',count:0,lastDay:''};
      continue;
    }
    if (!cfg.enabled || !safeForIncrease(entry) || !['easy','right'].includes(effort)) {
      advice = null;
      rightRun = {signature:'',count:0,lastDay:''};
      continue;
    }
    const signature = JSON.stringify([weight,sets,reps]);
    if (effort === 'right') {
      if (rightRun.signature !== signature) rightRun = {signature,count:0,lastDay:''};
      if (rightRun.lastDay !== entry.date) {rightRun.count++;rightRun.lastDay=entry.date;}
    } else rightRun = {signature:'',count:0,lastDay:''};
    if (advice?.kind === 'reps') {
      const same = sameWeight(weight,advice.weight) && sets === advice.sets;
      if (same && reps >= advice.targetReps) {
        advice = weight != null && weight > 0 ?
          {kind:'weight',fromWeight:weight,toWeight:Math.round((weight+cfg.increaseKg)*100)/100} :
          {kind:'variant'};
        rightRun = {signature:'',count:0,lastDay:''};
        continue;
      }
      if (same) continue; // Wait for the suggested reps at the same load.
      advice = null; // Changed exercise parameters; restart this progression cycle.
    } else if (advice?.kind === 'weight' || advice?.kind === 'variant') {
      if (advice.kind === 'weight' && weight != null && weight < advice.toWeight) continue;
      advice = null;
    } else if (advice?.kind === 'reduce') advice = null;
    if (effort === 'easy' || (effort === 'right' && rightRun.count >= 3)) {
      // The UI stores repetitions PER SET. The configured increase applies
      // directly to each set, not to the sum of repetitions.
      advice = {kind:'reps',weight,sets,baseReps:reps,increaseReps:cfg.increaseReps,
        targetReps:reps+cfg.increaseReps,source:effort};
      rightRun = {signature:'',count:0,lastDay:''};
    }
  }
  return advice;
}
function recommendationContent(advice) {
  if (!advice) return null;
  if (advice.kind === 'reduce') return {
    title:tr('adviceHardTitle'),body:tr('adviceHard',advice.weight != null && advice.weight > 0,number(advice.step)),icon:'💙',kind:'reduce'
  };
  // A progression recommendation always uses the same encouraging message,
  // whether it was triggered by "easy", three consecutive "about right"
  // sessions, or by reaching the next repetitions/weight step.
  if (['reps', 'weight', 'variant'].includes(advice.kind)) return {
    title:tr('adviceEasyTitle'),body:tr('adviceRepsEasy'),icon:'💙',kind:'increase',includeFooter:false
  };
  return null;
}
function showRecommendation(advice) {
  const content = recommendationContent(advice);
  if (!content) return;
  showAdviceWindow(content);
}
function showAdviceWindow(content) {
  const dialog = $('recommendationDialog');
  $('recommendationTitle').textContent = content.title;
  $('recommendationIcon').textContent = content.icon;
  $('recommendationText').textContent = content.body + (content.includeFooter === false ? '' : '\n\n' + tr('adviceFooter'));
  dialog.dataset.kind = content.kind;
  dialog.showModal();
}
function arrowButton(exercise, advice) {
  if (!advice) return '';
  const up = advice.kind !== 'reduce';
  const label = tr(up ? 'progressIncrease' : 'progressReduce');
  const icon = up ? 'arrowUp' : 'arrowDown';
  return `<button type="button" class="advice-arrow ${up?'up':'down'}" data-action="advice" data-exercise="${escapeHTML(exercise)}" aria-label="${escapeHTML(label)}" title="${escapeHTML(label)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[icon]}</svg></button>`;
}

// Layout the final word together with its information/recommendation buttons.
// For very long words, derive a possible hyphenation point from the browser's
// own language-specific line breaking, leaving only the final fragment linked.
function layoutExerciseHeadings() {
  const canvas = document.createElement('canvas');
  const measure = canvas.getContext('2d');
  for (const name of document.querySelectorAll('#exerciseList .exercise-name[data-full-name]')) {
    const buttons = name.querySelector('.title-buttons');
    if (!buttons) continue;
    const label = name.dataset.fullName;
    const iconMarkup = buttons.outerHTML;
    const split = /^(.*[\s-])([^\s-]+)$/u.exec(label);
    const before = split ? split[1] : '';
    const word = split ? split[2] : label;
    const width = name.clientWidth;
    if (!word || width < 1) continue;

    const style = getComputedStyle(name);
    measure.font = style.font;
    // Include the group's left margin and a few px of rounding tolerance.
    const iconWidth = Math.ceil(buttons.getBoundingClientRect().width) + 11;
    const fits = value => measure.measureText(value).width + iconWidth <= width - 3;

    let cut = 0;
    // Split only if the *word + its attached icon group* cannot fit into
    // the bounded name column. This keeps "Test (i)" together.
    if (!fits(word)) {
      // Take the longest possible suffix that still fits with all icons.
      // Prefer a two-line break with a readable preceding fragment.
      for (let i = 2; i < word.length - 1; i++) {
        if (fits(word.slice(i)) && measure.measureText(word.slice(0, i) + '-').width <= width - 3) {
          cut = i;
          break;
        }
      }
      if (!cut) {
        // Very narrow screen or very long word: keep at least two letters
        // next to the icons; the earlier text may wrap on more lines.
        for (let i = 2; i < word.length - 1; i++) {
          if (fits(word.slice(i))) { cut = i; break; }
        }
      }
    }
    if (cut) {
      // For unusually long names, explicitly split the preceding fragment
      // into fitting lines as well. Otherwise a stray letter plus hyphen may
      // appear on a line by itself in the Android WebView.
      const prefix = word.slice(0, cut);
      const chunks = [];
      let remaining = prefix;
      while (remaining.length) {
        let end = 1;
        while (end <= remaining.length && measure.measureText(remaining.slice(0, end) + '-').width <= width - 5) end++;
        let take = Math.max(1, end - 1);
        const leftover = remaining.length - take;
        if (leftover > 0 && leftover < 4 && take > 6) take -= 4 - leftover;
        chunks.push(remaining.slice(0, take));
        remaining = remaining.slice(take);
      }
      const firstPart = chunks.map(chunk => `<span class="name-chunk">${escapeHTML(chunk)}-</span><br>`).join('');
      name.innerHTML = `${escapeHTML(before)}${firstPart}<span class="title-tail">${escapeHTML(word.slice(cut))}${iconMarkup}</span>`;
    } else {
      name.innerHTML = `${escapeHTML(before)}<span class="title-tail">${escapeHTML(word)}${iconMarkup}</span>`;
    }
  }
}
window.addEventListener('resize', layoutExerciseHeadings);

let editingProgressExercise;
function openProgressSettings(exercise) {
  editingProgressExercise = exercise;
  const cfg = settingsFor(exercise);
  $('progressDialogTitle').textContent = `${tr('editProgress')}: ${exercise}`;
  $('increaseReps').value = cfg.increaseReps;
  $('increaseKg').value = cfg.increaseKg;
  $('allowProgression').checked = cfg.enabled;
  $('progressDialog').showModal();
}
$('progressForm').onsubmit = event => {
  event.preventDefault();
  const repetitions = Number($('increaseReps').value), kg = Number($('increaseKg').value);
  if (!Number.isInteger(repetitions) || repetitions < 1 || repetitions > 30 ||
      !Number.isFinite(kg) || kg < 0.5 || kg > 100) return alert(tr('invalidProgressSettings'));
  progressSettings[editingProgressExercise] = {increaseReps:repetitions,increaseKg:kg,enabled:$('allowProgression').checked};
  $('progressDialog').close();
  save();
};
$('cancelProgress').onclick = () => $('progressDialog').close();

function render() {
  renderMotivation();
  const dates = lastDates();
  const sorted = custom.map(ex => ({ex, days:daysSince(dates.get(ex))})).sort((a, b) => {
    if (a.days === b.days) return 0;
    return b.days - a.days;
  });
  $('exerciseList').innerHTML = sorted.map(({ex, days}) => {
    const [color, description] = status(days);
    const hasNote = Boolean(exerciseNotes.get(ex)?.trim());
    const attr = `data-exercise="${escapeHTML(ex)}"`;
    // Recommendation arrows have their own layout slot so the name-wrapping
    // routine cannot hide or displace them on iOS Safari/WebKit.
    const advice = recommendationFor(ex);
    const adviceMarkup = advice ? `<span class="advice-slot">${arrowButton(ex, advice)}</span>` : '';
    const noteMarkup = hasNote ? iconButton('info', tr('showNote'), attr + ' data-action="show"') : '';
    const nameMarkup = noteMarkup
      ? `<span class="exercise-name-content">${escapeHTML(ex)}</span><span class="title-buttons">${noteMarkup}</span>`
      : escapeHTML(ex);
    return `<div class="item"><div class="item-main"><h3 class="exercise-heading"><span class="dot ${color}"></span><span class="exercise-name" data-full-name="${escapeHTML(ex)}">${nameMarkup}</span>${adviceMarkup}</h3><div class="status">${description}</div></div><div class="item-actions">${iconButton('pencil', tr(hasNote ? 'editNote' : 'addNote'), attr + ' data-action="note"')}${iconButton('trendUp', tr('editProgress'), attr + ' data-action="progress"')}${iconButton('trash', tr('remove'), attr + ' data-action="remove"')}</div></div>`;
  }).join('') || `<p class="sub">${tr('emptyExercises')}</p>`;
  layoutExerciseHeadings();
  for (const [id, options] of [['logExercise', custom], ['chartExercise', [...new Set([...custom, ...dates.keys()])]]]) {
    const select = $(id), old = select.value;
    select.innerHTML = options.map(ex => `<option value="${escapeHTML(ex)}">${escapeHTML(ex)}</option>`).join('');
    if (options.includes(old)) select.value = old;
  }
  $('historyList').innerHTML = entries.map((entry, index) => ({entry, index}))
    .sort((a, b) => b.entry.date.localeCompare(a.entry.date) || b.index - a.index)
    .map(({entry, index}) => {
      const metrics = [hasWeight(entry) ? `${number(entry.weight)} kg` : '', `${number(entry.sets)} ${tr('sets')}`, `${number(entry.reps)} ${tr('reps')}`].filter(Boolean);
      return `<div class="item"><div><h3>${escapeHTML(entry.exercise)}${entry.notes?.trim() ? iconButton('info', tr('showNote'), `data-note="${index}"`) : ''}</h3><div class="sub">${escapeHTML(formatDate(entry.date))}</div><div class="metrics">${metrics.join(' · ')}</div>${['easy','right','hard'].includes(entry.effort) ? `<span class="effort-tag">${escapeHTML(tr('effortShort'))}: ${escapeHTML(tr('effort' + entry.effort[0].toUpperCase() + entry.effort.slice(1)))}</span>` : ''}</div><div class="item-actions">${iconButton('pencil', tr('editWorkout'), `data-edit="${index}"`)}${iconButton('trash', tr('deleteWorkout'), `data-delete-workout="${index}"`)}</div></div>`;
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
    delete progressSettings[exercise];
    save();
    prefill();
    return;
  }
  if (action === 'progress') { openProgressSettings(exercise); return; }
  if (action === 'advice') { showRecommendation(recommendationFor(exercise)); return; }
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
  $('techniqueOk').checked = previous ? controlled(previous) : false;
  $('painFree').checked = previous ? painFree(previous) : false;
  // Effort is deliberately not prefilled: every workout needs a fresh rating.
  $('effort').value = '';
  clearEffortError('effort');
}
$('logExercise').onchange = prefill;
function clearEffortError(id) {
  $(id).classList.remove('effort-invalid');
  $(id).removeAttribute('aria-invalid');
  $(id === 'effort' ? 'effortError' : 'editEffortError').hidden = true;
}
function validateEffort(id) {
  if (['easy','right','hard'].includes($(id).value)) { clearEffortError(id); return true; }
  $(id).classList.add('effort-invalid');
  $(id).setAttribute('aria-invalid','true');
  $(id === 'effort' ? 'effortError' : 'editEffortError').hidden = false;
  $(id).focus();
  return false;
}
for (const id of ['effort','editEffort']) $(id).addEventListener('change',()=>clearEffortError(id));
function workoutValues(prefix = '') {
  const field = name => $(prefix ? prefix + name[0].toUpperCase() + name.slice(1) : name);
  const sets = field('sets'), reps = field('reps'), weight = field('weight');
  if (!(+sets.value >= 1 && +reps.value >= 1)) {
    alert(tr('required'));
    return null;
  }
  if (![weight, sets, reps].every(input => input.reportValidity())) return null;
  if (!validateEffort(prefix ? 'editEffort' : 'effort')) return null;
  const date = $(prefix ? 'editDate' : 'logDate').value || today();
  return {date, weight:weight.value, sets:+sets.value, reps:+reps.value, notes:field('notes').value,
    effort:field('effort').value,
    controlled:$(prefix ? 'editTechniqueOk' : 'techniqueOk').checked,
    painFree:$(prefix ? 'editPainFree' : 'painFree').checked};
}
$('saveLog').onclick = () => {
  const exercise = $('logExercise').value;
  if (!exercise) return alert(tr('required'));
  const values = workoutValues();
  if (!values) return;
  const oldAdvice = recommendationFor(exercise);
  entries.push({exercise, ...values});
  $('notes').value = '';
  save();
  const newAdvice = recommendationFor(exercise);
  // Every too-hard rating provides immediate assistance. Every easy rating gets
  // encouragement; for 'right' only announce newly unlocked progression steps.
  if (values.effort === 'hard') showRecommendation(newAdvice);
  else if (values.effort === 'easy') {
    // Always celebrate an easy workout; only encourage progression when safe
    // and enabled. Never replace the celebration with the generic safety dialog.
    if (!safeForIncrease(values)) {
      showAdviceWindow({title:tr('adviceSafetyTitle'),body:tr('adviceEasyCaution'),icon:'💙',kind:'neutral'});
    } else if (!settingsFor(exercise).enabled) {
      showAdviceWindow({title:tr('adviceSafetyTitle'),body:tr('adviceEasyDisabled'),icon:'💙',kind:'neutral'});
    } else if (newAdvice && newAdvice.kind !== 'reduce') {
      showRecommendation(newAdvice);
    } else {
      showAdviceWindow({title:tr('adviceEasyTitle'),body:tr('adviceRepsEasy'),icon:'💙',kind:'increase',includeFooter:false});
    }
  } else if (newAdvice && newAdvice.kind !== 'reduce' && suggestionSignature(newAdvice) !== suggestionSignature(oldAdvice))
    showRecommendation(newAdvice);
  // Keep the safety checkboxes at the previous explicit answers for the next entry.
  prefill();
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
  $('editEffort').value = ['easy','right','hard'].includes(entry.effort) ? entry.effort : '';
  $('editTechniqueOk').checked = controlled(entry);
  $('editPainFree').checked = painFree(entry);
  clearEffortError('editEffort');
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
  const data = workouts.filter(entry => hasWeight(entry) && Number.isFinite(Date.parse(entry.date)));
  const points = data.filter(entry => !start || (entry.date >= start && entry.date <= today()))
    .map(entry => ({date:entry.date, value:Number(entry.weight)}));
  drawChart('weightChart', points, data.length > 0, tr('weight'), false);
}
chartRange.onchange = () => {
  localStorage.setItem(RANGEKEY, chartRange.value);
  drawCharts();
};
$('chartExercise').onchange = drawCharts;
new ResizeObserver(drawCharts).observe($('charts').querySelector('.panel'));

// The installed Capacitor app needs native file sharing. Android WebView does not
// reliably honour <a download>, so never silently fall back to it in native mode.
function isNativeApp() {
  return window.Capacitor?.isNativePlatform?.() === true;
}
function browserDownloadBackup(json, filename) {
  const blob = new Blob([json], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
async function exportBackup() {
  const backup = {entries, custom, exerciseNotes:Object.fromEntries(exerciseNotes), weeklyGoal, progressSettings};
  const json = JSON.stringify(backup, null, 2);
  const filename = 'krafttraining-backup.json';
  const button = $('export');
  if (button.disabled) return;
  button.disabled = true;
  try {
    if (!isNativeApp()) {
      browserDownloadBackup(json, filename);
      return;
    }
    // Android Storage Access Framework: real local Save As dialog, no account needed.
    const saver = window.Capacitor?.Plugins?.BackupSaver;
    if (!saver?.saveBackup) {
      throw new Error('Missing Android BackupSaver plugin. Check MainActivity and BackupSaverPlugin.java.');
    }
    const result = await saver.saveBackup({filename, content:json});
    if (result?.saved) {
      alert(language === 'de' ? 'Backup erfolgreich gespeichert.' : 'Backup saved successfully.');
    }
    // If the user cancels the Android picker, do nothing.

  } catch (error) {
    // Share sheets can be dismissed intentionally; in this case no success is claimed.
    const detail = error instanceof Error ? error.message : String(error);
    if (/cancel|cancell|dismiss|abgebroch/i.test(detail)) return;
    console.error('Backup export failed', error);
    alert(language === 'de'
      ? 'Backup konnte nicht gespeichert werden. Bitte prüfe, ob das Android-Plugin BackupSaver installiert ist.'
      : 'Could not save the backup. Please check whether the Android BackupSaver plugin is installed.');
  } finally {
    button.disabled = false;
  }
}
$('export').onclick = exportBackup;
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
    if (data.weeklyGoal != null && normalizeWeeklyGoal(data.weeklyGoal) !== Number(data.weeklyGoal)) throw new Error('Invalid goal');
    if (data.progressSettings != null && (typeof data.progressSettings !== 'object' || Array.isArray(data.progressSettings) ||
       Object.keys(normalizeProgressSettings(data.progressSettings)).length !== Object.keys(data.progressSettings).length)) throw new Error('Invalid progression settings');
    if (data.entries.some(entry => entry.effort != null && !['','easy','right','hard'].includes(entry.effort))) throw new Error('Invalid effort');
    if (data.entries.some(entry => entry.techniqueOk != null && typeof entry.techniqueOk !== 'boolean')) throw new Error('Invalid technique');
    if (data.entries.some(entry => entry.controlled != null && typeof entry.controlled !== 'boolean')) throw new Error('Invalid controlled');
    if (data.entries.some(entry => entry.painFree != null && typeof entry.painFree !== 'boolean')) throw new Error('Invalid pain-free');
    if (!confirm(tr('backupConfirm'))) return;
    entries = data.entries;
    custom = data.custom;
    exerciseNotes = new Map(Object.entries(notes));
    weeklyGoal = normalizeWeeklyGoal(data.weeklyGoal ?? 2);
    progressSettings = normalizeProgressSettings(data.progressSettings ?? {});
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
    // Reset the entire page, not the currently hidden tab. Repeat after layout
    // so Capacitor WebView and mobile browsers cannot retain the old position.
    window.scrollTo(0,0);
    requestAnimationFrame(() => window.scrollTo(0,0));
    drawCharts();
  };
}
applyLanguage();
setDate('logDate', today());
prefill();
// Safari may restore a frozen page from its back-forward cache without running
// initial scripts. Refresh the indicators and layout when it comes back.
window.addEventListener('pageshow', event => {
  if (event.persisted) render();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', {updateViaCache:'none'})
    .then(registration => registration.update()).catch(() => {});
}
