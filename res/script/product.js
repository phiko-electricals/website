const productsArr = [
  {
    category:"Bulb",
    items:["Angle Lamp Holder","30W Samsung LED Light","30W Gold LED Bulb","2U Bulb","6W LED Bulb Round Surface","9W Round LED Bulb","12W Round LED Bulb","6W Conduit LED","12W conduit LED","16W Two Colour LED Surface","18+6W LED Bulb Surface","9W LED Surface","18+6W LED Surface","24W LED Surface Remote","250W Street Bulb","400W Street Bulb","150W LED Bulb 3 Eye","50W One Eye LED Compund Light","100W Platy LED Compound Light","105 Energy Saving Bulb"]
  },
  {
    category:"Fans",
    items:["Standard Long Blade Fan","Standard Short Blade Fan","Orent Long Blade","Orent Short Blade","Delta Fan Long Blade","Delta Fan Short Blade"]
  },
  {
    category:"Cables",
    items:["1.5m2 Cable Standard","2.5m2 Cable Standard","2.5m2 Cable Classic","1.5m2 Cable Classic","1.5m2 Cable Tropical","2.5m2 Cable Tropical","4m2 Cable tropical","4m2 Cable Brsan","2.5m2 Cable Brsan","1.5 Cable Brsan","TV Cable","10m Cable","16m2 Cable","Focus Flexible wire","Standard Flexible wire"]
  }
]

const inventory = document.getElementById("inventory")
const inventoryData = document.getElementById("inventory-data")
const showAll = document.getElementById("product-btn")
const mainWrapper = document.getElementById("main-wrapper")

productsArr.forEach(product => {
  let invHeader = `<h3 class="category">${product.category}</h3>`
  let invBody = ""
  product.items.forEach(item => {
    invBody += `<div class="product">${item}</div>`
  })

  inventoryData.innerHTML +=`
    <div class=inv-container section>
      ${invHeader}
      <div class=products>${invBody}</div>
    </div>
  `
})

inventoryData.classList.add("section")

showAll.addEventListener('click', e => {
  e.preventDefault()
  inventory.classList.add('show-inv')
  mainWrapper.classList.add("rm-wrap")
  inventory.scrollIntoView({behavior: "smooth", block: 'start', inline: 'center'});
})

const closeBtn = document.getElementById("close-btn")

closeBtn.addEventListener('click', e => {
  inventory.classList.remove("show-inv")
  mainWrapper.classList.remove("rm-wrap")
  showAll.scrollIntoView({behavior: "smooth", block: 'center', inline: 'center'});
})


// ,
// {
//   category:"Breakers",
//   items:[]
// },
// {
//   category:"Bulb",
//   items:[]
// },
// {
//   category:"Bulb",
//   items:[]
// },
// {
//   category:"Bulb",
//   items:[]
// },
// {
//   category:"Bulb",
//   items:[]
// },
// {
//   category:"Bulb",
//   items:[]
// },
// Straight Bottom Fittings
// 2 Way Skytrust S/W
// 4 Way Skytrust S/W
// 8 Way Skytrust S/W
// 12 Way Skytrust S/W
// 13A Double Socket
// Consumer Unit 2 Way
// Consumer Unit 4 Way
// Consumer Unit 6 Way
// Consumer Unit 8 Way
// AC Switch
// 1 Gang 2 Way
// 2 Gang S/W
// 3 Gang S/W
// Ty Socket
// RCD Breaker 100A
// RCD Breaker 63A
// RCD Breaker 32A
// 13A Single Socket
// 155B Delta Extension
// 506 Extension
// 504 Extension
// Tower Clip 6mm
// Tower Clip 8mm
// Tower Clip 10mm
// Tower Clip 12mm
// Tower Clip 22mm
// Conduit Fan Regulator
// Surface Fan Regulator
// Tester
// Hanging Holder
// 2 Pole Breaker
// Three Phase 3 Pole - 32A
// Three Phase 4 Pole - 32A
// Three Phase 4 Pole -100A
// Three Phase 4 Pole - 63A
// Multi Socket
// Phono to Jack
// Phono to Phono
// 250W Chock
// 400W Chock
// Street Bulb Holder
// Emergency Bulb
// Patral Box 3x3
// Patral Box 3x6
// Conduit Box 3x3
// Conduit Box 3x6
// Ceiling Rose
// Star Screw
// 1.8 Lts Rice Cooker
// 1.5 Lts Rice Cooker
// Photocell
// 32A 3ph Isolator
// 63A 3ph Isolator
// 32A Change Over
// 63A Change Over
// Circular box
// Harvells 6 Way
// Harvells 8 way
// Harvells 12 Way S/W
// Standard 6 Way S/W
// Standard 12 Way S/w
// 6+2 Indonasis
// 8 Way Indonasis
// 8+2 Indonasis
// 4 Feet Earthrod Normal
// 6 Feet Earthrod Normal
// 4 Feet Pure Copper
// 6 Feet Pure Copper
// PVC Pipe White
// PVC Pipe Ash
// Screew Drive Set 9 Pieces
// Screew Drive Set 7 Pieces
// Screew Drive Set 6 Pieces
// Knife Change Over 63A
// Knife Change Over 32A
// Knife Change Over 100A
// Two Colour Holder Bulb
// LED Driver
// 13A Plugs
// Insulation Tape
// Paper Insulation Tape
// Fishing tape / Draw Wire
// Bender
