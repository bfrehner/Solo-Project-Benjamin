import {By} from "selenium-webdriver"
import { BasePage } from "./basePage"

export class IMDB extends BasePage {


// IMDB Selectors
menuButton: By = By.xpath('(//div[@class="ipc-button__text"])[1]')
movies250: By = By.xpath('(//span[@class="ipc-list-item__text"])[3]')
tv250: By = By.xpath('(//span[@class="ipc-list-item__text"])[13]')
searchBar: By = By.xpath('//input[@type="text"]')
searchFilter: By = By.xpath('(//div[@class="ipc-button__text"])[2]')
filterTVEpisodes: By = By.xpath('//span[text()="TV Episodes"]')
moviePageFirstActor: By = By.xpath('(//a[@class="sc-11eed019-1 jFeBIw"])[1]')
moviePageTopCast: By = By.xpath('(//h3[@class="ipc-title__text"])[3]')
topCastSecondActor: By = By.xpath('//a[@href="/name/nm0262635/?ref_=ttfc_fc_cl_t2"]')
drStrangeTrivia: By = By.xpath('(//a[@class="ipc-metadata-list-item__label ipc-metadata-list-item__label--link"])[12]')
drStrangeGoofs: By = By.xpath('(//a[@class="ipc-metadata-list-item__label ipc-metadata-list-item__label--link"])[13]')
drStrangeParentsGuide: By = By.xpath('(//a[@class="ipc-metadata-list-item__label ipc-metadata-list-item__label--link"])[11]')
antManOnActorPage: By = By.xpath('(//a[@href="/title/tt0478970/?ref_=nm_flmg_act_36"])')
actorTrivia: By = By.xpath('(//a[@href="/name/nm0748620/bio?ref_=nm_dyk_trv_sm#trivia"])')
dontPromptRate: By = By.xpath('(//div[@class="ipc-button__text"])[9]')


// Search Results Pages
searchIronMan: By = By.xpath('(//a[@href="/title/tt0371746/?ref_=fn_al_tt_1"])[2]')
searchLoki: By = By.xpath('(//a[@href="/title/tt10161330/?ref_=fn_ep_tt_1"])[2]')
searchAvengers: By = By.xpath('(//a[@href="/title/tt0848228/?ref_=fn_al_tt_1"])[2]')
searchDrStrange: By = By.xpath('(//a[@href="/title/tt1211837/?ref_=fn_al_tt_1"])[2]')
searchPaulRudd: By = By.xpath('(//a[@href="/name/nm0748620/?ref_=fn_al_nm_1"])[2]')


// Text Fields
moviePageTitle: By = By.xpath('(//h1[@class="sc-b73cd867-0 eKrKux"])')
actorName: By = By.xpath('(//span[@class="itemprop"])[1]')
top250Lists: By = By.xpath('//div[@class="lister"]')
movieTriviaPage: By = By.xpath('(//div[@class="article listo"])')
goofsPage: By = By.xpath('(//div[@class="article listo"])')
parentsGuidePage: By = By.xpath('(//section[@class="article listo content-advisories-index"])')
actorTriviaPage: By = By.xpath('(//div[@class="article listo"])')


//Methods
constructor() {
    super({url: "https://www.imdb.com"});
}

async search(searchTerm: string) {
    return this.setInput(this.searchBar, `${searchTerm}\n`)
}

async movieTitleResults() {
    return this.getText(this.moviePageTitle)
}

async actorNameResults() {
    return this.getText(this.actorName)
}

async topTwoFiftyResults() {
    return this.getText(this.top250Lists)
}

async movieTriviaResults() {
    return this.getText(this.movieTriviaPage)
}

async movieGoofsResults() {
    return this.getText(this.goofsPage)
}

async parentsGuideResults() {
    return this.getText(this.parentsGuidePage)
}

async actorTriviaResults() {
    return this.getText(this.actorTriviaPage)
}

}
