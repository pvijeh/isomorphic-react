import _content from '../core/content.json';

let contentOrder = [
"work", 
"pressRelease",
"work",
"pov",
"work", // 5
"pressMention",
"work", 
"award", 
"work",
"award"
];

// loops through content order X number of times and adds content from corresponding content array 

// numItems = the number of content items to retrieve 
//  ContentOrder = array showing the order of content 
// init = resets the count,  include in params on the load of a new page.... set to false or do not include on load of infinite scroll content

let sortedContent = []; 
        let typeCount = {}; 

const ContentDataSorter = {

    sortContent : function( numItems, contentOrder, init) {
        let i = 0; 
        let count = 0; 

        if (init === true) {
            sortedContent = []; 
            typeCount = {}; 
        }

        while (i < numItems){
            if( count >= contentOrder.length){
                count = 0; 
            }

            // this needs to pluck content from different content arrays and put it into the sortedContent array which will then be passed to the page component to be rendered 

            typeCount[contentOrder[count]] = typeCount[contentOrder[count]] ? typeCount[contentOrder[count]]+1 : 1; 

            console.log(contentOrder[count]); 
            console.log(typeCount[contentOrder[count]]);

            sortedContent.push(contentOrder[count]); 
        
        ++count;    
        ++i; 
        }

        return sortedContent; 
    }

}; 
 
 ContentDataSorter.sortContent(20, contentOrder, true); 
 ContentDataSorter.sortContent(20, contentOrder); 

export default ContentDataSorter;