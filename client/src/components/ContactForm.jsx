import React, { useState } from 'react'
import api from '../api'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


function ContactForm({ show, onHide }) {
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    function handleClose() {
        setEmail("")
        setSubject("")
        setContent("")
        onHide();
    }

    function handleSubmit(e) {
        e.preventDefault();

        let payload = { email, subject, content }
        api.contactPost(payload)
            .then((response) => {
                if (response.data.status === 'success') {
                    setEmail("")
                    setSubject("")
                    setContent("")
                    onHide();

                } else if (response.data.status === 'fail') {
                    alert("Message failed to send.")
                }
            })
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
                    Contact Us
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit} className="contactForm" >
                    <Button id="closeContact" onClick={handleClose}><FontAwesomeIcon className="faTimesCircle" icon={faTimes}/></Button>
                    <label>
                        <input placeholder="Email" className="postInput contactEmail" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                    </label>
                    <label>
                        <input placeholder="Subject" className="postInput contactSubject" value={subject} onChange={(e) => { setSubject(e.target.value); }} />
                    </label>
                    <label>
                        <textarea placeholder="Content" className="postInput contactContent" value={content} onChange={(e) => { setContent(e.target.value); }} />
                    </label>
                </form>

            </Modal.Body>
            <Modal.Footer id="contactFooter">
                <Button onClick={handleSubmit}>Send!</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ContactForm