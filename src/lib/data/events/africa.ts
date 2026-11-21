import type { TimelineEvent } from '../../types';

export const africaEvents: TimelineEvent[] = [
	{
		id: 'africa-stone-tools',
		title: 'Oldest Stone Tools',
		year: -3_300_000,
		description:
			'The Lomekwi stone tools, found in Kenya, are the oldest known human-made tools — predating the Homo genus. They were likely made by Australopithecus or a close relative.',
		significance:
			'Tool use separated our ancestors from other animals, enabling diet and environmental modifications that drove all of human evolution.',
		wikipediaSlug: 'Lomekwi',
		tags: ['prehistory', 'technology']
	},
	{
		id: 'africa-lucy',
		title: 'Lucy Walks Upright',
		year: -3_200_000,
		description:
			'Lucy, a 40%-complete Australopithecus afarensis skeleton found at Hadar, Ethiopia in 1974, walked on two legs but still had a chimpanzee-sized brain.',
		significance:
			'Lucy settled a long debate: our ancestors stood up long before they got smart. Bipedalism came first, and big brains followed millions of years later.',
		wikipediaSlug: 'Lucy_(hominid)',
		tags: ['prehistory', 'evolution']
	},
	{
		id: 'africa-oldowan',
		title: 'Oldowan Toolkit',
		year: -2_600_000,
		description:
			'Simple sharp-edged flakes struck from river cobbles appear at Gona, Ethiopia around 2.6 million years ago. The Oldowan industry would persist, barely changed, for a million years.',
		significance:
			'The Oldowan is the first durable technological tradition — proof that toolmaking was being taught and copied across generations, the seed of culture itself.',
		wikipediaSlug: 'Oldowan',
		tags: ['prehistory', 'technology']
	},
	{
		id: 'africa-homo-erectus',
		title: 'Homo Erectus Emerges',
		year: -1_900_000,
		description:
			'Homo erectus appeared in East Africa with a modern body plan — long legs, short arms, a larger brain. The Nariokotome "Turkana Boy" skeleton shows a body built for endurance walking and running.',
		significance:
			'Erectus was the first human species to leave Africa, carrying our lineage into Asia and Europe. It was also the most successful, surviving nearly two million years.',
		wikipediaSlug: 'Homo_erectus',
		tags: ['prehistory', 'evolution', 'migration'],
		related: ['asia-homo-erectus']
	},
	{
		id: 'africa-acheulean',
		title: 'The Acheulean Hand Axe',
		year: -1_760_000,
		description:
			'At Kokiselei in Kenya, Homo erectus began shaping symmetrical teardrop hand axes. Making one required planning several steps ahead and holding a mental template of the finished form.',
		significance:
			"The hand axe was humanity's Swiss Army knife for over a million years — the longest-used tool design in history, and evidence of an increasingly abstract mind.",
		wikipediaSlug: 'Acheulean',
		tags: ['prehistory', 'technology']
	},
	{
		id: 'africa-fire',
		title: 'Controlled Fire at Wonderwerk Cave',
		year: -1_000_000,
		description:
			'Burned bone and plant ash deep inside Wonderwerk Cave, South Africa, are the oldest secure evidence of hominins deliberately using fire, about one million years ago.',
		significance:
			'Fire meant cooked food, warmth, protection from predators, and evenings around a hearth. Cooking may have freed up the energy that let human brains grow.',
		wikipediaSlug: 'Wonderwerk_Cave',
		tags: ['prehistory', 'technology']
	},
	{
		id: 'africa-homo-sapiens',
		title: 'Emergence of Homo Sapiens',
		year: -300_000,
		description:
			"Modern humans first appeared in Africa around 300,000 years ago. Fossils from Jebel Irhoud, Morocco show our species' anatomy was taking shape far earlier than previously thought.",
		significance:
			'The appearance of anatomically modern humans set in motion the eventual colonization of every habitable continent and the development of civilization.',
		wikipediaSlug: 'Jebel_Irhoud',
		tags: ['prehistory', 'evolution']
	},
	{
		id: 'africa-pinnacle-point',
		title: 'Pinnacle Point: First Seafood Diet',
		year: -164_000,
		description:
			'Caves at Pinnacle Point on the South African coast show humans harvesting shellfish and using red ochre 164,000 years ago, during a harsh glacial period.',
		significance:
			'The coast may have been a refuge that kept our species alive through hard times — and a rich, reliable diet that fueled cognitive and cultural innovation.',
		wikipediaSlug: 'Pinnacle_Point',
		tags: ['prehistory', 'environment']
	},
	{
		id: 'africa-blombos',
		title: 'Blombos Cave: Symbolic Thought',
		year: -75_000,
		description:
			'Engraved ochre pieces from Blombos Cave, South Africa represent the earliest known evidence of abstract symbolic thinking — geometric patterns deliberately created by humans.',
		significance:
			'Symbolic thinking is the cognitive leap that makes language, culture, art, and civilization possible. This is where the evidence begins.',
		wikipediaSlug: 'Blombos_Cave',
		tags: ['art', 'prehistory', 'culture']
	},
	{
		id: 'africa-out-of-africa',
		title: 'Out of Africa',
		year: -70_000,
		description:
			'Sometime between roughly 70,000 and 50,000 years ago, a small population of Homo sapiens left Africa, likely via the Bab-el-Mandeb strait or the Sinai. Nearly every non-African alive today descends from them.',
		significance:
			"This single dispersal is why humans everywhere are so genetically similar — and why Africa still holds more human genetic diversity than the rest of the world combined.",
		wikipediaSlug: 'Recent_African_origin_of_modern_humans',
		tags: ['prehistory', 'migration'],
		related: ['asia-toba', 'asia-denisovans', 'europe-sapiens-arrive', 'oceania-aboriginal-arrival']
	},
	{
		id: 'africa-ishango-bone',
		title: 'The Ishango Bone',
		year: -18_000,
		description:
			'A baboon fibula found near the source of the Nile in the Congo carries carefully grouped notches. Some researchers read it as a tally or even a lunar calendar.',
		significance:
			'Whatever its exact purpose, the Ishango bone is one of the oldest objects suggesting humans were recording numbers — the distant ancestor of all mathematics.',
		wikipediaSlug: 'Ishango_bone',
		tags: ['prehistory', 'science']
	},
	{
		id: 'africa-green-sahara',
		title: 'The Green Sahara',
		year: -9000,
		endYear: -3500,
		description:
			'A shift in Earth\'s orbit strengthened the monsoon and turned the Sahara into grassland dotted with lakes, hippos, and crocodiles. Around 5,500 years ago it dried out again, fairly abruptly.',
		significance:
			"The drying Sahara pushed herders toward the Nile — one reason Egyptian civilization coalesced when and where it did. Climate change has been shaping human history for a long time.",
		wikipediaSlug: 'African_humid_period',
		tags: ['environment', 'prehistory', 'migration']
	},
	{
		id: 'africa-tassili',
		title: "Tassili n'Ajjer Rock Art",
		year: -8000,
		description:
			"The sandstone plateau of Tassili n'Ajjer in Algeria holds over 15,000 paintings and engravings, recording giraffes, cattle herds, and dancing figures from a Sahara that was once green.",
		significance:
			"Tassili is a picture archive of climate change: its art moves from wild game to herded cattle to horses and camels as the Sahara slowly turned to desert.",
		wikipediaSlug: "Tassili_n'Ajjer",
		tags: ['art', 'prehistory', 'environment']
	},
	{
		id: 'africa-nabta-playa',
		title: 'Nabta Playa Stone Circle',
		year: -5000,
		description:
			"In Egypt's Nubian Desert, cattle herders erected a ring of standing stones aligned with the summer solstice and the stars, around 7,000 years ago — older than Stonehenge.",
		significance:
			'Nabta Playa shows that astronomical knowledge and monumental ritual in Africa predate the pharaohs, and may have fed directly into later Egyptian religion.',
		wikipediaSlug: 'Nabta_Playa',
		tags: ['astronomy', 'prehistory', 'religion'],
		related: ['europe-stonehenge']
	},
	{
		id: 'africa-hieroglyphs',
		title: 'Egyptian Hieroglyphs',
		year: -3250,
		description:
			'Inked labels from tomb U-j at Abydos, dated to around 3250 BCE, carry some of the earliest Egyptian writing. Hieroglyphs would remain in use for over 3,500 years.',
		significance:
			"Egypt developed writing at nearly the same time as Mesopotamia — possibly independently — making it one of humanity's original literate civilizations.",
		wikipediaSlug: 'Egyptian_hieroglyphs',
		tags: ['communication', 'civilization'],
		related: ['asia-cuneiform']
	},
	{
		id: 'africa-egypt-unification',
		title: 'Unification of Egypt',
		year: -3100,
		description:
			"Pharaoh Narmer unified Upper and Lower Egypt, founding the world's first nation-state and one of history's longest-lasting civilizations.",
		significance:
			"Egypt's unification demonstrated that large populations could be organized under centralized rule — a template for every empire and nation that followed.",
		wikipediaSlug: 'Narmer',
		tags: ['civilization', 'government']
	},
	{
		id: 'africa-djoser',
		title: 'Step Pyramid of Djoser',
		year: -2670,
		description:
			"The architect Imhotep stacked six mastaba tombs into the Step Pyramid at Saqqara — the world's oldest large-scale cut-stone building. Imhotep was later worshipped as a god of medicine.",
		significance:
			"Djoser's pyramid is where monumental stone architecture begins. Every pyramid, temple, and cathedral afterward is a descendant of Imhotep's experiment.",
		wikipediaSlug: 'Pyramid_of_Djoser',
		tags: ['architecture', 'civilization']
	},
	{
		id: 'africa-great-pyramid',
		title: 'Great Pyramid of Giza',
		year: -2560,
		description:
			'Built for Pharaoh Khufu, the Great Pyramid was the tallest human-made structure on Earth for nearly 4,000 years. It required an estimated 2.3 million stone blocks.',
		significance:
			'The Great Pyramid demonstrated the extraordinary organizational capacity of early civilization and became a symbol of human ambition for all of history.',
		wikipediaSlug: 'Great_Pyramid_of_Giza',
		tags: ['architecture', 'civilization']
	},
	{
		id: 'africa-kerma',
		title: 'Kingdom of Kerma',
		year: -2500,
		description:
			"Kerma, in today's Sudan, became the capital of the first great Nubian kingdom. Its mudbrick temple, the Western Deffufa, still stands, and its kings were buried with hundreds of retainers.",
		significance:
			"Kerma was Egypt's rival, not its satellite — a reminder that sub-Saharan Africa had powerful states of its own from the Bronze Age onward.",
		wikipediaSlug: 'Kerma_culture',
		tags: ['civilization', 'empire']
	},
	{
		id: 'africa-old-kingdom-collapse',
		title: 'Old Kingdom Collapses',
		year: -2200,
		description:
			"A centuries-long drought known as the 4.2-kiloyear event weakened the Nile floods. Egypt's Old Kingdom fragmented into the First Intermediate Period, with texts describing famine and chaos.",
		significance:
			'The same drought hit Mesopotamia and the Indus. It is one of the clearest early cases of climate shock toppling civilizations across continents at once.',
		wikipediaSlug: '4.2-kiloyear_event',
		tags: ['environment', 'collapse'],
		related: ['asia-akkad']
	},
	{
		id: 'africa-hyksos',
		title: 'The Hyksos Rule Egypt',
		year: -1650,
		description:
			"The Hyksos, a people of West Asian origin, seized power in the Nile Delta and ruled northern Egypt for about a century. They brought the horse-drawn chariot and composite bow.",
		significance:
			"Egypt learned the hard way that isolation was over. Expelling the Hyksos turned Egypt into an aggressive military empire — the New Kingdom.",
		wikipediaSlug: 'Hyksos',
		tags: ['war', 'migration', 'technology']
	},
	{
		id: 'africa-hatshepsut',
		title: 'Hatshepsut and the Voyage to Punt',
		year: -1470,
		description:
			'Hatshepsut ruled Egypt as pharaoh for about two decades and sent a famous trade expedition down the Red Sea to the Land of Punt, bringing back incense trees, ebony, and gold.',
		significance:
			"One of history's most successful female rulers, Hatshepsut favored trade over conquest — and her successors tried to erase her from the record.",
		wikipediaSlug: 'Hatshepsut',
		tags: ['trade', 'government']
	},
	{
		id: 'africa-akhenaten',
		title: "Akhenaten's Religious Revolution",
		year: -1350,
		description:
			"Pharaoh Akhenaten abolished Egypt's traditional gods in favor of the Aten, the sun disk, and built a new capital at Amarna. After his death, his revolution was dismantled and his name chiseled off monuments.",
		significance:
			"Akhenaten's experiment is one of history's earliest attempts at something close to monotheism — and a lesson in how deeply people resist having their gods taken away.",
		wikipediaSlug: 'Akhenaten',
		tags: ['religion', 'politics']
	},
	{
		id: 'africa-kadesh-treaty',
		title: 'First Known Peace Treaty',
		year: -1259,
		description:
			"After the inconclusive Battle of Kadesh, Ramesses II and the Hittite king Hattusili III signed a peace treaty. Copies survive in both Egyptian hieroglyphs and Hittite cuneiform.",
		significance:
			'The oldest surviving peace treaty shows two superpowers choosing diplomacy over endless war. A replica hangs at the United Nations.',
		wikipediaSlug: 'Egyptian–Hittite_peace_treaty',
		tags: ['politics', 'war', 'law']
	},
	{
		id: 'africa-deir-el-medina-strike',
		title: 'First Recorded Labor Strike',
		year: -1157,
		description:
			'Under Ramesses III, tomb-builders at Deir el-Medina went unpaid and downed tools, staging sit-ins at temples until grain rations arrived. A papyrus records the events.',
		significance:
			"The first documented strike in history is a reminder that workers have always known their power — and that even pharaohs' treasuries ran dry.",
		wikipediaSlug: 'Deir_el-Medina',
		tags: ['society', 'economics']
	},
	{
		id: 'africa-sea-peoples',
		title: 'Egypt Repels the Sea Peoples',
		year: -1177,
		description:
			"Ramesses III defeated a confederation of seaborne raiders in the Nile Delta, recording the victory on the walls of Medinet Habu. Across the eastern Mediterranean, other kingdoms were not so lucky.",
		significance:
			"Egypt survived the Late Bronze Age collapse, but only just. The international world of palaces, trade, and diplomacy it belonged to vanished almost overnight.",
		wikipediaSlug: 'Sea_Peoples',
		tags: ['war', 'collapse', 'migration'],
		related: ['asia-bronze-age-collapse', 'europe-mycenaean-collapse']
	},
	{
		id: 'africa-nok',
		title: 'Nok Terracottas',
		year: -900,
		description:
			"The Nok culture of central Nigeria produced striking life-size terracotta heads with elaborate hairstyles and pierced eyes. Nok people were also among West Africa's first iron smelters.",
		significance:
			"Nok is the oldest known figurative sculpture tradition in sub-Saharan Africa — evidence of a sophisticated artistic culture centuries before written records reached the region.",
		wikipediaSlug: 'Nok_culture',
		tags: ['art', 'technology', 'culture']
	},
	{
		id: 'africa-bantu-expansion',
		title: 'Bantu Expansion',
		year: -1000,
		description:
			'Bantu-speaking farmers spread from the area of modern Cameroon and Nigeria across central, eastern, and southern Africa over roughly two millennia, bringing agriculture, iron working, and their languages.',
		significance:
			"One of the largest migrations in human history, it explains why some 350 million people today speak closely related Bantu languages, from Kenya to South Africa.",
		wikipediaSlug: 'Bantu_expansion',
		tags: ['migration', 'agriculture', 'technology']
	},
	{
		id: 'africa-carthage',
		title: 'Carthage Founded',
		year: -814,
		description:
			'Phoenician settlers from Tyre founded Carthage on the coast of modern Tunisia. It grew into a commercial empire controlling trade across the western Mediterranean.',
		significance:
			'Carthage was the dominant sea power of the western Mediterranean for centuries — and the rival whose destruction made Rome a world empire.',
		wikipediaSlug: 'Carthage',
		tags: ['trade', 'empire', 'urban'],
		related: ['asia-phoenician-alphabet', 'europe-punic-wars']
	},
	{
		id: 'africa-kush-pharaohs',
		title: 'The Black Pharaohs',
		year: -727,
		description:
			'King Piye of Kush marched north from Nubia and conquered Egypt, founding the 25th Dynasty. Kushite pharaohs ruled Egypt for nearly a century and revived its classical traditions.',
		significance:
			"For a time, the conquered became the conquerors: Nubia ruled Egypt, overturning the usual story of Egypt as the region's unchallenged center.",
		wikipediaSlug: 'Twenty-fifth_Dynasty_of_Egypt',
		tags: ['empire', 'politics']
	},
	{
		id: 'africa-hanno',
		title: 'Voyage of Hanno the Navigator',
		year: -500,
		description:
			"The Carthaginian admiral Hanno sailed through the Strait of Gibraltar and down the West African coast with a fleet of 60 ships, possibly as far as Cameroon or Gabon.",
		significance:
			"Hanno's account is one of the oldest exploration narratives in existence — Mediterranean sailors were probing Atlantic Africa two thousand years before the Portuguese.",
		wikipediaSlug: 'Hanno_the_Navigator',
		tags: ['exploration', 'navigation']
	},
	{
		id: 'africa-meroe',
		title: 'Meroë: Iron Capital of Africa',
		year: -300,
		description:
			"After Kush's capital moved south to Meroë, the city became a major iron-smelting center, surrounded by slag heaps and more pyramids than Egypt ever built.",
		significance:
			"Meroë kept a distinctly African civilization alive for a thousand years, with its own script — Meroitic — which scholars can read aloud but still largely cannot understand.",
		wikipediaSlug: 'Meroë',
		tags: ['civilization', 'technology', 'architecture']
	},
	{
		id: 'africa-alexandria',
		title: 'Alexandria Founded',
		year: -331,
		description:
			'Alexander the Great founded Alexandria on the Mediterranean coast of Egypt. Under the Ptolemies it became the largest city in the world and the intellectual capital of the Hellenistic era.',
		significance:
			'Alexandria fused Greek, Egyptian, and Jewish learning. For centuries it was where the Western world went to think.',
		wikipediaSlug: 'Alexandria',
		tags: ['urban', 'culture', 'empire'],
		related: ['europe-alexander']
	},
	{
		id: 'africa-euclid',
		title: "Euclid's Elements",
		year: -300,
		description:
			'Working in Alexandria, Euclid compiled the Elements, building all of geometry from a handful of definitions and axioms through rigorous proof.',
		significance:
			'The Elements was the standard math textbook for over 2,000 years. Its method — axioms, then proofs — is still how mathematics works.',
		wikipediaSlug: "Euclid's_Elements",
		tags: ['science', 'education']
	},
	{
		id: 'africa-library-alexandria',
		title: 'Library of Alexandria',
		year: -283,
		description:
			"The Ptolemaic kings built the Library and Mouseion of Alexandria, aiming to collect every book in the world. Ships docking in the harbor reportedly had their scrolls seized and copied.",
		significance:
			"The Library is the archetype of the research institution. Its slow decline — not a single fire — is a cautionary tale about what happens when knowledge stops being funded.",
		wikipediaSlug: 'Library_of_Alexandria',
		tags: ['science', 'culture', 'education']
	},
	{
		id: 'africa-eratosthenes',
		title: "Eratosthenes Measures the Earth",
		year: -240,
		description:
			"Alexandria's chief librarian compared the sun's angle at Syene and Alexandria at midsummer and calculated Earth's circumference — getting remarkably close to the true figure.",
		significance:
			'With a stick, a shadow, and geometry, Eratosthenes proved the scale of the planet. It remains one of the most elegant experiments ever performed.',
		wikipediaSlug: 'Eratosthenes',
		tags: ['science', 'astronomy']
	},
	{
		id: 'africa-rosetta-stone',
		title: 'The Rosetta Stone',
		year: -196,
		description:
			'A priestly decree honoring Ptolemy V was carved in three scripts: hieroglyphic, Demotic, and Greek. Rediscovered in 1799, it let Champollion decipher hieroglyphs in 1822.',
		significance:
			"A bureaucratic tax decree became the key that unlocked 3,000 years of Egyptian history. It is the world's most famous translation aid.",
		wikipediaSlug: 'Rosetta_Stone',
		tags: ['communication', 'culture'],
		related: ['africa-napoleon-egypt']
	},
	{
		id: 'africa-carthage-destroyed',
		title: 'Rome Destroys Carthage',
		year: -146,
		description:
			"After a three-year siege, Roman forces razed Carthage, killed or enslaved its population, and made its territory the province of Africa — the name the whole continent would inherit.",
		significance:
			"Carthage's destruction left Rome unchallenged in the Mediterranean. The word \"Africa\" itself comes from this Roman province.",
		wikipediaSlug: 'Third_Punic_War',
		tags: ['war', 'empire', 'collapse'],
		related: ['europe-punic-wars']
	},
	{
		id: 'africa-cleopatra',
		title: 'Death of Cleopatra',
		year: -30,
		description:
			"Cleopatra VII, the last active Ptolemaic ruler, died after her defeat with Mark Antony at Actium. Egypt became Augustus's personal province and Rome's breadbasket.",
		significance:
			"Cleopatra's fall ended 3,000 years of independent pharaonic Egypt — and Egyptian grain then fed Rome for centuries.",
		wikipediaSlug: 'Cleopatra',
		tags: ['politics', 'empire', 'collapse'],
		related: ['europe-rome-empire']
	},
	{
		id: 'africa-periplus',
		title: 'Periplus of the Erythraean Sea',
		year: 50,
		description:
			'An anonymous Greek-speaking merchant from Egypt wrote a sailing guide to ports from the Red Sea down the East African coast and across to India, listing what each port bought and sold.',
		significance:
			'The Periplus reveals a thriving Indian Ocean trading world already linking Africa, Arabia, and India — centuries before Europeans arrived.',
		wikipediaSlug: 'Periplus_of_the_Erythraean_Sea',
		tags: ['trade', 'navigation'],
		related: ['asia-silk-road', 'asia-indian-ocean-trade']
	},
	{
		id: 'africa-ptolemy',
		title: "Ptolemy's Almagest",
		year: 150,
		description:
			"Claudius Ptolemy, working in Alexandria, wrote the Almagest, a mathematical model of the Earth-centered cosmos, and the Geography, an atlas built on latitude and longitude.",
		significance:
			"Ptolemy's model was wrong but extraordinarily useful; it governed astronomy in Europe and the Islamic world for 1,400 years until Copernicus.",
		wikipediaSlug: 'Almagest',
		tags: ['science', 'astronomy'],
		related: ['europe-copernicus']
	},
	{
		id: 'africa-trans-saharan-trade',
		title: 'The Camel Opens the Sahara',
		year: 300,
		description:
			'The spread of the domesticated camel across North Africa made regular caravans across the Sahara possible. Gold from West Africa moved north; salt, cloth, and later books and Islam moved south.',
		significance:
			"The trans-Saharan trade turned the desert from a barrier into a highway, funding West Africa's great empires and supplying much of medieval Europe's gold.",
		wikipediaSlug: 'Trans-Saharan_trade',
		tags: ['trade', 'technology', 'economics'],
		related: ['africa-mansa-musa', 'europe-catalan-atlas']
	},
	{
		id: 'africa-aksum',
		title: 'Kingdom of Aksum',
		year: 320,
		description:
			"Aksum (modern Ethiopia/Eritrea) was one of the four great powers of the ancient world alongside Rome, Persia, and China, and one of the first states to adopt Christianity.",
		significance:
			"Aksum's early Christianity and trading networks shaped the cultural identity of the Horn of Africa for over a millennium.",
		wikipediaSlug: 'Kingdom_of_Aksum',
		tags: ['empire', 'trade', 'religion'],
		related: ['europe-constantine']
	},
	{
		id: 'africa-augustine',
		title: "Augustine's City of God",
		year: 426,
		description:
			'Augustine, bishop of Hippo in modern Algeria, completed The City of God in response to the sack of Rome, arguing that Christianity did not depend on any earthly empire.',
		significance:
			'An African bishop wrote the theology that guided Western Christianity for a thousand years — on original sin, free will, grace, and just war.',
		wikipediaSlug: 'Augustine_of_Hippo',
		tags: ['religion', 'philosophy'],
		related: ['europe-sack-of-rome']
	},
	{
		id: 'africa-vandals',
		title: 'Vandals Take Carthage',
		year: 439,
		description:
			"The Vandals, a Germanic people who had crossed from Spain, captured Carthage and Rome's richest provinces. In 455 they sailed to Italy and sacked Rome itself.",
		significance:
			"Losing North Africa's grain and taxes crippled the Western Roman Empire; its collapse a generation later was in many ways decided here.",
		wikipediaSlug: 'Vandal_Kingdom',
		tags: ['war', 'collapse', 'migration'],
		related: ['europe-fall-of-rome']
	},
	{
		id: 'africa-madagascar',
		title: 'Austronesians Settle Madagascar',
		year: 500,
		description:
			'Seafarers from Borneo crossed the Indian Ocean and settled Madagascar, later mixing with Bantu-speaking Africans. Malagasy is still an Austronesian language, closest to languages of southern Borneo.',
		significance:
			"Madagascar is the western tip of the greatest maritime expansion in prehistory — the same seafaring culture that reached Easter Island, 20,000 km away.",
		wikipediaSlug: 'History_of_Madagascar',
		tags: ['migration', 'navigation'],
		related: ['asia-austronesian-expansion', 'oceania-lapita']
	},
	{
		id: 'africa-first-hijra',
		title: 'Muslims Find Refuge in Aksum',
		year: 615,
		description:
			"Facing persecution in Mecca, a group of Muhammad's early followers fled across the Red Sea to the Christian kingdom of Aksum, whose king refused to hand them over.",
		significance:
			"Islam's first sanctuary was in Africa, granted by a Christian king — an episode Muslims and Ethiopians still remember as a model of religious tolerance.",
		wikipediaSlug: 'Migration_to_Abyssinia',
		tags: ['religion', 'migration'],
		related: ['asia-hijra']
	},
	{
		id: 'africa-arab-conquest-egypt',
		title: 'Arab Conquest of Egypt',
		year: 641,
		description:
			"Arab armies under Amr ibn al-As took Byzantine Egypt and founded Fustat, the precursor of Cairo. Within 70 years Arab rule extended across all of North Africa to the Atlantic.",
		significance:
			"The conquest pulled North Africa out of the Mediterranean Christian world and into the Islamic one, reshaping its language, religion, and trade routes to this day.",
		wikipediaSlug: 'Arab_conquest_of_Egypt',
		tags: ['war', 'religion', 'empire'],
		related: ['asia-hijra', 'europe-al-andalus']
	},
	{
		id: 'africa-ghana-empire',
		title: 'Ghana Empire',
		year: 700,
		description:
			'The Soninke kingdom of Wagadu — known to Arab writers as Ghana — controlled the gold trade of the western Sahel. Arab geographers called it "the land of gold."',
		significance:
			"Ghana was the first of West Africa's great trading empires; modern Ghana took its name at independence to claim that heritage.",
		wikipediaSlug: 'Ghana_Empire',
		tags: ['empire', 'trade', 'economics'],
		related: ['africa-trans-saharan-trade']
	},
	{
		id: 'africa-kanem',
		title: 'Kanem Empire',
		year: 700,
		description:
			'Around Lake Chad, the Kanem Empire rose to control the central trans-Saharan routes. Its successor, Kanem–Bornu, would survive in some form until the 19th century.',
		significance:
			"Kanem–Bornu was one of the longest-lasting states in history — over a thousand years — yet it is almost unknown outside Africa.",
		wikipediaSlug: 'Kanem–Bornu_Empire',
		tags: ['empire', 'trade']
	},
	{
		id: 'africa-al-qarawiyyin',
		title: 'Al-Qarawiyyin Founded',
		year: 859,
		description:
			'Fatima al-Fihri, the daughter of a wealthy merchant, founded a mosque in Fez, Morocco, that grew into a center of higher learning. It is often cited as the oldest continuously operating university.',
		significance:
			"One of the world's oldest universities was founded by a woman, in Africa — a fact that complicates the usual story of where higher education began.",
		wikipediaSlug: 'University_of_al-Qarawiyyin',
		tags: ['education', 'religion', 'culture']
	},
	{
		id: 'africa-igbo-ukwu',
		title: 'Igbo-Ukwu Bronzes',
		year: 900,
		description:
			'At Igbo-Ukwu in southeastern Nigeria, artisans cast astonishingly intricate bronzes using the lost-wax technique. The site also contained thousands of glass beads, some traced to Egypt and beyond.',
		significance:
			"Igbo-Ukwu's metalwork rivaled anything being made in contemporary Europe, and its beads prove West African forest societies were connected to long-distance trade.",
		wikipediaSlug: 'Igbo-Ukwu',
		tags: ['art', 'technology', 'trade']
	},
	{
		id: 'africa-fatimid-cairo',
		title: 'Cairo Founded',
		year: 969,
		description:
			'The Fatimid Caliphate conquered Egypt and founded al-Qahira — Cairo — as its royal city. The al-Azhar mosque, built soon after, became one of the most important centers of Islamic learning.',
		significance:
			"Cairo became the largest city in Africa and the Islamic world's intellectual capital, a role it has never fully relinquished.",
		wikipediaSlug: 'Fatimid_Caliphate',
		tags: ['urban', 'religion', 'empire']
	},
	{
		id: 'africa-swahili-coast',
		title: 'Swahili Coast City-States',
		year: 1000,
		description:
			'Stone towns like Kilwa, Mombasa, and Zanzibar grew wealthy trading African gold, ivory, and timber for Persian pottery, Indian cloth, and Chinese porcelain. Swahili culture blended Bantu and Arabian influences.',
		significance:
			'The Swahili coast was a cosmopolitan hub of the Indian Ocean world — proof that globalization did not begin with Europe.',
		wikipediaSlug: 'Swahili_coast',
		tags: ['trade', 'urban', 'culture'],
		related: ['asia-indian-ocean-trade', 'asia-zheng-he', 'africa-great-zimbabwe']
	},
	{
		id: 'africa-ibn-al-haytham',
		title: "Ibn al-Haytham's Book of Optics",
		year: 1021,
		description:
			'Working in Cairo, Ibn al-Haytham showed that vision works by light entering the eye, not beams leaving it, and insisted that claims be tested by controlled experiment.',
		significance:
			'Often called the first true scientist, Ibn al-Haytham pioneered the experimental method that European science would adopt centuries later.',
		wikipediaSlug: 'Ibn_al-Haytham',
		tags: ['science']
	},
	{
		id: 'africa-almoravids',
		title: 'The Almoravid Empire',
		year: 1062,
		description:
			"A Berber religious movement from the western Sahara founded Marrakesh in about 1070 and built an empire stretching from Senegal to Spain, halting the Christian advance in Iberia at Sagrajas in 1086.",
		significance:
			"The Almoravids tied West Africa, Morocco, and Spain into a single political world — their gold dinars were the hard currency of the medieval Mediterranean.",
		wikipediaSlug: 'Almoravid_dynasty',
		tags: ['empire', 'religion'],
		related: ['europe-al-andalus']
	},
	{
		id: 'africa-mapungubwe',
		title: 'Kingdom of Mapungubwe',
		year: 1075,
		description:
			"On the Limpopo River, Mapungubwe became southern Africa's first class-divided state, with elites living on a hilltop above commoners. Its famous golden rhinoceros was found in a royal grave.",
		significance:
			"Mapungubwe was the forerunner of Great Zimbabwe; under apartheid its finds were downplayed because they contradicted the myth of an empty land before Europeans.",
		wikipediaSlug: 'Kingdom_of_Mapungubwe',
		tags: ['civilization', 'trade', 'indigenous']
	},
	{
		id: 'africa-lalibela',
		title: 'Rock-Hewn Churches of Lalibela',
		year: 1200,
		description:
			"Under King Lalibela, Ethiopian builders carved eleven churches downward out of solid volcanic rock, conceived as a \"New Jerusalem\" after Muslim conquest made pilgrimage to the Holy Land difficult.",
		significance:
			"Lalibela is one of the great architectural achievements of the medieval world, and a living pilgrimage site for Ethiopian Orthodox Christians to this day.",
		wikipediaSlug: 'Lalibela',
		tags: ['architecture', 'religion']
	},
	{
		id: 'africa-mali-sundiata',
		title: 'Sundiata Founds the Mali Empire',
		year: 1235,
		description:
			"Sundiata Keita defeated the Sosso king at the Battle of Kirina and founded the Mali Empire. His story, the Epic of Sundiata, is still performed by griots across West Africa.",
		significance:
			"Mali became one of the richest empires on Earth; its founding charter, the Kouroukan Fouga, is recognized by UNESCO as a remarkable early declaration of social rules and rights.",
		wikipediaSlug: 'Sundiata_Keita',
		tags: ['empire', 'politics', 'culture']
	},
	{
		id: 'africa-great-zimbabwe',
		title: 'Great Zimbabwe',
		year: 1250,
		description:
			"The Shona built a city of massive mortarless stone walls, home to perhaps 10,000–18,000 people at its height. It controlled the gold trade flowing to the Swahili coast.",
		significance:
			"Colonial authorities insisted Africans couldn't have built it and credited Phoenicians or the Queen of Sheba. Great Zimbabwe became a symbol of African achievement — and gave a nation its name.",
		wikipediaSlug: 'Great_Zimbabwe',
		tags: ['civilization', 'architecture', 'trade', 'indigenous'],
		related: ['africa-swahili-coast']
	},
	{
		id: 'africa-ife',
		title: 'The Ife Heads',
		year: 1300,
		description:
			'In Ile-Ife, the sacred city of the Yoruba, artists cast naturalistic brass and terracotta heads of rulers with a precision that stunned European scholars when they were first seen in 1910.',
		significance:
			'The Ife heads overturned the colonial assumption that African art was "primitive" — they are among the finest portrait sculptures of the medieval world.',
		wikipediaSlug: 'Bronze_Head_from_Ife',
		tags: ['art', 'culture', 'indigenous']
	},
	{
		id: 'africa-mansa-musa',
		title: "Mansa Musa's Hajj",
		year: 1324,
		description:
			"Mansa Musa of the Mali Empire made his famous pilgrimage to Mecca, distributing so much gold that he reportedly depressed gold prices in Egypt for over a decade.",
		significance:
			"Mansa Musa's wealth demonstrated that West Africa contained some of the world's richest civilizations — a fact that would later be obscured by colonialism.",
		wikipediaSlug: 'Mansa_Musa',
		tags: ['trade', 'empire', 'economics'],
		related: ['europe-catalan-atlas', 'africa-trans-saharan-trade']
	},
	{
		id: 'africa-ibn-battuta',
		title: 'Ibn Battuta Sets Out',
		year: 1325,
		description:
			'Moroccan scholar Ibn Battuta left Tangier for Mecca and kept traveling for nearly 30 years, covering some 120,000 km through Africa, the Middle East, India, Southeast Asia, and China.',
		significance:
			"Ibn Battuta's Rihla is a portrait of the 14th-century Islamic world at its most connected — he traveled three times farther than Marco Polo.",
		wikipediaSlug: 'Ibn_Battuta',
		tags: ['exploration', 'culture', 'trade'],
		related: ['asia-delhi-sultanate']
	},
	{
		id: 'africa-timbuktu',
		title: 'Timbuktu: City of Scholars',
		year: 1327,
		description:
			"Mansa Musa commissioned the Djinguereber Mosque in Timbuktu. Over the next two centuries the city became a center of Islamic scholarship, with hundreds of thousands of manuscripts on law, astronomy, and medicine.",
		significance:
			"Timbuktu's manuscripts disprove the notion of Africa as a continent without written history. Locals smuggled many to safety when militants occupied the city in 2012.",
		wikipediaSlug: 'Timbuktu_Manuscripts',
		tags: ['education', 'religion', 'culture']
	},
	{
		id: 'africa-black-death',
		title: 'The Black Death in Egypt',
		year: 1347,
		description:
			'Plague reached Alexandria by ship in autumn 1347 and swept up the Nile. Cairo, then one of the largest cities in the world, may have lost a third or more of its population.',
		significance:
			"The plague struck the Islamic world as hard as Europe, but Egypt's Mamluk economy — dependent on irrigation labor — recovered far more slowly.",
		wikipediaSlug: 'Black_Death_in_the_Middle_East',
		tags: ['pandemic', 'collapse'],
		related: ['asia-black-death-origin', 'europe-black-death']
	},
	{
		id: 'africa-ibn-khaldun',
		title: "Ibn Khaldun's Muqaddimah",
		year: 1377,
		description:
			'Tunisian historian Ibn Khaldun wrote the Muqaddimah, a theory of why dynasties rise and fall based on social cohesion (asabiyyah), economics, and the cycle between nomads and city-dwellers.',
		significance:
			'Ibn Khaldun anticipated modern sociology, economics, and historiography by centuries; Arnold Toynbee called it the greatest work of its kind ever created.',
		wikipediaSlug: 'Muqaddimah',
		tags: ['philosophy', 'science', 'economics']
	},
	{
		id: 'africa-kongo',
		title: 'Kingdom of Kongo',
		year: 1390,
		description:
			'The Kingdom of Kongo was founded south of the Congo River mouth, eventually ruling a centralized state with provinces, taxation, and a currency of nzimbu shells.',
		significance:
			"Kongo became Europe's first major partner in sub-Saharan Africa — and one of the first victims of the Atlantic slave trade.",
		wikipediaSlug: 'Kingdom_of_Kongo',
		tags: ['civilization', 'government']
	},
	{
		id: 'africa-ceuta',
		title: 'Portugal Seizes Ceuta',
		year: 1415,
		description:
			"Portuguese forces captured the Moroccan port of Ceuta. Prince Henry, who fought there, learned of the gold caravans arriving from south of the Sahara and resolved to reach the source by sea.",
		significance:
			'Ceuta is often called the start of European overseas imperialism. Its legacy is visible today: it is still a Spanish city on the African mainland.',
		wikipediaSlug: 'Portuguese_conquest_of_Ceuta',
		tags: ['colonialism', 'war', 'exploration'],
		related: ['europe-henry-navigator']
	},
	{
		id: 'africa-mutapa',
		title: 'Kingdom of Mutapa',
		year: 1430,
		description:
			"As Great Zimbabwe declined, the Mutapa state rose to its north, controlling gold fields between the Zambezi and Limpopo rivers and trading with Swahili and later Portuguese merchants.",
		significance:
			"Mutapa's wealth drew Portuguese invasions that it largely resisted for over a century — a case of African states dictating terms to Europeans.",
		wikipediaSlug: 'Mutapa_Empire',
		tags: ['empire', 'trade', 'indigenous']
	},
	{
		id: 'africa-benin',
		title: 'Kingdom of Benin',
		year: 1440,
		description:
			'Oba Ewuare the Great rebuilt Benin City with vast earthwork walls and expanded the kingdom. Its guild of bronze-casters produced thousands of plaques recording court history.',
		significance:
			"The Benin Bronzes are among Africa's greatest artworks; looted by Britain in 1897, they are now at the center of the global debate about returning colonial plunder.",
		wikipediaSlug: 'Kingdom_of_Benin',
		tags: ['art', 'civilization', 'urban'],
		related: ['africa-benin-expedition']
	},
	{
		id: 'africa-songhai',
		title: 'Songhai Empire Rises',
		year: 1464,
		description:
			'Sunni Ali seized Timbuktu and Djenné, building the Songhai Empire. Under Askia Muhammad it became the largest state in African history, with a professional army and standardized weights and measures.',
		significance:
			"Songhai marked the peak of the West African imperial tradition — and its fall would open the region to fragmentation and the slave trade.",
		wikipediaSlug: 'Songhai_Empire',
		tags: ['empire', 'government']
	},
	{
		id: 'africa-elmina',
		title: 'Elmina Castle Built',
		year: 1482,
		description:
			"The Portuguese built São Jorge da Mina on the Gold Coast, the first European building in sub-Saharan Africa. It began as a gold-trading post and became a holding pen for enslaved people.",
		significance:
			"Elmina's dungeons are a pilgrimage site for the African diaspora — the physical start of the 'Door of No Return.'",
		wikipediaSlug: 'Elmina_Castle',
		tags: ['colonialism', 'trade', 'slavery'],
		related: ['africa-atlantic-slave-trade']
	},
	{
		id: 'africa-dias-cape',
		title: 'Dias Rounds the Cape',
		year: 1488,
		description:
			'Bartolomeu Dias sailed around the southern tip of Africa, proving the Atlantic and Indian Oceans were connected. He called it the Cape of Storms; the king renamed it the Cape of Good Hope.',
		significance:
			"Dias opened the sea route to Asia that would bypass the Silk Road and Venice, shifting the world's center of trade to the Atlantic.",
		wikipediaSlug: 'Bartolomeu_Dias',
		tags: ['exploration', 'navigation', 'trade'],
		related: ['europe-vasco-da-gama', 'asia-portuguese-goa']
	},
	{
		id: 'africa-ottoman-egypt',
		title: 'Ottomans Conquer Egypt',
		year: 1517,
		description:
			'Sultan Selim I defeated the Mamluks and took Cairo, absorbing Egypt and the Hejaz into the Ottoman Empire. Ottoman rule soon extended across most of North Africa.',
		significance:
			'With Mecca and Medina under their control, the Ottomans claimed the caliphate — and North Africa was bound to Istanbul for three centuries.',
		wikipediaSlug: 'Ottoman–Mamluk_War_(1516–1517)',
		tags: ['empire', 'war'],
		related: ['asia-fall-of-constantinople']
	},
	{
		id: 'africa-atlantic-slave-trade',
		title: 'Transatlantic Slave Trade Begins',
		year: 1526,
		description:
			"The first slave voyage directly from Africa to the Americas sailed in 1526. Over the next 340 years about 12.5 million Africans were forced onto ships; nearly 2 million died during the Middle Passage.",
		significance:
			"The largest forced migration in history built the wealth of the Atlantic world and devastated African societies. Its consequences — racism, inequality, diaspora — shape the present.",
		wikipediaSlug: 'Atlantic_slave_trade',
		tags: ['slavery', 'trade', 'migration', 'colonialism'],
		related: [
			'europe-henry-navigator',
			'na-1619',
			'na-caribbean-sugar',
			'sa-brazil-sugar',
			'na-haitian-revolution',
			'europe-slave-trade-abolition'
		]
	},
	{
		id: 'africa-afonso-letters',
		title: 'A King Protests the Slave Trade',
		year: 1526,
		description:
			"Afonso I of Kongo, a Catholic convert, wrote to King João III of Portugal complaining that Portuguese traders were kidnapping his subjects, \"even nobles and the sons of nobles.\"",
		significance:
			"Afonso's letters are one of the earliest African written protests against the slave trade — and a stark record of how little an African ally's objections mattered.",
		wikipediaSlug: 'Afonso_I_of_Kongo',
		tags: ['slavery', 'politics', 'religion'],
		related: ['africa-kongo']
	},
	{
		id: 'africa-new-world-crops',
		title: 'Maize and Cassava Arrive',
		year: 1550,
		description:
			'Portuguese traders brought American crops — maize, cassava, peanuts, and chili peppers — to West and Central Africa. Within a few generations they were staples.',
		significance:
			"Cassava and maize became the backbone of African diets; today Africa grows more cassava than any other continent. The Columbian Exchange reshaped Africa's fields as well as its people.",
		wikipediaSlug: 'Columbian_exchange',
		tags: ['agriculture', 'trade', 'environment'],
		related: ['europe-columbian-exchange', 'na-maize', 'asia-new-world-crops']
	},
	{
		id: 'africa-tondibi',
		title: 'Battle of Tondibi',
		year: 1591,
		description:
			"A Moroccan army of about 4,000, armed with firearms, crossed the Sahara and routed the far larger Songhai army. Timbuktu was sacked and its scholars deported to Marrakesh.",
		significance:
			"Gunpowder ended West Africa's last great empire. The region fragmented into smaller states, many of which were drawn into the Atlantic slave trade.",
		wikipediaSlug: 'Battle_of_Tondibi',
		tags: ['war', 'technology', 'collapse'],
		related: ['africa-songhai']
	},
	{
		id: 'africa-nzinga',
		title: 'Queen Nzinga Resists Portugal',
		year: 1624,
		description:
			'Nzinga became ruler of Ndongo and Matamba in modern Angola. For nearly 40 years she fought, negotiated, and allied with the Dutch to resist Portuguese slave-raiding expansion.',
		significance:
			'Nzinga is one of history\'s great resistance leaders — a brilliant diplomat and military strategist who is a national hero in Angola today.',
		wikipediaSlug: 'Nzinga_of_Ndongo_and_Matamba',
		tags: ['politics', 'war', 'colonialism']
	},
	{
		id: 'africa-cape-colony',
		title: 'Dutch Found Cape Town',
		year: 1652,
		description:
			'Jan van Riebeeck established a supply station for the Dutch East India Company at the Cape of Good Hope. Settlers soon pushed inland, dispossessing the Khoikhoi and importing enslaved Asians and Africans.',
		significance:
			"The Cape colony planted the roots of South Africa's settler society — and the racial hierarchies that would later harden into apartheid.",
		wikipediaSlug: 'Dutch_Cape_Colony',
		tags: ['colonialism', 'trade'],
		related: ['europe-voc']
	},
	{
		id: 'africa-ashanti',
		title: 'Ashanti Empire and the Golden Stool',
		year: 1701,
		description:
			'Osei Tutu united the Akan states into the Ashanti Empire. According to tradition, the priest Okomfo Anokye summoned a Golden Stool from the sky, embodying the soul of the nation.',
		significance:
			'The Ashanti built one of the most powerful and bureaucratic states in West Africa and fought Britain in five wars. When a British governor demanded to sit on the Golden Stool in 1900, it sparked a war.',
		wikipediaSlug: 'Asante_Empire',
		tags: ['empire', 'government', 'culture']
	},
	{
		id: 'africa-dahomey',
		title: 'Dahomey Conquers the Coast',
		year: 1727,
		description:
			"The Kingdom of Dahomey captured the port of Whydah, becoming a major supplier to the Atlantic slave trade. It fielded a famous corps of women soldiers, called the Agojie by the Fon.",
		significance:
			"Dahomey shows the slave trade's terrible logic: African states that participated grew stronger, while their neighbors were raided and depopulated.",
		wikipediaSlug: 'Dahomey',
		tags: ['slavery', 'war', 'empire'],
		related: ['africa-atlantic-slave-trade']
	},
	{
		id: 'africa-sierra-leone',
		title: 'Freetown Founded',
		year: 1792,
		description:
			"Over 1,100 Black Loyalists — formerly enslaved people who had fought for Britain in the American Revolution — sailed from Nova Scotia to found Freetown in Sierra Leone.",
		significance:
			"Freetown became a refuge for formerly enslaved people and, after 1807, for captives freed from slave ships by the Royal Navy — a symbol of return and resistance.",
		wikipediaSlug: 'Freetown',
		tags: ['slavery', 'migration', 'politics'],
		related: ['na-independence', 'europe-slave-trade-abolition']
	},
	{
		id: 'africa-napoleon-egypt',
		title: 'Napoleon Invades Egypt',
		year: 1798,
		description:
			"Napoleon invaded Egypt with 35,000 troops and 167 scholars. The military campaign failed, but the scholars' Description de l'Égypte and the discovery of the Rosetta Stone launched modern Egyptology.",
		significance:
			"The invasion jolted the Middle East into the modern world and set off a European obsession with ancient Egypt that has never ended.",
		wikipediaSlug: 'French_invasion_of_Egypt_and_Syria',
		tags: ['war', 'colonialism', 'science'],
		related: ['europe-napoleon', 'africa-rosetta-stone']
	},
	{
		id: 'africa-sokoto',
		title: 'Sokoto Caliphate',
		year: 1804,
		description:
			"Fulani scholar Usman dan Fodio led a jihad against the Hausa kings, founding the Sokoto Caliphate in northern Nigeria. At its peak it was one of the largest states in Africa.",
		significance:
			"Sokoto spread Islamic literacy and law across the central Sahel; its sultan is still the spiritual leader of Nigeria's Muslims.",
		wikipediaSlug: 'Sokoto_Caliphate',
		tags: ['religion', 'empire', 'politics'],
		related: ['sa-male-revolt']
	},
	{
		id: 'africa-muhammad-ali',
		title: 'Muhammad Ali Modernizes Egypt',
		year: 1805,
		description:
			'An Albanian officer in Ottoman service, Muhammad Ali seized control of Egypt and launched a crash modernization program: factories, a conscript army, cotton exports, and students sent to Europe.',
		significance:
			'Egypt became the first non-Western state to attempt state-led industrialization — a model later followed from Meiji Japan to post-colonial Africa.',
		wikipediaSlug: 'Muhammad_Ali_of_Egypt',
		tags: ['politics', 'technology', 'economics']
	},
	{
		id: 'africa-shaka',
		title: 'Shaka and the Zulu Kingdom',
		year: 1818,
		description:
			'Shaka transformed the Zulu into a centralized military kingdom with new tactics and short stabbing spears. The wars of this era, the Mfecane, displaced peoples across southern Africa.',
		significance:
			'The Mfecane redrew the map of southern Africa just as Boer and British settlers pushed inland — shaping the borders and conflicts of the region for a century.',
		wikipediaSlug: 'Shaka',
		tags: ['war', 'empire', 'politics']
	},
	{
		id: 'africa-algeria',
		title: 'France Invades Algeria',
		year: 1830,
		description:
			'France invaded Algiers on the pretext of a diplomatic insult. The conquest took decades and killed a large share of the Algerian population; Algeria was later annexed as part of France itself.',
		significance:
			"Algeria became France's settler colony par excellence, setting up the bitterest decolonization war of the 20th century.",
		wikipediaSlug: 'French_conquest_of_Algeria',
		tags: ['colonialism', 'war'],
		related: ['africa-algerian-war']
	},
	{
		id: 'africa-great-trek',
		title: 'The Great Trek',
		year: 1836,
		description:
			'Thousands of Dutch-speaking Boers left the British-ruled Cape Colony with their wagons, partly in protest against the abolition of slavery, and founded republics in the interior.',
		significance:
			'The Great Trek became the founding myth of Afrikaner nationalism — the ideology that would build apartheid a century later.',
		wikipediaSlug: 'Great_Trek',
		tags: ['migration', 'colonialism', 'politics']
	},
	{
		id: 'africa-zanzibar',
		title: 'Zanzibar and the East African Slave Trade',
		year: 1840,
		description:
			"Sultan Said moved his capital from Oman to Zanzibar, which boomed on clove plantations and the slave trade. Caravans from the interior brought ivory and tens of thousands of captives a year.",
		significance:
			"The East African slave trade, older than the Atlantic one, peaked in the 19th century. Its abolition became a pretext for European colonial conquest of East Africa.",
		wikipediaSlug: 'Sultanate_of_Zanzibar',
		tags: ['slavery', 'trade', 'economics']
	},
	{
		id: 'africa-liberia',
		title: 'Liberia Declares Independence',
		year: 1847,
		description:
			'Founded by the American Colonization Society as a home for freed African Americans, Liberia declared independence. Its Americo-Liberian elite dominated the indigenous majority for over a century.',
		significance:
			"Liberia was Africa's first modern republic and one of only two African states never colonized — but its history shows how freedom for some can mean domination for others.",
		wikipediaSlug: 'Liberia',
		tags: ['independence', 'politics', 'slavery'],
		related: ['na-civil-war']
	},
	{
		id: 'africa-suez-canal',
		title: 'Suez Canal Opens',
		year: 1869,
		description:
			"After ten years of construction, much of it by forced Egyptian labor, the Suez Canal opened, linking the Mediterranean and Red Sea and cutting the voyage from Europe to India by about 7,000 km.",
		significance:
			"Suez remade world trade and Egypt's fate: the debts it created led directly to British occupation in 1882, and the canal remains a choke point of the global economy.",
		wikipediaSlug: 'Suez_Canal',
		tags: ['trade', 'technology', 'colonialism'],
		related: ['africa-suez-crisis']
	},
	{
		id: 'africa-kimberley',
		title: 'Diamonds at Kimberley',
		year: 1871,
		description:
			"Diamond discoveries at Kimberley, followed by gold on the Witwatersrand in 1886, transformed South Africa from an agrarian backwater into a mining economy built on migrant Black labor.",
		significance:
			"The mineral revolution created De Beers, the pass laws, and the compound system — the economic machinery that apartheid was later built to protect.",
		wikipediaSlug: 'Big_Hole',
		tags: ['economics', 'colonialism']
	},
	{
		id: 'africa-isandlwana',
		title: 'Battle of Isandlwana',
		year: 1879,
		description:
			'A Zulu army of some 20,000 overwhelmed a British column at Isandlwana, killing over 1,300 soldiers — one of the worst defeats ever inflicted on a modern army by an indigenous force.',
		significance:
			"Isandlwana shattered the myth of European invincibility, even though Britain went on to conquer Zululand within months.",
		wikipediaSlug: 'Battle_of_Isandlwana',
		tags: ['war', 'colonialism', 'indigenous']
	},
	{
		id: 'africa-berlin-conference',
		title: 'Scramble for Africa',
		year: 1884,
		description:
			"The Berlin Conference of 1884–85 formalized the European partition of Africa. By 1914, European powers controlled 90% of the continent, drawing borders with little regard for existing peoples.",
		significance:
			"Colonial borders drawn in Berlin still define Africa's nation-states today, creating ethnic tensions and political instability that persist.",
		wikipediaSlug: 'Berlin_Conference',
		tags: ['colonialism', 'politics'],
		related: ['sa-quinine']
	},
	{
		id: 'africa-congo-free-state',
		title: 'Congo Free State',
		year: 1885,
		description:
			"King Leopold II of Belgium ran the Congo as his personal property, forcing villagers to harvest wild rubber under threat of mutilation and hostage-taking. Millions died.",
		significance:
			"International outrage over Leopold's Congo produced one of the first modern human rights campaigns — and the term 'crimes against humanity' gained currency in its wake.",
		wikipediaSlug: 'Congo_Free_State',
		tags: ['colonialism', 'economics'],
		related: ['sa-rubber-boom']
	},
	{
		id: 'africa-rinderpest',
		title: 'The Rinderpest Catastrophe',
		year: 1889,
		description:
			"A cattle plague introduced to the Horn of Africa spread south over a decade, killing around 90% of the cattle in sub-Saharan Africa along with wild buffalo and antelope.",
		significance:
			"For pastoral peoples, rinderpest meant famine and social collapse — arriving just as Europeans invaded, it made colonial conquest far easier.",
		wikipediaSlug: '1890s_African_rinderpest_epizootic',
		tags: ['environment', 'pandemic', 'colonialism']
	},
	{
		id: 'africa-adwa',
		title: 'Battle of Adwa',
		year: 1896,
		description:
			'Emperor Menelik II of Ethiopia, with an army equipped with modern rifles, decisively defeated an Italian invasion force at Adwa.',
		significance:
			'Adwa preserved Ethiopian independence during the Scramble for Africa and became a symbol of African resistance; the pan-African colors come from the Ethiopian flag.',
		wikipediaSlug: 'Battle_of_Adwa',
		tags: ['war', 'independence', 'colonialism']
	},
	{
		id: 'africa-benin-expedition',
		title: 'Britain Sacks Benin City',
		year: 1897,
		description:
			"A British punitive expedition burned Benin City, exiled the Oba, and carried off thousands of bronzes, ivories, and sculptures, many of which were sold to fund the operation.",
		significance:
			"The Benin Bronzes became the most famous case of colonial looting; since 2022, Germany, the US, and others have begun returning them to Nigeria.",
		wikipediaSlug: 'Benin_Expedition_of_1897',
		tags: ['colonialism', 'art', 'war'],
		related: ['africa-benin']
	},
	{
		id: 'africa-omdurman',
		title: 'Battle of Omdurman',
		year: 1898,
		description:
			"At Omdurman in Sudan, a British-Egyptian force with Maxim machine guns killed some 10,000 Mahdist soldiers while losing fewer than 50 of its own.",
		significance:
			"Omdurman showed the brutal technological gap of the colonial era: as Hilaire Belloc wrote, \"We have got the Maxim gun, and they have not.\"",
		wikipediaSlug: 'Battle_of_Omdurman',
		tags: ['war', 'technology', 'colonialism']
	},
	{
		id: 'africa-boer-war',
		title: 'Second Boer War',
		year: 1899,
		description:
			"Britain fought the Boer republics for control of South Africa's gold. Britain herded Boer and Black African civilians into concentration camps, where tens of thousands died.",
		significance:
			"The war united South Africa under British rule but on terms that sidelined Black Africans — the 1910 Union excluded most of them from voting.",
		wikipediaSlug: 'Second_Boer_War',
		tags: ['war', 'colonialism']
	},
	{
		id: 'africa-herero-genocide',
		title: 'Herero and Nama Genocide',
		year: 1904,
		description:
			"In German South West Africa (Namibia), General von Trotha issued an extermination order against the rebelling Herero, driving them into the desert. Up to 80% of the Herero and half the Nama died.",
		significance:
			"Often called the first genocide of the 20th century, it prefigured methods later used in the Holocaust. Germany formally acknowledged it as genocide only in 2021.",
		wikipediaSlug: 'Herero_and_Nama_genocide',
		tags: ['colonialism', 'war'],
		related: ['europe-holocaust']
	},
	{
		id: 'africa-maji-maji',
		title: 'Maji Maji Rebellion',
		year: 1905,
		description:
			"Peoples of German East Africa rose against forced cotton growing, united by a belief that sacred water (maji) would turn bullets to water. German scorched-earth tactics caused a famine that killed hundreds of thousands.",
		significance:
			"Maji Maji was one of the first multi-ethnic uprisings against colonial rule — later celebrated by Tanzanian nationalists as the root of their independence movement.",
		wikipediaSlug: 'Maji_Maji_Rebellion',
		tags: ['colonialism', 'war', 'religion']
	},
	{
		id: 'africa-anc',
		title: 'African National Congress Founded',
		year: 1912,
		description:
			'Black South African leaders met in Bloemfontein to form the South African Native National Congress, later the ANC, to defend African rights after Union.',
		significance:
			"The ANC became Africa's oldest liberation movement, leading the eight-decade struggle that ended apartheid.",
		wikipediaSlug: 'African_National_Congress',
		tags: ['politics', 'independence']
	},
	{
		id: 'africa-natives-land-act',
		title: 'Natives Land Act',
		year: 1913,
		description:
			"South Africa's parliament restricted Black land ownership to reserves amounting to about 7% of the country (later 13%). Sol Plaatje wrote that the Black South African was now \"a pariah in the land of his birth.\"",
		significance:
			"The Land Act laid the legal foundation of apartheid decades before the word existed; land restitution remains unresolved today.",
		wikipediaSlug: 'Natives_Land_Act,_1913',
		tags: ['law', 'colonialism', 'politics']
	},
	{
		id: 'africa-hiv-origin',
		title: 'HIV Crosses to Humans',
		year: 1920,
		description:
			'Genetic studies trace the pandemic strain of HIV to a spillover from chimpanzees in southeastern Cameroon, which then spread through colonial Kinshasa around the 1920s via railways and urban growth.',
		significance:
			"Colonial infrastructure helped turn a local infection into a global pandemic that has killed over 40 million people. Africa still carries two-thirds of the world's HIV burden.",
		wikipediaSlug: 'HIV/AIDS',
		tags: ['pandemic', 'medicine', 'colonialism'],
		related: ['na-aids']
	},
	{
		id: 'africa-italy-ethiopia',
		title: 'Italy Invades Ethiopia',
		year: 1935,
		description:
			"Mussolini invaded Ethiopia, using poison gas against soldiers and civilians. Emperor Haile Selassie's appeal to the League of Nations went unanswered.",
		significance:
			"The League's failure to stop Italy showed the world that collective security was hollow — a direct step toward the Second World War.",
		wikipediaSlug: 'Second_Italo-Ethiopian_War',
		tags: ['war', 'colonialism', 'politics'],
		related: ['europe-ww2-start']
	},
	{
		id: 'africa-apartheid',
		title: 'Apartheid Instituted',
		year: 1948,
		description:
			"The National Party won South Africa's whites-only election and built apartheid: laws classifying every person by race and controlling where they could live, work, marry, and travel.",
		significance:
			"Apartheid was the most systematic legal racial hierarchy of the post-war world, and its defeat became a global moral cause.",
		wikipediaSlug: 'Apartheid',
		tags: ['politics', 'law']
	},
	{
		id: 'africa-mau-mau',
		title: 'Mau Mau Uprising',
		year: 1952,
		description:
			"Kikuyu fighters in Kenya rose against British colonial land seizures. Britain declared an emergency, detained over 100,000 people in camps, and used torture on a vast scale.",
		significance:
			"Mau Mau hastened Kenyan independence; in 2013 Britain paid compensation to survivors after a court case revealed long-hidden colonial files.",
		wikipediaSlug: 'Mau_Mau_rebellion',
		tags: ['colonialism', 'war', 'independence']
	},
	{
		id: 'africa-algerian-war',
		title: 'Algerian War of Independence',
		year: 1954,
		description:
			"The FLN launched an insurgency against French rule. The eight-year war, marked by terrorism and systematic torture, killed hundreds of thousands and toppled the French Fourth Republic.",
		significance:
			"Algeria's war became the defining struggle of decolonization, influencing liberation movements and counterinsurgency doctrine worldwide.",
		wikipediaSlug: 'Algerian_War',
		tags: ['war', 'independence', 'colonialism'],
		related: ['africa-algeria']
	},
	{
		id: 'africa-suez-crisis',
		title: 'Suez Crisis',
		year: 1956,
		description:
			"Egypt's President Nasser nationalized the Suez Canal. Britain, France, and Israel invaded, but withdrew under pressure from the United States and the Soviet Union.",
		significance:
			"Suez marked the end of Britain and France as independent world powers and made Nasser the hero of Arab and African anti-colonialism.",
		wikipediaSlug: 'Suez_Crisis',
		tags: ['politics', 'war', 'colonialism'],
		related: ['africa-suez-canal']
	},
	{
		id: 'africa-ghana-independence',
		title: 'Ghana Leads the Way',
		year: 1957,
		description:
			"Under Kwame Nkrumah, the Gold Coast became Ghana — the first sub-Saharan African colony to win independence. \"Ghana, your beloved country, is free forever,\" Nkrumah declared.",
		significance:
			"Ghana's independence was the starting gun for a continent; Nkrumah's pan-Africanism inspired every liberation movement that followed.",
		wikipediaSlug: 'Kwame_Nkrumah',
		tags: ['independence', 'politics'],
		related: ['asia-bandung', 'asia-indian-independence']
	},
	{
		id: 'africa-independence',
		title: 'Year of African Independence',
		year: 1960,
		description:
			"In 1960 alone, 17 African nations gained independence from European colonial powers. Within two decades, nearly the entire continent was self-governing.",
		significance:
			'African decolonization reshaped the global order, more than doubling the number of UN members and challenging European dominance of world affairs.',
		wikipediaSlug: 'Year_of_Africa',
		tags: ['independence', 'politics']
	},
	{
		id: 'africa-sharpeville',
		title: 'Sharpeville Massacre',
		year: 1960,
		description:
			'South African police opened fire on a crowd protesting the pass laws at Sharpeville, killing 69 people. The government banned the ANC and PAC soon after.',
		significance:
			"Sharpeville turned world opinion against apartheid and pushed the ANC to abandon nonviolence; March 21 is now International Day for the Elimination of Racial Discrimination.",
		wikipediaSlug: 'Sharpeville_massacre',
		tags: ['politics', 'law']
	},
	{
		id: 'africa-lumumba',
		title: 'Assassination of Patrice Lumumba',
		year: 1961,
		description:
			"Patrice Lumumba, the Congo's first elected prime minister, was overthrown, handed to Katangese secessionists, and executed with Belgian complicity and US and UN acquiescence.",
		significance:
			"Lumumba's murder showed how the Cold War would be fought in Africa — through coups and proxies — and opened the way for Mobutu's 32-year dictatorship.",
		wikipediaSlug: 'Patrice_Lumumba',
		tags: ['politics', 'independence', 'cold-war']
	},
	{
		id: 'africa-oau',
		title: 'Organisation of African Unity',
		year: 1963,
		description:
			'Thirty-two newly independent states founded the Organisation of African Unity in Addis Ababa, pledging to end colonialism and to respect the borders they had inherited.',
		significance:
			"The OAU's decision to keep colonial borders avoided endless border wars — but locked in the arbitrary lines drawn in Berlin in 1884.",
		wikipediaSlug: 'Organisation_of_African_Unity',
		tags: ['politics', 'independence'],
		related: ['africa-berlin-conference', 'africa-african-union']
	},
	{
		id: 'africa-biafra',
		title: 'Nigerian Civil War',
		year: 1967,
		description:
			"Nigeria's southeast seceded as the Republic of Biafra. A federal blockade caused a famine that killed up to a million or more civilians before Biafra surrendered in 1970.",
		significance:
			"Biafra was the first famine broadcast on global television; it gave birth to modern humanitarian NGOs, including Médecins Sans Frontières.",
		wikipediaSlug: 'Nigerian_Civil_War',
		tags: ['war', 'politics']
	},
	{
		id: 'africa-aswan',
		title: 'Aswan High Dam Completed',
		year: 1970,
		description:
			"The Soviet-funded Aswan High Dam ended the Nile's annual flood, generating electricity and allowing year-round irrigation. Ancient temples including Abu Simbel had to be moved to escape the rising Lake Nasser.",
		significance:
			"The dam ended 5,000 years of life shaped by the Nile flood — trading fertile silt and a stable delta for power and control.",
		wikipediaSlug: 'Aswan_High_Dam',
		tags: ['environment', 'technology', 'cold-war']
	},
	{
		id: 'africa-sahel-drought',
		title: 'The Great Sahel Drought',
		year: 1972,
		description:
			"Years of failed rains from the late 1960s to the mid-1980s brought famine to the Sahel, killing hundreds of thousands of people and millions of livestock.",
		significance:
			"The Sahel drought pushed desertification and climate onto the international agenda and is one of the most dramatic regional climate shifts of the 20th century.",
		wikipediaSlug: 'Sahel',
		tags: ['environment', 'collapse']
	},
	{
		id: 'africa-soweto',
		title: 'Soweto Uprising',
		year: 1976,
		description:
			'Thousands of Black schoolchildren in Soweto marched against being forced to learn in Afrikaans. Police opened fire; hundreds were killed in the unrest that followed.',
		significance:
			"Soweto brought a new generation into the anti-apartheid struggle; the photograph of the dying Hector Pieterson became an icon of the fight.",
		wikipediaSlug: 'Soweto_uprising',
		tags: ['politics', 'education']
	},
	{
		id: 'africa-green-belt',
		title: 'Green Belt Movement',
		year: 1977,
		description:
			'Kenyan biologist Wangari Maathai founded the Green Belt Movement, organizing rural women to plant trees. It has planted over 50 million.',
		significance:
			'Maathai linked environmental restoration to women\'s rights and democracy; in 2004 she became the first African woman to win the Nobel Peace Prize.',
		wikipediaSlug: 'Green_Belt_Movement',
		tags: ['environment', 'politics', 'society']
	},
	{
		id: 'africa-smallpox-eradicated',
		title: 'Last Case of Smallpox',
		year: 1977,
		description:
			"Ali Maow Maalin, a hospital cook in Merka, Somalia, was the last person to catch smallpox naturally. He recovered and later worked on polio eradication.",
		significance:
			"Smallpox, which killed an estimated 300 million people in the 20th century alone, became the first human disease ever eradicated.",
		wikipediaSlug: 'Smallpox',
		tags: ['medicine', 'science'],
		related: ['europe-smallpox-vaccine']
	},
	{
		id: 'africa-rwanda-genocide',
		title: 'Rwandan Genocide',
		year: 1994,
		description:
			"Over about 100 days, Hutu extremists killed an estimated 500,000–800,000 Tutsi and moderate Hutu, often with machetes and incited by radio broadcasts. UN peacekeepers were withdrawn.",
		significance:
			"The world's failure in Rwanda led to the doctrine of the 'Responsibility to Protect' and international criminal tribunals — and spilled into the Congo wars.",
		wikipediaSlug: 'Rwandan_genocide',
		tags: ['war', 'politics']
	},
	{
		id: 'africa-mandela',
		title: 'Mandela Elected President',
		year: 1994,
		description:
			"After 27 years in prison, Nelson Mandela led the ANC to victory in South Africa's first democratic election, in which Black South Africans could vote for the first time.",
		significance:
			"The negotiated end of apartheid, without the civil war many expected, is one of the great political achievements of the 20th century.",
		wikipediaSlug: 'Nelson_Mandela',
		tags: ['politics', 'democracy']
	},
	{
		id: 'africa-congo-wars',
		title: 'Second Congo War',
		year: 1998,
		description:
			"Nine African countries and dozens of armed groups fought in the Democratic Republic of the Congo, partly over its mineral wealth. Millions died, mostly from disease and starvation.",
		significance:
			"Sometimes called Africa's World War, it was the deadliest conflict since 1945 — and the minerals in your phone are still entangled with it.",
		wikipediaSlug: 'Second_Congo_War',
		tags: ['war', 'economics'],
		related: ['africa-rwanda-genocide']
	},
	{
		id: 'africa-african-union',
		title: 'African Union Founded',
		year: 2002,
		description:
			'The OAU was replaced by the African Union, with a stronger mandate to intervene in member states in cases of genocide, war crimes, and unconstitutional changes of government.',
		significance:
			"The AU marked a shift from non-interference to 'non-indifference' — an attempt to make African institutions solve African crises.",
		wikipediaSlug: 'African_Union',
		tags: ['politics']
	},
	{
		id: 'africa-mpesa',
		title: 'M-Pesa Launches',
		year: 2007,
		description:
			'Kenya\'s Safaricom launched M-Pesa, letting people send money by text message on basic phones. Within a few years most Kenyan adults used it.',
		significance:
			'Africa leapfrogged the bank branch: M-Pesa made Kenya a world leader in mobile money and brought financial services to millions who had never had a bank account.',
		wikipediaSlug: 'M-PESA',
		tags: ['technology', 'economics']
	},
	{
		id: 'africa-arab-spring',
		title: 'The Arab Spring Begins',
		year: 2010,
		description:
			"Street vendor Mohamed Bouazizi set himself on fire in Tunisia after police harassment. Protests toppled President Ben Ali within a month and spread to Egypt, Libya, and beyond.",
		significance:
			"Tunisia was the Arab Spring's only lasting democratic success, and even that has since eroded. Elsewhere the uprisings led to civil wars and renewed authoritarianism.",
		wikipediaSlug: 'Tunisian_revolution',
		tags: ['revolution', 'politics', 'democracy'],
		related: ['asia-syrian-war']
	},
	{
		id: 'africa-ebola',
		title: 'West African Ebola Epidemic',
		year: 2014,
		description:
			'The largest Ebola outbreak in history spread through Guinea, Liberia, and Sierra Leone, infecting over 28,000 people and killing more than 11,000.',
		significance:
			"Ebola exposed weak health systems and a slow global response; it accelerated vaccine development and shaped pandemic preparedness ahead of COVID-19.",
		wikipediaSlug: 'Western_African_Ebola_epidemic',
		tags: ['pandemic', 'medicine'],
		related: ['asia-covid']
	},
	{
		id: 'africa-gerd',
		title: 'Grand Ethiopian Renaissance Dam',
		year: 2020,
		description:
			"Ethiopia began filling Africa's largest hydroelectric dam on the Blue Nile, despite fierce objections from Egypt, which depends on the river for nearly all its fresh water.",
		significance:
			"The dam is a test of whether upstream development and downstream survival can be negotiated — a preview of water conflicts in a warming world.",
		wikipediaSlug: 'Grand_Ethiopian_Renaissance_Dam',
		tags: ['environment', 'politics', 'technology'],
		related: ['africa-aswan']
	},
	{
		id: 'africa-afcfta',
		title: 'African Continental Free Trade Area',
		year: 2021,
		description:
			'The AfCFTA began trading, creating by membership count the largest free trade area in the world, covering 54 countries and some 1.3 billion people.',
		significance:
			"Only around 15% of African trade is with other African countries. The AfCFTA is a bet that integration, not raw-material exports, is the path to prosperity.",
		wikipediaSlug: 'African_Continental_Free_Trade_Area',
		tags: ['trade', 'economics', 'politics']
	}
];
