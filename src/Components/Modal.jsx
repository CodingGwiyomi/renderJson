import React from "react";

const Modal = ({ posts, show }) => {
  return (
    <>
      <div
        class="modal-container"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-background" role="document">
          <div className="modal-content">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Posts
            </h5>
            <div className="posts">
              {posts.map((post) => {
                return (
                  <table className="table table-light" key={post.id}>
                    <tbody>
                      <tr>
                        <th scope="row"></th>

                        <td>{post.body}</td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => {
                show();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
