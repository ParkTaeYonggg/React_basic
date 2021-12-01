import React from "react";
const Component = React;

class ErrorBoudary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: false };
    }

    static getDerivedStateFromError (error) {
        return {error: true};
    }
    componentDidCatch(error, errorInfo){
        return <h1>에러에러~</h1>
    }


}
export default ErrorBoudary