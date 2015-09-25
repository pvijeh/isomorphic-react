import _content from '../core/content.json';

console.log('>>>>>>>>>unsorted content<<<<<<<<<<');

_content.forEach(function(item){
    // console.log(item.contentType);
    // console.log(item.id);
});
    
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

console.log(contentOrder.length);

let i = 0; 

while(i < 10){


++i;
}




console.log('>>>>>>>>>sorted content<<<<<<<<<<');

_content.forEach(function(item){
    // console.log(item.contentType);
    // console.log(item.id);
});

const ContentDataSorter = {};

export default ContentDataSorter;