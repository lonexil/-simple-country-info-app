class country{
    constructor(image,name, cap,popu,conti,flag,fact){
         this.image=image
        this.name=name
        this.capital=cap
        this.population=popu
        this.continent=conti
        this.flag=flag
        this.fact=fact
    }
    details(){
        show.innerHTML=`
        <div class="card">
          <div class="bg-image hover-overlay ripple" data=mdb-ripple-color-"light">
          <img.src="${this.imag}" class="image-fluid"/>\
          <a href="#!"></a>
          <div class="card-body">
            <h1 class="card-title" align="center"> ${this.name}</h1>
               <h4 class="card-text" align="center"> capital city: ${this.capital}</h4>
                  <h4 class="card-text" align="center"> population:${this.population}
                    <h4 class="card-text" align="center"> continent:${this.continent}</h4>
                     <h4  class="card-text" align="center">fun fact:${this.fact}</h6>
           </div>
                </div>`
    }
}
let countryone=new country(
    "images/india img.jpg","india","New delhi","1.408 billion","Asia","flag","the county has the second highest populaion in the world ")
const shown1=()=>{
    countryone.details()
}
let countrytwo=new country( "images/iraq img.webdp","Iraq","Baghdad","43.53 million","Asia","","It has one of the oldest cultural heritage")
const shown2=()=>{
    countrytwo.details()
}
let countrythree=new country("images/algeria img.jp","Algeria","Algiers","44.18 million","Africa","","it is the largest country in Africa")
const shown3=()=>{
    countrythree.details()
}
let countryfour=new country("images/southAfrica img.jpg","South aFrica","Johannesburg","59.39 million","Africa","","it is the second largest food producer in the world")
const shown4=()=> {
    countryfour.details()
}
let countryfive=new country("images/Nigeria img.jpg","Nigeria","Abuja","213.4 million","Africa","","most populous black country iin the world")
const shown5=()=>{
  countryfive.details()
}
let countrysix=new country("images/uae img.jpg","United Arab Emirate","Abu dhabi","9.395 million","","it has the world higest tower")
const shown6=()=>{
    countrysix.details()
}
let countryseven=new country("images/usa img.jpg","USA","Washington Dc","59.39 millon","North America","","it has the largest economy in the world")
const shown7=()=>{
    countryseven.details()
}
let countryeight=new country("images/morocco img .jpg", "Morocco","casablanca","37.08million","Africa","","it holds the oldest continuosly operating unoversity in the world")
const shown8=()=>{
    countryeight.details()
}
let countrynine=new country("images/UK img.jpg","united kingdom","london","67.33 million","Europe","","the first ever postage stamp was created in the country")
const shown9=()=>{
    countrynine.details()
}
let countryten=new country("images/ indonesia img.jpg","Indonesia","Jakarta","273.8million","in between Asia and Australia","","it is the largest archipelago in the world")
const shown10=()=>{
 countryten.details()
}
let countryeleven=new country("image/ kenya img.jpg","Kenya","nairobi","53.01 million","","Africa","it is the home to secodnlargesr mountain in africa")
const shown11=()=>{
    countryeleven.details()
}
let countrytwelve= new country("images/egypt img.jpg","Egypt","cairo","109.3 million",""," Africa","it is the home to the only remaining ancient wonder in the world")
const shown12=()=>{
    countrytwelve.details()
}
let countrythirteen=new country("images/china img.jpg","China","Beijing","1.412billon","","Asia","The forbidden city in china is the largest imerial palace in the world")
const shown13=()=>{
    countrythirteen.details()
}
let countryfourteen=new country("images/belgium img.jpg","Belgium","Brussels","11.679 milion","","Europe","it is world famous for its choclate,waffles and beer")
const shown14=()=>{
    countryfourteen.details()
}