import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from "./data";

function App() {
  const [page, setPage] = useState(1);
  const [selectList, setSelectList] = useState("");
  const [title, settitle] = useState("");
  const [subMarkets, setSubMarkets] = useState([]);
  const [dataChoice, setDataChoice] = useState({
    title: "",
    submarket: "",
  });
  function select() {}
  function clickButton(e) {
    setSelectList(e.id);
    setSubMarkets(e.submarkets);
    setDataChoice({ ...dataChoice, title: e.title });

    setPage(2);
    console.log("el :>> ", e);
    settitle(e.title);
    console.log("e.title :>> ", e.title);
  }
  function finalClick(e) {
    console.log("ee :>> ", e);
    setDataChoice({ ...dataChoice, submarket: e.title });
  }

  function GoBack() {
    if (page === 1) {
    } else {
      setPage((page) => page - 1);
    }
  }

  return (
    <>
      <div className="wrapper">
        {/* // progress bar */}
        <div className="Header">
          <button onClick={GoBack} className="btn_icon">
            <span
              className="fas fa-arrow-right "
              style={{
                fontSize: "25px",
                color: "#5E7488",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            ></span>
          </button>
          {page === 1 && <h2>انتخاب دسته بندی</h2>}
          {page !== 1 && <h2> انتخاب زیر دسته از "{title} "</h2>}
        </div>
      </div>

      <div className="content">
        {page === 1 &&
          data.map((e) => {
            return (
              <button onClick={() => clickButton(e)} className="btn">
                <div className="in_btn">
                  <h2 style={{ marginRight: "14px" }}>{e.title}</h2>
                  <span
                    style={{ marginLeft: "14px" }}
                    className="fas fa-chevron-left"
                  ></span>
                </div>
              </button>
            );
          })}

        {page != 1 && (
          <>
            {subMarkets.map((e) => {
              return (
                <button onClick={() => finalClick(e)} className="btn">
                  <div className="in_btn">
                    <h2 style={{ marginRight: "14px" }}>{e.title}</h2>
                    <span
                      style={{ marginLeft: "14px" }}
                      className="fas fa-chevron-left"
                    ></span>
                  </div>
                </button>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default App;
