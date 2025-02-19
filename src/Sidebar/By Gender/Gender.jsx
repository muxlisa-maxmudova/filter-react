import  './Gender.css'
const Gender = () => {
    return (
        <>
            <div className={'ml2'}>
                <h2 className={'sidebar-title gender-title'}>Gender</h2>
                <label className={'sidebar-label-container'}>
                    <input type="radio" value="" name="test3"/>
                    <span className="checkmark"></span> All
                </label>
                <label className={'sidebar-label-container'}>
                    <input type="radio" value="" name="test3"/>
                    <span className="checkmark"></span> Kids
                </label>
                <label className={'sidebar-label-container'}>
                    <input type="radio" value="" name="test3"/>
                    <span className="checkmark"></span> Female
                </label>
                <label className={'sidebar-label-container'}>
                    <input type="radio" value="" name="test3"/>
                    <span className="checkmark"></span> Male
                </label>
                <label className={'sidebar-label-container'}>
                    <input type="radio" value="" name="test3"/>
                    <span className="checkmark"></span> Unisex
                </label>
            </div>
        </>
    )
}
export default Gender
