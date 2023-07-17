import React, { useState } from 'react' ;
import Link from 'next/link';
import { BsChevronDown } from "react-icons/bs";


const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];




export default function Menu({setshowCategoryMenu , showCategoryMenu}) {

 
return <>
     <ul className='hidden md:flex justify-center items-center font-medium gap-8 text-black'>

        {data.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    { !!item?.subMenu ? 
                        // if SubMenu --------------------------------------------
                        (
                            <li    className='cursor-pointer relative flex items-center gap-2'
                            onMouseEnter={()=>setshowCategoryMenu(true)} 
                            onMouseLeave={()=>setshowCategoryMenu(false)} 
                            >
                                {item.name}
                                <BsChevronDown size={14}/>
                                { showCategoryMenu && (
                                    <ul className='bg-white p-1 absolute top-6 left-0 min-w-[250px]  text-black shadow-lg'>
                                        {subMenuData.map((submenu)=>{
                                            return (
                                                <Link key={submenu.id} href="/" onClick={setshowCategoryMenu(true)}> 
                                                    <li className='h-12 px-3 flex justify-between items-center 
                                                                    rounded-md hover:bg-black/[0.03]'
                                                    > 
                                                        {submenu.name}
                                                        <span className='opacity-50 text-sm'>
                                                            22
                                                        </span> 
                                                    </li> 
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                )

                                }
                            </li>
                        )
                        // if Not Presence SubMenu ---------------------------------

                        : <li className="cursor-pointer"> 
                              <Link href={item?.url} > {item.name}  </Link> 
                          </li> 
                    }
                </React.Fragment>
            )
            })
        }

     </ul>
  </>
}
