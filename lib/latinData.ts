export type Theme = {
  id: string;
  name: string;
  summary: string;
  authors: string[];
  texts: string[];
  difficulty: "Facile" | "Intermédiaire" | "Avancé";
};

export type Author = {
  id: string;
  name: string;
  bio: string;
  work: string;
  context: string;
  ideas: string[];
  quiz: { question: string; options: string[]; answer: number; explanation: string };
};

export type TextItem = {
  id: string;
  title: string;
  author: string;
  theme: string;
  passages: string;
  summary: string;
  retain: string;
  notions: string[];
};

export const themes: Theme[] = [
  { id: "eloquence", name: "L’éloquence", summary: "Art de convaincre, construire un plaidoyer et maîtriser les parties du discours.", authors: ["Cicéron"], texts: ["Pro Archia poeta"], difficulty: "Intermédiaire" },
  { id: "histoire", name: "L’histoire", summary: "Regards croisés sur l’écriture de l’histoire: morale, politique et mémoire romaine.", authors: ["Salluste", "Tacite", "Saint Augustin"], texts: ["De coniuratione Catilinae", "Agricola", "Annales", "De civitate Dei", "Germania"], difficulty: "Avancé" },
  { id: "attitudes", name: "Attitudes et conceptions humaines", summary: "Portraits moraux, valeurs romaines et tensions sociales.", authors: ["Tacite", "Sénèque", "Juvénal"], texts: ["Annales", "Epistulae ad Lucilium", "Saturae"], difficulty: "Avancé" },
  { id: "femme", name: "La femme", summary: "Représentations féminines entre norme sociale, satire et voix poétique.", authors: ["Tite-Live", "Tibulle", "Juvénal", "Pline le Jeune", "Plaute"], texts: ["Ab Urbe Condita", "Elegiae", "Saturae", "Epistulae", "Aulularia"], difficulty: "Intermédiaire" },
  { id: "quotidien", name: "La vie quotidienne", summary: "Habitudes, sociabilité, correspondance et ville romaine.", authors: ["Sénèque", "Pline le Jeune", "Horace"], texts: ["Epistulae ad Lucilium", "Epistulae", "Sermones"], difficulty: "Facile" },
  { id: "grammaire", name: "Grammaire", summary: "Révisions ciblées: cas, subordonnées, participes, style indirect.", authors: ["Tous"], texts: ["Extraits variés"], difficulty: "Intermédiaire" },
  { id: "realia", name: "Realia", summary: "Culture matérielle, institutions, citoyenneté, espace urbain et militaire.", authors: ["Tous"], texts: ["Corpus au programme"], difficulty: "Facile" },
  { id: "timeline", name: "Ier siècle av. J.-C. / Ier siècle ap. J.-C.", summary: "Repères historiques essentiels pour contextualiser auteurs et œuvres.", authors: ["Cicéron", "Tacite", "Sénèque", "Horace"], texts: ["Corpus historique"], difficulty: "Intermédiaire" }
];

const authorSeed = [
  ["ciceron","Cicéron","Orateur et homme d’État romain, maître de la rhétorique.","Pro Archia poeta","Fin de la République romaine, débats sur citoyenneté et culture.",["Exorde", "Narratio", "Argumentatio", "Peroratio"]],
  ["salluste","Salluste","Historien moraliste qui analyse la crise politique romaine.","De coniuratione Catilinae","Troubles de la République et complot de Catilina.",["Décadence morale", "Ambition", "Exemplarité historique"]],
  ["tacite","Tacite","Historien du pouvoir impérial et des dérives politiques.","Agricola / Annales / Germania","Début de l’Empire, tensions entre liberté et autorité.",["Tyrannie", "Vertu", "Barbares et civilisation"]],
  ["augustin","Saint Augustin","Penseur chrétien, relit Rome à la lumière de la foi.","De civitate Dei","Antiquité tardive, chute et sens de l’histoire.",["Deux cités", "Providence", "Critique du paganisme"]],
  ["tite-live","Tite-Live","Historien des origines romaines et de la vertu civique.","Ab Urbe Condita","Époque augustéenne et mémoire de Rome.",["Mos maiorum", "Exemples féminins", "Patriotisme"]],
  ["tibulle","Tibulle","Poète élégiaque de l’amour et de l’intériorité.","Elegiae","Pax Augusta et poésie intime.",["Amour", "Sensibilité", "Contraste guerre/paix"]],
  ["juvenal","Juvénal","Satiriste mordant des mœurs urbaines.","Saturae","Rome impériale, inégalités et corruption.",["Satire sociale", "Indignation", "Caricature"]],
  ["pline","Pline le Jeune","Épistolier qui documente la vie civique.","Epistulae","Administration impériale et société cultivée.",["Observation", "Éthique", "Vie quotidienne"]],
  ["plaute","Plaute","Dramaturge comique de la République romaine.","Aulularia","Théâtre populaire et types sociaux.",["Comique", "Avarice", "Masques"]],
  ["seneque","Sénèque","Philosophe stoïcien, conseiller impérial.","Epistulae ad Lucilium","Stoïcisme dans un monde politique instable.",["Maîtrise de soi", "Temps", "Humanitas"]],
  ["martial","martial","Maître de l’épigramme, bref et percutant.","Epigrammata","Rome flavienne et vie urbaine.",["Pointe", "Portrait social", "Ironie"]],
  ["horace","Horace","Poète augustéen, équilibre et lucidité.","Sermones / Satires","Consolidation du principat d’Auguste.",["Juste milieu", "Observation sociale", "Autodérision"]]
] as const;

