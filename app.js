/* خطب الغزالي — GHAZALI'S SERMONS — app.js */
/* Based on "Khutab al-Ghazali fi Shu'un al-Din wal-Hayat" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'خطب الغزالي',
    splashSub: 'في شؤون الدين والحياة',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الجمعة ٦٢: ٢',
    tabHome: 'الرئيسية', tabCards: 'الخطب', tabTopics: 'المواضيع',
    tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'مختارات من الخطب',
    cardsDesc: '٢٠ مقتطفاً من أروع خطب الشيخ محمد الغزالي',
    topicsTitle: 'المواضيع الكبرى',
    topicsDesc: 'المحاور التي دارت حولها خطب الشيخ',
    quizTitle: 'اختبر معلوماتك',
    quizDesc: 'ما مدى معرفتك بخطب الشيخ الغزالي؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ خطبة اليوم',
    quizAgain: 'أعد الاختبار',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في الخطب...',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    splashFeatures: [
      '٢٠ مقتطفاً من خطب الشيخ الغزالي',
      'مواضيع الإيمان والمجتمع والعدل',
      'اختبار معلوماتك',
      'ثلاث لغات + ثلاثة أنماط'
    ],
  },
  en: {
    appTitle: 'Ghazali\'s Sermons',
    splashSub: 'On matters of faith and life',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Jumu\'ah 62:2',
    tabHome: 'Home', tabCards: 'Sermons', tabTopics: 'Topics',
    tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Selected Sermons',
    cardsDesc: '20 excerpts from Sheikh al-Ghazali\'s finest sermons',
    topicsTitle: 'Major Themes',
    topicsDesc: 'Core topics addressed in the Sheikh\'s sermons',
    quizTitle: 'Test Your Knowledge',
    quizDesc: 'How well do you know Ghazali\'s sermons?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Sermon',
    quizAgain: 'Retake Quiz',
    share: 'Share',
    searchPlaceholder: 'Search sermons...',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    splashFeatures: [
      '20 excerpts from Ghazali\'s sermons',
      'Themes of faith, society, and justice',
      'Test your knowledge',
      'Three languages + three themes'
    ],
  },
  fr: {
    appTitle: 'Sermons d\'al-Ghazali',
    splashSub: 'Sur les affaires de la foi et de la vie',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Jumu\'ah 62:2',
    tabHome: 'Accueil', tabCards: 'Sermons', tabTopics: 'Themes',
    tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Sermons Choisis',
    cardsDesc: '20 extraits des plus beaux sermons du Sheikh al-Ghazali',
    topicsTitle: 'Themes Majeurs',
    topicsDesc: 'Les grands axes des sermons du Sheikh',
    quizTitle: 'Testez Vos Connaissances',
    quizDesc: 'Connaissez-vous bien les sermons du Sheikh ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas',
    submitQuiz: 'Voir les Resultats',
    dailyLabel: '✨ Sermon du Jour',
    quizAgain: 'Refaire le Quiz',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les sermons...',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    splashFeatures: [
      '20 extraits des sermons d\'al-Ghazali',
      'Themes de la foi, societe et justice',
      'Testez vos connaissances',
      'Trois langues + trois themes'
    ],
  }
};

// ═══════════════ CARDS DATA (20 sermon excerpts) ═══════════════
const CARDS = [
  {id:1, emoji:'🕌',
    ar:{title:'الصلاة روح الإيمان',desc:'الصلاة ليست مجرد حركات جسدية، بل هي صلة بين العبد وربه. من أقامها بخشوع وجد فيها سكينة النفس وطمأنينة القلب. إنها المعراج الروحي اليومي للمؤمن.',verse:'إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ',action:'حافظ على صلاتك بخشوع وتدبر'},
    en:{title:'Prayer: The Soul of Faith',desc:'Prayer is not mere physical movements, but a connection between the servant and his Lord. Whoever performs it with humility finds inner peace and tranquility. It is the believer\'s daily spiritual ascent.',verse:'Indeed, prayer prohibits immorality and wrongdoing',action:'Maintain your prayers with humility and reflection'},
    fr:{title:'La Priere : Ame de la Foi',desc:'La priere n\'est pas de simples mouvements physiques, mais un lien entre le serviteur et son Seigneur. Celui qui la pratique avec humilite y trouve la paix interieure.',verse:'La priere preserve de la turpitude et du blamable',action:'Maintenez vos prieres avec humilite et reflexion'}
  },
  {id:2, emoji:'⚖️',
    ar:{title:'العدل أساس الحكم',desc:'العدل في الإسلام ليس خياراً بل فريضة. الحاكم الذي يظلم رعيته خائن لأمانته. والمجتمع الذي يسكت عن الظلم شريك فيه.',verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',action:'قف مع المظلوم ولا تسكت عن ظلم'},
    en:{title:'Justice: The Foundation of Governance',desc:'Justice in Islam is not optional but obligatory. A ruler who oppresses his people betrays his trust. A society that stays silent before injustice is complicit.',verse:'Indeed, Allah commands justice and good conduct',action:'Stand with the oppressed and never be silent before injustice'},
    fr:{title:'La Justice : Fondement du Pouvoir',desc:'La justice en Islam n\'est pas optionnelle mais obligatoire. Un dirigeant qui opprime son peuple trahit sa confiance. Une societe silencieuse devant l\'injustice en est complice.',verse:'Allah ordonne la justice et la bienfaisance',action:'Soutenez l\'opprime et ne restez jamais silencieux face a l\'injustice'}
  },
  {id:3, emoji:'📚',
    ar:{title:'العلم فريضة',desc:'طلب العلم فريضة على كل مسلم. الأمة التي تجهل دينها ودنياها أمة محكومة بالتخلف. الإسلام دين يحتفي بالعقل ويدعو إلى التفكر.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',action:'اجعل القراءة عادة يومية'},
    en:{title:'Knowledge is an Obligation',desc:'Seeking knowledge is obligatory for every Muslim. A nation ignorant of its religion and worldly affairs is destined for backwardness. Islam celebrates reason and calls for reflection.',verse:'Say: Are those who know equal to those who do not know?',action:'Make reading a daily habit'},
    fr:{title:'Le Savoir est une Obligation',desc:'La quete du savoir est obligatoire pour chaque musulman. Une nation ignorante de sa religion est vouee au retard. L\'Islam celebre la raison et appelle a la reflexion.',verse:'Dis : Sont-ils egaux ceux qui savent et ceux qui ne savent pas ?',action:'Faites de la lecture une habitude quotidienne'}
  },
  {id:4, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'الأسرة نواة المجتمع',desc:'الأسرة هي اللبنة الأولى في بناء المجتمع. إذا صلحت صلح المجتمع كله. الزوجان شريكان في بناء بيت يقوم على المودة والرحمة.',verse:'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا',action:'احرص على بناء أسرة قائمة على المودة'},
    en:{title:'Family: The Core of Society',desc:'The family is the first building block of society. When it is healthy, all of society benefits. Spouses are partners in building a home founded on love and mercy.',verse:'And among His signs is that He created for you mates that you may find tranquility in them',action:'Strive to build a family founded on love and mercy'},
    fr:{title:'La Famille : Noyau de la Societe',desc:'La famille est la premiere pierre de l\'edifice social. Quand elle est saine, toute la societe en profite. Les epoux sont partenaires dans la construction d\'un foyer fonde sur l\'amour.',verse:'Et parmi Ses signes, Il a cree pour vous des epouses pour que vous trouviez aupres d\'elles la quietude',action:'Efforcez-vous de batir une famille fondee sur l\'amour et la misericorde'}
  },
  {id:5, emoji:'🤝',
    ar:{title:'الأخوة الإسلامية',desc:'المسلمون إخوة، لا فرق بين عربي وعجمي إلا بالتقوى. هذه الأخوة ليست شعاراً بل منهج حياة يقتضي التكافل والتعاون.',verse:'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ',action:'ساعد أخاك المسلم في محنته'},
    en:{title:'Islamic Brotherhood',desc:'Muslims are brothers; no Arab has superiority over a non-Arab except in piety. This brotherhood is not a slogan but a way of life requiring solidarity and cooperation.',verse:'The believers are but brothers',action:'Help your fellow Muslim in times of hardship'},
    fr:{title:'La Fraternite Islamique',desc:'Les musulmans sont freres; aucun Arabe n\'est superieur a un non-Arabe sauf par la piete. Cette fraternite n\'est pas un slogan mais un mode de vie exigeant solidarite et cooperation.',verse:'Les croyants ne sont que des freres',action:'Aidez votre frere musulman dans les moments difficiles'}
  },
  {id:6, emoji:'💪',
    ar:{title:'الإيمان والعمل',desc:'الإيمان بلا عمل كالشجرة بلا ثمر. المؤمن الحق من ترجم إيمانه إلى سلوك يومي يعكس قيم الإسلام في كل تعاملاته.',verse:'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ',action:'اجعل إيمانك ينعكس في أعمالك اليومية'},
    en:{title:'Faith and Action',desc:'Faith without action is like a tree without fruit. A true believer translates faith into daily behavior reflecting Islamic values in all dealings.',verse:'Indeed, those who believe and do righteous deeds',action:'Let your faith be reflected in your daily actions'},
    fr:{title:'La Foi et l\'Action',desc:'La foi sans action est comme un arbre sans fruit. Le vrai croyant traduit sa foi en comportement quotidien refletant les valeurs islamiques.',verse:'Ceux qui croient et font de bonnes oeuvres',action:'Laissez votre foi se refleter dans vos actions quotidiennes'}
  },
  {id:7, emoji:'🌍',
    ar:{title:'رسالة الإسلام العالمية',desc:'الإسلام ليس ديناً عربياً بل رسالة عالمية للبشرية جمعاء. جاء ليحرر الناس من العبودية لغير الله ويقيم العدل في الأرض.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',action:'كن سفيراً للإسلام بأخلاقك'},
    en:{title:'Islam\'s Universal Message',desc:'Islam is not an Arab religion but a universal message for all humanity. It came to free people from servitude to other than God and establish justice on earth.',verse:'And We have not sent you except as a mercy to the worlds',action:'Be an ambassador of Islam through your character'},
    fr:{title:'Le Message Universel de l\'Islam',desc:'L\'Islam n\'est pas une religion arabe mais un message universel pour toute l\'humanite. Il est venu liberer les gens de la servitude a autre que Dieu.',verse:'Et Nous ne t\'avons envoye qu\'en misericorde pour l\'univers',action:'Soyez un ambassadeur de l\'Islam par votre caractere'}
  },
  {id:8, emoji:'🛡️',
    ar:{title:'الدفاع عن الإسلام',desc:'الدفاع عن الإسلام واجب على كل مسلم، كلٌّ بحسب قدرته. بالكلمة والقلم والموقف. لا يليق بالمسلم أن يرى دينه يُهاجم ويسكت.',verse:'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ',action:'دافع عن دينك بالعلم والحجة'},
    en:{title:'Defending Islam',desc:'Defending Islam is a duty for every Muslim, each according to their ability - through word, pen, and stance. It is unbecoming for a Muslim to watch their faith attacked and remain silent.',verse:'So do not weaken and do not grieve, for you are superior',action:'Defend your faith with knowledge and evidence'},
    fr:{title:'Defendre l\'Islam',desc:'Defendre l\'Islam est un devoir pour chaque musulman, chacun selon ses capacites. Il est indigne d\'un musulman de voir sa foi attaquee et de rester silencieux.',verse:'Ne faiblissez pas et ne vous attristez pas, car vous etes les superieurs',action:'Defendez votre foi avec savoir et arguments'}
  },
  {id:9, emoji:'❤️',
    ar:{title:'الرحمة في الإسلام',desc:'الرحمة خلق أساسي في الإسلام. النبي عليه الصلاة والسلام كان أرحم الناس. من لا يرحم لا يُرحم.',verse:'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',action:'عامل الناس بالرحمة والرفق'},
    en:{title:'Mercy in Islam',desc:'Mercy is a fundamental trait in Islam. The Prophet, peace be upon him, was the most merciful of people. Whoever shows no mercy will receive none.',verse:'And indeed, you are of a great moral character',action:'Treat people with mercy and kindness'},
    fr:{title:'La Misericorde en Islam',desc:'La misericorde est un trait fondamental en Islam. Le Prophete, paix sur lui, etait le plus misericordieux des hommes.',verse:'Et tu es certes d\'un caractere eminent',action:'Traitez les gens avec misericorde et bonte'}
  },
  {id:10, emoji:'💰',
    ar:{title:'المال في الإسلام',desc:'المال في الإسلام أمانة لا ملك مطلق. الغني مسؤول عن ماله: من أين اكتسبه وفيم أنفقه. البخل والإسراف كلاهما مذموم.',verse:'وَلَا تَجْعَلْ يَدَكَ مَغْلُولَةً إِلَىٰ عُنُقِكَ وَلَا تَبْسُطْهَا كُلَّ الْبَسْطِ',action:'أنفق بحكمة واعتدال'},
    en:{title:'Wealth in Islam',desc:'Money in Islam is a trust, not absolute possession. The wealthy are responsible for their wealth: how they earned it and how they spent it. Both miserliness and extravagance are blameworthy.',verse:'And do not make your hand chained to your neck or extend it completely',action:'Spend wisely and in moderation'},
    fr:{title:'La Richesse en Islam',desc:'L\'argent en Islam est un depot de confiance, pas une possession absolue. Les riches sont responsables de leur richesse. L\'avarice et la prodigalite sont toutes deux blamables.',verse:'Ne porte pas ta main enchainnee a ton cou et ne l\'etends pas non plus trop largement',action:'Depensez avec sagesse et moderation'}
  },
  {id:11, emoji:'🏛️',
    ar:{title:'الشورى في الإسلام',desc:'الشورى مبدأ إسلامي أصيل. الحاكم الذي لا يستشير رعيته مستبد. والمسلم الذي لا يستشير إخوانه في أموره قد يضل.',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',action:'استشر أهل الخبرة في قراراتك'},
    en:{title:'Consultation in Islam',desc:'Consultation (Shura) is a core Islamic principle. A ruler who doesn\'t consult his people is a tyrant. A Muslim who doesn\'t consult others may go astray.',verse:'And whose affair is determined by consultation among themselves',action:'Consult experts in your decisions'},
    fr:{title:'La Consultation en Islam',desc:'La consultation (Choura) est un principe islamique fondamental. Un dirigeant qui ne consulte pas son peuple est un tyran.',verse:'Et dont les affaires sont objet de consultation entre eux',action:'Consultez les experts dans vos decisions'}
  },
  {id:12, emoji:'🌱',
    ar:{title:'التوبة والأمل',desc:'باب التوبة مفتوح دائماً. الله يحب التوابين. لا يأس في الإسلام مهما عظم الذنب، فرحمة الله أوسع من كل شيء.',verse:'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',action:'جدد توبتك كل يوم'},
    en:{title:'Repentance and Hope',desc:'The door of repentance is always open. God loves those who repent. There is no despair in Islam no matter how great the sin, for God\'s mercy encompasses everything.',verse:'Say: O My servants who have transgressed, do not despair of the mercy of Allah',action:'Renew your repentance every day'},
    fr:{title:'Le Repentir et l\'Espoir',desc:'La porte du repentir est toujours ouverte. Dieu aime ceux qui se repentent. Il n\'y a pas de desespoir en Islam, car la misericorde de Dieu englobe tout.',verse:'Dis : O Mes serviteurs qui avez commis des exces, ne desesperez pas de la misericorde d\'Allah',action:'Renouvelez votre repentir chaque jour'}
  },
  {id:13, emoji:'📖',
    ar:{title:'القرآن منهج حياة',desc:'القرآن ليس كتاباً للتلاوة فقط بل منهج حياة شامل. من اتخذه دستوراً لحياته وجد فيه الهداية والسعادة والنجاح.',verse:'إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ',action:'اقرأ القرآن بتدبر يومياً'},
    en:{title:'The Quran: A Way of Life',desc:'The Quran is not merely a book for recitation but a comprehensive way of life. Whoever takes it as their constitution finds guidance, happiness, and success.',verse:'Indeed, this Quran guides to that which is most suitable',action:'Read the Quran with reflection daily'},
    fr:{title:'Le Coran : Mode de Vie',desc:'Le Coran n\'est pas seulement un livre de recitation mais un mode de vie complet. Celui qui en fait sa constitution trouve la guidance et le bonheur.',verse:'Ce Coran guide vers ce qui est le plus droit',action:'Lisez le Coran avec reflexion chaque jour'}
  },
  {id:14, emoji:'🎓',
    ar:{title:'المرأة في الإسلام',desc:'الإسلام كرّم المرأة وأعطاها حقوقها كاملة. من ظلم المرأة باسم الدين فهو جاهل بالدين. المرأة المسلمة شريكة في بناء الحضارة.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',action:'احترم المرأة وأعطها حقوقها الكاملة'},
    en:{title:'Women in Islam',desc:'Islam honored women and gave them their full rights. Whoever oppresses women in the name of religion is ignorant of religion. Muslim women are partners in building civilization.',verse:'And due to them is similar to what is expected of them, according to what is reasonable',action:'Respect women and give them their full rights'},
    fr:{title:'La Femme en Islam',desc:'L\'Islam a honore la femme et lui a accorde tous ses droits. Quiconque opprime les femmes au nom de la religion ignore la religion. La femme musulmane est partenaire dans la construction de la civilisation.',verse:'Elles ont des droits equivalents a leurs obligations, conformement a la bienseance',action:'Respectez les femmes et accordez-leur tous leurs droits'}
  },
  {id:15, emoji:'🕊️',
    ar:{title:'السلام في الإسلام',desc:'الإسلام دين السلام. اسمه مشتق من السلام. والمسلم من سلم المسلمون من لسانه ويده. العنف ليس من طبيعة الإسلام.',verse:'وَإِن جَنَحُوا لِلسَّلْمِ فَاجْنَحْ لَهَا',action:'كن صانعاً للسلام في محيطك'},
    en:{title:'Peace in Islam',desc:'Islam is a religion of peace. Its very name is derived from peace. A Muslim is one from whose tongue and hand other Muslims are safe. Violence is not Islam\'s nature.',verse:'And if they incline to peace, then incline to it also',action:'Be a peacemaker in your community'},
    fr:{title:'La Paix en Islam',desc:'L\'Islam est une religion de paix. Son nom meme derive de la paix. Un musulman est celui dont les autres sont a l\'abri de sa langue et de sa main.',verse:'Et s\'ils inclinent vers la paix, incline vers elle aussi',action:'Soyez un artisan de paix dans votre communaute'}
  },
  {id:16, emoji:'💡',
    ar:{title:'الاجتهاد والتجديد',desc:'الاجتهاد ضرورة لكل عصر. الإسلام لا يعرف الجمود الفكري. من واجب العلماء أن يجتهدوا في فهم النصوص لتلبية حاجات العصر.',verse:'',action:'شجع الاجتهاد والتفكير النقدي البناء'},
    en:{title:'Ijtihad and Renewal',desc:'Ijtihad (independent reasoning) is a necessity for every era. Islam doesn\'t know intellectual stagnation. Scholars have a duty to engage in ijtihad to address modern needs.',verse:'',action:'Encourage ijtihad and constructive critical thinking'},
    fr:{title:'L\'Ijtihad et le Renouveau',desc:'L\'Ijtihad (raisonnement independant) est une necessite pour chaque epoque. L\'Islam ne connait pas la stagnation intellectuelle. Les savants ont le devoir de s\'engager dans l\'ijtihad.',verse:'',action:'Encouragez l\'ijtihad et la pensee critique constructive'}
  },
  {id:17, emoji:'🌟',
    ar:{title:'الإخلاص في العبادة',desc:'العبادة بلا إخلاص لا قيمة لها. الإخلاص هو أن تعمل لله وحده، لا رياءً ولا سمعة. هو جوهر الدين وروحه.',verse:'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ',action:'راجع نيتك قبل كل عمل'},
    en:{title:'Sincerity in Worship',desc:'Worship without sincerity is worthless. Sincerity means acting for God alone, not for show or reputation. It is the essence and soul of religion.',verse:'And they were not commanded except to worship Allah, being sincere to Him in religion',action:'Check your intention before every action'},
    fr:{title:'La Sincerite dans l\'Adoration',desc:'L\'adoration sans sincerite est sans valeur. La sincerite signifie agir pour Dieu seul, pas pour la montre ou la reputation. C\'est l\'essence de la religion.',verse:'Il ne leur a ete commande que d\'adorer Allah en Lui vouant un culte sincere',action:'Verifiez votre intention avant chaque action'}
  },
  {id:18, emoji:'🏥',
    ar:{title:'حقوق الفقراء',desc:'الفقير له حق معلوم في مال الغني. الزكاة ليست منّة بل حق واجب. المجتمع المسلم الذي يوجد فيه جائع هو مجتمع آثم.',verse:'وَالَّذِينَ فِي أَمْوَالِهِمْ حَقٌّ مَّعْلُومٌ لِّلسَّائِلِ وَالْمَحْرُومِ',action:'تصدق على الفقراء وأعطهم حقهم'},
    en:{title:'Rights of the Poor',desc:'The poor have a known right in the wealth of the rich. Zakat is not charity but an obligatory right. A Muslim society where hunger exists is a sinful society.',verse:'And those in whose wealth is a known right for the petitioner and the deprived',action:'Give charity to the poor and fulfill their rights'},
    fr:{title:'Les Droits des Pauvres',desc:'Les pauvres ont un droit connu dans la richesse des riches. La zakat n\'est pas une charite mais un droit obligatoire. Une societe musulmane ou la faim existe est pecheresse.',verse:'Et ceux dans les biens desquels il y a un droit connu pour le mendiant et le desherite',action:'Donnez aux pauvres et remplissez leurs droits'}
  },
  {id:19, emoji:'⏰',
    ar:{title:'قيمة الوقت',desc:'الوقت أغلى ما يملك الإنسان. المسلم الحق لا يضيع وقته في اللهو والباطل. كل لحظة هي فرصة لعمل صالح أو علم نافع.',verse:'وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',action:'نظم وقتك واستثمره في النافع'},
    en:{title:'The Value of Time',desc:'Time is the most precious thing a person possesses. A true Muslim doesn\'t waste time in idle pursuits. Every moment is an opportunity for good deeds or beneficial knowledge.',verse:'By time, indeed mankind is in loss',action:'Organize your time and invest it in what\'s beneficial'},
    fr:{title:'La Valeur du Temps',desc:'Le temps est la chose la plus precieuse que l\'homme possede. Un vrai musulman ne gaspille pas son temps. Chaque moment est une opportunite pour de bonnes actions.',verse:'Par le temps, l\'homme est certes en perdition',action:'Organisez votre temps et investissez-le dans ce qui est benefique'}
  },
  {id:20, emoji:'🌙',
    ar:{title:'التوازن في الحياة',desc:'الإسلام دين التوازن. لا رهبانية ولا انغماس في الدنيا. المسلم يعبد ربه ويعمر أرضه ويستمتع بالحياة ضمن حدود الله.',verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',action:'وازن بين دينك ودنياك'},
    en:{title:'Balance in Life',desc:'Islam is a religion of balance. No monasticism and no immersion in worldly life. A Muslim worships God, cultivates the earth, and enjoys life within God\'s limits.',verse:'But seek through what Allah has given you the home of the Hereafter; and do not forget your share of the world',action:'Balance your spiritual and worldly life'},
    fr:{title:'L\'Equilibre dans la Vie',desc:'L\'Islam est une religion d\'equilibre. Pas de monachisme ni d\'immersion dans la vie mondaine. Un musulman adore Dieu, cultive la terre et profite de la vie dans les limites de Dieu.',verse:'Recherche par ce qu\'Allah t\'a donne la Demeure Derniere et n\'oublie pas ta part dans ce monde',action:'Equilibrez votre vie spirituelle et mondaine'}
  },
];

// ═══════════════ TOPICS DATA ═══════════════
const TOPICS_DATA = [
  {emoji:'🕌',ar:{title:'العبادة والإيمان',desc:'الصلاة، الصيام، الإخلاص — ركائز الإيمان في خطب الشيخ',count:'خطب ١، ٦، ١٧'},en:{title:'Worship & Faith',desc:'Prayer, fasting, sincerity — pillars of faith in the Sheikh\'s sermons',count:'Sermons 1, 6, 17'},fr:{title:'Adoration et Foi',desc:'Priere, jeune, sincerite — piliers de la foi dans les sermons du Sheikh',count:'Sermons 1, 6, 17'}},
  {emoji:'⚖️',ar:{title:'العدل والحكم',desc:'العدل، الشورى، حقوق الفقراء — رؤية الإسلام للحكم الرشيد',count:'خطب ٢، ١١، ١٨'},en:{title:'Justice & Governance',desc:'Justice, consultation, rights of the poor — Islam\'s vision for good governance',count:'Sermons 2, 11, 18'},fr:{title:'Justice et Gouvernance',desc:'Justice, consultation, droits des pauvres — la vision de l\'Islam pour la bonne gouvernance',count:'Sermons 2, 11, 18'}},
  {emoji:'👨‍👩‍👧‍👦',ar:{title:'المجتمع والأسرة',desc:'الأسرة، الأخوة، المرأة — بناء مجتمع إسلامي متماسك',count:'خطب ٤، ٥، ١٤'},en:{title:'Society & Family',desc:'Family, brotherhood, women — building a cohesive Islamic society',count:'Sermons 4, 5, 14'},fr:{title:'Societe et Famille',desc:'Famille, fraternite, femmes — construire une societe islamique cohesive',count:'Sermons 4, 5, 14'}},
  {emoji:'🌍',ar:{title:'الإسلام والعالم',desc:'الرسالة العالمية، الدفاع عن الإسلام، السلام — الإسلام في الساحة الدولية',count:'خطب ٧، ٨، ١٥'},en:{title:'Islam & the World',desc:'Universal message, defending Islam, peace — Islam on the world stage',count:'Sermons 7, 8, 15'},fr:{title:'Islam et le Monde',desc:'Message universel, defense de l\'Islam, paix — l\'Islam sur la scene mondiale',count:'Sermons 7, 8, 15'}},
  {emoji:'📚',ar:{title:'العلم والتجديد',desc:'طلب العلم، الاجتهاد، القرآن منهج حياة — فكر الشيخ التنويري',count:'خطب ٣، ١٣، ١٦'},en:{title:'Knowledge & Renewal',desc:'Seeking knowledge, ijtihad, Quran as a way of life — the Sheikh\'s enlightened thought',count:'Sermons 3, 13, 16'},fr:{title:'Savoir et Renouveau',desc:'Quete du savoir, ijtihad, Coran comme mode de vie — la pensee eclairee du Sheikh',count:'Sermons 3, 13, 16'}},
  {emoji:'🌱',ar:{title:'الأخلاق والروحانية',desc:'الرحمة، التوبة، الوقت، التوازن — القيم الروحية في الخطب',count:'خطب ٩، ١٠، ١٢، ١٩، ٢٠'},en:{title:'Ethics & Spirituality',desc:'Mercy, repentance, time, balance — spiritual values in the sermons',count:'Sermons 9, 10, 12, 19, 20'},fr:{title:'Ethique et Spiritualite',desc:'Misericorde, repentir, temps, equilibre — valeurs spirituelles dans les sermons',count:'Sermons 9, 10, 12, 19, 20'}},
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل تحافظ على الصلوات الخمس في وقتها؟',en:'Do you maintain the five daily prayers on time?',fr:'Maintenez-vous les cinq prieres quotidiennes a l\'heure ?'},
  {ar:'هل تقرأ القرآن يومياً ولو صفحة واحدة؟',en:'Do you read the Quran daily, even one page?',fr:'Lisez-vous le Coran quotidiennement, meme une page ?'},
  {ar:'هل تسكت عن الظلم عندما تراه؟',en:'Do you stay silent when you witness injustice?',fr:'Restez-vous silencieux face a l\'injustice ?'},
  {ar:'هل تعامل الناس بالرحمة والرفق؟',en:'Do you treat people with mercy and kindness?',fr:'Traitez-vous les gens avec misericorde et bonte ?'},
  {ar:'هل تحرص على طلب العلم النافع؟',en:'Do you seek beneficial knowledge?',fr:'Cherchez-vous le savoir benefique ?'},
  {ar:'هل تتصدق على الفقراء بانتظام؟',en:'Do you give charity to the poor regularly?',fr:'Donnez-vous regulierement la charite aux pauvres ?'},
  {ar:'هل تضيع وقتك في اللهو والباطل؟',en:'Do you waste your time in idle pursuits?',fr:'Gaspillez-vous votre temps dans des futilites ?'},
  {ar:'هل تحرص على الأخوة والتكافل مع المسلمين؟',en:'Do you maintain brotherhood and solidarity with Muslims?',fr:'Maintenez-vous la fraternite et la solidarite avec les musulmans ?'},
  {ar:'هل تراجع نيتك قبل أعمالك؟',en:'Do you check your intentions before your actions?',fr:'Verifiez-vous vos intentions avant vos actions ?'},
  {ar:'هل توازن بين دينك ودنياك؟',en:'Do you balance your spiritual and worldly life?',fr:'Equilibrez-vous votre vie spirituelle et mondaine ?'},
];

// ═══════════════ DUAS ═══════════════
const DUAS = [
  {ar:{label:'دعاء الخطبة',text:'اللهم اجعل في قلبي نوراً وفي لساني نوراً واجعل في سمعي نوراً واجعل في بصري نوراً',tr:'O Allah, place light in my heart, light on my tongue, light in my hearing, and light in my sight'},en:{label:'Sermon Dua',text:'O Allah, place light in my heart, light on my tongue, light in my hearing, and light in my sight',tr:''},fr:{label:'Dua du Sermon',text:'O Allah, place la lumiere dans mon coeur, sur ma langue, dans mon ouie et dans ma vue',tr:''}},
  {ar:{label:'دعاء العلم',text:'اللهم علمني ما ينفعني وانفعني بما علمتني وزدني علماً',tr:'O Allah, teach me what benefits me, benefit me from what You taught me, and increase me in knowledge'},en:{label:'Knowledge Dua',text:'O Allah, teach me what benefits me, benefit me from what You taught me, and increase me in knowledge',tr:''},fr:{label:'Dua du Savoir',text:'O Allah, enseigne-moi ce qui me profite, fais-moi profiter de ce que Tu m\'as enseigne, et augmente mon savoir',tr:''}},
  {ar:{label:'دعاء الهداية',text:'اللهم اهدنا فيمن هديت وعافنا فيمن عافيت وتولنا فيمن توليت',tr:'O Allah, guide us among those You have guided, grant us health among those You have granted health'},en:{label:'Guidance Dua',text:'O Allah, guide us among those You have guided, grant us health among those You have granted health',tr:''},fr:{label:'Dua de la Guidance',text:'O Allah, guide-nous parmi ceux que Tu as guides, accorde-nous la sante parmi ceux a qui Tu l\'as accordee',tr:''}},
  {ar:{label:'دعاء التوبة',text:'اللهم إنك عفو كريم تحب العفو فاعف عنا',tr:'O Allah, You are pardoning and generous, You love to pardon, so pardon us'},en:{label:'Repentance Dua',text:'O Allah, You are pardoning and generous, You love to pardon, so pardon us',tr:''},fr:{label:'Dua du Repentir',text:'O Allah, Tu es Celui qui pardonne et Tu es genereux, Tu aimes le pardon, alors pardonne-nous',tr:''}},
];

// ═══════════════ GLOBALS ═══════════════
let lang = localStorage.getItem('kg-lang') || 'ar';
let theme = localStorage.getItem('kg-theme') || 'teal';
const themes = ['teal','night','sage'];
const themeIcons = ['🕌','🌙','🌿'];
const themeNames = {teal:lang==='ar'?'أزرق مخضر':'Teal',night:lang==='ar'?'ليلي':'Night',sage:lang==='ar'?'مريمية':'Sage'};

// ═══════════════ SOUNDS ═══════════════
function playSound(type) { /* lightweight sound placeholder */ }

