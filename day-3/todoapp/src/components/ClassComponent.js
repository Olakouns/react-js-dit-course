import {Component} from 'react';

class ClassComponent extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount () {
        // Fetch data from sever
        // setInterval(() => {
        // }, 2000)
        console.error("componentDidMount");
    }

    componentDidUpdate(){
        // Update from user interface
        console.error("componentDidUpdate");
    }

    componentWillUnmount () {
        console.error("componentWillUnmount");
    }
    render() { 
        return ( 
            <>
                <h1>ClassComponent</h1>
            </>
         );
    }
}
 
export default ClassComponent;