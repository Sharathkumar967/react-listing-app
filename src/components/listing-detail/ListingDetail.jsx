import React from 'react';
import "./ListingDetail.css";

const ListingDetail = () => {
  return (
    <div className='listing-detail'>
         <div className='listing-detail-content'>
         <img className= "listing-detail-img" src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'/>
         <h1 className='listing-detail-title'>
             Awesome property
             <div className='listing-detail-action'>
             <i className="listing-detail-action-icon fa-solid fa-pen-to-square"></i>
             <i className="listing-detail-action-icon fa-solid fa-trash-can"></i>
             </div>
             </h1>
             <div className='listing-detail-meta-info'>
               <span className='listing-detail-author'>Author - <strong>john Deo</strong></span>
               <span className='listing-detail-time'>1 day ago</span>
             </div>
             <p className='listing-detail-description'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eget arcu sed ultricies. Pellentesque nec semper odio, vitae blandit risus. Pellentesque suscipit scelerisque eros, ac finibus elit lobortis quis. Suspendisse vitae dignissim nunc. Suspendisse vulputate ac quam vitae suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla urna sem, at luctus neque condimentum sagittis.

Nunc venenatis nisl tellus, at tempor mi posuere ac. Fusce malesuada vehicula congue. Pellentesque venenatis, magna at convallis dictum, ex enim porttitor risus, quis fringilla lacus nisl ut nunc. Praesent pharetra sit amet neque non cursus. Aliquam sed faucibus mi. Nam varius placerat suscipit. Sed consequat tortor commodo dolor feugiat tristique. Vivamus pharetra purus felis. Sed vel cursus neque, a viverra ex. Vivamus sodales arcu sit amet ligula sagittis congue. Aliquam placerat egestas purus. Aliquam vel dui suscipit massa lobortis mollis sit amet id lorem.




             </p>
        </div>
        </div>
  )
}

export default ListingDetail