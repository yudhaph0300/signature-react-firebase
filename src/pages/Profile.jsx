// Firebase
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

// Bootstrap
import { Container } from "react-bootstrap";

function Profile() {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return (
    <>
      <Container>
        <h3>{user ? user.displayName : "Not Logged In"}</h3>
      </Container>
    </>
  );
}

export default Profile;
