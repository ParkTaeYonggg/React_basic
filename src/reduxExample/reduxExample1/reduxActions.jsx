
// 액션의 타입(명령어)
export const LOGIN = "Login";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILUE = "LOGIN_FAILUE";

// 액션 크리에이터 (액션 메서드)
export const login = (id, pw) => {
    return {
        type: login,
        promise: { method: "post",
                   url: "/api/login/redux", 
                   data: {id, pw}
                 }
    };
}


// 액션메서드의 역할 : 리듀서에 데이터 생성 요청 처리를 함.