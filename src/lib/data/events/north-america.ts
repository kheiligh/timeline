import type { TimelineEvent } from '../../types';

export const northAmericaEvents: TimelineEvent[] = [
	{
		id: 'na-white-sands',
		title: 'White Sands Footprints',
		year: -21_000,
		description:
			"Human footprints preserved in ancient lakebeds at White Sands, New Mexico, have been dated to roughly 21,000–23,000 years ago, during the height of the last Ice Age.",
		significance:
			"If the dates hold, people were in North America thousands of years earlier than the long-standing 'Clovis first' model allowed — rewriting the story of the Americas.",
		wikipediaSlug: 'White_Sands_footprints',
		tags: ['prehistory', 'migration']
	},
	{
		id: 'na-first-americans',
		title: 'First Americans Arrive',
		year: -15_000,
		description:
			"Humans first entered North America from Siberia via the Bering land bridge around 15,000–20,000 years ago. Some evidence suggests even earlier arrival via coastal migration.",
		significance:
			"The peopling of the Americas was humanity's last major continental migration, completing the human occupation of every habitable continent.",
		wikipediaSlug: 'Peopling_of_the_Americas',
		tags: ['prehistory', 'migration'],
		related: ['asia-beringia', 'sa-monte-verde']
	},
	{
		id: 'na-clovis',
		title: 'Clovis Culture',
		year: -11_000,
		description:
			"Hunters across North America made distinctive fluted spear points, first found near Clovis, New Mexico. Clovis sites appear and vanish within a few centuries.",
		significance:
			"Clovis was once thought to be the first American culture. It is now seen as one rapid technological wave among peoples already present.",
		wikipediaSlug: 'Clovis_culture',
		tags: ['prehistory', 'technology']
	},
	{
		id: 'na-megafauna',
		title: 'Megafauna Extinctions',
		year: -10_500,
		description:
			"Mammoths, mastodons, giant ground sloths, sabre-toothed cats, and native American horses disappeared as the Ice Age ended. North America lost most of its large mammals.",
		significance:
			"Climate change, human hunting, or both? The debate continues — but the loss of large animals meant the Americas had few candidates for domestication.",
		wikipediaSlug: 'Late_Pleistocene_extinctions',
		tags: ['environment', 'prehistory']
	},
	{
		id: 'na-maize',
		title: 'Maize Domesticated',
		year: -7000,
		description:
			"In the Balsas River valley of southern Mexico, people began domesticating teosinte, a wild grass with tiny cobs. Over millennia it became maize.",
		significance:
			"Maize is one of the great achievements of plant breeding. It fed the civilizations of the Americas and now is the most-produced grain on Earth.",
		wikipediaSlug: 'Maize',
		tags: ['agriculture', 'indigenous', 'science'],
		related: ['asia-agriculture', 'europe-columbian-exchange', 'africa-new-world-crops']
	},
	{
		id: 'na-watson-brake',
		title: 'Watson Brake Mounds',
		year: -3500,
		description:
			"Hunter-gatherers in Louisiana built a ring of eleven earthen mounds connected by ridges, about 5,500 years ago — older than the Egyptian pyramids.",
		significance:
			"Watson Brake shows that monumental building in North America began among foragers, not farmers — and much earlier than once believed.",
		wikipediaSlug: 'Watson_Brake',
		tags: ['architecture', 'indigenous', 'prehistory']
	},
	{
		id: 'na-ballgame',
		title: 'The Mesoamerican Ballgame',
		year: -1650,
		description:
			"The earliest known ballcourt, at Paso de la Amada in Chiapas, dates to around 1650 BCE. The game was played with solid rubber balls made from latex and morning glory juice.",
		significance:
			"Mesoamericans processed rubber 3,000 years before Goodyear. The ballgame was sport, ritual, and politics — a cultural thread across 3,000 years.",
		wikipediaSlug: 'Mesoamerican_ballgame',
		tags: ['sport', 'religion', 'technology', 'indigenous']
	},
	{
		id: 'na-poverty-point',
		title: 'Poverty Point',
		year: -1700,
		description:
			"In northeastern Louisiana, people built massive concentric earthen ridges and mounds. Materials from as far as the Great Lakes show a wide trading network.",
		significance:
			"Poverty Point was one of the largest earthwork complexes of its time anywhere, built by hunter-gatherers. It is a UNESCO World Heritage Site.",
		wikipediaSlug: 'Poverty_Point',
		tags: ['architecture', 'trade', 'indigenous']
	},
	{
		id: 'na-olmec',
		title: 'The Olmec',
		year: -1200,
		description:
			"On Mexico's Gulf Coast, the Olmec built ceremonial centers like San Lorenzo and La Venta and carved colossal stone heads weighing up to 40 tons.",
		significance:
			"Often called Mesoamerica's 'mother culture,' the Olmec pioneered traditions — ballgames, calendars, pyramids — that later civilizations inherited.",
		wikipediaSlug: 'Olmecs',
		tags: ['civilization', 'art', 'indigenous']
	},
	{
		id: 'na-monte-alban',
		title: 'Monte Albán',
		year: -500,
		description:
			"The Zapotec leveled a mountaintop in Oaxaca to build Monte Albán, one of the first cities in Mesoamerica. Carvings there include some of the earliest writing in the Americas.",
		significance:
			"Monte Albán was a political capital for over a thousand years — one of the earliest urban states in the Western Hemisphere.",
		wikipediaSlug: 'Monte_Albán',
		tags: ['urban', 'communication', 'indigenous']
	},
	{
		id: 'na-maya-writing',
		title: 'Maya Writing',
		year: -300,
		description:
			"The Maya developed a full writing system of over 800 glyphs. Murals at San Bartolo, Guatemala show it in use by the 3rd century BCE.",
		significance:
			"Maya script is the only fully developed writing system of the pre-Columbian Americas to have been substantially deciphered. Most Maya books were burned by Spanish priests.",
		wikipediaSlug: 'Maya_script',
		tags: ['communication', 'indigenous', 'civilization']
	},
	{
		id: 'na-maya-zero',
		title: 'The Maya Invent Zero',
		year: -36,
		description:
			"Long Count calendar inscriptions show the Maya using a symbol for zero in a place-value system. A stela from Chiapa de Corzo carries a date equivalent to 36 BCE.",
		significance:
			"The Maya independently invented zero — one of only a handful of cultures ever to do so — and used it in astronomical calculations of great precision.",
		wikipediaSlug: 'Maya_numerals',
		tags: ['science', 'astronomy', 'indigenous'],
		related: ['asia-brahmagupta']
	},
	{
		id: 'na-hopewell',
		title: 'Hopewell Exchange Network',
		year: -100,
		description:
			"Across the Ohio and Mississippi valleys, the Hopewell tradition built geometric earthworks and traded obsidian from Wyoming, copper from Lake Superior, and shells from the Gulf.",
		significance:
			"The Hopewell exchange network linked much of eastern North America — a continental trade system without cities, writing, or the wheel.",
		wikipediaSlug: 'Hopewell_tradition',
		tags: ['trade', 'architecture', 'indigenous']
	},
	{
		id: 'na-teotihuacan',
		title: 'Teotihuacan',
		year: 100,
		description:
			"Teotihuacan, near modern Mexico City, built the Pyramid of the Sun and grew to perhaps 100,000 people, one of the largest cities in the world at the time.",
		significance:
			"Teotihuacan was so impressive that the Aztecs, finding its ruins centuries later, named it 'the place where the gods were created.'",
		wikipediaSlug: 'Teotihuacan',
		tags: ['urban', 'architecture', 'indigenous']
	},
	{
		id: 'na-maya-classic',
		title: 'Classic Maya City-States',
		year: 250,
		description:
			"Maya cities like Tikal, Calakmul, Copán, and Palenque flourished across the Yucatán and Guatemala, with pyramids, palaces, and dynastic records carved in stone.",
		significance:
			"LiDAR surveys reveal that the Maya lowlands held millions of people connected by causeways — a far more urban landscape than once believed.",
		wikipediaSlug: 'Maya_civilization',
		tags: ['civilization', 'urban', 'indigenous']
	},
	{
		id: 'na-tikal-entrada',
		title: 'Teotihuacan Arrives at Tikal',
		year: 378,
		description:
			"A warlord from Teotihuacan named Siyaj K'ak' arrived at Tikal; that same day its king died, and a new dynasty aligned with Teotihuacan took power.",
		significance:
			"Decoded glyphs reveal a precise political event — a coup or conquest — showing that Maya history can be read as history, not just archaeology.",
		wikipediaSlug: 'Siyaj_Kʼakʼ',
		tags: ['politics', 'war', 'indigenous']
	},
	{
		id: 'na-pakal',
		title: 'Tomb of Pakal the Great',
		year: 683,
		description:
			"K'inich Janaab' Pakal, who ruled Palenque for 68 years, was buried in an elaborate sarcophagus beneath the Temple of the Inscriptions with a jade mask.",
		significance:
			"Pakal's tomb, discovered in 1952, is among the most spectacular finds in the Americas.",
		wikipediaSlug: 'Kʼinich_Janaabʼ_Pakal',
		tags: ['art', 'religion', 'indigenous']
	},
	{
		id: 'na-hohokam',
		title: 'Hohokam Canals',
		year: 750,
		description:
			"In the Sonoran Desert, the Hohokam built hundreds of kilometers of irrigation canals from the Salt and Gila rivers. Modern Phoenix's canal system follows some of their routes.",
		significance:
			"The Hohokam built one of the largest pre-industrial irrigation systems in the Americas, farming the desert for centuries.",
		wikipediaSlug: 'Hohokam',
		tags: ['technology', 'agriculture', 'indigenous']
	},
	{
		id: 'na-chaco',
		title: 'Chaco Canyon',
		year: 850,
		description:
			"Ancestral Puebloans built 'great houses' like Pueblo Bonito, with hundreds of rooms, linked by straight roads across the desert. Some buildings align with solar and lunar cycles.",
		significance:
			"Chaco was the ceremonial and trade center of the Southwest, importing macaws and cacao from Mexico.",
		wikipediaSlug: 'Chaco_Culture_National_Historical_Park',
		tags: ['architecture', 'astronomy', 'trade', 'indigenous']
	},
	{
		id: 'na-maya-collapse',
		title: 'Classic Maya Collapse',
		year: 900,
		description:
			"In the 9th century, the great cities of the southern Maya lowlands were abandoned. Lake sediments record a series of severe droughts; warfare and overpopulation compounded them.",
		significance:
			"The Maya collapse is a classic case of environmental stress overwhelming a complex society. The Maya people, however, did not disappear — millions live there today.",
		wikipediaSlug: 'Classic_Maya_collapse',
		tags: ['collapse', 'environment', 'indigenous']
	},
	{
		id: 'na-norse-greenland',
		title: 'Norse Settle Greenland',
		year: 985,
		endYear: 1450,
		description:
			"Erik the Red led settlers from Iceland to southwestern Greenland. The colonies lasted nearly 500 years before vanishing in the 15th century.",
		significance:
			"Greenland's Norse died out as the climate cooled and trade with Europe dwindled, while the Inuit thrived — a lesson in adapting to a changing environment.",
		wikipediaSlug: 'Norse_settlement_of_North_America',
		tags: ['migration', 'environment', 'collapse'],
		related: ['europe-viking-age', 'europe-little-ice-age', 'na-thule']
	},
	{
		id: 'na-chichen-itza',
		title: 'Chichen Itza',
		year: 1000,
		description:
			"Chichen Itza rose to dominate the northern Yucatán. The pyramid of El Castillo was designed so that, at the equinoxes, shadows form a serpent descending its steps.",
		significance:
			"Chichen Itza shows Maya civilization adapting after the southern collapse, with new styles shaped by contact with central Mexico.",
		wikipediaSlug: 'Chichen_Itza',
		tags: ['architecture', 'astronomy', 'indigenous']
	},
	{
		id: 'na-lanse-aux-meadows',
		title: "L'Anse aux Meadows",
		year: 1021,
		description:
			"Norse explorers built a small settlement on the northern tip of Newfoundland. Tree-ring dating shows wood was cut there with metal tools in 1021.",
		significance:
			"L'Anse aux Meadows proves Europeans reached the Americas nearly 500 years before Columbus — but without lasting consequence.",
		wikipediaSlug: "L'Anse_aux_Meadows",
		tags: ['exploration', 'migration'],
		related: ['europe-viking-age']
	},
	{
		id: 'na-cahokia',
		title: "Cahokia: North America's Greatest City",
		year: 1050,
		description:
			"Cahokia, near modern St. Louis, reached its peak around 1050 CE with an estimated 10,000–20,000 people — larger than contemporary London. Its Monks Mound remains the largest earthwork in the Americas.",
		significance:
			"Cahokia proves that large, complex urban civilizations existed in North America long before European contact — history that remains largely unknown.",
		wikipediaSlug: 'Cahokia',
		tags: ['civilization', 'urban', 'indigenous']
	},
	{
		id: 'na-mesa-verde',
		title: 'Mesa Verde Abandoned',
		year: 1280,
		description:
			"Ancestral Puebloans built cliff dwellings in Mesa Verde's canyon walls, then left the region entirely during the 'Great Drought' of the late 13th century.",
		significance:
			"The migration south to the Rio Grande created the Pueblo communities that still exist — a story of adaptation, not disappearance.",
		wikipediaSlug: 'Mesa_Verde_National_Park',
		tags: ['environment', 'migration', 'indigenous']
	},
	{
		id: 'na-thule',
		title: 'Thule Migration',
		year: 1200,
		description:
			"The Thule people, ancestors of the Inuit, spread rapidly east from Alaska across the Arctic to Greenland using dogsleds, kayaks, and umiaks. They replaced the earlier Dorset culture.",
		significance:
			"The Thule mastered one of the harshest environments on Earth and met the Norse in Greenland — the first sustained contact between Europeans and Indigenous Americans.",
		wikipediaSlug: 'Thule_people',
		tags: ['migration', 'technology', 'indigenous'],
		related: ['na-norse-greenland']
	},
	{
		id: 'na-tenochtitlan',
		title: 'Tenochtitlan Founded',
		year: 1325,
		description:
			"The Mexica founded Tenochtitlan on an island in Lake Texcoco, where legend said they saw an eagle on a cactus. They built causeways, aqueducts, and floating gardens called chinampas.",
		significance:
			"By 1519 Tenochtitlan had perhaps 200,000 people, larger than any city in Spain. The eagle on a cactus is on Mexico's flag today.",
		wikipediaSlug: 'Tenochtitlan',
		tags: ['urban', 'technology', 'indigenous']
	},
	{
		id: 'na-aztec-empire',
		title: 'Aztec Triple Alliance',
		year: 1428,
		description:
			"Tenochtitlan, Texcoco, and Tlacopan formed the Triple Alliance and conquered much of central Mexico, demanding tribute from hundreds of city-states.",
		significance:
			"The Aztec Empire's tributary system made it rich — and left many subject peoples ready to ally with the Spanish against it.",
		wikipediaSlug: 'Aztec_Empire',
		tags: ['empire', 'indigenous']
	},
	{
		id: 'na-haudenosaunee',
		title: 'Haudenosaunee Confederacy',
		year: 1450,
		description:
			"Five nations — Mohawk, Oneida, Onondaga, Cayuga, and Seneca — united under the Great Law of Peace, with a council of chiefs chosen by clan mothers. Dates for its founding range from the 12th to the 15th century.",
		significance:
			"The Confederacy is one of the oldest participatory democracies on Earth; the US Congress acknowledged its influence on the Constitution in 1988.",
		wikipediaSlug: 'Haudenosaunee',
		tags: ['democracy', 'government', 'indigenous'],
		related: ['na-constitution']
	},
	{
		id: 'na-columbus',
		title: 'Columbus Reaches the Americas',
		year: 1492,
		description:
			"Christopher Columbus landed in the Caribbean on October 12, 1492, initiating permanent contact between Europe and the Americas.",
		significance:
			"Columbus's voyage triggered the Columbian Exchange — the global transfer of plants, animals, diseases, and peoples — that permanently transformed both hemispheres.",
		wikipediaSlug: 'Christopher_Columbus',
		tags: ['exploration', 'colonialism'],
		related: ['europe-columbian-exchange']
	},
	{
		id: 'na-taino',
		title: 'Destruction of the Taíno',
		year: 1502,
		description:
			"On Hispaniola, Spanish colonists forced the Taíno into gold mines and plantations under the encomienda system. Disease, violence, and overwork reduced their population catastrophically within a generation.",
		significance:
			"The Caribbean was the first laboratory of European colonialism in the Americas; the collapse of its native labor force led directly to the import of enslaved Africans.",
		wikipediaSlug: 'Taíno',
		tags: ['colonialism', 'indigenous', 'slavery']
	},
	{
		id: 'na-smallpox-1520',
		title: 'Smallpox Strikes Mexico',
		year: 1520,
		description:
			"Smallpox arrived in Mexico with Spanish expeditions and swept through Tenochtitlan, killing the emperor Cuitláhuac and a large share of the city's population.",
		significance:
			"Disease, not steel, was the decisive conqueror. Smallpox raced ahead of the Spanish across the Americas, killing millions who never saw a European.",
		wikipediaSlug: 'Cuitláhuac',
		tags: ['pandemic', 'colonialism', 'indigenous'],
		related: ['sa-huayna-capac', 'europe-columbian-exchange']
	},
	{
		id: 'na-fall-of-tenochtitlan',
		title: 'Fall of Tenochtitlan',
		year: 1521,
		description:
			"After a 75-day siege by Hernán Cortés and tens of thousands of Indigenous allies, Tenochtitlan fell. Mexico City was built on its ruins.",
		significance:
			"The Aztec Empire's fall began three centuries of Spanish rule and created the template for conquest across the Americas.",
		wikipediaSlug: 'Fall_of_Tenochtitlan',
		tags: ['war', 'colonialism', 'collapse', 'indigenous'],
		related: ['sa-conquest']
	},
	{
		id: 'na-guadalupe',
		title: 'Our Lady of Guadalupe',
		year: 1531,
		description:
			"According to tradition, the Virgin Mary appeared to Juan Diego, an Indigenous convert, on the hill of Tepeyac — once a shrine to the goddess Tonantzin.",
		significance:
			"Guadalupe fused Indigenous and Catholic devotion into a symbol of Mexican identity; her basilica is among the most visited Catholic shrines in the world.",
		wikipediaSlug: 'Our_Lady_of_Guadalupe',
		tags: ['religion', 'culture', 'indigenous']
	},
	{
		id: 'na-new-laws',
		title: 'Las Casas and the New Laws',
		year: 1542,
		description:
			"After years of advocacy by Dominican friar Bartolomé de las Casas, Spain issued the New Laws to limit Indigenous forced labor and ban their enslavement.",
		significance:
			"The New Laws were widely evaded, but the debate they sparked — are Indigenous peoples fully human with rights? — was an early chapter in human rights thought.",
		wikipediaSlug: 'New_Laws',
		tags: ['law', 'colonialism', 'indigenous']
	},
	{
		id: 'na-cocoliztli',
		title: 'Cocoliztli Epidemic',
		year: 1545,
		description:
			"A hemorrhagic fever the Aztecs called cocoliztli killed perhaps 5 to 15 million people in Mexico. Ancient DNA suggests Salmonella enterica may have been responsible.",
		significance:
			"One of the deadliest epidemics in human history struck a population already reeling from smallpox — compounding demographic collapse.",
		wikipediaSlug: 'Cocoliztli_epidemics',
		tags: ['pandemic', 'indigenous']
	},
	{
		id: 'na-mexican-silver',
		title: 'Silver Strikes in Zacatecas',
		year: 1546,
		description:
			"Spaniards discovered rich silver deposits at Zacatecas in northern Mexico. Along with Potosí, Mexican mines produced the bulk of the world's silver for two centuries.",
		significance:
			"Mexican silver, minted into Spanish dollars, became the first global currency — circulating from Europe to China.",
		wikipediaSlug: 'Spanish_dollar',
		tags: ['economics', 'trade', 'colonialism'],
		related: ['sa-potosi', 'asia-manila-galleon']
	},
	{
		id: 'na-st-augustine',
		title: 'St. Augustine Founded',
		year: 1565,
		description:
			"Spanish forces under Pedro Menéndez de Avilés founded St. Augustine in Florida, killing a nearby French Huguenot colony.",
		significance:
			"St. Augustine is the oldest continuously inhabited European-founded city in the continental United States — older than Jamestown by 42 years.",
		wikipediaSlug: 'St._Augustine,_Florida',
		tags: ['colonialism', 'urban']
	},
	{
		id: 'na-jamestown',
		title: 'Jamestown',
		year: 1607,
		description:
			"English colonists founded Jamestown in Virginia. Most died in the 'Starving Time,' but the colony survived by growing tobacco for export.",
		significance:
			"Jamestown was the first permanent English settlement in North America; its tobacco economy set the pattern of plantation agriculture.",
		wikipediaSlug: 'Jamestown',
		tags: ['colonialism', 'agriculture']
	},
	{
		id: 'na-quebec',
		title: 'Quebec City Founded',
		year: 1608,
		description:
			"Samuel de Champlain founded Quebec on the St. Lawrence River as a fur-trading post, allying with the Wendat (Huron) and Algonquin peoples.",
		significance:
			"Quebec became the heart of New France; its French language and culture survive as a distinct society within Canada.",
		wikipediaSlug: 'Quebec_City',
		tags: ['colonialism', 'trade']
	},
	{
		id: 'na-1619',
		title: 'Enslaved Africans Reach Virginia',
		year: 1619,
		description:
			"About 20 Africans, captured from a Portuguese slave ship, were brought to Point Comfort, Virginia, and traded for food — among the first Africans recorded in English North America.",
		significance:
			"1619 marks the start of slavery in what became the United States, an institution that would shape its economy, politics, and culture to the present.",
		wikipediaSlug: 'Slavery_in_the_colonial_history_of_the_United_States',
		tags: ['slavery', 'colonialism'],
		related: ['africa-atlantic-slave-trade']
	},
	{
		id: 'na-mayflower',
		title: 'The Mayflower',
		year: 1620,
		description:
			"English Puritan separatists landed at Plymouth in Massachusetts. Before going ashore, the men signed the Mayflower Compact, agreeing to govern themselves by majority rule.",
		significance:
			"The Plymouth colony became a founding American myth — though it survived its first winter only with the help of the Wampanoag.",
		wikipediaSlug: 'Mayflower',
		tags: ['colonialism', 'religion', 'migration']
	},
	{
		id: 'na-caribbean-sugar',
		title: 'The Caribbean Sugar Revolution',
		year: 1640,
		description:
			"English planters on Barbados switched from tobacco to sugarcane, importing enslaved Africans by the tens of thousands. The model spread across the Caribbean.",
		significance:
			"Sugar was the oil of the 17th and 18th centuries — and the Caribbean plantation was the deadliest workplace in the Atlantic world.",
		wikipediaSlug: 'Sugar_plantations_in_the_Caribbean',
		tags: ['slavery', 'agriculture', 'economics', 'colonialism'],
		related: ['africa-atlantic-slave-trade', 'sa-brazil-sugar', 'oceania-bounty']
	},
	{
		id: 'na-hudsons-bay',
		title: "Hudson's Bay Company",
		year: 1670,
		description:
			"King Charles II granted the Hudson's Bay Company a monopoly over trade in the vast watershed draining into Hudson Bay. Its fur trade depended on Indigenous trappers.",
		significance:
			"The HBC once controlled 15% of North America's land area — and still exists today, one of the oldest companies in the world.",
		wikipediaSlug: "Hudson's_Bay_Company",
		tags: ['trade', 'colonialism', 'economics']
	},
	{
		id: 'na-king-philips-war',
		title: "King Philip's War",
		year: 1675,
		description:
			"The Wampanoag leader Metacom (King Philip) led a coalition against encroaching New England colonists. The war devastated both sides; survivors were sold into slavery in the Caribbean.",
		significance:
			"Proportional to population, it was one of the deadliest wars in American history, and it broke Indigenous power in southern New England.",
		wikipediaSlug: "King_Philip's_War",
		tags: ['war', 'colonialism', 'indigenous']
	},
	{
		id: 'na-pueblo-revolt',
		title: 'Pueblo Revolt',
		year: 1680,
		description:
			"Led by Popé, the Pueblo peoples of New Mexico rose in a coordinated uprising, killing hundreds of Spanish colonists and driving the rest out of the region for twelve years.",
		significance:
			"The most successful Indigenous revolt against European colonization in North America forced Spain to tolerate Pueblo religion and land rights when it returned.",
		wikipediaSlug: 'Pueblo_Revolt',
		tags: ['revolution', 'colonialism', 'indigenous']
	},
	{
		id: 'na-sor-juana',
		title: 'Sor Juana Inés de la Cruz',
		year: 1690,
		description:
			"A self-taught nun in Mexico City, Sor Juana wrote poetry, plays, and a famous defense of women's right to education. Church authorities pressured her into silence.",
		significance:
			"Sor Juana is regarded as the first great poet of the Americas and an early voice for women's intellectual freedom.",
		wikipediaSlug: 'Juana_Inés_de_la_Cruz',
		tags: ['literature', 'religion', 'culture']
	},
	{
		id: 'na-plains-horse',
		title: 'The Horse Transforms the Plains',
		year: 1700,
		description:
			"Horses that spread north after the Pueblo Revolt transformed the Great Plains. The Comanche, Lakota, and others became mounted buffalo hunters and powerful equestrian nations.",
		significance:
			"The 'classic' Plains culture is a product of the Columbian Exchange. The Comanche built a horse-powered empire that blocked Spanish expansion for a century.",
		wikipediaSlug: 'Comanche',
		tags: ['indigenous', 'technology', 'environment'],
		related: ['europe-columbian-exchange', 'na-pueblo-revolt']
	},
	{
		id: 'na-seven-years-war',
		title: 'Seven Years\' War in America',
		year: 1763,
		description:
			"The Treaty of Paris ended the French and Indian War: France ceded Canada and lands east of the Mississippi to Britain. Pontiac's War erupted months later.",
		significance:
			"Britain's victory removed the French threat that had kept colonists loyal, and the cost of the war led to the taxes that sparked the American Revolution.",
		wikipediaSlug: 'French_and_Indian_War',
		tags: ['war', 'colonialism']
	},
	{
		id: 'na-independence',
		title: 'American Declaration of Independence',
		year: 1776,
		description:
			"The 13 American colonies declared independence from Britain on July 4, 1776, asserting that all men are created equal and that government derives its powers from the consent of the governed.",
		significance:
			"The American Revolution was a template for modern democracy that inspired revolutions worldwide — from France to Latin America to 20th-century decolonization.",
		wikipediaSlug: 'United_States_Declaration_of_Independence',
		tags: ['revolution', 'politics', 'democracy'],
		related: ['europe-french-revolution', 'europe-glorious-revolution']
	},
	{
		id: 'na-constitution',
		title: 'US Constitution',
		year: 1787,
		description:
			"Delegates in Philadelphia drafted a constitution creating a federal republic with separated powers and checks and balances. It counted enslaved people as three-fifths of a person.",
		significance:
			"The world's oldest written national constitution still in force — its compromises with slavery would take a civil war to undo.",
		wikipediaSlug: 'Constitution_of_the_United_States',
		tags: ['government', 'law', 'democracy']
	},
	{
		id: 'na-haitian-revolution',
		title: 'Haitian Revolution',
		year: 1791,
		endYear: 1804,
		description:
			"Enslaved people in French Saint-Domingue, the world's richest colony, rose in revolt. Led by Toussaint Louverture and Jean-Jacques Dessalines, they defeated French, Spanish, and British armies.",
		significance:
			"Haiti became the first nation founded by formerly enslaved people and the first to abolish slavery permanently — terrifying slaveholders across the Americas.",
		wikipediaSlug: 'Haitian_Revolution',
		tags: ['revolution', 'slavery', 'independence'],
		related: ['europe-french-revolution', 'africa-atlantic-slave-trade', 'na-louisiana-purchase', 'sa-independence']
	},
	{
		id: 'na-cotton-gin',
		title: 'The Cotton Gin',
		year: 1793,
		description:
			"Eli Whitney's cotton gin quickly separated seeds from short-staple cotton. Cotton production in the American South exploded.",
		significance:
			"A labor-saving machine entrenched slavery: the number of enslaved people in the US grew from about 700,000 in 1790 to nearly 4 million by 1860.",
		wikipediaSlug: 'Cotton_gin',
		tags: ['technology', 'slavery', 'economics']
	},
	{
		id: 'na-louisiana-purchase',
		title: 'Louisiana Purchase',
		year: 1803,
		description:
			"Napoleon, having lost Haiti and needing cash for war, sold the vast Louisiana territory to the United States for $15 million, doubling the country's size.",
		significance:
			"Haitian resistance indirectly made the US a continental power. The purchase opened the West — and the expulsion of its Indigenous inhabitants.",
		wikipediaSlug: 'Louisiana_Purchase',
		tags: ['politics', 'colonialism'],
		related: ['na-haitian-revolution', 'europe-napoleon']
	},
	{
		id: 'na-mexican-independence',
		title: 'Mexican War of Independence',
		year: 1810,
		description:
			"Priest Miguel Hidalgo rang his church bell in Dolores and called for revolt against Spanish rule. After eleven years of war, Mexico won independence in 1821.",
		significance:
			"Mexico's independence ended three centuries of Spanish rule over the richest part of its empire. The 'Grito de Dolores' is reenacted every September 15.",
		wikipediaSlug: 'Mexican_War_of_Independence',
		tags: ['revolution', 'independence'],
		related: ['sa-independence']
	},
	{
		id: 'na-trail-of-tears',
		title: 'Trail of Tears',
		year: 1838,
		description:
			"Under the Indian Removal Act, the US Army forced the Cherokee from their Southeastern homelands to Indian Territory. Thousands died on the march.",
		significance:
			"Indian Removal cleared land for cotton plantations and became a symbol of US betrayal of Native nations — the Cherokee had won their case in the Supreme Court.",
		wikipediaSlug: 'Trail_of_Tears',
		tags: ['colonialism', 'indigenous', 'migration']
	},
	{
		id: 'na-mexican-american-war',
		title: 'Mexican–American War',
		year: 1846,
		description:
			"The US invaded Mexico after annexing Texas. In the 1848 peace treaty, Mexico ceded about half its territory, including California.",
		significance:
			"The war gave the US its Pacific coast — and the question of whether the new lands would allow slavery set the country on the road to civil war.",
		wikipediaSlug: 'Mexican–American_War',
		tags: ['war', 'politics']
	},
	{
		id: 'na-seneca-falls',
		title: 'Seneca Falls Convention',
		year: 1848,
		description:
			"Elizabeth Cady Stanton, Lucretia Mott, and others gathered in Seneca Falls, New York, and issued a Declaration of Sentiments demanding equal rights for women, including the vote.",
		significance:
			"Seneca Falls launched the organized women's rights movement in the US — though American women would wait 72 years for the vote.",
		wikipediaSlug: 'Seneca_Falls_Convention',
		tags: ['democracy', 'politics', 'society']
	},
	{
		id: 'na-gold-rush',
		title: 'California Gold Rush',
		year: 1848,
		description:
			"Gold found at Sutter's Mill drew 300,000 people to California from around the world, including thousands from China. California's Native population was decimated.",
		significance:
			"The Gold Rush built San Francisco and the American West — and in California led to atrocities against Native peoples that the state's governor has since called a genocide.",
		wikipediaSlug: 'California_gold_rush',
		tags: ['economics', 'migration', 'indigenous'],
		related: ['oceania-gold-rush']
	},
	{
		id: 'na-civil-war',
		title: 'US Civil War Ends, Slavery Abolished',
		year: 1865,
		description:
			"The Confederate surrender in April 1865 ended four years of war that killed 620,000 soldiers. The 13th Amendment abolished slavery in December 1865.",
		significance:
			"The Civil War determined that the United States would be a single nation and ended the institution of slavery, though legal racial equality would take another century.",
		wikipediaSlug: 'American_Civil_War',
		tags: ['war', 'slavery', 'politics'],
		related: ['sa-brazil-abolition']
	},
	{
		id: 'na-confederation',
		title: 'Canadian Confederation',
		year: 1867,
		description:
			"Ontario, Quebec, Nova Scotia, and New Brunswick united as the Dominion of Canada, a self-governing federation within the British Empire.",
		significance:
			"Canada achieved independence through negotiation rather than revolution — a model later followed by other British dominions.",
		wikipediaSlug: 'Canadian_Confederation',
		tags: ['politics', 'independence']
	},
	{
		id: 'na-transcontinental-railroad',
		title: 'Transcontinental Railroad',
		year: 1869,
		description:
			"The Union Pacific and Central Pacific lines met at Promontory Summit, Utah. Much of the western section was built by Chinese immigrant laborers.",
		significance:
			"Crossing the continent went from months to about a week — knitting the US into a single market and accelerating the dispossession of the Plains nations.",
		wikipediaSlug: 'First_transcontinental_railroad',
		tags: ['technology', 'economics', 'migration']
	},
	{
		id: 'na-yellowstone',
		title: 'Yellowstone: First National Park',
		year: 1872,
		description:
			"President Ulysses S. Grant signed a law protecting Yellowstone 'for the benefit and enjoyment of the people' — the world's first national park.",
		significance:
			"The national park idea spread worldwide — though it often meant removing the Indigenous peoples who had shaped those 'wild' landscapes.",
		wikipediaSlug: 'Yellowstone_National_Park',
		tags: ['environment', 'politics', 'indigenous']
	},
	{
		id: 'na-bison',
		title: 'Slaughter of the Bison',
		year: 1874,
		description:
			"Commercial hunters killed millions of bison for hides in the 1870s, often with army encouragement. From perhaps 30 million or more, fewer than a thousand remained by 1889.",
		significance:
			"Destroying the bison destroyed the economic base of the Plains nations — an ecological catastrophe used as a weapon of conquest.",
		wikipediaSlug: 'American_bison_hunting',
		tags: ['environment', 'colonialism', 'indigenous']
	},
	{
		id: 'na-telephone',
		title: 'The Telephone',
		year: 1876,
		description:
			"Alexander Graham Bell was granted a patent for the telephone and transmitted the first intelligible speech: \"Mr. Watson, come here, I want to see you.\"",
		significance:
			"The telephone made real-time voice communication possible across distance — the beginning of the networked world.",
		wikipediaSlug: 'Invention_of_the_telephone',
		tags: ['technology', 'communication']
	},
	{
		id: 'na-chinese-exclusion',
		title: 'Chinese Exclusion Act',
		year: 1882,
		description:
			"The US banned Chinese laborers from immigrating — the first federal law to exclude a specific ethnic group. It was not repealed until 1943.",
		significance:
			"Chinese exclusion created the legal framework for US immigration control and set a precedent for race-based restrictions.",
		wikipediaSlug: 'Chinese_Exclusion_Act',
		tags: ['law', 'migration', 'politics']
	},
	{
		id: 'na-pearl-street',
		title: 'Edison Electrifies Manhattan',
		year: 1882,
		description:
			"Thomas Edison's Pearl Street Station in Lower Manhattan began supplying electricity to customers — the first commercial central power plant in the US.",
		significance:
			"The electric grid became the backbone of modern life, powering everything from lights to factories to the internet.",
		wikipediaSlug: 'Pearl_Street_Station',
		tags: ['technology', 'economics']
	},
	{
		id: 'na-residential-schools',
		title: 'Residential School System',
		year: 1883,
		description:
			"Canada began funding residential schools to separate Indigenous children from their families and assimilate them. Over 150,000 children attended; thousands died. The last closed in 1996.",
		significance:
			"Canada's Truth and Reconciliation Commission called it cultural genocide. Similar boarding schools operated in the United States.",
		wikipediaSlug: 'Canadian_Indian_residential_school_system',
		tags: ['colonialism', 'indigenous', 'education'],
		related: ['oceania-stolen-generations', 'na-truth-reconciliation']
	},
	{
		id: 'na-wounded-knee',
		title: 'Wounded Knee Massacre',
		year: 1890,
		description:
			"US soldiers killed some 250–300 Lakota men, women, and children at Wounded Knee Creek in South Dakota, after a struggle during disarmament.",
		significance:
			"Wounded Knee is often marked as the end of the Indian Wars and a symbol of the destruction of Native American independence.",
		wikipediaSlug: 'Wounded_Knee_Massacre',
		tags: ['war', 'colonialism', 'indigenous']
	},
	{
		id: 'na-spanish-american-war',
		title: 'Spanish–American War',
		year: 1898,
		description:
			"The US defeated Spain in a short war, taking Puerto Rico, Guam, and the Philippines, and making Cuba a protectorate.",
		significance:
			"The war turned the US into an overseas imperial power and ended Spain's empire in the Americas.",
		wikipediaSlug: 'Spanish–American_War',
		tags: ['war', 'colonialism']
	},
	{
		id: 'na-wright-brothers',
		title: 'First Powered Flight',
		year: 1903,
		description:
			"At Kitty Hawk, North Carolina, Orville and Wilbur Wright flew the first controlled, sustained, powered heavier-than-air flight: 12 seconds and 37 meters.",
		significance:
			"Within 66 years, humans went from Kitty Hawk to the Moon. Aviation shrank the world and transformed war.",
		wikipediaSlug: 'Wright_brothers',
		tags: ['technology'],
		related: ['sa-santos-dumont']
	},
	{
		id: 'na-mexican-revolution',
		title: 'Mexican Revolution',
		year: 1910,
		description:
			"Revolt against dictator Porfirio Díaz spiraled into a decade of civil war featuring Emiliano Zapata and Pancho Villa. Perhaps a million people died.",
		significance:
			"The revolution produced the 1917 Constitution with land reform and labor rights — one of the first social revolutions of the 20th century.",
		wikipediaSlug: 'Mexican_Revolution',
		tags: ['revolution', 'politics', 'agriculture']
	},
	{
		id: 'na-assembly-line',
		title: 'The Moving Assembly Line',
		year: 1913,
		description:
			"Henry Ford introduced the moving assembly line, cutting the time to build a Model T from about 12 hours to 93 minutes. Ford then doubled wages to $5 a day.",
		significance:
			"Mass production made cars affordable to ordinary workers and created the consumer economy of the 20th century.",
		wikipediaSlug: 'Ford_Model_T',
		tags: ['technology', 'economics']
	},
	{
		id: 'na-panama-canal',
		title: 'Panama Canal Opens',
		year: 1914,
		description:
			"After the US engineered Panama's secession from Colombia, it completed the canal, cutting the sea voyage from New York to San Francisco by over 12,000 km. Thousands of workers died building it.",
		significance:
			"The canal reshaped global shipping and US power in the hemisphere; it was returned to Panama in 1999.",
		wikipediaSlug: 'Panama_Canal',
		tags: ['technology', 'trade', 'colonialism']
	},
	{
		id: 'na-great-migration',
		title: 'The Great Migration',
		year: 1916,
		description:
			"Some six million African Americans left the rural South for Northern and Western cities between 1916 and 1970, escaping Jim Crow and seeking industrial jobs.",
		significance:
			"The Great Migration transformed American cities, culture, and politics — giving rise to the Harlem Renaissance, Chicago blues, and the civil rights movement.",
		wikipediaSlug: 'Great_Migration_(African_American)',
		tags: ['migration', 'society']
	},
	{
		id: 'na-womens-suffrage',
		title: '19th Amendment',
		year: 1920,
		description:
			"The 19th Amendment barred states from denying the vote on the basis of sex, after 72 years of organized campaigning. Many Black women in the South remained disenfranchised.",
		significance:
			"Women's suffrage doubled the American electorate — but the movement's compromises with racism show the uneven path of democratic expansion.",
		wikipediaSlug: 'Nineteenth_Amendment_to_the_United_States_Constitution',
		tags: ['democracy', 'law', 'society'],
		related: ['oceania-nz-suffrage']
	},
	{
		id: 'na-harlem-renaissance',
		title: 'Harlem Renaissance',
		year: 1924,
		description:
			"Writers like Langston Hughes and Zora Neale Hurston, musicians like Duke Ellington, and artists flourished in Harlem, celebrating Black culture and identity.",
		significance:
			"The Harlem Renaissance made jazz and Black literature central to American culture — and the world's.",
		wikipediaSlug: 'Harlem_Renaissance',
		tags: ['art', 'music', 'literature', 'culture']
	},
	{
		id: 'na-great-depression',
		title: 'Wall Street Crash',
		year: 1929,
		description:
			"The US stock market collapsed in October 1929. Bank failures and falling demand spread worldwide; US unemployment reached about 25%.",
		significance:
			"The Great Depression discredited laissez-faire economics, gave rise to the welfare state — and helped bring fascists to power in Europe.",
		wikipediaSlug: 'Wall_Street_crash_of_1929',
		tags: ['economics', 'collapse']
	},
	{
		id: 'na-new-deal',
		title: 'The New Deal',
		year: 1933,
		description:
			"Franklin D. Roosevelt launched programs including Social Security, bank deposit insurance, public works, and labor protections.",
		significance:
			"The New Deal redefined the role of the US government in the economy and created a social safety net that endures.",
		wikipediaSlug: 'New_Deal',
		tags: ['economics', 'government', 'politics']
	},
	{
		id: 'na-dust-bowl',
		title: 'The Dust Bowl',
		year: 1934,
		description:
			"Drought and decades of plowing up native grassland caused massive dust storms on the Great Plains. Hundreds of thousands of families migrated west.",
		significance:
			"The Dust Bowl was a human-made ecological disaster that led to soil conservation policy — and inspired The Grapes of Wrath.",
		wikipediaSlug: 'Dust_Bowl',
		tags: ['environment', 'agriculture', 'migration']
	},
	{
		id: 'na-trinity',
		title: 'Trinity: The First Atomic Bomb',
		year: 1945,
		description:
			"The Manhattan Project detonated the first nuclear weapon in the New Mexico desert on July 16, 1945. Robert Oppenheimer recalled the line: \"Now I am become Death, the destroyer of worlds.\"",
		significance:
			"Trinity opened the nuclear age — weeks later, the bombs fell on Hiroshima and Nagasaki.",
		wikipediaSlug: 'Trinity_(nuclear_test)',
		tags: ['technology', 'war', 'science'],
		related: ['asia-hiroshima', 'oceania-bikini']
	},
	{
		id: 'na-un',
		title: 'United Nations Founded',
		year: 1945,
		description:
			"Delegates from 50 nations met in San Francisco to sign the UN Charter, creating an organization to maintain peace and promote human rights.",
		significance:
			"The UN has not ended war, but it created the framework of international law, peacekeeping, and humanitarian aid that structures global cooperation.",
		wikipediaSlug: 'Charter_of_the_United_Nations',
		tags: ['politics', 'law'],
		related: ['europe-ww2-ends']
	},
	{
		id: 'na-transistor',
		title: 'The Transistor',
		year: 1947,
		description:
			"John Bardeen, Walter Brattain, and William Shockley at Bell Labs demonstrated the first working transistor, a tiny device to amplify and switch electrical signals.",
		significance:
			"The transistor is the building block of all modern electronics. A smartphone chip contains billions of them.",
		wikipediaSlug: 'History_of_the_transistor',
		tags: ['technology', 'science']
	},
	{
		id: 'na-marshall-plan',
		title: 'Marshall Plan',
		year: 1948,
		description:
			"The US gave over $13 billion (roughly $150+ billion today) to rebuild Western European economies after World War II.",
		significance:
			"The Marshall Plan helped revive Western Europe, contain communism, and lay the groundwork for European integration.",
		wikipediaSlug: 'Marshall_Plan',
		tags: ['economics', 'politics', 'cold-war'],
		related: ['europe-nato', 'europe-treaty-of-rome']
	},
	{
		id: 'na-brown-v-board',
		title: 'Brown v. Board of Education',
		year: 1954,
		description:
			"The US Supreme Court unanimously ruled that racial segregation in public schools was unconstitutional, overturning 'separate but equal.'",
		significance:
			"Brown dismantled the legal basis of Jim Crow, though massive resistance meant schools stayed segregated for years.",
		wikipediaSlug: 'Brown_v._Board_of_Education',
		tags: ['law', 'education', 'society']
	},
	{
		id: 'na-polio-vaccine',
		title: 'Polio Vaccine',
		year: 1955,
		description:
			"Jonas Salk's polio vaccine was declared safe and effective after a field trial involving over a million children. Salk declined to patent it.",
		significance:
			"Polio, which paralyzed tens of thousands of children a year, has since been eliminated from nearly every country on Earth.",
		wikipediaSlug: 'Polio_vaccine',
		tags: ['medicine', 'science']
	},
	{
		id: 'na-montgomery',
		title: 'Montgomery Bus Boycott',
		year: 1955,
		description:
			"After Rosa Parks was arrested for refusing to give up her seat, Black residents of Montgomery, Alabama, boycotted the buses for 381 days, led by a young Martin Luther King Jr.",
		significance:
			"The boycott launched the modern civil rights movement and its strategy of mass nonviolent resistance.",
		wikipediaSlug: 'Montgomery_bus_boycott',
		tags: ['politics', 'society', 'democracy'],
		related: ['asia-salt-march']
	},
	{
		id: 'na-cuban-revolution',
		title: 'Cuban Revolution',
		year: 1959,
		description:
			"Fidel Castro and Che Guevara's guerrillas overthrew dictator Fulgencio Batista. Castro allied with the Soviet Union and nationalized US-owned property.",
		significance:
			"Cuba became a communist state 150 km from Florida, inspiring revolutionary movements across Latin America.",
		wikipediaSlug: 'Cuban_Revolution',
		tags: ['revolution', 'politics', 'cold-war'],
		related: ['sa-che-guevara']
	},
	{
		id: 'na-pill',
		title: 'The Pill',
		year: 1960,
		description:
			"The US Food and Drug Administration approved the first oral contraceptive pill, developed with funding from activist Margaret Sanger and philanthropist Katharine McCormick.",
		significance:
			"The Pill gave women unprecedented control over fertility, transforming education, careers, and family life.",
		wikipediaSlug: 'Combined_oral_contraceptive_pill',
		tags: ['medicine', 'society', 'science']
	},
	{
		id: 'na-cuban-missile-crisis',
		title: 'Cuban Missile Crisis',
		year: 1962,
		description:
			"The US discovered Soviet nuclear missiles in Cuba. For thirteen days, the world stood at the brink of nuclear war until Khrushchev agreed to withdraw them.",
		significance:
			"The closest the world has come to nuclear war led to the Moscow–Washington hotline and the first arms control agreements.",
		wikipediaSlug: 'Cuban_Missile_Crisis',
		tags: ['politics', 'war', 'cold-war']
	},
	{
		id: 'na-silent-spring',
		title: 'Silent Spring',
		year: 1962,
		description:
			"Biologist Rachel Carson documented how DDT and other pesticides were killing birds and poisoning ecosystems. The chemical industry attacked her fiercely.",
		significance:
			"Silent Spring launched the modern environmental movement, leading to the US ban on DDT and the creation of the Environmental Protection Agency.",
		wikipediaSlug: 'Silent_Spring',
		tags: ['environment', 'science', 'literature']
	},
	{
		id: 'na-civil-rights-act',
		title: 'Civil Rights Act',
		year: 1964,
		description:
			"The Civil Rights Act outlawed discrimination based on race, color, religion, sex, or national origin and ended legal segregation in public places. The Voting Rights Act followed in 1965.",
		significance:
			"These laws dismantled Jim Crow and transformed American democracy — the achievement of a decade of protest.",
		wikipediaSlug: 'Civil_Rights_Act_of_1964',
		tags: ['law', 'democracy', 'society']
	},
	{
		id: 'na-stonewall',
		title: 'Stonewall Uprising',
		year: 1969,
		description:
			"When police raided the Stonewall Inn, a gay bar in New York, patrons and neighbors fought back over several nights.",
		significance:
			"Stonewall sparked the modern LGBTQ rights movement; Pride marches commemorate it around the world every June.",
		wikipediaSlug: 'Stonewall_riots',
		tags: ['society', 'politics']
	},
	{
		id: 'na-moon-landing',
		title: 'Moon Landing',
		year: 1969,
		description:
			"Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon on July 20, 1969. The Apollo program required 400,000 engineers and $25 billion.",
		significance:
			"The Moon landing remains humanity's most ambitious engineering achievement and a symbol of what collective effort can accomplish.",
		wikipediaSlug: 'Apollo_11',
		tags: ['technology', 'space', 'science'],
		related: ['asia-sputnik']
	},
	{
		id: 'na-arpanet',
		title: 'ARPANET',
		year: 1969,
		description:
			"The first message was sent between computers at UCLA and Stanford over ARPANET, a US Defense Department network. The system crashed after two letters: 'LO.'",
		significance:
			"ARPANET pioneered packet switching and grew into the internet — the foundation the World Wide Web would later run on.",
		wikipediaSlug: 'ARPANET',
		tags: ['technology', 'communication'],
		related: ['asia-sputnik', 'europe-www']
	},
	{
		id: 'na-earth-day',
		title: 'First Earth Day',
		year: 1970,
		description:
			"About 20 million Americans took part in the first Earth Day. Within months, the US created the Environmental Protection Agency and passed the Clean Air Act.",
		significance:
			"Earth Day turned environmentalism into a mass political movement; it is now observed in nearly every country.",
		wikipediaSlug: 'Earth_Day',
		tags: ['environment', 'politics']
	},
	{
		id: 'na-microprocessor',
		title: 'The Microprocessor',
		year: 1971,
		description:
			"Intel released the 4004, the first commercial microprocessor, putting a computer's central processing unit on a single chip.",
		significance:
			"The microprocessor made computers cheap and small enough for desks, cars, and eventually pockets.",
		wikipediaSlug: 'Intel_4004',
		tags: ['technology']
	},
	{
		id: 'na-personal-computer',
		title: 'The Personal Computer',
		year: 1977,
		description:
			"The Apple II, one of the first mass-market personal computers, went on sale. IBM's PC followed in 1981.",
		significance:
			"Computing moved from corporate data centers to homes and classrooms, setting the stage for the digital revolution.",
		wikipediaSlug: 'Apple_II',
		tags: ['technology']
	},
	{
		id: 'na-aids',
		title: 'AIDS Identified',
		year: 1981,
		description:
			"The CDC reported rare pneumonia cases in young gay men in Los Angeles — the first recognized cases of AIDS. Activists fought government neglect and stigma.",
		significance:
			"AIDS activism, led by groups like ACT UP, changed how drugs are tested and approved and how patients participate in medicine.",
		wikipediaSlug: 'HIV/AIDS_in_the_United_States',
		tags: ['pandemic', 'medicine', 'society'],
		related: ['africa-hiv-origin']
	},
	{
		id: 'na-nafta',
		title: 'NAFTA',
		year: 1994,
		description:
			"The North American Free Trade Agreement eliminated most tariffs between the US, Canada, and Mexico.",
		significance:
			"NAFTA integrated North American manufacturing — and became a lightning rod for debates over globalization and lost jobs.",
		wikipediaSlug: 'North_American_Free_Trade_Agreement',
		tags: ['trade', 'economics', 'politics']
	},
	{
		id: 'na-zapatistas',
		title: 'Zapatista Uprising',
		year: 1994,
		description:
			"On the day NAFTA took effect, the Zapatista Army of National Liberation, mostly Maya, seized towns in Chiapas, demanding Indigenous rights and land.",
		significance:
			"The Zapatistas pioneered internet activism and became a global symbol of Indigenous resistance to neoliberal globalization.",
		wikipediaSlug: 'Zapatista_Army_of_National_Liberation',
		tags: ['revolution', 'indigenous', 'politics']
	},
	{
		id: 'na-nunavut',
		title: 'Nunavut Created',
		year: 1999,
		description:
			"Canada created the territory of Nunavut from the eastern Northwest Territories, following a land claims agreement with the Inuit, who make up most of its population.",
		significance:
			"Nunavut is the largest Indigenous land claim settlement in Canadian history and a model of Indigenous self-government.",
		wikipediaSlug: 'Nunavut',
		tags: ['indigenous', 'politics']
	},
	{
		id: 'na-september-11',
		title: 'September 11 Attacks',
		year: 2001,
		description:
			"Al-Qaeda terrorists hijacked four airliners, crashing two into the World Trade Center and one into the Pentagon. Nearly 3,000 people were killed.",
		significance:
			"9/11 led to the wars in Afghanistan and Iraq and a vast expansion of surveillance and security that defined the following decades.",
		wikipediaSlug: 'September_11_attacks',
		tags: ['war', 'politics']
	},
	{
		id: 'na-human-genome',
		title: 'Human Genome Sequenced',
		year: 2003,
		description:
			"The international Human Genome Project completed its map of the roughly 3 billion base pairs of human DNA, after 13 years and about $3 billion.",
		significance:
			"Sequencing now costs a few hundred dollars, transforming medicine, ancestry research, and our understanding of human history.",
		wikipediaSlug: 'Human_Genome_Project',
		tags: ['science', 'medicine'],
		related: ['europe-dna']
	},
	{
		id: 'na-katrina',
		title: 'Hurricane Katrina',
		year: 2005,
		description:
			"Hurricane Katrina breached the levees of New Orleans, flooding 80% of the city. Over 1,300 people died, disproportionately poor and Black residents.",
		significance:
			"Katrina exposed the deadly interplay of climate risk, infrastructure failure, and inequality.",
		wikipediaSlug: 'Hurricane_Katrina',
		tags: ['environment', 'society']
	},
	{
		id: 'na-iphone',
		title: 'The iPhone',
		year: 2007,
		description:
			"Apple introduced the iPhone, combining a phone, music player, and internet device with a touchscreen. The App Store followed in 2008.",
		significance:
			"The smartphone put the internet in billions of pockets — reshaping communication, commerce, politics, and attention itself.",
		wikipediaSlug: 'IPhone_(1st_generation)',
		tags: ['technology', 'communication']
	},
	{
		id: 'na-financial-crisis',
		title: '2008 Financial Crisis',
		year: 2008,
		description:
			"The collapse of the US housing bubble and of Lehman Brothers triggered a global financial panic. Governments spent trillions bailing out banks.",
		significance:
			"The worst economic crisis since the Depression fueled lasting distrust of elites and the populist movements of the 2010s.",
		wikipediaSlug: '2008_financial_crisis',
		tags: ['economics', 'collapse']
	},
	{
		id: 'na-haiti-earthquake',
		title: 'Haiti Earthquake',
		year: 2010,
		description:
			"A magnitude 7.0 earthquake struck near Port-au-Prince, killing an estimated 100,000 to over 300,000 people and leaving over a million homeless.",
		significance:
			"Haiti's suffering was magnified by poverty rooted in its history — including the indemnity France forced it to pay for its independence.",
		wikipediaSlug: '2010_Haiti_earthquake',
		tags: ['environment', 'collapse'],
		related: ['na-haitian-revolution']
	},
	{
		id: 'na-crispr',
		title: 'CRISPR Gene Editing',
		year: 2012,
		description:
			"Jennifer Doudna and Emmanuelle Charpentier showed that a bacterial immune system, CRISPR-Cas9, could be programmed to cut DNA at precise locations.",
		significance:
			"CRISPR made editing genes cheap and easy, with enormous medical promise — and profound ethical questions about altering human heredity.",
		wikipediaSlug: 'CRISPR_gene_editing',
		tags: ['science', 'medicine', 'technology']
	},
	{
		id: 'na-truth-reconciliation',
		title: "Canada's Truth and Reconciliation Report",
		year: 2015,
		description:
			"Canada's Truth and Reconciliation Commission issued its final report on the residential school system, concluding it amounted to cultural genocide and issuing 94 Calls to Action.",
		significance:
			"The report forced Canada to confront a history long hidden from its citizens — a model for how nations can reckon with colonial crimes.",
		wikipediaSlug: 'Truth_and_Reconciliation_Commission_of_Canada',
		tags: ['indigenous', 'politics', 'law'],
		related: ['na-residential-schools', 'oceania-apology']
	},
	{
		id: 'na-generative-ai',
		title: 'Generative AI Goes Mainstream',
		year: 2022,
		description:
			"The release of ChatGPT brought large language models to the public; it reached an estimated 100 million users within about two months, an unprecedented adoption rate for a consumer app.",
		significance:
			"AI systems that write, code, and reason became everyday tools, raising open questions about work, knowledge, and power that are still unfolding.",
		wikipediaSlug: 'ChatGPT',
		tags: ['technology', 'science']
	}
];
