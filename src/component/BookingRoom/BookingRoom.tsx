import React from "react";
import "./bookingroom.scss";
export default function BookingRoom() {
  const createRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <div className="row rounded-lg bg-white shadow-xl border p-6 w-100 mx-auto sticky top-28 pb-4">
      <div className="w-100 container align-items-center">
        <div className="d-flex justify-content-between align-items-center mb-4 pt-4">
          <div>
            <span>$ </span>
            <span className="font-weight-bold ">
              {/* {roomDetail?.price} */} 100000
            </span>
            <span className="text-base"> đêm</span>
          </div>
          <div>
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill mr-1 mb-1 "
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              {/* {roomDetail?.locationId
                                ? roomDetail?.locationId.valueate / 2
                                : createRandomNumber(1, 5)}{" "}
                            . */}
              3
            </span>{" "}
            <span className="gach mx-1">
              {createRandomNumber(50, 100)} đánh giá
            </span>
          </div>
        </div>

        <div className="row d-flex flex-col rounded-md container mx-auto">
          <div
            className="d-flex w-100 border-solid border-gray-400 text-center border-secondary rounded-lg"
            // onClick={openDatePicker}
          >
            <div className="border-right border-secondary rounded-tl-md w-100 p-3 cursor-pointer hover:bg-gray-100  col-6">
              <div className="font-weight-bold">NHẬN PHÒNG</div>
              <div className="m-1">
                {/* {moment(checkInDate).format("DD-MM-YYYY")} */}
              </div>
            </div>
            <div className=" rounded-tr-md w-100 p-3 cursor-pointer hover:bg-gray-100  rounded-lg col-6">
              <div className="font-weight-bold">TRẢ PHÒNG</div>
              <div className="m-1">
                {/* {moment(checkOutDate).format("DD-MM-YYYY")} */}
              </div>
            </div>
          </div>

          <div className="p-2 col-12 border border-secondary border-top-0 rounded-lg">
            <div className="font-weight-bold">KHÁCH</div>
            <div className="d-flex justify-content-between align-items-center m-1">
              <button
                className="w-8 h-8 bg-gray-300 hover:bg-red-400 duration-200 rounded-xl text-white cursor-pointer border-0"
                // disabled={guest <= 0}
                // onClick={() => setGuest(guest - 1)}
              >
                -
              </button>
              {/* {guest} */}
              <div> khách</div>
              <button
                className="w-8 h-8 bg-gray-300 hover:bg-red-400 duration-200 rounded-xl text-white cursor-pointer border-0"
                // onClick={() => setGuest(guest + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          // onClick={handleSubmit}
          className="w-100 py-3 mt-3 rounded-lg text-white text-lg border-0 font-weight-bold"
          style={{
            background:
              "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%",
          }}
        >
          Đặt phòng
        </button>
        <div className="text-center text-gray-400 my-2">
          <span>Bạn vẫn chưa bị trừ tiền</span>
        </div>
        <div className="border-bottom py-2 ">
          <div className="d-flex justifyjustify-content-between py-1">
            <div className="text-gray-600 gach">
              {/* $ {roomDetail?.price} x{" "}
                            {get_day_of_time(checkInDate, checkOutDate)} đêm */}
            </div>
            <div className="gach">
              {/* <span>
                                {roomDetail?.price
                                    ? roomDetail?.price *
                                      get_day_of_time(checkInDate, checkOutDate)
                                    : ""}
                            </span>{" "} */}
              $
            </div>
          </div>
          <div className="d-flex justify-content-between py-1 text-base">
            <div className="gach text-gray-600 gach">Phí dịch vụ</div>
            <div>
              <span>0</span> $
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center text-lg pt-3 pb-4 font-weight-bold">
          <h5 className="font-weight-bold">Tổng trước thuế</h5>
          <div>
            {/* {roomDetail?.price
                            ? roomDetail?.price *
                              get_day_of_time(checkInDate, checkOutDate)
                            : ""}{" "}
                        $ */}
          </div>
        </div>
      </div>
    </div>
  );
}
