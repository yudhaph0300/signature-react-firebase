// Firebase
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

// Bootstrap
import { Container } from "react-bootstrap";

function Profile() {
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    if (user) return;
    setUser(auth.currentUser);
  }, [auth.currentUser, user]);

  return (
    <>
      <Container>
        <h3>{user ? user.displayName : "Not Logged In"}</h3>
      </Container>
    </>
  );
}

export default Profile;
