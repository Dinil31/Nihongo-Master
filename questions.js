// --- DATA STRUCTURE: Minna No Nihongo Vocabulary ---
const minnaNoNihongoData = {
    "Lesson 1": [
        {
            "question": "I",
            "options": [
                "［どうぞ］よろしく［おねがいします］。",
                "わたし",
                "みなさん",
                "いいえ"
            ],
            "correctIndex": 1,
            "explanation": "「わたし」 means \"I\"."
        },
        {
            "question": "you",
            "options": [
                "あなた",
                "［どうぞ］よろしく［おねがいします］。",
                "いしゃ",
                "インド"
            ],
            "correctIndex": 0,
            "explanation": "「あなた」 means \"you\"."
        },
        {
            "question": "that person, he, she (あの かた is the polite equivalent of あの ひと)",
            "options": [
                "あの ひと（あの かた）",
                "かいしゃいん",
                "ぎんこういん",
                "いいえ"
            ],
            "correctIndex": 0,
            "explanation": "「あの ひと（あの かた）」 (あの 人（あの 方）) means \"that person, he, she (あの かた is the polite equivalent of あの ひと)\"."
        },
        {
            "question": "Mr., Ms. (suffix added to a name for expressing politeness)",
            "options": [
                "しつれいですが",
                "わたしたち",
                "アメリカ",
                "～さん"
            ],
            "correctIndex": 3,
            "explanation": "「～さん」 means \"Mr., Ms. (suffix added to a name for expressing politeness)\"."
        },
        {
            "question": "(suffix often added to a child's name instead of ～さん)",
            "options": [
                "でんき",
                "～ちゃん",
                "びょういん",
                "～から きました。"
            ],
            "correctIndex": 1,
            "explanation": "「～ちゃん」 means \"(suffix often added to a child's name instead of ～さん)\"."
        },
        {
            "question": "(suffix meaning 'a national of'; e.g. アメリカじん, an American)",
            "options": [
                "インド",
                "IMC／パワーでんき／ブラジルエアー",
                "～じん",
                "だれ（どなた）"
            ],
            "correctIndex": 2,
            "explanation": "「～じん」 (～人) means \"(suffix meaning 'a national of'; e.g. アメリカじん, an American)\"."
        },
        {
            "question": "teacher, instructor (not used when referring to one's own job)",
            "options": [
                "タイ",
                "せんせい",
                "フランス",
                "かいしゃいん"
            ],
            "correctIndex": 1,
            "explanation": "「せんせい」 (先生) means \"teacher, instructor (not used when referring to one's own job)\"."
        },
        {
            "question": "teacher, instructor",
            "options": [
                "インドネシア",
                "きょうし",
                "AKC",
                "ぎんこういん"
            ],
            "correctIndex": 1,
            "explanation": "「きょうし」 (教師) means \"teacher, instructor\"."
        },
        {
            "question": "student",
            "options": [
                "だれ（どなた）",
                "こうべびょういん",
                "がくせい",
                "みなさん"
            ],
            "correctIndex": 2,
            "explanation": "「がくせい」 (学生) means \"student\"."
        },
        {
            "question": "company employee",
            "options": [
                "ぎんこういん",
                "しつれいですが",
                "かいしゃいん",
                "あなた"
            ],
            "correctIndex": 2,
            "explanation": "「かいしゃいん」 (会社員) means \"company employee\"."
        },
        {
            "question": "employee of ～ company (used with a company's name, e.g. IMC の しゃいん)",
            "options": [
                "ドイツ",
                "しゃいん",
                "かいしゃいん",
                "フランス"
            ],
            "correctIndex": 1,
            "explanation": "「しゃいん」 (社員) means \"employee of ～ company (used with a company's name, e.g. IMC の しゃいん)\"."
        },
        {
            "question": "bank employee",
            "options": [
                "ブラジル",
                "ぎんこういん",
                "さくらだいがく／ふじだいがく",
                "フランス"
            ],
            "correctIndex": 1,
            "explanation": "「ぎんこういん」 (銀行員) means \"bank employee\"."
        },
        {
            "question": "[medical] doctor",
            "options": [
                "～さん",
                "いしゃ",
                "みなさん",
                "はい"
            ],
            "correctIndex": 1,
            "explanation": "「いしゃ」 (医者) means \"[medical] doctor\"."
        },
        {
            "question": "researcher, scholar",
            "options": [
                "アメリカ",
                "おなまえは？",
                "～じん",
                "けんきゅうしゃ"
            ],
            "correctIndex": 3,
            "explanation": "「けんきゅうしゃ」 (研究者) means \"researcher, scholar\"."
        },
        {
            "question": "university",
            "options": [
                "みなさん",
                "だいがく",
                "こうべびょういん",
                "はい"
            ],
            "correctIndex": 1,
            "explanation": "「だいがく」 (大学) means \"university\"."
        },
        {
            "question": "hospital",
            "options": [
                "あなた",
                "びょういん",
                "～じん",
                "あの ひと（あの かた）"
            ],
            "correctIndex": 1,
            "explanation": "「びょういん」 (病院) means \"hospital\"."
        },
        {
            "question": "who (どなた is the polite equivalent of だれ)",
            "options": [
                "だれ（どなた）",
                "こちらは ～さんです。",
                "あなた",
                "でんき"
            ],
            "correctIndex": 0,
            "explanation": "「だれ（どなた）」 means \"who (どなた is the polite equivalent of だれ)\"."
        },
        {
            "question": "－ years old",
            "options": [
                "がくせい",
                "ちゅうごく",
                "－さい",
                "きょうし"
            ],
            "correctIndex": 2,
            "explanation": "「－さい」 (－歳) means \"－ years old\"."
        },
        {
            "question": "how old (おいくつ is the polite equivalent of なんさい)",
            "options": [
                "－さい",
                "こうべびょういん",
                "なんさい（おいくつ）",
                "アメリカ"
            ],
            "correctIndex": 2,
            "explanation": "「なんさい（おいくつ）」 (何歳) means \"how old (おいくつ is the polite equivalent of なんさい)\"."
        },
        {
            "question": "yes",
            "options": [
                "さくらだいがく／ふじだいがく",
                "はい",
                "でんき",
                "かんこく"
            ],
            "correctIndex": 1,
            "explanation": "「はい」 means \"yes\"."
        },
        {
            "question": "no",
            "options": [
                "いいえ",
                "かいしゃいん",
                "なんさい（おいくつ）",
                "あなた"
            ],
            "correctIndex": 0,
            "explanation": "「いいえ」 means \"no\"."
        },
        {
            "question": "How do you do? (lit. I am meeting you for the first time. Usually used as the first phrase when introducing oneself.)",
            "options": [
                "はじめまして。",
                "わたし",
                "イギリス",
                "いしゃ"
            ],
            "correctIndex": 0,
            "explanation": "「はじめまして。」 (初めまして。) means \"How do you do? (lit. I am meeting you for the first time. Usually used as the first phrase when introducing oneself.)\"."
        },
        {
            "question": "I'm from ～ (country)",
            "options": [
                "がくせい",
                "わたし",
                "～から きました。",
                "インドネシア"
            ],
            "correctIndex": 2,
            "explanation": "「～から きました。」 (～から 来ました。) means \"I'm from ～ (country)\"."
        },
        {
            "question": "Pleased to meet you. (lit. Please be nice to me. Usually used at the end of a self-introduction.)",
            "options": [
                "いしゃ",
                "なんさい（おいくつ）",
                "［どうぞ］よろしく［おねがいします］。",
                "アメリカ"
            ],
            "correctIndex": 2,
            "explanation": "「［どうぞ］よろしく［おねがいします］。」 (［どうぞ］よろしく［お願いします］。) means \"Pleased to meet you. (lit. Please be nice to me. Usually used at the end of a self-introduction.)\"."
        },
        {
            "question": "Excuse me, but (used when asking someone for personal information such as their name or address)",
            "options": [
                "にほん",
                "［どうぞ］よろしく［おねがいします］。",
                "しつれいですが",
                "だれ（どなた）"
            ],
            "correctIndex": 2,
            "explanation": "「しつれいですが」 (失礼ですが) means \"Excuse me, but (used when asking someone for personal information such as their name or address)\"."
        },
        {
            "question": "May I have your name?",
            "options": [
                "おなまえは？",
                "けんきゅうしゃ",
                "わたしたち",
                "～から きました。"
            ],
            "correctIndex": 0,
            "explanation": "「おなまえは？」 (お名前は？) means \"May I have your name?\"."
        },
        {
            "question": "This is Mr./Ms. ～.",
            "options": [
                "わたし",
                "こちらは ～さんです。",
                "みなさん",
                "けんきゅうしゃ"
            ],
            "correctIndex": 1,
            "explanation": "「こちらは ～さんです。」 means \"This is Mr./Ms. ～.\"."
        },
        {
            "question": "U.S.A.",
            "options": [
                "アメリカ",
                "インドネシア",
                "けんきゅうしゃ",
                "おなまえは？"
            ],
            "correctIndex": 0,
            "explanation": "「アメリカ」 means \"U.S.A.\"."
        },
        {
            "question": "U.K.",
            "options": [
                "イギリス",
                "エンジニア",
                "いいえ",
                "［どうぞ］よろしく［おねがいします］。"
            ],
            "correctIndex": 0,
            "explanation": "「イギリス」 means \"U.K.\"."
        },
        {
            "question": "India",
            "options": [
                "でんき",
                "－さい",
                "インド",
                "あの ひと（あの かた）"
            ],
            "correctIndex": 2,
            "explanation": "「インド」 means \"India\"."
        },
        {
            "question": "Indonesia",
            "options": [
                "あなた",
                "インドネシア",
                "なんさい（おいくつ）",
                "アメリカ"
            ],
            "correctIndex": 1,
            "explanation": "「インドネシア」 means \"Indonesia\"."
        },
        {
            "question": "South Korea",
            "options": [
                "おなまえは？",
                "－さい",
                "こうべびょういん",
                "かんこく"
            ],
            "correctIndex": 3,
            "explanation": "「かんこく」 (韓国) means \"South Korea\"."
        },
        {
            "question": "Thailand",
            "options": [
                "しつれいですが",
                "タイ",
                "はじめまして。",
                "ちゅうごく"
            ],
            "correctIndex": 1,
            "explanation": "「タイ」 means \"Thailand\"."
        },
        {
            "question": "China",
            "options": [
                "ドイツ",
                "ちゅうごく",
                "～じん",
                "［どうぞ］よろしく［おねがいします］。"
            ],
            "correctIndex": 1,
            "explanation": "「ちゅうごく」 (中国) means \"China\"."
        },
        {
            "question": "Germany",
            "options": [
                "ドイツ",
                "～じん",
                "～ちゃん",
                "こうべびょういん"
            ],
            "correctIndex": 0,
            "explanation": "「ドイツ」 means \"Germany\"."
        },
        {
            "question": "Japan",
            "options": [
                "にほん",
                "あの ひと（あの かた）",
                "しつれいですが",
                "みなさん"
            ],
            "correctIndex": 0,
            "explanation": "「にほん」 (日本) means \"Japan\"."
        },
        {
            "question": "Brazil",
            "options": [
                "IMC／パワーでんき／ブラジルエアー",
                "けんきゅうしゃ",
                "ブラジル",
                "あなた"
            ],
            "correctIndex": 2,
            "explanation": "「ブラジル」 means \"Brazil\"."
        },
        {
            "question": "fictitious companies",
            "options": [
                "なんさい（おいくつ）",
                "アメリカ",
                "こちらは ～さんです。",
                "IMC／パワーでんき／ブラジルエアー"
            ],
            "correctIndex": 3,
            "explanation": "「IMC／パワーでんき／ブラジルエアー」 (IMC／パワー電気／ブラジルエアー) means \"fictitious companies\"."
        },
        {
            "question": "a fictitious institute",
            "options": [
                "AKC",
                "わたしたち",
                "かいしゃいん",
                "ちゅうごく"
            ],
            "correctIndex": 0,
            "explanation": "「AKC」 means \"a fictitious institute\"."
        },
        {
            "question": "a fictitious hospital",
            "options": [
                "にほん",
                "IMC／パワーでんき／ブラジルエアー",
                "ちゅうごく",
                "こうべびょういん"
            ],
            "correctIndex": 3,
            "explanation": "「こうべびょういん」 (神戸病院) means \"a fictitious hospital\"."
        },
        {
            "question": "fictitious universities",
            "options": [
                "さくらだいがく／ふじだいがく",
                "かいしゃいん",
                "きょうし",
                "いしゃ"
            ],
            "correctIndex": 0,
            "explanation": "「さくらだいがく／ふじだいがく」 (さくら大学／富士大学) means \"fictitious universities\"."
        },
        {
            "question": "we",
            "options": [
                "かいしゃいん",
                "わたしたち",
                "こちらは ～さんです。",
                "－さい"
            ],
            "correctIndex": 1,
            "explanation": "「わたしたち」 means \"we\"."
        },
        {
            "question": "ladies and gentlemen, all of you",
            "options": [
                "みなさん",
                "なんさい（おいくつ）",
                "にほん",
                "ブラジル"
            ],
            "correctIndex": 0,
            "explanation": "「みなさん」 (皆さん) means \"ladies and gentlemen, all of you\"."
        },
        {
            "question": "(suffix often added to a boy's name)",
            "options": [
                "AKC",
                "こうべびょういん",
                "～くん",
                "あなた"
            ],
            "correctIndex": 2,
            "explanation": "「～くん」 (～君) means \"(suffix often added to a boy's name)\"."
        },
        {
            "question": "engineer",
            "options": [
                "タイ",
                "おなまえは？",
                "～じん",
                "エンジニア"
            ],
            "correctIndex": 3,
            "explanation": "「エンジニア」 means \"engineer\"."
        },
        {
            "question": "electricity, light",
            "options": [
                "あの ひと（あの かた）",
                "こちらは ～さんです。",
                "でんき",
                "かんこく"
            ],
            "correctIndex": 2,
            "explanation": "「でんき」 (電気) means \"electricity, light\"."
        },
        {
            "question": "France",
            "options": [
                "かんこく",
                "フランス",
                "－さい",
                "がくせい"
            ],
            "correctIndex": 1,
            "explanation": "「フランス」 means \"France\"."
        }
    ],
    "Lesson 2": [
        {
            "question": "this (thing here)",
            "options": [
                "これ",
                "いす",
                "ちがいます。",
                "ラジオ"
            ],
            "correctIndex": 0,
            "explanation": "「これ」 means \"this (thing here)\"."
        },
        {
            "question": "that (thing near the listener)",
            "options": [
                "それ",
                "あ",
                "こちらこそ［どうぞ］よろしく［おねがいします］。",
                "にほんご"
            ],
            "correctIndex": 0,
            "explanation": "「それ」 means \"that (thing near the listener)\"."
        },
        {
            "question": "that (thing over there)",
            "options": [
                "なん",
                "あれ",
                "あの ～",
                "そう"
            ],
            "correctIndex": 1,
            "explanation": "「あれ」 means \"that (thing over there)\"."
        },
        {
            "question": "this ～, this ～ here",
            "options": [
                "ほん",
                "この ～",
                "そうですか。",
                "あの ～"
            ],
            "correctIndex": 1,
            "explanation": "「この ～」 means \"this ～, this ～ here\"."
        },
        {
            "question": "that ～, that ～ near the listener",
            "options": [
                "その ～",
                "かばん",
                "CD",
                "かぎ"
            ],
            "correctIndex": 0,
            "explanation": "「その ～」 means \"that ～, that ～ near the listener\"."
        },
        {
            "question": "that ～, that ～ over there",
            "options": [
                "あの ～",
                "テレホンカード",
                "ざっし",
                "どうも。"
            ],
            "correctIndex": 0,
            "explanation": "「あの ～」 means \"that ～, that ～ over there\"."
        },
        {
            "question": "book",
            "options": [
                "ほんの きもちです。",
                "それ",
                "ほん",
                "かさ"
            ],
            "correctIndex": 2,
            "explanation": "「ほん」 (本) means \"book\"."
        },
        {
            "question": "dictionary",
            "options": [
                "じどうしゃ",
                "じしょ",
                "ほんの きもちです。",
                "カード"
            ],
            "correctIndex": 1,
            "explanation": "「じしょ」 (辞書) means \"dictionary\"."
        },
        {
            "question": "magazine",
            "options": [
                "ほん",
                "その ～",
                "どうぞ。",
                "ざっし"
            ],
            "correctIndex": 3,
            "explanation": "「ざっし」 (雑誌) means \"magazine\"."
        },
        {
            "question": "newspaper",
            "options": [
                "しんぶん",
                "なん",
                "ほん",
                "コンピューター"
            ],
            "correctIndex": 0,
            "explanation": "「しんぶん」 (新聞) means \"newspaper\"."
        },
        {
            "question": "notebook",
            "options": [
                "ノート",
                "えんぴつ",
                "ほん",
                "つくえ"
            ],
            "correctIndex": 0,
            "explanation": "「ノート」 means \"notebook\"."
        },
        {
            "question": "personal organiser",
            "options": [
                "てちょう",
                "かさ",
                "くるま",
                "なん"
            ],
            "correctIndex": 0,
            "explanation": "「てちょう」 (手帳) means \"personal organiser\"."
        },
        {
            "question": "business card",
            "options": [
                "テープレコーダー",
                "めいし",
                "カード",
                "じどうしゃ"
            ],
            "correctIndex": 1,
            "explanation": "「めいし」 (名刺) means \"business card\"."
        },
        {
            "question": "(credit) card",
            "options": [
                "カード",
                "にほんご",
                "しんぶん",
                "ちがいます。"
            ],
            "correctIndex": 0,
            "explanation": "「カード」 means \"(credit) card\"."
        },
        {
            "question": "pencil",
            "options": [
                "かさ",
                "ボールペン",
                "えんぴつ",
                "コンピューター"
            ],
            "correctIndex": 2,
            "explanation": "「えんぴつ」 (鉛筆) means \"pencil\"."
        },
        {
            "question": "ballpoint pen",
            "options": [
                "ざっし",
                "これから おせわに なります。",
                "こちらこそ［どうぞ］よろしく［おねがいします］。",
                "ボールペン"
            ],
            "correctIndex": 3,
            "explanation": "「ボールペン」 means \"ballpoint pen\"."
        },
        {
            "question": "mechanical pencil, propelling pencil",
            "options": [
                "どうぞ。",
                "シャープペンシル",
                "ノート",
                "それ"
            ],
            "correctIndex": 1,
            "explanation": "「シャープペンシル」 means \"mechanical pencil, propelling pencil\"."
        },
        {
            "question": "key",
            "options": [
                "にほんご",
                "あの ～",
                "これ",
                "かぎ"
            ],
            "correctIndex": 3,
            "explanation": "「かぎ」 means \"key\"."
        },
        {
            "question": "watch, clock",
            "options": [
                "とけい",
                "かぎ",
                "てちょう",
                "ほん"
            ],
            "correctIndex": 0,
            "explanation": "「とけい」 (時計) means \"watch, clock\"."
        },
        {
            "question": "umbrella",
            "options": [
                "しんぶん",
                "つくえ",
                "かさ",
                "じしょ"
            ],
            "correctIndex": 2,
            "explanation": "「かさ」 (傘) means \"umbrella\"."
        },
        {
            "question": "bag, briefcase",
            "options": [
                "つくえ",
                "かばん",
                "くるま",
                "～ご"
            ],
            "correctIndex": 1,
            "explanation": "「かばん」 means \"bag, briefcase\"."
        },
        {
            "question": "CD, compact disc",
            "options": [
                "CD",
                "ほんの きもちです。",
                "えんぴつ",
                "［カセット］テープ"
            ],
            "correctIndex": 0,
            "explanation": "「CD」 means \"CD, compact disc\"."
        },
        {
            "question": "television",
            "options": [
                "テレビ",
                "ちがいます。",
                "テレホンカード",
                "にほんご"
            ],
            "correctIndex": 0,
            "explanation": "「テレビ」 means \"television\"."
        },
        {
            "question": "radio",
            "options": [
                "ラジオ",
                "どうも。",
                "あれ",
                "あの ～"
            ],
            "correctIndex": 0,
            "explanation": "「ラジオ」 means \"radio\"."
        },
        {
            "question": "camera",
            "options": [
                "めいし",
                "カメラ",
                "あの ～",
                "いす"
            ],
            "correctIndex": 1,
            "explanation": "「カメラ」 means \"camera\"."
        },
        {
            "question": "computer",
            "options": [
                "えいご",
                "ラジオ",
                "えんぴつ",
                "コンピューター"
            ],
            "correctIndex": 3,
            "explanation": "「コンピューター」 means \"computer\"."
        },
        {
            "question": "car, vehicle",
            "options": [
                "めいし",
                "あれ",
                "くるま",
                "コーヒー"
            ],
            "correctIndex": 2,
            "explanation": "「くるま」 (車) means \"car, vehicle\"."
        },
        {
            "question": "desk",
            "options": [
                "［お］みやげ",
                "つくえ",
                "ほん",
                "ノート"
            ],
            "correctIndex": 1,
            "explanation": "「つくえ」 (机) means \"desk\"."
        },
        {
            "question": "chair",
            "options": [
                "ボールペン",
                "しんぶん",
                "いす",
                "［カセット］テープ"
            ],
            "correctIndex": 2,
            "explanation": "「いす」 means \"chair\"."
        },
        {
            "question": "chocolate",
            "options": [
                "これから おせわに なります。",
                "じしょ",
                "チョコレート",
                "あの ～"
            ],
            "correctIndex": 2,
            "explanation": "「チョコレート」 means \"chocolate\"."
        },
        {
            "question": "coffee",
            "options": [
                "コーヒー",
                "つくえ",
                "チョコレート",
                "めいし"
            ],
            "correctIndex": 0,
            "explanation": "「コーヒー」 means \"coffee\"."
        },
        {
            "question": "souvenir, present",
            "options": [
                "［お］みやげ",
                "じしょ",
                "かばん",
                "ラジオ"
            ],
            "correctIndex": 0,
            "explanation": "「［お］みやげ」 (［お］土産) means \"souvenir, present\"."
        },
        {
            "question": "the English language",
            "options": [
                "どうぞ。",
                "しんぶん",
                "えいご",
                "なん"
            ],
            "correctIndex": 2,
            "explanation": "「えいご」 (英語) means \"the English language\"."
        },
        {
            "question": "the Japanese language",
            "options": [
                "カード",
                "ほん",
                "にほんご",
                "それ"
            ],
            "correctIndex": 2,
            "explanation": "「にほんご」 (日本語) means \"the Japanese language\"."
        },
        {
            "question": "～ language",
            "options": [
                "チョコレート",
                "あ",
                "～ご",
                "そう"
            ],
            "correctIndex": 2,
            "explanation": "「～ご」 (～語) means \"～ language\"."
        },
        {
            "question": "what",
            "options": [
                "かばん",
                "あ",
                "なん",
                "てちょう"
            ],
            "correctIndex": 2,
            "explanation": "「なん」 (何) means \"what\"."
        },
        {
            "question": "so",
            "options": [
                "えっ",
                "ラジオ",
                "ほんの きもちです。",
                "そう"
            ],
            "correctIndex": 3,
            "explanation": "「そう」 means \"so\"."
        },
        {
            "question": "Er... (used to show hesitation)",
            "options": [
                "じしょ",
                "テレホンカード",
                "くるま",
                "あのう"
            ],
            "correctIndex": 3,
            "explanation": "「あのう」 means \"Er... (used to show hesitation)\"."
        },
        {
            "question": "Oh? What! (used when hearing something unexpected)",
            "options": [
                "くるま",
                "いす",
                "コンピューター",
                "えっ"
            ],
            "correctIndex": 3,
            "explanation": "「えっ」 means \"Oh? What! (used when hearing something unexpected)\"."
        },
        {
            "question": "Here you are. (used when offering someone something)",
            "options": [
                "あのう",
                "どうぞ。",
                "［カセット］テープ",
                "これ"
            ],
            "correctIndex": 1,
            "explanation": "「どうぞ。」 means \"Here you are. (used when offering someone something)\"."
        },
        {
            "question": "Thank you [very much].",
            "options": [
                "［どうも］ありがとう［ございます］。",
                "カメラ",
                "にほんご",
                "めいし"
            ],
            "correctIndex": 0,
            "explanation": "「［どうも］ありがとう［ございます］。」 means \"Thank you [very much].\"."
        },
        {
            "question": "I see.",
            "options": [
                "その ～",
                "そうですか。",
                "ざっし",
                "えんぴつ"
            ],
            "correctIndex": 1,
            "explanation": "「そうですか。」 means \"I see.\"."
        },
        {
            "question": "No, it isn't./You are wrong.",
            "options": [
                "～ご",
                "カメラ",
                "ちがいます。",
                "あれ"
            ],
            "correctIndex": 2,
            "explanation": "「ちがいます。」 (違います。) means \"No, it isn't./You are wrong.\"."
        },
        {
            "question": "Oh! (used when becoming aware of something)",
            "options": [
                "あのう",
                "あ",
                "とけい",
                "どうも。"
            ],
            "correctIndex": 1,
            "explanation": "「あ」 means \"Oh! (used when becoming aware of something)\"."
        },
        {
            "question": "Thank you in advance for your kindness.",
            "options": [
                "これから おせわに なります。",
                "［どうも］ありがとう［ございます］。",
                "えんぴつ",
                "えっ"
            ],
            "correctIndex": 0,
            "explanation": "「これから おせわに なります。」 (これから お世話に なります。) means \"Thank you in advance for your kindness.\"."
        },
        {
            "question": "Pleased to meet you, too. (response to［どうぞ］よろしく［おねがいします］。)",
            "options": [
                "ノート",
                "かぎ",
                "その ～",
                "こちらこそ［どうぞ］よろしく［おねがいします］。"
            ],
            "correctIndex": 3,
            "explanation": "「こちらこそ［どうぞ］よろしく［おねがいします］。」 (こちらこそ［どうぞ］よろしく［お願いします］。) means \"Pleased to meet you, too. (response to［どうぞ］よろしく［おねがいします］。)\"."
        },
        {
            "question": "telephone card",
            "options": [
                "そう",
                "テレホンカード",
                "これ",
                "てちょう"
            ],
            "correctIndex": 1,
            "explanation": "「テレホンカード」 means \"telephone card\"."
        },
        {
            "question": "[cassette] tape",
            "options": [
                "かぎ",
                "これ",
                "じどうしゃ",
                "［カセット］テープ"
            ],
            "correctIndex": 3,
            "explanation": "「［カセット］テープ」 means \"[cassette] tape\"."
        },
        {
            "question": "tape recorder",
            "options": [
                "その ～",
                "これ",
                "テレホンカード",
                "テープレコーダー"
            ],
            "correctIndex": 3,
            "explanation": "「テープレコーダー」 means \"tape recorder\"."
        },
        {
            "question": "automobile, car",
            "options": [
                "えいご",
                "あの ～",
                "にほんご",
                "じどうしゃ"
            ],
            "correctIndex": 3,
            "explanation": "「じどうしゃ」 (自動車) means \"automobile, car\"."
        },
        {
            "question": "It's nothing./It's a token of my gratitude.",
            "options": [
                "［お］みやげ",
                "テレホンカード",
                "ノート",
                "ほんの きもちです。"
            ],
            "correctIndex": 3,
            "explanation": "「ほんの きもちです。」 (ほんの 気持ちです。) means \"It's nothing./It's a token of my gratitude.\"."
        },
        {
            "question": "Well, thanks.",
            "options": [
                "どうも。",
                "これ",
                "［お］みやげ",
                "ほん"
            ],
            "correctIndex": 0,
            "explanation": "「どうも。」 means \"Well, thanks.\"."
        }
    ],
    "Lesson 3": [
        {
            "question": "here, this place",
            "options": [
                "どちら",
                "－えん",
                "ここ",
                "エスカレーター"
            ],
            "correctIndex": 2,
            "explanation": "「ここ」 means \"here, this place\"."
        },
        {
            "question": "there, that place near the listener",
            "options": [
                "そこ",
                "じどうはんばいき",
                "ワイン",
                "ロビー"
            ],
            "correctIndex": 0,
            "explanation": "「そこ」 means \"there, that place near the listener\"."
        },
        {
            "question": "that place over there",
            "options": [
                "ちか",
                "そちら",
                "でんわ",
                "あそこ"
            ],
            "correctIndex": 3,
            "explanation": "「あそこ」 means \"that place over there\"."
        },
        {
            "question": "where, what place",
            "options": [
                "どこ",
                "でんわ",
                "ロビー",
                "こちら"
            ],
            "correctIndex": 0,
            "explanation": "「どこ」 means \"where, what place\"."
        },
        {
            "question": "this way, this place (polite equivalent of ここ)",
            "options": [
                "ここ",
                "こちら",
                "スイス",
                "ネクタイ"
            ],
            "correctIndex": 1,
            "explanation": "「こちら」 means \"this way, this place (polite equivalent of ここ)\"."
        },
        {
            "question": "that way, that place near the listener (polite equivalent of そこ)",
            "options": [
                "じゃ",
                "－えん",
                "そちら",
                "［～を］みせて ください。"
            ],
            "correctIndex": 2,
            "explanation": "「そちら」 means \"that way, that place near the listener (polite equivalent of そこ)\"."
        },
        {
            "question": "that way, that place over there (polite equivalent of あそこ)",
            "options": [
                "あちら",
                "エレベーター",
                "なんがい",
                "いらっしゃいませ。"
            ],
            "correctIndex": 0,
            "explanation": "「あちら」 means \"that way, that place over there (polite equivalent of あそこ)\"."
        },
        {
            "question": "which way, where (polite equivalent of どこ)",
            "options": [
                "すみません。",
                "バンコク",
                "どちら",
                "MT／ヨーネン／アキックス"
            ],
            "correctIndex": 2,
            "explanation": "「どちら」 means \"which way, where (polite equivalent of どこ)\"."
        },
        {
            "question": "classroom",
            "options": [
                "－えん",
                "ベルリン",
                "あそこ",
                "きょうしつ"
            ],
            "correctIndex": 3,
            "explanation": "「きょうしつ」 (教室) means \"classroom\"."
        },
        {
            "question": "dining hall, canteen",
            "options": [
                "なんがい",
                "そちら",
                "しょくどう",
                "かいだん"
            ],
            "correctIndex": 2,
            "explanation": "「しょくどう」 (食堂) means \"dining hall, canteen\"."
        },
        {
            "question": "office",
            "options": [
                "じむしょ",
                "どこ",
                "［～を］ください。",
                "どうも。"
            ],
            "correctIndex": 0,
            "explanation": "「じむしょ」 (事務所) means \"office\"."
        },
        {
            "question": "conference room, meeting room",
            "options": [
                "どちら",
                "へや",
                "エスカレーター",
                "かいぎしつ"
            ],
            "correctIndex": 3,
            "explanation": "「かいぎしつ」 (会議室) means \"conference room, meeting room\"."
        },
        {
            "question": "reception desk",
            "options": [
                "そちら",
                "うけつけ",
                "うち",
                "どこ"
            ],
            "correctIndex": 1,
            "explanation": "「うけつけ」 (受付) means \"reception desk\"."
        },
        {
            "question": "lobby",
            "options": [
                "うりば",
                "ロビー",
                "かいだん",
                "ちか"
            ],
            "correctIndex": 1,
            "explanation": "「ロビー」 means \"lobby\"."
        },
        {
            "question": "room",
            "options": [
                "へや",
                "じどうはんばいき",
                "［～を］みせて ください。",
                "きょうしつ"
            ],
            "correctIndex": 0,
            "explanation": "「へや」 (部屋) means \"room\"."
        },
        {
            "question": "toilet, rest room",
            "options": [
                "しょくどう",
                "トイレ（おてあらい）",
                "うち",
                "じどうはんばいき"
            ],
            "correctIndex": 1,
            "explanation": "「トイレ（おてあらい）」 (トイレ（お手洗い）) means \"toilet, rest room\"."
        },
        {
            "question": "staircase",
            "options": [
                "ワイン",
                "かいだん",
                "フランス",
                "どこ"
            ],
            "correctIndex": 1,
            "explanation": "「かいだん」 (階段) means \"staircase\"."
        },
        {
            "question": "lift, elevator",
            "options": [
                "［お］くに",
                "エレベーター",
                "しんおおさか",
                "ひゃく"
            ],
            "correctIndex": 1,
            "explanation": "「エレベーター」 means \"lift, elevator\"."
        },
        {
            "question": "escalator",
            "options": [
                "MT／ヨーネン／アキックス",
                "しんおおさか",
                "せん",
                "エスカレーター"
            ],
            "correctIndex": 3,
            "explanation": "「エスカレーター」 means \"escalator\"."
        },
        {
            "question": "vending machine",
            "options": [
                "ワイン",
                "じどうはんばいき",
                "～で ございます。",
                "トイレ（おてあらい）"
            ],
            "correctIndex": 1,
            "explanation": "「じどうはんばいき」 (自動販売機) means \"vending machine\"."
        },
        {
            "question": "telephone handset, telephone call",
            "options": [
                "でんわ",
                "まん",
                "じゃ",
                "MT／ヨーネン／アキックス"
            ],
            "correctIndex": 0,
            "explanation": "「でんわ」 (電話) means \"telephone handset, telephone call\"."
        },
        {
            "question": "country",
            "options": [
                "［お］くに",
                "どうも。",
                "バンコク",
                "～で ございます。"
            ],
            "correctIndex": 0,
            "explanation": "「［お］くに」 (［お］国) means \"country\"."
        },
        {
            "question": "company",
            "options": [
                "ここ",
                "ジャカルタ",
                "かいしゃ",
                "でんわ"
            ],
            "correctIndex": 2,
            "explanation": "「かいしゃ」 (会社) means \"company\"."
        },
        {
            "question": "house, home",
            "options": [
                "かいぎしつ",
                "うち",
                "でんわ",
                "そこ"
            ],
            "correctIndex": 1,
            "explanation": "「うち」 means \"house, home\"."
        },
        {
            "question": "shoes",
            "options": [
                "ベルリン",
                "ひゃく",
                "－えん",
                "くつ"
            ],
            "correctIndex": 3,
            "explanation": "「くつ」 (靴) means \"shoes\"."
        },
        {
            "question": "tie, necktie",
            "options": [
                "トイレ（おてあらい）",
                "ネクタイ",
                "イタリア",
                "いくら"
            ],
            "correctIndex": 1,
            "explanation": "「ネクタイ」 means \"tie, necktie\"."
        },
        {
            "question": "wine",
            "options": [
                "いくら",
                "なんがい",
                "じどうはんばいき",
                "ワイン"
            ],
            "correctIndex": 3,
            "explanation": "「ワイン」 means \"wine\"."
        },
        {
            "question": "department, counter (in a department store, etc.)",
            "options": [
                "うりば",
                "きょうしつ",
                "ちか",
                "エレベーター"
            ],
            "correctIndex": 0,
            "explanation": "「うりば」 (売り場) means \"department, counter (in a department store, etc.)\"."
        },
        {
            "question": "basement",
            "options": [
                "こちら",
                "ちか",
                "ネクタイ",
                "どこ"
            ],
            "correctIndex": 1,
            "explanation": "「ちか」 (地下) means \"basement\"."
        },
        {
            "question": "-th floor",
            "options": [
                "－かい（－がい）",
                "じむしょ",
                "たばこ",
                "スイス"
            ],
            "correctIndex": 0,
            "explanation": "「－かい（－がい）」 (－階) means \"-th floor\"."
        },
        {
            "question": "what floor",
            "options": [
                "イタリア",
                "なんがい",
                "エレベーター",
                "すみません。"
            ],
            "correctIndex": 1,
            "explanation": "「なんがい」 (何階) means \"what floor\"."
        },
        {
            "question": "－ yen",
            "options": [
                "かいぎしつ",
                "ここ",
                "かいだん",
                "－えん"
            ],
            "correctIndex": 3,
            "explanation": "「－えん」 (－円) means \"－ yen\"."
        },
        {
            "question": "how much",
            "options": [
                "しんおおさか",
                "すみません。",
                "いくら",
                "うりば"
            ],
            "correctIndex": 2,
            "explanation": "「いくら」 means \"how much\"."
        },
        {
            "question": "hundred",
            "options": [
                "うち",
                "ひゃく",
                "－えん",
                "－かい（－がい）"
            ],
            "correctIndex": 1,
            "explanation": "「ひゃく」 (百) means \"hundred\"."
        },
        {
            "question": "thousand",
            "options": [
                "ちか",
                "せん",
                "ワイン",
                "フランス"
            ],
            "correctIndex": 1,
            "explanation": "「せん」 (千) means \"thousand\"."
        },
        {
            "question": "ten thousand",
            "options": [
                "イタリア",
                "じどうはんばいき",
                "まん",
                "しょくどう"
            ],
            "correctIndex": 2,
            "explanation": "「まん」 (万) means \"ten thousand\"."
        },
        {
            "question": "Excuse me.",
            "options": [
                "すみません。",
                "へや",
                "［～を］みせて ください。",
                "－えん"
            ],
            "correctIndex": 0,
            "explanation": "「すみません。」 means \"Excuse me.\"."
        },
        {
            "question": "Thanks.",
            "options": [
                "ここ",
                "どうも。",
                "［～を］みせて ください。",
                "いくら"
            ],
            "correctIndex": 1,
            "explanation": "「どうも。」 means \"Thanks.\"."
        },
        {
            "question": "Welcome./May I help you? (a greeting to a customer or a guest entering a shop, etc.)",
            "options": [
                "どうも。",
                "しんおおさか",
                "いらっしゃいませ。",
                "うりば"
            ],
            "correctIndex": 2,
            "explanation": "「いらっしゃいませ。」 means \"Welcome./May I help you? (a greeting to a customer or a guest entering a shop, etc.)\"."
        },
        {
            "question": "Please show me [～].",
            "options": [
                "じむしょ",
                "［～を］みせて ください。",
                "ワイン",
                "しょくどう"
            ],
            "correctIndex": 1,
            "explanation": "「［～を］みせて ください。」 (［～を］見せて ください。) means \"Please show me [～].\"."
        },
        {
            "question": "well, then, in that case",
            "options": [
                "－えん",
                "じゃ",
                "ワイン",
                "いらっしゃいませ。"
            ],
            "correctIndex": 1,
            "explanation": "「じゃ」 means \"well, then, in that case\"."
        },
        {
            "question": "Give me [～], please.",
            "options": [
                "まん",
                "［～を］ください。",
                "スイス",
                "せん"
            ],
            "correctIndex": 1,
            "explanation": "「［～を］ください。」 means \"Give me [～], please.\"."
        },
        {
            "question": "Italy",
            "options": [
                "イタリア",
                "くつ",
                "エスカレーター",
                "なんがい"
            ],
            "correctIndex": 0,
            "explanation": "「イタリア」 means \"Italy\"."
        },
        {
            "question": "Switzerland",
            "options": [
                "そちら",
                "すみません。",
                "しょくどう",
                "スイス"
            ],
            "correctIndex": 3,
            "explanation": "「スイス」 means \"Switzerland\"."
        },
        {
            "question": "France",
            "options": [
                "せん",
                "しんおおさか",
                "フランス",
                "そこ"
            ],
            "correctIndex": 2,
            "explanation": "「フランス」 means \"France\"."
        },
        {
            "question": "Jakarta",
            "options": [
                "たばこ",
                "ジャカルタ",
                "でんわ",
                "へや"
            ],
            "correctIndex": 1,
            "explanation": "「ジャカルタ」 means \"Jakarta\"."
        },
        {
            "question": "Bangkok",
            "options": [
                "せん",
                "なんがい",
                "しんおおさか",
                "バンコク"
            ],
            "correctIndex": 3,
            "explanation": "「バンコク」 means \"Bangkok\"."
        },
        {
            "question": "Berlin",
            "options": [
                "ベルリン",
                "じゃ",
                "ジャカルタ",
                "［～を］みせて ください。"
            ],
            "correctIndex": 0,
            "explanation": "「ベルリン」 means \"Berlin\"."
        },
        {
            "question": "name of a station in Osaka",
            "options": [
                "しんおおさか",
                "そちら",
                "どこ",
                "バンコク"
            ],
            "correctIndex": 0,
            "explanation": "「しんおおさか」 (新大阪) means \"name of a station in Osaka\"."
        },
        {
            "question": "tobacco, cigarette",
            "options": [
                "たばこ",
                "［お］くに",
                "～で ございます。",
                "－えん"
            ],
            "correctIndex": 0,
            "explanation": "「たばこ」 means \"tobacco, cigarette\"."
        },
        {
            "question": "(polite equivalent of です)",
            "options": [
                "じゃ",
                "～で ございます。",
                "ワイン",
                "ここ"
            ],
            "correctIndex": 1,
            "explanation": "「～で ございます。」 means \"(polite equivalent of です)\"."
        },
        {
            "question": "fictitious companies",
            "options": [
                "かいぎしつ",
                "ワイン",
                "いらっしゃいませ。",
                "MT／ヨーネン／アキックス"
            ],
            "correctIndex": 3,
            "explanation": "「MT／ヨーネン／アキックス」 means \"fictitious companies\"."
        }
    ],
    "Lesson 4": [
        {
            "question": "get up, wake up",
            "options": [
                "やすみ",
                "おきます",
                "ごぜん",
                "かしこまりました。"
            ],
            "correctIndex": 1,
            "explanation": "「おきます」 (起きます) means \"get up, wake up\"."
        },
        {
            "question": "sleep, go to bed",
            "options": [
                "こんばん",
                "デパート",
                "ねます",
                "なんばん"
            ],
            "correctIndex": 2,
            "explanation": "「ねます」 (寝ます) means \"sleep, go to bed\"."
        },
        {
            "question": "work",
            "options": [
                "はたらきます",
                "まいあさ",
                "にちようび",
                "まいにち"
            ],
            "correctIndex": 0,
            "explanation": "「はたらきます」 (働きます) means \"work\"."
        },
        {
            "question": "take a rest, take a holiday",
            "options": [
                "あさって",
                "はたらきます",
                "どようび",
                "やすみます"
            ],
            "correctIndex": 3,
            "explanation": "「やすみます」 (休みます) means \"take a rest, take a holiday\"."
        },
        {
            "question": "study",
            "options": [
                "あした",
                "べんきょうします",
                "げつようび",
                "えいが"
            ],
            "correctIndex": 1,
            "explanation": "「べんきょうします」 (勉強します) means \"study\"."
        },
        {
            "question": "finish",
            "options": [
                "こんばん",
                "べんきょうします",
                "おわります",
                "しけん"
            ],
            "correctIndex": 2,
            "explanation": "「おわります」 (終わります) means \"finish\"."
        },
        {
            "question": "department store",
            "options": [
                "ニューヨーク",
                "デパート",
                "にちようび",
                "まいあさ"
            ],
            "correctIndex": 1,
            "explanation": "「デパート」 means \"department store\"."
        },
        {
            "question": "bank",
            "options": [
                "あすか",
                "ぎんこう",
                "はん",
                "１０４"
            ],
            "correctIndex": 1,
            "explanation": "「ぎんこう」 (銀行) means \"bank\"."
        },
        {
            "question": "post office",
            "options": [
                "かいぎ",
                "ゆうびんきょく",
                "もくようび",
                "なんばん"
            ],
            "correctIndex": 1,
            "explanation": "「ゆうびんきょく」 (郵便局) means \"post office\"."
        },
        {
            "question": "library",
            "options": [
                "なんじ",
                "やすみます",
                "にちようび",
                "としょかん"
            ],
            "correctIndex": 3,
            "explanation": "「としょかん」 (図書館) means \"library\"."
        },
        {
            "question": "art museum, art gallery",
            "options": [
                "えいが",
                "かしこまりました。",
                "きんようび",
                "びじゅつかん"
            ],
            "correctIndex": 3,
            "explanation": "「びじゅつかん」 (美術館) means \"art museum, art gallery\"."
        },
        {
            "question": "now",
            "options": [
                "バンコク",
                "いま",
                "げつようび",
                "きょう"
            ],
            "correctIndex": 1,
            "explanation": "「いま」 (今) means \"now\"."
        },
        {
            "question": "－ o'clock",
            "options": [
                "げつようび",
                "ロサンゼルス",
                "－じ",
                "あした"
            ],
            "correctIndex": 2,
            "explanation": "「－じ」 (－時) means \"－ o'clock\"."
        },
        {
            "question": "－ minute",
            "options": [
                "まいあさ",
                "あすか",
                "－ふん（－ぷん）",
                "おととい"
            ],
            "correctIndex": 2,
            "explanation": "「－ふん（－ぷん）」 (－分) means \"－ minute\"."
        },
        {
            "question": "half",
            "options": [
                "えーと",
                "ばんごう",
                "まいばん",
                "はん"
            ],
            "correctIndex": 3,
            "explanation": "「はん」 (半) means \"half\"."
        },
        {
            "question": "what time",
            "options": [
                "－ふん（－ぷん）",
                "なんようび",
                "なんじ",
                "バンコク"
            ],
            "correctIndex": 2,
            "explanation": "「なんじ」 (何時) means \"what time\"."
        },
        {
            "question": "what minute",
            "options": [
                "きょう",
                "あさって",
                "どようび",
                "なんぷん"
            ],
            "correctIndex": 3,
            "explanation": "「なんぷん」 (何分) means \"what minute\"."
        },
        {
            "question": "a.m., morning",
            "options": [
                "ごぜん",
                "ペキン",
                "いま",
                "おおさかデパート"
            ],
            "correctIndex": 0,
            "explanation": "「ごぜん」 (午前) means \"a.m., morning\"."
        },
        {
            "question": "p.m., afternoon",
            "options": [
                "～から",
                "こんばん",
                "ごご",
                "としょかん"
            ],
            "correctIndex": 2,
            "explanation": "「ごご」 (午後) means \"p.m., afternoon\"."
        },
        {
            "question": "morning",
            "options": [
                "まいにち",
                "おととい",
                "ぎんこう",
                "あさ"
            ],
            "correctIndex": 3,
            "explanation": "「あさ」 (朝) means \"morning\"."
        },
        {
            "question": "daytime, noon",
            "options": [
                "－じ",
                "ごご",
                "きのう",
                "ひる"
            ],
            "correctIndex": 3,
            "explanation": "「ひる」 (昼) means \"daytime, noon\"."
        },
        {
            "question": "night, evening",
            "options": [
                "ロンドン",
                "ひる",
                "ばん（よる）",
                "しけん"
            ],
            "correctIndex": 2,
            "explanation": "「ばん（よる）」 (晩（夜）) means \"night, evening\"."
        },
        {
            "question": "the day before yesterday",
            "options": [
                "１０４",
                "かいぎ",
                "いま",
                "おととい"
            ],
            "correctIndex": 3,
            "explanation": "「おととい」 means \"the day before yesterday\"."
        },
        {
            "question": "yesterday",
            "options": [
                "きのう",
                "なんじ",
                "ロサンゼルス",
                "なんようび"
            ],
            "correctIndex": 0,
            "explanation": "「きのう」 means \"yesterday\"."
        },
        {
            "question": "today",
            "options": [
                "ばんごう",
                "はん",
                "きょう",
                "ペキン"
            ],
            "correctIndex": 2,
            "explanation": "「きょう」 means \"today\"."
        },
        {
            "question": "tomorrow",
            "options": [
                "アップルぎんこう",
                "１０４",
                "あした",
                "かしこまりました。"
            ],
            "correctIndex": 2,
            "explanation": "「あした」 means \"tomorrow\"."
        },
        {
            "question": "the day after tomorrow",
            "options": [
                "やまとびじゅつかん",
                "えいが",
                "あさって",
                "ゆうびんきょく"
            ],
            "correctIndex": 2,
            "explanation": "「あさって」 means \"the day after tomorrow\"."
        },
        {
            "question": "this morning",
            "options": [
                "～から",
                "けさ",
                "なんじ",
                "ひるやすみ"
            ],
            "correctIndex": 1,
            "explanation": "「けさ」 means \"this morning\"."
        },
        {
            "question": "this evening, tonight",
            "options": [
                "あした",
                "こんばん",
                "まいあさ",
                "はん"
            ],
            "correctIndex": 1,
            "explanation": "「こんばん」 (今晩) means \"this evening, tonight\"."
        },
        {
            "question": "rest, a holiday, a day off",
            "options": [
                "やすみ",
                "えいが",
                "ねます",
                "おねがいします。"
            ],
            "correctIndex": 0,
            "explanation": "「やすみ」 (休み) means \"rest, a holiday, a day off\"."
        },
        {
            "question": "lunchtime",
            "options": [
                "ゆうびんきょく",
                "ひるやすみ",
                "おおさかデパート",
                "あした"
            ],
            "correctIndex": 1,
            "explanation": "「ひるやすみ」 (昼休み) means \"lunchtime\"."
        },
        {
            "question": "examination, test",
            "options": [
                "しけん",
                "まいばん",
                "～まで",
                "あさ"
            ],
            "correctIndex": 0,
            "explanation": "「しけん」 (試験) means \"examination, test\"."
        },
        {
            "question": "meeting, conference (～を します : hold a meeting)",
            "options": [
                "しけん",
                "おおさかデパート",
                "かいぎ",
                "ロサンゼルス"
            ],
            "correctIndex": 2,
            "explanation": "「かいぎ」 (会議) means \"meeting, conference (～を します : hold a meeting)\"."
        },
        {
            "question": "film, movie",
            "options": [
                "ばんごう",
                "ペキン",
                "ばん（よる）",
                "えいが"
            ],
            "correctIndex": 3,
            "explanation": "「えいが」 (映画) means \"film, movie\"."
        },
        {
            "question": "every morning",
            "options": [
                "アップルぎんこう",
                "あした",
                "まいあさ",
                "おきます"
            ],
            "correctIndex": 2,
            "explanation": "「まいあさ」 (毎朝) means \"every morning\"."
        },
        {
            "question": "every evening",
            "options": [
                "かしこまりました。",
                "まいにち",
                "まいばん",
                "ペキン"
            ],
            "correctIndex": 2,
            "explanation": "「まいばん」 (毎晩) means \"every evening\"."
        },
        {
            "question": "every day",
            "options": [
                "もくようび",
                "しけん",
                "まいにち",
                "いま"
            ],
            "correctIndex": 2,
            "explanation": "「まいにち」 (毎日) means \"every day\"."
        },
        {
            "question": "Monday",
            "options": [
                "べんきょうします",
                "げつようび",
                "おといあわせのばんごう",
                "やすみます"
            ],
            "correctIndex": 1,
            "explanation": "「げつようび」 (月曜日) means \"Monday\"."
        },
        {
            "question": "Tuesday",
            "options": [
                "にちようび",
                "かようび",
                "ロサンゼルス",
                "びじゅつかん"
            ],
            "correctIndex": 1,
            "explanation": "「かようび」 (火曜日) means \"Tuesday\"."
        },
        {
            "question": "Wednesday",
            "options": [
                "すいようび",
                "はん",
                "［どうも］ありがとう ございました。",
                "ばん（よる）"
            ],
            "correctIndex": 0,
            "explanation": "「すいようび」 (水曜日) means \"Wednesday\"."
        },
        {
            "question": "Thursday",
            "options": [
                "もくようび",
                "［どうも］ありがとう ございました。",
                "みどりとしょかん",
                "なんじ"
            ],
            "correctIndex": 0,
            "explanation": "「もくようび」 (木曜日) means \"Thursday\"."
        },
        {
            "question": "Friday",
            "options": [
                "としょかん",
                "きんようび",
                "～と ～",
                "あさ"
            ],
            "correctIndex": 1,
            "explanation": "「きんようび」 (金曜日) means \"Friday\"."
        },
        {
            "question": "Saturday",
            "options": [
                "あさって",
                "どようび",
                "こんばん",
                "まいばん"
            ],
            "correctIndex": 1,
            "explanation": "「どようび」 (土曜日) means \"Saturday\"."
        },
        {
            "question": "Sunday",
            "options": [
                "きんようび",
                "バンコク",
                "にちようび",
                "おきます"
            ],
            "correctIndex": 2,
            "explanation": "「にちようび」 (日曜日) means \"Sunday\"."
        },
        {
            "question": "what day of the week",
            "options": [
                "そちら",
                "みどりとしょかん",
                "やすみます",
                "なんようび"
            ],
            "correctIndex": 3,
            "explanation": "「なんようび」 (何曜日) means \"what day of the week\"."
        },
        {
            "question": "from ～",
            "options": [
                "なんようび",
                "ペキン",
                "～から",
                "ゆうびんきょく"
            ],
            "correctIndex": 2,
            "explanation": "「～から」 means \"from ～\"."
        },
        {
            "question": "up to ～, until ～",
            "options": [
                "しけん",
                "もくようび",
                "ゆうびんきょく",
                "～まで"
            ],
            "correctIndex": 3,
            "explanation": "「～まで」 means \"up to ～, until ～\"."
        },
        {
            "question": "and (used to connect nouns)",
            "options": [
                "びじゅつかん",
                "～から",
                "～と ～",
                "バンコク"
            ],
            "correctIndex": 2,
            "explanation": "「～と ～」 means \"and (used to connect nouns)\"."
        },
        {
            "question": "That's tough, isn't it? (used when expressing sympathy)",
            "options": [
                "たいへんですね。",
                "ねます",
                "おおさかデパート",
                "－ふん（－ぷん）"
            ],
            "correctIndex": 0,
            "explanation": "「たいへんですね。」 (大変ですね。) means \"That's tough, isn't it? (used when expressing sympathy)\"."
        },
        {
            "question": "number",
            "options": [
                "－ふん（－ぷん）",
                "ひるやすみ",
                "ばんごう",
                "もくようび"
            ],
            "correctIndex": 2,
            "explanation": "「ばんごう」 (番号) means \"number\"."
        },
        {
            "question": "what number",
            "options": [
                "としょかん",
                "ゆうびんきょく",
                "デパート",
                "なんばん"
            ],
            "correctIndex": 3,
            "explanation": "「なんばん」 (何番) means \"what number\"."
        },
        {
            "question": "your place",
            "options": [
                "そちら",
                "きょう",
                "にちようび",
                "あすか"
            ],
            "correctIndex": 0,
            "explanation": "「そちら」 means \"your place\"."
        },
        {
            "question": "New York",
            "options": [
                "ニューヨーク",
                "あした",
                "けさ",
                "しけん"
            ],
            "correctIndex": 0,
            "explanation": "「ニューヨーク」 means \"New York\"."
        },
        {
            "question": "Beijing (北京)",
            "options": [
                "たいへんですね。",
                "ペキン",
                "きのう",
                "ロンドン"
            ],
            "correctIndex": 1,
            "explanation": "「ペキン」 means \"Beijing (北京)\"."
        },
        {
            "question": "Los Angeles",
            "options": [
                "けさ",
                "そちら",
                "ロサンゼルス",
                "すいようび"
            ],
            "correctIndex": 2,
            "explanation": "「ロサンゼルス」 means \"Los Angeles\"."
        },
        {
            "question": "London",
            "options": [
                "なんようび",
                "ロンドン",
                "～と ～",
                "ひるやすみ"
            ],
            "correctIndex": 1,
            "explanation": "「ロンドン」 means \"London\"."
        },
        {
            "question": "a fictitious Japanese restaurant",
            "options": [
                "あすか",
                "けさ",
                "えいが",
                "びじゅつかん"
            ],
            "correctIndex": 0,
            "explanation": "「あすか」 means \"a fictitious Japanese restaurant\"."
        },
        {
            "question": "a fictitious bank",
            "options": [
                "デパート",
                "アップルぎんこう",
                "にちようび",
                "［どうも］ありがとう ございました。"
            ],
            "correctIndex": 1,
            "explanation": "「アップルぎんこう」 (アップル銀行) means \"a fictitious bank\"."
        },
        {
            "question": "a fictitious library",
            "options": [
                "みどりとしょかん",
                "なんようび",
                "おねがいします。",
                "ばんごう"
            ],
            "correctIndex": 0,
            "explanation": "「みどりとしょかん」 (みどり図書館) means \"a fictitious library\"."
        },
        {
            "question": "a fictitious art gallery",
            "options": [
                "どようび",
                "あさ",
                "やまとびじゅつかん",
                "べんきょうします"
            ],
            "correctIndex": 2,
            "explanation": "「やまとびじゅつかん」 (やまと美術館) means \"a fictitious art gallery\"."
        },
        {
            "question": "well, let me see",
            "options": [
                "１０４",
                "きんようび",
                "～から",
                "えーと"
            ],
            "correctIndex": 3,
            "explanation": "「えーと」 means \"well, let me see\"."
        },
        {
            "question": "information, directory assistance",
            "options": [
                "１０４",
                "あさって",
                "おわります",
                "まいあさ"
            ],
            "correctIndex": 0,
            "explanation": "「１０４」 means \"information, directory assistance\"."
        },
        {
            "question": "Please. (lit. ask for a favor)",
            "options": [
                "ペキン",
                "～から",
                "なんじ",
                "おねがいします。"
            ],
            "correctIndex": 3,
            "explanation": "「おねがいします。」 (お願いします。) means \"Please. (lit. ask for a favor)\"."
        },
        {
            "question": "Certainly (sir, madam)",
            "options": [
                "まいあさ",
                "あすか",
                "かしこまりました。",
                "もくようび"
            ],
            "correctIndex": 2,
            "explanation": "「かしこまりました。」 means \"Certainly (sir, madam)\"."
        },
        {
            "question": "the number being inquired about",
            "options": [
                "おおさかデパート",
                "～から",
                "おといあわせのばんごう",
                "なんようび"
            ],
            "correctIndex": 2,
            "explanation": "「おといあわせのばんごう」 (お問い合わせの番号) means \"the number being inquired about\"."
        },
        {
            "question": "Thank you very much.",
            "options": [
                "おといあわせのばんごう",
                "ペキン",
                "いま",
                "［どうも］ありがとう ございました。"
            ],
            "correctIndex": 3,
            "explanation": "「［どうも］ありがとう ございました。」 means \"Thank you very much.\"."
        },
        {
            "question": "Bangkok",
            "options": [
                "けさ",
                "まいあさ",
                "バンコク",
                "ごぜん"
            ],
            "correctIndex": 2,
            "explanation": "「バンコク」 means \"Bangkok\"."
        },
        {
            "question": "fictitious department store",
            "options": [
                "おおさかデパート",
                "としょかん",
                "はたらきます",
                "ペキン"
            ],
            "correctIndex": 0,
            "explanation": "「おおさかデパート」 (大阪デパート) means \"fictitious department store\"."
        }
    ],
    "Lesson 5": [
        {
            "question": "go",
            "options": [
                "いきます",
                "あるいて",
                "ひと",
                "とっきゅう"
            ],
            "correctIndex": 0,
            "explanation": "「いきます」 (行ます) means \"go\"."
        },
        {
            "question": "come",
            "options": [
                "せんげつ",
                "つぎの",
                "きます",
                "ことし"
            ],
            "correctIndex": 2,
            "explanation": "「きます」 (来ます) means \"come\"."
        },
        {
            "question": "go home, return",
            "options": [
                "かえります",
                "でんしゃ",
                "おおさかじょう",
                "はつか"
            ],
            "correctIndex": 0,
            "explanation": "「かえります」 (帰ります) means \"go home, return\"."
        },
        {
            "question": "school",
            "options": [
                "ふつう",
                "ともだち",
                "がっこう",
                "ふつか"
            ],
            "correctIndex": 2,
            "explanation": "「がっこう」 (学校) means \"school\"."
        },
        {
            "question": "supermarket",
            "options": [
                "なんねん",
                "こうしえん",
                "どう いたしまして。",
                "スーパー"
            ],
            "correctIndex": 3,
            "explanation": "「スーパー」 means \"supermarket\"."
        },
        {
            "question": "station",
            "options": [
                "えき",
                "ふつう",
                "きます",
                "ともだち"
            ],
            "correctIndex": 0,
            "explanation": "「えき」 (駅) means \"station\"."
        },
        {
            "question": "aeroplane, airplane",
            "options": [
                "みっか",
                "ひこうき",
                "［どうも］ありがとう ございました。",
                "ふね"
            ],
            "correctIndex": 1,
            "explanation": "「ひこうき」 (飛行機) means \"aeroplane, airplane\"."
        },
        {
            "question": "ship",
            "options": [
                "はかた",
                "えき",
                "ふね",
                "でんしゃ"
            ],
            "correctIndex": 2,
            "explanation": "「ふね」 (船) means \"ship\"."
        },
        {
            "question": "electric train",
            "options": [
                "きます",
                "かえります",
                "でんしゃ",
                "－ばんせん"
            ],
            "correctIndex": 2,
            "explanation": "「でんしゃ」 (電車) means \"electric train\"."
        },
        {
            "question": "underground, subway",
            "options": [
                "なんにち",
                "ちかてつ",
                "きゅうこう",
                "バス"
            ],
            "correctIndex": 1,
            "explanation": "「ちかてつ」 (地下鉄) means \"underground, subway\"."
        },
        {
            "question": "the Shinkansen, the bullet train",
            "options": [
                "せんしゅう",
                "しんかんせん",
                "ついたち",
                "－ばんせん"
            ],
            "correctIndex": 1,
            "explanation": "「しんかんせん」 (新幹線) means \"the Shinkansen, the bullet train\"."
        },
        {
            "question": "bus",
            "options": [
                "たんじょうび",
                "バス",
                "どう いたしまして。",
                "がっこう"
            ],
            "correctIndex": 1,
            "explanation": "「バス」 means \"bus\"."
        },
        {
            "question": "taxi",
            "options": [
                "じてんしゃ",
                "じゅうよっか",
                "タクシー",
                "ことし"
            ],
            "correctIndex": 2,
            "explanation": "「タクシー」 means \"taxi\"."
        },
        {
            "question": "bicycle",
            "options": [
                "じてんしゃ",
                "ひとりで",
                "よっか",
                "かれ"
            ],
            "correctIndex": 0,
            "explanation": "「じてんしゃ」 (自転車) means \"bicycle\"."
        },
        {
            "question": "on foot",
            "options": [
                "じゅうよっか",
                "ひと",
                "あるいて",
                "ちかてつ"
            ],
            "correctIndex": 2,
            "explanation": "「あるいて」 (歩いて) means \"on foot\"."
        },
        {
            "question": "person, people",
            "options": [
                "－ばんせん",
                "ひと",
                "スーパー",
                "－がつ"
            ],
            "correctIndex": 1,
            "explanation": "「ひと」 (人) means \"person, people\"."
        },
        {
            "question": "friend",
            "options": [
                "せんしゅう",
                "バス",
                "らいげつ",
                "ともだち"
            ],
            "correctIndex": 3,
            "explanation": "「ともだち」 (友達) means \"friend\"."
        },
        {
            "question": "he, boyfriend, lover",
            "options": [
                "かれ",
                "［どうも］ありがとう ございました。",
                "せんしゅう",
                "こうしえん"
            ],
            "correctIndex": 0,
            "explanation": "「かれ」 (彼) means \"he, boyfriend, lover\"."
        },
        {
            "question": "she, girlfriend, lover",
            "options": [
                "ふしみ",
                "きます",
                "バス",
                "かのじょ"
            ],
            "correctIndex": 3,
            "explanation": "「かのじょ」 (彼女) means \"she, girlfriend, lover\"."
        },
        {
            "question": "family",
            "options": [
                "はかた",
                "こうしえん",
                "かぞく",
                "らいしゅう"
            ],
            "correctIndex": 2,
            "explanation": "「かぞく」 (家族) means \"family\"."
        },
        {
            "question": "alone, by oneself",
            "options": [
                "ちかてつ",
                "［どうも］ありがとう ございました。",
                "ひとりで",
                "かのじょ"
            ],
            "correctIndex": 2,
            "explanation": "「ひとりで」 (一人で) means \"alone, by oneself\"."
        },
        {
            "question": "last week",
            "options": [
                "こんげつ",
                "ふしみ",
                "たんじょうび",
                "せんしゅう"
            ],
            "correctIndex": 3,
            "explanation": "「せんしゅう」 (先週) means \"last week\"."
        },
        {
            "question": "this week",
            "options": [
                "がっこう",
                "こんしゅう",
                "おおさかじょう",
                "かえります"
            ],
            "correctIndex": 1,
            "explanation": "「こんしゅう」 (今週) means \"this week\"."
        },
        {
            "question": "next week",
            "options": [
                "どう いたしまして。",
                "らいしゅう",
                "こうしえん",
                "つぎの"
            ],
            "correctIndex": 1,
            "explanation": "「らいしゅう」 (来週) means \"next week\"."
        },
        {
            "question": "last month",
            "options": [
                "しんかんせん",
                "いつ",
                "せんげつ",
                "ことし"
            ],
            "correctIndex": 2,
            "explanation": "「せんげつ」 (先月) means \"last month\"."
        },
        {
            "question": "this month",
            "options": [
                "いつか",
                "みっか",
                "こうしえん",
                "こんげつ"
            ],
            "correctIndex": 3,
            "explanation": "「こんげつ」 (今月) means \"this month\"."
        },
        {
            "question": "next month",
            "options": [
                "らいげつ",
                "ようか",
                "よっか",
                "ふつう"
            ],
            "correctIndex": 0,
            "explanation": "「らいげつ」 (来月) means \"next month\"."
        },
        {
            "question": "last year",
            "options": [
                "きょねん",
                "ついたち",
                "せんげつ",
                "いつ"
            ],
            "correctIndex": 0,
            "explanation": "「きょねん」 (去年) means \"last year\"."
        },
        {
            "question": "this year",
            "options": [
                "えき",
                "ふしみ",
                "とっきゅう",
                "ことし"
            ],
            "correctIndex": 3,
            "explanation": "「ことし」 means \"this year\"."
        },
        {
            "question": "next year",
            "options": [
                "ふね",
                "つぎの",
                "らいねん",
                "よっか"
            ],
            "correctIndex": 2,
            "explanation": "「らいねん」 (来年) means \"next year\"."
        },
        {
            "question": "-th year",
            "options": [
                "－ねん",
                "いきます",
                "はかた",
                "こんげつ"
            ],
            "correctIndex": 0,
            "explanation": "「－ねん」 (－年) means \"-th year\"."
        },
        {
            "question": "what year",
            "options": [
                "なんねん",
                "こんしゅう",
                "ふね",
                "とおか"
            ],
            "correctIndex": 0,
            "explanation": "「なんねん」 (何年) means \"what year\"."
        },
        {
            "question": "-th month of the year",
            "options": [
                "でんしゃ",
                "－がつ",
                "とっきゅう",
                "じてんしゃ"
            ],
            "correctIndex": 1,
            "explanation": "「－がつ」 (－月) means \"-th month of the year\"."
        },
        {
            "question": "what month",
            "options": [
                "はつか",
                "じてんしゃ",
                "なんがつ",
                "ともだち"
            ],
            "correctIndex": 2,
            "explanation": "「なんがつ」 (何月) means \"what month\"."
        },
        {
            "question": "first day of the month",
            "options": [
                "しんかんせん",
                "－ばんせん",
                "ふつか",
                "ついたち"
            ],
            "correctIndex": 3,
            "explanation": "「ついたち」 (１日) means \"first day of the month\"."
        },
        {
            "question": "second, two days",
            "options": [
                "ひと",
                "どう いたしまして。",
                "ふつか",
                "きょねん"
            ],
            "correctIndex": 2,
            "explanation": "「ふつか」 (２日) means \"second, two days\"."
        },
        {
            "question": "third, three days",
            "options": [
                "みっか",
                "かれ",
                "らいげつ",
                "きょねん"
            ],
            "correctIndex": 0,
            "explanation": "「みっか」 (３日) means \"third, three days\"."
        },
        {
            "question": "fourth, four days",
            "options": [
                "なんねん",
                "よっか",
                "ふね",
                "ことし"
            ],
            "correctIndex": 1,
            "explanation": "「よっか」 (４日) means \"fourth, four days\"."
        },
        {
            "question": "fifth, five days",
            "options": [
                "－にち",
                "いつか",
                "らいしゅう",
                "ひこうき"
            ],
            "correctIndex": 1,
            "explanation": "「いつか」 (５日) means \"fifth, five days\"."
        },
        {
            "question": "sixth, six days",
            "options": [
                "そうですね。",
                "きゅうこう",
                "ともだち",
                "むいか"
            ],
            "correctIndex": 3,
            "explanation": "「むいか」 (６日) means \"sixth, six days\"."
        },
        {
            "question": "seventh, seven days",
            "options": [
                "らいげつ",
                "むいか",
                "なのか",
                "いつ"
            ],
            "correctIndex": 2,
            "explanation": "「なのか」 (７日) means \"seventh, seven days\"."
        },
        {
            "question": "eighth, eight days",
            "options": [
                "ふつう",
                "ようか",
                "－がつ",
                "ふね"
            ],
            "correctIndex": 1,
            "explanation": "「ようか」 (８日) means \"eighth, eight days\"."
        },
        {
            "question": "ninth, nine days",
            "options": [
                "なんがつ",
                "むいか",
                "ここのか",
                "せんげつ"
            ],
            "correctIndex": 2,
            "explanation": "「ここのか」 (９日) means \"ninth, nine days\"."
        },
        {
            "question": "tenth, ten days",
            "options": [
                "がっこう",
                "あるいて",
                "とおか",
                "ふね"
            ],
            "correctIndex": 2,
            "explanation": "「とおか」 (１０日) means \"tenth, ten days\"."
        },
        {
            "question": "fourteenth, fourteen days",
            "options": [
                "らいげつ",
                "きゅうこう",
                "じゅうよっか",
                "ふね"
            ],
            "correctIndex": 2,
            "explanation": "「じゅうよっか」 (１４日) means \"fourteenth, fourteen days\"."
        },
        {
            "question": "twentieth, twenty days",
            "options": [
                "おおさかじょう",
                "いつ",
                "きます",
                "はつか"
            ],
            "correctIndex": 3,
            "explanation": "「はつか」 (２０日) means \"twentieth, twenty days\"."
        },
        {
            "question": "twenty-fourth, twenty-four days",
            "options": [
                "にじゅうよっか",
                "スーパー",
                "いきます",
                "きょねん"
            ],
            "correctIndex": 0,
            "explanation": "「にじゅうよっか」 (２４日) means \"twenty-fourth, twenty-four days\"."
        },
        {
            "question": "-th day of the month, － day(s)",
            "options": [
                "ふしみ",
                "らいねん",
                "ふつか",
                "－にち"
            ],
            "correctIndex": 3,
            "explanation": "「－にち」 (－日) means \"-th day of the month, － day(s)\"."
        },
        {
            "question": "which day of the month, how many days",
            "options": [
                "あるいて",
                "いつか",
                "なんにち",
                "せんげつ"
            ],
            "correctIndex": 2,
            "explanation": "「なんにち」 (何日) means \"which day of the month, how many days\"."
        },
        {
            "question": "when",
            "options": [
                "みっか",
                "いつ",
                "あるいて",
                "じてんしゃ"
            ],
            "correctIndex": 1,
            "explanation": "「いつ」 means \"when\"."
        },
        {
            "question": "birthday",
            "options": [
                "たんじょうび",
                "いつか",
                "きゅうこう",
                "じてんしゃ"
            ],
            "correctIndex": 0,
            "explanation": "「たんじょうび」 (誕生日) means \"birthday\"."
        },
        {
            "question": "Yes, it is.",
            "options": [
                "そうですね。",
                "あるいて",
                "こんげつ",
                "ここのか"
            ],
            "correctIndex": 0,
            "explanation": "「そうですね。」 means \"Yes, it is.\"."
        },
        {
            "question": "Thank you very much.",
            "options": [
                "［どうも］ありがとう ございました。",
                "バス",
                "あるいて",
                "らいげつ"
            ],
            "correctIndex": 0,
            "explanation": "「［どうも］ありがとう ございました。」 means \"Thank you very much.\"."
        },
        {
            "question": "You're welcome./Don't mention it.",
            "options": [
                "ちかてつ",
                "かのじょ",
                "どう いたしまして。",
                "がっこう"
            ],
            "correctIndex": 2,
            "explanation": "「どう いたしまして。」 means \"You're welcome./Don't mention it.\"."
        },
        {
            "question": "platform －, -th platform",
            "options": [
                "かえります",
                "－ばんせん",
                "とおか",
                "はかた"
            ],
            "correctIndex": 1,
            "explanation": "「－ばんせん」 (－番線) means \"platform －, -th platform\"."
        },
        {
            "question": "next",
            "options": [
                "つぎの",
                "ここのか",
                "ふしみ",
                "えき"
            ],
            "correctIndex": 0,
            "explanation": "「つぎの」 (次の) means \"next\"."
        },
        {
            "question": "local (train)",
            "options": [
                "どう いたしまして。",
                "ふつう",
                "きゅうこう",
                "－ばんせん"
            ],
            "correctIndex": 1,
            "explanation": "「ふつう」 (普通) means \"local (train)\"."
        },
        {
            "question": "rapid",
            "options": [
                "じてんしゃ",
                "きゅうこう",
                "がっこう",
                "－がつ"
            ],
            "correctIndex": 1,
            "explanation": "「きゅうこう」 (急行) means \"rapid\"."
        },
        {
            "question": "express",
            "options": [
                "らいしゅう",
                "おおさかじょう",
                "とっきゅう",
                "ひとりで"
            ],
            "correctIndex": 2,
            "explanation": "「とっきゅう」 (特急) means \"express\"."
        },
        {
            "question": "name of a town near Osaka",
            "options": [
                "はつか",
                "ここのか",
                "－ばんせん",
                "こうしえん"
            ],
            "correctIndex": 3,
            "explanation": "「こうしえん」 (甲子園) means \"name of a town near Osaka\"."
        },
        {
            "question": "Osaka Castle, a famous castle in Osaka",
            "options": [
                "むいか",
                "ふつう",
                "ちかてつ",
                "おおさかじょう"
            ],
            "correctIndex": 3,
            "explanation": "「おおさかじょう」 (大阪城) means \"Osaka Castle, a famous castle in Osaka\"."
        },
        {
            "question": "name of a town in Kyushu",
            "options": [
                "らいねん",
                "みっか",
                "かのじょ",
                "はかた"
            ],
            "correctIndex": 3,
            "explanation": "「はかた」 (博多) means \"name of a town in Kyushu\"."
        },
        {
            "question": "name of a town in Kyoto",
            "options": [
                "よっか",
                "ふね",
                "いきます",
                "ふしみ"
            ],
            "correctIndex": 3,
            "explanation": "「ふしみ」 (伏見) means \"name of a town in Kyoto\"."
        }
    ],
    "Lesson 6": [
        {
            "question": "eat",
            "options": [
                "たべます",
                "CD",
                "つるや",
                "ききます"
            ],
            "correctIndex": 0,
            "explanation": "「たべます」 (食べます) means \"eat\"."
        },
        {
            "question": "drink",
            "options": [
                "おちゃ",
                "のみます",
                "しゅくだい",
                "たまご"
            ],
            "correctIndex": 1,
            "explanation": "「のみます」 (飲みます) means \"drink\"."
        },
        {
            "question": "smoke [a cigarette]",
            "options": [
                "ぎゅうにゅう（ミルク）",
                "のみます",
                "すいます［たばこを～］",
                "ジュース"
            ],
            "correctIndex": 2,
            "explanation": "「すいます［たばこを～］」 (吸います［たばこを～］) means \"smoke [a cigarette]\"."
        },
        {
            "question": "see, look at, watch",
            "options": [
                "まいにちや",
                "レポート",
                "わかりました。",
                "みます"
            ],
            "correctIndex": 3,
            "explanation": "「みます」 (見ます) means \"see, look at, watch\"."
        },
        {
            "question": "hear, listen",
            "options": [
                "ききます",
                "みます",
                "ビール",
                "パン"
            ],
            "correctIndex": 0,
            "explanation": "「ききます」 (聞きます) means \"hear, listen\"."
        },
        {
            "question": "read",
            "options": [
                "よみます",
                "みず",
                "さかな",
                "します"
            ],
            "correctIndex": 0,
            "explanation": "「よみます」 (読みます) means \"read\"."
        },
        {
            "question": "write (かきます can also mean to draw or paint, but in this case it is written with hiragana in this book)",
            "options": [
                "おおさかデパート",
                "かきます",
                "こうちゃ",
                "おおさかじょうこうえん"
            ],
            "correctIndex": 1,
            "explanation": "「かきます」 (書きます) means \"write (かきます can also mean to draw or paint, but in this case it is written with hiragana in this book)\"."
        },
        {
            "question": "buy",
            "options": [
                "それから",
                "かいます",
                "やさい",
                "よみます"
            ],
            "correctIndex": 1,
            "explanation": "「かいます」 (買います) means \"buy\"."
        },
        {
            "question": "take [a photograph]",
            "options": [
                "ぎゅうにゅう（ミルク）",
                "すいます［たばこを～］",
                "やさい",
                "とります［しゃしんを～］"
            ],
            "correctIndex": 3,
            "explanation": "「とります［しゃしんを～］」 (撮ります［写真を～］) means \"take [a photograph]\"."
        },
        {
            "question": "do, play",
            "options": [
                "それから",
                "のみます",
                "たべます",
                "します"
            ],
            "correctIndex": 3,
            "explanation": "「します」 means \"do, play\"."
        },
        {
            "question": "meet [a friend]",
            "options": [
                "おおさかじょうこうえん",
                "あいます［ともだちに～］",
                "わかりました。",
                "いいですね。"
            ],
            "correctIndex": 1,
            "explanation": "「あいます［ともだちに～］」 (会います［友達に～］) means \"meet [a friend]\"."
        },
        {
            "question": "a meal, cooked rice",
            "options": [
                "CD",
                "ばんごはん",
                "ビデオ",
                "ごはん"
            ],
            "correctIndex": 3,
            "explanation": "「ごはん」 means \"a meal, cooked rice\"."
        },
        {
            "question": "breakfast",
            "options": [
                "てがみ",
                "ぎゅうにゅう（ミルク）",
                "あさごはん",
                "なんですか。"
            ],
            "correctIndex": 2,
            "explanation": "「あさごはん」 (朝ごはん) means \"breakfast\"."
        },
        {
            "question": "lunch",
            "options": [
                "あさごはん",
                "CD",
                "みせ",
                "ひるごはん"
            ],
            "correctIndex": 3,
            "explanation": "「ひるごはん」 (昼ごはん) means \"lunch\"."
        },
        {
            "question": "supper",
            "options": [
                "わかりました。",
                "ばんごはん",
                "じゃ、また［あした］。",
                "やさい"
            ],
            "correctIndex": 1,
            "explanation": "「ばんごはん」 (晩ごはん) means \"supper\"."
        },
        {
            "question": "bread",
            "options": [
                "かきます",
                "レポート",
                "ひるごはん",
                "パン"
            ],
            "correctIndex": 3,
            "explanation": "「パン」 means \"bread\"."
        },
        {
            "question": "egg",
            "options": [
                "たまご",
                "なんですか。",
                "くだもの",
                "ビデオ"
            ],
            "correctIndex": 0,
            "explanation": "「たまご」 (卵) means \"egg\"."
        },
        {
            "question": "meat",
            "options": [
                "にく",
                "おおさかじょうこうえん",
                "こうちゃ",
                "えいが"
            ],
            "correctIndex": 0,
            "explanation": "「にく」 (肉) means \"meat\"."
        },
        {
            "question": "fish",
            "options": [
                "さかな",
                "すいます［たばこを～］",
                "あいます［ともだちに～］",
                "みず"
            ],
            "correctIndex": 0,
            "explanation": "「さかな」 (魚) means \"fish\"."
        },
        {
            "question": "vegetable",
            "options": [
                "ちょっと",
                "やさい",
                "ごはん",
                "にく"
            ],
            "correctIndex": 1,
            "explanation": "「やさい」 (野菜) means \"vegetable\"."
        },
        {
            "question": "fruit",
            "options": [
                "にわ",
                "くだもの",
                "ちょっと",
                "いつも"
            ],
            "correctIndex": 1,
            "explanation": "「くだもの」 (果物) means \"fruit\"."
        },
        {
            "question": "water",
            "options": [
                "ごはん",
                "みず",
                "［お］はなみ",
                "しゅくだい"
            ],
            "correctIndex": 1,
            "explanation": "「みず」 (水) means \"water\"."
        },
        {
            "question": "tea, green tea",
            "options": [
                "おちゃ",
                "あいます［ともだちに～］",
                "ひるごはん",
                "じゃ、また［あした］。"
            ],
            "correctIndex": 0,
            "explanation": "「おちゃ」 (お茶) means \"tea, green tea\"."
        },
        {
            "question": "black tea",
            "options": [
                "たべます",
                "こうちゃ",
                "ちょっと",
                "それから"
            ],
            "correctIndex": 1,
            "explanation": "「こうちゃ」 (紅茶) means \"black tea\"."
        },
        {
            "question": "milk",
            "options": [
                "ぎゅうにゅう（ミルク）",
                "かいます",
                "あさごはん",
                "すいます［たばこを～］"
            ],
            "correctIndex": 0,
            "explanation": "「ぎゅうにゅう（ミルク）」 (牛乳（ミルク）) means \"milk\"."
        },
        {
            "question": "juice",
            "options": [
                "ビール",
                "まいにちや",
                "くだもの",
                "ジュース"
            ],
            "correctIndex": 3,
            "explanation": "「ジュース」 means \"juice\"."
        },
        {
            "question": "beer",
            "options": [
                "ビール",
                "いつも",
                "あいます［ともだちに～］",
                "かいます"
            ],
            "correctIndex": 0,
            "explanation": "「ビール」 means \"beer\"."
        },
        {
            "question": "alcohol, Japanese rice wine",
            "options": [
                "［お］さけ",
                "あいます［ともだちに～］",
                "たまご",
                "［お］はなみ"
            ],
            "correctIndex": 0,
            "explanation": "「［お］さけ」 (［お］酒) means \"alcohol, Japanese rice wine\"."
        },
        {
            "question": "tobacco, cigarette",
            "options": [
                "フランスや",
                "みず",
                "パン",
                "たばこ"
            ],
            "correctIndex": 3,
            "explanation": "「たばこ」 means \"tobacco, cigarette\"."
        },
        {
            "question": "letter",
            "options": [
                "かいます",
                "ひるごはん",
                "します",
                "てがみ"
            ],
            "correctIndex": 3,
            "explanation": "「てがみ」 (手紙) means \"letter\"."
        },
        {
            "question": "report",
            "options": [
                "ばんごはん",
                "おおさかじょうこうえん",
                "つるや",
                "レポート"
            ],
            "correctIndex": 3,
            "explanation": "「レポート」 means \"report\"."
        },
        {
            "question": "photograph",
            "options": [
                "しゃしん",
                "CD",
                "ビール",
                "とります［しゃしんを～］"
            ],
            "correctIndex": 0,
            "explanation": "「しゃしん」 (写真) means \"photograph\"."
        },
        {
            "question": "video [tape], video deck",
            "options": [
                "おおさかじょうこうえん",
                "ビデオ",
                "しゃしん",
                "［お］さけ"
            ],
            "correctIndex": 1,
            "explanation": "「ビデオ」 means \"video [tape], video deck\"."
        },
        {
            "question": "store, shop",
            "options": [
                "にわ",
                "みせ",
                "フランスや",
                "それから"
            ],
            "correctIndex": 1,
            "explanation": "「みせ」 (店) means \"store, shop\"."
        },
        {
            "question": "garden",
            "options": [
                "ごはん",
                "レストラン",
                "にわ",
                "すいます［たばこを～］"
            ],
            "correctIndex": 2,
            "explanation": "「にわ」 (庭) means \"garden\"."
        },
        {
            "question": "homework (～を します : do homework)",
            "options": [
                "あさごはん",
                "あいます［ともだちに～］",
                "しゅくだい",
                "ええ"
            ],
            "correctIndex": 2,
            "explanation": "「しゅくだい」 (宿題) means \"homework (～を します : do homework)\"."
        },
        {
            "question": "tennis (～を します : play tennis)",
            "options": [
                "テニス",
                "つるや",
                "こうちゃ",
                "まいにちや"
            ],
            "correctIndex": 0,
            "explanation": "「テニス」 means \"tennis (～を します : play tennis)\"."
        },
        {
            "question": "soccer, football (～を します : play soccer)",
            "options": [
                "CD",
                "たばこ",
                "ときどき",
                "サッカー"
            ],
            "correctIndex": 3,
            "explanation": "「サッカー」 means \"soccer, football (～を します : play soccer)\"."
        },
        {
            "question": "cherry-blossom viewing (～を します : view the cherry blossoms)",
            "options": [
                "にく",
                "［お］はなみ",
                "なんですか。",
                "ちょっと"
            ],
            "correctIndex": 1,
            "explanation": "「［お］はなみ」 (［お］花見) means \"cherry-blossom viewing (～を します : view the cherry blossoms)\"."
        },
        {
            "question": "what",
            "options": [
                "ビデオ",
                "なに",
                "CD",
                "すいます［たばこを～］"
            ],
            "correctIndex": 1,
            "explanation": "「なに」 (何) means \"what\"."
        },
        {
            "question": "together",
            "options": [
                "みます",
                "いっしょに",
                "のみます",
                "こうちゃ"
            ],
            "correctIndex": 1,
            "explanation": "「いっしょに」 means \"together\"."
        },
        {
            "question": "a little while, a little bit",
            "options": [
                "まいにちや",
                "おちゃ",
                "ちょっと",
                "みず"
            ],
            "correctIndex": 2,
            "explanation": "「ちょっと」 means \"a little while, a little bit\"."
        },
        {
            "question": "always, usually",
            "options": [
                "なんですか。",
                "いいですね。",
                "いつも",
                "てがみ"
            ],
            "correctIndex": 2,
            "explanation": "「いつも」 means \"always, usually\"."
        },
        {
            "question": "sometimes",
            "options": [
                "しゅくだい",
                "てがみ",
                "ときどき",
                "テニス"
            ],
            "correctIndex": 2,
            "explanation": "「ときどき」 (時々) means \"sometimes\"."
        },
        {
            "question": "after that, and then",
            "options": [
                "CD",
                "かきます",
                "メキシコ",
                "それから"
            ],
            "correctIndex": 3,
            "explanation": "「それから」 means \"after that, and then\"."
        },
        {
            "question": "yes",
            "options": [
                "にく",
                "ときどき",
                "ききます",
                "ええ"
            ],
            "correctIndex": 3,
            "explanation": "「ええ」 means \"yes\"."
        },
        {
            "question": "That's good.",
            "options": [
                "ジュース",
                "つるや",
                "いいですね。",
                "たばこ"
            ],
            "correctIndex": 2,
            "explanation": "「いいですね。」 means \"That's good.\"."
        },
        {
            "question": "I see",
            "options": [
                "わかりました。",
                "ひるごはん",
                "にく",
                "しゅくだい"
            ],
            "correctIndex": 0,
            "explanation": "「わかりました。」 means \"I see\"."
        },
        {
            "question": "Yes? (lit: What is it?)",
            "options": [
                "あいます［ともだちに～］",
                "それから",
                "なんですか。",
                "ひるごはん"
            ],
            "correctIndex": 2,
            "explanation": "「なんですか。」 (何ですか。) means \"Yes? (lit: What is it?)\"."
        },
        {
            "question": "See you [tomorrow].",
            "options": [
                "あさごはん",
                "じゃ、また［あした］。",
                "てがみ",
                "かいます"
            ],
            "correctIndex": 1,
            "explanation": "「じゃ、また［あした］。」 means \"See you [tomorrow].\"."
        },
        {
            "question": "Mexico",
            "options": [
                "メキシコ",
                "いいですね。",
                "こうちゃ",
                "ビデオ"
            ],
            "correctIndex": 0,
            "explanation": "「メキシコ」 means \"Mexico\"."
        },
        {
            "question": "a fictitious department store",
            "options": [
                "おおさかデパート",
                "おおさかじょうこうえん",
                "パン",
                "みせ"
            ],
            "correctIndex": 0,
            "explanation": "「おおさかデパート」 (大阪デパート) means \"a fictitious department store\"."
        },
        {
            "question": "a fictitious restaurant",
            "options": [
                "たべます",
                "ひるごはん",
                "それから",
                "つるや"
            ],
            "correctIndex": 3,
            "explanation": "「つるや」 means \"a fictitious restaurant\"."
        },
        {
            "question": "a fictitious supermarket",
            "options": [
                "フランスや",
                "よみます",
                "しゃしん",
                "ききます"
            ],
            "correctIndex": 0,
            "explanation": "「フランスや」 (フランス屋) means \"a fictitious supermarket\"."
        },
        {
            "question": "a fictitious supermarket",
            "options": [
                "まいにちや",
                "たばこ",
                "ごはん",
                "えいが"
            ],
            "correctIndex": 0,
            "explanation": "「まいにちや」 (毎日屋) means \"a fictitious supermarket\"."
        },
        {
            "question": "movie",
            "options": [
                "ききます",
                "フランスや",
                "えいが",
                "ちょっと"
            ],
            "correctIndex": 2,
            "explanation": "「えいが」 (映画) means \"movie\"."
        },
        {
            "question": "CD, compact disc",
            "options": [
                "ぎゅうにゅう（ミルク）",
                "しゃしん",
                "CD",
                "サッカー"
            ],
            "correctIndex": 2,
            "explanation": "「CD」 means \"CD, compact disc\"."
        },
        {
            "question": "restaurant",
            "options": [
                "ときどき",
                "レストラン",
                "テニス",
                "おおさかじょうこうえん"
            ],
            "correctIndex": 1,
            "explanation": "「レストラン」 means \"restaurant\"."
        },
        {
            "question": "Osaka Castle park",
            "options": [
                "あいます［ともだちに～］",
                "おおさかじょうこうえん",
                "しゃしん",
                "レポート"
            ],
            "correctIndex": 1,
            "explanation": "「おおさかじょうこうえん」 (大阪城公園) means \"Osaka Castle park\"."
        }
    ],
    "Lesson 7": [
        {
            "question": "cut, slice",
            "options": [
                "りょこう",
                "もらいます",
                "きります",
                "おかね"
            ],
            "correctIndex": 2,
            "explanation": "「きります」 (切ります) means \"cut, slice\"."
        },
        {
            "question": "send",
            "options": [
                "ファクス",
                "ねんがじょう",
                "おくります",
                "かけます［でんわを～］"
            ],
            "correctIndex": 2,
            "explanation": "「おくります」 (送ります) means \"send\"."
        },
        {
            "question": "give",
            "options": [
                "あげます",
                "にもつ",
                "もらいます",
                "きります"
            ],
            "correctIndex": 0,
            "explanation": "「あげます」 means \"give\"."
        },
        {
            "question": "receive",
            "options": [
                "プレゼント",
                "もらいます",
                "かします",
                "フォーク"
            ],
            "correctIndex": 1,
            "explanation": "「もらいます」 means \"receive\"."
        },
        {
            "question": "lend",
            "options": [
                "ならいます",
                "［～は］いかがですか。",
                "かします",
                "フォーク"
            ],
            "correctIndex": 2,
            "explanation": "「かします」 (貨します) means \"lend\"."
        },
        {
            "question": "borrow",
            "options": [
                "かします",
                "にもつ",
                "かります",
                "セロテープ"
            ],
            "correctIndex": 2,
            "explanation": "「かります」 (借ります) means \"borrow\"."
        },
        {
            "question": "teach",
            "options": [
                "おしえます",
                "おくります",
                "はさみ",
                "はな"
            ],
            "correctIndex": 0,
            "explanation": "「おしえます」 (教えます) means \"teach\"."
        },
        {
            "question": "learn",
            "options": [
                "かみ",
                "ならいます",
                "クリスマス",
                "ナイフ"
            ],
            "correctIndex": 1,
            "explanation": "「ならいます」 (習います) means \"learn\"."
        },
        {
            "question": "make [a telephone call]",
            "options": [
                "ごちそうさま［でした］。",
                "まだ",
                "かします",
                "かけます［でんわを～］"
            ],
            "correctIndex": 3,
            "explanation": "「かけます［でんわを～］」 (かけます［電話を～］) means \"make [a telephone call]\"."
        },
        {
            "question": "hand, arm",
            "options": [
                "いただきます。",
                "かります",
                "フォーク",
                "て"
            ],
            "correctIndex": 3,
            "explanation": "「て」 (手) means \"hand, arm\"."
        },
        {
            "question": "chopsticks",
            "options": [
                "おかね",
                "はし",
                "て",
                "おくります"
            ],
            "correctIndex": 1,
            "explanation": "「はし」 means \"chopsticks\"."
        },
        {
            "question": "spoon",
            "options": [
                "セロテープ",
                "［～は］いかがですか。",
                "しつれいします。",
                "スプーン"
            ],
            "correctIndex": 3,
            "explanation": "「スプーン」 means \"spoon\"."
        },
        {
            "question": "knife",
            "options": [
                "ファクス",
                "いらっしゃい。",
                "ねんがじょう",
                "ナイフ"
            ],
            "correctIndex": 3,
            "explanation": "「ナイフ」 means \"knife\"."
        },
        {
            "question": "fork",
            "options": [
                "フォーク",
                "かります",
                "メール",
                "ケータイ"
            ],
            "correctIndex": 0,
            "explanation": "「フォーク」 means \"fork\"."
        },
        {
            "question": "scissors",
            "options": [
                "ヨーロッパ",
                "ケータイ",
                "［～、］すてきですね。",
                "はさみ"
            ],
            "correctIndex": 3,
            "explanation": "「はさみ」 means \"scissors\"."
        },
        {
            "question": "personal computer",
            "options": [
                "いただきます。",
                "にもつ",
                "パソコン",
                "ごちそうさま［でした］。"
            ],
            "correctIndex": 2,
            "explanation": "「パソコン」 means \"personal computer\"."
        },
        {
            "question": "mobile phone, cell phone",
            "options": [
                "メール",
                "ケータイ",
                "いらっしゃい。",
                "ナイフ"
            ],
            "correctIndex": 1,
            "explanation": "「ケータイ」 means \"mobile phone, cell phone\"."
        },
        {
            "question": "e-mail",
            "options": [
                "もらいます",
                "おかあさん",
                "メール",
                "パンチ"
            ],
            "correctIndex": 2,
            "explanation": "「メール」 means \"e-mail\"."
        },
        {
            "question": "New Year's greeting card",
            "options": [
                "ファクス",
                "いらっしゃい。",
                "かみ",
                "ねんがじょう"
            ],
            "correctIndex": 3,
            "explanation": "「ねんがじょう」 (年賀状) means \"New Year's greeting card\"."
        },
        {
            "question": "punch",
            "options": [
                "おとうさん",
                "パンチ",
                "パソコン",
                "シャツ"
            ],
            "correctIndex": 1,
            "explanation": "「パンチ」 means \"punch\"."
        },
        {
            "question": "stapler",
            "options": [
                "もう",
                "ホッチキス",
                "メール",
                "ごめんください。"
            ],
            "correctIndex": 1,
            "explanation": "「ホッチキス」 means \"stapler\"."
        },
        {
            "question": "Sellotape, Scotch tape, clear adhesive tape",
            "options": [
                "かみ",
                "いらっしゃい。",
                "セロテープ",
                "ホッチキス"
            ],
            "correctIndex": 2,
            "explanation": "「セロテープ」 means \"Sellotape, Scotch tape, clear adhesive tape\"."
        },
        {
            "question": "rubber, eraser",
            "options": [
                "ごちそうさま［でした］。",
                "おしえます",
                "ちち",
                "けしゴマ"
            ],
            "correctIndex": 3,
            "explanation": "「けしゴマ」 (消しゴマ) means \"rubber, eraser\"."
        },
        {
            "question": "paper",
            "options": [
                "りょこう",
                "しつれいします。",
                "かみ",
                "ホッチキス"
            ],
            "correctIndex": 2,
            "explanation": "「かみ」 (紙) means \"paper\"."
        },
        {
            "question": "flower, blossom",
            "options": [
                "おかね",
                "いらっしゃい。",
                "はな",
                "ホッチキス"
            ],
            "correctIndex": 2,
            "explanation": "「はな」 (花) means \"flower, blossom\"."
        },
        {
            "question": "shirt",
            "options": [
                "シャツ",
                "しつれいします。",
                "どうぞ おあがり ください。",
                "セロテープ"
            ],
            "correctIndex": 0,
            "explanation": "「シャツ」 means \"shirt\"."
        },
        {
            "question": "present, gift",
            "options": [
                "プレゼント",
                "シャツ",
                "ごめんください。",
                "メール"
            ],
            "correctIndex": 0,
            "explanation": "「プレゼント」 means \"present, gift\"."
        },
        {
            "question": "luggage, baggage, parcel",
            "options": [
                "にもつ",
                "はな",
                "はさみ",
                "もう"
            ],
            "correctIndex": 0,
            "explanation": "「にもつ」 (荷物) means \"luggage, baggage, parcel\"."
        },
        {
            "question": "money",
            "options": [
                "おかね",
                "ワープロ",
                "もう",
                "プレゼント"
            ],
            "correctIndex": 0,
            "explanation": "「おかね」 (お金) means \"money\"."
        },
        {
            "question": "ticket",
            "options": [
                "セロテープ",
                "おかね",
                "ケータイ",
                "きっぷ"
            ],
            "correctIndex": 3,
            "explanation": "「きっぷ」 (切符) means \"ticket\"."
        },
        {
            "question": "Christmas",
            "options": [
                "もらいます",
                "はさみ",
                "クリスマス",
                "かけます［でんわを～］"
            ],
            "correctIndex": 2,
            "explanation": "「クリスマス」 means \"Christmas\"."
        },
        {
            "question": "(my) father",
            "options": [
                "にもつ",
                "［～は］いかがですか。",
                "ちち",
                "おくります"
            ],
            "correctIndex": 2,
            "explanation": "「ちち」 (父) means \"(my) father\"."
        },
        {
            "question": "(my) mother",
            "options": [
                "かみ",
                "にもつ",
                "きります",
                "はは"
            ],
            "correctIndex": 3,
            "explanation": "「はは」 (母) means \"(my) mother\"."
        },
        {
            "question": "(someone else's) father (also used to address one's own father)",
            "options": [
                "おしえます",
                "おとうさん",
                "どうぞ おあがり ください。",
                "りょこう"
            ],
            "correctIndex": 1,
            "explanation": "「おとうさん」 (お父さん) means \"(someone else's) father (also used to address one's own father)\"."
        },
        {
            "question": "(someone else's) mother (also used to address one's own mother)",
            "options": [
                "かみ",
                "ヨーロッパ",
                "かします",
                "おかあさん"
            ],
            "correctIndex": 3,
            "explanation": "「おかあさん」 (お母さん) means \"(someone else's) mother (also used to address one's own mother)\"."
        },
        {
            "question": "already",
            "options": [
                "［～は］いかがですか。",
                "どうぞ おあがり ください。",
                "もう",
                "ごめんください。"
            ],
            "correctIndex": 2,
            "explanation": "「もう」 means \"already\"."
        },
        {
            "question": "not yet",
            "options": [
                "パソコン",
                "パンチ",
                "まだ",
                "セロテープ"
            ],
            "correctIndex": 2,
            "explanation": "「まだ」 means \"not yet\"."
        },
        {
            "question": "from now on, soon",
            "options": [
                "フォーク",
                "きっぷ",
                "これから",
                "きります"
            ],
            "correctIndex": 2,
            "explanation": "「これから」 means \"from now on, soon\"."
        },
        {
            "question": "What a nice [～]!",
            "options": [
                "はさみ",
                "［～、］すてきですね。",
                "おしえます",
                "セロテープ"
            ],
            "correctIndex": 1,
            "explanation": "「［～、］すてきですね。」 means \"What a nice [～]!\"."
        },
        {
            "question": "How nice of you to come. (lit. Welcome.)",
            "options": [
                "いらっしゃい。",
                "おかあさん",
                "もう",
                "はな"
            ],
            "correctIndex": 0,
            "explanation": "「いらっしゃい。」 means \"How nice of you to come. (lit. Welcome.)\"."
        },
        {
            "question": "Do come in.",
            "options": [
                "もらいます",
                "スプーン",
                "シャツ",
                "どうぞ おあがり ください。"
            ],
            "correctIndex": 3,
            "explanation": "「どうぞ おあがり ください。」 (どうぞ お上がり ください。) means \"Do come in.\"."
        },
        {
            "question": "May I? (lit. I commit an incivility.)",
            "options": [
                "まだ",
                "しつれいします。",
                "りょこう",
                "きります"
            ],
            "correctIndex": 1,
            "explanation": "「しつれいします。」 (失礼します。) means \"May I? (lit. I commit an incivility.)\"."
        },
        {
            "question": "Won't you have [～]?/Would you like to have [～]? (used when offering something)",
            "options": [
                "ちち",
                "はし",
                "［～は］いかがですか。",
                "プレゼント"
            ],
            "correctIndex": 2,
            "explanation": "「［～は］いかがですか。」 means \"Won't you have [～]?/Would you like to have [～]? (used when offering something)\"."
        },
        {
            "question": "Thank you./I accept. (said before starting to eat or drink)",
            "options": [
                "きっぷ",
                "あげます",
                "いただきます。",
                "スプーン"
            ],
            "correctIndex": 2,
            "explanation": "「いただきます。」 means \"Thank you./I accept. (said before starting to eat or drink)\"."
        },
        {
            "question": "That was delicious. (said after eating or drinking)",
            "options": [
                "ごちそうさま［でした］。",
                "パソコン",
                "りょこう",
                "いただきます。"
            ],
            "correctIndex": 0,
            "explanation": "「ごちそうさま［でした］。」 means \"That was delicious. (said after eating or drinking)\"."
        },
        {
            "question": "Spain",
            "options": [
                "スパイン",
                "きっぷ",
                "プレゼント",
                "かみ"
            ],
            "correctIndex": 0,
            "explanation": "「スパイン」 (スペイン) means \"Spain\"."
        },
        {
            "question": "fax",
            "options": [
                "ちち",
                "おしえます",
                "にもつ",
                "ファクス"
            ],
            "correctIndex": 3,
            "explanation": "「ファクス」 means \"fax\"."
        },
        {
            "question": "word processor",
            "options": [
                "はは",
                "おかあさん",
                "おかね",
                "ワープロ"
            ],
            "correctIndex": 3,
            "explanation": "「ワープロ」 means \"word processor\"."
        },
        {
            "question": "Excuse me./Anybody home?/May I come in? (an expression used by a visitor)",
            "options": [
                "セロテープ",
                "ごめんください。",
                "プレゼント",
                "パンチ"
            ],
            "correctIndex": 1,
            "explanation": "「ごめんください。」 means \"Excuse me./Anybody home?/May I come in? (an expression used by a visitor)\"."
        },
        {
            "question": "trip, tour (～を します : travel, make a trip)",
            "options": [
                "かります",
                "りょこう",
                "きります",
                "プレゼント"
            ],
            "correctIndex": 1,
            "explanation": "「りょこう」 (旅行) means \"trip, tour (～を します : travel, make a trip)\"."
        },
        {
            "question": "souvenir, present",
            "options": [
                "はな",
                "スパイン",
                "おみやげ",
                "スプーン"
            ],
            "correctIndex": 2,
            "explanation": "「おみやげ」 (お土産) means \"souvenir, present\"."
        },
        {
            "question": "Europe",
            "options": [
                "いらっしゃい。",
                "かけます［でんわを～］",
                "おみやげ",
                "ヨーロッパ"
            ],
            "correctIndex": 3,
            "explanation": "「ヨーロッパ」 means \"Europe\"."
        }
    ],
    "Lesson 8": [
        {
            "question": "handsome",
            "options": [
                "ハンサム［な］",
                "あつい",
                "たべもの",
                "りょう"
            ],
            "correctIndex": 0,
            "explanation": "「ハンサム［な］」 means \"handsome\"."
        },
        {
            "question": "beautiful, clean",
            "options": [
                "また いらっしゃって ください。",
                "ならこうえん",
                "たかい",
                "きれい［な］"
            ],
            "correctIndex": 3,
            "explanation": "「きれい［な］」 means \"beautiful, clean\"."
        },
        {
            "question": "quiet",
            "options": [
                "おいしい",
                "きれい［な］",
                "くるま",
                "しずか［な］"
            ],
            "correctIndex": 3,
            "explanation": "「しずか［な］」 (静か［な］) means \"quiet\"."
        },
        {
            "question": "lively",
            "options": [
                "たべもの",
                "あおい",
                "にぎやか［な］",
                "やさしい"
            ],
            "correctIndex": 2,
            "explanation": "「にぎやか［な］」 means \"lively\"."
        },
        {
            "question": "famous",
            "options": [
                "ゆうめい［な］",
                "にほんの せいかつに なれましたか。",
                "あおい",
                "［いいえ、］けっこうです。"
            ],
            "correctIndex": 0,
            "explanation": "「ゆうめい［な］」 (有名［な］) means \"famous\"."
        },
        {
            "question": "helpful, kind, considerate (not used about one's own family members)",
            "options": [
                "また いらっしゃって ください。",
                "せいかつ",
                "あおい",
                "しんせつ［な］"
            ],
            "correctIndex": 3,
            "explanation": "「しんせつ［な］」 (親切［な］) means \"helpful, kind, considerate (not used about one's own family members)\"."
        },
        {
            "question": "healthy, energetic, cheerful",
            "options": [
                "～が、～",
                "どんな ～",
                "げんき［な］",
                "そうですね。"
            ],
            "correctIndex": 2,
            "explanation": "「げんき［な］」 (元気［な］) means \"healthy, energetic, cheerful\"."
        },
        {
            "question": "free (time)",
            "options": [
                "ちいさい",
                "あつい",
                "ひま［な］",
                "たべもの"
            ],
            "correctIndex": 2,
            "explanation": "「ひま［な］」 (暇［な］) means \"free (time)\"."
        },
        {
            "question": "convenient",
            "options": [
                "さむい",
                "しろい",
                "ひま［な］",
                "べんり［な］"
            ],
            "correctIndex": 3,
            "explanation": "「べんり［な］」 (便利［な］) means \"convenient\"."
        },
        {
            "question": "fine, nice, wonderful",
            "options": [
                "すてき［な］",
                "にほんの せいかつに なれましたか。",
                "あつい",
                "さむい"
            ],
            "correctIndex": 0,
            "explanation": "「すてき［な］」 means \"fine, nice, wonderful\"."
        },
        {
            "question": "big, large",
            "options": [
                "べんり［な］",
                "しずか［な］",
                "おおきい",
                "また いらっしゃって ください。"
            ],
            "correctIndex": 2,
            "explanation": "「おおきい」 (大きい) means \"big, large\"."
        },
        {
            "question": "small, little",
            "options": [
                "ちいさい",
                "とても",
                "つめたい",
                "そして"
            ],
            "correctIndex": 0,
            "explanation": "「ちいさい」 (小さい) means \"small, little\"."
        },
        {
            "question": "new, fresh",
            "options": [
                "さくら",
                "「しちにんの さむらい」",
                "あたらしい",
                "もう ～です［ね］。"
            ],
            "correctIndex": 2,
            "explanation": "「あたらしい」 (新しい) means \"new, fresh\"."
        },
        {
            "question": "old (not used to describe a person's age)",
            "options": [
                "あたらしい",
                "きれい［な］",
                "くるま",
                "ふるい"
            ],
            "correctIndex": 3,
            "explanation": "「ふるい」 (古い) means \"old (not used to describe a person's age)\"."
        },
        {
            "question": "good",
            "options": [
                "もう ～です［ね］。",
                "いい（よい）",
                "ゆうめい［な］",
                "ひくい"
            ],
            "correctIndex": 1,
            "explanation": "「いい（よい）」 means \"good\"."
        },
        {
            "question": "bad",
            "options": [
                "とても",
                "ならこうえん",
                "ひま［な］",
                "わるい"
            ],
            "correctIndex": 3,
            "explanation": "「わるい」 (悪い) means \"bad\"."
        },
        {
            "question": "hot",
            "options": [
                "わるい",
                "あつい",
                "たのしい",
                "ハンサム［な］"
            ],
            "correctIndex": 1,
            "explanation": "「あつい」 (暑い、熱い) means \"hot\"."
        },
        {
            "question": "cold (referring to temperature)",
            "options": [
                "りょう",
                "「しちにんの さむらい」",
                "さむい",
                "［いいえ、］けっこうです。"
            ],
            "correctIndex": 2,
            "explanation": "「さむい」 (寒い) means \"cold (referring to temperature)\"."
        },
        {
            "question": "cold (referring to touch)",
            "options": [
                "つめたい",
                "そして",
                "［～、］もう いっぱい いかがですか。",
                "ひま［な］"
            ],
            "correctIndex": 0,
            "explanation": "「つめたい」 (冷たい) means \"cold (referring to touch)\"."
        },
        {
            "question": "difficult",
            "options": [
                "あおい",
                "むずかしい",
                "また いらっしゃって ください。",
                "とても"
            ],
            "correctIndex": 1,
            "explanation": "「むずかしい」 (難しい) means \"difficult\"."
        },
        {
            "question": "easy",
            "options": [
                "べんきょう",
                "やさしい",
                "やま",
                "また いらっしゃって ください。"
            ],
            "correctIndex": 1,
            "explanation": "「やさしい」 (易しい) means \"easy\"."
        },
        {
            "question": "expensive, tall, high",
            "options": [
                "シャンハイ",
                "あまり",
                "たかい",
                "どんな ～"
            ],
            "correctIndex": 2,
            "explanation": "「たかい」 (高い) means \"expensive, tall, high\"."
        },
        {
            "question": "inexpensive",
            "options": [
                "やま",
                "やすい",
                "ところ",
                "［いいえ、］けっこうです。"
            ],
            "correctIndex": 1,
            "explanation": "「やすい」 (安い) means \"inexpensive\"."
        },
        {
            "question": "low",
            "options": [
                "ひくい",
                "やさしい",
                "びわこ",
                "どれ"
            ],
            "correctIndex": 0,
            "explanation": "「ひくい」 (低い) means \"low\"."
        },
        {
            "question": "interesting",
            "options": [
                "おもしろい",
                "ハンサム［な］",
                "りょう",
                "とても"
            ],
            "correctIndex": 0,
            "explanation": "「おもしろい」 means \"interesting\"."
        },
        {
            "question": "delicious, tasty",
            "options": [
                "ふるい",
                "もう ～です［ね］。",
                "おいしい",
                "せいかつ"
            ],
            "correctIndex": 2,
            "explanation": "「おいしい」 means \"delicious, tasty\"."
        },
        {
            "question": "busy",
            "options": [
                "いそがしい",
                "べんり［な］",
                "にほんの せいかつに なれましたか。",
                "しんせつ［な］"
            ],
            "correctIndex": 0,
            "explanation": "「いそがしい」 (忙しい) means \"busy\"."
        },
        {
            "question": "enjoyable",
            "options": [
                "たのしい",
                "べんり［な］",
                "むずかしい",
                "あかい"
            ],
            "correctIndex": 0,
            "explanation": "「たのしい」 (楽しい) means \"enjoyable\"."
        },
        {
            "question": "white",
            "options": [
                "しろい",
                "おおきい",
                "シャンハイ",
                "［お］しごと"
            ],
            "correctIndex": 0,
            "explanation": "「しろい」 (白い) means \"white\"."
        },
        {
            "question": "black",
            "options": [
                "くろい",
                "たかい",
                "［いいえ、］けっこうです。",
                "あおい"
            ],
            "correctIndex": 0,
            "explanation": "「くろい」 (黒い) means \"black\"."
        },
        {
            "question": "red",
            "options": [
                "ふじさん",
                "［お］しごと",
                "あかい",
                "とても"
            ],
            "correctIndex": 2,
            "explanation": "「あかい」 (赤い) means \"red\"."
        },
        {
            "question": "blue",
            "options": [
                "しろい",
                "いいえ。",
                "あおい",
                "そして"
            ],
            "correctIndex": 2,
            "explanation": "「あおい」 (青い) means \"blue\"."
        },
        {
            "question": "cherry (blossom)",
            "options": [
                "ひま［な］",
                "ところ",
                "［お］しごと",
                "さくら"
            ],
            "correctIndex": 3,
            "explanation": "「さくら」 (桜) means \"cherry (blossom)\"."
        },
        {
            "question": "mountain",
            "options": [
                "たのしい",
                "どんな ～",
                "やま",
                "しろい"
            ],
            "correctIndex": 2,
            "explanation": "「やま」 (山) means \"mountain\"."
        },
        {
            "question": "town, city",
            "options": [
                "ゆうめい［な］",
                "まち",
                "もう ～です［ね］。",
                "すてき［な］"
            ],
            "correctIndex": 1,
            "explanation": "「まち」 (町) means \"town, city\"."
        },
        {
            "question": "food",
            "options": [
                "たべもの",
                "やま",
                "べんきょう",
                "そろそろ しつれいします。"
            ],
            "correctIndex": 0,
            "explanation": "「たべもの」 (食べ物) means \"food\"."
        },
        {
            "question": "place",
            "options": [
                "きんかくじ",
                "ところ",
                "しずか［な］",
                "きれい［な］"
            ],
            "correctIndex": 1,
            "explanation": "「ところ」 (所) means \"place\"."
        },
        {
            "question": "dormitory",
            "options": [
                "りょう",
                "おげんきですか。",
                "しずか［な］",
                "あまり"
            ],
            "correctIndex": 0,
            "explanation": "「りょう」 (寮) means \"dormitory\"."
        },
        {
            "question": "restaurant",
            "options": [
                "わるい",
                "レストラン",
                "いそがしい",
                "きれい［な］"
            ],
            "correctIndex": 1,
            "explanation": "「レストラン」 means \"restaurant\"."
        },
        {
            "question": "life",
            "options": [
                "どう",
                "ふじさん",
                "せいかつ",
                "そうですね。"
            ],
            "correctIndex": 2,
            "explanation": "「せいかつ」 (生活) means \"life\"."
        },
        {
            "question": "work, business (～を します : do one's job, work)",
            "options": [
                "［お］しごと",
                "せいかつ",
                "ところ",
                "そして"
            ],
            "correctIndex": 0,
            "explanation": "「［お］しごと」 (［お］仕事) means \"work, business (～を します : do one's job, work)\"."
        },
        {
            "question": "how",
            "options": [
                "どう",
                "ふじさん",
                "りょう",
                "［お］しごと"
            ],
            "correctIndex": 0,
            "explanation": "「どう」 means \"how\"."
        },
        {
            "question": "what kind of ～",
            "options": [
                "まち",
                "どんな ～",
                "ハンサム［な］",
                "とても"
            ],
            "correctIndex": 1,
            "explanation": "「どんな ～」 means \"what kind of ～\"."
        },
        {
            "question": "very",
            "options": [
                "きれい［な］",
                "すてき［な］",
                "とても",
                "べんり［な］"
            ],
            "correctIndex": 2,
            "explanation": "「とても」 means \"very\"."
        },
        {
            "question": "not so (used with negatives)",
            "options": [
                "まち",
                "あまり",
                "ならこうえん",
                "ひくい"
            ],
            "correctIndex": 1,
            "explanation": "「あまり」 means \"not so (used with negatives)\"."
        },
        {
            "question": "and (used to connect sentences)",
            "options": [
                "そして",
                "げんき［な］",
                "ひくい",
                "また いらっしゃって ください。"
            ],
            "correctIndex": 0,
            "explanation": "「そして」 means \"and (used to connect sentences)\"."
        },
        {
            "question": "～, but ～",
            "options": [
                "ひま［な］",
                "～が、～",
                "べんきょう",
                "りょう"
            ],
            "correctIndex": 1,
            "explanation": "「～が、～」 means \"～, but ～\"."
        },
        {
            "question": "How are you?",
            "options": [
                "どれ",
                "［～、］もう いっぱい いかがですか。",
                "おげんきですか。",
                "いそがしい"
            ],
            "correctIndex": 2,
            "explanation": "「おげんきですか。」 (お元気ですか。) means \"How are you?\"."
        },
        {
            "question": "Well let me see. (pausing)",
            "options": [
                "ひま［な］",
                "しずか［な］",
                "すてき［な］",
                "そうですね。"
            ],
            "correctIndex": 3,
            "explanation": "「そうですね。」 means \"Well let me see. (pausing)\"."
        },
        {
            "question": "Won't you have another cup of [～]?",
            "options": [
                "［お］しごと",
                "たべもの",
                "［～、］もう いっぱい いかがですか。",
                "ハンサム［な］"
            ],
            "correctIndex": 2,
            "explanation": "「［～、］もう いっぱい いかがですか。」 (［～、］もう 一杯 いかがですか。) means \"Won't you have another cup of [～]?\"."
        },
        {
            "question": "No, thank you",
            "options": [
                "いい（よい）",
                "あたらしい",
                "［いいえ、］けっこうです。",
                "ハンサム［な］"
            ],
            "correctIndex": 2,
            "explanation": "「［いいえ、］けっこうです。」 means \"No, thank you\"."
        },
        {
            "question": "It's already ～[, isn't it?]",
            "options": [
                "いそがしい",
                "もう ～です［ね］。",
                "いいえ。",
                "たのしい"
            ],
            "correctIndex": 1,
            "explanation": "「もう ～です［ね］。」 means \"It's already ～[, isn't it?]\"."
        },
        {
            "question": "It's time I was going.",
            "options": [
                "すてき［な］",
                "ゆうめい［な］",
                "にほんの せいかつに なれましたか。",
                "そろそろ しつれいします。"
            ],
            "correctIndex": 3,
            "explanation": "「そろそろ しつれいします。」 (そろそろ 失礼します。) means \"It's time I was going.\"."
        },
        {
            "question": "Not at all.",
            "options": [
                "べんきょう",
                "あつい",
                "いいえ。",
                "べんり［な］"
            ],
            "correctIndex": 2,
            "explanation": "「いいえ。」 means \"Not at all.\"."
        },
        {
            "question": "Please come again",
            "options": [
                "そして",
                "また いらっしゃって ください。",
                "ひま［な］",
                "やま"
            ],
            "correctIndex": 1,
            "explanation": "「また いらっしゃって ください。」 means \"Please come again\"."
        },
        {
            "question": "Shanghai (上海)",
            "options": [
                "たかい",
                "べんきょう",
                "シャンハイ",
                "いい（よい）"
            ],
            "correctIndex": 2,
            "explanation": "「シャンハイ」 means \"Shanghai (上海)\"."
        },
        {
            "question": "Kinkakuji Temple (the Golden Pavilion)",
            "options": [
                "シャンハイ",
                "りょう",
                "いそがしい",
                "きんかくじ"
            ],
            "correctIndex": 3,
            "explanation": "「きんかくじ」 (金閣寺) means \"Kinkakuji Temple (the Golden Pavilion)\"."
        },
        {
            "question": "Nara Park",
            "options": [
                "ふるい",
                "「しちにんの さむらい」",
                "ならこうえん",
                "びわこ"
            ],
            "correctIndex": 2,
            "explanation": "「ならこうえん」 (奈良公園) means \"Nara Park\"."
        },
        {
            "question": "Mt. Fuji, the highest mountain in Japan",
            "options": [
                "わるい",
                "ふじさん",
                "おおきい",
                "きんかくじ"
            ],
            "correctIndex": 1,
            "explanation": "「ふじさん」 (富士山) means \"Mt. Fuji, the highest mountain in Japan\"."
        },
        {
            "question": "'The Seven Samurai', a classic movie by Akira Kurosawa",
            "options": [
                "どんな ～",
                "しろい",
                "ちいさい",
                "「しちにんの さむらい」"
            ],
            "correctIndex": 3,
            "explanation": "「「しちにんの さむらい」」 (「七人の 侍」) means \"'The Seven Samurai', a classic movie by Akira Kurosawa\"."
        },
        {
            "question": "car, vehicle",
            "options": [
                "そろそろ しつれいします。",
                "くるま",
                "やすい",
                "べんきょう"
            ],
            "correctIndex": 1,
            "explanation": "「くるま」 (車) means \"car, vehicle\"."
        },
        {
            "question": "study",
            "options": [
                "べんきょう",
                "やさしい",
                "「しちにんの さむらい」",
                "わるい"
            ],
            "correctIndex": 0,
            "explanation": "「べんきょう」 (勉強) means \"study\"."
        },
        {
            "question": "which one (of three or more)",
            "options": [
                "もう ～です［ね］。",
                "ひくい",
                "どれ",
                "いそがしい"
            ],
            "correctIndex": 2,
            "explanation": "「どれ」 means \"which one (of three or more)\"."
        },
        {
            "question": "Have you got used to the life in Japan?",
            "options": [
                "にほんの せいかつに なれましたか。",
                "あおい",
                "すてき［な］",
                "いい（よい）"
            ],
            "correctIndex": 0,
            "explanation": "「にほんの せいかつに なれましたか。」 (日本の 生活に 慣れましたか。) means \"Have you got used to the life in Japan?\"."
        },
        {
            "question": "Lake Biwa, the biggest lake in Japan",
            "options": [
                "びわこ",
                "「しちにんの さむらい」",
                "しろい",
                "べんきょう"
            ],
            "correctIndex": 0,
            "explanation": "「びわこ」 (琵琶湖) means \"Lake Biwa, the biggest lake in Japan\"."
        }
    ],
    "Lesson 9": [
        {
            "question": "understand",
            "options": [
                "ざんねんです［が］",
                "わかります",
                "すき［な］",
                "ごしゅじん"
            ],
            "correctIndex": 1,
            "explanation": "「わかります」 means \"understand\"."
        },
        {
            "question": "have",
            "options": [
                "～から",
                "ひらがな",
                "あります",
                "はやく"
            ],
            "correctIndex": 2,
            "explanation": "「あります」 means \"have\"."
        },
        {
            "question": "like",
            "options": [
                "ひらがな",
                "すき［な］",
                "やくそく",
                "ジャズ"
            ],
            "correctIndex": 1,
            "explanation": "「すき［な］」 (好き［な］) means \"like\"."
        },
        {
            "question": "dislike",
            "options": [
                "つま／かない",
                "りょこう",
                "ぜんぜん",
                "きらい［な］"
            ],
            "correctIndex": 3,
            "explanation": "「きらい［な］」 (嫌い［な］) means \"dislike\"."
        },
        {
            "question": "good at",
            "options": [
                "［～は］ちょっと……。",
                "～から",
                "じょうず［な］",
                "つま／かない"
            ],
            "correctIndex": 2,
            "explanation": "「じょうず［な］」 (上手［な］) means \"good at\"."
        },
        {
            "question": "poor at",
            "options": [
                "はやく",
                "ごしゅじん",
                "こども",
                "へた［な］"
            ],
            "correctIndex": 3,
            "explanation": "「へた［な］」 (下手［な］) means \"poor at\"."
        },
        {
            "question": "drinks",
            "options": [
                "やきゅう",
                "のみもの",
                "ジャズ",
                "じかん"
            ],
            "correctIndex": 1,
            "explanation": "「のみもの」 (飲み物) means \"drinks\"."
        },
        {
            "question": "dish (cooked food), cooking (～を します : cook)",
            "options": [
                "いっしょに いかがですか。",
                "じ",
                "また こんど おねがいします。",
                "りょうり"
            ],
            "correctIndex": 3,
            "explanation": "「りょうり」 (料理) means \"dish (cooked food), cooking (～を します : cook)\"."
        },
        {
            "question": "sport (～を します : play sports)",
            "options": [
                "スポーツ",
                "すみません。",
                "アルバイト",
                "もしもし"
            ],
            "correctIndex": 0,
            "explanation": "「スポーツ」 means \"sport (～を します : play sports)\"."
        },
        {
            "question": "baseball (～を します : play baseball)",
            "options": [
                "やきゅう",
                "やくそく",
                "アルバイト",
                "ぜんぜん"
            ],
            "correctIndex": 0,
            "explanation": "「やきゅう」 (野球) means \"baseball (～を します : play baseball)\"."
        },
        {
            "question": "dance (～を します : dance)",
            "options": [
                "アルバイト",
                "やきゅう",
                "クラシック",
                "ダンス"
            ],
            "correctIndex": 3,
            "explanation": "「ダンス」 means \"dance (～を します : dance)\"."
        },
        {
            "question": "trip, tour (～［を］します : travel, make a trip)",
            "options": [
                "りょこう",
                "～から",
                "おざわせいじ",
                "え"
            ],
            "correctIndex": 0,
            "explanation": "「りょこう」 (旅行) means \"trip, tour (～［を］します : travel, make a trip)\"."
        },
        {
            "question": "music",
            "options": [
                "ローマじ",
                "わかります",
                "かんじ",
                "おんがく"
            ],
            "correctIndex": 3,
            "explanation": "「おんがく」 (音楽) means \"music\"."
        },
        {
            "question": "song",
            "options": [
                "ローマじ",
                "こまかい おかね",
                "うた",
                "やくそく"
            ],
            "correctIndex": 2,
            "explanation": "「うた」 (歌) means \"song\"."
        },
        {
            "question": "classical music",
            "options": [
                "うた",
                "たくさん",
                "よく",
                "クラシック"
            ],
            "correctIndex": 3,
            "explanation": "「クラシック」 means \"classical music\"."
        },
        {
            "question": "jazz",
            "options": [
                "はやく",
                "じょうず［な］",
                "いいですよ。",
                "ジャズ"
            ],
            "correctIndex": 3,
            "explanation": "「ジャズ」 means \"jazz\"."
        },
        {
            "question": "concert",
            "options": [
                "アルバイト",
                "はやく",
                "やきゅう",
                "コンサート"
            ],
            "correctIndex": 3,
            "explanation": "「コンサート」 means \"concert\"."
        },
        {
            "question": "karaoke",
            "options": [
                "カラオケ",
                "また こんど おねがいします。",
                "こども",
                "うた"
            ],
            "correctIndex": 0,
            "explanation": "「カラオケ」 means \"karaoke\"."
        },
        {
            "question": "Kabuki (traditional Japanese musical drama)",
            "options": [
                "だめですか。",
                "ざんねんです［が］",
                "かぶき",
                "おざわせいじ"
            ],
            "correctIndex": 2,
            "explanation": "「かぶき」 (歌舞伎) means \"Kabuki (traditional Japanese musical drama)\"."
        },
        {
            "question": "picture, drawing",
            "options": [
                "かんじ",
                "よく",
                "おっと／しゅじん",
                "え"
            ],
            "correctIndex": 3,
            "explanation": "「え」 (絵) means \"picture, drawing\"."
        },
        {
            "question": "letter, character",
            "options": [
                "はやく",
                "え",
                "じ",
                "すき［な］"
            ],
            "correctIndex": 2,
            "explanation": "「じ」 (字) means \"letter, character\"."
        },
        {
            "question": "Chinese characters",
            "options": [
                "ざんねんです［ね］。",
                "ぜんぜん",
                "よく",
                "かんじ"
            ],
            "correctIndex": 3,
            "explanation": "「かんじ」 (漢字) means \"Chinese characters\"."
        },
        {
            "question": "hiragana script",
            "options": [
                "たくさん",
                "おくさん",
                "こども",
                "ひらがな"
            ],
            "correctIndex": 3,
            "explanation": "「ひらがな」 means \"hiragana script\"."
        },
        {
            "question": "katakana script",
            "options": [
                "すこし",
                "りょうり",
                "かたかな",
                "ごしゅじん"
            ],
            "correctIndex": 2,
            "explanation": "「かたかな」 means \"katakana script\"."
        },
        {
            "question": "the Roman alphabet",
            "options": [
                "ざんねんです［ね］。",
                "ローマじ",
                "～から",
                "かぶき"
            ],
            "correctIndex": 1,
            "explanation": "「ローマじ」 (ローマ字) means \"the Roman alphabet\"."
        },
        {
            "question": "small change",
            "options": [
                "きらい［な］",
                "かたかな",
                "すき［な］",
                "こまかい おかね"
            ],
            "correctIndex": 3,
            "explanation": "「こまかい おかね」 (細かい お金) means \"small change\"."
        },
        {
            "question": "ticket",
            "options": [
                "チケット",
                "～から",
                "アルバイト",
                "どうして"
            ],
            "correctIndex": 0,
            "explanation": "「チケット」 means \"ticket\"."
        },
        {
            "question": "time",
            "options": [
                "ひらがな",
                "ようじ",
                "じょうず［な］",
                "じかん"
            ],
            "correctIndex": 3,
            "explanation": "「じかん」 (時間) means \"time\"."
        },
        {
            "question": "something to do, errand",
            "options": [
                "ようじ",
                "おくさん",
                "［～は］ちょっと……。",
                "ローマじ"
            ],
            "correctIndex": 0,
            "explanation": "「ようじ」 (用事) means \"something to do, errand\"."
        },
        {
            "question": "appointment, promise (～［を］します : promise)",
            "options": [
                "つま／かない",
                "かんじ",
                "やくそく",
                "おんがく"
            ],
            "correctIndex": 2,
            "explanation": "「やくそく」 (約束) means \"appointment, promise (～［を］します : promise)\"."
        },
        {
            "question": "side job (～を します : work part-time)",
            "options": [
                "ローマじ",
                "アルバイト",
                "ごしゅじん",
                "おざわせいじ"
            ],
            "correctIndex": 1,
            "explanation": "「アルバイト」 means \"side job (～を します : work part-time)\"."
        },
        {
            "question": "(someone else's) husband",
            "options": [
                "ローマじ",
                "おざわせいじ",
                "～から",
                "ごしゅじん"
            ],
            "correctIndex": 3,
            "explanation": "「ごしゅじん」 (ご主人) means \"(someone else's) husband\"."
        },
        {
            "question": "(my) husband",
            "options": [
                "つま／かない",
                "おっと／しゅじん",
                "はやく",
                "スポーツ"
            ],
            "correctIndex": 1,
            "explanation": "「おっと／しゅじん」 (夫／主人) means \"(my) husband\"."
        },
        {
            "question": "(someone else's) wife",
            "options": [
                "のみもの",
                "おくさん",
                "スポーツ",
                "［～は］ちょっと……。"
            ],
            "correctIndex": 1,
            "explanation": "「おくさん」 (奥さん) means \"(someone else's) wife\"."
        },
        {
            "question": "(my) wife",
            "options": [
                "つま／かない",
                "あります",
                "りょうり",
                "クラシック"
            ],
            "correctIndex": 0,
            "explanation": "「つま／かない」 (妻／家内) means \"(my) wife\"."
        },
        {
            "question": "child",
            "options": [
                "ぜんぜん",
                "コンサート",
                "スポーツ",
                "こども"
            ],
            "correctIndex": 3,
            "explanation": "「こども」 (子ども) means \"child\"."
        },
        {
            "question": "well, much",
            "options": [
                "へた［な］",
                "わかります",
                "りょこう",
                "よく"
            ],
            "correctIndex": 3,
            "explanation": "「よく」 means \"well, much\"."
        },
        {
            "question": "mostly, roughly",
            "options": [
                "あります",
                "わかります",
                "チケット",
                "だいたい"
            ],
            "correctIndex": 3,
            "explanation": "「だいたい」 means \"mostly, roughly\"."
        },
        {
            "question": "many, much",
            "options": [
                "ざんねんです［が］",
                "たくさん",
                "やきゅう",
                "どうして"
            ],
            "correctIndex": 1,
            "explanation": "「たくさん」 means \"many, much\"."
        },
        {
            "question": "a little, a few",
            "options": [
                "ざんねんです［が］",
                "すこし",
                "かして ください。",
                "ジャズ"
            ],
            "correctIndex": 1,
            "explanation": "「すこし」 (少し) means \"a little, a few\"."
        },
        {
            "question": "not at all (used with negatives)",
            "options": [
                "ぜんぜん",
                "かして ください。",
                "コンサート",
                "りょこう"
            ],
            "correctIndex": 0,
            "explanation": "「ぜんぜん」 (全然) means \"not at all (used with negatives)\"."
        },
        {
            "question": "early, quickly, fast",
            "options": [
                "おざわせいじ",
                "おんがく",
                "クラシック",
                "はやく"
            ],
            "correctIndex": 3,
            "explanation": "「はやく」 (早く、速く) means \"early, quickly, fast\"."
        },
        {
            "question": "because ～",
            "options": [
                "じょうず［な］",
                "たくさん",
                "わかります",
                "～から"
            ],
            "correctIndex": 3,
            "explanation": "「～から」 means \"because ～\"."
        },
        {
            "question": "why",
            "options": [
                "ひらがな",
                "どうして",
                "おざわせいじ",
                "のみもの"
            ],
            "correctIndex": 1,
            "explanation": "「どうして」 means \"why\"."
        },
        {
            "question": "Please lend (it to me)",
            "options": [
                "つま／かない",
                "たくさん",
                "かして ください。",
                "また こんど おねがいします。"
            ],
            "correctIndex": 2,
            "explanation": "「かして ください。」 (貸して ください。) means \"Please lend (it to me)\"."
        },
        {
            "question": "Sure./Certainly.",
            "options": [
                "おんがく",
                "かぶき",
                "いいですよ。",
                "はやく"
            ],
            "correctIndex": 2,
            "explanation": "「いいですよ。」 means \"Sure./Certainly.\"."
        },
        {
            "question": "I'm sorry [, but], unfortunately",
            "options": [
                "すみません。",
                "ざんねんです［が］",
                "じかん",
                "やきゅう"
            ],
            "correctIndex": 1,
            "explanation": "「ざんねんです［が］」 (残念です［が］) means \"I'm sorry [, but], unfortunately\"."
        },
        {
            "question": "oh",
            "options": [
                "ああ",
                "ぜんぜん",
                "おくさん",
                "りょこう"
            ],
            "correctIndex": 0,
            "explanation": "「ああ」 means \"oh\"."
        },
        {
            "question": "Won't you join me (us)?",
            "options": [
                "おくさん",
                "え",
                "いっしょに いかがですか。",
                "いいですよ。"
            ],
            "correctIndex": 2,
            "explanation": "「いっしょに いかがですか。」 means \"Won't you join me (us)?\"."
        },
        {
            "question": "[～] is a bit difficult. (a euphemism used when declining an invitation)",
            "options": [
                "ひらがな",
                "［～は］ちょっと……。",
                "おっと／しゅじん",
                "わかります"
            ],
            "correctIndex": 1,
            "explanation": "「［～は］ちょっと……。」 means \"[～] is a bit difficult. (a euphemism used when declining an invitation)\"."
        },
        {
            "question": "So you can't (come)?",
            "options": [
                "うた",
                "やきゅう",
                "こまかい おかね",
                "だめですか。"
            ],
            "correctIndex": 3,
            "explanation": "「だめですか。」 means \"So you can't (come)?\"."
        },
        {
            "question": "Please ask me again some other time. (used when refusing an invitation indirectly, considering someone's feelings)",
            "options": [
                "かんじ",
                "じかん",
                "ざんねんです［が］",
                "また こんど おねがいします。"
            ],
            "correctIndex": 3,
            "explanation": "「また こんど おねがいします。」 (また 今度 お願いします。) means \"Please ask me again some other time. (used when refusing an invitation indirectly, considering someone's feelings)\"."
        },
        {
            "question": "I'm sorry (to hear that)./That's a pity.",
            "options": [
                "［～は］ちょっと……。",
                "つま／かない",
                "ざんねんです［ね］。",
                "きらい［な］"
            ],
            "correctIndex": 2,
            "explanation": "「ざんねんです［ね］。」 (残念です［ね］。) means \"I'm sorry (to hear that)./That's a pity.\"."
        },
        {
            "question": "I am sorry.",
            "options": [
                "すみません。",
                "カラオケ",
                "アルバイト",
                "コンサート"
            ],
            "correctIndex": 0,
            "explanation": "「すみません。」 means \"I am sorry.\"."
        },
        {
            "question": "hello (used on the phone)",
            "options": [
                "あります",
                "また こんど おねがいします。",
                "ざんねんです［ね］。",
                "もしもし"
            ],
            "correctIndex": 3,
            "explanation": "「もしもし」 means \"hello (used on the phone)\"."
        },
        {
            "question": "famous Japanese conductor (1935-)",
            "options": [
                "おんがく",
                "また こんど おねがいします。",
                "おざわせいじ",
                "アルバイト"
            ],
            "correctIndex": 2,
            "explanation": "「おざわせいじ」 (小沢征爾) means \"famous Japanese conductor (1935-)\"."
        }
    ],
    "Lesson 10": [
        {
            "question": "exist, be (referring to inanimate things)",
            "options": [
                "パンダ",
                "おとこの こ",
                "あります",
                "もの"
            ],
            "correctIndex": 2,
            "explanation": "「あります」 means \"exist, be (referring to inanimate things)\"."
        },
        {
            "question": "exist, be (referring to animate things)",
            "options": [
                "［どうも］すみません。",
                "いろいろ［な］",
                "います",
                "きっさてん"
            ],
            "correctIndex": 2,
            "explanation": "「います」 means \"exist, be (referring to animate things)\"."
        },
        {
            "question": "various",
            "options": [
                "います",
                "いろいろ［な］",
                "－だんめ",
                "パンダ"
            ],
            "correctIndex": 1,
            "explanation": "「いろいろ［な］」 means \"various\"."
        },
        {
            "question": "man",
            "options": [
                "でんち",
                "おとこの ひと",
                "ナンプラー",
                "～や ～［など］"
            ],
            "correctIndex": 1,
            "explanation": "「おとこの ひと」 (男の 人) means \"man\"."
        },
        {
            "question": "woman",
            "options": [
                "あります",
                "アジアストア",
                "スパイス・コーナー",
                "おんなの ひと"
            ],
            "correctIndex": 3,
            "explanation": "「おんなの ひと」 (女の 人) means \"woman\"."
        },
        {
            "question": "boy",
            "options": [
                "おく",
                "おとこの こ",
                "スイッチ",
                "まえ"
            ],
            "correctIndex": 1,
            "explanation": "「おとこの こ」 (男の 子) means \"boy\"."
        },
        {
            "question": "girl",
            "options": [
                "おんなの ひと",
                "～や",
                "おんなの こ",
                "うしろ"
            ],
            "correctIndex": 2,
            "explanation": "「おんなの こ」 (女の 子) means \"girl\"."
        },
        {
            "question": "dog",
            "options": [
                "ATM",
                "ぞう",
                "いぬ",
                "うしろ"
            ],
            "correctIndex": 2,
            "explanation": "「いぬ」 (犬) means \"dog\"."
        },
        {
            "question": "cat",
            "options": [
                "ねこ",
                "れいぞうこ",
                "スパイス・コーナー",
                "うしろ"
            ],
            "correctIndex": 0,
            "explanation": "「ねこ」 (猫) means \"cat\"."
        },
        {
            "question": "panda",
            "options": [
                "パンダ",
                "ベッド",
                "ナンプラー",
                "あります"
            ],
            "correctIndex": 0,
            "explanation": "「パンダ」 means \"panda\"."
        },
        {
            "question": "elephant",
            "options": [
                "のりば",
                "ベッド",
                "ぞう",
                "コンビニ"
            ],
            "correctIndex": 2,
            "explanation": "「ぞう」 (象) means \"elephant\"."
        },
        {
            "question": "tree, wood",
            "options": [
                "き",
                "れいぞうこ",
                "パンダ",
                "まど"
            ],
            "correctIndex": 0,
            "explanation": "「き」 (木) means \"tree, wood\"."
        },
        {
            "question": "thing",
            "options": [
                "けん",
                "ひだり",
                "なか",
                "もの"
            ],
            "correctIndex": 3,
            "explanation": "「もの」 (物) means \"thing\"."
        },
        {
            "question": "battery",
            "options": [
                "でんち",
                "おとこの こ",
                "ドア",
                "スパイス・コーナー"
            ],
            "correctIndex": 0,
            "explanation": "「でんち」 (電池) means \"battery\"."
        },
        {
            "question": "box",
            "options": [
                "はこ",
                "した",
                "チリソース",
                "となり"
            ],
            "correctIndex": 0,
            "explanation": "「はこ」 (箱) means \"box\"."
        },
        {
            "question": "switch",
            "options": [
                "まえ",
                "おく",
                "スイッチ",
                "おとこの ひと"
            ],
            "correctIndex": 2,
            "explanation": "「スイッチ」 means \"switch\"."
        },
        {
            "question": "refrigerator",
            "options": [
                "きっさてん",
                "そと",
                "れいぞうこ",
                "ちかく"
            ],
            "correctIndex": 2,
            "explanation": "「れいぞうこ」 (冷蔵庫) means \"refrigerator\"."
        },
        {
            "question": "table",
            "options": [
                "ドア",
                "ぞう",
                "テーブル",
                "ほんや"
            ],
            "correctIndex": 2,
            "explanation": "「テーブル」 means \"table\"."
        },
        {
            "question": "bed",
            "options": [
                "いちばん ～",
                "チリソース",
                "テーブル",
                "ベッド"
            ],
            "correctIndex": 3,
            "explanation": "「ベッド」 means \"bed\"."
        },
        {
            "question": "shelf",
            "options": [
                "パンダ",
                "みぎ",
                "ドア",
                "たな"
            ],
            "correctIndex": 3,
            "explanation": "「たな」 (棚) means \"shelf\"."
        },
        {
            "question": "door",
            "options": [
                "ドア",
                "ひだり",
                "おんなの こ",
                "とうきょう ディズニーランド"
            ],
            "correctIndex": 0,
            "explanation": "「ドア」 means \"door\"."
        },
        {
            "question": "window",
            "options": [
                "まど",
                "［どうも］すみません。",
                "ビル",
                "なか"
            ],
            "correctIndex": 0,
            "explanation": "「まど」 (窓) means \"window\"."
        },
        {
            "question": "mailbox, postbox",
            "options": [
                "ポスト",
                "いちばん した",
                "［どうも］すみません。",
                "した"
            ],
            "correctIndex": 0,
            "explanation": "「ポスト」 means \"mailbox, postbox\"."
        },
        {
            "question": "building",
            "options": [
                "おとこの こ",
                "もの",
                "ビル",
                "となり"
            ],
            "correctIndex": 2,
            "explanation": "「ビル」 means \"building\"."
        },
        {
            "question": "cash machine, ATM (Automatic Teller Machine)",
            "options": [
                "うえ",
                "あります",
                "ATM",
                "いちばん ～"
            ],
            "correctIndex": 2,
            "explanation": "「ATM」 means \"cash machine, ATM (Automatic Teller Machine)\"."
        },
        {
            "question": "convenience store",
            "options": [
                "たな",
                "あいだ",
                "とうきょう ディズニーランド",
                "コンビニ"
            ],
            "correctIndex": 3,
            "explanation": "「コンビニ」 means \"convenience store\"."
        },
        {
            "question": "park",
            "options": [
                "おく",
                "こうえん",
                "そと",
                "となり"
            ],
            "correctIndex": 1,
            "explanation": "「こうえん」 (公園) means \"park\"."
        },
        {
            "question": "café, coffee shop",
            "options": [
                "れいぞうこ",
                "あいだ",
                "き",
                "きっさてん"
            ],
            "correctIndex": 3,
            "explanation": "「きっさてん」 (喫茶店) means \"café, coffee shop\"."
        },
        {
            "question": "～ shop, ～ store",
            "options": [
                "～や",
                "はこ",
                "いちばん ～",
                "なか"
            ],
            "correctIndex": 0,
            "explanation": "「～や」 (～屋) means \"～ shop, ～ store\"."
        },
        {
            "question": "a fixed place to catch taxis, trains, etc.",
            "options": [
                "のりば",
                "でんち",
                "おとこの こ",
                "おく"
            ],
            "correctIndex": 0,
            "explanation": "「のりば」 (乗り場) means \"a fixed place to catch taxis, trains, etc.\"."
        },
        {
            "question": "prefecture",
            "options": [
                "コーナー",
                "けん",
                "ぞう",
                "れいぞうこ"
            ],
            "correctIndex": 1,
            "explanation": "「けん」 (県) means \"prefecture\"."
        },
        {
            "question": "on, above, over",
            "options": [
                "うえ",
                "けん",
                "もの",
                "なか"
            ],
            "correctIndex": 0,
            "explanation": "「うえ」 (上) means \"on, above, over\"."
        },
        {
            "question": "under, below, beneath",
            "options": [
                "～や",
                "ひだり",
                "いぬ",
                "した"
            ],
            "correctIndex": 3,
            "explanation": "「した」 (下) means \"under, below, beneath\"."
        },
        {
            "question": "front, before",
            "options": [
                "まえ",
                "とうきょう ディズニーランド",
                "おとこの こ",
                "いちばん ～"
            ],
            "correctIndex": 0,
            "explanation": "「まえ」 (前) means \"front, before\"."
        },
        {
            "question": "back, behind",
            "options": [
                "そと",
                "うしろ",
                "なか",
                "パンダ"
            ],
            "correctIndex": 1,
            "explanation": "「うしろ」 means \"back, behind\"."
        },
        {
            "question": "right [side]",
            "options": [
                "ビル",
                "［どうも］すみません。",
                "みぎ",
                "－だんめ"
            ],
            "correctIndex": 2,
            "explanation": "「みぎ」 (右) means \"right [side]\"."
        },
        {
            "question": "left [side]",
            "options": [
                "ひだり",
                "ドア",
                "ちかく",
                "［どうも］すみません。"
            ],
            "correctIndex": 0,
            "explanation": "「ひだり」 (左) means \"left [side]\"."
        },
        {
            "question": "in, inside",
            "options": [
                "うしろ",
                "いぬ",
                "なか",
                "いろいろ［な］"
            ],
            "correctIndex": 2,
            "explanation": "「なか」 (中) means \"in, inside\"."
        },
        {
            "question": "outside",
            "options": [
                "ポスト",
                "フィルム",
                "ナンプラー",
                "そと"
            ],
            "correctIndex": 3,
            "explanation": "「そと」 (外) means \"outside\"."
        },
        {
            "question": "next, next door",
            "options": [
                "となり",
                "うえ",
                "こうえん",
                "なか"
            ],
            "correctIndex": 0,
            "explanation": "「となり」 (隣) means \"next, next door\"."
        },
        {
            "question": "near, vicinity",
            "options": [
                "ぞう",
                "スパイス・コーナー",
                "きっさてん",
                "ちかく"
            ],
            "correctIndex": 3,
            "explanation": "「ちかく」 (近く) means \"near, vicinity\"."
        },
        {
            "question": "between, among",
            "options": [
                "のりば",
                "でんち",
                "あいだ",
                "おとこの こ"
            ],
            "correctIndex": 2,
            "explanation": "「あいだ」 (間) means \"between, among\"."
        },
        {
            "question": "～, ～, and so on",
            "options": [
                "まえ",
                "－だんめ",
                "～や ～［など］",
                "うえ"
            ],
            "correctIndex": 2,
            "explanation": "「～や ～［など］」 means \"～, ～, and so on\"."
        },
        {
            "question": "Thank you.",
            "options": [
                "ほんや",
                "アジアストア",
                "うしろ",
                "［どうも］すみません。"
            ],
            "correctIndex": 3,
            "explanation": "「［どうも］すみません。」 means \"Thank you.\"."
        },
        {
            "question": "nam pla",
            "options": [
                "おんなの ひと",
                "ビル",
                "ナンプラー",
                "チリソース"
            ],
            "correctIndex": 2,
            "explanation": "「ナンプラー」 means \"nam pla\"."
        },
        {
            "question": "corner, section",
            "options": [
                "ほんや",
                "コーナー",
                "ちかく",
                "ビル"
            ],
            "correctIndex": 1,
            "explanation": "「コーナー」 means \"corner, section\"."
        },
        {
            "question": "the bottom",
            "options": [
                "いちばん した",
                "チリソース",
                "たな",
                "いぬ"
            ],
            "correctIndex": 0,
            "explanation": "「いちばん した」 (いちばん 下) means \"the bottom\"."
        },
        {
            "question": "Tokyo Disneyland",
            "options": [
                "ドア",
                "－だんめ",
                "とうきょう ディズニーランド",
                "もの"
            ],
            "correctIndex": 2,
            "explanation": "「とうきょう ディズニーランド」 (東京 ディズニーランド) means \"Tokyo Disneyland\"."
        },
        {
            "question": "a fictitious supermarket",
            "options": [
                "けん",
                "アジアストア",
                "ポスト",
                "おとこの ひと"
            ],
            "correctIndex": 1,
            "explanation": "「アジアストア」 means \"a fictitious supermarket\"."
        },
        {
            "question": "film",
            "options": [
                "フィルム",
                "ポスト",
                "あります",
                "うえ"
            ],
            "correctIndex": 0,
            "explanation": "「フィルム」 means \"film\"."
        },
        {
            "question": "bookstore",
            "options": [
                "ほんや",
                "のりば",
                "みぎ",
                "います"
            ],
            "correctIndex": 0,
            "explanation": "「ほんや」 (本屋) means \"bookstore\"."
        },
        {
            "question": "the most ～ (いちばん うえ : the top)",
            "options": [
                "いろいろ［な］",
                "ベッド",
                "いちばん ～",
                "でんち"
            ],
            "correctIndex": 2,
            "explanation": "「いちばん ～」 means \"the most ～ (いちばん うえ : the top)\"."
        },
        {
            "question": "the -th shelf (だん is the counter for shelves)",
            "options": [
                "います",
                "でんち",
                "ねこ",
                "－だんめ"
            ],
            "correctIndex": 3,
            "explanation": "「－だんめ」 (－段目) means \"the -th shelf (だん is the counter for shelves)\"."
        },
        {
            "question": "chilli sauce",
            "options": [
                "チリソース",
                "コンビニ",
                "あります",
                "－だんめ"
            ],
            "correctIndex": 0,
            "explanation": "「チリソース」 means \"chilli sauce\"."
        },
        {
            "question": "the back",
            "options": [
                "なか",
                "ほんや",
                "ユニューア・ストア",
                "おく"
            ],
            "correctIndex": 3,
            "explanation": "「おく」 (奥) means \"the back\"."
        },
        {
            "question": "spice corner",
            "options": [
                "みぎ",
                "スパイス・コーナー",
                "－だんめ",
                "なか"
            ],
            "correctIndex": 1,
            "explanation": "「スパイス・コーナー」 means \"spice corner\"."
        },
        {
            "question": "fictitious supermarket",
            "options": [
                "いろいろ［な］",
                "こうえん",
                "ユニューア・ストア",
                "ナンプラー"
            ],
            "correctIndex": 2,
            "explanation": "「ユニューア・ストア」 means \"fictitious supermarket\"."
        }
    ],
    "Lesson 11": [
        {
            "question": "have [a child]",
            "options": [
                "います［こどもが～］",
                "おにいさん",
                "あね",
                "－まい"
            ],
            "correctIndex": 0,
            "explanation": "「います［こどもが～］」 (います［子どもが～］) means \"have [a child]\"."
        },
        {
            "question": "stay, be [in Japan]",
            "options": [
                "クラス",
                "おねえさん",
                "います［にほんに～］",
                "むっつ"
            ],
            "correctIndex": 2,
            "explanation": "「います［にほんに～］」 (います［日本に～］) means \"stay, be [in Japan]\"."
        },
        {
            "question": "take, cost (referring to time or money)",
            "options": [
                "かかります",
                "きって",
                "やっつ",
                "オーストラリア"
            ],
            "correctIndex": 0,
            "explanation": "「かかります」 means \"take, cost (referring to time or money)\"."
        },
        {
            "question": "take a day off [work]",
            "options": [
                "やすみます［かいしゃを～］",
                "いつつ",
                "いくつ",
                "いって まいります。"
            ],
            "correctIndex": 0,
            "explanation": "「やすみます［かいしゃを～］」 (休みます［会社を～］) means \"take a day off [work]\"."
        },
        {
            "question": "one (used when counting things)",
            "options": [
                "ちょっと ～まで。",
                "ひとつ",
                "ここのつ",
                "います［にほんに～］"
            ],
            "correctIndex": 1,
            "explanation": "「ひとつ」 (１つ) means \"one (used when counting things)\"."
        },
        {
            "question": "two",
            "options": [
                "ふたつ",
                "みかん",
                "アイスクリーム",
                "ひとつ"
            ],
            "correctIndex": 0,
            "explanation": "「ふたつ」 (２つ) means \"two\"."
        },
        {
            "question": "three",
            "options": [
                "～ぐらい",
                "いもうとさん",
                "みっつ",
                "います［にほんに～］"
            ],
            "correctIndex": 2,
            "explanation": "「みっつ」 (３つ) means \"three\"."
        },
        {
            "question": "four",
            "options": [
                "サンドイッチ",
                "よっつ",
                "おにいさん",
                "ふたり"
            ],
            "correctIndex": 1,
            "explanation": "「よっつ」 (４つ) means \"four\"."
        },
        {
            "question": "five",
            "options": [
                "いつつ",
                "～だけ",
                "ぜんぶで",
                "ひとつ"
            ],
            "correctIndex": 0,
            "explanation": "「いつつ」 (５つ) means \"five\"."
        },
        {
            "question": "six",
            "options": [
                "よっつ",
                "みっつ",
                "むっつ",
                "－かげつ"
            ],
            "correctIndex": 2,
            "explanation": "「むっつ」 (６つ) means \"six\"."
        },
        {
            "question": "seven",
            "options": [
                "サンドイッチ",
                "いって きます。",
                "ななつ",
                "はがき"
            ],
            "correctIndex": 2,
            "explanation": "「ななつ」 (７つ) means \"seven\"."
        },
        {
            "question": "eight",
            "options": [
                "おとうとさん",
                "やっつ",
                "みかん",
                "クラス"
            ],
            "correctIndex": 1,
            "explanation": "「やっつ」 (８つ) means \"eight\"."
        },
        {
            "question": "nine",
            "options": [
                "ななつ",
                "ここのつ",
                "カレー［ライス］",
                "いって まいります。"
            ],
            "correctIndex": 1,
            "explanation": "「ここのつ」 (９つ) means \"nine\"."
        },
        {
            "question": "ten",
            "options": [
                "それから",
                "とお",
                "いくつ",
                "ぜんぶで"
            ],
            "correctIndex": 1,
            "explanation": "「とお」 (１０) means \"ten\"."
        },
        {
            "question": "how many",
            "options": [
                "きって",
                "カレー［ライス］",
                "おでかけですか。",
                "いくつ"
            ],
            "correctIndex": 3,
            "explanation": "「いくつ」 means \"how many\"."
        },
        {
            "question": "one person",
            "options": [
                "どのくらい",
                "ななつ",
                "ひとり",
                "やすみます［かいしゃを～］"
            ],
            "correctIndex": 2,
            "explanation": "「ひとり」 (１人) means \"one person\"."
        },
        {
            "question": "two people",
            "options": [
                "ふたり",
                "みんな",
                "がいこく",
                "います［にほんに～］"
            ],
            "correctIndex": 0,
            "explanation": "「ふたり」 (２人) means \"two people\"."
        },
        {
            "question": "－ people",
            "options": [
                "きょうだい",
                "－にん",
                "どのくらい",
                "がいこく"
            ],
            "correctIndex": 1,
            "explanation": "「－にん」 (－人) means \"－ people\"."
        },
        {
            "question": "(counter for machines, cars, etc.)",
            "options": [
                "アイスクリーム",
                "－かい",
                "－だい",
                "かかります"
            ],
            "correctIndex": 2,
            "explanation": "「－だい」 (－台) means \"(counter for machines, cars, etc.)\"."
        },
        {
            "question": "(counter for paper, stamps, etc.)",
            "options": [
                "きって",
                "－まい",
                "ななつ",
                "みっつ"
            ],
            "correctIndex": 1,
            "explanation": "「－まい」 (－枚) means \"(counter for paper, stamps, etc.)\"."
        },
        {
            "question": "－ times",
            "options": [
                "－かい",
                "きょうだい",
                "カレー［ライス］",
                "いつつ"
            ],
            "correctIndex": 0,
            "explanation": "「－かい」 (－回) means \"－ times\"."
        },
        {
            "question": "apple",
            "options": [
                "がいこく",
                "りんご",
                "あに",
                "ちょっと ～まで。"
            ],
            "correctIndex": 1,
            "explanation": "「りんご」 means \"apple\"."
        },
        {
            "question": "mandarin orange",
            "options": [
                "いらっしゃいませ。",
                "－かい",
                "みかん",
                "おとうと"
            ],
            "correctIndex": 2,
            "explanation": "「みかん」 means \"mandarin orange\"."
        },
        {
            "question": "sandwich",
            "options": [
                "どのくらい",
                "いくつ",
                "サンドイッチ",
                "ちょっと ～まで。"
            ],
            "correctIndex": 2,
            "explanation": "「サンドイッチ」 means \"sandwich\"."
        },
        {
            "question": "curry [with rice]",
            "options": [
                "おねがいします。",
                "ここのつ",
                "カレー［ライス］",
                "ふたつ"
            ],
            "correctIndex": 2,
            "explanation": "「カレー［ライス］」 means \"curry [with rice]\"."
        },
        {
            "question": "ice cream",
            "options": [
                "こうくうびん（エアメール）",
                "りんご",
                "アイスクリーム",
                "いらっしゃいませ。"
            ],
            "correctIndex": 2,
            "explanation": "「アイスクリーム」 means \"ice cream\"."
        },
        {
            "question": "postage stamp",
            "options": [
                "かきとめ",
                "いつつ",
                "みんな",
                "きって"
            ],
            "correctIndex": 3,
            "explanation": "「きって」 (切手) means \"postage stamp\"."
        },
        {
            "question": "postcard",
            "options": [
                "それから",
                "はがき",
                "いもうと",
                "かしこまりました。"
            ],
            "correctIndex": 1,
            "explanation": "「はがき」 means \"postcard\"."
        },
        {
            "question": "envelope",
            "options": [
                "がいこく",
                "ふうとう",
                "かかります",
                "いって きます。"
            ],
            "correctIndex": 1,
            "explanation": "「ふうとう」 (封筒) means \"envelope\"."
        },
        {
            "question": "parents",
            "options": [
                "りゅうがくせい",
                "クラス",
                "－じかん",
                "りょうしん"
            ],
            "correctIndex": 3,
            "explanation": "「りょうしん」 (両親) means \"parents\"."
        },
        {
            "question": "brothers and sisters",
            "options": [
                "います［こどもが～］",
                "いらっしゃいませ。",
                "やっつ",
                "きょうだい"
            ],
            "correctIndex": 3,
            "explanation": "「きょうだい」 (兄弟) means \"brothers and sisters\"."
        },
        {
            "question": "(my) elder brother",
            "options": [
                "おねがいします。",
                "いもうと",
                "きょうだい",
                "あに"
            ],
            "correctIndex": 3,
            "explanation": "「あに」 (兄) means \"(my) elder brother\"."
        },
        {
            "question": "(someone else's) elder brother",
            "options": [
                "おでかけですか。",
                "～だけ",
                "いって まいります。",
                "おにいさん"
            ],
            "correctIndex": 3,
            "explanation": "「おにいさん」 (お兄さん) means \"(someone else's) elder brother\"."
        },
        {
            "question": "(my) elder sister",
            "options": [
                "ふなびん",
                "あね",
                "きって",
                "あに"
            ],
            "correctIndex": 1,
            "explanation": "「あね」 (姉) means \"(my) elder sister\"."
        },
        {
            "question": "(someone else's) elder sister",
            "options": [
                "おねえさん",
                "ぜんぶで",
                "－まい",
                "きょうだい"
            ],
            "correctIndex": 0,
            "explanation": "「おねえさん」 (お姉さん) means \"(someone else's) elder sister\"."
        },
        {
            "question": "(my) younger brother",
            "options": [
                "おにいさん",
                "おとうと",
                "はがき",
                "やっつ"
            ],
            "correctIndex": 1,
            "explanation": "「おとうと」 (弟) means \"(my) younger brother\"."
        },
        {
            "question": "(someone else's) younger brother",
            "options": [
                "～だけ",
                "おねえさん",
                "おとうとさん",
                "ぜんぶで"
            ],
            "correctIndex": 2,
            "explanation": "「おとうとさん」 (弟さん) means \"(someone else's) younger brother\"."
        },
        {
            "question": "(my) younger sister",
            "options": [
                "あに",
                "ななつ",
                "いもうと",
                "～だけ"
            ],
            "correctIndex": 2,
            "explanation": "「いもうと」 (妹) means \"(my) younger sister\"."
        },
        {
            "question": "(someone else's) younger sister",
            "options": [
                "いい［お］てんきですね。",
                "むっつ",
                "いもうとさん",
                "おねえさん"
            ],
            "correctIndex": 2,
            "explanation": "「いもうとさん」 (妹さん) means \"(someone else's) younger sister\"."
        },
        {
            "question": "foreign country",
            "options": [
                "－しゅうかん",
                "がいこく",
                "おねがいします。",
                "－ねん"
            ],
            "correctIndex": 1,
            "explanation": "「がいこく」 (外国) means \"foreign country\"."
        },
        {
            "question": "foreign student",
            "options": [
                "こうくうびん（エアメール）",
                "りゅうがくせい",
                "いくつ",
                "おねえさん"
            ],
            "correctIndex": 1,
            "explanation": "「りゅうがくせい」 (留学生) means \"foreign student\"."
        },
        {
            "question": "class",
            "options": [
                "クラス",
                "きょうだい",
                "－かげつ",
                "ななつ"
            ],
            "correctIndex": 0,
            "explanation": "「クラス」 means \"class\"."
        },
        {
            "question": "－ hour(s)",
            "options": [
                "－にん",
                "－じかん",
                "りんご",
                "～ぐらい"
            ],
            "correctIndex": 1,
            "explanation": "「－じかん」 (－時間) means \"－ hour(s)\"."
        },
        {
            "question": "－ week(s)",
            "options": [
                "それから",
                "－しゅうかん",
                "よっつ",
                "いい［お］てんきですね。"
            ],
            "correctIndex": 1,
            "explanation": "「－しゅうかん」 (－週間) means \"－ week(s)\"."
        },
        {
            "question": "－ month(s)",
            "options": [
                "ふなびん",
                "かしこまりました。",
                "－かげつ",
                "いもうと"
            ],
            "correctIndex": 2,
            "explanation": "「－かげつ」 (－か月) means \"－ month(s)\"."
        },
        {
            "question": "－ year(s)",
            "options": [
                "おねえさん",
                "いくつ",
                "ふうとう",
                "－ねん"
            ],
            "correctIndex": 3,
            "explanation": "「－ねん」 (－年) means \"－ year(s)\"."
        },
        {
            "question": "about ～",
            "options": [
                "－ねん",
                "～ぐらい",
                "きって",
                "かしこまりました。"
            ],
            "correctIndex": 1,
            "explanation": "「～ぐらい」 means \"about ～\"."
        },
        {
            "question": "how long",
            "options": [
                "どのくらい",
                "こうくうびん（エアメール）",
                "ここのつ",
                "おにいさん"
            ],
            "correctIndex": 0,
            "explanation": "「どのくらい」 means \"how long\"."
        },
        {
            "question": "in total",
            "options": [
                "がいこく",
                "ぜんぶで",
                "こうくうびん（エアメール）",
                "アイスクリーム"
            ],
            "correctIndex": 1,
            "explanation": "「ぜんぶで」 (全部で) means \"in total\"."
        },
        {
            "question": "all, everything, everyone",
            "options": [
                "ひとり",
                "みんな",
                "いもうとさん",
                "～だけ"
            ],
            "correctIndex": 1,
            "explanation": "「みんな」 means \"all, everything, everyone\"."
        },
        {
            "question": "only ～",
            "options": [
                "とお",
                "います［こどもが～］",
                "いつつ",
                "～だけ"
            ],
            "correctIndex": 3,
            "explanation": "「～だけ」 means \"only ～\"."
        },
        {
            "question": "Certainly, (Sir/Madam)",
            "options": [
                "～だけ",
                "いもうと",
                "りゅうがくせい",
                "かしこまりました。"
            ],
            "correctIndex": 3,
            "explanation": "「かしこまりました。」 means \"Certainly, (Sir/Madam)\"."
        },
        {
            "question": "Nice weather, isn't it?",
            "options": [
                "とお",
                "かかります",
                "いい［お］てんきですね。",
                "－ねん"
            ],
            "correctIndex": 2,
            "explanation": "「いい［お］てんきですね。」 (いい［お］天気ですね。) means \"Nice weather, isn't it?\"."
        },
        {
            "question": "Are you going out?",
            "options": [
                "ふたつ",
                "よっつ",
                "おでかけですか。",
                "おねがいします。"
            ],
            "correctIndex": 2,
            "explanation": "「おでかけですか。」 (お出かけですか。) means \"Are you going out?\"."
        },
        {
            "question": "I'm just going to ～.",
            "options": [
                "おとうとさん",
                "ちょっと ～まで。",
                "かかります",
                "みんな"
            ],
            "correctIndex": 1,
            "explanation": "「ちょっと ～まで。」 means \"I'm just going to ～.\"."
        },
        {
            "question": "See you later./So long. (lit. Go and come back.)",
            "options": [
                "－しゅうかん",
                "こうくうびん（エアメール）",
                "あに",
                "いってらっしゃい。"
            ],
            "correctIndex": 3,
            "explanation": "「いってらっしゃい。」 (行ってらっしゃい。) means \"See you later./So long. (lit. Go and come back.)\"."
        },
        {
            "question": "See you later./So long. (lit. I'm going and coming back.)",
            "options": [
                "いつつ",
                "いって きます。",
                "かかります",
                "かきとめ"
            ],
            "correctIndex": 1,
            "explanation": "「いって きます。」 (行って きます。) means \"See you later./So long. (lit. I'm going and coming back.)\"."
        },
        {
            "question": "sea mail",
            "options": [
                "ふなびん",
                "そくたつ",
                "クラス",
                "－だい"
            ],
            "correctIndex": 0,
            "explanation": "「ふなびん」 (船便) means \"sea mail\"."
        },
        {
            "question": "airmail",
            "options": [
                "いつつ",
                "カレー［ライス］",
                "りんご",
                "こうくうびん（エアメール）"
            ],
            "correctIndex": 3,
            "explanation": "「こうくうびん（エアメール）」 (航空便（エアメール）) means \"airmail\"."
        },
        {
            "question": "Please. (lit. ask for a favour)",
            "options": [
                "おねがいします。",
                "それから",
                "ふうとう",
                "いってらっしゃい。"
            ],
            "correctIndex": 0,
            "explanation": "「おねがいします。」 (お願いします。) means \"Please. (lit. ask for a favour)\"."
        },
        {
            "question": "Australia",
            "options": [
                "あに",
                "オーストラリア",
                "ふたり",
                "りんご"
            ],
            "correctIndex": 1,
            "explanation": "「オーストラリア」 means \"Australia\"."
        },
        {
            "question": "special delivery",
            "options": [
                "やすみます［かいしゃを～］",
                "そくたつ",
                "－まい",
                "－かげつ"
            ],
            "correctIndex": 1,
            "explanation": "「そくたつ」 (速達) means \"special delivery\"."
        },
        {
            "question": "registered mail",
            "options": [
                "アイスクリーム",
                "ふたつ",
                "いい［お］てんきですね。",
                "かきとめ"
            ],
            "correctIndex": 3,
            "explanation": "「かきとめ」 (書留) means \"registered mail\"."
        },
        {
            "question": "Welcome./May I help you? (a greeting to a customer or a guest entering a shop, etc.)",
            "options": [
                "そくたつ",
                "おとうとさん",
                "いもうと",
                "いらっしゃいませ。"
            ],
            "correctIndex": 3,
            "explanation": "「いらっしゃいませ。」 means \"Welcome./May I help you? (a greeting to a customer or a guest entering a shop, etc.)\"."
        },
        {
            "question": "So long. (lit. I'm going and coming back)",
            "options": [
                "ふたつ",
                "かきとめ",
                "いって まいります。",
                "みかん"
            ],
            "correctIndex": 2,
            "explanation": "「いって まいります。」 (行って まいります。) means \"So long. (lit. I'm going and coming back)\"."
        },
        {
            "question": "and, furthermore",
            "options": [
                "サンドイッチ",
                "りんご",
                "それから",
                "やすみます［かいしゃを～］"
            ],
            "correctIndex": 2,
            "explanation": "「それから」 means \"and, furthermore\"."
        }
    ],
    "Lesson 12": [
        {
            "question": "easy, simple",
            "options": [
                "かんたん［な］",
                "パーティー",
                "すずしい",
                "はやい"
            ],
            "correctIndex": 0,
            "explanation": "「かんたん［な］」 (簡単［な］) means \"easy, simple\"."
        },
        {
            "question": "near",
            "options": [
                "［お］すし",
                "ABC ストア",
                "もみじ",
                "ちかい"
            ],
            "correctIndex": 3,
            "explanation": "「ちかい」 (近い) means \"near\"."
        },
        {
            "question": "far",
            "options": [
                "どちらも",
                "すくない［ひとが～］",
                "からい",
                "とおい"
            ],
            "correctIndex": 3,
            "explanation": "「とおい」 (遠い) means \"far\"."
        },
        {
            "question": "fast, early",
            "options": [
                "くうこう",
                "はやい",
                "かんたん［な］",
                "すごいですね。"
            ],
            "correctIndex": 1,
            "explanation": "「はやい」 (速い、早い) means \"fast, early\"."
        },
        {
            "question": "slow, late",
            "options": [
                "おそい",
                "パーティー",
                "くもり",
                "ホテル"
            ],
            "correctIndex": 0,
            "explanation": "「おそい」 (遅い) means \"slow, late\"."
        },
        {
            "question": "many [people], much",
            "options": [
                "あめ",
                "［お］すし",
                "まいにちや",
                "おおい［ひとが～］"
            ],
            "correctIndex": 3,
            "explanation": "「おおい［ひとが～］」 (多い［人が～］) means \"many [people], much\"."
        },
        {
            "question": "few [people], a little",
            "options": [
                "ずっと",
                "わあ、すごい ひとですね。",
                "すくない［ひとが～］",
                "シンガポール"
            ],
            "correctIndex": 2,
            "explanation": "「すくない［ひとが～］」 (少ない［人が～］) means \"few [people], a little\"."
        },
        {
            "question": "warm",
            "options": [
                "からい",
                "ぎおんまつり",
                "ABC ストア",
                "あたたかい"
            ],
            "correctIndex": 3,
            "explanation": "「あたたかい」 (暖かい、温かい) means \"warm\"."
        },
        {
            "question": "cool",
            "options": [
                "くうこう",
                "ホンコン",
                "［お］まつり",
                "すずしい"
            ],
            "correctIndex": 3,
            "explanation": "「すずしい」 (涼しい) means \"cool\"."
        },
        {
            "question": "sweet",
            "options": [
                "あまい",
                "きせつ",
                "おそい",
                "ゆき"
            ],
            "correctIndex": 0,
            "explanation": "「あまい」 (甘い) means \"sweet\"."
        },
        {
            "question": "hot (taste), spicy",
            "options": [
                "からい",
                "はる",
                "ふゆ",
                "きせつ"
            ],
            "correctIndex": 0,
            "explanation": "「からい」 (辛い) means \"hot (taste), spicy\"."
        },
        {
            "question": "heavy",
            "options": [
                "ゆき",
                "ホンコン",
                "しけん",
                "おもい"
            ],
            "correctIndex": 3,
            "explanation": "「おもい」 (重い) means \"heavy\"."
        },
        {
            "question": "light (of weight)",
            "options": [
                "ホンコン",
                "ホテル",
                "ぎゅうにく",
                "かるい"
            ],
            "correctIndex": 3,
            "explanation": "「かるい」 (軽い) means \"light (of weight)\"."
        },
        {
            "question": "prefer [coffee]",
            "options": [
                "あまい",
                "いい［コーヒーが～］",
                "ぎゅうにく",
                "しけん"
            ],
            "correctIndex": 1,
            "explanation": "「いい［コーヒーが～］」 means \"prefer [coffee]\"."
        },
        {
            "question": "season",
            "options": [
                "さしみ",
                "きせつ",
                "ぎおんまつり",
                "とりにく"
            ],
            "correctIndex": 1,
            "explanation": "「きせつ」 (季節) means \"season\"."
        },
        {
            "question": "spring",
            "options": [
                "わあ、すごい ひとですね。",
                "とおい",
                "はる",
                "ホンコン"
            ],
            "correctIndex": 2,
            "explanation": "「はる」 (春) means \"spring\"."
        },
        {
            "question": "summer",
            "options": [
                "どちらも",
                "なつ",
                "はじめて",
                "まいにちや"
            ],
            "correctIndex": 1,
            "explanation": "「なつ」 (夏) means \"summer\"."
        },
        {
            "question": "autumn, fall",
            "options": [
                "からい",
                "すずしい",
                "あき",
                "ただいま。"
            ],
            "correctIndex": 2,
            "explanation": "「あき」 (秋) means \"autumn, fall\"."
        },
        {
            "question": "winter",
            "options": [
                "なつ",
                "でも",
                "あき",
                "ふゆ"
            ],
            "correctIndex": 3,
            "explanation": "「ふゆ」 (冬) means \"winter\"."
        },
        {
            "question": "weather",
            "options": [
                "くうこう",
                "てんき",
                "なつ",
                "うみ"
            ],
            "correctIndex": 1,
            "explanation": "「てんき」 (天気) means \"weather\"."
        },
        {
            "question": "rain, rainy",
            "options": [
                "あめ",
                "つかれました。",
                "でも",
                "くうこう"
            ],
            "correctIndex": 0,
            "explanation": "「あめ」 (雨) means \"rain, rainy\"."
        },
        {
            "question": "snow, snowy",
            "options": [
                "ゆき",
                "わあ、すごい ひとですね。",
                "ホテル",
                "くもり"
            ],
            "correctIndex": 0,
            "explanation": "「ゆき」 (雪) means \"snow, snowy\"."
        },
        {
            "question": "cloudy",
            "options": [
                "すくない［ひとが～］",
                "ぎゅうにく",
                "くもり",
                "うみ"
            ],
            "correctIndex": 2,
            "explanation": "「くもり」 (曇り) means \"cloudy\"."
        },
        {
            "question": "hotel",
            "options": [
                "さしみ",
                "ぎおんまつり",
                "なつ",
                "ホテル"
            ],
            "correctIndex": 3,
            "explanation": "「ホテル」 means \"hotel\"."
        },
        {
            "question": "airport",
            "options": [
                "［お］すし",
                "きせつ",
                "くうこう",
                "ただいま。"
            ],
            "correctIndex": 2,
            "explanation": "「くうこう」 (空港) means \"airport\"."
        },
        {
            "question": "sea, ocean",
            "options": [
                "かんたん［な］",
                "ぶたにく",
                "うみ",
                "ずっと"
            ],
            "correctIndex": 2,
            "explanation": "「うみ」 (海) means \"sea, ocean\"."
        },
        {
            "question": "world",
            "options": [
                "ちかい",
                "どちら",
                "せかい",
                "わあ、すごい ひとですね。"
            ],
            "correctIndex": 2,
            "explanation": "「せかい」 (世界) means \"world\"."
        },
        {
            "question": "party (～を します : give a party)",
            "options": [
                "とりにく",
                "しけん",
                "パーティー",
                "どちらも"
            ],
            "correctIndex": 2,
            "explanation": "「パーティー」 means \"party (～を します : give a party)\"."
        },
        {
            "question": "festival",
            "options": [
                "［お］まつり",
                "わあ、すごい ひとですね。",
                "ただいま。",
                "パーティー"
            ],
            "correctIndex": 0,
            "explanation": "「［お］まつり」 (［お］祭り) means \"festival\"."
        },
        {
            "question": "sukiyaki (beef and vegetables hot pot)",
            "options": [
                "てんぷら",
                "すきやき",
                "ゆき",
                "さしみ"
            ],
            "correctIndex": 1,
            "explanation": "「すきやき」 (すき焼き) means \"sukiyaki (beef and vegetables hot pot)\"."
        },
        {
            "question": "sashimi (sliced raw fish)",
            "options": [
                "さしみ",
                "とおい",
                "てんぷら",
                "てんき"
            ],
            "correctIndex": 0,
            "explanation": "「さしみ」 (刺身) means \"sashimi (sliced raw fish)\"."
        },
        {
            "question": "sushi (vinegared rice topped with raw fish)",
            "options": [
                "パーティー",
                "シンガポール",
                "［お］すし",
                "すずしい"
            ],
            "correctIndex": 2,
            "explanation": "「［お］すし」 means \"sushi (vinegared rice topped with raw fish)\"."
        },
        {
            "question": "tempura (seafood and vegetables deep fried in batter)",
            "options": [
                "ゆき",
                "てんぷら",
                "ぎおんまつり",
                "［お］まつり"
            ],
            "correctIndex": 1,
            "explanation": "「てんぷら」 means \"tempura (seafood and vegetables deep fried in batter)\"."
        },
        {
            "question": "pork",
            "options": [
                "すくない［ひとが～］",
                "おもい",
                "どちらも",
                "ぶたにく"
            ],
            "correctIndex": 3,
            "explanation": "「ぶたにく」 (豚肉) means \"pork\"."
        },
        {
            "question": "chicken",
            "options": [
                "おおい［ひとが～］",
                "くうこう",
                "とりにく",
                "あたたかい"
            ],
            "correctIndex": 2,
            "explanation": "「とりにく」 (とり肉) means \"chicken\"."
        },
        {
            "question": "beef",
            "options": [
                "きせつ",
                "［お］すし",
                "いけばな",
                "ぎゅうにく"
            ],
            "correctIndex": 3,
            "explanation": "「ぎゅうにく」 (牛肉) means \"beef\"."
        },
        {
            "question": "lemon",
            "options": [
                "ホンコン",
                "レモン",
                "ただいま。",
                "いけばな"
            ],
            "correctIndex": 1,
            "explanation": "「レモン」 means \"lemon\"."
        },
        {
            "question": "flower arrangement (～を します : practise flower arrangement)",
            "options": [
                "レモン",
                "いけばな",
                "くもり",
                "おそい"
            ],
            "correctIndex": 1,
            "explanation": "「いけばな」 (生け花) means \"flower arrangement (～を します : practise flower arrangement)\"."
        },
        {
            "question": "maple, red leaves of autumn",
            "options": [
                "もみじ",
                "てんぷら",
                "あたたかい",
                "いけばな"
            ],
            "correctIndex": 0,
            "explanation": "「もみじ」 (紅葉) means \"maple, red leaves of autumn\"."
        },
        {
            "question": "which one (of two things)",
            "options": [
                "てんぷら",
                "どちら",
                "かんたん［な］",
                "さしみ"
            ],
            "correctIndex": 1,
            "explanation": "「どちら」 means \"which one (of two things)\"."
        },
        {
            "question": "both",
            "options": [
                "ぎゅうにく",
                "しけん",
                "どちらも",
                "あき"
            ],
            "correctIndex": 2,
            "explanation": "「どちらも」 means \"both\"."
        },
        {
            "question": "the most",
            "options": [
                "あたたかい",
                "レモン",
                "かるい",
                "いちばん"
            ],
            "correctIndex": 3,
            "explanation": "「いちばん」 means \"the most\"."
        },
        {
            "question": "by far",
            "options": [
                "ずっと",
                "かんたん［な］",
                "［お］まつり",
                "どちらも"
            ],
            "correctIndex": 0,
            "explanation": "「ずっと」 means \"by far\"."
        },
        {
            "question": "for the first time",
            "options": [
                "さしみ",
                "はじめて",
                "すくない［ひとが～］",
                "あめ"
            ],
            "correctIndex": 1,
            "explanation": "「はじめて」 (初めて) means \"for the first time\"."
        },
        {
            "question": "I'm home.",
            "options": [
                "はじめて",
                "ただいま。",
                "ABC ストア",
                "いい［コーヒーが～］"
            ],
            "correctIndex": 1,
            "explanation": "「ただいま。」 means \"I'm home.\"."
        },
        {
            "question": "Welcome home",
            "options": [
                "おかえりなさい。",
                "からい",
                "てんぷら",
                "パーティー"
            ],
            "correctIndex": 0,
            "explanation": "「おかえりなさい。」 (お帰りなさい。) means \"Welcome home\"."
        },
        {
            "question": "Wow! Look at all those people!",
            "options": [
                "でも",
                "わあ、すごい ひとですね。",
                "はる",
                "あまい"
            ],
            "correctIndex": 1,
            "explanation": "「わあ、すごい ひとですね。」 (わあ、すごい 人ですね。) means \"Wow! Look at all those people!\"."
        },
        {
            "question": "I'm tired",
            "options": [
                "［お］まつり",
                "きせつ",
                "ぶたにく",
                "つかれました。"
            ],
            "correctIndex": 3,
            "explanation": "「つかれました。」 (疲れました。) means \"I'm tired\"."
        },
        {
            "question": "the Gion Festival (the most famous festival in Kyoto)",
            "options": [
                "ぎおんまつり",
                "くもり",
                "くうこう",
                "とおい"
            ],
            "correctIndex": 0,
            "explanation": "「ぎおんまつり」 (祇園祭) means \"the Gion Festival (the most famous festival in Kyoto)\"."
        },
        {
            "question": "Hong Kong (香港)",
            "options": [
                "いけばな",
                "ゆき",
                "ホンコン",
                "レモン"
            ],
            "correctIndex": 2,
            "explanation": "「ホンコン」 (香港) means \"Hong Kong (香港)\"."
        },
        {
            "question": "Singapore",
            "options": [
                "ゆき",
                "どちら",
                "くもり",
                "シンガポール"
            ],
            "correctIndex": 3,
            "explanation": "「シンガポール」 means \"Singapore\"."
        },
        {
            "question": "a fictitious supermarket",
            "options": [
                "ABC ストア",
                "ホテル",
                "つかれました。",
                "もみじ"
            ],
            "correctIndex": 0,
            "explanation": "「ABC ストア」 means \"a fictitious supermarket\"."
        },
        {
            "question": "a fictitious supermarket",
            "options": [
                "あまい",
                "くもり",
                "ジャパン",
                "ただいま。"
            ],
            "correctIndex": 2,
            "explanation": "「ジャパン」 means \"a fictitious supermarket\"."
        },
        {
            "question": "examination",
            "options": [
                "しけん",
                "ホンコン",
                "はやい",
                "おもい"
            ],
            "correctIndex": 0,
            "explanation": "「しけん」 (試験) means \"examination\"."
        },
        {
            "question": "That's amazing.",
            "options": [
                "はやい",
                "せかい",
                "すごいですね。",
                "とおい"
            ],
            "correctIndex": 2,
            "explanation": "「すごいですね。」 means \"That's amazing.\"."
        },
        {
            "question": "but",
            "options": [
                "ただいま。",
                "しけん",
                "まいにちや",
                "でも"
            ],
            "correctIndex": 3,
            "explanation": "「でも」 means \"but\"."
        },
        {
            "question": "fictitious supermarket",
            "options": [
                "おおい［ひとが～］",
                "まいにちや",
                "ABC ストア",
                "ぎゅうにく"
            ],
            "correctIndex": 1,
            "explanation": "「まいにちや」 (毎日屋) means \"fictitious supermarket\"."
        }
    ],
    "Lesson 13": [
        {
            "question": "enjoy oneself, play",
            "options": [
                "あそびます",
                "アキックス",
                "ほしい",
                "けっこんします"
            ],
            "correctIndex": 0,
            "explanation": "「あそびます」 (遊びます) means \"enjoy oneself, play\"."
        },
        {
            "question": "swim",
            "options": [
                "およぎます",
                "びじゅつ",
                "かわ",
                "ていしょく"
            ],
            "correctIndex": 0,
            "explanation": "「およぎます」 (泳ぎます) means \"swim\"."
        },
        {
            "question": "go to meet, welcome",
            "options": [
                "べつべつに",
                "むかえます",
                "つかれます",
                "ごちゅうもんは？"
            ],
            "correctIndex": 1,
            "explanation": "「むかえます」 (迎えます) means \"go to meet, welcome\"."
        },
        {
            "question": "get tired (when expressing the condition of being tired, つかれました is used)",
            "options": [
                "ロシア",
                "けっこんします",
                "プール",
                "つかれます"
            ],
            "correctIndex": 3,
            "explanation": "「つかれます」 (疲れます) means \"get tired (when expressing the condition of being tired, つかれました is used)\"."
        },
        {
            "question": "marry, get married",
            "options": [
                "かいものします",
                "けっこんします",
                "ぎゅうどん",
                "［お］しょうがつ"
            ],
            "correctIndex": 1,
            "explanation": "「けっこんします」 (結婚します) means \"marry, get married\"."
        },
        {
            "question": "do shopping",
            "options": [
                "そう しましょう。",
                "べつべつに",
                "かいものします",
                "せまい"
            ],
            "correctIndex": 2,
            "explanation": "「かいものします」 (買い物します) means \"do shopping\"."
        },
        {
            "question": "have a meal, dine",
            "options": [
                "しやくしょ",
                "しょくじします",
                "［お］しょうがつ",
                "どこか"
            ],
            "correctIndex": 1,
            "explanation": "「しょくじします」 (食事します) means \"have a meal, dine\"."
        },
        {
            "question": "take a walk [in a park]",
            "options": [
                "ロシア",
                "おなかが いっぱいです。",
                "さんぽします［こうえんを～］",
                "べつべつに"
            ],
            "correctIndex": 2,
            "explanation": "「さんぽします［こうえんを～］」 (散歩します［公園を～］) means \"take a walk [in a park]\"."
        },
        {
            "question": "hard, tough, severe, awful",
            "options": [
                "～で ございます。",
                "たいへん［な］",
                "つり",
                "のどが かわきます"
            ],
            "correctIndex": 1,
            "explanation": "「たいへん［な］」 (大変［な］) means \"hard, tough, severe, awful\"."
        },
        {
            "question": "want (something)",
            "options": [
                "たいへん［な］",
                "しゅうまつ",
                "［お］しょうがつ",
                "ほしい"
            ],
            "correctIndex": 3,
            "explanation": "「ほしい」 (欲しい) means \"want (something)\"."
        },
        {
            "question": "wide, spacious",
            "options": [
                "ひろい",
                "だします［てがみを～］",
                "おはようテレビ",
                "かわ"
            ],
            "correctIndex": 0,
            "explanation": "「ひろい」 (広い) means \"wide, spacious\"."
        },
        {
            "question": "narrow, small (room, etc.)",
            "options": [
                "せまい",
                "たいへん［な］",
                "つり",
                "けっこんします"
            ],
            "correctIndex": 0,
            "explanation": "「せまい」 (狭い) means \"narrow, small (room, etc.)\"."
        },
        {
            "question": "swimming pool",
            "options": [
                "のどが かわきます",
                "［お］しょうがつ",
                "けいざい",
                "プール"
            ],
            "correctIndex": 3,
            "explanation": "「プール」 means \"swimming pool\"."
        },
        {
            "question": "river",
            "options": [
                "むかえます",
                "つかれます",
                "プール",
                "かわ"
            ],
            "correctIndex": 3,
            "explanation": "「かわ」 (川) means \"river\"."
        },
        {
            "question": "fine arts",
            "options": [
                "かわ",
                "ごちゅうもんは？",
                "びじゅつ",
                "せまい"
            ],
            "correctIndex": 2,
            "explanation": "「びじゅつ」 (美術) means \"fine arts\"."
        },
        {
            "question": "fishing (～を します : fish, angle)",
            "options": [
                "ロシア",
                "そう しましょう。",
                "そうですね。",
                "つり"
            ],
            "correctIndex": 3,
            "explanation": "「つり」 (釣り) means \"fishing (～を します : fish, angle)\"."
        },
        {
            "question": "skiing (～を します : ski)",
            "options": [
                "かわ",
                "スキー",
                "ほしい",
                "でます［きっさてんを～］"
            ],
            "correctIndex": 1,
            "explanation": "「スキー」 means \"skiing (～を します : ski)\"."
        },
        {
            "question": "weekend",
            "options": [
                "さびしい",
                "つり",
                "［お］しょうがつ",
                "しゅうまつ"
            ],
            "correctIndex": 3,
            "explanation": "「しゅうまつ」 (週末) means \"weekend\"."
        },
        {
            "question": "New Year's Day",
            "options": [
                "しゅうまつ",
                "ごちゅうもんは？",
                "［お］しょうがつ",
                "つかれます"
            ],
            "correctIndex": 2,
            "explanation": "「［お］しょうがつ」 (［お］正月) means \"New Year's Day\"."
        },
        {
            "question": "about ～ (time)",
            "options": [
                "プール",
                "とうろく",
                "だします［てがみを～］",
                "～ごろ"
            ],
            "correctIndex": 3,
            "explanation": "「～ごろ」 means \"about ～ (time)\"."
        },
        {
            "question": "something",
            "options": [
                "およぎます",
                "ロシア",
                "なにか",
                "そうですね。"
            ],
            "correctIndex": 2,
            "explanation": "「なにか」 (何か) means \"something\"."
        },
        {
            "question": "somewhere, some place",
            "options": [
                "むかえます",
                "つかれます",
                "どこか",
                "かいものします"
            ],
            "correctIndex": 2,
            "explanation": "「どこか」 means \"somewhere, some place\"."
        },
        {
            "question": "get thirsty (when expressing the condition of being thirsty, のどが かわきました is used)",
            "options": [
                "つり",
                "のどが かわきます",
                "おなかが いっぱいです。",
                "そう しましょう。"
            ],
            "correctIndex": 1,
            "explanation": "「のどが かわきます」 means \"get thirsty (when expressing the condition of being thirsty, のどが かわきました is used)\"."
        },
        {
            "question": "get hungry (when expressing the condition of being hungry, おなかが すきました is used)",
            "options": [
                "おなかが すきます",
                "けいざい",
                "とうろく",
                "さんぽします［こうえんを～］"
            ],
            "correctIndex": 0,
            "explanation": "「おなかが すきます」 means \"get hungry (when expressing the condition of being hungry, おなかが すきました is used)\"."
        },
        {
            "question": "Let's do that. (used when agreeing with someone's suggestion)",
            "options": [
                "むかえます",
                "そう しましょう。",
                "かいぎ",
                "だします［てがみを～］"
            ],
            "correctIndex": 1,
            "explanation": "「そう しましょう。」 means \"Let's do that. (used when agreeing with someone's suggestion)\"."
        },
        {
            "question": "May I take your order?",
            "options": [
                "おなかが いっぱいです。",
                "そう しましょう。",
                "ごちゅうもんは？",
                "かいぎ"
            ],
            "correctIndex": 2,
            "explanation": "「ごちゅうもんは？」 (ご注文は？) means \"May I take your order?\"."
        },
        {
            "question": "set meal, table d'hôte",
            "options": [
                "そう しましょう。",
                "つかれます",
                "たいへん［な］",
                "ていしょく"
            ],
            "correctIndex": 3,
            "explanation": "「ていしょく」 (定食) means \"set meal, table d'hôte\"."
        },
        {
            "question": "bowl of rice topped with beef",
            "options": [
                "のどが かわきます",
                "およぎます",
                "ぎゅうどん",
                "はいります［きっさてんに～］"
            ],
            "correctIndex": 2,
            "explanation": "「ぎゅうどん」 (牛どん) means \"bowl of rice topped with beef\"."
        },
        {
            "question": "Please wait [a moment].",
            "options": [
                "あそびます",
                "［お］しょうがつ",
                "ぎゅうどん",
                "［しょうしょう］おまち ください。"
            ],
            "correctIndex": 3,
            "explanation": "「［しょうしょう］おまち ください。」 (［少々］お待ち ください。) means \"Please wait [a moment].\"."
        },
        {
            "question": "(polite equivalent of です)",
            "options": [
                "［しょうしょう］おまち ください。",
                "ロシア",
                "～で ございます。",
                "さんぽします［こうえんを～］"
            ],
            "correctIndex": 2,
            "explanation": "「～で ございます。」 means \"(polite equivalent of です)\"."
        },
        {
            "question": "separately",
            "options": [
                "ほしい",
                "べつべつに",
                "アキックス",
                "ぎゅうどん"
            ],
            "correctIndex": 1,
            "explanation": "「べつべつに」 (別々に) means \"separately\"."
        },
        {
            "question": "a fictitious company",
            "options": [
                "けいざい",
                "ごちゅうもんは？",
                "つかれます",
                "アキックス"
            ],
            "correctIndex": 3,
            "explanation": "「アキックス」 means \"a fictitious company\"."
        },
        {
            "question": "a fictitious TV programme",
            "options": [
                "でます［きっさてんを～］",
                "つり",
                "だします［てがみを～］",
                "おはようテレビ"
            ],
            "correctIndex": 3,
            "explanation": "「おはようテレビ」 means \"a fictitious TV programme\"."
        },
        {
            "question": "send [a letter]",
            "options": [
                "そう しましょう。",
                "ほしい",
                "おなかが いっぱいです。",
                "だします［てがみを～］"
            ],
            "correctIndex": 3,
            "explanation": "「だします［てがみを～］」 (出します［手紙を～］) means \"send [a letter]\"."
        },
        {
            "question": "enter [a coffee shop]",
            "options": [
                "しゅうまつ",
                "けっこんします",
                "はいります［きっさてんに～］",
                "ひろい"
            ],
            "correctIndex": 2,
            "explanation": "「はいります［きっさてんに～］」 (入ります［喫茶店に～］) means \"enter [a coffee shop]\"."
        },
        {
            "question": "go out [of a coffee shop]",
            "options": [
                "スキー",
                "～で ございます。",
                "ごちゅうもんは？",
                "でます［きっさてんを～］"
            ],
            "correctIndex": 3,
            "explanation": "「でます［きっさてんを～］」 (出ます［喫茶店を～］) means \"go out [of a coffee shop]\"."
        },
        {
            "question": "lonely",
            "options": [
                "かいものします",
                "［しょうしょう］おまち ください。",
                "さんぽします［こうえんを～］",
                "さびしい"
            ],
            "correctIndex": 3,
            "explanation": "「さびしい」 (寂しい) means \"lonely\"."
        },
        {
            "question": "municipal office, city hall",
            "options": [
                "しょくじします",
                "［しょうしょう］おまち ください。",
                "［お］しょうがつ",
                "しやくしょ"
            ],
            "correctIndex": 3,
            "explanation": "「しやくしょ」 (市役所) means \"municipal office, city hall\"."
        },
        {
            "question": "economy",
            "options": [
                "べつべつに",
                "けいざい",
                "かいぎ",
                "つかれます"
            ],
            "correctIndex": 1,
            "explanation": "「けいざい」 (経済) means \"economy\"."
        },
        {
            "question": "meeting, conference (～を します : hold a conference)",
            "options": [
                "のどが かわきます",
                "さんぽします［こうえんを～］",
                "かいぎ",
                "けいざい"
            ],
            "correctIndex": 2,
            "explanation": "「かいぎ」 (会議) means \"meeting, conference (～を します : hold a conference)\"."
        },
        {
            "question": "registration (～を します : register)",
            "options": [
                "とうろく",
                "おなかが いっぱいです。",
                "つり",
                "だします［てがみを～］"
            ],
            "correctIndex": 0,
            "explanation": "「とうろく」 (登録) means \"registration (～を します : register)\"."
        },
        {
            "question": "(I'm) full.",
            "options": [
                "スキー",
                "［しょうしょう］おまち ください。",
                "しょくじします",
                "おなかが いっぱいです。"
            ],
            "correctIndex": 3,
            "explanation": "「おなかが いっぱいです。」 means \"(I'm) full.\"."
        },
        {
            "question": "I agree with you.",
            "options": [
                "つかれます",
                "そうですね。",
                "［しょうしょう］おまち ください。",
                "むかえます"
            ],
            "correctIndex": 1,
            "explanation": "「そうですね。」 means \"I agree with you.\"."
        },
        {
            "question": "Russia",
            "options": [
                "びじゅつ",
                "なにか",
                "ロシア",
                "プール"
            ],
            "correctIndex": 2,
            "explanation": "「ロシア」 means \"Russia\"."
        },
        {
            "question": "fictitious Japanese restaurant",
            "options": [
                "ロシア",
                "つるや",
                "あそびます",
                "そう しましょう。"
            ],
            "correctIndex": 1,
            "explanation": "「つるや」 means \"fictitious Japanese restaurant\"."
        }
    ],
    "Lesson 14": [
        {
            "question": "turn on",
            "options": [
                "つけます",
                "しんごうを みぎへ まがって ください。",
                "うめだ",
                "あとで"
            ],
            "correctIndex": 0,
            "explanation": "「つけます」 means \"turn on\"."
        },
        {
            "question": "turn off",
            "options": [
                "はいります［きっさてんに～］",
                "けします",
                "とります",
                "なまえ"
            ],
            "correctIndex": 1,
            "explanation": "「けします」 (消します) means \"turn off\"."
        },
        {
            "question": "open",
            "options": [
                "さとう",
                "あけます",
                "はいります［きっさてんに～］",
                "つけます"
            ],
            "correctIndex": 1,
            "explanation": "「あけます」 (開けます) means \"open\"."
        },
        {
            "question": "close, shut",
            "options": [
                "おつり",
                "たちます",
                "しめます",
                "パスポート"
            ],
            "correctIndex": 2,
            "explanation": "「しめます」 (閉めます) means \"close, shut\"."
        },
        {
            "question": "hurry",
            "options": [
                "ふります［あめが～］",
                "あけます",
                "おしえます［じゅうしょを～］",
                "いそぎます"
            ],
            "correctIndex": 3,
            "explanation": "「いそぎます」 (急ぎます) means \"hurry\"."
        },
        {
            "question": "wait",
            "options": [
                "まちます",
                "すぐ",
                "コピーします",
                "はじめます"
            ],
            "correctIndex": 0,
            "explanation": "「まちます」 (待ちます) means \"wait\"."
        },
        {
            "question": "hold",
            "options": [
                "つけます",
                "こたえ",
                "もちます",
                "おつり"
            ],
            "correctIndex": 2,
            "explanation": "「もちます」 (持ちます) means \"hold\"."
        },
        {
            "question": "take, pass",
            "options": [
                "はいります［きっさてんに～］",
                "コピーします",
                "とります",
                "よみかた"
            ],
            "correctIndex": 2,
            "explanation": "「とります」 (取ります) means \"take, pass\"."
        },
        {
            "question": "help (with a task)",
            "options": [
                "パスポート",
                "てつだいます",
                "はなします",
                "ちず"
            ],
            "correctIndex": 1,
            "explanation": "「てつだいます」 (手伝います) means \"help (with a task)\"."
        },
        {
            "question": "call",
            "options": [
                "みせます",
                "ゆっくり",
                "よびます",
                "あけます"
            ],
            "correctIndex": 2,
            "explanation": "「よびます」 (呼びます) means \"call\"."
        },
        {
            "question": "speak, talk",
            "options": [
                "はなします",
                "～かた",
                "しお",
                "あけます"
            ],
            "correctIndex": 0,
            "explanation": "「はなします」 (話します) means \"speak, talk\"."
        },
        {
            "question": "use",
            "options": [
                "しお",
                "しんごうを みぎへ まがって ください。",
                "つかいます",
                "ちず"
            ],
            "correctIndex": 2,
            "explanation": "「つかいます」 (使います) means \"use\"."
        },
        {
            "question": "stop, park",
            "options": [
                "でんき",
                "しお",
                "とめます",
                "けします"
            ],
            "correctIndex": 2,
            "explanation": "「とめます」 (止めます) means \"stop, park\"."
        },
        {
            "question": "show",
            "options": [
                "さとう",
                "はなします",
                "また",
                "みせます"
            ],
            "correctIndex": 3,
            "explanation": "「みせます」 (見せます) means \"show\"."
        },
        {
            "question": "tell [an address]",
            "options": [
                "おしえます［じゅうしょを～］",
                "ゆっくり",
                "あけます",
                "また"
            ],
            "correctIndex": 0,
            "explanation": "「おしえます［じゅうしょを～］」 (教えます［住所を～］) means \"tell [an address]\"."
        },
        {
            "question": "sit down",
            "options": [
                "つけます",
                "てつだいます",
                "すぐ",
                "すわります"
            ],
            "correctIndex": 3,
            "explanation": "「すわります」 (座ります) means \"sit down\"."
        },
        {
            "question": "stand up",
            "options": [
                "たちます",
                "おしえます［じゅうしょを～］",
                "おつり",
                "はじめます"
            ],
            "correctIndex": 0,
            "explanation": "「たちます」 (立ちます) means \"stand up\"."
        },
        {
            "question": "enter [a café]",
            "options": [
                "はいります［きっさてんに～］",
                "いそぎます",
                "みどり ちょう",
                "ゆっくり"
            ],
            "correctIndex": 0,
            "explanation": "「はいります［きっさてんに～］」 (入ります［喫茶店に～］) means \"enter [a café]\"."
        },
        {
            "question": "go out [of a café]",
            "options": [
                "でます［きっさてんを～］",
                "また",
                "さとう",
                "まがります［みぎへ～］"
            ],
            "correctIndex": 0,
            "explanation": "「でます［きっさてんを～］」 (出ます［喫茶店を～］) means \"go out [of a café]\"."
        },
        {
            "question": "rain",
            "options": [
                "つけます",
                "ふります［あめが～］",
                "ゆっくり",
                "しんごうを みぎへ まがって ください。"
            ],
            "correctIndex": 1,
            "explanation": "「ふります［あめが～］」 (降ります［雨が～］) means \"rain\"."
        },
        {
            "question": "copy",
            "options": [
                "もんだい",
                "いいですよ。",
                "コピーします",
                "ゆっくり"
            ],
            "correctIndex": 2,
            "explanation": "「コピーします」 means \"copy\"."
        },
        {
            "question": "electricity, light",
            "options": [
                "はいります［きっさてんに～］",
                "こたえ",
                "でんき",
                "ゆっくり"
            ],
            "correctIndex": 2,
            "explanation": "「でんき」 (電気) means \"electricity, light\"."
        },
        {
            "question": "air conditioner",
            "options": [
                "まちます",
                "エアコン",
                "いそぎます",
                "あけます"
            ],
            "correctIndex": 1,
            "explanation": "「エアコン」 means \"air conditioner\"."
        },
        {
            "question": "passport",
            "options": [
                "もちます",
                "なまえ",
                "パスポート",
                "しお"
            ],
            "correctIndex": 2,
            "explanation": "「パスポート」 means \"passport\"."
        },
        {
            "question": "name",
            "options": [
                "はじめます",
                "ちず",
                "よびます",
                "なまえ"
            ],
            "correctIndex": 3,
            "explanation": "「なまえ」 (名前) means \"name\"."
        },
        {
            "question": "address",
            "options": [
                "すぐ",
                "じゅうしょ",
                "あけます",
                "はじめます"
            ],
            "correctIndex": 1,
            "explanation": "「じゅうしょ」 (住所) means \"address\"."
        },
        {
            "question": "map",
            "options": [
                "あとで",
                "ちず",
                "たちます",
                "～かた"
            ],
            "correctIndex": 1,
            "explanation": "「ちず」 (地図) means \"map\"."
        },
        {
            "question": "salt",
            "options": [
                "しお",
                "すわります",
                "いそぎます",
                "まちます"
            ],
            "correctIndex": 0,
            "explanation": "「しお」 (塩) means \"salt\"."
        },
        {
            "question": "sugar",
            "options": [
                "さとう",
                "みどり ちょう",
                "もう すこし",
                "つかいます"
            ],
            "correctIndex": 0,
            "explanation": "「さとう」 (砂糖) means \"sugar\"."
        },
        {
            "question": "question, problem, trouble",
            "options": [
                "もんだい",
                "すわります",
                "しめます",
                "～かた"
            ],
            "correctIndex": 0,
            "explanation": "「もんだい」 (問題) means \"question, problem, trouble\"."
        },
        {
            "question": "answer",
            "options": [
                "なまえ",
                "こたえ",
                "けします",
                "ふります［あめが～］"
            ],
            "correctIndex": 1,
            "explanation": "「こたえ」 (答え) means \"answer\"."
        },
        {
            "question": "how to read, way of reading",
            "options": [
                "でます［きっさてんを～］",
                "よみかた",
                "ふります［あめが～］",
                "はいります［きっさてんに～］"
            ],
            "correctIndex": 1,
            "explanation": "「よみかた」 (読み方) means \"how to read, way of reading\"."
        },
        {
            "question": "how to ～, way of ～ing",
            "options": [
                "まがります［みぎへ～］",
                "～かた",
                "おつり",
                "とめます"
            ],
            "correctIndex": 1,
            "explanation": "「～かた」 (～方) means \"how to ～, way of ～ing\"."
        },
        {
            "question": "straight",
            "options": [
                "さとう",
                "まがります［みぎへ～］",
                "しんごうを みぎへ まがって ください。",
                "まっすぐ"
            ],
            "correctIndex": 3,
            "explanation": "「まっすぐ」 means \"straight\"."
        },
        {
            "question": "slowly, leisurely",
            "options": [
                "でんき",
                "はなします",
                "うめだ",
                "ゆっくり"
            ],
            "correctIndex": 3,
            "explanation": "「ゆっくり」 means \"slowly, leisurely\"."
        },
        {
            "question": "immediately",
            "options": [
                "もう すこし",
                "ゆっくり",
                "つかいます",
                "すぐ"
            ],
            "correctIndex": 3,
            "explanation": "「すぐ」 means \"immediately\"."
        },
        {
            "question": "again",
            "options": [
                "また",
                "ふります［あめが～］",
                "いそぎます",
                "よびます"
            ],
            "correctIndex": 0,
            "explanation": "「また」 means \"again\"."
        },
        {
            "question": "later",
            "options": [
                "もんだい",
                "あとで",
                "パスポート",
                "すぐ"
            ],
            "correctIndex": 1,
            "explanation": "「あとで」 means \"later\"."
        },
        {
            "question": "a little more",
            "options": [
                "すぐ",
                "さあ",
                "もう すこし",
                "とめます"
            ],
            "correctIndex": 2,
            "explanation": "「もう すこし」 (もう 少し) means \"a little more\"."
        },
        {
            "question": "～ more, another ～",
            "options": [
                "もちます",
                "もう ～",
                "なまえ",
                "あれ？"
            ],
            "correctIndex": 1,
            "explanation": "「もう ～」 means \"～ more, another ～\"."
        },
        {
            "question": "right (used when encouraging some course of action)",
            "options": [
                "なまえ",
                "うめだ",
                "また",
                "さあ"
            ],
            "correctIndex": 3,
            "explanation": "「さあ」 means \"right (used when encouraging some course of action)\"."
        },
        {
            "question": "Oh! Eh? (in surprise or wonder)",
            "options": [
                "あれ？",
                "じゅうしょ",
                "ゆっくり",
                "あけます"
            ],
            "correctIndex": 0,
            "explanation": "「あれ？」 means \"Oh! Eh? (in surprise or wonder)\"."
        },
        {
            "question": "Turn right at the traffic lights.",
            "options": [
                "あれ？",
                "さあ",
                "しんごうを みぎへ まがって ください。",
                "つかいます"
            ],
            "correctIndex": 2,
            "explanation": "「しんごうを みぎへ まがって ください。」 (信号を 右へ 曲がって ください。) means \"Turn right at the traffic lights.\"."
        },
        {
            "question": "I'd like to pay with this",
            "options": [
                "～かた",
                "すわります",
                "これで おねがいします。",
                "あれ？"
            ],
            "correctIndex": 2,
            "explanation": "「これで おねがいします。」 (これで お願いします。) means \"I'd like to pay with this\"."
        },
        {
            "question": "change",
            "options": [
                "こたえ",
                "しんごうを みぎへ まがって ください。",
                "たちます",
                "おつり"
            ],
            "correctIndex": 3,
            "explanation": "「おつり」 (お釣り) means \"change\"."
        },
        {
            "question": "a fictitious town",
            "options": [
                "でます［きっさてんを～］",
                "みどり ちょう",
                "ゆっくり",
                "てつだいます"
            ],
            "correctIndex": 1,
            "explanation": "「みどり ちょう」 (みどり 町) means \"a fictitious town\"."
        },
        {
            "question": "turn [to the right]",
            "options": [
                "よびます",
                "まがります［みぎへ～］",
                "しんごうを みぎへ まがって ください。",
                "でんき"
            ],
            "correctIndex": 1,
            "explanation": "「まがります［みぎへ～］」 (曲がります［右へ～］) means \"turn [to the right]\"."
        },
        {
            "question": "start, begin",
            "options": [
                "はじめます",
                "まっすぐ",
                "あれ？",
                "コピーします"
            ],
            "correctIndex": 0,
            "explanation": "「はじめます」 (始めます) means \"start, begin\"."
        },
        {
            "question": "Sure./Certainly.",
            "options": [
                "よみかた",
                "ちず",
                "さあ",
                "いいですよ。"
            ],
            "correctIndex": 3,
            "explanation": "「いいですよ。」 means \"Sure./Certainly.\"."
        },
        {
            "question": "name of a town in Osaka",
            "options": [
                "うめだ",
                "おつり",
                "しめます",
                "てつだいます"
            ],
            "correctIndex": 0,
            "explanation": "「うめだ」 (梅田) means \"name of a town in Osaka\"."
        }
    ],
    "Lesson 15": [
        {
            "question": "put",
            "options": [
                "ごかぞく",
                "ソフト",
                "おきます",
                "すわります"
            ],
            "correctIndex": 2,
            "explanation": "「おきます」 (置きます) means \"put\"."
        },
        {
            "question": "make, produce",
            "options": [
                "ごかぞく",
                "とこや",
                "つくります",
                "つかいます"
            ],
            "correctIndex": 2,
            "explanation": "「つくります」 (作ります、造ります) means \"make, produce\"."
        },
        {
            "question": "sell",
            "options": [
                "うります",
                "すみます",
                "しります",
                "せいひん"
            ],
            "correctIndex": 0,
            "explanation": "「うります」 (売ります) means \"sell\"."
        },
        {
            "question": "get to know",
            "options": [
                "とくに",
                "しります",
                "でんしじしょ",
                "とこや"
            ],
            "correctIndex": 1,
            "explanation": "「しります」 (知ります) means \"get to know\"."
        },
        {
            "question": "be going to live",
            "options": [
                "すみます",
                "みんなの インタビュー",
                "とくに",
                "いらっしゃいます"
            ],
            "correctIndex": 0,
            "explanation": "「すみます」 (住ます) means \"be going to live\"."
        },
        {
            "question": "do research",
            "options": [
                "せんもん",
                "ソフト",
                "けんきゅうします",
                "うります"
            ],
            "correctIndex": 2,
            "explanation": "「けんきゅうします」 (研究します) means \"do research\"."
        },
        {
            "question": "materials, data",
            "options": [
                "しって います",
                "しりょう",
                "たちます",
                "おきます"
            ],
            "correctIndex": 1,
            "explanation": "「しりょう」 (資料) means \"materials, data\"."
        },
        {
            "question": "catalog",
            "options": [
                "うります",
                "おもいだします",
                "いらっしゃいます",
                "カタログ"
            ],
            "correctIndex": 3,
            "explanation": "「カタログ」 means \"catalog\"."
        },
        {
            "question": "timetable",
            "options": [
                "じこくひょう",
                "すんで います［おおさかに～］",
                "しって います",
                "おきます"
            ],
            "correctIndex": 0,
            "explanation": "「じこくひょう」 (時刻表) means \"timetable\"."
        },
        {
            "question": "clothes",
            "options": [
                "つかいます",
                "ふく",
                "せんもん",
                "おもいだします"
            ],
            "correctIndex": 1,
            "explanation": "「ふく」 (服) means \"clothes\"."
        },
        {
            "question": "products",
            "options": [
                "ソフト",
                "せいひん",
                "けんきゅうします",
                "ごかぞく"
            ],
            "correctIndex": 1,
            "explanation": "「せいひん」 (製品) means \"products\"."
        },
        {
            "question": "software",
            "options": [
                "おきます",
                "じこくひょう",
                "すみます",
                "ソフト"
            ],
            "correctIndex": 3,
            "explanation": "「ソフト」 means \"software\"."
        },
        {
            "question": "electronic dictionary",
            "options": [
                "でんしじしょ",
                "とくに",
                "カタログ",
                "つくります"
            ],
            "correctIndex": 0,
            "explanation": "「でんしじしょ」 (電子辞書) means \"electronic dictionary\"."
        },
        {
            "question": "economy",
            "options": [
                "けいざい",
                "うります",
                "プレイガイド",
                "せんもん"
            ],
            "correctIndex": 0,
            "explanation": "「けいざい」 (経済) means \"economy\"."
        },
        {
            "question": "municipal office, city hall",
            "options": [
                "しりょう",
                "せいひん",
                "カタログ",
                "しやくしょ"
            ],
            "correctIndex": 3,
            "explanation": "「しやくしょ」 (市役所) means \"municipal office, city hall\"."
        },
        {
            "question": "senior high school",
            "options": [
                "こうこう",
                "すわります",
                "おきます",
                "せいひん"
            ],
            "correctIndex": 0,
            "explanation": "「こうこう」 (高校) means \"senior high school\"."
        },
        {
            "question": "dentist, dentist's",
            "options": [
                "つくります",
                "でんしじしょ",
                "はいしゃ",
                "こうこう"
            ],
            "correctIndex": 2,
            "explanation": "「はいしゃ」 (歯医者) means \"dentist, dentist's\"."
        },
        {
            "question": "single, unmarried",
            "options": [
                "でんしじしょ",
                "せんもん",
                "どくしん",
                "とこや"
            ],
            "correctIndex": 2,
            "explanation": "「どくしん」 (独身) means \"single, unmarried\"."
        },
        {
            "question": "I'm sorry.",
            "options": [
                "しって います",
                "すみません",
                "とくに",
                "けいざい"
            ],
            "correctIndex": 1,
            "explanation": "「すみません」 means \"I'm sorry.\"."
        },
        {
            "question": "Ladies and Gentlemen, everybody",
            "options": [
                "みなさん",
                "はいしゃ",
                "せいひん",
                "うります"
            ],
            "correctIndex": 0,
            "explanation": "「みなさん」 (皆さん) means \"Ladies and Gentlemen, everybody\"."
        },
        {
            "question": "remember, recollect",
            "options": [
                "しりょう",
                "けんきゅうします",
                "どくしん",
                "おもいだします"
            ],
            "correctIndex": 3,
            "explanation": "「おもいだします」 (思い出します) means \"remember, recollect\"."
        },
        {
            "question": "be (honorific equivalent of います)",
            "options": [
                "しりょう",
                "おもいだします",
                "いらっしゃいます",
                "しります"
            ],
            "correctIndex": 2,
            "explanation": "「いらっしゃいます」 means \"be (honorific equivalent of います)\"."
        },
        {
            "question": "a shopping district in Osaka",
            "options": [
                "にっぽんばし",
                "けんきゅうします",
                "おきます",
                "とくに"
            ],
            "correctIndex": 0,
            "explanation": "「にっぽんばし」 (日本橋) means \"a shopping district in Osaka\"."
        },
        {
            "question": "a fictitious TV programme",
            "options": [
                "こうこう",
                "みんなの インタビュー",
                "ふく",
                "すわります"
            ],
            "correctIndex": 1,
            "explanation": "「みんなの インタビュー」 means \"a fictitious TV programme\"."
        },
        {
            "question": "stand up",
            "options": [
                "でんしじしょ",
                "けいざい",
                "たちます",
                "つかいます"
            ],
            "correctIndex": 2,
            "explanation": "「たちます」 (立ちます) means \"stand up\"."
        },
        {
            "question": "sit down",
            "options": [
                "うります",
                "すわります",
                "せいひん",
                "でんしじしょ"
            ],
            "correctIndex": 1,
            "explanation": "「すわります」 (座ります) means \"sit down\"."
        },
        {
            "question": "use",
            "options": [
                "とくに",
                "つかいます",
                "けんきゅうします",
                "いらっしゃいます"
            ],
            "correctIndex": 1,
            "explanation": "「つかいます」 (使います) means \"use\"."
        },
        {
            "question": "know",
            "options": [
                "すみません",
                "たちます",
                "みんなの インタビュー",
                "しって います"
            ],
            "correctIndex": 3,
            "explanation": "「しって います」 (知って います) means \"know\"."
        },
        {
            "question": "live [in Osaka]",
            "options": [
                "どくしん",
                "とこや",
                "けいざい",
                "すんで います［おおさかに～］"
            ],
            "correctIndex": 3,
            "explanation": "「すんで います［おおさかに～］」 (住んで います［大阪に～］) means \"live [in Osaka]\"."
        },
        {
            "question": "specialty, field of study",
            "options": [
                "せんもん",
                "しりょう",
                "とこや",
                "ごかぞく"
            ],
            "correctIndex": 0,
            "explanation": "「せんもん」 (専門) means \"specialty, field of study\"."
        },
        {
            "question": "barber, barber's",
            "options": [
                "とこや",
                "しやくしょ",
                "しって います",
                "とくに"
            ],
            "correctIndex": 0,
            "explanation": "「とこや」 (床屋) means \"barber, barber's\"."
        },
        {
            "question": "(theater) ticket agency",
            "options": [
                "しりょう",
                "しります",
                "プレイガイド",
                "すんで います［おおさかに～］"
            ],
            "correctIndex": 2,
            "explanation": "「プレイガイド」 means \"(theater) ticket agency\"."
        },
        {
            "question": "especially",
            "options": [
                "とこや",
                "けいざい",
                "ふく",
                "とくに"
            ],
            "correctIndex": 3,
            "explanation": "「とくに」 (特に) means \"especially\"."
        },
        {
            "question": "your family",
            "options": [
                "いらっしゃいます",
                "ごかぞく",
                "カタログ",
                "でんしじしょ"
            ],
            "correctIndex": 1,
            "explanation": "「ごかぞく」 (ご家族) means \"your family\"."
        }
    ],
    "Lesson 16": [
        {
            "question": "ride, get on [a train]",
            "options": [
                "［いいえ、］まだまだです。",
                "じんじゃ",
                "くらい",
                "のります［でんしゃに～］"
            ],
            "correctIndex": 3,
            "explanation": "「のります［でんしゃに～］」 (乗ります［電車に～］) means \"ride, get on [a train]\"."
        },
        {
            "question": "get off",
            "options": [
                "おひきだしですか。",
                "みみ",
                "サービス",
                "おります［でんしゃを～］"
            ],
            "correctIndex": 3,
            "explanation": "「おります［でんしゃを～］」 (降ります［電車を～］) means \"get off\"."
        },
        {
            "question": "change (trains, etc.)",
            "options": [
                "わかい",
                "だします",
                "のりかえます",
                "せが たかい"
            ],
            "correctIndex": 2,
            "explanation": "「のりかえます」 (乗り換えます) means \"change (trains, etc.)\"."
        },
        {
            "question": "take [a shower]",
            "options": [
                "おなか",
                "はじめます",
                "はいります［だいがくに～］",
                "あびます［シャワーを～］"
            ],
            "correctIndex": 3,
            "explanation": "「あびます［シャワーを～］」 (浴びます［シャワーを～］) means \"take [a shower]\"."
        },
        {
            "question": "put in, insert",
            "options": [
                "アジア",
                "あたま",
                "ボタン",
                "いれます"
            ],
            "correctIndex": 3,
            "explanation": "「いれます」 (入れます) means \"put in, insert\"."
        },
        {
            "question": "take out, hand in, send",
            "options": [
                "はじめます",
                "ジョギング",
                "ベラクルス",
                "だします"
            ],
            "correctIndex": 3,
            "explanation": "「だします」 (出します) means \"take out, hand in, send\"."
        },
        {
            "question": "withdraw",
            "options": [
                "おろします［おかねを～］",
                "ジョギング",
                "だいがくまえ",
                "キャッシュカード"
            ],
            "correctIndex": 0,
            "explanation": "「おろします［おかねを～］」 (下ろします［お金を～］) means \"withdraw\"."
        },
        {
            "question": "enter [university]",
            "options": [
                "おります［でんしゃを～］",
                "はいります［だいがくに～］",
                "でます［だいがくを～］",
                "せ"
            ],
            "correctIndex": 1,
            "explanation": "「はいります［だいがくに～］」 (入ります［大学に～］) means \"enter [university]\"."
        },
        {
            "question": "graduate from [university]",
            "options": [
                "キャッシュカード",
                "サービス",
                "でます［だいがくを～］",
                "やめます［かいしゃを～］"
            ],
            "correctIndex": 2,
            "explanation": "「でます［だいがくを～］」 (出ます［大学を～］) means \"graduate from [university]\"."
        },
        {
            "question": "push, press",
            "options": [
                "ながい",
                "あたま",
                "おします",
                "やめます［かいしゃを～］"
            ],
            "correctIndex": 2,
            "explanation": "「おします」 (押します) means \"push, press\"."
        },
        {
            "question": "drink alcohol",
            "options": [
                "みみ",
                "アジア",
                "のみます",
                "キャッシュカード"
            ],
            "correctIndex": 2,
            "explanation": "「のみます」 (飲みます) means \"drink alcohol\"."
        },
        {
            "question": "start, begin",
            "options": [
                "フランケン",
                "ながい",
                "ゆきまつり",
                "はじめます"
            ],
            "correctIndex": 3,
            "explanation": "「はじめます」 (始めます) means \"start, begin\"."
        },
        {
            "question": "tour, visit a place to study it",
            "options": [
                "けんがくします",
                "はな",
                "シャワー",
                "［いいえ、］まだまだです。"
            ],
            "correctIndex": 0,
            "explanation": "「けんがくします」 (見学します) means \"tour, visit a place to study it\"."
        },
        {
            "question": "phone",
            "options": [
                "どうやって",
                "のみます",
                "でんわします",
                "いれます"
            ],
            "correctIndex": 2,
            "explanation": "「でんわします」 (電話します) means \"phone\"."
        },
        {
            "question": "young",
            "options": [
                "あんしょうばんごう",
                "だします",
                "－ばん",
                "わかい"
            ],
            "correctIndex": 3,
            "explanation": "「わかい」 (若い) means \"young\"."
        },
        {
            "question": "long",
            "options": [
                "かお",
                "ながい",
                "おします",
                "みじかい"
            ],
            "correctIndex": 1,
            "explanation": "「ながい」 (長い) means \"long\"."
        },
        {
            "question": "short",
            "options": [
                "フエ",
                "でんわします",
                "みじかい",
                "［お］てら"
            ],
            "correctIndex": 2,
            "explanation": "「みじかい」 (短い) means \"short\"."
        },
        {
            "question": "bright, light",
            "options": [
                "せ",
                "あかるい",
                "どの ～",
                "けんがくします"
            ],
            "correctIndex": 1,
            "explanation": "「あかるい」 (明るい) means \"bright, light\"."
        },
        {
            "question": "dark",
            "options": [
                "せが たかい",
                "くらい",
                "［いいえ、］まだまだです。",
                "わかい"
            ],
            "correctIndex": 1,
            "explanation": "「くらい」 (暗い) means \"dark\"."
        },
        {
            "question": "body, health",
            "options": [
                "あたまが いい",
                "だいがくまえ",
                "まず",
                "からだ"
            ],
            "correctIndex": 3,
            "explanation": "「からだ」 (体) means \"body, health\"."
        },
        {
            "question": "head, brain",
            "options": [
                "せ",
                "けんがくします",
                "あたま",
                "のみます"
            ],
            "correctIndex": 2,
            "explanation": "「あたま」 (頭) means \"head, brain\"."
        },
        {
            "question": "hair",
            "options": [
                "め",
                "かお",
                "かみ",
                "あかるい"
            ],
            "correctIndex": 2,
            "explanation": "「かみ」 (髪) means \"hair\"."
        },
        {
            "question": "face",
            "options": [
                "みじかい",
                "はいります［だいがくに～］",
                "せが たかい",
                "かお"
            ],
            "correctIndex": 3,
            "explanation": "「かお」 (顔) means \"face\"."
        },
        {
            "question": "eye",
            "options": [
                "め",
                "フエ",
                "いれます",
                "くらい"
            ],
            "correctIndex": 0,
            "explanation": "「め」 (目) means \"eye\"."
        },
        {
            "question": "ear",
            "options": [
                "でます［だいがくを～］",
                "どの ～",
                "ながい",
                "みみ"
            ],
            "correctIndex": 3,
            "explanation": "「みみ」 (耳) means \"ear\"."
        },
        {
            "question": "nose",
            "options": [
                "アジア",
                "はな",
                "のります［でんしゃに～］",
                "じんじゃ"
            ],
            "correctIndex": 1,
            "explanation": "「はな」 (鼻) means \"nose\"."
        },
        {
            "question": "mouth",
            "options": [
                "でます［だいがくを～］",
                "くち",
                "かお",
                "ボタン"
            ],
            "correctIndex": 1,
            "explanation": "「くち」 (口) means \"mouth\"."
        },
        {
            "question": "tooth",
            "options": [
                "は",
                "みじかい",
                "せ",
                "ジョギング"
            ],
            "correctIndex": 0,
            "explanation": "「は」 (歯) means \"tooth\"."
        },
        {
            "question": "stomach",
            "options": [
                "いれます",
                "せが たかい",
                "くらい",
                "おなか"
            ],
            "correctIndex": 3,
            "explanation": "「おなか」 means \"stomach\"."
        },
        {
            "question": "leg, foot",
            "options": [
                "ベトナム",
                "かお",
                "あし",
                "あかるい"
            ],
            "correctIndex": 2,
            "explanation": "「あし」 (足) means \"leg, foot\"."
        },
        {
            "question": "height",
            "options": [
                "せ",
                "のりかえます",
                "からだ",
                "みじかい"
            ],
            "correctIndex": 0,
            "explanation": "「せ」 (背) means \"height\"."
        },
        {
            "question": "service",
            "options": [
                "かくにん",
                "あたまが いい",
                "サービス",
                "やめます［かいしゃを～］"
            ],
            "correctIndex": 2,
            "explanation": "「サービス」 means \"service\"."
        },
        {
            "question": "jogging (～を します : jog)",
            "options": [
                "はいります［だいがくに～］",
                "きんがく",
                "ジョギング",
                "アジア"
            ],
            "correctIndex": 2,
            "explanation": "「ジョギング」 means \"jogging (～を します : jog)\"."
        },
        {
            "question": "shower",
            "options": [
                "りゅうがくせい",
                "シャワー",
                "JR",
                "だいがくまえ"
            ],
            "correctIndex": 1,
            "explanation": "「シャワー」 means \"shower\"."
        },
        {
            "question": "green, greenery",
            "options": [
                "みどり",
                "かお",
                "おります［でんしゃを～］",
                "のみます"
            ],
            "correctIndex": 0,
            "explanation": "「みどり」 (緑) means \"green, greenery\"."
        },
        {
            "question": "Buddhist temple",
            "options": [
                "わかい",
                "アジア",
                "め",
                "［お］てら"
            ],
            "correctIndex": 3,
            "explanation": "「［お］てら」 (［お］寺) means \"Buddhist temple\"."
        },
        {
            "question": "Shinto shrine",
            "options": [
                "シャワー",
                "フランケン",
                "じんじゃ",
                "はな"
            ],
            "correctIndex": 2,
            "explanation": "「じんじゃ」 (神社) means \"Shinto shrine\"."
        },
        {
            "question": "number －",
            "options": [
                "でます［だいがくを～］",
                "サービス",
                "－ばん",
                "みどり"
            ],
            "correctIndex": 2,
            "explanation": "「－ばん」 (－番) means \"number －\"."
        },
        {
            "question": "in what way, how",
            "options": [
                "あし",
                "どうやって",
                "みじかい",
                "からだ"
            ],
            "correctIndex": 1,
            "explanation": "「どうやって」 means \"in what way, how\"."
        },
        {
            "question": "which ～ (used for three or more)",
            "options": [
                "りゅうがくせい",
                "ベトナム",
                "やめます［かいしゃを～］",
                "どの ～"
            ],
            "correctIndex": 3,
            "explanation": "「どの ～」 means \"which ～ (used for three or more)\"."
        },
        {
            "question": "which one (of three or more things)",
            "options": [
                "どれ",
                "おします",
                "かみ",
                "でんわします"
            ],
            "correctIndex": 0,
            "explanation": "「どれ」 means \"which one (of three or more things)\"."
        },
        {
            "question": "That's amazing!",
            "options": [
                "すごいですね。",
                "ボタン",
                "おります［でんしゃを～］",
                "－ばん"
            ],
            "correctIndex": 0,
            "explanation": "「すごいですね。」 means \"That's amazing!\"."
        },
        {
            "question": "[No,] I still have a long way to go.",
            "options": [
                "どれ",
                "でます［だいがくを～］",
                "［いいえ、］まだまだです。",
                "けんがくします"
            ],
            "correctIndex": 2,
            "explanation": "「［いいえ、］まだまだです。」 means \"[No,] I still have a long way to go.\"."
        },
        {
            "question": "Are you making a withdrawal?",
            "options": [
                "ベトナム",
                "おひきだしですか。",
                "りゅうがくせい",
                "ベラクルス"
            ],
            "correctIndex": 1,
            "explanation": "「おひきだしですか。」 (お引き出しですか。) means \"Are you making a withdrawal?\"."
        },
        {
            "question": "first of all",
            "options": [
                "ながい",
                "まず",
                "おろします［おかねを～］",
                "JR"
            ],
            "correctIndex": 1,
            "explanation": "「まず」 means \"first of all\"."
        },
        {
            "question": "next, as a next step",
            "options": [
                "つぎに",
                "あたまが いい",
                "は",
                "かお"
            ],
            "correctIndex": 0,
            "explanation": "「つぎに」 (次に) means \"next, as a next step\"."
        },
        {
            "question": "cash dispensing card",
            "options": [
                "はな",
                "キャッシュカード",
                "みどり",
                "ながい"
            ],
            "correctIndex": 1,
            "explanation": "「キャッシュカード」 means \"cash dispensing card\"."
        },
        {
            "question": "personal identification number, PIN",
            "options": [
                "キャッシュカード",
                "あんしょうばんごう",
                "おひきだしですか。",
                "ゆきまつり"
            ],
            "correctIndex": 1,
            "explanation": "「あんしょうばんごう」 (暗証番号) means \"personal identification number, PIN\"."
        },
        {
            "question": "amount of money",
            "options": [
                "ベトナム",
                "フエ",
                "きんがく",
                "やめます［かいしゃを～］"
            ],
            "correctIndex": 2,
            "explanation": "「きんがく」 (金額) means \"amount of money\"."
        },
        {
            "question": "confirmation (～します : confirm)",
            "options": [
                "かくにん",
                "はな",
                "うめだ",
                "でます［だいがくを～］"
            ],
            "correctIndex": 0,
            "explanation": "「かくにん」 (確認) means \"confirmation (～します : confirm)\"."
        },
        {
            "question": "button",
            "options": [
                "め",
                "ベラクルス",
                "つぎに",
                "ボタン"
            ],
            "correctIndex": 3,
            "explanation": "「ボタン」 means \"button\"."
        },
        {
            "question": "Japan Railways",
            "options": [
                "あたまが いい",
                "JR",
                "いれます",
                "ボタン"
            ],
            "correctIndex": 1,
            "explanation": "「JR」 means \"Japan Railways\"."
        },
        {
            "question": "Snow Festival",
            "options": [
                "みじかい",
                "のみます",
                "ゆきまつり",
                "どの ～"
            ],
            "correctIndex": 2,
            "explanation": "「ゆきまつり」 (雪祭り) means \"Snow Festival\"."
        },
        {
            "question": "Bandung (in Indonesia)",
            "options": [
                "つぎに",
                "ベトナム",
                "バンドン",
                "でんわします"
            ],
            "correctIndex": 2,
            "explanation": "「バンドン」 means \"Bandung (in Indonesia)\"."
        },
        {
            "question": "Franken (in Germany)",
            "options": [
                "みみ",
                "ジョギング",
                "フランケン",
                "うめだ"
            ],
            "correctIndex": 2,
            "explanation": "「フランケン」 means \"Franken (in Germany)\"."
        },
        {
            "question": "Veracruz (in Mexico)",
            "options": [
                "だします",
                "あびます［シャワーを～］",
                "ベラクルス",
                "－ばん"
            ],
            "correctIndex": 2,
            "explanation": "「ベラクルス」 means \"Veracruz (in Mexico)\"."
        },
        {
            "question": "a district in Osaka",
            "options": [
                "みじかい",
                "うめだ",
                "まず",
                "かくにん"
            ],
            "correctIndex": 1,
            "explanation": "「うめだ」 (梅田) means \"a district in Osaka\"."
        },
        {
            "question": "a fictitious bus stop",
            "options": [
                "だいがくまえ",
                "フランケン",
                "ボタン",
                "からだ"
            ],
            "correctIndex": 0,
            "explanation": "「だいがくまえ」 (大学前) means \"a fictitious bus stop\"."
        },
        {
            "question": "quit or retire from [a company], stop, give up",
            "options": [
                "やめます［かいしゃを～］",
                "つぎに",
                "のります［でんしゃに～］",
                "おります［でんしゃを～］"
            ],
            "correctIndex": 0,
            "explanation": "「やめます［かいしゃを～］」 (やめます［会社を～］) means \"quit or retire from [a company], stop, give up\"."
        },
        {
            "question": "tall (referring to person)",
            "options": [
                "みどり",
                "だします",
                "せが たかい",
                "バンドン"
            ],
            "correctIndex": 2,
            "explanation": "「せが たかい」 (背が 高い) means \"tall (referring to person)\"."
        },
        {
            "question": "clever, smart",
            "options": [
                "はじめます",
                "ベトナム",
                "じんじゃ",
                "あたまが いい"
            ],
            "correctIndex": 3,
            "explanation": "「あたまが いい」 (頭が いい) means \"clever, smart\"."
        },
        {
            "question": "foreign student",
            "options": [
                "りゅうがくせい",
                "ボタン",
                "だします",
                "め"
            ],
            "correctIndex": 0,
            "explanation": "「りゅうがくせい」 (留学生) means \"foreign student\"."
        },
        {
            "question": "Asia",
            "options": [
                "ながい",
                "やめます［かいしゃを～］",
                "アジア",
                "でんわします"
            ],
            "correctIndex": 2,
            "explanation": "「アジア」 means \"Asia\"."
        },
        {
            "question": "Vietnam",
            "options": [
                "ベトナム",
                "はいります［だいがくに～］",
                "はじめます",
                "ゆきまつり"
            ],
            "correctIndex": 0,
            "explanation": "「ベトナム」 means \"Vietnam\"."
        },
        {
            "question": "Hue (in Vietnam)",
            "options": [
                "フエ",
                "おろします［おかねを～］",
                "アジア",
                "JR"
            ],
            "correctIndex": 0,
            "explanation": "「フエ」 means \"Hue (in Vietnam)\"."
        }
    ],
    "Lesson 17": [
        {
            "question": "memorise",
            "options": [
                "おぼえます",
                "おだいじに。",
                "こたえ",
                "どう しましたか。"
            ],
            "correctIndex": 0,
            "explanation": "「おぼえます」 (覚えます) means \"memorise\"."
        },
        {
            "question": "forget",
            "options": [
                "せんせい",
                "わすれます",
                "どう しましたか。",
                "それから"
            ],
            "correctIndex": 1,
            "explanation": "「わすれます」 (忘れます) means \"forget\"."
        },
        {
            "question": "lose",
            "options": [
                "［お］ふろ",
                "なくします",
                "こたえ",
                "せんせい"
            ],
            "correctIndex": 1,
            "explanation": "「なくします」 means \"lose\"."
        },
        {
            "question": "pay",
            "options": [
                "はらいます",
                "［けんこう］ほけんしょう",
                "ですから",
                "なくします"
            ],
            "correctIndex": 0,
            "explanation": "「はらいます」 (払います) means \"pay\"."
        },
        {
            "question": "give back, return",
            "options": [
                "かえします",
                "［～が］いたいです。",
                "かぜ",
                "でかけます"
            ],
            "correctIndex": 0,
            "explanation": "「かえします」 (返します) means \"give back, return\"."
        },
        {
            "question": "go out",
            "options": [
                "もって いきます",
                "ねつ",
                "でかけます",
                "なくします"
            ],
            "correctIndex": 2,
            "explanation": "「でかけます」 (出かけます) means \"go out\"."
        },
        {
            "question": "take off (clothes, shoes, etc.)",
            "options": [
                "くすり",
                "わすれます",
                "ぬぎます",
                "２、３～"
            ],
            "correctIndex": 2,
            "explanation": "「ぬぎます」 (脱ぎます) means \"take off (clothes, shoes, etc.)\"."
        },
        {
            "question": "take (something)",
            "options": [
                "ですから",
                "なくします",
                "でかけます",
                "もって いきます"
            ],
            "correctIndex": 3,
            "explanation": "「もって いきます」 (持って 行きます) means \"take (something)\"."
        },
        {
            "question": "bring (something)",
            "options": [
                "２、３～",
                "もって きます",
                "ぬぎます",
                "だいじょうぶ［な］"
            ],
            "correctIndex": 1,
            "explanation": "「もって きます」 (持って 来ます) means \"bring (something)\"."
        },
        {
            "question": "worry",
            "options": [
                "したぎ",
                "かえします",
                "それから",
                "しんぱいします"
            ],
            "correctIndex": 3,
            "explanation": "「しんぱいします」 (心配します) means \"worry\"."
        },
        {
            "question": "work overtime",
            "options": [
                "しゅっちょうします",
                "ざんぎょうします",
                "もって きます",
                "おぼえます"
            ],
            "correctIndex": 1,
            "explanation": "「ざんぎょうします」 (残業します) means \"work overtime\"."
        },
        {
            "question": "go on a business trip",
            "options": [
                "かぜ",
                "わすれます",
                "たいせつ［な］",
                "しゅっちょうします"
            ],
            "correctIndex": 3,
            "explanation": "「しゅっちょうします」 (出張します) means \"go on a business trip\"."
        },
        {
            "question": "take [medicine]",
            "options": [
                "もんだい",
                "のみます［くすりを～］",
                "おだいじに。",
                "［お］ふろ"
            ],
            "correctIndex": 1,
            "explanation": "「のみます［くすりを～］」 (飲みます［薬を～］) means \"take [medicine]\"."
        },
        {
            "question": "take [a bath]",
            "options": [
                "［お］ふろ",
                "ねつ",
                "はいります［おふろに～］",
                "せんせい"
            ],
            "correctIndex": 2,
            "explanation": "「はいります［おふろに～］」 (入ります［おふろに～］) means \"take [a bath]\"."
        },
        {
            "question": "important, precious",
            "options": [
                "ぬぎます",
                "はいります［おふろに～］",
                "［けんこう］ほけんしょう",
                "たいせつ［な］"
            ],
            "correctIndex": 3,
            "explanation": "「たいせつ［な］」 (大切［な］) means \"important, precious\"."
        },
        {
            "question": "all right",
            "options": [
                "だいじょうぶ［な］",
                "もって きます",
                "２、３～",
                "おぼえます"
            ],
            "correctIndex": 0,
            "explanation": "「だいじょうぶ［な］」 (大丈夫［な］) means \"all right\"."
        },
        {
            "question": "dangerous",
            "options": [
                "はいります［おふろに～］",
                "あぶない",
                "もんだい",
                "かえします"
            ],
            "correctIndex": 1,
            "explanation": "「あぶない」 (危ない) means \"dangerous\"."
        },
        {
            "question": "no smoking",
            "options": [
                "［お］ふろ",
                "きんえん",
                "２、３にち",
                "のど"
            ],
            "correctIndex": 1,
            "explanation": "「きんえん」 (禁煙) means \"no smoking\"."
        },
        {
            "question": "[health] insurance card",
            "options": [
                "のみます［くすりを～］",
                "２、３にち",
                "ですから",
                "［けんこう］ほけんしょう"
            ],
            "correctIndex": 3,
            "explanation": "「［けんこう］ほけんしょう」 (［健康］保険証) means \"[health] insurance card\"."
        },
        {
            "question": "temperature, fever",
            "options": [
                "～までに",
                "もって きます",
                "ねつ",
                "のみます［くすりを～］"
            ],
            "correctIndex": 2,
            "explanation": "「ねつ」 (熱) means \"temperature, fever\"."
        },
        {
            "question": "illness, disease",
            "options": [
                "びょうき",
                "２、３～",
                "もって いきます",
                "だいじょうぶ［な］"
            ],
            "correctIndex": 0,
            "explanation": "「びょうき」 (病気) means \"illness, disease\"."
        },
        {
            "question": "medicine",
            "options": [
                "２、３～",
                "はらいます",
                "くすり",
                "かぜ"
            ],
            "correctIndex": 2,
            "explanation": "「くすり」 (薬) means \"medicine\"."
        },
        {
            "question": "bath",
            "options": [
                "［お］ふろ",
                "こたえ",
                "おぼえます",
                "どう しましたか。"
            ],
            "correctIndex": 0,
            "explanation": "「［お］ふろ」 means \"bath\"."
        },
        {
            "question": "jacket, outerwear",
            "options": [
                "はらいます",
                "しんぱいします",
                "うわぎ",
                "せんせい"
            ],
            "correctIndex": 2,
            "explanation": "「うわぎ」 (上着) means \"jacket, outerwear\"."
        },
        {
            "question": "underwear",
            "options": [
                "もって いきます",
                "ねつ",
                "したぎ",
                "どう しましたか。"
            ],
            "correctIndex": 2,
            "explanation": "「したぎ」 (下着) means \"underwear\"."
        },
        {
            "question": "two or three days",
            "options": [
                "はいります［おふろに～］",
                "２、３にち",
                "だします［レポートを～］",
                "あぶない"
            ],
            "correctIndex": 1,
            "explanation": "「２、３にち」 (２、３日) means \"two or three days\"."
        },
        {
            "question": "two or three ～ (where ～ is a counter suffix)",
            "options": [
                "どう しましたか。",
                "２、３～",
                "［～が］いたいです。",
                "なくします"
            ],
            "correctIndex": 1,
            "explanation": "「２、３～」 means \"two or three ～ (where ～ is a counter suffix)\"."
        },
        {
            "question": "before ～, by ～ (indicating time limit)",
            "options": [
                "～までに",
                "のど",
                "なくします",
                "［お］ふろ"
            ],
            "correctIndex": 0,
            "explanation": "「～までに」 means \"before ～, by ～ (indicating time limit)\"."
        },
        {
            "question": "therefore, so",
            "options": [
                "ですから",
                "せんせい",
                "［～が］いたいです。",
                "ざんぎょうします"
            ],
            "correctIndex": 0,
            "explanation": "「ですから」 means \"therefore, so\"."
        },
        {
            "question": "What's the matter?",
            "options": [
                "かぜ",
                "かえします",
                "だいじょうぶ［な］",
                "どう しましたか。"
            ],
            "correctIndex": 3,
            "explanation": "「どう しましたか。」 means \"What's the matter?\"."
        },
        {
            "question": "throat",
            "options": [
                "どう しましたか。",
                "のど",
                "きんえん",
                "なくします"
            ],
            "correctIndex": 1,
            "explanation": "「のど」 means \"throat\"."
        },
        {
            "question": "(I) have a pain [in my ～].",
            "options": [
                "ぬぎます",
                "［けんこう］ほけんしょう",
                "［～が］いたいです。",
                "２、３にち"
            ],
            "correctIndex": 2,
            "explanation": "「［～が］いたいです。」 (［～が］痛いです。) means \"(I) have a pain [in my ～].\"."
        },
        {
            "question": "cold, flu",
            "options": [
                "はいります［おふろに～］",
                "かぜ",
                "もって きます",
                "あぶない"
            ],
            "correctIndex": 1,
            "explanation": "「かぜ」 means \"cold, flu\"."
        },
        {
            "question": "and, furthermore",
            "options": [
                "ぬぎます",
                "もって きます",
                "だします［レポートを～］",
                "それから"
            ],
            "correctIndex": 3,
            "explanation": "「それから」 means \"and, furthermore\"."
        },
        {
            "question": "Take care of yourself. (said to people who are ill)",
            "options": [
                "ですから",
                "おだいじに。",
                "のみます［くすりを～］",
                "［けんこう］ほけんしょう"
            ],
            "correctIndex": 1,
            "explanation": "「おだいじに。」 (お大事に。) means \"Take care of yourself. (said to people who are ill)\"."
        },
        {
            "question": "hand in [a report]",
            "options": [
                "はいります［おふろに～］",
                "おだいじに。",
                "かぜ",
                "だします［レポートを～］"
            ],
            "correctIndex": 3,
            "explanation": "「だします［レポートを～］」 (出します［レポートを～］) means \"hand in [a report]\"."
        },
        {
            "question": "question, problem, trouble",
            "options": [
                "どう しましたか。",
                "くすり",
                "はらいます",
                "もんだい"
            ],
            "correctIndex": 3,
            "explanation": "「もんだい」 (問題) means \"question, problem, trouble\"."
        },
        {
            "question": "answer",
            "options": [
                "もって きます",
                "こたえ",
                "［けんこう］ほけんしょう",
                "なくします"
            ],
            "correctIndex": 1,
            "explanation": "「こたえ」 (答え) means \"answer\"."
        },
        {
            "question": "doctor (used when addressing a medical doctor)",
            "options": [
                "［けんこう］ほけんしょう",
                "せんせい",
                "ぬぎます",
                "はいります［おふろに～］"
            ],
            "correctIndex": 1,
            "explanation": "「せんせい」 (先生) means \"doctor (used when addressing a medical doctor)\"."
        }
    ],
    "Lesson 18": [
        {
            "question": "be able to, can",
            "options": [
                "うま",
                "できます",
                "ひきます",
                "どうぶつ"
            ],
            "correctIndex": 1,
            "explanation": "「できます」 means \"be able to, can\"."
        },
        {
            "question": "wash",
            "options": [
                "ピアノ",
                "あつめます",
                "おいのり",
                "あらいます"
            ],
            "correctIndex": 3,
            "explanation": "「あらいます」 (洗います) means \"wash\"."
        },
        {
            "question": "play (stringed instrument, piano, etc.)",
            "options": [
                "うたいます",
                "ひきます",
                "なかなか",
                "にっき"
            ],
            "correctIndex": 1,
            "explanation": "「ひきます」 (弾きます) means \"play (stringed instrument, piano, etc.)\"."
        },
        {
            "question": "sing",
            "options": [
                "ピアノ",
                "ふるさと",
                "うま",
                "うたいます"
            ],
            "correctIndex": 3,
            "explanation": "「うたいます」 (歌います) means \"sing\"."
        },
        {
            "question": "collect, gather",
            "options": [
                "うんてんします",
                "ひきます",
                "けんがくします",
                "あつめます"
            ],
            "correctIndex": 3,
            "explanation": "「あつめます」 (集めます) means \"collect, gather\"."
        },
        {
            "question": "throw away",
            "options": [
                "あきはばら",
                "すてます",
                "にっき",
                "うま"
            ],
            "correctIndex": 1,
            "explanation": "「すてます」 (捨てます) means \"throw away\"."
        },
        {
            "question": "exchange, change",
            "options": [
                "かえます",
                "ほんとうですか。",
                "それは おもしろいですね。",
                "とくに"
            ],
            "correctIndex": 0,
            "explanation": "「かえます」 (換えます) means \"exchange, change\"."
        },
        {
            "question": "drive",
            "options": [
                "うんてんします",
                "けんがくします",
                "ふるさと",
                "あらいます"
            ],
            "correctIndex": 0,
            "explanation": "「うんてんします」 (運転します) means \"drive\"."
        },
        {
            "question": "reserve, book",
            "options": [
                "こくさい～",
                "とくに",
                "おいのり",
                "よやくします"
            ],
            "correctIndex": 3,
            "explanation": "「よやくします」 (予約します) means \"reserve, book\"."
        },
        {
            "question": "piano",
            "options": [
                "うま",
                "ピアノ",
                "げんきん",
                "－メートル"
            ],
            "correctIndex": 1,
            "explanation": "「ピアノ」 means \"piano\"."
        },
        {
            "question": "－ meter",
            "options": [
                "－メートル",
                "うんてんします",
                "にっき",
                "かえます"
            ],
            "correctIndex": 0,
            "explanation": "「－メートル」 means \"－ meter\"."
        },
        {
            "question": "cash",
            "options": [
                "できます",
                "ふるさと",
                "どうぶつ",
                "げんきん"
            ],
            "correctIndex": 3,
            "explanation": "「げんきん」 (現金) means \"cash\"."
        },
        {
            "question": "hobby",
            "options": [
                "ぼくじょう",
                "こくさい～",
                "しゅみ",
                "うんてんします"
            ],
            "correctIndex": 2,
            "explanation": "「しゅみ」 (趣味) means \"hobby\"."
        },
        {
            "question": "diary",
            "options": [
                "ビートルズ",
                "ぶちょう",
                "にっき",
                "なかなか"
            ],
            "correctIndex": 2,
            "explanation": "「にっき」 (日記) means \"diary\"."
        },
        {
            "question": "prayer (～を します : pray)",
            "options": [
                "うんてんします",
                "おいのり",
                "しゅみ",
                "ぼくじょう"
            ],
            "correctIndex": 1,
            "explanation": "「おいのり」 (お祈り) means \"prayer (～を します : pray)\"."
        },
        {
            "question": "section head",
            "options": [
                "かちょう",
                "あらいます",
                "とくに",
                "ふるさと"
            ],
            "correctIndex": 0,
            "explanation": "「かちょう」 (課長) means \"section head\"."
        },
        {
            "question": "department head",
            "options": [
                "あきはばら",
                "あらいます",
                "かえます",
                "ぶちょう"
            ],
            "correctIndex": 3,
            "explanation": "「ぶちょう」 (部長) means \"department head\"."
        },
        {
            "question": "company president",
            "options": [
                "なかなか",
                "しゃちょう",
                "とくに",
                "インターネット"
            ],
            "correctIndex": 1,
            "explanation": "「しゃちょう」 (社長) means \"company president\"."
        },
        {
            "question": "animal",
            "options": [
                "にっき",
                "かちょう",
                "かえます",
                "どうぶつ"
            ],
            "correctIndex": 3,
            "explanation": "「どうぶつ」 (動物) means \"animal\"."
        },
        {
            "question": "horse",
            "options": [
                "どうぶつ",
                "げんきん",
                "できます",
                "うま"
            ],
            "correctIndex": 3,
            "explanation": "「うま」 (馬) means \"horse\"."
        },
        {
            "question": "Internet",
            "options": [
                "よやくします",
                "－メートル",
                "しゃちょう",
                "インターネット"
            ],
            "correctIndex": 3,
            "explanation": "「インターネット」 means \"Internet\"."
        },
        {
            "question": "especially",
            "options": [
                "とくに",
                "すてます",
                "ぶちょう",
                "ビートルズ"
            ],
            "correctIndex": 0,
            "explanation": "「とくに」 (特に) means \"especially\"."
        },
        {
            "question": "What! Really! (used when expressing surprise)",
            "options": [
                "へえ",
                "なかなか",
                "うんてんします",
                "ほんとうですか。"
            ],
            "correctIndex": 0,
            "explanation": "「へえ」 means \"What! Really! (used when expressing surprise)\"."
        },
        {
            "question": "That's interesting, isn't it?",
            "options": [
                "こくさい～",
                "それは おもしろいですね。",
                "あきはばら",
                "とくに"
            ],
            "correctIndex": 1,
            "explanation": "「それは おもしろいですね。」 means \"That's interesting, isn't it?\"."
        },
        {
            "question": "not easily (used with negatives)",
            "options": [
                "かえます",
                "すてます",
                "なかなか",
                "とくに"
            ],
            "correctIndex": 2,
            "explanation": "「なかなか」 means \"not easily (used with negatives)\"."
        },
        {
            "question": "Really?",
            "options": [
                "ほんとうですか。",
                "なかなか",
                "ぜひ",
                "それは おもしろいですね。"
            ],
            "correctIndex": 0,
            "explanation": "「ほんとうですか。」 means \"Really?\"."
        },
        {
            "question": "by all means, really",
            "options": [
                "ぜひ",
                "できます",
                "なかなか",
                "こくさい～"
            ],
            "correctIndex": 0,
            "explanation": "「ぜひ」 means \"by all means, really\"."
        },
        {
            "question": "Furusato (a song title meaning 'Home Town')",
            "options": [
                "ふるさと",
                "けんがくします",
                "できます",
                "－メートル"
            ],
            "correctIndex": 0,
            "explanation": "「ふるさと」 (故郷) means \"Furusato (a song title meaning 'Home Town')\"."
        },
        {
            "question": "the Beatles (a famous British pop group)",
            "options": [
                "－メートル",
                "ビートルズ",
                "うま",
                "こくさい～"
            ],
            "correctIndex": 1,
            "explanation": "「ビートルズ」 means \"the Beatles (a famous British pop group)\"."
        },
        {
            "question": "a district in Tokyo",
            "options": [
                "かちょう",
                "どうぶつ",
                "しゅみ",
                "あきはばら"
            ],
            "correctIndex": 3,
            "explanation": "「あきはばら」 (秋葉原) means \"a district in Tokyo\"."
        },
        {
            "question": "visit some place for study",
            "options": [
                "ぼくじょう",
                "けんがくします",
                "しゃちょう",
                "よやくします"
            ],
            "correctIndex": 1,
            "explanation": "「けんがくします」 (見学します) means \"visit some place for study\"."
        },
        {
            "question": "international ～",
            "options": [
                "ぼくじょう",
                "それは おもしろいですね。",
                "ひきます",
                "こくさい～"
            ],
            "correctIndex": 3,
            "explanation": "「こくさい～」 (国際～) means \"international ～\"."
        },
        {
            "question": "ranch, stock farm",
            "options": [
                "かえます",
                "ぼくじょう",
                "うんてんします",
                "へえ"
            ],
            "correctIndex": 1,
            "explanation": "「ぼくじょう」 (牧場) means \"ranch, stock farm\"."
        }
    ],
    "Lesson 19": [
        {
            "question": "climb, go up",
            "options": [
                "むり［な］",
                "のぼります",
                "なります",
                "ひ"
            ],
            "correctIndex": 1,
            "explanation": "「のぼります」 (登ります、上ります) means \"climb, go up\"."
        },
        {
            "question": "stay [at a hotel]",
            "options": [
                "なんかいも",
                "からだに いい",
                "とまります［ホテルに～］",
                "むり［な］"
            ],
            "correctIndex": 2,
            "explanation": "「とまります［ホテルに～］」 (泊まります［ホテルに～］) means \"stay [at a hotel]\"."
        },
        {
            "question": "clean (a room)",
            "options": [
                "そうじします",
                "ちょうしが わるい",
                "おかげさまで",
                "でも"
            ],
            "correctIndex": 0,
            "explanation": "「そうじします」 (掃除します) means \"clean (a room)\"."
        },
        {
            "question": "wash (clothes)",
            "options": [
                "よわい",
                "せんたくします",
                "いちど",
                "むり［な］"
            ],
            "correctIndex": 1,
            "explanation": "「せんたくします」 (洗濯します) means \"wash (clothes)\"."
        },
        {
            "question": "become",
            "options": [
                "かんぱい",
                "なんかいも",
                "かつしかほくさい",
                "なります"
            ],
            "correctIndex": 3,
            "explanation": "「なります」 means \"become\"."
        },
        {
            "question": "sleepy",
            "options": [
                "なんかいも",
                "かんぱい",
                "でも",
                "ねむい"
            ],
            "correctIndex": 3,
            "explanation": "「ねむい」 (眠い) means \"sleepy\"."
        },
        {
            "question": "strong",
            "options": [
                "つよい",
                "そうじします",
                "おちゃ",
                "ケーキ"
            ],
            "correctIndex": 0,
            "explanation": "「つよい」 (強い) means \"strong\"."
        },
        {
            "question": "weak",
            "options": [
                "よわい",
                "ケーキ",
                "そうじします",
                "ちょうし"
            ],
            "correctIndex": 0,
            "explanation": "「よわい」 (弱い) means \"weak\"."
        },
        {
            "question": "practice (～［を］します : practise)",
            "options": [
                "のぼります",
                "ちょうしが いい",
                "れんしゅう",
                "ダイエット"
            ],
            "correctIndex": 2,
            "explanation": "「れんしゅう」 (練習) means \"practice (～［を］します : practise)\"."
        },
        {
            "question": "golf (～を します : play golf)",
            "options": [
                "むり［な］",
                "しかし",
                "ちょうしが いい",
                "ゴルフ"
            ],
            "correctIndex": 3,
            "explanation": "「ゴルフ」 means \"golf (～を します : play golf)\"."
        },
        {
            "question": "sumo wrestling (～を します : wrestle)",
            "options": [
                "からだに いい",
                "おちゃ",
                "すもう",
                "よわい"
            ],
            "correctIndex": 2,
            "explanation": "「すもう」 (相撲) means \"sumo wrestling (～を します : wrestle)\"."
        },
        {
            "question": "tea ceremony",
            "options": [
                "おちゃ",
                "でも",
                "むり［な］",
                "よわい"
            ],
            "correctIndex": 0,
            "explanation": "「おちゃ」 (お茶) means \"tea ceremony\"."
        },
        {
            "question": "day, date",
            "options": [
                "いちども",
                "ひ",
                "つよい",
                "だんだん"
            ],
            "correctIndex": 1,
            "explanation": "「ひ」 (日) means \"day, date\"."
        },
        {
            "question": "condition",
            "options": [
                "いちど",
                "もうすぐ",
                "とまります［ホテルに～］",
                "ちょうし"
            ],
            "correctIndex": 3,
            "explanation": "「ちょうし」 (調子) means \"condition\"."
        },
        {
            "question": "once",
            "options": [
                "パチンコ",
                "いちど",
                "れんしゅう",
                "からだに いい"
            ],
            "correctIndex": 1,
            "explanation": "「いちど」 (一度) means \"once\"."
        },
        {
            "question": "not once, never (used with negatives)",
            "options": [
                "いちども",
                "パチンコ",
                "ゴルフ",
                "しかし"
            ],
            "correctIndex": 0,
            "explanation": "「いちども」 (一度も) means \"not once, never (used with negatives)\"."
        },
        {
            "question": "gradually",
            "options": [
                "だんだん",
                "れんしゅう",
                "じつは",
                "ねむい"
            ],
            "correctIndex": 0,
            "explanation": "「だんだん」 means \"gradually\"."
        },
        {
            "question": "soon",
            "options": [
                "そうじします",
                "なんかいも",
                "なります",
                "もうすぐ"
            ],
            "correctIndex": 3,
            "explanation": "「もうすぐ」 means \"soon\"."
        },
        {
            "question": "Thank you. (used when expressing gratitude for help received)",
            "options": [
                "かつしかほくさい",
                "なんかいも",
                "なります",
                "おかげさまで"
            ],
            "correctIndex": 3,
            "explanation": "「おかげさまで」 means \"Thank you. (used when expressing gratitude for help received)\"."
        },
        {
            "question": "but",
            "options": [
                "なんかいも",
                "ひ",
                "なります",
                "でも"
            ],
            "correctIndex": 3,
            "explanation": "「でも」 means \"but\"."
        },
        {
            "question": "Bottoms up./Cheers!",
            "options": [
                "おちゃ",
                "じつは",
                "ちょうしが わるい",
                "かんぱい"
            ],
            "correctIndex": 3,
            "explanation": "「かんぱい」 (乾杯) means \"Bottoms up./Cheers!\"."
        },
        {
            "question": "diet (～を します : go on a diet)",
            "options": [
                "とまります［ホテルに～］",
                "とうきょうスカイツリー",
                "ダイエット",
                "そうじします"
            ],
            "correctIndex": 2,
            "explanation": "「ダイエット」 means \"diet (～を します : go on a diet)\"."
        },
        {
            "question": "excessive, impossible",
            "options": [
                "とうきょうスカイツリー",
                "むり［な］",
                "じつは",
                "からだに いい"
            ],
            "correctIndex": 1,
            "explanation": "「むり［な］」 (無理［な］) means \"excessive, impossible\"."
        },
        {
            "question": "good for one's health",
            "options": [
                "れんしゅう",
                "なんかいも",
                "ケーキ",
                "からだに いい"
            ],
            "correctIndex": 3,
            "explanation": "「からだに いい」 (体に いい) means \"good for one's health\"."
        },
        {
            "question": "Tokyo Sky Tree (broadcasting tower with observation deck in Tokyo)",
            "options": [
                "じつは",
                "むり［な］",
                "とうきょうスカイツリー",
                "とまります［ホテルに～］"
            ],
            "correctIndex": 2,
            "explanation": "「とうきょうスカイツリー」 (東京スカイツリー) means \"Tokyo Sky Tree (broadcasting tower with observation deck in Tokyo)\"."
        },
        {
            "question": "a famous Edo-period woodblock artist and painter (1760-1849)",
            "options": [
                "ちょうしが いい",
                "とまります［ホテルに～］",
                "かつしかほくさい",
                "ゴルフ"
            ],
            "correctIndex": 2,
            "explanation": "「かつしかほくさい」 (葛飾北斎) means \"a famous Edo-period woodblock artist and painter (1760-1849)\"."
        },
        {
            "question": "be in good condition",
            "options": [
                "もうすぐ",
                "じつは",
                "だんだん",
                "ちょうしが いい"
            ],
            "correctIndex": 3,
            "explanation": "「ちょうしが いい」 (調子が いい) means \"be in good condition\"."
        },
        {
            "question": "be in bad condition",
            "options": [
                "なります",
                "いちど",
                "ちょうしが わるい",
                "からだに いい"
            ],
            "correctIndex": 2,
            "explanation": "「ちょうしが わるい」 (調子が 悪い) means \"be in bad condition\"."
        },
        {
            "question": "pinball game (～を します : play pachinko)",
            "options": [
                "パチンコ",
                "とまります［ホテルに～］",
                "かんぱい",
                "からだに いい"
            ],
            "correctIndex": 0,
            "explanation": "「パチンコ」 means \"pinball game (～を します : play pachinko)\"."
        },
        {
            "question": "actually, to tell the truth",
            "options": [
                "じつは",
                "よわい",
                "ちょうしが わるい",
                "そうじします"
            ],
            "correctIndex": 0,
            "explanation": "「じつは」 (実は) means \"actually, to tell the truth\"."
        },
        {
            "question": "many times",
            "options": [
                "なんかいも",
                "ひ",
                "すもう",
                "れんしゅう"
            ],
            "correctIndex": 0,
            "explanation": "「なんかいも」 (何回も) means \"many times\"."
        },
        {
            "question": "but, however",
            "options": [
                "ねむい",
                "しかし",
                "でも",
                "すもう"
            ],
            "correctIndex": 1,
            "explanation": "「しかし」 means \"but, however\"."
        },
        {
            "question": "cake",
            "options": [
                "しかし",
                "ケーキ",
                "じつは",
                "とうきょうスカイツリー"
            ],
            "correctIndex": 1,
            "explanation": "「ケーキ」 means \"cake\"."
        }
    ],
    "Lesson 20": [
        {
            "question": "need, require [a visa]",
            "options": [
                "うん",
                "ビザ",
                "いります［ビザが～］",
                "くにへ かえるの？"
            ],
            "correctIndex": 2,
            "explanation": "「いります［ビザが～］」 (要ります［ビザが～］) means \"need, require [a visa]\"."
        },
        {
            "question": "check, investigate",
            "options": [
                "しらべます",
                "しゅうりします",
                "ことば",
                "ぶっか"
            ],
            "correctIndex": 0,
            "explanation": "「しらべます」 (調べます) means \"check, investigate\"."
        },
        {
            "question": "repair",
            "options": [
                "しゅうりします",
                "ことば",
                "おわり",
                "ぶっか"
            ],
            "correctIndex": 0,
            "explanation": "「しゅうりします」 (修理します) means \"repair\"."
        },
        {
            "question": "I (an informal equivalent of わたし used by men)",
            "options": [
                "ぶっか",
                "ぼく",
                "きもの",
                "こっち"
            ],
            "correctIndex": 1,
            "explanation": "「ぼく」 (僕) means \"I (an informal equivalent of わたし used by men)\"."
        },
        {
            "question": "you (an informal equivalent of あなた used to address people of equal or lower status)",
            "options": [
                "しゅうりします",
                "どっち",
                "きみ",
                "ううん"
            ],
            "correctIndex": 2,
            "explanation": "「きみ」 (君) means \"you (an informal equivalent of あなた used to address people of equal or lower status)\"."
        },
        {
            "question": "Mr. (an informal equivalent of ～さん used to address people of equal or lower status; also often appended to boys' names)",
            "options": [
                "ぶっか",
                "～くん",
                "きもの",
                "ぼく"
            ],
            "correctIndex": 1,
            "explanation": "「～くん」 (～君) means \"Mr. (an informal equivalent of ～さん used to address people of equal or lower status; also often appended to boys' names)\"."
        },
        {
            "question": "yes (an informal equivalent of はい)",
            "options": [
                "よかったら",
                "うん",
                "おなかが いっぱいです",
                "おわり"
            ],
            "correctIndex": 1,
            "explanation": "「うん」 means \"yes (an informal equivalent of はい)\"."
        },
        {
            "question": "no (an informal equivalent of いいえ)",
            "options": [
                "ううん",
                "きみ",
                "ことば",
                "どっち"
            ],
            "correctIndex": 0,
            "explanation": "「ううん」 means \"no (an informal equivalent of いいえ)\"."
        },
        {
            "question": "word, language",
            "options": [
                "ことば",
                "いります［ビザが～］",
                "なおします",
                "いろいろ"
            ],
            "correctIndex": 0,
            "explanation": "「ことば」 means \"word, language\"."
        },
        {
            "question": "kimono (traditional Japanese attire)",
            "options": [
                "きもの",
                "ことば",
                "ぶっか",
                "でんわします"
            ],
            "correctIndex": 0,
            "explanation": "「きもの」 (着物) means \"kimono (traditional Japanese attire)\"."
        },
        {
            "question": "visa",
            "options": [
                "なおします",
                "ビザ",
                "でんわします",
                "おわり"
            ],
            "correctIndex": 1,
            "explanation": "「ビザ」 (ビサ) means \"visa\"."
        },
        {
            "question": "the beginning",
            "options": [
                "ことば",
                "でんわします",
                "くにへ かえるの？",
                "はじめ"
            ],
            "correctIndex": 3,
            "explanation": "「はじめ」 (初め) means \"the beginning\"."
        },
        {
            "question": "the end of ～, The End",
            "options": [
                "きみ",
                "おわり",
                "しゅうりします",
                "～けど"
            ],
            "correctIndex": 1,
            "explanation": "「おわり」 (終わり) means \"the end of ～, The End\"."
        },
        {
            "question": "this way, this place (an informal equivalent of こちら)",
            "options": [
                "あっち",
                "こっち",
                "このあいだ",
                "サラリーマン"
            ],
            "correctIndex": 1,
            "explanation": "「こっち」 means \"this way, this place (an informal equivalent of こちら)\"."
        },
        {
            "question": "that way, that place near the listener (an informal equivalent of そちら)",
            "options": [
                "サラリーマン",
                "ぼく",
                "おわり",
                "そっち"
            ],
            "correctIndex": 3,
            "explanation": "「そっち」 means \"that way, that place near the listener (an informal equivalent of そちら)\"."
        },
        {
            "question": "that way, that place over there (an informal equivalent of あちら)",
            "options": [
                "あっち",
                "くにへ かえるの？",
                "いります［ビザが～］",
                "おなかが いっぱいです"
            ],
            "correctIndex": 0,
            "explanation": "「あっち」 means \"that way, that place over there (an informal equivalent of あちら)\"."
        },
        {
            "question": "which one (between two things), which way, where (an informal equivalent of dochira)",
            "options": [
                "どっち",
                "しらべます",
                "こっち",
                "どう するの？"
            ],
            "correctIndex": 0,
            "explanation": "「どっち」 means \"which one (between two things), which way, where (an informal equivalent of dochira)\"."
        },
        {
            "question": "all together",
            "options": [
                "こっち",
                "いろいろ",
                "みんなで",
                "そっち"
            ],
            "correctIndex": 2,
            "explanation": "「みんなで」 means \"all together\"."
        },
        {
            "question": "～, but (an informal equivalent of が)",
            "options": [
                "おなかが いっぱいです",
                "どう するの？",
                "～けど",
                "こっち"
            ],
            "correctIndex": 2,
            "explanation": "「～けど」 means \"～, but (an informal equivalent of が)\"."
        },
        {
            "question": "(I'm) full",
            "options": [
                "ううん",
                "こっち",
                "～くん",
                "おなかが いっぱいです"
            ],
            "correctIndex": 3,
            "explanation": "「おなかが いっぱいです」 means \"(I'm) full\"."
        },
        {
            "question": "if you like",
            "options": [
                "でんわします",
                "よかったら",
                "きみ",
                "ことば"
            ],
            "correctIndex": 1,
            "explanation": "「よかったら」 means \"if you like\"."
        },
        {
            "question": "various",
            "options": [
                "うん",
                "いろいろ",
                "おわり",
                "くにへ かえるの？"
            ],
            "correctIndex": 1,
            "explanation": "「いろいろ」 means \"various\"."
        },
        {
            "question": "repair, correct",
            "options": [
                "ぼく",
                "ぶっか",
                "なおします",
                "～くん"
            ],
            "correctIndex": 2,
            "explanation": "「なおします」 (直します) means \"repair, correct\"."
        },
        {
            "question": "phone",
            "options": [
                "でんわします",
                "いろいろ",
                "このあいだ",
                "サラリーマン"
            ],
            "correctIndex": 0,
            "explanation": "「でんわします」 (電話します) means \"phone\"."
        },
        {
            "question": "salaried worker, office worker",
            "options": [
                "サラリーマン",
                "～くん",
                "どっち",
                "ことば"
            ],
            "correctIndex": 0,
            "explanation": "「サラリーマン」 means \"salaried worker, office worker\"."
        },
        {
            "question": "commodity prices",
            "options": [
                "みんなで",
                "ぶっか",
                "～くん",
                "くにへ かえるの？"
            ],
            "correctIndex": 1,
            "explanation": "「ぶっか」 (物価) means \"commodity prices\"."
        },
        {
            "question": "the other day",
            "options": [
                "サラリーマン",
                "でんわします",
                "このあいだ",
                "ことば"
            ],
            "correctIndex": 2,
            "explanation": "「このあいだ」 (この間) means \"the other day\"."
        },
        {
            "question": "Are you going back to your country?",
            "options": [
                "しらべます",
                "ぶっか",
                "どう するの？",
                "くにへ かえるの？"
            ],
            "correctIndex": 3,
            "explanation": "「くにへ かえるの？」 (国へ 帰るの？) means \"Are you going back to your country?\"."
        },
        {
            "question": "What will you do?",
            "options": [
                "いります［ビザが～］",
                "うん",
                "ビザ",
                "どう するの？"
            ],
            "correctIndex": 3,
            "explanation": "「どう するの？」 means \"What will you do?\"."
        },
        {
            "question": "What shall I do?",
            "options": [
                "しゅうりします",
                "どう しようかな。",
                "どっち",
                "いろいろ"
            ],
            "correctIndex": 1,
            "explanation": "「どう しようかな。」 means \"What shall I do?\"."
        }
    ],
    "Lesson 21": [
        {
            "question": "think",
            "options": [
                "もう かえらないと……。",
                "おもいます",
                "ほんとう",
                "しあい"
            ],
            "correctIndex": 1,
            "explanation": "「おもいます」 (思います) means \"think\"."
        },
        {
            "question": "say",
            "options": [
                "ちきゅう",
                "いいます",
                "いけん",
                "ゆめ"
            ],
            "correctIndex": 1,
            "explanation": "「いいます」 (言います) means \"say\"."
        },
        {
            "question": "win",
            "options": [
                "かちます",
                "カンガルー",
                "ゆめ",
                "やめます［かいしゃを～］"
            ],
            "correctIndex": 0,
            "explanation": "「かちます」 (勝ちます) means \"win\"."
        },
        {
            "question": "lose, be beaten",
            "options": [
                "まけます",
                "おもいます",
                "しあい",
                "みないと……。"
            ],
            "correctIndex": 0,
            "explanation": "「まけます」 (負けます) means \"lose, be beaten\"."
        },
        {
            "question": "[a festival] be held, take place",
            "options": [
                "スピーチ",
                "アルバイト",
                "あります［おまつりが～］",
                "ゆめ"
            ],
            "correctIndex": 2,
            "explanation": "「あります［おまつりが～］」 (あります［お祭りが～］) means \"[a festival] be held, take place\"."
        },
        {
            "question": "be useful",
            "options": [
                "やくに たちます",
                "まけます",
                "フランクリン",
                "もう かえらないと……。"
            ],
            "correctIndex": 0,
            "explanation": "「やくに たちます」 (役に 立ちます) means \"be useful\"."
        },
        {
            "question": "move, work",
            "options": [
                "うごきます",
                "フランクリン",
                "かぐやひめ",
                "おもいます"
            ],
            "correctIndex": 0,
            "explanation": "「うごきます」 (動きます) means \"move, work\"."
        },
        {
            "question": "quit or retire from [a company], stop, give up",
            "options": [
                "ちきゅう",
                "やめます［かいしゃを～］",
                "～でも のみませんか。",
                "ほんとう"
            ],
            "correctIndex": 1,
            "explanation": "「やめます［かいしゃを～］」 (やめます［会社を～］) means \"quit or retire from [a company], stop, give up\"."
        },
        {
            "question": "pay attention, take care",
            "options": [
                "きを つけます",
                "ニュース",
                "ヨーネン",
                "むだ"
            ],
            "correctIndex": 0,
            "explanation": "「きを つけます」 (気を つけます) means \"pay attention, take care\"."
        },
        {
            "question": "study abroad",
            "options": [
                "じどうしゃ",
                "りゅうがくします",
                "きを つけます",
                "すごい"
            ],
            "correctIndex": 1,
            "explanation": "「りゅうがくします」 (留学します) means \"study abroad\"."
        },
        {
            "question": "wasteful",
            "options": [
                "かちます",
                "～でも のみませんか。",
                "むだ［な］",
                "ふべん［な］"
            ],
            "correctIndex": 2,
            "explanation": "「むだ［な］」 means \"wasteful\"."
        },
        {
            "question": "inconvenient",
            "options": [
                "むだ",
                "ふべん［な］",
                "ヨーネン",
                "ひさしぶりですね。"
            ],
            "correctIndex": 1,
            "explanation": "「ふべん［な］」 (不便［な］) means \"inconvenient\"."
        },
        {
            "question": "awful, great (expresses astonishment or admiration)",
            "options": [
                "すごい",
                "じどうしゃ",
                "～に ついて",
                "はなし"
            ],
            "correctIndex": 0,
            "explanation": "「すごい」 means \"awful, great (expresses astonishment or admiration)\"."
        },
        {
            "question": "true",
            "options": [
                "しゅしょう",
                "ほんとう",
                "むだ",
                "さいきん"
            ],
            "correctIndex": 1,
            "explanation": "「ほんとう」 means \"true\"."
        },
        {
            "question": "lie",
            "options": [
                "しゅしょう",
                "うそ",
                "せいじ",
                "ちきゅう"
            ],
            "correctIndex": 1,
            "explanation": "「うそ」 means \"lie\"."
        },
        {
            "question": "car, automobile",
            "options": [
                "もちろん",
                "じどうしゃ",
                "うそ",
                "むだ［な］"
            ],
            "correctIndex": 1,
            "explanation": "「じどうしゃ」 (自動車) means \"car, automobile\"."
        },
        {
            "question": "transport, traffic",
            "options": [
                "そんなに",
                "こうつう",
                "アニメ",
                "ニュース"
            ],
            "correctIndex": 1,
            "explanation": "「こうつう」 (交通) means \"transport, traffic\"."
        },
        {
            "question": "[commodity] prices",
            "options": [
                "カンガルー",
                "やくに たちます",
                "たぶん",
                "ぶっか"
            ],
            "correctIndex": 3,
            "explanation": "「ぶっか」 (物価) means \"[commodity] prices\"."
        },
        {
            "question": "[commodity] prices",
            "options": [
                "いけん",
                "てんさい",
                "もちろん",
                "ほうそう"
            ],
            "correctIndex": 3,
            "explanation": "「ほうそう」 (放送) means \"[commodity] prices\"."
        },
        {
            "question": "news",
            "options": [
                "デザイン",
                "ひさしぶりですね。",
                "せいじ",
                "ニュース"
            ],
            "correctIndex": 3,
            "explanation": "「ニュース」 means \"news\"."
        },
        {
            "question": "anime (Japanese animated film)",
            "options": [
                "こうつう",
                "アニメ",
                "ガリレオ",
                "アインシュタイン"
            ],
            "correctIndex": 1,
            "explanation": "「アニメ」 means \"anime (Japanese animated film)\"."
        },
        {
            "question": "comic book",
            "options": [
                "すごい",
                "マンガ",
                "だいとうりょう",
                "もう かえらないと……。"
            ],
            "correctIndex": 1,
            "explanation": "「マンガ」 means \"comic book\"."
        },
        {
            "question": "design, artwork",
            "options": [
                "キャプテン・クック",
                "ぶっか",
                "ユーモア",
                "デザイン"
            ],
            "correctIndex": 3,
            "explanation": "「デザイン」 means \"design, artwork\"."
        },
        {
            "question": "dream",
            "options": [
                "ユーモア",
                "うごきます",
                "ゆめ",
                "さいきん"
            ],
            "correctIndex": 2,
            "explanation": "「ゆめ」 (夢) means \"dream\"."
        },
        {
            "question": "genius",
            "options": [
                "ほんとうに",
                "てんさい",
                "かちます",
                "いいます"
            ],
            "correctIndex": 1,
            "explanation": "「てんさい」 (天才) means \"genius\"."
        },
        {
            "question": "game, match (～を します : play a game/match)",
            "options": [
                "しあい",
                "たります",
                "むだ",
                "ひさしぶりですね。"
            ],
            "correctIndex": 0,
            "explanation": "「しあい」 (試合) means \"game, match (～を します : play a game/match)\"."
        },
        {
            "question": "opinion",
            "options": [
                "いけん",
                "アルバイト",
                "うそ",
                "はなし"
            ],
            "correctIndex": 0,
            "explanation": "「いけん」 (意見) means \"opinion\"."
        },
        {
            "question": "talk, speech, what one says, story (～を します : talk, tell a story)",
            "options": [
                "やくに たちます",
                "むだ",
                "じどうしゃ",
                "はなし"
            ],
            "correctIndex": 3,
            "explanation": "「はなし」 (話) means \"talk, speech, what one says, story (～を します : talk, tell a story)\"."
        },
        {
            "question": "earth",
            "options": [
                "きっと",
                "いけん",
                "ほんとう",
                "ちきゅう"
            ],
            "correctIndex": 3,
            "explanation": "「ちきゅう」 (地球) means \"earth\"."
        },
        {
            "question": "moon",
            "options": [
                "つき",
                "おなじ",
                "てんじんまつり",
                "せいじ"
            ],
            "correctIndex": 0,
            "explanation": "「つき」 (月) means \"moon\"."
        },
        {
            "question": "recently, these days",
            "options": [
                "スピーチ",
                "カンガルー",
                "しかたが ありません。",
                "さいきん"
            ],
            "correctIndex": 3,
            "explanation": "「さいきん」 (最近) means \"recently, these days\"."
        },
        {
            "question": "probably, perhaps, maybe",
            "options": [
                "おもいます",
                "むだ",
                "ひさしぶりですね。",
                "たぶん"
            ],
            "correctIndex": 3,
            "explanation": "「たぶん」 means \"probably, perhaps, maybe\"."
        },
        {
            "question": "surely, definitely",
            "options": [
                "きっと",
                "うそ",
                "キャプテン・クック",
                "ふべん［な］"
            ],
            "correctIndex": 0,
            "explanation": "「きっと」 means \"surely, definitely\"."
        },
        {
            "question": "really",
            "options": [
                "ガガーリン",
                "デザイン",
                "ほんとうに",
                "きっと"
            ],
            "correctIndex": 2,
            "explanation": "「ほんとうに」 means \"really\"."
        },
        {
            "question": "not so (used with negatives)",
            "options": [
                "ほんとうに",
                "かぐやひめ",
                "そんなに",
                "てんさい"
            ],
            "correctIndex": 2,
            "explanation": "「そんなに」 means \"not so (used with negatives)\"."
        },
        {
            "question": "about ～, concerning ～",
            "options": [
                "さいきん",
                "むだ",
                "ニュース",
                "～に ついて"
            ],
            "correctIndex": 3,
            "explanation": "「～に ついて」 means \"about ～, concerning ～\"."
        },
        {
            "question": "It's been a long time [since we last met].",
            "options": [
                "ほうそう",
                "ひさしぶりですね。",
                "ほんとう",
                "せいじ"
            ],
            "correctIndex": 1,
            "explanation": "「ひさしぶりですね。」 (久しぶりですね。) means \"It's been a long time [since we last met].\"."
        },
        {
            "question": "How about drinking ～ or something?",
            "options": [
                "もう かえらないと……。",
                "こうつう",
                "カンガルー",
                "～でも のみませんか。"
            ],
            "correctIndex": 3,
            "explanation": "「～でも のみませんか。」 (～でも 飲みませんか。) means \"How about drinking ～ or something?\"."
        },
        {
            "question": "of course",
            "options": [
                "りゅうがくします",
                "いいます",
                "おもいます",
                "もちろん"
            ],
            "correctIndex": 3,
            "explanation": "「もちろん」 means \"of course\"."
        },
        {
            "question": "I have to get home now......",
            "options": [
                "かぐやひめ",
                "マンガ",
                "もう かえらないと……。",
                "しゅしょう"
            ],
            "correctIndex": 2,
            "explanation": "「もう かえらないと……。」 (もう 帰らないと……。) means \"I have to get home now......\"."
        },
        {
            "question": "Albert Einstein (1879-1955)",
            "options": [
                "ニュース",
                "みないと……。",
                "アインシュタイン",
                "よしのやま"
            ],
            "correctIndex": 2,
            "explanation": "「アインシュタイン」 means \"Albert Einstein (1879-1955)\"."
        },
        {
            "question": "Yuri Alekseyevich Gagarin (1934-1968)",
            "options": [
                "だいとうりょう",
                "いいます",
                "ガガーリン",
                "アルバイト"
            ],
            "correctIndex": 2,
            "explanation": "「ガガーリン」 means \"Yuri Alekseyevich Gagarin (1934-1968)\"."
        },
        {
            "question": "Galileo Galilei (1564-1642)",
            "options": [
                "ガリレオ",
                "うそ",
                "むだ［な］",
                "アルバイト"
            ],
            "correctIndex": 0,
            "explanation": "「ガリレオ」 means \"Galileo Galilei (1564-1642)\"."
        },
        {
            "question": "Martin Luther King, Jr. (1929-1968)",
            "options": [
                "ユーモア",
                "ほうそう",
                "ほんとうに",
                "キングぼくし"
            ],
            "correctIndex": 3,
            "explanation": "「キングぼくし」 (キング牧師) means \"Martin Luther King, Jr. (1929-1968)\"."
        },
        {
            "question": "Benjamin Franklin (1706-1790)",
            "options": [
                "フランクリン",
                "みないと……。",
                "じどうしゃ",
                "ニュース"
            ],
            "correctIndex": 0,
            "explanation": "「フランクリン」 means \"Benjamin Franklin (1706-1790)\"."
        },
        {
            "question": "Princess Kaguya (heroine of the old Japanese folk tale 'Taketori Monogatari')",
            "options": [
                "キャプテン・クック",
                "かぐやひめ",
                "ぶっか",
                "たります"
            ],
            "correctIndex": 1,
            "explanation": "「かぐやひめ」 (かぐや姫) means \"Princess Kaguya (heroine of the old Japanese folk tale 'Taketori Monogatari')\"."
        },
        {
            "question": "Tenjin Festival (a festival in Osaka)",
            "options": [
                "てんじんまつり",
                "やくに たちます",
                "まけます",
                "むだ［な］"
            ],
            "correctIndex": 0,
            "explanation": "「てんじんまつり」 (天神祭) means \"Tenjin Festival (a festival in Osaka)\"."
        },
        {
            "question": "Mt. Yoshino (a mountain in Nara Prefecture)",
            "options": [
                "デザイン",
                "いけん",
                "キングぼくし",
                "よしのやま"
            ],
            "correctIndex": 3,
            "explanation": "「よしのやま」 (吉野山) means \"Mt. Yoshino (a mountain in Nara Prefecture)\"."
        },
        {
            "question": "kangaroo",
            "options": [
                "アニメ",
                "すごい",
                "さいきん",
                "カンガルー"
            ],
            "correctIndex": 3,
            "explanation": "「カンガルー」 means \"kangaroo\"."
        },
        {
            "question": "Captain James Cook (1728-1779)",
            "options": [
                "てんじんまつり",
                "アルバイト",
                "キャプテン・クック",
                "マンガ"
            ],
            "correctIndex": 2,
            "explanation": "「キャプテン・クック」 means \"Captain James Cook (1728-1779)\"."
        },
        {
            "question": "a fictitious company",
            "options": [
                "はなし",
                "ヨーネン",
                "うごきます",
                "ガガーリン"
            ],
            "correctIndex": 1,
            "explanation": "「ヨーネン」 means \"a fictitious company\"."
        },
        {
            "question": "be enough, be sufficient",
            "options": [
                "カンガルー",
                "たります",
                "うそ",
                "おなじ"
            ],
            "correctIndex": 1,
            "explanation": "「たります」 (足ります) means \"be enough, be sufficient\"."
        },
        {
            "question": "the same",
            "options": [
                "おなじ",
                "ゆめ",
                "はなし",
                "スピーチ"
            ],
            "correctIndex": 0,
            "explanation": "「おなじ」 (同じ) means \"the same\"."
        },
        {
            "question": "prime minister",
            "options": [
                "ふべん［な］",
                "しゅしょう",
                "おもいます",
                "だいとうりょう"
            ],
            "correctIndex": 1,
            "explanation": "「しゅしょう」 (首相) means \"prime minister\"."
        },
        {
            "question": "president",
            "options": [
                "もちろん",
                "ラッシュ",
                "だいとうりょう",
                "さいきん"
            ],
            "correctIndex": 2,
            "explanation": "「だいとうりょう」 (大統領) means \"president\"."
        },
        {
            "question": "politics",
            "options": [
                "せいじ",
                "しかたが ありません。",
                "デザイン",
                "～でも のみませんか。"
            ],
            "correctIndex": 0,
            "explanation": "「せいじ」 (政治) means \"politics\"."
        },
        {
            "question": "speech (～を します : talk, tell a story)",
            "options": [
                "しゅしょう",
                "アニメ",
                "スピーチ",
                "ちきゅう"
            ],
            "correctIndex": 2,
            "explanation": "「スピーチ」 means \"speech (～を します : talk, tell a story)\"."
        },
        {
            "question": "side job (～を します : work part time)",
            "options": [
                "ユーモア",
                "ゆめ",
                "ラッシュ",
                "アルバイト"
            ],
            "correctIndex": 3,
            "explanation": "「アルバイト」 means \"side job (～を します : work part time)\"."
        },
        {
            "question": "humor",
            "options": [
                "ユーモア",
                "うそ",
                "そんなに",
                "ふべん［な］"
            ],
            "correctIndex": 0,
            "explanation": "「ユーモア」 means \"humor\"."
        },
        {
            "question": "waste",
            "options": [
                "フランクリン",
                "だいとうりょう",
                "むだ",
                "カンガルー"
            ],
            "correctIndex": 2,
            "explanation": "「むだ」 means \"waste\"."
        },
        {
            "question": "rush hour",
            "options": [
                "ラッシュ",
                "しゅしょう",
                "ゆめ",
                "たります"
            ],
            "correctIndex": 0,
            "explanation": "「ラッシュ」 means \"rush hour\"."
        },
        {
            "question": "There is no other choice./It can't be helped.",
            "options": [
                "しかたが ありません。",
                "いけん",
                "きを つけます",
                "デザイン"
            ],
            "correctIndex": 0,
            "explanation": "「しかたが ありません。」 means \"There is no other choice./It can't be helped.\"."
        },
        {
            "question": "It's been a long time (since I last saw you)./Long time no see.",
            "options": [
                "しばらくですね。",
                "ガガーリン",
                "ほんとうに",
                "もちろん"
            ],
            "correctIndex": 0,
            "explanation": "「しばらくですね。」 means \"It's been a long time (since I last saw you)./Long time no see.\"."
        },
        {
            "question": "I've got to watch it.",
            "options": [
                "みないと……。",
                "ほんとうに",
                "アニメ",
                "ヨーネン"
            ],
            "correctIndex": 0,
            "explanation": "「みないと……。」 (見ないと……。) means \"I've got to watch it.\"."
        }
    ],
    "Lesson 22": [
        {
            "question": "put on (a shirt, etc.)",
            "options": [
                "ダイニングキチン",
                "スーツ",
                "アパート",
                "きます"
            ],
            "correctIndex": 3,
            "explanation": "「きます」 (着ます) means \"put on (a shirt, etc.)\"."
        },
        {
            "question": "put on (shoes, trousers, etc.)",
            "options": [
                "はきます",
                "セーター",
                "つごう",
                "ぼうし"
            ],
            "correctIndex": 0,
            "explanation": "「はきます」 means \"put on (shoes, trousers, etc.)\"."
        },
        {
            "question": "put on (a hat, etc.)",
            "options": [
                "ユーモア",
                "きます",
                "かぶります",
                "ケーキ"
            ],
            "correctIndex": 2,
            "explanation": "「かぶります」 means \"put on (a hat, etc.)\"."
        },
        {
            "question": "put on [glasses]",
            "options": [
                "わしつ",
                "かけます［めがねを～］",
                "［お］べんとう",
                "わたしたち"
            ],
            "correctIndex": 1,
            "explanation": "「かけます［めがねを～］」 (かけます［眼鏡を～］) means \"put on [glasses]\"."
        },
        {
            "question": "put on [tie]",
            "options": [
                "おしいれ",
                "セーター",
                "します［ネクタイを～］",
                "では"
            ],
            "correctIndex": 2,
            "explanation": "「します［ネクタイを～］」 means \"put on [tie]\"."
        },
        {
            "question": "be born",
            "options": [
                "おめでとう［ございます］。",
                "えーと",
                "ばんりの ちょうじょう",
                "うまれます"
            ],
            "correctIndex": 3,
            "explanation": "「うまれます」 (生まれます) means \"be born\"."
        },
        {
            "question": "we",
            "options": [
                "えーと",
                "わたしたち",
                "セーター",
                "うまれます"
            ],
            "correctIndex": 1,
            "explanation": "「わたしたち」 means \"we\"."
        },
        {
            "question": "coat",
            "options": [
                "パリ",
                "ばんりの ちょうじょう",
                "わしつ",
                "コート"
            ],
            "correctIndex": 3,
            "explanation": "「コート」 means \"coat\"."
        },
        {
            "question": "sweater",
            "options": [
                "めがね",
                "セーター",
                "はきます",
                "します［ネクタイを～］"
            ],
            "correctIndex": 1,
            "explanation": "「セーター」 means \"sweater\"."
        },
        {
            "question": "suit",
            "options": [
                "よかかいはつセンター",
                "みんなの アンケート",
                "スーツ",
                "します［ネクタイを～］"
            ],
            "correctIndex": 2,
            "explanation": "「スーツ」 means \"suit\"."
        },
        {
            "question": "hat, cap",
            "options": [
                "わたしたち",
                "おめでとう［ございます］。",
                "ぼうし",
                "アパート"
            ],
            "correctIndex": 2,
            "explanation": "「ぼうし」 (帽子) means \"hat, cap\"."
        },
        {
            "question": "glasses",
            "options": [
                "おさがしですか。",
                "めがね",
                "コート",
                "やちん"
            ],
            "correctIndex": 1,
            "explanation": "「めがね」 (眼鏡) means \"glasses\"."
        },
        {
            "question": "cake",
            "options": [
                "ケーキ",
                "スーツ",
                "めがね",
                "わしつ"
            ],
            "correctIndex": 0,
            "explanation": "「ケーキ」 means \"cake\"."
        },
        {
            "question": "box lunch",
            "options": [
                "アパート",
                "［お］べんとう",
                "はきます",
                "ぼうし"
            ],
            "correctIndex": 1,
            "explanation": "「［お］べんとう」 (［お］弁当) means \"box lunch\"."
        },
        {
            "question": "robot",
            "options": [
                "こちら",
                "スーツ",
                "ロボット",
                "では"
            ],
            "correctIndex": 2,
            "explanation": "「ロボット」 means \"robot\"."
        },
        {
            "question": "humor",
            "options": [
                "えーと",
                "スーツ",
                "ユーモア",
                "うーん。"
            ],
            "correctIndex": 2,
            "explanation": "「ユーモア」 means \"humor\"."
        },
        {
            "question": "convenience",
            "options": [
                "わしつ",
                "おさがしですか。",
                "セーター",
                "つごう"
            ],
            "correctIndex": 3,
            "explanation": "「つごう」 (都合) means \"convenience\"."
        },
        {
            "question": "often",
            "options": [
                "よく",
                "ダイニングキチン",
                "ぼうし",
                "おさがしですか。"
            ],
            "correctIndex": 0,
            "explanation": "「よく」 means \"often\"."
        },
        {
            "question": "well, let me see",
            "options": [
                "えーと",
                "［お］べんとう",
                "ユーモア",
                "では"
            ],
            "correctIndex": 0,
            "explanation": "「えーと」 means \"well, let me see\"."
        },
        {
            "question": "Congratulations. (used on birthdays, at weddings, New Year's Day, etc.)",
            "options": [
                "かけます［めがねを～］",
                "おめでとう［ございます］。",
                "つごう",
                "おさがしですか。"
            ],
            "correctIndex": 1,
            "explanation": "「おめでとう［ございます］。」 means \"Congratulations. (used on birthdays, at weddings, New Year's Day, etc.)\"."
        },
        {
            "question": "Are you looking for ～?",
            "options": [
                "アパート",
                "おさがしですか。",
                "スーツ",
                "つごう"
            ],
            "correctIndex": 1,
            "explanation": "「おさがしですか。」 (お探しですか。) means \"Are you looking for ～?\"."
        },
        {
            "question": "Well then,",
            "options": [
                "スーツ",
                "では",
                "レジャーはくしょ",
                "わしつ"
            ],
            "correctIndex": 1,
            "explanation": "「では」 means \"Well then,\"."
        },
        {
            "question": "this (polite equivalent of これ)",
            "options": [
                "わしつ",
                "こちら",
                "セーター",
                "おさがしですか。"
            ],
            "correctIndex": 1,
            "explanation": "「こちら」 means \"this (polite equivalent of これ)\"."
        },
        {
            "question": "rent",
            "options": [
                "やちん",
                "はきます",
                "コート",
                "えーと"
            ],
            "correctIndex": 0,
            "explanation": "「やちん」 (家賃) means \"rent\"."
        },
        {
            "question": "kitchen with a dining area",
            "options": [
                "ロボット",
                "よく",
                "コート",
                "ダイニングキチン"
            ],
            "correctIndex": 3,
            "explanation": "「ダイニングキチン」 means \"kitchen with a dining area\"."
        },
        {
            "question": "Japanese-style room",
            "options": [
                "わしつ",
                "レジャーはくしょ",
                "おさがしですか。",
                "えーと"
            ],
            "correctIndex": 0,
            "explanation": "「わしつ」 (和室) means \"Japanese-style room\"."
        },
        {
            "question": "Japanese-style closet",
            "options": [
                "おしいれ",
                "スーツ",
                "ふとん",
                "よかかいはつセンター"
            ],
            "correctIndex": 0,
            "explanation": "「おしいれ」 (押し入れ) means \"Japanese-style closet\"."
        },
        {
            "question": "Japanese-style mattress and quilt",
            "options": [
                "ふとん",
                "ユーモア",
                "［お］べんとう",
                "ケーキ"
            ],
            "correctIndex": 0,
            "explanation": "「ふとん」 (布団) means \"Japanese-style mattress and quilt\"."
        },
        {
            "question": "Paris",
            "options": [
                "アパート",
                "こちら",
                "では",
                "パリ"
            ],
            "correctIndex": 3,
            "explanation": "「パリ」 means \"Paris\"."
        },
        {
            "question": "the Great Wall of China",
            "options": [
                "ばんりの ちょうじょう",
                "やちん",
                "えーと",
                "します［ネクタイを～］"
            ],
            "correctIndex": 0,
            "explanation": "「ばんりの ちょうじょう」 (万里の 長城) means \"the Great Wall of China\"."
        },
        {
            "question": "title of a fictitious questionnaire",
            "options": [
                "アパート",
                "おしいれ",
                "みんなの アンケート",
                "わしつ"
            ],
            "correctIndex": 2,
            "explanation": "「みんなの アンケート」 means \"title of a fictitious questionnaire\"."
        },
        {
            "question": "Let me see.",
            "options": [
                "うーん。",
                "つごう",
                "えーと",
                "ぼうし"
            ],
            "correctIndex": 0,
            "explanation": "「うーん。」 means \"Let me see.\"."
        },
        {
            "question": "apartment",
            "options": [
                "パリ",
                "アパート",
                "わしつ",
                "つごう"
            ],
            "correctIndex": 1,
            "explanation": "「アパート」 means \"apartment\"."
        },
        {
            "question": "Center for Developing Leisure Activities",
            "options": [
                "ロボット",
                "はきます",
                "よかかいはつセンター",
                "ユーモア"
            ],
            "correctIndex": 2,
            "explanation": "「よかかいはつセンター」 (余暇開発センター) means \"Center for Developing Leisure Activities\"."
        },
        {
            "question": "white paper on leisure",
            "options": [
                "わたしたち",
                "レジャーはくしょ",
                "おさがしですか。",
                "きます"
            ],
            "correctIndex": 1,
            "explanation": "「レジャーはくしょ」 (レジャー白書) means \"white paper on leisure\"."
        }
    ],
    "Lesson 23": [
        {
            "question": "ask [the teacher]",
            "options": [
                "まわします",
                "なんかいも",
                "ききます［せんせいに～］",
                "ほうりゅうじ"
            ],
            "correctIndex": 2,
            "explanation": "「ききます［せんせいに～］」 (聞きます［先生に～］) means \"ask [the teacher]\"."
        },
        {
            "question": "turn",
            "options": [
                "まわします",
                "がいこくじんとうろくしょう",
                "サイズ",
                "わたります［はしを～］"
            ],
            "correctIndex": 0,
            "explanation": "「まわします」 (回します) means \"turn\"."
        },
        {
            "question": "pull",
            "options": [
                "ごちそうさま［でした］。",
                "ひきます",
                "わたります［はしを～］",
                "うごきます［とけいが～］"
            ],
            "correctIndex": 1,
            "explanation": "「ひきます」 (引きます) means \"pull\"."
        },
        {
            "question": "change",
            "options": [
                "［お］しょうがつ",
                "こしょう",
                "かえます",
                "ほんだえき"
            ],
            "correctIndex": 2,
            "explanation": "「かえます」 (変えます) means \"change\"."
        },
        {
            "question": "touch [a door]",
            "options": [
                "こうさてん",
                "かど",
                "さわります［ドアに～］",
                "まがります［みぎへ～］"
            ],
            "correctIndex": 2,
            "explanation": "「さわります［ドアに～］」 (触ります［ドアに～］) means \"touch [a door]\"."
        },
        {
            "question": "[change] come out",
            "options": [
                "－め",
                "きかい",
                "でます［おつりが～］",
                "しんごう"
            ],
            "correctIndex": 2,
            "explanation": "「でます［おつりが～］」 (出ます［お釣りが～］) means \"[change] come out\"."
        },
        {
            "question": "walk",
            "options": [
                "みち",
                "［お］ゆ",
                "あるきます",
                "うごきます［とけいが～］"
            ],
            "correctIndex": 2,
            "explanation": "「あるきます」 (歩きます) means \"walk\"."
        },
        {
            "question": "cross [a bridge]",
            "options": [
                "しんごう",
                "わたります［はしを～］",
                "しょうとくたいし",
                "ちゅうしゃじょう"
            ],
            "correctIndex": 1,
            "explanation": "「わたります［はしを～］」 (渡ります［橋を～］) means \"cross [a bridge]\"."
        },
        {
            "question": "turn [to the right]",
            "options": [
                "まわします",
                "げんきちゃ",
                "まがります［みぎへ～］",
                "きかい"
            ],
            "correctIndex": 2,
            "explanation": "「まがります［みぎへ～］」 (曲がります［右へ～］) means \"turn [to the right]\"."
        },
        {
            "question": "lonely",
            "options": [
                "きかい",
                "［お］しょうがつ",
                "でます［おつりが～］",
                "さびしい"
            ],
            "correctIndex": 3,
            "explanation": "「さびしい」 (寂しい) means \"lonely\"."
        },
        {
            "question": "hot water",
            "options": [
                "おと",
                "たてもの",
                "［お］ゆ",
                "うごきます［とけいが～］"
            ],
            "correctIndex": 2,
            "explanation": "「［お］ゆ」 (［お］湯) means \"hot water\"."
        },
        {
            "question": "sound",
            "options": [
                "ちゅうしゃじょう",
                "おと",
                "がいこくじんとうろくしょう",
                "みち"
            ],
            "correctIndex": 1,
            "explanation": "「おと」 (音) means \"sound\"."
        },
        {
            "question": "size",
            "options": [
                "サイズ",
                "げんきちゃ",
                "ごちそうさま［でした］。",
                "さわります［ドアに～］"
            ],
            "correctIndex": 0,
            "explanation": "「サイズ」 means \"size\"."
        },
        {
            "question": "breakdown (～します : break down)",
            "options": [
                "ちゅうしゃじょう",
                "こしょう",
                "がいこくじんとうろくしょう",
                "さびしい"
            ],
            "correctIndex": 1,
            "explanation": "「こしょう」 (故障) means \"breakdown (～します : break down)\"."
        },
        {
            "question": "road, way",
            "options": [
                "としょかんまえ",
                "でんきや",
                "みち",
                "つまみ"
            ],
            "correctIndex": 2,
            "explanation": "「みち」 (道) means \"road, way\"."
        },
        {
            "question": "crossroads",
            "options": [
                "がいこくじんとうろくしょう",
                "かえます",
                "こうさてん",
                "きを つけます［くるまに～］"
            ],
            "correctIndex": 2,
            "explanation": "「こうさてん」 (交差点) means \"crossroads\"."
        },
        {
            "question": "traffic light",
            "options": [
                "きかい",
                "がいこくじんとうろくしょう",
                "しんごう",
                "げんきちゃ"
            ],
            "correctIndex": 2,
            "explanation": "「しんごう」 (信号) means \"traffic light\"."
        },
        {
            "question": "corner",
            "options": [
                "でます［おつりが～］",
                "かど",
                "こしょう",
                "ほんだえき"
            ],
            "correctIndex": 1,
            "explanation": "「かど」 (角) means \"corner\"."
        },
        {
            "question": "bridge",
            "options": [
                "はし",
                "かえます",
                "しんごう",
                "ごちそうさま［でした］。"
            ],
            "correctIndex": 0,
            "explanation": "「はし」 (橋) means \"bridge\"."
        },
        {
            "question": "car park, parking lot",
            "options": [
                "まがります［みぎへ～］",
                "としょかんまえ",
                "ちゅうしゃじょう",
                "げんきちゃ"
            ],
            "correctIndex": 2,
            "explanation": "「ちゅうしゃじょう」 (駐車場) means \"car park, parking lot\"."
        },
        {
            "question": "building",
            "options": [
                "みち",
                "たてもの",
                "かど",
                "がいこくじんとうろくしょう"
            ],
            "correctIndex": 1,
            "explanation": "「たてもの」 (建物) means \"building\"."
        },
        {
            "question": "many times",
            "options": [
                "さわります［ドアに～］",
                "なんかいも",
                "ごちそうさま［でした］。",
                "たてもの"
            ],
            "correctIndex": 1,
            "explanation": "「なんかいも」 (何回も) means \"many times\"."
        },
        {
            "question": "the -th (indicating order)",
            "options": [
                "－め",
                "たてもの",
                "はし",
                "がいこくじんとうろくしょう"
            ],
            "correctIndex": 0,
            "explanation": "「－め」 (－目) means \"the -th (indicating order)\"."
        },
        {
            "question": "Prince Shotoku (574-622)",
            "options": [
                "かえます",
                "しょうとくたいし",
                "［お］ゆ",
                "みち"
            ],
            "correctIndex": 1,
            "explanation": "「しょうとくたいし」 (聖徳太子) means \"Prince Shotoku (574-622)\"."
        },
        {
            "question": "Horyuji Temple, a temple in Nara Prefecture built by Prince Shotoku at the beginning of the 7th century",
            "options": [
                "でんきや",
                "きかい",
                "ほうりゅうじ",
                "ひっこしします"
            ],
            "correctIndex": 2,
            "explanation": "「ほうりゅうじ」 (法隆寺) means \"Horyuji Temple, a temple in Nara Prefecture built by Prince Shotoku at the beginning of the 7th century\"."
        },
        {
            "question": "a fictitious tea",
            "options": [
                "きを つけます［くるまに～］",
                "げんきちゃ",
                "－め",
                "がいこくじんとうろくしょう"
            ],
            "correctIndex": 1,
            "explanation": "「げんきちゃ」 (元気茶) means \"a fictitious tea\"."
        },
        {
            "question": "a fictitious station",
            "options": [
                "きを つけます［くるまに～］",
                "ほんだえき",
                "こうさてん",
                "かえます"
            ],
            "correctIndex": 1,
            "explanation": "「ほんだえき」 (本田駅) means \"a fictitious station\"."
        },
        {
            "question": "a fictitious bus stop",
            "options": [
                "としょかんまえ",
                "～や",
                "しょうとくたいし",
                "うごきます［とけいが～］"
            ],
            "correctIndex": 0,
            "explanation": "「としょかんまえ」 (図書館前) means \"a fictitious bus stop\"."
        },
        {
            "question": "[a watch] move, work",
            "options": [
                "さびしい",
                "うごきます［とけいが～］",
                "きかい",
                "こうさてん"
            ],
            "correctIndex": 1,
            "explanation": "「うごきます［とけいが～］」 (動きます［時計が～］) means \"[a watch] move, work\"."
        },
        {
            "question": "pay attention [to cars], take care",
            "options": [
                "ききます［せんせいに～］",
                "こしょう",
                "げんきちゃ",
                "きを つけます［くるまに～］"
            ],
            "correctIndex": 3,
            "explanation": "「きを つけます［くるまに～］」 (気を つけます［車に～］) means \"pay attention [to cars], take care\"."
        },
        {
            "question": "move (house)",
            "options": [
                "サイズ",
                "あるきます",
                "ひっこしします",
                "ほんだえき"
            ],
            "correctIndex": 2,
            "explanation": "「ひっこしします」 (引っ越しします) means \"move (house)\"."
        },
        {
            "question": "electrician",
            "options": [
                "こうさてん",
                "でんきや",
                "［お］ゆ",
                "たてもの"
            ],
            "correctIndex": 1,
            "explanation": "「でんきや」 (電気屋) means \"electrician\"."
        },
        {
            "question": "person of ～ shop",
            "options": [
                "～や",
                "としょかんまえ",
                "ほうりゅうじ",
                "しんごう"
            ],
            "correctIndex": 0,
            "explanation": "「～や」 (～屋) means \"person of ～ shop\"."
        },
        {
            "question": "machine",
            "options": [
                "ごちそうさま［でした］。",
                "しょうとくたいし",
                "ほうりゅうじ",
                "きかい"
            ],
            "correctIndex": 3,
            "explanation": "「きかい」 (機械) means \"machine\"."
        },
        {
            "question": "knob",
            "options": [
                "～や",
                "つまみ",
                "さびしい",
                "サイズ"
            ],
            "correctIndex": 1,
            "explanation": "「つまみ」 means \"knob\"."
        },
        {
            "question": "New Year's Day",
            "options": [
                "［お］しょうがつ",
                "ごちそうさま［でした］。",
                "ちゅうしゃじょう",
                "ひきます"
            ],
            "correctIndex": 0,
            "explanation": "「［お］しょうがつ」 (［お］正月) means \"New Year's Day\"."
        },
        {
            "question": "That was delicious. (said after eating or drinking)",
            "options": [
                "ごちそうさま［でした］。",
                "こうさてん",
                "なんかいも",
                "きかい"
            ],
            "correctIndex": 0,
            "explanation": "「ごちそうさま［でした］。」 means \"That was delicious. (said after eating or drinking)\"."
        },
        {
            "question": "alien registration card",
            "options": [
                "おと",
                "～や",
                "がいこくじんとうろくしょう",
                "きかい"
            ],
            "correctIndex": 2,
            "explanation": "「がいこくじんとうろくしょう」 (外国人登録証) means \"alien registration card\"."
        }
    ],
    "Lesson 24": [
        {
            "question": "give (me)",
            "options": [
                "しょうかいします",
                "おじいさん／おじいちゃん",
                "あんないします",
                "くれます"
            ],
            "correctIndex": 3,
            "explanation": "「くれます」 means \"give (me)\"."
        },
        {
            "question": "repair, correct",
            "options": [
                "ワゴンしゃ",
                "ははの ひ",
                "ほかに",
                "なおします"
            ],
            "correctIndex": 3,
            "explanation": "「なおします」 (直します) means \"repair, correct\"."
        },
        {
            "question": "take (someone)",
            "options": [
                "つれて いきます",
                "せつめいします",
                "ホームステイ",
                "あんないします"
            ],
            "correctIndex": 0,
            "explanation": "「つれて いきます」 (連れて 行きます) means \"take (someone)\"."
        },
        {
            "question": "bring (someone)",
            "options": [
                "つれて きます",
                "ほかに",
                "じゅんび",
                "おくります［ひとを～］"
            ],
            "correctIndex": 0,
            "explanation": "「つれて きます」 (連れて 来ます) means \"bring (someone)\"."
        },
        {
            "question": "escort [someone], go with",
            "options": [
                "しょうかいします",
                "おくります［ひとを～］",
                "おばあさん／おばあちゃん",
                "ホームステイ"
            ],
            "correctIndex": 1,
            "explanation": "「おくります［ひとを～］」 (送ります［人を～］) means \"escort [someone], go with\"."
        },
        {
            "question": "introduce",
            "options": [
                "しょうかいします",
                "ワゴンしゃ",
                "ひっこし",
                "ぜんぶ"
            ],
            "correctIndex": 0,
            "explanation": "「しょうかいします」 (紹介します) means \"introduce\"."
        },
        {
            "question": "show around, show the way",
            "options": [
                "いれます［コーヒーを～］",
                "あんないします",
                "ひっこし",
                "なおします"
            ],
            "correctIndex": 1,
            "explanation": "「あんないします」 (案内します) means \"show around, show the way\"."
        },
        {
            "question": "explain",
            "options": [
                "なおします",
                "くれます",
                "せつめいします",
                "［お］かし"
            ],
            "correctIndex": 2,
            "explanation": "「せつめいします」 (説明します) means \"explain\"."
        },
        {
            "question": "grandfather, old man",
            "options": [
                "おじいさん／おじいちゃん",
                "［お］かし",
                "［お］べんとう",
                "おくります［ひとを～］"
            ],
            "correctIndex": 0,
            "explanation": "「おじいさん／おじいちゃん」 means \"grandfather, old man\"."
        },
        {
            "question": "grandmother, old woman",
            "options": [
                "おくります［ひとを～］",
                "せつめいします",
                "おばあさん／おばあちゃん",
                "［お］べんとう"
            ],
            "correctIndex": 2,
            "explanation": "「おばあさん／おばあちゃん」 means \"grandmother, old woman\"."
        },
        {
            "question": "preparation (～［を］します : prepare)",
            "options": [
                "くれます",
                "あんないします",
                "じゅんび",
                "しょうかいします"
            ],
            "correctIndex": 2,
            "explanation": "「じゅんび」 (準備) means \"preparation (～［を］します : prepare)\"."
        },
        {
            "question": "moving out (～［を］します : move out)",
            "options": [
                "おばあさん／おばあちゃん",
                "ひっこし",
                "じぶんで",
                "じゅんび"
            ],
            "correctIndex": 1,
            "explanation": "「ひっこし」 (引っ越し) means \"moving out (～［を］します : move out)\"."
        },
        {
            "question": "sweets, snacks",
            "options": [
                "［お］かし",
                "つれて いきます",
                "ぜんぶ",
                "［お］べんとう"
            ],
            "correctIndex": 0,
            "explanation": "「［お］かし」 (［お］菓子) means \"sweets, snacks\"."
        },
        {
            "question": "homestay",
            "options": [
                "つれて きます",
                "ホームステイ",
                "ぜんぶ",
                "［お］かし"
            ],
            "correctIndex": 1,
            "explanation": "「ホームステイ」 means \"homestay\"."
        },
        {
            "question": "all",
            "options": [
                "ぜんぶ",
                "ワゴンしゃ",
                "しょうかいします",
                "おじいさん／おじいちゃん"
            ],
            "correctIndex": 0,
            "explanation": "「ぜんぶ」 (全部) means \"all\"."
        },
        {
            "question": "by oneself",
            "options": [
                "ひっこし",
                "ははの ひ",
                "ホームステイ",
                "じぶんで"
            ],
            "correctIndex": 3,
            "explanation": "「じぶんで」 (自分で) means \"by oneself\"."
        },
        {
            "question": "besides",
            "options": [
                "しょうかいします",
                "［お］かし",
                "ホームステイ",
                "ほかに"
            ],
            "correctIndex": 3,
            "explanation": "「ほかに」 means \"besides\"."
        },
        {
            "question": "Mother's Day",
            "options": [
                "じぶんで",
                "いれます［コーヒーを～］",
                "ははの ひ",
                "ぜんぶ"
            ],
            "correctIndex": 2,
            "explanation": "「ははの ひ」 (母の 日) means \"Mother's Day\"."
        },
        {
            "question": "make [coffee]",
            "options": [
                "じぶんで",
                "ホームステイ",
                "いれます［コーヒーを～］",
                "［お］べんとう"
            ],
            "correctIndex": 2,
            "explanation": "「いれます［コーヒーを～］」 means \"make [coffee]\"."
        },
        {
            "question": "meaning",
            "options": [
                "じぶんで",
                "いみ",
                "おばあさん／おばあちゃん",
                "［お］べんとう"
            ],
            "correctIndex": 1,
            "explanation": "「いみ」 (意味) means \"meaning\"."
        },
        {
            "question": "station wagon",
            "options": [
                "ワゴンしゃ",
                "ぜんぶ",
                "おばあさん／おばあちゃん",
                "しょうかいします"
            ],
            "correctIndex": 0,
            "explanation": "「ワゴンしゃ」 (ワゴン車) means \"station wagon\"."
        },
        {
            "question": "box lunch",
            "options": [
                "ほかに",
                "いれます［コーヒーを～］",
                "［お］べんとう",
                "ワゴンしゃ"
            ],
            "correctIndex": 2,
            "explanation": "「［お］べんとう」 (［お］弁当) means \"box lunch\"."
        }
    ],
    "Lesson 25": [
        {
            "question": "think, consider",
            "options": [
                "かんがえます",
                "とります［としを～］",
                "もしもし",
                "ひま"
            ],
            "correctIndex": 0,
            "explanation": "「かんがえます」 (考えます) means \"think, consider\"."
        },
        {
            "question": "arrive",
            "options": [
                "とります［としを～］",
                "ひま",
                "グループ",
                "つきます"
            ],
            "correctIndex": 3,
            "explanation": "「つきます」 (着きます) means \"arrive\"."
        },
        {
            "question": "grow old",
            "options": [
                "とります［としを～］",
                "［いろいろ］おせわに なりました。",
                "かんがえます",
                "チャンス"
            ],
            "correctIndex": 0,
            "explanation": "「とります［としを～］」 (取ります［年を～］) means \"grow old\"."
        },
        {
            "question": "be enough, be sufficient",
            "options": [
                "かんがえます",
                "たります",
                "たいしかん",
                "いみ"
            ],
            "correctIndex": 1,
            "explanation": "「たります」 (足ります) means \"be enough, be sufficient\"."
        },
        {
            "question": "countryside, hometown",
            "options": [
                "てんきん",
                "グループ",
                "いなか",
                "がんばります"
            ],
            "correctIndex": 2,
            "explanation": "「いなか」 (田舎) means \"countryside, hometown\"."
        },
        {
            "question": "chance",
            "options": [
                "チャンス",
                "いみ",
                "かんがえます",
                "いなか"
            ],
            "correctIndex": 0,
            "explanation": "「チャンス」 means \"chance\"."
        },
        {
            "question": "hundred million",
            "options": [
                "こと",
                "おく",
                "たいしかん",
                "りゅうがくします"
            ],
            "correctIndex": 1,
            "explanation": "「おく」 (億) means \"hundred million\"."
        },
        {
            "question": "if",
            "options": [
                "いくら［～でも］",
                "いっぱい のみましょう。",
                "おく",
                "もし［～たら］"
            ],
            "correctIndex": 3,
            "explanation": "「もし［～たら］」 means \"if\"."
        },
        {
            "question": "meaning",
            "options": [
                "もしもし",
                "かんがえます",
                "いみ",
                "りゅうがくします"
            ],
            "correctIndex": 2,
            "explanation": "「いみ」 (意味) means \"meaning\"."
        },
        {
            "question": "hello (used on the phone)",
            "options": [
                "どうぞ おげんきで。",
                "つきます",
                "チャンス",
                "もしもし"
            ],
            "correctIndex": 3,
            "explanation": "「もしもし」 means \"hello (used on the phone)\"."
        },
        {
            "question": "transfer (～します : be transferred to another office)",
            "options": [
                "もしもし",
                "こと",
                "いっぱい のみましょう。",
                "てんきん"
            ],
            "correctIndex": 3,
            "explanation": "「てんきん」 (転勤) means \"transfer (～します : be transferred to another office)\"."
        },
        {
            "question": "thing, matter (～の こと : thing about ～)",
            "options": [
                "もし［～たら］",
                "たいしかん",
                "ひま",
                "こと"
            ],
            "correctIndex": 3,
            "explanation": "「こと」 means \"thing, matter (～の こと : thing about ～)\"."
        },
        {
            "question": "free time",
            "options": [
                "もし［～たら］",
                "ひま",
                "つきます",
                "てんきん"
            ],
            "correctIndex": 1,
            "explanation": "「ひま」 (暇) means \"free time\"."
        },
        {
            "question": "Thank you for everything you've done for me.",
            "options": [
                "がんばります",
                "［いろいろ］おせわに なりました。",
                "どうぞ おげんきで。",
                "チャンス"
            ],
            "correctIndex": 1,
            "explanation": "「［いろいろ］おせわに なりました。」 (［いろいろ］お世話に なりました。) means \"Thank you for everything you've done for me.\"."
        },
        {
            "question": "do one's best",
            "options": [
                "いっぱい のみましょう。",
                "がんばります",
                "てんきん",
                "いみ"
            ],
            "correctIndex": 1,
            "explanation": "「がんばります」 (頑張ります) means \"do one's best\"."
        },
        {
            "question": "Please take care of yourself. (said when expecting a long separation)",
            "options": [
                "とります［としを～］",
                "いなか",
                "どうぞ おげんきで。",
                "いみ"
            ],
            "correctIndex": 2,
            "explanation": "「どうぞ おげんきで。」 (どうぞ お元気で。) means \"Please take care of yourself. (said when expecting a long separation)\"."
        },
        {
            "question": "Vietnam",
            "options": [
                "ベトナム",
                "たります",
                "かんがえます",
                "こと"
            ],
            "correctIndex": 0,
            "explanation": "「ベトナム」 means \"Vietnam\"."
        },
        {
            "question": "study abroad",
            "options": [
                "りゅうがくします",
                "［いろいろ］おせわに なりました。",
                "つきます",
                "いみ"
            ],
            "correctIndex": 0,
            "explanation": "「りゅうがくします」 (留学します) means \"study abroad\"."
        },
        {
            "question": "embassy",
            "options": [
                "たいしかん",
                "いなか",
                "チャンス",
                "がんばります"
            ],
            "correctIndex": 0,
            "explanation": "「たいしかん」 (大使館) means \"embassy\"."
        },
        {
            "question": "group",
            "options": [
                "こと",
                "てんきん",
                "ひま",
                "グループ"
            ],
            "correctIndex": 3,
            "explanation": "「グループ」 means \"group\"."
        },
        {
            "question": "however ～, even if ～",
            "options": [
                "かんがえます",
                "たります",
                "いなか",
                "いくら［～でも］"
            ],
            "correctIndex": 3,
            "explanation": "「いくら［～でも］」 means \"however ～, even if ～\"."
        },
        {
            "question": "Let's have a drink together",
            "options": [
                "つきます",
                "たいしかん",
                "いっぱい のみましょう。",
                "ベトナム"
            ],
            "correctIndex": 2,
            "explanation": "「いっぱい のみましょう。」 (一杯 飲みましょう。) means \"Let's have a drink together\"."
        }
    ],
    "Lesson 26": [
        {
            "question": "check, take a look at",
            "options": [
                "みます",
                "NHK",
                "さんかします［パーティーに～］",
                "～べん"
            ],
            "correctIndex": 0,
            "explanation": "「みます」 (見ます、診ます) means \"check, take a look at\"."
        },
        {
            "question": "look for, search",
            "options": [
                "さがします",
                "うちゅうせん",
                "つごうが わるい",
                "きぶんが わるい"
            ],
            "correctIndex": 0,
            "explanation": "「さがします」 (探します、捜します) means \"look for, search\"."
        },
        {
            "question": "be late [for an appointment, etc.]",
            "options": [
                "おくれます［じかんに～］",
                "こんど",
                "みます",
                "うんどうかい"
            ],
            "correctIndex": 0,
            "explanation": "「おくれます［じかんに～］」 (遅れます［時間に～］) means \"be late [for an appointment, etc.]\"."
        },
        {
            "question": "be in time [for an appointment, etc.]",
            "options": [
                "よこ",
                "ばしょ",
                "うちゅうステーション",
                "まに あいます［じかんに～］"
            ],
            "correctIndex": 3,
            "explanation": "「まに あいます［じかんに～］」 (間に 合います［時間に～］) means \"be in time [for an appointment, etc.]\"."
        },
        {
            "question": "do",
            "options": [
                "かん",
                "うちゅうせん",
                "やります",
                "NHK"
            ],
            "correctIndex": 2,
            "explanation": "「やります」 means \"do\"."
        },
        {
            "question": "pick up",
            "options": [
                "びん",
                "こんど",
                "ひろいます",
                "もえます［ごみが～］"
            ],
            "correctIndex": 2,
            "explanation": "「ひろいます」 (拾います) means \"pick up\"."
        },
        {
            "question": "contact, get in touch with",
            "options": [
                "べつの",
                "ごみ",
                "れんらくします",
                "どこでも"
            ],
            "correctIndex": 2,
            "explanation": "「れんらくします」 (連絡します) means \"contact, get in touch with\"."
        },
        {
            "question": "feel well",
            "options": [
                "ボランティア",
                "こんど",
                "ほしであきひこ",
                "きぶんが いい"
            ],
            "correctIndex": 3,
            "explanation": "「きぶんが いい」 (気分が いい) means \"feel well\"."
        },
        {
            "question": "feel ill",
            "options": [
                "もうしこみます",
                "きぶんが わるい",
                "でんしメール",
                "ボランティア"
            ],
            "correctIndex": 1,
            "explanation": "「きぶんが わるい」 (気分が 悪い) means \"feel ill\"."
        },
        {
            "question": "athletic meeting, sports day",
            "options": [
                "そんな ～",
                "うんどうかい",
                "びん",
                "あんな ～"
            ],
            "correctIndex": 1,
            "explanation": "「うんどうかい」 (運動会) means \"athletic meeting, sports day\"."
        },
        {
            "question": "Bon Festival dance",
            "options": [
                "～さま",
                "こまったなあ。",
                "ぼんおどり",
                "いつでも"
            ],
            "correctIndex": 2,
            "explanation": "「ぼんおどり」 (盆踊り) means \"Bon Festival dance\"."
        },
        {
            "question": "flea market",
            "options": [
                "フリーマーケット",
                "べつの",
                "もうしこみます",
                "うちゅうせん"
            ],
            "correctIndex": 0,
            "explanation": "「フリーマーケット」 means \"flea market\"."
        },
        {
            "question": "place",
            "options": [
                "かん",
                "ばしょ",
                "だれでも",
                "じゅうどう"
            ],
            "correctIndex": 1,
            "explanation": "「ばしょ」 (場所) means \"place\"."
        },
        {
            "question": "volunteer",
            "options": [
                "つごうが わるい",
                "［お］ゆ",
                "あんな ～",
                "ボランティア"
            ],
            "correctIndex": 3,
            "explanation": "「ボランティア」 means \"volunteer\"."
        },
        {
            "question": "wallet, purse",
            "options": [
                "さいふ",
                "じゅうどう",
                "フリーマーケット",
                "うちゅうひこうし"
            ],
            "correctIndex": 0,
            "explanation": "「さいふ」 (財布) means \"wallet, purse\"."
        },
        {
            "question": "garbage, rubbish, dust",
            "options": [
                "うちゅうステーション",
                "きぶんが わるい",
                "ごみ",
                "しんぶんしゃ"
            ],
            "correctIndex": 2,
            "explanation": "「ごみ」 means \"garbage, rubbish, dust\"."
        },
        {
            "question": "the Diet Building",
            "options": [
                "エドアストア",
                "こっかいぎじどう",
                "さがします",
                "うちゅうステーション"
            ],
            "correctIndex": 1,
            "explanation": "「こっかいぎじどう」 (国会議事堂) means \"the Diet Building\"."
        },
        {
            "question": "weekday",
            "options": [
                "へいじつ",
                "かん",
                "じゅうどう",
                "ごみ"
            ],
            "correctIndex": 0,
            "explanation": "「へいじつ」 (平日) means \"weekday\"."
        },
        {
            "question": "～ dialect",
            "options": [
                "うんどうかい",
                "かん",
                "～べん",
                "さがします"
            ],
            "correctIndex": 2,
            "explanation": "「～べん」 (～弁) means \"～ dialect\"."
        },
        {
            "question": "next time, another time",
            "options": [
                "じゅうどう",
                "もえます［ごみが～］",
                "こんど",
                "うちゅうせん"
            ],
            "correctIndex": 2,
            "explanation": "「こんど」 (今度) means \"next time, another time\"."
        },
        {
            "question": "very, pretty",
            "options": [
                "おきば",
                "うちゅうひこうし",
                "こんな ～",
                "ずいぶん"
            ],
            "correctIndex": 3,
            "explanation": "「ずいぶん」 means \"very, pretty\"."
        },
        {
            "question": "directly",
            "options": [
                "あんな ～",
                "へいじつ",
                "さがします",
                "ちょくせつ"
            ],
            "correctIndex": 3,
            "explanation": "「ちょくせつ」 (直接) means \"directly\"."
        },
        {
            "question": "any time",
            "options": [
                "ひろいます",
                "いつでも",
                "フリーマーケット",
                "だします［ごみを～］"
            ],
            "correctIndex": 1,
            "explanation": "「いつでも」 means \"any time\"."
        },
        {
            "question": "anywhere",
            "options": [
                "ひろいます",
                "どこでも",
                "もえる ごみ",
                "きぶんが わるい"
            ],
            "correctIndex": 1,
            "explanation": "「どこでも」 means \"anywhere\"."
        },
        {
            "question": "anybody",
            "options": [
                "NHK",
                "だれでも",
                "ちがいます",
                "おくれます［じかんに～］"
            ],
            "correctIndex": 1,
            "explanation": "「だれでも」 means \"anybody\"."
        },
        {
            "question": "anything",
            "options": [
                "うちゅう",
                "なんでも",
                "だします［ごみを～］",
                "ずいぶん"
            ],
            "correctIndex": 1,
            "explanation": "「なんでも」 (何でも) means \"anything\"."
        },
        {
            "question": "～ like this",
            "options": [
                "さがします",
                "フリーマーケット",
                "こんな ～",
                "どいたかお"
            ],
            "correctIndex": 2,
            "explanation": "「こんな ～」 means \"～ like this\"."
        },
        {
            "question": "～ like that (near the listener)",
            "options": [
                "そんな ～",
                "ガス",
                "もえます［ごみが～］",
                "どいたかお"
            ],
            "correctIndex": 0,
            "explanation": "「そんな ～」 means \"～ like that (near the listener)\"."
        },
        {
            "question": "~ like that (far from both the speaker and the listener)",
            "options": [
                "かん",
                "あんな ～",
                "よこ",
                "フリーマーケット"
            ],
            "correctIndex": 1,
            "explanation": "「あんな ～」 means \"~ like that (far from both the speaker and the listener)\"."
        },
        {
            "question": "fictitious store",
            "options": [
                "エドアストア",
                "うちゅうせん",
                "もうしこみます",
                "だします［ごみを～］"
            ],
            "correctIndex": 0,
            "explanation": "「エドアストア」 means \"fictitious store\"."
        },
        {
            "question": "[boxes] be put in order, tidy up",
            "options": [
                "こっかいぎじどう",
                "かたづきます［にもつが～］",
                "エドアストア",
                "フリーマーケット"
            ],
            "correctIndex": 1,
            "explanation": "「かたづきます［にもつが～］」 (片づきます［荷物が～］) means \"[boxes] be put in order, tidy up\"."
        },
        {
            "question": "put out [the rubbish]",
            "options": [
                "うちゅう",
                "［お］ゆ",
                "だします［ごみを～］",
                "うちゅうせん"
            ],
            "correctIndex": 2,
            "explanation": "「だします［ごみを～］」 (出します［ごみを～］) means \"put out [the rubbish]\"."
        },
        {
            "question": "burnable rubbish",
            "options": [
                "ほしであきひこ",
                "びん",
                "こわい",
                "もえる ごみ"
            ],
            "correctIndex": 3,
            "explanation": "「もえる ごみ」 (燃える ごみ) means \"burnable rubbish\"."
        },
        {
            "question": "place where something is put",
            "options": [
                "きぶんが いい",
                "おきば",
                "ぼんおどり",
                "でんしメール"
            ],
            "correctIndex": 1,
            "explanation": "「おきば」 (置き場) means \"place where something is put\"."
        },
        {
            "question": "side",
            "options": [
                "ごみ",
                "でんしメール",
                "よこ",
                "NHK"
            ],
            "correctIndex": 2,
            "explanation": "「よこ」 (横) means \"side\"."
        },
        {
            "question": "bottle",
            "options": [
                "ばしょ",
                "げっすいきん",
                "びん",
                "さいふ"
            ],
            "correctIndex": 2,
            "explanation": "「びん」 (瓶) means \"bottle\"."
        },
        {
            "question": "can",
            "options": [
                "みます",
                "かん",
                "NHK",
                "［お］ゆ"
            ],
            "correctIndex": 1,
            "explanation": "「かん」 (缶) means \"can\"."
        },
        {
            "question": "gas",
            "options": [
                "べつの",
                "ガス",
                "ごみ",
                "こわい"
            ],
            "correctIndex": 1,
            "explanation": "「ガス」 means \"gas\"."
        },
        {
            "question": "～ company",
            "options": [
                "きぶんが いい",
                "～がいしゃ",
                "もうしこみます",
                "もえます［ごみが～］"
            ],
            "correctIndex": 1,
            "explanation": "「～がいしゃ」 (～会社) means \"～ company\"."
        },
        {
            "question": "space, universe",
            "options": [
                "ほしであきひこ",
                "うちゅう",
                "まに あいます［じかんに～］",
                "べつの"
            ],
            "correctIndex": 1,
            "explanation": "「うちゅう」 (宇宙) means \"space, universe\"."
        },
        {
            "question": "Mr. ～/Ms. ～ (respectful equivalent of ～さん)",
            "options": [
                "フリーマーケット",
                "べつの",
                "なんでも",
                "～さま"
            ],
            "correctIndex": 3,
            "explanation": "「～さま」 (～様) means \"Mr. ～/Ms. ～ (respectful equivalent of ～さん)\"."
        },
        {
            "question": "spaceship",
            "options": [
                "じゅうどう",
                "NHK",
                "なんでも",
                "うちゅうせん"
            ],
            "correctIndex": 3,
            "explanation": "「うちゅうせん」 (宇宙船) means \"spaceship\"."
        },
        {
            "question": "be afraid of",
            "options": [
                "ずいぶん",
                "こわい",
                "こっかいぎじどう",
                "エドアストア"
            ],
            "correctIndex": 1,
            "explanation": "「こわい」 (怖い) means \"be afraid of\"."
        },
        {
            "question": "space station",
            "options": [
                "こまったなあ。",
                "つごうが いい",
                "だします［ごみを～］",
                "うちゅうステーション"
            ],
            "correctIndex": 3,
            "explanation": "「うちゅうステーション」 (宇宙ステーション) means \"space station\"."
        },
        {
            "question": "be different",
            "options": [
                "こわい",
                "さいふ",
                "きぶんが いい",
                "ちがいます"
            ],
            "correctIndex": 3,
            "explanation": "「ちがいます」 (違います) means \"be different\"."
        },
        {
            "question": "astronaut",
            "options": [
                "おくれます［じかんに～］",
                "れんらくします",
                "ちがいます",
                "うちゅうひこうし"
            ],
            "correctIndex": 3,
            "explanation": "「うちゅうひこうし」 (宇宙飛行士) means \"astronaut\"."
        },
        {
            "question": "Japanese astronaut (1968-)",
            "options": [
                "～べん",
                "まに あいます［じかんに～］",
                "つごうが いい",
                "ほしであきひこ"
            ],
            "correctIndex": 3,
            "explanation": "「ほしであきひこ」 (星出彰彦) means \"Japanese astronaut (1968-)\"."
        },
        {
            "question": "attend [a party]",
            "options": [
                "ごみ",
                "あんな ～",
                "さんかします［パーティーに～］",
                "じゅうどう"
            ],
            "correctIndex": 2,
            "explanation": "「さんかします［パーティーに～］」 (参加します［パーティーに～］) means \"attend [a party]\"."
        },
        {
            "question": "apply for, enter for",
            "options": [
                "もうしこみます",
                "やります",
                "つごうが わるい",
                "ちょくせつ"
            ],
            "correctIndex": 0,
            "explanation": "「もうしこみます」 (申し込みます) means \"apply for, enter for\"."
        },
        {
            "question": "convenient (concerning time)",
            "options": [
                "こわい",
                "つごうが いい",
                "ボランティア",
                "うんどうかい"
            ],
            "correctIndex": 1,
            "explanation": "「つごうが いい」 (都合が いい) means \"convenient (concerning time)\"."
        },
        {
            "question": "inconvenient (regarding time)",
            "options": [
                "つごうが わるい",
                "［お］ゆ",
                "びん",
                "つごうが いい"
            ],
            "correctIndex": 0,
            "explanation": "「つごうが わるい」 (都合が 悪い) means \"inconvenient (regarding time)\"."
        },
        {
            "question": "newspaper publishing company, newspaper office",
            "options": [
                "しんぶんしゃ",
                "フリーマーケット",
                "おくれます［じかんに～］",
                "そんな ～"
            ],
            "correctIndex": 0,
            "explanation": "「しんぶんしゃ」 (新聞社) means \"newspaper publishing company, newspaper office\"."
        },
        {
            "question": "judo",
            "options": [
                "ちがいます",
                "うちゅうステーション",
                "じゅうどう",
                "うちゅうひこうし"
            ],
            "correctIndex": 2,
            "explanation": "「じゅうどう」 (柔道) means \"judo\"."
        },
        {
            "question": "Nippon Hoso Kyokai (broadcasting company)",
            "options": [
                "でんしメール",
                "つごうが わるい",
                "NHK",
                "こんど"
            ],
            "correctIndex": 2,
            "explanation": "「NHK」 means \"Nippon Hoso Kyokai (broadcasting company)\"."
        },
        {
            "question": "Children's Day",
            "options": [
                "ひろいます",
                "おくれます［じかんに～］",
                "まに あいます［じかんに～］",
                "こどもの ひ"
            ],
            "correctIndex": 3,
            "explanation": "「こどもの ひ」 (こどもの 日) means \"Children's Day\"."
        },
        {
            "question": "[trash] burn",
            "options": [
                "こどもの ひ",
                "こわい",
                "かたづきます［にもつが～］",
                "もえます［ごみが～］"
            ],
            "correctIndex": 3,
            "explanation": "「もえます［ごみが～］」 (燃えます［ごみが～］) means \"[trash] burn\"."
        },
        {
            "question": "Monday, Wednesday and Friday",
            "options": [
                "びん",
                "ひろいます",
                "げっすいきん",
                "ばしょ"
            ],
            "correctIndex": 2,
            "explanation": "「げっすいきん」 (月・水・金) means \"Monday, Wednesday and Friday\"."
        },
        {
            "question": "hot water",
            "options": [
                "つごうが わるい",
                "こどもの ひ",
                "［お］ゆ",
                "おきば"
            ],
            "correctIndex": 2,
            "explanation": "「［お］ゆ」 (［お］湯) means \"hot water\"."
        },
        {
            "question": "What shall I do?",
            "options": [
                "つごうが わるい",
                "おくれます［じかんに～］",
                "NHK",
                "こまったなあ。"
            ],
            "correctIndex": 3,
            "explanation": "「こまったなあ。」 (困ったなあ。) means \"What shall I do?\"."
        },
        {
            "question": "electronic mail",
            "options": [
                "でんしメール",
                "うちゅうステーション",
                "もえます［ごみが～］",
                "ばしょ"
            ],
            "correctIndex": 0,
            "explanation": "「でんしメール」 (電子メール) means \"electronic mail\"."
        },
        {
            "question": "another",
            "options": [
                "なんでも",
                "もえる ごみ",
                "みます",
                "べつの"
            ],
            "correctIndex": 3,
            "explanation": "「べつの」 (別の) means \"another\"."
        },
        {
            "question": "Japanese astronaut (1955-)",
            "options": [
                "げっすいきん",
                "こまったなあ。",
                "どいたかお",
                "あんな ～"
            ],
            "correctIndex": 2,
            "explanation": "「どいたかお」 (土井隆雄) means \"Japanese astronaut (1955-)\"."
        }
    ],
    "Lesson 27": [
        {
            "question": "keep (a pet), raise (an animal)",
            "options": [
                "いえ",
                "なみ",
                "かいます",
                "パーティールーム"
            ],
            "correctIndex": 2,
            "explanation": "「かいます」 (飼います) means \"keep (a pet), raise (an animal)\"."
        },
        {
            "question": "run, drive [along a road]",
            "options": [
                "マンション",
                "～しか",
                "とびます",
                "はしります［みちを～］"
            ],
            "correctIndex": 3,
            "explanation": "「はしります［みちを～］」 (走ります［道を～］) means \"run, drive [along a road]\"."
        },
        {
            "question": "[a mountain] can be seen",
            "options": [
                "みえます［やまが～］",
                "けしき",
                "にちようだいく",
                "しょうらい"
            ],
            "correctIndex": 0,
            "explanation": "「みえます［やまが～］」 (見えます［山が～］) means \"[a mountain] can be seen\"."
        },
        {
            "question": "[a sound] can be heard",
            "options": [
                "みえます［やまが～］",
                "きこえます［おとが～］",
                "ロボット",
                "とります［やすみを～］"
            ],
            "correctIndex": 1,
            "explanation": "「きこえます［おとが～］」 (聞こえます［音が～］) means \"[a sound] can be heard\"."
        },
        {
            "question": "[a road] be made, be completed, come into existence",
            "options": [
                "みえます［やまが～］",
                "できます［みちが～］",
                "あきはばら",
                "なみ"
            ],
            "correctIndex": 1,
            "explanation": "「できます［みちが～］」 (できます［道が～］) means \"[a road] be made, be completed, come into existence\"."
        },
        {
            "question": "set up [a class], open, hold",
            "options": [
                "ひるま",
                "マンション",
                "～ご",
                "ひらきます［きょうしつを～］"
            ],
            "correctIndex": 3,
            "explanation": "「ひらきます［きょうしつを～］」 (開きます［教室を～］) means \"set up [a class], open, hold\"."
        },
        {
            "question": "worried, anxious",
            "options": [
                "しんぱい［な］",
                "～きょうしつ",
                "とり",
                "ペット"
            ],
            "correctIndex": 0,
            "explanation": "「しんぱい［な］」 (心配［な］) means \"worried, anxious\"."
        },
        {
            "question": "pet",
            "options": [
                "ロボット",
                "たてます",
                "みえます［やまが～］",
                "ペット"
            ],
            "correctIndex": 3,
            "explanation": "「ペット」 means \"pet\"."
        },
        {
            "question": "bird",
            "options": [
                "いず",
                "できます［みちが～］",
                "みえます［やまが～］",
                "とり"
            ],
            "correctIndex": 3,
            "explanation": "「とり」 (鳥) means \"bird\"."
        },
        {
            "question": "voice",
            "options": [
                "こえ",
                "～きょうしつ",
                "かぐ",
                "ふしぎ［な］"
            ],
            "correctIndex": 0,
            "explanation": "「こえ」 (声) means \"voice\"."
        },
        {
            "question": "wave",
            "options": [
                "じどうはんばいき",
                "パーティールーム",
                "ほんだな",
                "なみ"
            ],
            "correctIndex": 3,
            "explanation": "「なみ」 (波) means \"wave\"."
        },
        {
            "question": "fireworks",
            "options": [
                "いえ",
                "ひるま",
                "はなび",
                "はしります［みちを～］"
            ],
            "correctIndex": 2,
            "explanation": "「はなび」 (花火) means \"fireworks\"."
        },
        {
            "question": "tool, instrument, equipment",
            "options": [
                "だいどころ",
                "とり",
                "けしき",
                "どうぐ"
            ],
            "correctIndex": 3,
            "explanation": "「どうぐ」 (道具) means \"tool, instrument, equipment\"."
        },
        {
            "question": "(dry) cleaning, laundry",
            "options": [
                "クリーニング",
                "はしります［みちを～］",
                "いず",
                "つうしんはんばい"
            ],
            "correctIndex": 0,
            "explanation": "「クリーニング」 means \"(dry) cleaning, laundry\"."
        },
        {
            "question": "house, home",
            "options": [
                "とり",
                "きこえます［おとが～］",
                "はなび",
                "いえ"
            ],
            "correctIndex": 3,
            "explanation": "「いえ」 (家) means \"house, home\"."
        },
        {
            "question": "condominium, apartment house, blocks of flats",
            "options": [
                "にちようだいく",
                "クリーニング",
                "マンション",
                "はなび"
            ],
            "correctIndex": 2,
            "explanation": "「マンション」 means \"condominium, apartment house, blocks of flats\"."
        },
        {
            "question": "kitchen",
            "options": [
                "キッチン",
                "どうぐ",
                "しょうらい",
                "ひるま"
            ],
            "correctIndex": 0,
            "explanation": "「キッチン」 means \"kitchen\"."
        },
        {
            "question": "～ class",
            "options": [
                "こどもたち",
                "じぶん",
                "～しか",
                "～きょうしつ"
            ],
            "correctIndex": 3,
            "explanation": "「～きょうしつ」 (～教室) means \"～ class\"."
        },
        {
            "question": "party room",
            "options": [
                "まんが",
                "パーティールーム",
                "かた",
                "たてます"
            ],
            "correctIndex": 1,
            "explanation": "「パーティールーム」 means \"party room\"."
        },
        {
            "question": "person (respectful of ひと)",
            "options": [
                "ほんだな",
                "しんぱい［な］",
                "どうぐ",
                "かた"
            ],
            "correctIndex": 3,
            "explanation": "「かた」 (方) means \"person (respectful of ひと)\"."
        },
        {
            "question": "after ～ (duration of time)",
            "options": [
                "いつか",
                "～ご",
                "かた",
                "いず"
            ],
            "correctIndex": 1,
            "explanation": "「～ご」 (～後) means \"after ～ (duration of time)\"."
        },
        {
            "question": "only ～ (used with negatives)",
            "options": [
                "ひらきます［きょうしつを～］",
                "～しか",
                "にちようだいく",
                "キッチン"
            ],
            "correctIndex": 1,
            "explanation": "「～しか」 means \"only ～ (used with negatives)\"."
        },
        {
            "question": "other",
            "options": [
                "しょうらい",
                "ほかの",
                "はしります［みちを～］",
                "ペット"
            ],
            "correctIndex": 1,
            "explanation": "「ほかの」 means \"other\"."
        },
        {
            "question": "clearly",
            "options": [
                "しょうらい",
                "はしります［みちを～］",
                "はっきり",
                "しゅじんこう"
            ],
            "correctIndex": 2,
            "explanation": "「はっきり」 means \"clearly\"."
        },
        {
            "question": "furniture",
            "options": [
                "むかし",
                "こどもたち",
                "かぐ",
                "ドラえもん"
            ],
            "correctIndex": 2,
            "explanation": "「かぐ」 (家具) means \"furniture\"."
        },
        {
            "question": "bookcase",
            "options": [
                "かいます",
                "ひらきます［きょうしつを～］",
                "ほんだな",
                "じゆうに"
            ],
            "correctIndex": 2,
            "explanation": "「ほんだな」 (本棚) means \"bookcase\"."
        },
        {
            "question": "one day, some day",
            "options": [
                "ひるま",
                "キッチン",
                "そら",
                "いつか"
            ],
            "correctIndex": 3,
            "explanation": "「いつか」 means \"one day, some day\"."
        },
        {
            "question": "build",
            "options": [
                "しゅじんこう",
                "たてます",
                "ほんだな",
                "こえ"
            ],
            "correctIndex": 1,
            "explanation": "「たてます」 (建てます) means \"build\"."
        },
        {
            "question": "wonderful",
            "options": [
                "すばらしい",
                "クリーニング",
                "きこえます［おとが～］",
                "かたち"
            ],
            "correctIndex": 0,
            "explanation": "「すばらしい」 means \"wonderful\"."
        },
        {
            "question": "children",
            "options": [
                "～きょうしつ",
                "クリーニング",
                "こどもたち",
                "いつか"
            ],
            "correctIndex": 2,
            "explanation": "「こどもたち」 (子どもたち) means \"children\"."
        },
        {
            "question": "like very much",
            "options": [
                "だいすき［な］",
                "みえます［やまが～］",
                "むかし",
                "マンション"
            ],
            "correctIndex": 0,
            "explanation": "「だいすき［な］」 (大好き［な］) means \"like very much\"."
        },
        {
            "question": "hero, heroine",
            "options": [
                "まんが",
                "どうぐ",
                "ほとんど",
                "しゅじんこう"
            ],
            "correctIndex": 3,
            "explanation": "「しゅじんこう」 (主人公) means \"hero, heroine\"."
        },
        {
            "question": "shape",
            "options": [
                "かたち",
                "じゆうに",
                "とり",
                "はっきり"
            ],
            "correctIndex": 0,
            "explanation": "「かたち」 (形) means \"shape\"."
        },
        {
            "question": "fantastic, mysterious",
            "options": [
                "ふしぎ［な］",
                "そら",
                "ほとんど",
                "まんが"
            ],
            "correctIndex": 0,
            "explanation": "「ふしぎ［な］」 (不思議［な］) means \"fantastic, mysterious\"."
        },
        {
            "question": "pocket",
            "options": [
                "たとえば",
                "かたち",
                "ポケット",
                "みえます［やまが～］"
            ],
            "correctIndex": 2,
            "explanation": "「ポケット」 means \"pocket\"."
        },
        {
            "question": "for example",
            "options": [
                "いつか",
                "はっきり",
                "かたち",
                "たとえば"
            ],
            "correctIndex": 3,
            "explanation": "「たとえば」 (例えば) means \"for example\"."
        },
        {
            "question": "attach, put on",
            "options": [
                "できます［みちが～］",
                "つけます",
                "かいます",
                "だいすき［な］"
            ],
            "correctIndex": 1,
            "explanation": "「つけます」 (付けます) means \"attach, put on\"."
        },
        {
            "question": "freely",
            "options": [
                "じゆうに",
                "ロボット",
                "あきはばら",
                "きこえます［おとが～］"
            ],
            "correctIndex": 0,
            "explanation": "「じゆうに」 (自由に) means \"freely\"."
        },
        {
            "question": "sky",
            "options": [
                "みえます［やまが～］",
                "つうしんはんばい",
                "じゆうに",
                "そら"
            ],
            "correctIndex": 3,
            "explanation": "「そら」 (空) means \"sky\"."
        },
        {
            "question": "fly",
            "options": [
                "きこえます［おとが～］",
                "クリーニング",
                "とびます",
                "まんが"
            ],
            "correctIndex": 2,
            "explanation": "「とびます」 (飛びます) means \"fly\"."
        },
        {
            "question": "old times, ancient times",
            "options": [
                "にちようだいく",
                "むかし",
                "すばらしい",
                "しんぱい［な］"
            ],
            "correctIndex": 1,
            "explanation": "「むかし」 (昔) means \"old times, ancient times\"."
        },
        {
            "question": "oneself",
            "options": [
                "とびます",
                "じぶん",
                "どうぐ",
                "いえ"
            ],
            "correctIndex": 1,
            "explanation": "「じぶん」 (自分) means \"oneself\"."
        },
        {
            "question": "future",
            "options": [
                "こどもたち",
                "とり",
                "しょうらい",
                "パーティールーム"
            ],
            "correctIndex": 2,
            "explanation": "「しょうらい」 (将来) means \"future\"."
        },
        {
            "question": "name of a cartoon character",
            "options": [
                "かたち",
                "じゆうに",
                "ドラえもん",
                "どうぐ"
            ],
            "correctIndex": 2,
            "explanation": "「ドラえもん」 means \"name of a cartoon character\"."
        },
        {
            "question": "take [a holiday]",
            "options": [
                "じぶん",
                "とります［やすみを～］",
                "かんさいくうこう",
                "こどもたち"
            ],
            "correctIndex": 1,
            "explanation": "「とります［やすみを～］」 (取ります［休みを～］) means \"take [a holiday]\"."
        },
        {
            "question": "scenery, view",
            "options": [
                "みえます［やまが～］",
                "あきはばら",
                "けしき",
                "だいすき［な］"
            ],
            "correctIndex": 2,
            "explanation": "「けしき」 (景色) means \"scenery, view\"."
        },
        {
            "question": "daytime",
            "options": [
                "たとえば",
                "かたち",
                "まんが",
                "ひるま"
            ],
            "correctIndex": 3,
            "explanation": "「ひるま」 (昼間) means \"daytime\"."
        },
        {
            "question": "vending machine",
            "options": [
                "あきはばら",
                "しんぱい［な］",
                "ほとんど",
                "じどうはんばいき"
            ],
            "correctIndex": 3,
            "explanation": "「じどうはんばいき」 (自動販売機) means \"vending machine\"."
        },
        {
            "question": "mail order, mail-order sales",
            "options": [
                "マンション",
                "すばらしい",
                "いえ",
                "つうしんはんばい"
            ],
            "correctIndex": 3,
            "explanation": "「つうしんはんばい」 (通信販売) means \"mail order, mail-order sales\"."
        },
        {
            "question": "kitchen",
            "options": [
                "だいどころ",
                "ふしぎ［な］",
                "こどもたち",
                "つうしんはんばい"
            ],
            "correctIndex": 0,
            "explanation": "「だいどころ」 (台所) means \"kitchen\"."
        },
        {
            "question": "almost all (in affirmative sentences), hardly, scarcely (in negative sentences)",
            "options": [
                "ほとんど",
                "むかし",
                "いつか",
                "しんぱい［な］"
            ],
            "correctIndex": 0,
            "explanation": "「ほとんど」 means \"almost all (in affirmative sentences), hardly, scarcely (in negative sentences)\"."
        },
        {
            "question": "Kansai International Airport",
            "options": [
                "ほかの",
                "かんさいくうこう",
                "とります［やすみを～］",
                "はなび"
            ],
            "correctIndex": 1,
            "explanation": "「かんさいくうこう」 (関西空港) means \"Kansai International Airport\"."
        },
        {
            "question": "name of a shopping district in Tokyo with many electrical stores",
            "options": [
                "なみ",
                "あきはばら",
                "かた",
                "たとえば"
            ],
            "correctIndex": 1,
            "explanation": "「あきはばら」 (秋葉原) means \"name of a shopping district in Tokyo with many electrical stores\"."
        },
        {
            "question": "peninsula in Shizuoka Prefecture",
            "options": [
                "だいどころ",
                "みえます［やまが～］",
                "いず",
                "かた"
            ],
            "correctIndex": 2,
            "explanation": "「いず」 (伊豆) means \"peninsula in Shizuoka Prefecture\"."
        },
        {
            "question": "Sunday carpenter",
            "options": [
                "はっきり",
                "にちようだいく",
                "すばらしい",
                "ゆめ"
            ],
            "correctIndex": 1,
            "explanation": "「にちようだいく」 (日曜大工) means \"Sunday carpenter\"."
        },
        {
            "question": "dream (～を みます : have a dream)",
            "options": [
                "みえます［やまが～］",
                "クリーニング",
                "じどうはんばいき",
                "ゆめ"
            ],
            "correctIndex": 3,
            "explanation": "「ゆめ」 (夢) means \"dream (～を みます : have a dream)\"."
        },
        {
            "question": "cartoon, comic strip",
            "options": [
                "まんが",
                "こどもたち",
                "こえ",
                "どうぐ"
            ],
            "correctIndex": 0,
            "explanation": "「まんが」 (漫画) means \"cartoon, comic strip\"."
        },
        {
            "question": "robot",
            "options": [
                "ほとんど",
                "にちようだいく",
                "ロボット",
                "ペット"
            ],
            "correctIndex": 2,
            "explanation": "「ロボット」 means \"robot\"."
        }
    ],
    "Lesson 28": [
        {
            "question": "[bread] sell, be sold",
            "options": [
                "うれます［パンが～］",
                "ねっしん［な］",
                "かたち",
                "ボーナス"
            ],
            "correctIndex": 0,
            "explanation": "「うれます［パンが～］」 (売れます［パンが～］) means \"[bread] sell, be sold\"."
        },
        {
            "question": "dance",
            "options": [
                "それで",
                "おどります",
                "びよういん",
                "～き"
            ],
            "correctIndex": 1,
            "explanation": "「おどります」 (踊ります) means \"dance\"."
        },
        {
            "question": "chew, bite",
            "options": [
                "むりょう",
                "かみます",
                "えらびます",
                "にんき"
            ],
            "correctIndex": 1,
            "explanation": "「かみます」 means \"chew, bite\"."
        },
        {
            "question": "choose",
            "options": [
                "うーん",
                "えらびます",
                "それで",
                "やさしい"
            ],
            "correctIndex": 1,
            "explanation": "「えらびます」 (選びます) means \"choose\"."
        },
        {
            "question": "go to and from [university]",
            "options": [
                "ねっしん［な］",
                "イベント",
                "かよいます［だいがくに～］",
                "ホームステイ"
            ],
            "correctIndex": 2,
            "explanation": "「かよいます［だいがくに～］」 (通います［大学に～］) means \"go to and from [university]\"."
        },
        {
            "question": "take a memo",
            "options": [
                "あじ",
                "かよいます［だいがくに～］",
                "ひにち",
                "メモします"
            ],
            "correctIndex": 3,
            "explanation": "「メモします」 means \"take a memo\"."
        },
        {
            "question": "serious",
            "options": [
                "かんりにん",
                "まじめ［な］",
                "ねだん",
                "えらびます"
            ],
            "correctIndex": 1,
            "explanation": "「まじめ［な］」 means \"serious\"."
        },
        {
            "question": "earnest",
            "options": [
                "ねっしん［な］",
                "けいけん",
                "おどります",
                "だいどころ"
            ],
            "correctIndex": 0,
            "explanation": "「ねっしん［な］」 (熱心［な］) means \"earnest\"."
        },
        {
            "question": "great, admirable",
            "options": [
                "ちがいます",
                "かしゅ",
                "えらい",
                "うれます［パンが～］"
            ],
            "correctIndex": 2,
            "explanation": "「えらい」 (偉い) means \"great, admirable\"."
        },
        {
            "question": "proper, just right",
            "options": [
                "ちょうど いい",
                "イベント",
                "ど",
                "おどります"
            ],
            "correctIndex": 0,
            "explanation": "「ちょうど いい」 means \"proper, just right\"."
        },
        {
            "question": "scenery, view",
            "options": [
                "むすこ",
                "かよいます［だいがくに～］",
                "けしき",
                "それで"
            ],
            "correctIndex": 2,
            "explanation": "「けしき」 (景色) means \"scenery, view\"."
        },
        {
            "question": "hair salon",
            "options": [
                "かみます",
                "しばらく",
                "びよういん",
                "さそいます"
            ],
            "correctIndex": 2,
            "explanation": "「びよういん」 (美容院) means \"hair salon\"."
        },
        {
            "question": "kitchen",
            "options": [
                "むすめさん",
                "ねだん",
                "かんりにん",
                "だいどころ"
            ],
            "correctIndex": 3,
            "explanation": "「だいどころ」 (台所) means \"kitchen\"."
        },
        {
            "question": "experience (～が あります : be experienced, ～を します : experience)",
            "options": [
                "やさしい",
                "むすこ",
                "けいけん",
                "きゅうりょう"
            ],
            "correctIndex": 2,
            "explanation": "「けいけん」 (経験) means \"experience (～が あります : be experienced, ～を します : experience)\"."
        },
        {
            "question": "power",
            "options": [
                "むすこ",
                "いろ",
                "しょうらい",
                "ちから"
            ],
            "correctIndex": 3,
            "explanation": "「ちから」 (力) means \"power\"."
        },
        {
            "question": "popularity (［がくせいに］～が あります : be popular [with students])",
            "options": [
                "さそいます",
                "かいわ",
                "むすこ",
                "にんき"
            ],
            "correctIndex": 3,
            "explanation": "「にんき」 (人気) means \"popularity (［がくせいに］～が あります : be popular [with students])\"."
        },
        {
            "question": "form, shape",
            "options": [
                "ホームステイ",
                "かたち",
                "だいどころ",
                "～き"
            ],
            "correctIndex": 1,
            "explanation": "「かたち」 (形) means \"form, shape\"."
        },
        {
            "question": "colour",
            "options": [
                "にんき",
                "かいわ",
                "ちから",
                "いろ"
            ],
            "correctIndex": 3,
            "explanation": "「いろ」 (色) means \"colour\"."
        },
        {
            "question": "taste",
            "options": [
                "じぶん",
                "かみます",
                "だいどころ",
                "あじ"
            ],
            "correctIndex": 3,
            "explanation": "「あじ」 (味) means \"taste\"."
        },
        {
            "question": "chewing gum",
            "options": [
                "ゲーム",
                "けしき",
                "ガム",
                "じぶん"
            ],
            "correctIndex": 2,
            "explanation": "「ガム」 means \"chewing gum\"."
        },
        {
            "question": "goods",
            "options": [
                "きゅうりょう",
                "しなもの",
                "ホームステイ",
                "おどります"
            ],
            "correctIndex": 1,
            "explanation": "「しなもの」 (品物) means \"goods\"."
        },
        {
            "question": "price",
            "options": [
                "むすこさん",
                "うーん",
                "ねだん",
                "しょうせつか"
            ],
            "correctIndex": 2,
            "explanation": "「ねだん」 (値段) means \"price\"."
        },
        {
            "question": "salary",
            "options": [
                "ドラマ",
                "しゅうかん",
                "ひにち",
                "きゅうりょう"
            ],
            "correctIndex": 3,
            "explanation": "「きゅうりょう」 (給料) means \"salary\"."
        },
        {
            "question": "bonus",
            "options": [
                "ねだん",
                "ボーナス",
                "ドラマ",
                "いろ"
            ],
            "correctIndex": 1,
            "explanation": "「ボーナス」 means \"bonus\"."
        },
        {
            "question": "(computer) game",
            "options": [
                "かんりにん",
                "にんき",
                "ちから",
                "ゲーム"
            ],
            "correctIndex": 3,
            "explanation": "「ゲーム」 means \"(computer) game\"."
        },
        {
            "question": "programme",
            "options": [
                "じつは",
                "けしき",
                "たいてい",
                "ばんぐみ"
            ],
            "correctIndex": 3,
            "explanation": "「ばんぐみ」 (番組) means \"programme\"."
        },
        {
            "question": "drama",
            "options": [
                "ゲーム",
                "ドラマ",
                "しばらく",
                "たいてい"
            ],
            "correctIndex": 1,
            "explanation": "「ドラマ」 means \"drama\"."
        },
        {
            "question": "singer",
            "options": [
                "えらびます",
                "かしゅ",
                "かみます",
                "メモします"
            ],
            "correctIndex": 1,
            "explanation": "「かしゅ」 (歌手) means \"singer\"."
        },
        {
            "question": "novel",
            "options": [
                "かいわ",
                "きゅうりょう",
                "しょうせつ",
                "かしゅ"
            ],
            "correctIndex": 2,
            "explanation": "「しょうせつ」 (小説) means \"novel\"."
        },
        {
            "question": "novelist",
            "options": [
                "むすこさん",
                "［ちょっと］おねがいが あるんですが。",
                "しょうせつか",
                "さそいます"
            ],
            "correctIndex": 2,
            "explanation": "「しょうせつか」 (小説家) means \"novelist\"."
        },
        {
            "question": "-er, -ist, etc. (e.g. painter, novelist)",
            "options": [
                "しなもの",
                "～か",
                "ひにち",
                "おしゃべりします"
            ],
            "correctIndex": 1,
            "explanation": "「～か」 (～家) means \"-er, -ist, etc. (e.g. painter, novelist)\"."
        },
        {
            "question": "～ machine",
            "options": [
                "ゲーム",
                "うれます［パンが～］",
                "むすめさん",
                "～き"
            ],
            "correctIndex": 3,
            "explanation": "「～き」 (～機) means \"～ machine\"."
        },
        {
            "question": "(my) son",
            "options": [
                "ドラマ",
                "しょうせつか",
                "むすこ",
                "かたち"
            ],
            "correctIndex": 2,
            "explanation": "「むすこ」 (息子) means \"(my) son\"."
        },
        {
            "question": "(someone else's) son",
            "options": [
                "かたち",
                "さんかします",
                "かんりにん",
                "むすこさん"
            ],
            "correctIndex": 3,
            "explanation": "「むすこさん」 (息子さん) means \"(someone else's) son\"."
        },
        {
            "question": "(my) daughter",
            "options": [
                "むすめ",
                "さんかします",
                "やさしい",
                "さそいます"
            ],
            "correctIndex": 0,
            "explanation": "「むすめ」 (娘) means \"(my) daughter\"."
        },
        {
            "question": "(someone else's) daughter",
            "options": [
                "むすめさん",
                "あじ",
                "じぶん",
                "ちがいます"
            ],
            "correctIndex": 0,
            "explanation": "「むすめさん」 (娘さん) means \"(someone else's) daughter\"."
        },
        {
            "question": "oneself",
            "options": [
                "～き",
                "じぶん",
                "～か",
                "うれます［パンが～］"
            ],
            "correctIndex": 1,
            "explanation": "「じぶん」 (自分) means \"oneself\"."
        },
        {
            "question": "future",
            "options": [
                "しょうらい",
                "しょうせつ",
                "やさしい",
                "びよういん"
            ],
            "correctIndex": 0,
            "explanation": "「しょうらい」 (将来) means \"future\"."
        },
        {
            "question": "a little while",
            "options": [
                "おしゃべりします",
                "ガム",
                "ちから",
                "しばらく"
            ],
            "correctIndex": 3,
            "explanation": "「しばらく」 means \"a little while\"."
        },
        {
            "question": "usually, mostly",
            "options": [
                "おしらせ",
                "イベント",
                "えらびます",
                "たいてい"
            ],
            "correctIndex": 3,
            "explanation": "「たいてい」 means \"usually, mostly\"."
        },
        {
            "question": "in addition",
            "options": [
                "それに",
                "イベント",
                "ひにち",
                "～き"
            ],
            "correctIndex": 0,
            "explanation": "「それに」 means \"in addition\"."
        },
        {
            "question": "and so",
            "options": [
                "おどります",
                "～か",
                "それで",
                "きゅうりょう"
            ],
            "correctIndex": 2,
            "explanation": "「それで」 means \"and so\"."
        },
        {
            "question": "I have a [small] favor to ask.",
            "options": [
                "さんかします",
                "しょうらい",
                "［ちょっと］おねがいが あるんですが。",
                "それに"
            ],
            "correctIndex": 2,
            "explanation": "「［ちょっと］おねがいが あるんですが。」 (［ちょっと］お願いが あるんですが。) means \"I have a [small] favor to ask.\"."
        },
        {
            "question": "as a matter of fact",
            "options": [
                "しなもの",
                "メモします",
                "うーん",
                "じつは"
            ],
            "correctIndex": 3,
            "explanation": "「じつは」 (実は) means \"as a matter of fact\"."
        },
        {
            "question": "conversation",
            "options": [
                "かいわ",
                "おどります",
                "やさしい",
                "ねっしん［な］"
            ],
            "correctIndex": 0,
            "explanation": "「かいわ」 (会話) means \"conversation\"."
        },
        {
            "question": "well, let me see, hmm...",
            "options": [
                "ちから",
                "おどります",
                "それで",
                "うーん"
            ],
            "correctIndex": 3,
            "explanation": "「うーん」 means \"well, let me see, hmm...\"."
        },
        {
            "question": "notice",
            "options": [
                "おしらせ",
                "たいてい",
                "かよいます［だいがくに～］",
                "しょうせつか"
            ],
            "correctIndex": 0,
            "explanation": "「おしらせ」 (お知らせ) means \"notice\"."
        },
        {
            "question": "participate, join, attend",
            "options": [
                "さんかします",
                "それで",
                "かいわ",
                "しなもの"
            ],
            "correctIndex": 0,
            "explanation": "「さんかします」 (参加します) means \"participate, join, attend\"."
        },
        {
            "question": "date",
            "options": [
                "あじ",
                "おどります",
                "かみます",
                "ひにち"
            ],
            "correctIndex": 3,
            "explanation": "「ひにち」 (日にち) means \"date\"."
        },
        {
            "question": "Saturday",
            "options": [
                "ど",
                "さんかします",
                "だいどころ",
                "じつは"
            ],
            "correctIndex": 0,
            "explanation": "「ど」 (土) means \"Saturday\"."
        },
        {
            "question": "gymnasium",
            "options": [
                "びよういん",
                "いろ",
                "たいいくかん",
                "うれます［パンが～］"
            ],
            "correctIndex": 2,
            "explanation": "「たいいくかん」 (体育館) means \"gymnasium\"."
        },
        {
            "question": "free of charge",
            "options": [
                "むりょう",
                "えらい",
                "おどります",
                "たいてい"
            ],
            "correctIndex": 0,
            "explanation": "「むりょう」 (無料) means \"free of charge\"."
        },
        {
            "question": "invite, ask someone to join",
            "options": [
                "にんき",
                "さそいます",
                "［ちょっと］おねがいが あるんですが。",
                "ホームステイ"
            ],
            "correctIndex": 1,
            "explanation": "「さそいます」 (誘います) means \"invite, ask someone to join\"."
        },
        {
            "question": "event",
            "options": [
                "きゅうりょう",
                "さんかします",
                "ゲーム",
                "イベント"
            ],
            "correctIndex": 3,
            "explanation": "「イベント」 means \"event\"."
        },
        {
            "question": "be different",
            "options": [
                "ちがいます",
                "けしき",
                "しょうせつ",
                "かたち"
            ],
            "correctIndex": 0,
            "explanation": "「ちがいます」 (違います) means \"be different\"."
        },
        {
            "question": "gentle, kind",
            "options": [
                "じぶん",
                "ねっしん［な］",
                "ちがいます",
                "やさしい"
            ],
            "correctIndex": 3,
            "explanation": "「やさしい」 (優しい) means \"gentle, kind\"."
        },
        {
            "question": "custom",
            "options": [
                "～か",
                "しゅうかん",
                "それで",
                "むすこ"
            ],
            "correctIndex": 1,
            "explanation": "「しゅうかん」 (習慣) means \"custom\"."
        },
        {
            "question": "janitor",
            "options": [
                "かみます",
                "ちから",
                "かんりにん",
                "きゅうりょう"
            ],
            "correctIndex": 2,
            "explanation": "「かんりにん」 (管理人) means \"janitor\"."
        },
        {
            "question": "homestay",
            "options": [
                "ちょうど いい",
                "ホームステイ",
                "しゅうかん",
                "うーん"
            ],
            "correctIndex": 1,
            "explanation": "「ホームステイ」 means \"homestay\"."
        },
        {
            "question": "chat",
            "options": [
                "さそいます",
                "～き",
                "イベント",
                "おしゃべりします"
            ],
            "correctIndex": 3,
            "explanation": "「おしゃべりします」 means \"chat\"."
        }
    ],
    "Lesson 29": [
        {
            "question": "[a door] open",
            "options": [
                "この へん",
                "～ へん",
                "こわれます［いすが～］",
                "あきます［ドアが～］"
            ],
            "correctIndex": 3,
            "explanation": "「あきます［ドアが～］」 (開きます［ドアが～］) means \"[a door] open\"."
        },
        {
            "question": "[a door] close, shut",
            "options": [
                "こうばん",
                "しまります［ドアが～］",
                "スピーチ",
                "つきます［でんきが～］"
            ],
            "correctIndex": 1,
            "explanation": "「しまります［ドアが～］」 (閉まりる［ドアが～］) means \"[a door] close, shut\"."
        },
        {
            "question": "[a light] come on, be turned on",
            "options": [
                "じしん",
                "とりかえます",
                "つきます［でんきが～］",
                "もえます"
            ],
            "correctIndex": 2,
            "explanation": "「つきます［でんきが～］」 (つきます［電気が～］) means \"[a light] come on, be turned on\"."
        },
        {
            "question": "[a light] go off",
            "options": [
                "はずれます［ボタンが～］",
                "へんじ",
                "ふきます",
                "きえます［でんきが～］"
            ],
            "correctIndex": 3,
            "explanation": "「きえます［でんきが～］」 (消えます［電気が～］) means \"[a light] go off\"."
        },
        {
            "question": "[a chair] break",
            "options": [
                "ポケット",
                "こわれます［いすが～］",
                "しょるい",
                "～の ほう"
            ],
            "correctIndex": 1,
            "explanation": "「こわれます［いすが～］」 (壊れます［いすが～］) means \"[a chair] break\"."
        },
        {
            "question": "[a glass] break, smash",
            "options": [
                "さんのみや",
                "つきます［ポケットが～］",
                "たしか",
                "われます［コップが～］"
            ],
            "correctIndex": 3,
            "explanation": "「われます［コップが～］」 (割れます［コップが～］) means \"[a glass] break, smash\"."
        },
        {
            "question": "[a tree] break, snap",
            "options": [
                "ほう",
                "おれます［きが～］",
                "［お］さら",
                "さんのみや"
            ],
            "correctIndex": 1,
            "explanation": "「おれます［きが～］」 (折れます［木が～］) means \"[a tree] break, snap\"."
        },
        {
            "question": "[paper] tear",
            "options": [
                "たしか",
                "このくらい",
                "はずれます［ボタンが～］",
                "やぶれます［かみが～］"
            ],
            "correctIndex": 3,
            "explanation": "「やぶれます［かみが～］」 (破れます［紙が～］) means \"[paper] tear\"."
        },
        {
            "question": "[clothes] get dirty",
            "options": [
                "～がわ",
                "にし",
                "とりかえます",
                "よごれます［ふくが～］"
            ],
            "correctIndex": 3,
            "explanation": "「よごれます［ふくが～］」 (汚れます［服が～］) means \"[clothes] get dirty\"."
        },
        {
            "question": "[a pocket] be attached",
            "options": [
                "じしん",
                "［ああ、］よかった。",
                "あみだな",
                "つきます［ポケットが～］"
            ],
            "correctIndex": 3,
            "explanation": "「つきます［ポケットが～］」 (付きます［ポケットが～］) means \"[a pocket] be attached\"."
        },
        {
            "question": "[a button] be undone",
            "options": [
                "はずれます［ボタンが～］",
                "［お］ちゃわん",
                "～ へん",
                "えきいん"
            ],
            "correctIndex": 0,
            "explanation": "「はずれます［ボタンが～］」 (外れます［ボタンが～］) means \"[a button] be undone\"."
        },
        {
            "question": "[a car] stop, park",
            "options": [
                "はり",
                "さします",
                "つきます［でんきが～］",
                "とまります［くるまが～］"
            ],
            "correctIndex": 3,
            "explanation": "「とまります［くるまが～］」 (止まります［車が～］) means \"[a car] stop, park\"."
        },
        {
            "question": "make a mistake",
            "options": [
                "はずれます［ボタンが～］",
                "さします",
                "まちがえます",
                "ポケット"
            ],
            "correctIndex": 2,
            "explanation": "「まちがえます」 means \"make a mistake\"."
        },
        {
            "question": "drop, loose",
            "options": [
                "まちがえます",
                "おぼえて いません。",
                "［お］さら",
                "おとします"
            ],
            "correctIndex": 3,
            "explanation": "「おとします」 (落します) means \"drop, loose\"."
        },
        {
            "question": "be locked",
            "options": [
                "このくらい",
                "かかります［かぎが～］",
                "［ああ、］よかった。",
                "まちがえます"
            ],
            "correctIndex": 1,
            "explanation": "「かかります［かぎが～］」 (掛かります［かぎが～］) means \"be locked\"."
        },
        {
            "question": "wipe",
            "options": [
                "はずれます［ボタンが～］",
                "よつや",
                "ふきます",
                "さんのみや"
            ],
            "correctIndex": 2,
            "explanation": "「ふきます」 means \"wipe\"."
        },
        {
            "question": "change",
            "options": [
                "ガラス",
                "とりかえます",
                "さします",
                "～の ほう"
            ],
            "correctIndex": 1,
            "explanation": "「とりかえます」 (取り替えます) means \"change\"."
        },
        {
            "question": "put (things) in order, tidy up",
            "options": [
                "きえます［でんきが～］",
                "へんじ",
                "えきいん",
                "かたづけます"
            ],
            "correctIndex": 3,
            "explanation": "「かたづけます」 (片付けます) means \"put (things) in order, tidy up\"."
        },
        {
            "question": "plate, dish",
            "options": [
                "さいふ",
                "スピーチ",
                "かたづけます",
                "［お］さら"
            ],
            "correctIndex": 3,
            "explanation": "「［お］さら」 (［お］皿) means \"plate, dish\"."
        },
        {
            "question": "(rice) bowl",
            "options": [
                "［お］ちゃわん",
                "おれます［きが～］",
                "えきまえ",
                "たしか"
            ],
            "correctIndex": 0,
            "explanation": "「［お］ちゃわん」 means \"(rice) bowl\"."
        },
        {
            "question": "glass (vessel)",
            "options": [
                "コップ",
                "スピーチ",
                "～ へん",
                "よつや"
            ],
            "correctIndex": 0,
            "explanation": "「コップ」 means \"glass (vessel)\"."
        },
        {
            "question": "glass (material)",
            "options": [
                "もえます",
                "ガラス",
                "とりかえます",
                "おさきに どうぞ。"
            ],
            "correctIndex": 1,
            "explanation": "「ガラス」 means \"glass (material)\"."
        },
        {
            "question": "bag",
            "options": [
                "つきます［でんきが～］",
                "あみだな",
                "おれます［きが～］",
                "ふくろ"
            ],
            "correctIndex": 3,
            "explanation": "「ふくろ」 (袋) means \"bag\"."
        },
        {
            "question": "documents, paper",
            "options": [
                "しょるい",
                "こみます［みちが～］",
                "かかります［かぎが～］",
                "ふきます"
            ],
            "correctIndex": 0,
            "explanation": "「しょるい」 (書類) means \"documents, paper\"."
        },
        {
            "question": "branch, twig",
            "options": [
                "えだ",
                "いまの でんしゃ",
                "おさきに どうぞ。",
                "こうばん"
            ],
            "correctIndex": 0,
            "explanation": "「えだ」 (枝) means \"branch, twig\"."
        },
        {
            "question": "station attendant",
            "options": [
                "われます［コップが～］",
                "しまります［ドアが～］",
                "えきまえ",
                "えきいん"
            ],
            "correctIndex": 3,
            "explanation": "「えきいん」 (駅員) means \"station attendant\"."
        },
        {
            "question": "police box",
            "options": [
                "ほう",
                "しんじゅく",
                "かかります［かぎが～］",
                "こうばん"
            ],
            "correctIndex": 3,
            "explanation": "「こうばん」 (交番) means \"police box\"."
        },
        {
            "question": "speech (～を します : give/make a speech)",
            "options": [
                "スピーチ",
                "おとします",
                "つきます［ポケットが～］",
                "おれます［きが～］"
            ],
            "correctIndex": 0,
            "explanation": "「スピーチ」 means \"speech (～を します : give/make a speech)\"."
        },
        {
            "question": "reply, answer (～を します : reply, answer)",
            "options": [
                "コップ",
                "へんじ",
                "きえます［でんきが～］",
                "［お］さら"
            ],
            "correctIndex": 1,
            "explanation": "「へんじ」 (返事) means \"reply, answer (～を します : reply, answer)\"."
        },
        {
            "question": "After you./Go ahead, please",
            "options": [
                "えきまえ",
                "たしか",
                "おさきに どうぞ。",
                "ガラス"
            ],
            "correctIndex": 2,
            "explanation": "「おさきに どうぞ。」 (お先に どうぞ。) means \"After you./Go ahead, please\"."
        },
        {
            "question": "'The Tale of Genji' (a novel written by Murasaki Shikibu in the Heian Era)",
            "options": [
                "かかります［かぎが～］",
                "とまります［くるまが～］",
                "げんじものがたり",
                "かべ"
            ],
            "correctIndex": 2,
            "explanation": "「げんじものがたり」 (源氏物語) means \"'The Tale of Genji' (a novel written by Murasaki Shikibu in the Heian Era)\"."
        },
        {
            "question": "the train which has just left",
            "options": [
                "この へん",
                "いまの でんしゃ",
                "かたづけます",
                "ふきます"
            ],
            "correctIndex": 1,
            "explanation": "「いまの でんしゃ」 (今の 電車) means \"the train which has just left\"."
        },
        {
            "question": "things left behind, lost property",
            "options": [
                "ガラス",
                "さいふ",
                "げんじものがたり",
                "わすれもの"
            ],
            "correctIndex": 3,
            "explanation": "「わすれもの」 (忘れ物) means \"things left behind, lost property\"."
        },
        {
            "question": "about this (big)",
            "options": [
                "まちがえます",
                "このくらい",
                "コップ",
                "いまの でんしゃ"
            ],
            "correctIndex": 1,
            "explanation": "「このくらい」 means \"about this (big)\"."
        },
        {
            "question": "～ side",
            "options": [
                "とりかえます",
                "わすれもの",
                "へんじ",
                "～がわ"
            ],
            "correctIndex": 3,
            "explanation": "「～がわ」 (～側) means \"～ side\"."
        },
        {
            "question": "pocket",
            "options": [
                "ポケット",
                "きえます［でんきが～］",
                "えきまえ",
                "このくらい"
            ],
            "correctIndex": 0,
            "explanation": "「ポケット」 means \"pocket\"."
        },
        {
            "question": "around ～, ～ about",
            "options": [
                "いまの でんしゃ",
                "えだ",
                "おぼえて いません。",
                "～ へん"
            ],
            "correctIndex": 3,
            "explanation": "「～ へん」 (～ 辺) means \"around ～, ～ about\"."
        },
        {
            "question": "I don't remember.",
            "options": [
                "げんじものがたり",
                "やぶれます［かみが～］",
                "コップ",
                "おぼえて いません。"
            ],
            "correctIndex": 3,
            "explanation": "「おぼえて いません。」 (覚えて いません。) means \"I don't remember.\"."
        },
        {
            "question": "overhead rack",
            "options": [
                "えきまえ",
                "ポケット",
                "わすれもの",
                "あみだな"
            ],
            "correctIndex": 3,
            "explanation": "「あみだな」 (網棚) means \"overhead rack\"."
        },
        {
            "question": "I'm pretty sure",
            "options": [
                "わすれもの",
                "たしか",
                "コップ",
                "はずれます［ボタンが～］"
            ],
            "correctIndex": 1,
            "explanation": "「たしか」 (確か) means \"I'm pretty sure\"."
        },
        {
            "question": "[Oh,] that's great!/Thank goodness! (used to express a feeling of relief)",
            "options": [
                "レポーター",
                "しまります［ドアが～］",
                "えだ",
                "［ああ、］よかった。"
            ],
            "correctIndex": 3,
            "explanation": "「［ああ、］よかった。」 means \"[Oh,] that's great!/Thank goodness! (used to express a feeling of relief)\"."
        },
        {
            "question": "name of a station/district in Tokyo",
            "options": [
                "つきます［でんきが～］",
                "しんじゅく",
                "げんじものがたり",
                "こみます［みちが～］"
            ],
            "correctIndex": 1,
            "explanation": "「しんじゅく」 (新宿) means \"name of a station/district in Tokyo\"."
        },
        {
            "question": "earthquake",
            "options": [
                "［お］さら",
                "じしん",
                "よごれます［ふくが～］",
                "われます［コップが～］"
            ],
            "correctIndex": 1,
            "explanation": "「じしん」 (地震) means \"earthquake\"."
        },
        {
            "question": "wall",
            "options": [
                "たおれます",
                "こわれます［いすが～］",
                "かべ",
                "こうばん"
            ],
            "correctIndex": 2,
            "explanation": "「かべ」 (壁) means \"wall\"."
        },
        {
            "question": "hands (of a clock)",
            "options": [
                "じしん",
                "おとします",
                "はり",
                "かべ"
            ],
            "correctIndex": 2,
            "explanation": "「はり」 (針) means \"hands (of a clock)\"."
        },
        {
            "question": "point",
            "options": [
                "スピーチ",
                "さします",
                "わすれもの",
                "あきます［ドアが～］"
            ],
            "correctIndex": 1,
            "explanation": "「さします」 (指します) means \"point\"."
        },
        {
            "question": "the area in front of the station",
            "options": [
                "たおれます",
                "おとします",
                "こうばん",
                "えきまえ"
            ],
            "correctIndex": 3,
            "explanation": "「えきまえ」 (駅前) means \"the area in front of the station\"."
        },
        {
            "question": "fall down",
            "options": [
                "たおれます",
                "えだ",
                "とまります［くるまが～］",
                "やぶれます［かみが～］"
            ],
            "correctIndex": 0,
            "explanation": "「たおれます」 (倒れます) means \"fall down\"."
        },
        {
            "question": "west",
            "options": [
                "よつや",
                "にし",
                "やぶれます［かみが～］",
                "かかります［かぎが～］"
            ],
            "correctIndex": 1,
            "explanation": "「にし」 (西) means \"west\"."
        },
        {
            "question": "direction of ～",
            "options": [
                "～の ほう",
                "げんじものがたり",
                "やぶれます［かみが～］",
                "おとします"
            ],
            "correctIndex": 0,
            "explanation": "「～の ほう」 (～の 方) means \"direction of ～\"."
        },
        {
            "question": "burn",
            "options": [
                "もえます",
                "おれます［きが～］",
                "たおれます",
                "かかります［かぎが～］"
            ],
            "correctIndex": 0,
            "explanation": "「もえます」 (燃えます) means \"burn\"."
        },
        {
            "question": "reporter",
            "options": [
                "わすれもの",
                "レポーター",
                "さします",
                "ふくろ"
            ],
            "correctIndex": 1,
            "explanation": "「レポーター」 means \"reporter\"."
        },
        {
            "question": "[a road] get crowded",
            "options": [
                "かたづけます",
                "こみます［みちが～］",
                "きえます［でんきが～］",
                "おぼえて いません。"
            ],
            "correctIndex": 1,
            "explanation": "「こみます［みちが～］」 (込みます［道が～］) means \"[a road] get crowded\"."
        },
        {
            "question": "[a road] get empty",
            "options": [
                "ほう",
                "げんじものがたり",
                "まちがえます",
                "すきます［みちが～］"
            ],
            "correctIndex": 3,
            "explanation": "「すきます［みちが～］」 (すきます［道が～］) means \"[a road] get empty\"."
        },
        {
            "question": "wallet, purse",
            "options": [
                "ガラス",
                "～の ほう",
                "さいふ",
                "しまります［ドアが～］"
            ],
            "correctIndex": 2,
            "explanation": "「さいふ」 (財布) means \"wallet, purse\"."
        },
        {
            "question": "this neighborhood, around here",
            "options": [
                "にし",
                "この へん",
                "つきます［ポケットが～］",
                "まちがえます"
            ],
            "correctIndex": 1,
            "explanation": "「この へん」 (この 辺) means \"this neighborhood, around here\"."
        },
        {
            "question": "name of a station in Tokyo",
            "options": [
                "～の ほう",
                "よつや",
                "～ へん",
                "やぶれます［かみが～］"
            ],
            "correctIndex": 1,
            "explanation": "「よつや」 (四ツ谷) means \"name of a station in Tokyo\"."
        },
        {
            "question": "direction",
            "options": [
                "つきます［ポケットが～］",
                "かたづけます",
                "かべ",
                "ほう"
            ],
            "correctIndex": 3,
            "explanation": "「ほう」 (方) means \"direction\"."
        },
        {
            "question": "name of a place in Kobe",
            "options": [
                "わすれもの",
                "きえます［でんきが～］",
                "さいふ",
                "さんのみや"
            ],
            "correctIndex": 3,
            "explanation": "「さんのみや」 (三宮) means \"name of a place in Kobe\"."
        }
    ],
    "Lesson 30": [
        {
            "question": "put up, post, paste",
            "options": [
                "かいちゅうでんとう",
                "じゅぎょう",
                "はります",
                "なにか ごきぼうが ありますか。"
            ],
            "correctIndex": 2,
            "explanation": "「はります」 means \"put up, post, paste\"."
        },
        {
            "question": "hang",
            "options": [
                "なにか ごきぼうが ありますか。",
                "ゆめを みます",
                "しまいます",
                "かけます"
            ],
            "correctIndex": 3,
            "explanation": "「かけます」 (掛けます) means \"hang\"."
        },
        {
            "question": "display, decorate",
            "options": [
                "かべ",
                "もとの ところ",
                "いや［な］",
                "かざります"
            ],
            "correctIndex": 3,
            "explanation": "「かざります」 (飾ります) means \"display, decorate\"."
        },
        {
            "question": "arrange, line up",
            "options": [
                "リュック",
                "かけます",
                "おしらせ",
                "ならべます"
            ],
            "correctIndex": 3,
            "explanation": "「ならべます」 (並べます) means \"arrange, line up\"."
        },
        {
            "question": "plant",
            "options": [
                "つき",
                "ブロードウェイ",
                "うえます",
                "ミュージカル"
            ],
            "correctIndex": 2,
            "explanation": "「うえます」 (植えます) means \"plant\"."
        },
        {
            "question": "return, put ～ back",
            "options": [
                "カレンダー",
                "もどします",
                "まとめます",
                "いけ"
            ],
            "correctIndex": 1,
            "explanation": "「もどします」 (戻します) means \"return, put ～ back\"."
        },
        {
            "question": "put ～ together, put ～ in shape, sum up",
            "options": [
                "リュック",
                "まとめます",
                "しらせます",
                "ある ～"
            ],
            "correctIndex": 1,
            "explanation": "「まとめます」 means \"put ～ together, put ～ in shape, sum up\"."
        },
        {
            "question": "put (things) away",
            "options": [
                "あんないしょ",
                "ひじょうぶくろ",
                "ごくろうさま。",
                "しまいます"
            ],
            "correctIndex": 3,
            "explanation": "「しまいます」 means \"put (things) away\"."
        },
        {
            "question": "decide",
            "options": [
                "かざります",
                "きめます",
                "ポスター",
                "しまいます"
            ],
            "correctIndex": 1,
            "explanation": "「きめます」 (決めます) means \"decide\"."
        },
        {
            "question": "prepare one's lesson",
            "options": [
                "ひじょうぶくろ",
                "よしゅうします",
                "ならべます",
                "～ほど"
            ],
            "correctIndex": 1,
            "explanation": "「よしゅうします」 (予習します) means \"prepare one's lesson\"."
        },
        {
            "question": "review one's lesson",
            "options": [
                "こうばん",
                "ふくしゅうします",
                "うれしい",
                "まんなか"
            ],
            "correctIndex": 1,
            "explanation": "「ふくしゅうします」 (復習します) means \"review one's lesson\"."
        },
        {
            "question": "leave thing as they are",
            "options": [
                "そのままに します",
                "じゅぎょう",
                "おしらせ",
                "ちきゅう"
            ],
            "correctIndex": 0,
            "explanation": "「そのままに します」 means \"leave thing as they are\"."
        },
        {
            "question": "class",
            "options": [
                "つき",
                "せいかつします",
                "よてい",
                "じゅぎょう"
            ],
            "correctIndex": 3,
            "explanation": "「じゅぎょう」 (授業) means \"class\"."
        },
        {
            "question": "lecture",
            "options": [
                "こうぎ",
                "ゆめを みます",
                "げんかん",
                "ごみばこ"
            ],
            "correctIndex": 0,
            "explanation": "「こうぎ」 (講義) means \"lecture\"."
        },
        {
            "question": "meeting",
            "options": [
                "ろうか",
                "ミーティング",
                "～ほど",
                "リュック"
            ],
            "correctIndex": 1,
            "explanation": "「ミーティング」 means \"meeting\"."
        },
        {
            "question": "plan, schedule",
            "options": [
                "そのままに します",
                "よてい",
                "かびん",
                "ひじょうじ"
            ],
            "correctIndex": 1,
            "explanation": "「よてい」 (予定) means \"plan, schedule\"."
        },
        {
            "question": "notice",
            "options": [
                "こうぎ",
                "なにか ごきぼうが ありますか。",
                "せいかつします",
                "おしらせ"
            ],
            "correctIndex": 3,
            "explanation": "「おしらせ」 (お知らせ) means \"notice\"."
        },
        {
            "question": "guidebook",
            "options": [
                "そのままに します",
                "～とか、～とか",
                "よていひょう",
                "ガイドブック"
            ],
            "correctIndex": 3,
            "explanation": "「ガイドブック」 means \"guidebook\"."
        },
        {
            "question": "calendar",
            "options": [
                "カレンダー",
                "すみ",
                "うえます",
                "かいちゅうでんとう"
            ],
            "correctIndex": 0,
            "explanation": "「カレンダー」 means \"calendar\"."
        },
        {
            "question": "poster",
            "options": [
                "ミーティング",
                "こうぎ",
                "ポスター",
                "せいかつします"
            ],
            "correctIndex": 2,
            "explanation": "「ポスター」 means \"poster\"."
        },
        {
            "question": "schedule",
            "options": [
                "そうだんします",
                "かざります",
                "よていひょう",
                "ガイドブック"
            ],
            "correctIndex": 2,
            "explanation": "「よていひょう」 (予定表) means \"schedule\"."
        },
        {
            "question": "trash can, dustbin",
            "options": [
                "ごみばこ",
                "こうぎ",
                "～とか、～とか",
                "かざります"
            ],
            "correctIndex": 0,
            "explanation": "「ごみばこ」 (ごみ箱) means \"trash can, dustbin\"."
        },
        {
            "question": "doll",
            "options": [
                "かがみ",
                "カレンダー",
                "にんぎょう",
                "かざります"
            ],
            "correctIndex": 2,
            "explanation": "「にんぎょう」 (人形) means \"doll\"."
        },
        {
            "question": "vase",
            "options": [
                "おしらせ",
                "かびん",
                "ひじょうぶくろ",
                "こうぎ"
            ],
            "correctIndex": 1,
            "explanation": "「かびん」 (花瓶) means \"vase\"."
        },
        {
            "question": "mirror",
            "options": [
                "もどします",
                "めが さめます",
                "こうばん",
                "かがみ"
            ],
            "correctIndex": 3,
            "explanation": "「かがみ」 (鏡) means \"mirror\"."
        },
        {
            "question": "drawer",
            "options": [
                "じゅぎょう",
                "いや［な］",
                "まだ",
                "ひきだし"
            ],
            "correctIndex": 3,
            "explanation": "「ひきだし」 (引き出し) means \"drawer\"."
        },
        {
            "question": "front door, porch, entrance hall",
            "options": [
                "げんかん",
                "おこさん",
                "かたづけます",
                "なにか ごきぼうが ありますか。"
            ],
            "correctIndex": 0,
            "explanation": "「げんかん」 (玄関) means \"front door, porch, entrance hall\"."
        },
        {
            "question": "corridor, hallway",
            "options": [
                "もとの ところ",
                "～とか、～とか",
                "ろうか",
                "ならべます"
            ],
            "correctIndex": 2,
            "explanation": "「ろうか」 (廊下) means \"corridor, hallway\"."
        },
        {
            "question": "wall",
            "options": [
                "ブロードウェイ",
                "かべ",
                "ポスター",
                "おこさん"
            ],
            "correctIndex": 1,
            "explanation": "「かべ」 (壁) means \"wall\"."
        },
        {
            "question": "pond",
            "options": [
                "かたづけます",
                "いけ",
                "～ほど",
                "あんないしょ"
            ],
            "correctIndex": 1,
            "explanation": "「いけ」 (池) means \"pond\"."
        },
        {
            "question": "original place",
            "options": [
                "もとの ところ",
                "まとめます",
                "まんなか",
                "おこさん"
            ],
            "correctIndex": 0,
            "explanation": "「もとの ところ」 (元の 所) means \"original place\"."
        },
        {
            "question": "round, around",
            "options": [
                "はります",
                "ブロードウェイ",
                "～ほど",
                "まわり"
            ],
            "correctIndex": 3,
            "explanation": "「まわり」 (周り) means \"round, around\"."
        },
        {
            "question": "center",
            "options": [
                "あんないしょ",
                "つき",
                "まんなか",
                "すみ"
            ],
            "correctIndex": 2,
            "explanation": "「まんなか」 (真ん中) means \"center\"."
        },
        {
            "question": "corner",
            "options": [
                "もどします",
                "そのままに します",
                "すみ",
                "きめます"
            ],
            "correctIndex": 2,
            "explanation": "「すみ」 (隅) means \"corner\"."
        },
        {
            "question": "still",
            "options": [
                "まだ",
                "ミーティング",
                "ひじょうぶくろ",
                "あんないしょ"
            ],
            "correctIndex": 0,
            "explanation": "「まだ」 means \"still\"."
        },
        {
            "question": "rucksack",
            "options": [
                "ゆめを みます",
                "まだ",
                "かざります",
                "リュック"
            ],
            "correctIndex": 3,
            "explanation": "「リュック」 means \"rucksack\"."
        },
        {
            "question": "emergency kit",
            "options": [
                "ごくろうさま。",
                "ひじょうぶくろ",
                "もどします",
                "まわり"
            ],
            "correctIndex": 1,
            "explanation": "「ひじょうぶくろ」 (非常袋) means \"emergency kit\"."
        },
        {
            "question": "emergency",
            "options": [
                "もどします",
                "ごみばこ",
                "ひじょうじ",
                "きめます"
            ],
            "correctIndex": 2,
            "explanation": "「ひじょうじ」 (非常時) means \"emergency\"."
        },
        {
            "question": "live",
            "options": [
                "にんぎょう",
                "せいかつします",
                "なにか ごきぼうが ありますか。",
                "～とか、～とか"
            ],
            "correctIndex": 1,
            "explanation": "「せいかつします」 (生活します) means \"live\"."
        },
        {
            "question": "torch, flashlight",
            "options": [
                "きぼう",
                "かいちゅうでんとう",
                "ガイドブック",
                "ミュージカル"
            ],
            "correctIndex": 1,
            "explanation": "「かいちゅうでんとう」 (懐中電灯) means \"torch, flashlight\"."
        },
        {
            "question": "～, ～, and so on",
            "options": [
                "ごくろうさま。",
                "かざります",
                "カレンダー",
                "～とか、～とか"
            ],
            "correctIndex": 3,
            "explanation": "「～とか、～とか」 means \"～, ～, and so on\"."
        },
        {
            "question": "round",
            "options": [
                "リュック",
                "つき",
                "まるい",
                "カレンダー"
            ],
            "correctIndex": 2,
            "explanation": "「まるい」 (丸い) means \"round\"."
        },
        {
            "question": "one ～, a certain ～",
            "options": [
                "ひきだし",
                "おしらせ",
                "じゅぎょう",
                "ある ～"
            ],
            "correctIndex": 3,
            "explanation": "「ある ～」 means \"one ～, a certain ～\"."
        },
        {
            "question": "dream",
            "options": [
                "すると",
                "かびん",
                "ゆめを みます",
                "すみ"
            ],
            "correctIndex": 2,
            "explanation": "「ゆめを みます」 (夢を 見ます) means \"dream\"."
        },
        {
            "question": "glad, happy",
            "options": [
                "かびん",
                "うれしい",
                "いや［な］",
                "かがみ"
            ],
            "correctIndex": 1,
            "explanation": "「うれしい」 means \"glad, happy\"."
        },
        {
            "question": "hateful, disagreeable",
            "options": [
                "かざります",
                "いや［な］",
                "きぼう",
                "せいかつします"
            ],
            "correctIndex": 1,
            "explanation": "「いや［な］」 (嫌［な］) means \"hateful, disagreeable\"."
        },
        {
            "question": "and, then",
            "options": [
                "すみ",
                "すると",
                "ひじょうぶくろ",
                "かけます"
            ],
            "correctIndex": 1,
            "explanation": "「すると」 means \"and, then\"."
        },
        {
            "question": "wake up",
            "options": [
                "かいちゅうでんとう",
                "なにか ごきぼうが ありますか。",
                "めが さめます",
                "よしゅうします"
            ],
            "correctIndex": 2,
            "explanation": "「めが さめます」 (目が 覚めます) means \"wake up\"."
        },
        {
            "question": "put things in order, tidy up",
            "options": [
                "きめます",
                "まわり",
                "もとの ところ",
                "かたづけます"
            ],
            "correctIndex": 3,
            "explanation": "「かたづけます」 (片付けます) means \"put things in order, tidy up\"."
        },
        {
            "question": "inform",
            "options": [
                "まるい",
                "げんかん",
                "しらせます",
                "うえます"
            ],
            "correctIndex": 2,
            "explanation": "「しらせます」 (知らせます) means \"inform\"."
        },
        {
            "question": "consult, discuss",
            "options": [
                "そうだんします",
                "まんなか",
                "かけます",
                "ごくろうさま。"
            ],
            "correctIndex": 0,
            "explanation": "「そうだんします」 (相談します) means \"consult, discuss\"."
        },
        {
            "question": "(someone else's) child",
            "options": [
                "うれしい",
                "おこさん",
                "ひきだし",
                "そのままに します"
            ],
            "correctIndex": 1,
            "explanation": "「おこさん」 (お子さん) means \"(someone else's) child\"."
        },
        {
            "question": "guide book",
            "options": [
                "かいちゅうでんとう",
                "まだ",
                "ごみばこ",
                "あんないしょ"
            ],
            "correctIndex": 3,
            "explanation": "「あんないしょ」 (案内書) means \"guide book\"."
        },
        {
            "question": "police box",
            "options": [
                "かいちゅうでんとう",
                "こうばん",
                "まわり",
                "ガイドブック"
            ],
            "correctIndex": 1,
            "explanation": "「こうばん」 (交番) means \"police box\"."
        },
        {
            "question": "about ～",
            "options": [
                "かびん",
                "ちきゅう",
                "つき",
                "～ほど"
            ],
            "correctIndex": 3,
            "explanation": "「～ほど」 means \"about ～\"."
        },
        {
            "question": "Thank you for your hard work. (used by a superior or older person to express appreciation for a subordinate's work)",
            "options": [
                "ごくろうさま。",
                "げんかん",
                "よていひょう",
                "ならべます"
            ],
            "correctIndex": 0,
            "explanation": "「ごくろうさま。」 (ご苦労さま。) means \"Thank you for your hard work. (used by a superior or older person to express appreciation for a subordinate's work)\"."
        },
        {
            "question": "hope, request",
            "options": [
                "よていひょう",
                "ガイドブック",
                "きぼう",
                "かびん"
            ],
            "correctIndex": 2,
            "explanation": "「きぼう」 (希望) means \"hope, request\"."
        },
        {
            "question": "Do you have any requests?",
            "options": [
                "おしらせ",
                "よてい",
                "しまいます",
                "なにか ごきぼうが ありますか。"
            ],
            "correctIndex": 3,
            "explanation": "「なにか ごきぼうが ありますか。」 (何か ご希望が ありますか。) means \"Do you have any requests?\"."
        },
        {
            "question": "musical",
            "options": [
                "せいかつします",
                "まんなか",
                "ミュージカル",
                "きめます"
            ],
            "correctIndex": 2,
            "explanation": "「ミュージカル」 means \"musical\"."
        },
        {
            "question": "That's a good idea./That sounds nice.",
            "options": [
                "～とか、～とか",
                "よてい",
                "それは いいですね。",
                "つき"
            ],
            "correctIndex": 2,
            "explanation": "「それは いいですね。」 means \"That's a good idea./That sounds nice.\"."
        },
        {
            "question": "Broadway",
            "options": [
                "ブロードウェイ",
                "ふくしゅうします",
                "もどします",
                "カレンダー"
            ],
            "correctIndex": 0,
            "explanation": "「ブロードウェイ」 means \"Broadway\"."
        },
        {
            "question": "moon",
            "options": [
                "つき",
                "かけます",
                "うれしい",
                "ちきゅう"
            ],
            "correctIndex": 0,
            "explanation": "「つき」 (月) means \"moon\"."
        },
        {
            "question": "earth",
            "options": [
                "ちきゅう",
                "すみ",
                "そうだんします",
                "よていひょう"
            ],
            "correctIndex": 0,
            "explanation": "「ちきゅう」 (地球) means \"earth\"."
        }
    ],
    "Lesson 31": [
        {
            "question": "continue",
            "options": [
                "つづけます",
                "とじます",
                "もうしこみます",
                "にゅうがくします［だいがくに～］"
            ],
            "correctIndex": 0,
            "explanation": "「つづけます」 (続けます) means \"continue\"."
        },
        {
            "question": "find",
            "options": [
                "きゅうけいします",
                "しぜん",
                "みつけます",
                "こどもたち"
            ],
            "correctIndex": 2,
            "explanation": "「みつけます」 (見つけます) means \"find\"."
        },
        {
            "question": "take [a holiday]",
            "options": [
                "つづけます",
                "とります［やすみを～］",
                "いや［な］",
                "ふつうの"
            ],
            "correctIndex": 1,
            "explanation": "「とります［やすみを～］」 (取ります［休みを～］) means \"take [a holiday]\"."
        },
        {
            "question": "take [an examination]",
            "options": [
                "えいがかん",
                "－ごう",
                "うけます［しけんを～］",
                "にゅうがくします［だいがくに～］"
            ],
            "correctIndex": 2,
            "explanation": "「うけます［しけんを～］」 (受けます［試験を～］) means \"take [an examination]\"."
        },
        {
            "question": "apply for, enter for",
            "options": [
                "もうしこみます",
                "しゅっせきします［かいぎに～］",
                "のこります",
                "つきに"
            ],
            "correctIndex": 0,
            "explanation": "「もうしこみます」 (申し込みます) means \"apply for, enter for\"."
        },
        {
            "question": "take a break, take a rest",
            "options": [
                "ピカソ",
                "こどもたち",
                "とかい",
                "きゅうけいします"
            ],
            "correctIndex": 3,
            "explanation": "「きゅうけいします」 (休憩します) means \"take a break, take a rest\"."
        },
        {
            "question": "consecutive holidays",
            "options": [
                "のぞみ",
                "れんきゅう",
                "バリ",
                "うえのこうえん"
            ],
            "correctIndex": 1,
            "explanation": "「れんきゅう」 (連休) means \"consecutive holidays\"."
        },
        {
            "question": "essay, composition",
            "options": [
                "さくぶん",
                "にゅうがくします［だいがくに～］",
                "ピカソ",
                "だいがくいん"
            ],
            "correctIndex": 0,
            "explanation": "「さくぶん」 (作文) means \"essay, composition\"."
        },
        {
            "question": "announcement, presentation (～します : announce)",
            "options": [
                "かえり",
                "はっぴょう",
                "じゆうに",
                "とじます"
            ],
            "correctIndex": 1,
            "explanation": "「はっぴょう」 (発表) means \"announcement, presentation (～します : announce)\"."
        },
        {
            "question": "exhibition",
            "options": [
                "てんらんかい",
                "きゅうけいします",
                "えいがかん",
                "のこります"
            ],
            "correctIndex": 0,
            "explanation": "「てんらんかい」 (展覧会) means \"exhibition\"."
        },
        {
            "question": "wedding ceremony",
            "options": [
                "きゅうけいします",
                "ほんしゃ",
                "けっこんしき",
                "だれか"
            ],
            "correctIndex": 2,
            "explanation": "「けっこんしき」 (結婚式) means \"wedding ceremony\"."
        },
        {
            "question": "funeral",
            "options": [
                "［お］そうしき",
                "ピカソ",
                "してん",
                "しんこうべ"
            ],
            "correctIndex": 0,
            "explanation": "「［お］そうしき」 (［お］葬式) means \"funeral\"."
        },
        {
            "question": "ceremony",
            "options": [
                "しき",
                "うけます［しけんを～］",
                "さくぶん",
                "どうぶつえん"
            ],
            "correctIndex": 0,
            "explanation": "「しき」 (式) means \"ceremony\"."
        },
        {
            "question": "head office",
            "options": [
                "ほんしゃ",
                "ふつうの",
                "どうぶつえん",
                "バリ"
            ],
            "correctIndex": 0,
            "explanation": "「ほんしゃ」 (本社) means \"head office\"."
        },
        {
            "question": "branch office",
            "options": [
                "さくぶん",
                "しぜん",
                "［お］そうしき",
                "してん"
            ],
            "correctIndex": 3,
            "explanation": "「してん」 (支店) means \"branch office\"."
        },
        {
            "question": "church",
            "options": [
                "のぞみ",
                "じゆうに",
                "せかいじゅう",
                "きょうかい"
            ],
            "correctIndex": 3,
            "explanation": "「きょうかい」 (教会) means \"church\"."
        },
        {
            "question": "graduate school",
            "options": [
                "せかいじゅう",
                "こどもたち",
                "ふつうの",
                "だいがくいん"
            ],
            "correctIndex": 3,
            "explanation": "「だいがくいん」 (大学院) means \"graduate school\"."
        },
        {
            "question": "zoo",
            "options": [
                "はっぴょう",
                "のこります",
                "どうぶつえん",
                "［お］そうしき"
            ],
            "correctIndex": 2,
            "explanation": "「どうぶつえん」 (動物園) means \"zoo\"."
        },
        {
            "question": "hot spring, spa",
            "options": [
                "とかい",
                "にゅうがくします［だいがくに～］",
                "せかいじゅう",
                "おんせん"
            ],
            "correctIndex": 3,
            "explanation": "「おんせん」 (温泉) means \"hot spring, spa\"."
        },
        {
            "question": "return",
            "options": [
                "かえり",
                "［お］そうしき",
                "ピカソ",
                "うえのこうえん"
            ],
            "correctIndex": 0,
            "explanation": "「かえり」 (帰り) means \"return\"."
        },
        {
            "question": "(someone else's) child",
            "options": [
                "おきゃく［さん］",
                "うけます［しけんを～］",
                "ふつうの",
                "おこさん"
            ],
            "correctIndex": 3,
            "explanation": "「おこさん」 (お子さん) means \"(someone else's) child\"."
        },
        {
            "question": "(train number, typhoon number, etc.)",
            "options": [
                "－ごう",
                "とります［やすみを～］",
                "はっぴょう",
                "かえり"
            ],
            "correctIndex": 0,
            "explanation": "「－ごう」 (－号) means \"(train number, typhoon number, etc.)\"."
        },
        {
            "question": "place toward ～, direction of ～",
            "options": [
                "てんらんかい",
                "さくぶん",
                "～の ほう",
                "おんせん"
            ],
            "correctIndex": 2,
            "explanation": "「～の ほう」 (～の 方) means \"place toward ～, direction of ～\"."
        },
        {
            "question": "the whole time",
            "options": [
                "しき",
                "ずっと",
                "とじます",
                "ふつうの"
            ],
            "correctIndex": 1,
            "explanation": "「ずっと」 means \"the whole time\"."
        },
        {
            "question": "Bali (Indonesian island)",
            "options": [
                "きょうかい",
                "うけます［しけんを～］",
                "だれか",
                "バリ"
            ],
            "correctIndex": 3,
            "explanation": "「バリ」 means \"Bali (Indonesian island)\"."
        },
        {
            "question": "Pablo Picasso, Spanish painter (1881-1973)",
            "options": [
                "のぞみ",
                "してん",
                "ピカソ",
                "こどもたち"
            ],
            "correctIndex": 2,
            "explanation": "「ピカソ」 means \"Pablo Picasso, Spanish painter (1881-1973)\"."
        },
        {
            "question": "name of a Shinkansen train (～４２号 : Nozomi Superexpress No.42)",
            "options": [
                "のぞみ",
                "おんせん",
                "のこります",
                "いや［な］"
            ],
            "correctIndex": 0,
            "explanation": "「のぞみ」 means \"name of a Shinkansen train (～４２号 : Nozomi Superexpress No.42)\"."
        },
        {
            "question": "name of a station in Hyogo prefecture",
            "options": [
                "もうしこみます",
                "しんこうべ",
                "れんきゅう",
                "ほんしゃ"
            ],
            "correctIndex": 1,
            "explanation": "「しんこうべ」 (新神戸) means \"name of a station in Hyogo prefecture\"."
        },
        {
            "question": "remain, be left, stay behind",
            "options": [
                "のこります",
                "おんせん",
                "つきに",
                "バリ"
            ],
            "correctIndex": 0,
            "explanation": "「のこります」 (残ります) means \"remain, be left, stay behind\"."
        },
        {
            "question": "entrance examination",
            "options": [
                "にゅうがくしけん",
                "きが つきます",
                "そつぎょうします",
                "いや［な］"
            ],
            "correctIndex": 0,
            "explanation": "「にゅうがくしけん」 (入学試験) means \"entrance examination\"."
        },
        {
            "question": "per month",
            "options": [
                "ふつうの",
                "つきに",
                "はっぴょう",
                "てんらんかい"
            ],
            "correctIndex": 1,
            "explanation": "「つきに」 (月に) means \"per month\"."
        },
        {
            "question": "village",
            "options": [
                "しゅっせきします［かいぎに～］",
                "うけます［しけんを～］",
                "－ごう",
                "むら"
            ],
            "correctIndex": 3,
            "explanation": "「むら」 (村) means \"village\"."
        },
        {
            "question": "graduate",
            "options": [
                "しき",
                "そつぎょうします",
                "きが つきます",
                "かえり"
            ],
            "correctIndex": 1,
            "explanation": "「そつぎょうします」 (卒業します) means \"graduate\"."
        },
        {
            "question": "movie theater, cinema",
            "options": [
                "だいがくいん",
                "えいがかん",
                "さくぶん",
                "もうしこみます"
            ],
            "correctIndex": 1,
            "explanation": "「えいがかん」 (映画館) means \"movie theater, cinema\"."
        },
        {
            "question": "hateful, disagreeable",
            "options": [
                "けっこんしき",
                "つきに",
                "いや［な］",
                "はっぴょう"
            ],
            "correctIndex": 2,
            "explanation": "「いや［な］」 (嫌［な］) means \"hateful, disagreeable\"."
        },
        {
            "question": "sky",
            "options": [
                "どうぶつえん",
                "れんきゅう",
                "そら",
                "しぜん"
            ],
            "correctIndex": 2,
            "explanation": "「そら」 (空) means \"sky\"."
        },
        {
            "question": "close",
            "options": [
                "すばらしさ",
                "とじます",
                "きょうかい",
                "けっこんしき"
            ],
            "correctIndex": 1,
            "explanation": "「とじます」 (閉じます) means \"close\"."
        },
        {
            "question": "city",
            "options": [
                "しんこうべ",
                "そら",
                "とかい",
                "きゅうけいします"
            ],
            "correctIndex": 2,
            "explanation": "「とかい」 (都会) means \"city\"."
        },
        {
            "question": "children",
            "options": [
                "てんらんかい",
                "こどもたち",
                "だいがくいん",
                "はっぴょう"
            ],
            "correctIndex": 1,
            "explanation": "「こどもたち」 (子どもたち) means \"children\"."
        },
        {
            "question": "freely",
            "options": [
                "とじます",
                "てんらんかい",
                "じゆうに",
                "はじまります［しきが～］"
            ],
            "correctIndex": 2,
            "explanation": "「じゆうに」 (自由に) means \"freely\"."
        },
        {
            "question": "[a ceremony] begin, start",
            "options": [
                "はじまります［しきが～］",
                "どうぶつえん",
                "だれか",
                "きが つきます"
            ],
            "correctIndex": 0,
            "explanation": "「はじまります［しきが～］」 (始まります［式が～］) means \"[a ceremony] begin, start\"."
        },
        {
            "question": "enter [a university]",
            "options": [
                "インターネット",
                "にゅうがくします［だいがくに～］",
                "さくぶん",
                "すばらしさ"
            ],
            "correctIndex": 1,
            "explanation": "「にゅうがくします［だいがくに～］」 (入学します［大学に～］) means \"enter [a university]\"."
        },
        {
            "question": "attend [a meeting]",
            "options": [
                "ふつうの",
                "しゅっせきします［かいぎに～］",
                "はっぴょう",
                "にゅうがくしけん"
            ],
            "correctIndex": 1,
            "explanation": "「しゅっせきします［かいぎに～］」 (出席します［会議に～］) means \"attend [a meeting]\"."
        },
        {
            "question": "visitor, guest, customer, client",
            "options": [
                "おきゃく［さん］",
                "はじまります［しきが～］",
                "うけます［しけんを～］",
                "どうぶつえん"
            ],
            "correctIndex": 0,
            "explanation": "「おきゃく［さん］」 (お客［さん］) means \"visitor, guest, customer, client\"."
        },
        {
            "question": "somebody",
            "options": [
                "してん",
                "バリ",
                "［お］そうしき",
                "だれか"
            ],
            "correctIndex": 3,
            "explanation": "「だれか」 (誰か) means \"somebody\"."
        },
        {
            "question": "Ueno Park (in Tokyo)",
            "options": [
                "こどもたち",
                "うえのこうえん",
                "おこさん",
                "～の ほう"
            ],
            "correctIndex": 1,
            "explanation": "「うえのこうえん」 (上野公園) means \"Ueno Park (in Tokyo)\"."
        },
        {
            "question": "ordinary, common, usual",
            "options": [
                "そら",
                "－ごう",
                "ほんしゃ",
                "ふつうの"
            ],
            "correctIndex": 3,
            "explanation": "「ふつうの」 (普通の) means \"ordinary, common, usual\"."
        },
        {
            "question": "Internet",
            "options": [
                "のぞみ",
                "インターネット",
                "［お］そうしき",
                "うえのこうえん"
            ],
            "correctIndex": 1,
            "explanation": "「インターネット」 means \"Internet\"."
        },
        {
            "question": "all over the world",
            "options": [
                "かえり",
                "せかいじゅう",
                "ふつうの",
                "もうしこみます"
            ],
            "correctIndex": 1,
            "explanation": "「せかいじゅう」 (世界中) means \"all over the world\"."
        },
        {
            "question": "gather",
            "options": [
                "いや［な］",
                "おんせん",
                "こどもたち",
                "あつまります"
            ],
            "correctIndex": 3,
            "explanation": "「あつまります」 (集まります) means \"gather\"."
        },
        {
            "question": "beautiful",
            "options": [
                "しゅっせきします［かいぎに～］",
                "うけます［しけんを～］",
                "うつくしい",
                "ふつうの"
            ],
            "correctIndex": 2,
            "explanation": "「うつくしい」 (美しい) means \"beautiful\"."
        },
        {
            "question": "nature",
            "options": [
                "うえのこうえん",
                "しぜん",
                "はっぴょう",
                "みつけます"
            ],
            "correctIndex": 1,
            "explanation": "「しぜん」 (自然) means \"nature\"."
        },
        {
            "question": "goodness, virtue",
            "options": [
                "とじます",
                "かえり",
                "すばらしさ",
                "むら"
            ],
            "correctIndex": 2,
            "explanation": "「すばらしさ」 means \"goodness, virtue\"."
        },
        {
            "question": "notice, become aware of",
            "options": [
                "むら",
                "れんきゅう",
                "きが つきます",
                "うけます［しけんを～］"
            ],
            "correctIndex": 2,
            "explanation": "「きが つきます」 (気が つきます) means \"notice, become aware of\"."
        }
    ],
    "Lesson 32": [
        {
            "question": "(take) exercise",
            "options": [
                "みなみ",
                "おかしい",
                "うんどうします",
                "おうしざ"
            ],
            "correctIndex": 2,
            "explanation": "「うんどうします」 (運動します) means \"(take) exercise\"."
        },
        {
            "question": "succeed",
            "options": [
                "はれます",
                "ひきます［かぜを～］",
                "やけど",
                "せいこうします"
            ],
            "correctIndex": 3,
            "explanation": "「せいこうします」 (成功します) means \"succeed\"."
        },
        {
            "question": "fail [an examination]",
            "options": [
                "かぜ",
                "しっぱいします［しけんに～］",
                "ひがし",
                "そら"
            ],
            "correctIndex": 1,
            "explanation": "「しっぱいします［しけんに～］」 (失敗します［試験に～］) means \"fail [an examination]\"."
        },
        {
            "question": "pass [an examination]",
            "options": [
                "ごうかくします［しけんに～］",
                "ほしうらない",
                "じゅうぶん［な］",
                "うるさい"
            ],
            "correctIndex": 0,
            "explanation": "「ごうかくします［しけんに～］」 (合格します［試験に～］) means \"pass [an examination]\"."
        },
        {
            "question": "[rain] stop",
            "options": [
                "い",
                "いし",
                "しっぱいします［しけんに～］",
                "やみます［あめが～］"
            ],
            "correctIndex": 3,
            "explanation": "「やみます［あめが～］」 (やみます［雨が～］) means \"[rain] stop\"."
        },
        {
            "question": "clear up",
            "options": [
                "ストレス",
                "うんどうします",
                "つき",
                "はれます"
            ],
            "correctIndex": 3,
            "explanation": "「はれます」 (晴れます) means \"clear up\"."
        },
        {
            "question": "get cloudy",
            "options": [
                "けんこう",
                "チーム",
                "うんどうします",
                "くもります"
            ],
            "correctIndex": 3,
            "explanation": "「くもります」 (曇ります) means \"get cloudy\"."
        },
        {
            "question": "[high temperature/fever] continue",
            "options": [
                "でます［しあいに～］",
                "ごうかくします［しけんに～］",
                "つづきます［ねつが～］",
                "かぜ"
            ],
            "correctIndex": 2,
            "explanation": "「つづきます［ねつが～］」 (続づきます［熱が～］) means \"[high temperature/fever] continue\"."
        },
        {
            "question": "catch [a cold]",
            "options": [
                "こいびと",
                "あたります［たからくじが～］",
                "ひきます［かぜを～］",
                "ゆっくり します"
            ],
            "correctIndex": 2,
            "explanation": "「ひきます［かぜを～］」 means \"catch [a cold]\"."
        },
        {
            "question": "cool",
            "options": [
                "おかしい",
                "ひやします",
                "いし",
                "おうしざ"
            ],
            "correctIndex": 1,
            "explanation": "「ひやします」 (冷やします) means \"cool\"."
        },
        {
            "question": "[a road] get crowded",
            "options": [
                "こみます［みちが～］",
                "エンジン",
                "たいよう",
                "はれます"
            ],
            "correctIndex": 0,
            "explanation": "「こみます［みちが～］」 (込みます［道が～］) means \"[a road] get crowded\"."
        },
        {
            "question": "[a road] get less crowded",
            "options": [
                "けが",
                "すきます［みちが～］",
                "なおります［こしょうが～］",
                "はれます"
            ],
            "correctIndex": 1,
            "explanation": "「すきます［みちが～］」 (すきます［道が～］) means \"[a road] get less crowded\"."
        },
        {
            "question": "participate [in the match]",
            "options": [
                "きた",
                "やみます［あめが～］",
                "でます［しあいに～］",
                "なおります［こしょうが～］"
            ],
            "correctIndex": 2,
            "explanation": "「でます［しあいに～］」 (出ます［試合に～］) means \"participate [in the match]\"."
        },
        {
            "question": "attend [a party]",
            "options": [
                "あたります［たからくじが～］",
                "でます［パーティーに～］",
                "きた",
                "おうしざ"
            ],
            "correctIndex": 1,
            "explanation": "「でます［パーティーに～］」 (出ます［パーティーに～］) means \"attend [a party]\"."
        },
        {
            "question": "overdo things",
            "options": [
                "むりを します",
                "あんなに",
                "い",
                "かぜ"
            ],
            "correctIndex": 0,
            "explanation": "「むりを します」 (無理を します) means \"overdo things\"."
        },
        {
            "question": "enough, sufficient",
            "options": [
                "おうしざ",
                "せいこうします",
                "ほしうらない",
                "じゅうぶん［な］"
            ],
            "correctIndex": 3,
            "explanation": "「じゅうぶん［な］」 (十分［な］) means \"enough, sufficient\"."
        },
        {
            "question": "strange, funny",
            "options": [
                "こんや",
                "うんどうします",
                "おかしい",
                "すきます［みちが～］"
            ],
            "correctIndex": 2,
            "explanation": "「おかしい」 means \"strange, funny\"."
        },
        {
            "question": "noisy",
            "options": [
                "たからくじ",
                "いし",
                "うるさい",
                "でます［しあいに～］"
            ],
            "correctIndex": 2,
            "explanation": "「うるさい」 means \"noisy\"."
        },
        {
            "question": "doctor",
            "options": [
                "インフルエンザ",
                "せんせい",
                "ゆうがた",
                "やみます［あめが～］"
            ],
            "correctIndex": 1,
            "explanation": "「せんせい」 (先生) means \"doctor\"."
        },
        {
            "question": "burning (～を します : get burned)",
            "options": [
                "いし",
                "すきます［みちが～］",
                "れんあい",
                "やけど"
            ],
            "correctIndex": 3,
            "explanation": "「やけど」 means \"burning (～を します : get burned)\"."
        },
        {
            "question": "injury (～を します : get injured)",
            "options": [
                "ひきます［かぜを～］",
                "でます［パーティーに～］",
                "けが",
                "こまります"
            ],
            "correctIndex": 2,
            "explanation": "「けが」 means \"injury (～を します : get injured)\"."
        },
        {
            "question": "cough (～を します／～が でます : have a cough)",
            "options": [
                "［お］かねもち",
                "インフルエンザ",
                "せき",
                "いし"
            ],
            "correctIndex": 2,
            "explanation": "「せき」 means \"cough (～を します／～が でます : have a cough)\"."
        },
        {
            "question": "influenza",
            "options": [
                "おかしい",
                "たからくじ",
                "インフルエンザ",
                "けんこう"
            ],
            "correctIndex": 2,
            "explanation": "「インフルエンザ」 means \"influenza\"."
        },
        {
            "question": "sky",
            "options": [
                "むりを します",
                "そら",
                "こまります",
                "ひきます［かぜを～］"
            ],
            "correctIndex": 1,
            "explanation": "「そら」 (空) means \"sky\"."
        },
        {
            "question": "sun",
            "options": [
                "くもります",
                "こまります",
                "たいよう",
                "こみます［みちが～］"
            ],
            "correctIndex": 2,
            "explanation": "「たいよう」 (太陽) means \"sun\"."
        },
        {
            "question": "star",
            "options": [
                "ゆうがた",
                "やみます［あめが～］",
                "もどります",
                "ほし"
            ],
            "correctIndex": 3,
            "explanation": "「ほし」 (星) means \"star\"."
        },
        {
            "question": "wind",
            "options": [
                "ヨーロッパ",
                "かぜ",
                "せいこうします",
                "すきます［みちが～］"
            ],
            "correctIndex": 1,
            "explanation": "「かぜ」 (風) means \"wind\"."
        },
        {
            "question": "east",
            "options": [
                "ひやします",
                "おうしざ",
                "はれます",
                "ひがし"
            ],
            "correctIndex": 3,
            "explanation": "「ひがし」 (東) means \"east\"."
        },
        {
            "question": "west",
            "options": [
                "おうしざ",
                "げんき",
                "すいどう",
                "にし"
            ],
            "correctIndex": 3,
            "explanation": "「にし」 (西) means \"west\"."
        },
        {
            "question": "south",
            "options": [
                "［お］かねもち",
                "みなみ",
                "こんや",
                "おそく"
            ],
            "correctIndex": 1,
            "explanation": "「みなみ」 (南) means \"south\"."
        },
        {
            "question": "north",
            "options": [
                "たからくじ",
                "せき",
                "［お］かねもち",
                "きた"
            ],
            "correctIndex": 3,
            "explanation": "「きた」 (北) means \"north\"."
        },
        {
            "question": "international ～",
            "options": [
                "こいびと",
                "むりを します",
                "こくさい～",
                "くもります"
            ],
            "correctIndex": 2,
            "explanation": "「こくさい～」 (国際～) means \"international ～\"."
        },
        {
            "question": "faucet, tap, water supply",
            "options": [
                "せいこうします",
                "すいどう",
                "でます［パーティーに～］",
                "けんこう"
            ],
            "correctIndex": 1,
            "explanation": "「すいどう」 (水道) means \"faucet, tap, water supply\"."
        },
        {
            "question": "engine",
            "options": [
                "もしかしたら",
                "エンジン",
                "ひきます［かぜを～］",
                "くもります"
            ],
            "correctIndex": 1,
            "explanation": "「エンジン」 means \"engine\"."
        },
        {
            "question": "team",
            "options": [
                "もどります",
                "ふきます［かぜが～］",
                "チーム",
                "たいよう"
            ],
            "correctIndex": 2,
            "explanation": "「チーム」 means \"team\"."
        },
        {
            "question": "this evening",
            "options": [
                "つき",
                "こんや",
                "しんぱい［な］",
                "みなみ"
            ],
            "correctIndex": 1,
            "explanation": "「こんや」 (今夜) means \"this evening\"."
        },
        {
            "question": "late afternoon",
            "options": [
                "せき",
                "まえ",
                "ほし",
                "ゆうがた"
            ],
            "correctIndex": 3,
            "explanation": "「ゆうがた」 (夕方) means \"late afternoon\"."
        },
        {
            "question": "a time in the past, before",
            "options": [
                "ほし",
                "まえ",
                "やけど",
                "エンジン"
            ],
            "correctIndex": 1,
            "explanation": "「まえ」 means \"a time in the past, before\"."
        },
        {
            "question": "late (time)",
            "options": [
                "かぜ",
                "い",
                "おそく",
                "せんせい"
            ],
            "correctIndex": 2,
            "explanation": "「おそく」 (遅く) means \"late (time)\"."
        },
        {
            "question": "this (much, etc.)",
            "options": [
                "おかしい",
                "こんなに",
                "でます［パーティーに～］",
                "にし"
            ],
            "correctIndex": 1,
            "explanation": "「こんなに」 means \"this (much, etc.)\"."
        },
        {
            "question": "that (much, etc.) (concerning a matter related to the listener)",
            "options": [
                "い",
                "こんや",
                "せき",
                "そんなに"
            ],
            "correctIndex": 3,
            "explanation": "「そんなに」 means \"that (much, etc.) (concerning a matter related to the listener)\"."
        },
        {
            "question": "that (much, etc.) (concerning a matter not related to the speaker or the listener)",
            "options": [
                "かぜ",
                "ほしうらない",
                "あんなに",
                "ふきます［かぜが～］"
            ],
            "correctIndex": 2,
            "explanation": "「あんなに」 means \"that (much, etc.) (concerning a matter not related to the speaker or the listener)\"."
        },
        {
            "question": "Europe",
            "options": [
                "はたらきすぎ",
                "もどります",
                "ヨーロッパ",
                "げんき"
            ],
            "correctIndex": 2,
            "explanation": "「ヨーロッパ」 means \"Europe\"."
        },
        {
            "question": "vigour",
            "options": [
                "でます［パーティーに～］",
                "げんき",
                "けんこう",
                "そんなに"
            ],
            "correctIndex": 1,
            "explanation": "「げんき」 (元気) means \"vigour\"."
        },
        {
            "question": "stomach",
            "options": [
                "れんあい",
                "い",
                "けが",
                "ストレス"
            ],
            "correctIndex": 1,
            "explanation": "「い」 (胃) means \"stomach\"."
        },
        {
            "question": "stress",
            "options": [
                "やけど",
                "ストレス",
                "ほしうらない",
                "おかしい"
            ],
            "correctIndex": 1,
            "explanation": "「ストレス」 means \"stress\"."
        },
        {
            "question": "I'm sorry to hear that.",
            "options": [
                "すいどう",
                "それは いけませんね。",
                "ほしうらない",
                "ひきます［かぜを～］"
            ],
            "correctIndex": 1,
            "explanation": "「それは いけませんね。」 means \"I'm sorry to hear that.\"."
        },
        {
            "question": "horoscope",
            "options": [
                "にし",
                "こんなに",
                "ほしうらない",
                "うんどうします"
            ],
            "correctIndex": 2,
            "explanation": "「ほしうらない」 (星占い) means \"horoscope\"."
        },
        {
            "question": "Taurus",
            "options": [
                "なおります［びょうきが～］",
                "はたらきすぎ",
                "にし",
                "おうしざ"
            ],
            "correctIndex": 3,
            "explanation": "「おうしざ」 (牡牛座) means \"Taurus\"."
        },
        {
            "question": "overworking",
            "options": [
                "はたらきすぎ",
                "ごうかくします［しけんに～］",
                "あんなに",
                "にし"
            ],
            "correctIndex": 0,
            "explanation": "「はたらきすぎ」 (働きすぎ) means \"overworking\"."
        },
        {
            "question": "be in trouble, have a problem",
            "options": [
                "こまります",
                "せいこうします",
                "こくさい～",
                "けんこう"
            ],
            "correctIndex": 0,
            "explanation": "「こまります」 (困ります) means \"be in trouble, have a problem\"."
        },
        {
            "question": "lottery",
            "options": [
                "おうしざ",
                "ひきます［かぜを～］",
                "オリンピック",
                "たからくじ"
            ],
            "correctIndex": 3,
            "explanation": "「たからくじ」 (宝くじ) means \"lottery\"."
        },
        {
            "question": "win [a lottery]",
            "options": [
                "まえ",
                "あたります［たからくじが～］",
                "やけど",
                "じゅうぶん［な］"
            ],
            "correctIndex": 1,
            "explanation": "「あたります［たからくじが～］」 (当たります［宝くじが～］) means \"win [a lottery]\"."
        },
        {
            "question": "health",
            "options": [
                "なおります［こしょうが～］",
                "ゆうがた",
                "やみます［あめが～］",
                "けんこう"
            ],
            "correctIndex": 3,
            "explanation": "「けんこう」 (健康) means \"health\"."
        },
        {
            "question": "romantic love",
            "options": [
                "こまります",
                "れんあい",
                "あたります［たからくじが～］",
                "たいよう"
            ],
            "correctIndex": 1,
            "explanation": "「れんあい」 (恋愛) means \"romantic love\"."
        },
        {
            "question": "sweetheart, boyfriend, girlfriend",
            "options": [
                "つき",
                "はれます",
                "みなみ",
                "こいびと"
            ],
            "correctIndex": 3,
            "explanation": "「こいびと」 (恋人) means \"sweetheart, boyfriend, girlfriend\"."
        },
        {
            "question": "something lucky",
            "options": [
                "こいびと",
                "エンジン",
                "せき",
                "ラッキーアイテム"
            ],
            "correctIndex": 3,
            "explanation": "「ラッキーアイテム」 means \"something lucky\"."
        },
        {
            "question": "stone",
            "options": [
                "すいどう",
                "けんこう",
                "せき",
                "いし"
            ],
            "correctIndex": 3,
            "explanation": "「いし」 (石) means \"stone\"."
        },
        {
            "question": "return",
            "options": [
                "もどります",
                "はたらきすぎ",
                "せんせい",
                "［お］かねもち"
            ],
            "correctIndex": 0,
            "explanation": "「もどります」 (戻ります) means \"return\"."
        },
        {
            "question": "[wind] blow",
            "options": [
                "ふきます［かぜが～］",
                "はたらきすぎ",
                "あたります［たからくじが～］",
                "そんなに"
            ],
            "correctIndex": 0,
            "explanation": "「ふきます［かぜが～］」 (吹きます［風が～］) means \"[wind] blow\"."
        },
        {
            "question": "recover from [sickness], get well",
            "options": [
                "そら",
                "こみます［みちが～］",
                "なおります［びょうきが～］",
                "かぜ"
            ],
            "correctIndex": 2,
            "explanation": "「なおります［びょうきが～］」 (治ります［病気が～］) means \"recover from [sickness], get well\"."
        },
        {
            "question": "be fixed, be repaired",
            "options": [
                "おうしざ",
                "げんき",
                "インフルエンザ",
                "なおります［こしょうが～］"
            ],
            "correctIndex": 3,
            "explanation": "「なおります［こしょうが～］」 (直ります［故障が～］) means \"be fixed, be repaired\"."
        },
        {
            "question": "worried, anxious",
            "options": [
                "ラッキーアイテム",
                "せき",
                "しんぱい［な］",
                "ストレス"
            ],
            "correctIndex": 2,
            "explanation": "「しんぱい［な］」 (心配［な］) means \"worried, anxious\"."
        },
        {
            "question": "moon",
            "options": [
                "うるさい",
                "つき",
                "こくさい～",
                "せいこうします"
            ],
            "correctIndex": 1,
            "explanation": "「つき」 (月) means \"moon\"."
        },
        {
            "question": "possibly, perhaps",
            "options": [
                "もしかしたら",
                "いし",
                "そら",
                "あんなに"
            ],
            "correctIndex": 0,
            "explanation": "「もしかしたら」 means \"possibly, perhaps\"."
        },
        {
            "question": "Olympic Games",
            "options": [
                "オリンピック",
                "あたります［たからくじが～］",
                "そら",
                "せんせい"
            ],
            "correctIndex": 0,
            "explanation": "「オリンピック」 means \"Olympic Games\"."
        },
        {
            "question": "take one's time",
            "options": [
                "こまります",
                "たからくじ",
                "ゆっくり します",
                "おそく"
            ],
            "correctIndex": 2,
            "explanation": "「ゆっくり します」 means \"take one's time\"."
        },
        {
            "question": "rich person",
            "options": [
                "おうしざ",
                "ひやします",
                "［お］かねもち",
                "こんや"
            ],
            "correctIndex": 2,
            "explanation": "「［お］かねもち」 (［お］金持ち) means \"rich person\"."
        }
    ],
    "Lesson 33": [
        {
            "question": "run away",
            "options": [
                "しようちゅう",
                "あいさつ",
                "だめ［な］",
                "にげます"
            ],
            "correctIndex": 3,
            "explanation": "「にげます」 (逃げます) means \"run away\"."
        },
        {
            "question": "make a noise",
            "options": [
                "るす",
                "たすけあいます",
                "さわぎます",
                "どういう ～"
            ],
            "correctIndex": 2,
            "explanation": "「さわぎます」 (騒ぎます) means \"make a noise\"."
        },
        {
            "question": "give up",
            "options": [
                "おなじ",
                "みじかく",
                "～ほど",
                "あきらめます"
            ],
            "correctIndex": 3,
            "explanation": "「あきらめます」 means \"give up\"."
        },
        {
            "question": "throw",
            "options": [
                "あげます",
                "なげます",
                "なくなります",
                "つたえます"
            ],
            "correctIndex": 1,
            "explanation": "「なげます」 (投げます) means \"throw\"."
        },
        {
            "question": "keep, follow, obey",
            "options": [
                "どういう ～",
                "あいて",
                "ファイト",
                "まもります"
            ],
            "correctIndex": 3,
            "explanation": "「まもります」 (守ります) means \"keep, follow, obey\"."
        },
        {
            "question": "[a ceremony] begin, start",
            "options": [
                "［お］いわい",
                "きゅうよう",
                "なくなります",
                "はじまります［しきが～］"
            ],
            "correctIndex": 3,
            "explanation": "「はじまります［しきが～］」 (始まります［式が～］) means \"[a ceremony] begin, start\"."
        },
        {
            "question": "attend [a meeting]",
            "options": [
                "ちゅういします［くるまに～］",
                "きゅうよう",
                "しゅっせきします［かいぎに～］",
                "また"
            ],
            "correctIndex": 2,
            "explanation": "「しゅっせきします［かいぎに～］」 (出席します［会議に～］) means \"attend [a meeting]\"."
        },
        {
            "question": "convey",
            "options": [
                "きもち",
                "つたえます",
                "たすけあいます",
                "もともと"
            ],
            "correctIndex": 1,
            "explanation": "「つたえます」 (伝えます) means \"convey\"."
        },
        {
            "question": "be careful [of the cars]",
            "options": [
                "ひじょうぐち",
                "ちゅうしゃいはん",
                "さわぎます",
                "ちゅういします［くるまに～］"
            ],
            "correctIndex": 3,
            "explanation": "「ちゅういします［くるまに～］」 (注意します［車に～］) means \"be careful [of the cars]\"."
        },
        {
            "question": "be away [from one's desk]",
            "options": [
                "おきます",
                "はずします［せきを～］",
                "のみほうだい",
                "はじまります［しきが～］"
            ],
            "correctIndex": 1,
            "explanation": "「はずします［せきを～］」 (外します［席を～］) means \"be away [from one's desk]\"."
        },
        {
            "question": "come back, return",
            "options": [
                "でぐち",
                "えいぎょうちゅう",
                "ひとびと",
                "もどります"
            ],
            "correctIndex": 3,
            "explanation": "「もどります」 (戻ります) means \"come back, return\"."
        },
        {
            "question": "have [a telephone call]",
            "options": [
                "でぐち",
                "さわぎます",
                "あります［でんわが～］",
                "しようきんし"
            ],
            "correctIndex": 2,
            "explanation": "「あります［でんわが～］」 (あります［電話が～］) means \"have [a telephone call]\"."
        },
        {
            "question": "recycle",
            "options": [
                "～いない",
                "おきます",
                "きゅうよう",
                "リサイクルします"
            ],
            "correctIndex": 3,
            "explanation": "「リサイクルします」 means \"recycle\"."
        },
        {
            "question": "no good, not permitted, impossible",
            "options": [
                "だめ［な］",
                "にげます",
                "マーク",
                "キトク"
            ],
            "correctIndex": 0,
            "explanation": "「だめ［な］」 means \"no good, not permitted, impossible\"."
        },
        {
            "question": "same",
            "options": [
                "なくなります",
                "おなじ",
                "みじかく",
                "もどります"
            ],
            "correctIndex": 1,
            "explanation": "「おなじ」 (同じ) means \"same\"."
        },
        {
            "question": "police (station)",
            "options": [
                "もともと",
                "そりゃあ",
                "けいさつ",
                "じしん"
            ],
            "correctIndex": 2,
            "explanation": "「けいさつ」 (警察) means \"police (station)\"."
        },
        {
            "question": "seat",
            "options": [
                "はじまります［しきが～］",
                "きゅうよう",
                "せき",
                "きそく"
            ],
            "correctIndex": 2,
            "explanation": "「せき」 (席) means \"seat\"."
        },
        {
            "question": "mark, symbol",
            "options": [
                "だめ［な］",
                "ぼしゅうちゅう",
                "マーク",
                "しようきんし"
            ],
            "correctIndex": 2,
            "explanation": "「マーク」 means \"mark, symbol\"."
        },
        {
            "question": "ball",
            "options": [
                "もどります",
                "もう",
                "ちゅういします［くるまに～］",
                "ボール"
            ],
            "correctIndex": 3,
            "explanation": "「ボール」 means \"ball\"."
        },
        {
            "question": "deadline",
            "options": [
                "しめきり",
                "つたえます",
                "でぐち",
                "かなしみ"
            ],
            "correctIndex": 0,
            "explanation": "「しめきり」 (締め切り) means \"deadline\"."
        },
        {
            "question": "regulation, rule",
            "options": [
                "ちゅういします［くるまに～］",
                "ひとびと",
                "きそく",
                "るす"
            ],
            "correctIndex": 2,
            "explanation": "「きそく」 (規則) means \"regulation, rule\"."
        },
        {
            "question": "Danger",
            "options": [
                "のみほうだい",
                "たとえば",
                "かなしい",
                "きけん"
            ],
            "correctIndex": 3,
            "explanation": "「きけん」 (危険) means \"Danger\"."
        },
        {
            "question": "Do Not Use",
            "options": [
                "でんぽうだい",
                "～ほど",
                "しようきんし",
                "もどります"
            ],
            "correctIndex": 2,
            "explanation": "「しようきんし」 (使用禁止) means \"Do Not Use\"."
        },
        {
            "question": "Keep Out",
            "options": [
                "たちいりきんし",
                "ちゅうしゃいはん",
                "にげます",
                "るす"
            ],
            "correctIndex": 0,
            "explanation": "「たちいりきんし」 (立入禁止) means \"Keep Out\"."
        },
        {
            "question": "Go Slow",
            "options": [
                "じょこう",
                "うちます［でんぽうを～］",
                "いくら［～でも］",
                "～いない"
            ],
            "correctIndex": 0,
            "explanation": "「じょこう」 (徐行) means \"Go Slow\"."
        },
        {
            "question": "entrance",
            "options": [
                "もう",
                "たちいりきんし",
                "おきます",
                "いりぐち"
            ],
            "correctIndex": 3,
            "explanation": "「いりぐち」 (入口) means \"entrance\"."
        },
        {
            "question": "exit",
            "options": [
                "あす",
                "でぐち",
                "だめ［な］",
                "でんぽうだい"
            ],
            "correctIndex": 1,
            "explanation": "「でぐち」 (出口) means \"exit\"."
        },
        {
            "question": "emergency exit",
            "options": [
                "かなしい",
                "ひじょうぐち",
                "～き",
                "あげます"
            ],
            "correctIndex": 1,
            "explanation": "「ひじょうぐち」 (非常口) means \"emergency exit\"."
        },
        {
            "question": "Free of Charge",
            "options": [
                "たとえば",
                "にげます",
                "むりょう",
                "なくなります"
            ],
            "correctIndex": 2,
            "explanation": "「むりょう」 (無料) means \"Free of Charge\"."
        },
        {
            "question": "Discount",
            "options": [
                "きそく",
                "できるだけ",
                "わりびき",
                "のみほうだい"
            ],
            "correctIndex": 2,
            "explanation": "「わりびき」 (割引) means \"Discount\"."
        },
        {
            "question": "All You Can Drink",
            "options": [
                "きけん",
                "あげます",
                "わりびき",
                "のみほうだい"
            ],
            "correctIndex": 3,
            "explanation": "「のみほうだい」 (飲み放題) means \"All You Can Drink\"."
        },
        {
            "question": "In Use",
            "options": [
                "しようちゅう",
                "もどります",
                "～き",
                "マーク"
            ],
            "correctIndex": 0,
            "explanation": "「しようちゅう」 (使用中) means \"In Use\"."
        },
        {
            "question": "Applications Wanted",
            "options": [
                "ぼしゅうちゅう",
                "マーク",
                "るすばん",
                "せんたくき"
            ],
            "correctIndex": 0,
            "explanation": "「ぼしゅうちゅう」 (募集中) means \"Applications Wanted\"."
        },
        {
            "question": "-ing",
            "options": [
                "のみほうだい",
                "たとえば",
                "いくら［～でも］",
                "～ちゅう"
            ],
            "correctIndex": 3,
            "explanation": "「～ちゅう」 (～中) means \"-ing\"."
        },
        {
            "question": "what (kind of ～)",
            "options": [
                "あります［でんわが～］",
                "［お］いわい",
                "どういう ～",
                "はずします［せきを～］"
            ],
            "correctIndex": 2,
            "explanation": "「どういう ～」 means \"what (kind of ～)\"."
        },
        {
            "question": "however ～, even if ～",
            "options": [
                "ファイト",
                "えいぎょうちゅう",
                "あいて",
                "いくら［～でも］"
            ],
            "correctIndex": 3,
            "explanation": "「いくら［～でも］」 means \"however ～, even if ～\"."
        },
        {
            "question": "(not) any longer (used with negatives)",
            "options": [
                "もう",
                "あきらめます",
                "のみほうだい",
                "まもります"
            ],
            "correctIndex": 0,
            "explanation": "「もう」 means \"(not) any longer (used with negatives)\"."
        },
        {
            "question": "～ left",
            "options": [
                "りようします",
                "ファイト",
                "にげます",
                "あと ～"
            ],
            "correctIndex": 3,
            "explanation": "「あと ～」 means \"～ left\"."
        },
        {
            "question": "about ～",
            "options": [
                "～ほど",
                "もどります",
                "あいて",
                "しめきり"
            ],
            "correctIndex": 0,
            "explanation": "「～ほど」 means \"about ～\"."
        },
        {
            "question": "parking violation",
            "options": [
                "そりゃあ",
                "せき",
                "ちゅうしゃいはん",
                "おなじ"
            ],
            "correctIndex": 2,
            "explanation": "「ちゅうしゃいはん」 (駐車違反) means \"parking violation\"."
        },
        {
            "question": "fine",
            "options": [
                "リサイクルします",
                "おなじ",
                "つたえます",
                "ばっきん"
            ],
            "correctIndex": 3,
            "explanation": "「ばっきん」 (罰金) means \"fine\"."
        },
        {
            "question": "earthquake",
            "options": [
                "じしん",
                "リサイクルします",
                "けいさつ",
                "なくなります"
            ],
            "correctIndex": 0,
            "explanation": "「じしん」 (地震) means \"earthquake\"."
        },
        {
            "question": "happen",
            "options": [
                "つたえます",
                "でんぽうだい",
                "かなしみ",
                "おきます"
            ],
            "correctIndex": 3,
            "explanation": "「おきます」 (置きます) means \"happen\"."
        },
        {
            "question": "help each other",
            "options": [
                "たすけあいます",
                "あきらめます",
                "きゅうよう",
                "ひとびと"
            ],
            "correctIndex": 0,
            "explanation": "「たすけあいます」 (助け合います) means \"help each other\"."
        },
        {
            "question": "originally",
            "options": [
                "ちゅうしゃいはん",
                "あります［でんわが～］",
                "あいて",
                "もともと"
            ],
            "correctIndex": 3,
            "explanation": "「もともと」 means \"originally\"."
        },
        {
            "question": "sad",
            "options": [
                "りようします",
                "かなしい",
                "～ちゅう",
                "さわぎます"
            ],
            "correctIndex": 1,
            "explanation": "「かなしい」 (悲しい) means \"sad\"."
        },
        {
            "question": "more",
            "options": [
                "しようちゅう",
                "いりぐち",
                "もっと",
                "あと ～"
            ],
            "correctIndex": 2,
            "explanation": "「もっと」 means \"more\"."
        },
        {
            "question": "greeting, address (～を します : greet, give an address)",
            "options": [
                "けいさつ",
                "あいさつ",
                "つたえます",
                "あす"
            ],
            "correctIndex": 1,
            "explanation": "「あいさつ」 means \"greeting, address (～を します : greet, give an address)\"."
        },
        {
            "question": "the other person",
            "options": [
                "けいさつ",
                "えいぎょうちゅう",
                "あいて",
                "～ちゅう"
            ],
            "correctIndex": 2,
            "explanation": "「あいて」 (相手) means \"the other person\"."
        },
        {
            "question": "feeling",
            "options": [
                "のみほうだい",
                "きもち",
                "ちゅういします［くるまに～］",
                "～ちゅう"
            ],
            "correctIndex": 1,
            "explanation": "「きもち」 (気持ち) means \"feeling\"."
        },
        {
            "question": "raise, lift up",
            "options": [
                "もどります",
                "ひとびと",
                "あげます",
                "じょこう"
            ],
            "correctIndex": 2,
            "explanation": "「あげます」 (上げます) means \"raise, lift up\"."
        },
        {
            "question": "lower, pull down",
            "options": [
                "むりょう",
                "さげます",
                "しようきんし",
                "わりびき"
            ],
            "correctIndex": 1,
            "explanation": "「さげます」 (下げます) means \"lower, pull down\"."
        },
        {
            "question": "fight",
            "options": [
                "たすけあいます",
                "また",
                "ファイト",
                "もともと"
            ],
            "correctIndex": 2,
            "explanation": "「ファイト」 means \"fight\"."
        },
        {
            "question": "washing machine",
            "options": [
                "もともと",
                "せんたくき",
                "おもい びょうき",
                "ほんじつきゅうぎょう"
            ],
            "correctIndex": 1,
            "explanation": "「せんたくき」 (洗濯機) means \"washing machine\"."
        },
        {
            "question": "～ machine",
            "options": [
                "～き",
                "あいさつ",
                "ちゅういします［くるまに～］",
                "たすけあいます"
            ],
            "correctIndex": 0,
            "explanation": "「～き」 (～機) means \"～ machine\"."
        },
        {
            "question": "closed today",
            "options": [
                "おなじ",
                "おもい びょうき",
                "むりょう",
                "ほんじつきゅうぎょう"
            ],
            "correctIndex": 3,
            "explanation": "「ほんじつきゅうぎょう」 (本日休業) means \"closed today\"."
        },
        {
            "question": "open for business",
            "options": [
                "むりょう",
                "るす",
                "えいぎょうちゅう",
                "そりゃあ"
            ],
            "correctIndex": 2,
            "explanation": "「えいぎょうちゅう」 (営業中) means \"open for business\"."
        },
        {
            "question": "well",
            "options": [
                "そりゃあ",
                "ちゅういします［くるまに～］",
                "でんぽうだい",
                "ぼしゅうちゅう"
            ],
            "correctIndex": 0,
            "explanation": "「そりゃあ」 means \"well\"."
        },
        {
            "question": "within ～",
            "options": [
                "ひじょうぐち",
                "～いない",
                "でんぽう",
                "きもち"
            ],
            "correctIndex": 1,
            "explanation": "「～いない」 (～以内) means \"within ～\"."
        },
        {
            "question": "telegram",
            "options": [
                "はずします［せきを～］",
                "さわぎます",
                "でんぽう",
                "～ほど"
            ],
            "correctIndex": 2,
            "explanation": "「でんぽう」 (電報) means \"telegram\"."
        },
        {
            "question": "people",
            "options": [
                "たとえば",
                "ばっきん",
                "ひとびと",
                "ぼしゅうちゅう"
            ],
            "correctIndex": 2,
            "explanation": "「ひとびと」 (人々) means \"people\"."
        },
        {
            "question": "urgent business",
            "options": [
                "ちゅういします［くるまに～］",
                "でんぽうだい",
                "きゅうよう",
                "もともと"
            ],
            "correctIndex": 2,
            "explanation": "「きゅうよう」 (急用) means \"urgent business\"."
        },
        {
            "question": "send [a telegram]",
            "options": [
                "うちます［でんぽうを～］",
                "おなじ",
                "るす",
                "ほんじつきゅうぎょう"
            ],
            "correctIndex": 0,
            "explanation": "「うちます［でんぽうを～］」 (打ちます［電報を～］) means \"send [a telegram]\"."
        },
        {
            "question": "telegram charge",
            "options": [
                "えいぎょうちゅう",
                "でんぽうだい",
                "～ちゅう",
                "はじまります［しきが～］"
            ],
            "correctIndex": 1,
            "explanation": "「でんぽうだい」 (電報代) means \"telegram charge\"."
        },
        {
            "question": "as much as possible",
            "options": [
                "どういう ～",
                "もどります",
                "できるだけ",
                "きけん"
            ],
            "correctIndex": 2,
            "explanation": "「できるだけ」 means \"as much as possible\"."
        },
        {
            "question": "shortly, briefly",
            "options": [
                "みじかく",
                "どういう ～",
                "もっと",
                "あいて"
            ],
            "correctIndex": 0,
            "explanation": "「みじかく」 (短く) means \"shortly, briefly\"."
        },
        {
            "question": "and",
            "options": [
                "もどります",
                "そりゃあ",
                "しようきんし",
                "また"
            ],
            "correctIndex": 3,
            "explanation": "「また」 means \"and\"."
        },
        {
            "question": "for example",
            "options": [
                "ぼしゅうちゅう",
                "ボール",
                "みじかく",
                "たとえば"
            ],
            "correctIndex": 3,
            "explanation": "「たとえば」 (例えば) means \"for example\"."
        },
        {
            "question": "in a critical condition",
            "options": [
                "マーク",
                "もともと",
                "つたえます",
                "キトク"
            ],
            "correctIndex": 3,
            "explanation": "「キトク」 (危篤) means \"in a critical condition\"."
        },
        {
            "question": "serious illness",
            "options": [
                "はじまります［しきが～］",
                "あります［でんわが～］",
                "おもい びょうき",
                "えいぎょうちゅう"
            ],
            "correctIndex": 2,
            "explanation": "「おもい びょうき」 (重い 病気) means \"serious illness\"."
        },
        {
            "question": "tomorrow",
            "options": [
                "あす",
                "キトク",
                "むりょう",
                "にげます"
            ],
            "correctIndex": 0,
            "explanation": "「あす」 (明日) means \"tomorrow\"."
        },
        {
            "question": "absence",
            "options": [
                "～ほど",
                "しようきんし",
                "るす",
                "たとえば"
            ],
            "correctIndex": 2,
            "explanation": "「るす」 (留守) means \"absence\"."
        },
        {
            "question": "looking after the house during the owner's absence",
            "options": [
                "～ちゅう",
                "るすばん",
                "あと ～",
                "おなじ"
            ],
            "correctIndex": 1,
            "explanation": "「るすばん」 (留守番) means \"looking after the house during the owner's absence\"."
        },
        {
            "question": "celebration",
            "options": [
                "また",
                "さわぎます",
                "おきます",
                "［お］いわい"
            ],
            "correctIndex": 3,
            "explanation": "「［お］いわい」 (［お］祝い) means \"celebration\"."
        },
        {
            "question": "pass away, die",
            "options": [
                "いりぐち",
                "また",
                "ひとびと",
                "なくなります"
            ],
            "correctIndex": 3,
            "explanation": "「なくなります」 (亡くなります) means \"pass away, die\"."
        },
        {
            "question": "sorrow, sadness",
            "options": [
                "おきます",
                "かなしみ",
                "うちます［でんぽうを～］",
                "ボール"
            ],
            "correctIndex": 1,
            "explanation": "「かなしみ」 (悲しみ) means \"sorrow, sadness\"."
        },
        {
            "question": "use",
            "options": [
                "りようします",
                "じょこう",
                "できるだけ",
                "あります［でんわが～］"
            ],
            "correctIndex": 0,
            "explanation": "「りようします」 (利用します) means \"use\"."
        }
    ],
    "Lesson 34": [
        {
            "question": "brush [one's teeth], polish",
            "options": [
                "ぼんおどり",
                "みがきます［はを～］",
                "ゆうべ",
                "たまねぎ"
            ],
            "correctIndex": 1,
            "explanation": "「みがきます［はを～］」 (磨きます［歯を～］) means \"brush [one's teeth], polish\"."
        },
        {
            "question": "assemble",
            "options": [
                "つけます［しゅうゆを～］",
                "のせます",
                "くみたてます",
                "ほそい"
            ],
            "correctIndex": 2,
            "explanation": "「くみたてます」 (組み立てます) means \"assemble\"."
        },
        {
            "question": "bend, fold, break, snap",
            "options": [
                "キー",
                "よんぶんのいち（１／４）",
                "おります",
                "ゆうべ"
            ],
            "correctIndex": 2,
            "explanation": "「おります」 (降ります) means \"bend, fold, break, snap\"."
        },
        {
            "question": "notice, become aware of [things left behind]",
            "options": [
                "おやこどんぶり",
                "ひに かけます",
                "つけます［しゅうゆを～］",
                "きが つきます［わすれものに～］"
            ],
            "correctIndex": 3,
            "explanation": "「きが つきます［わすれものに～］」 (気が つきます［忘れ物に～］) means \"notice, become aware of [things left behind]\"."
        },
        {
            "question": "put [in soy sauce]",
            "options": [
                "ほそい",
                "シートベルト",
                "つけます［しゅうゆを～］",
                "あお"
            ],
            "correctIndex": 2,
            "explanation": "「つけます［しゅうゆを～］」 means \"put [in soy sauce]\"."
        },
        {
            "question": "[a key] be found",
            "options": [
                "みがきます［はを～］",
                "ゆうべ",
                "みつかります［かぎが～］",
                "てきとうな おおきさに"
            ],
            "correctIndex": 2,
            "explanation": "「みつかります［かぎが～］」 (見つかります［かぎが～］) means \"[a key] be found\"."
        },
        {
            "question": "ask a question",
            "options": [
                "しつもんします",
                "－グラム",
                "しろ",
                "これで いいですか。"
            ],
            "correctIndex": 0,
            "explanation": "「しつもんします」 (質問します) means \"ask a question\"."
        },
        {
            "question": "put up [an umbrella]",
            "options": [
                "せん",
                "さします［かさを～］",
                "おやこどんぶり",
                "ちょうみりょう"
            ],
            "correctIndex": 1,
            "explanation": "「さします［かさを～］」 (さします［傘を～］) means \"put up [an umbrella]\"."
        },
        {
            "question": "sports club",
            "options": [
                "スポーツクラブ",
                "ふとい",
                "［お］しろ",
                "ず"
            ],
            "correctIndex": 0,
            "explanation": "「スポーツクラブ」 means \"sports club\"."
        },
        {
            "question": "castle",
            "options": [
                "にます",
                "たちます",
                "［お］しろ",
                "たまねぎ"
            ],
            "correctIndex": 2,
            "explanation": "「［お］しろ」 (［お］城) means \"castle\"."
        },
        {
            "question": "explanatory pamphlet, instruction book",
            "options": [
                "おちゃを たてます",
                "せつめいしょ",
                "シートベルト",
                "これで いいですか。"
            ],
            "correctIndex": 1,
            "explanation": "「せつめいしょ」 (説明書) means \"explanatory pamphlet, instruction book\"."
        },
        {
            "question": "figure, drawing",
            "options": [
                "さっき",
                "ず",
                "ゆうべ",
                "シートベルト"
            ],
            "correctIndex": 1,
            "explanation": "「ず」 (図) means \"figure, drawing\"."
        },
        {
            "question": "line",
            "options": [
                "ゆうべ",
                "［お］しろ",
                "せん",
                "さどう"
            ],
            "correctIndex": 2,
            "explanation": "「せん」 (線) means \"line\"."
        },
        {
            "question": "arrow (sign)",
            "options": [
                "きが つきます［わすれものに～］",
                "よんぶんのいち（１／４）",
                "ほそい",
                "やじるし"
            ],
            "correctIndex": 3,
            "explanation": "「やじるし」 (矢印) means \"arrow (sign)\"."
        },
        {
            "question": "black (noun)",
            "options": [
                "くろ",
                "おやこどんぶり",
                "のせます",
                "ふとい"
            ],
            "correctIndex": 0,
            "explanation": "「くろ」 (黒) means \"black (noun)\"."
        },
        {
            "question": "white (noun)",
            "options": [
                "しろ",
                "さっき",
                "ひ",
                "ふとい"
            ],
            "correctIndex": 0,
            "explanation": "「しろ」 (白) means \"white (noun)\"."
        },
        {
            "question": "red (noun)",
            "options": [
                "これで いいですか。",
                "ーこ",
                "あか",
                "くみたてます"
            ],
            "correctIndex": 2,
            "explanation": "「あか」 (赤) means \"red (noun)\"."
        },
        {
            "question": "blue (noun)",
            "options": [
                "ざいりょう",
                "くろ",
                "みがきます［はを～］",
                "あお"
            ],
            "correctIndex": 3,
            "explanation": "「あお」 (青) means \"blue (noun)\"."
        },
        {
            "question": "navy blue, dark blue (noun)",
            "options": [
                "ぼんおどり",
                "つけます［しゅうゆを～］",
                "こん",
                "ソース"
            ],
            "correctIndex": 2,
            "explanation": "「こん」 (紺) means \"navy blue, dark blue (noun)\"."
        },
        {
            "question": "yellow (noun)",
            "options": [
                "みがきます［はを～］",
                "つけます［しゅうゆを～］",
                "きいろ",
                "ひ"
            ],
            "correctIndex": 2,
            "explanation": "「きいろ」 (黄色) means \"yellow (noun)\"."
        },
        {
            "question": "brown (noun)",
            "options": [
                "せん",
                "さします［かさを～］",
                "ちゃいろ",
                "みがきます［はを～］"
            ],
            "correctIndex": 2,
            "explanation": "「ちゃいろ」 (茶色) means \"brown (noun)\"."
        },
        {
            "question": "soya, soy sauce",
            "options": [
                "みつかります［かぎが～］",
                "しろ",
                "ちょうみりょう",
                "しょうゆ"
            ],
            "correctIndex": 3,
            "explanation": "「しょうゆ」 means \"soya, soy sauce\"."
        },
        {
            "question": "sauce, Worcestershire sauce",
            "options": [
                "ソース",
                "ず",
                "さどう",
                "キー"
            ],
            "correctIndex": 0,
            "explanation": "「ソース」 means \"sauce, Worcestershire sauce\"."
        },
        {
            "question": "visitor, guest, customer, client",
            "options": [
                "おきゃく［さん］",
                "にます",
                "これで いいですか。",
                "さきに"
            ],
            "correctIndex": 0,
            "explanation": "「おきゃく［さん］」 (お客［さん］) means \"visitor, guest, customer, client\"."
        },
        {
            "question": "～ or ～",
            "options": [
                "こん",
                "ひに かけます",
                "かぐ",
                "～か ～"
            ],
            "correctIndex": 3,
            "explanation": "「～か ～」 means \"～ or ～\"."
        },
        {
            "question": "last night",
            "options": [
                "ぼんおどり",
                "～か ～",
                "ひ",
                "ゆうべ"
            ],
            "correctIndex": 3,
            "explanation": "「ゆうべ」 means \"last night\"."
        },
        {
            "question": "a short while ago",
            "options": [
                "つけます［しゅうゆを～］",
                "くみたてます",
                "さっき",
                "よんぶんのいち（１／４）"
            ],
            "correctIndex": 2,
            "explanation": "「さっき」 means \"a short while ago\"."
        },
        {
            "question": "tea ceremony",
            "options": [
                "どんぶり",
                "さどう",
                "－グラム",
                "ひに かけます"
            ],
            "correctIndex": 1,
            "explanation": "「さどう」 (茶道) means \"tea ceremony\"."
        },
        {
            "question": "make (green) tea (at a tea ceremony)",
            "options": [
                "ソース",
                "かぐ",
                "おちゃを たてます",
                "ふとい"
            ],
            "correctIndex": 2,
            "explanation": "「おちゃを たてます」 (お茶を たてます) means \"make (green) tea (at a tea ceremony)\"."
        },
        {
            "question": "first, ahead",
            "options": [
                "おやこどんぶり",
                "おります",
                "たまねぎ",
                "さきに"
            ],
            "correctIndex": 3,
            "explanation": "「さきに」 (先に) means \"first, ahead\"."
        },
        {
            "question": "place on, load onto",
            "options": [
                "てきとうな おおきさに",
                "ソース",
                "のせます",
                "つけます［しゅうゆを～］"
            ],
            "correctIndex": 2,
            "explanation": "「のせます」 (載せます) means \"place on, load onto\"."
        },
        {
            "question": "Is this all right?",
            "options": [
                "おちゃを たてます",
                "これで いいですか。",
                "てきとうな おおきさに",
                "つけます［しゅうゆを～］"
            ],
            "correctIndex": 1,
            "explanation": "「これで いいですか。」 means \"Is this all right?\"."
        },
        {
            "question": "bitter",
            "options": [
                "にがい",
                "しろ",
                "あか",
                "しつもんします"
            ],
            "correctIndex": 0,
            "explanation": "「にがい」 (苦い) means \"bitter\"."
        },
        {
            "question": "a bowl of cooked rice with chicken and egg",
            "options": [
                "おちゃを たてます",
                "おやこどんぶり",
                "シートベルト",
                "おります"
            ],
            "correctIndex": 1,
            "explanation": "「おやこどんぶり」 (親子どんぶり) means \"a bowl of cooked rice with chicken and egg\"."
        },
        {
            "question": "material, ingredient",
            "options": [
                "ざいりょう",
                "しょうゆ",
                "にがい",
                "たちます"
            ],
            "correctIndex": 0,
            "explanation": "「ざいりょう」 (材料) means \"material, ingredient\"."
        },
        {
            "question": "portion for ～ (used for indicating quantity)",
            "options": [
                "～ぶん",
                "あか",
                "ちょうみりょう",
                "します［ネクタイを～］"
            ],
            "correctIndex": 0,
            "explanation": "「～ぶん」 (～分) means \"portion for ～ (used for indicating quantity)\"."
        },
        {
            "question": "－ gramme",
            "options": [
                "－グラム",
                "にます",
                "やじるし",
                "しょうゆ"
            ],
            "correctIndex": 0,
            "explanation": "「－グラム」 means \"－ gramme\"."
        },
        {
            "question": "(counter for small objects)",
            "options": [
                "ーこ",
                "あか",
                "かぐ",
                "さどう"
            ],
            "correctIndex": 0,
            "explanation": "「ーこ」 (ー個) means \"(counter for small objects)\"."
        },
        {
            "question": "onion",
            "options": [
                "くみたてます",
                "たまねぎ",
                "せつめいしょ",
                "－グラム"
            ],
            "correctIndex": 1,
            "explanation": "「たまねぎ」 means \"onion\"."
        },
        {
            "question": "one fourth",
            "options": [
                "よんぶんのいち（１／４）",
                "ゆうべ",
                "－グラム",
                "にえます"
            ],
            "correctIndex": 0,
            "explanation": "「よんぶんのいち（１／４）」 (４分の１（１／４）) means \"one fourth\"."
        },
        {
            "question": "seasoning , flavoring",
            "options": [
                "さします［かさを～］",
                "キー",
                "ひ",
                "ちょうみりょう"
            ],
            "correctIndex": 3,
            "explanation": "「ちょうみりょう」 (調味料) means \"seasoning , flavoring\"."
        },
        {
            "question": "in right size",
            "options": [
                "みがきます［はを～］",
                "ひ",
                "てきとうな おおきさに",
                "キー"
            ],
            "correctIndex": 2,
            "explanation": "「てきとうな おおきさに」 (適当な 大きさに) means \"in right size\"."
        },
        {
            "question": "pan, pot",
            "options": [
                "なべ",
                "キー",
                "ちょうみりょう",
                "どんぶり"
            ],
            "correctIndex": 0,
            "explanation": "「なべ」 means \"pan, pot\"."
        },
        {
            "question": "fire, heating",
            "options": [
                "あお",
                "しろ",
                "ひ",
                "たまねぎ"
            ],
            "correctIndex": 2,
            "explanation": "「ひ」 (火) means \"fire, heating\"."
        },
        {
            "question": "put on the stove",
            "options": [
                "ひに かけます",
                "キー",
                "せつめいしょ",
                "これで いいですか。"
            ],
            "correctIndex": 0,
            "explanation": "「ひに かけます」 (火に かけます) means \"put on the stove\"."
        },
        {
            "question": "cook, boil",
            "options": [
                "にます",
                "どんぶり",
                "ちょうみりょう",
                "－グラム"
            ],
            "correctIndex": 0,
            "explanation": "「にます」 (煮ます) means \"cook, boil\"."
        },
        {
            "question": "be cooked, be boiled",
            "options": [
                "にえます",
                "おやこどんぶり",
                "みつかります［かぎが～］",
                "おちゃを たてます"
            ],
            "correctIndex": 0,
            "explanation": "「にえます」 (煮えます) means \"be cooked, be boiled\"."
        },
        {
            "question": "bowl",
            "options": [
                "ひ",
                "します［ネクタイを～］",
                "しょうゆ",
                "どんぶり"
            ],
            "correctIndex": 3,
            "explanation": "「どんぶり」 means \"bowl\"."
        },
        {
            "question": "pass (time)",
            "options": [
                "しろ",
                "こん",
                "たちます",
                "きいろ"
            ],
            "correctIndex": 2,
            "explanation": "「たちます」 means \"pass (time)\"."
        },
        {
            "question": "put on, wear [a tie]",
            "options": [
                "なべ",
                "これで いいですか。",
                "どんぶり",
                "します［ネクタイを～］"
            ],
            "correctIndex": 3,
            "explanation": "「します［ネクタイを～］」 means \"put on, wear [a tie]\"."
        },
        {
            "question": "thin (of small diameter)",
            "options": [
                "なべ",
                "さどう",
                "ほそい",
                "しょうゆ"
            ],
            "correctIndex": 2,
            "explanation": "「ほそい」 (細い) means \"thin (of small diameter)\"."
        },
        {
            "question": "thick (of large diameter)",
            "options": [
                "よんぶんのいち（１／４）",
                "します［ネクタイを～］",
                "やじるし",
                "ふとい"
            ],
            "correctIndex": 3,
            "explanation": "「ふとい」 (太い) means \"thick (of large diameter)\"."
        },
        {
            "question": "Bon Festival dance",
            "options": [
                "おきゃく［さん］",
                "ーこ",
                "ひに かけます",
                "ぼんおどり"
            ],
            "correctIndex": 3,
            "explanation": "「ぼんおどり」 (盆踊り) means \"Bon Festival dance\"."
        },
        {
            "question": "furniture",
            "options": [
                "のせます",
                "みがきます［はを～］",
                "かぐ",
                "します［ネクタイを～］"
            ],
            "correctIndex": 2,
            "explanation": "「かぐ」 (家具) means \"furniture\"."
        },
        {
            "question": "key",
            "options": [
                "とりにく",
                "キー",
                "ちょうみりょう",
                "つけます［しゅうゆを～］"
            ],
            "correctIndex": 1,
            "explanation": "「キー」 means \"key\"."
        },
        {
            "question": "seat belt",
            "options": [
                "シートベルト",
                "おります",
                "せん",
                "よんぶんのいち（１／４）"
            ],
            "correctIndex": 0,
            "explanation": "「シートベルト」 means \"seat belt\"."
        },
        {
            "question": "chicken",
            "options": [
                "やじるし",
                "みがきます［はを～］",
                "－グラム",
                "とりにく"
            ],
            "correctIndex": 3,
            "explanation": "「とりにく」 (とり肉) means \"chicken\"."
        }
    ],
    "Lesson 35": [
        {
            "question": "[flowers] bloom",
            "options": [
                "さきます［はなが～］",
                "はじめに",
                "ふりがな",
                "みんなの がっこう"
            ],
            "correctIndex": 0,
            "explanation": "「さきます［はなが～］」 (咲きます［花が～］) means \"[flowers] bloom\"."
        },
        {
            "question": "[the color] change",
            "options": [
                "かた",
                "IMCパソコンきょうしつ",
                "かかります［でんわが～］",
                "かわります［いろが～］"
            ],
            "correctIndex": 3,
            "explanation": "「かわります［いろが～］」 (変わります［色が～］) means \"[the color] change\"."
        },
        {
            "question": "be in trouble, have a problem",
            "options": [
                "こまります",
                "きかい",
                "はる",
                "ただしい"
            ],
            "correctIndex": 0,
            "explanation": "「こまります」 (困ります) means \"be in trouble, have a problem\"."
        },
        {
            "question": "draw [a circle], mark [with a circle], add",
            "options": [
                "しがこうげん",
                "つけます［まるを～］",
                "まじわります",
                "きょく"
            ],
            "correctIndex": 1,
            "explanation": "「つけます［まるを～］」 (付けます［丸を～］) means \"draw [a circle], mark [with a circle], add\"."
        },
        {
            "question": "recover from [sickness], get well",
            "options": [
                "かかります［でんわが～］",
                "ひろいます",
                "なおります［びょうきが～］",
                "かた"
            ],
            "correctIndex": 2,
            "explanation": "「なおります［びょうきが～］」 (治ります［病気が～］) means \"recover from [sickness], get well\"."
        },
        {
            "question": "be fixed, be repaired",
            "options": [
                "マンガミュージアム",
                "なおります［こしょうが～］",
                "かんけい",
                "ハイキング"
            ],
            "correctIndex": 1,
            "explanation": "「なおります［こしょうが～］」 (直ります［故障が～］) means \"be fixed, be repaired\"."
        },
        {
            "question": "click",
            "options": [
                "たのしみ",
                "かた",
                "カーテン",
                "くりっくします"
            ],
            "correctIndex": 3,
            "explanation": "「くりっくします」 means \"click\"."
        },
        {
            "question": "input",
            "options": [
                "アフリカ",
                "にゅうりょくします",
                "れきし",
                "ひつよう［な］"
            ],
            "correctIndex": 1,
            "explanation": "「にゅうりょくします」 (入力します) means \"input\"."
        },
        {
            "question": "correct, right",
            "options": [
                "IMCパソコンきょうしつ",
                "はくば",
                "ただしい",
                "めずらしい"
            ],
            "correctIndex": 2,
            "explanation": "「ただしい」 (正しい) means \"correct, right\"."
        },
        {
            "question": "over there, the other side",
            "options": [
                "なおります［こしょうが～］",
                "はくば",
                "むこう",
                "こまります"
            ],
            "correctIndex": 2,
            "explanation": "「むこう」 (向こう) means \"over there, the other side\"."
        },
        {
            "question": "island",
            "options": [
                "ひつよう［な］",
                "スキーじょう",
                "しま",
                "りょこうしゃ"
            ],
            "correctIndex": 2,
            "explanation": "「しま」 (島) means \"island\"."
        },
        {
            "question": "port, harbour",
            "options": [
                "すいはんき",
                "ほうほう",
                "みなと",
                "もっと"
            ],
            "correctIndex": 2,
            "explanation": "「みなと」 (港) means \"port, harbour\"."
        },
        {
            "question": "neighborhood, vicinity",
            "options": [
                "まじわります",
                "すいはんき",
                "きんじょ",
                "おくじょう"
            ],
            "correctIndex": 2,
            "explanation": "「きんじょ」 (近所) means \"neighborhood, vicinity\"."
        },
        {
            "question": "rooftop",
            "options": [
                "ひつよう［な］",
                "かかります［でんわが～］",
                "レバー",
                "おくじょう"
            ],
            "correctIndex": 3,
            "explanation": "「おくじょう」 (屋上) means \"rooftop\"."
        },
        {
            "question": "overseas",
            "options": [
                "ははの あじ",
                "かいがい",
                "まじわります",
                "れきし"
            ],
            "correctIndex": 1,
            "explanation": "「かいがい」 (海外) means \"overseas\"."
        },
        {
            "question": "mountain climbing",
            "options": [
                "りょこうしゃ",
                "やまのぼり",
                "さあ",
                "ひも"
            ],
            "correctIndex": 1,
            "explanation": "「やまのぼり」 (山登り) means \"mountain climbing\"."
        },
        {
            "question": "history",
            "options": [
                "むこう",
                "さとうしか",
                "れきし",
                "かかります［でんわが～］"
            ],
            "correctIndex": 2,
            "explanation": "「れきし」 (歴史) means \"history\"."
        },
        {
            "question": "chance, opportunity",
            "options": [
                "きかい",
                "めずらしい",
                "これで おわりましょう。",
                "みなと"
            ],
            "correctIndex": 0,
            "explanation": "「きかい」 (機会) means \"chance, opportunity\"."
        },
        {
            "question": "permission",
            "options": [
                "は",
                "かた",
                "たのしみ",
                "きょか"
            ],
            "correctIndex": 3,
            "explanation": "「きょか」 (許可) means \"permission\"."
        },
        {
            "question": "circle",
            "options": [
                "にっこう",
                "まる",
                "だいこくずし",
                "まじわります"
            ],
            "correctIndex": 1,
            "explanation": "「まる」 (丸) means \"circle\"."
        },
        {
            "question": "(kana above or beside kanji indicating its pronunciation)",
            "options": [
                "それなら",
                "しま",
                "ふりがな",
                "ただしい"
            ],
            "correctIndex": 2,
            "explanation": "「ふりがな」 means \"(kana above or beside kanji indicating its pronunciation)\"."
        },
        {
            "question": "equipment, facilities",
            "options": [
                "しま",
                "せつび",
                "ふりがな",
                "しがこうげん"
            ],
            "correctIndex": 1,
            "explanation": "「せつび」 (設備) means \"equipment, facilities\"."
        },
        {
            "question": "lever",
            "options": [
                "レバー",
                "さとうしか",
                "つけます［まるを～］",
                "なおります［こしょうが～］"
            ],
            "correctIndex": 0,
            "explanation": "「レバー」 means \"lever\"."
        },
        {
            "question": "key",
            "options": [
                "キー",
                "ハイキング",
                "はる",
                "まる"
            ],
            "correctIndex": 0,
            "explanation": "「キー」 means \"key\"."
        },
        {
            "question": "curtain",
            "options": [
                "カーテン",
                "やこうバス",
                "ひつよう［な］",
                "まじわります"
            ],
            "correctIndex": 0,
            "explanation": "「カーテン」 means \"curtain\"."
        },
        {
            "question": "string",
            "options": [
                "ひも",
                "ははの あじ",
                "くさつ",
                "ことわざ"
            ],
            "correctIndex": 0,
            "explanation": "「ひも」 means \"string\"."
        },
        {
            "question": "rice cooker",
            "options": [
                "かかります［でんわが～］",
                "みんなの がっこう",
                "すいはんき",
                "こまります"
            ],
            "correctIndex": 2,
            "explanation": "「すいはんき」 (炊飯器) means \"rice cooker\"."
        },
        {
            "question": "leaf",
            "options": [
                "すいはんき",
                "きんじょ",
                "は",
                "せつび"
            ],
            "correctIndex": 2,
            "explanation": "「は」 (葉) means \"leaf\"."
        },
        {
            "question": "old times, ancient times",
            "options": [
                "くさつ",
                "むかし",
                "はくば",
                "かんけい"
            ],
            "correctIndex": 1,
            "explanation": "「むかし」 (昔) means \"old times, ancient times\"."
        },
        {
            "question": "more",
            "options": [
                "ひつよう［な］",
                "みなと",
                "もっと",
                "まいにちクッキング"
            ],
            "correctIndex": 2,
            "explanation": "「もっと」 means \"more\"."
        },
        {
            "question": "Let's finish now.",
            "options": [
                "かわります［いろが～］",
                "むこう",
                "これで おわりましょう。",
                "さきます［はなが～］"
            ],
            "correctIndex": 2,
            "explanation": "「これで おわりましょう。」 (これで 終わりましょう。) means \"Let's finish now.\"."
        },
        {
            "question": "resort and tourist spot in Kanagawa prefecture",
            "options": [
                "はこね",
                "まいにちクッキング",
                "そうさ",
                "すいはんき"
            ],
            "correctIndex": 0,
            "explanation": "「はこね」 (箱根) means \"resort and tourist spot in Kanagawa prefecture\"."
        },
        {
            "question": "tourist spot in Tochigi prefecture",
            "options": [
                "はこね",
                "くりっくします",
                "ふた",
                "にっこう"
            ],
            "correctIndex": 3,
            "explanation": "「にっこう」 (日光) means \"tourist spot in Tochigi prefecture\"."
        },
        {
            "question": "Africa",
            "options": [
                "なかよく します",
                "たのしみ",
                "アフリカ",
                "せつび"
            ],
            "correctIndex": 2,
            "explanation": "「アフリカ」 means \"Africa\"."
        },
        {
            "question": "Kyoto International Manga Museum",
            "options": [
                "やこうバス",
                "マンガミュージアム",
                "それなら",
                "ただしい"
            ],
            "correctIndex": 1,
            "explanation": "「マンガミュージアム」 means \"Kyoto International Manga Museum\"."
        },
        {
            "question": "école de japonais fictive",
            "options": [
                "さとうしか",
                "ひろいます",
                "みんなの がっこう",
                "マンガミュージアム"
            ],
            "correctIndex": 2,
            "explanation": "「みんなの がっこう」 (みんなの 学校) means \"école de japonais fictive\"."
        },
        {
            "question": "a fictitious sushi restaurant",
            "options": [
                "さあ",
                "ことわざ",
                "は",
                "だいこくずし"
            ],
            "correctIndex": 3,
            "explanation": "「だいこくずし」 (大黒ずし) means \"a fictitious sushi restaurant\"."
        },
        {
            "question": "a fictitious computer school",
            "options": [
                "IMCパソコンきょうしつ",
                "しがこうげん",
                "ハイキング",
                "りょこうしゃ"
            ],
            "correctIndex": 0,
            "explanation": "「IMCパソコンきょうしつ」 (IMCパソコン教室) means \"a fictitious computer school\"."
        },
        {
            "question": "a fictitious book",
            "options": [
                "さきます［はなが～］",
                "しま",
                "ははの あじ",
                "かわります［いろが～］"
            ],
            "correctIndex": 2,
            "explanation": "「ははの あじ」 (母の 味) means \"a fictitious book\"."
        },
        {
            "question": "a fictitious hair salon",
            "options": [
                "みんなの がっこう",
                "はる",
                "まじわります",
                "ははの あじ"
            ],
            "correctIndex": 1,
            "explanation": "「はる」 means \"a fictitious hair salon\"."
        },
        {
            "question": "a fictitious dental clinic",
            "options": [
                "かわります［いろが～］",
                "キー",
                "さとうしか",
                "ひも"
            ],
            "correctIndex": 2,
            "explanation": "「さとうしか」 (佐藤歯科) means \"a fictitious dental clinic\"."
        },
        {
            "question": "a fictitious cooking school",
            "options": [
                "たのしみ",
                "らく［な］",
                "きかい",
                "まいにちクッキング"
            ],
            "correctIndex": 3,
            "explanation": "「まいにちクッキング」 (毎日クッキング) means \"a fictitious cooking school\"."
        },
        {
            "question": "in that case",
            "options": [
                "くりっくします",
                "それなら",
                "すいはんき",
                "むら"
            ],
            "correctIndex": 1,
            "explanation": "「それなら」 means \"in that case\"."
        },
        {
            "question": "overnight bus",
            "options": [
                "ひろいます",
                "れきし",
                "やこうバス",
                "ひも"
            ],
            "correctIndex": 2,
            "explanation": "「やこうバス」 (夜行バス) means \"overnight bus\"."
        },
        {
            "question": "Well, let me see. (used when unsure of something)",
            "options": [
                "さあ",
                "めずらしい",
                "なおります［びょうきが～］",
                "ふりがな"
            ],
            "correctIndex": 0,
            "explanation": "「さあ」 means \"Well, let me see. (used when unsure of something)\"."
        },
        {
            "question": "travel agency",
            "options": [
                "かた",
                "レバー",
                "にゅうりょくします",
                "りょこうしゃ"
            ],
            "correctIndex": 3,
            "explanation": "「りょこうしゃ」 (旅行社) means \"travel agency\"."
        },
        {
            "question": "detailed",
            "options": [
                "さきます［はなが～］",
                "くわしい",
                "まいにちクッキング",
                "にっこう"
            ],
            "correctIndex": 1,
            "explanation": "「くわしい」 (詳しい) means \"detailed\"."
        },
        {
            "question": "ski resort, ski area",
            "options": [
                "スキーじょう",
                "なおります［びょうきが～］",
                "まいにちクッキング",
                "かわります［いろが～］"
            ],
            "correctIndex": 0,
            "explanation": "「スキーじょう」 (スキー場) means \"ski resort, ski area\"."
        },
        {
            "question": "resort in Gunma prefecture",
            "options": [
                "れきし",
                "もっと",
                "くさつ",
                "むかし"
            ],
            "correctIndex": 2,
            "explanation": "「くさつ」 (草津) means \"resort in Gunma prefecture\"."
        },
        {
            "question": "national park in Nagano prefecture",
            "options": [
                "かた",
                "やこうバス",
                "しがこうげん",
                "ハイキング"
            ],
            "correctIndex": 2,
            "explanation": "「しがこうげん」 (志賀高原) means \"national park in Nagano prefecture\"."
        },
        {
            "question": "vermilion",
            "options": [
                "しゅ",
                "かた",
                "さとうしか",
                "アフリカ"
            ],
            "correctIndex": 0,
            "explanation": "「しゅ」 (朱) means \"vermilion\"."
        },
        {
            "question": "keep company with",
            "options": [
                "なかよく します",
                "ひつよう［な］",
                "まじわります",
                "きんじょ"
            ],
            "correctIndex": 2,
            "explanation": "「まじわります」 (交わります) means \"keep company with\"."
        },
        {
            "question": "proverb",
            "options": [
                "ことわざ",
                "さとうしか",
                "なおります［こしょうが～］",
                "くりっくします"
            ],
            "correctIndex": 0,
            "explanation": "「ことわざ」 means \"proverb\"."
        },
        {
            "question": "relationship",
            "options": [
                "かんけい",
                "たのしみ",
                "は",
                "ふた"
            ],
            "correctIndex": 0,
            "explanation": "「かんけい」 (関係) means \"relationship\"."
        },
        {
            "question": "be on good terms with",
            "options": [
                "ことわざ",
                "なかよく します",
                "ひつよう［な］",
                "せつび"
            ],
            "correctIndex": 1,
            "explanation": "「なかよく します」 (仲よく します) means \"be on good terms with\"."
        },
        {
            "question": "necessary, essential",
            "options": [
                "しま",
                "はくば",
                "おくじょう",
                "ひつよう［な］"
            ],
            "correctIndex": 3,
            "explanation": "「ひつよう［な］」 (必要［な］) means \"necessary, essential\"."
        },
        {
            "question": "pick up",
            "options": [
                "かんけい",
                "ことわざ",
                "ひろいます",
                "むかし"
            ],
            "correctIndex": 2,
            "explanation": "「ひろいます」 (拾います) means \"pick up\"."
        },
        {
            "question": "get through [on the telephone]",
            "options": [
                "レバー",
                "むこう",
                "なかよく します",
                "かかります［でんわが～］"
            ],
            "correctIndex": 3,
            "explanation": "「かかります［でんわが～］」 (かかります［電話が～］) means \"get through [on the telephone]\"."
        },
        {
            "question": "comfortable, easy",
            "options": [
                "せつび",
                "ハイキング",
                "らく［な］",
                "はこね"
            ],
            "correctIndex": 2,
            "explanation": "「らく［な］」 (楽［な］) means \"comfortable, easy\"."
        },
        {
            "question": "rare, uncommon",
            "options": [
                "ひろいます",
                "おくじょう",
                "かかります［でんわが～］",
                "めずらしい"
            ],
            "correctIndex": 3,
            "explanation": "「めずらしい」 (珍しい) means \"rare, uncommon\"."
        },
        {
            "question": "person (respectful equivalent of ひと)",
            "options": [
                "カーテン",
                "おくじょう",
                "かた",
                "これで おわります。"
            ],
            "correctIndex": 2,
            "explanation": "「かた」 (方) means \"person (respectful equivalent of ひと)\"."
        },
        {
            "question": "village",
            "options": [
                "むら",
                "みんなの がっこう",
                "ことわざ",
                "かんけい"
            ],
            "correctIndex": 0,
            "explanation": "「むら」 (村) means \"village\"."
        },
        {
            "question": "hiking",
            "options": [
                "れきし",
                "らく［な］",
                "ことわざ",
                "ハイキング"
            ],
            "correctIndex": 3,
            "explanation": "「ハイキング」 means \"hiking\"."
        },
        {
            "question": "operation",
            "options": [
                "もっと",
                "そうさ",
                "こまります",
                "めずらしい"
            ],
            "correctIndex": 1,
            "explanation": "「そうさ」 (操作) means \"operation\"."
        },
        {
            "question": "method",
            "options": [
                "にゅうりょくします",
                "たのしみ",
                "ほうほう",
                "さとうしか"
            ],
            "correctIndex": 2,
            "explanation": "「ほうほう」 (方法) means \"method\"."
        },
        {
            "question": "lid, cover, cap",
            "options": [
                "ふた",
                "みんなの がっこう",
                "さあ",
                "しゅ"
            ],
            "correctIndex": 0,
            "explanation": "「ふた」 means \"lid, cover, cap\"."
        },
        {
            "question": "a piece of music",
            "options": [
                "さとうしか",
                "きょく",
                "むら",
                "ただしい"
            ],
            "correctIndex": 1,
            "explanation": "「きょく」 (曲) means \"a piece of music\"."
        },
        {
            "question": "pleasure, enjoyment, expectation",
            "options": [
                "しがこうげん",
                "かいがい",
                "むかし",
                "たのしみ"
            ],
            "correctIndex": 3,
            "explanation": "「たのしみ」 (楽しみ) means \"pleasure, enjoyment, expectation\"."
        },
        {
            "question": "first",
            "options": [
                "なおります［びょうきが～］",
                "はじめに",
                "くりっくします",
                "くさつ"
            ],
            "correctIndex": 1,
            "explanation": "「はじめに」 (初めに) means \"first\"."
        },
        {
            "question": "We'll finish now.",
            "options": [
                "これで おわります。",
                "さとうしか",
                "はる",
                "やこうバス"
            ],
            "correctIndex": 0,
            "explanation": "「これで おわります。」 (これで 終わります。) means \"We'll finish now.\"."
        },
        {
            "question": "resort in Nagano Prefecture",
            "options": [
                "これで おわりましょう。",
                "きょか",
                "はくば",
                "はる"
            ],
            "correctIndex": 2,
            "explanation": "「はくば」 (白馬) means \"resort in Nagano Prefecture\"."
        }
    ],
    "Lesson 36": [
        {
            "question": "encounter [an accident]",
            "options": [
                "あいます［じこに～］",
                "けんこう",
                "きもち",
                "つかって いらっしゃるんですね。"
            ],
            "correctIndex": 0,
            "explanation": "「あいます［じこに～］」 (あいます［事故に～］) means \"encounter [an accident]\"."
        },
        {
            "question": "save money",
            "options": [
                "ちがいます",
                "きしゃ",
                "まいつき",
                "ちょきんします"
            ],
            "correctIndex": 3,
            "explanation": "「ちょきんします」 (貯金します) means \"save money\"."
        },
        {
            "question": "pass [7 o'clock]",
            "options": [
                "すぎます［７じを～］",
                "かなり",
                "けんこう",
                "こうじょう"
            ],
            "correctIndex": 0,
            "explanation": "「すぎます［７じを～］」 (過ぎます［７時を～］) means \"pass [7 o'clock]\"."
        },
        {
            "question": "get accustomed to [one's job]",
            "options": [
                "かたい",
                "おおぜいの ～",
                "ーせいき",
                "なれます［しごとに～］"
            ],
            "correctIndex": 3,
            "explanation": "「なれます［しごとに～］」 (慣れます［仕事に～］) means \"get accustomed to [one's job]\"."
        },
        {
            "question": "[food] rot",
            "options": [
                "のりもの",
                "けんどう",
                "じゅうどう",
                "くさります［たべものが～］"
            ],
            "correctIndex": 3,
            "explanation": "「くさります［たべものが～］」 (腐ります［食べ物が～］) means \"[food] rot\"."
        },
        {
            "question": "kendo (Japanese style fencing)",
            "options": [
                "あいます［じこに～］",
                "けんどう",
                "じゆうに",
                "のりもの"
            ],
            "correctIndex": 1,
            "explanation": "「けんどう」 (剣道) means \"kendo (Japanese style fencing)\"."
        },
        {
            "question": "judo",
            "options": [
                "けんこう",
                "おきゃくさま",
                "じゅうどう",
                "あんぜん［な］"
            ],
            "correctIndex": 2,
            "explanation": "「じゅうどう」 (柔道) means \"judo\"."
        },
        {
            "question": "rush hour",
            "options": [
                "このごろ",
                "ラッシュ",
                "めずらしい",
                "ちょきんします"
            ],
            "correctIndex": 1,
            "explanation": "「ラッシュ」 means \"rush hour\"."
        },
        {
            "question": "space, universe",
            "options": [
                "～ずつ",
                "うちゅう",
                "でます［しあいに～］",
                "まいしゅう"
            ],
            "correctIndex": 1,
            "explanation": "「うちゅう」 (宇宙) means \"space, universe\"."
        },
        {
            "question": "a piece of music",
            "options": [
                "おおぜいの ～",
                "すぎます［７じを～］",
                "きょく",
                "その ほうが ～"
            ],
            "correctIndex": 2,
            "explanation": "「きょく」 (曲) means \"a piece of music\"."
        },
        {
            "question": "every week",
            "options": [
                "～とか、～とか",
                "まいしゅう",
                "ーせいき",
                "このごろ"
            ],
            "correctIndex": 1,
            "explanation": "「まいしゅう」 (毎週) means \"every week\"."
        },
        {
            "question": "every month",
            "options": [
                "チャレンジします",
                "タンゴ",
                "やせます",
                "まいつき"
            ],
            "correctIndex": 3,
            "explanation": "「まいつき」 (毎月) means \"every month\"."
        },
        {
            "question": "every year",
            "options": [
                "まいとし（まいねん）",
                "して いらっしゃいます",
                "とびます",
                "れきし"
            ],
            "correctIndex": 0,
            "explanation": "「まいとし（まいねん）」 (毎年) means \"every year\"."
        },
        {
            "question": "these days",
            "options": [
                "かならず",
                "このごろ",
                "チャレンジします",
                "やわらかい"
            ],
            "correctIndex": 1,
            "explanation": "「このごろ」 means \"these days\"."
        },
        {
            "question": "finally",
            "options": [
                "すぎます［７じを～］",
                "ほとんど",
                "その ほうが ～",
                "やっと"
            ],
            "correctIndex": 3,
            "explanation": "「やっと」 means \"finally\"."
        },
        {
            "question": "fairly",
            "options": [
                "ショパン",
                "れきし",
                "きもち",
                "かなり"
            ],
            "correctIndex": 3,
            "explanation": "「かなり」 means \"fairly\"."
        },
        {
            "question": "without fail, by any means",
            "options": [
                "かならず",
                "とびます",
                "きせん",
                "こうじょう"
            ],
            "correctIndex": 0,
            "explanation": "「かならず」 (必ず) means \"without fail, by any means\"."
        },
        {
            "question": "absolutely",
            "options": [
                "ぜったいに",
                "ちょきんします",
                "とびます",
                "ショパン"
            ],
            "correctIndex": 0,
            "explanation": "「ぜったいに」 (絶対に) means \"absolutely\"."
        },
        {
            "question": "well, skillfully",
            "options": [
                "くさります［たべものが～］",
                "あんぜん［な］",
                "でんし～",
                "じょうずに"
            ],
            "correctIndex": 3,
            "explanation": "「じょうずに」 (上手に) means \"well, skillfully\"."
        },
        {
            "question": "as much as possible",
            "options": [
                "すいえい",
                "まいつき",
                "できるだけ",
                "まいしゅう"
            ],
            "correctIndex": 2,
            "explanation": "「できるだけ」 means \"as much as possible\"."
        },
        {
            "question": "almost all (in affirmative sentences), hardly, scarcely (in negative sentences)",
            "options": [
                "このごろ",
                "まいとし（まいねん）",
                "ほとんど",
                "けんどう"
            ],
            "correctIndex": 2,
            "explanation": "「ほとんど」 means \"almost all (in affirmative sentences), hardly, scarcely (in negative sentences)\"."
        },
        {
            "question": "Chopin, Polish musician (1810-49)",
            "options": [
                "ショパン",
                "じゆうに",
                "なれます［しごとに～］",
                "おおぜいの ～"
            ],
            "correctIndex": 0,
            "explanation": "「ショパン」 means \"Chopin, Polish musician (1810-49)\"."
        },
        {
            "question": "visitor, guest, customer, client (respectful equivalent of おきゃくさん)",
            "options": [
                "おきゃくさま",
                "ショパン",
                "あいます［じこに～］",
                "じょうずに"
            ],
            "correctIndex": 0,
            "explanation": "「おきゃくさま」 (お客様) means \"visitor, guest, customer, client (respectful equivalent of おきゃくさん)\"."
        },
        {
            "question": "special",
            "options": [
                "あいます［じこに～］",
                "けいたい～",
                "けんこう",
                "とくべつ［な］"
            ],
            "correctIndex": 3,
            "explanation": "「とくべつ［な］」 (特別［な］) means \"special\"."
        },
        {
            "question": "be doing (respectful equivalent of して います)",
            "options": [
                "ちょきんします",
                "うちます［ワープロを～］",
                "きせん",
                "して いらっしゃいます"
            ],
            "correctIndex": 3,
            "explanation": "「して いらっしゃいます」 means \"be doing (respectful equivalent of して います)\"."
        },
        {
            "question": "swimming",
            "options": [
                "すいえい",
                "うちゅう",
                "とどきます［にもつが～］",
                "まいとし（まいねん）"
            ],
            "correctIndex": 0,
            "explanation": "「すいえい」 (水泳) means \"swimming\"."
        },
        {
            "question": "be different",
            "options": [
                "かなり",
                "ちきゅう",
                "ちがいます",
                "ふとります"
            ],
            "correctIndex": 2,
            "explanation": "「ちがいます」 (違います) means \"be different\"."
        },
        {
            "question": "You're using, aren't you? (respectful equivalent of つかって いるんですね)",
            "options": [
                "つかって いらっしゃるんですね。",
                "チャレンジします",
                "ちきゅう",
                "すいえい"
            ],
            "correctIndex": 0,
            "explanation": "「つかって いらっしゃるんですね。」 (使って いらっしゃるんですね。) means \"You're using, aren't you? (respectful equivalent of つかって いるんですね)\"."
        },
        {
            "question": "challenge",
            "options": [
                "なれます［しごとに～］",
                "して いらっしゃいます",
                "ふとります",
                "チャレンジします"
            ],
            "correctIndex": 3,
            "explanation": "「チャレンジします」 means \"challenge\"."
        },
        {
            "question": "spirit, mood",
            "options": [
                "きもち",
                "すいえい",
                "じゅうどう",
                "かたい"
            ],
            "correctIndex": 0,
            "explanation": "「きもち」 (気持ち) means \"spirit, mood\"."
        },
        {
            "question": "vehicle, means of transportation",
            "options": [
                "のりもの",
                "れきし",
                "ちきゅう",
                "じゆうに"
            ],
            "correctIndex": 0,
            "explanation": "「のりもの」 (乗り物) means \"vehicle, means of transportation\"."
        },
        {
            "question": "-th century",
            "options": [
                "ちきゅう",
                "ふとります",
                "ーせいき",
                "その ほうが ～"
            ],
            "correctIndex": 2,
            "explanation": "「ーせいき」 (ー世紀) means \"-th century\"."
        },
        {
            "question": "far, remote place",
            "options": [
                "とおく",
                "かたい",
                "できるだけ",
                "ライトきょうだい"
            ],
            "correctIndex": 0,
            "explanation": "「とおく」 (遠く) means \"far, remote place\"."
        },
        {
            "question": "rare, uncommon",
            "options": [
                "かたい",
                "きょく",
                "できるだけ",
                "めずらしい"
            ],
            "correctIndex": 3,
            "explanation": "「めずらしい」 (珍しい) means \"rare, uncommon\"."
        },
        {
            "question": "locomotive",
            "options": [
                "じゆうに",
                "タンゴ",
                "ちがいます",
                "きしゃ"
            ],
            "correctIndex": 3,
            "explanation": "「きしゃ」 (汽車) means \"locomotive\"."
        },
        {
            "question": "steam boat",
            "options": [
                "かなり",
                "きせん",
                "やせます",
                "あいます［じこに～］"
            ],
            "correctIndex": 1,
            "explanation": "「きせん」 (汽船) means \"steam boat\"."
        },
        {
            "question": "many (people)",
            "options": [
                "かならず",
                "とびます",
                "まいつき",
                "おおぜいの ～"
            ],
            "correctIndex": 3,
            "explanation": "「おおぜいの ～」 (大勢の ～) means \"many (people)\"."
        },
        {
            "question": "carry, transport",
            "options": [
                "きょく",
                "できるだけ",
                "はこびます",
                "～ずつ"
            ],
            "correctIndex": 2,
            "explanation": "「はこびます」 (運びます) means \"carry, transport\"."
        },
        {
            "question": "use",
            "options": [
                "りようします",
                "まいつき",
                "ーせいき",
                "すいえい"
            ],
            "correctIndex": 0,
            "explanation": "「りようします」 (利用します) means \"use\"."
        },
        {
            "question": "freely",
            "options": [
                "くさります［たべものが～］",
                "じゅうどう",
                "けんどう",
                "じゆうに"
            ],
            "correctIndex": 3,
            "explanation": "「じゆうに」 (自由に) means \"freely\"."
        },
        {
            "question": "[parcels] be delivered",
            "options": [
                "とどきます［にもつが～］",
                "まいつき",
                "ライトきょうだい",
                "じゅうどう"
            ],
            "correctIndex": 0,
            "explanation": "「とどきます［にもつが～］」 (届きます［荷物が～］) means \"[parcels] be delivered\"."
        },
        {
            "question": "participate [in the game]",
            "options": [
                "でます［しあいに～］",
                "すいえい",
                "じょうずに",
                "うちます［ワープロを～］"
            ],
            "correctIndex": 0,
            "explanation": "「でます［しあいに～］」 (出ます［試合に～］) means \"participate [in the game]\"."
        },
        {
            "question": "type [on a word processor]",
            "options": [
                "うちます［ワープロを～］",
                "ふとります",
                "きもち",
                "あいます［じこに～］"
            ],
            "correctIndex": 0,
            "explanation": "「うちます［ワープロを～］」 (打ちます［ワープロを～］) means \"type [on a word processor]\"."
        },
        {
            "question": "get fat",
            "options": [
                "ライトきょうだい",
                "ふとります",
                "きょく",
                "ラッシュ"
            ],
            "correctIndex": 1,
            "explanation": "「ふとります」 (太ります) means \"get fat\"."
        },
        {
            "question": "get slim, lose weight",
            "options": [
                "やせます",
                "じゅうどう",
                "とおく",
                "けんこう"
            ],
            "correctIndex": 0,
            "explanation": "「やせます」 means \"get slim, lose weight\"."
        },
        {
            "question": "hard, tough, solid",
            "options": [
                "ちょきんします",
                "ショパン",
                "かたい",
                "あんぜん［な］"
            ],
            "correctIndex": 2,
            "explanation": "「かたい」 (硬い) means \"hard, tough, solid\"."
        },
        {
            "question": "soft, tender",
            "options": [
                "おおぜいの ～",
                "やわらかい",
                "して いらっしゃいます",
                "きょく"
            ],
            "correctIndex": 1,
            "explanation": "「やわらかい」 (軟らかい) means \"soft, tender\"."
        },
        {
            "question": "electronic ～",
            "options": [
                "ぜったいに",
                "とびます",
                "のりもの",
                "でんし～"
            ],
            "correctIndex": 3,
            "explanation": "「でんし～」 (電子～) means \"electronic ～\"."
        },
        {
            "question": "portable ～",
            "options": [
                "あいます［じこに～］",
                "かたい",
                "けいたい～",
                "ちがいます"
            ],
            "correctIndex": 2,
            "explanation": "「けいたい～」 (携帯～) means \"portable ～\"."
        },
        {
            "question": "factory",
            "options": [
                "やわらかい",
                "れきし",
                "このごろ",
                "こうじょう"
            ],
            "correctIndex": 3,
            "explanation": "「こうじょう」 (工場) means \"factory\"."
        },
        {
            "question": "health",
            "options": [
                "まいとし（まいねん）",
                "ライトきょうだい",
                "やせます",
                "けんこう"
            ],
            "correctIndex": 3,
            "explanation": "「けんこう」 (健康) means \"health\"."
        },
        {
            "question": "～ (some amount) per (some unit)",
            "options": [
                "できるだけ",
                "～ずつ",
                "ちきゅう",
                "とおく"
            ],
            "correctIndex": 1,
            "explanation": "「～ずつ」 means \"～ (some amount) per (some unit)\"."
        },
        {
            "question": "That is more ～",
            "options": [
                "はこびます",
                "じゆうに",
                "その ほうが ～",
                "でます［しあいに～］"
            ],
            "correctIndex": 2,
            "explanation": "「その ほうが ～」 means \"That is more ～\"."
        },
        {
            "question": "～, ～, and so on",
            "options": [
                "ラッシュ",
                "～とか、～とか",
                "おきゃくさま",
                "とびます"
            ],
            "correctIndex": 1,
            "explanation": "「～とか、～とか」 means \"～, ～, and so on\"."
        },
        {
            "question": "tango",
            "options": [
                "タンゴ",
                "まいつき",
                "のりもの",
                "こうじょう"
            ],
            "correctIndex": 0,
            "explanation": "「タンゴ」 means \"tango\"."
        },
        {
            "question": "history",
            "options": [
                "ーせいき",
                "ほとんど",
                "れきし",
                "やわらかい"
            ],
            "correctIndex": 2,
            "explanation": "「れきし」 (歴史) means \"history\"."
        },
        {
            "question": "fly",
            "options": [
                "して いらっしゃいます",
                "でます［しあいに～］",
                "うちゅう",
                "とびます"
            ],
            "correctIndex": 3,
            "explanation": "「とびます」 (飛びます) means \"fly\"."
        },
        {
            "question": "safe",
            "options": [
                "のりもの",
                "とおく",
                "おきゃくさま",
                "あんぜん［な］"
            ],
            "correctIndex": 3,
            "explanation": "「あんぜん［な］」 (安全［な］) means \"safe\"."
        },
        {
            "question": "earth",
            "options": [
                "できるだけ",
                "まいとし（まいねん）",
                "けんこう",
                "ちきゅう"
            ],
            "correctIndex": 3,
            "explanation": "「ちきゅう」 (地球) means \"earth\"."
        },
        {
            "question": "Wright brothers, American pioneers in aviation ; Wilbur Wright (1867-1912) Orville Wright (1871-1948)",
            "options": [
                "おきゃくさま",
                "ショパン",
                "はこびます",
                "ライトきょうだい"
            ],
            "correctIndex": 3,
            "explanation": "「ライトきょうだい」 (ライト兄弟) means \"Wright brothers, American pioneers in aviation ; Wilbur Wright (1867-1912) Orville Wright (1871-1948)\"."
        }
    ],
    "Lesson 37": [
        {
            "question": "praise",
            "options": [
                "ドミニカ",
                "～に よって",
                "ほめます",
                "むぎ"
            ],
            "correctIndex": 2,
            "explanation": "「ほめます」 (褒めます) means \"praise\"."
        },
        {
            "question": "scold",
            "options": [
                "とうだいじ",
                "～の ひとつ",
                "ちょうこく",
                "しかります"
            ],
            "correctIndex": 3,
            "explanation": "「しかります」 means \"scold\"."
        },
        {
            "question": "invite, ask someone to join",
            "options": [
                "さそいます",
                "よかったですね。",
                "しかし",
                "むぎ"
            ],
            "correctIndex": 0,
            "explanation": "「さそいます」 (誘います) means \"invite, ask someone to join\"."
        },
        {
            "question": "invite",
            "options": [
                "とうだいじ",
                "うつくしい",
                "－キロ",
                "しょうたいします"
            ],
            "correctIndex": 3,
            "explanation": "「しょうたいします」 (招待します) means \"invite\"."
        },
        {
            "question": "ask, request",
            "options": [
                "たのみます",
                "えどじだい",
                "ごうか［な］",
                "ちょうこく"
            ],
            "correctIndex": 0,
            "explanation": "「たのみます」 (頼みます) means \"ask, request\"."
        },
        {
            "question": "warn, advise",
            "options": [
                "ちゅういします",
                "－せいき",
                "とうだいじ",
                "ねずみ"
            ],
            "correctIndex": 0,
            "explanation": "「ちゅういします」 (注意します) means \"warn, advise\"."
        },
        {
            "question": "rob, steal",
            "options": [
                "たのみます",
                "ロシア",
                "ほんやくします",
                "とります"
            ],
            "correctIndex": 3,
            "explanation": "「とります」 means \"rob, steal\"."
        },
        {
            "question": "step on (someone's foot)",
            "options": [
                "ほめます",
                "いいつたえ",
                "ふみます",
                "ねずみ"
            ],
            "correctIndex": 2,
            "explanation": "「ふみます」 (踏みます) means \"step on (someone's foot)\"."
        },
        {
            "question": "break, destroy",
            "options": [
                "こわします",
                "はつめいします",
                "せっけいします",
                "インスタントラーメン"
            ],
            "correctIndex": 0,
            "explanation": "「こわします」 (壊します) means \"break, destroy\"."
        },
        {
            "question": "make ～ dirty",
            "options": [
                "ねむりねこ",
                "むぎ",
                "げんじものがたり",
                "よごします"
            ],
            "correctIndex": 3,
            "explanation": "「よごします」 (汚します) means \"make ～ dirty\"."
        },
        {
            "question": "hold, carry out, practise",
            "options": [
                "ワールドカップ",
                "おこないます",
                "なかま",
                "げんじものがたり"
            ],
            "correctIndex": 1,
            "explanation": "「おこないます」 (行います) means \"hold, carry out, practise\"."
        },
        {
            "question": "export",
            "options": [
                "なにご",
                "ポルトガル",
                "ゆしゅつします",
                "いっぴき もいません。"
            ],
            "correctIndex": 2,
            "explanation": "「ゆしゅつします」 (輸出します) means \"export\"."
        },
        {
            "question": "import",
            "options": [
                "ゆにゅうします",
                "ゆしゅつします",
                "しょうたいします",
                "～に よって"
            ],
            "correctIndex": 0,
            "explanation": "「ゆにゅうします」 (輸入します) means \"import\"."
        },
        {
            "question": "translate",
            "options": [
                "ねむります",
                "ほんやくします",
                "たのみます",
                "せかいいさん"
            ],
            "correctIndex": 1,
            "explanation": "「ほんやくします」 (翻訳します) means \"translate\"."
        },
        {
            "question": "invent",
            "options": [
                "しかります",
                "はつめいします",
                "むぎ",
                "けんちくか"
            ],
            "correctIndex": 1,
            "explanation": "「はつめいします」 (発明します) means \"invent\"."
        },
        {
            "question": "discover",
            "options": [
                "きん",
                "ちゅういします",
                "しかります",
                "はっけんします"
            ],
            "correctIndex": 3,
            "explanation": "「はっけんします」 (発見します) means \"discover\"."
        },
        {
            "question": "rice",
            "options": [
                "こめ",
                "こわします",
                "ポルトガル",
                "とち"
            ],
            "correctIndex": 0,
            "explanation": "「こめ」 (米) means \"rice\"."
        },
        {
            "question": "barley, wheat",
            "options": [
                "かがくしゃ",
                "むぎ",
                "ゆにゅうします",
                "その あと"
            ],
            "correctIndex": 1,
            "explanation": "「むぎ」 (麦) means \"barley, wheat\"."
        },
        {
            "question": "oil",
            "options": [
                "ワールドカップ",
                "そのご",
                "せきゆ",
                "たのみます"
            ],
            "correctIndex": 2,
            "explanation": "「せきゆ」 (石油) means \"oil\"."
        },
        {
            "question": "raw material",
            "options": [
                "けいかん",
                "しかし",
                "ちょうこく",
                "げんりょう"
            ],
            "correctIndex": 3,
            "explanation": "「げんりょう」 (原料) means \"raw material\"."
        },
        {
            "question": "instant noodles",
            "options": [
                "とうしょうぐう",
                "インスタントラーメン",
                "けいかん",
                "ドミニカ"
            ],
            "correctIndex": 1,
            "explanation": "「インスタントラーメン」 means \"instant noodles\"."
        },
        {
            "question": "date",
            "options": [
                "はつめいします",
                "ほります",
                "デート",
                "しょうたいします"
            ],
            "correctIndex": 2,
            "explanation": "「デート」 means \"date\"."
        },
        {
            "question": "thief, robber",
            "options": [
                "とうだいじ",
                "どろぼう",
                "～の ひとつ",
                "せかいじゅう"
            ],
            "correctIndex": 1,
            "explanation": "「どろぼう」 (泥棒) means \"thief, robber\"."
        },
        {
            "question": "policeman",
            "options": [
                "うつくしい",
                "ほめます",
                "けいかん",
                "とります"
            ],
            "correctIndex": 2,
            "explanation": "「けいかん」 (警官) means \"policeman\"."
        },
        {
            "question": "all over the world",
            "options": [
                "ポルトガル",
                "かがくしゃ",
                "せかいじゅう",
                "せかいいさん"
            ],
            "correctIndex": 2,
            "explanation": "「せかいじゅう」 (世界中) means \"all over the world\"."
        },
        {
            "question": "all over ～",
            "options": [
                "ほんもの",
                "よごします",
                "ふみます",
                "～じゅう"
            ],
            "correctIndex": 3,
            "explanation": "「～じゅう」 (～中) means \"all over ～\"."
        },
        {
            "question": "-th century",
            "options": [
                "せっけいします",
                "おこないます",
                "－せいき",
                "せかいいさん"
            ],
            "correctIndex": 2,
            "explanation": "「－せいき」 (－世紀) means \"-th century\"."
        },
        {
            "question": "what language",
            "options": [
                "せっけいします",
                "なにご",
                "ゆにゅうします",
                "～の ひとつ"
            ],
            "correctIndex": 1,
            "explanation": "「なにご」 (何語) means \"what language\"."
        },
        {
            "question": "somebody",
            "options": [
                "－キロ",
                "だれか",
                "よごします",
                "しかります"
            ],
            "correctIndex": 1,
            "explanation": "「だれか」 (誰か) means \"somebody\"."
        },
        {
            "question": "Sounds good.",
            "options": [
                "よかったですね。",
                "ちゅういします",
                "ゆしゅつします",
                "ロシア"
            ],
            "correctIndex": 0,
            "explanation": "「よかったですね。」 means \"Sounds good.\"."
        },
        {
            "question": "Olympic Games",
            "options": [
                "けんちくか",
                "オリンピック",
                "ほんもの",
                "ねむります"
            ],
            "correctIndex": 1,
            "explanation": "「オリンピック」 means \"Olympic Games\"."
        },
        {
            "question": "World Cup",
            "options": [
                "いっぴき もいません。",
                "むぎ",
                "ワールドカップ",
                "オリンピック"
            ],
            "correctIndex": 2,
            "explanation": "「ワールドカップ」 means \"World Cup\"."
        },
        {
            "question": "Todaiji Temple",
            "options": [
                "とうだいじ",
                "そのご",
                "せきゆ",
                "ごうか［な］"
            ],
            "correctIndex": 0,
            "explanation": "「とうだいじ」 (東大寺) means \"Todaiji Temple\"."
        },
        {
            "question": "Great Buddha",
            "options": [
                "そうおん",
                "せかいじゅう",
                "うつくしい",
                "だいぶつ"
            ],
            "correctIndex": 3,
            "explanation": "「だいぶつ」 (大仏) means \"Great Buddha\"."
        },
        {
            "question": "Edo Period (1603-1868)",
            "options": [
                "えどじだい",
                "ロシア",
                "デート",
                "インスタントラーメン"
            ],
            "correctIndex": 0,
            "explanation": "「えどじだい」 (江戸時代) means \"Edo Period (1603-1868)\"."
        },
        {
            "question": "Portugal",
            "options": [
                "ポルトガル",
                "なかま",
                "りようします",
                "サウジアラビア"
            ],
            "correctIndex": 0,
            "explanation": "「ポルトガル」 means \"Portugal\"."
        },
        {
            "question": "Saudia Arabia",
            "options": [
                "やけます［うちが～］",
                "げんりょう",
                "サウジアラビア",
                "いいつたえ"
            ],
            "correctIndex": 2,
            "explanation": "「サウジアラビア」 means \"Saudia Arabia\"."
        },
        {
            "question": "Russia",
            "options": [
                "ロシア",
                "かがくしゃ",
                "まんが",
                "うめたてます"
            ],
            "correctIndex": 0,
            "explanation": "「ロシア」 means \"Russia\"."
        },
        {
            "question": "Ladies and gentlemen, everybody (respect equivalent of みなさん)",
            "options": [
                "なにご",
                "ポルトガル",
                "ちょうこく",
                "みなさま"
            ],
            "correctIndex": 3,
            "explanation": "「みなさま」 (皆様) means \"Ladies and gentlemen, everybody (respect equivalent of みなさん)\"."
        },
        {
            "question": "[house] burn down",
            "options": [
                "やけます［うちが～］",
                "ねむりねこ",
                "ほります",
                "うつくしい"
            ],
            "correctIndex": 0,
            "explanation": "「やけます［うちが～］」 (焼けます［うちが～］) means \"[house] burn down\"."
        },
        {
            "question": "after that, later",
            "options": [
                "よごします",
                "なにご",
                "そのご",
                "むらさきしきぶ"
            ],
            "correctIndex": 2,
            "explanation": "「そのご」 (その後) means \"after that, later\"."
        },
        {
            "question": "World Heritage Site",
            "options": [
                "－キロ",
                "せかいいさん",
                "こめ",
                "みなさま"
            ],
            "correctIndex": 1,
            "explanation": "「せかいいさん」 (世界遺産) means \"World Heritage Site\"."
        },
        {
            "question": "one of the ～",
            "options": [
                "～の ひとつ",
                "せきゆ",
                "まんが",
                "どろぼう"
            ],
            "correctIndex": 0,
            "explanation": "「～の ひとつ」 (～の 一つ) means \"one of the ～\"."
        },
        {
            "question": "golden colour",
            "options": [
                "きんいろ",
                "アクセス",
                "そのご",
                "けいかん"
            ],
            "correctIndex": 0,
            "explanation": "「きんいろ」 (金色) means \"golden colour\"."
        },
        {
            "question": "real thing",
            "options": [
                "ごうか［な］",
                "ほんもの",
                "むぎ",
                "デート"
            ],
            "correctIndex": 1,
            "explanation": "「ほんもの」 (本物) means \"real thing\"."
        },
        {
            "question": "gold",
            "options": [
                "おこします",
                "そのご",
                "せかいじゅう",
                "きん"
            ],
            "correctIndex": 3,
            "explanation": "「きん」 (金) means \"gold\"."
        },
        {
            "question": "－ kilogrammes, － kilometres",
            "options": [
                "きんいろ",
                "げんりょう",
                "－キロ",
                "インスタントラーメン"
            ],
            "correctIndex": 2,
            "explanation": "「－キロ」 means \"－ kilogrammes, － kilometres\"."
        },
        {
            "question": "beautiful, pretty",
            "options": [
                "げんじものがたり",
                "うつくしい",
                "ねむりねこ",
                "～の ひとつ"
            ],
            "correctIndex": 1,
            "explanation": "「うつくしい」 (美しい) means \"beautiful, pretty\"."
        },
        {
            "question": "gorgeous",
            "options": [
                "どろぼう",
                "ゆしゅつします",
                "みなさま",
                "ごうか［な］"
            ],
            "correctIndex": 3,
            "explanation": "「ごうか［な］」 (豪華［な］) means \"gorgeous\"."
        },
        {
            "question": "engraving, carving, sculpture",
            "options": [
                "ぎじゅつ",
                "～の ひとつ",
                "ほんもの",
                "ちょうこく"
            ],
            "correctIndex": 3,
            "explanation": "「ちょうこく」 (彫刻) means \"engraving, carving, sculpture\"."
        },
        {
            "question": "tradition, legend",
            "options": [
                "いいつたえ",
                "ほんやくします",
                "ドミニカ",
                "なにご"
            ],
            "correctIndex": 0,
            "explanation": "「いいつたえ」 (言い伝え) means \"tradition, legend\"."
        },
        {
            "question": "sleep",
            "options": [
                "ねむります",
                "せかいじゅう",
                "デート",
                "アクセス"
            ],
            "correctIndex": 0,
            "explanation": "「ねむります」 (眠ります) means \"sleep\"."
        },
        {
            "question": "engrave, carve",
            "options": [
                "しょうたいします",
                "こわします",
                "ほります",
                "ゆしゅつします"
            ],
            "correctIndex": 2,
            "explanation": "「ほります」 (彫ります) means \"engrave, carve\"."
        },
        {
            "question": "colleague, friend",
            "options": [
                "－キロ",
                "ワールドカップ",
                "なかま",
                "しかります"
            ],
            "correctIndex": 2,
            "explanation": "「なかま」 (仲間) means \"colleague, friend\"."
        },
        {
            "question": "however, but",
            "options": [
                "しかし",
                "－キロ",
                "なにご",
                "なかま"
            ],
            "correctIndex": 0,
            "explanation": "「しかし」 means \"however, but\"."
        },
        {
            "question": "after that",
            "options": [
                "ねずみ",
                "その あと",
                "ゆにゅうします",
                "いっしょうけんめい"
            ],
            "correctIndex": 1,
            "explanation": "「その あと」 means \"after that\"."
        },
        {
            "question": "with all one's effort",
            "options": [
                "いっしょうけんめい",
                "かがくしゃ",
                "ワールドカップ",
                "ちょうこく"
            ],
            "correctIndex": 0,
            "explanation": "「いっしょうけんめい」 (一生懸命) means \"with all one's effort\"."
        },
        {
            "question": "mouse",
            "options": [
                "とります",
                "ねずみ",
                "そうおん",
                "そのご"
            ],
            "correctIndex": 1,
            "explanation": "「ねずみ」 means \"mouse\"."
        },
        {
            "question": "There is not a single (mouse).",
            "options": [
                "よごします",
                "いっぴき もいません。",
                "デート",
                "ゆしゅつします"
            ],
            "correctIndex": 1,
            "explanation": "「いっぴき もいません。」 (一匹も いません。) means \"There is not a single (mouse).\"."
        },
        {
            "question": "shrine dedicated to Tokugawa Ieyasu in Nikko, Tochigi prefecture",
            "options": [
                "きんいろ",
                "とうしょうぐう",
                "せっけいします",
                "よごします"
            ],
            "correctIndex": 1,
            "explanation": "「とうしょうぐう」 (東照宮) means \"shrine dedicated to Tokugawa Ieyasu in Nikko, Tochigi prefecture\"."
        },
        {
            "question": "The Sleeping Cat",
            "options": [
                "ドミニカ",
                "ひだりじんごろう",
                "せかいじゅう",
                "ねむりねこ"
            ],
            "correctIndex": 3,
            "explanation": "「ねむりねこ」 (眠り猫) means \"The Sleeping Cat\"."
        },
        {
            "question": "famous Japanese sculptor of the Edo Period (1594-1651)",
            "options": [
                "どろぼう",
                "たのみます",
                "ひだりじんごろう",
                "ちゅういします"
            ],
            "correctIndex": 2,
            "explanation": "「ひだりじんごろう」 (左甚五郎) means \"famous Japanese sculptor of the Edo Period (1594-1651)\"."
        },
        {
            "question": "wake (someone) up",
            "options": [
                "ちゅういします",
                "しょうたいします",
                "おこします",
                "うつくしい"
            ],
            "correctIndex": 2,
            "explanation": "「おこします」 (起こします) means \"wake (someone) up\"."
        },
        {
            "question": "design, plan",
            "options": [
                "とります",
                "うつくしい",
                "せっけいします",
                "こわします"
            ],
            "correctIndex": 2,
            "explanation": "「せっけいします」 (設計します) means \"design, plan\"."
        },
        {
            "question": "architect",
            "options": [
                "ほんもの",
                "けんちくか",
                "うつくしい",
                "ライトきょうだい"
            ],
            "correctIndex": 1,
            "explanation": "「けんちくか」 (建築家) means \"architect\"."
        },
        {
            "question": "scientist",
            "options": [
                "けいかん",
                "かがくしゃ",
                "はっけんします",
                "よかったですね。"
            ],
            "correctIndex": 1,
            "explanation": "「かがくしゃ」 (科学者) means \"scientist\"."
        },
        {
            "question": "cartoon",
            "options": [
                "よかったですね。",
                "とります",
                "まんが",
                "やけます［うちが～］"
            ],
            "correctIndex": 2,
            "explanation": "「まんが」 (漫画) means \"cartoon\"."
        },
        {
            "question": "by ～",
            "options": [
                "ぎじゅつ",
                "～に よって",
                "なかま",
                "ドミニカ"
            ],
            "correctIndex": 1,
            "explanation": "「～に よって」 means \"by ～\"."
        },
        {
            "question": "Dominica",
            "options": [
                "けいかん",
                "とうしょうぐう",
                "げんじものがたり",
                "ドミニカ"
            ],
            "correctIndex": 3,
            "explanation": "「ドミニカ」 means \"Dominica\"."
        },
        {
            "question": "Wright brothers, American pioneers in aviation ; Wilbur Wright (1867-1912) Orville Wright (1871-1948)",
            "options": [
                "きんいろ",
                "～じゅう",
                "ライトきょうだい",
                "～の ひとつ"
            ],
            "correctIndex": 2,
            "explanation": "「ライトきょうだい」 (ライト兄弟) means \"Wright brothers, American pioneers in aviation ; Wilbur Wright (1867-1912) Orville Wright (1871-1948)\"."
        },
        {
            "question": "\"The Tale of Genji\" (Japanese novel)",
            "options": [
                "げんじものがたり",
                "みなさま",
                "せっけいします",
                "やけます［うちが～］"
            ],
            "correctIndex": 0,
            "explanation": "「げんじものがたり」 (源氏物語) means \"\"The Tale of Genji\" (Japanese novel)\"."
        },
        {
            "question": "Heian Period (9th Century) female novelist who wrote \"The Tale of Genji\" (973?-1014?)",
            "options": [
                "けんちくか",
                "とち",
                "ねむります",
                "むらさきしきぶ"
            ],
            "correctIndex": 3,
            "explanation": "「むらさきしきぶ」 (紫式部) means \"Heian Period (9th Century) female novelist who wrote \"The Tale of Genji\" (973?-1014?)\"."
        },
        {
            "question": "Alexander Graham Bell, American inventor (1847-1922)",
            "options": [
                "グラハムーベル",
                "よかったですね。",
                "－せいき",
                "むぎ"
            ],
            "correctIndex": 0,
            "explanation": "「グラハムーベル」 means \"Alexander Graham Bell, American inventor (1847-1922)\"."
        },
        {
            "question": "reclaim",
            "options": [
                "うめたてます",
                "はつめいします",
                "～に よって",
                "ロシア"
            ],
            "correctIndex": 0,
            "explanation": "「うめたてます」 (埋め立てます) means \"reclaim\"."
        },
        {
            "question": "technology, technique",
            "options": [
                "かがくしゃ",
                "なかま",
                "ぎじゅつ",
                "ごうか［な］"
            ],
            "correctIndex": 2,
            "explanation": "「ぎじゅつ」 (技術) means \"technology, technique\"."
        },
        {
            "question": "land",
            "options": [
                "インスタントラーメン",
                "そのご",
                "うめたてます",
                "とち"
            ],
            "correctIndex": 3,
            "explanation": "「とち」 (土地) means \"land\"."
        },
        {
            "question": "noise",
            "options": [
                "ワールドカップ",
                "おこないます",
                "そうおん",
                "けいかん"
            ],
            "correctIndex": 2,
            "explanation": "「そうおん」 (騒音) means \"noise\"."
        },
        {
            "question": "use",
            "options": [
                "いいつたえ",
                "りようします",
                "ワールドカップ",
                "げんじものがたり"
            ],
            "correctIndex": 1,
            "explanation": "「りようします」 (利用します) means \"use\"."
        },
        {
            "question": "access",
            "options": [
                "うめたてます",
                "アクセス",
                "そのご",
                "～に よって"
            ],
            "correctIndex": 1,
            "explanation": "「アクセス」 means \"access\"."
        }
    ],
    "Lesson 38": [
        {
            "question": "join [a tour], participate, attend",
            "options": [
                "さんかします［りょこうに～］",
                "ふしぎ［な］",
                "［あ、］いけない。",
                "こうじょう"
            ],
            "correctIndex": 0,
            "explanation": "「さんかします［りょこうに～］」 (参加します［旅行に～］) means \"join [a tour], participate, attend\"."
        },
        {
            "question": "breed, bring up",
            "options": [
                "けんこう",
                "あかちゃん",
                "そだてます",
                "じかんが たちます"
            ],
            "correctIndex": 2,
            "explanation": "「そだてます」 (育てます) means \"breed, bring up\"."
        },
        {
            "question": "carry, transport",
            "options": [
                "つきます［うそを～］",
                "せわを します",
                "はこびます",
                "しょうがっこう"
            ],
            "correctIndex": 2,
            "explanation": "「はこびます」 (運びます) means \"carry, transport\"."
        },
        {
            "question": "enter hospital",
            "options": [
                "ふたご",
                "チェンマイ",
                "おおきな ～",
                "にゅういんします"
            ],
            "correctIndex": 3,
            "explanation": "「にゅういんします」 (入院します) means \"enter hospital\"."
        },
        {
            "question": "leave hospital",
            "options": [
                "きもちが わるい",
                "たいいんします",
                "おととし",
                "にゅういんします"
            ],
            "correctIndex": 1,
            "explanation": "「たいいんします」 (退院します) means \"leave hospital\"."
        },
        {
            "question": "turn on [the power switch]",
            "options": [
                "おおきな ～",
                "きもちが いい",
                "いれます［でんげんを～］",
                "けんかします"
            ],
            "correctIndex": 2,
            "explanation": "「いれます［でんげんを～］」 (入れます［電源を～］) means \"turn on [the power switch]\"."
        },
        {
            "question": "turn off [the power switch]",
            "options": [
                "うそ",
                "はこびます",
                "たいいんします",
                "きります［でんげんを～］"
            ],
            "correctIndex": 3,
            "explanation": "「きります［でんげんを～］」 (切ります［電源を～］) means \"turn off [the power switch]\"."
        },
        {
            "question": "lock",
            "options": [
                "きもちが いい",
                "おとなしい",
                "かけます［かぎを～］",
                "－てん"
            ],
            "correctIndex": 2,
            "explanation": "「かけます［かぎを～］」 (掛けます［かぎを～］) means \"lock\"."
        },
        {
            "question": "tell [a lie]",
            "options": [
                "けんきゅうしつ",
                "つきます［うそを～］",
                "せいりします",
                "～せい"
            ],
            "correctIndex": 1,
            "explanation": "「つきます［うそを～］」 means \"tell [a lie]\"."
        },
        {
            "question": "pleasant, agreeable",
            "options": [
                "きもちが いい",
                "だいすき［な］",
                "はんこ",
                "５ねんせい"
            ],
            "correctIndex": 0,
            "explanation": "「きもちが いい」 (気持ちが いい) means \"pleasant, agreeable\"."
        },
        {
            "question": "unpleasant, disgusting",
            "options": [
                "きもちが わるい",
                "しゅうかん",
                "しかた",
                "こうじょう"
            ],
            "correctIndex": 0,
            "explanation": "「きもちが わるい」 (気持ちが 悪い) means \"unpleasant, disgusting\"."
        },
        {
            "question": "large ～, big ～",
            "options": [
                "［あ、］いけない。",
                "おおきな ～",
                "いずもたいしゃ",
                "えきまえ"
            ],
            "correctIndex": 1,
            "explanation": "「おおきな ～」 (大きな ～) means \"large ～, big ～\"."
        },
        {
            "question": "small ～, little ～",
            "options": [
                "クラス",
                "せいりします",
                "ちいさな ～",
                "ねんれい"
            ],
            "correctIndex": 2,
            "explanation": "「ちいさな ～」 (小さな ～) means \"small ～, little ～\"."
        },
        {
            "question": "baby",
            "options": [
                "あかちゃん",
                "ほうほう",
                "ちゅうがっこう",
                "おとなしい"
            ],
            "correctIndex": 0,
            "explanation": "「あかちゃん」 (赤ちゃん) means \"baby\"."
        },
        {
            "question": "elementary school",
            "options": [
                "チェンマイ",
                "きります［でんげんを～］",
                "きもちが わるい",
                "しょうがっこう"
            ],
            "correctIndex": 3,
            "explanation": "「しょうがっこう」 (小学校) means \"elementary school\"."
        },
        {
            "question": "junior high school",
            "options": [
                "クラス",
                "ねんれい",
                "ちゅうがっこう",
                "おおきな ～"
            ],
            "correctIndex": 2,
            "explanation": "「ちゅうがっこう」 (中学校) means \"junior high school\"."
        },
        {
            "question": "the area in front of the station",
            "options": [
                "おととし",
                "しょるい",
                "えきまえ",
                "こうじょう"
            ],
            "correctIndex": 2,
            "explanation": "「えきまえ」 (駅前) means \"the area in front of the station\"."
        },
        {
            "question": "seaside, seashore",
            "options": [
                "やさしい",
                "－てん",
                "おとなしい",
                "かいがん"
            ],
            "correctIndex": 3,
            "explanation": "「かいがん」 (海岸) means \"seaside, seashore\"."
        },
        {
            "question": "factory",
            "options": [
                "けんかします",
                "むら",
                "かいがん",
                "こうじょう"
            ],
            "correctIndex": 3,
            "explanation": "「こうじょう」 (工場) means \"factory\"."
        },
        {
            "question": "village",
            "options": [
                "かいらん",
                "きが つよい",
                "ゆびわ",
                "むら"
            ],
            "correctIndex": 3,
            "explanation": "「むら」 (村) means \"village\"."
        },
        {
            "question": "hiragana and katakana script",
            "options": [
                "おとなしい",
                "かな",
                "にゅういんします",
                "はこびます"
            ],
            "correctIndex": 1,
            "explanation": "「かな」 means \"hiragana and katakana script\"."
        },
        {
            "question": "ring",
            "options": [
                "さんかします［りょこうに～］",
                "ゆびわ",
                "やさしい",
                "きが つよい"
            ],
            "correctIndex": 1,
            "explanation": "「ゆびわ」 (指輪) means \"ring\"."
        },
        {
            "question": "power switch",
            "options": [
                "ねんれい",
                "つきます［うそを～］",
                "でんげん",
                "きもちが わるい"
            ],
            "correctIndex": 2,
            "explanation": "「でんげん」 (電源) means \"power switch\"."
        },
        {
            "question": "habit",
            "options": [
                "しゅうかん",
                "にて います",
                "あかちゃん",
                "ほうほう"
            ],
            "correctIndex": 0,
            "explanation": "「しゅうかん」 (習慣) means \"habit\"."
        },
        {
            "question": "health",
            "options": [
                "－さつ",
                "たいいんします",
                "けんこう",
                "ふたご"
            ],
            "correctIndex": 2,
            "explanation": "「けんこう」 (健康) means \"health\"."
        },
        {
            "question": "made in ～",
            "options": [
                "しゅうかん",
                "ゆびわ",
                "～せい",
                "せわを します"
            ],
            "correctIndex": 2,
            "explanation": "「～せい」 (～製) means \"made in ～\"."
        },
        {
            "question": "the year before the last",
            "options": [
                "おととし",
                "いれます［でんげんを～］",
                "せわを します",
                "あかちゃん"
            ],
            "correctIndex": 0,
            "explanation": "「おととし」 means \"the year before the last\"."
        },
        {
            "question": "Oops!/Oh, no! (used when one has made a mistake)",
            "options": [
                "いずもたいしゃ",
                "こうじょう",
                "［あ、］いけない。",
                "はんこ"
            ],
            "correctIndex": 2,
            "explanation": "「［あ、］いけない。」 means \"Oops!/Oh, no! (used when one has made a mistake)\"."
        },
        {
            "question": "Excuse me (for leaving before you).",
            "options": [
                "たいいんします",
                "でんげん",
                "おさきに［しつれいします］。",
                "なくなります"
            ],
            "correctIndex": 2,
            "explanation": "「おさきに［しつれいします］。」 (お先に［失礼します］。) means \"Excuse me (for leaving before you).\"."
        },
        {
            "question": "dome commemorating the atomic bombing of Hiroshima",
            "options": [
                "げんばくドーム",
                "しまい",
                "おとなしい",
                "せいかく"
            ],
            "correctIndex": 0,
            "explanation": "「げんばくドーム」 (原爆ドーム) means \"dome commemorating the atomic bombing of Hiroshima\"."
        },
        {
            "question": "a shrine in Izumo city in Shimane prefecture",
            "options": [
                "いずもたいしゃ",
                "けんかします",
                "きが つよい",
                "しょうがっこう"
            ],
            "correctIndex": 0,
            "explanation": "「いずもたいしゃ」 (出雲大社) means \"a shrine in Izumo city in Shimane prefecture\"."
        },
        {
            "question": "Chiangmai (in Thailand)",
            "options": [
                "にゅういんします",
                "チェンマイ",
                "やさしい",
                "にて います"
            ],
            "correctIndex": 1,
            "explanation": "「チェンマイ」 means \"Chiangmai (in Thailand)\"."
        },
        {
            "question": "circular",
            "options": [
                "かいらん",
                "けんきゅうしつ",
                "はんこ",
                "－さつ"
            ],
            "correctIndex": 0,
            "explanation": "「かいらん」 (回覧) means \"circular\"."
        },
        {
            "question": "study room, professor's office, laboratory",
            "options": [
                "けんきゅうしつ",
                "チェンマイ",
                "ふしぎ［な］",
                "にて います"
            ],
            "correctIndex": 0,
            "explanation": "「けんきゅうしつ」 (研究室) means \"study room, professor's office, laboratory\"."
        },
        {
            "question": "neatly, tidily",
            "options": [
                "～せい",
                "いずもたいしゃ",
                "きもちが いい",
                "きちんと"
            ],
            "correctIndex": 3,
            "explanation": "「きちんと」 means \"neatly, tidily\"."
        },
        {
            "question": "sort (things) out",
            "options": [
                "せいかく",
                "えきまえ",
                "せいりします",
                "つきます［うそを～］"
            ],
            "correctIndex": 2,
            "explanation": "「せいりします」 (整理します) means \"sort (things) out\"."
        },
        {
            "question": "method",
            "options": [
                "ほうほう",
                "さんかします［りょこうに～］",
                "げんばくドーム",
                "かいがん"
            ],
            "correctIndex": 0,
            "explanation": "「ほうほう」 (方法) means \"method\"."
        },
        {
            "question": "entitled ～, named ～, called ～",
            "options": [
                "げんばくドーム",
                "いずもたいしゃ",
                "－さつ",
                "～と いう"
            ],
            "correctIndex": 3,
            "explanation": "「～と いう」 means \"entitled ～, named ～, called ～\"."
        },
        {
            "question": "(counter for books, etc.)",
            "options": [
                "～と いう",
                "かな",
                "そだてます",
                "－さつ"
            ],
            "correctIndex": 3,
            "explanation": "「－さつ」 (－冊) means \"(counter for books, etc.)\"."
        },
        {
            "question": "seal, stamp",
            "options": [
                "ねんれい",
                "ほうほう",
                "はんこ",
                "きもちが わるい"
            ],
            "correctIndex": 2,
            "explanation": "「はんこ」 means \"seal, stamp\"."
        },
        {
            "question": "affix [a seal], stamp",
            "options": [
                "ほうほう",
                "にて います",
                "せいりします",
                "おします［はんこを～］"
            ],
            "correctIndex": 3,
            "explanation": "「おします［はんこを～］」 (押します［はんこを～］) means \"affix [a seal], stamp\"."
        },
        {
            "question": "twins",
            "options": [
                "にゅういんします",
                "ふたご",
                "－てん",
                "ほうほう"
            ],
            "correctIndex": 1,
            "explanation": "「ふたご」 (双子) means \"twins\"."
        },
        {
            "question": "sisters",
            "options": [
                "しまい",
                "うそ",
                "おします［はんこを～］",
                "ゆびわ"
            ],
            "correctIndex": 0,
            "explanation": "「しまい」 (姉妹) means \"sisters\"."
        },
        {
            "question": "fifth grade, fifth year",
            "options": [
                "５ねんせい",
                "ゆびわ",
                "せいかく",
                "きちんと"
            ],
            "correctIndex": 0,
            "explanation": "「５ねんせい」 (５年生) means \"fifth grade, fifth year\"."
        },
        {
            "question": "resemble, be like",
            "options": [
                "にて います",
                "はこびます",
                "ふしぎ［な］",
                "せいかく"
            ],
            "correctIndex": 0,
            "explanation": "「にて います」 (似て います) means \"resemble, be like\"."
        },
        {
            "question": "character",
            "options": [
                "けんかします",
                "せいかく",
                "しまい",
                "しかた"
            ],
            "correctIndex": 1,
            "explanation": "「せいかく」 (性格) means \"character\"."
        },
        {
            "question": "quiet, gentle",
            "options": [
                "せいりします",
                "～せい",
                "おとなしい",
                "［あ、］いけない。"
            ],
            "correctIndex": 2,
            "explanation": "「おとなしい」 means \"quiet, gentle\"."
        },
        {
            "question": "kind, gentle, tender-hearted",
            "options": [
                "きります［でんげんを～］",
                "かな",
                "やさしい",
                "きもちが わるい"
            ],
            "correctIndex": 2,
            "explanation": "「やさしい」 (優しい) means \"kind, gentle, tender-hearted\"."
        },
        {
            "question": "take care of",
            "options": [
                "きもちが わるい",
                "せわを します",
                "ねんれい",
                "じかんが たちます"
            ],
            "correctIndex": 1,
            "explanation": "「せわを します」 (世話を します) means \"take care of\"."
        },
        {
            "question": "time passes by",
            "options": [
                "せいかく",
                "チェンマイ",
                "じかんが たちます",
                "おさきに［しつれいします］。"
            ],
            "correctIndex": 2,
            "explanation": "「じかんが たちます」 (時間が たちます) means \"time passes by\"."
        },
        {
            "question": "like very much",
            "options": [
                "－さつ",
                "クラス",
                "たいいんします",
                "だいすき［な］"
            ],
            "correctIndex": 3,
            "explanation": "「だいすき［な］」 (大好き［な］) means \"like very much\"."
        },
        {
            "question": "－ points",
            "options": [
                "－てん",
                "せいかく",
                "たいいんします",
                "けんかします"
            ],
            "correctIndex": 0,
            "explanation": "「－てん」 (－点) means \"－ points\"."
        },
        {
            "question": "tough, strong-willed",
            "options": [
                "おさきに［しつれいします］。",
                "きが つよい",
                "ねんれい",
                "［あ、］いけない。"
            ],
            "correctIndex": 1,
            "explanation": "「きが つよい」 (気が 強い) means \"tough, strong-willed\"."
        },
        {
            "question": "quarrel, fight",
            "options": [
                "しゅうかん",
                "－てん",
                "しかた",
                "けんかします"
            ],
            "correctIndex": 3,
            "explanation": "「けんかします」 means \"quarrel, fight\"."
        },
        {
            "question": "mysterious, strange",
            "options": [
                "いずもたいしゃ",
                "－さつ",
                "だいすき［な］",
                "ふしぎ［な］"
            ],
            "correctIndex": 3,
            "explanation": "「ふしぎ［な］」 (不思議［な］) means \"mysterious, strange\"."
        },
        {
            "question": "age",
            "options": [
                "ちいさな ～",
                "おさきに［しつれいします］。",
                "ねんれい",
                "しかた"
            ],
            "correctIndex": 2,
            "explanation": "「ねんれい」 (年齢) means \"age\"."
        },
        {
            "question": "way (of doing something)",
            "options": [
                "～せい",
                "しかた",
                "しょるい",
                "おととし"
            ],
            "correctIndex": 1,
            "explanation": "「しかた」 means \"way (of doing something)\"."
        },
        {
            "question": "pass away (euphemistic expression for しにます(L.39))",
            "options": [
                "なくなります",
                "かけます［かぎを～］",
                "きもちが いい",
                "－てん"
            ],
            "correctIndex": 0,
            "explanation": "「なくなります」 (亡くなります) means \"pass away (euphemistic expression for しにます(L.39))\"."
        },
        {
            "question": "lie, fib",
            "options": [
                "きもちが いい",
                "むら",
                "うそ",
                "しゅうかん"
            ],
            "correctIndex": 2,
            "explanation": "「うそ」 means \"lie, fib\"."
        },
        {
            "question": "documents, paper",
            "options": [
                "せわを します",
                "［あ、］いけない。",
                "はこびます",
                "しょるい"
            ],
            "correctIndex": 3,
            "explanation": "「しょるい」 (書類) means \"documents, paper\"."
        },
        {
            "question": "class",
            "options": [
                "クラス",
                "おおきな ～",
                "そだてます",
                "ふしぎ［な］"
            ],
            "correctIndex": 0,
            "explanation": "「クラス」 means \"class\"."
        }
    ],
    "Lesson 39": [
        {
            "question": "answer [a question]",
            "options": [
                "こたえます［しつもんに～］",
                "うかがいます。",
                "ようふく",
                "かみなり"
            ],
            "correctIndex": 0,
            "explanation": "「こたえます［しつもんに～］」 (答えます［質問に～］) means \"answer [a question]\"."
        },
        {
            "question": "[a building] fall down",
            "options": [
                "たおれます［ビルが～］",
                "びっくりします",
                "ふとります",
                "おおぜい"
            ],
            "correctIndex": 0,
            "explanation": "「たおれます［ビルが～］」 (倒れます［ビルが～］) means \"[a building] fall down\"."
        },
        {
            "question": "pass [along a street]",
            "options": [
                "［お］みあい",
                "ふくざつ［な］",
                "たいふう",
                "とおります［みちを～］"
            ],
            "correctIndex": 3,
            "explanation": "「とおります［みちを～］」 (通ります［道を～］) means \"pass [along a street]\"."
        },
        {
            "question": "die",
            "options": [
                "はずかしい",
                "ちこくします",
                "せいようかします",
                "しにます"
            ],
            "correctIndex": 3,
            "explanation": "「しにます」 (死にます) means \"die\"."
        },
        {
            "question": "be surprised",
            "options": [
                "ぶつかります",
                "つなみ",
                "びっくりします",
                "とおります［みちを～］"
            ],
            "correctIndex": 2,
            "explanation": "「びっくりします」 means \"be surprised\"."
        },
        {
            "question": "be disappointed",
            "options": [
                "つなみ",
                "タオル",
                "がっかりします",
                "けんかします"
            ],
            "correctIndex": 2,
            "explanation": "「がっかりします」 means \"be disappointed\"."
        },
        {
            "question": "be relieved",
            "options": [
                "そうたいします",
                "やわらかい",
                "あんしんします",
                "あいます"
            ],
            "correctIndex": 2,
            "explanation": "「あんしんします」 (安心します) means \"be relieved\"."
        },
        {
            "question": "quarrel, fight",
            "options": [
                "きたない",
                "ハイキング",
                "りこんします",
                "けんかします"
            ],
            "correctIndex": 3,
            "explanation": "「けんかします」 means \"quarrel, fight\"."
        },
        {
            "question": "divorce",
            "options": [
                "りこんします",
                "こたえます［しつもんに～］",
                "～や",
                "じゃま［な］"
            ],
            "correctIndex": 0,
            "explanation": "「りこんします」 (離婚します) means \"divorce\"."
        },
        {
            "question": "get fat, gain weight",
            "options": [
                "とおります［みちを～］",
                "また",
                "かなしい",
                "ふとります"
            ],
            "correctIndex": 3,
            "explanation": "「ふとります」 (太ります) means \"get fat, gain weight\"."
        },
        {
            "question": "get slim, lose weight",
            "options": [
                "やせます",
                "おとな",
                "しゅしょう",
                "やわらかい"
            ],
            "correctIndex": 0,
            "explanation": "「やせます」 means \"get slim, lose weight\"."
        },
        {
            "question": "complicated, complex",
            "options": [
                "おつかれさまでした。",
                "こたえます［しつもんに～］",
                "かいじょう",
                "ふくざつ［な］"
            ],
            "correctIndex": 3,
            "explanation": "「ふくざつ［な］」 (複雑［な］) means \"complicated, complex\"."
        },
        {
            "question": "obstructive, in the way",
            "options": [
                "じゃま［な］",
                "おとな",
                "せいじんしき",
                "がっかりします"
            ],
            "correctIndex": 0,
            "explanation": "「じゃま［な］」 (邪魔［な］) means \"obstructive, in the way\"."
        },
        {
            "question": "hard, tough, solid",
            "options": [
                "［お］みあい",
                "ふとります",
                "おとな",
                "かたい"
            ],
            "correctIndex": 3,
            "explanation": "「かたい」 (硬い) means \"hard, tough, solid\"."
        },
        {
            "question": "soft, tender",
            "options": [
                "やけます［にくが～］",
                "やわらかい",
                "おおぜい",
                "～や"
            ],
            "correctIndex": 1,
            "explanation": "「やわらかい」 (軟らかい) means \"soft, tender\"."
        },
        {
            "question": "dirty",
            "options": [
                "うれしい",
                "たおれます［ビルが～］",
                "きたない",
                "せいようかします"
            ],
            "correctIndex": 2,
            "explanation": "「きたない」 (汚い) means \"dirty\"."
        },
        {
            "question": "happy",
            "options": [
                "しかし",
                "せいようかします",
                "かいじょう",
                "うれしい"
            ],
            "correctIndex": 3,
            "explanation": "「うれしい」 means \"happy\"."
        },
        {
            "question": "sad",
            "options": [
                "じゃま［な］",
                "やけます［にくが～］",
                "おつかれさまでした。",
                "かなしい"
            ],
            "correctIndex": 3,
            "explanation": "「かなしい」 (悲しい) means \"sad\"."
        },
        {
            "question": "embarrassed, ashamed",
            "options": [
                "おとな",
                "とちゅうで",
                "はずかしい",
                "じゃま［な］"
            ],
            "correctIndex": 2,
            "explanation": "「はずかしい」 (恥ずかしい) means \"embarrassed, ashamed\"."
        },
        {
            "question": "Prime Minister",
            "options": [
                "かなしい",
                "たいふう",
                "しゅしょう",
                "かいじょう"
            ],
            "correctIndex": 2,
            "explanation": "「しゅしょう」 (首相) means \"Prime Minister\"."
        },
        {
            "question": "earthquake",
            "options": [
                "じしん",
                "［お］みあい",
                "うかがいます。",
                "がっかりします"
            ],
            "correctIndex": 0,
            "explanation": "「じしん」 (地震) means \"earthquake\"."
        },
        {
            "question": "tsunami, tidal wave",
            "options": [
                "やけます［うちが～］",
                "つなみ",
                "いまでは",
                "かたい"
            ],
            "correctIndex": 1,
            "explanation": "「つなみ」 (津波) means \"tsunami, tidal wave\"."
        },
        {
            "question": "typhoon",
            "options": [
                "おとな",
                "ふくざつ［な］",
                "あせ",
                "たいふう"
            ],
            "correctIndex": 3,
            "explanation": "「たいふう」 (台風) means \"typhoon\"."
        },
        {
            "question": "thunder",
            "options": [
                "かみなり",
                "びっくりします",
                "がっかりします",
                "そうたいします"
            ],
            "correctIndex": 0,
            "explanation": "「かみなり」 (雷) means \"thunder\"."
        },
        {
            "question": "fire",
            "options": [
                "がっかりします",
                "けんかします",
                "せいようかします",
                "かじ"
            ],
            "correctIndex": 3,
            "explanation": "「かじ」 (火事) means \"fire\"."
        },
        {
            "question": "accident",
            "options": [
                "かたい",
                "けんかします",
                "じご",
                "やけます［うちが～］"
            ],
            "correctIndex": 2,
            "explanation": "「じご」 (事後) means \"accident\"."
        },
        {
            "question": "hiking",
            "options": [
                "おつかれさまでした。",
                "ハイキング",
                "かいじょう",
                "おおぜい"
            ],
            "correctIndex": 1,
            "explanation": "「ハイキング」 means \"hiking\"."
        },
        {
            "question": "a meeting arranged with a view to marriage",
            "options": [
                "しゅしょう",
                "［お］みあい",
                "とちゅうで",
                "がっかりします"
            ],
            "correctIndex": 1,
            "explanation": "「［お］みあい」 (［お］見合い) means \"a meeting arranged with a view to marriage\"."
        },
        {
            "question": "operation (～します : operate)",
            "options": [
                "けんかします",
                "あいます",
                "そうさ",
                "とおります［みちを～］"
            ],
            "correctIndex": 2,
            "explanation": "「そうさ」 (操作) means \"operation (～します : operate)\"."
        },
        {
            "question": "venue, event location",
            "options": [
                "かいじょう",
                "いまでは",
                "かたい",
                "やけます［にくが～］"
            ],
            "correctIndex": 0,
            "explanation": "「かいじょう」 (会場) means \"venue, event location\"."
        },
        {
            "question": "charge, fare, fee",
            "options": [
                "～だい",
                "しかし",
                "［お］みあい",
                "いまでは"
            ],
            "correctIndex": 0,
            "explanation": "「～だい」 (～代) means \"charge, fare, fee\"."
        },
        {
            "question": "-er (e.g. baker, grocer, etc.)",
            "options": [
                "～や",
                "しゅしょう",
                "ふくざつ［な］",
                "やけます［にくが～］"
            ],
            "correctIndex": 0,
            "explanation": "「～や」 (～屋) means \"-er (e.g. baker, grocer, etc.)\"."
        },
        {
            "question": "front desk, reception desk",
            "options": [
                "じゃま［な］",
                "とおります［みちを～］",
                "フロント",
                "やけます［にくが～］"
            ],
            "correctIndex": 2,
            "explanation": "「フロント」 means \"front desk, reception desk\"."
        },
        {
            "question": "room number －",
            "options": [
                "かみなり",
                "びっくりします",
                "－ごうしつ",
                "おとな"
            ],
            "correctIndex": 2,
            "explanation": "「－ごうしつ」 (－号室) means \"room number －\"."
        },
        {
            "question": "towel",
            "options": [
                "けんかします",
                "タオル",
                "つなみ",
                "やけます［にくが～］"
            ],
            "correctIndex": 1,
            "explanation": "「タオル」 means \"towel\"."
        },
        {
            "question": "soap",
            "options": [
                "せっけん",
                "～や",
                "ならびます",
                "ようふく"
            ],
            "correctIndex": 0,
            "explanation": "「せっけん」 means \"soap\"."
        },
        {
            "question": "a great number (of people)",
            "options": [
                "フロント",
                "おとな",
                "おおぜい",
                "うかがいます。"
            ],
            "correctIndex": 2,
            "explanation": "「おおぜい」 (大勢) means \"a great number (of people)\"."
        },
        {
            "question": "Thank you for your hard work. (used to express appreciation for a colleague's or subordinate's work)",
            "options": [
                "つなみ",
                "おつかれさまでした。",
                "～だい",
                "とちゅうで"
            ],
            "correctIndex": 1,
            "explanation": "「おつかれさまでした。」 (お疲れ様でした。) means \"Thank you for your hard work. (used to express appreciation for a colleague's or subordinate's work)\"."
        },
        {
            "question": "I'm coming. (humble equivalent of いきます)",
            "options": [
                "うかがいます。",
                "やわらかい",
                "でんとうてき［な］",
                "しにます"
            ],
            "correctIndex": 0,
            "explanation": "「うかがいます。」 (伺います。) means \"I'm coming. (humble equivalent of いきます)\"."
        },
        {
            "question": "on the way, in the midst of",
            "options": [
                "しゅしょう",
                "とちゅうで",
                "しにます",
                "せいじんしき"
            ],
            "correctIndex": 1,
            "explanation": "「とちゅうで」 (途中で) means \"on the way, in the midst of\"."
        },
        {
            "question": "truck, lorry",
            "options": [
                "しゅしょう",
                "ならびます",
                "あせ",
                "トラック"
            ],
            "correctIndex": 3,
            "explanation": "「トラック」 means \"truck, lorry\"."
        },
        {
            "question": "bump, collide",
            "options": [
                "せいじんしき",
                "しかし",
                "ぶつかります",
                "かじ"
            ],
            "correctIndex": 2,
            "explanation": "「ぶつかります」 means \"bump, collide\"."
        },
        {
            "question": "adult",
            "options": [
                "おおぜい",
                "ちこくします",
                "いまでは",
                "おとな"
            ],
            "correctIndex": 3,
            "explanation": "「おとな」 (大人) means \"adult\"."
        },
        {
            "question": "however, but",
            "options": [
                "じゃま［な］",
                "－ごうしつ",
                "とおります［みちを～］",
                "しかし"
            ],
            "correctIndex": 3,
            "explanation": "「しかし」 means \"however, but\"."
        },
        {
            "question": "and",
            "options": [
                "かたい",
                "りこんします",
                "また",
                "とちゅうで"
            ],
            "correctIndex": 2,
            "explanation": "「また」 means \"and\"."
        },
        {
            "question": "Western clothes",
            "options": [
                "たおれます［ビルが～］",
                "はずかしい",
                "ようふく",
                "ならびます"
            ],
            "correctIndex": 2,
            "explanation": "「ようふく」 (洋服) means \"Western clothes\"."
        },
        {
            "question": "be Westernized",
            "options": [
                "けんかします",
                "トラック",
                "せいようかします",
                "かみなり"
            ],
            "correctIndex": 2,
            "explanation": "「せいようかします」 (西洋化します) means \"be Westernized\"."
        },
        {
            "question": "fit, suit",
            "options": [
                "あいます",
                "タオル",
                "フロント",
                "たいふう"
            ],
            "correctIndex": 0,
            "explanation": "「あいます」 (合います) means \"fit, suit\"."
        },
        {
            "question": "now",
            "options": [
                "～や",
                "フロント",
                "ちこくします",
                "いまでは"
            ],
            "correctIndex": 3,
            "explanation": "「いまでは」 (今では) means \"now\"."
        },
        {
            "question": "coming-of-age celebration",
            "options": [
                "ふくざつ［な］",
                "やけます［にくが～］",
                "せいじんしき",
                "けんかします"
            ],
            "correctIndex": 2,
            "explanation": "「せいじんしき」 (成人式) means \"coming-of-age celebration\"."
        },
        {
            "question": "traditional",
            "options": [
                "［お］みあい",
                "やわらかい",
                "とちゅうで",
                "でんとうてき［な］"
            ],
            "correctIndex": 3,
            "explanation": "「でんとうてき［な］」 (伝統的［な］) means \"traditional\"."
        },
        {
            "question": "[a house] burn down",
            "options": [
                "たおれます［ビルが～］",
                "うれしい",
                "やけます［うちが～］",
                "いまでは"
            ],
            "correctIndex": 2,
            "explanation": "「やけます［うちが～］」 (焼けます［うちが～］) means \"[a house] burn down\"."
        },
        {
            "question": "[bread] be baked",
            "options": [
                "［お］みあい",
                "でんわだい",
                "やけます［パンが～］",
                "あんしんします"
            ],
            "correctIndex": 2,
            "explanation": "「やけます［パンが～］」 (焼けます［パンが～］) means \"[bread] be baked\"."
        },
        {
            "question": "[meat] be roasted, be grilled",
            "options": [
                "トラック",
                "うれしい",
                "［お］みあい",
                "やけます［にくが～］"
            ],
            "correctIndex": 3,
            "explanation": "「やけます［にくが～］」 (焼けます［肉が～］) means \"[meat] be roasted, be grilled\"."
        },
        {
            "question": "be late, come late",
            "options": [
                "ちこくします",
                "フロント",
                "とちゅうで",
                "りこんします"
            ],
            "correctIndex": 0,
            "explanation": "「ちこくします」 (遅刻します) means \"be late, come late\"."
        },
        {
            "question": "leave (work or school) earlier than usual",
            "options": [
                "びっくりします",
                "そうたいします",
                "やせます",
                "ならびます"
            ],
            "correctIndex": 1,
            "explanation": "「そうたいします」 (早退します) means \"leave (work or school) earlier than usual\"."
        },
        {
            "question": "telephone charge",
            "options": [
                "でんわだい",
                "しにます",
                "おとな",
                "かみなり"
            ],
            "correctIndex": 0,
            "explanation": "「でんわだい」 (電話代) means \"telephone charge\"."
        },
        {
            "question": "perspiration (～を かきます : perspire)",
            "options": [
                "やけます［パンが～］",
                "そうさ",
                "しかし",
                "あせ"
            ],
            "correctIndex": 3,
            "explanation": "「あせ」 (汗) means \"perspiration (～を かきます : perspire)\"."
        },
        {
            "question": "stand in a queue, line up",
            "options": [
                "おつかれさまでした。",
                "ならびます",
                "ハイキング",
                "たいふう"
            ],
            "correctIndex": 1,
            "explanation": "「ならびます」 (並びます) means \"stand in a queue, line up\"."
        }
    ],
    "Lesson 40": [
        {
            "question": "count",
            "options": [
                "はっぴょうかい",
                "ながさき",
                "かぞえます",
                "まちがい"
            ],
            "correctIndex": 2,
            "explanation": "「かぞえます」 (数えます) means \"count\"."
        },
        {
            "question": "measure, weigh",
            "options": [
                "－ごう",
                "うちゅう",
                "ようす",
                "はかります"
            ],
            "correctIndex": 3,
            "explanation": "「はかります」 (測ります、量ります) means \"measure, weigh\"."
        },
        {
            "question": "confirm, make sure",
            "options": [
                "うんてんしゅ",
                "たしかめます",
                "－ごう",
                "じけん"
            ],
            "correctIndex": 1,
            "explanation": "「たしかめます」 (確かめます) means \"confirm, make sure\"."
        },
        {
            "question": "[the size] fit",
            "options": [
                "あいます［サイズが～］",
                "まちがい",
                "はんにん",
                "たなばたまつり"
            ],
            "correctIndex": 0,
            "explanation": "「あいます［サイズが～］」 (合います［サイズが～］) means \"[the size] fit\"."
        },
        {
            "question": "depart",
            "options": [
                "きず",
                "しゅっぱつします",
                "ようす",
                "JL"
            ],
            "correctIndex": 1,
            "explanation": "「しゅっぱつします」 (出発します) means \"depart\"."
        },
        {
            "question": "arrive",
            "options": [
                "とうちゃくします",
                "もうしこみ",
                "まちがい",
                "うわさします"
            ],
            "correctIndex": 0,
            "explanation": "「とうちゃくします」 (到着します) means \"arrive\"."
        },
        {
            "question": "get drunk",
            "options": [
                "ゆきまつり",
                "たなばたまつり",
                "ゴッホ",
                "よいます"
            ],
            "correctIndex": 3,
            "explanation": "「よいます」 (酔います) means \"get drunk\"."
        },
        {
            "question": "go well",
            "options": [
                "うまく いきます",
                "－ミリ",
                "ところで",
                "いっしょうけんめい"
            ],
            "correctIndex": 0,
            "explanation": "「うまく いきます」 means \"go well\"."
        },
        {
            "question": "[problems] be on the test",
            "options": [
                "うら",
                "でます［もんだいが～］",
                "テスト",
                "～いじょう"
            ],
            "correctIndex": 1,
            "explanation": "「でます［もんだいが～］」 (出ます［問題が～］) means \"[problems] be on the test\"."
        },
        {
            "question": "consult, discuss",
            "options": [
                "ほんとう",
                "ゆきまつり",
                "そうだんします",
                "でます［もんだいが～］"
            ],
            "correctIndex": 2,
            "explanation": "「そうだんします」 (相談します) means \"consult, discuss\"."
        },
        {
            "question": "necessary",
            "options": [
                "ひつよう［な］",
                "～いか",
                "［－］びん",
                "はっぴょうかい"
            ],
            "correctIndex": 0,
            "explanation": "「ひつよう［な］」 (必要［な］) means \"necessary\"."
        },
        {
            "question": "weather forecast",
            "options": [
                "あいます［サイズが～］",
                "ゴッホ",
                "さあ",
                "てんきよほう"
            ],
            "correctIndex": 3,
            "explanation": "「てんきよほう」 (天気予報) means \"weather forecast\"."
        },
        {
            "question": "year-end party",
            "options": [
                "きけん［な］",
                "ほんとう",
                "ぼうねんかい",
                "－はい（－ぱい、－ばい）"
            ],
            "correctIndex": 2,
            "explanation": "「ぼうねんかい」 (忘年会) means \"year-end party\"."
        },
        {
            "question": "New Year's party",
            "options": [
                "しんねんかい",
                "テスト",
                "せんだい",
                "うら"
            ],
            "correctIndex": 0,
            "explanation": "「しんねんかい」 (新年会) means \"New Year's party\"."
        },
        {
            "question": "second party",
            "options": [
                "にじかい",
                "てに いれます",
                "そうだんします",
                "ゆきまつり"
            ],
            "correctIndex": 0,
            "explanation": "「にじかい」 (二次会) means \"second party\"."
        },
        {
            "question": "presentation meeting",
            "options": [
                "［お］としより",
                "－ほん（－ぽん、－ぼん）",
                "はっぴょうかい",
                "うんてんしゅ"
            ],
            "correctIndex": 2,
            "explanation": "「はっぴょうかい」 (発表会) means \"presentation meeting\"."
        },
        {
            "question": "rally, convention",
            "options": [
                "ほんとう",
                "てんきよほう",
                "うちゅう",
                "たいかい"
            ],
            "correctIndex": 3,
            "explanation": "「たいかい」 (大会) means \"rally, convention\"."
        },
        {
            "question": "marathon",
            "options": [
                "マラソン",
                "どうでしょうか。",
                "うんてんしゅ",
                "オートバイ"
            ],
            "correctIndex": 0,
            "explanation": "「マラソン」 means \"marathon\"."
        },
        {
            "question": "contest",
            "options": [
                "あいます［サイズが～］",
                "コンテスト",
                "いらっしゃいます",
                "せいせき"
            ],
            "correctIndex": 1,
            "explanation": "「コンテスト」 means \"contest\"."
        },
        {
            "question": "face, front",
            "options": [
                "が",
                "かぞえます",
                "コンテスト",
                "おもて"
            ],
            "correctIndex": 3,
            "explanation": "「おもて」 (表) means \"face, front\"."
        },
        {
            "question": "back (side)",
            "options": [
                "－グラム",
                "ながさ",
                "うら",
                "のぞみ"
            ],
            "correctIndex": 2,
            "explanation": "「うら」 (裏) means \"back (side)\"."
        },
        {
            "question": "mistake",
            "options": [
                "いまでも",
                "まちがい",
                "テスト",
                "うわさします"
            ],
            "correctIndex": 1,
            "explanation": "「まちがい」 means \"mistake\"."
        },
        {
            "question": "defect, wound, scratch",
            "options": [
                "でます［もんだいが～］",
                "きず",
                "JL",
                "へんじ"
            ],
            "correctIndex": 1,
            "explanation": "「きず」 (傷) means \"defect, wound, scratch\"."
        },
        {
            "question": "trousers",
            "options": [
                "いっしょうけんめい",
                "ズボン",
                "おもさ",
                "ようす"
            ],
            "correctIndex": 1,
            "explanation": "「ズボン」 means \"trousers\"."
        },
        {
            "question": "elderly person",
            "options": [
                "うまく いきます",
                "が",
                "［お］としより",
                "ようす"
            ],
            "correctIndex": 2,
            "explanation": "「［お］としより」 (［お］年寄り) means \"elderly person\"."
        },
        {
            "question": "length",
            "options": [
                "－ごう",
                "ながさ",
                "せんだい",
                "おおきさ"
            ],
            "correctIndex": 1,
            "explanation": "「ながさ」 (長さ) means \"length\"."
        },
        {
            "question": "weight",
            "options": [
                "－ごう",
                "おもさ",
                "かぞえます",
                "テスト"
            ],
            "correctIndex": 1,
            "explanation": "「おもさ」 (重さ) means \"weight\"."
        },
        {
            "question": "height",
            "options": [
                "たかさ",
                "にじかい",
                "きゅうに",
                "たなばたまつり"
            ],
            "correctIndex": 0,
            "explanation": "「たかさ」 (高さ) means \"height\"."
        },
        {
            "question": "size, scale",
            "options": [
                "おおきさ",
                "きゅうに",
                "はなれた",
                "さあ"
            ],
            "correctIndex": 0,
            "explanation": "「おおきさ」 (大きさ) means \"size, scale\"."
        },
        {
            "question": "flight, flight number",
            "options": [
                "［－］びん",
                "－センチ",
                "ちきゅう",
                "せいせき"
            ],
            "correctIndex": 0,
            "explanation": "「［－］びん」 (［－］便) means \"flight, flight number\"."
        },
        {
            "question": "(counter for small objects)",
            "options": [
                "つみます",
                "－こ",
                "はんにん",
                "うんてんしゅ"
            ],
            "correctIndex": 1,
            "explanation": "「－こ」 (－個) means \"(counter for small objects)\"."
        },
        {
            "question": "(counter for long objects)",
            "options": [
                "でます［もんだいが～］",
                "－ほん（－ぽん、－ぼん）",
                "へんじ",
                "さあ"
            ],
            "correctIndex": 1,
            "explanation": "「－ほん（－ぽん、－ぼん）」 (－本) means \"(counter for long objects)\"."
        },
        {
            "question": "－ glass or cup of (counter for full cups, glasses, etc.)",
            "options": [
                "うんてんしゅ",
                "でます［もんだいが～］",
                "きけん［な］",
                "－はい（－ぱい、－ばい）"
            ],
            "correctIndex": 3,
            "explanation": "「－はい（－ぱい、－ばい）」 (－杯) means \"－ glass or cup of (counter for full cups, glasses, etc.)\"."
        },
        {
            "question": "－ centimetres",
            "options": [
                "たなばたまつり",
                "とうちゃくします",
                "－センチ",
                "にじかい"
            ],
            "correctIndex": 2,
            "explanation": "「－センチ」 means \"－ centimetres\"."
        },
        {
            "question": "－ millimetres",
            "options": [
                "ゆきまつり",
                "－ミリ",
                "きず",
                "JL"
            ],
            "correctIndex": 1,
            "explanation": "「－ミリ」 means \"－ millimetres\"."
        },
        {
            "question": "－ grams",
            "options": [
                "へんじ",
                "－グラム",
                "たいかい",
                "もうしこみ"
            ],
            "correctIndex": 1,
            "explanation": "「－グラム」 means \"－ grams\"."
        },
        {
            "question": "not less than ～, over ～",
            "options": [
                "てんきよほう",
                "－ミリ",
                "～いじょう",
                "とうしょうぐう"
            ],
            "correctIndex": 2,
            "explanation": "「～いじょう」 (～以上) means \"not less than ～, over ～\"."
        },
        {
            "question": "not more than ～, under ～",
            "options": [
                "そうだんします",
                "もうしこみ",
                "どうでしょうか。",
                "～いか"
            ],
            "correctIndex": 3,
            "explanation": "「～いか」 (～以下) means \"not more than ～, under ～\"."
        },
        {
            "question": "capital of Nagasaki prefecture",
            "options": [
                "ほんとう",
                "ながさき",
                "よいます",
                "ばくだん"
            ],
            "correctIndex": 1,
            "explanation": "「ながさき」 (長崎) means \"capital of Nagasaki prefecture\"."
        },
        {
            "question": "capital of Miyagi prefecture",
            "options": [
                "かぞえます",
                "たいかい",
                "にじかい",
                "せんだい"
            ],
            "correctIndex": 3,
            "explanation": "「せんだい」 (仙台) means \"capital of Miyagi prefecture\"."
        },
        {
            "question": "Japan Airlines",
            "options": [
                "にじかい",
                "JL",
                "しゅっぱつします",
                "おもて"
            ],
            "correctIndex": 1,
            "explanation": "「JL」 means \"Japan Airlines\"."
        },
        {
            "question": "the Star Festival",
            "options": [
                "JL",
                "たなばたまつり",
                "うまく いきます",
                "［－］びん"
            ],
            "correctIndex": 1,
            "explanation": "「たなばたまつり」 (七夕祭り) means \"the Star Festival\"."
        },
        {
            "question": "shrine dedicated to Tokugawa Ieyasu in Nikko, Tochigi prefecture",
            "options": [
                "かぞえます",
                "いらっしゃいます",
                "つみます",
                "とうしょうぐう"
            ],
            "correctIndex": 3,
            "explanation": "「とうしょうぐう」 (東照宮) means \"shrine dedicated to Tokugawa Ieyasu in Nikko, Tochigi prefecture\"."
        },
        {
            "question": "How is ～? (polite equivalent of どうですか)",
            "options": [
                "どうでしょうか。",
                "うわさします",
                "しんねんかい",
                "いまでも"
            ],
            "correctIndex": 0,
            "explanation": "「どうでしょうか。」 means \"How is ～? (polite equivalent of どうですか)\"."
        },
        {
            "question": "test, examination",
            "options": [
                "ながさき",
                "テスト",
                "うまく いきます",
                "－こ"
            ],
            "correctIndex": 1,
            "explanation": "「テスト」 means \"test, examination\"."
        },
        {
            "question": "performance, score, result",
            "options": [
                "のぞみ",
                "－ごう",
                "－ミリ",
                "せいせき"
            ],
            "correctIndex": 3,
            "explanation": "「せいせき」 (成績) means \"performance, score, result\"."
        },
        {
            "question": "by the way",
            "options": [
                "はっぴょうかい",
                "うごかします",
                "－グラム",
                "ところで"
            ],
            "correctIndex": 3,
            "explanation": "「ところで」 means \"by the way\"."
        },
        {
            "question": "come (respectful equivalent of きます)",
            "options": [
                "とうちゃくします",
                "きゅうに",
                "はなれた",
                "いらっしゃいます"
            ],
            "correctIndex": 3,
            "explanation": "「いらっしゃいます」 means \"come (respectful equivalent of きます)\"."
        },
        {
            "question": "situation, condition, appearance",
            "options": [
                "ようす",
                "てんきよほう",
                "ぼうねんかい",
                "－キロ"
            ],
            "correctIndex": 0,
            "explanation": "「ようす」 (様子) means \"situation, condition, appearance\"."
        },
        {
            "question": "incident, case",
            "options": [
                "じけん",
                "はなれた",
                "よいます",
                "ゆきまつり"
            ],
            "correctIndex": 0,
            "explanation": "「じけん」 (事件) means \"incident, case\"."
        },
        {
            "question": "motorcycle",
            "options": [
                "いまでも",
                "オートバイ",
                "［お］としより",
                "にじかい"
            ],
            "correctIndex": 1,
            "explanation": "「オートバイ」 means \"motorcycle\"."
        },
        {
            "question": "bomb",
            "options": [
                "ばくだん",
                "さあ",
                "うんてんしゅ",
                "［お］としより"
            ],
            "correctIndex": 0,
            "explanation": "「ばくだん」 (爆弾) means \"bomb\"."
        },
        {
            "question": "load, pile up",
            "options": [
                "うら",
                "－ほん（－ぽん、－ぼん）",
                "つみます",
                "うんてんしゅ"
            ],
            "correctIndex": 2,
            "explanation": "「つみます」 (積みます) means \"load, pile up\"."
        },
        {
            "question": "driver",
            "options": [
                "マラソン",
                "うんてんしゅ",
                "ようす",
                "オートバイ"
            ],
            "correctIndex": 1,
            "explanation": "「うんてんしゅ」 (運転手) means \"driver\"."
        },
        {
            "question": "remote",
            "options": [
                "ようす",
                "でます［もんだいが～］",
                "はなれた",
                "ながさ"
            ],
            "correctIndex": 2,
            "explanation": "「はなれた」 (離れた) means \"remote\"."
        },
        {
            "question": "suddenly",
            "options": [
                "にじかい",
                "よいます",
                "－こ",
                "きゅうに"
            ],
            "correctIndex": 3,
            "explanation": "「きゅうに」 (急に) means \"suddenly\"."
        },
        {
            "question": "start, operate, move",
            "options": [
                "よいます",
                "にじかい",
                "さあ",
                "うごかします"
            ],
            "correctIndex": 3,
            "explanation": "「うごかします」 (動かします) means \"start, operate, move\"."
        },
        {
            "question": "all one's effort",
            "options": [
                "うら",
                "いっしょうけんめい",
                "ばくだん",
                "ズボン"
            ],
            "correctIndex": 1,
            "explanation": "「いっしょうけんめい」 (一生懸命) means \"all one's effort\"."
        },
        {
            "question": "offender, criminal",
            "options": [
                "かぞえます",
                "はんにん",
                "のぞみ",
                "ところで"
            ],
            "correctIndex": 1,
            "explanation": "「はんにん」 (犯人) means \"offender, criminal\"."
        },
        {
            "question": "man",
            "options": [
                "－キロ",
                "おとこ",
                "かぞえます",
                "－こ"
            ],
            "correctIndex": 1,
            "explanation": "「おとこ」 (男) means \"man\"."
        },
        {
            "question": "obtain, get",
            "options": [
                "－キロ",
                "てに いれます",
                "とうしょうぐう",
                "はなれた"
            ],
            "correctIndex": 1,
            "explanation": "「てに いれます」 (手に 入れます) means \"obtain, get\"."
        },
        {
            "question": "even now",
            "options": [
                "ばくだん",
                "うまく いきます",
                "～いじょう",
                "いまでも"
            ],
            "correctIndex": 3,
            "explanation": "「いまでも」 (今でも) means \"even now\"."
        },
        {
            "question": "dangerous",
            "options": [
                "おとこ",
                "ゴッホ",
                "きず",
                "きけん［な］"
            ],
            "correctIndex": 3,
            "explanation": "「きけん［な］」 (危険［な］) means \"dangerous\"."
        },
        {
            "question": "space, universe",
            "options": [
                "にじかい",
                "うちゅう",
                "とうしょうぐう",
                "ゆきまつり"
            ],
            "correctIndex": 1,
            "explanation": "「うちゅう」 (宇宙) means \"space, universe\"."
        },
        {
            "question": "earth",
            "options": [
                "うわさします",
                "はかります",
                "たしかめます",
                "ちきゅう"
            ],
            "correctIndex": 3,
            "explanation": "「ちきゅう」 (地球) means \"earth\"."
        },
        {
            "question": "reply",
            "options": [
                "［お］としより",
                "ほんとう",
                "へんじ",
                "もうしこみ"
            ],
            "correctIndex": 2,
            "explanation": "「へんじ」 (返事) means \"reply\"."
        },
        {
            "question": "application",
            "options": [
                "－グラム",
                "せんだい",
                "コンテスト",
                "もうしこみ"
            ],
            "correctIndex": 3,
            "explanation": "「もうしこみ」 (申し込み) means \"application\"."
        },
        {
            "question": "truth, fact",
            "options": [
                "はっぴょうかい",
                "－センチ",
                "－グラム",
                "ほんとう"
            ],
            "correctIndex": 3,
            "explanation": "「ほんとう」 means \"truth, fact\"."
        },
        {
            "question": "train number, typhoon number, etc.",
            "options": [
                "マラソン",
                "－ごう",
                "－はい（－ぱい、－ばい）",
                "きけん［な］"
            ],
            "correctIndex": 1,
            "explanation": "「－ごう」 (－号) means \"train number, typhoon number, etc.\"."
        },
        {
            "question": "－ kilograms, kilometers",
            "options": [
                "もうしこみ",
                "ズボン",
                "ゆきまつり",
                "－キロ"
            ],
            "correctIndex": 3,
            "explanation": "「－キロ」 means \"－ kilograms, kilometers\"."
        },
        {
            "question": "well, let me see (used when unsure of something)",
            "options": [
                "［お］としより",
                "もうしこみ",
                "ズボン",
                "さあ"
            ],
            "correctIndex": 3,
            "explanation": "「さあ」 means \"well, let me see (used when unsure of something)\"."
        },
        {
            "question": "Vincent van Gogh, Dutch painter (1853-90)",
            "options": [
                "コンテスト",
                "にじかい",
                "ぼうねんかい",
                "ゴッホ"
            ],
            "correctIndex": 3,
            "explanation": "「ゴッホ」 means \"Vincent van Gogh, Dutch painter (1853-90)\"."
        },
        {
            "question": "Snow Festival in Sapporo",
            "options": [
                "ようす",
                "－グラム",
                "ゆきまつり",
                "－センチ"
            ],
            "correctIndex": 2,
            "explanation": "「ゆきまつり」 (雪祭り) means \"Snow Festival in Sapporo\"."
        },
        {
            "question": "name of a Shinkansen train",
            "options": [
                "へんじ",
                "のぞみ",
                "まちがい",
                "しゅっぱつします"
            ],
            "correctIndex": 1,
            "explanation": "「のぞみ」 means \"name of a Shinkansen train\"."
        },
        {
            "question": "class",
            "options": [
                "へんじ",
                "さあ",
                "ぼうねんかい",
                "クラス"
            ],
            "correctIndex": 3,
            "explanation": "「クラス」 means \"class\"."
        },
        {
            "question": "but",
            "options": [
                "ひつよう［な］",
                "たかさ",
                "が",
                "うら"
            ],
            "correctIndex": 2,
            "explanation": "「が」 means \"but\"."
        },
        {
            "question": "gossip",
            "options": [
                "うわさします",
                "はっぴょうかい",
                "おもて",
                "つみます"
            ],
            "correctIndex": 0,
            "explanation": "「うわさします」 (うわします) means \"gossip\"."
        }
    ],
    "Lesson 41": [
        {
            "question": "receive (humble equivalent of もらいます)",
            "options": [
                "くらします",
                "いただきます",
                "さげます",
                "たのしく"
            ],
            "correctIndex": 1,
            "explanation": "「いただきます」 means \"receive (humble equivalent of もらいます)\"."
        },
        {
            "question": "give (respectful equivalent of くれます)",
            "options": [
                "くださいます",
                "～ずつ",
                "むかしばなし",
                "こどもたち"
            ],
            "correctIndex": 0,
            "explanation": "「くださいます」 means \"give (respectful equivalent of くれます)\"."
        },
        {
            "question": "give (to a younger person, subordinate, animals or plants)",
            "options": [
                "まっしろ［な］",
                "けむり",
                "やります",
                "くらします"
            ],
            "correctIndex": 2,
            "explanation": "「やります」 means \"give (to a younger person, subordinate, animals or plants)\"."
        },
        {
            "question": "raise, lift up",
            "options": [
                "そぼ",
                "かめ",
                "あげます",
                "さげます"
            ],
            "correctIndex": 2,
            "explanation": "「あげます」 (上げます) means \"raise, lift up\"."
        },
        {
            "question": "lower, pull down",
            "options": [
                "さげます",
                "おとこ",
                "たすけます",
                "［お］しろ"
            ],
            "correctIndex": 0,
            "explanation": "「さげます」 (下げます) means \"lower, pull down\"."
        },
        {
            "question": "be kind to",
            "options": [
                "しんせつに します",
                "くつした",
                "～ずつ",
                "なかみ"
            ],
            "correctIndex": 0,
            "explanation": "「しんせつに します」 (親切に します) means \"be kind to\"."
        },
        {
            "question": "lovely, cute",
            "options": [
                "かわいい",
                "ぶんぽう",
                "そふ",
                "だんぼう"
            ],
            "correctIndex": 0,
            "explanation": "「かわいい」 means \"lovely, cute\"."
        },
        {
            "question": "rare, uncommon",
            "options": [
                "ようちえん",
                "えはがき",
                "めずらしい",
                "くつした"
            ],
            "correctIndex": 2,
            "explanation": "「めずらしい」 (珍しい) means \"rare, uncommon\"."
        },
        {
            "question": "celebration, gift (～を します : celebrate)",
            "options": [
                "そぼ",
                "おいわい",
                "おひめさま",
                "りく"
            ],
            "correctIndex": 1,
            "explanation": "「おいわい」 (お祝い) means \"celebration, gift (～を します : celebrate)\"."
        },
        {
            "question": "money given as a New Year's gift",
            "options": [
                "まご",
                "あずかります",
                "おとしだま",
                "いじめます"
            ],
            "correctIndex": 2,
            "explanation": "「おとしだま」 (お年玉) means \"money given as a New Year's gift\"."
        },
        {
            "question": "expression of sympathy, consolatory gift to a sick person",
            "options": [
                "おば",
                "［お］みまい",
                "そぼ",
                "はつおん"
            ],
            "correctIndex": 1,
            "explanation": "「［お］みまい」 (［お］見舞い) means \"expression of sympathy, consolatory gift to a sick person\"."
        },
        {
            "question": "interest (［コンピューターに］～が あります : be interested [in computers])",
            "options": [
                "きょうみ",
                "おまごさん",
                "～ずつ",
                "うらしまたろう"
            ],
            "correctIndex": 0,
            "explanation": "「きょうみ」 (興味) means \"interest (［コンピューターに］～が あります : be interested [in computers])\"."
        },
        {
            "question": "information",
            "options": [
                "おば",
                "いただきます",
                "どうぞ おしあわせに。",
                "じょうほう"
            ],
            "correctIndex": 3,
            "explanation": "「じょうほう」 (情報) means \"information\"."
        },
        {
            "question": "grammar",
            "options": [
                "こどもたち",
                "ぶんぽう",
                "ふたり",
                "たすけます"
            ],
            "correctIndex": 1,
            "explanation": "「ぶんぽう」 (文法) means \"grammar\"."
        },
        {
            "question": "pronunciation",
            "options": [
                "～さん",
                "まご",
                "さげます",
                "はつおん"
            ],
            "correctIndex": 3,
            "explanation": "「はつおん」 (発音) means \"pronunciation\"."
        },
        {
            "question": "ape, monkey",
            "options": [
                "れいぼう",
                "さる",
                "おひめさま",
                "そぼ"
            ],
            "correctIndex": 1,
            "explanation": "「さる」 (猿) means \"ape, monkey\"."
        },
        {
            "question": "feed, bait",
            "options": [
                "おばさん",
                "おじ",
                "そぼ",
                "えさ"
            ],
            "correctIndex": 3,
            "explanation": "「えさ」 means \"feed, bait\"."
        },
        {
            "question": "toy",
            "options": [
                "おもちゃ",
                "たのしく",
                "きょうみ",
                "ゆびわ"
            ],
            "correctIndex": 0,
            "explanation": "「おもちゃ」 means \"toy\"."
        },
        {
            "question": "picture book",
            "options": [
                "かめ",
                "おば",
                "くらします",
                "えほん"
            ],
            "correctIndex": 3,
            "explanation": "「えほん」 (絵本) means \"picture book\"."
        },
        {
            "question": "picture postcard",
            "options": [
                "えさ",
                "いじめます",
                "たすけます",
                "えはがき"
            ],
            "correctIndex": 3,
            "explanation": "「えはがき」 (絵はがき) means \"picture postcard\"."
        },
        {
            "question": "screwdriver",
            "options": [
                "おもちゃ",
                "～さん",
                "おんど",
                "ドライバー"
            ],
            "correctIndex": 3,
            "explanation": "「ドライバー」 means \"screwdriver\"."
        },
        {
            "question": "handkerchief",
            "options": [
                "［お］しろ",
                "くつした",
                "あげます",
                "ハンカチ"
            ],
            "correctIndex": 3,
            "explanation": "「ハンカチ」 means \"handkerchief\"."
        },
        {
            "question": "socks, stockings",
            "options": [
                "れいぼう",
                "はあ",
                "ぶんぽう",
                "くつした"
            ],
            "correctIndex": 3,
            "explanation": "「くつした」 (靴下) means \"socks, stockings\"."
        },
        {
            "question": "gloves",
            "options": [
                "かわいい",
                "おいわい",
                "てぶくろ",
                "せんじつ"
            ],
            "correctIndex": 2,
            "explanation": "「てぶくろ」 (手袋) means \"gloves\"."
        },
        {
            "question": "preschool, kindergarten",
            "options": [
                "むかしばなし",
                "りく",
                "ようちえん",
                "おとしだま"
            ],
            "correctIndex": 2,
            "explanation": "「ようちえん」 (幼稚園) means \"preschool, kindergarten\"."
        },
        {
            "question": "heating",
            "options": [
                "しんせつに します",
                "くらします",
                "だんぼう",
                "ハンカチ"
            ],
            "correctIndex": 2,
            "explanation": "「だんぼう」 (暖房) means \"heating\"."
        },
        {
            "question": "air-conditioning",
            "options": [
                "まっしろ［な］",
                "かめ",
                "ぶんぽう",
                "れいぼう"
            ],
            "correctIndex": 3,
            "explanation": "「れいぼう」 (冷房) means \"air-conditioning\"."
        },
        {
            "question": "temperature",
            "options": [
                "おんど",
                "じょうほう",
                "なかみ",
                "そぼ"
            ],
            "correctIndex": 0,
            "explanation": "「おんど」 (温度) means \"temperature\"."
        },
        {
            "question": "(my) grandfather",
            "options": [
                "まっしろ［な］",
                "やります",
                "そふ",
                "［お］しろ"
            ],
            "correctIndex": 2,
            "explanation": "「そふ」 (祖父) means \"(my) grandfather\"."
        },
        {
            "question": "(my) grandmother",
            "options": [
                "えさ",
                "そぼ",
                "まっしろ［な］",
                "じょうほう"
            ],
            "correctIndex": 1,
            "explanation": "「そぼ」 (祖母) means \"(my) grandmother\"."
        },
        {
            "question": "(my) grandchild",
            "options": [
                "おいわい",
                "～さん",
                "まっしろ［な］",
                "まご"
            ],
            "correctIndex": 3,
            "explanation": "「まご」 (孫) means \"(my) grandchild\"."
        },
        {
            "question": "(someone else's) grandchild",
            "options": [
                "よびます",
                "かめ",
                "もうしわけ ありません。",
                "おまごさん"
            ],
            "correctIndex": 3,
            "explanation": "「おまごさん」 (お孫さん) means \"(someone else's) grandchild\"."
        },
        {
            "question": "(my) uncle",
            "options": [
                "ハンカチ",
                "あげます",
                "あずかります",
                "おじ"
            ],
            "correctIndex": 3,
            "explanation": "「おじ」 means \"(my) uncle\"."
        },
        {
            "question": "(someone else's) uncle",
            "options": [
                "おじさん",
                "さる",
                "はつおん",
                "すると"
            ],
            "correctIndex": 0,
            "explanation": "「おじさん」 means \"(someone else's) uncle\"."
        },
        {
            "question": "(my) aunt",
            "options": [
                "とりかえます",
                "きょうみ",
                "おもちゃ",
                "おば"
            ],
            "correctIndex": 3,
            "explanation": "「おば」 means \"(my) aunt\"."
        },
        {
            "question": "(someone else's) aunt",
            "options": [
                "おじさん",
                "おとしだま",
                "おばさん",
                "えはがき"
            ],
            "correctIndex": 2,
            "explanation": "「おばさん」 means \"(someone else's) aunt\"."
        },
        {
            "question": "janitor, caretaker",
            "options": [
                "さる",
                "やります",
                "えほん",
                "かんりにん"
            ],
            "correctIndex": 3,
            "explanation": "「かんりにん」 (管理人) means \"janitor, caretaker\"."
        },
        {
            "question": "(suffix added to a person's job title as a polite way of referring to them)",
            "options": [
                "～さん",
                "どうぞ おしあわせに。",
                "おひめさま",
                "たすけます"
            ],
            "correctIndex": 0,
            "explanation": "「～さん」 means \"(suffix added to a person's job title as a polite way of referring to them)\"."
        },
        {
            "question": "the other day",
            "options": [
                "えほん",
                "たのしく",
                "このあいだ",
                "ふたり"
            ],
            "correctIndex": 2,
            "explanation": "「このあいだ」 (この間) means \"the other day\"."
        },
        {
            "question": "a few words",
            "options": [
                "もうしわけ ありません。",
                "まっしろ［な］",
                "ひとこと",
                "かんりにん"
            ],
            "correctIndex": 2,
            "explanation": "「ひとこと」 means \"a few words\"."
        },
        {
            "question": "each",
            "options": [
                "はあ",
                "ハンカチ",
                "～ずつ",
                "いただきます"
            ],
            "correctIndex": 2,
            "explanation": "「～ずつ」 means \"each\"."
        },
        {
            "question": "couple",
            "options": [
                "かめ",
                "えさ",
                "こどもたち",
                "ふたり"
            ],
            "correctIndex": 3,
            "explanation": "「ふたり」 (二人) means \"couple\"."
        },
        {
            "question": "home (respectful equivalent of うち or いえ)",
            "options": [
                "おとしだま",
                "もうしわけ ありません。",
                "けむり",
                "おたく"
            ],
            "correctIndex": 3,
            "explanation": "「おたく」 (お宅) means \"home (respectful equivalent of うち or いえ)\"."
        },
        {
            "question": "I hope you will be very happy.",
            "options": [
                "まご",
                "すると",
                "どうぞ おしあわせに。",
                "［お］しろ"
            ],
            "correctIndex": 2,
            "explanation": "「どうぞ おしあわせに。」 (どうぞ お幸せに。) means \"I hope you will be very happy.\"."
        },
        {
            "question": "old tale, folklore",
            "options": [
                "おひめさま",
                "むかしばなし",
                "かんりにん",
                "いただきます"
            ],
            "correctIndex": 1,
            "explanation": "「むかしばなし」 (昔話) means \"old tale, folklore\"."
        },
        {
            "question": "a certain ～, one ～",
            "options": [
                "まっしろ［な］",
                "ある ～",
                "はあ",
                "いじめます"
            ],
            "correctIndex": 1,
            "explanation": "「ある ～」 means \"a certain ～, one ～\"."
        },
        {
            "question": "man",
            "options": [
                "えさ",
                "てぶくろ",
                "しんせつに します",
                "おとこ"
            ],
            "correctIndex": 3,
            "explanation": "「おとこ」 (男) means \"man\"."
        },
        {
            "question": "children",
            "options": [
                "おじさん",
                "こどもたち",
                "りく",
                "てぶくろ"
            ],
            "correctIndex": 1,
            "explanation": "「こどもたち」 (子どもたち) means \"children\"."
        },
        {
            "question": "bully, abuse, ill-treat",
            "options": [
                "いじめます",
                "おいわい",
                "たすかります",
                "おじさん"
            ],
            "correctIndex": 0,
            "explanation": "「いじめます」 means \"bully, abuse, ill-treat\"."
        },
        {
            "question": "turtle, tortoise",
            "options": [
                "バッグ",
                "おひめさま",
                "かめ",
                "むかしばなし"
            ],
            "correctIndex": 2,
            "explanation": "「かめ」 means \"turtle, tortoise\"."
        },
        {
            "question": "save, help",
            "options": [
                "たすけます",
                "よびます",
                "さる",
                "くださいます"
            ],
            "correctIndex": 0,
            "explanation": "「たすけます」 (助けます) means \"save, help\"."
        },
        {
            "question": "kind, gentle, tender-hearted",
            "options": [
                "おば",
                "きょうみ",
                "やさしい",
                "おひめさま"
            ],
            "correctIndex": 2,
            "explanation": "「やさしい」 (優しい) means \"kind, gentle, tender-hearted\"."
        },
        {
            "question": "princess",
            "options": [
                "やります",
                "やさしい",
                "くつした",
                "おひめさま"
            ],
            "correctIndex": 3,
            "explanation": "「おひめさま」 (お姫様) means \"princess\"."
        },
        {
            "question": "live, lead a life",
            "options": [
                "くらします",
                "えほん",
                "おもちゃ",
                "どうぞ おしあわせに。"
            ],
            "correctIndex": 0,
            "explanation": "「くらします」 (暮らします) means \"live, lead a life\"."
        },
        {
            "question": "land, shore",
            "options": [
                "ぶんぽう",
                "ドライバー",
                "バッグ",
                "りく"
            ],
            "correctIndex": 3,
            "explanation": "「りく」 (陸) means \"land, shore\"."
        },
        {
            "question": "and, then",
            "options": [
                "すると",
                "くつした",
                "おばさん",
                "おひめさま"
            ],
            "correctIndex": 0,
            "explanation": "「すると」 means \"and, then\"."
        },
        {
            "question": "smoke",
            "options": [
                "あずかります",
                "こどもたち",
                "けむり",
                "もうしわけ ありません。"
            ],
            "correctIndex": 2,
            "explanation": "「けむり」 (煙) means \"smoke\"."
        },
        {
            "question": "pure white",
            "options": [
                "ゆびわ",
                "まっしろ［な］",
                "おもちゃ",
                "おば"
            ],
            "correctIndex": 1,
            "explanation": "「まっしろ［な］」 (真っ白［な］) means \"pure white\"."
        },
        {
            "question": "content",
            "options": [
                "せんじつ",
                "きょうみ",
                "なかみ",
                "ハンカチ"
            ],
            "correctIndex": 2,
            "explanation": "「なかみ」 (中身) means \"content\"."
        },
        {
            "question": "name of the main character in an old folk tale",
            "options": [
                "あずかります",
                "おもちゃ",
                "うらしまたろう",
                "たすけます"
            ],
            "correctIndex": 2,
            "explanation": "「うらしまたろう」 (浦島太郎) means \"name of the main character in an old folk tale\"."
        },
        {
            "question": "invite",
            "options": [
                "ハンカチ",
                "いじめます",
                "やさしい",
                "よびます"
            ],
            "correctIndex": 3,
            "explanation": "「よびます」 (呼びます) means \"invite\"."
        },
        {
            "question": "exchange",
            "options": [
                "とりかえます",
                "くらします",
                "おたく",
                "まご"
            ],
            "correctIndex": 0,
            "explanation": "「とりかえます」 (取り替えます) means \"exchange\"."
        },
        {
            "question": "ring",
            "options": [
                "ゆびわ",
                "おじさん",
                "やります",
                "すると"
            ],
            "correctIndex": 0,
            "explanation": "「ゆびわ」 (指輪) means \"ring\"."
        },
        {
            "question": "bag",
            "options": [
                "おいわい",
                "たのしく",
                "バッグ",
                "こどもたち"
            ],
            "correctIndex": 2,
            "explanation": "「バッグ」 means \"bag\"."
        },
        {
            "question": "the year before last",
            "options": [
                "おととし",
                "～ずつ",
                "バッグ",
                "ゆびわ"
            ],
            "correctIndex": 0,
            "explanation": "「おととし」 means \"the year before last\"."
        },
        {
            "question": "yes, I see",
            "options": [
                "いじめます",
                "おひめさま",
                "はあ",
                "ドライバー"
            ],
            "correctIndex": 2,
            "explanation": "「はあ」 means \"yes, I see\"."
        },
        {
            "question": "I'm sorry./Excuse me.",
            "options": [
                "りく",
                "ゆびわ",
                "けむり",
                "もうしわけ ありません。"
            ],
            "correctIndex": 3,
            "explanation": "「もうしわけ ありません。」 (申し訳 ありません。) means \"I'm sorry./Excuse me.\"."
        },
        {
            "question": "keep, receive (a thing) in trust",
            "options": [
                "あずかります",
                "ハンカチ",
                "やります",
                "もうしわけ ありません。"
            ],
            "correctIndex": 0,
            "explanation": "「あずかります」 (預かります) means \"keep, receive (a thing) in trust\"."
        },
        {
            "question": "the other day",
            "options": [
                "さる",
                "はつおん",
                "せんじつ",
                "やさしい"
            ],
            "correctIndex": 2,
            "explanation": "「せんじつ」 (先日) means \"the other day\"."
        },
        {
            "question": "be of help",
            "options": [
                "しんせつに します",
                "こどもたち",
                "どうぞ おしあわせに。",
                "たすかります"
            ],
            "correctIndex": 3,
            "explanation": "「たすかります」 (助かります) means \"be of help\"."
        },
        {
            "question": "castle",
            "options": [
                "おととし",
                "［お］しろ",
                "おじさん",
                "まっしろ［な］"
            ],
            "correctIndex": 1,
            "explanation": "「［お］しろ」 (［お］城) means \"castle\"."
        },
        {
            "question": "happily, merrily",
            "options": [
                "だんぼう",
                "はあ",
                "さげます",
                "たのしく"
            ],
            "correctIndex": 3,
            "explanation": "「たのしく」 (楽しく) means \"happily, merrily\"."
        }
    ],
    "Lesson 42": [
        {
            "question": "wrap",
            "options": [
                "ローン",
                "つつみます",
                "しょくひん",
                "セット"
            ],
            "correctIndex": 1,
            "explanation": "「つつみます」 (包みます) means \"wrap\"."
        },
        {
            "question": "boil",
            "options": [
                "しょくひん",
                "わかします",
                "ピラミッド",
                "どのくらい"
            ],
            "correctIndex": 1,
            "explanation": "「わかします」 (沸かします) means \"boil\"."
        },
        {
            "question": "mix",
            "options": [
                "また",
                "しじょうちょうさ",
                "まぜます",
                "やかん"
            ],
            "correctIndex": 2,
            "explanation": "「まぜます」 (混ぜます) means \"mix\"."
        },
        {
            "question": "calculate",
            "options": [
                "のしぶくろ",
                "けいさんします",
                "せかいはつ",
                "データ"
            ],
            "correctIndex": 1,
            "explanation": "「けいさんします」 (計算します) means \"calculate\"."
        },
        {
            "question": "stand in a queue, line up",
            "options": [
                "いし",
                "なべ",
                "わります",
                "ならびます"
            ],
            "correctIndex": 3,
            "explanation": "「ならびます」 (並びます) means \"stand in a queue, line up\"."
        },
        {
            "question": "strong, healthy",
            "options": [
                "じょうぶ［な］",
                "ローン",
                "かんきり",
                "やかん"
            ],
            "correctIndex": 0,
            "explanation": "「じょうぶ［な］」 (丈夫［な］) means \"strong, healthy\"."
        },
        {
            "question": "apartment, flat",
            "options": [
                "アパート",
                "せいじ",
                "～の かわりに",
                "どのくらい"
            ],
            "correctIndex": 0,
            "explanation": "「アパート」 means \"apartment, flat\"."
        },
        {
            "question": "lawyer, attorney, solicitor, barrister",
            "options": [
                "ろんぶん",
                "カップ",
                "インスタントラーメン",
                "べんごし"
            ],
            "correctIndex": 3,
            "explanation": "「べんごし」 (弁護士) means \"lawyer, attorney, solicitor, barrister\"."
        },
        {
            "question": "musician",
            "options": [
                "せんぬき",
                "データ",
                "ローン",
                "おんがくか"
            ],
            "correctIndex": 3,
            "explanation": "「おんがくか」 (音楽家) means \"musician\"."
        },
        {
            "question": "children",
            "options": [
                "こどもたち",
                "ふた",
                "こどもニュース",
                "なぜ"
            ],
            "correctIndex": 0,
            "explanation": "「こどもたち」 (子どもたち) means \"children\"."
        },
        {
            "question": "nature",
            "options": [
                "インスタントラーメン",
                "こどもたち",
                "しぜん",
                "ピラミッド"
            ],
            "correctIndex": 2,
            "explanation": "「しぜん」 (自然) means \"nature\"."
        },
        {
            "question": "education",
            "options": [
                "せんそう",
                "きょういく",
                "あつい",
                "しゃかい"
            ],
            "correctIndex": 1,
            "explanation": "「きょういく」 (教育) means \"education\"."
        },
        {
            "question": "culture",
            "options": [
                "アパート",
                "あつい",
                "ぶんか",
                "もくてき"
            ],
            "correctIndex": 2,
            "explanation": "「ぶんか」 (文化) means \"culture\"."
        },
        {
            "question": "society",
            "options": [
                "めん",
                "しゃかい",
                "チキンラーメン",
                "べんごし"
            ],
            "correctIndex": 1,
            "explanation": "「しゃかい」 (社会) means \"society\"."
        },
        {
            "question": "politics",
            "options": [
                "ふたり",
                "せいじ",
                "せんそう",
                "あつい"
            ],
            "correctIndex": 1,
            "explanation": "「せいじ」 (政治) means \"politics\"."
        },
        {
            "question": "law",
            "options": [
                "しょくひん",
                "ほうりつ",
                "ろんぶん",
                "けいさんします"
            ],
            "correctIndex": 1,
            "explanation": "「ほうりつ」 (法律) means \"law\"."
        },
        {
            "question": "war",
            "options": [
                "データ",
                "せんそう",
                "ならびます",
                "ある ～"
            ],
            "correctIndex": 1,
            "explanation": "「せんそう」 (戦争) means \"war\"."
        },
        {
            "question": "peace",
            "options": [
                "かんきり",
                "いし",
                "しじょうちょうさ",
                "へいわ"
            ],
            "correctIndex": 3,
            "explanation": "「へいわ」 (平和) means \"peace\"."
        },
        {
            "question": "purpose",
            "options": [
                "どのくらい",
                "もくてき",
                "しじょうちょうさ",
                "のしぶくろ"
            ],
            "correctIndex": 1,
            "explanation": "「もくてき」 (目的) means \"purpose\"."
        },
        {
            "question": "thesis, academic paper",
            "options": [
                "たのしみ",
                "たいおんけい",
                "ざいりょう",
                "ろんぶん"
            ],
            "correctIndex": 3,
            "explanation": "「ろんぶん」 (論文) means \"thesis, academic paper\"."
        },
        {
            "question": "pleasure, enjoyment, expectation",
            "options": [
                "たのしみ",
                "あんどうももふく",
                "カップラーメン",
                "まぜます"
            ],
            "correctIndex": 0,
            "explanation": "「たのしみ」 (楽しみ) means \"pleasure, enjoyment, expectation\"."
        },
        {
            "question": "mixer, blender",
            "options": [
                "ふた",
                "ミキサー",
                "カップ",
                "ファイル"
            ],
            "correctIndex": 1,
            "explanation": "「ミキサー」 means \"mixer, blender\"."
        },
        {
            "question": "kettle",
            "options": [
                "やかん",
                "ローン",
                "セット",
                "しぜん"
            ],
            "correctIndex": 0,
            "explanation": "「やかん」 means \"kettle\"."
        },
        {
            "question": "lid, cover, cap",
            "options": [
                "そそぎます",
                "たいおんけい",
                "つつみます",
                "ふた"
            ],
            "correctIndex": 3,
            "explanation": "「ふた」 means \"lid, cover, cap\"."
        },
        {
            "question": "cap opener",
            "options": [
                "せんぬき",
                "ろんぶん",
                "あつい",
                "しょくひん"
            ],
            "correctIndex": 0,
            "explanation": "「せんぬき」 (栓抜き) means \"cap opener\"."
        },
        {
            "question": "can opener",
            "options": [
                "せいじ",
                "かんきり",
                "まぜます",
                "なべ"
            ],
            "correctIndex": 1,
            "explanation": "「かんきり」 (缶切) means \"can opener\"."
        },
        {
            "question": "canned food, tinned food",
            "options": [
                "ベートーベン",
                "せんぬき",
                "しじょうちょうさ",
                "かんづめ"
            ],
            "correctIndex": 3,
            "explanation": "「かんづめ」 (缶詰) means \"canned food, tinned food\"."
        },
        {
            "question": "envelope for a gift of money",
            "options": [
                "いまでは",
                "また",
                "カップラーメン",
                "のしぶくろ"
            ],
            "correctIndex": 3,
            "explanation": "「のしぶくろ」 (のし袋) means \"envelope for a gift of money\"."
        },
        {
            "question": "wrapping cloth used to carry things",
            "options": [
                "わります",
                "かんきり",
                "ふろしき",
                "こどもたち"
            ],
            "correctIndex": 2,
            "explanation": "「ふろしき」 means \"wrapping cloth used to carry things\"."
        },
        {
            "question": "abacus",
            "options": [
                "のしぶくろ",
                "セット",
                "インスタントラーメン",
                "そろばん"
            ],
            "correctIndex": 3,
            "explanation": "「そろばん」 means \"abacus\"."
        },
        {
            "question": "(clinical) thermometer",
            "options": [
                "こどもたち",
                "たいおんけい",
                "まぜます",
                "アパート"
            ],
            "correctIndex": 1,
            "explanation": "「たいおんけい」 (体温計) means \"(clinical) thermometer\"."
        },
        {
            "question": "material, ingredient",
            "options": [
                "きょういく",
                "ざいりょう",
                "チキンラーメン",
                "セット"
            ],
            "correctIndex": 1,
            "explanation": "「ざいりょう」 (材料) means \"material, ingredient\"."
        },
        {
            "question": "a certain ～, one ～",
            "options": [
                "あんどうももふく",
                "きょういく",
                "ある ～",
                "しぜん"
            ],
            "correctIndex": 2,
            "explanation": "「ある ～」 means \"a certain ～, one ～\"."
        },
        {
            "question": "with all one's effort",
            "options": [
                "～に よって",
                "ある ～",
                "いっしょうけんめい",
                "ほうりつ"
            ],
            "correctIndex": 2,
            "explanation": "「いっしょうけんめい」 (一生懸命) means \"with all one's effort\"."
        },
        {
            "question": "why",
            "options": [
                "ぶんか",
                "ひろめます",
                "かんけい",
                "なぜ"
            ],
            "correctIndex": 3,
            "explanation": "「なぜ」 means \"why\"."
        },
        {
            "question": "how much, how many",
            "options": [
                "れきし",
                "おんがくか",
                "こどもニュース",
                "どのくらい"
            ],
            "correctIndex": 3,
            "explanation": "「どのくらい」 means \"how much, how many\"."
        },
        {
            "question": "United Nations",
            "options": [
                "アパート",
                "エリーゼの ために",
                "しぜん",
                "こくれん"
            ],
            "correctIndex": 3,
            "explanation": "「こくれん」 (国連) means \"United Nations\"."
        },
        {
            "question": "Für Elise (For Elise)",
            "options": [
                "ファイル",
                "へいわ",
                "エリーゼの ために",
                "～の かわりに"
            ],
            "correctIndex": 2,
            "explanation": "「エリーゼの ために」 means \"Für Elise (For Elise)\"."
        },
        {
            "question": "Ludwig van Beethoven, German composer (1770-1827)",
            "options": [
                "ベートーベン",
                "はんぶん",
                "あんぜん",
                "チキンラーメン"
            ],
            "correctIndex": 0,
            "explanation": "「ベートーベン」 means \"Ludwig van Beethoven, German composer (1770-1827)\"."
        },
        {
            "question": "a fictitious news programme",
            "options": [
                "でます［ボーナスが～］",
                "ベートーベン",
                "おんがくか",
                "こどもニュース"
            ],
            "correctIndex": 3,
            "explanation": "「こどもニュース」 means \"a fictitious news programme\"."
        },
        {
            "question": "[bonus] be paid",
            "options": [
                "でます［ボーナスが～］",
                "～に よって",
                "かんきり",
                "あんどうももふく"
            ],
            "correctIndex": 0,
            "explanation": "「でます［ボーナスが～］」 (出ます［ボーナスが～］) means \"[bonus] be paid\"."
        },
        {
            "question": "half",
            "options": [
                "はんぶん",
                "あと",
                "ろんぶん",
                "へいわ"
            ],
            "correctIndex": 0,
            "explanation": "「はんぶん」 (半分) means \"half\"."
        },
        {
            "question": "loan",
            "options": [
                "ぶんか",
                "せかいはつ",
                "ローン",
                "しゃかい"
            ],
            "correctIndex": 2,
            "explanation": "「ローン」 means \"loan\"."
        },
        {
            "question": "instant noodles sold in a ready-to-use disposable container, pot noodles",
            "options": [
                "どこででも",
                "カップめん",
                "ベートーベン",
                "しぜん"
            ],
            "correctIndex": 1,
            "explanation": "「カップめん」 means \"instant noodles sold in a ready-to-use disposable container, pot noodles\"."
        },
        {
            "question": "world's first",
            "options": [
                "なぜ",
                "はんぶん",
                "じょうぶ［な］",
                "せかいはつ"
            ],
            "correctIndex": 3,
            "explanation": "「せかいはつ」 (世界初) means \"world's first\"."
        },
        {
            "question": "by ～",
            "options": [
                "ろんぶん",
                "もくてき",
                "～に よって",
                "せんぬき"
            ],
            "correctIndex": 2,
            "explanation": "「～に よって」 means \"by ～\"."
        },
        {
            "question": "bowl",
            "options": [
                "どんぶり",
                "あつい",
                "～の かわりに",
                "ひろめます"
            ],
            "correctIndex": 0,
            "explanation": "「どんぶり」 means \"bowl\"."
        },
        {
            "question": "noodles",
            "options": [
                "データ",
                "しじょうちょうさ",
                "めん",
                "インスタントラーメン"
            ],
            "correctIndex": 2,
            "explanation": "「めん」 means \"noodles\"."
        },
        {
            "question": "spread",
            "options": [
                "ひろめます",
                "へいわ",
                "あと",
                "やかん"
            ],
            "correctIndex": 0,
            "explanation": "「ひろめます」 (広めます) means \"spread\"."
        },
        {
            "question": "market survey, market research",
            "options": [
                "ピラミッド",
                "しじょうちょうさ",
                "れきし",
                "やかん"
            ],
            "correctIndex": 1,
            "explanation": "「しじょうちょうさ」 (市場調査) means \"market survey, market research\"."
        },
        {
            "question": "break",
            "options": [
                "ファイル",
                "わります",
                "はんぶん",
                "たいおんけい"
            ],
            "correctIndex": 1,
            "explanation": "「わります」 (割ります) means \"break\"."
        },
        {
            "question": "pour",
            "options": [
                "わかします",
                "そそぎます",
                "ふろしき",
                "かんきり"
            ],
            "correctIndex": 1,
            "explanation": "「そそぎます」 (注ぎます) means \"pour\"."
        },
        {
            "question": "brand name of instant noodles",
            "options": [
                "わかします",
                "どんぶり",
                "れきし",
                "チキンラーメン"
            ],
            "correctIndex": 3,
            "explanation": "「チキンラーメン」 means \"brand name of instant noodles\"."
        },
        {
            "question": "Japanese businessman and inventor (1910-2007)",
            "options": [
                "～の かわりに",
                "いっしょうけんめい",
                "のしぶくろ",
                "あんどうももふく"
            ],
            "correctIndex": 3,
            "explanation": "「あんどうももふく」 (安藤百福) means \"Japanese businessman and inventor (1910-2007)\"."
        },
        {
            "question": "thick",
            "options": [
                "いし",
                "ふろしき",
                "ローン",
                "あつい"
            ],
            "correctIndex": 3,
            "explanation": "「あつい」 (厚い) means \"thick\"."
        },
        {
            "question": "thin",
            "options": [
                "かんづめ",
                "うすい",
                "しゃかい",
                "せんそう"
            ],
            "correctIndex": 1,
            "explanation": "「うすい」 (薄い) means \"thin\"."
        },
        {
            "question": "couple",
            "options": [
                "ふたり",
                "こどもたち",
                "ベートーベン",
                "せんぬき"
            ],
            "correctIndex": 0,
            "explanation": "「ふたり」 (二人) means \"couple\"."
        },
        {
            "question": "history",
            "options": [
                "ならびます",
                "れきし",
                "～に よって",
                "いし"
            ],
            "correctIndex": 1,
            "explanation": "「れきし」 (歴史) means \"history\"."
        },
        {
            "question": "safety",
            "options": [
                "あつい",
                "なぜ",
                "ふろしき",
                "あんぜん"
            ],
            "correctIndex": 3,
            "explanation": "「あんぜん」 (安全) means \"safety\"."
        },
        {
            "question": "relation, connection",
            "options": [
                "ファイル",
                "かんけい",
                "カップめん",
                "ある ～"
            ],
            "correctIndex": 1,
            "explanation": "「かんけい」 (関係) means \"relation, connection\"."
        },
        {
            "question": "stone",
            "options": [
                "いし",
                "はんぶん",
                "ろんぶん",
                "せかいはつ"
            ],
            "correctIndex": 0,
            "explanation": "「いし」 (石) means \"stone\"."
        },
        {
            "question": "pyramid",
            "options": [
                "あんどうももふく",
                "そそぎます",
                "ピラミッド",
                "のしぶくろ"
            ],
            "correctIndex": 2,
            "explanation": "「ピラミッド」 means \"pyramid\"."
        },
        {
            "question": "data",
            "options": [
                "しょくひん",
                "データ",
                "かんきり",
                "カップラーメン"
            ],
            "correctIndex": 1,
            "explanation": "「データ」 means \"data\"."
        },
        {
            "question": "file",
            "options": [
                "こどもたち",
                "やかん",
                "めん",
                "ファイル"
            ],
            "correctIndex": 3,
            "explanation": "「ファイル」 means \"file\"."
        },
        {
            "question": "Poland",
            "options": [
                "へいわ",
                "はんぶん",
                "ポーランド",
                "ふろしき"
            ],
            "correctIndex": 2,
            "explanation": "「ポーランド」 means \"Poland\"."
        },
        {
            "question": "set",
            "options": [
                "あんどうももふく",
                "あと",
                "ざいりょう",
                "セット"
            ],
            "correctIndex": 3,
            "explanation": "「セット」 means \"set\"."
        },
        {
            "question": "the amount left unused, the rest",
            "options": [
                "ぶんか",
                "れきし",
                "かんづめ",
                "あと"
            ],
            "correctIndex": 3,
            "explanation": "「あと」 means \"the amount left unused, the rest\"."
        },
        {
            "question": "instant Chinese noodles sold in a ready-to-use disposable container",
            "options": [
                "カップラーメン",
                "こどもたち",
                "れきし",
                "ほうりつ"
            ],
            "correctIndex": 0,
            "explanation": "「カップラーメン」 means \"instant Chinese noodles sold in a ready-to-use disposable container\"."
        },
        {
            "question": "instant Chinese noodles",
            "options": [
                "かんきり",
                "カップめん",
                "のしぶくろ",
                "インスタントラーメン"
            ],
            "correctIndex": 3,
            "explanation": "「インスタントラーメン」 means \"instant Chinese noodles\"."
        },
        {
            "question": "pan, pot",
            "options": [
                "なべ",
                "かんけい",
                "ふた",
                "ファイル"
            ],
            "correctIndex": 0,
            "explanation": "「なべ」 means \"pan, pot\"."
        },
        {
            "question": "food",
            "options": [
                "そろばん",
                "インスタントラーメン",
                "しょくひん",
                "あんぜん"
            ],
            "correctIndex": 2,
            "explanation": "「しょくひん」 (食品) means \"food\"."
        },
        {
            "question": "investigation, survey",
            "options": [
                "どのくらい",
                "ちょうさ",
                "せかいはつ",
                "めん"
            ],
            "correctIndex": 1,
            "explanation": "「ちょうさ」 (調査) means \"investigation, survey\"."
        },
        {
            "question": "cup",
            "options": [
                "セット",
                "カップ",
                "のしぶくろ",
                "～の かわりに"
            ],
            "correctIndex": 1,
            "explanation": "「カップ」 means \"cup\"."
        },
        {
            "question": "and",
            "options": [
                "そそぎます",
                "しぜん",
                "ふたり",
                "また"
            ],
            "correctIndex": 3,
            "explanation": "「また」 means \"and\"."
        },
        {
            "question": "in place of ～, instead of ～",
            "options": [
                "たのしみ",
                "ポーランド",
                "～の かわりに",
                "ふろしき"
            ],
            "correctIndex": 2,
            "explanation": "「～の かわりに」 (～の 代わりに) means \"in place of ～, instead of ～\"."
        },
        {
            "question": "in any place",
            "options": [
                "インスタントラーメン",
                "どこででも",
                "ぶんか",
                "どのくらい"
            ],
            "correctIndex": 1,
            "explanation": "「どこででも」 means \"in any place\"."
        },
        {
            "question": "now",
            "options": [
                "いまでは",
                "やかん",
                "どのくらい",
                "けいさんします"
            ],
            "correctIndex": 0,
            "explanation": "「いまでは」 (今では) means \"now\"."
        }
    ],
    "Lesson 43": [
        {
            "question": "[exports] increase",
            "options": [
                "ひ",
                "りゆう",
                "ふえます［ゆしゅつが～］",
                "さがります［ねだんが～］"
            ],
            "correctIndex": 2,
            "explanation": "「ふえます［ゆしゅつが～］」 (増えます［輸出が～］) means \"[exports] increase\"."
        },
        {
            "question": "[exports] decrease",
            "options": [
                "きれます［ひもが～］",
                "しゅうにゅう",
                "いまにも",
                "へります［ゆしゅつが～］"
            ],
            "correctIndex": 3,
            "explanation": "「へります［ゆしゅつが～］」 (減ります［輸出が～］) means \"[exports] decrease\"."
        },
        {
            "question": "[the price] rise",
            "options": [
                "あがります［ねだんが～］",
                "センス",
                "れいぼう",
                "ガソリン"
            ],
            "correctIndex": 0,
            "explanation": "「あがります［ねだんが～］」 (上がります［値段が～］) means \"[the price] rise\"."
        },
        {
            "question": "[the price] fall, drop",
            "options": [
                "さがります［ねだんが～］",
                "おちます［にもつ～］",
                "とれます［ボタンが～］",
                "つまらない"
            ],
            "correctIndex": 0,
            "explanation": "「さがります［ねだんが～］」 (下がります［値段が～］) means \"[the price] fall, drop\"."
        },
        {
            "question": "[a string] break, snap",
            "options": [
                "なくなります［ガソリンが～］",
                "いまにも",
                "きれます［ひもが～］",
                "あやまります"
            ],
            "correctIndex": 2,
            "explanation": "「きれます［ひもが～］」 (切れます［ひもが～］) means \"[a string] break, snap\"."
        },
        {
            "question": "[a button] come off",
            "options": [
                "ひ",
                "とれます［ボタンが～］",
                "ぴったり",
                "だんぼう"
            ],
            "correctIndex": 1,
            "explanation": "「とれます［ボタンが～］」 means \"[a button] come off\"."
        },
        {
            "question": "[baggage] fall down",
            "options": [
                "きれます［ひもが～］",
                "しりあいます",
                "おちます［にもつ～］",
                "～と いいます"
            ],
            "correctIndex": 2,
            "explanation": "「おちます［にもつ～］」 (落ちます［荷物が～］) means \"[baggage] fall down\"."
        },
        {
            "question": "[petrol, gasoline] run out, be lost",
            "options": [
                "りゆう",
                "うまい",
                "しあわせ［な］",
                "なくなります［ガソリンが～］"
            ],
            "correctIndex": 3,
            "explanation": "「なくなります［ガソリンが～］」 means \"[petrol, gasoline] run out, be lost\"."
        },
        {
            "question": "strange, peculiar",
            "options": [
                "ねんれい",
                "へん［な］",
                "とれます［ボタンが～］",
                "パンフレット"
            ],
            "correctIndex": 1,
            "explanation": "「へん［な］」 (変［な］) means \"strange, peculiar\"."
        },
        {
            "question": "happy",
            "options": [
                "ガソリン",
                "しあわせ［な］",
                "センス",
                "ふえます［ゆしゅつが～］"
            ],
            "correctIndex": 1,
            "explanation": "「しあわせ［な］」 (幸せ［な］) means \"happy\"."
        },
        {
            "question": "easy",
            "options": [
                "へります［ゆしゅつが～］",
                "～と いいます",
                "らく［な］",
                "やさしい"
            ],
            "correctIndex": 2,
            "explanation": "「らく［な］」 (楽［な］) means \"easy\"."
        },
        {
            "question": "tasty",
            "options": [
                "わあ",
                "さがります［ねだんが～］",
                "きれます［ひもが～］",
                "うまい"
            ],
            "correctIndex": 3,
            "explanation": "「うまい」 means \"tasty\"."
        },
        {
            "question": "not tasty",
            "options": [
                "ばら",
                "しりあいます",
                "センス",
                "まずい"
            ],
            "correctIndex": 3,
            "explanation": "「まずい」 means \"not tasty\"."
        },
        {
            "question": "boring, uninteresting, trivial",
            "options": [
                "つまらない",
                "へります［ゆしゅつが～］",
                "わあ",
                "へん［な］"
            ],
            "correctIndex": 0,
            "explanation": "「つまらない」 means \"boring, uninteresting, trivial\"."
        },
        {
            "question": "kind, gentle, tender-hearted",
            "options": [
                "あやまります",
                "ひ",
                "じょうぶ［な］",
                "やさしい"
            ],
            "correctIndex": 3,
            "explanation": "「やさしい」 (優しい) means \"kind, gentle, tender-hearted\"."
        },
        {
            "question": "petrol, gasoline",
            "options": [
                "じょうぶ［な］",
                "しりあいます",
                "ガソリン",
                "あやまります"
            ],
            "correctIndex": 2,
            "explanation": "「ガソリン」 means \"petrol, gasoline\"."
        },
        {
            "question": "fire",
            "options": [
                "だんぼう",
                "まずい",
                "かいいん",
                "ひ"
            ],
            "correctIndex": 3,
            "explanation": "「ひ」 (火) means \"fire\"."
        },
        {
            "question": "pamphlet",
            "options": [
                "パンフレット",
                "そのうえ",
                "やさしい",
                "うまい"
            ],
            "correctIndex": 0,
            "explanation": "「パンフレット」 means \"pamphlet\"."
        },
        {
            "question": "at any moment (used to describe a situation just before it changes)",
            "options": [
                "へん［な］",
                "てきとう［な］",
                "いまにも",
                "しりあいます"
            ],
            "correctIndex": 2,
            "explanation": "「いまにも」 (今にも) means \"at any moment (used to describe a situation just before it changes)\"."
        },
        {
            "question": "Oh!/Wow!",
            "options": [
                "じょうぶ［な］",
                "ドライブ",
                "まずい",
                "わあ"
            ],
            "correctIndex": 3,
            "explanation": "「わあ」 means \"Oh!/Wow!\"."
        },
        {
            "question": "rose",
            "options": [
                "へん［な］",
                "しゅうにゅう",
                "ばら",
                "ドライブ"
            ],
            "correctIndex": 2,
            "explanation": "「ばら」 means \"rose\"."
        },
        {
            "question": "driving",
            "options": [
                "ねんれい",
                "ドライブ",
                "あがります［ねだんが～］",
                "おちます［にもつ～］"
            ],
            "correctIndex": 1,
            "explanation": "「ドライブ」 means \"driving\"."
        },
        {
            "question": "reason",
            "options": [
                "しゅうにゅう",
                "りゆう",
                "つまらない",
                "なくなります［ガソリンが～］"
            ],
            "correctIndex": 1,
            "explanation": "「りゆう」 (理由) means \"reason\"."
        },
        {
            "question": "apologize",
            "options": [
                "～と いいます",
                "へん［な］",
                "さがります［ねだんが～］",
                "あやまります"
            ],
            "correctIndex": 3,
            "explanation": "「あやまります」 (謝ります) means \"apologize\"."
        },
        {
            "question": "get acquainted",
            "options": [
                "てきとう［な］",
                "らく［な］",
                "しりあいます",
                "ばら"
            ],
            "correctIndex": 2,
            "explanation": "「しりあいます」 (知り合います) means \"get acquainted\"."
        },
        {
            "question": "strong, healthy",
            "options": [
                "つまらない",
                "じょうぶ［な］",
                "へん［な］",
                "てきとう［な］"
            ],
            "correctIndex": 1,
            "explanation": "「じょうぶ［な］」 (丈夫［な］) means \"strong, healthy\"."
        },
        {
            "question": "heating",
            "options": [
                "れいぼう",
                "だんぼう",
                "あがります［ねだんが～］",
                "りゆう"
            ],
            "correctIndex": 1,
            "explanation": "「だんぼう」 (暖房) means \"heating\"."
        },
        {
            "question": "air-conditioning",
            "options": [
                "ぴったり",
                "りゆう",
                "ドライブ",
                "れいぼう"
            ],
            "correctIndex": 3,
            "explanation": "「れいぼう」 (冷房) means \"air-conditioning\"."
        },
        {
            "question": "taste, sense (［ふくの］～が あります : have good taste [in clothing])",
            "options": [
                "てきとう［な］",
                "センス",
                "れいぼう",
                "あがります［ねだんが～］"
            ],
            "correctIndex": 1,
            "explanation": "「センス」 means \"taste, sense (［ふくの］～が あります : have good taste [in clothing])\"."
        },
        {
            "question": "member",
            "options": [
                "かいいん",
                "そのうえ",
                "なくなります［ガソリンが～］",
                "とれます［ボタンが～］"
            ],
            "correctIndex": 0,
            "explanation": "「かいいん」 (会員) means \"member\"."
        },
        {
            "question": "suitable, proper",
            "options": [
                "ドライブ",
                "てきとう［な］",
                "りゆう",
                "そのうえ"
            ],
            "correctIndex": 1,
            "explanation": "「てきとう［な］」 (適当［な］) means \"suitable, proper\"."
        },
        {
            "question": "age",
            "options": [
                "まずい",
                "さがります［ねだんが～］",
                "しあわせ［な］",
                "ねんれい"
            ],
            "correctIndex": 3,
            "explanation": "「ねんれい」 (年齢) means \"age\"."
        },
        {
            "question": "income",
            "options": [
                "とれます［ボタンが～］",
                "れいぼう",
                "しゅうにゅう",
                "ひ"
            ],
            "correctIndex": 2,
            "explanation": "「しゅうにゅう」 (収入) means \"income\"."
        },
        {
            "question": "exactly, just right",
            "options": [
                "パンフレット",
                "わあ",
                "ぴったり",
                "あやまります"
            ],
            "correctIndex": 2,
            "explanation": "「ぴったり」 means \"exactly, just right\"."
        },
        {
            "question": "in addition to that, moreover",
            "options": [
                "あやまります",
                "へります［ゆしゅつが～］",
                "しあわせ［な］",
                "そのうえ"
            ],
            "correctIndex": 3,
            "explanation": "「そのうえ」 means \"in addition to that, moreover\"."
        },
        {
            "question": "(one's name) is ～",
            "options": [
                "～と いいます",
                "うまい",
                "さがります［ねだんが～］",
                "なくなります［ガソリンが～］"
            ],
            "correctIndex": 0,
            "explanation": "「～と いいます」 means \"(one's name) is ～\"."
        }
    ],
    "Lesson 44": [
        {
            "question": "cry",
            "options": [
                "なきます",
                "たとえば",
                "こい",
                "たんす"
            ],
            "correctIndex": 0,
            "explanation": "「なきます」 (泣きます) means \"cry\"."
        },
        {
            "question": "laugh, smile",
            "options": [
                "これら",
                "えんぎが わるい",
                "わらいます",
                "ようしょく"
            ],
            "correctIndex": 2,
            "explanation": "「わらいます」 (笑います) means \"laugh, smile\"."
        },
        {
            "question": "sleep",
            "options": [
                "ねむります",
                "ていねい［な］",
                "こまかい",
                "じゅんじょ"
            ],
            "correctIndex": 0,
            "explanation": "「ねむります」 (眠ります) means \"sleep\"."
        },
        {
            "question": "[a shirt] dry",
            "options": [
                "また",
                "ねむります",
                "かわきます［シャツが～］",
                "えんぎが わるい"
            ],
            "correctIndex": 2,
            "explanation": "「かわきます［シャツが～］」 (乾きます［シャツが～］) means \"[a shirt] dry\"."
        },
        {
            "question": "[a shirt] get wet",
            "options": [
                "ぬれます［シャツが～］",
                "ようしょく",
                "かわきます［シャツが～］",
                "どう なさいますか。"
            ],
            "correctIndex": 0,
            "explanation": "「ぬれます［シャツが～］」 (濡れる［シャツが～］) means \"[a shirt] get wet\"."
        },
        {
            "question": "slip",
            "options": [
                "じゅんじょ",
                "ホテルひろしま",
                "こまかい",
                "すべります"
            ],
            "correctIndex": 3,
            "explanation": "「すべります」 (滑べります) means \"slip\"."
        },
        {
            "question": "[an accident] happen",
            "options": [
                "おきます［じこが～］",
                "シャンプー",
                "あんぜん［な］",
                "シングル"
            ],
            "correctIndex": 0,
            "explanation": "「おきます［じこが～］」 (起きます［事故が～］) means \"[an accident] happen\"."
        },
        {
            "question": "adjust",
            "options": [
                "なきます",
                "きけん［な］",
                "ちょうせつします",
                "おかず"
            ],
            "correctIndex": 2,
            "explanation": "「ちょうせつします」 (調節します) means \"adjust\"."
        },
        {
            "question": "safe",
            "options": [
                "［どうも］おつかれさまでした。",
                "あんしん［な］",
                "じゅんじょ",
                "あんぜん［な］"
            ],
            "correctIndex": 3,
            "explanation": "「あんぜん［な］」 (安全［な］) means \"safe\"."
        },
        {
            "question": "dangerous",
            "options": [
                "おきます［じこが～］",
                "これら",
                "どう なさいますか。",
                "きけん［な］"
            ],
            "correctIndex": 3,
            "explanation": "「きけん［な］」 (危険［な］) means \"dangerous\"."
        },
        {
            "question": "strong (taste), dark (color), thick (liquid)",
            "options": [
                "これで よろしいでしょうか。",
                "こい",
                "こまかい",
                "あんぜん［な］"
            ],
            "correctIndex": 1,
            "explanation": "「こい」 (濃い) means \"strong (taste), dark (color), thick (liquid)\"."
        },
        {
            "question": "weak (taste), light (color), thin",
            "options": [
                "ほそい",
                "うすい",
                "ちょうせつします",
                "これで よろしいでしょうか。"
            ],
            "correctIndex": 1,
            "explanation": "「うすい」 (薄い) means \"weak (taste), light (color), thin\"."
        },
        {
            "question": "thick",
            "options": [
                "－ばい",
                "あつい",
                "じゅんじょ",
                "わらいます"
            ],
            "correctIndex": 1,
            "explanation": "「あつい」 (厚い) means \"thick\"."
        },
        {
            "question": "thick (of large diameter)",
            "options": [
                "りょう",
                "ふとい",
                "ほそい",
                "くうき"
            ],
            "correctIndex": 1,
            "explanation": "「ふとい」 (太い) means \"thick (of large diameter)\"."
        },
        {
            "question": "thin (of small diameter)",
            "options": [
                "うまく",
                "シングル",
                "おかず",
                "ほそい"
            ],
            "correctIndex": 3,
            "explanation": "「ほそい」 (細い) means \"thin (of small diameter)\"."
        },
        {
            "question": "air",
            "options": [
                "りゆう",
                "すべります",
                "くうき",
                "なみだ"
            ],
            "correctIndex": 2,
            "explanation": "「くうき」 (空気) means \"air\"."
        },
        {
            "question": "tear",
            "options": [
                "おきます［じこが～］",
                "なみだ",
                "ぬれます［シャツが～］",
                "ねむります"
            ],
            "correctIndex": 1,
            "explanation": "「なみだ」 (涙) means \"tear\"."
        },
        {
            "question": "Japanese dish",
            "options": [
                "ほそい",
                "くうき",
                "あんしん［な］",
                "わしょく"
            ],
            "correctIndex": 3,
            "explanation": "「わしょく」 (和食) means \"Japanese dish\"."
        },
        {
            "question": "Western dish",
            "options": [
                "せんたくもの",
                "ようしょく",
                "きけん［な］",
                "おかず"
            ],
            "correctIndex": 1,
            "explanation": "「ようしょく」 (洋食) means \"Western dish\"."
        },
        {
            "question": "side dish",
            "options": [
                "どういうふうに なさいますか。",
                "おかず",
                "ツイン",
                "わらいます"
            ],
            "correctIndex": 1,
            "explanation": "「おかず」 (御数) means \"side dish\"."
        },
        {
            "question": "quantity",
            "options": [
                "きけん［な］",
                "また",
                "りょう",
                "どういうふうに なさいますか。"
            ],
            "correctIndex": 2,
            "explanation": "「りょう」 (量) means \"quantity\"."
        },
        {
            "question": "－ times",
            "options": [
                "－ばい",
                "これで よろしいでしょうか。",
                "いやがります",
                "たとえば"
            ],
            "correctIndex": 0,
            "explanation": "「－ばい」 (－倍) means \"－ times\"."
        },
        {
            "question": "single room",
            "options": [
                "－ばい",
                "シングル",
                "ちょうせつします",
                "［どうも］おつかれさまでした。"
            ],
            "correctIndex": 1,
            "explanation": "「シングル」 means \"single room\"."
        },
        {
            "question": "twin-bedded room",
            "options": [
                "ツイン",
                "シャンプー",
                "こまかい",
                "わしょく"
            ],
            "correctIndex": 0,
            "explanation": "「ツイン」 means \"twin-bedded room\"."
        },
        {
            "question": "washing, laundry",
            "options": [
                "カット",
                "－ばい",
                "せんたくもの",
                "ショート"
            ],
            "correctIndex": 2,
            "explanation": "「せんたくもの」 (洗濯物) means \"washing, laundry\"."
        },
        {
            "question": "DVD",
            "options": [
                "せんたくもの",
                "たんす",
                "どう なさいますか。",
                "DVD"
            ],
            "correctIndex": 3,
            "explanation": "「DVD」 means \"DVD\"."
        },
        {
            "question": "a fictitious hotel",
            "options": [
                "ホテルひろしま",
                "おきます［じこが～］",
                "ていねい［な］",
                "すべります"
            ],
            "correctIndex": 0,
            "explanation": "「ホテルひろしま」 means \"a fictitious hotel\"."
        },
        {
            "question": "What can I do for you? (respectful)",
            "options": [
                "ひょうげん",
                "じゅんじょ",
                "ていねい［な］",
                "どう なさいますか。"
            ],
            "correctIndex": 3,
            "explanation": "「どう なさいますか。」 means \"What can I do for you? (respectful)\"."
        },
        {
            "question": "haircut",
            "options": [
                "ふとい",
                "カット",
                "－ばい",
                "たんす"
            ],
            "correctIndex": 1,
            "explanation": "「カット」 means \"haircut\"."
        },
        {
            "question": "shampoo (～を します : shampoo)",
            "options": [
                "シャンプー",
                "わらいます",
                "どういうふうに なさいますか。",
                "くうき"
            ],
            "correctIndex": 0,
            "explanation": "「シャンプー」 means \"shampoo (～を します : shampoo)\"."
        },
        {
            "question": "How would you like it done? (respectful)",
            "options": [
                "ねむります",
                "どういうふうに なさいますか。",
                "また",
                "あんしん［な］"
            ],
            "correctIndex": 1,
            "explanation": "「どういうふうに なさいますか。」 means \"How would you like it done? (respectful)\"."
        },
        {
            "question": "short",
            "options": [
                "ほそい",
                "ショート",
                "あんしん［な］",
                "こまかい"
            ],
            "correctIndex": 1,
            "explanation": "「ショート」 means \"short\"."
        },
        {
            "question": "Do it like ～.",
            "options": [
                "ふとい",
                "～みたいに して ください。",
                "ツイン",
                "うすい"
            ],
            "correctIndex": 1,
            "explanation": "「～みたいに して ください。」 means \"Do it like ～.\"."
        },
        {
            "question": "Would this be all right? (polite)",
            "options": [
                "これで よろしいでしょうか。",
                "どう なさいますか。",
                "ひょうげん",
                "また"
            ],
            "correctIndex": 0,
            "explanation": "「これで よろしいでしょうか。」 means \"Would this be all right? (polite)\"."
        },
        {
            "question": "Thank you for your patience. (shop assistant to customer)",
            "options": [
                "［どうも］おつかれさまでした。",
                "これで よろしいでしょうか。",
                "わかれます",
                "えんぎが わるい"
            ],
            "correctIndex": 0,
            "explanation": "「［どうも］おつかれさまでした。」 (［どうも］お疲れさまでした。) means \"Thank you for your patience. (shop assistant to customer)\"."
        },
        {
            "question": "dislike",
            "options": [
                "あんぜん［な］",
                "シャンプー",
                "いやがります",
                "うまく"
            ],
            "correctIndex": 2,
            "explanation": "「いやがります」 (嫌がります) means \"dislike\"."
        },
        {
            "question": "and",
            "options": [
                "DVD",
                "うすい",
                "また",
                "ツイン"
            ],
            "correctIndex": 2,
            "explanation": "「また」 means \"and\"."
        },
        {
            "question": "well",
            "options": [
                "はんぶん",
                "うまく",
                "ツイン",
                "ようしょく"
            ],
            "correctIndex": 1,
            "explanation": "「うまく」 means \"well\"."
        },
        {
            "question": "order",
            "options": [
                "カット",
                "どういうふうに なさいますか。",
                "じゅんじょ",
                "これで よろしいでしょうか。"
            ],
            "correctIndex": 2,
            "explanation": "「じゅんじょ」 (順序) means \"order\"."
        },
        {
            "question": "relieved",
            "options": [
                "えんぎが わるい",
                "あんしん［な］",
                "ふとい",
                "じゅんじょ"
            ],
            "correctIndex": 1,
            "explanation": "「あんしん［な］」 (安心［な］) means \"relieved\"."
        },
        {
            "question": "expression",
            "options": [
                "ほそい",
                "ひょうげん",
                "かわきます［シャツが～］",
                "［どうも］おつかれさまでした。"
            ],
            "correctIndex": 1,
            "explanation": "「ひょうげん」 (表現) means \"expression\"."
        },
        {
            "question": "for example",
            "options": [
                "［どうも］おつかれさまでした。",
                "たとえば",
                "いやがります",
                "これで よろしいでしょうか。"
            ],
            "correctIndex": 1,
            "explanation": "「たとえば」 (例えば) means \"for example\"."
        },
        {
            "question": "part, separate",
            "options": [
                "えんぎが わるい",
                "－ばい",
                "あんしん［な］",
                "わかれます"
            ],
            "correctIndex": 3,
            "explanation": "「わかれます」 (別れます) means \"part, separate\"."
        },
        {
            "question": "these",
            "options": [
                "ツイン",
                "［どうも］おつかれさまでした。",
                "これら",
                "あつい"
            ],
            "correctIndex": 2,
            "explanation": "「これら」 means \"these\"."
        },
        {
            "question": "unlucky, ill-omened",
            "options": [
                "かわきます［シャツが～］",
                "ていねい［な］",
                "えんぎが わるい",
                "りょう"
            ],
            "correctIndex": 2,
            "explanation": "「えんぎが わるい」 (縁起が 悪い) means \"unlucky, ill-omened\"."
        },
        {
            "question": "polite, courteous, careful",
            "options": [
                "くうき",
                "シングル",
                "ていねい［な］",
                "－ばい"
            ],
            "correctIndex": 2,
            "explanation": "「ていねい［な］」 (丁寧［な］) means \"polite, courteous, careful\"."
        },
        {
            "question": "small, fine",
            "options": [
                "こまかい",
                "ツイン",
                "ようしょく",
                "どう なさいますか。"
            ],
            "correctIndex": 0,
            "explanation": "「こまかい」 (細かい) means \"small, fine\"."
        },
        {
            "question": "half",
            "options": [
                "ていねい［な］",
                "はんぶん",
                "あんぜん［な］",
                "シングル"
            ],
            "correctIndex": 1,
            "explanation": "「はんぶん」 (半分) means \"half\"."
        },
        {
            "question": "chest of drawers",
            "options": [
                "どう なさいますか。",
                "わしょく",
                "わかれます",
                "たんす"
            ],
            "correctIndex": 3,
            "explanation": "「たんす」 (箪笥) means \"chest of drawers\"."
        },
        {
            "question": "reason",
            "options": [
                "ちょうせつします",
                "なきます",
                "ふとい",
                "りゆう"
            ],
            "correctIndex": 3,
            "explanation": "「りゆう」 (理由) means \"reason\"."
        }
    ],
    "Lesson 45": [
        {
            "question": "believe, trust",
            "options": [
                "よういします",
                "かかりいん",
                "－い",
                "しんじます"
            ],
            "correctIndex": 3,
            "explanation": "「しんじます」 (信じます) means \"believe, trust\"."
        },
        {
            "question": "cancel",
            "options": [
                "キャンセルします",
                "めざまし［どけい］",
                "きゅうに",
                "それでも"
            ],
            "correctIndex": 0,
            "explanation": "「キャンセルします」 means \"cancel\"."
        },
        {
            "question": "inform",
            "options": [
                "めざまし［どけい］",
                "しらせます",
                "［－えん］さつ",
                "あやまります"
            ],
            "correctIndex": 1,
            "explanation": "「しらせます」 (知らせます) means \"inform\"."
        },
        {
            "question": "guarantee",
            "options": [
                "それでも",
                "ほしょうしょ",
                "しらせます",
                "セットします"
            ],
            "correctIndex": 1,
            "explanation": "「ほしょうしょ」 (保証書) means \"guarantee\"."
        },
        {
            "question": "receipt",
            "options": [
                "りょうしゅうしょ",
                "［－えん］さつ",
                "めが さめます",
                "ねむります"
            ],
            "correctIndex": 0,
            "explanation": "「りょうしゅうしょ」 (領収書) means \"receipt\"."
        },
        {
            "question": "camp",
            "options": [
                "おくりもの",
                "キャンプ",
                "めが さめます",
                "いじょうです。"
            ],
            "correctIndex": 1,
            "explanation": "「キャンプ」 means \"camp\"."
        },
        {
            "question": "calling off, cancelling, suspension",
            "options": [
                "レバー",
                "ちゅうし",
                "キャンセルします",
                "てん"
            ],
            "correctIndex": 1,
            "explanation": "「ちゅうし」 (中止) means \"calling off, cancelling, suspension\"."
        },
        {
            "question": "point, score",
            "options": [
                "きゅうに",
                "てん",
                "１１９ばん",
                "１１０ばん"
            ],
            "correctIndex": 1,
            "explanation": "「てん」 (点) means \"point, score\"."
        },
        {
            "question": "plum (blossom)",
            "options": [
                "それでも",
                "ねむります",
                "だいがくせい",
                "うめ"
            ],
            "correctIndex": 3,
            "explanation": "「うめ」 (梅) means \"plum (blossom)\"."
        },
        {
            "question": "the emergency police telephone number",
            "options": [
                "おくりもの",
                "１１０ばん",
                "めが さめます",
                "ちゅうし"
            ],
            "correctIndex": 1,
            "explanation": "「１１０ばん」 (１１０番) means \"the emergency police telephone number\"."
        },
        {
            "question": "the emergency fire service telephone number",
            "options": [
                "てん",
                "おくりもの",
                "なります",
                "１１９ばん"
            ],
            "correctIndex": 3,
            "explanation": "「１１９ばん」 (１１９番) means \"the emergency fire service telephone number\"."
        },
        {
            "question": "suddenly",
            "options": [
                "きゅうに",
                "しんじます",
                "ほしょうしょ",
                "だいがくせい"
            ],
            "correctIndex": 0,
            "explanation": "「きゅうに」 (急に) means \"suddenly\"."
        },
        {
            "question": "unreasonably",
            "options": [
                "１１９ばん",
                "スタート",
                "むりに",
                "しんじます"
            ],
            "correctIndex": 2,
            "explanation": "「むりに」 (無理に) means \"unreasonably\"."
        },
        {
            "question": "be looking forward to, be expecting",
            "options": [
                "たのしみに して います",
                "かかり",
                "あいます［じこに～］",
                "１１９ばん"
            ],
            "correctIndex": 0,
            "explanation": "「たのしみに して います」 (楽しみに して います) means \"be looking forward to, be expecting\"."
        },
        {
            "question": "That's all",
            "options": [
                "いじょうです。",
                "かいとう",
                "めざまし［どけい］",
                "しんじます"
            ],
            "correctIndex": 0,
            "explanation": "「いじょうです。」 (以上です。) means \"That's all\"."
        },
        {
            "question": "person in charge, organiser",
            "options": [
                "てん",
                "うめ",
                "かかりいん",
                "おくりもの"
            ],
            "correctIndex": 2,
            "explanation": "「かかりいん」 (係員) means \"person in charge, organiser\"."
        },
        {
            "question": "course",
            "options": [
                "スタート",
                "めが さめます",
                "コース",
                "うめ"
            ],
            "correctIndex": 2,
            "explanation": "「コース」 means \"course\"."
        },
        {
            "question": "start",
            "options": [
                "スタート",
                "あやまります",
                "うまく いきます",
                "ゆうしょうします"
            ],
            "correctIndex": 0,
            "explanation": "「スタート」 means \"start\"."
        },
        {
            "question": "-th (ranking)",
            "options": [
                "－い",
                "いじょうです。",
                "めざまし［どけい］",
                "むりに"
            ],
            "correctIndex": 0,
            "explanation": "「－い」 (－位) means \"-th (ranking)\"."
        },
        {
            "question": "win the championship, come first",
            "options": [
                "りょうしゅうしょ",
                "めが さめます",
                "ゆうしょうします",
                "しらせます"
            ],
            "correctIndex": 2,
            "explanation": "「ゆうしょうします」 (優勝します) means \"win the championship, come first\"."
        },
        {
            "question": "trouble, worry",
            "options": [
                "なやみ",
                "［－えん］さつ",
                "－い",
                "よういします"
            ],
            "correctIndex": 0,
            "explanation": "「なやみ」 (悩み) means \"trouble, worry\"."
        },
        {
            "question": "alarm clock",
            "options": [
                "セットします",
                "１１９ばん",
                "コース",
                "めざまし［どけい］"
            ],
            "correctIndex": 3,
            "explanation": "「めざまし［どけい］」 (目覚まし［時計］) means \"alarm clock\"."
        },
        {
            "question": "wake up",
            "options": [
                "だいがくせい",
                "ちゃんと",
                "たのしみに して います",
                "めが さめます"
            ],
            "correctIndex": 3,
            "explanation": "「めが さめます」 (目が 覚めます) means \"wake up\"."
        },
        {
            "question": "university student",
            "options": [
                "かかり",
                "だいがくせい",
                "きゅうに",
                "めが さめます"
            ],
            "correctIndex": 1,
            "explanation": "「だいがくせい」 (大学生) means \"university student\"."
        },
        {
            "question": "answer, reply (～します : answer, reply)",
            "options": [
                "なやみ",
                "ほしょうしょ",
                "かいとう",
                "あいます［じこに～］"
            ],
            "correctIndex": 2,
            "explanation": "「かいとう」 (回答) means \"answer, reply (～します : answer, reply)\"."
        },
        {
            "question": "ring",
            "options": [
                "いじょうです。",
                "なります",
                "むりに",
                "かかりいん"
            ],
            "correctIndex": 1,
            "explanation": "「なります」 (鳴ります) means \"ring\"."
        },
        {
            "question": "set",
            "options": [
                "たのしみに して います",
                "－い",
                "セットします",
                "あいます［じこに～］"
            ],
            "correctIndex": 2,
            "explanation": "「セットします」 means \"set\"."
        },
        {
            "question": "nevertheless, for all that",
            "options": [
                "キャンセルします",
                "めざまし［どけい］",
                "コース",
                "それでも"
            ],
            "correctIndex": 3,
            "explanation": "「それでも」 means \"nevertheless, for all that\"."
        },
        {
            "question": "apologize",
            "options": [
                "あやまります",
                "よういします",
                "かかり",
                "めが さめます"
            ],
            "correctIndex": 0,
            "explanation": "「あやまります」 (謝ります) means \"apologize\"."
        },
        {
            "question": "encounter [an accident]",
            "options": [
                "あいます［じこに～］",
                "１１０ばん",
                "コース",
                "セットします"
            ],
            "correctIndex": 0,
            "explanation": "「あいます［じこに～］」 (あいます［事故に～］) means \"encounter [an accident]\"."
        },
        {
            "question": "prepare",
            "options": [
                "レバー",
                "だいがくせい",
                "よういします",
                "コース"
            ],
            "correctIndex": 2,
            "explanation": "「よういします」 (用意します) means \"prepare\"."
        },
        {
            "question": "go well",
            "options": [
                "あいます［じこに～］",
                "うまく いきます",
                "レバー",
                "［－えん］さつ"
            ],
            "correctIndex": 1,
            "explanation": "「うまく いきます」 means \"go well\"."
        },
        {
            "question": "gift, present (～を します : give a present)",
            "options": [
                "セットします",
                "しらせます",
                "キャンプ",
                "おくりもの"
            ],
            "correctIndex": 3,
            "explanation": "「おくりもの」 (贈り物) means \"gift, present (～を します : give a present)\"."
        },
        {
            "question": "wrong (telephone) number",
            "options": [
                "１１９ばん",
                "あやまります",
                "ねむります",
                "まちがいでんわ"
            ],
            "correctIndex": 3,
            "explanation": "「まちがいでんわ」 (間違い電話) means \"wrong (telephone) number\"."
        },
        {
            "question": "person in charge",
            "options": [
                "うめ",
                "ちゅうし",
                "かかり",
                "なります"
            ],
            "correctIndex": 2,
            "explanation": "「かかり」 (係) means \"person in charge\"."
        },
        {
            "question": "lever",
            "options": [
                "なります",
                "しらせます",
                "セットします",
                "レバー"
            ],
            "correctIndex": 3,
            "explanation": "「レバー」 means \"lever\"."
        },
        {
            "question": "[－ yen] note, bill",
            "options": [
                "スタート",
                "めが さめます",
                "１１９ばん",
                "［－えん］さつ"
            ],
            "correctIndex": 3,
            "explanation": "「［－えん］さつ」 (［－円］札) means \"[－ yen] note, bill\"."
        },
        {
            "question": "regularly, properly",
            "options": [
                "りょうしゅうしょ",
                "てん",
                "ちゃんと",
                "うまく いきます"
            ],
            "correctIndex": 2,
            "explanation": "「ちゃんと」 means \"regularly, properly\"."
        },
        {
            "question": "sleep",
            "options": [
                "ちゃんと",
                "しんじます",
                "レバー",
                "ねむります"
            ],
            "correctIndex": 3,
            "explanation": "「ねむります」 (眠ります) means \"sleep\"."
        }
    ],
    "Lesson 46": [
        {
            "question": "hand over",
            "options": [
                "わたします",
                "どちらさまでしょうか。",
                "でます［バスが～］",
                "たったいま"
            ],
            "correctIndex": 0,
            "explanation": "「わたします」 (渡します) means \"hand over\"."
        },
        {
            "question": "come back",
            "options": [
                "むかいます",
                "たとえば",
                "かえって きます",
                "ちゅうしゃ"
            ],
            "correctIndex": 2,
            "explanation": "「かえって きます」 (帰って 来ます) means \"come back\"."
        },
        {
            "question": "[a bus] leave, depart",
            "options": [
                "たとえば",
                "でます［バスが～］",
                "とどきます［にもつが～］",
                "パンフレット"
            ],
            "correctIndex": 1,
            "explanation": "「でます［バスが～］」 (出ます［バスが～］) means \"[a bus] leave, depart\"."
        },
        {
            "question": "[parcels] be delivered",
            "options": [
                "もうしわけありません。",
                "でます［ほんが～］",
                "ベル",
                "とどきます［にもつが～］"
            ],
            "correctIndex": 3,
            "explanation": "「とどきます［にもつが～］」 (届きます［荷物が～］) means \"[parcels] be delivered\"."
        },
        {
            "question": "enter [a university]",
            "options": [
                "にゅうがくします［だいがくに～］",
                "こちら",
                "ちょうど",
                "わたします"
            ],
            "correctIndex": 0,
            "explanation": "「にゅうがくします［だいがくに～］」 (入学します［大学に～］) means \"enter [a university]\"."
        },
        {
            "question": "graduate [from a university]",
            "options": [
                "たとえば",
                "もうしわけありません。",
                "ガスサービスセンター",
                "そつぎょうします［だいがくを～］"
            ],
            "correctIndex": 3,
            "explanation": "「そつぎょうします［だいがくを～］」 (卒業します［大学を～］) means \"graduate [from a university]\"."
        },
        {
            "question": "bake, grill, roast",
            "options": [
                "ゆか",
                "やきます",
                "キーワード",
                "そつぎょうします［だいがくを～］"
            ],
            "correctIndex": 1,
            "explanation": "「やきます」 (焼きます) means \"bake, grill, roast\"."
        },
        {
            "question": "[bread] be baked",
            "options": [
                "やけます［パンが～］",
                "わたします",
                "なります",
                "パンフレット"
            ],
            "correctIndex": 0,
            "explanation": "「やけます［パンが～］」 (焼けます［パンが～］) means \"[bread] be baked\"."
        },
        {
            "question": "[meat] be roasted, be grilled",
            "options": [
                "でます［バスが～］",
                "やけます［にくが～］",
                "じゅんばんに",
                "ゆか"
            ],
            "correctIndex": 1,
            "explanation": "「やけます［にくが～］」 (焼けます［肉が～］) means \"[meat] be roasted, be grilled\"."
        },
        {
            "question": "absence",
            "options": [
                "こちら",
                "るす",
                "わたします",
                "やきます"
            ],
            "correctIndex": 1,
            "explanation": "「るす」 (留守) means \"absence\"."
        },
        {
            "question": "(package delivered by) home delivery service",
            "options": [
                "たくはいびん",
                "なります",
                "ほうこ",
                "にゅうがくします［だいがくに～］"
            ],
            "correctIndex": 0,
            "explanation": "「たくはいびん」 (宅配便) means \"(package delivered by) home delivery service\"."
        },
        {
            "question": "cause",
            "options": [
                "やきます",
                "げんいん",
                "そつぎょうします［だいがくを～］",
                "ぐあい"
            ],
            "correctIndex": 1,
            "explanation": "「げんいん」 (原因) means \"cause\"."
        },
        {
            "question": "my side",
            "options": [
                "ころびます",
                "やけます［にくが～］",
                "かえって きます",
                "こちら"
            ],
            "correctIndex": 3,
            "explanation": "「こちら」 means \"my side\"."
        },
        {
            "question": "where ～ is/are, by the ～",
            "options": [
                "るす",
                "ころびます",
                "パンフレット",
                "～の ところ"
            ],
            "correctIndex": 3,
            "explanation": "「～の ところ」 (～の 所) means \"where ～ is/are, by the ～\"."
        },
        {
            "question": "half a year",
            "options": [
                "たとえば",
                "かえって きます",
                "はんとし",
                "しょくよく"
            ],
            "correctIndex": 2,
            "explanation": "「はんとし」 (半年) means \"half a year\"."
        },
        {
            "question": "just, exactly",
            "options": [
                "はんとし",
                "いちぶぶん",
                "ぐあい",
                "ちょうど"
            ],
            "correctIndex": 3,
            "explanation": "「ちょうど」 means \"just, exactly\"."
        },
        {
            "question": "just now (used with the past tense; indicates completion)",
            "options": [
                "びょう",
                "にゅうがくします［だいがくに～］",
                "ガスサービスセンター",
                "たったいま"
            ],
            "correctIndex": 3,
            "explanation": "「たったいま」 (たった今) means \"just now (used with the past tense; indicates completion)\"."
        },
        {
            "question": "Have you got a moment?",
            "options": [
                "たとえば",
                "でます［バスが～］",
                "いま いいですか。",
                "やけます［パンが～］"
            ],
            "correctIndex": 2,
            "explanation": "「いま いいですか。」 (今 いいですか。) means \"Have you got a moment?\"."
        },
        {
            "question": "gas service centre",
            "options": [
                "ガスサービスセンター",
                "ちょうど",
                "たとえば",
                "いま いいですか。"
            ],
            "correctIndex": 0,
            "explanation": "「ガスサービスセンター」 means \"gas service centre\"."
        },
        {
            "question": "gas range, gas cooker",
            "options": [
                "いま いいですか。",
                "ガスレンジ",
                "わたします",
                "できごと"
            ],
            "correctIndex": 1,
            "explanation": "「ガスレンジ」 means \"gas range, gas cooker\"."
        },
        {
            "question": "condition",
            "options": [
                "こちら",
                "てにはいります［じょうほうが～］",
                "ちしき",
                "ぐあい"
            ],
            "correctIndex": 3,
            "explanation": "「ぐあい」 (具合) means \"condition\"."
        },
        {
            "question": "I'm sorry.",
            "options": [
                "ゆか",
                "もうしわけありません。",
                "できごと",
                "たとえば"
            ],
            "correctIndex": 1,
            "explanation": "「もうしわけありません。」 (申し訳ありません。) means \"I'm sorry.\"."
        },
        {
            "question": "Who is this, please?",
            "options": [
                "ちょうど",
                "～の ところ",
                "びょう",
                "どちらさまでしょうか。"
            ],
            "correctIndex": 3,
            "explanation": "「どちらさまでしょうか。」 (どちら様でしょうか。) means \"Who is this, please?\"."
        },
        {
            "question": "Sorry to have kept you waiting.",
            "options": [
                "なります",
                "そつぎょうします［だいがくを～］",
                "おまたせしました。",
                "ちしき"
            ],
            "correctIndex": 2,
            "explanation": "「おまたせしました。」 (お待たせしました。) means \"Sorry to have kept you waiting.\"."
        },
        {
            "question": "head for",
            "options": [
                "むかいます",
                "ステレオ",
                "かえって きます",
                "ちょうど"
            ],
            "correctIndex": 0,
            "explanation": "「むかいます」 (向かいます) means \"head for\"."
        },
        {
            "question": "be lucky",
            "options": [
                "そつぎょうします［だいがくを～］",
                "ちょうど",
                "ついて います",
                "システム"
            ],
            "correctIndex": 2,
            "explanation": "「ついて います」 means \"be lucky\"."
        },
        {
            "question": "floor",
            "options": [
                "やきます",
                "ゆか",
                "キーワード",
                "とどきます［にもつが～］"
            ],
            "correctIndex": 1,
            "explanation": "「ゆか」 (床) means \"floor\"."
        },
        {
            "question": "fall down, fall over",
            "options": [
                "たくはいびん",
                "ステレオ",
                "ころびます",
                "にゅうがくします［だいがくに～］"
            ],
            "correctIndex": 2,
            "explanation": "「ころびます」 (転びます) means \"fall down, fall over\"."
        },
        {
            "question": "ring",
            "options": [
                "ステレオ",
                "ぐあい",
                "ベル",
                "るす"
            ],
            "correctIndex": 2,
            "explanation": "「ベル」 means \"ring\"."
        },
        {
            "question": "ring",
            "options": [
                "システム",
                "ゆか",
                "なります",
                "やけます［パンが～］"
            ],
            "correctIndex": 2,
            "explanation": "「なります」 (鳴ります) means \"ring\"."
        },
        {
            "question": "in a hurry",
            "options": [
                "パンフレット",
                "かえって きます",
                "キーワード",
                "あわてて"
            ],
            "correctIndex": 3,
            "explanation": "「あわてて」 (慌てて) means \"in a hurry\"."
        },
        {
            "question": "in order",
            "options": [
                "じゅんばんに",
                "キーワード",
                "ちょうど",
                "でます［ほんが～］"
            ],
            "correctIndex": 0,
            "explanation": "「じゅんばんに」 (順番に) means \"in order\"."
        },
        {
            "question": "incident",
            "options": [
                "やけます［にくが～］",
                "できごと",
                "かえって きます",
                "いちぶぶん"
            ],
            "correctIndex": 1,
            "explanation": "「できごと」 (出来事) means \"incident\"."
        },
        {
            "question": "injection",
            "options": [
                "でます［バスが～］",
                "ちゅうしゃ",
                "てにはいります［じょうほうが～］",
                "ついて います"
            ],
            "correctIndex": 1,
            "explanation": "「ちゅうしゃ」 (注射) means \"injection\"."
        },
        {
            "question": "appetite",
            "options": [
                "しょくよく",
                "おまたせしました。",
                "いま いいですか。",
                "とどきます［にもつが～］"
            ],
            "correctIndex": 0,
            "explanation": "「しょくよく」 (食欲) means \"appetite\"."
        },
        {
            "question": "pamphlet",
            "options": [
                "どちらさまでしょうか。",
                "パンフレット",
                "でます［バスが～］",
                "びょう"
            ],
            "correctIndex": 1,
            "explanation": "「パンフレット」 means \"pamphlet\"."
        },
        {
            "question": "stereo",
            "options": [
                "てにはいります［じょうほうが～］",
                "システム",
                "いま いいですか。",
                "ステレオ"
            ],
            "correctIndex": 3,
            "explanation": "「ステレオ」 means \"stereo\"."
        },
        {
            "question": "May I bother you now?",
            "options": [
                "どちらさまでしょうか。",
                "しょくよく",
                "～の ところ",
                "いま いいでしょうか。"
            ],
            "correctIndex": 3,
            "explanation": "「いま いいでしょうか。」 (今 いいでしょうか。) means \"May I bother you now?\"."
        },
        {
            "question": "knowledge",
            "options": [
                "たとえば",
                "しょくよく",
                "ちしき",
                "ガスレンジ"
            ],
            "correctIndex": 2,
            "explanation": "「ちしき」 (知識) means \"knowledge\"."
        },
        {
            "question": "treasury",
            "options": [
                "ほうこ",
                "でます［バスが～］",
                "こちら",
                "いちぶぶん"
            ],
            "correctIndex": 0,
            "explanation": "「ほうこ」 (宝庫) means \"treasury\"."
        },
        {
            "question": "[information] come in, reach",
            "options": [
                "あわてて",
                "でます［ほんが～］",
                "てにはいります［じょうほうが～］",
                "にゅうがくします［だいがくに～］"
            ],
            "correctIndex": 2,
            "explanation": "「てにはいります［じょうほうが～］」 (手に入ります［情報が～］) means \"[information] come in, reach\"."
        },
        {
            "question": "system",
            "options": [
                "システム",
                "しょくよく",
                "むかいます",
                "ちゅうしゃ"
            ],
            "correctIndex": 0,
            "explanation": "「システム」 means \"system\"."
        },
        {
            "question": "for example",
            "options": [
                "ちゅうしゃ",
                "たとえば",
                "かえって きます",
                "ステレオ"
            ],
            "correctIndex": 1,
            "explanation": "「たとえば」 (例えば) means \"for example\"."
        },
        {
            "question": "key word",
            "options": [
                "ゆか",
                "たとえば",
                "キーワード",
                "はんとし"
            ],
            "correctIndex": 2,
            "explanation": "「キーワード」 means \"key word\"."
        },
        {
            "question": "one part",
            "options": [
                "しょくよく",
                "できごと",
                "にゅうりょくします",
                "いちぶぶん"
            ],
            "correctIndex": 3,
            "explanation": "「いちぶぶん」 (一部分) means \"one part\"."
        },
        {
            "question": "input",
            "options": [
                "いま いいでしょうか。",
                "なります",
                "いま いいですか。",
                "にゅうりょくします"
            ],
            "correctIndex": 3,
            "explanation": "「にゅうりょくします」 (入力します) means \"input\"."
        },
        {
            "question": "second",
            "options": [
                "キーワード",
                "びょう",
                "ちしき",
                "できごと"
            ],
            "correctIndex": 1,
            "explanation": "「びょう」 (秒) means \"second\"."
        },
        {
            "question": "[a book] be published",
            "options": [
                "わたします",
                "あわてて",
                "でます［ほんが～］",
                "こちら"
            ],
            "correctIndex": 2,
            "explanation": "「でます［ほんが～］」 (出ます［本が～］) means \"[a book] be published\"."
        }
    ],
    "Lesson 47": [
        {
            "question": "[wind] blow",
            "options": [
                "だんせい",
                "グアム",
                "はかせ",
                "ふきます［かぜが～］"
            ],
            "correctIndex": 3,
            "explanation": "「ふきます［かぜが～］」 (吹きます［風が～］) means \"[wind] blow\"."
        },
        {
            "question": "[rubbish] burn",
            "options": [
                "のう",
                "さんせい",
                "パトカー",
                "もえます［ごみが～］"
            ],
            "correctIndex": 3,
            "explanation": "「もえます［ごみが～］」 (燃えます［ごみが～］) means \"[rubbish] burn\"."
        },
        {
            "question": "pass away (euphemistic expression for しにます)",
            "options": [
                "こわい",
                "へいきんじゅみょう",
                "じんこう",
                "なくなります"
            ],
            "correctIndex": 3,
            "explanation": "「なくなります」 (亡くなります) means \"pass away (euphemistic expression for しにます)\"."
        },
        {
            "question": "[people] gather",
            "options": [
                "じょせい",
                "します［あじが～］",
                "あつまります［ひとが～］",
                "しらべ"
            ],
            "correctIndex": 2,
            "explanation": "「あつまります［ひとが～］」 (集まります［人が～］) means \"[people] gather\"."
        },
        {
            "question": "[people] part, separate",
            "options": [
                "だんせい",
                "こいびと",
                "けしょうひん",
                "わかれます［ひとが～］"
            ],
            "correctIndex": 3,
            "explanation": "「わかれます［ひとが～］」 (別れます［人が～］) means \"[people] part, separate\"."
        },
        {
            "question": "[sound/voice] be heard",
            "options": [
                "します［おと／こえが～］",
                "あいて",
                "ホルモン",
                "せわを します"
            ],
            "correctIndex": 0,
            "explanation": "「します［おと／こえが～］」 (します［音／声が～］) means \"[sound/voice] be heard\"."
        },
        {
            "question": "taste",
            "options": [
                "ホルモン",
                "します［あじが～］",
                "はかせ",
                "じっけん"
            ],
            "correctIndex": 1,
            "explanation": "「します［あじが～］」 (します［味が～］) means \"taste\"."
        },
        {
            "question": "smell",
            "options": [
                "しりあいます",
                "こわい",
                "ひどい",
                "します［においが～］"
            ],
            "correctIndex": 3,
            "explanation": "「します［においが～］」 means \"smell\"."
        },
        {
            "question": "strict, hard",
            "options": [
                "だいとうりょう",
                "きびしい",
                "バリ［とう］",
                "～に よると"
            ],
            "correctIndex": 1,
            "explanation": "「きびしい」 (厳しい) means \"strict, hard\"."
        },
        {
            "question": "terrible, severe",
            "options": [
                "イラン",
                "くらべます［だんせいと～］",
                "じんこう",
                "ひどい"
            ],
            "correctIndex": 3,
            "explanation": "「ひどい」 means \"terrible, severe\"."
        },
        {
            "question": "frightening, horrible",
            "options": [
                "くらべます［だんせいと～］",
                "きゅうきゅうしゃ",
                "します［においが～］",
                "こわい"
            ],
            "correctIndex": 3,
            "explanation": "「こわい」 (怖い) means \"frightening, horrible\"."
        },
        {
            "question": "experiment",
            "options": [
                "じっけん",
                "じょせい",
                "ながいき",
                "じんこう"
            ],
            "correctIndex": 0,
            "explanation": "「じっけん」 (実験) means \"experiment\"."
        },
        {
            "question": "data",
            "options": [
                "はんたい",
                "データ",
                "わかれます［ひとが～］",
                "けしょうひん"
            ],
            "correctIndex": 1,
            "explanation": "「データ」 means \"data\"."
        },
        {
            "question": "population",
            "options": [
                "しらべ",
                "じんこう",
                "もえます［ごみが～］",
                "てんきよほう"
            ],
            "correctIndex": 1,
            "explanation": "「じんこう」 (人口) means \"population\"."
        },
        {
            "question": "smell",
            "options": [
                "どうも",
                "します［あじが～］",
                "きびしい",
                "におい"
            ],
            "correctIndex": 3,
            "explanation": "「におい」 means \"smell\"."
        },
        {
            "question": "science",
            "options": [
                "こいびと",
                "かがく",
                "こわい",
                "こんやくします"
            ],
            "correctIndex": 1,
            "explanation": "「かがく」 (科学) means \"science\"."
        },
        {
            "question": "medicine, medical science",
            "options": [
                "りゆう",
                "いがく",
                "くらべます［だんせいと～］",
                "パトカー"
            ],
            "correctIndex": 1,
            "explanation": "「いがく」 (医学) means \"medicine, medical science\"."
        },
        {
            "question": "literature",
            "options": [
                "こわい",
                "だんせい",
                "ぶんがく",
                "こんやくします"
            ],
            "correctIndex": 2,
            "explanation": "「ぶんがく」 (文学) means \"literature\"."
        },
        {
            "question": "police car",
            "options": [
                "ふきます［かぜが～］",
                "パトカー",
                "ぶんがく",
                "けしょうひん"
            ],
            "correctIndex": 1,
            "explanation": "「パトカー」 means \"police car\"."
        },
        {
            "question": "ambulance",
            "options": [
                "きゅうきゅうしゃ",
                "しりあいます",
                "りゆう",
                "どうも"
            ],
            "correctIndex": 0,
            "explanation": "「きゅうきゅうしゃ」 (救急車) means \"ambulance\"."
        },
        {
            "question": "approval, agreement",
            "options": [
                "こわい",
                "さんせい",
                "てんきよほう",
                "くらべます［だんせいと～］"
            ],
            "correctIndex": 1,
            "explanation": "「さんせい」 (賛成) means \"approval, agreement\"."
        },
        {
            "question": "objection, opposition",
            "options": [
                "パトカー",
                "はんたい",
                "だんせい",
                "あつまります［ひとが～］"
            ],
            "correctIndex": 1,
            "explanation": "「はんたい」 (反対) means \"objection, opposition\"."
        },
        {
            "question": "president",
            "options": [
                "さんせい",
                "だいとうりょう",
                "しりあいます",
                "かんけい"
            ],
            "correctIndex": 1,
            "explanation": "「だいとうりょう」 (大統領) means \"president\"."
        },
        {
            "question": "according to ～ (indicates the source of information)",
            "options": [
                "きゅうきゅうしゃ",
                "あつまります［ひとが～］",
                "におい",
                "～に よると"
            ],
            "correctIndex": 3,
            "explanation": "「～に よると」 means \"according to ～ (indicates the source of information)\"."
        },
        {
            "question": "get engaged",
            "options": [
                "じんこう",
                "カリフォルニア",
                "しらべ",
                "こんやくします"
            ],
            "correctIndex": 3,
            "explanation": "「こんやくします」 (婚約します) means \"get engaged\"."
        },
        {
            "question": "it seems that (used when making a tentative judgement)",
            "options": [
                "きびしい",
                "します［においが～］",
                "どうも",
                "さんせい"
            ],
            "correctIndex": 2,
            "explanation": "「どうも」 means \"it seems that (used when making a tentative judgement)\"."
        },
        {
            "question": "sweetheart, boyfriend, girlfriend",
            "options": [
                "わかれます［ひとが～］",
                "じっけん",
                "こいびと",
                "りゆう"
            ],
            "correctIndex": 2,
            "explanation": "「こいびと」 (恋人) means \"sweetheart, boyfriend, girlfriend\"."
        },
        {
            "question": "the other person",
            "options": [
                "～に よると",
                "わかれます［ひとが～］",
                "あいて",
                "ぶんがく"
            ],
            "correctIndex": 2,
            "explanation": "「あいて」 (相手) means \"the other person\"."
        },
        {
            "question": "get acquainted",
            "options": [
                "のう",
                "しりあいます",
                "かんけい",
                "ひどい"
            ],
            "correctIndex": 1,
            "explanation": "「しりあいます」 (知り合います) means \"get acquainted\"."
        },
        {
            "question": "makeup (～を します : put on makeup)",
            "options": [
                "はっぴょう",
                "はんたい",
                "どうも",
                "けしょう"
            ],
            "correctIndex": 3,
            "explanation": "「けしょう」 (化粧) means \"makeup (～を します : put on makeup)\"."
        },
        {
            "question": "take care of",
            "options": [
                "はかせ",
                "せわを します",
                "イラン",
                "どうも"
            ],
            "correctIndex": 1,
            "explanation": "「せわを します」 (世話を します) means \"take care of\"."
        },
        {
            "question": "female, woman",
            "options": [
                "せわを します",
                "じょせい",
                "イラン",
                "します［においが～］"
            ],
            "correctIndex": 1,
            "explanation": "「じょせい」 (女性) means \"female, woman\"."
        },
        {
            "question": "male, man",
            "options": [
                "きびしい",
                "しらべ",
                "だんせい",
                "けしょう"
            ],
            "correctIndex": 2,
            "explanation": "「だんせい」 (男性) means \"male, man\"."
        },
        {
            "question": "long life (～します : live long)",
            "options": [
                "ながいき",
                "せわを します",
                "じんこう",
                "におい"
            ],
            "correctIndex": 0,
            "explanation": "「ながいき」 (長生き) means \"long life (～します : live long)\"."
        },
        {
            "question": "reason",
            "options": [
                "けしょう",
                "りゆう",
                "けしょうひん",
                "はかせ"
            ],
            "correctIndex": 1,
            "explanation": "「りゆう」 (理由) means \"reason\"."
        },
        {
            "question": "relationship",
            "options": [
                "カリフォルニア",
                "かんけい",
                "てんきよほう",
                "バリ［とう］"
            ],
            "correctIndex": 1,
            "explanation": "「かんけい」 (関係) means \"relationship\"."
        },
        {
            "question": "put up [an umbrella]",
            "options": [
                "あいて",
                "さします［かさを～］",
                "せわを します",
                "グアム"
            ],
            "correctIndex": 1,
            "explanation": "「さします［かさを～］」 (さします［傘を～］) means \"put up [an umbrella]\"."
        },
        {
            "question": "weather forecast",
            "options": [
                "もえます［ごみが～］",
                "パトカー",
                "てんきよほう",
                "はっぴょう"
            ],
            "correctIndex": 2,
            "explanation": "「てんきよほう」 (天気予報) means \"weather forecast\"."
        },
        {
            "question": "announcement, presentation",
            "options": [
                "バリ［とう］",
                "はっぴょう",
                "パトカー",
                "しりあいます"
            ],
            "correctIndex": 1,
            "explanation": "「はっぴょう」 (発表) means \"announcement, presentation\"."
        },
        {
            "question": "Bali [island] (in Indonesia)",
            "options": [
                "くらべます［だんせいと～］",
                "いがく",
                "じっけん",
                "バリ［とう］"
            ],
            "correctIndex": 3,
            "explanation": "「バリ［とう］」 (バリ［島］) means \"Bali [island] (in Indonesia)\"."
        },
        {
            "question": "Iran",
            "options": [
                "イラン",
                "ひどい",
                "ふきます［かぜが～］",
                "カリフォルニア"
            ],
            "correctIndex": 0,
            "explanation": "「イラン」 means \"Iran\"."
        },
        {
            "question": "California (in U.S.A.)",
            "options": [
                "じょせい",
                "さんせい",
                "します［おと／こえが～］",
                "カリフォルニア"
            ],
            "correctIndex": 3,
            "explanation": "「カリフォルニア」 means \"California (in U.S.A.)\"."
        },
        {
            "question": "Guam",
            "options": [
                "グアム",
                "パトカー",
                "ながいき",
                "けしょう"
            ],
            "correctIndex": 0,
            "explanation": "「グアム」 means \"Guam\"."
        },
        {
            "question": "average life span",
            "options": [
                "かがく",
                "なくなります",
                "へいきんじゅみょう",
                "のう"
            ],
            "correctIndex": 2,
            "explanation": "「へいきんじゅみょう」 (平均寿命) means \"average life span\"."
        },
        {
            "question": "compare [with men]",
            "options": [
                "ながいき",
                "します［あじが～］",
                "だんせい",
                "くらべます［だんせいと～］"
            ],
            "correctIndex": 3,
            "explanation": "「くらべます［だんせいと～］」 (比べます［男性と～］) means \"compare [with men]\"."
        },
        {
            "question": "doctor",
            "options": [
                "はかせ",
                "バリ［とう］",
                "～に よると",
                "さんせい"
            ],
            "correctIndex": 0,
            "explanation": "「はかせ」 (博士) means \"doctor\"."
        },
        {
            "question": "brain",
            "options": [
                "はかせ",
                "あつまります［ひとが～］",
                "のう",
                "しりあいます"
            ],
            "correctIndex": 2,
            "explanation": "「のう」 (脳) means \"brain\"."
        },
        {
            "question": "hormone",
            "options": [
                "あつまります［ひとが～］",
                "きゅうきゅうしゃ",
                "けしょう",
                "ホルモン"
            ],
            "correctIndex": 3,
            "explanation": "「ホルモン」 means \"hormone\"."
        },
        {
            "question": "cosmetics",
            "options": [
                "きゅうきゅうしゃ",
                "こわい",
                "けしょうひん",
                "なくなります"
            ],
            "correctIndex": 2,
            "explanation": "「けしょうひん」 (化粧品) means \"cosmetics\"."
        },
        {
            "question": "survey, research",
            "options": [
                "はんたい",
                "もえます［ごみが～］",
                "パトカー",
                "しらべ"
            ],
            "correctIndex": 3,
            "explanation": "「しらべ」 (調べ) means \"survey, research\"."
        }
    ],
    "Lesson 48": [
        {
            "question": "put down, lower, unload",
            "options": [
                "えいぎょう",
                "おいそがしいですか。",
                "その つぎ",
                "おろします"
            ],
            "correctIndex": 3,
            "explanation": "「おろします」 (降ろします、下ろします) means \"put down, lower, unload\"."
        },
        {
            "question": "deliver",
            "options": [
                "とどけます",
                "スケジュール",
                "きょうそうします",
                "えいぎょう"
            ],
            "correctIndex": 0,
            "explanation": "「とどけます」 (届ける) means \"deliver\"."
        },
        {
            "question": "take care of",
            "options": [
                "とらえます",
                "もともと",
                "げい",
                "せわを します"
            ],
            "correctIndex": 3,
            "explanation": "「せわを します」 (世話を します) means \"take care of\"."
        },
        {
            "question": "record",
            "options": [
                "えいぎょう",
                "ろくおんします",
                "きびしい",
                "スピード"
            ],
            "correctIndex": 1,
            "explanation": "「ろくおんします」 (録音します) means \"record\"."
        },
        {
            "question": "unwilling, reluctant",
            "options": [
                "えいぎょう",
                "サーカス",
                "いや［な］",
                "ふつうの"
            ],
            "correctIndex": 2,
            "explanation": "「いや［な］」 (嫌［な］) means \"unwilling, reluctant\"."
        },
        {
            "question": "cram school",
            "options": [
                "じゅく",
                "しょうがくせい",
                "きびしい",
                "せいと"
            ],
            "correctIndex": 0,
            "explanation": "「じゅく」 (塾) means \"cram school\"."
        },
        {
            "question": "pupil",
            "options": [
                "スケジュール",
                "－せいき",
                "せいと",
                "かわりを します"
            ],
            "correctIndex": 2,
            "explanation": "「せいと」 (生徒) means \"pupil\"."
        },
        {
            "question": "file",
            "options": [
                "もともと",
                "おや",
                "ファイル",
                "ひさしぶり"
            ],
            "correctIndex": 2,
            "explanation": "「ファイル」 means \"file\"."
        },
        {
            "question": "freely",
            "options": [
                "～かん",
                "じゆうに",
                "ファイル",
                "きびしい"
            ],
            "correctIndex": 1,
            "explanation": "「じゆうに」 (自由に) means \"freely\"."
        },
        {
            "question": "for ～ (referring to duration)",
            "options": [
                "しょうがくせい",
                "～かん",
                "うつくしい",
                "－パーセント"
            ],
            "correctIndex": 1,
            "explanation": "「～かん」 (～間) means \"for ～ (referring to duration)\"."
        },
        {
            "question": "That's good.",
            "options": [
                "かまいません。",
                "いい ことですね。",
                "その つぎ",
                "にゅうかん"
            ],
            "correctIndex": 1,
            "explanation": "「いい ことですね。」 means \"That's good.\"."
        },
        {
            "question": "Are you busy? (used when talking to someone senior or older)",
            "options": [
                "おいそがしいですか。",
                "えいぎょう",
                "いや［な］",
                "ろくおんします"
            ],
            "correctIndex": 0,
            "explanation": "「おいそがしいですか。」 (お忙しいですか。) means \"Are you busy? (used when talking to someone senior or older)\"."
        },
        {
            "question": "business, sales",
            "options": [
                "ふつうの",
                "えいぎょう",
                "スケジュール",
                "サーカス"
            ],
            "correctIndex": 1,
            "explanation": "「えいぎょう」 (営業) means \"business, sales\"."
        },
        {
            "question": "by that time",
            "options": [
                "ふつうの",
                "えいぎょう",
                "それまでに",
                "きょうそうします"
            ],
            "correctIndex": 2,
            "explanation": "「それまでに」 means \"by that time\"."
        },
        {
            "question": "It's all right./I don't mind.",
            "options": [
                "さいにゅうこくビザ",
                "ふつうの",
                "げい",
                "かまいません。"
            ],
            "correctIndex": 3,
            "explanation": "「かまいません。」 means \"It's all right./I don't mind.\"."
        },
        {
            "question": "enjoy oneself",
            "options": [
                "ろくおんします",
                "じゅく",
                "こころ",
                "たのしみます"
            ],
            "correctIndex": 3,
            "explanation": "「たのしみます」 (楽しみます) means \"enjoy oneself\"."
        },
        {
            "question": "parent",
            "options": [
                "げい",
                "おや",
                "おいそがしいですか。",
                "それまでに"
            ],
            "correctIndex": 1,
            "explanation": "「おや」 (親) means \"parent\"."
        },
        {
            "question": "pupil, elementary schoolchild",
            "options": [
                "こころ",
                "おや",
                "しょうがくせい",
                "スケジュール"
            ],
            "correctIndex": 2,
            "explanation": "「しょうがくせい」 (小学生) means \"pupil, elementary schoolchild\"."
        },
        {
            "question": "－ percent",
            "options": [
                "－パーセント",
                "かわりを します",
                "いや［な］",
                "とらえます"
            ],
            "correctIndex": 0,
            "explanation": "「－パーセント」 means \"－ percent\"."
        },
        {
            "question": "next",
            "options": [
                "それまでに",
                "その つぎ",
                "スケジュール",
                "きょうそうします"
            ],
            "correctIndex": 1,
            "explanation": "「その つぎ」 (その 次) means \"next\"."
        },
        {
            "question": "calligraphy",
            "options": [
                "ひさしぶり",
                "－せいき",
                "スケジュール",
                "しゅうじ"
            ],
            "correctIndex": 3,
            "explanation": "「しゅうじ」 (習字) means \"calligraphy\"."
        },
        {
            "question": "normal, usual",
            "options": [
                "とらえます",
                "ふつうの",
                "げい",
                "きびしい"
            ],
            "correctIndex": 1,
            "explanation": "「ふつうの」 (普通の) means \"normal, usual\"."
        },
        {
            "question": "strict, hard",
            "options": [
                "きびしい",
                "その つぎ",
                "スケジュール",
                "すがた"
            ],
            "correctIndex": 0,
            "explanation": "「きびしい」 (厳しい) means \"strict, hard\"."
        },
        {
            "question": "schedule",
            "options": [
                "おや",
                "ふつうの",
                "ろくおんします",
                "スケジュール"
            ],
            "correctIndex": 3,
            "explanation": "「スケジュール」 means \"schedule\"."
        },
        {
            "question": "person (referring to one's relatives or subordinates)",
            "options": [
                "ひさしぶり",
                "とどけます",
                "ろくおんします",
                "もの"
            ],
            "correctIndex": 3,
            "explanation": "「もの」 (者) means \"person (referring to one's relatives or subordinates)\"."
        },
        {
            "question": "Immigration Bureau",
            "options": [
                "いい ことですね。",
                "それまでに",
                "にゅうかん",
                "きびしい"
            ],
            "correctIndex": 2,
            "explanation": "「にゅうかん」 (入管) means \"Immigration Bureau\"."
        },
        {
            "question": "re-entry visa",
            "options": [
                "おや",
                "じゆうに",
                "さいにゅうこくビザ",
                "ひさしぶり"
            ],
            "correctIndex": 2,
            "explanation": "「さいにゅうこくビザ」 (再入国ビザ) means \"re-entry visa\"."
        },
        {
            "question": "after a long time",
            "options": [
                "とらえます",
                "スケジュール",
                "ひさしぶり",
                "その つぎ"
            ],
            "correctIndex": 2,
            "explanation": "「ひさしぶり」 (久しぶり) means \"after a long time\"."
        },
        {
            "question": "originally",
            "options": [
                "ふつうの",
                "ひさしぶり",
                "もともと",
                "スケジュール"
            ],
            "correctIndex": 2,
            "explanation": "「もともと」 means \"originally\"."
        },
        {
            "question": "-th century",
            "options": [
                "スケジュール",
                "おや",
                "－せいき",
                "ふつうの"
            ],
            "correctIndex": 2,
            "explanation": "「－せいき」 (－世紀) means \"-th century\"."
        },
        {
            "question": "be a substitute, be a replacement",
            "options": [
                "すがた",
                "おいそがしいですか。",
                "せわを します",
                "かわりを します"
            ],
            "correctIndex": 3,
            "explanation": "「かわりを します」 (代わりを します) means \"be a substitute, be a replacement\"."
        },
        {
            "question": "speed",
            "options": [
                "にゅうかん",
                "ファイル",
                "スピード",
                "たのしみます"
            ],
            "correctIndex": 2,
            "explanation": "「スピード」 means \"speed\"."
        },
        {
            "question": "race",
            "options": [
                "ファイル",
                "きょうそうします",
                "せいと",
                "～に よって"
            ],
            "correctIndex": 1,
            "explanation": "「きょうそうします」 (競走します) means \"race\"."
        },
        {
            "question": "circus",
            "options": [
                "きょうそうします",
                "いや［な］",
                "サーカス",
                "ファイル"
            ],
            "correctIndex": 2,
            "explanation": "「サーカス」 means \"circus\"."
        },
        {
            "question": "performance, trick",
            "options": [
                "きびしい",
                "しゅうじ",
                "げい",
                "おろします"
            ],
            "correctIndex": 2,
            "explanation": "「げい」 (芸) means \"performance, trick\"."
        },
        {
            "question": "beautiful",
            "options": [
                "うつくしい",
                "たのしみます",
                "さいにゅうこくビザ",
                "とどけます"
            ],
            "correctIndex": 0,
            "explanation": "「うつくしい」 (美しい) means \"beautiful\"."
        },
        {
            "question": "figure, appearance",
            "options": [
                "それまでに",
                "いい ことですね。",
                "かまいません。",
                "すがた"
            ],
            "correctIndex": 3,
            "explanation": "「すがた」 (姿) means \"figure, appearance\"."
        },
        {
            "question": "heart, mind",
            "options": [
                "いい ことですね。",
                "さいにゅうこくビザ",
                "こころ",
                "もともと"
            ],
            "correctIndex": 2,
            "explanation": "「こころ」 (心) means \"heart, mind\"."
        },
        {
            "question": "catch",
            "options": [
                "えいぎょう",
                "げい",
                "すがた",
                "とらえます"
            ],
            "correctIndex": 3,
            "explanation": "「とらえます」 means \"catch\"."
        },
        {
            "question": "for ～",
            "options": [
                "～に よって",
                "－パーセント",
                "～かん",
                "しゅうじ"
            ],
            "correctIndex": 0,
            "explanation": "「～に よって」 means \"for ～\"."
        }
    ],
    "Lesson 49": [
        {
            "question": "use",
            "options": [
                "よります［ぎんこうに～］",
                "さくひん",
                "どなたでも",
                "りようします"
            ],
            "correctIndex": 3,
            "explanation": "「りようします」 (利用します) means \"use\"."
        },
        {
            "question": "work [for a company]",
            "options": [
                "～で いらっしゃいます",
                "つとめます［かいしゃに～］",
                "かいじょう",
                "めざします"
            ],
            "correctIndex": 1,
            "explanation": "「つとめます［かいしゃに～］」 (勤めます［会社に～］) means \"work [for a company]\"."
        },
        {
            "question": "sit on [a chair]",
            "options": [
                "はいざら",
                "たまに",
                "では",
                "かけます［いすに～］"
            ],
            "correctIndex": 3,
            "explanation": "「かけます［いすに～］」 (掛けます［いすに～］) means \"sit on [a chair]\"."
        },
        {
            "question": "spend (time), pass (time)",
            "options": [
                "すごします",
                "えんりょなく",
                "おくさま",
                "せかいてきに"
            ],
            "correctIndex": 0,
            "explanation": "「すごします」 (過ごします) means \"spend (time), pass (time)\"."
        },
        {
            "question": "be, go, come (respectful equivalent of います, いきます and きます)",
            "options": [
                "ノーベルぶんがくしょう",
                "こうし",
                "しつれいいたします。",
                "いらっしゃいます"
            ],
            "correctIndex": 3,
            "explanation": "「いらっしゃいます」 means \"be, go, come (respectful equivalent of います, いきます and きます)\"."
        },
        {
            "question": "eat, drink (respectful equivalent of たべます and のみます)",
            "options": [
                "めしあがります",
                "しつれいいたします。",
                "ごぞんじです",
                "こうえんかい"
            ],
            "correctIndex": 0,
            "explanation": "「めしあがります」 (召し上がります) means \"eat, drink (respectful equivalent of たべます and のみます)\"."
        },
        {
            "question": "say, (one's name) is ～ (respectful equivalent of いいます)",
            "options": [
                "どなたでも",
                "とうきょうだいがく",
                "さくひん",
                "おっしゃいます"
            ],
            "correctIndex": 3,
            "explanation": "「おっしゃいます」 means \"say, (one's name) is ～ (respectful equivalent of いいます)\"."
        },
        {
            "question": "do (respectful equivalent of します)",
            "options": [
                "ひまわりしょうがっこう",
                "なさいます",
                "つとめます［かいしゃに～］",
                "マウス"
            ],
            "correctIndex": 1,
            "explanation": "「なさいます」 means \"do (respectful equivalent of します)\"."
        },
        {
            "question": "see, look at (respectful equivalent of みます)",
            "options": [
                "よろしく おつたえ ください。",
                "～で いらっしゃいます",
                "ごらんに なります",
                "さっか"
            ],
            "correctIndex": 2,
            "explanation": "「ごらんに なります」 (ご覧に なります) means \"see, look at (respectful equivalent of みます)\"."
        },
        {
            "question": "know (respectful equivalent of しっています)",
            "options": [
                "めざします",
                "バスてい",
                "ごぞんじです",
                "おくさま"
            ],
            "correctIndex": 2,
            "explanation": "「ごぞんじです」 (ご存じです) means \"know (respectful equivalent of しっています)\"."
        },
        {
            "question": "greeting, address (～を します : greet, give an address)",
            "options": [
                "あいさつ",
                "ヒト",
                "さっきょく",
                "どなたでも"
            ],
            "correctIndex": 0,
            "explanation": "「あいさつ」 means \"greeting, address (～を します : greet, give an address)\"."
        },
        {
            "question": "Japanese-style hotel or inn",
            "options": [
                "あいさつ",
                "ごらんに なります",
                "さくひん",
                "りょかん"
            ],
            "correctIndex": 3,
            "explanation": "「りょかん」 (旅館) means \"Japanese-style hotel or inn\"."
        },
        {
            "question": "bus stop",
            "options": [
                "やすみます",
                "～さま",
                "バスてい",
                "～で いらっしゃいます"
            ],
            "correctIndex": 2,
            "explanation": "「バスてい」 (バス停) means \"bus stop\"."
        },
        {
            "question": "(someone else's) wife (respectful equivalent of おくさん)",
            "options": [
                "おもちです",
                "～で いらっしゃいます",
                "おくさま",
                "かいはつします"
            ],
            "correctIndex": 2,
            "explanation": "「おくさま」 (奥様) means \"(someone else's) wife (respectful equivalent of おくさん)\"."
        },
        {
            "question": "(respectful equivalent of ～さん)",
            "options": [
                "～さま",
                "それでは",
                "せかいてきに",
                "iPSさいぼう"
            ],
            "correctIndex": 0,
            "explanation": "「～さま」 (～様) means \"(respectful equivalent of ～さん)\"."
        },
        {
            "question": "once in a while",
            "options": [
                "おくさま",
                "めしあがります",
                "たまに",
                "めざします"
            ],
            "correctIndex": 2,
            "explanation": "「たまに」 means \"once in a while\"."
        },
        {
            "question": "anybody (respectful equivalent of だれでも)",
            "options": [
                "ノーベルぶんがくしょう",
                "かつどう",
                "どなたでも",
                "さっか"
            ],
            "correctIndex": 2,
            "explanation": "「どなたでも」 means \"anybody (respectful equivalent of だれでも)\"."
        },
        {
            "question": "(one's name) is ～",
            "options": [
                "～と いいます",
                "すすみます",
                "おおえ けんざぶろう",
                "しつれいいたします。"
            ],
            "correctIndex": 0,
            "explanation": "「～と いいます」 means \"(one's name) is ～\"."
        },
        {
            "question": "class － of -th grade",
            "options": [
                "めざします",
                "～と いいます",
                "－ねん－くみ",
                "ぼうえき"
            ],
            "correctIndex": 2,
            "explanation": "「－ねん－くみ」 (－年－組) means \"class － of -th grade\"."
        },
        {
            "question": "run [a fever]",
            "options": [
                "～で いらっしゃいます",
                "えんりょなく",
                "だします［ねつを～］",
                "りょかん"
            ],
            "correctIndex": 2,
            "explanation": "「だします［ねつを～］」 (出します［熱を～］) means \"run [a fever]\"."
        },
        {
            "question": "Give my best regards./Please say hello.",
            "options": [
                "～と いいます",
                "よろしく おつたえ ください。",
                "～で いらっしゃいます",
                "－ねん－くみ"
            ],
            "correctIndex": 1,
            "explanation": "「よろしく おつたえ ください。」 (よろしく お伝え ください。) means \"Give my best regards./Please say hello.\"."
        },
        {
            "question": "Goodbye. (humble equivalent of しつれいします)",
            "options": [
                "しつれいいたします。",
                "ひまわりしょうがっこう",
                "では",
                "かいはつします"
            ],
            "correctIndex": 0,
            "explanation": "「しつれいいたします。」 (失礼いたします。) means \"Goodbye. (humble equivalent of しつれいします)\"."
        },
        {
            "question": "fictitious elementary school",
            "options": [
                "かいはつします",
                "ちょうなん",
                "ひまわりしょうがっこう",
                "せかいてきに"
            ],
            "correctIndex": 2,
            "explanation": "「ひまわりしょうがっこう」 (ひまわり小学校) means \"fictitious elementary school\"."
        },
        {
            "question": "background",
            "options": [
                "けいれき",
                "おおくの ～",
                "えんりょなく",
                "いがくぶ"
            ],
            "correctIndex": 0,
            "explanation": "「けいれき」 (経歴) means \"background\"."
        },
        {
            "question": "the medical department",
            "options": [
                "はいざら",
                "あいさつ",
                "いがくぶ",
                "たまに"
            ],
            "correctIndex": 2,
            "explanation": "「いがくぶ」 (医学部) means \"the medical department\"."
        },
        {
            "question": "aim for",
            "options": [
                "かいはつします",
                "こうし",
                "めざします",
                "iPSさいぼう"
            ],
            "correctIndex": 2,
            "explanation": "「めざします」 (目指します) means \"aim for\"."
        },
        {
            "question": "go on (to graduate school)",
            "options": [
                "やまなかしんや",
                "すすみます",
                "いがくぶ",
                "りょかん"
            ],
            "correctIndex": 1,
            "explanation": "「すすみます」 (進みます) means \"go on (to graduate school)\"."
        },
        {
            "question": "induced pluripotent stem cell",
            "options": [
                "めざします",
                "iPSさいぼう",
                "すごします",
                "けいれき"
            ],
            "correctIndex": 1,
            "explanation": "「iPSさいぼう」 (iPS細胞) means \"induced pluripotent stem cell\"."
        },
        {
            "question": "develop, create",
            "options": [
                "かいはつします",
                "かつどう",
                "とうきょうだいがく",
                "かいじょう"
            ],
            "correctIndex": 0,
            "explanation": "「かいはつします」 (開発します) means \"develop, create\"."
        },
        {
            "question": "mouse",
            "options": [
                "おおえ けんざぶろう",
                "マウス",
                "やすみます",
                "りようします"
            ],
            "correctIndex": 1,
            "explanation": "「マウス」 means \"mouse\"."
        },
        {
            "question": "human",
            "options": [
                "りようします",
                "いらっしゃいます",
                "ごぞんじです",
                "ヒト"
            ],
            "correctIndex": 3,
            "explanation": "「ヒト」 means \"human\"."
        },
        {
            "question": "be awarded a prize",
            "options": [
                "じゅしょうします",
                "よろしく おつたえ ください。",
                "こうし",
                "すごします"
            ],
            "correctIndex": 0,
            "explanation": "「じゅしょうします」 (授賞します) means \"be awarded a prize\"."
        },
        {
            "question": "lecture meeting",
            "options": [
                "こうえんかい",
                "マウス",
                "バスてい",
                "ノーベルぶんがくしょう"
            ],
            "correctIndex": 0,
            "explanation": "「こうえんかい」 (講演会) means \"lecture meeting\"."
        },
        {
            "question": "Japanese medical scientist (1962-)",
            "options": [
                "やまなかしんや",
                "つとめます［かいしゃに～］",
                "かいじょう",
                "いがくぶ"
            ],
            "correctIndex": 0,
            "explanation": "「やまなかしんや」 (山中伸弥) means \"Japanese medical scientist (1962-)\"."
        },
        {
            "question": "Nobel Prize",
            "options": [
                "ひまわりしょうがっこう",
                "おおえ けんざぶろう",
                "ノーベルしょう",
                "iPSさいぼう"
            ],
            "correctIndex": 2,
            "explanation": "「ノーベルしょう」 (ノーベル賞) means \"Nobel Prize\"."
        },
        {
            "question": "go to bed, sleep",
            "options": [
                "かえりに",
                "りようします",
                "こうし",
                "やすみます"
            ],
            "correctIndex": 3,
            "explanation": "「やすみます」 (休みます) means \"go to bed, sleep\"."
        },
        {
            "question": "drop into [a bank]",
            "options": [
                "よります［ぎんこうに～］",
                "いがくぶ",
                "ヒト",
                "けいれき"
            ],
            "correctIndex": 0,
            "explanation": "「よります［ぎんこうに～］」 (寄ります［銀行に～］) means \"drop into [a bank]\"."
        },
        {
            "question": "ashtray",
            "options": [
                "はいざら",
                "いがくぶ",
                "やまなかしんや",
                "やすみます"
            ],
            "correctIndex": 0,
            "explanation": "「はいざら」 (灰皿) means \"ashtray\"."
        },
        {
            "question": "meeting place, hall",
            "options": [
                "かいはつします",
                "たまに",
                "かえりに",
                "かいじょう"
            ],
            "correctIndex": 3,
            "explanation": "「かいじょう」 (会場) means \"meeting place, hall\"."
        },
        {
            "question": "trade",
            "options": [
                "おっしゃいます",
                "しつれいいたします。",
                "ちっとも",
                "ぼうえき"
            ],
            "correctIndex": 3,
            "explanation": "「ぼうえき」 (貿易) means \"trade\"."
        },
        {
            "question": "on the way back",
            "options": [
                "かえりに",
                "さっきょく",
                "ごぞんじです",
                "いらっしゃいます"
            ],
            "correctIndex": 0,
            "explanation": "「かえりに」 (帰りに) means \"on the way back\"."
        },
        {
            "question": "not at all (used with negatives)",
            "options": [
                "おもちです",
                "かいじょう",
                "めしあがります",
                "ちっとも"
            ],
            "correctIndex": 3,
            "explanation": "「ちっとも」 means \"not at all (used with negatives)\"."
        },
        {
            "question": "without reserve, without hesitation",
            "options": [
                "さくひん",
                "めしあがります",
                "～と いいます",
                "えんりょなく"
            ],
            "correctIndex": 3,
            "explanation": "「えんりょなく」 (遠慮なく) means \"without reserve, without hesitation\"."
        },
        {
            "question": "well, then (polite equivalent of じゃ)",
            "options": [
                "りようします",
                "ごぞんじです",
                "ヒト",
                "では"
            ],
            "correctIndex": 3,
            "explanation": "「では」 means \"well, then (polite equivalent of じゃ)\"."
        },
        {
            "question": "lecturer",
            "options": [
                "こうし",
                "～と いいます",
                "では",
                "えんりょなく"
            ],
            "correctIndex": 0,
            "explanation": "「こうし」 (講師) means \"lecturer\"."
        },
        {
            "question": "many ～, much ～",
            "options": [
                "あいさつ",
                "おもちです",
                "けいれき",
                "おおくの ～"
            ],
            "correctIndex": 3,
            "explanation": "「おおくの ～」 (多くの ～) means \"many ～, much ～\"."
        },
        {
            "question": "work (of art, etc.)",
            "options": [
                "さくひん",
                "すすみます",
                "かつどう",
                "さっきょく"
            ],
            "correctIndex": 0,
            "explanation": "「さくひん」 (作品) means \"work (of art, etc.)\"."
        },
        {
            "question": "world-wide",
            "options": [
                "せかいてきに",
                "おもちです",
                "ちっとも",
                "かつどう"
            ],
            "correctIndex": 0,
            "explanation": "「せかいてきに」 (世界的に) means \"world-wide\"."
        },
        {
            "question": "novelist, writer",
            "options": [
                "どなたでも",
                "おもちです",
                "さっか",
                "iPSさいぼう"
            ],
            "correctIndex": 2,
            "explanation": "「さっか」 (作家) means \"novelist, writer\"."
        },
        {
            "question": "be (respectful equivalent of です)",
            "options": [
                "いらっしゃいます",
                "iPSさいぼう",
                "せかいてきに",
                "～で いらっしゃいます"
            ],
            "correctIndex": 3,
            "explanation": "「～で いらっしゃいます」 means \"be (respectful equivalent of です)\"."
        },
        {
            "question": "one's eldest son",
            "options": [
                "iPSさいぼう",
                "ちょうなん",
                "すすみます",
                "こうえんかい"
            ],
            "correctIndex": 1,
            "explanation": "「ちょうなん」 (長男) means \"one's eldest son\"."
        },
        {
            "question": "handicap, defect",
            "options": [
                "おおえ けんざぶろう",
                "たまに",
                "かいはつします",
                "しょうがい"
            ],
            "correctIndex": 3,
            "explanation": "「しょうがい」 (障害) means \"handicap, defect\"."
        },
        {
            "question": "have (respectful way of saying もって います)",
            "options": [
                "とうきょうだいがく",
                "おおくの ～",
                "かつどう",
                "おもちです"
            ],
            "correctIndex": 3,
            "explanation": "「おもちです」 (お持ちです) means \"have (respectful way of saying もって います)\"."
        },
        {
            "question": "composition (music)",
            "options": [
                "ちっとも",
                "おっしゃいます",
                "さっきょく",
                "けいれき"
            ],
            "correctIndex": 2,
            "explanation": "「さっきょく」 (作曲) means \"composition (music)\"."
        },
        {
            "question": "activity",
            "options": [
                "はいざら",
                "かつどう",
                "よります［ぎんこうに～］",
                "いがくぶ"
            ],
            "correctIndex": 1,
            "explanation": "「かつどう」 (活動) means \"activity\"."
        },
        {
            "question": "well, so (indicating an end or beginning)",
            "options": [
                "かけます［いすに～］",
                "すごします",
                "それでは",
                "～で いらっしゃいます"
            ],
            "correctIndex": 2,
            "explanation": "「それでは」 means \"well, so (indicating an end or beginning)\"."
        },
        {
            "question": "Japanese novelist (1935- )",
            "options": [
                "ちっとも",
                "さっきょく",
                "おおえ けんざぶろう",
                "あいさつ"
            ],
            "correctIndex": 2,
            "explanation": "「おおえ けんざぶろう」 (大江 健三郎) means \"Japanese novelist (1935- )\"."
        },
        {
            "question": "Tokyo University",
            "options": [
                "おおくの ～",
                "しつれいいたします。",
                "とうきょうだいがく",
                "おもちです"
            ],
            "correctIndex": 2,
            "explanation": "「とうきょうだいがく」 (東京大学) means \"Tokyo University\"."
        },
        {
            "question": "Nobel Prize for literature",
            "options": [
                "～と いいます",
                "たまに",
                "さくひん",
                "ノーベルぶんがくしょう"
            ],
            "correctIndex": 3,
            "explanation": "「ノーベルぶんがくしょう」 (ノーベル文学賞) means \"Nobel Prize for literature\"."
        }
    ],
    "Lesson 50": [
        {
            "question": "go, come (humble equivalent of いきます and きます)",
            "options": [
                "とります［ビデオに～］",
                "まいります",
                "メールアドレス",
                "いたします"
            ],
            "correctIndex": 1,
            "explanation": "「まいります」 (参ります) means \"go, come (humble equivalent of いきます and きます)\"."
        },
        {
            "question": "be (humble equivalent of います)",
            "options": [
                "おります",
                "いたします",
                "おげんきで いらっしゃいますか。",
                "しぜん"
            ],
            "correctIndex": 0,
            "explanation": "「おります」 means \"be (humble equivalent of います)\"."
        },
        {
            "question": "eat, drink, receive (humble equivalent of たべます, のみます and もらいます)",
            "options": [
                "おげんきで いらっしゃいますか。",
                "ころ",
                "まいります",
                "いただきます"
            ],
            "correctIndex": 3,
            "explanation": "「いただきます」 means \"eat, drink, receive (humble equivalent of たべます, のみます and もらいます)\"."
        },
        {
            "question": "say (one's name) is ～ (humble equivalent of いいます)",
            "options": [
                "けいぐ",
                "もうします",
                "めいわくを かけます",
                "きょうりょくします"
            ],
            "correctIndex": 1,
            "explanation": "「もうします」 (申します) means \"say (one's name) is ～ (humble equivalent of いいます)\"."
        },
        {
            "question": "do (humble equivalent of します)",
            "options": [
                "いかします",
                "こころから",
                "ころ",
                "いたします"
            ],
            "correctIndex": 3,
            "explanation": "「いたします」 means \"do (humble equivalent of します)\"."
        },
        {
            "question": "see (humble equivalent of みます)",
            "options": [
                "ガイド",
                "いかします",
                "はいけんします",
                "［お］しろ"
            ],
            "correctIndex": 2,
            "explanation": "「はいけんします」 (拝見します) means \"see (humble equivalent of みます)\"."
        },
        {
            "question": "get to know (humble equivalent of しります)",
            "options": [
                "わたくし",
                "きりん",
                "めいわくを かけます",
                "ぞんじます"
            ],
            "correctIndex": 3,
            "explanation": "「ぞんじます」 (存じます) means \"get to know (humble equivalent of しります)\"."
        },
        {
            "question": "ask, hear, visit (humble equivalent of ききます and いきます)",
            "options": [
                "しぜん",
                "アルバム",
                "うかがいます",
                "きんちょうします"
            ],
            "correctIndex": 2,
            "explanation": "「うかがいます」 (伺います) means \"ask, hear, visit (humble equivalent of ききます and いきます)\"."
        },
        {
            "question": "meet (humble equivalent of あいます)",
            "options": [
                "おげんきで いらっしゃいますか。",
                "おめに かかります",
                "さらいねん",
                "いたします"
            ],
            "correctIndex": 1,
            "explanation": "「おめに かかります」 (お目に かかります) means \"meet (humble equivalent of あいます)\"."
        },
        {
            "question": "make [coffee]",
            "options": [
                "いれます［コーヒーを～］",
                "さらいげつ",
                "スケジュール",
                "ミュンヘン"
            ],
            "correctIndex": 0,
            "explanation": "「いれます［コーヒーを～］」 means \"make [coffee]\"."
        },
        {
            "question": "prepare",
            "options": [
                "おうえんします",
                "よういします",
                "ほうそうします",
                "おたく"
            ],
            "correctIndex": 1,
            "explanation": "「よういします」 (用意します) means \"prepare\"."
        },
        {
            "question": "I (humble equivalent of わたし)",
            "options": [
                "こころから",
                "ほうそうします",
                "わたくし",
                "けいぐ"
            ],
            "correctIndex": 2,
            "explanation": "「わたくし」 (私) means \"I (humble equivalent of わたし)\"."
        },
        {
            "question": "guide",
            "options": [
                "アルバム",
                "ガイド",
                "さいしょに",
                "さいごに"
            ],
            "correctIndex": 1,
            "explanation": "「ガイド」 means \"guide\"."
        },
        {
            "question": "e-mail address",
            "options": [
                "かんしゃします",
                "こうがい",
                "ほうそうします",
                "メールアドレス"
            ],
            "correctIndex": 3,
            "explanation": "「メールアドレス」 means \"e-mail address\"."
        },
        {
            "question": "schedule",
            "options": [
                "［お］しろ",
                "わたくし",
                "さらいねん",
                "スケジュール"
            ],
            "correctIndex": 3,
            "explanation": "「スケジュール」 means \"schedule\"."
        },
        {
            "question": "the week after next",
            "options": [
                "おたく",
                "おげんきで いらっしゃいますか。",
                "はじめに",
                "さらいしゅう"
            ],
            "correctIndex": 3,
            "explanation": "「さらいしゅう」 (さ来週) means \"the week after next\"."
        },
        {
            "question": "the month after next",
            "options": [
                "～で ございます",
                "ぞんじます",
                "ぞう",
                "さらいげつ"
            ],
            "correctIndex": 3,
            "explanation": "「さらいげつ」 (さ来月) means \"the month after next\"."
        },
        {
            "question": "the year after next",
            "options": [
                "ございます",
                "きんちょうします",
                "さらいねん",
                "ミュンヘン"
            ],
            "correctIndex": 2,
            "explanation": "「さらいねん」 (さ来年) means \"the year after next\"."
        },
        {
            "question": "first",
            "options": [
                "はじめに",
                "おげんきで いらっしゃいますか。",
                "きんちょうします",
                "ころ"
            ],
            "correctIndex": 0,
            "explanation": "「はじめに」 (初めに) means \"first\"."
        },
        {
            "question": "Edo-Tokyo Museum",
            "options": [
                "えどとうきょうはくぶつかん",
                "めいわくを かけます",
                "おげんきで いらっしゃいますか。",
                "もうします"
            ],
            "correctIndex": 0,
            "explanation": "「えどとうきょうはくぶつかん」 (江戸東京博物館) means \"Edo-Tokyo Museum\"."
        },
        {
            "question": "become tense, be strained, be nervous",
            "options": [
                "おめに かかります",
                "かんしゃします",
                "きんちょうします",
                "さらいげつ"
            ],
            "correctIndex": 2,
            "explanation": "「きんちょうします」 (緊張します) means \"become tense, be strained, be nervous\"."
        },
        {
            "question": "prize money",
            "options": [
                "さいごに",
                "しょうきん",
                "きんちょうします",
                "かんしゃします"
            ],
            "correctIndex": 1,
            "explanation": "「しょうきん」 (賞金) means \"prize money\"."
        },
        {
            "question": "giraffe",
            "options": [
                "いただきます",
                "さらいねん",
                "もうします",
                "きりん"
            ],
            "correctIndex": 3,
            "explanation": "「きりん」 means \"giraffe\"."
        },
        {
            "question": "times, days",
            "options": [
                "ころ",
                "ございます",
                "きょうりょくします",
                "さらいねん"
            ],
            "correctIndex": 0,
            "explanation": "「ころ」 means \"times, days\"."
        },
        {
            "question": "[dream] be realized, come true",
            "options": [
                "かないます［ゆめが～］",
                "いかします",
                "うつくしい",
                "さらいしゅう"
            ],
            "correctIndex": 0,
            "explanation": "「かないます［ゆめが～］」 (かないます［夢が～］) means \"[dream] be realized, come true\"."
        },
        {
            "question": "support",
            "options": [
                "おうえんします",
                "かないます［ゆめが～］",
                "とります［ビデオに～］",
                "えどとうきょうはくぶつかん"
            ],
            "correctIndex": 0,
            "explanation": "「おうえんします」 (応援します) means \"support\"."
        },
        {
            "question": "from one's heart, sincerely",
            "options": [
                "よういします",
                "きりん",
                "スケジュール",
                "こころから"
            ],
            "correctIndex": 3,
            "explanation": "「こころから」 (心から) means \"from one's heart, sincerely\"."
        },
        {
            "question": "thank, be grateful",
            "options": [
                "よういします",
                "さらいねん",
                "かんしゃします",
                "さいしょに"
            ],
            "correctIndex": 2,
            "explanation": "「かんしゃします」 (感謝します) means \"thank, be grateful\"."
        },
        {
            "question": "gratitude, thanks",
            "options": [
                "おうえんします",
                "おれい",
                "はじめに",
                "かないます［ゆめが～］"
            ],
            "correctIndex": 1,
            "explanation": "「おれい」 (お礼) means \"gratitude, thanks\"."
        },
        {
            "question": "How are you doing? (respectful equivalent of おげんきですか)",
            "options": [
                "かんしゃします",
                "はんとし",
                "おげんきで いらっしゃいますか。",
                "きりん"
            ],
            "correctIndex": 2,
            "explanation": "「おげんきで いらっしゃいますか。」 (お元気で いらっしゃいますか。) means \"How are you doing? (respectful equivalent of おげんきですか)\"."
        },
        {
            "question": "cause trouble, annoyance, inconvenience",
            "options": [
                "めいわくを かけます",
                "はいけい",
                "ころ",
                "ひとこと よろしいでしょうか。"
            ],
            "correctIndex": 0,
            "explanation": "「めいわくを かけます」 (迷惑を かけます) means \"cause trouble, annoyance, inconvenience\"."
        },
        {
            "question": "make good use of",
            "options": [
                "ガイド",
                "きんちょうします",
                "こころから",
                "いかします"
            ],
            "correctIndex": 3,
            "explanation": "「いかします」 (生かします) means \"make good use of\"."
        },
        {
            "question": "Munich (in Germany)",
            "options": [
                "こうがい",
                "ころ",
                "いれます［コーヒーを～］",
                "ミュンヘン"
            ],
            "correctIndex": 3,
            "explanation": "「ミュンヘン」 means \"Munich (in Germany)\"."
        },
        {
            "question": "be (polite equivalent of あります)",
            "options": [
                "おれい",
                "ミュンヘン",
                "ございます",
                "ひとこと よろしいでしょうか。"
            ],
            "correctIndex": 2,
            "explanation": "「ございます」 means \"be (polite equivalent of あります)\"."
        },
        {
            "question": "be (polite equivalent of ～です)",
            "options": [
                "けいぐ",
                "ミュンヘン",
                "～で ございます",
                "アルバム"
            ],
            "correctIndex": 2,
            "explanation": "「～で ございます」 means \"be (polite equivalent of ～です)\"."
        },
        {
            "question": "(someone else's) house",
            "options": [
                "けいぐ",
                "メールアドレス",
                "おたく",
                "さらいしゅう"
            ],
            "correctIndex": 2,
            "explanation": "「おたく」 (お宅) means \"(someone else's) house\"."
        },
        {
            "question": "suburbs",
            "options": [
                "はじめに",
                "こうがい",
                "よういします",
                "アルバム"
            ],
            "correctIndex": 1,
            "explanation": "「こうがい」 (郊外) means \"suburbs\"."
        },
        {
            "question": "album",
            "options": [
                "こころから",
                "アルバム",
                "しょうきん",
                "ガイド"
            ],
            "correctIndex": 1,
            "explanation": "「アルバム」 means \"album\"."
        },
        {
            "question": "half a year",
            "options": [
                "はんとし",
                "きんちょうします",
                "～で ございます",
                "さらいげつ"
            ],
            "correctIndex": 0,
            "explanation": "「はんとし」 (半年) means \"half a year\"."
        },
        {
            "question": "first of all",
            "options": [
                "さいしょに",
                "ただいま",
                "ほうそうします",
                "しぜん"
            ],
            "correctIndex": 0,
            "explanation": "「さいしょに」 (最初に) means \"first of all\"."
        },
        {
            "question": "lastly",
            "options": [
                "おうえんします",
                "さいごに",
                "しょうきん",
                "おれい"
            ],
            "correctIndex": 1,
            "explanation": "「さいごに」 (最後に) means \"lastly\"."
        },
        {
            "question": "now",
            "options": [
                "おれい",
                "うつくしい",
                "ただいま",
                "～で ございます"
            ],
            "correctIndex": 2,
            "explanation": "「ただいま」 (ただ今) means \"now\"."
        },
        {
            "question": "broadcast",
            "options": [
                "さらいげつ",
                "めいわくを かけます",
                "ミュンヘン",
                "ほうそうします"
            ],
            "correctIndex": 3,
            "explanation": "「ほうそうします」 (放送します) means \"broadcast\"."
        },
        {
            "question": "record [on video], video",
            "options": [
                "おれい",
                "とります［ビデオに～］",
                "うかがいます",
                "メールアドレス"
            ],
            "correctIndex": 1,
            "explanation": "「とります［ビデオに～］」 (撮ります［ビデオに～］) means \"record [on video], video\"."
        },
        {
            "question": "nature",
            "options": [
                "おれい",
                "きんちょうします",
                "しぜん",
                "しょうきん"
            ],
            "correctIndex": 2,
            "explanation": "「しぜん」 (自然) means \"nature\"."
        },
        {
            "question": "elephant",
            "options": [
                "さらいげつ",
                "もうします",
                "［お］しろ",
                "ぞう"
            ],
            "correctIndex": 3,
            "explanation": "「ぞう」 (象) means \"elephant\"."
        },
        {
            "question": "May I say one word?",
            "options": [
                "ころ",
                "けいぐ",
                "ひとこと よろしいでしょうか。",
                "おげんきで いらっしゃいますか。"
            ],
            "correctIndex": 2,
            "explanation": "「ひとこと よろしいでしょうか。」 means \"May I say one word?\"."
        },
        {
            "question": "cooperate",
            "options": [
                "おります",
                "おうえんします",
                "きょうりょくします",
                "はいけんします"
            ],
            "correctIndex": 2,
            "explanation": "「きょうりょくします」 (協力します) means \"cooperate\"."
        },
        {
            "question": "Dear ～",
            "options": [
                "さらいげつ",
                "アルバム",
                "ほうそうします",
                "はいけい"
            ],
            "correctIndex": 3,
            "explanation": "「はいけい」 (拝啓) means \"Dear ～\"."
        },
        {
            "question": "beautiful",
            "options": [
                "うつくしい",
                "きょうりょくします",
                "さらいしゅう",
                "きりん"
            ],
            "correctIndex": 0,
            "explanation": "「うつくしい」 (美しい) means \"beautiful\"."
        },
        {
            "question": "castle",
            "options": [
                "［お］しろ",
                "さらいしゅう",
                "うつくしい",
                "えどとうきょうはくぶつかん"
            ],
            "correctIndex": 0,
            "explanation": "「［お］しろ」 (［お］城) means \"castle\"."
        },
        {
            "question": "Sincerely yours",
            "options": [
                "さいごに",
                "こうがい",
                "けいぐ",
                "かんしゃします"
            ],
            "correctIndex": 2,
            "explanation": "「けいぐ」 (敬具) means \"Sincerely yours\"."
        }
    ]
};
