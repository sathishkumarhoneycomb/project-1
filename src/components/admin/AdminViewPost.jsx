
import userLogo from "../../../public/assets/images/images.jpeg";


const AdminViewPost = () => {
    return (
        <section>
            {/* The actual post  */}
            <div className="mb-5 card rounded-0">
                <header className="card-header ">
                <h4 className="fw-semibold m-0 mb-2">What is Lorem Ipsum? </h4>
                <span className="fw-semibold post_meta_details text-success "> Sathish Kumar on 2024 Sept 23 </span>
                </header>
                <div className="card-body">
                <p className="fs-6 lh-lg card-text"> Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>

            </div>

            {/* Reply  */}
            <div>

            </div>


            {/* comments  */}
            <div>
                <h5 className="mb-4"> <span> 5 </span> Comments </h5>

                {/* Reply  */}
                <div className="mb-4">
                    <form> 
                    <div className="form-group d-flex gap-3 mb-3">

                        <img src={userLogo} className="comment_user_profile  rounded-circle" />
                    
                        <input type="text" name="userReply" placeholder="Leave a reply..." className="outline_none  user_input_comment " />
                        </div>
                        <div className="d-flex justify-content-end gap-3">
                            <button className="btn btn-outline-success rounded-0 py-1 rounded-pill"> Comment </button>
                        </div>
                    </form>

                </div>


                <div className="d-flex flex-column gap-4">
                <div className="card rounded-0">
                    <span className="card-header text-success post_meta_details"> Commented By: Sanjeev on 2024 Nov 4  </span>
                    <div className="card-body"> 
                    <p className="card-text "> This is the actual comment by me </p> 
                    </div>
                </div>

                <div className="card rounded-0">
                    <span className="card-header text-success post_meta_details"> Commented By: Sanjeev on 2024 Nov 4  </span>
                    <div className="card-body"> 
                    <p className="card-text"> This is the actual comment by me </p> 
                    </div>
                </div>

                <div className="card rounded-0">
                    <span className="card-header text-success post_meta_details"> Commented By: Sanjeev on 2024 Nov 4  </span>
                    <div className="card-body"> 
                    <p className="card-text"> This is the actual comment by me </p> 
                    </div>
                </div>
            </div>

            </div>


        </section>
    );
}

export default AdminViewPost;

