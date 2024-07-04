import Container from "../components/Container";
import FromWrap from "../components/FormWrap";
import RegisterForm from "./RegisterForm";

const Register = () => {
    return ( 
        <Container>
            <FromWrap>
                <RegisterForm/>
            </FromWrap>
        </Container>
     );
}
 
export default Register;