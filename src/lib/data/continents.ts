import type { Continent } from '#lib/types';

export const continents: Continent[] = [
	{
		id: 'africa',
		name: 'Africa',
		color: '#E8A045',
		activityKeyframes: [
			{ year: -3_000_000, score: 90 },
			{ year: -2_000_000, score: 85 },
			{ year: -500_000, score: 78 },
			{ year: -300_000, score: 88 },
			{ year: -100_000, score: 82 },
			{ year: -70_000, score: 68 },
			{ year: -40_000, score: 65 },
			{ year: -10_000, score: 60 },
			{ year: -5_000, score: 72 },
			{ year: -3_100, score: 85 },
			{ year: -1_000, score: 70 },
			{ year: -500, score: 68 },
			{ year: 0, score: 65 },
			{ year: 500, score: 52 },
			{ year: 700, score: 62 },
			{ year: 1000, score: 70 },
			{ year: 1300, score: 72 },
			{ year: 1500, score: 55 },
			{ year: 1700, score: 38 },
			{ year: 1900, score: 32 },
			{ year: 1960, score: 55 },
			{ year: 2026, score: 65 }
		],
		events: [
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
				id: 'africa-homo-sapiens',
				title: 'Emergence of Homo Sapiens',
				year: -300_000,
				description:
					'Modern humans first appeared in Africa around 300,000 years ago. Fossils from Jebel Irhoud, Morocco show our species\' anatomy was taking shape far earlier than previously thought.',
				significance:
					'The appearance of anatomically modern humans set in motion the eventual colonization of every habitable continent and the development of civilization.',
				wikipediaSlug: 'Jebel_Irhoud',
				tags: ['prehistory', 'evolution']
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
				id: 'africa-great-pyramid',
				title: 'Great Pyramid of Giza',
				year: -2560,
				description:
					"The Great Pyramid of Khufu was completed around 2,560 BCE. Standing 146 meters tall, it remained the tallest human-made structure for 3,800 years.",
				significance:
					"The pyramid demonstrated the power of organized labor, advanced mathematics, and state capacity — a monument to what early civilization could achieve.",
				wikipediaSlug: 'Great_Pyramid_of_Giza',
				tags: ['architecture', 'civilization']
			},
			{
				id: 'africa-aksum',
				title: 'Kingdom of Aksum',
				year: 320,
				description:
					'The Kingdom of Aksum in modern Ethiopia and Eritrea became one of the most powerful states in the ancient world, controlling trade between the Roman Empire and India.',
				significance:
					"Aksum proves Africa's central role in global trade long before European contact, and was one of the first states to adopt Christianity as a state religion.",
				wikipediaSlug: 'Kingdom_of_Aksum',
				tags: ['empire', 'trade', 'religion']
			},
			{
				id: 'africa-mansa-musa',
				title: "Mansa Musa's Hajj",
				year: 1324,
				description:
					"Mansa Musa, ruler of the Mali Empire, made a pilgrimage to Mecca with 60,000 people carrying gold. His generosity flooded gold markets and crashed prices across the Mediterranean.",
				significance:
					"Mansa Musa is widely considered the richest person in history. His journey put Mali on European maps and proved West Africa was a center of global wealth.",
				wikipediaSlug: 'Mansa_Musa',
				tags: ['trade', 'empire', 'economics']
			},
			{
				id: 'africa-berlin-conference',
				title: 'Scramble for Africa',
				year: 1884,
				description:
					'The Berlin Conference of 1884–85 saw European powers divide Africa among themselves with no input from Africans. Within 30 years, 90% of Africa was under European control.',
				significance:
					"Colonial rule disrupted existing political structures, borders, and economies in ways that still define African politics and poverty today.",
				wikipediaSlug: 'Berlin_Conference',
				tags: ['colonialism', 'politics']
			},
			{
				id: 'africa-independence',
				title: 'Year of African Independence',
				year: 1960,
				description:
					"1960 saw 17 African nations gain independence — the largest single-year wave of decolonization in history. Ghana had led the way in 1957 under Kwame Nkrumah.",
				significance:
					"African independence ended formal European colonialism, though economic and political legacies persist. It reshaped the entire global order.",
				wikipediaSlug: 'Year_of_Africa',
				tags: ['independence', 'politics']
			}
		]
	},
	{
		id: 'asia',
		name: 'Asia',
		color: '#C85A5A',
		activityKeyframes: [
			{ year: -3_000_000, score: 15 },
			{ year: -2_000_000, score: 30 },
			{ year: -500_000, score: 42 },
			{ year: -100_000, score: 48 },
			{ year: -50_000, score: 55 },
			{ year: -10_000, score: 65 },
			{ year: -5_000, score: 78 },
			{ year: -3_000, score: 85 },
			{ year: -1_000, score: 80 },
			{ year: -500, score: 90 },
			{ year: 0, score: 85 },
			{ year: 300, score: 68 },
			{ year: 600, score: 85 },
			{ year: 900, score: 82 },
			{ year: 1200, score: 75 },
			{ year: 1400, score: 70 },
			{ year: 1600, score: 75 },
			{ year: 1800, score: 62 },
			{ year: 1900, score: 58 },
			{ year: 1945, score: 52 },
			{ year: 2000, score: 85 },
			{ year: 2026, score: 92 }
		],
		events: [
			{
				id: 'asia-homo-erectus',
				title: 'Homo Erectus Spreads into Asia',
				year: -1_800_000,
				description:
					'Homo Erectus migrated from Africa into Asia nearly 2 million years ago, reaching as far as Java (Indonesia) and China. "Peking Man" and "Java Man" fossils document this spread.',
				significance:
					"The first Out-of-Africa migration populated Asia with our evolutionary ancestors and allowed humans to adapt to the world's most diverse continent.",
				wikipediaSlug: 'Homo_erectus',
				tags: ['prehistory', 'evolution', 'migration']
			},
			{
				id: 'asia-cuneiform',
				title: 'Invention of Writing',
				year: -3200,
				description:
					'Sumerian scribes in Mesopotamia (modern Iraq) invented cuneiform writing around 3,200 BCE, initially to record grain and livestock transactions.',
				significance:
					'Writing transformed civilization: knowledge could be stored outside the human mind, transmitted across time and space, and accumulated across generations.',
				wikipediaSlug: 'Cuneiform',
				tags: ['technology', 'civilization', 'communication']
			},
			{
				id: 'asia-indus-valley',
				title: 'Indus Valley Civilization',
				year: -2600,
				description:
					'The Indus Valley Civilization at its peak covered more area than ancient Egypt and Mesopotamia combined. Cities like Mohenjo-daro had sophisticated drainage systems and standardized weights.',
				significance:
					"Likely the world's largest ancient civilization, it remains largely undeciphered — a reminder of how much history we still don't know.",
				wikipediaSlug: 'Indus_Valley_Civilisation',
				tags: ['civilization', 'urban']
			},
			{
				id: 'asia-axial-age',
				title: 'The Axial Age',
				year: -500,
				description:
					'Within roughly a century, Buddha, Confucius, Laozi, and Zoroaster all lived and taught. Something profound shifted in human thought across multiple civilizations simultaneously.',
				significance:
					"The Axial Age gave humanity the ethical and philosophical frameworks — karma, the Golden Rule, monotheism — that still underpin most of the world's major religions.",
				wikipediaSlug: 'Axial_Age',
				tags: ['philosophy', 'religion', 'culture']
			},
			{
				id: 'asia-qin-dynasty',
				title: 'Qin Shi Huang Unifies China',
				year: -221,
				description:
					'Qin Shi Huang ended 500 years of warring states by conquering all of China, standardizing weights, measures, currency, and writing, and beginning the Great Wall.',
				significance:
					'Chinese unification created the world\'s most enduring civilizational unit. The concept of a unified China has persisted for over 2,000 years.',
				wikipediaSlug: 'Qin_Shi_Huang',
				tags: ['empire', 'government', 'china']
			},
			{
				id: 'asia-tang-dynasty',
				title: 'Tang Dynasty Golden Age',
				year: 618,
				description:
					'The Tang Dynasty (618–907 CE) made China the world\'s most advanced civilization, with advances in printing, gunpowder, and porcelain, and a cosmopolitan culture open to the world.',
				significance:
					"Tang China demonstrated that a complex, literate, innovative society was possible long before Europe's Scientific Revolution. Its technologies eventually transformed the world.",
				wikipediaSlug: 'Tang_dynasty',
				tags: ['empire', 'culture', 'china', 'technology']
			},
			{
				id: 'asia-mongol-empire',
				title: 'Mongol Empire',
				year: 1206,
				description:
					'Genghis Khan united the Mongol tribes in 1206 and launched conquests that created the largest contiguous land empire in history, stretching from China to Eastern Europe.',
				significance:
					'The Mongol conquests were devastating, but the Pax Mongolica that followed enabled trade and ideas to flow from China to Europe for the first time.',
				wikipediaSlug: 'Mongol_Empire',
				tags: ['empire', 'military', 'trade']
			},
			{
				id: 'asia-fall-of-constantinople',
				title: 'Fall of Constantinople',
				year: 1453,
				description:
					'The Ottoman Turks under Sultan Mehmed II conquered Constantinople, ending the Byzantine Empire — the last continuation of Rome — after 1,000 years.',
				significance:
					'The fall closed overland Silk Road routes, pushing European powers to seek sea routes to Asia. This directly triggered the Age of Exploration.',
				wikipediaSlug: 'Fall_of_Constantinople',
				tags: ['war', 'empire', 'trade']
			},
			{
				id: 'asia-hiroshima',
				title: 'Atomic Bomb — Hiroshima',
				year: 1945,
				description:
					'The United States dropped an atomic bomb on Hiroshima on August 6, 1945, killing 70,000–80,000 people instantly. A second bomb fell on Nagasaki three days later.',
				significance:
					'Nuclear weapons permanently changed the nature of great-power conflict. The threat of mutual assured destruction has arguably prevented direct war between nuclear powers ever since.',
				wikipediaSlug: 'Atomic_bombings_of_Hiroshima_and_Nagasaki',
				tags: ['war', 'technology', 'politics']
			}
		]
	},
	{
		id: 'europe',
		name: 'Europe',
		color: '#5A7EC8',
		activityKeyframes: [
			{ year: -3_000_000, score: 5 },
			{ year: -1_000_000, score: 12 },
			{ year: -500_000, score: 22 },
			{ year: -40_000, score: 50 },
			{ year: -10_000, score: 52 },
			{ year: -5_000, score: 58 },
			{ year: -3_000, score: 65 },
			{ year: -1_000, score: 70 },
			{ year: -500, score: 85 },
			{ year: 0, score: 90 },
			{ year: 400, score: 52 },
			{ year: 800, score: 58 },
			{ year: 1200, score: 68 },
			{ year: 1300, score: 58 },
			{ year: 1450, score: 75 },
			{ year: 1600, score: 85 },
			{ year: 1800, score: 90 },
			{ year: 1900, score: 95 },
			{ year: 1945, score: 48 },
			{ year: 1960, score: 65 },
			{ year: 2026, score: 68 }
		],
		events: [
			{
				id: 'europe-chauvet',
				title: 'Chauvet Cave Paintings',
				year: -36_000,
				description:
					"The Chauvet Cave in France contains some of the world's oldest known paintings, depicting lions, rhinos, and horses with a sophistication that shocked archaeologists when discovered in 1994.",
				significance:
					'These paintings prove that fully modern creative and cognitive abilities existed 36,000 years ago — ancient humans were not "primitive" in their thinking.',
				wikipediaSlug: 'Chauvet_Cave',
				tags: ['art', 'prehistory', 'culture']
			},
			{
				id: 'europe-stonehenge',
				title: 'Stonehenge Completed',
				year: -2500,
				description:
					"The final phase of Stonehenge was completed around 2,500 BCE. Its massive stones were transported from Wales, over 200 miles away, without wheels or draft animals.",
				significance:
					'Stonehenge demonstrates the capacity of prehistoric societies to organize large-scale collective projects — and that sophisticated astronomy predates written civilization.',
				wikipediaSlug: 'Stonehenge',
				tags: ['architecture', 'prehistory', 'astronomy']
			},
			{
				id: 'europe-olympics',
				title: 'First Olympic Games',
				year: -776,
				description:
					'The first recorded Olympic Games were held at Olympia, Greece in 776 BCE, as a religious festival honoring Zeus. Athletes from across the Greek world competed.',
				significance:
					'The Olympics established the concept of peaceful inter-state competition and panhellenism — a shared identity beyond city-state borders.',
				wikipediaSlug: 'Ancient_Olympic_Games',
				tags: ['culture', 'greece', 'sport']
			},
			{
				id: 'europe-rome-empire',
				title: 'Roman Empire Founded',
				year: -27,
				description:
					'Augustus became the first Roman Emperor in 27 BCE, transforming the Republic into an Empire that at its peak governed 70 million people across Europe, North Africa, and the Middle East.',
				significance:
					'Rome spread Latin language, Roman law, and infrastructure across Europe. Its administrative and legal legacy directly shaped the modern Western world.',
				wikipediaSlug: 'Roman_Empire',
				tags: ['empire', 'government', 'rome']
			},
			{
				id: 'europe-fall-of-rome',
				title: 'Fall of Western Rome',
				year: 476,
				description:
					"Odoacer deposed Romulus Augustulus in 476 CE, ending the Western Roman Empire after 1,000 years of Roman rule over the Mediterranean.",
				significance:
					"Rome's fall triggered centuries of political fragmentation in Western Europe. The question of why Rome fell has shaped political theory for 1,500 years.",
				wikipediaSlug: 'Fall_of_the_Western_Roman_Empire',
				tags: ['empire', 'rome', 'collapse']
			},
			{
				id: 'europe-black-death',
				title: 'The Black Death',
				year: 1347,
				description:
					"The bubonic plague arrived in Europe in 1347 and killed approximately 30–60% of Europe's population within five years — roughly 25 million people.",
				significance:
					'By killing so many agricultural laborers, the Black Death empowered surviving peasants and accelerated the end of feudalism. It also spurred the first advances in public health.',
				wikipediaSlug: 'Black_Death',
				tags: ['pandemic', 'society', 'collapse']
			},
			{
				id: 'europe-printing-press',
				title: "Gutenberg's Printing Press",
				year: 1440,
				description:
					"Johannes Gutenberg invented movable-type printing around 1440. Within 50 years, over 10 million books had been printed across Europe.",
				significance:
					'The printing press democratized knowledge, made the Protestant Reformation possible, accelerated the Scientific Revolution, and enabled the Enlightenment. It was the internet of its day.',
				wikipediaSlug: 'Printing_press',
				tags: ['technology', 'communication', 'culture']
			},
			{
				id: 'europe-industrial-revolution',
				title: 'Industrial Revolution',
				year: 1760,
				description:
					'Beginning in Britain around 1760, the Industrial Revolution replaced human and animal labor with machines powered by coal and steam, transforming manufacturing, transportation, and daily life.',
				significance:
					'The Industrial Revolution caused the greatest increase in human living standards in history — and created the carbon economy that now drives climate change.',
				wikipediaSlug: 'Industrial_Revolution',
				tags: ['technology', 'economics', 'society']
			},
			{
				id: 'europe-french-revolution',
				title: 'French Revolution',
				year: 1789,
				description:
					'The French Revolution (1789–1799) overthrew the monarchy, executed the king, and proclaimed liberty, equality, and fraternity as the basis for political order.',
				significance:
					'The French Revolution spread the idea that governments derive their legitimacy from the people — not from God or tradition. This idea reshaped the entire world\'s politics.',
				wikipediaSlug: 'French_Revolution',
				tags: ['revolution', 'politics', 'europe']
			},
			{
				id: 'europe-ww2-ends',
				title: 'World War II Ends',
				year: 1945,
				description:
					"World War II ended in Europe on May 8, 1945. It killed an estimated 70–85 million people — about 3% of the 1940 world population.",
				significance:
					'WWII created the modern international order: the UN, the Universal Declaration of Human Rights, NATO, the EU, and the Cold War. Its shadow still shapes global politics.',
				wikipediaSlug: 'World_War_II',
				tags: ['war', 'politics']
			}
		]
	},
	{
		id: 'north-america',
		name: 'N. America',
		color: '#5AC87A',
		activityKeyframes: [
			{ year: -3_000_000, score: 5 },
			{ year: -15_000, score: 22 },
			{ year: -10_000, score: 35 },
			{ year: -5_000, score: 38 },
			{ year: -1_000, score: 48 },
			{ year: 1000, score: 52 },
			{ year: 1200, score: 55 },
			{ year: 1492, score: 48 },
			{ year: 1600, score: 42 },
			{ year: 1700, score: 50 },
			{ year: 1800, score: 65 },
			{ year: 1850, score: 72 },
			{ year: 1900, score: 85 },
			{ year: 1945, score: 95 },
			{ year: 2000, score: 88 },
			{ year: 2026, score: 82 }
		],
		events: [
			{
				id: 'na-first-americans',
				title: 'First Americans Arrive',
				year: -15_000,
				description:
					'Humans first entered North America from Siberia via the Bering land bridge around 15,000–20,000 years ago. Some evidence suggests even earlier arrival via coastal migration.',
				significance:
					"The peopling of the Americas was humanity's last major continental migration, completing the human occupation of every habitable continent.",
				wikipediaSlug: 'Settlement_of_the_Americas',
				tags: ['prehistory', 'migration']
			},
			{
				id: 'na-cahokia',
				title: "Cahokia: North America's Greatest City",
				year: 1050,
				description:
					'Cahokia, near modern St. Louis, reached its peak around 1050 CE with an estimated 10,000–20,000 people — larger than contemporary London. Its Monks Mound remains the largest earthwork in the Americas.',
				significance:
					'Cahokia proves that large, complex urban civilizations existed in North America long before European contact — history that remains largely unknown.',
				wikipediaSlug: 'Cahokia',
				tags: ['civilization', 'urban', 'indigenous']
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
				tags: ['exploration', 'colonialism']
			},
			{
				id: 'na-independence',
				title: 'American Declaration of Independence',
				year: 1776,
				description:
					'The 13 American colonies declared independence from Britain on July 4, 1776, asserting that all men are created equal and that government derives its powers from the consent of the governed.',
				significance:
					'The American Revolution was a template for modern democracy that inspired revolutions worldwide — from France to Latin America to 20th-century decolonization.',
				wikipediaSlug: 'United_States_Declaration_of_Independence',
				tags: ['revolution', 'politics', 'democracy']
			},
			{
				id: 'na-civil-war',
				title: 'US Civil War Ends, Slavery Abolished',
				year: 1865,
				description:
					'The Confederate surrender in April 1865 ended four years of war that killed 620,000 soldiers. The 13th Amendment abolished slavery in December 1865.',
				significance:
					'The Civil War determined that the United States would be a single nation and ended the institution of slavery, though legal racial equality would take another century.',
				wikipediaSlug: 'American_Civil_War',
				tags: ['war', 'slavery', 'politics']
			},
			{
				id: 'na-moon-landing',
				title: 'Moon Landing',
				year: 1969,
				description:
					'Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon on July 20, 1969. The Apollo program required 400,000 engineers and $25 billion.',
				significance:
					"The Moon landing remains humanity's most ambitious engineering achievement and a symbol of what collective effort can accomplish.",
				wikipediaSlug: 'Apollo_11',
				tags: ['technology', 'space', 'science']
			},
			{
				id: 'na-internet',
				title: 'World Wide Web Invented',
				year: 1991,
				description:
					'Tim Berners-Lee launched the World Wide Web on August 6, 1991, making the internet accessible to non-technical users and triggering the digital revolution.',
				significance:
					'The Web is arguably the most transformative technology since the printing press, reshaping commerce, communication, politics, and culture at a global scale.',
				wikipediaSlug: 'World_Wide_Web',
				tags: ['technology', 'communication', 'culture']
			}
		]
	},
	{
		id: 'south-america',
		name: 'S. America',
		color: '#5AC8B8',
		activityKeyframes: [
			{ year: -3_000_000, score: 5 },
			{ year: -15_000, score: 18 },
			{ year: -13_000, score: 28 },
			{ year: -5_000, score: 38 },
			{ year: -2_000, score: 45 },
			{ year: 0, score: 48 },
			{ year: 500, score: 52 },
			{ year: 1000, score: 58 },
			{ year: 1400, score: 68 },
			{ year: 1532, score: 35 },
			{ year: 1700, score: 42 },
			{ year: 1822, score: 52 },
			{ year: 1900, score: 55 },
			{ year: 1960, score: 58 },
			{ year: 2026, score: 65 }
		],
		events: [
			{
				id: 'sa-monte-verde',
				title: 'Monte Verde: Earliest South Americans',
				year: -14_500,
				description:
					'Monte Verde in Chile contains the oldest confirmed human settlement in South America, dating to at least 14,500 years ago — before the ice-free corridor through North America was open.',
				significance:
					'Monte Verde suggests humans may have reached South America by a coastal route, challenging long-held theories about how the Americas were peopled.',
				wikipediaSlug: 'Monte_Verde',
				tags: ['prehistory', 'migration']
			},
			{
				id: 'sa-caral',
				title: 'Caral: Oldest City in the Americas',
				year: -2600,
				description:
					'Caral (Norte Chico) in Peru is the oldest known city in the Americas, flourishing from roughly 2600–2000 BCE. It had monumental architecture and no evidence of warfare.',
				significance:
					'Caral proves that civilization emerged independently in South America — a separate cradle of human complexity that developed simultaneously with ancient Egypt.',
				wikipediaSlug: 'Caral',
				tags: ['civilization', 'urban']
			},
			{
				id: 'sa-inca',
				title: 'Inca Empire at Peak',
				year: 1500,
				description:
					'By the early 1500s, the Inca Empire stretched 4,000 km along the Andes, governing 10 million people without writing or the wheel via an extraordinary road system.',
				significance:
					'The Inca created the largest pre-Columbian empire in history and developed innovative governance solutions — such as the quipu accounting system — that remain fascinating.',
				wikipediaSlug: 'Inca_Empire',
				tags: ['empire', 'indigenous', 'civilization']
			},
			{
				id: 'sa-conquest',
				title: 'Spanish Conquest of the Inca',
				year: 1532,
				description:
					'Francisco Pizarro and 168 Spanish soldiers captured Inca Emperor Atahualpa in 1532. By 1572, Spanish rule was complete. European disease had already killed an estimated 90% of the indigenous population.',
				significance:
					"The conquest shows how technology (steel, horses, guns) and disease can destroy an entire civilization within a generation.",
				wikipediaSlug: 'Spanish_conquest_of_the_Inca_Empire',
				tags: ['colonialism', 'war', 'collapse']
			},
			{
				id: 'sa-independence',
				title: 'Latin American Independence',
				year: 1819,
				description:
					"Simón Bolívar led the liberation of Colombia (1819), Venezuela, Ecuador, Peru, and Bolivia. Brazil declared independence from Portugal in 1822. By 1826, nearly all of Latin America was free.",
				significance:
					'Latin American independence movements created 20 new nations and proved that the ideals of the American and French revolutions could spread globally.',
				wikipediaSlug: 'Latin_American_wars_of_independence',
				tags: ['revolution', 'independence', 'politics']
			}
		]
	},
	{
		id: 'oceania',
		name: 'Oceania',
		color: '#A85AC8',
		activityKeyframes: [
			{ year: -3_000_000, score: 5 },
			{ year: -65_000, score: 32 },
			{ year: -50_000, score: 42 },
			{ year: -40_000, score: 48 },
			{ year: -10_000, score: 45 },
			{ year: -3_500, score: 50 },
			{ year: -1_500, score: 55 },
			{ year: 1000, score: 52 },
			{ year: 1300, score: 50 },
			{ year: 1700, score: 28 },
			{ year: 1788, score: 22 },
			{ year: 1850, score: 32 },
			{ year: 1900, score: 38 },
			{ year: 1960, score: 48 },
			{ year: 2026, score: 55 }
		],
		events: [
			{
				id: 'oceania-aboriginal-arrival',
				title: 'Aboriginal Australians Arrive',
				year: -65_000,
				description:
					'Humans arrived in Australia at least 65,000 years ago, requiring a sea crossing of 60–90 km — the first long ocean voyage in human history.',
				significance:
					"Aboriginal Australians have maintained an unbroken connection to their land and traditions for 65,000 years — far longer than any other surviving culture on Earth.",
				wikipediaSlug: 'Indigenous_Australians',
				tags: ['prehistory', 'migration', 'culture']
			},
			{
				id: 'oceania-rock-art',
				title: 'Murujuga Rock Art',
				year: -40_000,
				description:
					'The Murujuga (Burrup Peninsula) rock art in Western Australia may be the world\'s largest collection of prehistoric rock engravings, with over 1 million images depicting animals now extinct.',
				significance:
					'This rock art is a 40,000-year archive of ecological and cultural change, showing how Aboriginal Australians recorded their world across deep time.',
				wikipediaSlug: 'Murujuga',
				tags: ['art', 'prehistory', 'culture']
			},
			{
				id: 'oceania-lapita',
				title: 'Lapita Culture: Polynesian Expansion',
				year: -1500,
				description:
					'The Lapita people began their expansion across the Pacific around 1500 BCE, eventually settling every habitable island across 10,000 km of ocean using outrigger canoes and star navigation.',
				significance:
					"The Polynesian expansion is the greatest feat of navigation in pre-industrial history — accomplished with no maps and no compass.",
				wikipediaSlug: 'Lapita_culture',
				tags: ['migration', 'navigation', 'culture']
			},
			{
				id: 'oceania-new-zealand',
				title: 'Maori Arrive in New Zealand',
				year: 1280,
				description:
					"The Maori arrived in New Zealand (Aotearoa) from East Polynesia around 1280 CE — the last major human migration in history.",
				significance:
					"New Zealand's settlement completed humanity's occupation of the Earth's habitable landmasses — a 300,000-year journey from East Africa to the last islands of the Pacific.",
				wikipediaSlug: 'Māori_people',
				tags: ['migration', 'indigenous', 'navigation']
			},
			{
				id: 'oceania-colonization',
				title: 'British Colonization of Australia',
				year: 1788,
				description:
					'The First Fleet arrived at Botany Bay on January 18, 1788. Within decades, disease and violence had killed the majority of Aboriginal Australians.',
				significance:
					'British colonization of Australia dispossessed Aboriginal Australians of their land and nearly destroyed a 65,000-year-old culture — the full extent of this damage is still being reckoned with.',
				wikipediaSlug: 'European_colonisation_of_Australia',
				tags: ['colonialism', 'indigenous']
			},
			{
				id: 'oceania-waitangi',
				title: 'Treaty of Waitangi',
				year: 1840,
				description:
					"The Treaty of Waitangi, signed on February 6, 1840, is considered New Zealand's founding document. Its English and Maori versions differ significantly in what they promise.",
				significance:
					"The Treaty established the principle of partnership between indigenous and colonial peoples — a principle still contested and central to New Zealand politics today.",
				wikipediaSlug: 'Treaty_of_Waitangi',
				tags: ['politics', 'indigenous', 'colonialism']
			}
		]
	}
];
