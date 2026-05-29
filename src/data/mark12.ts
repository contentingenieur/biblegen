export interface Section {
  id: number;
  label: string;
  title: string;
  verseRange: string;
  color: string;
  icon: string;
  image: string;
  summary: string;
  scripture: string;
  commentary: string;
  keyTruths: string[];
  reflection: string;
}

export const mark12Sections: Section[] = [
  {
    id: 1,
    label: "THE TENANTS",
    title: "The Parable of the Tenants",
    verseRange: "12:1–12",
    color: "#5EEAD4",
    icon: "fa-solid fa-seedling",
    image: "/images/temple-foretold.jpg",
    summary: "Jesus tells the story of a vineyard owner who sends servants — and finally his beloved son — to receive fruit from wicked tenants who beat, shame, and kill them.",
    scripture: `<p><span class="verse-num">1</span> And he began to speak to them in parables. “A man planted a vineyard and put a fence around it and dug a pit for the winepress and built a tower, and leased it to tenants and went into another country. <span class="verse-num">2</span> When the season came, he sent a servant to the tenants to get from them some of the fruit of the vineyard. <span class="verse-num">3</span> And they took him and beat him and sent him away empty-handed. <span class="verse-num">4</span> Again he sent to them another servant, and they struck him on the head and treated him shamefully. <span class="verse-num">5</span> And he sent another, and him they killed. And so with many others: some they beat, and some they killed.</p>
                <p class="mt-4"><span class="verse-num">6</span> He had still one other, a beloved son. Finally he sent him to them, saying, ‘They will respect my son.’ <span class="verse-num">7</span> But those tenants said to one another, ‘This is the heir. Come, let us kill him, and the inheritance will be ours.’ <span class="verse-num">8</span> And they took him and killed him and threw him out of the vineyard. <span class="verse-num">9</span> What will the owner of the vineyard do? He will come and destroy the tenants and give the vineyard to others.”</p>`,
    commentary: "The parable alludes to Isaiah 5. The tenants represent the leaders of Israel who have repeatedly rejected God’s servants (the prophets) and now plot to kill the beloved Son. God will judge the unfaithful leaders and give the vineyard to others — a new people who will bear fruit.",
    keyTruths: [
      "God has a rightful expectation of fruit from his people.",
      "The leaders of Israel have repeatedly rejected and mistreated God’s messengers.",
      "The beloved Son has been sent — and will be killed. God will give the vineyard to others."
    ],
    reflection: "Where in my life am I treating the Son as an interruption rather than the rightful heir? Am I producing fruit for the Owner of the vineyard?"
  },
  {
    id: 2,
    label: "TAXES TO CAESAR",
    title: "Paying Taxes to Caesar",
    verseRange: "12:13–17",
    color: "#5EEAD4",
    icon: "fa-solid fa-coins",
    image: "/images/persecution-witness.jpg",
    summary: "The Pharisees and Herodians try to trap Jesus with a question about paying taxes to Caesar. Jesus exposes their hypocrisy and delivers a profound answer about allegiance.",
    scripture: `<p><span class="verse-num">13</span> And they sent to him some of the Pharisees and some of the Herodians, to trap him in his talk. <span class="verse-num">14</span> And they came and said to him, “Teacher, we know that you are true and do not care about anyone’s opinion. For you are not swayed by appearances, but truly teach the way of God. Is it lawful to pay taxes to Caesar, or not? Should we pay them, or should we not?”</p>
                <p class="mt-4"><span class="verse-num">15</span> But, knowing their hypocrisy, he said to them, “Why put me to the test? Bring me a denarius and let me look at it.” <span class="verse-num">16</span> And they brought one. And he said to them, “Whose likeness and inscription is this?” They said to him, “Caesar’s.” <span class="verse-num">17</span> Jesus said to them, “Render to Caesar the things that are Caesar’s, and to God the things that are God’s.” And they marveled at him.</p>`,
    commentary: "Jesus refuses to be trapped. By asking for a denarius, he shows that his opponents already participate in the Roman system. His answer affirms civic responsibility while making clear that God’s claim on our lives is total and ultimate.",
    keyTruths: [
      "God’s kingdom transcends all earthly powers and systems.",
      "Jesus is not a political revolutionary, but his lordship relativizes every human authority.",
      "We are to give Caesar what belongs to him — and give God everything."
    ],
    reflection: "What am I currently withholding from God because I’m trying to keep it for myself or for Caesar? What does it look like to render to God the things that are God’s?"
  },
  {
    id: 3,
    label: "THE RESURRECTION",
    title: "The Sadducees and the Resurrection",
    verseRange: "12:18–27",
    color: "#5EEAD4",
    icon: "fa-solid fa-book-open",
    image: "/images/son-of-man-coming.jpg",
    summary: "The Sadducees present a hypothetical scenario of seven brothers and one widow to mock the idea of resurrection. Jesus corrects both their understanding of Scripture and the power of God.",
    scripture: `<p><span class="verse-num">24</span> Jesus said to them, “Is this not the reason you are wrong, because you know neither the Scriptures nor the power of God? <span class="verse-num">25</span> For when they rise from the dead, they neither marry nor are given in marriage, but are like angels in heaven. <span class="verse-num">26</span> And as for the dead being raised, have you not read in the book of Moses, in the passage about the bush, how God spoke to him, saying, ‘I am the God of Abraham, and the God of Isaac, and the God of Jacob’? <span class="verse-num">27</span> He is not God of the dead, but of the living. You are quite wrong.”</p>`,
    commentary: "The Sadducees know neither the Scriptures nor the power of God. Exodus 3:6 reveals that God is still the God of Abraham, Isaac, and Jacob — therefore they live. The resurrection is not a continuation of earthly life but a transformation into something greater.",
    keyTruths: [
      "God is the God of the living. Abraham, Isaac, and Jacob are alive to him.",
      "Heavenly existence is not a continuation of earthly marriage and social structures.",
      "The power of God is greater than our limited imaginations."
    ],
    reflection: "Do I live as though God is only the God of the dead, or as the God of the living who will raise me? How does the resurrection change the way I hold earthly relationships and possessions?"
  },
  {
    id: 4,
    label: "THE GREAT COMMANDMENT",
    title: "The Great Commandment",
    verseRange: "12:28–34",
    color: "#5EEAD4",
    icon: "fa-solid fa-heart",
    image: "/images/watchful-servant.jpg",
    summary: "A sincere scribe asks which commandment is most important. Jesus answers with the Shema and the command to love one’s neighbor, and declares the scribe not far from the kingdom of God.",
    scripture: `<p><span class="verse-num">29</span> Jesus answered, “The most important is, ‘Hear, O Israel: The Lord our God, the Lord is one. <span class="verse-num">30</span> And you shall love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.’ <span class="verse-num">31</span> The second is this: ‘You shall love your neighbor as yourself.’ There is no other commandment greater than these.”</p>
                <p class="mt-4"><span class="verse-num">34</span> And when Jesus saw that he answered wisely, he said to him, “You are not far from the kingdom of God.”</p>`,
    commentary: "Jesus sums up the entire law in two commandments: total love for God and genuine love for neighbor. The scribe’s wise response shows he is close — but still needs to recognize Jesus as the beloved Son and the one who will give his life as a ransom.",
    keyTruths: [
      "Love for God with everything we are is the first and greatest commandment.",
      "Love for neighbor flows directly from love for God.",
      "Intellectual agreement is not enough — we need the Son."
    ],
    reflection: "Am I trying to love God and neighbor out of my own strength, or am I being transformed by the love of the One who gave everything for me?"
  },
  {
    id: 5,
    label: "WHOSE SON?",
    title: "Whose Son Is the Christ?",
    verseRange: "12:35–37",
    color: "#5EEAD4",
    icon: "fa-solid fa-crown",
    image: "/images/son-of-man-coming.jpg",
    summary: "Jesus challenges the popular view that the Messiah is merely the son of David by pointing to Psalm 110, where David calls the Messiah “Lord.” The crowd listens with delight.",
    scripture: `<p><span class="verse-num">35</span> And as Jesus taught in the temple, he said, “How can the scribes say that the Christ is the son of David? <span class="verse-num">36</span> David himself, in the Holy Spirit, declared, ‘The Lord said to my Lord, “Sit at my right hand, until I put your enemies under your feet.”’ <span class="verse-num">37</span> David himself calls him Lord. So how is he his son?” And the great throng heard him gladly.</p>`,
    commentary: "Jesus is not denying his Davidic descent. He is showing that the Messiah is far more than a political son of David. As the Lord of David, he sits at the right hand of God and will defeat all his enemies. This is a clear claim to divine authority.",
    keyTruths: [
      "The Messiah is not merely a human king in David’s line.",
      "Jesus claims to be the Lord to whom even David submits.",
      "His exaltation at the right hand of God is central to his identity and mission."
    ],
    reflection: "Do I relate to Jesus primarily as a good teacher or moral example, or as the Lord of David who reigns at God’s right hand?"
  },
  {
    id: 6,
    label: "TRUE DEVOTION",
    title: "Beware of the Scribes & The Widow’s Offering",
    verseRange: "12:38–44",
    color: "#5EEAD4",
    icon: "fa-solid fa-hand-holding-heart",
    image: "/images/fig-tree.jpg",
    summary: "Jesus warns against the pride and exploitation of the scribes, then watches a poor widow give two small coins — and declares that she has given more than all the rich.",
    scripture: `<p><span class="verse-num">38</span> And in his teaching he said, “Beware of the scribes, who like to walk around in long robes and like greetings in the marketplaces and have the best seats in the synagogues and the places of honor at feasts, <span class="verse-num">40</span> who devour widows’ houses and for a pretense make long prayers. They will receive the greater condemnation.”</p>
                <p class="mt-4"><span class="verse-num">43</span> And he called his disciples to him and said to them, “Truly, I say to you, this poor widow has put in more than all those who are contributing to the offering box. <span class="verse-num">44</span> For they all contributed out of their abundance, but she out of her poverty has put in everything she had, all she had to live on.”</p>`,
    commentary: "True devotion is not measured by outward appearance or public recognition. The widow gave everything she had to live on. God measures generosity by sacrifice and the heart, not by the amount given from surplus.",
    keyTruths: [
      "God sees and judges religious hypocrisy that exploits the vulnerable.",
      "True giving is measured by what it costs the giver.",
      "The kingdom values the heart and sacrifice over public display."
    ],
    reflection: "What am I giving to God that costs me little? What would it look like to give “everything I have to live on” in some area of my life?"
  }
];