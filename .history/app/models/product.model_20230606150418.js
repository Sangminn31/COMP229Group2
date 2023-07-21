module.exports = mongoose => {

    const SportsStore = mongoose.model(
  
      "products",
  
      mongoose.Schema(
  
        {
  
              name: String,
  
              description: String,
  
              price:Number,
  
              category:String
  
        },
  
       
  
      )
  
    );
  
   
  
    return Products;
  
  };