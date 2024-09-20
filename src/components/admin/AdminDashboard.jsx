import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser,faMoneyBill} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const AdminDashboard = () => {

    
    const  statsInfo = [
        {
            stats: 707,
            description: "Total Members",
            icon : faUser,
            bg : "bg-info"
        },
        {
            stats: 71,
            description: "Deactivated Member",
            icon : faUser,
            bg : "bg-danger"
        },
        {
            stats: 19,
            description: "Benevolent Unapproved",
            icon : faUser,
            bg : "bg-danger"
        },
        {
            stats: 4,
            description: "Benevolent Rejected",
            icon : faUser,
            bg : "bg-danger"
        },
        {
            stats: 292,
            description: "Ordinary active",
            icon : faUser,
            bg : "bg-success"
        },
        {
            stats: 31,
            description: "Ordinary Inactive",
            icon : faUser,
            bg : "bg-warning"
        },
        {
            stats: 308,
            description: "BF active",
            icon : faUser,
            bg : "bg-success"
        },
        {
            stats: 8,
            description: "BF Inactive",
            icon : faUser,
            bg : "bg-warning"
        },
        {
            stats: 6955100,
            description: "Annual Fee Collected",
            icon : faMoneyBill,
            bg : "bg-primary"
        },
        {
            stats: 93784100,
            description: "Benevolent Fund Collected",
            icon : faMoneyBill,
            bg : "bg-primary"
        },



    ]

    return (
        <section>
            <div className="admin_dashboard_cards mb-5">
                {/* <div className=" col-lg-4 card py-2 rounded-0 d-flex flex-row gap-3 align-items-center">
                <div className={`${bg} py-4 px-4 width_max_content rounded-1`}>
                <FontAwesomeIcon icon={faUser} className="text-white fs-4 py-1 px-1"/>
                </div>
                <div>
                <h2 className="fw-bold" > 707 </h2>
                <span className="fw-semibold "> Total Members </span>
                </div>
                </div> */}
                {
                    statsInfo.map((st => (
                        <div className=" card py-2 px-2 rounded-0 d-flex flex-row gap-3 align-items-center">
                <div className={`${st.bg} py-4 px-4 width_max_content rounded-1`}>
                <FontAwesomeIcon icon={st.icon} className="text-white fs-4 py-1 px-1"/>
                </div>
                <div>
                <h2 className="fw-bold" > {st.stats} </h2>
                <span className="fw-semibold "> {st.description} </span>
                </div>
                </div>
                    )))
                }
            </div>

            <div className="d-block d-md-flex gap-5">
                <div className="card rounded-0 admin_news_cards_container mb-5 ">
                        <header className="card-header py-2 px-2 bg-primary rounded-0 ">
                            <h3 className="text-uppercase text-white fs-4 text-center py-3"> recent news & events </h3>
                        </header>
                        <div className="card-body rounded-0  d-flex flex-column gap-4 overflow-y-scroll py-4">
                        
                            <div className="card rounded-0 shadow-md">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div> 
                            <div className="card rounded-0 shadow-md">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div> 
                            <div className="card rounded-0 shadow-md">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div> 
                            <div className="card rounded-0 shadow-md">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div> 
                            </div>

                        </div>


                        {/* Recent Topics */}
                        <div className="card rounded-0 admin_news_cards_container mb-5 ">
                        <header className="card-header py-2 px-2 bg-primary rounded-0">
                            <h3 className="text-uppercase text-white fs-4 text-center py-3"> recent Topics  </h3>
                        </header>
                        <div className="card-body rounded-0  d-flex flex-column gap-4 overflow-y-scroll py-4">
                        
                            <div className="card rounded-0 shadow-md">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div> 
                            <div className="card rounded-0 shadow-md">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div> 
                            <div className="card rounded-0 shadow-md">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div> 
                            <div className="card rounded-0 shadow-md">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div> 
                            </div>

                        </div>
        
            </div>




        </section>
    );
}

export default AdminDashboard;
