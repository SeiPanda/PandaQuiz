
const questions = [
    {
        question: "Who is the main charakter von SAO?",
        answers: [
            {
                text: "Kirito",
                correct: true,
            },
            {
                text: "Asuna",
                correct: false,
            },
            {
                text: "Klein",
                correct: false,
            },
            {
                text: "Kayaba",
                correct: false,
            }
        ]

    },
    {
        question: "How tall is Levi?",
        answers: [
            {
                text: "1.60",
                correct: true,
            },
            {
                text: "1.80",
                correct: false,
            },
            {
                text: "1.70",
                correct: false,
            },
            {
                text: "2.00",
                correct: false,
            }
        ]

    },
    {
        question: "What is the name from Gojo's Domain Expansion?",
        answers: [
            {
                text: "Unlimited Void",
                correct: true,
            },
            {
                text: "Limitless",
                correct: false,
            },
            {
                text: "Hollow Technique Purple",
                correct: false,
            },
            {
                text: "Infinity",
                correct: false,
            }
        ]

    },
    {
        question: "Who is my favorite Charakter?",
        answers: [
            {
                text: "Gojo Satoru",
                correct: true,
            },
            {
                text: "Kirito",
                correct: false,
            },
            {
                text: "Takumi",
                correct: false,
            },
            {
                text: "Levi",
                correct: false,
            }
        ]

    },
    {
        question: "What are the names of Kirito's swords (Aincrad)?",
        answers: [
            {
                text: "Elucidator & Dark Repulsor",
                correct: true,
            },
            {
                text: "Anneal Blade & Excaliber",
                correct: false,
            },
            {
                text: "Guilty Thron & Iron Rapier",
                correct: false,
            },
            {
                text: "Nightsable & Liberator",
                correct: false,
            }
        ]

    },
    {
        question: "What hair color does Gojo have?",
        answers: [
            {
                text: "white",
                correct: true,
            },
            {
                text: "black",
                correct: false,
            },
            {
                text: "red",
                correct: false,
            },
            {
                text: "purple",
                correct: false,
            }
        ]

    },
    {
        question: "How many floors does Sword Art Online have?",
        answers: [
            {
                text: "100",
                correct: true,
            },
            {
                text: "500",
                correct: false,
            },
            {
                text: "1000",
                correct: false,
            },
            {
                text: "99",
                correct: false,
            }
        ]

    },
    {
        question: "What do Shiro and Sora call themselves?",
        answers: [
            {
                text: "Blank",
                correct: true,
            },
            {
                text: "Team SS",
                correct: false,
            },
            {
                text: "Loser",
                correct: false,
            },
            {
                text: "doppel S",
                correct: false,
            }
        ]

    },
    {
        question: "Which rank has Levi Ackerman?",
        answers: [
            {
                text: "Captian",
                correct: true,
            },
            {
                text: "General",
                correct: false,
            },
            {
                text: "Soldier",
                correct: false,
            },
            {
                text: "Lord",
                correct: false,
            }
        ]

    },
    {
        question: "How old is Levi?",
        answers: [
            {
                text: "30",
                correct: true,
            },
            {
                text: "20",
                correct: false,
            },
            {
                text: "17",
                correct: false,
            },
            {
                text: "40",
                correct: false,
            }
        ]

    },
    {
        question: "What likes Dazai?",
        answers: [
            {
                text: "Suicide",
                correct: true,
            },
            {
                text: "Dogs",
                correct: false,
            },
            {
                text: "Pain",
                correct: false,
            },
            {
                text: "His friend Chuuya",
                correct: false,
            }
        ]

    },
    {
        question: "To which anime does Dazai belongs?",
        answers: [
            {
                text: "Bungo Stary Dogs",
                correct: true,
            },
            {
                text: "Attack on Titan",
                correct: false,
            },
            {
                text: "Boku no Hero Academia",
                correct: false,
            },
            {
                text: "Noragami",
                correct: false,
            }
        ]

    },
    {
        question: "When is Levi's birthday?",
        answers: [
            {
                text: "December 25",
                correct: true,
            },
            {
                text: "February 14",
                correct: false,
            },
            {
                text: "December 24",
                correct: false,
            },
            {
                text: "February 15",
                correct: false,
            }
        ]

    },
    {
        question: "Which rank has Gojo Satoru?",
        answers: [
            {
                text: "Special Grade",
                correct: true,
            },
            {
                text: "Special Grade 1",
                correct: false,
            },
            {
                text: "Semi Grade",
                correct: false,
            },
            {
                text: "Master Grade",
                correct: false,
            }
        ]

    },

];

