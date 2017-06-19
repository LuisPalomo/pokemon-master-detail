// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express

var cors = require('cors');                 // enable CORS requests
app.use(cors());

var data       = require('./pokemon.data');

var port = process.env.PORT || 8080;        // set our port


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// on routes that end in /pokemons
// ----------------------------------------------------
router.route('/pokemons')

    // get all the pokemons (accessed at GET http://localhost:8080/api/pokemons)
    .get(function(req, res) {
        res.json(data.pokemonList);
    });

// on routes that end in /pokemons/:pokemon_id
// ----------------------------------------------------
router.route('/pokemons/:pokemon_id')

    // get the pokemon with that id (accessed at GET http://localhost:8080/api/pokemons/:pokemon_id)
    .get(function(req, res) {
        var pokemonFound = data.pokemonList.find(function (pokemon) {
            return pokemon.id === Number(req.params.pokemon_id);
        });
        if (pokemonFound) {
            res.json(pokemonFound);
        } else {
            res.status(404).send('Pokemon not found!');
        }
    });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);