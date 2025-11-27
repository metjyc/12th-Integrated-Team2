import { useState } from "react";

export const Login = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <>
      {isClicked ? (
        <button
          onClick={() => setIsClicked(false)}
          className="w-full cursor-pointer"
        >
          <div className="border-gray-20 bg-skyblue text-lab-lg text-gray-60 border-blue rounded-2xl p-4">
            로그인하고 날씨보기
          </div>
        </button>
      ) : (
        <div className="border-gray-20 flex w-full flex-col gap-2 rounded-2xl border p-4">
          <div>
            <div className="flex w-full">
              <input
                type="text"
                value={id}
                onChange={e => setId(e.target.value)}
                required
                className="border-gray-20 hover:border-gray-60 text-gray-60 placeholder:text-gray-40 w-full cursor-pointer rounded-t-sm border p-1 outline-none"
                placeholder="아이디"
              ></input>
            </div>
            <div className="flex w-full">
              <input
                type="text"
                value={pw}
                onChange={e => setPw(e.target.value)}
                required
                className="border-gray-20 hover:border-gray-60 text-gray-60 placeholder:text-gray-40 w-full cursor-pointer rounded-b-sm border p-1 outline-none"
                placeholder="비밀번호"
              ></input>
            </div>
          </div>

          <button
            className={`text-lab-lg rounded-sm p-1 ${
              id && pw
                ? "bg-skyblue text-gray-60 border-blue"
                : "bg-gray-20 text-gray-40 border-gray-20 cursor-not-allowed"
            }`}
          >
            로그인
          </button>
        </div>
      )}
    </>
  );
};
