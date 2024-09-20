import ApprovedApplicationsBF from "./ApprovedApplicationsBF";
import ApprovedApplicationsOrdinary from "./ApprovedApplicationsOrdinary";

const AdminApprovedApplications = () => {
    return (
        <section>
            <ApprovedApplicationsOrdinary />
            <ApprovedApplicationsBF />
        </section>
    );
}

export default AdminApprovedApplications;
