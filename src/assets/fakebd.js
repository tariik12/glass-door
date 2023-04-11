
const addToDb =(data)=>{
    const product = data;
        const previousBookMark = JSON.parse(localStorage.getItem("bookmark"))   
          let bookmark = [];
        if(previousBookMark){

            bookmark.push(...previousBookMark,product)
      localStorage.setItem("bookmark",JSON.stringify(bookmark))
        }
        else{

            bookmark.push(product);
              localStorage.setItem("bookmark",JSON.stringify(bookmark))
        }
}

const getShoppingCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('bookmark');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
  
    return shoppingCart;
}



export {
    addToDb,
    getShoppingCart,

}
