const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
    return (
      <div className="flex mt-2">
          <div className="form-control">
              <label className={`label cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                  <span className="label-text font-bold px-2">Female</span>
                  <input
                      type="checkbox"
                      checked={selectedGender === "female"}
                      onChange={() => onCheckboxChange("female")}
                      className="checkbox border-white hover:border-black"
                  />
              </label>
          </div>
  
          <div className="form-control">
              <label className={`label cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                  <span className="label-text font-bold px-2">Male</span>
                  <input
                      type="checkbox"
                      checked={selectedGender === "male"}
                      onChange={() => onCheckboxChange("male")}
                      className="checkbox border-white hover:border-black"
                  />
              </label>
          </div>
      </div>
    );
  };
  
  export default GenderCheckBox;
  