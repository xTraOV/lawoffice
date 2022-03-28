const languages = 
{    
    "english" : [
        {"className":"services", "innerText": "services"},
        {"className":"news","innerText":"news"},
        {"className":"blog","innerText":"blog"},
        {"className":"contact","innerText":"contact"}
    ],
    "georgian" : [
        {"className":"services", "innerText": "სერვისები"},
        {"className":"news","innerText":"სიახლეები"},
        {"className":"blog","innerText":"ბლოგი"},
        {"className":"contact","innerText":"კონტაქტი"}
    ]
}

const button = document.querySelector(".change_language");


button.addEventListener('click', () => {
    for(const item of languages.georgian){
        let toAdd = document.createTextNode(`${item.innerText}`);
        let addTo = document.querySelector(`.${item.className}`);
        addTo.removeChild(addTo.firstChild);
        addTo.appendChild(toAdd);
    }
})