//https://www.youtube.com/watch?v=uO3RF_67re8

const btnToggle= document.querySelector('.toggle__button');

function getCurrentTheme() {
    let theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
    localStorage.getItem('theTheme')?theme=localStorage.getItem('theTheme'):null;
    return theme;
}

getCurrentTheme();

function loadTheme(theme) {
    const root=document.querySelector(':root');
    if(theme==='dark'){
        btnToggle.innerHTML=`Dark Theme`;
    }else{
        btnToggle.innerHTML=`Light Theme`;
    }
    root.setAttribute('color-scheme', theme);
}

btnToggle.addEventListener('click', ()=>{
    let theme= getCurrentTheme();
    if(theme==='dark'){
        theme='light';
    }else{
        theme='dark';
    }
    localStorage.setItem('theTheme', theme);
    loadTheme(theme);
})

window.addEventListener('DOMContentLoaded',()=>{
    loadTheme(getCurrentTheme());
})