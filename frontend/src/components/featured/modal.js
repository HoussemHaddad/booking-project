import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { post } from '../../redux/action/actionpost';
import { useDispatch } from 'react-redux';


function Example() {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [photos,setPhotos] =useState("h")
 const [city,setCity] =useState("h")
 const [distance,setDistance] =useState("")
 const [hotel,setHotel] = useState('')
 const [rating,setRating] =useState("")
 const [rooms,setRooms] =useState("")
 const [cheapestprice,setCheapestprice] =useState("")

 const handlepost = ()=>{
    dispatch(post({photos,city,distance,hotel,rating,rooms,cheapestprice}))
 }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=> setPhotos(e.target.value)}>
        <Form.Label>photos</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=> setCity(e.target.value)}>
        <Form.Label>city</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=> setDistance(e.target.value)}>
        <Form.Label>distance</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=> setHotel(e.target.value)}>
        <Form.Label>hotel</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=> setRating(e.target.value)}>
        <Form.Label>rating</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=> setRooms(e.target.value)}>
        <Form.Label>rooms</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=> setCheapestprice(e.target.value)}>
        <Form.Label>cheapestprice</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlepost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;