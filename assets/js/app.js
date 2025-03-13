const showcard = document.getElementById("showcard");

const newCountries=(display = countries)=>{
    let result=``;
    display.forEach((flag)=>{
        result+=`<div class="col-lg-2 col-md-4 col-sm-6 mb-3">
                <div class="card h-100 shadow-sm">
                    <img src="${flag.flag}" alt="${flag.name}"
                        class="img mb-3" title="${flag.name}">
                    <h3 class="text-center">${flag.name}</h3>
                    <p class="mb-0 px"><span style="font-weight: bold;">Capital:</span>${flag.capital}</p>
                    <p class="mb-0 px"><span style="font-weight: bold;">Languages:</span>${flag.languages}</p>
                    <p class="mb-0 px"><span style="font-weight: bold;">Population:</span>${flag.population}</p>
                </div>
            </div>`
    })
    showcard.innerHTML=result;
}
newCountries();


const country = [...new Set(countries.map((flag)=>{
    return flag
}))]

const searchBar=document.getElementById('searchBar');

const searchEvent=(eve)=>{
    const searchData=eve.target.value.toLowerCase();
    const filterData= country.filter((item)=>{
      return(
        item.name.toLowerCase().includes(searchData) || item.capital && item.capital.toLowerCase().includes(searchData) || item.languages.some(lang=>{
            return lang.toLowerCase().includes(searchData);
        })
        )
    })
    newCountries(filterData)
};
searchBar.addEventListener("keyup",searchEvent);


const sortName= document.getElementById('sortName');

const onclickSortName=(eve)=>{
    
    if(eve.target && eve.target.classList.contains("default")){
        country.sort((a,b)=>{
            return a.name.localeCompare(b.name)
        })
        newCountries(country);
        sortName.classList.remove("default");
        sortName.classList.add("a-z");
    }else if(eve.target && eve.target.classList.contains("a-z")){
        country.sort((a,b)=>{
            return b.name.localeCompare(a.name)
        })
        newCountries(country);
        sortName.classList.remove("a-z")
        sortName.classList.add("z-a")
    }else{
        sortName.classList.add('default')
       return  newCountries();
    }
}

sortName.addEventListener('click',onclickSortName);

const sortCapital= document.getElementById('sortCapital');
const onclickSortCapital=(eve)=>{
    console.log(eve.target);
    
    if(eve.target && eve.target.classList.contains("default")){
        country.sort((a,b)=>{
            if(!a.capital || !b.capital ){
                return 0;
            }
            return a.capital.localeCompare(b.capital);
        })
        newCountries(country);
        sortCapital.classList.remove("default");
        sortCapital.classList.add("a-z");
    }else if(eve.target && eve.target.classList.contains("a-z")){
        country.sort((a,b)=>{
            if(!a.capital || !b.capital ){
                return 0;
            }
            return b.capital.localeCompare(a.capital);
        })
        newCountries(country);
        sortCapital.classList.remove("a-z")
        sortCapital.classList.add("z-a")
    }else{
        sortCapital.classList.add('default')
       return newCountries();
    }
}
sortCapital.addEventListener('click',onclickSortCapital);

const sortPopulation= document.getElementById('sortPopulation');

const onclickSortPopulation=(eve)=>{
    console.log(eve.target);
    
    if(eve.target && eve.target.classList.contains("default")){
        country.sort((a,b)=>{
            return a.population - b.population
        })
        newCountries(country);
        sortPopulation.classList.remove("default");
        sortPopulation.classList.add("a-z");
    }else if(eve.target && eve.target.classList.contains("a-z")){
        country.sort((a,b)=>{
            return b.population - a.population
        })
        newCountries(country);
        sortPopulation.classList.remove("a-z")
        sortPopulation.classList.add("z-a")
    }else{
        sortPopulation.classList.add('default')
       return newCountries();
    }
}
sortPopulation.addEventListener('click',onclickSortPopulation);


// let sortedCountries=countries.toSorted((a,b)=>{
//     return b.population - a.population
// });
//  const top10Countries=sortedCountries.slice(0,10);

//  let TotalPop=countries.reduce((acc,cv)=>{
//     return acc+=cv.population
//  },0);
//  console.log(TotalPop);

