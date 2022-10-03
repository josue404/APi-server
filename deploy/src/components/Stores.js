import React, {useState, useEffect} from "react";


export const Stores = () => {

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [nameProduct,priceProduct] = useState('')

    const [stores, setStores] = useState([])
    var i = 1;

    //<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


 
    


    const handleSubmit = async (e) => {
        let url = 'http://127.0.0.1:5000/store'
        fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
        const mostrarData = (data) => {
            console.log(data)
            let body = ''
            for (let i = 0; i<data.length; i++){
                body += `<tr><td>${data[i].name}</td><td>${data[i].item}</td><td>${data[i].price}</td></tr>`
            }

            document.getElementById('data').innerHTML = body

        /*e.preventDefault();
        const res = await fetch('http://localhost:5000/store',{
            //method:'POST',
            mode: "no-cors",
            headers: {
                'Content-Type':'application/json',
                'Acces-Control-Allow-Origin':'*'
            },
            /*body: JSON.stringify({
                name,
                price
            })*/
        //})
        //const data = await res.json();
        //console.log(res)
        //await getStores();

    }
}
    /*

    const getStores = async ()=> {
        const res = await fetch('http://localhost:5000/store')
        const data = await res.json();
        setStores(data)
    }
    

    useEffect(() =>{
        getStores();

    }, [])*/

    return (

        <div className="row">
            <div className="col-md-4">
                <form onSubmit={handleSubmit} className="card card-body">
                    <div className="form-group">
                        <input type="text" onChange={e => setName(e.target.value)} value={name}
                        className="form-control"
                        placeholder="Name of the store"
                        autoFocus/>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={e => priceProduct(e.target.value)} value={nameProduct}
                        className="form-control"
                        placeholder="Name of the product"
                        autoFocus/>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={e => setPrice(e.target.value)} value={price}
                        className="form-control"
                        placeholder="Price"
                        autoFocus/>
                    </div>
                    <button className="btn btn-primary btn-block">
                        Create
                    </button>
                </form>
            </div>
            <div className="col md-6">
                <table className="table table-striped">
                   <thead>
                    <tr>
                        <th>Store</th>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                   </thead>
                   <tbody>
                      {stores.map(store => (
                          <tr key={i+1}>
                            <td>${store.name}</td>
                            <td>${store.price}</td>
                          </tr>
                      ))}
                   </tbody>
                </table>

            </div>
        </div>
    )
}
