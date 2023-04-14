import { toast } from 'react-hot-toast';
const addToDb =(data)=>{
    const feature = data;
        const previousFeatured = JSON.parse(localStorage.getItem("appliedJob"))   
          let appliedJob = [];
        if(previousFeatured){
            const previous = previousFeatured.find(feature => feature.id ===data.id)
            if(previous){
                
                toast.error('Already Added')
            }
            else{
                appliedJob.push(...previousFeatured,feature)
                localStorage.setItem("appliedJob",JSON.stringify(appliedJob))
            }
    
        }
        else{

            appliedJob.push(feature);
              localStorage.setItem("appliedJob",JSON.stringify(appliedJob))
              toast.success('Apply successful!')
        }
}

const getFeatureCard = () => {
    let shoppingCart = [];
    const storedCart = localStorage.getItem('appliedJob');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
  
    return shoppingCart;
}
export {
    addToDb,
    getFeatureCard,

}