//  let percentageOftop10= top10Countries.forEach(f=>f.percentagePopulation = ((f.population / TotalPop)*100));
//  console.log(percentageOftop10);
 
// function calculatePercentage() {
//     let sortByPop10 = newCountry.toSorted((a, b) => b.population - a.population).splice(0,10)
//     let totalPop = newCountry.reduce((acc,cv)=>{return acc += cv.population},0)
//     sortByPop10.forEach(c=>{
//       let popPercentage  = (c.population/totalPop)*100
//       return c.PopulationPercent= popPercentage;
//     })
    // const graphCountry = document.getElementById("graphCountry");
    // let result1 = <li class="list-group-item grphCountry">World</li>;
    // sortByPop10.forEach(c=>{
    //   result1 += <li class="list-group-item grphCountry">${c.name}<img src="${c.flag}" alt="${c.flag}"></li>
    // })
    // graphCountry.innerHTML = result1;
  
//     const graphData = document.getElementById("graphData");
//     let result = <li class="list-group-item"><span style="width:100%">World Population ${totalPop}</span></li>;
//     sortByPop10.forEach(c=>{
//       result += `
//                 <li class="list-group-item d-flex pr-2 justify-content-between"><span style="width:${c.PopulationPercent}%">${c.currencies[0].code}</span>${(c.PopulationPercent).toFixed(3)} %</li>
//                 `
//                 // <label for="cname">${c.name}</label>
//     })
//     graphData.innerHTML = result;
//   }
//   calculatePercentage()
// //  map((percent)=>{
//     return (percent.population / TotalPop)* 100  
//   })
//  const percentageOftop10= top10Countries.map((percent)=>{
//     return (percent.population / TotalPop)* 100
//  })
//  console.log(percentageOftop10);
//  const countiresNames=document.getElementById('countiresNames')
//  let labelStructure=`<li>Top 10 countires names</li>`;
//     top10Countries.forEach((_)={
//         labelStructure+=`<li>Top 10 countires names</li>`;
//     });


// let totalPop=countries.reduce((acc,cv)=>{ return acc+=cv.population },0);
// console.log(totalPop);

function calculatePercentage(){
    let sortedCountries=countries.toSorted((a,b)=> b.population - a.population ).slice(0,10);
    
    
 let totalPop=countries.reduce((acc,cv)=>{
    return acc+=cv.population
 },0);
     
     sortedCountries.forEach(p=>{
        let popPercentage= (p.population/totalPop)*100
        // console.log(popPercentage);
        
        return p.populationPercentage= popPercentage;
     })
     const graphCountry=document.getElementById("countiresNames");
     let result1=`<li class="list-group-item">world countries name</li>`;
     sortedCountries.forEach((f)=>{
        result1 +=`<li class="list-group-item">${f.name}</li>`
     })
     graphCountry.innerHTML=result1;

     
let showGraph=document.getElementById('showGraph');
 let graphStructure=`<li class="list-group-item world"><span>world population ${totalPop}</span></li>`;
    sortedCountries.forEach((graph)=>{
        graphStructure+=`<li class="list-group-item" style="width:${graph.populationPercentage}%"></li><span >${graph.population}</span>`
    })
    showGraph.innerHTML=graphStructure;
}
    //  const graphCountry = document.getElementById("graphCountry");
    // let result1 = <li class="list-group-item grphCountry">World</li>;
    // sortByPop10.forEach(c=>{
    //   result1 += <li class="list-group-item grphCountry">${c.name}<img src="${c.flag}" alt="${c.flag}"></li>
    // })
    // graphCountry.innerHTML = result1;
// calculatePercentage();



// const showGraph=document.getElementById('showGraph');

// const graphDisplay=(display=top10Countries)=>{

//     let graphStructure=`<li class="list-group-item world"><span>world population</span>${TotalPop}</li>`;
//     display.forEach((graph)=>{
//         graphStructure+=`<li class="list-group-item"><span style="width:%">${graph.name}</span>${graph.population}</li>`
//     })
//     showGraph.innerHTML=graphStructure;
// }
// graphDisplay();



















