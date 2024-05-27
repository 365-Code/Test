"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  type LeaderBoardType = {
    avatar: string;
    rank?: number;
    name: string;
    calmar_ratio: number;
    overall_profit_percent: number;
    avg_daily_profit_percent: number;
    win_percent_day: number;
    price: number;
  };

  const lL: LeaderBoardType[] = [
    {
      rank: 1,
      avatar:
        "https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261863.jpg?t=st=1716817300~exp=1716820900~hmac=325b84672ff8c3c9a7386c9cc755477849ca14fab5567238327743663d0c155e&w=1060",
      name: "Selling with re entr",
      calmar_ratio: 3.96,
      overall_profit_percent: 381845,
      avg_daily_profit_percent: 319.54,
      win_percent_day: 0.65,
      price: 0,
    },
    {
      rank: 2,
      avatar:
        "https://img.freepik.com/free-photo/portrait-female-tourist-visiting-great-wall-china_23-2151261823.jpg?t=st=1716814889~exp=1716818489~hmac=e4d68f7896cc808e2f0b8db3db3aeb931cba9208c4ff4490e1d3f9a88b3cd004&w=360",
      name: "strategy_ name",
      calmar_ratio: 3.62,
      overall_profit_percent: 268872.5,
      avg_daily_profit_percent: 216.31,
      win_percent_day: 0.64,
      price: 0,
    },
    {
      rank: 3,
      avatar:
        "https://img.freepik.com/free-photo/portrait-man-smiling-city_23-2150771187.jpg?t=st=1716817449~exp=1716821049~hmac=bd22f352a431b86c21ee68c559c227972aa56363f14a33153af66c06ec0bcc24&w=360",
      name: "Based on premium and",
      calmar_ratio: 3.42,
      overall_profit_percent: 255425,
      avg_daily_profit_percent: 208.51,
      win_percent_day: 0.64,
      price: 0,
    },
    {
      rank: 4,
      avatar:
        "https://img.freepik.com/free-photo/portrait-asian-man-smiling_23-2150771025.jpg?t=st=1716817479~exp=1716821079~hmac=60a0dabdbc485d857fe819823b2312246e8439e087fd504d4f166a2421027c39&w=360",
      name: "strategy_name",
      calmar_ratio: 3.22,
      overall_profit_percent: 370845,
      avg_daily_profit_percent: 303.47,
      win_percent_day: 0.65,
      price: 0,
    },
    {
      rank: 5,
      avatar:
        "https://img.freepik.com/free-photo/portrait-man-hugging-dog_23-2150771027.jpg?t=st=1716817493~exp=1716821093~hmac=456feaae3c2598e125dffff1aa1bae83401fc8f0e986f0a8a12e4a4b25ecd606&w=360",
      name: "strategy name",
      calmar_ratio: 3.42,
      overall_profit_percent: 115910,
      avg_daily_profit_percent: 185.37,
      win_percent_day: 0.64,
      price: 0,
    },
    {
      rank: 6,
      avatar:
        "https://img.freepik.com/free-photo/portrait-man-smiling-top-building_23-2150771059.jpg?t=st=1716817514~exp=1716821114~hmac=2a402c17da9626a9a1b37fc04368289a0542914101422cf2cc3c7a933f1f632a&w=1380",
      name: "Based on premium and",
      calmar_ratio: 3.42,
      overall_profit_percent: 255425,
      avg_daily_profit_percent: 208.51,
      win_percent_day: 0.64,
      price: 0,
    },
    {
      rank: 7,
      avatar: "https://random.danielpetrica.com/api/random?businessman",
      name: "Based on premium and",
      calmar_ratio: 3.42,
      overall_profit_percent: 255425,
      avg_daily_profit_percent: 208.51,
      win_percent_day: 0.64,
      price: 0,
    },
  ];

  const leaderList = [...lL, ...lL, ...lL, ...lL, ...lL, ...lL];

  const leaderHeading = [
    "Rank",
    "Name",
    "Calmer Ratio",
    "Overall Profit",
    "Avg. Daily Profit",
    "Win %(Day)",
    "Price (Rs)",
    "Action",
  ];

  const [selectedRow, setSelectedRow] = useState(0);

  useEffect(() => {
    window.onkeydown = (ev) => {
      if (ev.key == "Escape") {
        setSelectedRow(-1);
      }
    };
  });

  const totalResults = leaderList?.length;
  const perPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalResults / perPage) || 1;

  return (
    <section className="text-center space-y-4 py-6 px-8">
      <h1 className="tracking-wide font-semibold text-3xl sm:text-4xl md:text-5xl">
        LeaderBoards
      </h1>
      <div className="displayLeaderBoard gap-4 flex flex-col-reverse md:flex-row min-h-[500px]">
        <section className="border rounded-xl relative w-full max-h-[800px] overflow-scroll custom-scrollbar">
          <table
            className="w-full"
            aria-rowcount={perPage}
            aria-colcount={8}
          >
            <thead>
              <tr className="border-b">
                {leaderHeading.map((lH, i) => (
                  <th className="p-4 font-semibold text-nowrap" key={i}>
                    {lH}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="h-fit">
              {leaderList
                .slice((currentPage - 1) * perPage, currentPage * perPage)
                .map((lL, i) => (
                  <tr
                    onClick={() => setSelectedRow(i)}
                    key={i}
                    className={`hover:bg-black/10 cursor-pointer relative ${
                      i != perPage - 1 && "border-b"
                    } transition-all ${
                      selectedRow == i && "shadow-md shadow-black/20 bg-black/5"
                    }`}
                  >
                    <td className="p-4">
                      {(currentPage - 1) * 10 + (i + 1) || lL.rank}
                    </td>
                    <td className="p-4">{lL.name}</td>
                    <td className="p-4">
                      <span className="items-center flex gap-1">
                        <span>
                          {lL.calmar_ratio > 0 ? (
                            <i className="fi fi-rr-arrow-trend-up text-green-500" />
                          ) : (
                            <i className="fi fi-rr-arrow-trend-down text-red-500" />
                          )}
                        </span>{" "}
                        <span>{lL.calmar_ratio}</span>
                      </span>
                    </td>
                    <td className="p-4">{lL.overall_profit_percent}</td>
                    <td className="p-4">{lL.avg_daily_profit_percent}</td>
                    <td className="p-4">{lL.win_percent_day}</td>
                    <td className="p-4">{lL.price}</td>
                    <td className="p-4">
                      <div className="flex  justify-center items-center gap-2 text-xl">
                        <button
                          title="view"
                          className="relative group/showHide hover:text-green-500 transition-all px-2"
                        >
                          <span className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                            <i className="fi fi-rs-low-vision group-hover/showHide:opacity-0 opacity-100 absolute" />
                            <i className="fi fi-rs-overview group-hover/showHide:opacity-100 opacity-0 absolute" />
                          </span>
                        </button>
                        <button
                          title="buy"
                          className="text-blue-500 hover:text-blue-600 transition-all"
                        >
                          <i className="fi fi-rs-marketplace" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
        {/* Aside */}
        <aside
          id="overview"
          className={`${
            selectedRow != -1
              ? "md:w-full h-full px-4 py-4 md:px-4 border"
              : "h-0 md:w-0 overflow-hidden px-4 py-0 md:py-4 md:px-0"
          } rounded-xl flex flex-col items-center md:h-auto w-full md:w-0 gap-4 transition-all md:max-w-[400px] relative`}
        >
          <button
            onClick={() => setSelectedRow(-1)}
            className="absolute -top-2 -right-2 text-xl"
          >
            <i className="fi fi-sr-cross-circle" />
          </button>

          {selectedRow != -1 && (
            <div className="w-[120px] h-[120px] overflow-hidden rounded-full">
              <img
                src={leaderList[selectedRow].avatar}
                alt="user-avatar"
                className="cover-img"
              />
            </div>
          )}

          {selectedRow != -1 && (
            <h2 className="text-xl font-medium text-center">
              <span>{leaderList[selectedRow].rank}</span>{" "}
              <span>{leaderList[selectedRow].name}</span>
            </h2>
          )}

          <div className="flex items-center gap-2">
            <div className="banner-orange flex flex-col text-nowrap">
              <span>
                {selectedRow != -1 &&
                  leaderList[selectedRow].avg_daily_profit_percent}
              </span>
              <span className="text-sm">Avg Daily Profit</span>
            </div>
            <div className="banner-dark flex flex-col text-center flex-1 text-nowrap">
              <span>
                {selectedRow != -1 &&
                  leaderList[selectedRow].overall_profit_percent}
              </span>
              <span className="text-sm">Overall Profit</span>
            </div>
          </div>

          <div className="w-full">
            <p className="text-lg w-full flex justify-between items-center text-left">
              <span className="font-semibold">Win % (Day):</span>{" "}
              <span>
                <span className="font-semibold">
                  {selectedRow != -1 &&
                    leaderList[selectedRow].win_percent_day * 100}
                </span>
                /100
              </span>
            </p>
            <div className="w-full rounded-xl h-2 relative overflow-hidden border">
              <div
                style={{
                  width: `${
                    selectedRow != -1 &&
                    leaderList[selectedRow].win_percent_day * 100
                  }%`,
                }}
                className={`bg-gradient-to-r from-[#fc5550] to-[#f9456a] rounded-full h-full bg-black`}
              />
            </div>
          </div>
          <p className="font-semibold text-lg w-full text-left flex items-center gap-1">
            <span>Calmer Ratio:</span>{" "}
            <span>
              {selectedRow != -1 && leaderList[selectedRow].calmar_ratio}
            </span>
            <span>
              {selectedRow != -1 && leaderList[selectedRow].calmar_ratio > 0 ? (
                <i className="fi fi-rr-arrow-trend-up text-green-500" />
              ) : (
                <i className="fi fi-rr-arrow-trend-down text-red-500" />
              )}
            </span>
          </p>
        </aside>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-1">
        <button
          onClick={() =>
            setCurrentPage(currentPage - 1 > 0 ? currentPage - 1 : 1)
          }
          className="transition-all hover:bg-blue-300 w-10 h-10 flex border rounded-lg justify-center items-center"
        >
          <i className="fi fi-sr-angle-left" />
        </button>
        <button
          onClick={() => setCurrentPage(1)}
          className={`transition-all hover:bg-blue-300 w-10 h-10 flex border rounded-lg justify-center items-center ${
            currentPage == 1 && "bg-blue-400"
          }`}
        >
          1
        </button>

        {currentPage > 2 && <span>...</span>}
        {currentPage > 1 && currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage)}
            className={`transition-all hover:bg-blue-300 w-10 h-10 flex border rounded-lg justify-center items-center ${
              currentPage != 1 && currentPage != totalPages && "bg-blue-400"
            }`}
          >
            {currentPage}
          </button>
        )}
        {totalPages > 2 && currentPage < totalPages - 1 && <span>...</span>}
        {totalPages > 1 && (
          <button
            onClick={() => setCurrentPage(totalPages)}
            className={`transition-all hover:bg-blue-300 w-10 h-10 flex border rounded-lg justify-center items-center ${
              currentPage == totalPages && "bg-blue-400"
            }`}
          >
            {totalPages}
          </button>
        )}

        <button
          onClick={() =>
            setCurrentPage(
              currentPage + 1 <= totalPages ? currentPage + 1 : totalPages
            )
          }
          className="transition-all hover:bg-blue-300 w-10 h-10 flex border rounded-lg justify-center items-center"
        >
          <i className="fi fi-sr-angle-right" />
        </button>
      </div>
    </section>
  );
};

export default Page;
