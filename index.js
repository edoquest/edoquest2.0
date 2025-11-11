const express = reqire ("express") ;
const path =  require ("path") ;
const app = express () ;

//Serve tutti i file della cartella principale (edoquest2.0
app.use(express.static(___dirname)) ;

// porta per Render o locale
cpnst port = ProcessingInstruction.env.PORT  ||
3000,

app.listen(port,()  => {
    console.log( Server EdoQuest in ascolto su  http://loclhost : $ {port}" )"
});