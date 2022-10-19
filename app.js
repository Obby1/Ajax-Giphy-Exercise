console.log("Let's get this party started!");

async function getGiphy (term){
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params:
        {
        api_key:"rKlShEzi8sgoQWLVV74sSNAze79uy7p2", 
        q:term,
        limit: 1, 
        }
    });
    // console.log(res.data.data[0].images.original.url);
    // console.log(res.data.data[0].url);
    $(`#results`).append(`<img src= ${res.data.data[0].images.original.url}>` );
}



const $btn = $(`#btn`).on("click", function(event){
    event.preventDefault();
    getGiphy($(`#search`).val())
    $(`#search`).val(``);
    })
 
const $reset = $(`#reset`).on("click", function(event){
    event.preventDefault();
    $(`#results`).empty();
})
// token: rKlShEzi8sgoQWLVV74sSNAze79uy7p2