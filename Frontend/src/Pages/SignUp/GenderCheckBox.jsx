const GenderCheckBox = () => {
  return (
    <div className="flex mt-2">
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text font-bold px-2">Female</span>
                <input type="checkbox" defaultChecked className="checkbox border-white hover:border-black" />
            </label>
        </div>

        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text font-bold px-2">Male</span>
                <input type="checkbox" defaultChecked className="checkbox  border-white hover:border-black" />
            </label>
        </div>
      
    </div>
  )
}

export default GenderCheckBox