// ═══════════════ TOAST ═══════════════
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (!t || !m) return;
  m.textContent = msg; t.style.display = 'block';
  setTimeout(() => { t.style.display = 'none'; }, 2500);
}

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('kg-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabTopics', t.tabTopics);
  set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('topicsTitle', t.topicsTitle); set('topicsDesc', t.topicsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  renderHome(); renderCards(); renderTopics(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) featuresEl.innerHTML = T[l].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`).join('');
}

// ═══════════════ THEME ═══════════════
function setTheme(t) { theme = t; document.documentElement.dataset.theme = t; localStorage.setItem('kg-theme', t); const idx = themes.indexOf(t); const el = document.getElementById('themeIcon'); if (el) el.textContent = themeIcons[idx]; }
function cycleTheme() { const idx = (themes.indexOf(theme) + 1) % themes.length; setTheme(themes[idx]); showToast(themeNames[themes[idx]]); playSound('theme'); }

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER FUNCTIONS ═══════════════
function renderHome() {
  const t = T[lang]; const dayIdx = new Date().getDate() % CARDS.length; const c = CARDS[dayIdx]; const cd = c[lang];
  document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${cd.title}</div><div class="daily-body">${cd.desc}</div><div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>`;
  const sections = [{icon:'🎤',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ مقتطفاً':lang==='fr'?'20 extraits':'20 excerpts'},{icon:'📂',tab:'topics',title:t.tabTopics,desc:lang==='ar'?'المحاور الكبرى':lang==='fr'?'Themes majeurs':'Major themes'},{icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر نفسك':lang==='fr'?'Testez-vous':'Test yourself'},{icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب':lang==='fr'?'Le livre':'The book'}];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `<div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()"><span class="hc-icon">${s.icon}</span><div class="hc-title">${s.title}</div><div class="hc-desc">${s.desc}</div></div>`).join('');
}

function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => { const d = c[lang]; return `<div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}"><div class="principle-head" onclick="toggleCard('card-${c.id}')"><span class="principle-num">${c.id}</span><span class="principle-emoji">${c.emoji}</span><span class="principle-title">${d.title}</span><span class="principle-chev">&#9660;</span></div><div class="principle-body"><div class="principle-inner"><p class="principle-desc">${d.desc}</p>${d.verse ? `<div class="verse-box"><div class="verse-arabic">${d.verse}</div></div>` : ''}<div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div><button class="share-btn" onclick="event.stopPropagation();shareCard(${i})"><span class="share-icon">&#128279;</span> ${t.share}</button></div></div></div>`; }).join('');
  document.getElementById('cardsContainer').innerHTML = searchBar + cards;
}

