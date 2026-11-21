import type { TimelineEvent } from '../../types';

export const oceaniaEvents: TimelineEvent[] = [
	{
		id: 'oceania-aboriginal-arrival',
		title: 'Aboriginal Australians Arrive',
		year: -65_000,
		description:
			"Humans arrived in Australia at least 65,000 years ago, requiring a sea crossing of 60–90 km — the first long ocean voyage in human history.",
		significance:
			"Aboriginal Australians have maintained an unbroken connection to their land and traditions for 65,000 years — far longer than any other surviving culture on Earth.",
		wikipediaSlug: 'Indigenous_Australians',
		tags: ['prehistory', 'migration', 'culture'],
		related: ['africa-out-of-africa', 'asia-denisovans']
	},
	{
		id: 'oceania-ground-edge-axe',
		title: "World's Oldest Ground-Edge Axe",
		year: -47_000,
		description:
			"A fragment of a ground-edge stone axe from Carpenter's Gap in the Kimberley, Western Australia, is around 45,000–49,000 years old — the oldest of its kind in the world.",
		significance:
			"Grinding a sharp edge onto stone was once thought to be a Neolithic invention. Australia's first people were doing it tens of thousands of years earlier.",
		wikipediaSlug: 'List_of_earliest_tools',
		tags: ['technology', 'prehistory', 'indigenous']
	},
	{
		id: 'oceania-megafauna',
		title: 'Australian Megafauna Vanish',
		year: -44_000,
		description:
			"Giant animals — the rhino-sized Diprotodon, two-meter-tall birds, giant kangaroos, and marsupial lions — disappeared within several thousand years of human arrival.",
		significance:
			"The cause — human hunting, landscape burning, or climate — is still debated, but Australia's ecosystems were permanently transformed.",
		wikipediaSlug: 'Australian_megafauna',
		tags: ['environment', 'prehistory']
	},
	{
		id: 'oceania-lake-mungo',
		title: 'Lake Mungo Burials',
		year: -40_000,
		description:
			"At Lake Mungo in New South Wales, a woman was cremated and a man buried sprinkled with red ochre around 40,000 years ago. They are the oldest human remains in Australia.",
		significance:
			"Mungo Lady and Mungo Man show complex ritual treatment of the dead. Mungo Man was returned to his traditional owners in 2017.",
		wikipediaSlug: 'Lake_Mungo_remains',
		tags: ['religion', 'prehistory', 'indigenous']
	},
	{
		id: 'oceania-rock-art',
		title: 'Murujuga Rock Art',
		year: -40_000,
		description:
			"The Murujuga (Burrup Peninsula) rock art in Western Australia may be the world's largest collection of prehistoric rock engravings, with over 1 million images depicting animals now extinct.",
		significance:
			'This rock art is a 40,000-year archive of ecological and cultural change, showing how Aboriginal Australians recorded their world across deep time.',
		wikipediaSlug: 'Burrup_Peninsula',
		tags: ['art', 'prehistory', 'culture']
	},
	{
		id: 'oceania-gwion-gwion',
		title: 'Gwion Gwion Paintings',
		year: -10_000,
		description:
			"Elegant painted human figures with tassels and headdresses cover rock shelters in the Kimberley. Dating of mud-wasp nests suggests many are about 12,000 years old.",
		significance:
			"The Gwion Gwion are among the most refined rock art traditions in the world — and their custodians, the Ngarinyin people, still hold their stories.",
		wikipediaSlug: 'Gwion_Gwion_rock_paintings',
		tags: ['art', 'prehistory', 'indigenous']
	},
	{
		id: 'oceania-tasmania-isolated',
		title: 'Tasmania Cut Off',
		year: -10_000,
		description:
			"As the Ice Age ended, rising seas flooded the Bassian land bridge, isolating the people of Tasmania from the mainland for thousands of years.",
		significance:
			"Tasmanian Aboriginal people developed in isolation for millennia — the longest isolation of any human population in history.",
		wikipediaSlug: 'Bass_Strait',
		tags: ['environment', 'migration', 'indigenous']
	},
	{
		id: 'oceania-boomerang',
		title: 'The Boomerang',
		year: -8000,
		description:
			"Boomerangs found at Wyrie Swamp in South Australia are about 10,000 years old. Aboriginal Australians made both returning boomerangs and heavier non-returning hunting sticks.",
		significance:
			"The boomerang is a sophisticated aerodynamic tool, designed through generations of experimentation — the world's oldest known heavier-than-air flying machine.",
		wikipediaSlug: 'Boomerang',
		tags: ['technology', 'indigenous']
	},
	{
		id: 'oceania-kuk-swamp',
		title: 'Farming at Kuk Swamp',
		year: -7000,
		description:
			"In the New Guinea Highlands, people dug drainage ditches and cultivated taro, bananas, and yams — one of the world's few independent inventions of agriculture.",
		significance:
			"Kuk shows that New Guinea was a cradle of agriculture on par with the Fertile Crescent and China. Bananas began their journey to the world here.",
		wikipediaSlug: 'Kuk_Swamp',
		tags: ['agriculture', 'prehistory', 'indigenous'],
		related: ['asia-agriculture']
	},
	{
		id: 'oceania-budj-bim',
		title: 'Budj Bim Eel Traps',
		year: -4600,
		description:
			"The Gunditjmara people built channels, weirs, and ponds in lava flows in Victoria to trap and farm short-finned eels — a system at least 6,600 years old.",
		significance:
			"Budj Bim is one of the oldest aquaculture systems in the world; its UNESCO listing challenges the myth that Aboriginal Australians were purely nomadic.",
		wikipediaSlug: 'Budj_Bim',
		tags: ['technology', 'agriculture', 'indigenous']
	},
	{
		id: 'oceania-dingo',
		title: 'The Dingo Arrives',
		year: -1500,
		description:
			"Dingoes, descendants of domesticated dogs from Southeast Asia, arrived in Australia about 3,500 years ago, likely with seafarers.",
		significance:
			"The dingo may have helped drive the thylacine and Tasmanian devil to extinction on the mainland — an early example of an introduced predator reshaping Australia.",
		wikipediaSlug: 'Dingo',
		tags: ['environment', 'migration']
	},
	{
		id: 'oceania-lapita',
		title: 'Lapita Culture: Polynesian Expansion',
		year: -1500,
		description:
			"The Lapita people began their expansion across the Pacific around 1500 BCE, eventually settling every habitable island across 10,000 km of ocean using outrigger canoes and star navigation.",
		significance:
			"The Polynesian expansion is the greatest feat of navigation in pre-industrial history — accomplished with no maps and no compass.",
		wikipediaSlug: 'Lapita_culture',
		tags: ['migration', 'navigation', 'culture'],
		related: ['asia-austronesian-expansion', 'africa-madagascar']
	},
	{
		id: 'oceania-marianas',
		title: 'Settlement of the Marianas',
		year: -1500,
		description:
			"Seafarers from the Philippines sailed some 2,000 km across open ocean to settle the Mariana Islands, around 3,500 years ago.",
		significance:
			"It was the longest ocean crossing in human history up to that time — ancestors of the Chamorro people of Guam.",
		wikipediaSlug: 'Chamorro_people',
		tags: ['migration', 'navigation', 'indigenous']
	},
	{
		id: 'oceania-tonga-samoa',
		title: 'Lapita Reach Tonga and Samoa',
		year: -850,
		description:
			"Lapita voyagers reached Tonga and Samoa, the gateway to the eastern Pacific. Then the expansion paused for well over a thousand years.",
		significance:
			"During this 'Long Pause,' distinctive Polynesian culture and language developed in West Polynesia before the final great voyages east.",
		wikipediaSlug: 'Nukuleka',
		tags: ['migration', 'navigation', 'culture'],
		related: ['oceania-lapita']
	},
	{
		id: 'oceania-latte',
		title: 'Latte Stones of the Marianas',
		year: 900,
		description:
			"The Chamorro built houses on massive stone pillars topped with hemispherical capstones, called latte. Some pillars stood over five meters tall.",
		significance:
			"Latte stones are the symbol of Chamorro identity and appear on Guam's flag today.",
		wikipediaSlug: 'Latte_stone',
		tags: ['architecture', 'indigenous']
	},
	{
		id: 'oceania-east-polynesia',
		title: 'Voyages into East Polynesia',
		year: 1025,
		description:
			"After the Long Pause, Polynesians sailed east to the Society Islands and the Cook Islands, then rapidly to Hawaii, Rapa Nui, and Aotearoa within a few centuries.",
		significance:
			"In a burst of exploration, Polynesians settled a triangle of ocean larger than Asia — using wave patterns, stars, and birds as their instruments.",
		wikipediaSlug: 'Polynesian_navigation',
		tags: ['navigation', 'migration', 'culture']
	},
	{
		id: 'oceania-hawaii-settlement',
		title: 'Polynesians Settle Hawaii',
		year: 1050,
		description:
			"Voyagers from the Society or Marquesas Islands reached Hawaii — over 3,000 km of open ocean — bringing taro, pigs, dogs, and chickens.",
		significance:
			"Hawaii grew into one of the most complex Polynesian societies, with chiefdoms and sophisticated fishponds and irrigation.",
		wikipediaSlug: 'Ancient_Hawaii',
		tags: ['migration', 'navigation', 'indigenous']
	},
	{
		id: 'oceania-sweet-potato',
		title: 'The Sweet Potato Crosses the Pacific',
		year: 1150,
		description:
			"The sweet potato, a South American plant, was growing in Polynesia centuries before Europeans arrived. Its Polynesian names echo Quechua words for it.",
		significance:
			"The sweet potato is living proof that Polynesians reached the Americas — and became a staple from Hawaii to New Zealand.",
		wikipediaSlug: 'Sweet_potato',
		tags: ['agriculture', 'navigation', 'trade'],
		related: ['sa-polynesian-contact']
	},
	{
		id: 'oceania-nan-madol',
		title: 'Nan Madol',
		year: 1180,
		description:
			"On Pohnpei in Micronesia, the Saudeleur dynasty built Nan Madol — nearly 100 artificial islets of stacked basalt columns, linked by canals.",
		significance:
			"Sometimes called the 'Venice of the Pacific,' Nan Madol was the seat of a centralized state that ruled Pohnpei for centuries.",
		wikipediaSlug: 'Nan_Madol',
		tags: ['architecture', 'government', 'indigenous']
	},
	{
		id: 'oceania-tui-tonga',
		title: "Tu'i Tonga Maritime Empire",
		year: 1200,
		description:
			"The Tu'i Tonga, sacred kings of Tonga, extended their influence across a network of islands including parts of Samoa, Fiji, and beyond. They built the Ha'amonga 'a Maui trilithon.",
		significance:
			"Tonga's maritime chiefdom was a seaborne state built by canoe — and Tonga would later become the only Pacific kingdom never formally colonized.",
		wikipediaSlug: 'Tuʻi_Tonga_Empire',
		tags: ['empire', 'navigation', 'indigenous']
	},
	{
		id: 'oceania-rapa-nui',
		title: 'Rapa Nui Settled',
		year: 1200,
		description:
			"Polynesians reached Rapa Nui (Easter Island), one of the most remote inhabited islands on Earth, around 1200 CE.",
		significance:
			"Rapa Nui marks the eastern edge of the Polynesian triangle — and is often wrongly cited as a tale of self-inflicted ecological collapse.",
		wikipediaSlug: 'Easter_Island',
		tags: ['migration', 'navigation', 'indigenous'],
		related: ['sa-polynesian-contact']
	},
	{
		id: 'oceania-moai',
		title: 'The Moai',
		year: 1250,
		description:
			"The Rapa Nui carved nearly 1,000 giant stone figures, the moai, from volcanic tuff and moved them across the island — probably by 'walking' them upright with ropes.",
		significance:
			"Recent research suggests the Rapa Nui were resilient, not reckless; their collapse came after European contact brought disease and slave raids.",
		wikipediaSlug: 'Moai',
		tags: ['art', 'religion', 'indigenous', 'technology'],
		related: ['oceania-rapa-nui-slave-raids']
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
		tags: ['migration', 'indigenous', 'navigation'],
		related: ['africa-homo-sapiens']
	},
	{
		id: 'oceania-moa',
		title: 'Extinction of the Moa',
		year: 1445,
		description:
			"Within roughly 150 years of human arrival, all nine species of moa — giant flightless birds up to 3.6 meters tall — were hunted to extinction in New Zealand.",
		significance:
			"The moa extinction is one of the fastest human-caused megafauna extinctions on record — a stark example of how quickly humans can empty a landscape.",
		wikipediaSlug: 'Moa',
		tags: ['environment', 'indigenous']
	},
	{
		id: 'oceania-moriori',
		title: "Moriori and Nunuku's Law",
		year: 1500,
		description:
			"On the Chatham Islands, the Moriori developed a culture of peace under the chief Nunuku, banning war and killing. When Māori groups invaded in 1835, the Moriori refused to fight and were killed or enslaved.",
		significance:
			"The Moriori are one of history's few societies to renounce war entirely — a story of principle and tragedy that New Zealand formally acknowledged in 2020.",
		wikipediaSlug: 'Moriori',
		tags: ['society', 'religion', 'indigenous']
	},
	{
		id: 'oceania-magellan',
		title: 'Magellan Reaches Guam',
		year: 1521,
		description:
			"After a 98-day Pacific crossing that killed many of his crew from scurvy, Magellan reached Guam. A violent clash with the Chamorro followed.",
		significance:
			"The first European crossing of the Pacific revealed its vast size — and began four centuries of European involvement in Oceania.",
		wikipediaSlug: 'Magellan_expedition',
		tags: ['exploration', 'colonialism'],
		related: ['europe-magellan', 'asia-mactan']
	},
	{
		id: 'oceania-mendana',
		title: 'Mendaña Reaches the Solomons',
		year: 1568,
		description:
			"Spanish navigator Álvaro de Mendaña reached the Solomon Islands, naming them after King Solomon in the hope they held gold. His 1595 colony attempt ended in disaster.",
		significance:
			"Spanish dreams of a southern continent of riches drew some of the first European expeditions into the southwestern Pacific.",
		wikipediaSlug: 'Álvaro_de_Mendaña_de_Neira',
		tags: ['exploration', 'colonialism']
	},
	{
		id: 'oceania-janszoon',
		title: 'Duyfken Reaches Australia',
		year: 1606,
		description:
			"The VOC ship Duyfken, captained by Willem Janszoon, made the first recorded European landing in Australia on Cape York. The encounter with local people turned violent.",
		significance:
			"Australia's recorded contact history begins with conflict. The Dutch charted much of the coast but found nothing they wanted to trade for.",
		wikipediaSlug: 'Willem_Janszoon',
		tags: ['exploration', 'colonialism'],
		related: ['europe-voc']
	},
	{
		id: 'oceania-tasman',
		title: 'Tasman Reaches Aotearoa',
		year: 1642,
		description:
			"Abel Tasman sighted Tasmania and then New Zealand. At Golden Bay, Māori canoes rammed a Dutch boat and killed four sailors; Tasman sailed on without landing.",
		significance:
			"The first recorded European encounter with Māori was brief and bloody; no European returned for 127 years.",
		wikipediaSlug: 'Abel_Tasman',
		tags: ['exploration']
	},
	{
		id: 'oceania-spanish-guam',
		title: 'Spanish–Chamorro Wars',
		year: 1668,
		description:
			"Jesuit missionaries arrived on Guam, a key stop for Manila galleons. Resistance led to decades of war; disease and violence reduced the Chamorro population dramatically.",
		significance:
			"Guam became the first Pacific island colonized by Europeans — and remains a US territory today.",
		wikipediaSlug: 'Spanish–Chamorro_Wars',
		tags: ['colonialism', 'war', 'indigenous'],
		related: ['asia-manila-galleon']
	},
	{
		id: 'oceania-macassan',
		title: 'Macassan Trepang Trade',
		year: 1720,
		description:
			"Fishermen from Makassar in Sulawesi began sailing to northern Australia each year to harvest trepang (sea cucumber) for the Chinese market, trading with the Yolŋu and others.",
		significance:
			"Aboriginal Australians were part of an Asian trade network long before British colonization — Macassan words survive in northern Aboriginal languages.",
		wikipediaSlug: 'Makassan_contact_with_Australia',
		tags: ['trade', 'indigenous'],
		related: ['asia-srivijaya']
	},
	{
		id: 'oceania-roggeveen',
		title: 'Europeans Reach Rapa Nui',
		year: 1722,
		description:
			"Dutch explorer Jacob Roggeveen arrived on Easter Sunday, naming the island Easter Island. He found a thriving population and standing moai.",
		significance:
			"Roggeveen's account undermines the myth that Rapa Nui had already collapsed before European contact.",
		wikipediaSlug: 'Jacob_Roggeveen',
		tags: ['exploration']
	},
	{
		id: 'oceania-tupaia',
		title: 'Tupaia Guides Cook',
		year: 1769,
		description:
			"Tupaia, a Raiatean priest-navigator, joined Cook's Endeavour at Tahiti. He drew a map of over 70 islands from memory and acted as interpreter with Māori.",
		significance:
			"Tupaia's map revealed the depth of Polynesian navigational knowledge — Europeans were following Pacific experts.",
		wikipediaSlug: 'Tupaia',
		tags: ['navigation', 'exploration', 'indigenous']
	},
	{
		id: 'oceania-cook',
		title: "Cook's First Voyage",
		year: 1770,
		description:
			"After observing the transit of Venus in Tahiti for the Royal Society, James Cook charted New Zealand and Australia's east coast, claiming it for Britain at Possession Island.",
		significance:
			"Cook's voyages put the Pacific on European maps and laid the basis for British colonization — remembered very differently by Indigenous peoples.",
		wikipediaSlug: 'James_Cook',
		tags: ['exploration', 'science', 'colonialism'],
		related: ['europe-royal-society']
	},
	{
		id: 'oceania-colonization',
		title: 'British Colonization of Australia',
		year: 1788,
		description:
			"The First Fleet arrived at Botany Bay on January 18, 1788. Within decades, disease and violence had killed the majority of Aboriginal Australians.",
		significance:
			"British colonization of Australia dispossessed Aboriginal Australians of their land and nearly destroyed a 65,000-year-old culture — the full extent of this damage is still being reckoned with.",
		wikipediaSlug: 'History_of_Australia_(1788–1850)',
		tags: ['colonialism', 'indigenous']
	},
	{
		id: 'oceania-smallpox-sydney',
		title: 'Smallpox in Sydney',
		year: 1789,
		description:
			"Little more than a year after the First Fleet arrived, smallpox swept through the Aboriginal peoples around Sydney, killing a large share of the Eora population.",
		significance:
			"The epidemic devastated resistance before the frontier wars had truly begun; how it started remains contested.",
		wikipediaSlug: '1789_Sydney_smallpox_outbreak',
		tags: ['pandemic', 'colonialism', 'indigenous']
	},
	{
		id: 'oceania-bounty',
		title: 'Mutiny on the Bounty',
		year: 1789,
		description:
			"HMS Bounty was collecting breadfruit in Tahiti to feed enslaved workers in the Caribbean when Fletcher Christian led a mutiny. The mutineers settled on Pitcairn with Tahitian companions.",
		significance:
			"The Bounty's mission links the Pacific to Atlantic slavery. Pitcairn's 40-odd residents today are largely descendants of the mutineers and Tahitians.",
		wikipediaSlug: 'Mutiny_on_the_Bounty',
		tags: ['colonialism', 'slavery', 'agriculture'],
		related: ['na-caribbean-sugar']
	},
	{
		id: 'oceania-pemulwuy',
		title: 'Pemulwuy Leads Resistance',
		year: 1790,
		description:
			"Pemulwuy, a Bidjigal warrior, speared the governor's gamekeeper and led a 12-year guerrilla resistance against the colony around Sydney until he was killed in 1802.",
		significance:
			"Pemulwuy showed Aboriginal people fought colonization from the start; his head was sent to England, and its return is still sought.",
		wikipediaSlug: 'Pemulwuy',
		tags: ['war', 'colonialism', 'indigenous']
	},
	{
		id: 'oceania-lms-tahiti',
		title: 'Missionaries Arrive in Tahiti',
		year: 1797,
		description:
			"The London Missionary Society landed 30 missionaries in Tahiti from the ship Duff. Christianity later spread across Polynesia, often through Islander missionaries.",
		significance:
			"Christianity became central to Pacific Island identity — today the Pacific is among the most Christian regions on Earth.",
		wikipediaSlug: 'London_Missionary_Society',
		tags: ['religion', 'colonialism']
	},
	{
		id: 'oceania-kamehameha',
		title: 'Kamehameha Unifies Hawaii',
		year: 1810,
		description:
			"After years of warfare using European weapons and advisers, Kamehameha I brought all the Hawaiian Islands under a single kingdom.",
		significance:
			"Kamehameha created a unified Hawaiian state recognized by foreign powers — which kept Hawaii independent for most of the 19th century.",
		wikipediaSlug: 'Kamehameha_I',
		tags: ['politics', 'war', 'indigenous']
	},
	{
		id: 'oceania-musket-wars',
		title: 'The Musket Wars',
		year: 1818,
		description:
			"As Māori iwi acquired muskets from European traders, old rivalries escalated into a series of devastating wars that killed thousands and displaced whole tribes.",
		significance:
			"The Musket Wars reshaped the tribal map of New Zealand on the eve of British annexation.",
		wikipediaSlug: 'Musket_Wars',
		tags: ['war', 'technology', 'indigenous']
	},
	{
		id: 'oceania-kapu',
		title: 'Hawaii Abolishes the Kapu System',
		year: 1819,
		description:
			"After Kamehameha's death, his widow Kaʻahumanu and son Liholiho ate together, publicly breaking the kapu — sacred laws including the ban on men and women dining together.",
		significance:
			"Hawaiians dismantled their own religious system months before missionaries arrived — a remarkable self-directed revolution.",
		wikipediaSlug: 'ʻAi_Noa',
		tags: ['religion', 'revolution', 'indigenous']
	},
	{
		id: 'oceania-black-war',
		title: 'The Black War in Tasmania',
		year: 1824,
		description:
			"Escalating violence between colonists and Tasmanian Aboriginal people led to martial law and the 'Black Line' — a human chain to sweep Aboriginal people off their land.",
		significance:
			"The Black War nearly destroyed Tasmanian Aboriginal society; survivors were exiled to Flinders Island. Their descendants are a living community today.",
		wikipediaSlug: 'Black_War',
		tags: ['war', 'colonialism', 'indigenous']
	},
	{
		id: 'oceania-myall-creek',
		title: 'Myall Creek Massacre',
		year: 1838,
		description:
			"Stockmen murdered around 28 unarmed Wirrayaraay people at Myall Creek in New South Wales. Seven of the perpetrators were tried and hanged.",
		significance:
			"Myall Creek was one of the very few frontier massacres to bring convictions — it is now a site of national reconciliation.",
		wikipediaSlug: 'Myall_Creek_massacre',
		tags: ['colonialism', 'law', 'indigenous']
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
	},
	{
		id: 'oceania-nz-wars',
		title: 'New Zealand Wars',
		year: 1845,
		description:
			"Conflicts between Māori iwi and colonial forces over land and sovereignty flared for nearly three decades. Māori built sophisticated pā fortifications that impressed British engineers.",
		significance:
			"The wars led to massive land confiscations whose injustice is still being addressed through Treaty settlements.",
		wikipediaSlug: 'New_Zealand_Wars',
		tags: ['war', 'colonialism', 'indigenous']
	},
	{
		id: 'oceania-gold-rush',
		title: 'Victorian Gold Rush',
		year: 1851,
		description:
			"Gold discoveries in Victoria drew hundreds of thousands of people, including tens of thousands of Chinese miners. Melbourne became one of the richest cities in the world.",
		significance:
			"The gold rush transformed Australia from a penal colony into a prosperous, self-governing society — and hostility to Chinese miners seeded the White Australia policy.",
		wikipediaSlug: 'Victorian_gold_rush',
		tags: ['economics', 'migration'],
		related: ['na-gold-rush', 'oceania-white-australia']
	},
	{
		id: 'oceania-eureka',
		title: 'Eureka Rebellion',
		year: 1854,
		description:
			"Gold miners at Ballarat protesting costly licenses built a stockade under the Southern Cross flag. Troops stormed it, killing over 20 miners.",
		significance:
			"Public sympathy for the miners led to democratic reforms; Eureka is often called the birthplace of Australian democracy.",
		wikipediaSlug: 'Eureka_Rebellion',
		tags: ['democracy', 'revolution', 'politics']
	},
	{
		id: 'oceania-secret-ballot',
		title: 'The Australian Ballot',
		year: 1856,
		description:
			"Victoria and South Australia introduced the government-printed secret ballot, letting voters mark their choices privately. That same year, Melbourne stonemasons won the eight-hour day.",
		significance:
			"The secret ballot, long known as the 'Australian ballot,' was adopted by democracies worldwide — protecting voters from intimidation and bribery.",
		wikipediaSlug: 'Secret_ballot',
		tags: ['democracy', 'politics', 'law']
	},
	{
		id: 'oceania-kingitanga',
		title: 'The Māori King Movement',
		year: 1858,
		description:
			"Waikato chief Pōtatau Te Wherowhero was named the first Māori King, uniting tribes to resist land sales to the colonial government.",
		significance:
			"The Kīngitanga is still alive today — a living institution of Māori unity and sovereignty.",
		wikipediaSlug: 'Māori_King_movement',
		tags: ['politics', 'indigenous']
	},
	{
		id: 'oceania-rabbits',
		title: 'Rabbits Released in Australia',
		year: 1859,
		description:
			"Thomas Austin released 24 rabbits on his Victorian property for hunting. Within decades, there were hundreds of millions, stripping vegetation across the continent.",
		significance:
			"It's the fastest spread of an introduced mammal ever recorded — the textbook case of an invasive species disaster.",
		wikipediaSlug: 'Rabbits_in_Australia',
		tags: ['environment']
	},
	{
		id: 'oceania-rapa-nui-slave-raids',
		title: 'Peruvian Slave Raids',
		year: 1862,
		description:
			"Peruvian slavers kidnapped about 1,500 people from Rapa Nui and thousands from other Polynesian islands for labor in Peru. Survivors returning home brought smallpox.",
		significance:
			"Within a few years, Rapa Nui's population fell to around 100. Much of its knowledge, including how to read rongorongo script, may have died with them.",
		wikipediaSlug: 'History_of_Easter_Island',
		tags: ['slavery', 'colonialism', 'indigenous'],
		related: ['sa-guano', 'oceania-moai']
	},
	{
		id: 'oceania-blackbirding',
		title: 'Blackbirding',
		year: 1863,
		description:
			"Recruiters began bringing Pacific Islanders to Queensland sugar plantations, often through deception or kidnapping. Over 60,000 were brought before the trade ended in 1904.",
		significance:
			"Blackbirding is Australia's largely forgotten slave-like trade; South Sea Islander Australians still seek recognition.",
		wikipediaSlug: 'Blackbirding',
		tags: ['slavery', 'agriculture', 'migration']
	},
	{
		id: 'oceania-overland-telegraph',
		title: 'Overland Telegraph Line',
		year: 1872,
		description:
			"A 3,200-km telegraph line from Adelaide to Darwin connected to an undersea cable, linking Australia to London in hours instead of months.",
		significance:
			"The telegraph ended Australia's isolation, binding it to the world's news, markets, and imperial politics.",
		wikipediaSlug: 'Australian_Overland_Telegraph_Line',
		tags: ['technology', 'communication']
	},
	{
		id: 'oceania-fiji-cession',
		title: 'Fiji Ceded to Britain',
		year: 1874,
		description:
			"Chief Seru Epenisa Cakobau ceded Fiji to Britain. The next year, a measles epidemic, carried on a returning ship, killed about a third of Fiji's population.",
		significance:
			"British rule protected Fijian land from sale but imported Indian laborers — creating the ethnic divisions that shape Fiji's politics.",
		wikipediaSlug: 'Colony_of_Fiji',
		tags: ['colonialism', 'pandemic', 'indigenous']
	},
	{
		id: 'oceania-tonga-constitution',
		title: 'Tonga Adopts a Constitution',
		year: 1875,
		description:
			"King George Tupou I, who had unified Tonga, granted a constitution that protected Tongan land from sale to foreigners and established a constitutional monarchy.",
		significance:
			"Tonga became the only Pacific island nation never formally colonized — its land laws were a shield against outside takeover.",
		wikipediaSlug: 'George_Tupou_I',
		tags: ['government', 'law', 'indigenous', 'independence']
	},
	{
		id: 'oceania-kanak-revolt',
		title: 'Kanak Revolt of 1878',
		year: 1878,
		description:
			"Led by Chief Ataï, the Kanak people of New Caledonia rose against French land seizures. The revolt was crushed and Ataï's head sent to Paris, returned only in 2014.",
		significance:
			"The revolt began a struggle over Kanak land and sovereignty that continues in New Caledonia's independence debates.",
		wikipediaSlug: 'New_Caledonia',
		tags: ['colonialism', 'war', 'indigenous'],
		related: ['oceania-noumea-accord']
	},
	{
		id: 'oceania-girmitiya',
		title: 'Indian Indentured Laborers in Fiji',
		year: 1879,
		description:
			"The first ship of Indian indentured laborers, the Leonidas, arrived in Fiji. Over 60,000 girmitiyas would come to work on sugar plantations.",
		significance:
			"Indian Fijians became nearly half of Fiji's population; tensions over land and power later led to coups.",
		wikipediaSlug: 'Indo-Fijians',
		tags: ['migration', 'agriculture', 'colonialism'],
		related: ['oceania-fiji-coups']
	},
	{
		id: 'oceania-parihaka',
		title: 'Invasion of Parihaka',
		year: 1881,
		description:
			"The Māori prophets Te Whiti and Tohu led nonviolent resistance to land confiscation, plowing settlers' fields. 1,600 colonial troops invaded Parihaka; residents greeted them with songs and food.",
		significance:
			"Parihaka was a pioneering campaign of nonviolent resistance — decades before Gandhi, who may have heard of it.",
		wikipediaSlug: 'Parihaka',
		tags: ['politics', 'colonialism', 'indigenous'],
		related: ['asia-salt-march']
	},
	{
		id: 'oceania-tarawera',
		title: 'Mount Tarawera Erupts',
		year: 1886,
		description:
			"Mount Tarawera in New Zealand erupted, killing over 100 people and destroying the Pink and White Terraces — silica formations considered the eighth wonder of the world.",
		significance:
			"The eruption destroyed New Zealand's top tourist attraction; researchers are still trying to locate the terraces' remains.",
		wikipediaSlug: 'Mount_Tarawera',
		tags: ['environment']
	},
	{
		id: 'oceania-nz-suffrage',
		title: 'New Zealand Women Win the Vote',
		year: 1893,
		description:
			"After a petition led by Kate Sheppard was signed by nearly a quarter of adult women, New Zealand became the first self-governing country to grant all women the right to vote — including Māori women.",
		significance:
			"New Zealand led the world in women's suffrage, inspiring movements elsewhere. South Australia soon followed, also letting women stand for parliament.",
		wikipediaSlug: "Women's_suffrage_in_New_Zealand",
		tags: ['democracy', 'politics', 'society'],
		related: ['na-womens-suffrage']
	},
	{
		id: 'oceania-hawaii-overthrow',
		title: 'Overthrow of the Hawaiian Kingdom',
		year: 1893,
		description:
			"American sugar planters and businessmen, backed by US Marines, overthrew Queen Liliʻuokalani. The US annexed Hawaii in 1898.",
		significance:
			"In 1993, the US Congress formally apologized for the overthrow. The Hawaiian sovereignty movement continues.",
		wikipediaSlug: 'Overthrow_of_the_Hawaiian_Kingdom',
		tags: ['colonialism', 'politics', 'indigenous'],
		related: ['na-spanish-american-war']
	},
	{
		id: 'oceania-federation',
		title: 'Australian Federation',
		year: 1901,
		description:
			"Six British colonies united as the Commonwealth of Australia. Its constitution was drafted at conventions and approved by popular referendum.",
		significance:
			"Australia became a nation peacefully, by vote — but its founding excluded Aboriginal people from the census and most from the franchise.",
		wikipediaSlug: 'Federation_of_Australia',
		tags: ['politics', 'democracy', 'independence']
	},
	{
		id: 'oceania-white-australia',
		title: 'White Australia Policy',
		year: 1901,
		description:
			"One of the new parliament's first laws used a dictation test in any European language to exclude non-white immigrants. It was dismantled only between 1949 and 1973.",
		significance:
			"White Australia defined the nation's identity for 70 years; its end opened the door to today's multicultural Australia.",
		wikipediaSlug: 'White_Australia_policy',
		tags: ['law', 'migration', 'politics'],
		related: ['na-chinese-exclusion']
	},
	{
		id: 'oceania-nauru',
		title: 'Mining Nauru',
		year: 1906,
		description:
			"Phosphate mining began on the tiny island of Nauru, supplying fertilizer to Australian and New Zealand farms. Over 80% of the island was eventually strip-mined.",
		significance:
			"Nauru's mining left a moonscape and a nation that briefly had one of the world's highest per-capita incomes — then nothing.",
		wikipediaSlug: 'Nauru',
		tags: ['environment', 'economics', 'colonialism']
	},
	{
		id: 'oceania-stolen-generations',
		title: 'The Stolen Generations',
		year: 1910,
		description:
			"Australian governments and churches removed Aboriginal and Torres Strait Islander children from their families under policies running from about 1910 to the 1970s.",
		significance:
			"Removals severed families, languages, and cultures; the 1997 'Bringing Them Home' report described them as genocidal in intent.",
		wikipediaSlug: 'Stolen_Generations',
		tags: ['colonialism', 'indigenous', 'law'],
		related: ['na-residential-schools', 'oceania-apology']
	},
	{
		id: 'oceania-gallipoli',
		title: 'Gallipoli',
		year: 1915,
		description:
			"Australian and New Zealand troops landed at Gallipoli in the Ottoman Empire on April 25. Eight months of futile fighting killed over 11,000 ANZACs and many more Turkish and Allied soldiers.",
		significance:
			"ANZAC Day became the defining national day for Australia and New Zealand — a story of nationhood forged on a foreign beach.",
		wikipediaSlug: 'Gallipoli_campaign',
		tags: ['war', 'politics', 'culture'],
		related: ['europe-ww1']
	},
	{
		id: 'oceania-samoa-flu',
		title: 'Spanish Flu in Samoa',
		year: 1918,
		description:
			"New Zealand authorities let an infected ship dock in Western Samoa. About 22% of the population died within weeks; American Samoa, under strict quarantine, had no deaths.",
		significance:
			"One of the worst death rates anywhere in the pandemic. New Zealand formally apologized to Samoa in 2002.",
		wikipediaSlug: 'Territory_of_Western_Samoa',
		tags: ['pandemic', 'colonialism'],
		related: ['europe-spanish-flu', 'oceania-mau']
	},
	{
		id: 'oceania-coniston',
		title: 'Coniston Massacre',
		year: 1928,
		description:
			"In the Northern Territory, police-led reprisal parties killed dozens of Warlpiri, Anmatyerre, and Kaytetye people after a dingo trapper was killed. An inquiry found the killings justified.",
		significance:
			"Coniston was one of the last officially sanctioned massacres of Aboriginal people — in living memory.",
		wikipediaSlug: 'Coniston_massacre',
		tags: ['colonialism', 'indigenous']
	},
	{
		id: 'oceania-mau',
		title: 'Black Saturday and the Mau',
		year: 1929,
		description:
			"New Zealand police fired on a peaceful march of the Mau independence movement in Apia, killing high chief Tupua Tamasese Lealofi III and others.",
		significance:
			"The nonviolent Mau movement continued and paved the way for Samoa to become the first Pacific Island nation to regain independence.",
		wikipediaSlug: 'Mau_movement',
		tags: ['independence', 'politics', 'colonialism'],
		related: ['oceania-samoa-independence']
	},
	{
		id: 'oceania-cane-toad',
		title: 'Cane Toads Introduced',
		year: 1935,
		description:
			"About 100 cane toads were brought from Hawaii to Queensland to control beetles in sugarcane fields. They failed at that — and spread across northern Australia.",
		significance:
			"Cane toads now number in the billions and poison native predators — a cautionary tale about biological control.",
		wikipediaSlug: 'Cane_toads_in_Australia',
		tags: ['environment', 'agriculture']
	},
	{
		id: 'oceania-thylacine',
		title: 'The Last Thylacine',
		year: 1936,
		description:
			"The last known Tasmanian tiger died in Hobart Zoo, after a century of government bounties encouraged farmers to kill them.",
		significance:
			"The thylacine became a symbol of human-caused extinction — the world's largest modern marsupial predator, lost within living memory.",
		wikipediaSlug: 'Thylacine',
		tags: ['environment']
	},
	{
		id: 'oceania-pearl-harbor',
		title: 'Attack on Pearl Harbor',
		year: 1941,
		description:
			"Japanese aircraft attacked the US Pacific Fleet at Pearl Harbor, Hawaii, on December 7, killing over 2,400 Americans and bringing the US into the war.",
		significance:
			"Pearl Harbor turned the Pacific into a theater of total war and brought America's industrial might to bear in World War II.",
		wikipediaSlug: 'Attack_on_Pearl_Harbor',
		tags: ['war'],
		related: ['asia-hiroshima', 'europe-ww2-start']
	},
	{
		id: 'oceania-kokoda',
		title: 'Kokoda Track',
		year: 1942,
		description:
			"Australian troops, supported by Papuan carriers known as the 'Fuzzy Wuzzy Angels,' halted a Japanese advance on Port Moresby across the mountains of New Guinea.",
		significance:
			"Kokoda holds a place in Australia's national memory alongside Gallipoli. Meanwhile at Guadalcanal, US forces fought the first major Allied offensive in the Pacific.",
		wikipediaSlug: 'Kokoda_Track_campaign',
		tags: ['war'],
		related: ['oceania-pearl-harbor']
	},
	{
		id: 'oceania-bikini',
		title: 'Nuclear Tests at Bikini Atoll',
		year: 1946,
		description:
			"The US relocated the people of Bikini Atoll and began nuclear testing in the Marshall Islands — 67 tests by 1958, including the 15-megaton Castle Bravo blast.",
		significance:
			"Marshall Islanders suffered radiation sickness, cancers, and permanent exile. Bikini remains uninhabitable for its people.",
		wikipediaSlug: 'Nuclear_testing_at_Bikini_Atoll',
		tags: ['war', 'environment', 'colonialism', 'cold-war'],
		related: ['na-trinity', 'oceania-maralinga', 'oceania-rainbow-warrior']
	},
	{
		id: 'oceania-snowy',
		title: 'Snowy Mountains Scheme',
		year: 1949,
		description:
			"Australia began building a vast hydroelectric and irrigation system in the Snowy Mountains, employing over 100,000 workers from more than 30 countries.",
		significance:
			"The Snowy Scheme was an engineering marvel — and a crucible of postwar migration that helped create multicultural Australia.",
		wikipediaSlug: 'Snowy_Mountains_Scheme',
		tags: ['technology', 'migration', 'environment']
	},
	{
		id: 'oceania-anzus',
		title: 'ANZUS Treaty',
		year: 1951,
		description:
			"Australia, New Zealand, and the United States signed a security treaty, marking Australia's shift from reliance on Britain to the US.",
		significance:
			"ANZUS remains the foundation of Australian defense policy — anchoring the US alliance in the Pacific.",
		wikipediaSlug: 'ANZUS',
		tags: ['politics', 'military', 'cold-war']
	},
	{
		id: 'oceania-maralinga',
		title: 'Nuclear Tests at Maralinga',
		year: 1956,
		description:
			"Britain conducted major nuclear tests at Maralinga in South Australia, contaminating the traditional lands of the Anangu people, many of whom were not warned.",
		significance:
			"A Royal Commission in 1985 exposed the tests' harm, leading to a cleanup and compensation for the Maralinga Tjarutja people.",
		wikipediaSlug: 'British_nuclear_tests_at_Maralinga',
		tags: ['environment', 'colonialism', 'indigenous', 'cold-war'],
		related: ['oceania-bikini']
	},
	{
		id: 'oceania-black-box',
		title: 'The Black Box Flight Recorder',
		year: 1958,
		description:
			"Australian scientist David Warren, whose father died in an air crash, built a prototype cockpit voice and flight data recorder.",
		significance:
			"Flight recorders became mandatory worldwide and have made aviation dramatically safer by revealing the causes of crashes.",
		wikipediaSlug: 'Flight_recorder',
		tags: ['technology', 'science']
	},
	{
		id: 'oceania-hawaii-statehood',
		title: 'Hawaii Becomes a State',
		year: 1959,
		description:
			"Hawaii became the 50th US state after a referendum in which statehood won overwhelmingly — but independence was not offered as an option.",
		significance:
			"Statehood fueled a tourism boom, while Native Hawaiians became a minority in their homeland — sparking the Hawaiian Renaissance.",
		wikipediaSlug: 'Hawaii_Admission_Act',
		tags: ['politics', 'indigenous', 'colonialism']
	},
	{
		id: 'oceania-samoa-independence',
		title: 'Samoa Regains Independence',
		year: 1962,
		description:
			"Western Samoa became independent from New Zealand — the first Pacific Island nation to regain its independence in the 20th century.",
		significance:
			"Samoa led a wave of Pacific decolonization: Nauru, Fiji, Tonga's full sovereignty, Papua New Guinea, and others followed within two decades.",
		wikipediaSlug: 'Samoa',
		tags: ['independence', 'politics'],
		related: ['africa-independence']
	},
	{
		id: 'oceania-wave-hill',
		title: 'Wave Hill Walk-Off',
		year: 1966,
		description:
			"Led by Vincent Lingiari, Gurindji stockmen walked off the British-owned Wave Hill cattle station over pay and conditions, then demanded the return of their land.",
		significance:
			"The nine-year strike launched the Aboriginal land rights movement; in 1975, Prime Minister Whitlam poured sand into Lingiari's hand to symbolize the return of land.",
		wikipediaSlug: 'Wave_Hill_walk-off',
		tags: ['indigenous', 'politics', 'society']
	},
	{
		id: 'oceania-1967-referendum',
		title: '1967 Referendum',
		year: 1967,
		description:
			"Over 90% of Australians voted to change the constitution so that Aboriginal people would be counted in the census and the Commonwealth could make laws for them.",
		significance:
			"The largest 'yes' vote in Australian referendum history became a symbol of recognition — though it did not deliver equality by itself.",
		wikipediaSlug: '1967_Australian_referendum_(Aboriginals)',
		tags: ['indigenous', 'democracy', 'law']
	},
	{
		id: 'oceania-pacific-forum',
		title: 'Pacific Islands Forum',
		year: 1971,
		description:
			"Leaders of newly independent Pacific nations, along with Australia and New Zealand, founded the South Pacific Forum to coordinate regional policy.",
		significance:
			"The Forum gave small island states a collective voice on fisheries, nuclear testing, and above all climate change.",
		wikipediaSlug: 'Pacific_Islands_Forum',
		tags: ['politics', 'environment']
	},
	{
		id: 'oceania-tent-embassy',
		title: 'Aboriginal Tent Embassy',
		year: 1972,
		description:
			"Four Aboriginal activists set up a beach umbrella on the lawn of Parliament House in Canberra, declaring an 'Aboriginal Embassy' for people treated as foreigners in their own land.",
		significance:
			"The Tent Embassy is still there — the longest continuous protest for Indigenous land rights in the world.",
		wikipediaSlug: 'Aboriginal_Tent_Embassy',
		tags: ['indigenous', 'politics']
	},
	{
		id: 'oceania-opera-house',
		title: 'Sydney Opera House Opens',
		year: 1973,
		description:
			"Jørn Utzon's sail-roofed opera house opened on Sydney Harbour after 14 years of construction, massive cost overruns, and the architect's resignation.",
		significance:
			"Now a UNESCO site, the Opera House became the icon of modern Australia and one of the most recognizable buildings of the 20th century.",
		wikipediaSlug: 'Sydney_Opera_House',
		tags: ['architecture', 'art', 'culture']
	},
	{
		id: 'oceania-maori-land-march',
		title: 'Māori Land March',
		year: 1975,
		description:
			"Led by 79-year-old Whina Cooper, thousands marched the length of the North Island to Parliament under the slogan 'Not one more acre of Māori land.' The Waitangi Tribunal was created that year.",
		significance:
			"The march sparked a Māori cultural and political renaissance; the Tribunal has since investigated and settled many historic Treaty breaches.",
		wikipediaSlug: 'Māori_land_march',
		tags: ['indigenous', 'politics', 'law'],
		related: ['oceania-waitangi']
	},
	{
		id: 'oceania-png-independence',
		title: 'Papua New Guinea Independence',
		year: 1975,
		description:
			"Papua New Guinea became independent from Australia. With over 800 languages, it is the most linguistically diverse country on Earth.",
		significance:
			"PNG's independence ended Australia's role as a colonial power and created the largest Pacific Island nation.",
		wikipediaSlug: 'Papua_New_Guinea',
		tags: ['independence', 'politics', 'culture']
	},
	{
		id: 'oceania-hokulea',
		title: "Hōkūleʻa's Voyage",
		year: 1976,
		description:
			"The double-hulled voyaging canoe Hōkūleʻa sailed from Hawaii to Tahiti without instruments, navigated by Mau Piailug of Micronesia using traditional wayfinding.",
		significance:
			"The voyage proved Polynesian settlement was deliberate navigation, not drift — and sparked a cultural renaissance across the Pacific.",
		wikipediaSlug: 'Hōkūleʻa',
		tags: ['navigation', 'culture', 'indigenous'],
		related: ['oceania-lapita', 'oceania-tupaia']
	},
	{
		id: 'oceania-cochlear',
		title: 'The Cochlear Implant',
		year: 1978,
		description:
			"Australian surgeon Graeme Clark implanted the first multi-channel cochlear implant, an electronic device that restores a sense of sound to the profoundly deaf.",
		significance:
			"Over a million people worldwide have received cochlear implants — the most successful neural prosthesis ever developed.",
		wikipediaSlug: 'Cochlear_implant',
		tags: ['medicine', 'technology', 'science']
	},
	{
		id: 'oceania-rainbow-warrior',
		title: 'Sinking of the Rainbow Warrior',
		year: 1985,
		description:
			"French secret agents bombed the Greenpeace ship Rainbow Warrior in Auckland Harbour to stop protests against nuclear testing at Moruroa, killing a photographer.",
		significance:
			"State-sponsored terrorism by an ally hardened New Zealand's anti-nuclear stance; France ended Pacific testing in 1996.",
		wikipediaSlug: 'Sinking_of_the_Rainbow_Warrior',
		tags: ['environment', 'politics', 'cold-war'],
		related: ['oceania-nuclear-free']
	},
	{
		id: 'oceania-uluru-handback',
		title: 'Uluru Returned',
		year: 1985,
		description:
			"The Australian government returned the title deeds of Uluru to the Anangu traditional owners, who leased it back as a national park. Climbing was banned in 2019.",
		significance:
			"The handback recognized Uluru as a sacred site, not just a tourist attraction — a landmark in Australian land rights.",
		wikipediaSlug: 'Uluru',
		tags: ['indigenous', 'religion', 'environment']
	},
	{
		id: 'oceania-nuclear-free',
		title: 'Nuclear-Free New Zealand',
		year: 1987,
		description:
			"New Zealand passed a law banning nuclear-armed and nuclear-powered ships from its waters — effectively suspending its ANZUS alliance with the US.",
		significance:
			"A small nation defied a superpower on principle; the policy became a core part of New Zealand's identity.",
		wikipediaSlug: 'New_Zealand_nuclear-free_zone',
		tags: ['politics', 'environment', 'cold-war'],
		related: ['oceania-anzus']
	},
	{
		id: 'oceania-maori-language-act',
		title: 'Māori Language Act',
		year: 1987,
		description:
			"Te reo Māori became an official language of New Zealand, after decades in which children were punished for speaking it at school. Language nests (kōhanga reo) had begun in 1982.",
		significance:
			"Māori language revitalization is one of the world's leading models for bringing an endangered language back into daily life.",
		wikipediaSlug: 'Maori_Language_Act_1987',
		tags: ['culture', 'indigenous', 'law']
	},
	{
		id: 'oceania-fiji-coups',
		title: 'Fiji Coups',
		year: 1987,
		description:
			"Colonel Sitiveni Rabuka staged two coups to overthrow an elected government seen as dominated by Indo-Fijians. More coups followed in 2000 and 2006.",
		significance:
			"Fiji's coups show how colonial labor migration left ethnic tensions that democracy struggled to contain.",
		wikipediaSlug: "1987_Fijian_coups_d'état",
		tags: ['politics', 'democracy'],
		related: ['oceania-girmitiya']
	},
	{
		id: 'oceania-bougainville',
		title: 'Bougainville Civil War',
		year: 1988,
		description:
			"Landowners angry over environmental damage and profits from the giant Panguna copper mine launched an uprising against Papua New Guinea. Up to 20,000 people died.",
		significance:
			"Bougainville voted 98% for independence in 2019 — a conflict rooted in resource extraction and who benefits.",
		wikipediaSlug: 'Bougainville_conflict',
		tags: ['war', 'environment', 'independence']
	},
	{
		id: 'oceania-mabo',
		title: 'Mabo Decision',
		year: 1992,
		description:
			"Following Eddie Mabo's decade-long case over Murray Island, the High Court of Australia rejected the doctrine of terra nullius — that the continent had belonged to no one before 1788.",
		significance:
			"Mabo recognized native title in Australian law for the first time, overturning a 200-year-old legal fiction.",
		wikipediaSlug: 'Mabo_v_Queensland_(No_2)',
		tags: ['law', 'indigenous']
	},
	{
		id: 'oceania-wifi',
		title: 'CSIRO and Wi-Fi',
		year: 1992,
		description:
			"Australia's national science agency CSIRO developed and patented key technology that solved the problem of radio echoes indoors, later central to the Wi-Fi standard.",
		significance:
			"Radio astronomy research led to technology used in billions of devices — CSIRO later won hundreds of millions in patent licensing.",
		wikipediaSlug: 'CSIRO',
		tags: ['technology', 'science', 'communication']
	},
	{
		id: 'oceania-port-arthur',
		title: 'Port Arthur and Gun Reform',
		year: 1996,
		description:
			"A gunman killed 35 people at Port Arthur, Tasmania. Within weeks, Australia's states and federal government agreed to ban rapid-fire weapons and buy back over 650,000 guns.",
		significance:
			"Australia's National Firearms Agreement is a widely studied example of rapid, bipartisan gun law reform.",
		wikipediaSlug: 'Port_Arthur_massacre',
		tags: ['law', 'politics', 'society']
	},
	{
		id: 'oceania-noumea-accord',
		title: 'Nouméa Accord',
		year: 1998,
		description:
			"France and New Caledonia's parties agreed to a gradual transfer of powers and up to three independence referendums. Voters chose to remain French in 2018, 2020, and 2021.",
		significance:
			"Disputes over the final referendum and voter rolls triggered deadly unrest in 2024 — decolonization in the Pacific is unfinished.",
		wikipediaSlug: 'Nouméa_Accord',
		tags: ['politics', 'independence', 'indigenous', 'colonialism'],
		related: ['oceania-kanak-revolt']
	},
	{
		id: 'oceania-cathy-freeman',
		title: 'Cathy Freeman Wins Gold',
		year: 2000,
		description:
			"At the Sydney Olympics, Aboriginal sprinter Cathy Freeman, who had lit the Olympic cauldron, won the 400 meters before a crowd of 112,000.",
		significance:
			"Freeman's victory became a defining moment of reconciliation — an Aboriginal athlete carrying the nation's hopes.",
		wikipediaSlug: 'Cathy_Freeman',
		tags: ['sport', 'culture', 'indigenous']
	},
	{
		id: 'oceania-apology',
		title: 'National Apology',
		year: 2008,
		description:
			"Prime Minister Kevin Rudd formally apologized in Parliament to the Stolen Generations, saying 'sorry' for laws and policies that inflicted profound grief and loss.",
		significance:
			"The Apology was a milestone of reconciliation, though Indigenous Australians still face large gaps in health and life expectancy.",
		wikipediaSlug: "Apology_to_Australia's_Indigenous_peoples",
		tags: ['indigenous', 'politics'],
		related: ['oceania-stolen-generations', 'na-truth-reconciliation']
	},
	{
		id: 'oceania-christchurch-earthquake',
		title: 'Christchurch Earthquake',
		year: 2011,
		description:
			"A magnitude 6.2 earthquake struck Christchurch, killing 185 people and destroying much of the city center, including its cathedral.",
		significance:
			"Christchurch's rebuild became a test case in how cities recover and rebuild for resilience.",
		wikipediaSlug: '2011_Christchurch_earthquake',
		tags: ['environment', 'urban']
	},
	{
		id: 'oceania-reef-bleaching',
		title: 'Great Barrier Reef Bleaching',
		year: 2016,
		description:
			"Marine heatwaves caused mass coral bleaching on the Great Barrier Reef in 2016 and 2017, killing a large share of shallow-water coral in the northern reef. Further events followed in 2020, 2022, and 2024.",
		significance:
			"The world's largest reef system — visible from space — became the most visible casualty of ocean warming.",
		wikipediaSlug: 'Great_Barrier_Reef',
		tags: ['environment']
	},
	{
		id: 'oceania-whanganui',
		title: 'Whanganui River Becomes a Legal Person',
		year: 2017,
		description:
			"New Zealand's Parliament recognized the Whanganui River as a legal person with its own rights, honoring the Māori view of the river as an ancestor.",
		significance:
			"Granting legal personhood to a river merged Indigenous worldviews with Western law — an idea now spreading globally.",
		wikipediaSlug: 'Whanganui_River',
		tags: ['environment', 'law', 'indigenous'],
		related: ['sa-rights-of-nature']
	},
	{
		id: 'oceania-uluru-statement',
		title: 'Uluru Statement from the Heart',
		year: 2017,
		description:
			"A convention of Aboriginal and Torres Strait Islander delegates at Uluru called for a constitutionally enshrined 'Voice' to Parliament, treaty-making, and truth-telling.",
		significance:
			"The Statement is a landmark of Indigenous self-determination, though Australians voted down the Voice in 2023.",
		wikipediaSlug: 'Uluru_Statement_from_the_Heart',
		tags: ['indigenous', 'politics', 'democracy'],
		related: ['oceania-voice-referendum']
	},
	{
		id: 'oceania-christchurch-mosque',
		title: 'Christchurch Mosque Attacks',
		year: 2019,
		description:
			"A white supremacist killed 51 worshippers at two mosques in Christchurch, livestreaming the attack. New Zealand banned most semi-automatic weapons within a month.",
		significance:
			"The attack led to the Christchurch Call, a global effort to curb violent extremist content online.",
		wikipediaSlug: 'Christchurch_mosque_shootings',
		tags: ['politics', 'society', 'law']
	},
	{
		id: 'oceania-black-summer',
		title: 'Black Summer Bushfires',
		year: 2019,
		description:
			"Unprecedented bushfires burned some 24 million hectares across Australia, killing 33 people directly and an estimated billions of animals.",
		significance:
			"Black Summer made climate change visceral for Australians and highlighted the value of Indigenous cultural burning practices.",
		wikipediaSlug: '2019–20_Australian_bushfire_season',
		tags: ['environment']
	},
	{
		id: 'oceania-hunga-tonga',
		title: 'Hunga Tonga Eruption',
		year: 2022,
		description:
			"An underwater volcano in Tonga erupted with explosive force, sending a plume into the mesosphere and a pressure wave around the world several times. Tsunamis reached Peru.",
		significance:
			"The largest explosion recorded by modern instruments injected a vast amount of water vapor into the stratosphere, temporarily affecting the global climate.",
		wikipediaSlug: '2022_Hunga_Tonga–Hunga_Haʻapai_eruption_and_tsunami',
		tags: ['environment', 'science']
	},
	{
		id: 'oceania-voice-referendum',
		title: 'Voice Referendum',
		year: 2023,
		description:
			"Australians voted 60% to 40% against amending the constitution to create an Aboriginal and Torres Strait Islander Voice to Parliament.",
		significance:
			"The defeat was a major setback for constitutional recognition, revealing persistent divisions over Indigenous rights in Australia.",
		wikipediaSlug: '2023_Australian_Indigenous_Voice_referendum',
		tags: ['indigenous', 'democracy', 'politics']
	},
	{
		id: 'oceania-tuvalu-falepili',
		title: 'Falepili Union: Climate Migration',
		year: 2023,
		description:
			"Australia and Tuvalu signed a treaty offering Tuvaluans a pathway to live in Australia as rising seas threaten their low-lying atolls.",
		significance:
			"It is the first treaty of its kind — a nation planning for its own possible disappearance due to climate change.",
		wikipediaSlug: 'Australia–Tuvalu_relations#Australia–Tuvalu_Falepili_Union',
		tags: ['environment', 'migration', 'politics'],
		related: ['europe-paris-agreement']
	}
];
