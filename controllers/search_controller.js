const apiSetup = require('../service/constructor-hubspot.js');
const axios = require('axios');
// const multiplePages = require('../service/multiplePages.js')

exports.index = (req, res) => {
  res.render('search/search', {
    layout: 'main-searchContacts'
  })
}

exports.search = (req, res) => {

  let pageLimit = 0;
  let investor = [];
  const queryParam = JSON.stringify(req.query.queryText); 
  const queryInit = apiSetup.objBuild(queryParam, pageLimit);

  function saveObjectData(containerArr, apiData) {
    for(let i =0; i< apiData.data.results.length; i++) {
      containerArr.push(apiData.data.results[i].properties);
    }
    return containerArr;
  }



  axios(queryInit).then((apiRes) => {
    
    // adds all of the "first" result objects
    investor = saveObjectData(investor, apiRes);

    let numPages = Math.trunc(apiRes.data.total/100); 

    // initial check if there are additional results
    if (numPages !== 0) {
      console.log("There are a lot of objects")
      for (let i=0; i < numPages; numPages--) {

        pageLimit = pageLimit + 100;
        const queryNext = apiSetup.objBuild(queryParam, pageLimit);

        axios(queryNext).then((apiRes) => {
          investor = saveObjectData(investor, apiRes);
          console.log(`There are `, investor.length, ` inside investor obj`);

          res.render('search/search', {
            layout: 'main-searchContacts',
            investor: investor
          })
        })
      }
    } else {
      // else will run if # of results returned is less than 100
      res.render('search/search', {
        layout: 'main-searchContacts',
        investor: investor
      })
  
    }
  })
  .catch((error) => {
    console.log(error);
  })
}

  //   // investor.sort(
  //   //   (firstValue, secondValue) => {
  //   //     const firstLNAME = firstValue.properties.lastname;
  //   //     const secondLNAME = secondValue.properties.lastname;
    
  //   //     if (firstLNAME < secondLNAME) {
  //   //       return -1;
  //   //     } else if (firstLNAME > secondLNAME) {
  //   //       return 1;
  //   //     }
  //   //       return 0;
  //   // })

  //   // console.log(investor);