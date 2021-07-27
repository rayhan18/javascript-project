let menus=[
    {
        id:0,
        name:'Buttermilk Pancakes',
        price:'$29',
        img:'images/food1.jpg',
        category:'brackfist', 
        discrption:'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        id:1,
        name:'Buttermilk Pancakes',
        price:'$29',
        img:'images/food1.jpg',
        category:'lunch', 
        discrption:'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        id:2,
        name:'Buttermilk Pancakes',
        price:'$29',
        img:'images/food1.jpg',
        category:'brackfist', 
        discrption:'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        id:3,
        name:'Buttermilk Pancakes',
        price:'$29',
        img:'images/food1.jpg',
        category:'brackfist', 
        discrption:'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        id:4,
        name:'Buttermilk Pancakes',
        price:'$29',
        img:'images/food1.jpg',
        category:'lunch', 
        discrption:'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        id:5,
        name:'Buttermilk Pancakes',
        price:'$29',
        img:'images/food1.jpg',
        category:'shanks', 
        discrption:'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        id:6,
        name:'Buttermilk Pancakes',
        price:'$29',
        img:'images/food1.jpg',
        category:'shanks', 
        discrption:'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        id:7,
        name:'Buttermilk Pancakes',
        price:'$29',
        img:'images/food1.jpg',
        category:'dinnar', 
        discrption:'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        id:8,
        name:'Buttermilk Pancakes',
        price:'$29',
        img:'images/food1.jpg',
        category:'dinnar', 
        discrption:'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        id:9,
        name:'Buttermilk Pancakes',
        price:'$2',
        img:"images/food1.jpg",
        category:'brackfist', 
        discrption:'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
]

// let allItem = document.getElementById('allItem')
// let brackfast = document.getElementById('brackfast')
// let lunce = document.getElementById('lunce')
// let shanks = document.getElementById('shanks')
// let dinner = document.getElementById('dinner')
const btnContent = document.getElementById('btn-content')
const sectioncenter = document.getElementById('sectioncenter')

window.addEventListener('DOMContentLoaded',function(){
  displayMenuItem(menus)
  displayButton()
})
let menuItem= []
function displayMenuItem(displayItems){
 menuItem += displayItems.map(function(item){
     //console.log(item)
          return`
          <div id="productItem"class="col-sm-12 col-md-6 col-lg-6 colwidth">
          <div class="d-flex">
              <img src=${item.img} alt="img" class="img"/>
              <div class="" style="margin-left: 10px;">
                  <h4 class="title">${item.name}
                      <span class="float-end text-warning">${item.price}</span> </h4>
                      <p style="color: #4e64ce;">${item.discrption}</p>
              </div>
              
          </div>
       </div>
          `

        
    })
}

menuItem = menuItem.join("")
//console.log(menuItem)
sectioncenter.insertAdjacentHTML('afterbegin',menuItem) 


function displayButton(){
  const categorys = menus.reduce(function(value,item){
     if(!value.includes(item.category)){
         value.push(item.category)
     }
     return value
  },["all"])
  //console.log(categorys)
   
  const categorisbtn = categorys.map(function(category){
    return `
    
    <button data-id=${category} type="button" class="btn btn-outline-warning filterBtn">${category}</button>
    `
  }).join("")

  btnContent.innerHTML = categorisbtn
  const filterBtns = btnContent.querySelectorAll(".filterBtn")
  ///console.log(filterBtns)

  filterBtns.forEach(function(btn) {
      btn.addEventListener('click',function(e){
        //console.log(e.currentTarget.dataset)
        const categoryList = e.currentTarget.dataset.id
        //console.log(categoryList)
        const menuCategorys = menus.filter(function(menuItem){
            
            if(menuItem.category === categoryList ){
                return menuItem
            }
          })
         // console.log(menuCategorys )
         let html = " "
         let data  
          if(categoryList === 'all'){
            data = menus
          }else{
           data= menuCategorys
          }
      
       data.forEach(item=>{
            const cart = `
            <div id="productItem"class="col-sm-12 col-md-6 col-lg-6 colwidth">
            <div class="d-flex">
                <img src=${item.img} alt="img" class="img"/>
                <div class="" style="margin-left: 10px;">
                    <h4 class="title">${item.name}
                        <span class="float-end text-warning">${item.price}</span> </h4>
                        <p style="color: #4e64ce;">${item.discrption}</p>
                </div>
                
            </div>
         </div>
            `
            html += cart
            
            
        })
        sectioncenter.innerHTML = html
        
      })
  });
}



