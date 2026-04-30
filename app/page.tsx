"use client";

import { useEffect, useMemo, useState } from "react";
import { authors, texts, themes, timeline } from "@/lib/latinData";

type Q = { q: string; options: string[]; answer: number; exp: string; theme: string; type: string };
const questions: Q[] = [
  { q: "Quelle partie conclut le discours de Cicéron ?", options: ["Exorde", "Narratio", "Peroratio", "Digression"], answer: 2, exp: "La peroraison est la conclusion.", theme: "éloquence", type: "general" },
  { q: "Salluste raconte quelle conspiration ?", options: ["Spartacus", "Catilina", "Néron", "Brutus"], answer: 1, exp: "De coniuratione Catilinae.", theme: "histoire", type: "oeuvres" },
  { q: "Tacite écrit aussi…", options: ["Germania", "Pharsale", "Médée", "Ars Amatoria"], answer: 0, exp: "Germania fait partie du programme.", theme: "histoire", type: "auteurs" },
  { q: "Quel auteur est stoïcien ?", options: ["Sénèque", "Plaute", "Tibulle", "Martial"], answer: 0, exp: "Sénèque développe le stoïcisme.", theme: "grammaire", type: "auteurs" },
  { q: "Ab Urbe Condita est de…", options: ["Tite-Live", "Horace", "Cicéron", "Juvénal"], answer: 0, exp: "Tite-Live.", theme: "histoire", type: "oeuvres" },
  { q: "L’élégie 3,8,1-24 appartient à…", options: ["Tacite", "Tibulle", "Sénèque", "Pline"], answer: 1, exp: "Tibulle, Elegiae.", theme: "femme", type: "oeuvres" },
  { q: "Le registre dominant de Juvénal ?", options: ["Épique", "Lyrique", "Satirique", "Tragique"], answer: 2, exp: "Saturae = satire.", theme: "femme", type: "general" },
  { q: "Aulularia est une…", options: ["Épopée", "Comédie", "Lettre", "Histoire"], answer: 1, exp: "Comédie de Plaute.", theme: "quotidien", type: "oeuvres" },
  { q: "Saint Augustin oppose…", options: ["Patriciens/plébéiens", "Deux cités", "Deux armées", "Deux langues"], answer: 1, exp: "Cité terrestre / cité de Dieu.", theme: "histoire", type: "auteurs" },
  { q: "Quel texte traite des Germains ?", options: ["Germania", "Annales", "Sermones", "Epigrammata"], answer: 0, exp: "Germania 19-21.", theme: "histoire", type: "oeuvres" },
  ...Array.from({ length: 20 }).map((_, i) => ({ q: `Question grammaire/ culture ${i + 11} : quel cas exprime souvent le complément d’objet direct ?`, options: ["Nominatif", "Accusatif", "Datif", "Ablatif"], answer: 1, exp: "En latin, le COD est généralement à l’accusatif.", theme: i % 2 ? "grammaire" : "general", type: i % 3 ? "general" : "grammaire" }))
];

const quizSets = {
  general: questions.slice(0, 12), auteurs: questions.filter((q) => q.type === "auteurs").slice(0, 8), oeuvres: questions.filter((q) => q.type === "oeuvres").slice(0, 8), eloquence: questions.filter((q) => q.theme === "éloquence").concat(questions.slice(11, 15)), histoire: questions.filter((q) => q.theme === "histoire").slice(0, 8), femme: questions.filter((q) => q.theme === "femme").slice(0, 8), grammaire: questions.filter((q) => q.type === "grammaire").slice(0, 8), boss: [...questions].sort(() => Math.random() - 0.5).slice(0, 15)
};

