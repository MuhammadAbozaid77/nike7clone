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

export default function MobileMenu({setmobileMemu , showCategoryMenu , setshowCategoryMenu}) {
     
  return <>
     <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)]
                     bg-white border-t text-blaxk'>

        {data.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    { !!item?.subMenu ? 
                        // if SubMenu --------------------------------------------
                        (
                            <li    className='cursor-pointer relative flex flex-col  border-b p-5 '
                            onClick={()=>setshowCategoryMenu(!showCategoryMenu)} 
                            >
                                <div className='flex justify-between items-center'>
                                    {item.name}
                                    <BsChevronDown size={14}/>
                                </div>

                                { showCategoryMenu && (
                                    <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4  '
                                    >
                                        {subMenuData.map((submenu)=>{
                                            return (
                                                <Link key={submenu.id} href="/" 
                                                            onClick= {()=> { 
                                                                setshowCategoryMenu(false)
                                                                setmobileMemu(false)
                                                            }} 
                                                > 

                                                    <li className='py-4 px-8 border-t flex justify-between'
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

                        : <li className="py-4 px-5 border-b"> 
                              <Link href={item?.url} onClick={()=>{setmobileMemu(false)}}> {item.name}  </Link> 
                          </li> 
                    }
                </React.Fragment>
            )
            })
        }

     </ul>
  </>
}

