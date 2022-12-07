let request=new XMLHttpRequest();

    request.open("GET","https://restcountries.com/v3.1/all")  

    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response)                     
        data=data.filter((country)=>country.population<200000)     
        data.sort((a,b)=>a.population-b.population);   

        console.log("Countries have population less than 2Lakhs are shown below:")
        data.forEach((element,i) => {

            console.log(`
            ${i} ${element.name.common}
            
            Population : ${element.population}`);                  
        })
    }