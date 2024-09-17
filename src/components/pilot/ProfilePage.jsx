function ProfilePage() {

    return (
        <>
            <section className="mb-5 pb-5 pt-2 px-2 px-md-3 px-lg-5">

                <div className="card">
                    <header className="card-header bg_dark_blue d-flex justify-content-center align-items-center mb-3">
                                <h4 className="card-title text-center text-white py-1 "> Test user  </h4>
                    </header>

                    <div className="card-body px-5">


                        <form>
                        {/* double col */}
                            <div className="row mb-3 ">

                                    <div className="form-group col-lg-6 col-md-12 ">
                                                <label forHtml="username" className="form-label fw-semibold fw-semibold"> Name:  </label>
                                                <input type="text" className="form-control" name="username" id="username" />
                                    </div>
                                    <div className="form-group col-lg-6 col-md-12 ">
                                                <label forHtml="email" className="form-label fw-semibold fw-semibold"> Email: </label>
                                                <input type="email" className="form-control w-100"  name="email" />

                                    </div>
                            </div>
                            {/* single col */}
                            <div className="form-group mb-3">
                                    <label forHtml="licenceType" className="form-label fw-semibold"> Licence Type: </label>
                                    <input type="text" name="licenceType" className="form-control" />

                            </div> 
                            {/* double col  */}
                            <div className="row mb-3">
                            {/* phone number */}
                                <div className="form-group col-lg-6 col-md-12">
                                    <label forHtml="phone" className="form-label fw-semibold"> Phone : </label>
                                    <input type="tel" className="form-control"  name="phone" />

                                </div>

                                {/* gender */}
                                <div className="form-group col-lg-6 col-sm-12">
                                            <label forHtml="gender" className="form-label fw-semibold"> Gender:  </label>
                                            <select name="gender" className="form-control">
                                                <option value="" disabled selected > Gender </option>
                                                <option value="male" > Male </option>
                                                <option value="female"> Female </option>
                                                <option value="other"> Other </option>
                                            </select>

                                </div>
                            </div> 

                            {/* single col - pan  */}
                            <div className="form-group mb-3">

                                    <label forHtml="pan" className="form-label fw-semibold"> PAN Number: </label>
                                    <input  type="text" className="form-control"  name="pan" />
                            </div>

                            {/* double  col */}
                            <div className="row mb-3">
                                    {/* adhar  */}
                                    <div className="form-group col-sm-12 col-lg-6">
                                                <label forHtml="aadhar" className="form-label fw-semibold"> Aadhar No: </label>
                                                <input type="text" className="form-control" name="aadhar" />


                                    </div>
                                    {/* dgca  */}
                                    <div className="form-group col-sm-12 col-lg-6">

                                        <label forHtml="dgca"  className="form-label fw-semibold"> DGCA Medical File No: </label>
                                        <input type="text" className="form-control"  name="dgca" />

                                    </div>


                            </div>

                            {/* single col - photo  */}
                            <div className="form-group mb-4">
                                <label className="form-label fw-semibold" forHtml="photo"> Profile Photo: </label>
                                <input type="file" className="form-control" name="photo" />

                            </div>

                            {/* single col - name of airline */}
                            <div className="form-group mb-3">
                                    <label className="form-label fw-semibold"> Name of Airline: </label>
                                    <select className="form-control" name="airline">

                                        <option disabled selected value="">  Select Airline </option>
                                        <option value="Jet Airways" >Jet Airways</option>
                                        <option value="Air India">Air India</option>
                                        <option value="Indigo">Indigo</option>
                                        <option value="Spice Jet">Spice Jet</option>
                                        <option value="Air India Express">Air India Express</option>
                                        <option value="Go Air" >Go Air</option>
                                        <option value="Air Asia India" >Air Asia India</option>
                                        <option value="Vistara" >Vistara</option>
                                        <option value="Alliance">Alliance</option>
                                        <option value="True Jet" >True Jet</option>
                                        <option value="Blue Dart">Blue Dart</option>
                                        <option value="Jetlite">Jetlite</option>
                                        <option value="General Aviation">General Aviation</option>
                                        <option value="Others">Others</option>

                                    </select>
                            </div>


                            {/* double col  */}
                            <div className="row mb-3">
                                {/* base location */}
                                <div className="form-group col-sm-12 col-lg-6">
                                    <label className="form-label fw-semibold"> Base Location </label>
                                    <input type="text" className="form-control" name="base" />
                                </div>

                                {/* position  */}
                                <div className="form-group col-sm-12 col-lg-6">
                                    <label className="form-label fw-semibold"> Position </label>
                                    <select name="position" className="form-control">
                                    <option value="" disabled selected> Position </option>
                                    <option value="Captain" >Captain</option>
                                    <option value="First Officer">First Officer</option>
                                    <option value="Second Officer" >Second Officer</option>
</select>
                                </div>
                            </div>

                            {/* single col - aircraft type */}
                            <div className="form-group mb-3">
                                
                                <label className="form-label fw-semibold"> Aircraft type: </label>
                                <select name="aircraft" className="form-control">
                                <option value="" disabled selected> Select aircraft type </option>
                                <option value="Boeing 737">Boeing 737</option>
                                <option value="Airbus 330">Airbus 330</option>
                                <option value="Boeing 777" >Boeing 777</option>
                                <option value="Boeing 787" >Boeing 787</option>
                                <option value="ATR 72">ATR 72</option>
                                <option value="Bombardier">Bombardier</option>
                                <option value="Others" >Others</option>
                                </select>

                            </div>

                            {/* double col */}
                            <div className="row mb-3">
                                {/* date of birth */}
                                <div className="form-group col-sm-12 col-lg-6">
                                    <label className="form-label fw-semibold"> Date of Birth: </label>
                                    <input type="date" className="form-control" name="dob" />
                                </div>

                                {/* licence no */}
                                <div className="form-group col-sm-12 col-lg-6">
                                    <label className="form-label fw-semibold"> Licence No:  </label>
                                    <input type="text" className="form-control" name="licence" />

                                </div>
                            </div>



                            {/* single col - member type */}
                            <div className="form-group mb-5">
                                      <label className="form-label fw-semibold"> Member Type: </label>
                                      <select name="memberType" className="form-control">
                                     <option value="" disabled selected> Member Type </option>
                                     <option value="ALPA Member" title="ALPA Membership for 1 Year. Fees INR 3000">ORDINARY Member</option>
                                     <option value="ALPA Member + Benevolent Fund Member" title="ALPA Membership for 1 Year and Benevolent Fund Member. Fees INR 3000 for ALPA Membership and INR 6000 pm for Benevolent Fund Membership" >ALPA Member + Benevolent Fund Member</option>                            
                                    </select>

                            </div>

                            {/*single col -  GMC  */}

                            <div className="form-group d-block d-md-flex align-items-start gap-5 mb-5">
                                <label className="fw-semibold"> Do you want to become ALPA Group Medical Coverage(ALPA GMC)? </label>
                                <div className=" d-flex mt-3 mt-md-0 gap-5">
                                <label className="d-flex align-items-center gap-2">
                                <input type="radio"  className="scale_5" name="gmc" value="no" /> No  </label>
                                <label className="d-flex align-items-center gap-2">
                                <input type="radio"  className="scale_5" name="gmc" value="yes" /> Yes </label>
                                </div>
                            </div>

                            {/* double col */}
                            <div className="row mb-3">
                                
                                {/* password */}
                                <div className="form-group col-sm-12 col-lg-6"> 
                                        <label className="form-label fw-semibold"> Password: </label>
                                        <input type="password" className="form-control" name="password" />
                                </div>

                                {/* confirm password */}
                                <div className="form-group col-sm-12 col-lg-6">

                                    <label className="form-label fw-semibold"> Confirm Password </label>
                                    <input type="password" className="form-control" name="confirmPassword" />


                                </div>
                            </div>

                            {/* single col - address */}

                            <div className="form-group mb-5">
                                    <label className="form-label fw-semibold"> Mailing Address: </label>
                                    <textarea  className="form-control" rows="3" name="address" > </textarea>

                            </div>
                            {/* single col - submit button */}

                            <div className="form-group mb-2 d-flex justify-content-center">
                                <button className="btn btn-outline-primary rounded-0 text-uppercase fw-semibold  w-50" > Update </button>
                                
                            </div>


                        </form>



                    </div>



                </div>

            </section>


        </>
    )
}




export default  ProfilePage;

