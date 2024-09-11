import React from 'react';

const DiscussionForum = () => {
    return (
        <section className='mb-5'>
            <header className='mb-3' >
                {/* <div className='card card-body rounded-0 mb-3 '>
                    <h4 className='text-success text-uppercase text-center m-0 py-2 '> Discussion Form  </h4>
                    <a className=' dicussionFormBtn'> POST+</a>
                </div> */}
                <div className='d-flex flex-column flex-md-row card card-body rounded-0 '>
                <h4 className='col-11  ps-5 text-center text-success text-uppercase' > Discussion Form </h4>
                <a className='col dicussionFormBtn'> POST  </a>
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
                            <td className=""> <a className=''> View </a> </td>
                        </tr>
                        <tr className=''> 
                            <td className='py-3'> How to cancel the subscription   </td>
                            <td className='py-3'> sathish kumar </td>
                            <td className='py-3'> 2024 10 12 Sat 12:00  </td>
                            <td className='py-3'> 0 </td>
                            <td className=""> <a className=''> View </a> </td>
                        </tr>
                        <tr className=''> 
                            <td className='py-3'> How to cancel the subscription   </td>
                            <td className='py-3'> sathish kumar </td>
                            <td className='py-3'> 2024 10 12 Sat 12:00  </td>
                            <td className='py-3'> 0 </td>
                            <td className=""> <a className=''> View </a> </td>
                        </tr>
                        <tr className=' '> 
                            <td className='py-3'> How to cancel the subscription   </td>
                            <td className='py-3'> sathish kumar </td>
                            <td className='py-3'> 2024 10 12 Sat 12:00  </td>
                            <td className='py-3'> 0 </td>
                            <td className=""> <a className=''> View </a> </td>
                        </tr>
                        
                    </tbody>
                    </table>
                    </div>
            </div>

        </section>
    );
}

export default DiscussionForum;
