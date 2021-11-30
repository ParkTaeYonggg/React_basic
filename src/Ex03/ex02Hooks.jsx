import React, {useState} from "react";
// 유즈스테이트를 따로 꺼낸다.

function Example() {
    // 새로운 스테이트 변수 선언
    const [count, setCount] = useState(0);

    return (
        <>
            <p>클릭을 몇번 했을까? {count}</p>
            <button onClick={() => setCount(count + 1)}>눌러줘</button>
        </>
    );
}
// 훅은 클래스가 가진 문제를 보완하기 위해 나왔다.
// 훅은 재사용성을 늘리고 코드의 복잡성을 줄여준 것이다.
// --> 어느부분에서 일지 생각하며 봐야겠다.

// useEffect는 컴포넌트디드마운트나 업데이트랑 비슷하다.
// 근데 유즈이펙트는 리랜더 그리고 업데이트 후마다 발생한다는 장점이 있다.
export default <Example />;