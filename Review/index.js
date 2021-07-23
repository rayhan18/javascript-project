const person =[
    {id:1,
    name: 'Rayhan Molla',
    img: 'https://pluspng.com/img-png/png-hd-handsome-man-suit-png-image-920.png' ,
    profetion:'Frontenrt Developar',
    discription:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
   },
   {id:2,
    name: 'Harun Ahmed',
    img:'https://i.pinimg.com/originals/79/0f/43/790f43e3d1cfe8dc76aaa3b92be75f14.jpg' ,
    profetion:'Frontenrt Developar',
    discription:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
   },
   {id:3,
    name: 'Md molla',
    img: 'https://i.pinimg.com/originals/1c/b4/5a/1cb45a784d44017e12fe2a4a44748cf1.jpg',
    profetion:'Frontenrt Developar',
    discription:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
   },
   {id:4,
    name: 'Md hasan',
    img:'http://blog.jobsgopublic.com/wp-content/uploads/2012/10/autumn-fashion-15.jpg' ,
    profetion:'Frontenrt Developar',
    discription:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
   },
]

let content=0
const prevBtn =document.getElementById('prevBtn')
const nextBtn =document.getElementById('nextBtn')
let picture= document.getElementById('person-img')
let author= document.getElementById('author')
let job= document.getElementById('job')
let info= document.getElementById('info')
let rendomContent = document.getElementById('rendomContent')

//lod on index initial value
window.addEventListener('DOMContentLoaded',function(){
    nextContent(content)
})
nextBtn.addEventListener('click',function(){   
     content++   
    nextContent(content)
})
//next button
function nextContent(e){
        const value = person[e] //1  
        if( e < person.length){
            picture.src = value.img
            console.log(value.img)
            author.textContent = value.name
            job.textContent = value.profetion   
            info.textContent = value.discription
        }
}
//previus button
prevBtn.addEventListener('click',function(){   
    content--   
   nextContent(content)
})

//rendom change content on button click
function nextContent(e){
       const value = person[e] //1  
       if( e < person.length){
           picture.src = value.img
           console.log(value.img)
           author.textContent = value.name
           job.textContent = value.profetion
           info.textContent = value.discription
       }
}

rendomContent.addEventListener('click',function(){
   let nextIndex = Math.floor(Math.random()*person.length )
   nextContent(nextIndex)
})

