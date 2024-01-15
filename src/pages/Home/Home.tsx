import {Data} from "../../Data";

interface EventDetails {
  id: number;
  title: string;
  date: string;
  time: string;
  color: string;
}

export default function Home() {
  const eventDetails: EventDetails[] = Data["event-details"];

  return (
    <div className="d-flex flex-column text-center text-white bg-dark font ">
      <div>
        <h1 className="pt-2 pb-2">Welcome to Kruti's wedding!</h1>
        <h3 className="pt-2 pb-2">Save the dates: 26th-28th January!</h3>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade me-5 ms-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner me-5">
            <div className="carousel-item active">
              <img
                src="./slide1.jpg"
                className="d-block rounded img-fluid"
                
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://scontent.fpnq7-4.fna.fbcdn.net/v/t31.18172-8/18423089_1465211373529105_348058495534636518_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_ohc=a-t75a2-lv8AX9UGKGM&_nc_ht=scontent.fpnq7-4.fna&oh=00_AfBVmfijRxFvDkQFtWLEQC1Ac8CT2LaBlCsN0xmnH8xypQ&oe=65CCD342"
                className="d-block rounded img-fluid"
                
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://scontent.fpnq7-4.fna.fbcdn.net/v/t39.30808-6/311109341_5847996638573475_3113737433290807703_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=ywpj1L_k8zoAX_XAipP&_nc_ht=scontent.fpnq7-4.fna&oh=00_AfAaOUGbkeq-7arq7-OOBIy3lbVNbLZoHs6Kg1RZXbWg2w&oe=65A9908D"
                className="d-block rounded img-fluid"
                
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="text-center me-5 pe-5">
          <h1>Lots of fun and laughter coming your way!</h1>
        </div>
      </div>
      <div>
        <h4 className="display 4 pt-5">Look at the events:-</h4>
      </div>
      <table className="table table-dark table-responsive table-striped">
        <thead>
            <tr>
                <th scope="col">
                    ID
                </th>
                <th scope="col">
                    Date
                </th>
                <th scope="col">
                    Event
                </th>
                <th scope="col">
                    Time
                </th>
            </tr>
        </thead>
        <tbody>
          {eventDetails.map((res) => (
            <tr className={res.color} key={res.id}>
              <td scope='row'>
                  {res.id}
              </td>
              <td scope='row'>
                  {res.date}
              </td>
              <td scope='row'>
                  {res.title}
              </td>
              <td scope='row'>
                  {res.time}
              </td>
          </tr>
          ))}
            
        </tbody>
      </table>
    </div>
  );
}
