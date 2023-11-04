import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Toas
import { toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Eye, EyeSlash } from "react-bootstrap-icons";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Bad Credentials");
    }
  };

  return (
    <>
      <Container className="py-5">
        <h3 className="mb-3">Welcome to Signature</h3>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <FormControl
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
              />
              <InputGroup.Text onClick={toggleShowPassword}>
                {showPassword ? <EyeSlash /> : <Eye />}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <div className="text-end mb-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>

        {/* Google Auth */}

        <div className="mt-5 text-center">
          <Link to="/register">Register for new user</Link>
        </div>
      </Container>
    </>
  );
}

export default Login;
