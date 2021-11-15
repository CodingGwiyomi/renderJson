import React, { useState, useEffect } from "react";
import * as renderJsonServices from "../Services/renderJsonServices";
import Modal from "./Modal";

const RenderJson = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    renderJsonServices
      .getJsonUsers()
      .then(onGetUsersSuccess)
      .catch(onGetUsersError);
  }, []);

  const onGetUsersSuccess = (response) => {
    console.log(response);
    setUserInfo(response.data);
  };

  const onGetUsersError = (error) => {
    console.log(error);
  };

  const getPosts = (id) => {
    renderJsonServices
      .getJsonUserPosts(id)
      .then(onGetPostsSuccess)
      .catch(onGetPostsError);
  };

  const onGetPostsSuccess = (response) => {
    console.log(response);
    setUserPosts(response.data);
    changeModalStatus();
  };

  const onGetPostsError = (error) => {
    console.log(error);
  };

  const changeModalStatus = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <p>Click on a username to see their posts</p>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        {userInfo &&
          userInfo.map((user) => {
            return (
              <tbody key={user.id}>
                <tr>
                  <th scope="row">{user.id}</th>
                  <td onClick={() => getPosts(user.id)}>{user.username}</td>
                </tr>
              </tbody>
            );
          })}

        {showModal && <Modal show={changeModalStatus} posts={userPosts} />}
      </table>
    </>
  );
};

export default RenderJson;
