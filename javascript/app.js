class App{
    runApplication(){
        this.langChange();
        this.scroll("homeScroll", "Landing");
        this.scroll("historyScroll", "History");
        this.fixedHeader();
    }
    fixedHeader(){
        window.onscroll = function(){
            myFunction();
        };
        let header = document.getElementById("myHeader")
        let sticky = header.offsetTop;
        function myFunction(){
            if (window.pageYOffset > sticky){
                header.classList.add("sticky");
                header.getElementById("ENFlag").style.top = 0 + "vw";
            }
            else{
                header.classList.remove("sticky")
            }
        }
    }
    langChange(){
        let eng = document.getElementById("ENFlag");
        let NL = document.getElementById("NLFlag");
        eng.addEventListener('click', English);
        NL.addEventListener('click', Dutch);

        
        function English(){
            document.getElementById("titleText").textContent = "The National Videogame Museum is the place to be for everyone that wants to know (and experience) more about the historical, societal and cultural side to videogames. The museum also lets her visitors play the games of the future. Gamers, young and old are welome to play, discover, learn and share their experiences online.";
            document.getElementById("gsText").textContent = "In 2011 Hasan Tasdemir, Pascal Rappailles and 4 of their friends found a location to rent out where the adventure, which back then was just a dozen arcade games, would expand to a meeting ground for people to exercise their hobby. Soon there were more that wanted to participate, but at a point it became so extreme that the group knew that a professional approach was the only way for it not to die out. Due to this, Hasan would try to evolve the concept into a company. After a few years Hasan came into contact with Jan Kragt, a marketer of the local government of Zoetermeer, who put the idea of creating a museum forward. They came up with the name National Videogame Museum on the spot and with help from a couple of important figures in the Dutch game community the dream became reality. The local government was very enthusiastic about the idea and decided to financially support them. Because of this support they were able to rent a heated storage facility where they could store the collection and even display a part of it. In 2017 the museum really came to life, in the space that was previously occupied by a V&D shop volunteers and fans alike worked tirelessly to get the museum fitted before the grand opening on the 1st of December of that year ";
        }
        function Dutch(){
            document.getElementById("titleText").textContent = "Het Nationaal Videogame Museum is 'the place to be' voor iedereen die meer wil weten (én beleven) over de geschiedenis, maatschappelijke en culturele kant van videogames. Het museum laat haar bezoekers ook de games van morgen ervaren. Gamers van jong tot oud zijn welkom om te spelen, ontdekken, leren en ervaringen online te delen.";
            document.getElementById("gsText").textContent = "In 2011 vonden Hasan Tasdemir, Pascal Rappailles en 4 van hun vrienden een locatie om te huren waar het avontuur, toen nog een tiental arcadegames, zich kon uitbreiden tot een ontmoetingsplek om hun hobby uit te oefenen. Al snel waren er meer die mee wilden doen, dit werd op een moment zo erg dat de groep wist dat een professionele aanpak nodig was om niet ten onder te gaan, Hasan zou daardoor proberen om het concept uit te bouwen tot een bedrijf. Na een paar jaar kwam Hasan in contact met Jan Kragt, een marketeer van de gemeente Zoetermeer, die onder de indruk van de grote collectie het idee van een museum stichten voorbracht. Ter plekke kwamen ze op de naam Nationaal Videogame Museum en samen met een aantal belangrijke spelers uit de Nederlandse game community werd vervolgens de stichting een realiteit. Het gemeentebestuur was enthousiast over het idee en besloot het museum financieel te ondersteunen, waarmee een verwarmde opslag kon worden gehuurd waar de volledige collectie in opgeslagen en ook nog deels tentoongesteld kon worden. In 2017 kwam het museum echt te leven, in het voormalige V&D-pand werd keihard gewerkt door vrijwilligers en fans om het museum ingericht te krijgen voor de grote opening op 1 december 2017. ";
        }
    }
    scroll(button, scrollTo){
        document.getElementById(button).addEventListener("click", function(){
        document.getElementById(scrollTo).scrollIntoView({behavior: "smooth"});
    })
    }
}


let app = new App();
app.runApplication();