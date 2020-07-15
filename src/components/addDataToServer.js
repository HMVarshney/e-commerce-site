import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { storage, db } from '../api/fbConfig';
import { Popover, PopoverBody } from 'reactstrap';

const style={
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center'
};

const AddData = () => {
    const [data, setData] = useState({
        itemName:'',
        itemPrice:'',
        sellerName:'',
        images:[]
    });
    const [uploadStatus, setUploadStatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const itemId = uuid();
        const uploadTask = storage.ref('images/products/image_' + itemId).put(data.images[0]);
        uploadTask.on('state_changed',
            (snapshot)=>console.log(snapshot),
            (error)=>console.log(error),
            ()=>{
                uploadTask.snapshot.ref.getDownloadURL()
                    .then((imageUrl)=>{
                        db.collection('products').doc(itemId).set({
                            itemName: data.itemName,
                            itemPrice: data.itemPrice,
                            sellerName: data.sellerName,
                            image: imageUrl,
                            location: 'Dwarka, New Delhi',
                            rating:'4.0',
                            itemId,
                            inStock: true,
                            type:'Test'
                        }).then(()=>setUploadStatus(true))
                    })
            })
    };

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    };

    const handleFileChange = (e) => {
        setData({...data, images:e.target.files})
    }

    console.log(data.images[0])

    return ( 
        <div style={style}>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input value={data.itemName} onChange={(e)=>handleChange(e)} name='itemName' type='text' placeholder='Item Name' />
                <input value={data.itemPrice} onChange={(e)=>handleChange(e)} name='itemPrice' type='number' placeholder='Item Price' />
                <input value={data.sellerName} onChange={(e)=>handleChange(e)} name='sellerName' type='text' placeholder='Seller Name' />
                <input onChange={(e)=>handleFileChange(e)} name='images' multiple type='file' placeholder='Images' />
            </form>
            <button onClick={(e)=>handleSubmit(e)}>Upload</button>
            <div id='uploadPopover' />
            <Popover placement='bottom' isOpen={uploadStatus} target='uploadPopover'>
                <PopoverBody>Upload Successful</PopoverBody>
            </Popover>
        </div>
    );
}
 
export default AddData;