function renderTopics() {
  document.getElementById('topicsContainer').innerHTML = TOPICS_DATA.map(t => { const d = t[lang]; return `<div class="anxiety-card scroll-reveal"><div class="anxiety-header"><span class="anxiety-emoji">${t.emoji}</span><span class="anxiety-title">${d.title}</span></div><div class="anxiety-solution"><span class="anxiety-label">${d.count}</span>${d.desc}</div></div>`; }).join('');
}

function toggleCard(id) { const c = document.getElementById(id); if (c) c.classList.toggle('open'); playSound('click'); }
function filterCards(q) { const s = q.toLowerCase().trim(); document.querySelectorAll('.principle-card').forEach(c => { const st = c.dataset.search || ''; const tt = c.querySelector('.principle-title'); const t = tt ? tt.textContent.toLowerCase() : ''; c.style.display = !s || st.includes(s) || t.includes(s) ? '' : 'none'; }); }
async function shareCard(idx) { const c = CARDS[idx]; const d = c[lang]; const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n— خطب الغزالي`; if (navigator.share) { try { await navigator.share({ title: d.title, text }); } catch(e) {} } else { try { await navigator.clipboard.writeText(text); showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!'); } catch(e) {} } }

function renderQuiz() {
  const t = T[lang]; const container = document.getElementById('quizContainer');
  container.innerHTML = QUIZ.map((q, i) => `<div class="quiz-question scroll-reveal" id="quiz-q-${i}"><div class="quiz-q-text">${i+1}. ${q[lang]}</div><div class="quiz-options"><button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button><button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button><button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button></div></div>`).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden'); window._quizAnswers = {};
}
function selectQuizOpt(qi, val) { window._quizAnswers[qi] = val; document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => o.classList.toggle('selected', [2,1,0][oi] === val)); playSound('click'); }
function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) { showToast(lang==='ar'?'أجب على جميع الأسئلة':lang==='fr'?'Repondez a toutes les questions':'Answer all questions'); return; }
  const invertedQs = [2, 6]; let score = 0;
  Object.entries(answers).forEach(([qi, v]) => { score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v; });
  const max = QUIZ.length * 2; const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) { emoji='🌟'; title=lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!'; desc=lang==='ar'?'أنت على درب الشيخ الغزالي في فهم شؤون الدين والحياة!':lang==='fr'?'Vous suivez le chemin du Sheikh al-Ghazali !':'You follow Sheikh al-Ghazali\'s path!'; }
  else if (pct >= 50) { emoji='🕌'; title=lang==='ar'?'جيد':lang==='fr'?'Bien':'Good'; desc=lang==='ar'?'لديك فهم جيد لكن هناك مجال للتعمق.':lang==='fr'?'Vous avez une bonne comprehension mais il y a place pour approfondir.':'Good understanding but room to grow.'; }
  else { emoji='📚'; title=lang==='ar'?'تحتاج مراجعة':lang==='fr'?'A revoir':'Needs Review'; desc=lang==='ar'?'راجع خطب الشيخ وتعمق في المواضيع.':lang==='fr'?'Revoyez les sermons et approfondissez.':'Review the sermons and study deeper.'; }
  const result = document.getElementById('quizResult'); result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${pct}%</div><div class="qr-title">${title}</div><div class="qr-desc">${desc}</div><button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' }); playSound('success');
}

function renderAbout() {
  const about = {
    ar: { disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة.', authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦', authorBio:'عالم ومفكر إسلامي مصري بارز. ألّف أكثر من ٩٤ كتاباً. عُرف بخطبه المؤثرة التي جمعت بين عمق الفكر وبلاغة الأسلوب.', bookTitle:'عن الكتاب', bookDesc:'"خطب الغزالي في شؤون الدين والحياة" مجموعة من أروع خطب الشيخ محمد الغزالي التي ألقاها في مناسبات مختلفة. تغطي موضوعات الإيمان والعبادة والعدل والأسرة والمجتمع والعلم.', sourcesTitle:'المصادر', sources:['كتاب "خطب الغزالي" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم'], contact:'تواصل: abdelhak.bourdim@gmail.com' },
    en: { disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'A prominent Egyptian Islamic scholar and thinker. Author of 94+ books. Known for his influential sermons that combined depth of thought with eloquent style.', bookTitle:'About the Book', bookDesc:'"Ghazali\'s Sermons on Matters of Faith and Life" is a collection of the Sheikh\'s finest sermons delivered on various occasions, covering faith, worship, justice, family, society, and knowledge.', sourcesTitle:'Sources', sources:['"Ghazali\'s Sermons" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim'], contact:'Contact: abdelhak.bourdim@gmail.com' },
    fr: { disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Un eminent savant et penseur islamique egyptien. Auteur de plus de 94 livres. Connu pour ses sermons influents alliant profondeur de pensee et eloquence.', bookTitle:'A Propos du Livre', bookDesc:'"Les Sermons d\'al-Ghazali sur les affaires de la foi et de la vie" est une collection des plus beaux sermons du Sheikh couvrant la foi, le culte, la justice, la famille, la societe et le savoir.', sourcesTitle:'Sources', sources:['"Les Sermons d\'al-Ghazali" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim'], contact:'Contact : abdelhak.bourdim@gmail.com' }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">🎤</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي.'},{title:'📚 المصادر',body:'كتاب "خطب الغزالي" للشيخ محمد الغزالي، القرآن الكريم.'},{title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ مقتطفاً، ٦ محاور، اختبار ذاتي.'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share al-Ghazali\'s wisdom.'},{title:'📚 Sources',body:'"Ghazali\'s Sermons" by Sheikh al-Ghazali, the Holy Quran.'},{title:'✨ Features',body:'Three languages, 3 themes, 20 excerpts, 6 topics, quiz.'}],
    fr: [{title:'⚠️ Avis',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse d\'al-Ghazali.'},{title:'📚 Sources',body:'"Les Sermons d\'al-Ghazali" par le Sheikh al-Ghazali, le Saint Coran.'},{title:'✨ Fonctionnalites',body:'Trois langues, 3 themes, 20 extraits, 6 themes, quiz.'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div>${dd.tr ? `<div class="dua-item-tr">${dd.tr}</div>` : ''}</div>`; }).join('');
}

// ═══════════════ HELP & DUA PANELS ═══════════════
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }

// ═══════════════ SCROLL ═══════════════
function initScroll() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
  const observer = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); }); }, { threshold: 0.1 });
  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

// ═══════════════ TICKER ═══════════════
function initTicker() {
  const items = CARDS.slice(0, 10).map(c => c[lang].title);
  const ticker = document.getElementById('tickerText');
  if (ticker) { const text = items.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;&#8226;</span>`).join(''); ticker.innerHTML = text + text; ticker.style.animation = `tickerMarquee ${items.length * 4}s linear infinite`; }
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas'); if (!canvas) return;
  canvas.style.display = 'block'; const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = []; const colors = ['#00695C','#26A69A','#80CBC4','#004D40','#E8A040','#66BB6A'];
  for (let i = 0; i < 120; i++) particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-0.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-0.5)*10});
  let frame = 0;
  function draw() { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } }
  draw();
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme); setLang(lang); initTabs(); initSplash(); initTicker();
  setTimeout(initScroll, 300);
});
