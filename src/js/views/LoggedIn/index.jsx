import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useAuth0 } from "utils/auth/react-auth0-spa";
import Loader from "components/Loader/Loader";
import Menu from "components/Menu/Menu";
import Footer from "components/Footer/Footer";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbDown";

const LoggedIn = () => {
  const [products, setProducts] = useState([]);
  const [voted, setVoted] = useState({
    "world-of-authcraft": "",
    "ocean-explorer": "",
    "dinosaur-park": "",
    "cars-vr": "",
    "robin-hood": "",
    "real-world-vr": "",
  });

  const {
    loading,
    user,
    logout,
    isAuthenticated,
  } = useAuth0();

  if (loading || !user) {
    return <Loader/>;
  }

  return (
    <div className="container">
      <CssBaseline />
      <Menu/>
      <div className="jumbotron text-center mt-5">
        <h1>Logged</h1>
        {isAuthenticated && (
          <span
            className="btn btn-primary float-right"
            onClick={() => logout()}
          >
            Log out
          </span>
        )}
        <h1>We R VR</h1>
        <p>
          Hi, {user.name}! Below you'll find the latest games that need
          feedback. Please provide honest feedback so developers can make the
          best games.
        </p>
        <div className="row">
          {products.map(function (product, index) {
            const prodSlug = product.Slug;
            return (
              <div className="col-sm-4" key={index}>
                <div className="card mb-4">
                  <div className="card-header">{product.Name}</div>
                  <div className="card-body">{product.Description}</div>
                  <div className="card-footer">
                    <a onClick={() => vote(product.Slug, "Upvoted", index)}
                      className="btn btn-default float-left">
                      <ThumbUpIcon />
                    </a>
                    <small className="text-muted">{voted[prodSlug]}</small>
                    <a onClick={() => vote(product.Slug, "Downvoted", index)}
                      className="btn btn-default float-right">
                      <ThumbDownIcon />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LoggedIn;
