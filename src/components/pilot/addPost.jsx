
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";


const AddPost = () => {
    // validation rules 
    // 1. Title must be 3 characters long 
    // 2. Description must be 10 characters long\
    
    const navigate = useNavigate();

    const [isValidTitle, setIsValidTitle] = useState(true);
    const [isValidDescription, setIsValidDescription] = useState(true);

    const [formValue, setFormValue] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        if(!e.target.checkValidity()){

            if(e.target.name == "title") {
                setIsValidTitle(false);
            } else {
                setIsValidDescription(false);
               
            }
        } else {
            if(e.target.name == "title") {
                setIsValidTitle(true)
            } else {
                setIsValidDescription(true)
            }
        }
        setFormValue(prev => ({...prev, [e.target.name] : e.target.value}));
    }



    return (
       <>
        <section className="add_post_section" onSubmit={(e) => e.preventDefault()}>
           <header className="d-flex flex-row align-items-center  card card-body rounded-0 mb-3">
           <h4 className="col-11 text-uppercase text-success text-center m-0"> create new post </h4>
           <button className="col btn btn-outline-success rounded-0 " 
           onClick={() => navigate("/pilot/discussion-forum") }
           > View </button>
           </header>

            <form method="post" 
            className="card px-5 py-5 d-flex flex-column gap-5 rounded-0">
                <div className="form-group">
                    <input type="text" 
                    placeholder="Post Title" 
                    name="title"
                   minLength={3}
                   required
                    title="Title must be 3 characters long"
                    className="form-control rounded-0"
                    value={formValue.title}
                    onChange={handleChange}
                     />
                     {
                        !isValidTitle && formValue.title   && <span className="form-text text-danger mt-2 fw-semibold"> Post title  must be 3 characters long </span> 
                     }
                     
                </div>

                <div className="form-group">
                <textarea placeholder="description"
                minLength={10}
                name="description"
                className="form-control rounded-0"
                rows={5}
                required
                value={formValue.description}
                onChange={handleChange}
                ></textarea>
                {
                    !isValidDescription && formValue.description && <span className="form-text text-danger mt-2 fw-semibold"> Post description  must be 10 characters long </span> 
                }
                </div>
                <div className="form-group text-center">
                    <button className="btn btn-outline-primary rounded-0 px-5"> Submit </button>
                </div>

            </form>

        </section>
       </>
    );
}

export default AddPost;
