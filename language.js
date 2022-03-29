window.sessionStorage.setItem('currentLanguage', 'georgian');
let currentLanguage = sessionStorage.getItem('currentLanguage');


const languages = 
{    
    "english" : [
        {"className":"services", "innerText": "services"},
        {"className":"news","innerText":"news"},
        {"className":"blog","innerText":"blog"},
        {"className":"contact","innerText":"contact"},
        {"className":"lawier-name","innerText":"GIORGI KORASHVILI"},
        {"className":"article-content","innerText":`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
    ],
    "georgian" : [
        {"className":"services", "innerText": "სერვისები"},
        {"className":"news","innerText":"სიახლეები"},
        {"className":"blog","innerText":"ბლოგი"},
        {"className":"contact","innerText":"კონტაქტი"},
        {"className":"lawier-name","innerText":"გიორგი კორაშვილი"},
        {"className":"article-content","innerText":"ლორემ იპსუმ დოლორ სიტ ამეტ, ცონსეცტეტურ ადიპისცინგ ტემპორ ინციდიდნუტ უტ ლაბორე ეტ დოლორე მაგნა ალიქუა. უტ ენიმ ად მინიმ ვენია"}
    ]
}

const button = document.querySelector(".change_language");
const switchLanguage = () => 
{
    if(currentLanguage=='english'){
        window.sessionStorage.setItem('currentLanguage','georgian');
        currentLanguage = sessionStorage.getItem('currentLanguage');
        for(const item of languages.georgian){
            let toAdd = document.createTextNode(`${item.innerText}`);
            let addTo = document.querySelector(`.${item.className}`);
            addTo.removeChild(addTo.firstChild);
            addTo.appendChild(toAdd);
        }
    }
    else{
        window.sessionStorage.setItem('currentLanguage','english');
        currentLanguage = sessionStorage.getItem('currentLanguage');
        for(const item of languages.english){
            let toAdd = document.createTextNode(`${item.innerText}`);
            let addTo = document.querySelector(`.${item.className}`);
            addTo.removeChild(addTo.firstChild);
            addTo.appendChild(toAdd);
        }
    }
}


button.addEventListener('click', () => switchLanguage());