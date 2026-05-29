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

export const mark13Sections: Section[] = [
  {
    id: 1,
    label: "THE TEMPLE FORETOLD",
    title: "Jesus Foretells the Destruction of the Temple",
    verseRange: "13:1–2",
    color: "#5EEAD4",
    icon: "fa-solid fa-landmark",
    image: "/images/temple-foretold.jpg",
    summary: "As Jesus leaves the magnificent Temple, a disciple marvels at its stones. Jesus responds with a shocking prophecy: not one stone will remain upon another.",
    scripture: `<p><span class="verse-num">1</span> And as he came out of the temple, one of his disciples said to him, “Look, Teacher, what wonderful stones and what wonderful buildings!”</p>
                <p class="mt-4"><span class="verse-num">2</span> And Jesus said to him, “Do you see these great buildings? There will not be left here one stone upon another that will not be thrown down.”</p>`,
    commentary: "Herod the Great expanded the second temple to about double the size of the Solomonic temple. The future destruction of the temple (and Jerusalem) would occur on account of its misuse by the leaders. Titus, son of the emperor Vespasian, led the destruction of Jerusalem and the temple in A.D. 66–70.",
    keyTruths: [
      "The future destruction of the temple would occur on account of its misuse by the leaders.",
      "Not one stone would be left upon another.",
      "The sacrificial system of the temple cannot make sufficient atonement for the sinfulness of mankind (Heb. 10:4)."
    ],
    reflection: "The temple, for all its grandeur, was never the final answer. How does this prophecy direct your eyes to the sufficiency of Christ and his once-for-all sacrifice?"
  },
  {
    id: 2,
    label: "THE QUESTION",
    title: "The Disciples Ask About the End",
    verseRange: "13:3–4",
    color: "#6366f1",
    icon: "fa-solid fa-question-circle",
    image: "/images/mount-of-olives.jpg",
    summary: "On the Mount of Olives, with the Temple in view, Peter, James, John, and Andrew privately ask Jesus when these things will happen and what signs will accompany them.",
    scripture: `<p><span class="verse-num">3</span> And as he sat on the Mount of Olives opposite the temple, Peter and James and John and Andrew asked him privately,</p>
                <p class="mt-4"><span class="verse-num">4</span> “Tell us, when will these things be, and what will be the sign when all these things are about to be accomplished?”</p>`,
    commentary: "The Mount of Olives (Olivet) stands just east of Jerusalem across the Kidron Valley and offers a spectacular view of the Temple Mount. The disciples assume that the destruction of the temple will coincide with the end of time, but Jesus corrects their thinking throughout the discourse.",
    keyTruths: [
      "The disciples assume that the destruction of the temple will coincide with the end of time, but Jesus corrects their thinking.",
      "Jesus’ answer deals primarily with ‘what will be the sign,’ but he also addresses the timing.",
      "Since Jesus predicts these events, believers must not lose heart."
    ],
    reflection: "The disciples wanted a timeline. Jesus gave them something better: a clear word to ground their trust. How does this shape the way you approach uncertainty?"
  },
  {
    id: 3,
    label: "BIRTH PAINS & PERSECUTION",
    title: "Signs, Birth Pains & Faithful Witness",
    verseRange: "13:5–13",
    color: "#fb923c",
    icon: "fa-solid fa-fire",
    image: "/images/persecution-witness.jpg",
    summary: "Jesus warns against being led astray, describes wars, earthquakes, and famines as the beginning of the birth pains, and foretells persecution. Yet the gospel must first be proclaimed to all nations.",
    scripture: `<p><span class="verse-num">5</span> And Jesus began to say to them, “See that no one leads you astray. <span class="verse-num">6</span> Many will come in my name, saying, ‘I am he!’ and they will lead many astray. <span class="verse-num">7</span> And when you hear of wars and rumors of wars, do not be alarmed. This must take place, but the end is not yet. <span class="verse-num">8</span> For nation will rise against nation, and kingdom against kingdom. There will be earthquakes in various places; there will be famines. These are but the beginning of the birth pains.</p>
                <p class="mt-5"><span class="verse-num">9</span> “But be on your guard. For they will deliver you over to councils, and you will be beaten in synagogues, and you will stand before governors and kings for my sake, to bear witness before them. <span class="verse-num">10</span> And the gospel must first be proclaimed to all nations. <span class="verse-num">11</span> And when they bring you to trial and deliver you over, do not be anxious beforehand what you are to say, but say whatever is given you in that hour, for it is not you who speak, but the Holy Spirit. <span class="verse-num">12</span> And brother will deliver brother over to death, and the father his child, and children will rise against parents and have them put to death. <span class="verse-num">13</span> And you will be hated by all for my name’s sake. But the one who endures to the end will be saved.”</p>`,
    commentary: "The metaphor of birth pains describes the increase in frequency and duration of these events. Amid troubles, including devastating family divisions, the disciples are to be worldwide, Spirit-led witnesses before both Jewish and Gentile authorities. The gospel must first be proclaimed to all nations.",
    keyTruths: [
      "These are but the beginning of the birth pains.",
      "The gospel must first be proclaimed to all nations.",
      "It is not you who speak, but the Holy Spirit. The one who endures to the end will be saved."
    ],
    reflection: "Amid birth pains and opposition, the gospel advances and the elect are preserved. How does this reality anchor you in the sufficiency of Christ rather than in favorable circumstances?"
  },
  {
    id: 4,
    label: "THE ABOMINATION",
    title: "The Abomination of Desolation",
    verseRange: "13:14–23",
    color: "#b23b4a",
    icon: "fa-solid fa-exclamation-triangle",
    image: "/images/abomination.jpg",
    summary: "When the abomination of desolation stands where he ought not to be, those in Judea must flee without hesitation. This will be a time of unprecedented tribulation, shortened by God for the sake of the elect.",
    scripture: `<p><span class="verse-num">14</span> “But when you see the abomination of desolation standing where he ought not to be (let the reader understand), then let those who are in Judea flee to the mountains. <span class="verse-num">15</span> Let the one who is on the housetop not go down, nor enter his house, to take anything out, <span class="verse-num">16</span> and let the one who is in the field not turn back to take his cloak. <span class="verse-num">17</span> And alas for women who are pregnant and for those who are nursing infants in those days! <span class="verse-num">18</span> Pray that it may not happen in winter. <span class="verse-num">19</span> For in those days there will be such tribulation as has not been from the beginning of the creation that God created until now, and never will be. <span class="verse-num">20</span> And if the Lord had not cut short the days, no human being would be saved. But for the sake of the elect, whom he chose, he shortened the days.</p>
                <p class="mt-5"><span class="verse-num">21</span> And then if anyone says to you, ‘Look, here is the Christ!’ or ‘Look, there he is!’ do not believe it. <span class="verse-num">22</span> For false christs and false prophets will arise and perform signs and wonders, to lead astray, if possible, the elect. <span class="verse-num">23</span> But be on guard; I have told you all things beforehand.”</p>`,
    commentary: "The abomination of desolation points to the Antichrist’s ultimate desecration of God’s temple. This event was anticipated in the destruction of the temple in A.D. 70. The tribulation will not be confined to Judea and will be on a scale unprecedented since creation. For the sake of the elect, whom he chose, he shortened the days.",
    keyTruths: [
      "The abomination of desolation points to the Antichrist’s ultimate desecration of God’s temple.",
      "For the sake of the elect, whom he chose, he shortened the days.",
      "The elect are not a proud elite but recipients of God’s gracious and undeserved call and protection. God will protect his own."
    ],
    reflection: "God sovereignly cuts short the days for the sake of those he chose in grace. How does this truth about election and preservation move you to rest in Christ rather than in your own vigilance?"
  },
  {
    id: 5,
    label: "THE SON OF MAN",
    title: "The Coming of the Son of Man",
    verseRange: "13:24–27",
    color: "#6366f1",
    icon: "fa-solid fa-cloud-moon",
    image: "/images/son-of-man-coming.jpg",
    summary: "After that tribulation, cosmic signs will appear: the sun darkened, the moon giving no light, stars falling, and the powers of the heavens shaken. Then the Son of Man will come in clouds with great power and glory.",
    scripture: `<p><span class="verse-num">24</span> “But in those days, after that tribulation, the sun will be darkened, and the moon will not give its light, <span class="verse-num">25</span> and the stars will be falling from heaven, and the powers in the heavens will be shaken. <span class="verse-num">26</span> And then they will see the Son of Man coming in clouds with great power and glory. <span class="verse-num">27</span> And then he will send out the angels and gather his elect from the four winds, from the ends of the earth to the ends of heaven.”</p>`,
    commentary: "After that tribulation clearly sets these statements apart. Jesus now describes cosmic events in anticipation of the coming of the enthroned Son of Man. Then they will see the Son of Man coming in clouds with great power and glory. He will send out the angels and gather his elect from the four winds.",
    keyTruths: [
      "After that tribulation, Jesus describes cosmic events in anticipation of the coming of the enthroned Son of Man.",
      "Then they will see the Son of Man coming in clouds with great power and glory.",
      "He will send out the angels and gather his elect from the four winds."
    ],
    reflection: "The return of the glorified Son of Man is the great hope that anchors every warning in this chapter. How does fixing your eyes on the enthroned Christ change the way you endure the present age?"
  },
  {
    id: 6,
    label: "WATCH & STAY AWAKE",
    title: "The Lesson of the Fig Tree & The Call to Vigilance",
    verseRange: "13:28–37",
    color: "#34d3c1",
    icon: "fa-solid fa-clock",
    image: "/images/watchful-servant.jpg",
    summary: "Learn from the fig tree: when its branch becomes tender, you know summer is near. In the same way, when you see these things, know that he is near. No one knows the day or hour — not even the Son — only the Father. Therefore, stay awake.",
    scripture: `<p><span class="verse-num">28</span> “From the fig tree learn its lesson: as soon as its branch becomes tender and puts out its leaves, you know that summer is near. <span class="verse-num">29</span> So also, when you see these things taking place, you know that he is near, at the very gates. <span class="verse-num">30</span> Truly, I say to you, this generation will not pass away until all these things take place. <span class="verse-num">31</span> Heaven and earth will pass away, but my words will not pass away.</p>
                <p class="mt-5"><span class="verse-num">32</span> “But concerning that day or that hour, no one knows, not even the angels in heaven, nor the Son, but only the Father. <span class="verse-num">33</span> Be on guard, keep awake. For you do not know when the time will come. <span class="verse-num">34</span> It is like a man going on a journey, when he leaves home and puts his servants in charge, each with his work, and commands the doorkeeper to stay awake. <span class="verse-num">35</span> Therefore stay awake—for you do not know when the master of the house will come, in the evening, or at midnight, or when the rooster crows, or in the morning— <span class="verse-num">36</span> lest he come suddenly and find you asleep. <span class="verse-num">37</span> And what I say to you I say to all: Stay awake.”</p>`,
    commentary: "Jesus gives this entire discourse so that the disciples will be on guard. The fig tree is not a symbol of Israel here but a simple, familiar illustration. Heaven and earth will pass away, but Jesus’ words will never pass away. The point is perpetual readiness while bearing God-given responsibilities.",
    keyTruths: [
      "Heaven and earth will pass away, but my words will not pass away. Jesus’ words are the revealed Word of God.",
      "No one knows that day or that hour, not even the angels in heaven, nor the Son, but only the Father.",
      "Jesus gives this entire discourse so that the disciples will be on guard. The point is perpetual readiness while bearing God-given responsibilities."
    ],
    reflection: "The final word of the discourse is not a timetable but a command from the Lord: ‘Stay awake.’ How does this word, spoken by the one whose words will never pass away, call you to rest in his finished work and live in gospel-shaped vigilance?"
  }
];