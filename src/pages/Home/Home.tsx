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
          style={{
            width: "800px",
            height: "600px",
          }}
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
                src="https://scontent.fpnq7-2.fna.fbcdn.net/v/t39.30808-6/332512096_868461174256485_1847705593064542341_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=vfefIRpxgLAAX8DJ4_4&_nc_ht=scontent.fpnq7-2.fna&oh=00_AfARNFHSoVzbZqfNKer2odWsxeEFTi6pyAXjjb3_gZCcWg&oe=65AB0902"
                className="d-block rounded"
                style={{
                  width: "800px",
                  height: "600px",
                }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://scontent.fpnq7-6.fna.fbcdn.net/v/t39.30808-6/317744522_5997257760314028_1403849719155393737_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=WgB3MXxX4c8AX-_R2gc&_nc_ht=scontent.fpnq7-6.fna&oh=00_AfD9gAEqeeaVX90jPT9k9T0NQ9Bs46C9EARQavdm4rbc8g&oe=65AA2614"
                className="d-block rounded"
                style={{
                  width: "800px",
                  height: "600px",
                }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://scontent.fpnq7-4.fna.fbcdn.net/v/t39.30808-6/311109341_5847996638573475_3113737433290807703_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=ywpj1L_k8zoAX_XAipP&_nc_ht=scontent.fpnq7-4.fna&oh=00_AfAaOUGbkeq-7arq7-OOBIy3lbVNbLZoHs6Kg1RZXbWg2w&oe=65A9908D"
                className="d-block rounded"
                style={{
                  width: "800px",
                  height: "600px",
                }}
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
