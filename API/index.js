import express from 'express'; 




const app = express();

const PORT = 5001;

app.get('/', (req, res) =>{
    return res.send('The API is working');
});

app.listen(PORT, () => {
    console.log('server is running on PORT' +PORT);
});


app.listen(PORT, () => {
    console.log ('serever is running on PORT ${PORT}');
})

