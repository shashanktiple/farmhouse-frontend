import React, { useReducer, useState } from 'react'
import './contents.scss';
import Item from '../../components/Item/item';
import { ItemModel } from '../../models/itemModel';
import { NavAction } from '../../models/navAction';
import grid from '../../assets/img/grid.png';
import home from '../../assets/img/home.png';



export default function Contents() {

  const categories = require('../../Database/categories.json');
  const [isGrid, setGrid] = useState(true);
  const [category, setCategory] = useState('All');
  const [path, setPath] = useState([{name: 'Home', link: 'home'}]);

  function navItemReducer(navItems:string[], action:NavAction): string[] {
    switch (action.type) {
      case 'push':
        return [...navItems, action.value];
      case 'pop':
        navItems.pop();
        return navItems;
      default:
          return navItems;
    }
  }

  const [navItems, navItemDispatcher] = useReducer(navItemReducer, ["Contents", "All"]);

  // const navItems: string[]= [];
  // navItems.push('Contents');
  // navItems.push('All');

 const allItems: ItemModel[] = require('../../Database/sample-db.json').map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
      available: item.available,
      unit: item.unit,
      unitPrice: item.unitPrice,
      quantity: item.quantity
    }
  });
  const [itemsByCategory, setItemsByCategory] = useState(allItems);
  
  
  const getAllByCategory = (category: string) => {
    if(category === 'All') 
      setItemsByCategory(allItems); 
    else  
      setItemsByCategory(allItems.filter(item => item.category === category));

    setCategory(category);
    navItems.pop();
    navItems.push(category);
    console.log(navItems);
    
  };

  return (
    <div className='container-contents global-padding' id="contents">
     <div className='wrapper-contents'>
      <div className='top-section'>
        <div className='left-section'>
          <img src={home}></img>
          
          {
            navItems.map((val: string, i: number) => {
              return (
                <div key = {i}>
                  <label onClick={()=>getAllByCategory(val)} >{val}</label>
                  {
                    i !== navItems.length -1 
                    ? <label>{'->'}</label> 
                    : null
                  }
                </div>
              )
          }
        )}
        </div>
        <div className='right-section'>
          <img src={grid} onClick={()=>setGrid(true)}></img>
          <img src={grid} onClick={()=>setGrid(false)}></img>
        </div>
          
      </div>
      <div className='bottom-section'>
        <div className='left-section'>
          <div className='category-section'>
            <label className='label-title' >Shop by Category</label>
            <nav id="nav-link-wrap" className='elements'>
            {
              categories.map((val: typeof categories[number]) => {
                
                return (
                  <label onClick={()=>getAllByCategory(val.name)} >{val.name}
                   
                  </label>
                )
                })
            }
            </nav>
          </div>
        </div>
        <div className='right-section'>
          <div className='item-wrapper'>
          { 
            itemsByCategory.map((item, i) => (
              <Item item={item} isGrid ={isGrid} />
            ))
          }
          </div>
        </div>
 
      </div>
     </div>
    </div>
  )
}
