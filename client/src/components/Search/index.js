// #/src/components/Search.js

import React from 'react';
import algoliasearch from "algoliasearch";
import {InstantSearch, SearchBox, Hits, Highlight,Stats,SortBy,Pagination} from "react-instantsearch-dom";


const searchClient = algoliasearch("ZCHNRWDF6B","af3f80f79bfd2b7d0e7832aba6f0a582") //this is my code


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
return (
<InstantSearch searchClient={searchClient} indexName="recipeDB">
<Header/>
<div className="body-content">
    <Content/>
</div>
</InstantSearch>
          );
        };

const Header = () =>(       
<header className='header'>
<SearchBox
className='search-bar'
translations={{placeholder:"Search for recipe"}}
/>
</header>      
)
                        
const Hit = ({hit}) => (
< a href={'/'}> 
<div className='card'>
<div className='card-image'>
    <img src={hit.image} alt={hit.name} className="image"/>
    </div>
    <div className="card-contents">
        <Highlight attribute='title' hit={hit} className="card-title" />
        <Highlight attribute='description' hit={hit} className='card-description'/>
        <div className='card-likes'>Likes:{hit.likes}</div>
        <div className='card-author'> 
        {/* {""}<span> {hit.author[0]}</span> */}
        {/* <span>{hit.author[1]}</span> {""} */}
        </div>
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
)
export default Search;