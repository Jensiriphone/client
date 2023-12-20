import React, { useState } from "react";
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function NoteForm({onAddNote}) {
    const [note, setNote] = useState("");
    return (
        <Form>
            <label>
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
            </label>
        </Form>
    );
}

function AddNoteButton({onAddNote}) {
    const [showModal, setShowModal] = useState(false);
    const handleButtonClick = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleAddNote = (note) => {
        console.log("Added note");
        if (onAddNote) {
            onAddNote(note);
        }
        handleCloseModal();
    };

    return (
        <>
            <Button variant="info" onClick={handleButtonClick}>Add Note</Button>

            <Modal show={showModal} onHide={handleCloseModal} backdrop="static">
                <ModalHeader closeButton>
                    <ModalTitle>Note:</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <NoteForm onAddNote={handleAddNote}/>
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={handleAddNote}>Add</Button>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default AddNoteButton;