export default function Page() {
  const [query, setQuery] = useState(""); const [filter, setFilter] = useState("all");
  const [activeQuiz, setActiveQuiz] = useState<keyof typeof quizSets | null>(null); const [idx, setIdx] = useState(0); const [score, setScore] = useState(0); const [done, setDone] = useState(false);
  const [progress, setProgress] = useState({ completedThemes: 0, avgScore: 0, lastQuiz: "-", badges: [] as string[] });

  useEffect(() => { const p = localStorage.getItem("latin-progress"); if (p) setProgress(JSON.parse(p)); }, []);
  useEffect(() => { localStorage.setItem("latin-progress", JSON.stringify(progress)); }, [progress]);

  const filteredTexts = useMemo(() => texts.filter((t) => (filter === "all" || t.theme.toLowerCase().includes(filter)) && `${t.title} ${t.author}`.toLowerCase().includes(query.toLowerCase())), [query, filter]);
  const currentQ = activeQuiz ? quizSets[activeQuiz][idx] : null;

  const answer = (choice: number) => { if (!currentQ || done) return; const correct = choice === currentQ.answer; if (correct) setScore((s) => s + 1); setIdx((i) => i + 1); if (idx + 1 >= quizSets[activeQuiz!].length) { setDone(true); const final = correct ? score + 1 : score; const badge = final > 12 ? "Imperator" : final > 9 ? "Sénateur" : final > 5 ? "Citoyen" : "Esclave grammatical"; setProgress((p) => ({ completedThemes: Math.min(8, p.completedThemes + 1), avgScore: Math.round(((p.avgScore + final) / 2) * 10) / 10, lastQuiz: activeQuiz!, badges: Array.from(new Set([...p.badges, badge])) })); } };

  return <main className="min-h-screen bg-[#0b0a0f] text-[#f5ecd9] p-6 md:p-10">
    <section className="max-w-6xl mx-auto space-y-8">
      <div className="rounded-3xl border border-yellow-700/30 bg-gradient-to-br from-[#121018] to-[#190f12] p-8 shadow-2xl">
        <h1 className="text-5xl font-black tracking-wide text-yellow-300">Latinum Quest</h1>
        <p className="mt-3 text-lg">Révise Cicéron, Tacite, Sénèque et les grands auteurs latins comme dans une aventure.</p>
        <div className="mt-6 flex flex-wrap gap-3"><button className="px-4 py-2 rounded-xl bg-yellow-500 text-black">Commencer</button><button onClick={() => setActiveQuiz("general")} className="px-4 py-2 rounded-xl bg-red-700">Faire un quiz</button><button className="px-4 py-2 rounded-xl border border-yellow-700">Voir le programme</button></div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">{[{ l: "Auteurs", v: authors.length }, { l: "Textes", v: texts.length }, { l: "Quiz", v: Object.keys(quizSets).length }, { l: "Thèmes", v: themes.length }].map((s) => <div key={s.l} className="rounded-2xl bg-[#15121c] p-4 border border-yellow-900/30"><p className="text-sm opacity-70">{s.l}</p><p className="text-3xl text-yellow-300 font-bold">{s.v}</p></div>)}</div>

      <h2 className="text-3xl font-bold">Programme</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">{themes.map((t) => <div key={t.id} className="group [transform-style:preserve-3d] h-64 relative">
        <div className="absolute inset-0 rounded-2xl border border-red-800/40 bg-[#17121f] p-4 [backface-visibility:hidden]"><h3 className="text-xl text-yellow-200">{t.name}</h3><p className="text-sm mt-2 opacity-80">{t.summary}</p><p className="mt-3 text-xs">Difficulté: {t.difficulty}</p></div>
        <div className="absolute inset-0 rounded-2xl border border-yellow-700/30 bg-[#120d17] p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]"><p className="text-sm">Auteurs: {t.authors.join(", ")}</p><p className="text-sm mt-2">Textes: {t.texts.join(", ")}</p></div>
      </div>)}</div>

      <h2 className="text-3xl font-bold">Auteurs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{authors.map((a) => <details key={a.id} className="rounded-2xl bg-[#15111a] border border-yellow-900/20 p-4"><summary className="cursor-pointer text-yellow-200 font-semibold">{a.name}</summary><p className="mt-2 text-sm">{a.bio}</p><p className="text-sm mt-2">Œuvre: {a.work}</p><p className="text-sm">Contexte: {a.context}</p><ul className="list-disc ml-5 mt-2 text-sm">{a.ideas.map((i) => <li key={i}>{i}</li>)}</ul><button className="mt-3 text-xs px-3 py-1 rounded-lg bg-red-800">Réviser cet auteur</button></details>)}</div>

      <h2 className="text-3xl font-bold">Textes au programme</h2>
      <div className="flex gap-3 flex-wrap"><div className="flex items-center gap-2 bg-[#16121c] px-3 py-2 rounded-lg"><span>🔎</span><input className="bg-transparent outline-none" placeholder="Rechercher auteur/œuvre" value={query} onChange={(e) => setQuery(e.target.value)} /></div><select className="bg-[#16121c] px-3 py-2 rounded-lg" value={filter} onChange={(e)=>setFilter(e.target.value)}><option value="all">Tous</option><option value="éloquence">Éloquence</option><option value="histoire">Histoire</option><option value="femme">Femme</option><option value="vie">Vie quotidienne</option></select><button onClick={()=>setQuery(texts[Math.floor(Math.random()*texts.length)].title)} className="px-3 py-2 rounded-lg bg-yellow-600 text-black">Texte aléatoire</button></div>
      <div className="space-y-3">{filteredTexts.map((t)=><div key={t.id} className="rounded-xl bg-[#130f18] border border-yellow-900/30 p-4"><p className="text-yellow-200 font-semibold">{t.title} — {t.author}</p><p className="text-sm">Passages: {t.passages}</p><p className="text-sm mt-1">Résumé: {t.summary}</p><p className="text-sm mt-1">À retenir: {t.retain}</p></div>)}</div>

      <h2 className="text-3xl font-bold">Quiz interactifs</h2>
      <div className="flex flex-wrap gap-2">{Object.keys(quizSets).map((k)=><button key={k} onClick={()=>{setActiveQuiz(k as any);setIdx(0);setScore(0);setDone(false);}} className="px-3 py-2 rounded-lg bg-[#1b1524] border border-red-900/40">{k}</button>)}</div>
      {activeQuiz && <div className="rounded-2xl bg-[#120f18] p-5 border border-yellow-900/30">
        <p className="text-sm opacity-70">{activeQuiz.toUpperCase()} • {Math.min(idx+1,quizSets[activeQuiz].length)}/{quizSets[activeQuiz].length}</p>
        {!done && currentQ && <div key={idx}><p className="text-lg mt-2">{currentQ.q}</p><div className="grid md:grid-cols-2 gap-2 mt-3">{currentQ.options.map((o,i)=><button key={o} onClick={()=>answer(i)} className="text-left rounded-lg p-3 bg-[#1c1626] hover:bg-[#2b1d38]">{o}</button>)}</div></div>}
        {done && <div><p className="text-2xl text-yellow-300">Score: {score}/{quizSets[activeQuiz].length}</p><p className="mt-2">{activeQuiz==="boss" ? (score<=5?"Esclave grammatical":score<=10?"Citoyen romain":score<=13?"Sénateur":"Imperator du latin") : "Bravo, continue ta progression !"}</p><button onClick={()=>{setIdx(0);setScore(0);setDone(false);}} className="mt-4 px-4 py-2 rounded-lg bg-red-800 inline-flex gap-2"><span>↻</span>Recommencer</button></div>}
      </div>}

      <h2 className="text-3xl font-bold">Progression</h2>
      <div className="rounded-2xl bg-[#130f17] border border-yellow-900/30 p-4"><p>Thèmes complétés: {progress.completedThemes}/8</p><p>Score moyen: {progress.avgScore}</p><p>Dernier quiz: {progress.lastQuiz}</p><p>Badges: {progress.badges.join(", ") || "Aucun"}</p><div className="h-3 bg-black/50 rounded mt-2"><div className="h-3 bg-gradient-to-r from-red-700 to-yellow-500 rounded" style={{ width: `${(progress.completedThemes/8)*100}%` }} /></div></div>

      <h2 className="text-3xl font-bold">Timeline</h2><div className="grid md:grid-cols-3 gap-3">{timeline.map((t)=><div key={t.year} className="p-3 rounded-lg bg-[#17131f] border border-red-900/30"><p className="text-yellow-300">{t.year}</p><p className="text-sm">{t.event}</p></div>)}</div>
    </section>
  </main>;
}
