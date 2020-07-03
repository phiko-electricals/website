const productsArr = [
  {
    category:"Lighting",
    items:["Angle Lamp Holder","30W Samsung LED Light","30W Gold LED Bulb","2U Bulb","6W LED Bulb Round Surface","9W Round LED Bulb","12W Round LED Bulb","6W Conduit LED","12W conduit LED","16W Two Colour LED Surface","18+6W LED Bulb Surface","9W LED Surface","18+6W LED Surface","24W LED Surface Remote","250W Street Bulb","400W Street Bulb","150W LED Bulb 3 Eye","50W One Eye LED Compund Light","100W Platy LED Compound Light","105 Energy Saving Bulb","Emergency Bulb","Two Colour Holder Bulb","Street Bulb Holder"]
  },
  {
    category:"Fans",
    items:["Standard Long Blade Fan","Standard Short Blade Fan","Orent Long Blade","Orent Short Blade","Delta Fan Long Blade","Delta Fan Short Blade","Conduit Fan Regulator","Surface Fan Regulator"]
  },
  {
    category:"Cables",
    items:["1.5m2 Cable Standard","2.5m2 Cable Standard","2.5m2 Cable Classic","1.5m2 Cable Classic","1.5m2 Cable Tropical","2.5m2 Cable Tropical","4m2 Cable tropical","4m2 Cable Brsan","2.5m2 Cable Brsan","1.5 Cable Brsan","TV Cable","10m Cable","16m2 Cable","Focus Flexible wire","Standard Flexible wire"]
  },
  {
    category:"Electrical Switches",
    items:["RCD Breaker 100A","RCD Breaker 63A","RCD Breaker 32A","2 Pole Breaker","Consumer Unit 2 Way","Consumer Unit 4 Way","Consumer Unit 6 Way","Consumer Unit 8 Way","Harvells 6 Way","Harvells 8 way","Harvells 12 Way S/W","Standard 6 Way S/W","Standard 12 Way S/w","2 Way Skytrust S/W","4 Way Skytrust S/W","8 Way Skytrust S/W","12 Way Skytrust S/W","AC Switch","1 Gang 2 Way","2 Gang S/W","3 Gang S/W","Three Phase 3 Pole - 32A","Three Phase 4 Pole - 32A","Three Phase 4 Pole -100A","Three Phase 4 Pole - 63A","32A 3ph Isolator","63A 3ph Isolator","32A Change Over","63A Change Over", "Knife Change Over 63A","Knife Change Over 32A","Knife Change Over 100A"]
  },
  {
    category:"Clips",
    items:["Tower Clip 6mm","Tower Clip 8mm","Tower Clip 10mm","Tower Clip 12mm","Tower Clip 22mm"]
  },
  {
    category:"Sockets & Extensions",
    items:["Ty Socket","13A Single Socket","155B Delta Extension","506 Extension","504 Extension","Multi Socket","13A Double Socket"]
  },
  {
    category:"Conduit Materials",
    items:["Patral Box 3x3","Patral Box 3x6","Conduit Box 3x3","Conduit Box 3x6","Circular Box","PVC Pipe White","PVC Pipe Ash"]
  },
  {
    category:"Rice Cookers",
    items:[,"1.8 Lts Rice Cooker","1.5 Lts Rice Cooker"]
  },
  {
    category:"Earthing",
    items:["4 Feet Earthrod Normal","6 Feet Earthrod Normal","4 Feet Pure Copper","6 Feet Pure Copper"]
  },
  {
    category:"Uncategorized Products",
    items:["Straight Bottom Fittings","Tester","Hanging Holder","Phono to Jack","Phono to Phono","250W Chock","400W Chock","Ceiling Rose","Star Screw","Photocell","6+2 Indonasis","8 Way Indonasis","8+2 Indonasis","Screew Drive Set 9 Pieces","Screew Drive Set 7 Pieces","Screew Drive Set 6 Pieces","LED Driver","13A Plugs","Insulation Tape","Paper Insulation Tape","Fishing tape / Draw Wire","Bender"]
  },
  {
    category:"And many more +",
    items:["Call to verify"]
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