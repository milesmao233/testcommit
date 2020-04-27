import React, { useState } from 'react';
import './backgroundPicker.css'

const BackgroundPicker = () => {
    const [color, setColor] = useState('#4B8EFF')
    return (
        <div>
            <div 
                className="container"
                style={{backgroundColor: color}}
            >
                视图框
            </div>

            <div>
                <input 
                    type="color" 
                    id="picker" 
                    name="pickcolor" 
                    value={color}
                    onChange={(e) => {
                        console.log('e', e.target.value)
                        setColor(e.target.value)
                    }}
                />
            </div>
        </div>
    )
}

export default BackgroundPicker