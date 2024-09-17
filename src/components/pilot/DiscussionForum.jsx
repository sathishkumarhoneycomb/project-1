import { useNavigate, Link } from "react-router-dom";

const DiscussionForum = () => {
    const navigate = useNavigate();

    return (
        <section className='mb-5'>
            <header className='mb-3' >
                <div className='d-flex flex-column flex-md-row card card-body rounded-0 '>
                <h4 className='col-11  ps-5 text-center text-success text-uppercase' > Discussion Form </h4>
                <Link to="/pilot/discussion-forum/create" className='col btn btn-outline-primary rounded-0'> POST  </Link>
                </div>
            </header>


            <div className='card card-body rounded-0'>
            <div className='table-responsive'>



                    <table className='table pilot_discussion_form_table'  > 
                    <thead className='table-primary'>
                        <tr>
                            <th className='col col-lg-7 py-3' > Post </th>
                            <th className='col col-lg-2 py-3'> Posted By </th>
                            <th className='col col-lg-2 py-3'> Post Date </th>
                            <th className='col py-3'> Threads </th>
                            <th className='col col-lg-2 py-3'> Action </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr className=''> 
                            <td className='py-3'> How to cancel the subscription   </td>
                            <td className='py-3'> sathish kumar </td>
                            <td className='py-3'> 2024 10 12 Sat 12:00  </td>
                            <td className='py-3 '> 0 </td>
                            <td className=""> <a className=''> 
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            height="24px" 
                            viewBox="0 -960 960 960" 
                            width="24px" 
                            className="view_icon cursor_pointer"
                            fill="#e8eaed"
                            onClick={() => navigate("/pilot/discussion-forum/11")}
                            >
                            <title> View the post  </title>
                            <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                             </a> </td>
                        </tr>
                        <tr className=''> 
                            <td className='py-3'> How to cancel the subscription   </td>
                            <td className='py-3'> sathish kumar </td>
                            <td className='py-3'> 2024 10 12 Sat 12:00  </td>
                            <td className='py-3'> 0 </td>
                            <td className=""> <a className=''> 
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            height="24px" 
                            viewBox="0 -960 960 960" 
                            width="24px" 
                            className="view_icon cursor_pointer"
                            onClick={() => navigate("/pilot/discussion-forum/11")}
                            fill="#e8eaed">
                            <title> View the post  </title>
                            <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                             </a> </td>                        </tr>
                        <tr className=''> 
                            <td className='py-3'> How to cancel the subscription   </td>
                            <td className='py-3'> sathish kumar </td>
                            <td className='py-3'> 2024 10 12 Sat 12:00  </td>
                            <td className='py-3'> 0 </td>
                            <td className=""> <a className=''> 
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            height="24px" 
                            viewBox="0 -960 960 960" 
                            width="24px" 
                            className="view_icon cursor_pointer"
                            onClick={() => navigate("/pilot/discussion-forum/11")}
                            fill="#e8eaed">
                            <title> View the post  </title>
                            <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                             </a> </td>                        </tr>
                        <tr className=' '> 
                            <td className='py-3'> How to cancel the subscription   </td>
                            <td className='py-3'> sathish kumar </td>
                            <td className='py-3'> 2024 10 12 Sat 12:00  </td>
                            <td className='py-3'> 0 </td>
                            <td className=""> <a className=''> 
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            height="24px" 
                            viewBox="0 -960 960 960" 
                            width="24px" 
                            className="view_icon cursor_pointer"
                            onClick={() => navigate("/pilot/discussion-forum/11")}
                            fill="#e8eaed">
                            <title> View the post  </title>
                            <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                             </a> </td>                        </tr>
                        
                    </tbody>
                    </table>
                    </div>
            </div>

        </section>
    );
}

export default DiscussionForum;
