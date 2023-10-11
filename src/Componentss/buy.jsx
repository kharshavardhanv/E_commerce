import React, { useState} from 'react';

const products = [
    { id: 1, category: "Shirts", name: "Twill Shirt", description: "Organic Cotton Twill Men's Long Sleeve Button Shirt", size: "XL", color: "green", amount: 6500, currency: "Naira", currencySymbol: "Rs", img: "data:image/jpeg;base64,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"},
    { id: 2, category: "Shirts", name: "Kein No Internet Shirt", description: "Organic Embroidered Women's High Quality T-shirt", size: "M", color: "white", amount: 3500, currency: "Naira", currencySymbol: "Rs", img: "data:image/jpeg;base64,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"},
    { id: 3, category: "Shirts", name: "Hearts Shirt", description: "Eco-friendly Female Shirt with Hearts Print", size: "M", color: "white, red", amount: 5500, currency: "Naira", currencySymbol: "Rs", img: "https://th.bing.com/th/id/OIP.sopWx6gw8FVFt1dr6z72nQHaGa?w=218&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    { id: 4, category: "Shirts", name: "Sew Cool T-Shirt", description: "Sustainable Shirt", size: "L", color: "white", amount: 3000, currency: "Naira", currencySymbol: "Rs", img: "https://th.bing.com/th/id/OIP.X8ICII5c7Y9h6Y90LDFT_wHaHa?w=140&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    { id: 5, category: "Shirts", name: "Long Sleeve Blouse", description: "Organic 100% Linen Women Shirt", size: "S", color: "brown", amount: 6000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=1BLgGcRua0u6DqTNGRzs1fCjOnPeQ_-q0"},
    { id: 6, category: "Jackets", name: "Thermore Jacket", description: "Eco-friendly Thermore Padded Men's Jacket", size: "M", color: "Black", amount: 10000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=12A4CDFkwYCjZUXHQvlxtOaEGauV8wCLL"},
    { id: 7, category: "Jackets", name: "Brown Jacket", description: "Eco-friendly Unisex puffer jacket", size: "L", color: "brown", amount: 12000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=1sJIzarA1_Vq5ac3orvqDiiJyIGBy4NAM"},
    { id: 8, category: "Jackets", name: "Female Winter Coat", description: "Ethical Winter Coat Women's Wear", size: "L", color: "green", amount: 17000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=1q4-wgHZSleKpUP0QPidOXWIPFjMvybAd"},
    { id: 9, category: "Jackets", name: "Vegan Cotton Blazer", description: "Stylish Sustainable Female Blazer with a Long Straight Silhouette", size: "S", color: "orange", amount: 20000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=154ZzJG6GwDOAUrmw9qXTI_C3dIiSp3M5"},
    { id: 10, category: "Jackets", name: "Italian Vee Blazer", description: "Men's Designer Semi-Formal Blazer", size: "M", color: "grey", amount: 25000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=18CGzjaY75s0lsYOJBwAL5nsV4gew5xmP"},
    { id: 11, category: "Skirts", name: "Spandex Knee-slit Skirt", description: "Eco-friendly cotton spandex pencil women skirt", size: "S", color: "grey", amount: 4000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=1H5F08CptJdikNKHxmfvErrThbIRyrqlB"},
    { id: 12, category: "Skirts", name: "Vaude Sesvenna Skirt", description: "Eco-friendly Women's Reversible Skirt", size: "L", color: "black", amount: 3000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=17DmwVY_6lGoFEngvgAHpgEpuTSGHCwZ9"},
    { id: 13, category: "Pants", name: "Cotton Chinos Pants", description: "Organic Men Chinos Trousers", size: "M", color: "green", amount: 5500, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=1rjpdk2vAQeaBwUFIiCZOLrztbpdtt8Wl"},
    { id: 14, category: "Pants", name: "Women Bell Pants", description: "Stylish chic Sailor Pierrot pants, made of Hemp and organic cotton", size: "L", color: "brown", amount: 4000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=1MYcPDw2SHbeUpkteUJnmdXvwGesexSjF"},
    { id: 15, category: "Pants", name: "Flores Pants", description: "Women Patterned Lounge Wear Trousers", size: "M", color: "Purple", amount: 5000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=1xc_HGvmKA6-Dugt0nfWYOahhCfFE11cb"},
    { id: 16, category: "Dresses", name: "PopSugar Costume Gown", description: "Recycled Newspaper women's dress", size: "M", color: "mixed", amount: 35000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=1Cq1kmTME9CvEyHhjICOSjRevQ4xAaeDT"},
    { id: 17, category: "Bags", name: "Colorful Shoulder Bag", description: "Landscape painting print casual tote bag", size: "One size fits all", color: "white", amount: 11000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=1Xa2PtUrtYWz3dbIQ_8QPWgs8iZvzCuKn"},
    { id: 18, category: "Bags", name: "Bamboo Handbag", description: "Handmade Thai bamboo handbag", size: "S", color: "brown", amount: 15000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=13fwiVbMxmGilqbDLqTD_0nlzrRuiz8qF"},
    { id: 19, category: "Bags", name: "Sangeetha Flowery Bag", description: "Women Jute Twist Lock Handbag", size: "M", color: "brown", amount: 10000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=11ato5-OKHbdcqCCEMwpJWrc9riu6boUp"},
    { id: 20, category: "Bags", name: "Reusable Jute Bag", description: "Heavy Duty foldable handicraft bag with comfortable and durable handles", size: "L", color: "brown", amount: 8000, currency: "Naira", currencySymbol: "Rs", img: "https://drive.google.com/uc?export=view&id=1i0AVP277xgwZTrSre6UGwxh1OHQFg9xK"},
]



function Buy(){
    
    const [cart, setCart]= useState([])
    const [cartTotal, setCartTotal] = useState (0)
    console.log(cart);
   const handleCartItems = (item) => {
        cart.push(item);
        setCart(cart);
        const iniVal = 0;
        let altCart = cart;
        const pTotal = altCart.reduce((total, item) => total + item.amount, iniVal);
        setCartTotal(pTotal)
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                   
                }
            })
            
            setCart([...cart])
            const iniVal = 0;
        let altCart = cart;
        const pTotal = altCart.reduce((total, item) => total + item.amount, iniVal);
        setCartTotal(pTotal)
           
        }
    }

    const emptyCart = id =>{
        if(window.confirm("Do you want to empty your cart?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index)
                }
            })
            
            setCart([...cart])
            const iniVal = 0;
        let altCart = cart;
        const pTotal = altCart.reduce((total, item) => total + item.amount, iniVal);
        setCartTotal(pTotal)
           
        }
    }

    return (
        <>
                <div className="boxy" style={{ display: "flex", flexWrap: "wrap" }}>
               {products && products.map((item, i ) =>{
        
                return(
               <div className="box" key={i} style={{ padding: "25px", margin: "30px", backgroundColor:"ivory" }}>
                <h3> {item.name} </h3>
                <img src={item.img} alt="loading..." />
                <p> {item.description} </p>
                <span> Size: {item.size} </span>
                <div style={{ display: "block", padding: "3px" }}>Price: {item.currencySymbol} {item.amount} </div>
                <button onClick={() => handleCartItems(item)}> Add to Cart </button>
               </div>
                    )
                })}
               </div>

            

            <div className="cart cart-section" id="cart" style={{ margin: "30px" }}>
                        <div >
                        <h2>My Cart</h2>
                            {cart && cart.map((cartItem, i) => {
                                return (
                                   
                                    <div key={i}>
                                        <img src={cartItem.img} alt="loading..." />
                                        <span>{cartItem.name}</span> | {" "}
                                    
    <button className="delete" onClick={() => emptyCart(products._id)}> Empty Cart </button>
                                        
                                        <span>{cartItem.currencySymbol} {cartItem.amount}</span>
                                        <div style={{ display: "flexbox" }}>
                                        

                                        <button className="box1" onClick={() => handleCartItems(cartItem)}> + </button>
                                        <button className="box1" onClick={() => removeProduct(products._id)}> X </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
<br></br>
                        <span style={{ fontSize: "30px" }}>Total: {"Rs"}{cartTotal}</span>
                    </div>  
    


                </>
                )
}




                export default Buy;



