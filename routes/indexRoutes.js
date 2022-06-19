const express = require('express')


const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        res.send(
            `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />    
                <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/3079/3079256.png" type="image/x-icon" />
                <title>IndianPolityAPI</title>
                <style>
                  body {
                    background-color: #fafbfb;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: monospace;
                    font-size: 1rem;
                  }
                  main {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 20px;
                    background-color: #fff;
                    max-width: 1000px;
                    padding: 20px;
                    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
                  }
                  a {
                    text-align: center;
                  }
                  h4 {
                    margin-top: 20px;
                    margin-bottom: 0;
                  }
                </style>
              </head>
              <body>
                <main>
                  <img src="https://cdn-icons-png.flaticon.com/512/3079/3079256.png" height="125" />
                  <h1>IndianPolityAPI</h1>
            
                  <h2>Presidents Section</h2>
            
                  <h4>List all Presidents</h4>
                  <a href="https://indianpolity-api.herokuapp.com/api/presidents/"
                    >https://indianpolity-api.herokuapp.com/api/presidents/</a
                  >
            
                  <h4>List President by ID</h4>
                  ID Range: 001 - 016<br /><a
                    href="https://indianpolity-api.herokuapp.com/api/presidents/001"
                    >https://indianpolity-api.herokuapp.com/api/presidents/001</a
                  >
            
                  <h4>Search Presidents by name</h4>
                  <a
                    href="https://indianpolity-api.herokuapp.com/api/presidents/search/kalam"
                    >https://indianpolity-api.herokuapp.com/api/presidents/search/kalam</a
                  >
            
                  <br />
                  <br />
            
                  <h2>Vice Presidents Section</h2>
                  <h4>List all Vice Presidents</h4>
                  <a href="https://indianpolity-api.herokuapp.com/api/vicePresidents/"
                    >https://indianpolity-api.herokuapp.com/api/vicePresidents/</a
                  >
                  <h4>List Vice President by ID</h4>
                  ID Range: 1 - 13<br /><a
                    href="https://indianpolity-api.herokuapp.com/api/vicePresidents/1"
                    >https://indianpolity-api.herokuapp.com/api/vicePresidents/1</a
                  >
                  <h4>Search Vice Presidents by name</h4>
                  <a
                    href="https://indianpolity-api.herokuapp.com/api/vicePresidents/search/Dr. Sarvepalli Radhakrishnan"
                    >https://indianpolity-api.herokuapp.com/api/vicePresidents/search/Dr.
                    Sarvepalli Radhakrishnan</a
                  >
                  <p>
                    Data Citation: “TCPD Presidents and Vice-Presidents of India Dataset (TCPD-PVPD), 1950-2021”, Trivedi Centre for Political Data, Ashoka University.
                  </p>
                </main>
              </body>
            </html>
            
            `
        )
    });

module.exports = router;
