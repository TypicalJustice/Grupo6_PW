"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const reservarCita = () => {

  return (
    <div>
      <h1>Reserva de Citas</h1>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="https://reqres.in/img/faces/10-image.jpg" />
              <Card.Body>
                <Card.Title>Prof. Parra Lerma</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm">
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="https://reqres.in/img/faces/8-image.jpg" />
              <Card.Body>
                <Card.Title>Prof. Felipe Lado</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm">
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="https://reqres.in/img/faces/9-image.jpg" />
              <Card.Body>
                <Card.Title>Prof. Jhon Doe</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
        Launch demo modal
      </button>

      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default reservarCita