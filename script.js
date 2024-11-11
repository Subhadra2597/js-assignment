let productEl=""

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>
                    {
                        console.log(json)
               for (let product of json){
               productEl+=` <div class="col-3">
                        <div class="card" >
                            <img src="${product.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">"${product.title}"</h5>
                            <p class="card-text">"${product.description}"</p>
                            <p class="card-text">Price:"${product.price}"</p>
                            <a href="#" class="btn btn-primary">Buy</a>
                            </div>
                        </div>
                        </div>`

                   let productList=document.getElementById("productList")     
                   productList.innerHTML=productEl
               }
               
               
                }
        
        )