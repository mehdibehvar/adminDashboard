import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editProfile } from "../features/users/userSlice";

export default function ProfileModal({ profileInfo }) {
  const { id, summary, location, mobile, fullName,avatar }=profileInfo;
  const prevAvatarPath=avatar;
  const dispatch=useDispatch();
  const { register, handleSubmit, setValue,formState:{errors} } = useForm();
  ///set value of form when component mount////
  useEffect(() => {
    setValue("summary", summary);
    setValue("location", location);
    setValue("mobile", mobile);
    setValue("fullName", fullName);

  }, []);
  ////edit profile info by a patch request/////
  const handleEditProfile = (inputs,e) => {
    e.preventDefault();
    const { summary, location, mobile, fullName, avatar} = inputs;
    const data = new FormData();
    for(let i = 0; i < avatar.length; i++) {
        data.append('file', avatar[i]);
    }
    axios.post('http://localhost:8000/upload', data)
        .then((response) => {
          const path=response.data[0].path;
          const publicPath=avatar?path.slice(7):prevAvatarPath;
      dispatch(
        editProfile({
         userId:id,
          summary,
          location,
          mobile,
          fullName,
          avatar:publicPath,
        })
      );
        })
        .catch((e) => {
       dispatch(
        editProfile(e)
      );
        })
  
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
                    <label
                      className="form-label text-primary me-2"
                      htmlFor="summary-text"
                    >
                      summary:
                    </label>
                    <textarea
                      {...register("summary")}
                      className="p-2"
                      id="summary-text"
                      name="summary"
                      rows="4"
                      cols="50"
                    ></textarea>
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
                  <li className="list-group-item list-group-item-warning">
                    <label
                      className="form-label text-primary mb-0"
                      htmlFor="inputGroupFile04"
                    >
                      change profile image:
                    </label>
                    <div className="input-group mb-3">
                      <label className="input-group-text" htmlFor="inputGroupFile01">
                        Upload
                      </label>
                      <input
                      {...register("avatar",{required:true})}
                        type="file"
                        className="form-control"
                        id="inputGroupFile01"
                      />
                    </div>
                      <span>{errors.avatar?.type==="required"&&"upload your profile image"}</span>
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
/////////The FormData interface provides a way to easily
///construct a set of key/value pairs representing form fields and their values,
// which can then be easily sent using the fetch() or XMLHttpRequest.send() method.
// It uses the same format a form would use if the encoding type were set to
////"multipart/form-data"
