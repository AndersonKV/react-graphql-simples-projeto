const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
// allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://adm_jr:juniorjunior@cluster0-xage2.mongodb.net/semana09?retryWrites=true&w=majority',{
	useNewUrlParser:true,
	useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('conectado ao banco de dados');
})



app.use(express.json());
app.use(routes);

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
 
 


app.listen(4000, () => {
    console.log('now listening for request on port 4000')
}) 

