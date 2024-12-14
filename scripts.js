function loadCard() {
    //inputs
    let suit = document.getElementById("suitIn").value;
    let number = document.getElementById("numberIn").value;
    //How to handle Pages, page 11, knight 12, queen 13, king 14
    /*need to add:
        null suits, and numbers
        per suit back drops and font styling, number overveiw will be major arcana

    */
    let name="";
    switch(suit){
        case "none":
            document.getElementById("card").style.backgroundImage = url("");
            name="numbers.jpg";
            break;
        case "majorArcana":
            document.getElementById("card").style.backgroundImage = url("");
            name="majorArcana"+number;
            //fool is 0
            break;
        case "wands":
            document.getElementById("card").style.backgroundImage = url("");
            if(number == 0){number = -1};
            name="wands"+number;
            break;
        case "cups":
            document.getElementById("card").style.backgroundImage = url("");
            if(number == 0){number = -1};
            name="cups"+number;
            break;
        case "swords":
            document.getElementById("card").style.backgroundImage = url("");
            if(number == 0){number = -1};
            name="swords"+number;
            break;
        case "pentacles":
            document.getElementById("card").style.backgroundImage = url("");
            if(number == 0){number = -1};
            name="pentacles"+number;
            break;
        
    }
    let file = "/assets/imgs/tarotCards/" +name + ".jpg";
    document.getElementById("cardDisplay").alt=tile;
    document.getElementById("cardDisplay").src=file;
    
    let title = "";
    //Per Card setup
    switch (name){
        case "majorArcana-1":
            title = "The Major Arcana";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana0":
            title = "The Fool";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana1":
            title = "The Magician";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana2":
            title = "The High Priestess";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana3":
            title = "The Empress";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana4":
            title = "The Emperor";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana5":
            title = "The Hierophant";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana6":
            title = "The Lovers";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana7":
            title = "The Chariot";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana8":
            title = "Strength";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana9":
            title = "The Hermit";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana10":
            title = "Wheel of Fortune";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana11":
            title = "Justice";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana12":
            title = "The Hanged Man";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana13":
            title = "The Death";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana14":
            title = "Temperance";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana15":
            title = "The Devil";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana16":
            title = "The Tower";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana17":
            title = "The Star";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana18":
            title = "The Moon";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana19":
            title = "The Sun";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana20":
            title = "Judgement";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "majorArcana21":
            title = "The World";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands-1":
            title = "Suit of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands1":
            title = "Ace of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands2":
            title = "Two of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands3":
            title = "Three of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands4":
            title = "Four of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands5":
            title = "Five of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands6":
            title = "Six of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands7":
            title = "Seven of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands8":
            title = "Eight of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands9":
            title = "Nine of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands10":
            title = "Ten of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands11":
            title = "Page of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands12":
            title = "Knight of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands13":
            title = "Queen of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "wands14":
            title = "King of Wands";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups-1":
            title = "Suit of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups1":
            title = "Ace of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups2":
            title = "Two of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups3":
            title = "Three of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups4":
            title = "Four of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups5":
            title = "Five of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups6":
            title = "Six of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups7":
            title = "Seven of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups8":
            title = "Eight of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups9":
            title = "Nine of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups10":
            title = "Ten of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups11":
            title = "Page of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups12":
            title = "Knight of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups13":
            title = "Queen of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "cups14":
            title = "King of Cups";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords-1":
            title = "Suit of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords1":
            title = "Ace of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords2":
            title = "Two of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords3":
            title = "Three of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords4":
            title = "Four of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords5":
            title = "Five of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords6":
            title = "Six of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords7":
            title = "Seven of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords8":
            title = "Eight of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords9":
            title = "Nine of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords10":
            title = "Ten of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords11":
            title = "Page of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords12":
            title = "Knight of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords13":
            title = "Queen of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "swords14":
            title = "King of Swords";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles-1":
            title = "Suit of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles1":
            title = "Ace of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles2":
            title = "Two of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles3":
            title = "Three of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles4":
            title = "Four of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles5":
            title = "Five of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles6":
            title = "Six of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles7":
            title = "Seven of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles8":
            title = "Eight of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles9":
            title = "Nine of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles10":
            title = "Ten of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles11":
            title = "Page of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles12":
            title = "Knight of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles13":
            title = "Queen of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        case "pentacles14":
            title = "King of Pentacles";
            document.getElementById("cardName").innerHTML = title;
            document.getElementById("cardDetails").innerHTML = "";

        break;
        

    }
}