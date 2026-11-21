const words = [
  // --- Christianity: Terms ---
  { id: "polytheism", term: "Polytheism", definition: "Belief in and worship of multiple gods.", image: "" },
  { id: "monotheism", term: "Monotheism", definition: "Belief in and worship of a single god.", image: "" },
  { id: "jewish-religion", term: "Jewish Religion", definition: "The monotheistic faith of the Jewish people, based on the Hebrew Bible and belief in one God.", image: "" },
  { id: "old-testament", term: "Old Testament / Hebrew Bible", definition: "The collection of religious texts sacred to Judaism, later adopted by Christians as the first part of the Bible.", image: "" },
  { id: "ten-commandments", term: "Ten Commandments", definition: "A set of moral and religious laws believed to have been given to Moses by God, central to Jewish and Christian ethics.", image: "" },
  { id: "prophet", term: "Prophet", definition: "A person regarded as speaking for or interpreting the will of God.", image: "" },
  { id: "temple-of-jerusalem", term: "Temple of Jerusalem", definition: "The central place of worship for ancient Judaism, built in Jerusalem.", image: "" },
  { id: "diaspora", term: "Diaspora", definition: "The dispersion of the Jewish people outside of their traditional homeland.", image: "" },
  { id: "messiah", term: "Messiah", definition: "In Jewish and Christian belief, a savior or liberator sent by God.", image: "" },
  { id: "christian-religion", term: "Christian Religion", definition: "The monotheistic faith based on the life and teachings of Jesus Christ.", image: "" },
  { id: "baptism", term: "Baptism", definition: "A ritual of purification using water, symbolizing spiritual cleansing and entry into the Christian faith.", image: "" },
  { id: "holy-communion", term: "Holy Communion (Lord's Supper)", definition: "A Christian ritual commemorating Jesus' last meal with his disciples.", image: "" },
  { id: "apostle", term: "Apostle", definition: "One of the original followers of Jesus, sent out to spread his teachings.", image: "" },
  { id: "mission", term: "Mission", definition: "The act of spreading a religion's teachings to new regions or people.", image: "" },
  { id: "bible", term: "Bible", definition: "The sacred scripture of Christianity, made up of the Old and New Testaments.", image: "" },
  { id: "new-testament", term: "New Testament", definition: "The second part of the Christian Bible, focused on the life of Jesus and the early Church.", image: "" },
  { id: "gospel", term: "Gospel", definition: "One of the four biblical accounts of Jesus' life and teachings, written by Matthew, Mark, Luke, and John.", image: "" },
  { id: "martyrs", term: "Martyrs", definition: "People who suffered or died for their religious beliefs.", image: "" },
  { id: "bishop", term: "Bishop", definition: "A senior Christian clergy member overseeing a diocese.", image: "" },
  { id: "episkopos", term: "Episkopos", definition: "The Greek word for 'overseer,' the origin of the word 'bishop.'", image: "" },
  { id: "metropolitan", term: "Metropolitan", definition: "A bishop with authority over the other bishops of a province.", image: "" },
  { id: "presbyter", term: "Presbyter", definition: "An elder or priest in the early Christian church.", image: "" },
  { id: "synod", term: "Synod", definition: "An official assembly of church leaders convened to decide on doctrine.", image: "" },

  // --- Christianity: Names ---
  { id: "jesus", term: "Jesus", definition: "A Jewish preacher born in Bethlehem and raised in Nazareth, regarded by Christians as the Messiah and the central figure of Christianity.", image: "" },
  { id: "saint-peter", term: "Saint Peter", definition: "One of Jesus' twelve apostles, who led the first Christian congregation in Jerusalem.", image: "" },
  { id: "saint-paul", term: "Saint Paul", definition: "Formerly Saul, a persecutor of Christians who converted after a vision of Jesus and became a key apostle spreading Christianity across the Roman Empire.", image: "" },
  { id: "constantine", term: "Constantine", definition: "Roman emperor who issued the Edict of Milan in 313 AD, legalizing Christianity throughout the Empire.", image: "" },

  // --- Christianity: Chronology ---
  { id: "christian-chronology", term: "Christian Chronology (BC/AD)", definition: "The dating system marking years before and after the traditional birth year of Jesus Christ.", image: "" },
  { id: "edict-of-milan", term: "Edict of Milan (313 AD)", definition: "A proclamation by Emperor Constantine that made Christianity a freely practicable religion in the Roman Empire.", image: "" },
  { id: "council-of-nicaea", term: "Council of Nicaea (325 AD)", definition: "A gathering of Christian bishops where the doctrine of the Holy Trinity was established.", image: "" },
  { id: "fall-of-western-rome", term: "Fall of the Western Roman Empire (476 AD)", definition: "The collapse of Roman authority in Western Europe, marking the traditional end of the ancient world.", image: "" },

  // --- Christianity: Topography (with maps) ---
    { id: "jerusalem", term: "Jerusalem", definition: "A city in the Middle East sacred to Judaism and Christianity, central to the early Church.", image: "", mapBox: "35.14,31.72,35.28,31.82" },
  { id: "canaan", term: "Canaan", definition: "An ancient region roughly corresponding to modern Israel and Palestine, referred to in biblical texts.", image: "", mapBox: "34.2,30.9,36.0,33.3" },
  { id: "judea", term: "Judea", definition: "A Roman province in the southern part of ancient Palestine, where Jesus lived and preached.", image: "", mapBox: "34.8,31.2,35.6,31.9" },
  { id: "israel", term: "Israel", definition: "The historic homeland of the Jewish people, and the modern state in the same region.", image: "", mapBox: "34.2,29.4,35.9,33.4" },
  { id: "palestine", term: "Palestine", definition: "The historic region in the eastern Mediterranean encompassing modern Israel and the Palestinian territories.", image: "", mapBox: "34.2,31.2,35.6,32.6" },
  { id: "bethlehem", term: "Bethlehem", definition: "A town near Jerusalem traditionally recognized as the birthplace of Jesus.", image: "", mapBox: "35.16,31.67,35.25,31.74" },

  // --- Hungary Foundation: Names ---
  { id: "geza", term: "Géza", definition: "Grand Prince of Hungary (c. 945/950–997) and father of Stephen I, who adopted Roman Catholicism and steered Hungary toward the West.", image: "" },
  { id: "istvan", term: "István (Stephen I)", definition: "First King of Hungary (975–1038), originally named Vajk, who established the Christian Hungarian kingdom and was crowned around 1000/1001.", image: "" },
  { id: "koppany", term: "Koppány", definition: "A clan leader who claimed the throne by seniority rather than primogeniture and was defeated by Stephen at Veszprém in 997.", image: "" },
  { id: "gyula", term: "Gyula", definition: "The clan leader of Transylvania, defeated by Stephen in 1003.", image: "" },
  { id: "ajtony", term: "Ajtony", definition: "The last independent clan leader in Hungary, defeated by Stephen in 1030.", image: "" },
  { id: "imre", term: "Imre", definition: "Stephen I's only surviving son and heir, educated by Saint Gerard of Csanád, who died at 24 in a hunting accident in 1031 without children.", image: "" },
  { id: "saint-gerard", term: "Saint Gerard of Csanád", definition: "A Venetian Benedictine scholar who gave Prince Imre a strict, scholarly education.", image: "" },
  { id: "vazul", term: "Vazul", definition: "Stephen I's cousin and next in line for succession, imprisoned and blinded by Stephen for following pagan customs.", image: "" },
  { id: "orseolo-peter", term: "Peter Orseolo", definition: "Named by Stephen I as his successor after promising to protect Stephen's wife, though he later placed her under house arrest.", image: "" },
  { id: "conrad-ii", term: "Conrad II", definition: "Holy Roman Emperor whose 1030 attack on Hungary was repelled by Stephen I, leading to formal recognition of Hungarian independence.", image: "" },
  { id: "pope-sylvester-ii", term: "Pope Sylvester II", definition: "The pope associated with granting Stephen I his royal crown, cementing Hungary's place in Western Christendom.", image: "" },

  // --- Hungary Foundation: Terms ---
  { id: "primogeniture", term: "Primogeniture", definition: "A system of inheritance in which the first-born son inherits the throne; the Western practice championed by Stephen I.", image: "" },
  { id: "seniority", term: "Seniority (succession)", definition: "A system of succession in which rule passes to the eldest surviving male relative rather than a direct son; championed by Koppány.", image: "" },
  { id: "bailiff", term: "Bailiff", definition: "A royal official who acted as both military leader and judge within a county, responsible for collecting taxes.", image: "" },
  { id: "county", term: "County", definition: "An administrative district established under Stephen I, each centered on a castle district.", image: "" },
  { id: "palatine", term: "Palatine", definition: "The royal judge who led the royal assembly of advisors and represented the king.", image: "" },
  { id: "tithe", term: "Tithe", definition: "A mandatory church tax introduced under Stephen I.", image: "" },
  { id: "archbishopric", term: "Archbishopric", definition: "A senior ecclesiastical division led by an archbishop; Hungary's were established at Esztergom and Kalocsa.", image: "" },
  { id: "apostolic-king", term: "Apostolic King", definition: "A title given to Stephen I reflecting his role in spreading and organizing Christianity throughout Hungary.", image: "" },
  { id: "private-possession", term: "Private Possession", definition: "Land personally controlled by the king rather than distributed to nobles; Stephen I held roughly two-thirds of Hungary's land this way.", image: "" },

  // --- Hungary Foundation: Places (with maps) ---
   { id: "veszprem", term: "Veszprém", definition: "The site of Stephen I's decisive 997 victory over Koppány.", image: "", mapBox: "17.85,47.06,17.97,47.13" },
  { id: "szekesfehervar", term: "Székesfehérvár", definition: "The city where Stephen I was crowned king of Hungary.", image: "", mapBox: "18.36,47.15,18.48,47.22" },
  { id: "esztergom-kalocsa", term: "Esztergom and Kalocsa", definition: "The two archbishoprics established under Stephen I, forming the backbone of Hungary's early church administration.", image: "", mapBox: "18.5,46.5,19.0,47.8" },

  // --- Mongol Invasion: Names ---
  { id: "julianus", term: "Friar Julianus", definition: "A Dominican friar sent east by Béla IV in 1235 who located the distant Hungarian relatives in Magna Hungary and warned of the coming Mongol threat.", image: "" },
  { id: "genghis-khan", term: "Genghis Khan", definition: "The leader who united the Mongol tribes and drove their territorial expansion, setting the stage for the invasion of Hungary.", image: "" },
  { id: "batu-khan", term: "Batu Khan", definition: "The Mongol commander who led the invasion of Hungary and the victory at the Battle of Muhi in 1241.", image: "" },
  { id: "kotony", term: "Kötöny", definition: "The leader of the Cumans in Hungary, killed by Hungarian nobles, which prompted the Cumans to abandon Hungary before the Mongol invasion.", image: "" },
  { id: "bela-iv", term: "Béla IV", definition: "King of Hungary (1235–1270) during the Mongol invasion, who fled to Austria after the Battle of Muhi and later led the kingdom's reconstruction.", image: "" },

  // --- Mongol Invasion: Terms ---
  { id: "friar", term: "Friar", definition: "A member of a Christian religious order, often sent on missionary or diplomatic journeys, such as Julianus.", image: "" },
  { id: "cumans", term: "Cumans", definition: "A nomadic people invited into Hungary for protection against the Mongols, later granted land and, eventually, noble privileges.", image: "" },
  { id: "battle-of-muhi", term: "Battle of Muhi", definition: "The decisive battle of April 10–11, 1241, where the Mongol army under Batu Khan crushed Hungarian forces.", image: "" },

  // --- Mongol Invasion: Places (with maps) ---
   { id: "muhi", term: "Muhi", definition: "The site of the 1241 battle where the Mongols decisively defeated the Hungarian army.", image: "", mapBox: "20.65,48.0,20.9,48.17" },
  { id: "magna-hungary", term: "Magna Hungary", definition: "A distant eastern region where Friar Julianus located relatives of the Hungarians and the Cuman tribe.", image: "", mapBox: "52.0,52.5,60.0,57.0" },
  { id: "island-of-rabbits", term: "Island of Rabbits", definition: "The island where Béla IV's daughter Margaret became a nun after being offered to God.", image: "", mapBox: "19.03,47.52,19.07,47.55" },

  // --- Charles Robert: Names ---
  { id: "wenceslas-of-bohemia", term: "Wenceslas of Bohemia (Premysl Vencel)", definition: "Son of the Bohemian king, crowned King of Hungary in 1301 at a young age; returned to Bohemia after his father's death.", image: "" },
  { id: "otto-of-bavaria", term: "Otto of Wittelsbach", definition: "Duke of Bavaria, crowned King of Hungary in 1305; later captured by a Transylvanian warlord, stripped of his crown, and forced to flee.", image: "" },
  { id: "charles-robert", term: "Charles Robert", definition: "King of Hungary from 1308 (fully validated in 1310), who centralized royal power, reformed the economy, and founded a new ruling system based on honor-lands.", image: "" },
  { id: "andrew-iii", term: "Andrew III", definition: "The last Hungarian king of the Árpád dynasty, whose death without a male heir in 1301 triggered a succession crisis.", image: "" },
  { id: "laszlo-kan", term: "László Kán", definition: "A powerful noble who gave up the Holy Crown of Hungary to Charles Robert through diplomatic negotiation rather than war.", image: "" },
  { id: "amade-aba", term: "Amádé Aba", definition: "An oligarch defeated by Charles Robert at the Battle of Rozgony in 1312.", image: "" },
  { id: "kopasz-borsa", term: "Kopasz Borsa", definition: "An oligarch defeated alongside Amádé Aba at the Battle of Rozgony in 1312.", image: "" },
  { id: "mate-csak", term: "Máté Csák", definition: "A powerful oligarch who resisted Charles Robert's rule until his death in 1321, after which his lands came under royal control.", image: "" },
  { id: "felician-zach", term: "Felicián Zách", definition: "A former supporter of Máté Csák who attempted to assassinate the royal family at Visegrád in 1330, reportedly in revenge for an assault on his daughter.", image: "" },
  { id: "casimir-iii", term: "Casimir III", definition: "King of Poland who made a succession agreement with Charles Robert: if he died without a male heir, Charles Robert's son Louis would inherit the Polish throne.", image: "" },
  { id: "louis", term: "Louis (son of Charles Robert)", definition: "The older son of Charles Robert, positioned to inherit the Polish throne under treaty with Casimir III.", image: "" },
  { id: "andras", term: "András (son of Charles Robert)", definition: "The younger son of Charles Robert, arranged to marry Joanna of Naples as part of a diplomatic alliance.", image: "" },
  { id: "joanna-of-naples", term: "Joanna of Naples", definition: "Heir to the throne of Naples, arranged to marry András, the younger son of Charles Robert.", image: "" },

  // --- Charles Robert: Terms ---
  { id: "divide-et-impera", term: "Divide et Impera", definition: "Latin for 'divide and rule' — a strategy of turning rival nobles against each other to weaken their collective power.", image: "" },
  { id: "honor-lands", term: "Honor-lands", definition: "Land grants tied to a title rather than owned outright; both the land and title could be revoked by the king, keeping barons dependent on royal favor.", image: "" },
  { id: "banderia-army", term: "Banderia Army", definition: "A military system combining the king's own troops with the private armies (banderia) of barons and counties, each fighting under its own banner.", image: "" },
  { id: "urbura", term: "Urbura", definition: "A mining reform introduced by Charles Robert to boost royal income from mining while preserving good relations with landlords.", image: "" },
  { id: "debasement", term: "Debasement", definition: "The practice of reducing a coin's precious metal content to generate royal income, common before Charles Robert's monetary reform.", image: "" },
  { id: "golden-forint", term: "Golden Forint", definition: "A stable, high-value gold coin introduced by Charles Robert in 1325 to replace the old system of yearly currency debasement.", image: "" },
  { id: "gate-tax", term: "Gate Tax", definition: "A tax introduced to replace the royal income previously generated through currency debasement.", image: "" },
  { id: "customs-duty", term: "Customs Duty (Thirtieth)", definition: "A trade tax, also called the thirtieth, introduced to replace income lost after ending currency debasement.", image: "" },

  // --- Charles Robert: Places (with maps) ---
    { id: "rozgony", term: "Rozgony", definition: "Site of Charles Robert's decisive 1312 victory over the oligarchs Amádé Aba and Kopasz Borsa.", image: "", mapBox: "21.25,48.72,21.42,48.82" },
  { id: "visegrad-summit", term: "Visegrád Summit (1335)", definition: "A meeting between Hungary, Bohemia, and Poland aimed at agreeing on a new trade route bypassing Vienna and forming a wider alliance.", image: "", mapBox: "18.92,47.76,19.03,47.81" },
  { id: "kormocbanya", term: "Körmöcbánya (Kremnica)", definition: "A mining town developed under Charles Robert to boost precious metal extraction.", image: "", mapBox: "18.87,48.68,18.97,48.75" },
  { id: "selmecbanya", term: "Selmecbánya (Banská Štiavnica)", definition: "A major silver mining town developed during Charles Robert's reign.", image: "", mapBox: "18.84,48.42,18.95,48.49" },
  { id: "besztercebanya", term: "Besztercebánya (Banská Bystrica)", definition: "A mining town that grew prosperous under Charles Robert's mining reforms.", image: "", mapBox: "19.1,48.70,19.21,48.78" }
];
