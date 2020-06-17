import React from 'react';
import algoliasearch from "algoliasearch";
import {InstantSearch, SearchBox, Hits, Highlight,Stats,SortBy,Pagination} from "react-instantsearch-dom";
// import {InstantSearch, SearchBox, Hits, Highlight,Stats,SortBy, connectStateResults} from "react-instantsearch-dom";
// import {InstantSearch, SearchBox, Hits, Index, connectStateResults} from "react-instantsearch-dom";

const searchClient = algoliasearch("ZCHNRWDF6B","af3f80f79bfd2b7d0e7832aba6f0a582") //change to search only?


const index = searchClient.initIndex('recipeDB');
index.exists().then(result => {
  console.log(result);
});


index
.setSettings({
    customRanking: ['desc(likes)'],
    // distinct: 1,
})
.then(() => {
    console.log("Custom ranking ran");// done
});

index
        .setSettings({
            searchableAttributes: [
                'title',
                'ingredients',
                'description',
                'yield',
                'categories',
                'likes',
                'author',
                'saves',
            ],
        })
        .then(() => {
            console.log("Searchable Attributes ran")// done
        })

        function Search () {
            return(

        <InstantSearch searchClient={searchClient} indexName="recipeDB">
        <Header/>
        <div className="body-content">
            <Content/>
        </div>
        </InstantSearch> 
            )

        }
        
// function Search () {            
// return (
// <InstantSearch searchClient={searchClient} indexName="recipeDB">
// <SearchBox />
// <AllResults>
//   <div>
//     <Index indexName="recipeDB">
//       <IndexResults>
//         <div>
//           <div>first: </div>
//           <Hits />
//         </div>
//       </IndexResults>
//     </Index>
//     <Index indexName="recipeDB">
//       <IndexResults>
//         <div>
//           <div>second: </div>
//           <Hits />
//         </div>
//       </IndexResults>
//     </Index>
//     <Index indexName="recipeDB">
//       <IndexResults>
//         <div>
//           <div>third: </div>
//           <Hits />
//         </div>
//       </IndexResults>
//     </Index>
//   </div>
// </AllResults>
// </InstantSearch>
// )};

// const IndexResults = connectStateResults(
// ({ searchState, searchResults, children }) =>
// searchResults && searchResults.nbHits !== 0 ? (
//   children
// ) : (
//   <div>
//     No results have been found for {searchState.query} and index{' '}
//     {searchResults ? searchResults.index : ''}
//   </div>
// )
// );

// const AllResults = connectStateResults(({ allSearchResults, children }) => {
// const hasResults =
// allSearchResults &&
// Object.values(allSearchResults).some(results => results.nbHits > 0);
// return !hasResults ? (
// <div>
//   <div>No results in category, products or brand</div>
//   <Index indexName="recipeDB" />
//   <Index indexName="recipeDB" />
//   <Index indexName="recipeDB" />
// </div>
// ) : (
// children
//           );
// });


const Header = () =>(       
<header className='header'>
<SearchBox
className='search-bar'
translations={{placeholder:"Search for recipe"}}
/>
</header>      
)

                        
const Hit = ({hit}) => (
< a href={'/recipeDisplay/:recipeId'}> 
<div className='card'>
<div className='card-image'>
    <img src={hit.image} alt={hit.name} className="image"/>
    </div>
    <div className="card-contents">
        <Highlight attribute='title' hit={hit} className="card-title" />
        <Highlight attribute='description' hit={hit} className='card-description'/>
        <div className='card-likes'>Likes:{hit.likes}</div>
        <div className='card-likes'>Description:{hit.descritpion}</div>
        </div>
    </div>
</a>
);

const Content = () =>(
<main>
    <div className="information">
        <div className="stats">
            {""}
            <Stats/>{""}
        </div>
        <div className="">
            <SortBy defaultRefinement="recipeDB"
            items={[
                {value:'recipeDB', label:'Most Relevant'},
            ]}
            />
        </div>
    </div>
    <Hits hitComponent={Hit}/>
    <div>
        {""}
        <Pagination/>
    </div>
</main>
);

// const Results = connectStateResults(({ searchState }) =>
//   searchState && searchState.query ? (
//     <div>Searching for query {searchState.query}</div>
//   ) : (
//     <div>No query</div>
//   )
// );

export default Search;

