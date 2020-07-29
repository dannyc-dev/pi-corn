import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const initialFormData = Object.freeze({
    newDeviceName: "",
    newDeviceDescription: "",
    newDeviceEndpoint: "",
    newDeviceType: ""
});

function RegisterDeviceModal(props) {
    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
          });
    }

    const registerNewDevice = (e) => {
        e.preventDefault()
        console.log(formData);
        //To Do API call to connect to device 
        props.onHide();
    }
    return (
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Register Device</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="deviceName">
                            <Form.Label>Device Name</Form.Label>
                            <Form.Control name="newDeviceName" onChange={handleChange} type="text" placeholder="Enter device name" />
                        </Form.Group>
                        <Form.Group controlId="deviceDescription">
                            <Form.Label>Device Description</Form.Label>
                            <Form.Control name="newDeviceDescription" onChange={handleChange} type="text" placeholder="Enter device description" />
                        </Form.Group>
                        <Form.Group controlId="deviceEndpoint">
                            <Form.Label>Device Endpoint</Form.Label>
                            <Form.Control name="newDeviceEndpoint" onChange={handleChange} type="text" placeholder="Enter device endpoint" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Device Type</Form.Label>
                            <Form.Control name="newDeviceType" defaultValue="Choose Device" onChange={handleChange} as="select">
                                <option value="Choose Device" disabled>Choose Device</option>
                                <option>Pi-Camera</option>
                                <option>Motion Sensor</option>
                                <option>IoT</option>
                                <option>Smart Hub</option>
                                <option>Magic Wand</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" onClick={(e) => {registerNewDevice(e)}}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
    );
}

export default RegisterDeviceModal;