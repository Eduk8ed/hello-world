const post = {
    'title': 'idk',
    'author': 'i dont care anymore',
    'intro': 'what a why to make a lady feel slow'
};

function Post(post){
    return `<div> 
        <h1>{$post.intro}</h1>
        <h3>{$post.author}</h3>
        <p>{$post.title}</p>
         </div>`;
}
let content = '';

for(let i = 0; i < post.length; i++){
    content = `${content}${post[i]}`;
}
    
console.log(content);

// by placing the i within the [] it will return all elements of post//
// or use _post_.length will do the same//
document.querySelector('#content').innerHTML = Post(post);
