import React, { useRef, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import grey from '@mui/material/colors/grey';

import ListItem from '.././components/ListItem'


const List = ({list}) => {

    const listContainer = useRef(null);
    const [show, setShow] = useState(false);

   const scrollNextEvent = () => {
       listContainer.current.scrollLeft += 140
       if(listContainer.current.scrollLeft === 140) {

           setShow(true);
        }

        
   }
   const scrollBackEvent = () => {
      listContainer.current.scrollLeft -= 140;
      if(listContainer.current.scrollRight === 0) {
         setShow(false);
      }
   }


    return (
        <div ref={listContainer} className='list-item'>
            
            {list.content.map((item, i) => (
                <ListItem index={i} item={item}/>
            ))}
              
            <div onClick={scrollNextEvent} className='scroll-next'>
                <button><ArrowForwardIosOutlinedIcon sx={{ color: grey[50] }}/></button>
            </div>
            { show &&
            <div onClick={scrollBackEvent} className='scroll-back'>
                <button><ArrowBackIosNewIcon sx={{ color: grey[50] }}/></button>
            </div>
            
            }
        </div>
    )
}

export default List;