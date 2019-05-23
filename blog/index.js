const posts = [ {
    'title': 'Who AM I',
    'author': 'Shantell b',
    'intro': 'Trying to get it right'
},
{
    'title': 'Code',
    'author': 'Shantell B',
    'intro': 'Get It Get It'
} ,{
    'title': 'Yess',
    'author': 'Shantell B',
    'intro': 'Where Coding'
},

{
    'title': 'Urban Coder',
    'author': 'Shantell Barge',
    'intro': 'Coding for the City'
},
{
    'title': 'Theres no crying in coding',
    'author': 'Shantell Barge',
    'intro': 'Dont get mad , try again.'
}  ];
// this is a array within something.. (get the answer later)//

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

    items.forEach((item) => content = `${content}${Post(item)}`);
  
    
    return content;
    // content ends there never to be felt again.. so to say//
}

// by placing the i within the [] it will return all elements of post//
// or use _post_.length will do the same//
document.querySelector('#content').innerHTML = Content(posts);
