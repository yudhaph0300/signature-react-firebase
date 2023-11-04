import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Firebase
import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";

// Bootstrap
import {
  Container,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { toast } from "react-toastify";

function Profile() {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // Update Display
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // Update firestore
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
      }
    } catch (error) {
      toast.error("Could not update profile details");
    }
  };

  return (
    <>
      <Container>
        <div>
          <h3>Profile</h3>
          <Button variant="danger" onClick={onLogout}>
            Logout
          </Button>
        </div>
        <div className="mt-3">
          <p>Personal Details</p>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                disabled={!changeDetails}
                value={name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                // disabled={!changeDetails}
                disabled
                value={email}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
          <Button
            variant="success"
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDetails ? "Done" : "Change"}
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Profile;
