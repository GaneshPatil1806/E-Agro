import Container from "../components/Container";
import FromWrap from "../components/FormWrap";
import LoginForm from "./LoginForm";


const Login = () => {
    return ( 
        <Container>
            <FromWrap>
                <LoginForm/>
            </FromWrap>
        </Container>
     );
}
 
export default Login;