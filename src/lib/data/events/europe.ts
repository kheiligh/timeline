import type { TimelineEvent } from '../../types';

export const europeEvents: TimelineEvent[] = [
	{
		id: 'europe-atapuerca',
		title: 'First Europeans at Atapuerca',
		year: -1_200_000,
		description:
			"A jawbone from Sima del Elefante in northern Spain's Atapuerca hills is over a million years old — among the oldest human remains in Western Europe.",
		significance:
			"Atapuerca pushed back human presence in Europe by hundreds of thousands of years and has yielded one of the richest fossil records anywhere.",
		wikipediaSlug: 'Atapuerca_Mountains',
		tags: ['prehistory', 'evolution', 'migration']
	},
	{
		id: 'europe-happisburgh',
		title: 'Happisburgh Footprints',
		year: -850_000,
		description:
			"Storm erosion on the Norfolk coast briefly exposed footprints left by a small group of adults and children walking along an estuary at least 850,000 years ago. The tide destroyed them within weeks.",
		significance:
			"The oldest human footprints outside Africa show early humans surviving in a cold northern climate far earlier than once believed.",
		wikipediaSlug: 'Happisburgh_footprints',
		tags: ['prehistory', 'migration']
	},
	{
		id: 'europe-neanderthals',
		title: 'Neanderthals Emerge',
		year: -400_000,
		description:
			"Neanderthals evolved in Europe and western Asia, adapted to Ice Age cold with stocky bodies and large brains. They buried their dead, used pigments, and made complex tools.",
		significance:
			"Neanderthals were not brutes but a parallel humanity. Most people of non-African descent carry about 2% Neanderthal DNA.",
		wikipediaSlug: 'Neanderthal',
		tags: ['prehistory', 'evolution']
	},
	{
		id: 'europe-schoningen',
		title: 'Schöningen Spears',
		year: -300_000,
		description:
			"Wooden throwing spears, carefully shaped like modern javelins, were found alongside butchered horses in a German coal mine.",
		significance:
			"These are the oldest complete hunting weapons ever found — proof that pre-modern humans planned cooperative big-game hunts.",
		wikipediaSlug: 'Schöningen_spears',
		tags: ['prehistory', 'technology']
	},
	{
		id: 'europe-sapiens-arrive',
		title: 'Homo Sapiens Reach Europe',
		year: -45_000,
		description:
			"Modern humans entered Europe from the southeast; remains from Bacho Kiro cave in Bulgaria date to about 45,000 years ago. For several thousand years they shared the continent with Neanderthals.",
		significance:
			"The meeting of two human species in Europe ended with only one surviving — and carrying a bit of the other in its genes.",
		wikipediaSlug: 'Cro-Magnon',
		tags: ['prehistory', 'migration'],
		related: ['africa-out-of-africa']
	},
	{
		id: 'europe-neanderthal-extinction',
		title: 'Last Neanderthals',
		year: -40_000,
		description:
			"Neanderthals disappeared from most of Europe around 40,000 years ago, shortly after modern humans arrived. Competition, climate swings, small populations, and interbreeding all likely played a role.",
		significance:
			"For the first time, Homo sapiens was effectively alone. Why we survived and they didn't remains one of the great questions of prehistory.",
		wikipediaSlug: 'Neanderthal_extinction',
		tags: ['prehistory', 'evolution', 'collapse']
	},
	{
		id: 'europe-hohle-fels',
		title: 'Venus of Hohle Fels and the First Flutes',
		year: -38_000,
		description:
			"In southwestern Germany's caves, people carved a mammoth-ivory female figurine and made flutes from bird bone and ivory — the oldest known musical instruments.",
		significance:
			"Art and music appear together in the earliest European sites: they were essential, not luxuries, to the people who carried them.",
		wikipediaSlug: 'Venus_of_Hohle_Fels',
		tags: ['art', 'music', 'prehistory']
	},
	{
		id: 'europe-chauvet',
		title: 'Chauvet Cave Paintings',
		year: -36_000,
		description:
			"The Chauvet Cave in France contains some of the oldest and most sophisticated cave paintings known, depicting lions, horses, mammoths, and rhinoceroses with remarkable artistic skill.",
		significance:
			"Chauvet revealed that complex artistic expression existed 36,000 years ago, challenging assumptions that art developed gradually from primitive beginnings.",
		wikipediaSlug: 'Chauvet_Cave',
		tags: ['art', 'prehistory', 'culture'],
		related: ['asia-sulawesi-art']
	},
	{
		id: 'europe-lgm',
		title: 'Last Glacial Maximum',
		year: -24_000,
		description:
			"Ice sheets covered Scandinavia and much of Britain. People retreated to refuges in Iberia, southern France, Italy, and the Balkans, re-expanding north as the ice melted.",
		significance:
			"The peak of the Ice Age shaped Europe's population map; many modern Europeans descend partly from people who sheltered in these refuges.",
		wikipediaSlug: 'Last_Glacial_Maximum',
		tags: ['environment', 'prehistory', 'migration']
	},
	{
		id: 'europe-lascaux',
		title: 'Lascaux',
		year: -17_000,
		description:
			"The painted caves of Lascaux in southwestern France contain around 600 paintings of horses, aurochs, and stags. Discovered by teenagers in 1940, they were closed to the public in 1963 because visitors' breath was damaging them.",
		significance:
			"Lascaux is the 'Sistine Chapel of prehistory.' Its closure is an early lesson in how tourism can destroy what it celebrates.",
		wikipediaSlug: 'Lascaux',
		tags: ['art', 'prehistory']
	},
	{
		id: 'europe-doggerland',
		title: 'Doggerland Drowns',
		year: -6200,
		description:
			"Rising seas after the Ice Age flooded Doggerland, a low plain connecting Britain to mainland Europe. A giant submarine landslide off Norway, the Storegga Slide, sent a tsunami across the remnant.",
		significance:
			"Britain became an island — and Doggerland is a reminder that sea-level rise has erased whole homelands before.",
		wikipediaSlug: 'Doggerland',
		tags: ['environment', 'prehistory']
	},
	{
		id: 'europe-neolithic-farmers',
		title: 'Farmers Arrive from Anatolia',
		year: -6500,
		description:
			"Farmers descended from Anatolian populations spread into Greece and then across Europe, bringing wheat, barley, sheep, and goats. Ancient DNA shows they largely replaced local hunter-gatherers.",
		significance:
			"Farming came to Europe with migrants, not just as an idea — one of the major ancestral streams that make up modern Europeans.",
		wikipediaSlug: 'Early_European_Farmers',
		tags: ['agriculture', 'migration', 'prehistory'],
		related: ['asia-agriculture']
	},
	{
		id: 'europe-varna',
		title: 'Varna Gold',
		year: -4500,
		description:
			"A cemetery near Varna, Bulgaria, contains the oldest worked gold in the world. One grave held more gold than all other contemporary sites in the world combined.",
		significance:
			"Varna is the earliest clear evidence of extreme wealth inequality — one man buried in splendor, most with little or nothing.",
		wikipediaSlug: 'Varna_Necropolis',
		tags: ['economics', 'society', 'prehistory']
	},
	{
		id: 'europe-otzi',
		title: 'Ötzi the Iceman',
		year: -3300,
		description:
			"A man died high in the Alps with an arrow in his shoulder and was preserved in ice for 5,300 years. He carried a copper axe, a bow, medicinal fungus, and had 61 tattoos.",
		significance:
			"Ötzi is a snapshot of a single Copper Age life — and the oldest murder victim ever studied in such forensic detail.",
		wikipediaSlug: 'Ötzi',
		tags: ['prehistory', 'technology']
	},
	{
		id: 'europe-yamnaya',
		title: 'Yamnaya Steppe Migrations',
		year: -3000,
		description:
			"Herders from the Pontic–Caspian steppe, riding horses and driving wagons, expanded west into Europe. Ancient DNA shows a major population turnover that followed.",
		significance:
			"The Yamnaya are the most likely source of the Indo-European languages — spoken today by nearly half of humanity, from English to Hindi.",
		wikipediaSlug: 'Yamnaya_culture',
		tags: ['migration', 'prehistory'],
		related: ['asia-sintashta']
	},
	{
		id: 'europe-stonehenge',
		title: 'Stonehenge Completed',
		year: -2500,
		description:
			"Stonehenge in England was built in multiple phases over 1,500 years. The final sarsen circle, aligned to the summer solstice sunrise, was completed around 2500 BCE.",
		significance:
			"Stonehenge reveals sophisticated astronomical knowledge and large-scale social organization in Neolithic Britain — before writing existed there.",
		wikipediaSlug: 'Stonehenge',
		tags: ['architecture', 'prehistory', 'astronomy'],
		related: ['africa-nabta-playa']
	},
	{
		id: 'europe-knossos',
		title: 'Minoan Palace of Knossos',
		year: -2000,
		description:
			"On Crete, the Minoans built palace complexes like Knossos, with plumbing, colorful frescoes, and storerooms for olive oil and wine. Their seaborne trade spanned the Aegean.",
		significance:
			"The Minoans were Europe's first advanced civilization, and their script, Linear A, remains undeciphered.",
		wikipediaSlug: 'Knossos',
		tags: ['civilization', 'architecture', 'trade']
	},
	{
		id: 'europe-thera',
		title: 'Thera Eruption',
		year: -1600,
		description:
			"The volcanic island of Thera (Santorini) exploded in one of the largest eruptions in human history, burying the Minoan town of Akrotiri under ash.",
		significance:
			"The eruption weakened Minoan civilization and may have inspired the legend of Atlantis.",
		wikipediaSlug: 'Minoan_eruption',
		tags: ['environment', 'collapse']
	},
	{
		id: 'europe-mycenaean-collapse',
		title: 'Fall of Mycenaean Greece',
		year: -1200,
		description:
			"The Mycenaean palaces of Greece — the world of Homer's heroes — were destroyed or abandoned. Writing disappeared from Greece for about 400 years.",
		significance:
			"Greece's 'Dark Age' shows how a literate civilization can forget how to write. What eventually emerged — the polis — was something new.",
		wikipediaSlug: 'Mycenaean_Greece',
		tags: ['collapse', 'civilization', 'greece'],
		related: ['asia-bronze-age-collapse', 'africa-sea-peoples']
	},
	{
		id: 'europe-hallstatt',
		title: 'Celtic Iron Age',
		year: -800,
		description:
			"Iron-working cultures centered on Hallstatt in Austria spread across central Europe, growing rich on salt mining. Their successors, the La Tène Celts, ranged from Ireland to Anatolia.",
		significance:
			"Celtic Europe was a vibrant, interconnected world — known to us mostly through its enemies' writings, which is why its achievements are underrated.",
		wikipediaSlug: 'Hallstatt_culture',
		tags: ['technology', 'culture', 'trade']
	},
	{
		id: 'europe-greek-alphabet',
		title: 'The Greek Alphabet',
		year: -800,
		description:
			"Greeks adapted the Phoenician alphabet, adding letters for vowels. It was the first writing system to represent every sound of speech.",
		significance:
			"The Greek alphabet led to the Latin and Cyrillic scripts — and made writing simple enough that ordinary citizens could become literate.",
		wikipediaSlug: 'Greek_alphabet',
		tags: ['communication', 'greece'],
		related: ['asia-phoenician-alphabet']
	},
	{
		id: 'europe-olympics',
		title: 'First Olympic Games',
		year: -776,
		description:
			"The first recorded Olympic Games were held in Olympia, Greece, honoring Zeus. Competitors came from across the Greek world, and wars were paused during the games.",
		significance:
			"The Olympics created a shared Greek identity across rival city-states and established the tradition of athletic competition as a peaceful substitute for war.",
		wikipediaSlug: 'Ancient_Olympic_Games',
		tags: ['culture', 'greece', 'sport']
	},
	{
		id: 'europe-homer',
		title: 'Homer: The Iliad and Odyssey',
		year: -750,
		description:
			"The Iliad and the Odyssey, long-performed oral epics about the Trojan War and its aftermath, were written down in their surviving form around the 8th century BCE.",
		significance:
			"Homer's epics are the foundation of Western literature — Greeks learned to read from them, and writers still borrow their plots.",
		wikipediaSlug: 'Homer',
		tags: ['literature', 'culture', 'greece']
	},
	{
		id: 'europe-rome-founded',
		title: 'Founding of Rome',
		year: -753,
		description:
			"According to legend, Romulus founded Rome on the Palatine Hill after killing his twin brother Remus. Archaeology shows villages on the hills coalescing around this time.",
		significance:
			"A small settlement on the Tiber would grow into an empire that shaped Western law, language, religion, and politics.",
		wikipediaSlug: 'Founding_of_Rome',
		tags: ['urban', 'rome']
	},
	{
		id: 'europe-solon',
		title: "Solon's Reforms",
		year: -594,
		description:
			"Elected to resolve a crisis in Athens, Solon cancelled debts, freed people enslaved for debt, and opened political participation based on wealth rather than birth.",
		significance:
			"Solon laid the groundwork for Athenian democracy and the principle that law should protect the poor from the rich.",
		wikipediaSlug: 'Solon',
		tags: ['law', 'politics', 'greece']
	},
	{
		id: 'europe-roman-republic',
		title: 'Roman Republic Founded',
		year: -509,
		description:
			"Romans expelled their last king and created a republic governed by two annually elected consuls and a Senate, with checks designed to prevent any one man from ruling.",
		significance:
			"The Roman Republic inspired the framers of the US Constitution and many republics since — words like 'senate' and 'veto' come from it.",
		wikipediaSlug: 'Roman_Republic',
		tags: ['government', 'rome', 'democracy']
	},
	{
		id: 'europe-athenian-democracy',
		title: 'Athenian Democracy',
		year: -508,
		description:
			"Cleisthenes reorganized Athens so that all male citizens could vote directly in the assembly and serve in offices chosen by lot.",
		significance:
			"Athens created the world's first known democracy. It excluded women, slaves, and foreigners — but it introduced the radical idea of rule by the people.",
		wikipediaSlug: 'Athenian_democracy',
		tags: ['democracy', 'government', 'greece']
	},
	{
		id: 'europe-marathon',
		title: 'Battle of Marathon',
		year: -490,
		description:
			"Athenian citizen-soldiers defeated a Persian invasion force at Marathon. A second invasion was turned back at Salamis and Plataea in 480–479 BCE.",
		significance:
			"Greek victory preserved the independence of the city-states and the experiment in democracy. The modern marathon race commemorates it.",
		wikipediaSlug: 'Battle_of_Marathon',
		tags: ['war', 'greece'],
		related: ['asia-cyrus']
	},
	{
		id: 'europe-parthenon',
		title: 'The Parthenon',
		year: -447,
		description:
			"Under Pericles, Athens built the Parthenon on the Acropolis, partly funded by tribute from its allies. Its sculptures by Phidias set the standard of classical beauty.",
		significance:
			"The Parthenon is the most influential building in Western architecture — and its marbles, removed to London, are at the center of the debate over returning cultural artifacts.",
		wikipediaSlug: 'Parthenon',
		tags: ['architecture', 'art', 'greece']
	},
	{
		id: 'europe-peloponnesian-war',
		title: 'Peloponnesian War',
		year: -431,
		description:
			"Athens and Sparta fought a 27-year war that ended with Athens' defeat. Thucydides chronicled it as a study in power, fear, and self-interest.",
		significance:
			"Thucydides' history is still read in military academies; 'the Thucydides Trap' names the danger when a rising power challenges an established one.",
		wikipediaSlug: 'Peloponnesian_War',
		tags: ['war', 'greece']
	},
	{
		id: 'europe-hippocrates',
		title: 'Hippocratic Medicine',
		year: -400,
		description:
			"Hippocrates of Kos and his followers argued that diseases have natural causes, not divine ones, and emphasized careful observation of patients.",
		significance:
			"The Hippocratic tradition made medicine a discipline of evidence. Doctors still take an oath named for him.",
		wikipediaSlug: 'Hippocrates',
		tags: ['medicine', 'science', 'greece']
	},
	{
		id: 'europe-socrates',
		title: 'Trial of Socrates',
		year: -399,
		description:
			"Athens put the philosopher Socrates on trial for impiety and corrupting the young. He refused to flee and drank hemlock.",
		significance:
			"Socrates' death made him a martyr for free inquiry. His student Plato and Plato's student Aristotle built the foundations of Western philosophy.",
		wikipediaSlug: 'Trial_of_Socrates',
		tags: ['philosophy', 'greece', 'law']
	},
	{
		id: 'europe-aristotle',
		title: "Aristotle's Lyceum",
		year: -335,
		description:
			"Aristotle founded the Lyceum in Athens, where he wrote on logic, biology, physics, ethics, politics, and poetry — systematizing nearly every field of knowledge.",
		significance:
			"Aristotle dominated Western and Islamic thought for nearly 2,000 years; his logic and classifications still underpin science.",
		wikipediaSlug: 'Aristotle',
		tags: ['philosophy', 'science', 'education']
	},
	{
		id: 'europe-alexander',
		title: 'Alexander the Great',
		year: -334,
		description:
			"Alexander of Macedon crossed into Asia and, in a decade, conquered the Persian Empire, Egypt, and lands to the Indus River. He died at 32 in Babylon.",
		significance:
			"Alexander spread Greek culture from Egypt to Afghanistan, creating the Hellenistic world — a fusion of East and West that shaped Rome and early Christianity.",
		wikipediaSlug: 'Alexander_the_Great',
		tags: ['empire', 'war', 'culture'],
		related: ['africa-alexandria', 'asia-mauryan']
	},
	{
		id: 'europe-appian-way',
		title: 'The Appian Way',
		year: -312,
		description:
			"Rome began building the Via Appia, a paved road south from Rome. Eventually some 80,000 km of paved roads linked the empire.",
		significance:
			"Roman roads moved armies, trade, and ideas — including Christianity. Many modern European routes still follow them.",
		wikipediaSlug: 'Appian_Way',
		tags: ['technology', 'rome']
	},
	{
		id: 'europe-punic-wars',
		title: 'Hannibal Crosses the Alps',
		year: -218,
		description:
			"The Carthaginian general Hannibal led an army with war elephants over the Alps into Italy and inflicted crushing defeats on Rome, including Cannae. Rome refused to surrender.",
		significance:
			"Rome's survival and eventual victory over Carthage made it master of the western Mediterranean — and Cannae is still studied as the perfect battle.",
		wikipediaSlug: 'Second_Punic_War',
		tags: ['war', 'rome'],
		related: ['africa-carthage', 'africa-carthage-destroyed']
	},
	{
		id: 'europe-archimedes',
		title: 'Death of Archimedes',
		year: -212,
		description:
			"Archimedes of Syracuse — who discovered the principle of buoyancy, approximated pi, and designed war machines — was killed by a Roman soldier when the city fell.",
		significance:
			"Archimedes came within reach of calculus 1,800 years before Newton. His death is a symbol of knowledge destroyed by violence.",
		wikipediaSlug: 'Archimedes',
		tags: ['science', 'technology']
	},
	{
		id: 'europe-antikythera',
		title: 'Antikythera Mechanism',
		year: -100,
		description:
			"A bronze geared device recovered from a shipwreck off Greece could predict eclipses and the positions of the sun, moon, and probably planets.",
		significance:
			"The world's oldest known analog computer is so complex that nothing like it appears again for over a thousand years.",
		wikipediaSlug: 'Antikythera_mechanism',
		tags: ['technology', 'science', 'astronomy']
	},
	{
		id: 'europe-spartacus',
		title: 'Spartacus Revolt',
		year: -73,
		description:
			"The gladiator Spartacus led a slave uprising that grew to perhaps 70,000 people and defeated several Roman armies before being crushed. 6,000 captives were crucified along the Appian Way.",
		significance:
			"Spartacus became an enduring symbol of resistance to oppression, invoked by revolutionaries from Haiti to Marx.",
		wikipediaSlug: 'Third_Servile_War',
		tags: ['slavery', 'war', 'rome']
	},
	{
		id: 'europe-caesar',
		title: 'Assassination of Julius Caesar',
		year: -44,
		description:
			"After winning a civil war and being named dictator for life, Julius Caesar was stabbed to death by senators on the Ides of March.",
		significance:
			"The assassins meant to save the Republic, but they destroyed it — triggering the civil wars that made Caesar's heir Octavian the first emperor.",
		wikipediaSlug: 'Assassination_of_Julius_Caesar',
		tags: ['politics', 'rome']
	},
	{
		id: 'europe-rome-empire',
		title: 'Roman Empire Founded',
		year: -27,
		description:
			"Octavian became Augustus, the first Roman emperor, ending the Roman Republic. His reign began the Pax Romana — 200 years of relative peace across the Mediterranean.",
		significance:
			"The Roman Empire laid the legal, linguistic, and architectural foundations of Western civilization, influencing everything from law to Romance languages.",
		wikipediaSlug: 'Augustus',
		tags: ['empire', 'government', 'rome'],
		related: ['africa-cleopatra']
	},
	{
		id: 'europe-teutoburg',
		title: 'Battle of the Teutoburg Forest',
		year: 9,
		description:
			"Germanic tribes led by Arminius ambushed and annihilated three Roman legions. Augustus reportedly cried, \"Varus, give me back my legions!\"",
		significance:
			"Rome never conquered Germania. The Rhine became a lasting border between Latin and Germanic Europe.",
		wikipediaSlug: 'Battle_of_the_Teutoburg_Forest',
		tags: ['war', 'rome']
	},
	{
		id: 'europe-pompeii',
		title: 'Vesuvius Buries Pompeii',
		year: 79,
		description:
			"Mount Vesuvius erupted, burying Pompeii and Herculaneum under ash and pyroclastic flows. Pliny the Younger wrote an eyewitness account of his uncle's death in the rescue effort.",
		significance:
			"Pompeii is a frozen moment of everyday Roman life — graffiti, bakeries, and bodies — and the birthplace of modern archaeology.",
		wikipediaSlug: 'Eruption_of_Mount_Vesuvius_in_79_AD',
		tags: ['environment', 'rome']
	},
	{
		id: 'europe-trajan',
		title: 'Rome at Its Greatest Extent',
		year: 117,
		description:
			"Under Trajan, the Roman Empire reached its greatest size — from Scotland to Mesopotamia — governing perhaps 60–70 million people.",
		significance:
			"At its height Rome held about a fifth to a quarter of humanity. Every empire since has measured itself against it.",
		wikipediaSlug: 'Trajan',
		tags: ['empire', 'rome']
	},
	{
		id: 'europe-hadrians-wall',
		title: "Hadrian's Wall",
		year: 122,
		description:
			"Emperor Hadrian ordered a 117-km wall across northern Britain, marking a shift from expansion to defending fixed frontiers.",
		significance:
			"Rome stopped growing and started guarding. The wall marks the moment the empire defined its limits.",
		wikipediaSlug: "Hadrian's_Wall",
		tags: ['architecture', 'rome', 'military']
	},
	{
		id: 'europe-pantheon',
		title: 'The Pantheon',
		year: 126,
		description:
			"The rebuilt Pantheon in Rome was crowned with an unreinforced concrete dome 43 meters wide, open to the sky at its center.",
		significance:
			"It is still the world's largest unreinforced concrete dome after nearly 1,900 years — proof of the sophistication of Roman engineering.",
		wikipediaSlug: 'Pantheon,_Rome',
		tags: ['architecture', 'technology', 'rome']
	},
	{
		id: 'europe-antonine-plague',
		title: 'Antonine Plague',
		year: 165,
		description:
			"Soldiers returning from campaigns in Mesopotamia brought an epidemic — probably smallpox — that ravaged the Roman Empire for over a decade, killing millions.",
		significance:
			"The first great pandemic of the connected Afro-Eurasian world, it marked the end of Rome's golden age.",
		wikipediaSlug: 'Antonine_Plague',
		tags: ['pandemic', 'rome'],
		related: ['asia-silk-road']
	},
	{
		id: 'europe-caracalla',
		title: 'Citizenship for All Free Romans',
		year: 212,
		description:
			"Emperor Caracalla's edict granted Roman citizenship to nearly all free men in the empire — probably to expand the tax base.",
		significance:
			"An empire of conquered peoples became a single community of citizens: one of the largest extensions of citizenship before modern times.",
		wikipediaSlug: 'Constitutio_Antoniniana',
		tags: ['law', 'rome', 'government']
	},
	{
		id: 'europe-crisis-third-century',
		title: 'Crisis of the Third Century',
		year: 235,
		description:
			"For 50 years the Roman Empire nearly fell apart: over 20 emperors, mostly murdered; invasions; plague; and currency debasement that produced runaway inflation.",
		significance:
			"Rome survived only by transforming itself into a more militarized, bureaucratic state — the empire that would become Christian and Byzantine.",
		wikipediaSlug: 'Crisis_of_the_Third_Century',
		tags: ['collapse', 'economics', 'rome']
	},
	{
		id: 'europe-constantine',
		title: 'Edict of Milan',
		year: 313,
		description:
			"Emperor Constantine, who credited the Christian God for his victory at the Milvian Bridge, and his co-emperor Licinius granted religious tolerance to Christians.",
		significance:
			"A persecuted minority became the favored religion of the Roman state — the most consequential conversion in European history.",
		wikipediaSlug: 'Edict_of_Milan',
		tags: ['religion', 'rome'],
		related: ['asia-crucifixion', 'africa-aksum']
	},
	{
		id: 'europe-nicaea',
		title: 'Council of Nicaea',
		year: 325,
		description:
			"Constantine convened Christian bishops to settle disputes over the nature of Christ. They produced the Nicene Creed, still recited in churches worldwide.",
		significance:
			"Nicaea set the precedent of emperors defining doctrine and church councils deciding orthodoxy — fusing religion and state for a millennium.",
		wikipediaSlug: 'First_Council_of_Nicaea',
		tags: ['religion', 'politics']
	},
	{
		id: 'europe-constantinople',
		title: 'Constantinople Founded',
		year: 330,
		description:
			"Constantine refounded the Greek city of Byzantium as Constantinople, a new Christian capital at the crossroads of Europe and Asia.",
		significance:
			"Constantinople would be the largest and richest city in Europe for most of the next thousand years, preserving Roman law and Greek learning.",
		wikipediaSlug: 'Constantinople',
		tags: ['urban', 'empire', 'religion'],
		related: ['asia-fall-of-constantinople']
	},
	{
		id: 'europe-adrianople',
		title: 'Battle of Adrianople',
		year: 378,
		description:
			"Gothic refugees, fleeing the Huns and mistreated by Roman officials, rebelled and destroyed a Roman army, killing Emperor Valens.",
		significance:
			"Adrianople began a century of migrations and invasions that would end the Western Roman Empire.",
		wikipediaSlug: 'Battle_of_Adrianople',
		tags: ['war', 'migration', 'rome']
	},
	{
		id: 'europe-thessalonica',
		title: 'Christianity Becomes State Religion',
		year: 380,
		description:
			"Emperor Theodosius I declared Nicene Christianity the official religion of the Roman Empire. Pagan sacrifices were soon banned and temples closed.",
		significance:
			"Within 70 years Christianity went from persecuted to compulsory — and the persecuted became persecutors.",
		wikipediaSlug: 'Edict_of_Thessalonica',
		tags: ['religion', 'law', 'rome']
	},
	{
		id: 'europe-sack-of-rome',
		title: 'Visigoths Sack Rome',
		year: 410,
		description:
			"Alaric's Visigoths sacked Rome — the first time in 800 years the city had fallen to a foreign enemy.",
		significance:
			"The sack shocked the Roman world; St. Jerome wrote that \"the city which had taken the whole world was itself taken.\"",
		wikipediaSlug: 'Sack_of_Rome_(410)',
		tags: ['war', 'collapse', 'rome'],
		related: ['africa-augustine']
	},
	{
		id: 'europe-attila',
		title: 'Attila the Hun',
		year: 451,
		description:
			"Attila's Huns invaded Gaul and were checked at the Battle of the Catalaunian Plains by a Roman-Gothic alliance. Attila turned to Italy the next year but withdrew.",
		significance:
			"The Hun invasions forced massive movements of Germanic peoples into Roman territory, accelerating the empire's fragmentation.",
		wikipediaSlug: 'Attila',
		tags: ['war', 'migration']
	},
	{
		id: 'europe-fall-of-rome',
		title: 'Fall of Western Rome',
		year: 476,
		description:
			"Germanic chieftain Odoacer deposed Romulus Augustulus, the last Western Roman Emperor. The Eastern Roman (Byzantine) Empire continued for another thousand years.",
		significance:
			"The fall of Rome is history's great cautionary tale — showing that even the most powerful civilizations can collapse through internal decay and external pressure.",
		wikipediaSlug: 'Fall_of_the_Western_Roman_Empire',
		tags: ['empire', 'rome', 'collapse'],
		related: ['africa-vandals']
	},
	{
		id: 'europe-benedict',
		title: 'Rule of Saint Benedict',
		year: 529,
		description:
			"Benedict of Nursia founded Monte Cassino and wrote a rule for monastic life balancing prayer, work, and study.",
		significance:
			"Benedictine monasteries preserved classical texts, pioneered farming techniques, and kept literacy alive in Western Europe through the early Middle Ages.",
		wikipediaSlug: 'Rule_of_Saint_Benedict',
		tags: ['religion', 'education']
	},
	{
		id: 'europe-justinian-code',
		title: 'Code of Justinian',
		year: 529,
		description:
			"Byzantine Emperor Justinian ordered Roman law collected and systematized into the Corpus Juris Civilis.",
		significance:
			"Rediscovered in 11th-century Italy, Justinian's code is the basis of civil law in most of Europe and Latin America today.",
		wikipediaSlug: 'Corpus_Juris_Civilis',
		tags: ['law', 'government']
	},
	{
		id: 'europe-volcanic-winter-536',
		title: 'The Worst Year to Be Alive',
		year: 536,
		description:
			"Volcanic eruptions in 536 and 540 shrouded the Northern Hemisphere in a dust veil. Summers turned cold, crops failed from Ireland to China, and the cold lasted over a decade.",
		significance:
			"This Late Antique Little Ice Age, followed by plague, helped end the ancient world. Some historians nominate 536 as the worst year in recorded history.",
		wikipediaSlug: 'Volcanic_winter_of_536',
		tags: ['environment', 'collapse']
	},
	{
		id: 'europe-hagia-sophia',
		title: 'Hagia Sophia',
		year: 537,
		description:
			"Justinian's great church in Constantinople was crowned with a vast dome that seemed to float on light. It was the largest building in the world for nearly a thousand years.",
		significance:
			"Hagia Sophia redefined sacred architecture — later a mosque, a museum, and a mosque again, it embodies the history of the city itself.",
		wikipediaSlug: 'Hagia_Sophia',
		tags: ['architecture', 'religion']
	},
	{
		id: 'europe-justinian-plague',
		title: 'Plague of Justinian',
		year: 541,
		description:
			"Bubonic plague arrived in Constantinople via Egypt, killing thousands a day at its peak. Waves returned for two centuries.",
		significance:
			"The first known pandemic of Yersinia pestis may have killed a large fraction of the Mediterranean population and wrecked Justinian's plan to restore the Roman Empire.",
		wikipediaSlug: 'Plague_of_Justinian',
		tags: ['pandemic', 'collapse'],
		related: ['europe-black-death']
	},
	{
		id: 'europe-byzantine-silk',
		title: 'Silkworms Smuggled to Byzantium',
		year: 552,
		description:
			"According to Procopius, monks smuggled silkworm eggs out of Central Asia in hollow canes to Constantinople, breaking China's centuries-old monopoly.",
		significance:
			"This is one of history's most famous cases of industrial espionage. Byzantine silk became a state monopoly and a tool of diplomacy.",
		wikipediaSlug: 'Byzantine_silk',
		tags: ['trade', 'technology', 'economics'],
		related: ['asia-silk-road']
	},
	{
		id: 'europe-al-andalus',
		title: 'Muslim Conquest of Iberia',
		year: 711,
		description:
			"An Umayyad army under Tariq ibn Ziyad crossed from North Africa and conquered most of the Iberian Peninsula within a few years. Gibraltar is named after him.",
		significance:
			"Al-Andalus became a center of learning where Muslim, Jewish, and Christian scholars transmitted classical and Arabic knowledge into Europe.",
		wikipediaSlug: 'Al-Andalus',
		tags: ['religion', 'empire', 'culture'],
		related: ['asia-hijra', 'africa-arab-conquest-egypt', 'africa-almoravids']
	},
	{
		id: 'europe-tours',
		title: 'Battle of Tours',
		year: 732,
		description:
			"Frankish leader Charles Martel defeated an Umayyad raiding army near Tours and Poitiers in France.",
		significance:
			"Long mythologized as saving Christian Europe, Tours more concretely established the power of the Carolingian family — Charlemagne's dynasty.",
		wikipediaSlug: 'Battle_of_Tours',
		tags: ['war', 'religion']
	},
	{
		id: 'europe-viking-age',
		title: 'The Viking Age Begins',
		year: 793,
		description:
			"Norse raiders sacked the monastery of Lindisfarne in England. Over the next three centuries Vikings raided, traded, and settled from Baghdad to Newfoundland.",
		significance:
			"Vikings founded Dublin, shaped Normandy and Russia, and reached North America 500 years before Columbus.",
		wikipediaSlug: 'Viking_Age',
		tags: ['war', 'trade', 'exploration', 'migration'],
		related: ['na-lanse-aux-meadows', 'na-norse-greenland']
	},
	{
		id: 'europe-charlemagne',
		title: 'Charlemagne Crowned Emperor',
		year: 800,
		description:
			"On Christmas Day, Pope Leo III crowned the Frankish king Charlemagne Emperor of the Romans. His empire covered much of Western Europe.",
		significance:
			"Charlemagne is called the 'Father of Europe.' His court revived learning, and his empire's split prefigured France and Germany.",
		wikipediaSlug: 'Charlemagne',
		tags: ['empire', 'religion', 'politics']
	},
	{
		id: 'europe-book-of-kells',
		title: 'The Book of Kells',
		year: 800,
		description:
			"Monks in Ireland or Scotland created the Book of Kells, an illuminated Gospel manuscript whose intricate spirals and knotwork are among the masterpieces of medieval art.",
		significance:
			"Irish monasteries kept Latin learning alive on the edge of Europe and sent missionaries to re-Christianize the continent.",
		wikipediaSlug: 'Book_of_Kells',
		tags: ['art', 'religion']
	},
	{
		id: 'europe-althing',
		title: 'Iceland Founds the Althing',
		year: 930,
		description:
			"Norse settlers in Iceland established the Althing, an open-air assembly where chieftains made laws and settled disputes.",
		significance:
			"The Althing is often called the world's oldest surviving parliament — a democratic tradition without kings.",
		wikipediaSlug: 'Althing',
		tags: ['democracy', 'government', 'law']
	},
	{
		id: 'europe-holy-roman-empire',
		title: 'Holy Roman Empire',
		year: 962,
		description:
			"Otto I of Germany was crowned emperor in Rome, founding what became the Holy Roman Empire, a loose federation of German and Italian states.",
		significance:
			"The empire lasted until 1806 — 'neither holy, nor Roman, nor an empire,' as Voltaire quipped — and its fragmentation shaped German politics for centuries.",
		wikipediaSlug: 'Holy_Roman_Empire',
		tags: ['empire', 'politics', 'religion']
	},
	{
		id: 'europe-kievan-rus',
		title: 'Baptism of Kievan Rus',
		year: 988,
		description:
			"Grand Prince Vladimir of Kyiv converted to Orthodox Christianity and had his people baptized in the Dnieper River.",
		significance:
			"Choosing Byzantine Christianity tied Russia, Ukraine, and Belarus to the Orthodox world, shaping their alphabet, art, and identity — and today's contested claims to that heritage.",
		wikipediaSlug: "Christianization_of_Kievan_Rus'",
		tags: ['religion', 'politics']
	},
	{
		id: 'europe-schism',
		title: 'Great Schism',
		year: 1054,
		description:
			"The Pope's legate and the Patriarch of Constantinople excommunicated each other, formalizing the split between Catholic and Orthodox Christianity.",
		significance:
			"The schism divided Christian Europe along a line that still roughly marks cultural divisions today.",
		wikipediaSlug: 'East–West_Schism',
		tags: ['religion', 'politics']
	},
	{
		id: 'europe-norman-conquest',
		title: 'Norman Conquest of England',
		year: 1066,
		description:
			"William of Normandy defeated King Harold at Hastings and seized England. The Normans replaced the English aristocracy and recorded the country in the Domesday Book.",
		significance:
			"The conquest transformed the English language — mixing French into Old English — and tied England to continental politics for centuries.",
		wikipediaSlug: 'Norman_Conquest',
		tags: ['war', 'politics', 'culture']
	},
	{
		id: 'europe-bologna',
		title: 'University of Bologna',
		year: 1088,
		description:
			"Students hired masters to teach them law in Bologna, forming a guild that became Europe's first university.",
		significance:
			"The university — a self-governing community of scholars granting degrees — became one of Europe's most successful exports.",
		wikipediaSlug: 'University_of_Bologna',
		tags: ['education', 'law']
	},
	{
		id: 'europe-first-crusade',
		title: 'The First Crusade',
		year: 1096,
		description:
			"Answering Pope Urban II's call, armies of knights marched to the Holy Land, massacring Jews in the Rhineland on the way. In 1099 they took Jerusalem and slaughtered its inhabitants.",
		significance:
			"The Crusades shaped Christian–Muslim relations for centuries and reopened Mediterranean trade that enriched Italian cities.",
		wikipediaSlug: 'First_Crusade',
		tags: ['war', 'religion'],
		related: ['asia-manzikert', 'asia-saladin']
	},
	{
		id: 'europe-gothic',
		title: 'Gothic Architecture',
		year: 1144,
		description:
			"Abbot Suger rebuilt the choir of Saint-Denis near Paris with pointed arches, ribbed vaults, and walls of stained glass, launching the Gothic style.",
		significance:
			"Gothic cathedrals like Chartres and Notre-Dame were the skyscrapers of their age — engineering feats aiming to turn stone into light.",
		wikipediaSlug: 'Gothic_architecture',
		tags: ['architecture', 'religion', 'art']
	},
	{
		id: 'europe-paper',
		title: 'Paper Reaches Europe',
		year: 1150,
		description:
			"Papermaking, learned from the Islamic world, was established in al-Andalus at Xàtiva by the 12th century. Italian mills like Fabriano spread it across Christian Europe.",
		significance:
			"Without cheap paper, Gutenberg's press would have been pointless. Paper took a thousand years to travel from China to Europe.",
		wikipediaSlug: 'History_of_paper',
		tags: ['technology', 'communication', 'trade'],
		related: ['asia-paper', 'asia-talas']
	},
	{
		id: 'europe-fibonacci',
		title: 'Fibonacci Brings Hindu-Arabic Numerals',
		year: 1202,
		description:
			"Leonardo of Pisa, who learned mathematics in North Africa, published Liber Abaci, showing merchants how to calculate with Hindu-Arabic numerals instead of Roman ones.",
		significance:
			"Place-value numerals made bookkeeping, banking, and later science possible. Europe's commercial revolution ran on Indian math.",
		wikipediaSlug: 'Liber_Abaci',
		tags: ['science', 'economics', 'trade'],
		related: ['asia-brahmagupta', 'asia-house-of-wisdom']
	},
	{
		id: 'europe-fourth-crusade',
		title: 'Crusaders Sack Constantinople',
		year: 1204,
		description:
			"The Fourth Crusade, diverted by Venetian money and politics, attacked and plundered Constantinople — the largest Christian city in the world.",
		significance:
			"Crusaders did what no Muslim army had managed: they broke Byzantium. The empire never recovered, opening the way for the Ottomans.",
		wikipediaSlug: 'Fourth_Crusade',
		tags: ['war', 'religion', 'collapse'],
		related: ['asia-fall-of-constantinople']
	},
	{
		id: 'europe-magna-carta',
		title: 'Magna Carta',
		year: 1215,
		description:
			"Rebel barons forced King John of England to accept a charter limiting royal power and guaranteeing that free men could not be imprisoned without lawful judgment.",
		significance:
			"Though annulled within weeks, Magna Carta became a symbol of the rule of law, cited in the US Constitution and the Universal Declaration of Human Rights.",
		wikipediaSlug: 'Magna_Carta',
		tags: ['law', 'politics', 'democracy']
	},
	{
		id: 'europe-mongol-invasion',
		title: 'Mongols Invade Europe',
		year: 1241,
		description:
			"Mongol armies destroyed Kyiv and crushed Polish and Hungarian forces at Legnica and Mohi. They withdrew after the death of the Great Khan Ögedei.",
		significance:
			"Western Europe was spared by chance; Russia was not, remaining under the 'Mongol Yoke' for over two centuries.",
		wikipediaSlug: 'Mongol_invasion_of_Europe',
		tags: ['war', 'empire'],
		related: ['asia-mongol-empire']
	},
	{
		id: 'europe-aquinas',
		title: "Aquinas' Summa Theologica",
		year: 1265,
		description:
			"Thomas Aquinas began the Summa Theologica, an attempt to reconcile Christian faith with Aristotle's philosophy, recently available through Arabic translations.",
		significance:
			"Aquinas made reason a partner of faith in Catholic thought, opening space for natural philosophy and science.",
		wikipediaSlug: 'Summa_Theologica',
		tags: ['philosophy', 'religion']
	},
	{
		id: 'europe-marco-polo',
		title: 'The Travels of Marco Polo',
		year: 1298,
		description:
			"While a prisoner of war in Genoa, Marco Polo dictated an account of his 24 years in Asia, including service at Kublai Khan's court.",
		significance:
			"Marco Polo's book inspired generations of explorers — Columbus carried an annotated copy hoping to reach the Khan.",
		wikipediaSlug: 'The_Travels_of_Marco_Polo',
		tags: ['exploration', 'trade', 'literature'],
		related: ['asia-yuan', 'asia-silk-road']
	},
	{
		id: 'europe-great-famine',
		title: 'Great Famine of 1315',
		year: 1315,
		description:
			"Years of torrential rain and cold ruined harvests across northern Europe. Up to 10–15% of the population died in some areas.",
		significance:
			"The famine ended Europe's medieval boom and weakened the population just before the Black Death — an early blow of the coming Little Ice Age.",
		wikipediaSlug: 'Great_Famine_of_1315–1317',
		tags: ['environment', 'collapse'],
		related: ['europe-little-ice-age']
	},
	{
		id: 'europe-dante',
		title: "Dante's Divine Comedy",
		year: 1320,
		description:
			"Dante Alighieri completed the Divine Comedy, a journey through Hell, Purgatory, and Paradise written in Tuscan vernacular instead of Latin.",
		significance:
			"Dante made Italian a literary language and showed that great literature could be written in the language people actually spoke.",
		wikipediaSlug: 'Divine_Comedy',
		tags: ['literature', 'culture', 'religion']
	},
	{
		id: 'europe-hundred-years-war',
		title: "Hundred Years' War",
		year: 1337,
		description:
			"England and France fought intermittently for over a century. English longbows won at Crécy and Agincourt; Joan of Arc helped turn the tide for France.",
		significance:
			"The war forged English and French national identities and helped end the age of mounted knights.",
		wikipediaSlug: "Hundred_Years'_War",
		tags: ['war', 'politics']
	},
	{
		id: 'europe-black-death',
		title: 'The Black Death',
		year: 1347,
		description:
			"The bubonic plague killed an estimated 30–60% of Europe's population between 1347 and 1351 — the deadliest pandemic in recorded human history.",
		significance:
			"The Black Death reshaped European society: labor scarcity empowered peasants, weakened feudalism, and paradoxically helped spark the Renaissance.",
		wikipediaSlug: 'Black_Death',
		tags: ['pandemic', 'society', 'collapse'],
		related: ['asia-black-death-origin', 'africa-black-death']
	},
	{
		id: 'europe-hanseatic',
		title: 'Hanseatic League',
		year: 1356,
		description:
			"Merchant towns around the Baltic and North Sea, led by Lübeck, held their first general Diet. The Hansa dominated northern European trade in grain, timber, fish, and furs.",
		significance:
			"A trading network with no king became a major power — fighting wars and setting rules of commerce — and an ancestor of the idea of a common market.",
		wikipediaSlug: 'Hanseatic_League',
		tags: ['trade', 'economics']
	},
	{
		id: 'europe-catalan-atlas',
		title: 'Catalan Atlas',
		year: 1375,
		description:
			"Abraham Cresques, a Jewish cartographer in Majorca, produced a world map showing Mansa Musa enthroned in West Africa, holding a golden nugget.",
		significance:
			"The atlas shows how Africa's wealth captured the European imagination — and helped motivate the Portuguese voyages down the African coast.",
		wikipediaSlug: 'Catalan_Atlas',
		tags: ['exploration', 'art', 'trade'],
		related: ['africa-mansa-musa', 'africa-trans-saharan-trade']
	},
	{
		id: 'europe-henry-navigator',
		title: 'Portugal and the Slave Trade',
		year: 1444,
		description:
			"Expeditions sponsored by Prince Henry of Portugal pushed down the West African coast. In 1444, captives from Africa were auctioned at Lagos in Portugal.",
		significance:
			"Portugal's voyages began the European Age of Exploration — and the trade in African people that would grow into the Atlantic slave trade.",
		wikipediaSlug: 'Prince_Henry_the_Navigator',
		tags: ['exploration', 'slavery', 'colonialism'],
		related: ['africa-ceuta', 'africa-atlantic-slave-trade']
	},
	{
		id: 'europe-brunelleschi',
		title: "Brunelleschi's Dome",
		year: 1436,
		description:
			"Filippo Brunelleschi completed the dome of Florence Cathedral, the largest since antiquity, without centering scaffolding, using ingenious herringbone brickwork and new hoisting machines.",
		significance:
			"Brunelleschi's dome is the Renaissance in a single structure: classical inspiration, engineering bravado, and civic pride.",
		wikipediaSlug: 'Florence_Cathedral',
		tags: ['architecture', 'art', 'technology']
	},
	{
		id: 'europe-printing-press',
		title: "Gutenberg's Printing Press",
		year: 1440,
		description:
			"Johannes Gutenberg developed a printing press with movable metal type, dramatically reducing the cost of producing books. His Gutenberg Bible was printed around 1455.",
		significance:
			"The printing press democratized knowledge, fueled the Protestant Reformation, the Scientific Revolution, and the Enlightenment — the information revolution of its age.",
		wikipediaSlug: 'Printing_press',
		tags: ['technology', 'communication', 'culture'],
		related: ['asia-movable-type', 'asia-diamond-sutra']
	},
	{
		id: 'europe-alhambra-decree',
		title: 'Granada Falls, Jews Expelled',
		year: 1492,
		description:
			"Ferdinand and Isabella conquered Granada, the last Muslim state in Iberia, then ordered all Jews to convert or leave Spain. Tens of thousands went into exile.",
		significance:
			"Spain traded its religious diversity for uniformity — the Sephardic diaspora carried its skills to the Ottoman Empire and the Netherlands.",
		wikipediaSlug: 'Alhambra_Decree',
		tags: ['religion', 'politics', 'migration'],
		related: ['europe-al-andalus']
	},
	{
		id: 'europe-columbian-exchange',
		title: 'The Columbian Exchange',
		year: 1493,
		description:
			"Columbus's second voyage brought horses, cattle, pigs, wheat, and sugarcane to the Americas. Back to Europe came maize, potatoes, tomatoes, tobacco, and cacao — and to the Americas, devastating diseases.",
		significance:
			"The biggest ecological shake-up since the dinosaurs: Italian tomato sauce, Irish potatoes, and the near-destruction of Native American societies all trace back to it.",
		wikipediaSlug: 'Columbian_exchange',
		tags: ['trade', 'environment', 'agriculture', 'pandemic'],
		related: ['na-columbus', 'na-maize', 'sa-potato', 'africa-new-world-crops', 'asia-new-world-crops', 'na-plains-horse']
	},
	{
		id: 'europe-tordesillas',
		title: 'Treaty of Tordesillas',
		year: 1494,
		description:
			"With the Pope's blessing, Spain and Portugal divided the non-European world along a meridian west of the Cape Verde islands.",
		significance:
			"Two kingdoms carved up the globe without consulting anyone who lived there. The line is why Brazil speaks Portuguese.",
		wikipediaSlug: 'Treaty_of_Tordesillas',
		tags: ['colonialism', 'politics', 'law'],
		related: ['sa-cabral']
	},
	{
		id: 'europe-vasco-da-gama',
		title: 'Vasco da Gama Reaches India',
		year: 1498,
		description:
			"Vasco da Gama sailed around Africa and, guided by a local pilot from Malindi, reached Calicut in India. His cargo of spices paid for the voyage many times over.",
		significance:
			"The direct sea route to Asia shifted the center of world trade from the Mediterranean to the Atlantic and began 450 years of European colonialism in Asia.",
		wikipediaSlug: 'Vasco_da_Gama',
		tags: ['exploration', 'trade', 'navigation'],
		related: ['africa-dias-cape', 'asia-portuguese-goa', 'africa-swahili-coast']
	},
	{
		id: 'europe-high-renaissance',
		title: 'The High Renaissance',
		year: 1508,
		description:
			"Michelangelo began painting the Sistine Chapel ceiling, while Raphael decorated the Vatican rooms and Leonardo da Vinci's Mona Lisa was taking shape.",
		significance:
			"A few square kilometers of Italy produced an artistic flowering that still defines Western ideas of genius.",
		wikipediaSlug: 'Sistine_Chapel_ceiling',
		tags: ['art', 'culture', 'religion']
	},
	{
		id: 'europe-machiavelli',
		title: "Machiavelli's The Prince",
		year: 1513,
		description:
			"Exiled from Florence, Niccolò Machiavelli wrote The Prince, advising rulers how to gain and keep power — through deceit and cruelty if necessary.",
		significance:
			"Machiavelli separated politics from morality and founded modern political science; his name became an adjective.",
		wikipediaSlug: 'The_Prince',
		tags: ['philosophy', 'politics', 'literature']
	},
	{
		id: 'europe-reformation',
		title: 'The Protestant Reformation',
		year: 1517,
		description:
			"Martin Luther posted 95 theses challenging the sale of indulgences. Spread by printing presses, his ideas split Western Christianity.",
		significance:
			"The Reformation broke the Catholic Church's monopoly, triggered a century of religious wars, and promoted literacy so believers could read the Bible.",
		wikipediaSlug: 'Ninety-five_Theses',
		tags: ['religion', 'politics', 'communication'],
		related: ['europe-printing-press']
	},
	{
		id: 'europe-magellan',
		title: 'First Circumnavigation',
		year: 1519,
		endYear: 1522,
		description:
			"Five ships under Ferdinand Magellan left Spain to reach the Spice Islands by sailing west. Only one ship and 18 men returned three years later; Magellan died in the Philippines.",
		significance:
			"The voyage proved the world's oceans were connected and revealed the true size of the Pacific — making a global economy conceivable.",
		wikipediaSlug: 'Magellan_expedition',
		tags: ['exploration', 'navigation'],
		related: ['asia-mactan', 'oceania-magellan', 'sa-strait-of-magellan']
	},
	{
		id: 'europe-copernicus',
		title: 'Copernicus Moves the Earth',
		year: 1543,
		description:
			"On his deathbed, Nicolaus Copernicus published De revolutionibus, placing the Sun rather than Earth at the center of the universe.",
		significance:
			"The Copernican Revolution displaced humanity from the center of creation and kicked off the Scientific Revolution.",
		wikipediaSlug: 'De_revolutionibus_orbium_coelestium',
		tags: ['science', 'astronomy'],
		related: ['africa-ptolemy']
	},
	{
		id: 'europe-vesalius',
		title: 'Vesalius Maps the Body',
		year: 1543,
		description:
			"The same year as Copernicus, Andreas Vesalius published De humani corporis fabrica, an anatomy textbook based on his own dissections with stunningly detailed illustrations.",
		significance:
			"Vesalius corrected errors that had stood for 1,300 years and established observation, not ancient authority, as the basis of medicine.",
		wikipediaSlug: 'De_Humani_Corporis_Fabrica_Libri_Septem',
		tags: ['medicine', 'science', 'art']
	},
	{
		id: 'europe-price-revolution',
		title: 'The Price Revolution',
		year: 1550,
		description:
			"A flood of silver from the Americas, combined with population growth, drove sustained inflation across Europe. Prices rose several times over during the century.",
		significance:
			"American silver enriched merchants, impoverished wage earners, bankrupted the Spanish crown repeatedly, and helped finance European trade with Asia.",
		wikipediaSlug: 'Price_revolution',
		tags: ['economics', 'trade', 'colonialism'],
		related: ['sa-potosi', 'asia-manila-galleon']
	},
	{
		id: 'europe-lepanto',
		title: 'Battle of Lepanto',
		year: 1571,
		description:
			"A Holy League fleet of Spain, Venice, and the Papacy destroyed the Ottoman navy in the largest galley battle in history. Cervantes lost the use of his left hand there.",
		significance:
			"Lepanto ended the myth of Ottoman naval invincibility in the Mediterranean, though the Ottomans rebuilt their fleet within a year.",
		wikipediaSlug: 'Battle_of_Lepanto',
		tags: ['war', 'religion']
	},
	{
		id: 'europe-armada',
		title: 'Spanish Armada Defeated',
		year: 1588,
		description:
			"Philip II's invasion fleet against England was scattered by English fire ships and then wrecked by storms around Scotland and Ireland.",
		significance:
			"The Armada's failure secured Protestant England and boosted its naval ambitions — the start of Britain's road to empire.",
		wikipediaSlug: 'Spanish_Armada',
		tags: ['war', 'religion', 'environment']
	},
	{
		id: 'europe-shakespeare',
		title: 'Shakespeare Writes Hamlet',
		year: 1600,
		description:
			"Writing for London's Globe Theatre, William Shakespeare produced Hamlet, among nearly 40 plays that range from comedy to tragedy to history.",
		significance:
			"Shakespeare gave English thousands of phrases and an unmatched portrait of human psychology; he is the most performed playwright in the world.",
		wikipediaSlug: 'William_Shakespeare',
		tags: ['literature', 'culture']
	},
	{
		id: 'europe-russian-famine-1601',
		title: 'Russian Famine of 1601–1603',
		year: 1601,
		description:
			"Summer frosts destroyed harvests for three years running, killing perhaps a third of Russia's population. The cold has been linked to the eruption of Huaynaputina in Peru.",
		significance:
			"The famine helped plunge Russia into the Time of Troubles — a volcano in the Andes toppling a dynasty in Moscow.",
		wikipediaSlug: 'Russian_famine_of_1601–1603',
		tags: ['environment', 'collapse'],
		related: ['sa-huaynaputina', 'europe-little-ice-age']
	},
	{
		id: 'europe-voc',
		title: 'Dutch East India Company',
		year: 1602,
		description:
			"The Dutch Republic chartered the VOC, a company with the power to wage war, sign treaties, and govern territory. Its shares traded on the Amsterdam exchange.",
		significance:
			"The VOC was arguably the first modern multinational corporation and the first to be traded on a stock exchange — and a ruthless colonial power.",
		wikipediaSlug: 'Dutch_East_India_Company',
		tags: ['trade', 'economics', 'colonialism'],
		related: ['asia-banda', 'africa-cape-colony', 'oceania-janszoon']
	},
	{
		id: 'europe-galileo',
		title: "Galileo's Telescope",
		year: 1610,
		description:
			"Galileo Galilei turned a telescope to the sky, discovering Jupiter's moons and the phases of Venus. In 1633 the Inquisition forced him to recant.",
		significance:
			"Galileo made the heavens an object of observation rather than authority. His trial became the defining symbol of science versus dogma.",
		wikipediaSlug: 'Sidereus_Nuncius',
		tags: ['science', 'astronomy', 'religion']
	},
	{
		id: 'europe-thirty-years-war',
		title: "Thirty Years' War",
		year: 1618,
		description:
			"A Protestant revolt in Bohemia spiraled into a continental war. Armies and famine devastated Germany, which may have lost a third of its population.",
		significance:
			"Europe's most destructive war before the 20th century convinced rulers that religion could not be imposed by force.",
		wikipediaSlug: "Thirty_Years'_War",
		tags: ['war', 'religion']
	},
	{
		id: 'europe-tulip-mania',
		title: 'Tulip Mania',
		year: 1637,
		description:
			"In the Dutch Republic, prices for rare tulip bulbs soared — some reportedly costing more than a house — then collapsed in February 1637.",
		significance:
			"Tulip mania is the archetypal speculative bubble, though historians now think its economic damage was exaggerated.",
		wikipediaSlug: 'Tulip_mania',
		tags: ['economics']
	},
	{
		id: 'europe-english-civil-war',
		title: 'English Civil War',
		year: 1642,
		description:
			"Conflict between King Charles I and Parliament erupted into war. In 1649 Parliament tried and beheaded the king, and England briefly became a republic.",
		significance:
			"A king was put on trial and executed by his subjects — a radical precedent establishing that rulers were accountable to law.",
		wikipediaSlug: 'English_Civil_War',
		tags: ['war', 'revolution', 'politics']
	},
	{
		id: 'europe-little-ice-age',
		title: 'Little Ice Age: The Maunder Minimum',
		year: 1645,
		description:
			"A long cool period from roughly 1300 to 1850 reached one of its coldest phases. The Thames froze for frost fairs, Alpine glaciers swallowed villages, and harvests failed across Europe.",
		significance:
			"Historians link the cold to a 'General Crisis' of wars, revolts, and famines worldwide in the 17th century. Even modest climate shifts can shake societies.",
		wikipediaSlug: 'Little_Ice_Age',
		tags: ['environment', 'collapse'],
		related: ['asia-ming-collapse', 'na-norse-greenland', 'sa-huaynaputina', 'europe-great-famine']
	},
	{
		id: 'europe-westphalia',
		title: 'Peace of Westphalia',
		year: 1648,
		description:
			"Treaties ending the Thirty Years' War recognized the right of rulers to choose their state's religion and affirmed the independence of the Dutch Republic and Switzerland.",
		significance:
			"Westphalia is often cited as the origin of the modern system of sovereign states — the basis of international law today.",
		wikipediaSlug: 'Peace_of_Westphalia',
		tags: ['politics', 'law', 'religion']
	},
	{
		id: 'europe-coffeehouses',
		title: 'Coffeehouses Come to London',
		year: 1652,
		description:
			"Pasqua Rosée, a servant from Ottoman-ruled Smyrna, opened London's first coffeehouse. Within decades there were hundreds, each a hub of news and debate.",
		significance:
			"Coffeehouses birthed Lloyd's of London, the stock exchange, and newspapers — the 'penny universities' of the Enlightenment.",
		wikipediaSlug: 'English_coffeehouses_in_the_17th_and_18th_centuries',
		tags: ['culture', 'trade', 'economics'],
		related: ['asia-coffee']
	},
	{
		id: 'europe-royal-society',
		title: 'Royal Society Founded',
		year: 1660,
		description:
			"Scientists in London founded the Royal Society, with the motto 'Nullius in verba' — take nobody's word for it. Its journal is the oldest scientific journal still published.",
		significance:
			"The Royal Society created the institutions of modern science: peer review, published experiments, and open debate.",
		wikipediaSlug: 'Royal_Society',
		tags: ['science', 'education'],
		related: ['oceania-cook']
	},
	{
		id: 'europe-vienna',
		title: 'Ottoman Defeat at Vienna',
		year: 1683,
		description:
			"An Ottoman army besieging Vienna was routed by a relief force led by Polish King John III Sobieski, in one of the largest cavalry charges in history.",
		significance:
			"Vienna marked the high-water mark of Ottoman expansion into Europe; the empire began a long retreat from the Balkans.",
		wikipediaSlug: 'Battle_of_Vienna',
		tags: ['war', 'empire'],
		related: ['asia-fall-of-constantinople']
	},
	{
		id: 'europe-newton',
		title: "Newton's Principia",
		year: 1687,
		description:
			"Isaac Newton published the Principia, setting out the laws of motion and universal gravitation, showing that the same physics governs falling apples and orbiting planets.",
		significance:
			"Newton unified heaven and earth under mathematical law — the foundation of physics and engineering for over two centuries.",
		wikipediaSlug: 'Philosophiæ_Naturalis_Principia_Mathematica',
		tags: ['science', 'astronomy']
	},
	{
		id: 'europe-glorious-revolution',
		title: 'Glorious Revolution',
		year: 1688,
		description:
			"Parliament invited William of Orange to replace King James II. The 1689 Bill of Rights limited royal power and guaranteed parliamentary elections and free speech in Parliament.",
		significance:
			"Britain became a constitutional monarchy; John Locke's theories justifying it fed directly into the American Declaration of Independence.",
		wikipediaSlug: 'Glorious_Revolution',
		tags: ['revolution', 'politics', 'democracy'],
		related: ['na-independence']
	},
	{
		id: 'europe-bank-of-england',
		title: 'Bank of England',
		year: 1694,
		description:
			"The Bank of England was founded to lend money to the government for war with France, in exchange for the right to issue banknotes.",
		significance:
			"Credible public debt let Britain borrow cheaply and outspend larger rivals — a financial edge that built its empire.",
		wikipediaSlug: 'Bank_of_England',
		tags: ['economics', 'government']
	},
	{
		id: 'europe-agricultural-revolution',
		title: 'British Agricultural Revolution',
		year: 1700,
		description:
			"New crop rotations with turnips and clover, selective breeding, and the enclosure of common lands raised farm productivity in Britain.",
		significance:
			"More food per farmer freed workers for factories — and enclosure pushed the rural poor into the cities that would house the Industrial Revolution.",
		wikipediaSlug: 'British_Agricultural_Revolution',
		tags: ['agriculture', 'economics', 'society']
	},
	{
		id: 'europe-peter-the-great',
		title: 'Peter the Great Builds St. Petersburg',
		year: 1703,
		description:
			"Tsar Peter I founded St. Petersburg on the Baltic marshes as a 'window to Europe' and forced Western dress, education, and military reforms on Russian nobles.",
		significance:
			"Peter turned Russia toward Europe and made it a great power — establishing a tension between Westernizers and traditionalists that persists.",
		wikipediaSlug: 'Peter_the_Great',
		tags: ['politics', 'urban', 'empire']
	},
	{
		id: 'europe-newcomen',
		title: 'Newcomen Steam Engine',
		year: 1712,
		description:
			"Thomas Newcomen built the first practical steam engine to pump water from mines. It was inefficient, but it worked — and it ran on cheap coal.",
		significance:
			"For the first time, humans converted fossil fuel into mechanical work at scale. The age of fossil fuels began in a flooded English coal mine.",
		wikipediaSlug: 'Newcomen_atmospheric_engine',
		tags: ['technology', 'environment']
	},
	{
		id: 'europe-linnaeus',
		title: "Linnaeus' Systema Naturae",
		year: 1735,
		description:
			"Swedish botanist Carl Linnaeus published a system for classifying all living things, later introducing two-part Latin names like Homo sapiens.",
		significance:
			"Linnaeus gave biology a common language that is still used today — and, less nobly, early racial classifications.",
		wikipediaSlug: 'Systema_Naturae',
		tags: ['science']
	},
	{
		id: 'europe-encyclopedie',
		title: 'The Encyclopédie',
		year: 1751,
		description:
			"Denis Diderot and Jean d'Alembert began publishing the Encyclopédie, a 28-volume compendium of knowledge with contributions from Voltaire, Rousseau, and Montesquieu.",
		significance:
			"The Encyclopédie aimed 'to change the common way of thinking.' Its spirit — knowledge for everyone — lives on in Wikipedia.",
		wikipediaSlug: 'Encyclopédie',
		tags: ['philosophy', 'education', 'communication']
	},
	{
		id: 'europe-lisbon-earthquake',
		title: 'Lisbon Earthquake',
		year: 1755,
		description:
			"On All Saints' Day, an earthquake, tsunami, and fire destroyed Lisbon, killing tens of thousands. The Marquis of Pombal rebuilt the city with earthquake-resistant designs.",
		significance:
			"The disaster shook Enlightenment faith in a benevolent providence — Voltaire mocked optimism in Candide — and gave birth to seismology.",
		wikipediaSlug: '1755_Lisbon_earthquake',
		tags: ['environment', 'philosophy', 'science']
	},
	{
		id: 'europe-industrial-revolution',
		title: 'Industrial Revolution',
		year: 1760,
		description:
			"Beginning in Britain, the Industrial Revolution transformed manufacturing through mechanization. James Watt's improved steam engine (1769) powered factories, mines, and eventually railways.",
		significance:
			"The Industrial Revolution was the most significant transformation of human life since agriculture — tripling life expectancy and creating modern economic growth.",
		wikipediaSlug: 'Industrial_Revolution',
		tags: ['technology', 'economics', 'society']
	},
	{
		id: 'europe-wealth-of-nations',
		title: 'The Wealth of Nations',
		year: 1776,
		description:
			"Adam Smith published An Inquiry into the Nature and Causes of the Wealth of Nations, arguing that division of labor and free markets — the 'invisible hand' — generate prosperity.",
		significance:
			"The founding text of economics shaped how the world thinks about trade, markets, and the role of government.",
		wikipediaSlug: 'The_Wealth_of_Nations',
		tags: ['economics', 'philosophy']
	},
	{
		id: 'europe-french-revolution',
		title: 'French Revolution',
		year: 1789,
		description:
			"The storming of the Bastille on July 14, 1789 launched the French Revolution, abolishing feudalism and the absolute monarchy and proclaiming the Rights of Man.",
		significance:
			"The French Revolution introduced the modern concepts of nationalism, popular sovereignty, and human rights that define politics today.",
		wikipediaSlug: 'French_Revolution',
		tags: ['revolution', 'politics', 'europe'],
		related: ['na-haitian-revolution', 'na-independence']
	},
	{
		id: 'europe-smallpox-vaccine',
		title: 'The First Vaccine',
		year: 1796,
		description:
			"Edward Jenner inoculated a boy with cowpox and showed that it protected him from smallpox. The word 'vaccine' comes from the Latin for cow.",
		significance:
			"Vaccination has saved more lives than any other medical intervention — and led to smallpox's eradication in 1980.",
		wikipediaSlug: 'Edward_Jenner',
		tags: ['medicine', 'science'],
		related: ['africa-smallpox-eradicated']
	},
	{
		id: 'europe-napoleon',
		title: 'Napoleonic Code',
		year: 1804,
		description:
			"Napoleon crowned himself emperor and enacted the Civil Code, guaranteeing legal equality, secular authority, and property rights — though restricting women's rights.",
		significance:
			"Napoleon's armies spread the Code across Europe; it still forms the basis of law in dozens of countries from Belgium to Louisiana.",
		wikipediaSlug: 'Napoleonic_Code',
		tags: ['law', 'politics', 'empire'],
		related: ['africa-napoleon-egypt', 'na-louisiana-purchase']
	},
	{
		id: 'europe-slave-trade-abolition',
		title: 'Britain Abolishes the Slave Trade',
		year: 1807,
		description:
			"After a 20-year campaign by abolitionists including Olaudah Equiano and Thomas Clarkson, Parliament banned the British slave trade. Slavery itself was abolished in most of the empire in 1833.",
		significance:
			"Abolition was one of the first mass human rights movements — though slaveholders, not the enslaved, received compensation.",
		wikipediaSlug: 'Slave_Trade_Act_1807',
		tags: ['slavery', 'law', 'politics'],
		related: ['africa-atlantic-slave-trade', 'africa-sierra-leone', 'sa-brazil-abolition']
	},
	{
		id: 'europe-congress-vienna',
		title: 'Congress of Vienna',
		year: 1815,
		description:
			"After Napoleon's final defeat at Waterloo, Europe's great powers redrew the map of the continent and created a system of regular diplomatic consultation.",
		significance:
			"The 'Concert of Europe' prevented a general European war for a century — a rare success of great-power diplomacy.",
		wikipediaSlug: 'Congress_of_Vienna',
		tags: ['politics', 'war']
	},
	{
		id: 'europe-year-without-summer',
		title: 'Year Without a Summer',
		year: 1816,
		description:
			"Ash from Tambora caused snow in June and crop failures across Europe and North America. Stuck indoors at Lake Geneva, Mary Shelley began writing Frankenstein.",
		significance:
			"A volcano in Indonesia caused famine in Europe and inspired the first science-fiction novel — a vivid lesson in how connected the Earth's climate is.",
		wikipediaSlug: 'Year_Without_a_Summer',
		tags: ['environment', 'literature'],
		related: ['asia-tambora']
	},
	{
		id: 'europe-beethoven-ninth',
		title: "Beethoven's Ninth Symphony",
		year: 1824,
		description:
			"Completely deaf, Ludwig van Beethoven premiered his Ninth Symphony in Vienna, ending with a choral setting of Schiller's 'Ode to Joy.'",
		significance:
			"The Ninth redefined what a symphony could be. Its 'Ode to Joy' is now the anthem of the European Union.",
		wikipediaSlug: 'Symphony_No._9_(Beethoven)',
		tags: ['music', 'culture']
	},
	{
		id: 'europe-railway',
		title: 'Liverpool and Manchester Railway',
		year: 1830,
		description:
			"The first intercity railway to rely entirely on steam locomotives opened, carrying passengers and freight on a fixed timetable.",
		significance:
			"Railways shrank distances, standardized time, and created national markets. Within decades they spanned continents.",
		wikipediaSlug: 'Liverpool_and_Manchester_Railway',
		tags: ['technology', 'economics']
	},
	{
		id: 'europe-faraday',
		title: 'Faraday Discovers Induction',
		year: 1831,
		description:
			"Michael Faraday, a bookbinder's apprentice turned scientist, showed that a moving magnet induces an electric current — the principle of the electric generator.",
		significance:
			"Nearly all the electricity we use is generated by Faraday's principle; he made the electrical age possible.",
		wikipediaSlug: 'Michael_Faraday',
		tags: ['science', 'technology']
	},
	{
		id: 'europe-irish-famine',
		title: 'The Great Irish Famine',
		year: 1845,
		description:
			"Potato blight destroyed the crop on which a third of Ireland's population depended. About a million people died and another million emigrated, while food continued to be exported.",
		significance:
			"Ireland's population has never recovered to pre-famine levels. Dependence on a single American crop proved catastrophic.",
		wikipediaSlug: 'Great_Famine_(Ireland)',
		tags: ['environment', 'migration', 'collapse', 'agriculture'],
		related: ['sa-potato', 'europe-columbian-exchange']
	},
	{
		id: 'europe-1848',
		title: 'Revolutions of 1848',
		year: 1848,
		description:
			"Uprisings swept France, the German states, the Austrian Empire, and Italy, demanding constitutions and national unity. The same year, Marx and Engels published The Communist Manifesto.",
		significance:
			"Most revolutions failed within a year, but they ended serfdom in Austria and planted ideas — liberalism, nationalism, socialism — that defined the next century.",
		wikipediaSlug: 'Revolutions_of_1848',
		tags: ['revolution', 'politics', 'philosophy']
	},
	{
		id: 'europe-nightingale',
		title: 'Florence Nightingale in Crimea',
		year: 1854,
		description:
			"During the Crimean War, Florence Nightingale reorganized British military hospitals and used statistics to prove that soldiers were dying of disease, not wounds.",
		significance:
			"Nightingale founded modern nursing and was a pioneer of data visualization in public health.",
		wikipediaSlug: 'Florence_Nightingale',
		tags: ['medicine', 'science']
	},
	{
		id: 'europe-origin-of-species',
		title: 'On the Origin of Species',
		year: 1859,
		description:
			"Charles Darwin published his theory of evolution by natural selection, drawing partly on observations from the Galápagos and South America.",
		significance:
			"Darwin explained the diversity of life without divine design — the foundation of modern biology and one of the most profound ideas in history.",
		wikipediaSlug: 'On_the_Origin_of_Species',
		tags: ['science'],
		related: ['sa-darwin']
	},
	{
		id: 'europe-serfdom-abolished',
		title: 'Russia Frees the Serfs',
		year: 1861,
		description:
			"Tsar Alexander II emancipated over 20 million serfs. Freed peasants had to pay for their land in installments that lasted decades.",
		significance:
			"The reform ended Europe's last major system of bondage, but its unfairness fed the resentments that exploded in 1917.",
		wikipediaSlug: 'Emancipation_reform_of_1861',
		tags: ['law', 'society', 'politics']
	},
	{
		id: 'europe-italian-unification',
		title: 'Unification of Italy',
		year: 1861,
		description:
			"Through Cavour's diplomacy and Garibaldi's campaign in the south, most of the Italian peninsula was united as the Kingdom of Italy.",
		significance:
			"Italy became a nation-state for the first time since Rome; as one leader put it, 'We have made Italy, now we must make Italians.'",
		wikipediaSlug: 'Unification_of_Italy',
		tags: ['politics', 'war']
	},
	{
		id: 'europe-maxwell',
		title: "Maxwell's Equations",
		year: 1865,
		description:
			"James Clerk Maxwell unified electricity, magnetism, and light in a set of equations and predicted invisible electromagnetic waves.",
		significance:
			"Maxwell's equations made radio, television, radar, Wi-Fi, and mobile phones possible. Einstein kept his portrait on the wall.",
		wikipediaSlug: 'A_Dynamical_Theory_of_the_Electromagnetic_Field',
		tags: ['science']
	},
	{
		id: 'europe-transatlantic-cable',
		title: 'Transatlantic Telegraph Cable',
		year: 1866,
		description:
			"After several failures, the steamship Great Eastern laid a working telegraph cable between Ireland and Newfoundland. Messages that took ten days by ship now took minutes.",
		significance:
			"The cable created the first near-instant intercontinental communication — the start of the wired world.",
		wikipediaSlug: 'Transatlantic_telegraph_cable',
		tags: ['technology', 'communication']
	},
	{
		id: 'europe-mendeleev',
		title: "Mendeleev's Periodic Table",
		year: 1869,
		description:
			"Dmitri Mendeleev arranged the known elements by atomic weight and properties, leaving gaps for elements not yet discovered — and correctly predicting their properties.",
		significance:
			"The periodic table brought order to chemistry and remains its organizing principle.",
		wikipediaSlug: 'Dmitri_Mendeleev',
		tags: ['science']
	},
	{
		id: 'europe-german-unification',
		title: 'German Unification',
		year: 1871,
		description:
			"After victories over Austria and France, Otto von Bismarck proclaimed the German Empire in the Hall of Mirrors at Versailles.",
		significance:
			"A powerful unified Germany upset the European balance of power — the structural cause of two world wars.",
		wikipediaSlug: 'Unification_of_Germany',
		tags: ['politics', 'war']
	},
	{
		id: 'europe-impressionism',
		title: 'Impressionism',
		year: 1874,
		description:
			"Monet, Renoir, Degas, Pissarro, and others, rejected by the official Salon, held their own exhibition in Paris. A critic mocked Monet's 'Impression, Sunrise,' naming the movement.",
		significance:
			"Impressionism broke with academic tradition and opened the door to all of modern art.",
		wikipediaSlug: 'Impressionism',
		tags: ['art', 'culture']
	},
	{
		id: 'europe-germ-theory',
		title: 'Germ Theory Proven',
		year: 1876,
		description:
			"Robert Koch proved that a specific bacterium causes anthrax, building on Louis Pasteur's work. Within a decade the causes of tuberculosis and cholera were identified.",
		significance:
			"Germ theory transformed medicine and public health — clean water, sterilization, and antibiotics followed, doubling life expectancy.",
		wikipediaSlug: 'Germ_theory_of_disease',
		tags: ['medicine', 'science']
	},
	{
		id: 'europe-lumiere',
		title: 'The Lumière Brothers Invent Cinema',
		year: 1895,
		description:
			"Auguste and Louis Lumière held the first public screening of projected motion pictures for a paying audience in a Paris café.",
		significance:
			"Cinema became the dominant art form and mass medium of the 20th century.",
		wikipediaSlug: 'Lumière_brothers',
		tags: ['technology', 'art', 'culture']
	},
	{
		id: 'europe-curie',
		title: 'Marie Curie and Radioactivity',
		year: 1898,
		description:
			"Marie and Pierre Curie discovered polonium and radium. Marie Curie became the first woman to win a Nobel Prize and the only person to win in two sciences.",
		significance:
			"Curie's research opened the atomic age — leading to cancer radiotherapy, nuclear power, and nuclear weapons.",
		wikipediaSlug: 'Marie_Curie',
		tags: ['science', 'medicine']
	},
	{
		id: 'europe-einstein',
		title: "Einstein's Miracle Year",
		year: 1905,
		description:
			"A 26-year-old patent clerk in Bern published four papers explaining the photoelectric effect, Brownian motion, special relativity, and E = mc².",
		significance:
			"Einstein upended Newtonian physics and laid the foundations of both relativity and quantum mechanics.",
		wikipediaSlug: 'Annus_mirabilis_papers',
		tags: ['science']
	},
	{
		id: 'europe-cubism',
		title: 'Picasso and Cubism',
		year: 1907,
		description:
			"Pablo Picasso painted Les Demoiselles d'Avignon, shattering conventional perspective. With Georges Braque, he developed Cubism.",
		significance:
			"Cubism was the most influential art movement of the 20th century — partly inspired by African masks Picasso saw in Paris.",
		wikipediaSlug: "Les_Demoiselles_d'Avignon",
		tags: ['art', 'culture']
	},
	{
		id: 'europe-ww1',
		title: 'World War I',
		year: 1914,
		endYear: 1918,
		description:
			"The assassination of Archduke Franz Ferdinand in Sarajevo triggered a war between the great powers. Machine guns, artillery, and gas killed around 10 million soldiers.",
		significance:
			"The Great War destroyed four empires, redrew the map of Europe and the Middle East, and set the stage for communism, fascism, and another world war.",
		wikipediaSlug: 'World_War_I',
		tags: ['war', 'politics', 'technology'],
		related: ['oceania-gallipoli', 'asia-armenian-genocide']
	},
	{
		id: 'europe-russian-revolution',
		title: 'Russian Revolution',
		year: 1917,
		description:
			"War weariness and food shortages toppled the tsar. In October, Lenin's Bolsheviks seized power, launching a civil war and founding the Soviet state.",
		significance:
			"The first communist state shaped the 20th century — inspiring revolutions worldwide and dividing the globe in the Cold War.",
		wikipediaSlug: 'October_Revolution',
		tags: ['revolution', 'politics']
	},
	{
		id: 'europe-spanish-flu',
		title: 'Spanish Flu',
		year: 1918,
		description:
			"An influenza pandemic spread by troop movements infected about a third of the world's population and killed 25–50 million or more — more than the war itself.",
		significance:
			"The deadliest pandemic of the 20th century was quickly forgotten, leaving the world unprepared for the next one.",
		wikipediaSlug: 'Spanish_flu',
		tags: ['pandemic', 'medicine'],
		related: ['oceania-samoa-flu', 'asia-covid']
	},
	{
		id: 'europe-versailles',
		title: 'Treaty of Versailles',
		year: 1919,
		description:
			"The victorious Allies imposed harsh terms on Germany: territorial losses, disarmament, and heavy reparations. The League of Nations was created.",
		significance:
			"Versailles was too harsh to reconcile Germany and too weak to restrain it — fueling the resentments Hitler exploited.",
		wikipediaSlug: 'Treaty_of_Versailles',
		tags: ['politics', 'law', 'war']
	},
	{
		id: 'europe-bauhaus',
		title: 'The Bauhaus',
		year: 1919,
		description:
			"Walter Gropius founded the Bauhaus in Weimar, a school uniting art, craft, and industrial design. The Nazis closed it in 1933, and its teachers scattered worldwide.",
		significance:
			"The Bauhaus shaped modern design — from skyscrapers to fonts to furniture. Form follows function.",
		wikipediaSlug: 'Bauhaus',
		tags: ['art', 'architecture', 'education']
	},
	{
		id: 'europe-penicillin',
		title: 'Penicillin Discovered',
		year: 1928,
		description:
			"Alexander Fleming noticed that mold had killed bacteria in a culture dish. Howard Florey and Ernst Chain turned penicillin into a mass-produced drug during World War II.",
		significance:
			"Antibiotics have saved hundreds of millions of lives, making once-fatal infections routine to treat — though resistance now threatens that achievement.",
		wikipediaSlug: 'History_of_penicillin',
		tags: ['medicine', 'science']
	},
	{
		id: 'europe-holodomor',
		title: 'Holodomor',
		year: 1932,
		description:
			"Stalin's forced collectivization and grain requisitions caused famine across the Soviet Union; in Ukraine, borders were sealed and millions starved.",
		significance:
			"Ukraine and many countries recognize the Holodomor as genocide; its memory shapes Ukrainian identity and relations with Russia.",
		wikipediaSlug: 'Holodomor',
		tags: ['collapse', 'politics', 'agriculture']
	},
	{
		id: 'europe-hitler',
		title: 'Hitler Takes Power',
		year: 1933,
		description:
			"Adolf Hitler was appointed Chancellor of Germany and within months dismantled democracy, banned other parties, and began persecuting Jews.",
		significance:
			"Hitler came to power legally, through a democracy's own institutions — a warning that democracies can vote themselves out of existence.",
		wikipediaSlug: "Adolf_Hitler's_rise_to_power",
		tags: ['politics', 'democracy']
	},
	{
		id: 'europe-turing',
		title: 'Turing Defines Computation',
		year: 1936,
		description:
			"Alan Turing published 'On Computable Numbers,' describing an abstract machine capable of performing any calculation. During the war he helped break the Enigma code.",
		significance:
			"Turing's universal machine is the theoretical blueprint of every computer. He was later prosecuted for homosexuality and died at 41.",
		wikipediaSlug: 'Alan_Turing',
		tags: ['science', 'technology']
	},
	{
		id: 'europe-guernica',
		title: 'Guernica',
		year: 1937,
		description:
			"During the Spanish Civil War, German and Italian bombers destroyed the Basque town of Guernica. Picasso responded with a vast black-and-white painting of the horror.",
		significance:
			"Guernica foreshadowed the bombing of cities in World War II and became the most famous anti-war painting ever made.",
		wikipediaSlug: 'Guernica_(Picasso)',
		tags: ['art', 'war']
	},
	{
		id: 'europe-ww2-start',
		title: 'World War II Begins',
		year: 1939,
		description:
			"Germany invaded Poland on September 1, 1939; Britain and France declared war two days later. The Soviet Union invaded from the east weeks later under the Nazi–Soviet pact.",
		significance:
			"The deadliest conflict in history had begun — it would kill some 70–85 million people and reshape the entire world order.",
		wikipediaSlug: 'Invasion_of_Poland',
		tags: ['war', 'politics'],
		related: ['africa-italy-ethiopia', 'asia-nanjing']
	},
	{
		id: 'europe-holocaust',
		title: 'The Holocaust',
		year: 1942,
		description:
			"At the Wannsee Conference, Nazi officials coordinated the 'Final Solution.' By 1945, about six million Jews — two-thirds of Europe's Jewish population — had been murdered, along with Roma, disabled people, and others.",
		significance:
			"The Holocaust is the defining crime of modern history; it led to the Genocide Convention and the Universal Declaration of Human Rights.",
		wikipediaSlug: 'The_Holocaust',
		tags: ['war', 'politics', 'religion'],
		related: ['africa-herero-genocide', 'asia-israel']
	},
	{
		id: 'europe-stalingrad',
		title: 'Battle of Stalingrad',
		year: 1942,
		description:
			"The German Sixth Army was encircled and destroyed at Stalingrad in the winter of 1942–43, after one of the bloodiest battles in history.",
		significance:
			"Stalingrad turned the tide of the war in Europe; the Red Army would not stop until it reached Berlin.",
		wikipediaSlug: 'Battle_of_Stalingrad',
		tags: ['war']
	},
	{
		id: 'europe-ww2-ends',
		title: 'World War II Ends',
		year: 1945,
		description:
			"World War II ended with Germany's surrender in May and Japan's in August 1945. An estimated 70–85 million people died, including 6 million in the Holocaust.",
		significance:
			"WWII's aftermath created the modern world order: the United Nations, NATO, the Cold War, decolonization, and the European integration project.",
		wikipediaSlug: 'World_War_II',
		tags: ['war', 'politics'],
		related: ['asia-hiroshima', 'na-un']
	},
	{
		id: 'europe-nato',
		title: 'NATO Founded',
		year: 1949,
		description:
			"Twelve nations including the US, UK, and France signed the North Atlantic Treaty, pledging that an attack on one would be an attack on all.",
		significance:
			"NATO bound America to Europe's defense and became the most successful military alliance in history — now central again after Russia's invasion of Ukraine.",
		wikipediaSlug: 'NATO',
		tags: ['politics', 'cold-war', 'military'],
		related: ['na-marshall-plan']
	},
	{
		id: 'europe-dna',
		title: 'Structure of DNA',
		year: 1953,
		description:
			"James Watson and Francis Crick proposed the double-helix structure of DNA, using X-ray images made by Rosalind Franklin, whose key contribution was long underacknowledged.",
		significance:
			"The double helix revealed how life copies itself, launching molecular biology, genetic medicine, and biotechnology.",
		wikipediaSlug: 'Nucleic_acid_double_helix',
		tags: ['science', 'medicine']
	},
	{
		id: 'europe-treaty-of-rome',
		title: 'Treaty of Rome',
		year: 1957,
		description:
			"Six nations — France, West Germany, Italy, Belgium, the Netherlands, and Luxembourg — created the European Economic Community, a common market.",
		significance:
			"Former enemies bound their economies together to make war impossible — the seed of the European Union.",
		wikipediaSlug: 'Treaty_of_Rome',
		tags: ['politics', 'economics', 'trade']
	},
	{
		id: 'europe-berlin-wall',
		title: 'Berlin Wall Built',
		year: 1961,
		description:
			"East Germany sealed off West Berlin overnight with barbed wire, then a concrete wall, to stop the exodus of its citizens. Around 140 people were killed trying to cross.",
		significance:
			"The Wall became the defining symbol of the Cold War and of a divided world.",
		wikipediaSlug: 'Berlin_Wall',
		tags: ['politics', 'cold-war']
	},
	{
		id: 'europe-beatles',
		title: 'Beatlemania',
		year: 1963,
		description:
			"The Beatles' second album and string of hits made them a phenomenon in Britain; in 1964 they conquered America, leading the 'British Invasion.'",
		significance:
			"The Beatles transformed popular music into an art form and a global youth culture — the first truly worldwide pop phenomenon.",
		wikipediaSlug: 'The_Beatles',
		tags: ['music', 'culture']
	},
	{
		id: 'europe-1968',
		title: 'May 1968 and the Prague Spring',
		year: 1968,
		description:
			"Student protests and a general strike paralyzed France, while in Czechoslovakia, reformers attempted 'socialism with a human face' — crushed by Soviet tanks in August.",
		significance:
			"1968 transformed Western culture and revealed that Soviet communism could not reform itself.",
		wikipediaSlug: 'Prague_Spring',
		tags: ['revolution', 'politics', 'culture', 'cold-war']
	},
	{
		id: 'europe-solidarity',
		title: 'Solidarity',
		year: 1980,
		description:
			"Striking shipyard workers in Gdańsk, led by electrician Lech Wałęsa, won the right to form the first independent trade union in the Soviet bloc.",
		significance:
			"Solidarity grew to 10 million members and showed that communist regimes could be challenged peacefully — paving the way for 1989.",
		wikipediaSlug: 'Solidarity_(Polish_trade_union)',
		tags: ['politics', 'democracy', 'cold-war']
	},
	{
		id: 'europe-chernobyl',
		title: 'Chernobyl',
		year: 1986,
		description:
			"A reactor at the Chernobyl nuclear plant in Soviet Ukraine exploded during a safety test, spreading radioactive fallout across Europe. Some 350,000 people were eventually relocated.",
		significance:
			"Chernobyl exposed the Soviet system's secrecy and incompetence — Gorbachev later called it a cause of the USSR's collapse.",
		wikipediaSlug: 'Chernobyl_disaster',
		tags: ['environment', 'technology', 'politics'],
		related: ['asia-fukushima']
	},
	{
		id: 'europe-fall-berlin-wall',
		title: 'Fall of the Berlin Wall',
		year: 1989,
		description:
			"After a confused press announcement, crowds surged to the Berlin Wall on November 9, and guards opened the gates. Communist regimes across Eastern Europe fell within months.",
		significance:
			"The fall of the Wall ended the Cold War division of Europe and led to German reunification and the collapse of the Soviet Union.",
		wikipediaSlug: 'Fall_of_the_Berlin_Wall',
		tags: ['revolution', 'politics', 'democracy', 'cold-war'],
		related: ['asia-tiananmen']
	},
	{
		id: 'europe-ussr-dissolved',
		title: 'Dissolution of the Soviet Union',
		year: 1991,
		description:
			"After a failed hardline coup in August, the Soviet republics declared independence. On December 25, Gorbachev resigned and the Soviet flag was lowered over the Kremlin.",
		significance:
			"The superpower's collapse ended the Cold War, created 15 new countries, and left unresolved questions that erupted in Ukraine.",
		wikipediaSlug: 'Dissolution_of_the_Soviet_Union',
		tags: ['collapse', 'politics', 'cold-war']
	},
	{
		id: 'europe-www',
		title: 'World Wide Web Invented',
		year: 1991,
		description:
			"At CERN near Geneva, Tim Berners-Lee launched the World Wide Web on August 6, 1991, making the internet accessible to non-technical users and triggering the digital revolution.",
		significance:
			"The Web is arguably the most transformative technology since the printing press, reshaping commerce, communication, politics, and culture at a global scale.",
		wikipediaSlug: 'World_Wide_Web',
		tags: ['technology', 'communication', 'culture'],
		related: ['na-arpanet', 'europe-printing-press']
	},
	{
		id: 'europe-maastricht',
		title: 'Maastricht Treaty',
		year: 1992,
		description:
			"The Maastricht Treaty created the European Union, with plans for a common currency and European citizenship.",
		significance:
			"Maastricht turned an economic community into a political union — the most ambitious experiment in pooled sovereignty ever attempted.",
		wikipediaSlug: 'Maastricht_Treaty',
		tags: ['politics', 'economics']
	},
	{
		id: 'europe-srebrenica',
		title: 'Srebrenica Massacre',
		year: 1995,
		description:
			"Bosnian Serb forces killed over 8,000 Bosniak men and boys after overrunning a UN 'safe area' guarded by Dutch peacekeepers.",
		significance:
			"Srebrenica was Europe's worst atrocity since WWII and was ruled a genocide by international courts — a stain on UN peacekeeping.",
		wikipediaSlug: 'Srebrenica_massacre',
		tags: ['war', 'politics']
	},
	{
		id: 'europe-euro',
		title: 'Euro Notes and Coins',
		year: 2002,
		description:
			"Twelve EU countries replaced their national currencies with euro notes and coins, the biggest currency changeover in history.",
		significance:
			"The euro made European integration tangible — and the debt crisis of 2010 showed the strains of a currency union without a fiscal union.",
		wikipediaSlug: 'Euro',
		tags: ['economics', 'politics']
	},
	{
		id: 'europe-higgs',
		title: 'Higgs Boson Found',
		year: 2012,
		description:
			"Physicists at CERN's Large Hadron Collider announced the discovery of the Higgs boson, the particle linked to the field that gives other particles mass.",
		significance:
			"The discovery completed the Standard Model of particle physics, nearly 50 years after it was predicted — a triumph of international scientific collaboration.",
		wikipediaSlug: 'Higgs_boson',
		tags: ['science']
	},
	{
		id: 'europe-migrant-crisis',
		title: 'European Migrant Crisis',
		year: 2015,
		description:
			"More than a million refugees and migrants, many fleeing Syria's war, reached Europe. Thousands drowned in the Mediterranean.",
		significance:
			"The crisis strained European unity and fueled the rise of populist, anti-immigration parties across the continent.",
		wikipediaSlug: '2015_European_migrant_crisis',
		tags: ['migration', 'politics'],
		related: ['asia-syrian-war']
	},
	{
		id: 'europe-paris-agreement',
		title: 'Paris Climate Agreement',
		year: 2015,
		description:
			"Nearly every nation agreed to limit global warming to well below 2°C above pre-industrial levels, with each country setting its own targets.",
		significance:
			"Paris was the first truly global climate deal — but national pledges still fall short of the goal it set.",
		wikipediaSlug: 'Paris_Agreement',
		tags: ['environment', 'politics'],
		related: ['oceania-tuvalu-falepili']
	},
	{
		id: 'europe-brexit',
		title: 'Brexit',
		year: 2016,
		description:
			"British voters chose 52% to 48% to leave the European Union. The UK formally left in January 2020.",
		significance:
			"Brexit was the first time a member state left the EU — a landmark in the backlash against globalization.",
		wikipediaSlug: 'Brexit',
		tags: ['politics', 'democracy']
	},
	{
		id: 'europe-ukraine-invasion',
		title: 'Russia Invades Ukraine',
		year: 2022,
		description:
			"Russia launched a full-scale invasion of Ukraine, the largest attack on a European country since 1945. Ukraine's resistance stopped the assault on Kyiv.",
		significance:
			"The war shattered Europe's post-Cold War order, revived NATO, and triggered a global energy and food crisis.",
		wikipediaSlug: 'Russo-Ukrainian_war_(2022–present)',
		tags: ['war', 'politics']
	}
];
