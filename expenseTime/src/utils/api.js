var api = {

  authExpensify(userDetails) {
    return fetch(`https://api.expensify.com?command=Authenticate&partnerName=applicant&partnerPassword=d7c3119c6cdab02d68d9&partnerUserID=${userDetails.email}&partnerUserSecret=${userDetails.password}&useExpensifyLogin=false`)
      .then((res) => {
        return res.json();
      })
  }

};

module.exports = api;
