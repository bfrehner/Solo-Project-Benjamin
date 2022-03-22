import { Driver } from "selenium-webdriver/chrome";
import { IMDB } from "./imdbPageObjects";

const imdb = new IMDB;


test("Search Bar and Search Filter", async () => {
    await imdb.navigate();
    await imdb.driver.manage().window().maximize();
    await imdb.search("Iron Man");
    await imdb.click(imdb.searchIronMan);
    expect(await imdb.movieTitleResults()).toContain("Iron Man");
    await imdb.click(imdb.searchFilter);
    await imdb.click(imdb.filterTVEpisodes);
    await imdb.search("Glorious Purpose");
    await imdb.click(imdb.searchLoki);
    expect(await imdb.movieTitleResults()).toContain("Glorious Purpose");
})


test("Movie Page Cast List", async () => {
    await imdb.navigate();
    await imdb.search("Avengers");
    await imdb.click(imdb.searchAvengers);
    await imdb.click(imdb.moviePageFirstActor);
    expect(await imdb.actorNameResults()).toContain("Robert Downey Jr.");
    await imdb.driver.navigate().back();
    await imdb.click(imdb.moviePageTopCast);
    await imdb.click(imdb.topCastSecondActor);
    expect(await imdb.actorNameResults()).toContain("Chris Evans")
})


test("Movie Page Trivia, Goofs, and Parent's Guide", async () => {
    await imdb.navigate();
    await imdb.search("Doctor Strange");
    await imdb.click(imdb.searchDrStrange);
    await imdb.click(imdb.drStrangeTrivia);
    await imdb.click(imdb.dontPromptRate);
    await imdb.driver.sleep(3000);
    expect(await imdb.movieTriviaResults()).toContain("Mads Mikkelsen is the third Hannibal Lecter actor to appear in a Marvel film, after Brian Cox (William Stryker in X2: X-Men United (2003)) and Anthony Hopkins (Odin in the Thor films).");
    await imdb.driver.navigate().back();
    await imdb.click(imdb.drStrangeGoofs);
    expect(await imdb.movieGoofsResults()).toContain("Doctor Strange, a highly educated physician, uses the word, \"irregardless\" rather than the correct word \"regardless.\" There is no such word in the English language, so it is highly doubtful that Doctor Strange, a highly educated eloquent doctor, would use it.");
    await imdb.driver.navigate().back();
    await imdb.click(imdb.drStrangeParentsGuide);
    expect(await imdb.parentsGuideResults()).toContain("There is a scene of a man being slammed around by the head by a magical cloak. It is supposed to be slightly humorous, so it doesn't seem quite as violent as it really is.");
})


test("Actor Page", async () => {
    await imdb.navigate();
    await imdb.search("Paul Rudd");
    await imdb.click(imdb.searchPaulRudd);
    await imdb.click(imdb.antManOnActorPage);
    expect(await imdb.movieTitleResults()).toContain("Ant-Man");
    await imdb.driver.navigate().back();
    await imdb.click(imdb.actorTrivia);
    expect(await imdb.actorTriviaResults()).toContain("Chosen by People Magazine as the Sexiest Man Alive in 2021.")
})


test("Menu and Top 250 Pages", async () => {
    await imdb.navigate();
    await imdb.click(imdb.menuButton);
    await imdb.click(imdb.movies250);
    expect(await imdb.topTwoFiftyResults()).toContain("Spider-Man: No Way Home");
    expect(await imdb.topTwoFiftyResults()).toContain("Avengers: Infinity War");
    expect(await imdb.topTwoFiftyResults()).toContain("Avengers: Endgame");
    expect(await imdb.topTwoFiftyResults()).toContain("Monty Python and the Holy Grail");
    await imdb.navigate();
    await imdb.driver.sleep(3000);
    await imdb.click(imdb.menuButton);
    await imdb.click(imdb.tv250);
    expect(await imdb.topTwoFiftyResults()).toContain("Daredevil");
    expect(await imdb.topTwoFiftyResults()).toContain("The Punisher");
    await imdb.driver.quit()
})
    
    