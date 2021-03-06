import React from "react";
import './FaceRecognition.css'


const FaceRecognition = ({ imageUrl, boxes }) => {
    return (

        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' src={imageUrl} alt='' width='500px' height='auto' />
                {
                    boxes.map(box => {
                        return <div className='bounding-box' style={{ top: box.top, right: box.right, left: box.left, bottom: box.bottom }}>
                        </div>
                    })

                }


            </div>
        </div>
    );
}

export default FaceRecognition;