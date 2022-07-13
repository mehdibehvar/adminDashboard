import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editProfile } from "../features/users/userSlice";

export default function ProfileModal({ profileInfo }) {
  const { id, summary, location, mobile, fullName } = profileInfo;
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();
  ///set value of form when component mount////
  useEffect(() => {
    setValue("summary", summary);
    setValue("location", location);
    setValue("mobile", mobile);
    setValue("fullName", fullName);
  }, []);
  ////edit profile info by a patch request/////
  const handleEditProfile = (inputs) => {
    const { summary, location, mobile, fullName } = inputs;
    dispatch(
      editProfile({
        userId: id,
        summary,
        location,
        mobile,
        fullName,
      })
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleEditProfile)}>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title text-success"
                  id="staticBackdropLabel"
                >
                  edit profile Information
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ul className="list-group text-start">
                  <li className="list-group-item list-group-item-danger">
                    <label className="form-label text-primary me-2" htmlFor="summary-text">
                      summary:
                    </label>
                    <textarea {...register("summary")} className="p-2" id="summary-text" name="summary" rows="4" cols="50">
                 
                    </textarea>
           
                  </li>
                  <li className="list-group-item list-group-item-warning">
                    <label className="form-label text-primary me-2">
                      fullName:
                    </label>
                    <input {...register("fullName")} />
                  </li>
                  <li className="list-group-item list-group-item-info">
                    <label className="form-label text-primary me-2">
                      mobile:
                    </label>
                    <input {...register("mobile")} />
                  </li>
                  <li className="list-group-item list-group-item-light">
                    <label className="form-label text-primary me-2">
                      location:
                    </label>
                    <input {...register("location")} />
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
