import _content from '../core/content.json';

console.log('>>>>>>>>>unsorted content<<<<<<<<<<');

_content.forEach(function(item){
    // console.log(item.contentType);
    // console.log(item.id);
});

// to do for this...

// 1) create separeate content.json files for each content type to simulate calling on different API end points

// 2) create array that keeps track of how many times content from each array type has been displayed

// 3) 

// console.log(_content[0].contentType);
// console.log(_content[0].id);

// code to sort content 

// needs to sort content into some definable order
// needs to keep track of what content items have been displayed 
// need to be able to call in more content on scroll / infinite scrolling 

// when calling new content, append it to the old content array
// --->   not sure what to do about keeping track of content that has already been displayed.   

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

let sortedContent = []; 
let typeCount = {}; 

var sortContent = function( numItems, contentOrder) {
    let i = 0; 
    let count = 0; 
    
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

    // return typeCount; 

    return sortedContent; 
}

console.log(sortContent(20, contentOrder)); 


console.log(sortContent(20, contentOrder));

// console.log('>>>>>>>>>sorted content<<<<<<<<<<');

_content.forEach(function(item){
    // console.log(item.contentType);
    // console.log(item.id);
});

const ContentDataSorter = {};

export default ContentDataSorter;