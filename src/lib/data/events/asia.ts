import type { TimelineEvent } from '../../types';

export const asiaEvents: TimelineEvent[] = [
	{
		id: 'asia-homo-erectus',
		title: 'Homo Erectus Spreads into Asia',
		year: -1_800_000,
		description:
			"Homo erectus migrated out of Africa into Asia, reaching Java and China. These were the first humans to leave Africa, appearing at Dmanisi in Georgia ~1.8M years ago.",
		significance:
			"This first great migration proved our ancestors could adapt to new environments — a pattern that would eventually take humans to every continent.",
		wikipediaSlug: 'Homo_erectus',
		tags: ['prehistory', 'evolution', 'migration'],
		related: ['africa-homo-erectus']
	},
	{
		id: 'asia-peking-man',
		title: 'Peking Man at Zhoukoudian',
		year: -770_000,
		description:
			'Excavations at Zhoukoudian near Beijing in the 1920s–30s uncovered dozens of Homo erectus individuals, roughly 750,000 years old, along with stone tools and possible traces of fire.',
		significance:
			"Peking Man made China central to the story of human evolution. The original fossils vanished in 1941 while being shipped to safety — one of archaeology's great mysteries.",
		wikipediaSlug: 'Peking_Man',
		tags: ['prehistory', 'evolution']
	},
	{
		id: 'asia-flores',
		title: 'The "Hobbits" of Flores',
		year: -100_000,
		description:
			"On the Indonesian island of Flores, a meter-tall human species — Homo floresiensis — lived until about 50,000 years ago, hunting dwarf elephants and giant rats.",
		significance:
			"Flores showed that human evolution was a bushy tree, not a ladder. Until very recently, we shared the planet with several other kinds of humans.",
		wikipediaSlug: 'Homo_floresiensis',
		tags: ['prehistory', 'evolution']
	},
	{
		id: 'asia-toba',
		title: 'Toba Supereruption',
		year: -74_000,
		description:
			"The Toba volcano on Sumatra erupted in the largest explosive eruption of the last two million years, ejecting thousands of cubic kilometers of material and blanketing South Asia in ash.",
		significance:
			"Toba was once blamed for nearly wiping out humanity. Newer evidence from Africa and India suggests people weathered it — a lesson in both the power of nature and human resilience.",
		wikipediaSlug: 'Youngest_Toba_eruption',
		tags: ['environment', 'prehistory'],
		related: ['africa-out-of-africa']
	},
	{
		id: 'asia-denisovans',
		title: 'Meeting the Denisovans',
		year: -50_000,
		description:
			"A finger bone from Denisova Cave in Siberia revealed a previously unknown human group. Modern humans interbred with Denisovans as they spread through Asia.",
		significance:
			"Denisovan DNA lives on in people today — it helps Tibetans breathe at altitude and makes up several percent of the genome of Papuans and Aboriginal Australians.",
		wikipediaSlug: 'Denisovan',
		tags: ['prehistory', 'evolution', 'migration'],
		related: ['africa-out-of-africa', 'oceania-aboriginal-arrival']
	},
	{
		id: 'asia-sulawesi-art',
		title: 'Oldest Cave Art in Sulawesi',
		year: -49_000,
		description:
			"In the limestone caves of Sulawesi, Indonesia, people painted wild pigs and human-like figures over 51,000 years ago — among the oldest figurative art known, and older than Europe's famous caves.",
		significance:
			"Sulawesi demolished the idea that art began in Ice Age Europe. Storytelling in pictures was part of the human toolkit as our species spread around the world.",
		wikipediaSlug: 'Karampuang_cave',
		tags: ['art', 'prehistory', 'culture'],
		related: ['europe-chauvet']
	},
	{
		id: 'asia-beringia',
		title: 'Life in Beringia',
		year: -25_000,
		description:
			'During the last Ice Age, low sea levels exposed a land bridge between Siberia and Alaska. People appear to have lived in Beringia for thousands of years before moving into the Americas.',
		significance:
			"Beringia was the doorway to two continents. The 'Beringian standstill' explains why Native Americans share a distinct genetic heritage.",
		wikipediaSlug: 'Beringia',
		tags: ['prehistory', 'migration', 'environment'],
		related: ['na-first-americans', 'sa-monte-verde']
	},
	{
		id: 'asia-xianrendong',
		title: "World's Oldest Pottery",
		year: -18_000,
		description:
			"Fragments from Xianrendong Cave in Jiangxi, China, dated to about 20,000 years ago, are the oldest known pottery — made by hunter-gatherers long before farming.",
		significance:
			"Pottery came before agriculture, not after it. Cooking vessels let Ice Age foragers boil food, extract nutrients, and eventually store surpluses.",
		wikipediaSlug: 'Xianren_Cave',
		tags: ['technology', 'prehistory']
	},
	{
		id: 'asia-gobekli-tepe',
		title: 'Göbekli Tepe',
		year: -9500,
		description:
			'Hunter-gatherers in southeastern Turkey raised massive carved stone pillars arranged in circles, decorated with foxes, snakes, and vultures — 6,000 years before Stonehenge.',
		significance:
			"Göbekli Tepe flipped the textbook sequence: monumental ritual may have come before farming, and perhaps even motivated it.",
		wikipediaSlug: 'Göbekli_Tepe',
		tags: ['religion', 'architecture', 'prehistory']
	},
	{
		id: 'asia-agriculture',
		title: 'Farming Begins in the Fertile Crescent',
		year: -9000,
		description:
			'In the arc from the Levant to the Zagros Mountains, people domesticated wheat, barley, lentils, sheep, goats, and cattle over several thousand years.',
		significance:
			"Agriculture is the most consequential change in human history: it made cities, states, writing, and inequality possible — and fueled a population explosion that has never stopped.",
		wikipediaSlug: 'Neolithic_Revolution',
		tags: ['agriculture', 'prehistory', 'civilization'],
		related: ['europe-neolithic-farmers', 'na-maize']
	},
	{
		id: 'asia-jericho',
		title: 'Walls of Jericho',
		year: -8000,
		description:
			'Jericho, one of the oldest continuously inhabited places on Earth, was surrounded by a stone wall and an 8.5-meter tower more than 10,000 years ago.',
		significance:
			"The Tower of Jericho is the oldest known monumental public structure in a settlement — the first sign of communal construction on an urban scale.",
		wikipediaSlug: 'Jericho',
		tags: ['urban', 'architecture']
	},
	{
		id: 'asia-catalhoyuk',
		title: 'Çatalhöyük',
		year: -7400,
		description:
			'This Anatolian town housed several thousand people in tightly packed mudbrick homes entered through the roof. Walls were covered in bull horns and hunting murals.',
		significance:
			"Çatalhöyük shows a large farming community with surprisingly little evidence of social hierarchy — a hint that early towns did not have to be unequal.",
		wikipediaSlug: 'Çatalhöyük',
		tags: ['urban', 'art', 'society']
	},
	{
		id: 'asia-rice',
		title: 'Rice Domesticated in China',
		year: -7000,
		description:
			"Along China's Yangtze River, people gradually domesticated wild rice, cultivating it in paddies. Millet was domesticated independently in the north along the Yellow River.",
		significance:
			"Rice now feeds over half of humanity. Its domestication made East Asia one of the world's great independent centers of civilization.",
		wikipediaSlug: 'Rice#Domestication',
		tags: ['agriculture', 'china']
	},
	{
		id: 'asia-mehrgarh',
		title: 'Mehrgarh',
		year: -7000,
		description:
			"In Balochistan, Pakistan, early farmers grew barley and herded cattle. Mehrgarh also yields the oldest known evidence of dentistry — teeth drilled with flint bits.",
		significance:
			"Mehrgarh is the root of South Asian farming and the precursor to the Indus Valley Civilization.",
		wikipediaSlug: 'Mehrgarh',
		tags: ['agriculture', 'medicine', 'prehistory']
	},
	{
		id: 'asia-uruk',
		title: 'Uruk: The First City',
		year: -4000,
		description:
			'In southern Mesopotamia, Uruk grew into what may have been the largest city in the world, with tens of thousands of residents, monumental temples, and a professional bureaucracy.',
		significance:
			"Uruk invented the city as we know it: specialized jobs, social classes, standardized goods, and record-keeping — which soon led to writing.",
		wikipediaSlug: 'Uruk',
		tags: ['urban', 'civilization']
	},
	{
		id: 'asia-wheel',
		title: 'The Wheel',
		year: -3500,
		description:
			"Wheeled vehicles appeared almost simultaneously across Mesopotamia, the Caucasus, and Europe around 3500 BCE. Potters' wheels may have come slightly earlier.",
		significance:
			"The wheel transformed transport, war, and farming — though, tellingly, the Americas built great civilizations without using it for transport at all.",
		wikipediaSlug: 'Wheel',
		tags: ['technology']
	},
	{
		id: 'asia-austronesian-expansion',
		title: 'Austronesians Set Sail from Taiwan',
		year: -3000,
		description:
			"Rice-farming, seafaring peoples began moving from Taiwan into the Philippines and Indonesia. Their descendants would eventually reach from Madagascar to Easter Island.",
		significance:
			"Before 1500 CE, the Austronesian language family spanned more of the globe than any other. Taiwan's Indigenous peoples are the homeland of that dispersal.",
		wikipediaSlug: 'Austronesian_peoples',
		tags: ['migration', 'navigation'],
		related: ['oceania-lapita', 'africa-madagascar']
	},
	{
		id: 'asia-cuneiform',
		title: 'Invention of Writing',
		year: -3200,
		description:
			'The Sumerians of Mesopotamia developed cuneiform — the first known writing system — originally to record economic transactions and grain stores.',
		significance:
			'Writing allowed knowledge to accumulate across generations, enabling law, literature, science, and history itself.',
		wikipediaSlug: 'Cuneiform',
		tags: ['technology', 'civilization', 'communication'],
		related: ['africa-hieroglyphs']
	},
	{
		id: 'asia-indus-valley',
		title: 'Indus Valley Civilization',
		year: -2600,
		description:
			'Cities like Mohenjo-daro and Harappa had sophisticated urban planning, drainage systems, and standardized weights — one of the three earliest civilizations.',
		significance:
			"The Indus civilization's urban planning was unmatched for millennia, yet its script remains undeciphered — one of history's great mysteries.",
		wikipediaSlug: 'Indus_Valley_Civilisation',
		tags: ['civilization', 'urban']
	},
	{
		id: 'asia-akkad',
		title: "Sargon's Akkadian Empire",
		year: -2334,
		description:
			'Sargon of Akkad conquered the Sumerian city-states and ruled from the Persian Gulf to the Mediterranean, creating what is often called the first empire.',
		significance:
			'Akkad established the model of a multi-ethnic empire ruled from one capital. Its collapse around 2150 BCE coincided with a severe drought — an early climate-driven fall.',
		wikipediaSlug: 'Akkadian_Empire',
		tags: ['empire', 'government'],
		related: ['africa-old-kingdom-collapse']
	},
	{
		id: 'asia-gilgamesh',
		title: 'Epic of Gilgamesh',
		year: -2100,
		description:
			"Stories of Gilgamesh, a king of Uruk who searches for immortality, were first written in Sumerian and later compiled into an epic. It includes a flood story strikingly similar to Noah's.",
		significance:
			"The oldest great work of literature deals with friendship, death, and the limits of power — proof that the deepest human questions have not changed in 4,000 years.",
		wikipediaSlug: 'Epic_of_Gilgamesh',
		tags: ['literature', 'culture', 'religion']
	},
	{
		id: 'asia-sintashta',
		title: 'Sintashta and the Chariot',
		year: -2000,
		description:
			"East of the Urals, the Sintashta culture built fortified settlements and buried the earliest known spoke-wheeled chariots with their warriors and horses.",
		significance:
			"The chariot was the superweapon of the Bronze Age, spreading within centuries from the steppe to Egypt, India, and China.",
		wikipediaSlug: 'Sintashta_culture',
		tags: ['technology', 'war', 'prehistory'],
		related: ['europe-yamnaya']
	},
	{
		id: 'asia-hammurabi',
		title: 'Code of Hammurabi',
		year: -1754,
		description:
			"King Hammurabi of Babylon inscribed 282 laws on a basalt stele, covering trade, family, property, and punishment — including the famous \"eye for an eye.\"",
		significance:
			"Hammurabi's code is one of the earliest written legal systems, establishing the principle that laws should be public and apply consistently.",
		wikipediaSlug: 'Code_of_Hammurabi',
		tags: ['law', 'government']
	},
	{
		id: 'asia-rigveda',
		title: 'The Rigveda',
		year: -1500,
		description:
			"Indo-Aryan peoples in northwestern India composed the Rigveda, a collection of over 1,000 hymns, memorized and passed down orally with extraordinary precision for centuries before being written.",
		significance:
			"The Rigveda is one of the oldest religious texts still in use, foundational to Hinduism, and a key piece of evidence for the Indo-European language family.",
		wikipediaSlug: 'Rigveda',
		tags: ['religion', 'literature']
	},
	{
		id: 'asia-oracle-bones',
		title: 'Shang Oracle Bones',
		year: -1250,
		description:
			"Shang dynasty kings consulted ancestors by carving questions on turtle shells and ox bones and heating them until they cracked. These inscriptions are the oldest known Chinese writing.",
		significance:
			"Chinese is the oldest writing system in continuous use; modern characters descend directly from these divination records.",
		wikipediaSlug: 'Oracle_bone_script',
		tags: ['communication', 'religion', 'china']
	},
	{
		id: 'asia-bronze-age-collapse',
		title: 'Late Bronze Age Collapse',
		year: -1177,
		description:
			"Within a few decades, the Hittite Empire fell, Ugarit was burned, and Mycenaean palaces were destroyed. Drought, earthquakes, rebellions, and the 'Sea Peoples' all played a part.",
		significance:
			"The first great systems collapse: an interconnected world of trade and diplomacy unraveled together. It is a warning about the fragility of globalized systems.",
		wikipediaSlug: 'Late_Bronze_Age_collapse',
		tags: ['collapse', 'environment', 'war'],
		related: ['africa-sea-peoples', 'europe-mycenaean-collapse']
	},
	{
		id: 'asia-phoenician-alphabet',
		title: 'The Phoenician Alphabet',
		year: -1050,
		description:
			"Phoenician traders on the Levantine coast standardized a 22-letter alphabet, with one sign per consonant sound. They carried it across the Mediterranean.",
		significance:
			"Nearly every alphabet in use today — Greek, Latin, Arabic, Hebrew, Cyrillic — descends from the Phoenician one. Literacy no longer required years of training as a scribe.",
		wikipediaSlug: 'Phoenician_alphabet',
		tags: ['communication', 'trade'],
		related: ['europe-greek-alphabet', 'africa-carthage']
	},
	{
		id: 'asia-mandate-of-heaven',
		title: 'Zhou and the Mandate of Heaven',
		year: -1046,
		description:
			"The Zhou overthrew the Shang and justified it with a new idea: Heaven grants the right to rule to just rulers and withdraws it from tyrants.",
		significance:
			"The Mandate of Heaven framed Chinese politics for 3,000 years — legitimizing every successful rebellion and giving rulers a reason to fear failure.",
		wikipediaSlug: 'Mandate_of_Heaven',
		tags: ['government', 'philosophy', 'china']
	},
	{
		id: 'asia-ashurbanipal',
		title: 'Library of Ashurbanipal',
		year: -668,
		description:
			"The Assyrian king Ashurbanipal gathered tens of thousands of clay tablets at Nineveh. When the city was sacked in 612 BCE, the fire baked the tablets hard and preserved them.",
		significance:
			"The world's first systematically organized library preserved Gilgamesh and much of Mesopotamian knowledge — saved by the very destruction meant to end it.",
		wikipediaSlug: 'Library_of_Ashurbanipal',
		tags: ['education', 'literature', 'culture']
	},
	{
		id: 'asia-babylonian-exile',
		title: 'Babylonian Exile',
		year: -587,
		description:
			"Nebuchadnezzar II destroyed Jerusalem and its Temple and deported much of Judah's elite to Babylon. In exile, Jewish scribes compiled and shaped much of the Hebrew Bible.",
		significance:
			"Exile transformed Judaism into a religion of text and law that could survive without a homeland — a model that shaped Christianity and Islam too.",
		wikipediaSlug: 'Babylonian_captivity',
		tags: ['religion', 'migration']
	},
	{
		id: 'asia-cyrus',
		title: 'Cyrus Takes Babylon',
		year: -539,
		description:
			"Cyrus the Great of Persia conquered Babylon and allowed deported peoples, including the Jews, to return home. The Achaemenid Empire became the largest the world had yet seen.",
		significance:
			"Cyrus pioneered an empire that ruled through tolerance of local religions and customs — a model admired by everyone from the Greeks to Thomas Jefferson.",
		wikipediaSlug: 'Cyrus_the_Great',
		tags: ['empire', 'government', 'religion'],
		related: ['europe-marathon']
	},
	{
		id: 'asia-royal-road',
		title: 'The Persian Royal Road',
		year: -500,
		description:
			"Darius I improved a 2,700-km road from Sardis to Susa, with relay stations where couriers changed horses. Messages crossed the empire in about a week.",
		significance:
			"Herodotus's description of its couriers — \"neither snow nor rain nor heat\" — became the unofficial motto of the US Postal Service. Infrastructure is how empires hold together.",
		wikipediaSlug: 'Royal_Road',
		tags: ['technology', 'communication', 'empire']
	},
	{
		id: 'asia-axial-age',
		title: 'The Axial Age',
		year: -500,
		description:
			'In a remarkable convergence, Confucius, Laozi, the Buddha, Zoroaster, and Greek philosophers emerged within a few centuries of each other across Asia and the Mediterranean.',
		significance:
			"The Axial Age produced most of the world's major ethical and philosophical traditions, which continue to shape the values of billions of people today.",
		wikipediaSlug: 'Axial_Age',
		tags: ['philosophy', 'religion', 'culture']
	},
	{
		id: 'asia-mauryan',
		title: 'Maurya Empire',
		year: -322,
		description:
			"Chandragupta Maurya, advised by the strategist Kautilya, overthrew the Nanda dynasty and unified most of the Indian subcontinent for the first time.",
		significance:
			"The Mauryas created India's first great empire; Kautilya's Arthashastra is a strikingly cold-eyed manual of statecraft written long before Machiavelli.",
		wikipediaSlug: 'Maurya_Empire',
		tags: ['empire', 'government'],
		related: ['europe-alexander']
	},
	{
		id: 'asia-ashoka',
		title: "Ashoka's Conversion",
		year: -260,
		description:
			"After his bloody conquest of Kalinga, the Mauryan emperor Ashoka renounced war, embraced Buddhism, and carved edicts on pillars across India calling for tolerance and kindness to animals.",
		significance:
			"Ashoka turned Buddhism from a regional sect into a world religion by sending missionaries abroad; his lion capital is India's national emblem today.",
		wikipediaSlug: 'Ashoka',
		tags: ['religion', 'government', 'philosophy']
	},
	{
		id: 'asia-qin-dynasty',
		title: 'Qin Shi Huang Unifies China',
		year: -221,
		description:
			"The First Emperor unified China, standardized writing, currency, and measurements, and began the Great Wall. He was buried with the Terracotta Army.",
		significance:
			"Qin's unification created the template for the Chinese state that has persisted for over 2,000 years — the longest continuous political tradition on Earth.",
		wikipediaSlug: 'Qin_Shi_Huang',
		tags: ['empire', 'government', 'china']
	},
	{
		id: 'asia-han',
		title: 'Han Dynasty',
		year: -202,
		description:
			"The Han dynasty ruled China for four centuries, adopting Confucianism as state ideology and recruiting officials partly on merit. It rivaled Rome in size and population.",
		significance:
			"The Han defined Chinese identity so thoroughly that China's majority ethnic group still calls itself the Han people.",
		wikipediaSlug: 'Han_dynasty',
		tags: ['empire', 'government', 'china']
	},
	{
		id: 'asia-silk-road',
		title: 'The Silk Road Opens',
		year: -130,
		description:
			"The Han envoy Zhang Qian's missions to Central Asia opened official contact with the West. Caravan routes soon linked China to Persia and the Roman world, carrying silk, spices, horses, and ideas.",
		significance:
			"The Silk Road wasn't one road but a web that spread Buddhism, paper, gunpowder, and plague. It was the internet of the ancient world — for better and worse.",
		wikipediaSlug: 'Silk_Road',
		tags: ['trade', 'culture', 'economics'],
		related: ['europe-byzantine-silk', 'africa-periplus', 'europe-antonine-plague', 'europe-marco-polo']
	},
	{
		id: 'asia-sima-qian',
		title: 'Records of the Grand Historian',
		year: -94,
		description:
			"Sima Qian completed the Shiji, a history of China from mythical times to his own day. He chose castration over suicide after angering the emperor, so he could finish it.",
		significance:
			"Sima Qian set the pattern for Chinese historical writing for two millennia — and his personal sacrifice is a testament to the power of the historian's mission.",
		wikipediaSlug: 'Shiji',
		tags: ['literature', 'culture', 'china']
	},
	{
		id: 'asia-crucifixion',
		title: 'Crucifixion of Jesus',
		year: 30,
		description:
			"Jesus of Nazareth, a Jewish preacher from Galilee, was executed by the Roman prefect Pontius Pilate in Jerusalem. His followers proclaimed he had risen from the dead.",
		significance:
			"A provincial execution gave rise to Christianity, now the world's largest religion — a movement that would conquer the empire that killed its founder.",
		wikipediaSlug: 'Crucifixion_of_Jesus',
		tags: ['religion'],
		related: ['europe-constantine', 'africa-aksum']
	},
	{
		id: 'asia-second-temple',
		title: 'Destruction of the Second Temple',
		year: 70,
		description:
			"Roman legions under Titus crushed the Jewish revolt and destroyed the Temple in Jerusalem. After a second revolt in 135, Jews were barred from the city.",
		significance:
			"Without a temple, Judaism reorganized around rabbis, synagogues, and the Talmud. The diaspora that followed shaped Jewish history for nearly 2,000 years.",
		wikipediaSlug: 'Siege_of_Jerusalem_(70_CE)',
		tags: ['religion', 'war', 'migration']
	},
	{
		id: 'asia-indian-ocean-trade',
		title: 'Monsoon Trade Routes',
		year: 50,
		description:
			"Sailors learned to ride the seasonal monsoon winds directly across the Arabian Sea. Roman ships reached India's coast in large numbers, paying for pepper and textiles with gold.",
		significance:
			"Pliny complained that India drained Rome of its gold. The monsoon made the Indian Ocean the world's busiest trading sea for the next 1,500 years.",
		wikipediaSlug: 'Indian_Ocean_trade',
		tags: ['trade', 'navigation', 'environment'],
		related: ['africa-periplus', 'africa-swahili-coast']
	},
	{
		id: 'asia-paper',
		title: 'Cai Lun Perfects Paper',
		year: 105,
		description:
			"Court official Cai Lun presented the Han emperor with a refined method of making paper from tree bark, hemp, rags, and fishing nets. Cheaper than silk and lighter than bamboo, it spread rapidly.",
		significance:
			"Paper made bureaucracy, scholarship, and eventually printing affordable. Its westward journey would transform the Islamic world and then Europe.",
		wikipediaSlug: 'Cai_Lun',
		tags: ['technology', 'communication', 'china'],
		related: ['asia-talas', 'europe-paper']
	},
	{
		id: 'asia-kushan',
		title: 'The Kushan Empire',
		year: 127,
		description:
			"Under Kanishka, the Kushan Empire spanned Central Asia and northern India, controlling key Silk Road routes. Its Gandhara art blended Greek and Buddhist styles.",
		significance:
			"Gandhara artists made some of the first human images of the Buddha, in a style influenced by Greek sculpture — a perfect symbol of the Silk Road's cultural mixing.",
		wikipediaSlug: 'Kushan_Empire',
		tags: ['empire', 'art', 'religion']
	},
	{
		id: 'asia-three-kingdoms',
		title: 'Fall of the Han',
		year: 220,
		description:
			"The Han dynasty collapsed amid peasant rebellions and warlordism, splitting China into the Three Kingdoms. Census figures suggest a catastrophic population decline.",
		significance:
			"China's fragmentation lasted nearly four centuries; the era became the setting for Romance of the Three Kingdoms, one of China's most beloved novels.",
		wikipediaSlug: 'Three_Kingdoms',
		tags: ['collapse', 'war', 'china']
	},
	{
		id: 'asia-gupta',
		title: 'Gupta Golden Age',
		year: 320,
		description:
			"The Gupta Empire presided over a flowering of Indian science, mathematics, literature, and art. Kalidasa wrote his plays; Ajanta's caves were painted.",
		significance:
			"Many ideas we take for granted — the decimal place-value system, chess's ancestor, classic Sanskrit literature — took shape during the Gupta era.",
		wikipediaSlug: 'Gupta_Empire',
		tags: ['empire', 'culture', 'science']
	},
	{
		id: 'asia-aryabhata',
		title: "Aryabhata's Astronomy",
		year: 499,
		description:
			"At 23, the Indian astronomer Aryabhata wrote the Aryabhatiya, proposing that Earth rotates on its axis and calculating pi to four decimal places.",
		significance:
			"Aryabhata's work, translated into Arabic, shaped Islamic and ultimately European astronomy. India's first satellite was named after him.",
		wikipediaSlug: 'Aryabhata',
		tags: ['science', 'astronomy']
	},
	{
		id: 'asia-grand-canal',
		title: 'Grand Canal of China',
		year: 605,
		description:
			"The Sui dynasty linked existing waterways into the Grand Canal, eventually over 1,700 km long, connecting the rice-rich south with the political north.",
		significance:
			"The longest artificial river in the world fused China's economy into one system. The cost of building it helped bring down the Sui dynasty.",
		wikipediaSlug: 'Grand_Canal_(China)',
		tags: ['technology', 'trade', 'china']
	},
	{
		id: 'asia-tang-dynasty',
		title: 'Tang Dynasty Golden Age',
		year: 618,
		description:
			"The Tang dynasty's capital Chang'an was the world's largest city, with over a million residents. Tang China saw breakthroughs in poetry, printing, and cosmopolitan trade.",
		significance:
			"The Tang dynasty is considered China's cultural golden age, establishing poetic and artistic traditions that defined East Asian culture for centuries.",
		wikipediaSlug: 'Tang_dynasty',
		tags: ['empire', 'culture', 'china', 'technology']
	},
	{
		id: 'asia-hijra',
		title: 'The Hijra: Islam Begins',
		year: 622,
		description:
			"Facing persecution in Mecca, Muhammad and his followers migrated to Medina, where he became a political as well as religious leader. The Islamic calendar counts from this year.",
		significance:
			"Within a century, Islam spread from Spain to Central Asia. Today it is the faith of nearly two billion people.",
		wikipediaSlug: 'Hijrah',
		tags: ['religion', 'migration'],
		related: ['africa-first-hijra', 'africa-arab-conquest-egypt', 'europe-al-andalus']
	},
	{
		id: 'asia-brahmagupta',
		title: 'Brahmagupta Defines Zero',
		year: 628,
		description:
			"The Indian mathematician Brahmagupta gave the first rules for arithmetic with zero and negative numbers, treating zero as a number in its own right.",
		significance:
			"Zero as a number unlocked algebra, calculus, and computing. Our \"Arabic\" numerals are really Indian ones, carried west by Islamic scholars.",
		wikipediaSlug: 'Brahmagupta',
		tags: ['science'],
		related: ['asia-house-of-wisdom', 'europe-fibonacci']
	},
	{
		id: 'asia-srivijaya',
		title: 'Srivijaya Controls the Straits',
		year: 683,
		description:
			"From Sumatra, the maritime empire of Srivijaya dominated the Strait of Malacca — the chokepoint for trade between China and India — and became a major center of Buddhist learning.",
		significance:
			"Srivijaya showed that a sea-based empire could rival land powers by controlling trade bottlenecks — the same logic behind Singapore today.",
		wikipediaSlug: 'Srivijaya',
		tags: ['trade', 'empire', 'religion', 'navigation']
	},
	{
		id: 'asia-talas',
		title: 'Battle of Talas',
		year: 751,
		description:
			"Abbasid Arab forces defeated a Tang Chinese army near the Talas River in Central Asia. According to tradition, captured Chinese papermakers taught their craft in Samarkand.",
		significance:
			"Whether or not the papermaker story is true, paper mills spread across the Islamic world soon after — fueling a golden age of books and scholarship.",
		wikipediaSlug: 'Battle_of_Talas',
		tags: ['war', 'technology'],
		related: ['asia-paper', 'europe-paper']
	},
	{
		id: 'asia-an-lushan',
		title: 'An Lushan Rebellion',
		year: 755,
		description:
			"A Tang frontier general launched a rebellion that raged for eight years. The Tang census recorded a drop of tens of millions of people, though much of that reflects the collapse of record-keeping.",
		significance:
			"The rebellion broke Tang power and ended China's outward-looking cosmopolitan era, turning the empire inward.",
		wikipediaSlug: 'An_Lushan_rebellion',
		tags: ['war', 'collapse', 'china']
	},
	{
		id: 'asia-baghdad',
		title: 'Baghdad Founded',
		year: 762,
		description:
			"The Abbasid caliph al-Mansur built Baghdad as a perfectly round city on the Tigris. Within decades it was one of the largest and richest cities in the world.",
		significance:
			"Baghdad became the hub of an Islamic golden age, bridging Greek, Persian, and Indian knowledge.",
		wikipediaSlug: 'Round_City_of_Baghdad',
		tags: ['urban', 'empire', 'culture']
	},
	{
		id: 'asia-borobudur',
		title: 'Borobudur',
		year: 800,
		description:
			"The Sailendra dynasty built Borobudur in Java, the world's largest Buddhist monument — a stepped mountain of stone with over 2,600 relief panels and 500 Buddha statues.",
		significance:
			"Borobudur shows how deeply Indian religion shaped Southeast Asia; climbing it is a physical journey toward enlightenment.",
		wikipediaSlug: 'Borobudur',
		tags: ['architecture', 'religion', 'art']
	},
	{
		id: 'asia-khmer-empire',
		title: 'Khmer Empire Founded',
		year: 802,
		description:
			"Jayavarman II declared himself a universal monarch, founding the Khmer Empire. Over the next four centuries it built a vast network of reservoirs and canals around Angkor.",
		significance:
			"The Khmer engineered one of the largest pre-industrial urban complexes on Earth, supported by sophisticated hydraulic infrastructure.",
		wikipediaSlug: 'Khmer_Empire',
		tags: ['empire', 'civilization', 'technology', 'indigenous']
	},
	{
		id: 'asia-house-of-wisdom',
		title: 'The House of Wisdom',
		year: 830,
		description:
			"In Abbasid Baghdad, scholars translated Greek, Persian, and Indian works into Arabic. Al-Khwarizmi wrote the book whose title gave us 'algebra'; his name gave us 'algorithm.'",
		significance:
			"Islamic scholars preserved and extended classical learning; much of what Renaissance Europe 'rediscovered' arrived through Arabic translations.",
		wikipediaSlug: 'House_of_Wisdom',
		tags: ['science', 'education', 'culture'],
		related: ['asia-brahmagupta', 'europe-fibonacci']
	},
	{
		id: 'asia-diamond-sutra',
		title: 'Diamond Sutra: Oldest Printed Book',
		year: 868,
		description:
			"A woodblock-printed scroll of the Diamond Sutra, found sealed in a cave at Dunhuang, carries a date equivalent to 868 CE. It is the oldest dated printed book.",
		significance:
			"China was printing books nearly 600 years before Gutenberg — a reminder that the information revolution has deep Asian roots.",
		wikipediaSlug: 'Diamond_Sutra',
		tags: ['technology', 'communication', 'religion'],
		related: ['europe-printing-press']
	},
	{
		id: 'asia-song-dynasty',
		title: 'Song Dynasty',
		year: 960,
		description:
			"The Song dynasty presided over an economic revolution: urbanization, new strains of rice, a market economy, the magnetic compass for navigation, and a civil service selected by exam.",
		significance:
			"Song China was probably the most advanced society on Earth; historians still debate why it didn't have its own industrial revolution.",
		wikipediaSlug: 'Song_dynasty',
		tags: ['empire', 'economics', 'technology', 'china']
	},
	{
		id: 'asia-tale-of-genji',
		title: 'The Tale of Genji',
		year: 1010,
		description:
			"Murasaki Shikibu, a lady-in-waiting at the Japanese court, wrote The Tale of Genji, a long psychological narrative about love and impermanence.",
		significance:
			"Often called the world's first novel, Genji was written by a woman — and remains a cornerstone of Japanese culture a thousand years later.",
		wikipediaSlug: 'The_Tale_of_Genji',
		tags: ['literature', 'culture']
	},
	{
		id: 'asia-paper-money',
		title: 'First Government Paper Money',
		year: 1024,
		description:
			"The Song government took over the issue of jiaozi, paper notes created by merchants in Sichuan, making them the world's first government-issued paper currency.",
		significance:
			"Paper money made large-scale commerce possible — and the Song also discovered inflation, when they printed too much of it.",
		wikipediaSlug: 'Jiaozi_(currency)',
		tags: ['economics', 'technology', 'china']
	},
	{
		id: 'asia-avicenna',
		title: "Avicenna's Canon of Medicine",
		year: 1025,
		description:
			"The Persian polymath Ibn Sina completed the Canon of Medicine, a vast synthesis of Greek, Persian, and Indian medical knowledge with his own clinical observations.",
		significance:
			"The Canon was a standard medical textbook in Europe and the Islamic world for about 600 years.",
		wikipediaSlug: 'The_Canon_of_Medicine',
		tags: ['medicine', 'science']
	},
	{
		id: 'asia-movable-type',
		title: 'Movable Type in China',
		year: 1040,
		description:
			"Artisan Bi Sheng invented movable type using fired clay characters. In 1377, Korea's Jikji became the oldest surviving book printed with movable metal type.",
		significance:
			"Movable type was invented in East Asia centuries before Gutenberg; it caught on less there partly because Chinese requires thousands of characters.",
		wikipediaSlug: 'Bi_Sheng',
		tags: ['technology', 'communication', 'china'],
		related: ['europe-printing-press']
	},
	{
		id: 'asia-gunpowder',
		title: 'Gunpowder Formula Recorded',
		year: 1044,
		description:
			"The Wujing Zongyao, a Song military manual, records the oldest known gunpowder formulas. Chinese alchemists had stumbled on the mixture while searching for an elixir of life.",
		significance:
			"Gunpowder reshaped warfare and politics worldwide — making castles obsolete and giving states with guns a decisive edge.",
		wikipediaSlug: 'History_of_gunpowder',
		tags: ['technology', 'war', 'china']
	},
	{
		id: 'asia-manzikert',
		title: 'Battle of Manzikert',
		year: 1071,
		description:
			"The Seljuk Turks routed the Byzantine army and captured Emperor Romanos IV. Turkish tribes poured into Anatolia over the following decades.",
		significance:
			"Manzikert began the transformation of Anatolia into Turkey, and Byzantium's call for help set the Crusades in motion.",
		wikipediaSlug: 'Battle_of_Manzikert',
		tags: ['war', 'empire'],
		related: ['europe-first-crusade']
	},
	{
		id: 'asia-angkor-wat',
		title: 'Angkor Wat',
		year: 1150,
		description:
			"Suryavarman II built Angkor Wat as a Hindu temple to Vishnu; it later became Buddhist. Angkor was home to perhaps hundreds of thousands of people, spread over a vast area.",
		significance:
			"The largest religious monument in the world, Angkor Wat is on Cambodia's flag. Angkor's decline, linked to monsoon failures and stressed waterworks, is a case study in climate fragility.",
		wikipediaSlug: 'Angkor_Wat',
		tags: ['architecture', 'religion', 'indigenous']
	},
	{
		id: 'asia-saladin',
		title: 'Saladin Retakes Jerusalem',
		year: 1187,
		description:
			"Saladin, sultan of Egypt and Syria, destroyed the Crusader army at Hattin and recaptured Jerusalem — sparing its Christian inhabitants, unlike the Crusaders' massacre of 1099.",
		significance:
			"Saladin became a legend of chivalry in both East and West; his victory provoked the Third Crusade and ensured Jerusalem stayed largely in Muslim hands.",
		wikipediaSlug: 'Saladin',
		tags: ['war', 'religion'],
		related: ['europe-first-crusade']
	},
	{
		id: 'asia-mongol-empire',
		title: 'Mongol Empire',
		year: 1206,
		description:
			"Genghis Khan united the Mongol tribes and launched a campaign of conquest that created the largest contiguous land empire in history, spanning from Korea to Hungary.",
		significance:
			"The Mongol Empire connected East and West through the Silk Road, transmitting technologies, ideas, and the Black Death across Eurasia.",
		wikipediaSlug: 'Mongol_Empire',
		tags: ['empire', 'military', 'trade'],
		related: ['europe-mongol-invasion', 'asia-black-death-origin']
	},
	{
		id: 'asia-delhi-sultanate',
		title: 'Delhi Sultanate',
		year: 1206,
		description:
			"Qutb ud-Din Aibak, a former slave-soldier, founded the Delhi Sultanate. It repelled repeated Mongol invasions and ruled much of northern India for three centuries.",
		significance:
			"The Sultanate brought Persian culture and Islam deep into India and built the Qutb Minar; Indo-Islamic civilization took shape here.",
		wikipediaSlug: 'Delhi_Sultanate',
		tags: ['empire', 'religion']
	},
	{
		id: 'asia-baghdad-sack',
		title: 'Mongols Sack Baghdad',
		year: 1258,
		description:
			"Hulagu Khan's army destroyed Baghdad and executed the last Abbasid caliph. Chroniclers said the Tigris ran black with ink from the books thrown into it.",
		significance:
			"The sack is often taken as the end of the Islamic golden age. Baghdad did not recover its position for centuries.",
		wikipediaSlug: 'Siege_of_Baghdad',
		tags: ['war', 'collapse']
	},
	{
		id: 'asia-ain-jalut',
		title: 'Battle of Ain Jalut',
		year: 1260,
		description:
			"The Mamluks of Egypt defeated a Mongol army in Palestine — the first time the Mongols suffered a decisive defeat in open battle.",
		significance:
			"Ain Jalut halted Mongol expansion into Africa and preserved Egypt as the center of the Arab world.",
		wikipediaSlug: 'Battle_of_Ain_Jalut',
		tags: ['war', 'empire']
	},
	{
		id: 'asia-yuan',
		title: 'Kublai Khan Founds the Yuan',
		year: 1271,
		description:
			"Genghis Khan's grandson Kublai declared the Yuan dynasty and conquered the Southern Song, ruling all of China from a new capital at Khanbaliq — today's Beijing.",
		significance:
			"For the first time, all of China was ruled by foreigners. Yuan China's openness drew travelers like Marco Polo.",
		wikipediaSlug: 'Yuan_dynasty',
		tags: ['empire', 'china'],
		related: ['europe-marco-polo']
	},
	{
		id: 'asia-kamikaze',
		title: 'Mongol Invasions of Japan',
		year: 1281,
		description:
			"Kublai Khan sent huge fleets against Japan in 1274 and 1281. Both were wrecked by storms — the 'divine winds,' or kamikaze — and fierce samurai resistance.",
		significance:
			"Japan's escape from Mongol rule fed a belief in divine protection that would be invoked, tragically, in 1944–45.",
		wikipediaSlug: 'Mongol_invasions_of_Japan',
		tags: ['war', 'environment']
	},
	{
		id: 'asia-black-death-origin',
		title: 'Plague Spreads Along the Silk Road',
		year: 1338,
		description:
			"Gravestones near Lake Issyk-Kul in Kyrgyzstan record deaths from 'pestilence' in 1338–39, and ancient DNA from them matches the Black Death strain. The plague then moved west along trade routes.",
		significance:
			"The same connectivity that made the Mongol world rich made it deadly. The Black Death was the dark side of globalization.",
		wikipediaSlug: 'Black_Death',
		tags: ['pandemic', 'trade'],
		related: ['europe-black-death', 'africa-black-death', 'asia-mongol-empire']
	},
	{
		id: 'asia-ming',
		title: 'Ming Dynasty Founded',
		year: 1368,
		description:
			"Zhu Yuanzhang, a former peasant and monk, drove out the Mongols and founded the Ming dynasty. The Ming rebuilt the Great Wall into the form we see today and built the Forbidden City.",
		significance:
			"The Ming restored Han Chinese rule and presided over a period of prosperity and population growth; its porcelain became the world's first global luxury brand.",
		wikipediaSlug: 'Ming_dynasty',
		tags: ['empire', 'china']
	},
	{
		id: 'asia-timur',
		title: 'Conquests of Timur',
		year: 1370,
		description:
			"Timur (Tamerlane) built an empire from Samarkand, sacking Delhi, Baghdad, and Damascus. His campaigns may have killed 17 million people — about 5% of the world's population.",
		significance:
			"Timur was the last great nomadic conqueror. He devastated cities across Asia, yet his capital Samarkand became a jewel of Islamic architecture.",
		wikipediaSlug: 'Timur',
		tags: ['war', 'empire']
	},
	{
		id: 'asia-zheng-he',
		title: 'Voyages of Zheng He',
		year: 1405,
		description:
			"Admiral Zheng He led seven Ming treasure fleets — some with over 300 ships — across the Indian Ocean as far as the Swahili coast. Then the emperor stopped the voyages.",
		significance:
			"China had the naval power to dominate world trade decades before Columbus, but chose to turn inward — one of history's great 'what-ifs.'",
		wikipediaSlug: 'Zheng_He',
		tags: ['exploration', 'navigation', 'trade', 'china'],
		related: ['africa-swahili-coast']
	},
	{
		id: 'asia-ulugh-beg',
		title: 'Ulugh Beg Observatory',
		year: 1420,
		description:
			"The Timurid ruler and astronomer Ulugh Beg built a massive observatory in Samarkand and produced a star catalog with over 1,000 stars, the most accurate of its time.",
		significance:
			"Samarkand was the world capital of astronomy for a generation — a high point of Islamic science before its center of gravity shifted to Europe.",
		wikipediaSlug: 'Ulugh_Beg_Observatory',
		tags: ['science', 'astronomy']
	},
	{
		id: 'asia-hangul',
		title: 'Hangul Created',
		year: 1443,
		description:
			"King Sejong of Korea and his scholars created Hangul, a phonetic alphabet whose letter shapes reflect the positions of the mouth and tongue.",
		significance:
			"Sejong designed Hangul so that common people could read — a radical act of democratizing literacy. Linguists consider it one of the most logical writing systems ever made.",
		wikipediaSlug: 'Hangul',
		tags: ['communication', 'culture', 'education']
	},
	{
		id: 'asia-coffee',
		title: 'Coffee in Yemen',
		year: 1450,
		description:
			"Sufi mystics in Yemen began drinking coffee to stay awake through night prayers. From the port of Mocha, coffee spread to Mecca, Cairo, and Istanbul.",
		significance:
			"Coffee created the coffeehouse — a new kind of public space for news, debate, and commerce that would later incubate the Enlightenment in Europe.",
		wikipediaSlug: 'History_of_coffee',
		tags: ['trade', 'culture', 'religion'],
		related: ['europe-coffeehouses']
	},
	{
		id: 'asia-fall-of-constantinople',
		title: 'Fall of Constantinople',
		year: 1453,
		description:
			"Ottoman Sultan Mehmed II conquered Constantinople, ending the Byzantine Empire after 1,100 years. The city became Istanbul, capital of the Ottoman Empire.",
		significance:
			"The fall of Constantinople ended the Roman Empire's last remnant, shifted trade routes westward, and helped trigger the European Age of Exploration.",
		wikipediaSlug: 'Fall_of_Constantinople',
		tags: ['war', 'empire', 'trade'],
		related: ['europe-constantinople', 'europe-vienna']
	},
	{
		id: 'asia-safavid',
		title: 'Safavid Iran',
		year: 1501,
		description:
			"Ismail I founded the Safavid dynasty and made Twelver Shi'ism the state religion of Iran, often by force. Under Shah Abbas, Isfahan became one of the world's most beautiful cities.",
		significance:
			"The Safavids made Iran the center of Shi'a Islam, creating the Sunni-Shi'a geopolitical divide that still shapes the Middle East.",
		wikipediaSlug: 'Safavid_Iran',
		tags: ['empire', 'religion']
	},
	{
		id: 'asia-portuguese-goa',
		title: 'Portugal Seizes Goa',
		year: 1510,
		description:
			"Afonso de Albuquerque captured Goa, then Malacca in 1511, building a chain of fortified ports to control the Indian Ocean spice trade by force.",
		significance:
			"Portugal introduced armed trade to the Indian Ocean, where commerce had been largely open. Goa stayed Portuguese until 1961.",
		wikipediaSlug: 'Portuguese_India',
		tags: ['colonialism', 'trade', 'war'],
		related: ['europe-vasco-da-gama', 'africa-dias-cape']
	},
	{
		id: 'asia-mactan',
		title: 'Battle of Mactan',
		year: 1521,
		description:
			"Ferdinand Magellan was killed in the Philippines by warriors of the chief Lapulapu after trying to force them to submit to Spain. His crew continued westward to complete the first circumnavigation.",
		significance:
			"Lapulapu is a Philippine national hero — the first Filipino to resist European colonization. The voyage still proved the world could be sailed around.",
		wikipediaSlug: 'Battle_of_Mactan',
		tags: ['exploration', 'colonialism', 'war'],
		related: ['europe-magellan', 'oceania-magellan']
	},
	{
		id: 'asia-mughal',
		title: 'Mughal Empire Founded',
		year: 1526,
		description:
			"Babur, a descendant of Timur and Genghis Khan, defeated the Delhi Sultanate at Panipat using field artillery. His grandson Akbar built a tolerant, cosmopolitan empire.",
		significance:
			"At its height Mughal India produced about a quarter of the world's economic output and created masterpieces like the Taj Mahal.",
		wikipediaSlug: 'Mughal_Empire',
		tags: ['empire', 'culture', 'war']
	},
	{
		id: 'asia-manila-galleon',
		title: 'Manila Galleon Trade',
		year: 1565,
		description:
			"Spanish navigators found a reliable eastward route across the Pacific, launching the Manila–Acapulco galleons. For 250 years they carried American silver to Asia and silk and porcelain back.",
		significance:
			"The galleons created the first truly global trade network. Chinese demand for silver drove mining in Potosí and Mexico — connecting every inhabited continent for the first time.",
		wikipediaSlug: 'Manila_galleon',
		tags: ['trade', 'economics', 'navigation'],
		related: ['sa-potosi', 'na-mexican-silver', 'europe-price-revolution', 'oceania-spanish-guam']
	},
	{
		id: 'asia-new-world-crops',
		title: 'American Crops Reach China',
		year: 1594,
		description:
			"During a famine in Fujian, the governor promoted the sweet potato, recently brought from the Philippines. Maize and peanuts also spread through China.",
		significance:
			"American crops grew on hillsides where rice couldn't, contributing to China's population doubling under the Qing.",
		wikipediaSlug: 'Columbian_exchange',
		tags: ['agriculture', 'trade', 'environment'],
		related: ['europe-columbian-exchange', 'africa-new-world-crops', 'sa-potato']
	},
	{
		id: 'asia-ricci',
		title: 'Matteo Ricci in Beijing',
		year: 1601,
		description:
			"The Jesuit Matteo Ricci, fluent in classical Chinese, became the first European invited into the Forbidden City. He translated Euclid into Chinese and Confucius into Latin.",
		significance:
			"Ricci attempted a genuine meeting of civilizations, adapting Christianity to Chinese culture rather than replacing it.",
		wikipediaSlug: 'Matteo_Ricci',
		tags: ['religion', 'culture', 'science']
	},
	{
		id: 'asia-tokugawa',
		title: 'Tokugawa Shogunate',
		year: 1603,
		description:
			"After victory at Sekigahara, Tokugawa Ieyasu became shogun, ending over a century of civil war. His dynasty ruled Japan for 265 years of peace.",
		significance:
			"The Tokugawa peace created a literate, urban, commercial society — the foundation that made Japan's rapid modernization possible after 1868.",
		wikipediaSlug: 'Tokugawa_shogunate',
		tags: ['government', 'politics']
	},
	{
		id: 'asia-banda',
		title: 'Dutch Conquest of the Banda Islands',
		year: 1621,
		description:
			"To monopolize nutmeg, the Dutch East India Company under Jan Pieterszoon Coen conquered the Banda Islands. Most of the population was killed, enslaved, or driven out.",
		significance:
			"The Banda massacre shows the true cost of the spice trade: an entire people destroyed for a seasoning.",
		wikipediaSlug: 'Dutch_conquest_of_the_Banda_Islands',
		tags: ['colonialism', 'trade', 'war'],
		related: ['europe-voc']
	},
	{
		id: 'asia-taj-mahal',
		title: 'Taj Mahal',
		year: 1632,
		description:
			"Mughal Emperor Shah Jahan began building the Taj Mahal in Agra as a tomb for his wife Mumtaz Mahal. About 20,000 workers labored on it for over two decades.",
		significance:
			"The Taj Mahal is the finest expression of Indo-Islamic architecture and a symbol of India recognized worldwide.",
		wikipediaSlug: 'Taj_Mahal',
		tags: ['architecture', 'art']
	},
	{
		id: 'asia-sakoku',
		title: 'Japan Closes Its Borders',
		year: 1639,
		description:
			"The Tokugawa shogunate expelled the Portuguese, banned Christianity, and restricted foreign trade to a small Dutch post at Dejima and Chinese merchants at Nagasaki.",
		significance:
			"Sakoku isolated Japan for over two centuries, letting a distinctive culture flourish — and leaving it to confront Western industrial power suddenly in 1853.",
		wikipediaSlug: 'Sakoku',
		tags: ['politics', 'trade', 'religion']
	},
	{
		id: 'asia-ming-collapse',
		title: 'Fall of the Ming',
		year: 1644,
		description:
			"Drought, famine, and epidemics during the coldest phase of the Little Ice Age fueled peasant rebellions. Rebels took Beijing, the last Ming emperor hanged himself, and the Manchu Qing seized power.",
		significance:
			"The fall of the Ming was part of a global 17th-century crisis; climate cooling drove wars and revolts from China to Europe at the same time.",
		wikipediaSlug: 'Transition_from_Ming_to_Qing',
		tags: ['collapse', 'environment', 'china'],
		related: ['europe-little-ice-age']
	},
	{
		id: 'asia-plassey',
		title: 'Battle of Plassey',
		year: 1757,
		description:
			"Robert Clive's British East India Company forces defeated the Nawab of Bengal, largely by bribing his commander. The Company took over the revenues of India's richest province.",
		significance:
			"A trading company became a ruling power. Plassey began nearly two centuries of British rule in India.",
		wikipediaSlug: 'Battle_of_Plassey',
		tags: ['colonialism', 'war', 'economics']
	},
	{
		id: 'asia-bengal-famine-1770',
		title: 'Bengal Famine of 1770',
		year: 1770,
		description:
			"After a failed monsoon, famine killed perhaps up to a third of Bengal's population while the East India Company maintained, and even raised, its tax collections.",
		significance:
			"The famine exposed the cost of corporate rule and led Parliament to begin regulating the Company — a first step in the long, uneven fight over colonial accountability.",
		wikipediaSlug: 'Great_Bengal_famine_of_1770',
		tags: ['colonialism', 'environment', 'collapse']
	},
	{
		id: 'asia-tambora',
		title: 'Tambora Erupts',
		year: 1815,
		description:
			"Mount Tambora on Sumbawa, Indonesia, produced the largest eruption in recorded history, killing tens of thousands directly and through starvation.",
		significance:
			"Tambora's ash cooled the whole planet, causing 1816's 'Year Without a Summer' in Europe and North America — and possibly a cholera outbreak in Bengal.",
		wikipediaSlug: '1815_eruption_of_Mount_Tambora',
		tags: ['environment'],
		related: ['europe-year-without-summer']
	},
	{
		id: 'asia-singapore',
		title: 'Founding of Modern Singapore',
		year: 1819,
		description:
			"Stamford Raffles established a British trading post on Singapore, at the southern tip of the Malay Peninsula, as a free port.",
		significance:
			"Singapore's position at the Strait of Malacca made it one of the world's busiest ports — a modern heir to Srivijaya.",
		wikipediaSlug: '1819_Singapore_Treaty',
		tags: ['trade', 'colonialism', 'urban'],
		related: ['asia-srivijaya']
	},
	{
		id: 'asia-opium-war',
		title: 'First Opium War',
		year: 1839,
		description:
			"When China tried to stop the British opium trade, Britain went to war. The Treaty of Nanjing forced China to pay reparations, open ports, and cede Hong Kong.",
		significance:
			"China calls the next hundred years the 'Century of Humiliation' — a memory that still shapes its foreign policy.",
		wikipediaSlug: 'First_Opium_War',
		tags: ['war', 'colonialism', 'trade', 'china']
	},
	{
		id: 'asia-taiping',
		title: 'Taiping Rebellion',
		year: 1850,
		description:
			"Hong Xiuquan, who believed he was the younger brother of Jesus, led a rebellion that seized much of southern China. Fourteen years of war killed 20–30 million people.",
		significance:
			"The deadliest civil war in history fatally weakened the Qing dynasty and is barely known in the West.",
		wikipediaSlug: 'Taiping_Rebellion',
		tags: ['war', 'religion', 'china']
	},
	{
		id: 'asia-perry',
		title: "Perry's Black Ships",
		year: 1853,
		description:
			"US Commodore Matthew Perry sailed steam warships into Edo Bay and demanded that Japan open its ports. Japan signed a treaty the following year.",
		significance:
			"Perry's arrival ended Japan's isolation and set off the crisis that toppled the shogunate.",
		wikipediaSlug: 'Perry_Expedition',
		tags: ['politics', 'colonialism', 'technology']
	},
	{
		id: 'asia-indian-rebellion',
		title: 'Indian Rebellion of 1857',
		year: 1857,
		description:
			"Indian soldiers of the East India Company mutinied, sparked by rumors that rifle cartridges were greased with cow and pig fat. The revolt spread across northern India before being brutally crushed.",
		significance:
			"Britain abolished the East India Company and ruled India directly. Indian nationalists later called it the First War of Independence.",
		wikipediaSlug: 'Indian_Rebellion_of_1857',
		tags: ['war', 'colonialism', 'independence']
	},
	{
		id: 'asia-meiji',
		title: 'Meiji Restoration',
		year: 1868,
		description:
			"Reformers overthrew the shogunate and restored imperial rule, then dismantled the samurai class and rapidly built railways, factories, schools, and a modern army.",
		significance:
			"Japan became the first non-Western nation to industrialize, proving modernization was not uniquely European — and soon became a colonial power itself.",
		wikipediaSlug: 'Meiji_Restoration',
		tags: ['revolution', 'technology', 'politics']
	},
	{
		id: 'asia-krakatoa',
		title: 'Krakatoa Explodes',
		year: 1883,
		description:
			"The eruption of Krakatoa between Java and Sumatra produced one of the loudest sounds in recorded history and tsunamis that killed over 36,000 people.",
		significance:
			"Krakatoa was the first global media disaster, reported within hours by telegraph. Its ash produced vivid red sunsets around the world.",
		wikipediaSlug: '1883_eruption_of_Krakatoa',
		tags: ['environment', 'communication']
	},
	{
		id: 'asia-trans-siberian',
		title: 'Trans-Siberian Railway',
		year: 1891,
		description:
			"Russia began building a railway from Moscow to Vladivostok, over 9,000 km. It opened Siberia to millions of settlers.",
		significance:
			"The longest railway in the world bound Siberia to Russia and projected Russian power into the Pacific — straight into conflict with Japan.",
		wikipediaSlug: 'Trans-Siberian_Railway',
		tags: ['technology', 'migration', 'empire']
	},
	{
		id: 'asia-russo-japanese',
		title: 'Japan Defeats Russia',
		year: 1905,
		description:
			"Japan destroyed Russia's Baltic Fleet at Tsushima and won the Russo-Japanese War — the first time in modern history an Asian power defeated a European one.",
		significance:
			"The victory electrified anti-colonial movements from India to Egypt and helped trigger Russia's 1905 revolution.",
		wikipediaSlug: 'Russo-Japanese_War',
		tags: ['war', 'empire']
	},
	{
		id: 'asia-persian-oil',
		title: 'Oil Struck in Persia',
		year: 1908,
		description:
			"British prospectors struck oil at Masjed Soleyman in southwestern Iran, the first major oil find in the Middle East. The Anglo-Persian Oil Company — later BP — was founded the next year.",
		significance:
			"Middle Eastern oil would fuel the 20th century and make the region a focus of great-power rivalry, coups, and wars.",
		wikipediaSlug: 'Masjed_Soleyman',
		tags: ['economics', 'technology', 'colonialism']
	},
	{
		id: 'asia-xinhai',
		title: 'Chinese Revolution of 1911',
		year: 1911,
		description:
			"An uprising in Wuchang spread across China and forced the abdication of the last Qing emperor, a five-year-old boy. Sun Yat-sen proclaimed a republic.",
		significance:
			"Two thousand years of imperial rule ended, but the republic quickly fractured into warlordism — opening the path to civil war and communism.",
		wikipediaSlug: '1911_Revolution',
		tags: ['revolution', 'politics', 'china']
	},
	{
		id: 'asia-armenian-genocide',
		title: 'Armenian Genocide',
		year: 1915,
		description:
			"The Ottoman government deported and massacred its Armenian population during World War I. Roughly a million people were killed.",
		significance:
			"The Armenian genocide was one of the cases that led Raphael Lemkin to coin the word 'genocide.' Turkey still denies it.",
		wikipediaSlug: 'Armenian_genocide',
		tags: ['war', 'politics'],
		related: ['europe-ww1']
	},
	{
		id: 'asia-turkey',
		title: 'Republic of Turkey',
		year: 1923,
		description:
			"Mustafa Kemal Atatürk founded the Turkish Republic from the ruins of the Ottoman Empire, abolished the caliphate, replaced Arabic script with Latin, and gave women the vote.",
		significance:
			"Atatürk's top-down secularization was one of the most radical modernization programs of the century; its legacy is still contested in Turkish politics.",
		wikipediaSlug: 'Mustafa_Kemal_Atatürk',
		tags: ['politics', 'revolution']
	},
	{
		id: 'asia-salt-march',
		title: "Gandhi's Salt March",
		year: 1930,
		description:
			"Mohandas Gandhi walked 390 km to the sea to make salt in defiance of the British monopoly. Tens of thousands of Indians were arrested in the civil disobedience that followed.",
		significance:
			"The Salt March showed the world the power of nonviolent resistance — a method later used by Martin Luther King Jr. and Nelson Mandela.",
		wikipediaSlug: 'Salt_March',
		tags: ['independence', 'politics'],
		related: ['na-montgomery']
	},
	{
		id: 'asia-nanjing',
		title: 'Nanjing Massacre',
		year: 1937,
		description:
			"After capturing China's capital, Japanese troops killed tens of thousands to hundreds of thousands of civilians and prisoners and raped tens of thousands of women over six weeks.",
		significance:
			"Nanjing became the defining atrocity of Japan's war in China; disputes over its memory still poison Chinese–Japanese relations.",
		wikipediaSlug: 'Nanjing_Massacre',
		tags: ['war']
	},
	{
		id: 'asia-hiroshima',
		title: 'Atomic Bomb — Hiroshima',
		year: 1945,
		description:
			'The United States dropped atomic bombs on Hiroshima (Aug 6) and Nagasaki (Aug 9), killing over 200,000 people and bringing World War II to an end.',
		significance:
			"Nuclear weapons fundamentally changed warfare and international relations — making a direct war between great powers potentially civilization-ending.",
		wikipediaSlug: 'Atomic_bombings_of_Hiroshima_and_Nagasaki',
		tags: ['war', 'technology', 'politics'],
		related: ['na-trinity', 'oceania-pearl-harbor', 'europe-ww2-ends']
	},
	{
		id: 'asia-indian-independence',
		title: 'Indian Independence and Partition',
		year: 1947,
		description:
			"British India was divided into India and Pakistan. Partition triggered one of the largest migrations in history — around 15 million people — and communal violence that killed hundreds of thousands to two million.",
		significance:
			"The independence of the world's largest colony signaled the end of the European empires; Partition's wounds still define India–Pakistan relations.",
		wikipediaSlug: 'Partition_of_India',
		tags: ['independence', 'migration', 'politics'],
		related: ['africa-ghana-independence']
	},
	{
		id: 'asia-israel',
		title: 'State of Israel Founded',
		year: 1948,
		description:
			"Israel declared independence as the British Mandate ended. In the war that followed, around 700,000 Palestinians fled or were expelled — the Nakba, or 'catastrophe.'",
		significance:
			"Israel's founding created a refuge for Jews after the Holocaust and an unresolved conflict that remains at the center of world politics.",
		wikipediaSlug: 'Israeli_Declaration_of_Independence',
		tags: ['politics', 'war', 'migration'],
		related: ['europe-holocaust']
	},
	{
		id: 'asia-prc',
		title: "People's Republic of China",
		year: 1949,
		description:
			"Mao Zedong proclaimed the People's Republic of China after the Communists won the civil war. The Nationalist government retreated to Taiwan.",
		significance:
			"Communist victory in the world's most populous country transformed the Cold War; the Taiwan question remains one of the world's most dangerous flashpoints.",
		wikipediaSlug: "Proclamation_of_the_People's_Republic_of_China",
		tags: ['revolution', 'politics', 'china', 'cold-war']
	},
	{
		id: 'asia-korean-war',
		title: 'Korean War',
		year: 1950,
		endYear: 1953,
		description:
			"North Korea invaded the South; a US-led UN coalition and then China entered the war. After some 3 million deaths, it ended in an armistice near the original border.",
		significance:
			"The first 'hot' war of the Cold War never formally ended. It produced two Koreas on radically different paths.",
		wikipediaSlug: 'Korean_War',
		tags: ['war', 'cold-war']
	},
	{
		id: 'asia-bandung',
		title: 'Bandung Conference',
		year: 1955,
		description:
			"Leaders of 29 Asian and African nations, including Nehru, Zhou Enlai, Sukarno, and Nasser, met in Indonesia to oppose colonialism and Cold War alignment.",
		significance:
			"Bandung gave birth to the Non-Aligned Movement and the idea of a 'Global South' with its own voice in world affairs.",
		wikipediaSlug: 'Bandung_Conference',
		tags: ['politics', 'independence', 'cold-war'],
		related: ['africa-ghana-independence']
	},
	{
		id: 'asia-sputnik',
		title: 'Sputnik Launched',
		year: 1957,
		description:
			"The Soviet Union launched Sputnik 1 from Baikonur in Kazakhstan — the first artificial satellite. In 1961, Yuri Gagarin became the first human in space from the same site.",
		significance:
			"Sputnik shocked the United States into the Space Race, massive science education spending, and the creation of NASA and ARPA — which built the internet's precursor.",
		wikipediaSlug: 'Sputnik_1',
		tags: ['technology', 'space', 'cold-war'],
		related: ['na-moon-landing', 'na-arpanet']
	},
	{
		id: 'asia-great-leap',
		title: 'Great Leap Forward Famine',
		year: 1959,
		description:
			"Mao's campaign to industrialize overnight forced peasants into communes and backyard furnaces while officials exaggerated harvests. Grain was exported as people starved.",
		significance:
			"With an estimated 15 to 45 million deaths, it was the deadliest famine in history — a disaster of ideology, not nature.",
		wikipediaSlug: 'Great_Chinese_Famine',
		tags: ['collapse', 'politics', 'china']
	},
	{
		id: 'asia-aral-sea',
		title: 'Draining the Aral Sea',
		year: 1960,
		description:
			"Soviet planners diverted the rivers feeding the Aral Sea to irrigate cotton. Once the world's fourth-largest lake, it shrank to a fraction of its size by the 2000s.",
		significance:
			"The Aral Sea is one of the worst human-made environmental disasters — dust storms of salt and pesticide still sicken the region.",
		wikipediaSlug: 'Aral_Sea',
		tags: ['environment', 'agriculture']
	},
	{
		id: 'asia-shinkansen',
		title: 'Shinkansen Bullet Train',
		year: 1964,
		description:
			"Japan opened the Tokaido Shinkansen between Tokyo and Osaka just before the Tokyo Olympics — the world's first high-speed rail line.",
		significance:
			"The bullet train announced Japan's postwar recovery to the world and set the model for high-speed rail everywhere.",
		wikipediaSlug: 'Shinkansen',
		tags: ['technology']
	},
	{
		id: 'asia-green-revolution',
		title: 'Green Revolution in India',
		year: 1965,
		description:
			"Facing famine, India adopted high-yield wheat and rice varieties, fertilizer, and irrigation. Wheat production in Punjab more than doubled within a few years.",
		significance:
			"The Green Revolution likely saved hundreds of millions from starvation — at the cost of depleted aquifers and heavy chemical use.",
		wikipediaSlug: 'Green_Revolution_in_India',
		tags: ['agriculture', 'science', 'environment']
	},
	{
		id: 'asia-vietnam-war',
		title: 'Vietnam War',
		year: 1965,
		endYear: 1975,
		description:
			"The US escalated its involvement in Vietnam, eventually deploying over 500,000 troops. North Vietnam captured Saigon in 1975. Millions of Vietnamese died.",
		significance:
			"Vietnam was a defeat for American power and a victory for anti-colonial nationalism; it reshaped US politics for a generation.",
		wikipediaSlug: 'Vietnam_War',
		tags: ['war', 'cold-war', 'independence']
	},
	{
		id: 'asia-cultural-revolution',
		title: 'Cultural Revolution',
		year: 1966,
		description:
			"Mao mobilized young Red Guards to attack 'bourgeois' elements. Teachers, officials, and intellectuals were humiliated, imprisoned, or killed; temples and artifacts destroyed.",
		significance:
			"A decade of chaos cost hundreds of thousands to millions of lives and left a generation without education; it remains a sensitive topic in China.",
		wikipediaSlug: 'Cultural_Revolution',
		tags: ['politics', 'culture', 'china']
	},
	{
		id: 'asia-oil-crisis',
		title: '1973 Oil Crisis',
		year: 1973,
		description:
			"Arab oil producers imposed an embargo on the US and others over support for Israel. Oil prices quadrupled.",
		significance:
			"The crisis ended the postwar boom, moved vast wealth to the Gulf, and kicked off efforts at energy efficiency and alternatives.",
		wikipediaSlug: '1973_oil_crisis',
		tags: ['economics', 'politics']
	},
	{
		id: 'asia-khmer-rouge',
		title: 'Cambodian Genocide',
		year: 1975,
		description:
			"The Khmer Rouge emptied Cambodia's cities and forced the population into rural labor camps. Execution, starvation, and disease killed around a quarter of the population.",
		significance:
			"The Killing Fields stand among the 20th century's worst crimes — a nation turned against itself in the name of utopia.",
		wikipediaSlug: 'Cambodian_genocide',
		tags: ['politics', 'collapse']
	},
	{
		id: 'asia-deng-reform',
		title: 'Reform and Opening Up',
		year: 1978,
		description:
			"Deng Xiaoping began dismantling Mao-era collective farming and opening China to foreign investment through special economic zones like Shenzhen.",
		significance:
			"China's reforms lifted around 800 million people out of extreme poverty — the largest such reduction in history — and remade the world economy.",
		wikipediaSlug: 'Reform_and_opening_up',
		tags: ['economics', 'politics', 'china']
	},
	{
		id: 'asia-iranian-revolution',
		title: 'Iranian Revolution',
		year: 1979,
		description:
			"Mass protests drove the Shah from Iran and brought Ayatollah Khomeini to power, establishing an Islamic Republic.",
		significance:
			"The revolution showed political Islam could topple a Western-backed regime; it reshaped the Middle East and US foreign policy for decades.",
		wikipediaSlug: 'Iranian_Revolution',
		tags: ['revolution', 'religion', 'politics']
	},
	{
		id: 'asia-bhopal',
		title: 'Bhopal Disaster',
		year: 1984,
		description:
			"A gas leak at a Union Carbide pesticide plant in Bhopal, India, released methyl isocyanate over sleeping neighborhoods. Thousands died within days.",
		significance:
			"The world's worst industrial disaster became a symbol of corporate impunity in the Global South; survivors still seek justice.",
		wikipediaSlug: 'Bhopal_disaster',
		tags: ['environment', 'economics']
	},
	{
		id: 'asia-tsmc',
		title: 'TSMC and the Chip Foundry',
		year: 1987,
		description:
			"Morris Chang founded Taiwan Semiconductor Manufacturing Company with a new business model: manufacture chips designed by others.",
		significance:
			"TSMC now makes the majority of the world's most advanced chips — making a single island essential to the global economy.",
		wikipediaSlug: 'TSMC',
		tags: ['technology', 'economics']
	},
	{
		id: 'asia-tiananmen',
		title: 'Tiananmen Square',
		year: 1989,
		description:
			"Students and workers occupied Beijing's Tiananmen Square for weeks calling for political reform. On June 4, the army cleared the area, killing hundreds or more.",
		significance:
			"Tiananmen set China's path: economic opening without political liberalization. The event is still censored inside China.",
		wikipediaSlug: '1989_Tiananmen_Square_protests_and_massacre',
		tags: ['politics', 'democracy', 'china'],
		related: ['europe-fall-berlin-wall']
	},
	{
		id: 'asia-india-liberalization',
		title: 'India Opens Its Economy',
		year: 1991,
		description:
			"Facing a balance-of-payments crisis, India dismantled much of the 'License Raj,' cutting tariffs and welcoming foreign investment.",
		significance:
			"Liberalization launched decades of rapid growth and made India one of the world's largest economies.",
		wikipediaSlug: 'Economic_liberalisation_in_India',
		tags: ['economics', 'politics']
	},
	{
		id: 'asia-tsunami',
		title: 'Indian Ocean Tsunami',
		year: 2004,
		description:
			"A magnitude 9.1 earthquake off Sumatra triggered tsunamis that killed around 230,000 people in 14 countries.",
		significance:
			"One of the deadliest natural disasters in history led to the creation of an Indian Ocean tsunami warning system.",
		wikipediaSlug: '2004_Indian_Ocean_earthquake_and_tsunami',
		tags: ['environment']
	},
	{
		id: 'asia-syrian-war',
		title: 'Syrian Civil War',
		year: 2011,
		description:
			"Peaceful protests inspired by the Arab Spring were met with violence by the Assad regime, spiraling into a civil war involving regional and world powers. The Assad regime fell in December 2024.",
		significance:
			"The war killed hundreds of thousands and displaced over half the population; the refugee flows reshaped European politics.",
		wikipediaSlug: 'Syrian_civil_war',
		tags: ['war', 'migration', 'politics'],
		related: ['africa-arab-spring', 'europe-migrant-crisis']
	},
	{
		id: 'asia-fukushima',
		title: 'Fukushima Disaster',
		year: 2011,
		description:
			"A magnitude 9.0 earthquake and tsunami killed nearly 20,000 people in Japan and caused meltdowns at the Fukushima Daiichi nuclear plant.",
		significance:
			"Fukushima triggered a global retreat from nuclear power — Germany decided to phase out its reactors — just as the world needed low-carbon energy.",
		wikipediaSlug: 'Fukushima_nuclear_accident',
		tags: ['environment', 'technology'],
		related: ['europe-chernobyl']
	},
	{
		id: 'asia-covid',
		title: 'COVID-19 Pandemic',
		year: 2019,
		description:
			"A new coronavirus identified in Wuhan, China, spread worldwide within months. Lockdowns shut down much of the global economy; mRNA vaccines were developed in under a year.",
		significance:
			"COVID-19 killed millions, accelerated remote work and digital life, and showed how interconnected — and fragile — the modern world is.",
		wikipediaSlug: 'COVID-19_pandemic',
		tags: ['pandemic', 'medicine', 'science'],
		related: ['europe-spanish-flu', 'africa-ebola']
	}
];
