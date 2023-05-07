// let img = document.querySelectorAll(".img img");

// img.forEach((item, index) => { item.addEventListener('mouseenter', () =>{
//     console.log(index);
//     item.style.display = 'none';
// })});
// img.forEach((item, index) => { item.addEventListener('mouseleave', () =>{
//     item.style.display = 'block';
// })});

const service_text = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "In hac habitasse platea dictumst. Proin sit amet libero vitae mi auctor facilisis eget nec diam. Nunc id enim sit amet lectus tempus placerat quis et metus. Sed viverra feugiat nunc id viverra. Suspendisse fringilla sodales congue. Sed vel faucibus arcu. Curabitur porttitor, dolor ut efficitur pellentesque, dui quam facilisis mi, quis tincidunt odio mauris at eros.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec tempus semper magna, et laoreet lectus finibus nec. Aliquam non vestibulum ante. In sed elit ex. Etiam eu posuere neque. Vestibulum tincidunt lobortis lectus, eget tincidunt odio viverra tincidunt. Donec at nisi eu turpis gravida aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac scelerisque diam, a viverra quam. Integer bibendum fringilla tempor.",
    "Sed efficitur vehicula nibh ut egestas. Aenean tempus a ante id tincidunt. Suspendisse potenti. Mauris facilisis faucibus tellus a aliquet. Fusce lacinia sem sed mauris consequat condimentum.",
    "Proin laoreet lectus ac suscipit vestibulum. Phasellus eu sodales arcu. Fusce semper tincidunt lectus, id tempor mi scelerisque sit amet. Morbi suscipit nisi in felis consectetur ultricies. Nulla non nisi sem. Nunc finibus auctor nulla, lacinia condimentum enim maximus venenatis. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut pharetra neque, a sodales eros.",
    "Cras faucibus congue efficitur. Morbi consectetur eu sem non lobortis. Curabitur faucibus, nisi eu interdum euismod, mi massa ultricies sem, vitae fermentum erat nulla ut metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet risus condimentum, aliquet diam commodo, consectetur augue. Vivamus sit amet libero nunc."
];
const service_images = [
    'img/service/1.png',
    'img/service/2.png',
    'img/service/3.png',
    'img/service/4.png',
    'img/service/5.png',
    'img/service/6.png',
];

let service_btns = document.querySelectorAll('.service .buttons .btn');
let service_textContent = document.querySelector('.service .slider .content .text p');
let service_img = document.querySelector('.service .slider .content img');



let test_div = document.createElement("div");
service_btns.forEach((item,index)=>{item.addEventListener('click', (event)=>{
    service_btns.forEach(btn=>{btn.classList.remove('clicked')});
    item.classList.add('clicked');
    service_textContent.textContent = service_text[index];
    service_img.setAttribute('src', `${service_images[index]}`);
    event.preventDefault();
})});

let work_images = document.querySelector('.work .slider .content .images');
let work_btnLoad = document.querySelector('.work .load');
let work_images_imgClass = document.querySelectorAll('.work .slider .content .images .img');

work_btnLoad.addEventListener('click', (event)=>{
    work_btnLoad.style.display = 'none';
    work_images_imgClass.forEach(item=>{item.classList.remove('none')});
    work_slider_buttons.forEach(item_w=>{item_w.classList.remove('clicked')});
    work_slider_buttons[0].classList.add('clicked');
    work_images_imgClass.forEach(item=>{
        item.classList.remove('hide');
    })
    event.preventDefault();
});

let work_slider_buttons = document.querySelectorAll('.work .slider .buttons .btn');
work_slider_buttons.forEach((item,index)=>(item.addEventListener('click',(event)=>{
    let id_all = work_slider_buttons[0].id;
    let id = item.id;
    console.log(id);
    work_slider_buttons.forEach(item_w=>{item_w.classList.remove('clicked')});
    item.classList.add('clicked');
    work_images_imgClass.forEach(item_work=>{
        item_work.classList.add('none');
        if((item_work.id == id || item.id == id_all)&&(!item_work.classList.contains('hide'))){
            item_work.classList.remove('none');
        }
    });
    event.preventDefault();
})));

