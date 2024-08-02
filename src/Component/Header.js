import React from 'react';
import "./Header.css";
function Header({ name, age, address,course }) {
    return (

        <div className='div-container'>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h2>Address:{address}</h2>
            <h2>course: {course}</h2>
        </div>

    )
}
export default Header;