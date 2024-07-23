
class Search {

    get searchBox() {
        return cy.get("#search_query_top")
    }

    typeSearchPhrase(searchValue) {
        this.searchBox.type(searchValue)
    }

    clearSearchPhrase(){
        this.searchBox.clear();
    }

    }




export default new Search();