const marvelQuestions = [
    {
        question: "What is the name of Thor’s hammer?",
        answers: [
            {
                text: "Mjolnir",
                correct: true,
            },
            {
                text: "Vanir",
                correct: false,
            },
            {
                text: "Aesir",
                correct: false,
            },
            {
                text: "Norn",
                correct: false,
            }
        ]

    },
    {
        question: "What is Captain America’s shield made of?",
        answers: [
            {
                text: "Vibran-ium",
                correct: true,
            },
            {
                text: "Adaman-tium",
                correct: false,
            },
            {
                text: "Prome-thium",
                correct: false,
            },
            {
                text: "Carbon-nium",
                correct: false,
            }
        ]

    },
    {
        question: "What is the alien race Loki sends to Earth called?",
        answers: [
            {
                text: "Chitauri",
                correct: true,
            },
            {
                text: "Skrulls",
                correct: false,
            },
            {
                text: "Kree",
                correct: false,
            },
            {
                text: "Flerkens",
                correct: false,
            }
        ]

    },
    {
        question: "How many Infinity Stones are there?",
        answers: [
            {
                text: "6",
                correct: true,
            },
            {
                text: "5",
                correct: false,
            },
            {
                text: "7",
                correct: false,
            },
            {
                text: "3",
                correct: false,
            }
        ]

    },
    {
        question: "What is not a Infinity Stones?",
        answers: [
            {
                text: "Strength",
                correct: true,
            },
            {
                text: "Time",
                correct: false,
            },
            {
                text: "Reality",
                correct: false,
            },
            {
                text: "Mind",
                correct: false,
            }
        ]

    },
    {
        question: "What was the name of one of Peter Parker's clones?",
        answers: [
            {
                text: "Ben Reilly",
                correct: true,
            },
            {
                text: "J. J. Osborn",
                correct: false,
            },
            {
                text: "Flash Watson",
                correct: false,
            },
            {
                text: "Miguel O'Hara",
                correct: false,
            }
        ]

    },
    {
        question: "Wich superhero name has Miguel O'Hara",
        answers: [
            {
                text: "Sipderman 2099",
                correct: true,
            },
            {
                text: "Scarlet Spider",
                correct: false,
            },
            {
                text: "Spider-Man",
                correct: false,
            },
            {
                text: "Spider-Noir",
                correct: false,
            }
        ]

    },
    {
        question: "to which race belongs Thanos",
        answers: [
            {
                text: "Deviants",
                correct: true,
            },
            {
                text: "Celestials",
                correct: false,
            },
            {
                text: "Eternals",
                correct: false,
            },
            {
                text: "Omegas",
                correct: false,
            }
        ]

    },
    {
        question: "on which earth does Peter Parker live?",
        answers: [
            {
                text: "Earh-616",
                correct: true,
            },
            {
                text: "Earth-65",
                correct: false,
            },
            {
                text: "Earth-TRN457",
                correct: false,
            },
            {
                text: "Earth-928",
                correct: false,
            }
        ]

    },
    {
        question: "Who is the leader of the sinister six",
        answers: [
            {
                text: "Doc Ock",
                correct: true,
            },
            {
                text: "Electro",
                correct: false,
            },
            {
                text: "Beetle",
                correct: false,
            },
            {
                text: "Green Goblin",
                correct: false,
            }
        ]

    },
    {
        question: "to which woman was Peter married for more than 10 years?",
        answers: [
            {
                text: "Mary Jane Watson",
                correct: true,
            },
            {
                text: "Betty Brant",
                correct: false,
            },
            {
                text: "Felica Hardy",
                correct: false,
            },
            {
                text: "Kate Chushing",
                correct: false,
            }
        ]

    },
    {
        question: "What high school did Flash and Peter attend?",
        answers: [
            {
                text: "Midtown High",
                correct: true,
            },
            {
                text: "Empire High",
                correct: false,
            },
            {
                text: "Baxter High",
                correct: false,
            },
            {
                text: "Tech High",
                correct: false,
            }
        ]

    },
    {
        question: "Peters college girlfriend was killed during a battle with the Green Goblin. Who was she?",
        answers: [
            {
                text: "Gwen Stacy",
                correct: true,
            },
            {
                text: "Mary Jane Watson",
                correct: false,
            },
            {
                text: "Betty Brant",
                correct: false,
            },
            {
                text: "Felica Hardy",
                correct: false,
            }
        ]

    },
    {
        question: "one of Spider-Man's deadliest enemies was the father of his best friend. Who was this villain?",
        answers: [
            {
                text: "Green Goblin",
                correct: true,
            },
            {
                text: "Sandman",
                correct: false,
            },
            {
                text: "Beetle",
                correct: false,
            },
            {
                text: "Scorpion",
                correct: false,
            }
        ]

    },
    {
        question: "Black Cat was an enemy, a love interest, and an ally of Spider-Man, who was she?",
        answers: [
            {
                text: "Felicia Hardy",
                correct: true,
            },
            {
                text: "Selina Kyle",
                correct: false,
            },
            {
                text: "Betty Brant",
                correct: false,
            },
            {
                text: "Susan Storm",
                correct: false,
            }
        ]

    },
    {
        question: "what equipent can Starlord only because his race use?",
        answers: [
            {
                text: "Element Gun",
                correct: true,
            },
            {
                text: "Space Helmet",
                correct: false,
            },
            {
                text: "Jet Bots",
                correct: false,
            },
            {
                text: "Power Gloves",
                correct: false,
            }
        ]

    },
    {
        question: "to which race belong Starlord (Comic)?",
        answers: [
            {
                text: "Spartoi Hybrid",
                correct: true,
            },
            {
                text: "Eternal Hybrid",
                correct: false,
            },
            {
                text: "Celestial Hybrid",
                correct: false,
            },
            {
                text: "Kree Hybrid",
                correct: false,
            }
        ]

    },
    {
        question: "which nickname of Starlord is false?",
        answers: [
            {
                text: "Leader of the Freaks",
                correct: true,
            },
            {
                text: "Lord of Stars",
                correct: false,
            },
            {
                text: "Princ of Spartax",
                correct: false,
            },
            {
                text: "Space Boy",
                correct: false,
            }
        ]

    },
]

const entertainmentQuestions = [
    {
        question: "how many films does the mcu infinity saga include?",
        answers: [
            {
                text: "22",
                correct: true,
            },
            {
                text: "19",
                correct: false,
            },
            {
                text: "15",
                correct: false,
            },
            {
                text: "8",
                correct: false,
            }
        ]

    },
    {
        question: "how many films does the mcu infinity saga include?",
        answers: [
            {
                text: "22",
                correct: true,
            },
            {
                text: "19",
                correct: false,
            },
            {
                text: "15",
                correct: false,
            },
            {
                text: "8",
                correct: false,
            }
        ]

    },
]

export {questions, marvelQuestions};