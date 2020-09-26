import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const initialFormData = Object.freeze({
    deviceName: "",
    deviceEndpoint: ""
});
 
function ConnectDeviceModal(props) {
    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
          });
    }

    const connectToDevice = (e) => {
        e.preventDefault()
        console.log(formData);
        //To Do API call to connect to device 
        props.onHide();
    }
    return (
            <Modal {...props} size="lg" animation={false} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Connect Device</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="deviceName">
                            <Form.Label>Device Name</Form.Label>
                            <Form.Control name="deviceName" onChange={handleChange} type="text" placeholder="Enter device name" />
                        </Form.Group>
                        <Form.Group controlId="deviceEndpoint">
                            <Form.Label>Device Endpoint</Form.Label>
                            <Form.Control name="deviceEndpoint" onChange={handleChange} type="text" placeholder="Enter device endpoint" />
                        </Form.Group>
                        <Button variant="primary" onClick={(e) => {connectToDevice(e)}}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
    );
}

export default ConnectDeviceModal;