const searchForm = document.getElementById("searchForm")
const main = document.getElementById("main")

searchForm.addEventListener("submit",(e)=>{
    const searchInput = document.getElementById("searchInput").value.trim()

    
    e.preventDefault();
    // console.log(searchInput);
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=cc72f16e1e211031491f8140791ab6b4`
    fetch(BASE_URL)
    .then((rej)=>rej.json())
    .then((data)=>{
        if(searchInput!==data.name){
            alert("Bunday davlat yoki shahar mavjud emas qayta urinib koring")
        }
        main.innerHTML=``
        const div = document.createElement("div")
        div.innerHTML =""
        div.classList.add("flex") 
        div.classList.add("flex-col") 
        div.classList.add("justify-between")
        div.classList.add("h-full")
        
        const weather = data.weather
        weather.forEach(element => {
            div.innerHTML=`
            <div class="flex justify-between items-center mt-[50px]">
                <h3 class="text-[24px]">${data.name}</h3>
                <h3 class="text-[24px] font-bold">${Math.round(data.wind.speed)} <span class="text-[30px]">C</span> </h3>
            </div>
            <div class="flex justify-between">
                <div>
                    <ul>
                        <li>
                            <a href="#">Country</a>
                        </li>
                        <li>
                            <a href="#" class="text-[22px]">${data.sys.country}</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#" id="weatherMain">${element.main}</a>
                        </li>
                        <li>
                            <a href="#">${element.description}</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p class="max-w-[300px]">Lorem, ipsum dolor.</p>
                </div>
            </div>
            `
            main.append(div)
        });     
                

            
        // const arr = Object.keys(data)
        // arr.forEach((element) => {
            
            
        // });
        
    })
    .catch((err)=>console.log('error',err))
})

// searched.value



// fetch(BASE_URL)
// .then((res)=>res.json())
// .then((data)=>
//     {
//         let dataArr = data
//         dataArr.forEach((element)=>{
//             const div = document.createElement("div")
//             div.classList.add("relative")
//             div.classList.add("rounded-2xl")
//             div.classList.add("overflow-hidden")
//             div.classList.add("cursor-pointer")
//             div.innerHTML = `
//                 <img class="flag_image  h-[150px]  w-full" src="${element.flags.png}"/>
//             `
//             images.append(div)
            
//             div.addEventListener("click",()=>{

//                    images.innerHTML = ''
//                    const div = document.createElement("div")
//                    div.classList.add("clickImg")
//                    div.innerHTML=`
                   
//                    <p class=" text-[28px] font-bold">Flag of the <span class=" text-[dodgerblue]">${element.name.official}</span></p>
//                    <img src="${element.flags.png}" />
//                    <p class="text-center text-[18px]">${element.flags.alt} </p>
//                    `
//                    clickImages.append(div)

//             })

//             div.addEventListener("mousemove", () => {
//                 div.innerHTML=`
//                 <img class="flag_image h-[150px]  w-full" src="${element.flags.png}"/>
//                 <p class="flag_text flex justify-center w-full bg-[#00000061] text-white  absolute bottom-0">Flag of the ${element.name.official.slice(0,10)}</p>
//                 `
//             });
//             div.addEventListener("mouseout",()=>{
//                 div.innerHTML=`
//                     <img class="flag_image h-[150px]    w-full" src="${element.flags.png}"/>
//                     <p class="flag_text hidden  ease-in-out duration-[3s]">Flag of the ${element.name.official.slice(0,10)}</p>
//                 `
//             })
            


//             searchForm.addEventListener("submit",(e)=>{
//                 e.preventDefault()
//                 const search = document.getElementById("search").value
//                 let commons = element.name.common
//                 if(search=== commons){
//                     images.innerHTML = ''
//                     const div = document.createElement("div")
//                     div.classList.add("clickImg")
//                     div.innerHTML=`
                    
//                     <p class=" text-[28px] font-bold">Flag of the <span class=" text-[dodgerblue]">${element.name.official}</span></p>
//                     <img src="${element.flags.png}" />
//                     <p class="text-center text-[18px] w-[60%]">${element.flags.alt} </p>
//                     `
//                     clickImages.append(div)
//                    images.innerHTML = ''
//                 }
//             })
//         })
// }
// )
// .catch((err)=>console.log("error",err))
