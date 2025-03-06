const navData = [
    {
        name:'Veb Sayt',
        title:['Saytların Hazırlanması',
            'Hökumət və qeyri-kommersiya saytları',
            'Kiçik biznes saytları',
            'E-ticarət saytları',
            'Hüquq firma saytı',
            'Bloqlar və Şəxsi Vebsayt',
            'Daşınmaz əmlak veb saytı',
            'Tibb - Doktor Saytlar',
            'WordPress Saytları'
           ],
           img:[
            'img/navIcons/Veb1.svg',
            'img/navIcons/Veb2.svg',
            'img/navIcons/Veb3.svg',
            'img/navIcons/Veb4.svg',
            'img/navIcons/Veb5.svg',
            'img/navIcons/Veb6.svg',
            'img/navIcons/Veb7.svg',
            'img/navIcons/Veb8.svg',
            'img/navIcons/Veb9.svg',
           ],
           subTitle:[
                'Veb saytların hazırlanması',
                'Hökumət və qeyri-kommersiya saytları',
                'Kiçik bizneslər üçün saytlar',
                'E-ticarət saytları',
                'Hüquq firma saytı',
                'Bloqlar və Şəxsi Vebsayt',
                'Daşınmaz əmlak veb saytı',
                'Tibb Doktor Saytlar',
                'WordPress Saytları'
           ]
           
    },
    {
        name:'Domen',
        title:['Domen',
              'Pulsuz Domen Qeydiyyatı'
             ],
        img:[
           'img/navIcons/Domen1.svg',
           'img/navIcons/Domen2.svg',
          ],
          subTitle:['Etibarlı Xidmət',
            'Sürətli Qeydiyyat'
           ],
    },
    {
        name:'Hostinq',
        title:['Veb Hostinq',
            'VPS',
            'Server'
            ],
        img:[
            'img/navIcons/Hostinq1.svg',
            'img/navIcons/Hostinq2.svg',
            'img/navIcons/Hostinq3.svg',
           ],
           subTitle:[
            '₼10.00/ay-dan başlayaraq',
            '₼15.00/ay-dan başlayaraq',
            '₼20.00/ay-dan başlayaraq'
           ]
    },
    {
        name:'Xidmətlər',
        title:['Vebsayt sifarişinizi izləyin',
            'Sayt Kalkulyatoru',
            'SEO Xidməti',
            'Mobil Tətbiqlərin Hazırlanması',
            'Texniki Xidmət',
            'Sosial Marketinq'
           ],
        img:[
         'img/navIcons/Serv1.svg',
         'img/navIcons/Serv2.svg',
         'img/navIcons/Serv3.svg',
         'img/navIcons/Serv4.svg',
         'img/navIcons/Serv5.svg'
        ],
        subTitle:[
            'Sifarişinizi asanlıqla izləyin',
            'Saytın Qiymətini Öyrən',
            'Axtarış Sistemi Optimizasiyası',
            'Mobil tətbiq xidməti',
            'Texniki Xidmət',
            'Sosial Marketinq'
       ]
       
    },
    {
        name:'Şirkət',
        title:['Haqqımızda',
            'Bloq',
            'Bütün startUplar',
            'Portfolio',
            'Karyera',
            'FreeLance',
            'Əlaqə Forması'
           ],
        img:[
         'img/navIcons/Comp1.svg',
         'img/navIcons/Comp2.svg',
         'img/navIcons/Comp3.svg',
         'img/navIcons/Comp4.svg',
         'img/navIcons/Comp5.svg',
         'img/navIcons/Comp6.svg',
         'img/navIcons/Comp7.svg',
        ],
        subTitle:[
            'Bizim komanda üzvlərimiz',
            'Ən son xəbərlər və faydalı məlumatlar',
            'Startupları idarə edən komandamıza qoşulun',
            'Hazırladığımız hər bir iş bizim üçün dəyərlidir',
            'Hazırkı vakansiyalarımız',
            'Sizdə qeydiyyatdan keçməklə freelance işləyə bilərsiz',
            'Əlaqə Saxlayın'
       ]
        
    },
]
let nav = document.querySelectorAll(".nav")
let dropReone = document.querySelectorAll(".dropReone")

nav.forEach(item=>{
    item.addEventListener("click",function(){
        let dropR = item.querySelector('.dropReone')
        if(dropR.style.display=="block"){
            dropR.style.display='none'            
        }
        else{
            dropReone.forEach(dropRr=>{
            dropRr.innerHTML=''
            dropRr.style.display="none"})
            dropR.style.display='block'
        }

        
        
        let kod = ''
         kod = '<ul>'
        navData.forEach(data=>{
            if(item.innerHTML.includes(data.name)){
                for(i = 0 ; i < data.title.length ; i++){
                    dropR.innerHTML+=`<li class="flex py-[.75em] ps-4 pe-8" style='font-family:"Manrope", sans-serif;'>
                    <div class='imgBr w-[52px] h-[52px] bg-[#dbeafe] rounded-[.5em] flex items-center justify-center me-4'>
                        <img width="28" height="28" src="${data.img[i]}"/>
                    </div>
                    <div>
                        <h3 class="text-[#334155] text-[1em] font-medium">${data.title[i]}</h3>
                        <h5 class="text-[#64748b] font-bold text-[.8em]">${data.subTitle[i]}</h5>
                    </div>
                    </li>`
                }
            } 
            kod+=`</ul></div>`
        })
    })
})

const sideBar = document.getElementById("sideBar")
const hide = document.querySelector(".hide")
function showSideBar(){
    sideBar.style.display="block"
}
function hideSideBar(){
    sideBar.style.display="none"

}
