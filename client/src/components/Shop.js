import React  from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function Shop({ show, onHide }) {


    function handleClose() {
        onHide();
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    You are now leaving SnuffleStein Blogs
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <div className="text-center">
                    <img src="/Shop.png" alt="shopping image" style={{ width: "300px" }} />
                    <a href="https://theconflictcontinuum.com/">
                        <h1 className="text-dark">
                            <u> Go to Store </u>
                        </h1>
                    </a>
                </div>

            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Shop