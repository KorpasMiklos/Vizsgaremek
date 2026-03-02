const app = require('./index');

//Port
const PORT = 3000;
app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server is running on ${PORT}`);
});