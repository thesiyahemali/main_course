import React from 'react'
import './ExpolreMenu.css'
import { menu_list } from '../../assets/assets'


const ExpolreMenu = ({category,setcategory}) => {
    return (
        <div className='expolre-menu' id='explore-menu'>
            <h1>explore our menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes.our mission is to satisft your craving and elevate your dining experence,one delicious meal at a time</p>

            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>

                        </div>
                    )
                })}
            </div>
        <hr></hr>
        </div>

    )
}

export default ExpolreMenu