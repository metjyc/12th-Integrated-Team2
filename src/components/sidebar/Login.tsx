import { useState } from "react";

import { login, signup } from "@/apis/auth";

import { useUserStore } from "@/store/userStore";

export const Login = () => {
  const [loginClicked, setLoginClicked] = useState(false);
  const [signupClicked, setSignupClicked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      if (!username || !password) return;
      await signup(username, password);
      console.log("회원가입 성공");
      const loginRes = await login(username, password);
      const userId = loginRes.result.id;
      console.log("로그인 성공");
      useUserStore.getState().setId(userId);
      useUserStore.getState().setUsername(username);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      if (!username || !password) return;
      const res = await login(username, password);
      console.log("로그인 성공");
      const userId = res.result.id;
      useUserStore.getState().setId(userId);
      useUserStore.getState().setUsername(username);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loginClicked || signupClicked ? (
        <div className="border-gray-20 flex w-full flex-col gap-2 rounded-2xl border p-4">
          <div>
            <div className="flex w-full">
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                className="border-gray-20 hover:border-gray-60 text-gray-60 placeholder:text-gray-40 w-full cursor-pointer rounded-t-sm border p-1 outline-none"
                placeholder="아이디"
              ></input>
            </div>
            <div className="flex w-full">
              <input
                type="text"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="border-gray-20 hover:border-gray-60 text-gray-60 placeholder:text-gray-40 w-full cursor-pointer rounded-b-sm border p-1 outline-none"
                placeholder="비밀번호"
              ></input>
            </div>
          </div>
          {loginClicked && (
            <button
              onClick={handleLogin}
              className={`text-lab-lg cursor-pointer rounded-sm p-1 ${
                username && password
                  ? "bg-skyblue text-gray-60 border-blue"
                  : "bg-gray-20 text-gray-40 border-gray-20 cursor-not-allowed"
              }`}
            >
              로그인
            </button>
          )}
          {signupClicked && (
            <button
              onClick={handleSignup}
              className={`text-lab-lg cursor-pointer rounded-sm p-1 ${
                username && password
                  ? "bg-skyblue text-gray-60 border-blue"
                  : "bg-gray-20 text-gray-40 border-gray-20 cursor-not-allowed"
              }`}
            >
              회원가입
            </button>
          )}
        </div>
      ) : (
        <div className="flex w-full flex-col gap-[2px]">
          <button
            onClick={() => setSignupClicked(true)}
            className="bg-skyblue text-lab-lg text-gray-60 border-green hover:bg-blue cursor-pointer rounded-md p-2"
          >
            회원가입하고 날씨보기
          </button>
          <button
            onClick={() => setLoginClicked(true)}
            className="bg-skyblue text-lab-lg text-gray-60 border-blue hover:bg-blue cursor-pointer rounded-md p-2"
          >
            로그인하고 날씨보기
          </button>
        </div>
      )}
    </>
  );
};