export const authors: Author[] = authorSeed.map((a)=>({id:a[0],name:a[1],bio:a[2],work:a[3],context:a[4],ideas:[...a[5]],quiz:{question:`Quelle œuvre de ${a[1]} est au programme ?`,options:["Aeneis",a[3],"Métamorphoses","Bellum Gallicum"],answer:1,explanation:`Au programme: ${a[3]}.`}}));

const textSeed = [
  ["pro-archia","Pro Archia poeta","Cicéron","L’éloquence","§1-4a; §4b-7; §8-11; §12-30; §31-32","Plaidoyer en faveur du poète Archias, défense de la culture et de la citoyenneté.","Savoir nommer les parties du discours et les arguments extra causam.",["Rhétorique", "Citoyenneté", "Humanités"]],
  ["catilina","De coniuratione Catilinae","Salluste","L’histoire","§1-4","Lecture morale de la conspiration de Catilina.","Lien entre crise politique et décadence morale.",["Historiographie", "Morale", "République"]],
  ["agricola","Agricola","Tacite","L’histoire","§1-4","Éloge biographique et critique implicite du pouvoir.","Comprendre l’art du portrait chez Tacite.",["Biographie", "Pouvoir", "Style concis"]],
  ["annales","Annales","Tacite","La femme","4,31-32 et 12, lxviii-lxix","Récits de cour, politique impériale et figures féminines.","Repérer ironie tacitienne et enjeux du principat.",["Empire", "Genre", "Manipulation politique"]],
  ["civitate","De civitate Dei","Saint Augustin","L’histoire","V, 21-22","Confrontation entre cité terrestre et cité de Dieu.","Différencier histoire providence et histoire politique.",["Christianisme", "Philosophie", "Histoire"]],
  ["germania","Germania","Tacite","L’histoire","19-21","Tableau des mœurs germaniques comme miroir de Rome.","Savoir expliquer l’opposition Rome/barbares.",["Ethnographie", "Altérité", "Critique sociale"]],
  ["avc","Ab Urbe Condita","Tite-Live","La femme","2,13,6-11 et 34,2,8-14; 14,1-2","Exempla féminins dans la mémoire romaine.","Identifier la fonction morale des récits.",["Exemplum", "Vertu", "Tradition"]],
  ["elegiae","Elegiae","Tibulle","La femme","3,8,1-24","Registre élégiaque et représentation amoureuse.","Retenir les codes de l’élégie.",["Poésie", "Amour", "Subjectivité"]],
  ["saturae","Saturae","Juvénal","La femme","4,434-455","Satire des mœurs, effet d’exagération.","Comprendre les mécanismes satiriques.",["Satire", "Rhétorique", "Critique morale"]],
  ["epistulae-pline","Epistulae","Pline le Jeune","La femme","3,16; 8,5; 8,16; 9,6","Correspondance cultivée et société romaine.","Identifier les codes épistolaires.",["Épistolaire", "Société", "Éthique"]],
  ["aulularia","Aulularia","Plaute","La femme","Acte IV, scène 1, 587-602","Comédie de l’avarice et dynamique scénique.","Repérer procédés comiques et types.",["Théâtre", "Comique", "Personnages-types"]],
  ["lucilium","Epistulae ad Lucilium","Sénèque","Vie quotidienne","47,1-6; 10-13; 16-19 et lettre 2","Réflexion stoïcienne sur les relations humaines et le temps.","Savoir relier philosophie et pratique quotidienne.",["Stoïcisme", "Morale", "Temps"]],
  ["epigrammata","Epigrammata","Martial","Attitudes et conceptions humaines","1,88; 2,66; 5,54","Épigrammes brèves à chute critique.","Analyser la pointe finale.",["Ironie", "Brièveté", "Ville"]],
  ["sermones","Sermones / Satires","Horace","Vie quotidienne","1,9","Promenade satirique dans Rome.","Retenir ton conversationnel et distance critique.",["Satire", "Urbain", "Persona"]]
 ] as const;

export const texts: TextItem[] = textSeed.map((t)=>({id:t[0],title:t[1],author:t[2],theme:t[3],passages:t[4],summary:t[5],retain:t[6],notions:[...t[7]]}));

export const timeline = [
  { year: "63 av. J.-C.", event: "Conjuration de Catilina (Salluste)" },
  { year: "44 av. J.-C.", event: "Assassinat de César" },
  { year: "27 av. J.-C.", event: "Début du principat d’Auguste" },
  { year: "14 ap. J.-C.", event: "Mort d’Auguste" },
  { year: "64 ap. J.-C.", event: "Grand incendie de Rome" },
  { year: "79 ap. J.-C.", event: "Éruption du Vésuve (évoquée chez Pline)" }
];
