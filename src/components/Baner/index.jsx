import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import banerimg from "../../assets/baner.png";
import strelka from "../../assets/strelka.svg";
import "./style.css";

function Baner() {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="baner">
      <img src={banerimg} alt="" className="banerimg" />
      <div className="info-baner">
        <h2>Путешествия мечты</h2>
        <p>выбери свою</p>

        <form action="">
          <div className="box2">
            <div className="select">
              <label>Oткуда</label>
              <select>
                <option>Бишкек</option>
                <option>Ташкент</option>
                <option>Москва</option>
                <option>Лондон</option>
                <option>Париж</option>
                <option>Пекин</option>
                <option>Нью-Йорк</option>
                <option>Берлин</option>
                <option>Токио</option>
                <option>Дубай</option>
                <option>Сингапур</option>
                <option>Сеул</option>
                <option>Куала-Лумпур</option>
                <option>Бангкок</option>
                <option>Рим</option>
                <option>Барселона</option>
                <option>Амстердам</option>
                <option>Сидней</option>
                <option>Кейптаун</option>
                <option>Буэнос-Айрес</option>
              </select>
            </div>

            <div className="select">
              <label>Kуда</label>
              <select>
                <option>Лондон</option>
                <option>Париж</option>
                <option>Пекин</option>
                <option>Нью-Йорк</option>
                <option>Берлин</option>
                <option>Москва</option>
                <option>Токио</option>
                <option>Дубай</option>
                <option>Сингапур</option>
                <option>Сеул</option>
                <option>Куала-Лумпур</option>
                <option>Бангкок</option>
                <option>Рим</option>
                <option>Барселона</option>
                <option>Амстердам</option>
                <option>Сидней</option>
                <option>Кейптаун</option>
                <option>Буэнос-Айрес</option>
                <option>Бишкек</option>
                <option>Ташкент</option>
              </select>
            </div>

            <div className="select calendar-select">
              <label>Вылет</label>
              <button
                type="button"
                onClick={() => setOpenCalendar(!openCalendar)}
                className="date-btn"
              >
                {range[0].startDate.toLocaleDateString()} —{" "}
                {range[0].endDate.toLocaleDateString()}
              </button>

              <div className={`calendar-modal ${openCalendar ? "show" : ""}`}>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => {
                    setRange([item.selection]);
                    setOpenCalendar(false); // автоматтык жабуу
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={range}
                  rangeColors={["#3d91ff"]}
                />
              </div>
            </div>

            <div className="peoples">
              <label htmlFor="">Туристы</label>
              <input type="number" placeholder="люди" className="turis"/>
            </div>
            <button className="podbtn">
              подобрать <img src={strelka} alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Baner;
