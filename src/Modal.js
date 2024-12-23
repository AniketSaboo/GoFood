// 
// rfc
import React from 'react'

import ReactDom from 'react-dom'
const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    backgroundColor: 'rgb(34,34,34)',
    transform: 'translate(-50%,-50%)',
    zIndex: 1000,
    height: '90%',
    // $(selector).width();
    width: '90%',

    color: 'white', // Ensure text is visible on a dark background
    overflow: 'auto', // Prevent clipping of content
    padding: '20px', // Add spacing inside the modal
    borderRadius: '8px',
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: 'white',
    // backgroundColor:'rgba'
    backgroundColor: 'rgba(0,0,0,0.7)',
    // zIndex:1000
    // zIndex: 1000
    zIndex: 999
}

export default function Modal({ children, onClose }) {
    return ReactDom.createPortal(
        // <div>

        // </div>
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLE}>
                <button className='btn bg-danger fs-4' style={{ marginLeft: "90%", marginTop: "-35px" }} onClick={onClose}>X</button>
                {children}
            </div>
        </>,
        // document
        // document.get/
        document.getElementById('cart-root')
    )
}
