import React from 'react'
import Header from '../header/header'
import './itemDetails.scss';
import home from '../../assets/img/home.png';
import onions from '../../assets/img/onions.png';
import { ItemModel } from '../../models/itemModel';

export default function ItemDetails(itemObj: ItemModel | any) {
    return (
        <>
            <Header />

            <div className='item-detail-container global-padding'>

                <div className='wrapper-contents'>
                    <section className='top-section'>
                        <img src={home}></img>
                    </section>
                    <section className='bottom-section'>
                        <section className='left-section'>
                           {/* {
                            itemObj.image?.map((val: string)=>{ */}
                                <div className='img-wrapper global-border-radius' >
                                <img src={onions}></img>
                                </div>
                                <div className='img-wrapper'>
                                <img src={onions}></img>
                                </div>
                                <div className='img-wrapper'>
                                <img src={onions}></img>
                                </div>
                                <div className='img-wrapper'>
                                <img src={onions}></img>
                                </div>

                            {/* })
                           } */}
                        </section>
                        <section className='middle-section'>
                            <div className='img-wrapper global-border-radius' >
                            <img src={onions}></img>
                            </div>
                        </section>
                        <section className='right-section'> 
                        </section>
                    </section>
                </div>
            </div>
        </>
    )
}
