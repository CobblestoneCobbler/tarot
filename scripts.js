function loadCard() {
    //inputs
    let suit = document.getElementById("suitIn").value;
    let number = document.getElementById("numberIn").value;
    //How to handle Pages, page 11, knight 12, queen 13, king 14
    /*need to add:
        null suits, and numbers
        per suit back drops and font styling, number overveiw will be major arcana

    */
    let name = "";
    let titleSuit = "";
    // Joins suit and Number to one, making one variable "name"
    switch(suit){
        case "none":
            //document.getElementById("card").style.backgroundColor = grey;
            name="numbers" + number;
            
            break;
        case "majorArcana":
            //document.getElementById("card").style.backgroundColor = Purple;
            name = "majorArcana" + number;
            titleSuit = "Major Arcana";
            //fool is 0
            break;
        case "wands":
            //document.getElementById("card").style.backgroundColor = red;
            if(number == 0){number = -1};
            name = "wands" + number;
            titleSuit = "Wands";
            break;
        case "cups":
            //document.getElementById("card").style.backgroundColor = Blue;
            if(number == 0){number = -1};
            name = "cups" + number;
            titleSuit = "Cups";
            break;
        case "swords":
            //document.getElementById("card").style.backgroundColor = white;
            if(number == 0){number = -1};
            name = "swords" + number;
            titleSuit = "Swords";
            break;
        case "pentacles":
            //document.getElementById("card").style.backgroundColor = brown;
            if(number == 0){number = -1};
            name = "pentacles" + number;
            titleSuit = "Pentacles";
            break;
        default:
            name = "none";
            break;
    }
    let file = "./assets/imgs/tarotCards/" + name + ".jpg";
    document.getElementById("cardDisplay").alt = name;
    document.getElementById("cardDisplay").src = file;
    
    let numberName = "";
    switch (number){
        case "1":
            numberName = "One";
            break;
        case "2":
            numberName = "Two";
            break;
        case "3":
            numberName = "Three";
            break;
        case "4":
            numberName = "Four";
            break;
        case "5":
            numberName = "Five";
            break;
        case "6":
            numberName = "Six";
            break;
        case "7":
            numberName = "Seven";
            break; 
        case "8":
            numberName = "Eight";
            break;
        case "9":
            numberName = "Nine";
            break;
        case "10":
            numberName = "Ten";
            break;
        case "11":
            numberName = "Page";
            break;
        case "12":
            numberName = "Knight";
            break;
        case "13":
            numberName = "Queen";
            break;
        case "14":
            numberName = "King";
            break;
        default:
            numberName = "noNumber"
            break;
    }
    
    let title = "";
    let source = "";
    //Per Card setup, can be split, major arcana, then minor arcana (has concatenate titles available instead of a string per)
    switch (name){
        case "majorArcana-1":
            title = "The Major Arcana";
            document.getElementById("cardDetails").innerHTML = loadMakeup(suit);
            source ="Biddy";
            break;
        case "majorArcana0":
            title = "The Fool";
            document.getElementById("cardDetails").innerHTML =
                `The Fool is numbered 0 – the number of unlimited potential – and so does not have a specific place in the sequence of the Tarot cards. The Fool can be placed either at the beginning of the Major Arcana or at the end. The Major Arcana is often considered The Fool’s journey through life and as such, he is ever present and therefore needs no number.
                
                On The Fool Tarot card, a young man stands on the edge of a cliff, without a care in the world, as he sets out on a new adventure. He is gazing upwards toward the sky (and the Universe) and is seemingly unaware that he is about to skip off a precipice into the unknown. Over his shoulder rests a modest knapsack containing everything he needs – which isn’t much (let’s say he’s a minimalist). The white rose in his left hand represents his purity and innocence. And at his feet is a small white dog, representing loyalty and protection, that encourages him to charge forward and learn the lessons he came to learn. The mountains behind The Fool symbolize the challenges yet to come. They are forever present, but The Fool doesn’t care about them right now; he’s more focused on starting his expedition.`;
            source ="Biddy";
            break;
        case "majorArcana1":
            title = "The Magician";
            document.getElementById("cardDetails").innerHTML = 
                `The Magician card is numbered One – the number of new beginnings and opportunities – and associates with the planet of Mercury. He stands with one arm stretched upwards towards the Universe, and the other pointing down to the earth. His positioning represents his connection between the spiritual realms and the material realms. The Magician uses this relationship to create and manifest his goals in the physical realm. He is the conduit that converts energy into matter. The Magician’s robe is white, symbolising purity, and his cloak is red, representing worldly experience and knowledge.
                
                On the table in front of him are the four symbols of the Tarot suits – a cup, pentacle, sword and wand – each symbolising one of the four elements – water, earth, air and fire. It is also a sign that he has all the tools (and elements) he needs to manifest his intentions into being. Above his head is the infinity symbol, and around his waist is a snake biting its own tail – both of which signal that he has access to unlimited potential. And in the foreground is an array of foliage and flowers, symbolising the blossoming and fruition of his ideas and aspirations.`;
            source = "Biddy";
            break;
        case "majorArcana2":
            title = "The High Priestess";

            document.getElementById("cardDetails").innerHTML = 
                `The High Priestess sits in front of a thin veil decorated with pomegranates. The veil represents the separate conscious and subconscious realms, the seen and the unseen, and serves to keep casual onlookers out. Only the initiated may enter. The pomegranates on the veil are a symbol of abundance, fertility and the divine feminine, and are sacred to Persephone who ate a pomegranate seed in the underworld and was forced to return every year.

                On either side of The High Priestess stand two pillars, marking the entrance to this sacred, mystical temple (also associated with the Temple of Solomon). One pillar is black with the letter B (Boaz, meaning ‘in his strength’) and the other is white with the letter J (Jachin, meaning ‘he will establish’). The black and white colors of the pillars symbolize duality – masculine and feminine, darkness and light – stating that knowledge and acceptance of duality are required to enter this sacred space.

                The High Priestess wears a blue robe with a cross on her chest and a horned diadem (or crown), both a symbol of her divine knowledge and her status as a divine ruler. In her lap, she holds a scroll with the letter TORA, signifying the Greater Law (according to A. E. Waite). It is partly covered, signifying that this sacred knowledge is both explicit and implicit, it will only be revealed when the student is ready to look beyond the material realm. The crescent moon at her feet symbolizes her connection with the divine feminine, her intuition and subconscious mind, and the natural cycles of the moon.`;
            source = "Biddy";
            break;
        case "majorArcana3":
            title = "The Empress";
            document.getElementById("cardDetails").innerHTML = 
                `The Empress is a beautiful, full-figured woman with blonde hair and a peaceful aura about her. On her head, she wears a crown of twelve stars, showing her connection with the mystical realm and the cycles of the natural world (the twelve months of the year and the twelve planets). Her robe is patterned with pomegranates, symbolic of fertility, and sits upon a luxurious array of cushions and flowing red velvet. One cushion features the symbol of Venus, the planet of love, creativity, fertility, beauty and grace – the essence of The Empress.

                A beautiful, lush forest and winding stream surround The Empress, signifying her connection with Mother Earth and life itself. She draws her sense of peace from the trees and the water and is rejuvenated by the energy of nature. In the foreground, golden wheat springs from the soil, reflecting abundance from a recent harvest.`;
            source ="Biddy";
            break;
        case "majorArcana4":
            title = "The Emperor";
            document.getElementById("cardDetails").innerHTML = 
                `If The Empress is the Mother archetype of the Tarot deck, The Emperor is the Father. He sits upon a large stone throne, adorned with four rams’ heads (symbolic of his connection with Aries and the planet Mars). In his right hand, The Emperor holds an ankh, the Egyptian symbol of life, and in his left is an orb representing the world over which he rules.

                He wears a red robe, indicative of his power, passion, and energy for life. Underneath it, he wears a suit of armor, suggesting that he is protected from any threat (and any emotional response or vulnerability). His long white beard is symbolic of his age-old wisdom and experience, and along with his gold crown, he is an authority figure who demands to be heard.

                Behind his throne looms a tall, impenetrable mountain range, signifying that he is backed by a solid foundation but resistant to making any changes unless he deems it necessary. Beneath the peaks flows a small river, giving some hope that despite his tough exterior, he is still an emotional being – it will just take a lot of digging and trust to open him up to his softer side.`;
            source = "Biddy";
            break;
        case "majorArcana5":
            title = "The Hierophant";

            document.getElementById("cardDetails").innerHTML = 
                `The Hierophant is the masculine counterpart to The High Priestess. He is also known as the Pope or the Teacher in other Tarot decks and is ruled by Taurus.

                The Hierophant is a religious figure sitting between two pillars of a sacred temple – though this temple differs from the one in which the High Priestess sits. He wears three robes – red, blue and white – and a three-tiered crown, both representing the three worlds over which he rules (the conscious, sub-conscious and super-conscious). In his left hand, he holds the Papal Cross, a triple sceptre that signifies his religious status. He raises his right hand in a religious blessing, with two fingers pointing towards Heaven and two towards Earth.

                Before him kneel two followers. The Hierophant’s task is to pass down his spiritual wisdom and initiate the two into the church so they can take up their appointed roles. This imagery speaks to a shared group identity and a rite of passage to enter the next level. The crossed keys at The Hierophant’s feet represent the balance between the conscious and subconscious minds and the unlocking of mysteries, which only he can teach.`;
            source = "Biddy";
            break;
        case "majorArcana6":
            title = "The Lovers";
            document.getElementById("cardDetails").innerHTML = 
                `The Lovers card shows a naked man and woman standing beneath the angel, Raphael, whose name means ‘God heals’ and represents both physical and emotional healing. The angel blesses the man and woman and reminds them of their union with the Divine.

                The couple stands in a beautiful, fertile landscape, reminiscent of the Garden of Eden. Behind the woman stands a tall apple tree, with a snake winding its way up the trunk. The serpent and apple tree represent the temptation of sensual pleasures that may take one’s focus away from the Divine. Behind the man is a tree of flames, which represent passion, the primary concern of the man. The twelve flames suggest the twelve zodiac signs, the symbol of time and eternity. The man looks to the woman, who watches the angel, showing the path of the conscious to the subconscious to the super-conscious, or from physical desire to emotional needs to spiritual concerns.

                The volcanic mountain in the background is rather phallic and represents the eruption of passion that happens when man and woman meet in full frontal nudity.`;
            source = "Biddy";
            break;
        case "majorArcana7":
            title = "The Chariot";
            document.getElementById("cardDetails").innerHTML = 
                `The Chariot Tarot card shows a brave warrior standing inside a chariot. He wears armor decorated with crescent moons (representing what is coming into being), a tunic with a square (the strength of will) and other alchemical symbols (spiritual transformation). The laurel and star crown signals victory, success and spiritual evolution. Although he appears to be driving the chariot, the charioteer holds no reins – just a wand like The Magician’s – symbolizing that he controls through the strength of his will and mind.

                The charioteer stands tall – there’s no sitting down for this guy, as he’s all about taking action and moving forward. Above his head is a canopy of six-pointed stars, suggesting his connection to the celestial world and the Divine will. In front of the vehicle sit a black and a white sphinx, representing duality, positive and negative and, at times, opposing forces. Note how the sphinxes are pulling in opposite directions, but the charioteer uses his willpower and sheer resolve to steer the chariot forward in the direction he wants.

                Behind the chariot flows a wide river, symbolic of the need to be ‘in flow’ with the rhythm of life while also charging ahead toward your goals and intentions.`;
            source = "Biddy";
            break;
        case "majorArcana8":
            title = "Strength";
            document.getElementById("cardDetails").innerHTML = 
                `In the Strength Tarot card, a woman gently strokes a lion on its forehead and jaw. Even though it is known for its ferociousness, the woman has tamed this wild beast with her calming, loving energy. The lion is a symbol of raw passions and desires, and in taming him, the woman shows that animal instinct and raw passion can be expressed in positive ways when inner strength and resilience are applied. She doesn’t use force or coercion; she channels her inner strength to subdue and subtly control the lion.

                The woman wears a white robe, showing her purity of spirit, and a belt and crown of flowers that represent the fullest, most beautiful expression of nature. Over her head is the symbol of infinity, representing her infinite potential and wisdom.`;
            source = "Biddy";
            break;
        case "majorArcana9":
            title = "The Hermit";
            document.getElementById("cardDetails").innerHTML = 
                `The Hermit stands alone on the top of a mountain. The snow-capped range symbolizes his spiritual mastery, growth, and accomplishment. He has chosen this path of self-discovery and, as a result, has reached a heightened state of awareness.

                In his right hand, he holds a lantern with a six-pointed star inside; it is the Seal of Solomon, a symbol of wisdom. As The Hermit walks his path, the lamp lights his way – but it only illuminates his next few steps rather than the full journey. He must step forward to see where to go next, knowing that not everything will be revealed at once. In his left hand, the side of the subconscious mind, The Hermit holds a long staff (a sign of his power and authority), which he uses to guide and balance him.`;
            source = "Biddy";
            break;
        case "majorArcana10":
            title = "Wheel of Fortune";
            document.getElementById("cardDetails").innerHTML = 
                `The Wheel of Fortune card shows a giant wheel, with three figures on the outer edges. Four Hebrew letters – YHVH (Yod Heh Vau Heh), the unpronounceable name of God – are inscribed on the wheel’s face. There are also the letters TORA, thought to be a version of the word Torah, meaning ‘law’, or TAROT, or even ROTA (Latin for ‘wheel’). The middle wheel has the alchemical symbols for mercury, sulphur, water and salt – the building blocks of life and the four elements – and represents formative power.

                On the outer circle is a snake, the Egyptian god Typhon (the god of evil), descending on the left side. The snake also represents the life force plunging into the material world. On the right side rises the Anubis, the Egyptian God of the dead who welcomes souls to the underworld. And on top of the wheel sits the Sphinx, representing knowledge and strength.

                In the corners of the Wheel of Fortune card are four winged creatures, each associated with the four fixed signs of the Zodiac: the angel is Aquarius, the eagle is Scorpio, the lion is Leo, and the bull is Taurus. Their wings signify stability amidst movement and change, and each holds the Torah, representing wisdom.`;
            source = "Biddy";
            break;
        case "majorArcana11":
            title = "Justice";
            document.getElementById("cardDetails").innerHTML = 
                `The figure of Justice sits in front of a loosely hung purple veil, signifying compassion, and between two pillars, similar to those framing The High Priestess and The Hierophant, which symbolize balance, law and structure.

                She holds a sword in her right hand, showing the logical, well-ordered mindset necessary to dispense fair justice. The sword points upwards – expressing a firm and final decision – and the double-edged blade signifies that our actions always carry consequences. The scales in her left (intuitive) hand, show intuition must balance that logic and are a symbol of her impartiality. Justice wears a crown with a small square on it representing well-ordered thoughts, and a red robe with a green mantle. A little white shoe pops out from beneath her clothing as a reminder of the spiritual consequences of your actions.`;
            source = "Biddy";
            break;
        case "majorArcana12":
            title = "The Hanged Man";
            document.getElementById("cardDetails").innerHTML = 
                `The Hanged Man shows a man suspended from a T-shaped cross made of living wood. He is hanging upside-down, viewing the world from a completely different perspective, and his facial expression is calm and serene, suggesting that he is in this hanging position by his own choice. He has a halo around his head, symbolizing new insight, awareness and enlightenment. His right foot is bound to the tree, but his left foot remains free, bent at the knee and tucked in behind his right leg. His arms are bent, with hands held behind his back, forming an inverted triangle. The man is wearing red pants representing human passion and the physical body, and a blue vest for knowledge. The Hanged Man is the card of ultimate surrender, of being suspended in time and of martyrdom and sacrifice to the greater good.`;
            source = "Biddy";
            break;
        case "majorArcana13":
            title = "The Death";
            document.getElementById("cardDetails").innerHTML = 
                `The Death card shows the Messenger of Death – a skeleton dressed in black armor, riding a white horse. The skeleton represents the part of the body which survives long after life has left it; the armor symbolizes invincibility and that death will come no matter what. Its dark color is that of mourning and the mysterious, while the horse is the color of purity and acts as a symbol of strength and power. Death carries a black flag decorated with a white, five-petal rose, reflecting beauty, purification, and immortality and the number five representing change. Together, these symbols reveal that death isn’t just about life ending. Death is about endings and beginnings, birth and rebirth, change and transformation. There is beauty in death, and it is an inherent part of being alive.

                A royal figure appears to be dead on the ground, while a young woman, child and bishop plead with the skeletal figure to spare them. But, as we all know, death spares no one.

                In the background, a boat floats down the river, akin to the mythological boats escorting the dead to the afterlife. On the horizon, the sun sets between two towers (which also appear in The Moon Tarot card), in a sense dying each night and being reborn every morning.`;
            source = "Biddy";
            break;
        case "majorArcana14":
            title = "Temperance";
            document.getElementById("cardDetails").innerHTML = 
                `The Temperance card shows a large, winged angel who is both masculine and feminine. She wears a light blue robe with a triangle enclosed in a square on the front, representing that humans (the triangle) are bound by the Earth and natural law (square). The angel balances between one foot on the rocks, expressing the need to stay grounded, and one foot in the water, showing the need to be in flow. She pours water between two cups, symbolic of the flow and alchemy of life.

                In the background, there is a winding path up to a mountain range, reflecting the journey through life. Above the mountains hovers a golden crown encased in a glowing light, a symbol of taking the Higher path and staying true to one’s life purpose and meaning.`;
            source = "Biddy";
            break;
        case "majorArcana15":
            title = "The Devil";
            document.getElementById("cardDetails").innerHTML = 
                `The Devil card shows Baphomet, or the Horned Goat of Mendes, a creature that is half man, half goat. Baphomet originally represented the balance between good and evil, male and female, and human and animal; however, more recently, this figure has been linked to the occult and has become a scapegoat for all things considered ‘evil’.

                The Devil has the wings of a vampire bat, an animal that sucks the lifeblood out of its prey, symbolic of what happens when you give in to your raw desires. He has a hypnotic stare which ‘magnetizes’ and entrances those who come near him, bringing them under his power. Above him is an inverted pentagram – a sign of the darker side of magic and occultism. He raises his right hand in the Vulcan Salute – a Jewish blessing, later made famous by the film series, Star Trek. In his left hand, he holds a lit torch.

                At the foot of The Devil stand a man and a woman, both naked and chained to the podium on which The Devil sits. They appear to be held here against their will – but look closer, and you will notice that the chains around their necks are loose and could be easily removed. Each has small horns on their head, like the devil’s, a sign that they are becoming increasingly like him the longer they stay here. Both have tails, a further symbol of their animalistic tendencies and raw instincts, and the grapes and the fire on their respective tails signify pleasure and lust.`;
            source = "Biddy";
            break;
        case "majorArcana16":
            title = "The Tower";
            document.getElementById("cardDetails").innerHTML = 
                `The Tower shows a tall tower perched on the top of a rocky mountain. Lightning strikes set the building alight, and two people leap from the windows, head first and arms outstretched. It is a scene of chaos and destruction.

                The Tower itself is a solid structure, but because it has been built on shaky foundations, it only takes one bolt of lightning to bring it down. It represents ambitions and goals made on false premises.

                The lightning represents a sudden surge of energy and insight that leads to a break-through or revelation. It enters via the top of the building and knocks off the crown, symbolizing energy flowing down from the Universe, through the crown chakra. The people are desperate to escape from the burning building, not knowing what awaits them as they fall. Around them are 22 flames, representing the 12 signs of the zodiac and 10 points of the Tree of Life, suggesting that even in times of disaster, there is always divine intervention.`;
            source = "Biddy";
            break;
        case "majorArcana17":
            title = "The Star";
            document.getElementById("cardDetails").innerHTML = 
                `The Star card shows a naked woman kneeling at the edge of a small pool. She holds two containers of water: one in her left hand (the subconscious) and one in her right (the conscious). She pours the water out to nourish the earth and to continue the cycle of fertility, represented by the lush greenery around her. The other container pours the water onto dry land in five rivulets, representing the five senses.

                The woman has one foot on the ground, representing her practical abilities and good common sense, and the other foot in the water, representing her intuition and inner resources and listening to her inner voice. She is naked, representing her vulnerability and purity under the vastness of the starry night sky. Behind her shines one large star, representing her core essences, and seven smaller stars, representing the chakras.`;
            source = "Biddy";
            break;
        case "majorArcana18":
            title = "The Moon";
            document.getElementById("cardDetails").innerHTML = 
                `The Moon card shows a full moon in the night’s sky, positioned between two large towers. The Moon is a symbol of intuition, dreams, and the unconscious. Its light is dim compared to the sun, and only slightly illuminates the path to higher consciousness winding between the two towers.

                In the foreground is a small pool, representing the watery, subconscious mind. A small crayfish crawls out of the pool, symbolizing the early stages of consciousness unfolding. A dog and a wolf stand in the grassy field, howling at the moon, representing both the tamed and the wild aspects of our minds.`;
            source = "Biddy";
            break;
        case "majorArcana19":
            title = "The Sun";
            document.getElementById("cardDetails").innerHTML = 
                `The Sun Tarot card radiates with optimism and positivity. A large, bright sun shines in the sky, representing the source of all life on Earth. Underneath, four sunflowers grow tall above a brick wall, representing the four suits of the Minor Arcana and the four elements.

                In the foreground, a young, naked child is sitting on top of a calm white horse. The child represents the joy of being connected with your inner spirit, and his nakedness is a sign he has nothing to hide and has all the innocence and purity of childhood. The white horse is also a sign of purity and strength.`;
            source = "Biddy";
            break;
        case "majorArcana20":
            title = "Judgement";
            document.getElementById("cardDetails").innerHTML = 
                `The Judgement card shows naked men, women, and children rising from their graves, arms outspread and looking up into the sky. Above, Archangel Gabriel – the Messenger of God – blows his trumpet. The people respond to his call, ready to be judged and to find out if they will be accepted into the heavens or not. In the background is an extensive mountain range, signifying the insurmountable obstacles and the impossibility of avoiding judgement.`;
            source = "Biddy";
            break;
        case "majorArcana21":
            title = "The World";
            document.getElementById("cardDetails").innerHTML = 
                `The World card shows a naked woman wrapped in a purple cloth, dancing inside a large laurel wreath. She looks behind her to the past, while her body moves forward to the future. In her hands are two wands or batons, like the one The Magician holds. It is a symbol that what was manifested with The Magician has now come to completion with The World. The wreath is circular, symbolizing a continual cycle of successful completion and new beginnings because, as the woman steps through the wreath, she is completing one phase but beginning another one almost straight away.

                Around the wreath are four figures (a lion, bull, cherub and eagle), similar to those in the Wheel of Fortune. Both The World and the Wheel of Fortune speak to the cyclical nature of your life and your progression through its cycles. The four figures represent the four fixed signs of the Zodiac—Leo, Taurus, Aquarius, and Scorpio. They are symbolic of the four elements, the four suits of Tarot, four compass points, four seasons, and the four corners of the Universe. They are here to guide you from one phase to the next, bringing balance and harmony to your journey.`;
            source = "Biddy";
            break;
        case "wands-1":
            title = "Suit of Wands";
            document.getElementById("cardDetails").innerHTML = loadMakeup(suit);
            source = "Biddy";
            break;
        case "wands1":
            title = "Ace of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `In the Ace of Wands, a hand holding a sprouting wand extends out from a cloud, as if to offer a new opportunity or idea with the potential to grow. The rich, verdant landscape is further confirmation of this growth capability. In the distance on the left sits a castle, representing the promise of opportunities to come, and hills and mountains line the horizon. Their rolling peaks remind us that there will always be challenges along the way, but they are surmountable with enough effort.`;
            source = "Biddy";
            break;
        case "wands2":
            title = "Two of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `The Two of Wands shows a man, dressed in a red robe and hat, holding a small globe. The world is literally in his hands, marking the enormous potential before him if he can expand his horizons accordingly. He stands within the confines of his castle, suggesting that while he is contemplating significant opportunities, the man has not yet left his comfort zone to pursue them; he is still very much in the planning phase. His hand rests on an upright wand, and a second wand is affixed to the castle’s wall, a further sign that he is still not ready to venture out. In the background, the land is fertile while also rocky, promising that he has a good chance for success, so long as he can overcome the challenges that will arise.`;
            source = "Biddy";
            break;
        case "wands3":
            title = "Three of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `The Three of Wands depicts a man in red and green robes standing on a cliff with his back turned. Three wands stand firmly planted in the ground, reflecting his commitment to his plans. He has left the comfort of the castle in the Two of Wands and is now in a vast open space, looking out over the sea to distant mountains. He watches three sailing ships pass by, symbolic of movement and progression. From his high vantage point, he can see all that lies ahead, including any upcoming challenges and opportunities.`;
            source = "Biddy";
            break;
        case "wands4":
            title = "Four of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `The Four of Wands shows two happy people dancing and celebrating with flowers in their hands. In the foreground, a beautiful wreath abounding with blossoms and grapes suspends between wands. Together, these elements represent the joy and satisfaction that comes with achieving an important goal or milestone. In the background, another group of people (perhaps a family) stand in front of a large castle, representing the safety and comfort of the home.`;
            source = "Biddy";
            break;
        case "wands5":
            title = "Five of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `In the Five of Wands, five men appear to be fighting each other, using their wands as weapons. However, on closer observation, their wands are raised but not striking or injuring anyone. It is as if there is no real purpose or outcome in this chaotic scene other than to create conflict and sow discord amongst the group. Each man wears a different outfit, symbolising their diverse backgrounds and belief systems, and suggesting that, because of their differences, they cannot find harmony and common ground with one another.`;
            source = "Biddy";
            break;
        case "wands6":
            title = "Six of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `The Six of Wands depicts a man wearing a victory wreath around his head and riding a decorated white horse through a crowd of cheering people. His horse represents strength, purity and the successful progression of an adventure, and the group of people marks the public recognition for the man’s achievements. The rider holds an upright wand with a wreath tied to the top, further emphasising success and achievement. He is not afraid to show off to others what he has accomplished in his life so far and, even better, the surrounding crowd is delighted to cheer him along.`;
            source = "Biddy";
            break;
        case "wands7":
            title = "Seven of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `The Seven of Wands depicts a man on top of a hill, armed with a wand in each hand and fighting off six more wands drawing up from below. He seems to be defending his territory and his successes. Interestingly, the man is wearing two different shoes, suggesting that he may have been caught unaware or unprepared for battle, or he may be unclear of his own stance and opinion.`;
            source = "Biddy";
            break;
        case "wands8":
            title = "Eight of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `The Eight of Wands shows eight sprouting wands sailing through the air at high speed. Their flight suggests change, movement and travel. The sky is clear and the beautiful river is flowing freely and giving life to the surrounding landscape.`;
            source = "Biddy";
            break;
        case "wands9":
            title = "Nine of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `The Nine of Wands shows an injured man, clutching a wand. He looks over his shoulder towards the eight wands that loom over him. He seems weary and worn, as though he has already been through a battle and now must face additional challenges with the presence of these eight wands. As a Nine, though, this is his final challenge before reaching his goal; he must endure this last test of his strength and character before reaching the finish line.`;
            source = "Biddy";
            break;
        case "wands10":
            title = "Ten of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `The Ten of Wands shows a man carrying a large bundle of sticks towards a small town only a short distance away. His back is bent and he appears to be weighed down by the heavy load he is carrying, but he knows he is almost at his destination and will soon be able to release the heavy weight he is bearing.`;
            source = "Biddy";
            break;
        case "wands11":
            title = "Page of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `The Page of Wands shows a young man holding a long staff in both hands as he looks inquisitively at the green leaves sprouting from the top. His tunic is emblazoned with salamanders, a mythical creature associated with fire and transformation. The Page stands still, with his staff firmly planted on the ground, suggesting that while he is inspired by the potential growth represented by the sprouting staff, he has not yet taken action on this inspiration.

                In the background, the landscape is barren and mountainous, implying that this Page has the gift of being able to find growth and potential in the most unlikely places. He is so energised by his ideas that he can make anything happen and isn’t limited by his circumstances.`;
            source = "Biddy";
            break;
        case "wands12":
            title = "Knight of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `The Knight of Wands sits on his horse in full armour, wearing a yellow robe decorated with salamanders (associated with the element of fire), and a helmet with fiery red plumes flowing behind him. He holds a sprouting wand in his right hand, which symbolises his energy and enthusiasm for his mission. His horse rises up on its hind legs, poised and ready for action. Like all the Wands Court Cards, the background is hot, dry and barren, with mountains soaring in the distance.`;
            source = "Biddy";
            break;
        case "wands13":
            title = "Queen of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `The Queen of Wands sits upon a throne decorated with lions facing opposing directions, a symbol of fire and strength. In her left hand, on her crown and behind her are sunflowers, symbolising life, fertility, joy and satisfaction, and her right hand holds a wand with one small sprout springing to life. A black cat sits at her feet, a sign that while this Queen is bold and outgoing she is also in touch with her shadow self – the darker, lesser-known side of her being.`;
            source = "Biddy";
            break;
        case "wands14":
            title = "King of Wands";
            document.getElementById("cardDetails").innerHTML = 
                `The King of Wands sits on his throne, holding a blossoming wand in his hand, a symbol of life and creativity. His throne and cape are decorated with lions and salamanders, both symbols of fire and strength. The salamanders biting their own tails represent infinity and the ongoing drive to move forward against all obstacles.`;
            source = "Biddy";
            break;
        case "cups-1":
            title = "Suit of Cups";
            document.getElementById("cardDetails").innerHTML = loadMakeup(suit);
            source = "Biddy";
            break;
        case "cups1":
            title = "Ace of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `The Ace of Cups shows a chalice overflowing with five streams of water. The cup represents the vessel of your subconscious mind; the five streams are your five senses and the abundant emotion and intuition flowing from within you. The hand holding the cup is sliding out of the clouds, a symbol of your awareness of spiritual energy and influence. Below the hand is a vast sea covered with lotus blossoms, signifying the awakening of the human spirit. A dove descends towards the cup – a symbol of Divine love flowing through the subconscious mind to conscious awareness.`;
            source = "Biddy";
            break;
        case "cups2":
            title = "Two of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `The Two of Cups shows a young man and woman, exchanging cups and pledging their love for one another. Above them floats the Caduceus of Hermes – a winged staff with two snakes wrapped around it – the ancient symbol of commerce, trade, and exchange. At the top of the caduceus is a lion’s head, signifying passion and fire energy and suggesting that there may be a lot of fiery, sexual energy between these two people.`;
            source = "Biddy";
            break;
        case "cups3":
            title = "Three of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `In the Three of Cups, three young women are dancing with each other in a circle, raising their cups high in the air in a toast of joy and celebration. They look to one another with appreciation, honour and respect, and are bound by their emotional connection and friendship. There is a sense of lifting each other up and celebrating each woman’s unique contribution to the group. The ground is layered with flowers, fruit and a pumpkin, symbolising the celebration of an abundant harvest and the goodness in life.`;
            source = "Biddy";
            break;
        case "cups4":
            title = "Four of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `The Four of Cups shows a young man sitting under a tree with his arms crossed, deep in contemplation and meditation. He is so engrossed in his thoughts that he does not seem to notice the outstretched arm offering him a cup. A further three cups stand at his feet, but again, he doesn’t seem to notice or care about these new opportunities either.`;
            source = "Biddy";
            break;
        case "cups5":
            title = "Five of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `The Five of Cups shows a man in a long black cloak looking down on three cups that have been knocked over – symbolic of his disappointments and failures. Behind him stand two cups representing new opportunities and potential, but because he is so fixed on his losses (the over-turned cups), he misses the opportunities available to him.

                In the background, a bridge crosses a large, flowing river and leads to the security of the castle or home on the opposite side of the riverbank – if only he can move on from the over-turned cups. The bridge is a message to 'find a way through'.`;
            source = "Biddy";
            break;
        case "cups6":
            title = "Six of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `In the Six of Cups, a young boy leans down and passes a cup filled with flowers to a younger girl. The girl looks up to the boy with love and respect as he offers the flowers to her. Love, harmony and co-operation – all key elements of the Six of Cups – shine through this gentle act. The young children also represent childhood memories

                In the background, an older man walks away in the distance, as if to say you no longer need to worry about adult issues; just enjoy the moment of being young, innocent and free again. The children also appear to be standing in the courtyard of a large home, symbolising comfort, safety and security. In the foreground stand four more cups filled with flowers, and a fifth cup sits on a pedestal behind the boy.`;
            source = "Biddy";
            break;
        case "cups7":
            title = "Seven of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `In the Seven of Cups, a man stands before seven cups filled with various gifts. Some cups bear desirable gifts such as jewels and a wreath of victory. But others hold gifts that are not gifts at all; instead, they are curses, such as the snake or dragon. The clouds and the cups symbolise the man’s wishes and dreams, and the different gifts inside suggest that you need to be careful what you wish for as not everything is as it seems. Choices need to be made, but in doing so, you must go beyond illusion and allure, and instead focus on what’s right for you.`;
            source = "Biddy";
            break;
        case "cups8":
            title = "Eight of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `In the Eight of Cups, a man walks away from the eight cups standing in the foreground. The cups are arranged in such a way that it looks like one is missing, a sign that emotional fulfilment and wholeness is lacking. The man has turned his back on these cups with a sense of loss and disappointment and shuffles away into the mountains. A nearby river symbolises his emotions, and the mountains represent the awareness that this will not be an easy journey (though it will be necessary for true long-term happiness). The moon in the night’s sky illuminates the path ahead – the man is leaving in the dead of night hoping to go unnoticed, suggesting that there may be a level of escape or avoidance in this card.`;
            source = "Biddy";
            break;
        case "cups9":
            title = "Nine of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `In the Nine of Cups, a man sits on a wooden bench. He is comfortable, but not too comfortable (you wouldn’t want to sit on that wooden bench all day!). His arms are crossed, and he has a smile on his face, expressing contentment and satisfaction. Behind him is a curved structure draped in blue material, with nine golden cups arranged in an arch. The cups represent emotional fulfilment after you carry out your deepest desires.`;
            source = "Biddy";
            break;
        case "cups10":
            title = "Ten of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `On the Ten of Cups, a loving couple stands together, arms outstretched, as their two children play nearby. They look towards their home on the hill and a beautiful rainbow in the sky filled with ten cups. These two have true, everlasting love and have everything they could ever wish for – the home, the kids, and most importantly, fulfilling love – and they share this bond with the people around them.`;
            source = "Biddy";
            break;
        case "cups11":
            title = "Page of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `The Page of Cups wears a blue tunic with a floral print and a beret on his head with a long, flowing scarf. He stands on the shore, with the wavy sea behind him, holding a cup in his right hand. Surprisingly, a fish pops its head out of the cup and looks at the young man. The fish and the sea behind him represent the element of water and all things to do with creativity, intuition, feelings and emotions. The unexpected appearance of the fish signifies that creative inspiration often comes out of the blue and only when you are open to it.`;
            source = "Biddy";
            break;
        case "cups12":
            title = "Knight of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `In the Knight of Cups, a knight rides on a white horse and holds out a golden cup as if he bears a message from the heart. Over his armour, the knight wears a cloak covered with images of fish, the symbol of water, consciousness and creativity. His helmet and boots are winged, a symbol of an active and creative imagination and an appreciation for beautiful things.

                Unlike the Knight of Wands or the Knight of Swords, the horse in the Knight of Cups is not charging forward but instead moves slowly and gracefully, giving an air of calmness and peace. The horse represents power, energy and drive and the colour white is a symbol of purity, spirituality and light.

                The background is mostly barren, except for some trees far away and the river that flows through, symbolising the power of the emotions and imagination to create a new life force, even where it may seem that there is none.`;
            source = "Biddy";
            break;
        case "cups13":
            title = "Queen of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `The Queen of Cups is a beautiful, introspective woman who sits on a throne at the edge of the sea. In her hands, she holds a golden, cup adorned with handles shaped like angels. Unlike most of the cups in the Suit of Cups cards, this cup is closed – showing that the Queen’s thoughts and feelings come from her subconscious mind and the depths of her soul.

                She sits upon a stone throne decorated with images of sea-nymphs, fish, and scallop shells. The sea and fish are symbols of the unconscious mind, and water represents emotion, spirit and perception. A cloudless, bright-blue sky and placid water of the sea surround her. Her feet do not touch the water; they rest on colourful pebbles on the shore. It is as if she is connected to her emotions (as represented by the water), but not overwhelmed by them.`;
            source = "Biddy";
            break;
        case "cups14":
            title = "King of Cups";
            document.getElementById("cardDetails").innerHTML = 
                `The King of Cups sits on a large stone throne and wears a blue tunic and a gold cape – a symbol of his authority and status. A small fish amulet hangs around his neck symbolising his creativity. In his right hand, he holds a cup representing the emotions, and his left has a sceptre, showing power and control. Unlike the other Cups court cards, he doesn’t look at his cup and seems to be focused elsewhere; perhaps he has already mastered his emotional self and doesn’t need to concentrate as hard on this facet of himself.

                The King of Cups appears to be floating on a granite block in the middle of a turbulent sea. Behind him on his right, a fish jumps out of the ocean, while on the left, a ship sails steadily despite the waves. These images show that this King stays calm and balanced, even in turbulent conditions, and has learned how to stay open to his emotions and unconscious impulses, without being overwhelmed by them. He keeps power and control while balancing his feelings.`;
            source = "Biddy";
            break;
        case "swords-1":
            title = "Suit of Swords";
            document.getElementById("cardDetails").innerHTML = loadMakeup(suit);
            source = "Biddy";
            break;
        case "swords1":
            title = "Ace of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `The Ace of Swords shows a gleaming hand appearing from a white cloud, a representation of the Divine. It holds an upright sword, symbolic of the mind and the intellect, and at the tip of the sword sits a crown draped with a wreath, a sign of success and victory. While this Ace is a sign of triumph, the jagged mountains in the background suggest that the road ahead will be challenging. You will need mental resilience to navigate this path.`;
            source = "Biddy";
            break;
        case "swords2":
            title = "Two of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `The Two of Swords shows a blindfolded woman, dressed in a white robe, holding two crossed swords. The blindfold over her eyes tell us that the woman is confused about her plight and that she can see neither the problem nor the solution clearly. She may also be missing relevant information that would make her decision much clearer if she were to obtain it. The swords she holds are in perfect balance, suggesting that she is weighing her thoughts and addressing both sides of the situation to find the best resolution.

                Behind the woman is a body of water dotted with rocky islands. The water represents the emotions and, while the Suit of Swords traditionally associates with the mind and intellect, its presence shows that the woman must use both her head and her heart to weigh her options. The islands represent obstacles in her path and suggest that her decision is not as clear-cut as it seems. She will have to consider the situation as a whole. The crescent moon to her right is a sign that this woman needs to trust her intuition as she makes her choice.`;
            source = "Biddy";
            break;
        case "swords3":
            title = "Three of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `The Three of Swords shows a heart pierced by three swords, representing the pain inflicted by words, actions and intent on the emotional and physical self. The dark clouds gathering in the background mirror this pain but offer the hope that, just as the storm clouds will disappear, so too will the pain and hurt you are experiencing.`;
            source = "Biddy";
            break;
        case "swords4":
            title = "Four of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `The Four of Swords shows a knight lying horizontally on a tomb. He remains in his full armour, and his hands are in the position of prayer as a sign of rest. One sword lies beneath the knight, symbolising a single point of focus, and three swords hang above him, pointing downwards towards his head and torso. The stained-glass window above him shows a woman and child together.`;
            source = "Biddy";
            break;
        case "swords5":
            title = "Five of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `In the Five of Swords, a sly-looking man picks up three swords from the ground. He glances over his shoulder at two men who are walking away with their shoulders slouched, conveying a sense of sadness and loss. Two more swords are strewn across the grass, suggesting a battle has been fought and lost. The sky is cloudy and tumultuous, a sign that not all is well even though the fighting has stopped.`;
            source = "Biddy";
            break;
        case "swords6":
            title = "Six of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `The Six of Swords shows a woman and a young child being rowed across a body of water towards a nearby land. Her head is covered, suggesting sadness or loss as she moves away from something in her past. Her child nestles in close to her body, looking for safety and comfort as they make this journey together. In the boat stand six swords, suggesting that the woman and child are still carrying memories or baggage from their past into their future.

                While the water on the right of the boat is turbulent, the sea ahead is tranquil. This imagery suggests that they are leaving behind a tumultuous situation, bound for a more peaceful and supportive environment.`;
            source = "Biddy";
            break;
        case "swords7":
            title = "Seven of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `The Seven of Swords shows a man sneaking away from a military camp with five swords in his arms. He looks over his shoulder at the two upright swords he has left behind. The smile on his face suggests that he is proud of himself for having slipped away without being noticed.`;
            source = "Biddy";
            break;
        case "swords8":
            title = "Eight of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `The Eight of Swords shows a woman bound and blindfolded. Eight swords surround her, seemingly trapping her in place, a symbol of the limiting thoughts, beliefs and mindset that prevent her from moving forward in her life. However, look closer: if the woman removed her blindfold, she would quickly realise that she can escape her predicament by letting go of her limiting beliefs and establishing a new, more empowered mindset. The water pooled at her feet suggests that her intuition might see what her eyes cannot.`;
            source = "Biddy";
            break;
        case "swords9":
            title = "Nine of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `The Nine of Swords shows a woman sitting up in her bed with her head in her hands. She appears to have been jolted awake from a terrible nightmare that has left her disturbed, scared and anxious. Nine swords hang on the dark wall behind her, representing the negative thoughts that weigh heavily on her mind. The base of the woman’s bed features a carving of one person defeating another, and roses and the outlines of astrological symbols adorn the quilt wrapped around her.`;
            source = "Biddy";
            break;
        case "swords10":
            title = "Ten of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `The Ten of Swords shows a man lying face down, apparently dead, with ten swords in his back. A red cape drapes over the lower half of his body as a sign of dignity as he leaves this world. While the dark sky is ominous, the sun is rising on the horizon, bringing a renewed sense of hope and opportunity. The calm sea in the background also brings solace, suggesting that even in times of darkness, there is a sense of peace and calm to be found.`;
            source = "Biddy";
            break;
        case "swords11":
            title = "Page of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `The Page of Swords shows a young man standing with his sword pointing upwards to the sky. His body and the sword lean in one direction, but he looks the other way as if to see what else is happening around him. A breeze blows through the young man’s hair, and the clouds behind him appear to dash through the sky, bringing dynamic energy to the card. The ground on which the Page stands is green and fertile, suggesting that the Page’s ideas are likely to bring positive change and forward movement.`;
            source = "Biddy";
            break;
        case "swords12":
            title = "Knight of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `The Knight of Swords shows a knight dressed in armour, charging ahead with great energy on his powerful white horse. The knight’s sword is held high, a symbol of his dedication to his purpose and mission. The white horse symbolises the purity of the intellectual energy that motivates the knight. In the background, storm clouds are beginning to form, and the trees bend in the strong winds. The wind doesn’t stop the knight, however; he heads directly into it, eager to complete his mission.`;
            source = "Biddy";
            break;
        case "swords13":
            title = "Queen of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `The Queen of Swords sits on a stone throne decorated with a cherub, representing the Queen’s softer side, and butterflies representing transformation. She faces towards the future, with her left hand raised as if to receive, and in her right hand, she holds a sword up high and straight, representing her desire to find the truth in all matters. As with the earlier Swords Court cards, clouds accumulate in the sky and a strong wind that passes through the trees, symbolising the ongoing nature of change.`;
            source = "Biddy";
            break;
        case "swords14":
            title = "King of Swords";
            document.getElementById("cardDetails").innerHTML = 
                `The King of Swords sits upon his throne, facing forward as if ready to confront whatever life throws at him. He holds a sword in his right hand, the hand of the conscious, rational mind, and points it upright and to the left, the side of the subconscious, intuitive mind. This symbolises the King’s decisiveness, but also flexibility in all matters; while he makes decisions based mostly on his intellectual understanding, he stays open to his intuition. The King wears a blue tunic, symbolic of a desire for spiritual knowledge, and a purple cape, symbolic of his compassion and intellect. The back of his throne is decorated with butterflies (transformation), crescent moons and an angel just near his left ear, positioned as if to give him subtle guidance.

                The trees behind him stand still, and the clouds have settled. The wind from the previous Swords court cards has died down, giving the impression of stability and clarity rather than the confusion of sweeping change.`;
            source = "Biddy";
            break;
        case "pentacles-1":
            title = "Suit of Pentacles";
            document.getElementById("cardDetails").innerHTML = loadMakeup(suit);
            source = "Biddy";
            break;
        case "pentacles1":
            title = "Ace of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `The Ace of Pentacles depicts a hand emerging from the clouds, much like the Aces of the other suits. A large coin sits in the cupped palm, freely available to whoever has the wherewithal to take it. It is as if a new opportunity, associated with wealth, business, and manifestation, has appeared out of nowhere and is now being extended to you in all its glory. The impetus is now on you to accept this offer and turn it into something meaningful and sustainable.

                The landscape in this card is lush and abounding: a garden brimming with green grass and white lilies. A small path leads to an archway, wrapped in beautiful foliage and flowers and, beyond the arch, mountain peaks soar in the horizon. This verdant imagery signals that the time is ripe to move forward with your career and financial ambitions. While it will require hard work and determination (scaling mountains is no easy task), the Ace of Pentacles encourages you to make the most of this opportunity while it’s in its most abundant state.`;
            source = "Biddy";
            break;
        case "pentacles2":
            title = "Two of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `In the Two of Pentacles, a young man dances while juggling two coins in his hands. The infinity symbol links the coins, suggesting that this man can handle unlimited problems so long as he manages his time, energy and resources well. In the background, two ships sail the high seas, bobbing up and down on the huge waves – another sign that the ups and downs of life are manageable with focus and attention`;
            source = "Biddy";
            break;
        case "pentacles3":
            title = "Three of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `The Three of Pentacles shows a young stonemason working with his tools on a portion of a cathedral. In front of him two architects hold the plans for the design. The soaring ceilings and intricate engravings signify that both parties are skilled in their respective crafts. The stonemason appears to be discussing his progress so far with the architects, and even though he is less experienced, they value his opinion and specialist knowledge. Their body language insinuates that this young man is an essential contributor to the cathedral’s completion and the architects want to make sure that everyone is on the same page.`;
            source = "Biddy";
            break;
        case "pentacles4":
            title = "Four of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `The Four of Pentacles shows a man sitting on a stool, beyond the boundaries of his hometown. His arms are wrapped tightly around a coin as if he fears he may lose it if he loosens his grip. He balances another pentacle on his head, impeding his connection with spirit, and two more sit securely underneath his feet. He clearly doesn’t want anyone to take his coins. However, because he is so attached to his money, he can’t move or go anywhere. He has no one to speak to, not even the friends and family members in the community behind him. The man finds himself stuck in one place with a singular fixation: wealth.`;
            source = "Biddy";
            break;
        case "pentacles5":
            title = "Five of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `In the Five of Pentacles, two people walk through the icy wind and snow; both are destitute and living in poverty. One man is injured and on crutches, while the other is barefoot and has only a thin blanket to protect him from the bleak winter weather. Behind them sits a church with its lit up and exuding warmth, a symbol of hope, faith and spiritual support. However, because the two people are so focused on their plight, they fail to see that help is available to them and continue on in their desperate journey.`;
            source = "Biddy";
            break;
        case "pentacles6":
            title = "Six of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `The Six of Pentacles shows a wealthy man dressed in a red robe, handing out coins to two beggars who kneel at his feet. In his left hand, he holds a balanced scale, representing fairness and equality. This card reflects a state of financial security and generosity, suggesting that you can generously use your wealth and abundance for the benefit of others. But it also speaks to receiving generosity and the feeling of relief that accompanies much-needed assistance. The Six of Pentacles is a card of giving and receiving. Sometimes, you are on the giving end; other times, you are on the receiving end. It’s an ongoing cycle of life, and this card serves as a reminder that the balance can change at any time. Even if you are surrounded by wealth, there will be times when you need the help and support of others, so be generous with your resources, as you may need the support in the future.`;
            source = "Biddy";
            break;
        case "pentacles7":
            title = "Seven of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `In the Seven of Pentacles, a man leans on his hoe, gazing down at his abundant crop. He has worked long and hard to nurture tiny seeds into this thriving garden and can now take a break to enjoy the fruits of his labour. Note the expression in his face, however: he also looks fatigued – even a little ‘over it’ – from having worked so hard for this successful harvest. Success comes from hard work and patience, but this card reminds you to take care not to overdo it and exhaust yourself.`;
            source = "Biddy";
            break;
        case "pentacles8":
            title = "Eight of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `The Eight of Pentacles shows a young man labouring over eight coins, carefully etching out a pentacle shape into each coin. In the background, there is a small town, however he has separated himself from the distractions of home life so that he can fully dedicate himself to the task at hand. He is concentrating very hard, eager to do a good job and avoid any mistakes. As he creates each coin, his skills improve and he becomes a master at his craft.`;
            source = "Biddy";
            break;
        case "pentacles9":
            title = "Nine of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `The Nine of Pentacles shows a well-dressed woman standing in a beautiful garden. She wears a flowing, golden robe and a red beret, signs of her wealth and social status. The vines behind her are heavy with grapes and golden coins, representing the fruitful accomplishment of all her desires. Her right hand rests upon one of the many coins, and her fingers wrap around the purple grapes on the vine, symbolising her healthy relationship with money. She can enjoy the fruits of her labours without overdoing it. A hooded falcon sits calmly on her left hand, signifying the woman’s intellectual and spiritual self-control. Far in the background is a large house, presumably belonging to the woman herself, a further signal of her abounding wealth and financial plenty.`;
            source = "Biddy";
            break;
        case "pentacles10":
            title = "Ten of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `The Ten of Pentacles shows an old, white-haired man wearing an ornately embroidered robe, sitting with his two loyal white dogs at his feet. A younger couple stands nearby with a small child. The man is a wealthy patriarch who has achieved a great deal during his life and is immensely gratified that he can now share his wealth and abundance with his loved ones. His successes and accomplishments are now providing financial security and certainty to his family. He can already see the legacy he has created.

                The man and his family gather in the courtyard of a large castle, marking their prosperity, comfort and financial security. On the archway are family emblems and flags, a symbol of their history and ancestry. Their wealth goes way beyond material comfort; the man and his family have a deeply rooted connection to their lineage, home and community.`;
            source = "Biddy";
            break;
        case "pentacles11":
            title = "Page of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `The Page of Pentacles depicts a young man standing in a grassy field of blooming flowers. In the distance behind him is a small patch of trees and a newly ploughed field, promising an abundant harvest. The mountain range in the horizon signifies the upcoming challenges and obstacles the Page must surmount along his journey. The Page holds a gold coin in his hand and examines it carefully, as if to discover how to manifest even more gold and abundance.`;
            source = "Biddy";
            break;
        case "pentacles12":
            title = "Knight of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `The Knight of Pentacles sits on a stationary draught horse, carefully looking at the gold coin held in his hand. He is in no hurry, preferring to assess and plan his path ahead before taking action. In the background, there is a broad field that has been laboriously ploughed row by row, symbolising that this Knight is ready and willing to do the work to realise his dreams, even if it is repetitive and dull.`;
            source = "Biddy";
            break;
        case "pentacles13":
            title = "Queen of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `In the Queen of Pentacles, a woman sits on a stone throne decorated with carvings of fruit trees, goats, angels and other symbols of material success and sensual pleasure. She cradles a gold coin with both hands and looks down on it with loving care, as if to nurture this symbol of wealth and material success. Luscious plants and flowers surround her, representing her connection to Mother Earth, nature, and abundance. A small rabbit jumps near to where she is seated, symbolising fertility and suggesting that her life is in flow and alignment.`;
            source = "Biddy";
            break;
        case "pentacles14":
            title = "King of Pentacles";
            document.getElementById("cardDetails").innerHTML = 
                `The King of Pentacles sits on a throne embellished with carvings of bulls, representing his connection to the astrological sign of Taurus, and grapes and vines adorn his robe, symbolising wealth and abundance. In his right hand, he holds the sceptre of his power, and in his left, he holds a golden coin, symbolic of his material influence. This King has an innate ability to create material wealth and financial abundance – and better yet, he can sustain his wealth over time through self-discipline, control and leadership.

                At his feet and around his throne are more vines, flowers and plants, representing the highest attainment of material success. His castle sits behind him, a symbol of all he has built through his efforts and determination. This King is therefore very serious about financial security and has made the accumulation of wealth his focus in life. He is proud of his achievements and likes to show others his prized possessions and wealth.`;
            source = "Biddy";
            break;
        default:
            if(suit === "none" ){
                if(number<10){
                    title = "The Number " + numberName;
                }
                else{
                    title = "The Royal Court, " + numberName;
                }
                document.getElementById("cardDetails").innerHTML = loadMakeup(number);
            }
            else{
                title = "Invalid Card Selection";
                document.getElementById("cardDetails").innerHTML = title;
            }
    }
    document.getElementById("cardName").innerHTML = title;
 
    
    //exclude MajorArcana, suit and number descriptions. The add makeup info
    if((suit == "majorArcana" || number == -1) || suit == "none"){
        //hide makeup panel
        document.getElementById("makeup").style.display = "none";
    }
    else{
        //show makeup panel and populate
        document.getElementById("makeup").style.display = "block";
        document.getElementById("makeupSuitTitle").innerHTML = titleSuit;
        document.getElementById("makeupSuitDetails").innerHTML = loadMakeup(suit);
        document.getElementById("makeupNumberTitle").innerHTML = numberName;
        document.getElementById("makeupNumberDetails").innerHTML = loadMakeup(number);

    }
}
function loadMakeup(target){
    switch (target){
        //Numerology used https://www.worldnumerology.com/numerology-single-digit-numbers/
        case "1":
            return `Among the nine single-digit numbers, the 1 holds a special place. From a spiritual perspective, it is the number of creation, the primal force from which all other numbers spring forth.`;
        case "2":
            return `The most feminine among all numbers, the 2 is also the most underestimated -- at least, when it comes to power and strength. It is almost always gentle, tactful, diplomatic, forgiving and understanding.`;
        case "3":
            return `The number 3 is like a gifted teenager who is still under the protection of their parents: a bit spoiled, scattered and perpetually in need of guidance. However, the most obvious traits of the 3 are in the creative field.`;
        case "4":
            return `The 4 is without a doubt the most stable, grounded number, reflecting strength and stability. It's chief characteristics are dependability, productivity, punctuality and obedience. It is trustworthy, patient, conventional and detail oriented.`;
        case "5":
            return `The number 5 is the most dynamic and energetic of all the single-digit numbers. It is unpredictable, always in motion and constantly in need of change. Although it is molded from an almost equal mix of masculine and feminine qualities.`;
        case "6":
            return `While the 6 is considered the most harmonious of all single-digit numbers, it is not without its flaws and upsets. The most important influence of the 6 is its loving and caring nature. It is properly nicknamed the motherhood number.`;
        case "7":
            return `The number 7 is the seeker, thinker, the searcher of Truth (notice the capital "T"). The 7 doesn't take anything at face value - always trying to understand the underlying hidden truths. The 7 intuitively knows nothing is what it seems.`;
        case "8":
            return `The number 8 is perhaps the most misunderstood of all single-digit numbers, as novices and numerology professionals alike seem to hammer on the "money and power" image of the 8.`;
        case "9":
            return `Ordinarily, I keep the math to a minimum when I discuss an aspect of Numerology. In the case of the number 9, however, the math highlights a philosophical observation that is unique and very revealing. So bear with me, please.`;
        case "10":
            return "";
        case "11":
            return "";
        case "12":
            return "";
        case "13":
            return "";
        case "14":
            return "";
        case "wands":
            return `The Suit of Wands Tarot card meanings are associated with primal energy, spirituality, inspiration, determination, strength, intuition, creativity, ambition and expansion, original thought and the seeds through which life springs forth.

                The Suit of Wands is associated with the element of Fire. Fire is hot, wild, unpredictable, and energetic. It can be creative in helping us to cook food or build tools, or it can be destructive, like a devastating bush fire or house fire.

                Fire is symbolic of passion, energy, enthusiasm, and sexuality. It is a masculine element and reflects the drive and willpower of the masculine energy.

                In a deck of playing cards, Wands corresponds to Clubs.`;
        case "cups":
            return `The Suit of Cups Tarot cards deal with the emotional level of consciousness and are associated with love, feelings, relationships and connections.

                The Suit of Cups is associated with the element of water. Water is fluid, agile and ‘in flow' but it's also very powerful and formative. It can be soft and gentle, like waves lapping against the sandy shore, or it can be powerful and even forceful, like a raging river.

                The element of water is symbolic of fluidity, feelings and emotions, intuition, relationships, healing, and cleansing. It is a feminine element and reflects the subtle power that often resides within women. It is receptive, adaptable, purifying and flowing.

                In a deck of playing cards, Cups corresponds to Hearts.`;
        case "swords":
            return `The Suit of Swords Tarot cards deal with the mental level of consciousness that is centered around the mind and the intellect. Swords mirror the quality of mind present in your thoughts, attitudes, and beliefs.

                Swords are often double-edged and in this way the Suit of Swords symbolises the fine balance between intellect and power and how these two elements can be used for good or evil. As such, the Swords must be balanced by spirit (Wands) and feeling (Cups) to have the most positive effect.

                The Suit of Swords is associated with the element of Air. Air is intangible and unseen, but also in constant movement. Air can be still and mostly unnoticed, to becoming a breeze or a fierce wind. It is powerful yet refreshing and cleansing. Symbolically, the air element relates to knowledge, action, power, and change. It is a masculine energy that can lead by force and power, even though it remains unseen.

                In a deck of playing cards, Swords corresponds to Spades.`;
        case "pentacles":
            return `The Suit of Pentacles Tarot cards deal with the physical or external level of consciousness and thus mirror the outer situations of your health, finances, work, and creativity. They have to do with what we make of our outer surroundings – how we create it, shape it, transform it and grow it. On a more esoteric level, Pentacles are associated with the ego, self-esteem and self-image.

                The Suit of Pentacles is associated with the element of Earth. Earth is tactile, earthy and tangible. It creates the foundation from which the planet can grow and develop, and it supports and nurtures the plants and trees. Earth is grounded, stable, supportive and fertile. It is a feminine element that is receptive – it takes in nutrients and sunrays and then uses this energy to sustain the life that grows out of it.

                In a deck of playing cards, Pentacles corresponds to Diamonds.`;
        case "majorArcana":
            return "";
    }

}