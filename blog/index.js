const posts = [ {
    'title': 'idk',
    'author': 'i dont care anymore',
    'intro': 'what a why to make a lady feel slow'
},
{
    'title': 'blahhhh',
    'author': 'i dont care anymore',
    'intro': 'what a why to make a lady feel slow'
} ,{
    'title': 'idk',
    'author': 'i dont care anymore',
    'intro': 'what a why to make a lady feel slow'
},

{
    'title': 'going crazy here',
    'author': 'i dont care anymore',
    'intro': 'what a why to make a lady feel slow'
},
{
    'title': 'Theres no crying in coding',
    'author': 'i dont care anymore',
    'intro': 'what a why to make a lady feel slow'
}  ];


function Post(post){
    return `
        <div> 
            <h1>${post.title}</h1>
            <h3>${post.author}</h3>
            <p>${post.intro}</p>
        </div>
    `;
}

function Content(items){
    let content = '';

    for(let i = 0; i < items.length; i++){
        content = `${content}${Post(items[i])}`;
    }
    
    return content;
    // content ends there never to be felt again.. so to say//
}
    

// by placing the i within the [] it will return all elements of post//
// or use _post_.length will do the same//
document.querySelector('#content').innerHTML = Content(posts);
