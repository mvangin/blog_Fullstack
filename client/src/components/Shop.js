import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function Shop({ show, onHide }) {


    function handleClose() {
        onHide();
    }

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title className="w-100">
                    <div className="text-center" >
                        <h3> Go to the <i> The Conflict Continuum Store </i> </h3>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <div className="text-center">
                    <img src="/Shop.png" alt="shopping" style={{ width: "300px" }} />  
                        <h1 className="text-dark">
                            <u> Coming Soon </u>
                        </h1>
                </div>

            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Shop