const feedback_name =[
    'Ginger Adrian',
    'Sharon Anderson',
    'Timothy Thomas',
    'Arnold Clark'
];

const feedback_job_name = [
    'UX designer',
    'FrontEnd Developer',
    'BackEnd Developer',
    'Targetologist'
];

const feedback_text = [
    'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
    'In hac habitasse platea dictumst. Proin sit amet libero vitae mi auctor facilisis eget nec diam. Nunc id enim sit amet lectus tempus placerat quis et metus. Sed viverra feugiat nunc id viverra. Suspendisse fringilla sodales congue. Sed vel faucibus arcu.',
    'Cras faucibus congue efficitur. Morbi consectetur eu sem non lobortis. Curabitur faucibus, nisi eu interdum euismod, mi massa ultricies sem, vitae fermentum erat nulla ut metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'Sed efficitur vehicula nibh ut egestas. Aenean tempus a ante id tincidunt. Suspendisse potenti. Mauris facilisis faucibus tellus a aliquet. Fusce lacinia sem sed mauris consequat condimentum.'     
];

let btn_left = document.querySelector('.feedback .slider .btn_left');
let btn_right = document.querySelector('.feedback .slider .btn_right');
let feedback_images = document.querySelectorAll('.feedback .slider .clients .image');
let major_photo = document.querySelector('.feedback .client .photo .circle img');
let feedback_name_class = document.querySelector('.feedback .client h1');
let feedback_job_class = document.querySelector('.feedback .client p');
let feedback_text_class = document.querySelector('.feedback .textFeedBack p');
let feedback_image_links = document.querySelectorAll('.feedback .slider .clients .image a');

btn_right.addEventListener('click', (event)=>{
    let ind;
    feedback_images.forEach((item,index)=>{
        if(item.classList.contains('active') === true){
            ind = index;
        }
    })
    if(ind<3){
        console.log(ind);
        feedback_images[ind].classList.remove('active');
        feedback_images[ind+1].classList.add('active');
        console.log(feedback_images[ind+1].querySelector('img').src);
        major_photo.src = feedback_images[ind+1].querySelector('img').src;
        feedback_name_class.textContent = feedback_name[ind+1];
        feedback_job_class.textContent = feedback_job_name[ind+1];
        feedback_text_class.textContent = feedback_text[ind+1];
    }
    else{
        feedback_images[3].classList.remove('active');
        feedback_images[0].classList.add('active');
        console.log(feedback_images[0].querySelector('img').src);
        major_photo.src = feedback_images[0].querySelector('img').src;
        feedback_name_class.textContent = feedback_name[0];
        feedback_job_class.textContent = feedback_job_name[0];
        feedback_text_class.textContent = feedback_text[0];
    }
    event.preventDefault();
});

btn_left.addEventListener('click', (event)=>{
    let ind;
    feedback_images.forEach((item,index)=>{
        if(item.classList.contains('active') === true){
            ind = index;
        }
    })
    if(ind>0){
        console.log(ind);
        feedback_images[ind].classList.remove('active');
        feedback_images[ind-1].classList.add('active');
        major_photo.src = feedback_images[ind-1].querySelector('img').src;
        feedback_name_class.textContent = feedback_name[ind-1];
        feedback_job_class.textContent = feedback_job_name[ind-1];
        feedback_text_class.textContent = feedback_text[ind-1];
    }
    else{
        feedback_images[0].classList.remove('active');
        feedback_images[3].classList.add('active');
        major_photo.src = feedback_images[3].querySelector('img').src;
        feedback_name_class.textContent = feedback_name[3];
        feedback_job_class.textContent = feedback_job_name[3];
        feedback_text_class.textContent = feedback_text[3];
    }
    event.preventDefault();
});

feedback_image_links.forEach((item,index)=>{item.addEventListener('click', (event)=>{
    feedback_images.forEach(item=>{item.classList.remove('active')});
    feedback_images[index].classList.add('active');
    major_photo.src = feedback_images[index].querySelector('img').src;
    feedback_name_class.textContent = feedback_name[index];
    feedback_job_class.textContent = feedback_job_name[index];
    feedback_text_class.textContent = feedback_text[index];
    event.preventDefault();
})})