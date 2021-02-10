import React, { useContext, useState } from "react";
import "./profile.css";
import { AuthContext } from "../../../contexts/AuthContext";
import PrivateRoute from "../../PrivateRoute";
const Profile = () => {
  const { me } = useContext(AuthContext);
  const [profileinput, setProfileinput] = useState({
    username: me.username,
    firstname: me.firstname,
    lastname: me.lastname,
    tel: me.tel,
    address: me.address,
  });

  const handleSave = () => {
    console.log(profileinput);
  };

  return (
    <div className="my__account">
      <div className="my__account__section">
        <div className="my__account__header">
          <div className="my__account__header__left">
            <div className="my__account__header__title">ข้อมูลของฉัน</div>
          </div>
        </div>
        <div className="my__account__input">
          <div className="my__account__profile__left">
            <div className="input__with-label">
              <div className="input__with-label__label">
                <label>ชื่อผู้ใช้</label>
              </div>
              <div className="input__container">
                <input
                  type="text"
                  className="input__text"
                  value={profileinput.username}
                  onChange={(text) =>
                    setProfileinput({
                      ...profileinput,
                      username: text.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="input__with-label">
              <div className="input__with-label__label">
                <label>ชื่อ</label>
              </div>
              <div className="input__container">
                <input
                  type="text"
                  className="input__text"
                  value={profileinput.firstname}
                  onChange={(text) =>
                    setProfileinput({
                      ...profileinput,
                      firstname: text.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="input__with-label">
              <div className="input__with-label__label">
                <label>นามสกุล</label>
              </div>
              <div className="input__container">
                <input
                  type="text"
                  className="input__text"
                  value={profileinput.lastname}
                  onChange={(text) =>
                    setProfileinput({
                      ...profileinput,
                      lastname: text.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="input__with-label">
              <div className="input__with-label__label">
                <label>หมายเลขโทรศัพท์</label>
              </div>
              <div className="input__container">
                <input
                  type="text"
                  className="input__text"
                  value={profileinput.tel}
                  onChange={(text) =>
                    setProfileinput({
                      ...profileinput,
                      tel: text.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="input__with-label">
              <div className="input__with-label__label">
                <label>ที่อยู่</label>
              </div>
              <div className="input__container">
                <textarea
                  className="input__text"
                  rows="4"
                  placeholder="Address..."
                  value={profileinput.address}
                  onChange={(text) =>
                    setProfileinput({
                      ...profileinput,
                      address: text.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>
            <div className="input__with-label">
              <div className="input__with-label__label">
                <label></label>
              </div>
              <div className="input__container">
                <input
                  onClick={handleSave}
                  type="button"
                  className="btn-save"
                  value="บันทึก"
                />
              </div>
            </div>
          </div>
          <div className="my__account__profile__right">
            <div className="avatar__upload">
              <img
                className="avatar__upload__image"
                src="https://image.flaticon.com/icons/png/512/147/147144.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute(Profile);
