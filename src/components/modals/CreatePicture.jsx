import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { createPicture } from '../../http/pictureAPI';


const CreatePicture = observer(({show, onHide}) => {
  const { picture } = useContext(Context);
  const [author, setAuthor] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [size, setSize] = useState('')
  const [country, setCountry] = useState('')
  const [year, setYear] = useState('')
  const [technique, setTechnique] = useState('')
  const [category, setCategory] = useState('')
  const [file, setFile] = useState(null)

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addPicture = () => {
    const formData = new FormData();
    formData.append('author', author);
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('size', size);
    formData.append('country', country);
    formData.append('year', `${year}`);
    formData.append('technique', technique);
    formData.append('category', category);
    formData.append('img', file);
    createPicture(formData).then((data) => onHide());
  };
  
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить картину
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={author} onChange={(e) => setAuthor(e.target.value)} placeholder={"Введите автора"}  className="mb-2"/>
        </Form>
        <Form>
          <Form.Control value={name} onChange={(e) => setName(e.target.value)} placeholder={"Введите название картины"} className="mb-2"/>
        </Form>
        <Form>
          <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} placeholder={"Введите цену картины"} type="number" className="mb-2"/>
        </Form>
        <Form>
          <Form.Control value={size} onChange={(e) => setSize(e.target.value)} placeholder={"Введите размеры картины"} className="mb-2"/>
        </Form>
        <Form>
          <Form.Control value={country} onChange={(e) => setCountry(e.target.value)} placeholder={"Введите страну"} className="mb-2"/>
        </Form>
        <Form>
          <Form.Control value={year} onChange={(e) => setYear(e.target.value)} placeholder={"Введите год картины"} type="number" className="mb-2"/>
        </Form>
        <Form>
          <Form.Control value={technique} onChange={(e) => setTechnique(e.target.value)} placeholder={"Введите технику "} className="mb-2"/>
        </Form>
        <Form>
          <Form.Control value={category} onChange={(e) => setCategory(e.target.value)} placeholder={"Введите категорию"} className="mb-2"/>
        </Form>
        <Form>
          <Form.Control placeholder={"Изображение картины"} type="file" onChange={selectFile} className="mb-2"/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={addPicture}>Добавить</Button>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreatePicture