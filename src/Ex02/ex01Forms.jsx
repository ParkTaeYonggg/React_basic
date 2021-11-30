import React from "react";

class ExForms extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: "",
            textVal: "",
            selectVal: "choose",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 네임벨류 변경 시 셋스테이트 할 함수
    handleNameValue = (e) => {
        this.setState({
            name: e.target.value,
        });
    }
    // 서브밋을 위한 함수
    handleSubmit (e) {
        this.setState({name:"-"});
        alert("전송되었습니다.");
        e.preventDefault();
    }

    // 텍스트영역 벨류 셋스테이트 할 함수
    hadleTextArea = (e) => {
        this.setState({textVal: e.target.value});
    }

    // 셀렉트태그에 셋스테이트 할 함수
    handleSelect = (e) => {
        this.setState({selectVal: e.target.value});
    }
    // 사진 미리보여줄 함수
    handleFile = (e) => {
        let file = new FileReader();

        file.readAsDataURL(e.target.files[0],"utf-8");
        file.onload = function () {
            document.querySelector("img").src= this.result;
        }
    }
    render () {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleNameValue} />
                    <br></br><hr></hr><br></br>
                    <textarea value={this.state.textVal} onChange={this.hadleTextArea}></textarea>
                    <br></br><hr></hr><br></br>
                    <label>
                        현재 공부중인 카테고리 선택 : <br></br>
                        <select value={this.state.selectVal} onChange={this.handleSelect}>
                            <option value="choose" disabled>선택해주세요</option>
                            <option value="react">리액트</option>
                            <option value="javaScript">자바스크립트</option>
                            <option value="JSTL">JSTL</option>
                            <option value="jQuery">제이쿼리</option>
                        </select>
                    </label>
                    <br></br><hr></hr><br></br>
                    {/* <select multiple={true} value={"ㄱ","ㄴ"}>
                        <option value="dd">dd</option>
                        <option value="aa">aa</option>
                    </select>
                    이건 뭘까? 배열을 사용가능 하다는 것이? */}
                    <input type="file" onChange={this.handleFile}/>
                    <p><img src="#" alt="사진" /></p>
                    <br></br><hr></hr><br></br>
                    <input type="submit" value="전송" />
                </form>
            </>
        );
    }
}

export default <ExForms />;