import { Button, Card, Col, Row, Spin } from "antd";
import React from "react";
import {
  LeftCircleFilled,
  RightCircleFilled,
  LoadingOutlined,
} from "@ant-design/icons";
import Carousel, { CarouselRef } from "antd/es/carousel";

function monthNumberToWord(monthNumber: number): string {

  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  if (monthNumber < 1 || monthNumber > 12) {
    return ("." + monthNumber);
  }

  return months[monthNumber];
}

class App extends React.Component<
  {},
  { emp: []; set: number; url: string; }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      emp: [],
      set: 0,
      url: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  increment() {
    this.setState({ set: this.state.set + 1 });
  }

  fetchData() {
    fetch(`/employee/birthdate`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ emp: data.result });
        this.setState({ url: data.url });
        this.increment();

      })
      .catch((err) => console.log(err));
  }

  render() {
    const carousel = React.createRef<CarouselRef>();

    const { emp, set, url } = this.state;


    if (set === 0) {
      return (
        <Card
          className="h-screen w-screen items-center"
          style={{ borderColor: "#0193B7" }}
        >
          <Spin
            className="h-full flex place-self-center m-auto"
            indicator={<LoadingOutlined style={{ fontSize: 256 }} spin />}
          />
        </Card>
      );
    } else {
      if (emp.length === 0) {
        return (

          <Card className="h-screen ">
            <Row className="relative  mx-auto w-[300px]" justify="space-around">
              <Col className="top-6" >

                <img
                  alt=""
                  className=" aspect-square object-cover h-[168px] w-[168px] "
                  src={"День рождения3-02.png"}
                />

              </Col>
            </Row>

            <Row className="bg-[#d9b15a] py-4 text-white rounded-2xl w-full h-full text-center justify-center items-center text-xl min-h-[40px]" justify="center">
              <b>Ждем новых именинников!</b>

            </Row>

          </Card>

        );
      } else {
        return (

          <Row>
            <Col span={1}>
              <Button
                className="text-[#d9b15a] h-full right-0 flex justify-center"
                icon={<LeftCircleFilled />}
                onClick={() => carousel.current?.prev()}
              />
            </Col>
            <Col offset={1} span={20}>
              <Carousel
                ref={carousel}
                dots={true}
                autoplaySpeed={10000}
                autoplay
              >
                {emp.map((el: any, index: number) => (
                  <Card
                    key={index}
                    className="h-screen "
                  >
                    <Row className="" justify={"center"}>
                      <b className="text-2xl text-center  sm:text-3xl mt-[-13px]">С Днём Рождения!</b>
                    </Row>
                    <Row className="" justify={"center"}>

                      <Col className="bg-[#d9b15a] rounded-sm px-3 text-center justify-center items-center ">
                        <b className="md:text-2xl text-center  text-lg text-white">
                          {new Date(
                            Date.parse(String(el.birth_date))
                          ).getDate()}{" "}
                          {monthNumberToWord(
                            new Date(
                              Date.parse(String(el.birth_date))
                            ).getMonth()
                          )}
                        </b>{" "}
                      </Col>
                    </Row>
                    <Row className="relative mx-auto w-[270px]" justify="center">
                      <Col className="top-6" >
                        {el.avatar ? (
                          <img
                            alt=""
                            className=" mt-3 ml-1 aspect-square object-cover h-[160px] w-[160px]"
                            src={url + el.avatar}
                          />

                        ) : (
                          <img
                            alt=""
                            className="mt-3 ml-1  aspect-square object-cover h-[168px] w-[168px] "
                            src={"День рождения3-02.png"}
                          />
                        )}
                      </Col>
                      <img
                        alt=""
                        className=" absolute top-[-60px] pt-4 self-center h-96 w-64 aspect-square object-cover"
                        src={"День рождения2-02.png"}
                      />
                    </Row>

                    <Row className="max-h-[100px] mt-[45px]" justify="space-around">
                      <Col xs={24} sm={15} className="">
                        <div className=" text-2xl text-center ">
                          <b className=" text-center ">
                            {el.full_name.last_name}{" "}
                          </b>
                          <b className=" text-center ">
                            {el.full_name.first_name}{" "}
                          </b>
                          <b className=" text-center ">
                            {el.full_name.patronymic}
                          </b>{" "}


                        </div>
                      </Col>

                    </Row>
                    <Row className="h-[100px] mt-[20px]" justify="space-around" >
                      <a target="_parent" rel="noopener noreferrer" href={url + "/user/" + el.id}>
                        <Button className="outline outline-1 text-2xl py-[1px] px-[24px] rounded-lg text-center align-center">Поздравить!</Button>
                      </a>
                    </Row> 
                  </Card>
                ))}
              </Carousel>
            </Col>
            <Col className=" " span={1}>
              <Button
                className=" h-full text-[#d9b15a] "
                icon={<RightCircleFilled />}
                onClick={() => carousel.current?.next()}
              />
            </Col>
          </Row>

        );
      }
    }
  }
}

export default App;
