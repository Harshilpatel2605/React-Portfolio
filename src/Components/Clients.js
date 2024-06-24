import React from 'react'
import '../Styles/clients.css'
import walmart from '../Assets/walmart.png'
import adobe from '../Assets/adobe.png'
import microsoft from '../Assets/microsoft.png'
import facebook from '../Assets/facebook.png'

function Clients() {
    return (
        <div id='clients'>
            <div className='my-clients'>My Clients</div>
            <div className='content'>I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes</div>
            <div className='companies'>
                <img src={walmart} alt='walmart'/>
                <img src={adobe} alt='adobe'/>
                <img src={microsoft} alt='microsoft'/>
                <img src={facebook} alt='facebook'/>
            </div>
        </div>
    )
}


export default Clients