// #/src/components/Search.js

import React from 'react';
import algoliasearch from "algoliasearch";
import {InstantSearch, SearchBox, Hits, Highlight,Stats,SortBy,Pagination} from "react-instantsearch-dom";
import recipeJSON from '../../recipe.json';
import { Input } from 'semantic-ui-react';

const searchClient = algoliasearch("ZCHNRWDF6B","af3f80f79bfd2b7d0e7832aba6f0a582") //this is my code
// const searchClient = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76")

const index = searchClient.initIndex('recipeDB');
index.exists().then(result => {
  console.log(result);
});

index
.saveObjects(recipeJSON, {
    autoGenerateObjectIDIfNotExist: true
})
.then(({ objectIDs }) => {
    console.log(objectIDs);
});

index.partialUpdateObjects(recipeJSON, {
    createIfNotExists: true,
}).then(({ objectIDs }) => {
    console.log(objectIDs);
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
<Input>
<SearchBox
className='search-bar'
translations={{placeholder:"Search for recipe"}}
/>
</Input>

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
        <Highlight attribute='ingredients' hit={hit} className='card-ingredients'/>
        <div className='card-likes'>Likes:{hit.likes}</div>
        <div className='card-author'> 
        {""}<span> {hit.author[0]}</span>
        <span>{hit.author[1]}</span> {""}
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