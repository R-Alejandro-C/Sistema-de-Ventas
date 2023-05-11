import React from 'react';
import PropTypes from 'prop-types';


const Modal = ({children, onClose}) => {

    return (
        <div className='modal modal-dialog-centered' style={{marginLeft:"15vh"}}> 
            <div className='modal-dialog'>
            <div className='modal-content'>
            <div className="modal-body">
      <div className='text-end'>
      <button className='btn btn-close' onClick={onClose}></button>
      </div>
      <div>
        {children}
      </div>
      </div>

            
            </div>
                  
                    
            </div>

</div>
    );
};


Modal.propTypes = {

};


export default Modal;
