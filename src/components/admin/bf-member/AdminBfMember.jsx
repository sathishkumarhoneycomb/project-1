import InactiveBfMember from "./InactiveBfMember";
import ActiveBfMember from "./ActiveBfMember";


const AdminBfMember = () => {
    return (
        <section>
            <ActiveBfMember />
            <InactiveBfMember />
        </section>
    );
}

export default AdminBfMember;
