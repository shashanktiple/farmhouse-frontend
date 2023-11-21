import React, { useState } from 'react'
import './item.scss';
import onions from '../../assets/img/onions.png';
import notSaved from '../../assets/img/notSaved.png';
import saved from '../../assets/img/saved.png';
import arrow from '../../assets/img/drop-down-arrow.png';
import ItemDetails from '../itemDetails/itemDetails';
import { ItemModel } from '../../models/itemModel';


export default function Item({item, isGrid}: {item: any, isGrid: boolean}) {
  const [changeBookmark, setBookmark] = useState(false);
  const [showQty, setShowQty] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity.length > 0 ? item.quantity[0] : '');

 

  function closeDropDown(val: any){
    setShowQty(!showQty);
    setQuantity(val);
  };


  
  return (
    <div className={isGrid ? 'container-item' : 'container-item-row'} onClick={() => <ItemDetails itemObj={item}/>}>
      <div className='wrapper-item'>  
        <section className='img-section'>
          <img src={onions} />
        </section>
        <section className='details-section'>   
          <label className='item-name'>{item.name}</label>
          <label className='item-price'>{item.price}/{item.unit}</label>
          <div className="quantity-dropdown global-border-radius">
            <div className='quantity-header global-border-radius'>
              <label className='label-text-qty global-border-radius'  onClick={()=>setShowQty(!showQty)}>Qty
                <img className='img-arrow' src={arrow} />
              </label>
              <label className='label-qty'>{quantity}</label>
            </div>
            <div className='quantities'>
            {
              showQty ?
              <div className="dropdown-content global-border-radius " id='dropdown'>
                {
                  
                  item.quantity.map((option: any, i:number)=>{
                    return(
                      <button key={i} value={option} onClick={()=>closeDropDown(option)}>{option}</button>
                    )
                  })
                }
               
              </div> : null
              }
            </div>
          </div>
        </section>
        <section className='cart-save-section'>
          {
            isGrid?
              <div className="save-for-later" onClick={()=>setBookmark(!changeBookmark)}>
                {
                  
                  changeBookmark ? <img src={saved} /> : <img src={notSaved} /> 
                }
              </div>
              :
               <button className='save-for-later-button global-border-radius'>Save for later</button>
              
            }
            <button className='cart-button global-border-radius'>Add to Cart</button>

              
        </section>
      </div>
    </div>
  )
}
