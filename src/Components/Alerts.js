import React from "react";
import Modal from "react-bootstrap/Modal";
import Resources from "../resources/Resources";





export function ResetConfirmation(props) {
    return (
        <React.Fragment>
            <Modal
                show={props.show}
                onHide={props.hideResetAlert}
                data-cy="Reset Alert"
            >
                <Modal.Header>
                    <Modal.Title className="w-100 text-center">{Resources.strings.RESETWARNING}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h5 className="text-center">{Resources.strings.RESETWARNINGDESCRIPTION}</h5>
                </Modal.Body>

                <Modal.Footer>
                    <button
                        className="btn btn-secondary px-4"
                        onClick={props.hideResetAlert}
                        data-cy="Reset Abort"
                    >
                        {Resources.strings.NEVERMIND}
                    </button>
                    <button
                        className="btn btn-danger px-5"
                        onClick={props.reset}
                        data-cy="Reset Confirm"
                    >
                        {Resources.strings.RESET}
                    </button>
                </Modal.Footer>

            </Modal>
        </React.Fragment>
    );
}