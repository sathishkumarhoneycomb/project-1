
const MedicalProfilePage = () => {
    return (
        <section>
            <div className="row px-2 px-md-0">
                <header className="blue-gradient py-3 text-center text-white col-lg-8 col-md-11 col-12">
                    <h5> John Doe </h5>
                </header>
                <div className="py-5 px-md-5 px-2 card rounded-0 col-lg-8 col-md-11 col-12 ">
                    <form>
                        <div className="row mb-4 row-gap-4">
                        <div className="form-group col-md-6 col-12 ">
                            <input type="text" 
                            name="username"
                            placeholder="Name"
                            className="form-control rounded-0 "
                            />
                        </div>
                        <div className="form-group col-md-6 col-12">
                            <input type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control rounded-0"
                            value="test@gmail.com"
                            readOnly 
                            />
                        </div>
                        </div>
                        <div className="row mb-4 row-gap-4">
                            <div className="form-group col-md-6 col-12">
                                <input type="number"
                                name="phone"
                                placeholder="Phone"
                                className="form-control rounded-0"
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 ">
                                <select name="gender" 
                                className="form-control rounded-0">
                                    <option value="" disabled> Gender </option>
                                    <option value="male" > Male </option>
                                    <option value="female"> Female </option>
                                    <option value="other"> Other </option>
                                </select>
                            </div>
                        </div>

                        <div className="row mb-4 row-gap-4">
                            <div className="form-group col-md-6 col-12">
                                <input type="password" 
                                name="password"
                                placeholder="password"
                                className="form-control rounded-0"
                                />
                            </div>

                            <div className="form-group col-md-6 col-12">
                            <input type="password" 
                                name="confirmPassword"
                                placeholder="confirm password"
                                className="form-control rounded-0"
                                />
                            </div>

                        </div>
                        <div className="form-group mb-4">
                            <textarea name="address"
                            className="form-control rounded-0"
                            rows={5}
                            placeholder="Enter your address"
                            > </textarea>
                        </div>

                        <div className="form-group d-flex gap-4">
                        <button type="button" className="btn btn-outline-success rounded-0"> Logout </button>
                            <button type="submit" className="btn btn-outline-primary rounded-0"> Update </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
}

export default MedicalProfilePage;
