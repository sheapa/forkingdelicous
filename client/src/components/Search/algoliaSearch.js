import React from "react";
import algoliasearch from 'algoliasearch/lite';
// import { Form, Button, Segment, Grid} from "semantic-ui-react";
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
// import recipeJSON from "../../scripts/recipe.json"
// import "../../scripts/recipe.json";

// const recipeJSON = require("../../scripts/recipe.json");


// const client = algoliasearch('ZCHNRWDF6B', 'af3f80f79bfd2b7d0e7832aba6f0a582');
const client = algoliasearch(  'latency',
'6be0576ff61c053d5f9a3225e2a90f76');
const index = client.initIndex('recipeDB');

function SearchApp () {
  return(
  <InstantSearch
    indexName="recipeDB"
    searchClient={client}
  >
    <SearchBox />
    <Hits />
  </InstantSearch>
  )};

// index.saveObjects(recipeJSON, {
//     autoGenerateObjectIDIfNotExist: true
//   }).then(({ objectIDs }) => {
//     console.log(objectIDs);
//   });

  index.setSettings({
    'customRanking': ['desc(likes)']
  }).then(() => {
    // done
  });

  index.setSettings({
    searchableAttributes: [
      'title',
      'ingredients',
      'yield',
      'categories',
      'likes',
      'author',
      'saves'
    ]
  }).then(() => {
    // done
  });
/*   

    this is as is from the documentation. 
    you need to add handlers e.g. for submit

*/
// const searchBar = () => (
//   <Grid
//     textAlign="center"
//     style={{ backgroundColor: "red" ,height : '100vh'}}
//     verticalAlign="middle"
//   >
//     <Grid.Column style={{ maxWidth: '450px' }}>
//       <Form>
//         <Segment stacked>
//           <Form.Field>
//             <input placeholder="Search" />
//           </Form.Field>
//           <Button fluid type="submit">Submit</Button>
//         </Segment>
//       </Form>
//     </Grid.Column>
//   </Grid>
// );

export default SearchApp;



