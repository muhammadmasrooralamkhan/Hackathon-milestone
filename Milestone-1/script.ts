const  togglebutton = document.getElementById(`toggle-section`) as HTMLElement;
const woekExperience = document.getElementById(`work-experience`) as HTMLElement;

togglebutton.addEventListener('click',() => {
    if(woekExperience.style.display === 'none'){
        woekExperience.style.display = 'block'
    }else{
        woekExperience.style.display = `none`
    }
});