
import {products} from "./constants/data.js";
import Product from "./model/product-schema.js";


const DefaultData = async() => {

      if(await Product.countDocuments({})== 0){

    try {
        
        await Product.insertMany(products);

        console.log("Data imported successfully");
    } catch (error) {
        console.log("Error while inserting default data", error);
        
    }}

}

export default DefaultData;