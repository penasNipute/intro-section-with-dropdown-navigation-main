const list1 = document.querySelector('#feacture .ul')
const list2 = document.querySelector('#company .ul')
const  fectureImage = document.getElementById('fecture-image')
const  companyImage = document.getElementById('company-image')
const list3 = document.querySelector('#feactureMobile .ul')
const list4 = document.querySelector('#companyMobile .ul')
const  fectureImageMobile = document.getElementById('fecture-image-mobile')
const  companyImageMobile = document.getElementById('company-image-mobile')


feacture.addEventListener('click', ()=>{
    if(list1.classList.contains('inative')){
        list1.classList.remove('inative')
        fectureImage.setAttribute('src', './images/icon-arrow-up.svg')
      
    } else{
        list1.classList.add('inative')
        fectureImage.setAttribute('src', './images/icon-arrow-down.svg')
    }
    
})


company.addEventListener('click', (e)=>{
    e.preventDefault();
    if(list2.classList.contains('inative')){
        list2.classList.remove('inative')
        companyImage.setAttribute('src', './images/icon-arrow-up.svg')

    } else{
        list2.classList.add('inative')
        companyImage.setAttribute('src', './images/icon-arrow-down.svg')
    }
})
feactureMobile.addEventListener('click', (e)=>{
    e.preventDefault();
    if(list3.classList.contains('inative')){
        list3.classList.remove('inative')
        fectureImageMobile.setAttribute('src', './images/icon-arrow-up.svg')
      
    } else{
        list3.classList.add('inative')
        fectureImageMobile.setAttribute('src', './images/icon-arrow-down.svg')
    }
    
})


companyMobile.addEventListener('click', ()=>{
    if(list4.classList.contains('inative')){
        list4.classList.remove('inative')
        companyImageMobile.setAttribute('src', './images/icon-arrow-up.svg')

    } else{
        list4.classList.add('inative')
        companyImageMobile.setAttribute('src', './images/icon-arrow-down.svg')
    }
})

openMenu.addEventListener('click', ()=>{
 
        modal.classList.remove('inative')
    
})

closeMenu.addEventListener('click', ()=>{
    
        modal.classList.add('inative')
    
})

